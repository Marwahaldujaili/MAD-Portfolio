import React from "react";
import logo from "../media/images/icon-transparent.png";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

const Nav = ({ onPageChange }) => {
  const handleNavigation = (page) => {
    onPageChange(page);
  };

  return (
    <div className="navbar">
      <button onClick={() => handleNavigation("home")}>
        <img src={logo} alt="Logo" />
      </button>
      <button onClick={() => handleNavigation("about")}>
        <PersonPinOutlinedIcon /> <br /> About
      </button>
      <button onClick={() => handleNavigation("projects")}>
        <DashboardOutlinedIcon />
        <br />
        Projects
      </button>
      <button onClick={() => handleNavigation("blog")}>
        <AssistantOutlinedIcon />
        <br />
        Blog
      </button>
      <button onClick={() => handleNavigation("contact")}><AlternateEmailOutlinedIcon/><br/>Contact</button>
    </div>
  );
};

export default Nav;
