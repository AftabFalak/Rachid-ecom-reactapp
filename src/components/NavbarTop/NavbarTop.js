/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavbarTop.css";


import { GoGitCompare } from 'react-icons/go';

import {BsFillHeartFill}  from 'react-icons/bs';
import {IoMdArrowDropdown} from 'react-icons/io'


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
                style={{ transform: "rotate(100deg)", color: "gray", marginRight:'10px'}}
              ></i>{" "}
              {"     "}
              Call Us: 123 - 456 - 7890
            </a>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item dropdown mr-3">
            <a
              className="text-dark nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            <GoGitCompare style={{  color: "gray", marginRight: '8px' }}/>{' '}
              Compare
            </a>
          </li>
          <li className="nav-item dropdown mr-3">
            <a
              className="text-dark nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <BsFillHeartFill style={{   color: "gray", marginRight: '8px' }}/>
              Wish List
            </a>
          </li>

          <li className="nav-item dropdown mr-3">
            <a
              className="text-dark nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             
              <FaUserAlt    style={{  color: "gray", marginRight: '8px' }}  />
              My Account {' '}
              <IoMdArrowDropdown style={{   color: "black", marginRight: '8px' }}/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarTop;
