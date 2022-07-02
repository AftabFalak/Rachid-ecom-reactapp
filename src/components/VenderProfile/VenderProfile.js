import React, { useState } from "react";
import "./VenderProfile.css";

import { FaShuttleVan } from "react-icons/fa";
import { AiFillStar, AiOutlineInstagram, AiOutlineHeart } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { GoMail } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";

import { Rating } from "react-simple-star-rating";
import m2 from "../../assets/images/ProductList/2.jpg";
import m3 from "../../assets/images/ProductList/3.jpg";
import m4 from "../../assets/images/ProductList/4.jpg";
import m5 from "../../assets/images/ProductList/5.jpg";
import m6 from "../../assets/images/ProductList/6.jpg";
import m7 from "../../assets/images/ProductList/7.jpg";
import m8 from "../../assets/images/ProductList/7.jpg";
import m9 from "../../assets/images/ProductList/9.jpg";
import Gallery from "../Gallery";
import Annoucements from "../Announcements";

import { COLORS } from "../../assets/colors/colors";

export const items = [
  {
    favorite: true,
    category: "jacket",
    img: m2,
  },
  {
    favorite: true,
    category: "shirt",
    img: m3,
  },
  {
    favorite: true,
    category: "shirt",
    img: m3,
  },
  {
    favorite: true,
    category: "bag",
    img: m4,
  },
  {
    favorite: true,
    category: "bag",
    img: m5,
  },
  {
    favorite: true,
    category: "bag",
    img: m6,
  },
  {
    favorite: true,
    category: "bag",
    img: m7,
  },
  {
    favorite: true,
    category: "bag",
    img: m8,
  },
  {
    favorite: true,
    category: "bag",
    img: m9,
  },
  {
    favorite: true,
    category: "bag",
    img: m2,
  },
  {
    favorite: true,
    category: "bag",
    img: m6,
  },
  {
    img: m2,
  },
  {
    favorite: true,
    category: "bag",
    img: m3,
  },
  {
    favorite: true,
    category: "bag",
    img: m3,
  },
  {
    favorite: true,
    category: "bag",
    img: m4,
  },
  {
    favorite: true,
    category: "bag",
    img: m5,
  },
  {
    favorite: true,
    category: "bag",
    img: m6,
  },
  {
    favorite: true,
    category: "bag",
    img: m7,
  },
  {
    favorite: true,
    category: "bag",
    img: m8,
  },
  {
    favorite: true,
    category: "bag",
    img: m9,
  },
];
const VenderProfile = ({ vendor, show, onClickBack }) => {
  const [rating, setRating] = useState(0);

  const photos = [
    {
      src: "http://example.com/example/img1.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "http://example.com/example/img2.jpg",
      width: 1,
      height: 1,
    },
  ];
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="VenderProfile">
      {show && (
        <div className="top-bar-vendder">
          <button className="back-btn" onClick={() => onClickBack(false)}>
            <i className="fa fa-chevron-left"></i>
          </button>
          <h4>{vendor.brandName}</h4>
          <div> </div>
        </div>
      )}
      <div className="vendorInfoView">
        <div className="vendorInfoView_top">
          <div
            className="coverImage"
            style={{ backgroundImage: `url('${vendor.coverImage}')` }}
          ></div>
          <div className="profilePhotoView">
            <div className="profilePhoto"></div>
          </div>
          <button
            className="followBrandButton d-md-none d-sm-block"
            style={{
              width: "20%",
              position: "absolute",
              top: "40%",
              right: "10px",
            }}
          >
            <AiOutlineHeart className="FollowIconHeart" /> 169
          </button>
        </div>

        <div className="vendorInfoView_bottom">
          <div className="row">
            <div className="col-md-4 brandInfoView">
              <div className="d-flex justify-content-start align-items-center">
                <h3 className="brandName mr-3">{vendor.brandName}</h3>
                <span className="or">|</span>
                <div className="starRaitingView">
                  <Rating
                    onClick={handleRating}
                    ratingValue={80}
                    fillColor={COLORS.YELLOW_100}
                    size={26}
                    className="starRaiting"
                  />
                  <span className="raitingPoint">(250)</span>
                </div>
              </div>

              <div>
                <span className="brandDescription">
                  Finest engraved wood watch for your love ones.
                </span>
              </div>
              <div className="venderSales">
                <div>
                  <AiFillStar /> <span>Star seller | </span>
                  <span>40,284 sales |</span>
                </div>
              </div>
              <button className="followBrandButton d-md-block d-sm-none">
                <AiOutlineHeart className="FollowIconHeart" /> Follow Brand
                (2.5k)
              </button>
            </div>
            <div className="col-md-4  Shipping">
              <h4 className="ShippingMainHeader">
                stayfineofficial is a Star Seller!
              </h4>
              <div className="row mt-2">
                <div className="col-md-6 mt-3">
                  <FaShuttleVan className="shippingLogo mb-2" />
                  <h5 className="shipping-heading">Smooth shipping</h5>
                  <p className="shipping-description m-0">
                    Has a history of shipping on time with tracking
                  </p>
                </div>
                <div className="col-md-6 mt-3">
                  <GrMail className="shippingLogo mb-2" />
                  <h5 className="shipping-heading">Speedy replies</h5>
                  <p className="shipping-description m-0">
                    Has a history of replying to messages quikly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4  ShopMember text-center ">
              <h4 className="ShopMemberMainHeading">Shop Member</h4>

              <div className="mt-4">
                <div className="memberProfileImg m-auto"></div>
                <p className="memberName">Paul Tian</p>
                <GoMail className="socialLogo" />{" "}
                <AiOutlineInstagram className="socialLogo" />
                <FiFacebook className="socialLogo" />
              </div>
            </div>
          </div>
        </div>
        <div className="announcements">
          <Annoucements />
        </div>
      </div>
      <Gallery
        showFilter={false}
        cards={items}
        heading={"Products"}
        categorieFilterOnTop
      />
    </div>
  );
};

export default VenderProfile;
