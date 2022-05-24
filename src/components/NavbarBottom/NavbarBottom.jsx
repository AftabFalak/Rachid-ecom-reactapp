/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavbarBottom.css';

import navbarLogo from '../../assets/images/navbarLogo.png'


import { FaSignInAlt } from 'react-icons/fa'

import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'


function NavbarBottom(props) {


  return (
    <nav className="navbar navbar-expand-lg shadow p-0 custonNavbar">


      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarToggle"
      >


        <a className="navbar-brand d-none d-lg-block" href="#">
          <img src={navbarLogo} alt="" />
        </a>

        <ul className="navbar-nav">

          <li className="nav-item signInLink">
            <a className="nav-link text-dark" href="#">
              <AiOutlineSearch className='signInLogo' />
              <p className='signInText'>SEARCH</p>
            </a>
          </li>
          <li className="nav-item signInLink" onClick={props.toggleDrawer}>
            <a className="nav-link text-dark" href="#">
              <FaSignInAlt className='signInLogo' />
              <p className='signInText'>SING IN/UP</p>
            </a>
          </li>
          <li className="nav-item signInLink">
            <a className="nav-link text-dark" href="#">
              <AiOutlineShoppingCart className='signInLogo' />
              <div className="CartBadge"><span>4</span></div>
              <p className='signInText'>$325.00</p>
            </a>
          </li>
        </ul>
      </div>

    </nav>


  );
}

export default NavbarBottom;
