import User from "../models/userSchema.js";
import express from "express";
import RegsiterVal from "../middlewares/RegisterValidation.js";
import LoginVal from "../middlewares/LoginValidation.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/auth/register", RegsiterVal, async (req, res) => {
  const IsRegistred = await User.findOne({ Email: req.body.Email });
  if (IsRegistred) {
    return res.status(409).json({ message: "You Are Alreday Registred" });
  }

  const is_Used_UserName = await User.findOne({ Username: req.body.Username });
  if (is_Used_UserName) {
    return res.status(409).json({ message: "This UserName is Used Try Again" });
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.Password, salt);

  const NewUser = new User({
    Email: req.body.Email,
    Username: req.body.Username,
    Password: hash,
  });

  const token = jwt.sign(
    {
      Email: NewUser.Email,
      Username: NewUser.Username,
    },
    process.env.secret,
    {
      expiresIn: "7d",
    }
  );

  const IsCreated = await NewUser.save();
  if (!IsCreated) {
    return res.status(400).json({
      message: "Something Wrong",
    });
  }
  return res.status(201).json({
    message: "User Created",
    token: token,
  });
});

router.post("/auth/login", LoginVal, async (req, res) => {
  const UserMail = await User.findOne({ Email: req.body.Email });
  if (!UserMail) {
    return res.status(404).json({ message: "You Are Not Registred" });
  }
  const isMatch = await bcrypt.compare(req.body.Password, UserMail.Password);
  if (!isMatch) {
    return res.status(401).json({ message: "Wrong Mail Or Password" });
  }
  const token = jwt.sign(
    {
      Email: UserMail.Email,
      Username: UserMail.Username,
    },
    process.env.secret,
    {
      expiresIn: "7d",
    }
  );
  return res.status(200).json({ message: "Logged successfully", token });
});
export default router;
