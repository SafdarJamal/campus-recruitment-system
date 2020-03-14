const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const Admin = require('../models/Admin');
const Company = require('../models/Company');
const Student = require('../models/Student');

router.get('/admin/:id', auth, (req, res) => {
  if (req.user.role !== 'ADMIN')
    return res.status(401).send({ message: 'Access denied.' });

  Admin.findById(req.params.id)
    .then(admin => res.status(200).send(admin))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.get('/company/:id', auth, (req, res) => {
  if (req.user.role !== 'COMPANY')
    return res.status(401).send({ message: 'Access denied.' });

  Company.findById(req.params.id)
    .then(company => res.status(200).send(company))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.get('/student/:id', auth, (req, res) => {
  if (req.user.role !== 'STUDENT')
    return res.status(401).send({ message: 'Access denied.' });

  Student.findById(req.params.id)
    .then(student => res.status(200).send(student))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.patch('/admin/:id', auth, (req, res) => {
  if (req.user.role !== 'ADMIN')
    return res.status(401).send({ message: 'Access denied.' });

  const { firstName, lastName } = req.body;

  Admin.updateOne({ _id: req.params.id }, { $set: { firstName, lastName } })
    .then(success => res.status(200).send(success.nModified))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.patch('/company/:id', auth, (req, res) => {
  if (req.user.role !== 'COMPANY')
    return res.status(401).send({ message: 'Access denied.' });

  const {
    firstName,
    lastName,
    companyName,
    companyEmail,
    companyPhone
  } = req.body;

  Company.updateOne(
    { _id: req.params.id },
    { $set: { firstName, lastName, companyName, companyEmail, companyPhone } }
  )
    .then(success => res.status(200).send(success.nModified))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.patch('/student/:id', auth, (req, res) => {
  if (req.user.role !== 'STUDENT')
    return res.status(401).send({ message: 'Access denied.' });

  const { firstName, lastName, phone } = req.body;

  Student.updateOne(
    { _id: req.params.id },
    { $set: { firstName, lastName, phone } }
  )
    .then(success => res.status(200).send(success.nModified))
    .catch(error => res.status(500).send({ message: error.message }));
});

module.exports = router;
