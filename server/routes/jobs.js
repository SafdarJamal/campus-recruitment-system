const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/', (req, res) => {
  Job.find()
    .then(jobs => res.json(jobs))
    .catch(error => res.json({ message: error }));
});

router.post('/', (req, res) => {
  const job = new Job({
    title: req.body.title,
    description: req.body.description
  });

  job
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

module.exports = router;
