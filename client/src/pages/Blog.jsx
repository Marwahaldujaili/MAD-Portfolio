import React, { useState } from "react";
import "../styles/Blog.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Blog() {
  const [email, setEmail] = useState("");

  const handleNotifyClick = async (e) => {
    try {
      e.preventDefault(); // Add this line to prevent default form submission

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
      } else {
        console.log("Success! Blog is ready!");
        setEmail("");

        toast.success("You will be notified when the blog is ready!");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="blog-content">
        <div className="blog-img-container"></div>
        <div className="notify-text">
          <p>
            My Blog is currently under constructions. <br />
            It should be live soon!
          </p>
          <form className="form-div">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" onClick={handleNotifyClick}>
              Notify Me
            </button>
          </form>
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

export default Blog;
