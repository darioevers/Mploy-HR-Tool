const AnnouncementsData = require("../models/announcementsModel");
const announcementContoller = {};

// get announcements
announcementContoller.getAnnouncements = async (req, res) => {
  try {
    const announcements = await AnnouncementsData.find();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(error.status).json({
      message: error.message,
    });
  }
};

//add new announcements
announcementContoller.addNewAnnouncement = async (req, res) => {
  try {
    const announcement = await new AnnouncementsData({
      date: req.body.date,
      time: req.body.time,
      title: req.body.title,
      subtopic: req.body.subtopic,
      message: req.body.message,
      poster: req.body.poster,
    });

    announcement.save();
    res
      .status(200)
      .json({ status: "success", message: "added new announcment" });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};

//delete announcement
announcementContoller.deleteAnnouncement = async (req, res) => {
  console.log(req.params.id);
  try {
    await AnnouncementsData.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "data deleted!", success: true });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = announcementContoller;
