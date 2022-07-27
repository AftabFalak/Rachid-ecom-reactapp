/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';
import { BsCart2 } from 'react-icons/bs';
import { TbUser } from 'react-icons/tb';
import { IoIosSearch, IoIosHeartEmpty } from 'react-icons/io';
import { MainLogo } from '../../assets/svgs/main-logo';
import MobileMenuDrawer from '../MobileMenuDrawer';
import './NavbarBottom.css';

function NavbarBottom(props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const [searchText, setSearchText] = useState('');

  const toggleOpenDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg d-none d-lg-block border-bottom p-0 customNavbar">
        <nav
          className="collapse navbar-collapse d-flex justify-content-between"
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
              <Link className="nav-link NavLink" to="/dashboard/accountInfo">
                My Dashboard
              </Link>
            </span>
          </div>

          <Link to="/">
            <MainLogo />
          </Link>

          <ul className="navbar-nav">
            <div
              style={{
                position: 'relative',
              }}
            >
              {!search ? (
                <li
                  className="nav-item signInLink"
                  onClick={() => setSearch(true)}
                >
                  <a className="nav-link text-dark" href="#">
                    <IoIosSearch className="signInLogo" />
                    <p className="signInText">SEARCH</p>
                  </a>
                </li>
              ) : (
                <div className="search-desktop">
                  <div>
                    <div className="d-flex align-items-center">
                      <input
                        type={'text'}
                        placeholder={'Search'}
                        className="mr-2"
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        name="search"
                      />

                      <IoCloseOutline
                        onClick={() => setSearch(false)}
                        className="searchCrossIcon"
                      />
                    </div>
                    {searchText.length <= 0 && (
                      <div className="icon-s">
                        <AiOutlineSearch className="signInLogo" />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <li className="nav-item signInLink">
              <Link
                to="/dashboard/wishlist"
                className="nav-link text-dark"
                href="#"
              >
                <IoIosHeartEmpty className="signInLogo" />
                <p className="signInText">Wishlist</p>
              </Link>
            </li>
            <li className="nav-item signInLink" onClick={props.toggleDrawer}>
              <a className="nav-link text-dark" href="#">
                <TbUser className="signInLogo" />
                <p className="signInText">SING IN/UP</p>
              </a>
            </li>
            <li
              className="nav-item signInLink"
              onClick={props.toggleDrawerCart}
            >
              <a className="nav-link text-dark" href="#">
                <BsCart2 className="signInLogo" />

                <p className="signInText">$325.00</p>
              </a>
            </li>
          </ul>
        </nav>
      </nav>

      {/* small screen */}

      <div className="d-block d-lg-none">
        {!search ? (
          <div className="mobile-nav">
            <div className="line-btns" onClick={() => toggleOpenDrawer()}>
              <div className="line line-md"></div>
              <div className="line"></div>
              <div className="line line-md"></div>
            </div>

            <div className="logo-mob">
              <img width={'200px'} src={'/Assets/images/MainLogo/logo.jpeg'} />
            </div>

            <div className="icons-nav">
              <ul className="">
                <li className="mob-li" onClick={() => setSearch(true)}>
                  <a className="" href="#">
                    <AiOutlineSearch
                      className="signInLogo"
                      style={{ fontSize: '20px' }}
                    />
                  </a>
                </li>
                <li className="mob-li">
                  <a className="" href="/dashboard/wishlist">
                    <AiOutlineHeart
                      className="signInLogo"
                      style={{ fontSize: '20px' }}
                    />
                  </a>
                </li>
                <li className="mob-li">
                  <a className="" href="#" onClick={props.toggleDrawer}>
                    <AiOutlineUser
                      className="signInLogo"
                      style={{ fontSize: '20px' }}
                    />
                  </a>
                </li>
                <li className="mob-li" onClick={props.toggleDrawerCart}>
                  <a className="" href="#">
                    <AiOutlineShoppingCart
                      className="signInLogo"
                      style={{ fontSize: '20px' }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="search-mob">
            <div>
              <div className="d-flex align-items-center">
                <input type={'text'} placeholder={'Search'} className="mr-2" />
                <IoCloseOutline
                  onClick={() => setSearch(false)}
                  className="search-cross-iconMob"
                />
              </div>

              <div className="icon-s-mob">
                <AiOutlineSearch className="mob-search-logo" />
              </div>
            </div>
          </div>
        )}
      </div>
      {open && <MobileMenuDrawer open={open} drawertoggle={toggleOpenDrawer} />}
    </>
  );
}

export default NavbarBottom;
