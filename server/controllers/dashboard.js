const UserData = require("../models/employeesModel");

const getPrivateData = (req, res) => {
  console.log("req" + req.user);
  res.status(200).json({
    message: "You are logged in",
    user: req.user,
  });
  // console.log("req"+req.user)
};

//   console.log("add admin");
const addAdmin = async (req, res) => {
 
try{
  await UserData.findOneAndUpdate(
    { "bio.email": req.body.newAdminEmail },
    { $set: { "bio.role": "admin" } })
    res.send({  message: "successfull" })
}catch (error) {
  res.status(error.status).json({
    message: error.message,
  });
}
   
};
module.exports = { getPrivateData, addAdmin };
