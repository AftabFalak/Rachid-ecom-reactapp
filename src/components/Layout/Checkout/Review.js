import React, { useState } from 'react';
import CartTotal from './CartTotals';
import { Link } from 'react-router-dom';

import { BiEdit } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

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
                    {!edit ? (
                      <p className="quantityOrder">
                        <span>Quantity:</span> {quantity}
                      </p>
                    ) : (
                      <div className="counterButton mb-3">
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
                    )}
                    {!edit ? (
                      <Link
                        to="#"
                        className="EditOrderLink"
                        onClick={() => {
                          setEdit(!edit);
                        }}
                      >
                        <BiEdit className="editIcon" /> Edit
                      </Link>
                    ) : (
                      <Link
                        to="#"
                        className="EditOrderLinkConfirm d-flex align-items-center justify-content-center"
                        onClick={() => setEdit(!edit)}
                      >
                        <AiOutlineCheckCircle className="editIcon mr-1" />
                        {'  '}
                        Confirm
                      </Link>
                    )}
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
