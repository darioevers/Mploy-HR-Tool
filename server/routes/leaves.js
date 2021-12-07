const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/leaveController");
const auth = require("../middlewares/authMiddleware");

//get leaves
router.get("/getLeaves", leaveController.getLeaves);

//add new leave
router.post("/addleave", leaveController.addLeave);

// update / delete leave
router.put("/", leaveController.updateLeave);

module.exports = router;
