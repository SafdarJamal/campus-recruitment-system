const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const Job = require('../models/Job');

router.get('/', auth, (req, res) => {
  if (req.user.role === 'COMPANY')
    return res.status(401).send('Access denied.');

  Job.find({})
    .then(jobs => res.json(jobs))
    .catch(error => res.json({ message: error.message }));
});

router.get('/company/:id', auth, (req, res) => {
  if (req.user.role !== 'COMPANY')
    return res.status(401).send('Access denied.');

  Job.find({ _companyId: req.params.id })
    .then(jobs => res.json(jobs))
    .catch(error => res.json({ message: error.message }));
});

router.post('/company/:id', auth, (req, res) => {
  if (req.user.role !== 'COMPANY')
    return res.status(401).send('Access denied.');

  const job = new Job({
    _companyId: req.params.id,
    title: req.body.title,
    description: req.body.description
  });

  job
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

router.get('/:id', auth, (req, res) => {
  Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(error => res.json({ message: error.message }));
});

router.delete('/:id', auth, (req, res) => {
  if (req.user.role !== 'STUDENT')
    return res.status(401).send('Access denied.');

  Job.remove({ _id: req.params.id })
    .then(success => res.json(success.deletedCount))
    .catch(error => res.json({ message: error.message }));
});

module.exports = router;
