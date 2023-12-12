import Contact from "../models/Contact.js";

export const contactMe = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });
    await newContact.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res
      .status(500)
      .json({ error: "An error occurred. Please try again later." });
  }
};
