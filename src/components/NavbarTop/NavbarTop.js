/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavbarTop.css";
import navbarLogo from "../../assets/images/navbarLogo.png";

import { GoGitCompare } from 'react-icons/go';

import {BsFillHeartFill}  from 'react-icons/bs';

import   {FaUserAlt} from'react-icons/fa'

const NavbarTop = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-light">
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
            <GoGitCompare/>{' '}
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
             <BsFillHeartFill/>
              Wish List
            </a>
          </li>

          <li className="nav-item dropdown dropdown-toggle">
            <a
              className="text-dark nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             
              <FaUserAlt/>
              My Account 
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarTop;
