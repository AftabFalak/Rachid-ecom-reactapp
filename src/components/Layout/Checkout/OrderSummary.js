import React from 'react';

const OrderSummary = () => {
  return (
    <div id="OrderSummary">
      <div className="Header">
        <span>Order summary</span>
      </div>
      <div className="Section">
        <div className="d-flex justify-content-between">
          <span>Subtotal:</span>
          <span>$325.00</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Shipping:</span>
          <span>_ _</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Taxes:</span>
          <span>$7.25</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Discount:</span>
          <span>_ _</span>
        </div>
      </div>
      <div className="Bottom">
        <h2>$332.25</h2>
      </div>
    </div>
  );
};

export default OrderSummary;
