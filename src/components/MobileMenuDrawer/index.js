import React, { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
              <i className="fa fa-times cross-icon"></i>
            </button>
          </div>
          <div className="menu-list">
            <ul>
              <li className="list-item border-bottom">
                <a href={'/home'} className="link">
                  Home
                </a>
              </li>
              <li className="list-item border-bottom">
                <a href={'/shop'} className="link">
                  Shop
                </a>
              </li>
              <li className="list-item border-bottom">
                <a href={'/store-list'} className="link">
                  Store-list
                </a>
              </li>
              <li className="list-item border-bottom">
                <a href={'/inspiration'} className="link">
                  Get Inspiration
                </a>
              </li>
              <li className="list-item border-bottom">
                <a href={'/dashboard/accountInfo'} className="link">
                  My Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenuDrawer;
