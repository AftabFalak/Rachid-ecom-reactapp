import React, { useState } from 'react';

const Orders = ({ orders }) => {
  const [value, setValue] = useState('');

  return (
    <div className="tab-pane show active" id="orders">
      <div className="row">
        <div className="col-12">
          <div className="card dashboard-table mt-0">
            <div className="card-body table-responsive-sm">
              <div className="top-sec">
                <h3>My Orders</h3>

                <select
                  name="statusFilter"
                  id="status"
                  className="status-dropdown"
                >
                  <option value="filter" hidden>
                    Filter by Status
                  </option>
                  <option value="shipped">Shipped</option>
                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>s{' '}
                </select>
              </div>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th scope="col">Images</th>
                    <th scope="col">Order id</th>
                    <th scope="col">Product Details</th>
                    <th scope="col">Status</th>
                    <th scope="col">Price</th>
                    <th scope="col">View</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map(
                    (
                      { imageUrl, id, orderId, productDetail, status, price },
                      index
                    ) => (
                      <tr key={index}>
                        <th>
                          <img src={imageUrl} />
                        </th>
                        <th scope="row">{orderId}</th>
                        <td>{productDetail}</td>
                        <td>
                          <span
                            className={`${
                              status === 'Shipped'
                                ? 'shipped'
                                : status === 'Canceled'
                                ? 'canceled'
                                : 'pending'
                            } statusButton`}
                          >
                            {status}
                          </span>
                        </td>
                        <td>${price}</td>
                        <td>
                          <i className="fa fa-eye viewIcon"></i>
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

export default Orders;
