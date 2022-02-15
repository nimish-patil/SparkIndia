import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const app = express();
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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// mongodb connection
