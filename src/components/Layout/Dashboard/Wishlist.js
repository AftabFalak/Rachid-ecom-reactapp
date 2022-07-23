import React, { useState, useEffect } from 'react';

import { IoTrashBinOutline, IoCartOutline } from 'react-icons/io5';
import { AiOutlineEye } from 'react-icons/ai';

import { BsCartPlus } from 'react-icons/bs';

const Wishlist = ({ wishList, wishlistDeleteHandler, QuickView }) => {
  const [quickviewModal, setQuickViewModal] = useState(undefined);

  return (
    <div className="tab-pane show active" id="whishlist">
      <div className="row">
        <div className="col-12">
          <div className="card dashboard-table mt-0">
            <div className="card-body table-responsive-sm">
              <div className="top-sec">
                <h3>My Wishlist</h3>
              </div>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th scope="col">Images</th>
                    <th scope="col">Order id</th>
                    <th scope="col">Product Details</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wishList.map(
                    ({ id, image, orderId, productDetail, price }, index) => (
                      <tr>
                        <th>
                          <img
                            src={image}
                            style={{
                              width: '50px',
                              height: '50px',
                              resize: 'contain',
                            }}
                          />
                        </th>
                        <th scope="row">{orderId}</th>
                        <td>{productDetail}</td>
                        <td>${price}</td>
                        <td>
                          <span onClick={() => setQuickViewModal(true)}>
                            <AiOutlineEye className="actionIcons" />
                          </span>
                          <span>
                            <BsCartPlus className="actionIcons" />
                          </span>{' '}
                          <span onClick={() => wishlistDeleteHandler(id)}>
                            <IoTrashBinOutline className="actionIcons" />
                          </span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {quickviewModal ? (
        <QuickView onClose={() => setQuickViewModal(false)} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Wishlist;
