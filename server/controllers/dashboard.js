const UserData = require("../models/UserModel");
const getPrivateData = (req, res, next) => {
  res.status(200).json({
    data: "You are logged in",
  });
};

//   console.log("add admin");
const addAdmin = async (req, res) => {
  await UserData.findOneAndUpdate(
    { email: req.body.newAdminEmail },
    { $set: { role: "admin" } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("hi" + err);
        res.status(401).json({ message: err, status: "Not successfull" });
      }
      res.send({ doc, message: "successfull" });
    }
  );
};
module.exports = { getPrivateData, addAdmin };
