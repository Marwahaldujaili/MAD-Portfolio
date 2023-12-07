import React from "react";
import "./styles/Home.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
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
          <LinkedInIcon />
        </div>
        <div>
          <GitHubIcon />
        </div>
        <div>
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
}

export default Home;
