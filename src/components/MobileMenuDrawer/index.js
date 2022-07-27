import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoCloseOutline } from 'react-icons/io5';

import './index.css';

const MobileMenuDrawer = ({ open, drawertoggle, filters, allCategorie }) => {
  const [tab, setTab] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryBoxShow, setCategoryBoxShow] = useState(false);

  const onClickItem = (index) => {
    const item = allCategorie.forEach((el) => {
      return;
    });
  };

  const handleOnClick = () => {
    setCategoryBoxShow(true);
  };

  const handleOnBlur = () => {
    setCategoryBoxShow(false);
    console.log('ddd');
  };

  return (
    <>
      {categoryBoxShow && <div className="backdrop-invisible"></div>}

      <div className={`MobileMenuDrawer ${!open ? 'closed' : ''}`}>
        {categoryBoxShow && (
          <>
            <div className="backdrop-invisible" onClick={handleOnBlur}></div>{' '}
          </>
        )}
        <div className="head">
          <div className="d-flex justify-content-between border-bottom p-3">
            <div className="logo-mob">
              <img width={'150px'} src={'/Assets/images/MainLogo/logo.jpeg'} />
            </div>
            <button className="closeButton" onClick={() => drawertoggle()}>
              <IoCloseOutline className="searchCrossIcon" />
            </button>
          </div>
          <div className="menu-list">
            <ul>
              <li className="list-item border-bottom">
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="list-item border-bottom">
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li className="list-item border-bottom">
                <Link to="/store-list" className="link">
                  Store-list
                </Link>
              </li>
              <li className="list-item border-bottom">
                <Link to="/inspiration" className="link">
                  Get Inspiration
                </Link>
              </li>
              <li className="list-item border-bottom">
                <Link to="/dashboard/accountInfo" className="link">
                  My Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenuDrawer;
