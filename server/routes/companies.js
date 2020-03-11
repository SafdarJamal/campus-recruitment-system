const express = require('express');
const router = express.Router();

const Company = require('../models/Company');

router.get('/', (req, res) => {
  Company.find({})
    .then(companies => res.json(companies))
    .catch(error => res.json({ message: error.message }));
});

router.get('/:id', (req, res) => {
  Company.findById(req.params.id)
    .then(company => res.json(company))
    .catch(error => res.json({ message: error.message }));
});

router.delete('/:id', (req, res) => {
  Company.remove({ _id: req.params.id })
    .then(success => res.json(success.deletedCount))
    .catch(error => res.json({ message: error.message }));
});

module.exports = router;
