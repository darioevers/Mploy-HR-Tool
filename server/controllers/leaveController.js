const LeavesData = require("../models/leavesModel");
const EmployeesData = require("../models/employeesModel");
const mongoose = require("mongoose");
const { log } = require("npmlog");
const leaveController = {};

// get leave applications
leaveController.getLeaves = async (req, res) => {
  try {
    const leaves = await LeavesData.find();
    res.status(200).json(leaves);
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

//updating leave status / delete
leaveController.updateLeave = async (req, res) => {
  try {
    if (req.body.approved) {
      const leave = await LeavesData.findById(req.body.id);
      leave.pending = false;
      leave.save();
      res.json({ success: true, message: "leave marked as approved" });
    } else if (!req.body.approved) {
      await LeavesData.findByIdAndDelete(req.body.id);
      res.json({
        success: true,
        message: "leave rejected / deleted",
      });
    }
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

//add new leave application
leaveController.addLeave = async (req, res) => {
  try {
    const leave = await new LeavesData({
      // _id: new mongoose.Types.Schema.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      department: req.body.department,
      type: req.body.type,
      dateFrom: req.body.dateFrom,
      dateTo: req.body.dateTo,
      pending: true,
    });

    leave.save();
    let employee = await EmployeesData.findOne({ "bio.email": req.body.email });
    employee.leaves.push(leave);
    employee.save();

    // await EmployeesData.find({ "bio.email": req.body.email })
    //   .then((employee) => {
    //     if (employee) {
    //       console.log(employee);
    //       employee.leaves?.push(leave);
    //       employee.save();
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // employee.leaves.push(leave);

    res
      .status(200)
      .json({ status: "success", message: "added new leave application" });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};

module.exports = leaveController;
