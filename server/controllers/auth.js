const User = require("../models/employeesModel");
const sendEmail = require("../functions/emailSender");
const crypto = require("crypto");

// login with email and password
const login = async (req, res, next) => {
  const { email, password } = req.body;
console.log(req.body);

  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "Please provide email and password",
    });
  }
  try {
    const user = await User.findOne({"bio.email":email });
    console.log(user);
    if (!user) {
      res.status(400).json({ success: false, error: "Invalid credentials" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(404).json({ success: false, error: "Invalid credentials" });
    }

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// signup or register new user
const register =  async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user=await User.create({
      bio: { firstName, lastName, email, password },
    });
    res.json({message:"Regiter Succed",user});
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
};

// forgot password
const forgotPassword = async (req, res, next) => {
  //check if user exists
  const { email } = req.body;

  try {
    const user = await User.findOne({ "bio.email":email });

    if (!user) {
      return res.status(404).json("No email could not be sent");
    }

    // Reset Token Gen and add to database hashed  version of token
    const resetToken = user.getResetPasswordToken();

    await user.save();

    //  reset url
    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    // HTML Message
    const message = `
      <h1> Reset Password</h1>
      <p>Please Click the link below to Reset your password </p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      sendEmail({
        to: user.bio.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (err) {
      console.log(err);

      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return res.status(500).json("Email could not be sent");
    }
  } catch (err) {
    next(err);
  }
};

// reset password
const resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  console.log(resetPasswordToken);

  try {
    const user = await User.findOne({
    "bio.resetPasswordToken":resetPasswordToken,
    });
    if (!user) {
      return res.status(400).json(" Reset is not Valid ");
    }
    console.log(user);
 
    user.bio.password = req.body.password;
    user.bio.resetPasswordToken = null;
    user.bio.resetPasswordExpire = null;

    await user.save();
    res.status(201).json({ data: "Password reset successfully." });
  } catch (error) {
    next(error);
  }
};

// sending token to register and log in
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token, role: user.role });
};

module.exports = { register, login, forgotPassword, resetpassword };
