/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./index.css";

const VendorListView = ({VendorList}) => {
  return (
    <>
    {VendorList.map((item,index)=>{
      return(
        <div className="VendorListView">
      <div className="vendorInfoView" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="vendorInfoView_top">
          <img src={item.coverImage} alt="" className="coverImage"/>
          <div className="profilePhotoView">
          <img src={item.profileImage} className="profilePhoto" alt=""/>

          </div>
        </div>
        <div className="mt-5 text-center p-1">
          <h3>{item.brandName}</h3>
          <hr />
          <p>{item.brandDescription}</p>
          <a href="/vendor" className="VisitStoreNumber">Visit Store</a>
        </div>
      </div>
    </div>
      )
    
    })}
    </>
    
  );
};

export default VendorListView;
