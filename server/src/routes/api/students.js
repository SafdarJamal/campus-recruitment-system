const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization');

const Student = require('../../models/Student');

const { ADMIN, STUDENT } = require('../../constants/roles');

router.get('/', authorization, (req, res) => {
  if (req.user.role === STUDENT)
    return res.status(401).send({ message: 'Access denied.' });

  Student.find({})
    .then(students => res.status(200).send(students))
    .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/:id', authorization, (req, res) => {
  if (req.user.role === STUDENT)
    return res.status(401).send({ message: 'Access denied.' });

  Student.findById(req.params.id)
    .then(student => res.status(200).send(student))
    .catch(error => res.status(400).send({ message: error.message }));
});

router.delete('/:id', authorization, (req, res) => {
  if (req.user.role !== ADMIN)
    return res.status(401).send({ message: 'Access denied.' });

  Student.deleteOne({ _id: req.params.id })
    .then(success => res.status(200).send(success.deletedCount.toString()))
    .catch(error => res.status(400).send({ message: error.message }));
});

module.exports = router;
