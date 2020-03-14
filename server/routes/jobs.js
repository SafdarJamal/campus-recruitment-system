const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const Job = require('../models/Job');

const { ADMIN, COMPANY } = require('../constants/roles');

router.get('/', auth, (req, res) => {
  if (req.user.role === COMPANY)
    return res.status(401).send({ message: 'Access denied.' });

  Job.find({})
    .then(jobs => res.status(200).send(jobs))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.get('/company/:id', auth, (req, res) => {
  if (req.user.role !== COMPANY)
    return res.status(401).send({ message: 'Access denied.' });

  Job.find({ _companyId: req.params.id })
    .then(jobs => res.status(200).send(jobs))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.post('/company/:id', auth, (req, res) => {
  if (req.user.role !== COMPANY)
    return res.status(401).send({ message: 'Access denied.' });

  const job = new Job({
    _companyId: req.params.id,
    title: req.body.title,
    description: req.body.description
  });

  job
    .save()
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.delete('/company/:id', auth, (req, res) => {
  if (req.user.role !== COMPANY)
    return res.status(401).send({ message: 'Access denied.' });

  Job.remove({ _id: req.params.id })
    .then(success => res.status(200).send(success.deletedCount))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.get('/:id', auth, (req, res) => {
  if (req.user.role === COMPANY)
    return res.status(401).send({ message: 'Access denied.' });

  Job.findById(req.params.id)
    .then(job => res.status(200).send(job))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.delete('/:id', auth, (req, res) => {
  if (req.user.role !== ADMIN)
    return res.status(401).send({ message: 'Access denied.' });

  Job.remove({ _id: req.params.id })
    .then(success => res.status(200).send(success.deletedCount))
    .catch(error => res.status(500).send({ message: error.message }));
});

module.exports = router;
