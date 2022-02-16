import User from "../models/userModal.js";
import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

router.post("/", async (req, res) => {
  console.log(req.body);
  const user = new User({
    uuid: uuidv4(),
    username: req.body.username,
    email: req.body.email,
    age: req.body.age,
    phone: req.body.phone,
    password: req.body.password,
  });
  console.log(user);
  const response = await user.save();
  return res.json({
    uid: `${response.uuid}`,
  });
});
export default router;
