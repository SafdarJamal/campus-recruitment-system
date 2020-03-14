const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Admin = require('../models/Admin');
const Company = require('../models/Company');
const Student = require('../models/Student');

const { ADMIN, COMPANY, STUDENT } = require('../constants/roles');
const { validateSignUp, validateLogIn } = require('../validation');

router.post('/signup/company', async (req, res) => {
  const { error } = validateSignUp(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const isEmailExist = await Company.findOne({ email: req.body.email });
  if (isEmailExist)
    return res.status(400).send({
      message: 'The email address is already in use by another account.'
    });

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const company = new Company({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: '',
    companyEmail: '',
    companyPhone: '',
    email: req.body.email,
    password: hash
  });

  const token = jwt.sign(
    { _id: company._id, role: COMPANY },
    process.env.TOKEN_SECRET
  );

  company
    .save()
    .then(data =>
      res
        .header('Auth-Token', token)
        .status(200)
        .send(data)
    )
    .catch(error => res.status(500).send({ message: error.message }));
});

router.post('/signup/student', async (req, res) => {
  const { error } = validateSignUp(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const isEmailExist = await Student.findOne({ email: req.body.email });
  if (isEmailExist)
    return res.status(400).send({
      message: 'The email address is already in use by another account.'
    });

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const student = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: '',
    email: req.body.email,
    password: hash
  });

  const token = jwt.sign(
    { _id: student._id, role: STUDENT },
    process.env.TOKEN_SECRET
  );

  student
    .save()
    .then(data =>
      res
        .header('Auth-Token', token)
        .status(200)
        .send(data)
    )
    .catch(error => res.status(500).send({ message: error.message }));
});

router.post('/login/admin', async (req, res) => {
  const { error } = validateLogIn(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const user = await Admin.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send({
      message: 'There is no user record corresponding to this identifier.'
    });

  const checkPassword = bcrypt.compareSync(req.body.password, user.password);
  if (!checkPassword)
    return res.status(400).send({ message: 'The password is invalid' });

  const token = jwt.sign(
    { _id: user._id, role: ADMIN },
    process.env.TOKEN_SECRET
  );

  res
    .header('Auth-Token', token)
    .status(200)
    .send(user);
});

router.post('/login/company', async (req, res) => {
  const { error } = validateLogIn(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const user = await Company.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send({
      message: 'There is no user record corresponding to this identifier.'
    });

  const checkPassword = bcrypt.compareSync(req.body.password, user.password);
  if (!checkPassword)
    return res.status(400).send({ message: 'The password is invalid' });

  const token = jwt.sign(
    { _id: user._id, role: COMPANY },
    process.env.TOKEN_SECRET
  );

  res
    .header('Auth-Token', token)
    .status(200)
    .send(user);
});

router.post('/login/student', async (req, res) => {
  const { error } = validateLogIn(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const user = await Student.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send({
      message: 'There is no user record corresponding to this identifier.'
    });

  const checkPassword = bcrypt.compareSync(req.body.password, user.password);
  if (!checkPassword)
    return res.status(400).send({ message: 'The password is invalid' });

  const token = jwt.sign(
    { _id: user._id, role: STUDENT },
    process.env.TOKEN_SECRET
  );

  res
    .header('Auth-Token', token)
    .status(200)
    .send(user);
});

module.exports = router;
