import EmailsToNotify from "../models/EmailsToNotify.js";
import sendNotificationEmail from "../middleware/mailer.js";

export const saveEmailToNotify = async (req, res) => {
  const { email } = req.body;

  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send("Invalid email format");
    }
    const existingEmail = await EmailsToNotify.findOne({ email });
    if (existingEmail) {
      return res.status(400).send("We already have your email");
    }
    const newEmail = new EmailsToNotify({ email });
    await newEmail.save();
    await sendNotificationEmail(email);

    res.status(200).send("Subscription successful!");
  } catch (error) {
    console.error("Error subscribing:", error);
    res.status(500).send("Internal Server Error");
  }
};
