import React, { useState } from 'react';

import { IoCloseOutline } from 'react-icons/io5';

import CartTotal from './CartTotals';

const ShopingCart = ({ orders, OrderDeleteHandler }) => {
  const [selection, setSelection] = useState({
    color: '',
    size: '',
    quantity: 1,
  });
  const [totalPrice, setTotalPrice] = useState(125);

  return (
    <div id="ShoppingCart">
      <div className="row">
        <div className="col-md-8">
          <div className="header">
            <span>Review Your Order</span>
          </div>
          <div>
            {orders.map(
              (
                { id, imageUrl, title, price, size, color, quantity },
                index
              ) => (
                <div className="d-flex justify-content-between align-items-center singleOrder">
                  <div className="d-flex align-items-center">
                    <div
                      className="closeDiv"
                      onClick={() => OrderDeleteHandler(id)}
                    >
                      <IoCloseOutline className="closeIcon" />
                    </div>

                    <div>
                      <img
                        src={imageUrl}
                        style={{ width: '100px', height: '100px' }}
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="ml-3">
                      <span className="title">{title}</span>
                      <br />
                      <span>
                        size: <span className="size">{size}</span>
                      </span>
                      <br />
                      <span>
                        color: <span className="color">{color}</span>
                      </span>
                      <br />
                      <span className="price">${price}</span>
                    </div>
                  </div>
                  <div>
                    <select name="" className="quanitySelect">
                      <option value="1">Qty: 1</option>
                      <option value="2">Qty: 2</option>
                      <option value="3">Qty: 3</option>
                      <option value="4">Qty: 4</option>
                      <option value="5">Qty: 5</option>
                      <option value="6">Qty: 6</option>
                      <option value="7">Qty: 7</option>
                      <option value="8">Qty: 8</option>
                      <option value="9">Qty: 9</option>
                      <option value="10">Qty: 10</option>
                    </select>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="col-md-4">
          <CartTotal
            title={'Proceed To Chckout'}
            navigate={'/checkout/detail'}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
