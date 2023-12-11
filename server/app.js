import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import notifyRoute from "./routes/notifyRoute.js";

dotenv.config();

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use("/blog", notifyRoute);

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port  http://localhost:${process.env.PORT}`);
});
