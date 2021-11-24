const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/leaveController");
const auth=require("../middlewares/authMiddleware");
//get announcements
router.get("/getLeaves", leaveController.getLeaves);

//add new announcement
router.post("/addleave", leaveController.addLeave);

// delete announcement
router.put("/", leaveController.updateLeave);

module.exports = router;
