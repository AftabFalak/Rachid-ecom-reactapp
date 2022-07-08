import React from 'react';
import { Link } from 'react-router-dom';
const CartTotal = ({ proceedButton }) => {
  return (
    <div id="CartTotal">
      <div className="Header">
        <span>CART TOTALS</span>
      </div>
      <div className="Section">
        <div className="d-flex justify-content-between section-item">
          <span className="key">Subtotal:</span>
          <span className="value">$325.00</span>
        </div>
        <div className="d-flex justify-content-between section-item">
          <span className="key">Shipping:</span>
          <span className="value">$35.00</span>
        </div>
        <div className="d-flex justify-content-between section-item">
          <span className="key">Total</span>
          <span className="totalPrice value">$360.00</span>
        </div>
      </div>
      {proceedButton && (
        <div className="buttonDivProceed">
          <Link to="/checkout/detail" className="proceedButton">
            Proceed To Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartTotal;
