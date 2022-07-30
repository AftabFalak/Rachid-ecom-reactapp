import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { BiEdit } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import CartTotal from './CartTotals';

const Review = ({ orders }) => {
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(0);

  const [selection, setSelection] = useState({
    color: '',
    size: '',
    quantity: 1,
  });
  const [totalPrice, setTotalPrice] = useState(125);

  return (
    <div id="Review">
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
                      <img src={imageUrl} />
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
                      <div>
                        <select
                          name=""
                          className="quanitySelectSmall d-md-none"
                        >
                          <option value="1">Qty: 1</option>
                          <option value="2">Qty: 2</option>
                          <option value="3">Qty: 3</option>
                          <option value="4">Qty: 4</option>
                          <option value="5">Qty: 5</option>
                          <option value="6">Qty: 6</option>
                          <option value="7">Qty: 7</option>
                          <option value="8">Qty: 8</option>
                          <option value="9">Qty: 9</option>
                          <option value="10">Qty: 10</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <select name="" className="quanitySelect d-none d-md-block">
                      <option value="1">Qty: 1</option>
                      <option value="2">Qty: 2</option>
                      <option value="3">Qty: 3</option>
                      <option value="4">Qty: 4</option>
                      <option value="5">Qty: 5</option>
                      <option value="6">Qty: 6</option>
                      <option value="7">Qty: 7</option>
                      <option value="8">Qty: 8</option>
                      <option value="9">Qty: 9</option>
                      <option value="10">Qty: 10</option>
                    </select>
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
            <Link to="/checkout/payment" className="backButton">
              {'< '}Back
            </Link>
            <button className="completeOrder">Complete order {' >'}</button>
          </div>
        </div>
        <div className="col-md-4">
          <CartTotal title={'Complete Order'} navigate={'/checkout/review'} />
        </div>
      </div>
    </div>
  );
};

export default Review;
