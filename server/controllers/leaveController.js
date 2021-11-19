const LeavesData = require("../models/leavesModel");
const EmployeesData = require("../models/employeesModel");
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
      name: req.body.name,
      email: req.body.email,
      department: req.body.department,
      type: req.body.type,
      dateFrom: req.body.dateFrom,
      dateTo: req.body.dateTo,
      pending: true,
    });

    await leave.save();
    const employee = EmployeesData.find({ email: req.body.email });
    employee.leaves = employee.leaves.push(leave._id);
    employee.save();

    // [...employee.leaves, leave._id];
    res
      .status(200)
      .json({ status: "success", message: "added new leave application" });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};

module.exports = leaveController;
