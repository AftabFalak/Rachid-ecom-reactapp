/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./VenderProfile.css";

// import profilePhoto from "../../assets/images/brand2.PNG";
// import memberProfile from "../../assets/images/memberProfile.jpg";

import { FaRegHandshake, FaShuttleVan } from "react-icons/fa";
import { AiFillStar, AiOutlineInstagram } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { GoMail } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { Rating } from "react-simple-star-rating";
import m2 from '../../assets/images/2.jpg'
import m3 from '../../assets/images/3.jpg'
import m4 from '../../assets/images/4.jpg'
import m5 from '../../assets/images/5.jpg'
import m6 from '../../assets/images/6.jpg'
import m7 from '../../assets/images/7.jpg'
import m8 from '../../assets/images/7.jpg'
import m9 from '../../assets/images/9.jpg'
import Gallery from "../Gallery";
import Annoucements from "../Announcements";
const VenderProfile = () => {
  const [rating, setRating] = useState(0);

  const items = [

    {
      img: m2,
    },
    {
      img: m3,
    },
    {
      img: m3,
    },
    {
      img: m4,
    },
    {
      img: m5,
    },
    {
      img: m6,
    },
    {
      img: m7,
    },
    {
      img: m8,
    },
    {
      img: m9,
    },
    {
      img: m2,
    },
    {
      img: m6,
    }, {
      img: m2,
    },
    {
      img: m3,
    },
    {
      img: m3,
    },
    {
      img: m4,
    },
    {
      img: m5,
    },
    {
      img: m6,
    },
    {
      img: m7,
    },
    {
      img: m8,
    },
    {
      img: m9,
    },

  ]
  const photos = [
    {
      src: 'http://example.com/example/img1.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1
    }
  ];
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="VenderProfile">
      <div className="vendorInfoView"  style={{backgroundColor:"#F8F8F8"}}>
        <div className="vendorInfoView_top" >
          {/* <img src={coverPhoto} alt="Cover Photo" className="coverImage" /> */}
          <div className="coverImage"></div>
          <div className="profilePhotoView" >
            {/* <img
              src={profilePhoto}
              alt="Profile Photo"
              className="profilePhoto"
              resizeMode={"center"}
            /> */}
            <div className="profilePhoto"></div>
          </div>

        </div>

        <div className="vendorInfoView_bottom">
          <div className="row" style={{backgroundColor:"#F8F8F8"}}>
            <div className="col-md-4 brandInfoView text-start">
              <div className="d-flex justify-content-start align-items-center">
                <h3 className="brandName mr-3">Hugo Boss</h3>
                <div>
                  <Rating
                    onClick={handleRating}
                    ratingValue={rating}
                    fillColor={"#FFD700"}
                    size={26}
                    className="starRaiting"
                  />
                  <span className="raitingPoint">(250)</span>
                  <br />
                  <div className="handShakeRaiting">
                    <FaRegHandshake className="handShakeIcon" />
                    <FaRegHandshake className="handShakeIcon" />
                    <FaRegHandshake className="handShakeIcon" />
                    <FaRegHandshake className="handShakeIcon" />
                    <FaRegHandshake className="handShakeIcon" />
                  </div>
                  <span className="handShakePoint">(150)</span>
                </div>
              </div>

              <div>
                <p className="brandDescription">
                  Finest engraved wood watch for your love ones.
                </p>
              </div>
              <div className="venderSales d-flex">
                <div className="venderSales_left">
                  <AiFillStar /> <span>Star seller |</span>
                </div>
                <div className="venderSales_right">
                  <span>40,284 sales |</span>
                </div>
              </div>
            </div>
            <div className="col-md-4  Shipping text-start">
              <h4 className="">stayfineofficial is a Star Seller!</h4>
              <div className="row mt-4">
                <div className="col-md-6 mt-3">
                  <FaShuttleVan className="shippingLogo mb-2" />
                  <h5>Smooth shipping</h5>
                  <p className="shipping-description">
                    Has a history of shipping on time with tracking
                  </p>
                </div>
                <div className="col-md-6 mt-3">
                  <GrMail className="shippingLogo mb-2" />
                  <h5>Speedy replies</h5>
                  <p className="shipping-description">
                    Has a history of replying to messages quikly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4  ShopMember text-center">
              <h4 className="">Shop Member</h4>

              <div className="mt-4">
                <div className="memberProfileImg m-auto"></div>
                <p className="memberName">Paul Tian</p>
                <GoMail className="socialLogo" />{" "}
                <AiOutlineInstagram className="socialLogo" />{" "}
                <FiFacebook className="socialLogo" />
              </div>
            </div>
          </div>
          <Annoucements/>
        </div>
      </div>
    <Gallery cards={items}/>
    </div>
  );
};

export default VenderProfile;
