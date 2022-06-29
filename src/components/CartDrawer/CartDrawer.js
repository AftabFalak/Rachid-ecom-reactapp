/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./CartDrawer.css";

import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";

import GoogleButton from "react-google-button";

import { initOrders } from "../../pages/checkout";
const CartDrawer = (props) => {
  const [selection, setSelection] = useState({
    color: "",
    size: "",
    quantity: 1,
  });
  const [totalPrice, setTotalPrice] = useState(125);
  return (
    <div className={`CartDrawer ${!props.open ? "closedDrawer" : ""}`}>
      <div className="header">
        <h5>SHOPPING CART</h5>
        <button
          className="closeBtn"
          onClick={() => props.setDrawertoggle(false)}
        >
          <i className="fa fa-times timeIcon cursor-poniter"></i>{" "}
          <span>Close</span>
        </button>
      </div>
      <div className="orderList">
        {initOrders.map(
          ({ id, imageUrl, title, price, size, color, quantity }, index) => (
            <div className="singleOrder">
              <div className="infoView">
                <div className="mr-3">
                  <img src={imageUrl} alt="" className="orderImage" />
                </div>
                <div className="product-info">
                  <span className="title">{title}</span>
                  <div className="counterButton mb-0">
                    <button
                      className="logo minus-btn"
                      disabled={selection.quantity == 1}
                      onClick={() => {
                        setSelection({
                          ...selection,
                          quantity: selection.quantity - 1,
                        });
                        setTotalPrice(price);
                      }}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <div className="countNumber">
                      <span>{selection.quantity}</span>
                    </div>
                    <button
                      disabled={selection.quantity === 10}
                      className="logo plus-btn m-0"
                      onClick={() =>
                        setSelection({
                          ...selection,
                          quantity: selection.quantity + 1,
                        })
                      }
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>

                  <span className="price">
                    {selection.quantity} x <span> ${price}</span>
                  </span>
                </div>
              </div>
              <div>
                <i className="fa fa-times cursor-poniter"></i>
              </div>
            </div>
          )
        )}
      </div>

      <div className="bottomDiv">
        <div className="subTotal">
          <span>SUBTOTAL</span>
          <span className="subPrice">
            ${selection.quantity * totalPrice * 3}
          </span>
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
