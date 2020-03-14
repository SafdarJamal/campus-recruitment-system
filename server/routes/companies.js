const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const Company = require('../models/Company');

router.get('/', auth, (req, res) => {
  if (req.user.role === 'COMPANY')
    return res.status(401).send({ message: 'Access denied.' });

  Company.find({})
    .then(companies => res.status(200).send(companies))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.get('/:id', auth, (req, res) => {
  if (req.user.role === 'COMPANY')
    return res.status(401).send({ message: 'Access denied.' });

  Company.findById(req.params.id)
    .then(company => res.status(200).send(company))
    .catch(error => res.status(500).send({ message: error.message }));
});

router.delete('/:id', auth, (req, res) => {
  if (req.user.role !== 'ADMIN')
    return res.status(401).send({ message: 'Access denied.' });

  Company.remove({ _id: req.params.id })
    .then(success => res.status(200).send(success.deletedCount))
    .catch(error => res.status(500).send({ message: error.message }));
});

module.exports = router;
