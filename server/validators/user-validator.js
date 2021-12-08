const { check } = require("express-validator");

const firstName = check("firstName", "First Name  Required.").not().isEmpty();
const lastName = check("lastName", "Last Name  Required.").not().isEmpty();

const email = check("email", "Please provide a valid email address").isEmail();
const password = check(
  "password",
  "Password required of minimum lenght of 6"
).isLength({ min: 6 });
const registerValidations = [firstName,lastName, email, password];

module.exports = { registerValidations };
