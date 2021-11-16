const TasksData = require("../models/tasksModel");
const taskContoller = {};

// get announcements
taskContoller.getTasks = async (req, res) => {
  try {
    const tasks = await TasksData.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

//add new announcements
taskContoller.addNewTask = async (req, res) => {
  try {
    const task = await new TasksData({
      title: req.body.title,
      dueDate: req.body.dueDate,
      taskTag: req.body.taskTag,
    });

    task.save();
    res.status(200).json({ status: "success", message: "added new task" });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};

//delete announcement
taskContoller.deleteTask = async (req, res) => {
  console.log(req.params.id);
  try {
    await TasksData.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "data deleted!", success: true });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = taskContoller;
