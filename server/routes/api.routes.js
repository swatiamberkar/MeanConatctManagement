const express = require('express');

const router = express.Router();

router.use('/contact', require('../controllers/contact.controller'))
router.use('/signup', require('../controllers/signup.controller'))

module.exports = router;