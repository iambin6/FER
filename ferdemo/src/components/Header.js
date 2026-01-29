import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-dark text-white py-3 shadow-sm sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1 className="h3 mb-0">My Website</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
