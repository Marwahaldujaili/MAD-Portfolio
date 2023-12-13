import React from "react";
import "../styles/Work.scss";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

function Work() {
  return (
    <div className="work-content">
      <h1>My Work</h1>
      <section className="my-work-grid">
        <div className="card card1">
          <div className="card-text">
            <p>MERN Stack Group-Project - Workplace Social Network</p>
            <div className="card-links">
              <a
                href="https://beyondworkclient.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <LanguageIcon />
              </a>
              <a
                href="https://github.com/Marwahaldujaili/beyondwork"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="card card2">
          <div className="card-text">
            <p>HTML/SCSS Portfolio Website</p>
            <div className="card-links">
              <a
                href="https://madportfolioproject.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <LanguageIcon />
              </a>
              <a
                href="https://github.com/Marwahaldujaili/portfolio-project"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="card card3">
          <div className="card-text">
            <p>React Family Calendar App</p>
            <div className="card-links">
              <a
                href="https://familycalendar-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <LanguageIcon />
              </a>
              <a
                href="https://github.com/Marwahaldujaili/ReactfamilyCalendarApp"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="card card4">
          <div className="card-text">
            <p>Coffee Shop Website</p>
            <div className="card-links">
              <a
                href="https://marwahaldujaili.github.io/CoffeeShop_HTMLSite/"
                target="_blank"
                rel="noreferrer"
              >
                <LanguageIcon />
              </a>
              <a
                href="https://github.com/Marwahaldujaili/CoffeeShop_HTMLSite"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="card card5">
          <div className="card-text">
            <p>Flower shop Group-project</p>
            <div className="card-links">
              <a
                href="https://marwahaldujaili.github.io/FlowerShop-GroupProject/"
                target="_blank"
                rel="noreferrer"
              >
                <LanguageIcon />
              </a>
              <a
                href="https://github.com/Marwahaldujaili/FlowerShop-GroupProject"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
