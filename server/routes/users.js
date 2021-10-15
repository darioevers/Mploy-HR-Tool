const express = require("express");
const { registerValidations } = require("../validators/user-validator");
const validator = require("../middlewares/validatorMiddleware");
const verificationEmail = require("../controllers/usersControllers");

const router = express.Router();

//Registeration route Routes
router.post("/register", registerValidations, validator, verificationEmail);
module.exports = router;
