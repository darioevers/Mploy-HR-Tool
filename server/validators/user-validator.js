const { check } = require("express-validator");

const name = check("name", "Name  Required").not().isEmpty();
const username = check("username", "Username  Required.").not().isEmpty();
const email = check("email", "Please provide a valid email address").isEmail();
const password = check(
  "password",
  "Password required of minimum lenght of 6"
).isLength({ min: 6 });
const registerValidations = [name, username, email, password];
const authenticatValidations = [name, username, email, password];

module.exports = { registerValidations, authenticatValidations };
