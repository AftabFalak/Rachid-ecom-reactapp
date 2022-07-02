import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ page }) => {
  return (
    <div className="dashboard-sidebar">
      <div className="profile-top">
        <div className="profile-image">
          <img
            src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg"
            alt=""
            className="rounded-image"
          />
        </div>
        <div className="profile-detail">
          <h5>Mark Jecno</h5>
          <h6>mark.jecno@mail.com</h6>
        </div>
      </div>
      <div className="faq-tab">
        <ul className="nav nav-tabs" id="top-tab" role="tablist">
          <li className="nav-item">
            <Link
              className={`nav-link ${page === "accountinfo" && "active"}`}
              to="/dashboard/accountinfo"
            >
              Account Info
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${page === "address" && "active"}`}
              to="/dashboard/address"
            >
              Address Book
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${page === "orders" && "active"}`}
              to="/dashboard/orders"
            >
              My Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${page === "wishlist" && "active"}`}
              to="/dashboard/wishlist"
            >
              My Wishlist
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${page === "cards" && "active"}`}
              to="/dashboard/cards"
            >
              Saved Cards
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${page === "profile" && "active"}`}
              to="/dashboard/profile"
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${page === "followers" && "active"}`}
              to="/dashboard/followers"
            >
              Followers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
