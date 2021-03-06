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

      let employee = await EmployeesData.findOne({
        "bio.email": leave.email,
      });
      // employee.leaves.push(leave);
      console.log(employee);
      const type = leave.type;
      console.log(type);
      console.log(leave.leavesApplied);

      if (type === "sick-leave") {
        console.log(leave.leavesApplied);
        employee.takenSickLeave = leave.leavesApplied;
      } else if (type === "holiday") {
        employee.takenHolidays = leave.leavesApplied;
        employee.availableHolidays =
          employee.availableHolidays - leave.leavesApplied;
      } else {
        employee.takenHomeOffice = leave.leavesApplied;
        employee.availableHomeOffice =
          employee.availableHomeOffice - leave.leavesApplied;
      }
      employee.save();

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
  const daysBetween = (one, two) => {
    let date1 = new Date(one);
    let date2 = new Date(two);
    let result = Math.round(Math.abs(+date1 - +date2) / 8.64e7);
    return result;
  };
  const leavesAppliedNum = daysBetween(req.body.dateFrom, req.body.dateTo);

  try {
    const leave = await new LeavesData({
      name: req.body.name,
      email: req.body.email,
      department: req.body.department,
      type: req.body.type,
      dateFrom: req.body.dateFrom,
      dateTo: req.body.dateTo,
      pending: true,
      leavesApplied: leavesAppliedNum,
    });

    leave.save();
    let employee = await EmployeesData.findOne({ "bio.email": req.body.email });
    employee.leaves.push(leave);
    // const type = req.body.type;
    // console.log(req.body);
    // if (type === "sick-leave") {
    //   employee.takenSickLeave = leavesAppliedNum;
    // } else if (type === "holiday") {
    //   employee.takenHolidays = leavesAppliedNum;
    //   employee.availableHolidays =
    //     employee.availableHolidays - leavesAppliedNum;
    // } else {
    //   employee.takenHomeOffice = leavesAppliedNum;
    //   employee.availableHomeOffice =
    //     employee.availableHomeOffice - leavesAppliedNum;
    // }
    // employee.save();

    res
      .status(200)
      .json({ status: "success", message: "added new leave application" });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};

module.exports = leaveController;
