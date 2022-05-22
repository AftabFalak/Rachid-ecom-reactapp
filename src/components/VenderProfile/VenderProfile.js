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
import Masonry from 'react-masonry-css'
import { Rating } from "react-simple-star-rating";

const VenderProfile = () => {
  const [rating, setRating] = useState(0);

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
      <div className="vendorInfoView">
        <div className="vendorInfoView_top">
          {/* <img src={coverPhoto} alt="Cover Photo" className="coverImage" /> */}
          <div className="coverImage"></div>
          <div className="profilePhotoView">
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
          <div className="row">
            <div className="col-md-4 border brandInfoView text-start">
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
            <div className="col-md-4 border Shipping text-start">
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
            <div className="col-md-4 border ShopMember text-center">
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
        </div>
      </div>
      <div>
        <h3>Products</h3>

        <Masonry
  breakpointCols={4}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
 <div>My Element</div>
  <div>My Element</div>
  <div>My Element</div>
  <div>My Element</div>
</Masonry>
      </div>
    </div>
  );
};

export default VenderProfile;
