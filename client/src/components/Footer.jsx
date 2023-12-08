import React from "react";
import "./styles/Footer.scss";

function Footer() {
  return (
    <div>
      <div>
        <i className="fas fa-chevron-right"></i>
      </div>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/marwahaldujaili/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin">linked in</i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Marwahaldujaili"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@marwaaldujaili"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/Marwahaldujaili"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-codepen"></i>
          </a>
        </li>
      </ul>
      <div>
        <i className="fas fa-chevron-left"></i>
      </div>
    </div>
  );
}

export default Footer;
