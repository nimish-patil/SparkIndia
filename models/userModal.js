import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userConnectionSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: String, required: false },
    gender: { type: String, required: false },
    uuid: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userConnectionSchema);
export default User;
