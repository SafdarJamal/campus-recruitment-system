const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const Student = require('../models/Student');

router.get('/', auth, (req, res) => {
  Student.find({})
    .then(students => res.json(students))
    .catch(error => res.json({ message: error.message }));
});

router.get('/:id', auth, (req, res) => {
  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(error => res.json({ message: error.message }));
});

router.delete('/:id', auth, (req, res) => {
  Student.remove({ _id: req.params.id })
    .then(success => res.json(success.deletedCount))
    .catch(error => res.json({ message: error.message }));
});

module.exports = router;
