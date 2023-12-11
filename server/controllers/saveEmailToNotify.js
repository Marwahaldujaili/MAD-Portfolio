import EmailsToNotify from "../models/EmailsToNotify.js";
import sendNotificationEmail from "../middleware/mailer.js";

export const saveEmailToNotify = async (req, res) => {
  const { email } = req.body;

  try {
    const newEmail = new EmailsToNotify({ email });
    await newEmail.save();
    await sendNotificationEmail(email);

    res.status(200).send("Subscription successful!");
  } catch (error) {
    console.error("Error subscribing:", error);
    res.status(500).send("Internal Server Error");
  }
};
