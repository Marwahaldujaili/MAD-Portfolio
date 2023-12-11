import nodemailer from "nodemailer";

const sendNotificationEmail = async (recipientEmail) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "aldujailimarwa@gmail.com",
        pass: "fnpx ktog eonk xhrq",
      },
    });

    await transporter.sendMail({
      from: "marwah@aldujaili.com",
      to: recipientEmail,
      subject: "Notification from Your Blog",
      text: "Thank you for subscribing. You will be notified when the blog is ready!",
    });

    console.log(`Email sent to ${recipientEmail}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendNotificationEmail;