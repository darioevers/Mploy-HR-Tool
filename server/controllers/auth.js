const User = require("../models/UserModel");
const sendEmail = require("../functions/emailSender");
const crypto = require("crypto");
// signup or register new user
const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    sendToken(user, 201, res);
  } catch (err) {
    res.status(500).json({
      success: false,
      err: err.message,
    });
  }
};

// login with email and password
const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "Please provide email and password",
    });
  }
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(400).json({ success: false, error: "Invalid credentials" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(404).json({ success: false, error: "Invalid credentials" });
    }
    sendToken(user, 200, res);
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};

// forgot password
const forgotPassword = async (req, res, next) => {
  //check if user exists
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

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
      await sendEmail({
        to: user.email,
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

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json(" Reset is not Valid ");
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    res.status(201).json({ data: "Password reset successfully." });
  } catch (error) {
    next(error);
  }
};

// sending token to register and log in
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
module.exports = { register, login, forgotPassword, resetpassword };
