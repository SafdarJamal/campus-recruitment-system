const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const Company = require('../models/Company');

router.get('/', auth, (req, res) => {
  if (req.user.role === 'COMPANY')
    return res.status(401).send('Access denied.');

  Company.find({})
    .then(companies => res.json(companies))
    .catch(error => res.json({ message: error.message }));
});

router.get('/:id', auth, (req, res) => {
  if (req.user.role === 'COMPANY')
    return res.status(401).send('Access denied.');

  Company.findById(req.params.id)
    .then(company => res.json(company))
    .catch(error => res.json({ message: error.message }));
});

router.delete('/:id', auth, (req, res) => {
  if (req.user.role !== 'ADMIN') return res.status(401).send('Access denied.');

  Company.remove({ _id: req.params.id })
    .then(success => res.json(success.deletedCount))
    .catch(error => res.json({ message: error.message }));
});

module.exports = router;
