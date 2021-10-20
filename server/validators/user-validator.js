const { check } = require("express-validator");

const username = check("username", "Username  Required.").not().isEmpty();
const email = check("email", "Please provide a valid email address").isEmail();
const password = check(
  "password",
  "Password required of minimum lenght of 6"
).isLength({ min: 6 });
const registerValidations = [username, email, password];

module.exports = { registerValidations };
