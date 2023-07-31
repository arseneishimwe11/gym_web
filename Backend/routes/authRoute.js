const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { body, validationResult } = require('express-validator'); // Import express-validator functions
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const { jwtPrivateKey } = require("../config/default");
const checkLogin = require("../middlewares/checkLogin");

router.get("/protectUser", checkLogin, (req, res) => {
  console.log("User protected!");
  return res.status(200).json({ message: "Protected user endpoint accessed successfully!" });
});

const signupValidationRules = [
  body('names').notEmpty().withMessage('Full name is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('city').notEmpty().withMessage('City is required'),
  body('gender').notEmpty().withMessage('Gender is required'),
  body('age').notEmpty().withMessage('Age is required').isInt().withMessage('Age must be a valid number'),
  body('password').notEmpty().withMessage('Password is required'),
];

router.post("/auth/signup", signupValidationRules, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);
  const { names, phone, city, gender, age, password } = req.body;
  try {
    const savedUser = await User.findOne({ where: { phone: phone } });
    if (savedUser) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      names,
      password: hashedPassword,
      gender,
      phone,
      age,
      city
    });
    await user.save();
    return res.status(200).json({ message: "User saved successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

router.post("/auth/login", async (req, res) => {
  const { phone, password } = req.body;
  if (!phone) {
    return res.status(400).json({ message: "Please add a phone number!" });
  }
  if (!password) {
    return res.status(400).json({ message: "Please add a password!" });
  }
  try {
    const loggedUser = await User.findOne({ phone: phone });
    if (!loggedUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const passCompare = await bcrypt.compare(password, loggedUser.password);
    if (passCompare) {
      const token = jwt.sign({ _id: loggedUser._id, phone: loggedUser.phone }, jwtPrivateKey);
      const { _id, names, phone } = loggedUser;
      return res.json({ token, user: { _id, names, phone } });
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
