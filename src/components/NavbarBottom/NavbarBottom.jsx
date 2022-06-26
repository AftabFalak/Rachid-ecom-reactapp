/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavbarBottom.css';
import { Link } from 'react-router-dom';

import navbarLogo from '../../assets/images/MainLogo/navbarLogo.png';

import { FaSignInAlt } from 'react-icons/fa';

import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

import { MainLogo } from '../../assets/svgs/main-logo';
import Cart from '../../assets/svgs/cart';

function NavbarBottom(props) {
  return (
    <nav className="navbar navbar-expand-lg shadow p-0 custonNavbar">
      <nav
        className="collapse navbar-collapse justify-content-between"
        id="navbarToggle"
      >

        <div className='NavbarLinks'>
          <span
            className="NavbarLinks-Item"
          >
            <Link className="nav-link NavLink" to="/" >
              Home
            </Link>
          </span>
          <span
            className="NavbarLinks-Item"
          >
            <Link className="nav-link NavLink" to="/shop">
              Shop
            </Link>
          </span>
          <span
            className="NavbarLinks-Item"
          >
            <Link className="nav-link NavLink" to="/store-list">
              Store List
            </Link>
          </span>
          <span
            className="NavbarLinks-Item"
          >
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
          <li className="nav-item signInLink" onClick={props.toggleDrawerCart}>
            <a className="nav-link text-dark" href="#">
              <i className="fa fa-cart-shopping"></i>
              <div className="CartBadge">
                <span>4</span>
              </div>
              <p className="signInText">$325.00</p>
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default NavbarBottom;
