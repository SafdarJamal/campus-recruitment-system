const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization');

const Admin = require('../../models/Admin');
const Company = require('../../models/Company');
const Student = require('../../models/Student');

const { ADMIN, COMPANY, STUDENT } = require('../../constants/roles');

router.get('/', authorization, (req, res) => {
  const { _id, role } = req.user;

  if (role === ADMIN)
    return Admin.findById(_id)
      .then(data => {
        const user = data.toObject();
        delete user.password;

        res.status(200).send(user);
      })
      .catch(error => res.status(400).send({ message: error.message }));

  if (role === COMPANY)
    return Company.findById(_id)
      .then(data => {
        const user = data.toObject();
        delete user.password;

        res.status(200).send(user);
      })
      .catch(error => res.status(400).send({ message: error.message }));

  if (role === STUDENT)
    return Student.findById(_id)
      .then(data => {
        const user = data.toObject();
        delete user.password;

        res.status(200).send(user);
      })
      .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/:id', authorization, (req, res) => {
  Student.findById(req.params.id)
    .then(data => {
      const user = data.toObject();
      delete user.password;

      res.status(200).send(user);
    })
    .catch(error => res.status(400).send({ message: error.message }));
});

router.patch('/', authorization, (req, res) => {
  const { _id, role } = req.user;
  const {
    firstName,
    lastName,
    companyName,
    companyEmail,
    companyPhone,
    phone,
  } = req.body;

  if (role === ADMIN)
    return Admin.updateOne({ _id }, { $set: { firstName, lastName } })
      .then(success => res.status(200).send(success.nModified))
      .catch(error => res.status(400).send({ message: error.message }));

  if (role === COMPANY)
    return Company.updateOne(
      { _id },
      { $set: { firstName, lastName, companyName, companyEmail, companyPhone } }
    )
      .then(success => res.status(200).send(success.nModified))
      .catch(error => res.status(400).send({ message: error.message }));

  if (role === STUDENT)
    return Student.updateOne({ _id }, { $set: { firstName, lastName, phone } })
      .then(success => res.status(200).send(success.nModified))
      .catch(error => res.status(400).send({ message: error.message }));
});

module.exports = router;
