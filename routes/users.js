const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//
const User = require("../models/User");
const { check, validationResult } = require("express-validator");

// @route  POST /users
// @desc   Register user
// @access Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Invalid email").isEmail(),
    check("password", "6 or characters required").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt); // assign encryption to pw

      await user.save();

      const payload = {
        user: { id: user.id },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRE,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500);
    }
  }
);

module.exports = router;
