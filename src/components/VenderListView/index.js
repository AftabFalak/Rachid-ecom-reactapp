/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const VendorListView = ({ VendorList }) => {
  return (
    <>
      {VendorList.map((item, index) => {
        return (
          <div className="VendorListView" key={`vendor-${index}`}>
            <div className="vendorInfoView" style={{ backgroundColor: "#F8F8F8" }}>
              <div className="vendorInfoView_top">
                <img src={item.coverImage} alt="" className="coverImage" />
                <div className="profilePhotoView">
                  <img src={item.profileImage} className="profilePhoto" alt="" />
                </div>
              </div>
              <div className="mt-5 text-center px-2">
                <h3 className="border-dark border-bottom pb-2 font-weight-bold">{item.brandName} </h3>
                <p className="brandDiscription">{item.brandDescription}</p>
                <Link to={`/store-list/${item.id}`} className="VisitStoreNumber">Visit Store</Link>
              </div>
            </div>
          </div>
        )

      })}
    </>

  );
};

export default VendorListView;
