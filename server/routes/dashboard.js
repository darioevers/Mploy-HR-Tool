const express = require("express");
const router = express.Router();
const { getPrivateData, addAdmin } = require("../controllers/dashboard");
const auth=require("../middlewares/authMiddleware");

router.get("/", getPrivateData);
router.patch("/addAdmin", addAdmin);

module.exports = router;
