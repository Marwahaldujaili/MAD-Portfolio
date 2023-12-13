import React from "react";
import logo from "../media/images/icon-transparent.png";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <div>
        <Link to="/about">
          <PersonPinOutlinedIcon />
          <br />
          About
        </Link>
      </div>
      <div>
        <Link to="/work">
          <DashboardOutlinedIcon />
          <br />
          Work
        </Link>
      </div>
      <div>
        <Link to="/blog">
          <AssistantOutlinedIcon />
          <br />
          Blog
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <AlternateEmailOutlinedIcon />
          <br />
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
