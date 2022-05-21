/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavbarTop.css";


const NavbarTop = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light shadow">
      <a className="navbar-brand d-lg-none" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggle"
        aria-controls="navbarToggle"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarToggle"
      >
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="text-dark nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Welcome to Our store Multikart
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="text-dark nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="fa fa-phone"
                style={{ transform: "rotate(100deg)", color: "#C30F54" }}
              ></i>{" "}
              {"     "}
              Call Us: 123 - 456 - 7890
            </a>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="text-dark nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="fa fa-phone"
                style={{ transform: "rotate(100deg)", color: "#C30F54" }}
              ></i>
              Compare
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="text-dark nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="fa fa-phone"
                style={{ transform: "rotate(100deg)", color: "#C30F54" }}
              ></i>
              Wish List
            </a>
          </li>


          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>



        </ul>
      </div>
    </nav>
  );
};

export default NavbarTop;
