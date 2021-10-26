const UserData = require("../models/UserModel");
const getPrivateData = (req, res, next) => {
  res.status(200).json({
    data: "You are logged in",
  });
};

// new controller for add new admin
// const addAdmin = async(req, res) => {
//   console.log("add admin");

//  const userFind=await  UserData.find({ email: req.body.email })
//     .then((user) => {
//       if (!user) {
//         return res.status(401).json("User not found");
//       }

//       user.role = "admin";
//       user.save();
//       res.status(200).json("Successfull!");
//     })
//     .catch((err) => {
//       console.log("hi" + err);
//       res.status(401).json({ message: err, status: "Not successfull" });
//     });
// };
module.exports = getPrivateData;
