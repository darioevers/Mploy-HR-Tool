const { hash, compare } = require("bcryptjs");
const mongoose = require("mongoose");
const randomBytes = require("crypto");
const sign = require("jsonwebtoken");
const pick = require("lodash");
const Schema = mongoose.Schema;
const UserSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verficationCode: {
      type: String,
      required: false,
    },
    resetPasswordToken: {
      type: String,
      required: false,
    },
    resetPasswordExpiresIn: {
      type: Date,
      required: false,
    },
  },
  { timestamp: true }
);

// using a hook inside the function to cash
UserSchema.pre("save", async function (next) {
  let user = this;
  if (!user.isModified("password")) return next();
  user.password = await hash(user.password, 10);
  next();
});
// methods compare passwords
UserSchema.methods.comparePassword = async function (password) {
  return await compare(password, this.password);
};
// jwt
UserSchema.methods.generateJWT = async function () {
  let payload = {
    username: this.username,
    email: this.email,
    name: this.name,
    id: this._id,
  };
  return await sign(payload, process.env.APP_SECRET, { expireIn: "1 Day" });
};
// send modify password for one hour
UserSchema.methods.generatePasswordReset = function () {
  // user has to modify thier password in one hour otherwise the link will be expired
  this.resetPasswordExpiresIn = Date.now + 36000000;

  this.resetPasswordToken = randomBytes(20).toString("hex");
};

// Pick Creates an object composed of the picked object properties. here we just pick some of the values from the obj
UserSchema.methods.getUserInfo = function () {
  return pick(this, ["_id", "username", "email", "name"]);
};

const User = mongoose.model("users", UserSchema);
module.exports = User;
