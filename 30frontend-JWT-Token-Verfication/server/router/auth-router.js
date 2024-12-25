const express = require('express');
const router = express.Router();
// const {home, about} = require('../controllers/auth-controller');
const authcontrollers = require('../controllers/auth-controller');
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/authMiddleware");

router.route("/").get(authcontrollers.home);
router.route("/about").get(authcontrollers.about);
router.route("/register").post( validate(signupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;