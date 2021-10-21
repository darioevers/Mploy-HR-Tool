const express = require("express");
const { registerValidations } = require("../validators/user-validator");
const validator = require("../middlewares/validatorMiddleware");
// const verificationEmail = require("../controllers/usersControllers");
const {
  register,
  login,
  forgotPassword,
  resetpassword,
} = require("../controllers/auth");
const router = express.Router();

//Registeration route
router.post("/register", registerValidations, validator, register);

//login rout
router.post("/login", login);

// forgot password
router.post("/forgotpassword", forgotPassword);

//reset password Using token
router.put("/passwordreset/:resetToken", resetpassword);

module.exports = router;
