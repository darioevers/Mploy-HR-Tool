const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

//get announcements
router.get("/tasks/", taskController.getTasks);

//add new announcement
router.post("/addtask", taskController.addNewTask);

// delete announcement
router.delete("/:id", taskController.deleteTask);

module.exports = router;
