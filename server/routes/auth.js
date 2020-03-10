const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Student = require('../models/Student');

router.post('/signup/company', (req, res) => {
  const company = new Company({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    companyEmail: req.body.companyEmail,
    companyPhone: req.body.companyPhone,
    email: req.body.email,
    password: req.body.password
  });

  company
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

router.post('/signup/student', (req, res) => {
  const student = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password
  });

  student
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

router.post('/login', (req, res) => {
  res.send('LogIn');
});

module.exports = router;
