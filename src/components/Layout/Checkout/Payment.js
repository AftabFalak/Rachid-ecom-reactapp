import React, { useState } from 'react';
import OrderSummary from './OrderSummary';
import { Link } from 'react-router-dom';

import { FiCreditCard } from 'react-icons/fi';

import { AiOutlineUpCircle, AiOutlineDownCircle } from 'react-icons/ai';
import { BsPaypal } from 'react-icons/bs';

const Payment = ({ orders }) => {
  const [ceditCard, setCreditCard] = useState(true);
  const [paypal, setPaypal] = useState(false);
  return (
    <div id="Payment">
      <div className="row">
        <div className="col-md-8">
          <div className="header">
            <span>Choose payment method</span>
          </div>

          <div className="creditCardDiv">
            <div
              className="creditCardHeader"
              onClick={() => setCreditCard(!ceditCard)}
            >
              <div>
                <FiCreditCard /> <span> Pay with Credit Card</span>
              </div>
              {ceditCard ? (
                <div>
                  <AiOutlineUpCircle className="circleIcon" />
                </div>
              ) : (
                <div>
                  <AiOutlineDownCircle className="circleIcon" />
                </div>
              )}
            </div>
            {ceditCard ? (
              <div className="creditMain">
                <span>We accept following credit cards:</span>
                <img
                  src={require('../../../assets/images/CreditCard/visa.png')}
                  alt=""
                  className="cardLogos ml-2"
                />
                <img
                  src={require('../../../assets/images/CreditCard/paypal.png')}
                  alt=""
                  className="cardLogos"
                />
                <img
                  src={require('../../../assets/images/CreditCard/discove.jpg')}
                  alt=""
                  className="cardLogos"
                />

                <div className="dummyCardDiv">
                  <img
                    src={require('../../../assets/images/CreditCard/dummy.PNG')}
                    alt=""
                    srcset=""
                    className="dummyCardImg"
                    style={{
                      width: '400px',
                      height: '200px',
                      borderRadius: '15px',
                    }}
                  />
                </div>
                <form
                  onSubmit={() => console.log('submit')}
                  className="formCredit"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control w-100 my-1"
                        placeholder="Card Number"
                      />
                      <div style={{ display: 'flex' }}>
                        <input
                          type="text"
                          className="form-control w-50 my-1 mr-1"
                          placeholder="MM/YY"
                        />
                        <input
                          type="text"
                          className="form-control w-50 my-1 ml-1"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control w-100 my-1"
                        placeholder="Card Number"
                      />
                      <button
                        className="w-100 my-2 form-control pymentSubmit"
                        type="submit"
                      >
                        <span className="subSpan">Submit</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <></>
            )}

            <div
              className="creditCardFooter"
              onClick={() => setPaypal(!paypal)}
            >
              <div>
                <BsPaypal /> <span>Pay with PayPal</span>
              </div>
              {paypal ? (
                <div>
                  <AiOutlineUpCircle className="circleIcon" />
                </div>
              ) : (
                <div>
                  <AiOutlineDownCircle className="circleIcon" />
                </div>
              )}
            </div>
            {paypal ? (
              <div className="creditMain">
                <span>We accept following credit cards:</span>
                <img
                  src={require('../../../assets/images/CreditCard/visa.png')}
                  alt=""
                  className="cardLogos ml-2"
                />
                <img
                  src={require('../../../assets/images/CreditCard/paypal.png')}
                  alt=""
                  className="cardLogos"
                />
                <img
                  src={require('../../../assets/images/CreditCard/discove.jpg')}
                  alt=""
                  className="cardLogos"
                />

                <div className="dummyCardDiv">
                  <img
                    src={require('../../../assets/images/CreditCard/dummy.PNG')}
                    alt=""
                    srcset=""
                    className="dummyCardImg"
                    style={{
                      width: '400px',
                      height: '200px',
                      borderRadius: '15px',
                    }}
                  />
                </div>
                <form
                  onSubmit={() => console.log('submit')}
                  className="formCredit"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control w-100 my-1"
                        placeholder="Card Number"
                      />
                      <div style={{ display: 'flex' }}>
                        <input
                          type="text"
                          className="form-control w-50 my-1 mr-1"
                          placeholder="MM/YY"
                        />
                        <input
                          type="text"
                          className="form-control w-50 my-1 ml-1"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control w-100 my-1"
                        placeholder="Card Number"
                      />
                      <button
                        className="w-100 my-2 form-control pymentSubmit"
                        type="submit"
                      >
                        <span className="subSpan">Submit</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="buttonDiv">
            <Link to="/checkout/detail" className="backButton">
              {'< '}Back
            </Link>
            <Link to="/checkout/review" className="completeOrder">
              Review Your Order{' >'}
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Payment;
