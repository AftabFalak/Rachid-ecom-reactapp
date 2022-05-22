/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./VenderProfile.css";

import coverPhoto from "../../assets/images/VenderCoverImage.jpg";
import profilePhoto from "../../assets/images/brand2.PNG";

import { FaRegHandshake } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import { Rating } from "react-simple-star-rating";

const VenderProfile = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="VenderProfile">
      <div className="vendorInfoView">
        <div className="vendorInfoView_top">
          <img src={coverPhoto} alt="Cover Photo" className="coverImage" />
          <div className="profilePhotoView">
            <img
              src={profilePhoto}
              alt="Profile Photo"
              className="profilePhoto"
              resizeMode={"center"}
            />
          </div>
        </div>

        <div className="vendorInfoView_bottom">
          <div className="row">
            <div className="col-md-4">
              <div className="brandInfoView">
                <div className="d-flex justify-content-start align-items-center">
                  <h3 className="brandName mr-3">Hugo Boss</h3>
                  <div>
                    <Rating
                      onClick={handleRating}
                      ratingValue={rating}
                      fillColor={"#FFD700"}
                      size={26}
                    />
                    <span>(250)</span>
                    <br />
                    <FaRegHandshake className="handShakeIcon" />
                    <FaRegHandshake className="handShakeIcon" />
                    <FaRegHandshake className="handShakeIcon" />
                    <FaRegHandshake className="handShakeIcon" />
                    <FaRegHandshake className="handShakeIcon" />
                    <span>(150)</span>
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
            </div>
            <div className="col-md-4">col</div>
            <div className="col-md-4">col</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenderProfile;
