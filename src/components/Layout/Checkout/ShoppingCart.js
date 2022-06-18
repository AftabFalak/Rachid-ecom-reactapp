import React from 'react';
import { profile, user } from '../../../pages/dashboard';
import { Link } from 'react-router-dom';

import { BiEdit } from 'react-icons/bi';

import OrderSummary from './OrderSummary';

const ShoppingCart = () => {
  const { url, firstName, lastName, rewardPoint } = profile;
  const { email } = user;
  return (
    <div id="Shoppingcart">
      <div className="row">
        <div className="col-md-8">
          <div className="profileView">
            <div className="profileView_1">
              <img src={url} alt="profileImage" className="profileImage" />
              <div>
                <span className="name mb-1">
                  {firstName} {lastName}
                </span>
                <br />
                <span className="profile_email mb-2">{email}</span>
                <br />
                <span className="rewardPoint">Reward Points:{rewardPoint}</span>
              </div>
            </div>
            <div>
              <Link to="/dashboard/profile" className="EditOrderLink">
                <BiEdit /> Edit Profile
              </Link>
            </div>
          </div>
          <div className="shippingAdress">
            <div>
              <h2>Shipping adress</h2>
              <div className="row">
                <div className="col-md-6">
                  <h5>First Name</h5>
                  <input type="text" className="form-control w-100" />
                </div>
                <div className="col-md-6">
                  <h5>Last Name</h5>
                  <input type="text" className="form-control w-100" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h5>E-mail Address</h5>
                  <input type="text" className="form-control w-100" />
                </div>
                <div className="col-md-6">
                  <h5>Phone Number</h5>
                  <input type="text" className="form-control w-100" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h5>Company</h5>
                  <input type="text" className="form-control w-100" />
                </div>
                <div className="col-md-6">
                  <h5>Country</h5>
                  <select name="country" className="form-control w-100">
                    <option value="default" hidden defaultChecked>
                      Choose Country
                    </option>
                    <option value="geremany">Geremany</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h5>City</h5>
                  <select name="city" className="form-control w-100 ">
                    <option value="default" hidden defaultChecked>
                      Choose City
                    </option>

                    <option value="geremany">Geremany</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <h5>Zip Code</h5>
                  <input type="text" className="form-control w-100" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h5>Address 1</h5>
                  <input type="text" className="form-control w-100" />
                </div>
                <div className="col-md-6">
                  <h5>Address 2</h5>
                  <input type="text" className="form-control w-100" />
                </div>
              </div>
            </div>
            <div>
              <h2>Billing adress</h2>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <span>Same as shipping address</span>
            </div>
            <div className="buttonDiv">
              <button className="backButton">Back to cart</button>
              <button className="proceedButton">Proceed to shipping</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
