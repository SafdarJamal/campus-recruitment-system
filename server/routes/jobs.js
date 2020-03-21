const express = require('express');
const router = express.Router();
const authorization = require('../middleware/authorization');

const Job = require('../models/Job');

const { COMPANY, STUDENT } = require('../constants/roles');

router.get('/', authorization, (req, res) => {
  const { _id, role } = req.user;

  if (role === COMPANY)
    return Job.find({ _companyId: _id })
      .then(jobs => res.status(200).send(jobs))
      .catch(error => res.status(500).send({ message: error.message }));

  Job.find({})
    .then(jobs => res.status(200).send(jobs))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.post('/', authorization, (req, res) => {
  const { _id, role } = req.user;
  const { title, description } = req.body;

  if (role !== COMPANY)
    return res.status(401).send({ message: 'Access denied.' });

  const job = new Job({
    _companyId: _id,
    title,
    description
  });

  job
    .save()
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.get('/:id', authorization, (req, res) => {
  const { _id, role } = req.user;

  if (role === COMPANY)
    return Job.find({ _id: req.params.id, _companyId: _id })
      .then(job => res.status(200).send(job))
      .catch(error => res.status(500).send({ message: error.message }));

  Job.findById(req.params.id)
    .then(job => res.status(200).send(job))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.delete('/:id', authorization, (req, res) => {
  const { _id, role } = req.user;

  if (role === STUDENT)
    return res.status(401).send({ message: 'Access denied.' });

  if (role === COMPANY)
    return Job.remove({ _id: req.params.id, _companyId: _id })
      .then(success => res.status(200).send(success.deletedCount))
      .catch(error => res.status(500).send({ message: error.message }));

  Job.remove({ _id: req.params.id })
    .then(success => res.status(200).send(success.deletedCount))
    .catch(error => res.status(500).send({ message: error.message }));
});

module.exports = router;
