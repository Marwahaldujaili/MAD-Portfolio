import React from "react";
import "../styles/Contact.scss";
import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/contact/new`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      toast.success("I've got your message and I will get back to you soon!");
      setEmail("");
      setMessage("");
      setName("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="contact-content">
        <h1>Contact Me</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
        <div className="icon-container">
          <div>
            <a
              href="mailto:marwah@aldujaili.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon className="social-icons" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/marwahaldujaili/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="social-icons" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/marwahaldujaili"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="social-icons" />
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/@marwahaldujaili"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="social-icons" />
            </a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}

export default Contact;
