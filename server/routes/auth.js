const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Student = require('../models/Student');

const {
  validateCompanySignUp,
  validateStudentSignUp
} = require('../validation');

router.post('/signup/company', (req, res) => {
  const { error } = validateCompanySignUp(req.body);
  if (error) return res.status(400).send(error.details[0].message);

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
  const { error } = validateStudentSignUp(req.body);
  if (error) return res.status(400).send(error.details[0].message);

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
