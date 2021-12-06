const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // fs.mkdir("/uploads/", (err) => {
    cb(null, "./server/uploads");
    // });
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const uploads = multer({ storage: storage });
const uploadMultiple = uploads.fields([
  { name: "file", maxCount: 10 },
  { name: "fileCv", maxCount: 10 },
  { name: "fileDiploma", maxCount: 10 },
  { name: "fileLetter", maxCount: 10 },
  { name: "fileCertificate", maxCount: 10 },
]);


module.exports = { uploadMultiple };
