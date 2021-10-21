const express = require("express");
const router = express.Router();
const getPrivateData = require("../controllers/dashboard");
const protect = require("../middlewares/authMiddleware");

router.get("/", protect, getPrivateData);

module.exports = router;
