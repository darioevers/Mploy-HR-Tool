const express = require("express");
const User = require("../models/userModel");
const { registerValidations } = require("../validators/user-validator");
const validator = require("../middlewares/validatorMiddleware");
const router = express.Router();
//Registeratin route Routes
router.post(
  "/register",
  registerValidations,
  validator,
  async (req, res) => {}
);
module.exports = router;
