/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// import { NavLink } from "react-router-dom";

import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <h1 className="navbar-brand">Get Inspiration</h1>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link text-warning" href="#">
            Look A <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Look B
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Look C
          </a>
        </li>
      </ul>
    </div>
  </nav>

  );
};

export default Navbar;
