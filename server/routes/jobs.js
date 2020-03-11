const express = require('express');
const router = express.Router();

const Job = require('../models/Job');

router.get('/', (req, res) => {
  Job.find({})
    .then(jobs => res.json(jobs))
    .catch(error => res.json({ message: error.message }));
});

router.get('/company/:id', (req, res) => {
  Job.find({ _companyId: req.params.id })
    .then(jobs => res.json(jobs))
    .catch(error => res.json({ message: error.message }));
});

router.post('/company/:id', (req, res) => {
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

router.get('/:id', (req, res) => {
  Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(error => res.json({ message: error.message }));
});

router.delete('/:id', (req, res) => {
  Job.remove({ _id: req.params.id })
    .then(success => res.json(success.deletedCount))
    .catch(error => res.json({ message: error.message }));
});

module.exports = router;
