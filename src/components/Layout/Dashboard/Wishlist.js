import React from 'react';

const Wishlist = ({ wishList, wishlistDeleteHandler }) => {
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
                          <img src={image} />
                        </th>
                        <th scope="row">{orderId}</th>
                        <td>{productDetail}</td>
                        <td>${price}</td>
                        <td>
                          <span>
                            <i className="fa fa-eye actioniIcons"></i>
                          </span>
                          <span>
                            <i className="fa fa-pen actioniIcons"></i>
                          </span>
                          <span onClick={() => wishlistDeleteHandler(id)}>
                            <i className="fa fa-trash actioniIcons"></i>
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
    </div>
  );
};

export default Wishlist;
