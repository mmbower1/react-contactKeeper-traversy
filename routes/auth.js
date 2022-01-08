const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
//
const User = require("../models/User");
const auth = require("../middleware/authToken");

// @route  GET /auth
// @desc   Get logged in user
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error auth GET");
  }
});

// @route  POST /auth
// @desc   Auth user and get token
// @access Public
router.post(
  "/",
  [
    check("email", "Invalid email").isEmail(),
    check("password", "Invalid password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });

      if (!user) {
        console.log("user ", user);
        return res.status(400).json({ msg: "No user assigned to that email" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("isMatch ", isMatch);
        return res.status(400).json({ msg: "Invalid password" });
      }

      const payload = {
        user: { id: user.id },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error auth POST");
    }
  }
);

module.exports = router;
