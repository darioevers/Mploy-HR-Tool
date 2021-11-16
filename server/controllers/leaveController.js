const LeavesData = require("../models/leavesModel");
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
      department: req.body.department,
      type: req.body.type,
      dateFrom: req.body.dateFrom,
      dateTo: req.body.dateTo,
      pending: true,
    });

    leave.save();
    res
      .status(200)
      .json({ status: "success", message: "added new leave application" });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};

//reject leave application
leaveController.rejectLeave = async (req, res) => {
  console.log(req.params.id);
  try {
    await LeavesData.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "data deleted!", success: true });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = leaveController;
