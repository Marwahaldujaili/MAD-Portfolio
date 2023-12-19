import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import notifyRoute from "./routes/notifyRoute.js";
import contactMeRoute from "./routes/contactMeRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/blog", notifyRoute);
app.use("/contact", contactMeRoute);

app.get("/test", (req, res) => {
  res.send("Server is running!");
});
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port  http://localhost:${process.env.PORT}`);
});
