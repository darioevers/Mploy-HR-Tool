const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AnnouncementsSchema = Schema({
  title: {
    type: String,
    required: false,
  },
  subtopic: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  poster: {
    type: String,
    required: false,
  },
});

const Announcements = mongoose.model("announcements", AnnouncementsSchema);

module.exports = Announcements;
