const express = require("express");
const router = express.Router();
const { getPrivateData, addAdmin } = require("../controllers/dashboard");

const auth = require("../middlewares/authMiddleware");


router.get("/", auth, getPrivateData);
router.patch("/addAdmin", addAdmin);

module.exports = router;
