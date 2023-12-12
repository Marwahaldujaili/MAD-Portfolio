import express from "express";
import { contactMe } from "../controllers/contactController.js";

const router = express.Router();

router.post("/new", contactMe);

export default router;
