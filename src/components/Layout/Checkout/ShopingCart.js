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
        <div className="col-md-8 ">
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
                      <div
                        className="closeDiv"
                        onClick={() => OrderDeleteHandler(id)}
                      >
                        <IoCloseOutline className="closeIcon" />
                      </div>
                      <img
                        src={imageUrl}
                        style={{ width: '100px', height: '100px' }}
                        alt=""
                        srcset=""
                      />
                      <span>{title}</span>
                    </td>
                    <td className="price pt-5">
                      <span>${price}</span>
                    </td>
                    <td className="pt-5">
                      <div className="counterButton mb-0">
                        <button
                          className="logo minus-btn"
                          disabled={selection.quantity == 1}
                          onClick={() => {
                            setSelection({
                              ...selection,
                              quantity: selection.quantity - 1,
                            });
                            setTotalPrice(price);
                          }}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                        <div className="countNumber">
                          <span>{selection.quantity}</span>
                        </div>
                        <button
                          disabled={selection.quantity === 10}
                          className="logo plus-btn m-0"
                          onClick={() =>
                            setSelection({
                              ...selection,
                              quantity: selection.quantity + 1,
                            })
                          }
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td className="subTotal pt-5">${price * quantity}</td>
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

export default ShopingCart;
