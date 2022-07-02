import React, { useState, useEffect } from 'react';

const Orders = ({ orders, QuickView }) => {
  const [option, setOption] = useState('');
  const [orderList, setOrderList] = useState(orders);
  const [quickview, setQuickView] = useState(false);

  useEffect(() => {
    if (option) {
      if (option === 'All') {
        setOrderList([...orders]);
        return;
      }
      setOrderList(
        orders.filter((item) => {
          return item.status === option;
        })
      );
    }
  }, [option]);

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
                  onChange={(e) => setOption(e.target.value)}
                  value={option}
                >
                  <option value="filter" hidden defaultValue>
                    Filter by Status
                  </option>
                  <option value="All">All</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Pending">Pending</option>
                  <option value="Canceled">Canceled</option>s{' '}
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
                  {orderList.map(
                    (
                      { imageUrl, id, orderId, productDetail, status, price },
                      index
                    ) => (
                      <tr key={index}>
                        <th>
                          <img
                            src={imageUrl}
                            style={{
                              width: '50px',
                              height: '50px',
                              resize: 'contain',
                            }}
                          />
                        </th>
                        <th scope="row">{orderId}</th>
                        <td>{productDetail}</td>
                        <td>
                          <span
                            className={`${status.toLowerCase()} statusButton`}
                          >
                            {status}
                          </span>
                        </td>
                        <td>${price}</td>
                        <td>
                          <span onClick={() => setQuickView(true)}>
                            <i className="fa fa-eye viewIcon"></i>{' '}
                          </span>
                          <span>
                            <i className="fa fa-cart-arrow-down viewIcon"></i>
                          </span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            {quickview && <QuickView />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
