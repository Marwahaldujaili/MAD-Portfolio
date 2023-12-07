import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import "./App.scss";


const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      <Nav onPageChange={handlePageChange} />
      <Main page={currentPage} />
    </div>
  );
};

export default App;
