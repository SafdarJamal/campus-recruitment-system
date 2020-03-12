const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const Admin = require('../models/Admin');
const Company = require('../models/Company');
const Student = require('../models/Student');

router.get('/admin/:id', auth, (req, res) => {
  if (req.user.role !== 'ADMIN') return res.status(401).send('Access denied.');

  Admin.findById(req.params.id)
    .then(admin => res.json(admin))
    .catch(error => res.json({ message: error.message }));
});

router.get('/company/:id', auth, (req, res) => {
  if (req.user.role !== 'COMPANY')
    return res.status(401).send('Access denied.');

  Company.findById(req.params.id)
    .then(company => res.json(company))
    .catch(error => res.json({ message: error.message }));
});

router.get('/student/:id', auth, (req, res) => {
  if (req.user.role !== 'STUDENT')
    return res.status(401).send('Access denied.');

  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(error => res.json({ message: error.message }));
});

router.patch('/admin/:id', auth, (req, res) => {
  if (req.user.role !== 'ADMIN') return res.status(401).send('Access denied.');

  Admin.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(success => res.json(success.nModified))
    .catch(error => res.json({ message: error.message }));
});

router.patch('/company/:id', auth, (req, res) => {
  if (req.user.role !== 'COMPANY')
    return res.status(401).send('Access denied.');

  Company.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(success => res.json(success.nModified))
    .catch(error => res.json({ message: error.message }));
});

router.patch('/student/:id', auth, (req, res) => {
  if (req.user.role !== 'STUDENT')
    return res.status(401).send('Access denied.');

  Student.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(success => res.json(success.nModified))
    .catch(error => res.json({ message: error.message }));
});

module.exports = router;
