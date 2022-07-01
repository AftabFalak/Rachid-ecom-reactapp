/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const VendorListView = ({ VendorList, setShow }) => {
  return (
    <>
      {VendorList.map((item, index) => {
        return (
          <div className="VendorListView" key={`vendor-${index}`}>
            <div className="vendorInfoView">
              <div className="vendorInfoView_top">
                <img
                  src="https://t4.ftcdn.net/jpg/04/30/97/29/360_F_430972992_0zmMGURTw5qRaV0iDp0gwj2HgBjFFwQ6.jpg"
                  alt=""
                  className="coverImage"
                />
                <div className="profilePhotoView">
                  <img
                    src={item.profileImage}
                    className="profilePhoto"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-5 text-center px-2">
                <h3 className="pb-2 font-weight-bold">{item.brandName} </h3>
                <p className="brandDiscription">{item.brandDescription}</p>
                <Link
                  to={window.innerWidth < 768 ? '#' : `/store-list/${item.id}`}
                  onClick={window.innerWidth < 768 ? () => setShow(true) : null}
                  className="VisitStoreNumber"
                >
                  Visit Store
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VendorListView;
