import React from 'react';

import OrderSummary from './OrderSummary';

const Detail = () => {
  return (
    <div id="Detail">
      <div className="row">
        <div className="col-md-8">
          <div className="header">
            <span>Choose Shipping Method</span>
          </div>

          <div className="TabelDiv">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"> </th>
                  <th scope="col">Shipping method</th>
                  <th scope="col">Delivery time</th>
                  <th scope="col">Handling fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <input
                      type="radio"
                      name="courier"
                      id="courier"
                      className="courierButton cursor-pointer"
                    />
                  </th>
                  <td>
                    <p className="shippmentProcess">Courier</p>
                    <span className="shippmentProcessDescription">
                      All addresses (default zone), United States & Canada
                    </span>
                  </td>
                  <td>2 - 4 days</td>
                  <td>$26.50</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      type="radio"
                      name="courier"
                      id="courier"
                      className="courierButton cursor-pointer"
                    />
                  </th>
                  <td>
                    <p className="shippmentProcess">Local Shipping</p>
                    <span className="shippmentProcessDescription">
                      All addresses (default zone), United States & Canada
                    </span>
                  </td>
                  <td>up to one week</td>
                  <td>$10.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Detail;
