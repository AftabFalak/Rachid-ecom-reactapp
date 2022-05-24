/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./index.css";

const VendorListView = () => {
  return (
    <div className="VendorListView">
      <div className="vendorInfoView" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="vendorInfoView_top">
          <div className="coverImage"></div>
          <div className="profilePhotoView">
            <div className="profilePhoto"></div>
          </div>
        </div>
        <div className="mt-5 text-center p-1">
          <h3>Brand Name</h3>
          <hr />
          <p>Finest engraved wood watch for your loved ones.</p>
          <a href="/vendor" className="VisitStoreNumber">Visit Store</a>
        </div>
      </div>
    </div>
  );
};

export default VendorListView;
