import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port  http://localhost:${process.env.PORT}`);
});
