import { config } from "dotenv";
config.apply({ path: "./.env" });
import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
console.log(process.env.MONGO_URI);
// mongodb connection
// const connection = mongoose.createConnection(process.env.DB_URI, {});
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });
