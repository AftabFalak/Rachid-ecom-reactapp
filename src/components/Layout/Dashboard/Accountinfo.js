import React from 'react';
import { Link } from 'react-router-dom';

const Accountinfo = () => {
  const TOTAL_PRODUCT_LOGO = '/assetsDashboard/images/icon/dashboard/order.png';
  const totalSaleLogo = '/assetsDashboard/images/icon/dashboard/sale.png';
  const orderPendingLogo =
    '/assetsDashboard/images/icon/dashboard/homework.png';

  return (
    <div className="tab-pane show active" id="accountinfo">
      <div className="welcome-msg">
        <h3>Hello, MARK JECNO !</h3>
        <p>
          From your My Account Dashboard you have the ability to view a snapshot
          of your recent account activity and update your account information.
          Select a link below to view or edit information.
        </p>
      </div>

      <div className="counter-section">
        <div className="row">
          <div className="col-md-4">
            <a href="/dashboard/orders" className="counter-box">
              <img
                src={TOTAL_PRODUCT_LOGO}
                className="img-fluid"
                alt="Total Product"
              />
              <div>
                <h3>25</h3>
                <h5>Total Order</h5>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <div className="counter-box">
              <img src={totalSaleLogo} className="img-fluid" />
              <div>
                <h3>5</h3>
                <h5>Pending Orders</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <a href="/dashboard/wishlist" className="counter-box">
              <img src={orderPendingLogo} className="img-fluid" />
              <div>
                <h3>50</h3>
                <h5>Whishlist</h5>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="dashboard-right">
        <div className="dashboard">
          <div className="box-account box-info">
            <div className="box-head">
              <h3>Account Information</h3>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Contact Information</h3>
                    <Link to="/dashboard/profile">Edit</Link>
                  </div>
                  <div className="box-content">
                    <h6>MARK JECNO</h6>
                    <h6>MARK-JECNO@gmail.com</h6>
                    <h6>
                      <Link to="/dashboard/profile">Change Password</Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Newsletters</h3>
                    <a href="#">Edit</a>
                  </div>
                  <div className="box-content">
                    <p>You are currently not subscribed to any newsletter.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="box">
                <div className="box-title">
                  <h3>Address Book</h3>
                  <Link to="/dashboard/address">Manage Addresses</Link>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <h6>Default Billing Address</h6>
                    <address>
                      You have not set a default billing address.
                      <br />
                    </address>
                  </div>
                  <div className="col-sm-6">
                    <h6>Default Shipping Address</h6>
                    <address>
                      You have not set a default shipping address.
                      <br />
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountinfo;
