const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // fs.mkdir("/uploads/", (err) => {
      cb(null, "./server/uploads");
    // });
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + file.originalname
    );
  },
});
const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploads = multer({ storage: storage, fileFilter: filefilter });

module.exports = { uploads };
