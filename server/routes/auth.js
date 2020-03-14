const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Admin = require('../models/Admin');
const Company = require('../models/Company');
const Student = require('../models/Student');

const { ADMIN, COMPANY, STUDENT } = require('../constants/roles');
const { validateSignUp, validateLogIn } = require('../validation');

router.post('/signup/:role', async (req, res) => {
  const { role } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const { error } = validateSignUp(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const isEmailExistInAdmins = await Admin.findOne({ email });
  const isEmailExistInCompanies = await Company.findOne({ email });
  const isEmailExistInStudents = await Student.findOne({ email });

  if (isEmailExistInAdmins || isEmailExistInCompanies || isEmailExistInStudents)
    return res.status(400).send({
      message: 'The email address is already in use by another account.'
    });

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  if (role === COMPANY) {
    const company = new Company({
      firstName,
      lastName,
      companyName: '',
      companyEmail: '',
      companyPhone: '',
      email,
      password: hash,
      role
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
  } else if (role === STUDENT) {
    const student = new Student({
      firstName,
      lastName,
      phone: '',
      email: email,
      password: hash,
      role
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
  }
});

router.post('/login/:role', async (req, res) => {
  const { role } = req.params;
  const { email, password } = req.body;

  const { error } = validateLogIn(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  if (role === ADMIN) {
    const user = await Admin.findOne({ email });

    if (!user)
      return res.status(400).send({
        message: 'There is no user record corresponding to this identifier.'
      });

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword)
      return res.status(400).send({ message: 'The password is invalid.' });

    const token = jwt.sign(
      { _id: user._id, role: ADMIN },
      process.env.TOKEN_SECRET
    );

    res
      .header('Auth-Token', token)
      .status(200)
      .send(user);
  } else if (role === COMPANY) {
    const user = await Company.findOne({ email });

    if (!user)
      return res.status(400).send({
        message: 'There is no user record corresponding to this identifier.'
      });

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword)
      return res.status(400).send({ message: 'The password is invalid.' });

    const token = jwt.sign(
      { _id: user._id, role: COMPANY },
      process.env.TOKEN_SECRET
    );

    res
      .header('Auth-Token', token)
      .status(200)
      .send(user);
  } else if (role === STUDENT) {
    const user = await Student.findOne({ email });

    if (!user)
      return res.status(400).send({
        message: 'There is no user record corresponding to this identifier.'
      });

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword)
      return res.status(400).send({ message: 'The password is invalid.' });

    const token = jwt.sign(
      { _id: user._id, role: STUDENT },
      process.env.TOKEN_SECRET
    );

    res
      .header('Auth-Token', token)
      .status(200)
      .send(user);
  }
});

module.exports = router;
