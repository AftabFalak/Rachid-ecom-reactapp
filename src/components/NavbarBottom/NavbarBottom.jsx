/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavbarBottom.css';
import { Link } from 'react-router-dom';

import navbarLogo from '../../assets/images/MainLogo/navbarLogo.png';

import { FaSignInAlt } from 'react-icons/fa';

import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

import { MainLogo } from '../../assets/svgs/main-logo'

function NavbarBottom(props) {
  return (
    <nav className="navbar navbar-expand-lg shadow p-0 custonNavbar">
      <nav
        className="collapse navbar-collapse justify-content-between"
        id="navbarToggle"
      >

        <div style={{ display: 'flex' }}>
          <span
            className="nav-item"
            style={{
              border: '.5px solid rgba(0,0,0,0.1)',
              marginRight: '6px',
            }}
          >
            <Link className="nav-link text-dark" to="/dashboard/accountinfo">
              <p className="signInTextDummy">Dashboard</p>
            </Link>
          </span>
          <span
            className="nav-item"
            style={{
              border: '.5px solid rgba(0,0,0,0.1)',
              marginRight: '6px',
            }}
          >
            <Link className="nav-link text-dark" to="/checkout/shoppingcart">
              <p className="signInTextDummy">Home</p>
            </Link>
          </span>
          <span
            className="nav-item"
            style={{
              border: '.5px solid rgba(0,0,0,0.1)',
              marginRight: '6px',
            }}
          >
            <Link className="nav-link text-dark" to="/checkout/shoppingcart">
              <p className="signInTextDummy">Shop</p>
            </Link>
          </span>
          <span
            className="nav-item"
            style={{
              border: '.5px solid rgba(0,0,0,0.1)',
              marginRight: '6px',
            }}
          >
            <Link className="nav-link text-dark" to="/checkout/shoppingcart">
              <p className="signInTextDummy">Store List</p>
            </Link>
          </span>
          <span
            className="nav-item"
            style={{
              border: '.5px solid rgba(0,0,0,0.1)',
              marginRight: '6px',
            }}
          >
            <Link className="nav-link text-dark" to="/checkout/shoppingcart">
              <p className="signInTextDummy">Get Inspiration</p>
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
          <li className="nav-item signInLink" onClick={props.toggleDrawer}>
            <a className="nav-link text-dark" href="#">
              <FaSignInAlt className="signInLogo" />
              <p className="signInText">SING IN/UP</p>
            </a>
          </li>
          <li className="nav-item signInLink" onClick={props.toggleDrawerCart}>
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
  );
}

export default NavbarBottom;
