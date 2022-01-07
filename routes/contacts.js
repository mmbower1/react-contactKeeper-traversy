const express = require("express");
const router = express.Router();

// @route  GET /contacts
// @desc   Get all users contacts
// @access Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route  POST /contacts
// @desc   Add new contact
// @access Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route  PUT /contacts/:id
// @desc   Update contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route  DELETE /contacts/:id
// @desc   Auth user and get token
// @access Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
