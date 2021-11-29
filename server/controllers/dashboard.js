const UserData = require("../models/employeesModel");
const getPrivateData = (req, res) => {
  res.status(200).json({
    message: "You are logged in",
    user:req.user 
  });
  // console.log("req"+req.user)
};

//   console.log("add admin");
const addAdmin = async (req, res) => {
  await UserData.findOneAndUpdate(
    { email: req.body.newAdminEmail },
    { $set: { role: "admin" } },
    { new: true },
    (err, doc) => {
      if (err) {
        res.status(401).json({ message: err, status: "Not successfull" });
      }
      res.send({ doc, message: "successfull" });
    }
  );
};
module.exports = { getPrivateData, addAdmin };
