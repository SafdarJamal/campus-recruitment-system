const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', (req, res) => {
  Student.find({})
    .then(students => res.json(students))
    .catch(error => res.json({ message: error.message }));
});

router.get('/:id', (req, res) => {
  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(error => res.json({ message: error.message }));
});

router.patch('/:id', (req, res) => {
  Student.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(success => res.json(success.nModified))
    .catch(error => res.json({ message: error.message }));
});

router.delete('/:id', (req, res) => {
  Student.remove({ _id: req.params.id })
    .then(success => res.json(success.deletedCount))
    .catch(error => res.json({ message: error.message }));
});

module.exports = router;
