import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Work from "./pages/Work";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
