import User from "../models/userModal";
import express from "express";
const router = express.Router();
import { uuid } from "uuid";

router.post("/", (req, res) => {
  const user = new User({
    uuid: uuid(),
    username: req.User.username,
    email: req.User.email,
    age: req.User.age,
    phone: req.User.phone,
    password: req.User.password,
  });
  console.log(user);
  const response = await user.save();
  return res.json({
    uid: `${response.uuid}`,
  });
});
module.exports = router;
