const express = require("express");
const router = express.Router();

// @route  POST /users
// @desc   Register user
// @access Public
router.post("/", (req, res) => {
  res.send("Registered");
});

module.exports = router;
