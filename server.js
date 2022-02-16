import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import Userpostroute from "./userProfile/post.js";
import Usergetroute from "./userProfile/get.js";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 5000 || process.env.PORT;
function connectDB() {
  //Data base connection
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const connection = mongoose.connection;
  mongoose.connection
    .once("open", () => {
      console.log("db connected.");
    })
    .on("error", (err) => {
      console.error("Error : " + err);
    });
}
connectDB();
app.use("/api", Userpostroute);
app.use("/api", Usergetroute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// mongodb connection
