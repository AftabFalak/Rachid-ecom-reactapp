/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './CartDrawer.css';

import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';

import GoogleButton from 'react-google-button';

import { orders } from '../../pages/checkout';

const CartDrawer = (props) => {
  const [cartPopup, setCartPopup] = useState(false);
  console.log(orders);
  const [tab, setTab] = useState(1);
  const [count, setCount] = useState(1);
  return (
    <div className={`CartDrawer ${!props.open ? 'closedDrawer' : ''}`}>
      <div className="header">
        <h5>SHOPPING CART</h5>
        <button
          className="closeBtn"
          onClick={() => props.setDrawertoggle(false)}
        >
          <i className="fa fa-times timeIcon"></i> <span>Close</span>
        </button>
      </div>
      <div className="orderList">
        {orders.map(
          ({ id, imageUrl, title, price, size, color, quantity }, index) => (
            <div className="singleOrder">
              <div className="infoView">
                <div className="mr-3">
                  <img src={imageUrl} alt="" className="orderImage" />
                </div>
                <div>
                  <span className="title">{title}</span>
                  <br />
                  <span className="quantity">
                    <span>
                      <button>-</button>
                    </span>
                    <span className="countState">{quantity}</span>
                    <span>
                      <button>+</button>
                    </span>
                  </span>
                  <br />
                  <span className="price">
                    {quantity} x <span> ${price}</span>
                  </span>
                </div>
              </div>
              <div>
                <i className="fa fa-times"></i>
              </div>
            </div>
          )
        )}
      </div>

      <div className="bottomDiv">
        <div className="subTotal">
          <span>SUBTOTAL</span>
          <span className="subPrice">$1, 415.0</span>
        </div>
        <div className="buttonsDiv">
          <button className="viewCart">VIEW CART</button>
          <Link
            to="/yourcart"
            className="checkout"
            onClick={() => props.setDrawertoggle(false)}
          >
            CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
