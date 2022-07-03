/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./NavbarBottom.css";
import { Link } from "react-router-dom";

import { FaSignInAlt } from "react-icons/fa";

import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";

import { MainLogo } from "../../assets/svgs/main-logo";
import MobileMenuDrawer from "../MobileMenuDrawer";
// import Cart from "../../assets/svgs/cart";

function NavbarBottom(props) {
  const [open, setOpen] = useState(false);
  const toggleOpenDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg d-none d-lg-block border-bottom p-0 custonNavbar">
        <nav
          className="collapse navbar-collapse justify-content-between"
          id="navbarToggle"
        >
          <div className="NavbarLinks">
            <span className="NavbarLinks-Item">
              <Link className="nav-link NavLink" to="/">
                Home
              </Link>
            </span>
            <span className="NavbarLinks-Item">
              <Link className="nav-link NavLink" to="/shop">
                Shop
              </Link>
            </span>
            <span className="NavbarLinks-Item">
              <Link className="nav-link NavLink" to="/store-list">
                Store List
              </Link>
            </span>
            <span className="NavbarLinks-Item">
              <Link className="nav-link NavLink" to="/get-inspiration">
                Get inspiration
              </Link>
            </span>
          </div>

          <div>
            <MainLogo />
          </div>

          <ul className="navbar-nav">
            <li className="nav-item signInLink">
              <a className="nav-link text-dark" href="#">
                <AiOutlineSearch className="signInLogo" />
                <p className="signInText">SEARCH</p>
              </a>
            </li>
            <li className="nav-item signInLink">
              <a className="nav-link text-dark" href="#">
                <AiOutlineHeart className="signInLogo" />
                <p className="signInText">Wishlist</p>
              </a>
            </li>
            <li className="nav-item signInLink" onClick={props.toggleDrawer}>
              <a className="nav-link text-dark" href="#">
                <FaSignInAlt className="signInLogo" />
                <p className="signInText">SING IN/UP</p>
              </a>
            </li>
            <li
              className="nav-item signInLink"
              onClick={props.toggleDrawerCart}
            >
              <a className="nav-link text-dark" href="#">
                <AiOutlineShoppingCart className="signInLogo" />

                <div className="CartBadge">
                  <span>4</span>
                </div>
                <p className="signInText">$325.00</p>
              </a>
            </li>
          </ul>
        </nav>
      </nav>

      <div className="d-block d-lg-none">
        <div className="mobile-nav ">
          <div className="line-btns" onClick={() => toggleOpenDrawer()}>
            <div className="line line-md"></div>
            <div className="line"></div>
            <div className="line line-md"></div>
          </div>

          <div className="logo-mob">
            <img width={"200px"} src={"/Assets/images/MainLogo/logo.jpeg"} />
          </div>

          <div className="search-mob">
            <div>
              <input type={"text"} placeholder={"Suche"} />
              <div className="icon-s">
                <AiOutlineSearch className="signInLogo" />
              </div>
            </div>
          </div>

          <div className="icons-nav">
            <ul className="">
              <li className="mob-li">
                <a className="" href="#">
                  <AiOutlineHeart
                    className="signInLogo"
                    style={{ fontSize: "24px" }}
                  />
                </a>
              </li>
              <li className="mob-li">
                <a className="" href="#">
                  <AiOutlineUser
                    className="signInLogo"
                    style={{ fontSize: "24px" }}
                  />
                </a>
              </li>
              <li className="mob-li" onClick={props.toggleDrawer}>
                <a className="" href="#">
                  <AiOutlineShoppingCart
                    className="signInLogo"
                    style={{ fontSize: "24px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {open && <MobileMenuDrawer open={open} drawertoggle={toggleOpenDrawer} />}
    </>
  );
}

export default NavbarBottom;
