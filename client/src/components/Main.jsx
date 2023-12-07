import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";

const Main = ({ page }) => {
  const pageComponents = {
    home: <Home />,
    about: <About />,
    contact: <Contact />,
    blog: <Blog />,
    projects: <Projects />,
  };

  const selectedPage = pageComponents[page] || <p>Page not found.</p>;

  return <div className="main-content">{selectedPage}</div>;
};

export default Main;
