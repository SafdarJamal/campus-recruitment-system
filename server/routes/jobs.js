const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('Jobs'));
router.get('/1', (req, res) => res.send(' Specific Job'));

module.exports = router;
