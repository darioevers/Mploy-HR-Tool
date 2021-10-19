const User = require("../models/userModel");

const { randomBytes } = require("crypto");

const verificationEmail = async (req, res) => {
  let { username, email } = req.body;
  // check if the username and email is taken
  let user = await User.findOne({ username });
  if (user) {
    return res.status(400).json({
      message: "Username is already taken.",
    });
  }
  // if the user exist with this email
  user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({
      message: "Email is already registered.",
    });
  }
  // once we checked then new user added
  user = new User({
    ...req.body,
  });
  await user.save();

  // send user a link with verification link
};

module.exports = verificationEmail;
