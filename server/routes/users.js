const express = require("express");
const User = require("../models/userModel");
const { registerValidations } = require("../validators/user-validator");
const validator = require("../middlewares/validatorMiddleware");
const randomBytes = require("crypto");
const sendMail = require("../functions/emailSender");

const router = express.Router();

//Registeratin route Routes
router.post("/register", registerValidations, validator, async (req, res) => {
  let { username, email } = req.body;
  // check if the username and email is taken
  let user = await User.findOne({ username });
  if (user) {
    res.status(400).json({
      success: false,
      message: "Username is already taken.",
    });
  }
  // if the user exist with that email
  user = await User.findOne({ email });
  if (user) {
    res.status(400).json({
      success: false,
      message: "Email is already registered.",
    });
  }
  user = new User({
    ...req.body,
    verficationCode: randomBytes(20).toString("hex"),
  });
  await user.save();
  // send user a link with verification link
  let html = `
  <h1>Hello, ${user.username}</h1>
  <p>Please Click the folowing link to verify our account</p>
  <a href="users/verify-now/${user.verficationCode}">Verify Now</a>
 `;
  sendMail(user.email, "Verify Account", "Please verify your account");
  return res.status(201).json({
    success: true,
    message: " your account is created please verify your Email Address",
  });
});
module.exports = router;
