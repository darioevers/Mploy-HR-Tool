const { check } = require("express-validator");

const firstName = check("bio.firstName", "First Name  Required.").not().isEmpty();
const lastName = check("bio.lastName", "Last Name  Required.").not().isEmpty();

const email = check("bio.email", "Please provide a valid email address").isEmail();
const password = check(
  "bio.password",
  "Password required of minimum lenght of 6"
).isLength({ min: 6 });
const registerValidations = [firstName,lastName, email, password];

module.exports = { registerValidations };
