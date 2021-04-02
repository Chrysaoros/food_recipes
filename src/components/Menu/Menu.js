import React from "react";

import SearchBar from "../SearchBar";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <SearchBar />
      <nav className="nav-links">
        <a href="/">Log In</a>
        <a href="/my-meals">My Meals</a>
        <a href="/">Home</a>
        <a href="/#about">About Us</a>
        <a href="/#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Menu;
