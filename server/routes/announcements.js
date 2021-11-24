const express = require("express");
const router = express.Router();
const announcementController = require("../controllers/announcementController");
const auth=require("../middlewares/authMiddleware");
//get announcements
router.get("/announcements/", announcementController.getAnnouncements);

//add new announcement
router.post("/addannouncement", announcementController.addNewAnnouncement);

// delete announcement
router.delete("/:id", announcementController.deleteAnnouncement);

module.exports = router;
