// check for jwt in headers

const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const protect = async (req, res, next) => {
  let token;
  // adding bearer infront of our token to show it is bearer token/header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  // Bearer jgfd5488784d4d4d445de888s5

  if (!token) {
    return res.status(401).json("Not authorized to access this rout");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json("No response found with this id");
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json("Not authorized to access this rout ");
  }
};

module.exports = protect;
