const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Admin = require('../models/Admin');
const Company = require('../models/Company');
const Student = require('../models/Student');

const {
  validateCompanySignUp,
  validateStudentSignUp,
  validateLogIn
} = require('../validation');

router.post('/signup/company', async (req, res) => {
  const { error } = validateCompanySignUp(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await Company.findOne({ email: req.body.email });
  if (emailExist)
    return res
      .status(400)
      .send('The email address is already in use by another account.');

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const company = new Company({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    companyEmail: req.body.companyEmail,
    companyPhone: req.body.companyPhone,
    email: req.body.email,
    password: hash
  });

  company
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

router.post('/signup/student', async (req, res) => {
  const { error } = validateStudentSignUp(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await Student.findOne({ email: req.body.email });
  if (emailExist)
    return res
      .status(400)
      .send('The email address is already in use by another account.');

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const student = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    password: hash
  });

  student
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error.message }));
});

router.post('/login/admin', async (req, res) => {
  const { error } = validateLogIn(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await Admin.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(400)
      .send('There is no user record corresponding to this identifier.');

  const checkPassword = bcrypt.compareSync(req.body.password, user.password);
  if (!checkPassword) return res.status(400).send('The password is invalid');

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(user);
});

router.post('/login/company', async (req, res) => {
  const { error } = validateLogIn(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await Company.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(400)
      .send('There is no user record corresponding to this identifier.');

  const checkPassword = bcrypt.compareSync(req.body.password, user.password);
  if (!checkPassword) return res.status(400).send('The password is invalid');

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(user);
});

router.post('/login/student', async (req, res) => {
  const { error } = validateLogIn(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await Student.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(400)
      .send('There is no user record corresponding to this identifier.');

  const checkPassword = bcrypt.compareSync(req.body.password, user.password);
  if (!checkPassword) return res.status(400).send('The password is invalid');

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(user);
});

module.exports = router;
