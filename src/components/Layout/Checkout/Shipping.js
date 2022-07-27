import React from 'react';
import { Link } from 'react-router-dom';

import { BiEdit } from 'react-icons/bi';

import OrderSummary from './OrderSummary';

const Shipping = ({ orders }) => {
  return (
    <div id="Payment">
      <div className="row">
        <div className="col-md-8">
          <div className="header">
            <span>Review Your Order</span>
          </div>
          <div className="orderList">
            {orders.map(
              (
                { id, imageUrl, title, price, size, color, quantity },
                index
              ) => (
                <div className="singleOrder">
                  <div className="infoView">
                    <div className="mr-3">
                      <img src={imageUrl} alt="" />
                    </div>
                    <div>
                      <span className="title">{title}</span>
                      <br />
                      <span className="size">
                        <span>size:</span> {size}
                      </span>
                      <br />
                      <span className="color">
                        <span>color:</span> {color}
                      </span>
                      <br />
                      <span className="price">${price}</span>
                    </div>
                  </div>
                  <div>
                    <p className="quantityOrder">
                      <span>Quantity:</span> {quantity}
                    </p>
                    <Link to="/dashboard/profile" className="EditOrderLink">
                      <BiEdit className="editIcon" /> Edit
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="billingAddress">
            <div className="row">
              <div className="col-md-6 shippingTo">
                <p className="heading">Shipping to:</p>
                <div className="client">
                  <span>Client:</span> Daniel Adams
                </div>
                <div className="address">
                  <span>Address:</span> 44 Shirley Ave. West Chicago. IL 60185,
                  USA
                </div>
                <div className="phone">
                  <span>Phone:</span> +1 (808) 764 544 330
                </div>
              </div>
              <div className="col-md-6 paymentMeathod">
                <p className="heading">Payment mwthod:</p>

                <div className="creditCard">
                  <span>Credit Card:</span> **** **** **** 5300
                </div>
              </div>
            </div>
          </div>
          <div className="buttonDiv">
            <button className="backButton">{'< '}Back</button>
            <button className="completeOrder">Complete order {' >'}</button>
          </div>
        </div>
        <div className="col-md-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
