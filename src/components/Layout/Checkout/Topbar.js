import React from "react";
import { Link } from "react-router-dom";
const Topbar = ({ page }) => {
  return (
    <div id="checkout-topbar">
      <Link to="/checkout/shoppingcart" className="singleTab">
        <i class="fa fa-cart-shopping"></i>
        <p>1- Shopping Cart</p>
      </Link>
      <Link to="/checkout/detail" className="singleTab">
        <i class="fa fa-user"></i>
        <p>2- Your details</p>
      </Link>

      <Link to="/checkout/payment" className="singleTab">
        <i class="fa fa-credit"></i>
        <p>4- Payment</p>
      </Link>
      <Link to="/checkout/review" className="singleTab">
        <i class="fa fa-circle-check"></i>
        <p>5- Final Review</p>
      </Link>
    </div>
  );
};

export default Topbar;
