const User = require("../models/userModel");

const { randomBytes } = require("crypto");

const sendMail = require("../functions/emailSender");

const verificationEmail = async (req, res) => {
  try {
    let { username, email } = req.body;
    // check if the username and email is taken
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Username is already taken.",
      });
    }
    // if the user exist with that email
    user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email is already registered.",
      });
    }
    // once we checked then new user generated
    user = new User({
      ...req.body,
      verficationCode: randomBytes(20).toString("hex"),
    });
    await user.save();
    //   // send user a link with verification link
    let html = `
        
        <h1>Hello, ${user.username}</h1>
        <p>Please Click the following link to verify your account</p>
        <a href="/users/verify-now/${user.verficationCode}">Verify Now</a>
        
       `;
    sendMail(user.email, "Verify Account", "Please verify your account", html);
    return res.status(201).json({
      success: true,
      message: "yay! your account is created please verify your Email Address",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error Occoured",
    });
  }
};

module.exports = verificationEmail;
