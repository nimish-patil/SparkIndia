import mongoose from "mongoose";

const userConnectionSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  age: { type: String, required: false },
  gender: { type: String, required: false },
});

const User = mongoose.model("User", userConnectionSchema);
module.exports = User;
