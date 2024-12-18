const express = require('express');
const router = express.Router();
// const {home, about} = require('../controllers/auth-controller');
const authcontrollers = require('../controllers/auth-controller');

router.route("/").get(authcontrollers.home);
router.route("/about").get(authcontrollers.about);

module.exports = router;