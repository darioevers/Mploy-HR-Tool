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
// const filefilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/pdf"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

const uploads = multer({ storage: storage});
 const uploadMultiple = uploads.fields([{ name: 'file', maxCount: 10 }, { name: 'fileCv', maxCount: 10 },  { name: 'fileDiploma', maxCount: 10 }, { name: 'fileLetter', maxCount: 10 },  { name: 'fileCertificate', maxCount: 10 }])

module.exports = { uploadMultiple };
