import React from "react";
import "../styles/Home.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home({ onPageChange }) {
  const handleContactClick = () => {
    onPageChange && onPageChange("contact");
  };
  return (
    <div className="home-content">
      <div className="img-container"></div>
      <div className="text-container">
        <p>Hello! I'm</p>
        <ul>
          <li>Marwah Al-Dujaili</li>
          <li>a Web Developer</li>
          <li>an IT Trainer/Teacher</li>
          <li>based in Germany</li>
        </ul>
      </div>
      <div className="icon-container">
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
            href="https://www.youtube.com/marwahaldujaili"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon className="social-icons" />
          </a>
        </div>
      </div>
      <div className="bottom-container">
        <a
          href="https://drive.google.com/uc?id=1ekPMnzxROqzXofMftGSFcNNbFhWL0RWy&export=download"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
        <button onClick={handleContactClick}>Contact me</button>
      </div>
    </div>
  );
}

export default Home;
