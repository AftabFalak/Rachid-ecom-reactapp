import React from 'react';

import { orders } from '../checkout';

import { Link } from 'react-router-dom';

import { BiEdit } from 'react-icons/bi';

import CartTotal from '../../components/Layout/Checkout/CartTotals';

import './index.css';
const YourCart = () => {
  return (
    <div className="YourCart">
      <h2>Your Cart</h2>
      <div className="row">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">PRODUCT</th>
                <th scope="col">PRICE</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(
                (
                  { id, imageUrl, title, price, size, color, quantity },
                  index
                ) => (
                  <tr key={index}>
                    <td className="ProductImage">
                      <i className="fa fa-times timesIcon cursor-pointer"></i>
                      <img
                        src={imageUrl}
                        style={{ width: '100px', height: '100px' }}
                        alt=""
                        srcset=""
                      />
                      <span>{title}</span>
                    </td>
                    <td className="price">
                      <span>${price}</span>
                    </td>
                    <td>
                      <span className="quantity">
                        <span>
                          <button>-</button>
                        </span>
                        <span className="countState">{quantity}</span>
                        <span>
                          <button>+</button>
                        </span>
                      </span>
                    </td>
                    <td className="subTotal">${price * quantity}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <CartTotal proceedButton={true} />
        </div>
      </div>
    </div>
  );
};

export default YourCart;
