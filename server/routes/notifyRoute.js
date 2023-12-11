import express from "express";
import { saveEmailToNotify } from "../controllers/saveEmailToNotify.js";

const router = express.Router();

router.post("/notify", saveEmailToNotify);

export default router;
