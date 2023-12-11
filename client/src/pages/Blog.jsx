import React, { useState } from "react";
import "../styles/Blog.scss";

function Blog() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNotifyClick = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/blog/notify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      setMessage("You will be notified when the blog is ready!");
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="blog-content">
      <div className="blog-img-container"></div>
      <div className="notify-text">
        <p>
          My Blog is currently under constructions. <br />
          It should be live soon!
        </p>
        <div className="form-div">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleNotifyClick}>Notify Me</button>
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Blog;
