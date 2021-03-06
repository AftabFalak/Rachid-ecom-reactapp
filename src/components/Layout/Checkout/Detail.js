import React from 'react';
import { profile, user } from '../../../pages/dashboard';
import { Link } from 'react-router-dom';

import { BiEdit } from 'react-icons/bi';

import OrderSummary from './OrderSummary';
import CartTotal from './CartTotals';

const Detail = () => {
  const { url, firstName, lastName, rewardPoint } = profile;
  const { email } = user;
  return (
    <div id="Detail">
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
            <div className="d-md-none d-sm-block EditProfileLinkMobile">
              <Link to="/dashboard/profile" className="EditProfileLinkSmall">
                <BiEdit />
              </Link>
            </div>
            <div className="d-none d-md-block">
              <Link to="/dashboard/profile" className="EditProfileLink">
                <BiEdit /> Edit Profile
              </Link>
            </div>
          </div>
          <div className="shippingAdress">
            <div>
              <h3 className="h3-text">Shipping adress</h3>
              <div className="row mt-2">
                <div className="col-md-6">
                  <h5>First Name</h5>
                  <input type="text" className="form-control w-100" />
                </div>
                <div className="col-md-6">
                  <h5>Last Name</h5>
                  <input type="text" className="form-control w-100" />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <h5>E-mail Address</h5>
                  <input type="text" className="form-control w-100" />
                </div>
                <div className="col-md-6">
                  <h5>Phone Number</h5>
                  <input type="text" className="form-control w-100" />
                </div>
              </div>
              <div className="row mt-2">
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
              <div className="row mt-2">
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
              <div className="row mt-2">
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
              <h3 className="h3-text">Billing adress</h3>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <span>Same as shipping address</span>
            </div>
            <div className="buttonDiv">
              <Link to="/yourcart" className="backButton">
                {' < '}Back to cart
              </Link>
              <Link to="/checkout/payment" className="proceedButton">
                Proceed to payment {' > '}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <CartTotal proceedButton={true} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
