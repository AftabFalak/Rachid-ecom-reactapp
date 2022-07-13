/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './CartDrawer.css';

import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';

import GoogleButton from 'react-google-button';

import { IoCloseOutline } from 'react-icons/io5';

const CartDrawer = (props) => {
  const [selection, setSelection] = useState({
    color: '',
    size: '',
    quantity: 1,
  });
  const [totalPrice, setTotalPrice] = useState(125);
  let initCartList = [
    {
      id: 1,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZE6hrQg7QAGSzNnPoYrT1TiR3PS4HJ9jkg&usqp=CAU',
      title: 'Calvin Klien Jeans Keds',
      size: '8.5',
      color: 'Black',
      price: '125.00',
      quantity: 1,
    },
    {
      id: 2,
      imageUrl:
        'https://media.dior.com/couture/ecommerce/media/catalog/product/f/b/1604511903_113J698A0531_C888_E08_GH.jpg',
      title: 'The North Face Hoodi',
      size: 'XL',
      color: 'Gray',
      price: '125.00',
      quantity: 2,
    },
    {
      id: 3,
      imageUrl:
        'https://cdn.luxe.digital/media/20220218153508/best-sunglasses-men-randolph-aviator-luxe-digital-780x520.jpg',
      title: 'Medicine Chameleon ',
      size: 'SM',
      color: 'Gray/Black',
      price: '125.00',
      quantity: 3,
    },
  ];
  const [list, setList] = useState([...initCartList]);

  const onDeleteHandler = (id) => {
    setList(() => list.filter((el) => el.id !== id));
  };

  return (
    <div className={`CartDrawer ${!props.open ? 'closedDrawer' : ''}`}>
      <div className="header">
        <h5>SHOPPING CART</h5>
        <button
          className="closeBtnn"
          onClick={() => props.setDrawertoggle(false)}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
      <div className="orderList">
        {list.map(
          ({ id, imageUrl, title, price, size, color, quantity }, index) => (
            <div className="singleOrder" key={index}>
              <div className="infoView">
                <div className="mr-3">
                  <img src={imageUrl} alt="" className="orderImage" />
                </div>
                <div className="product-info">
                  <span className="title">{title}</span>
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

                  <span className="price">
                    {selection.quantity} x <span> ${price}</span>
                  </span>
                </div>
              </div>
              <div className="closeDiv" onClick={() => onDeleteHandler(id)}>
                {/* <AiOutlineClose /> */}
                <IoCloseOutline className="closeIcon" />
              </div>
            </div>
          )
        )}
      </div>

      <div className="bottomDiv">
        <div className="subTotal">
          <span>SUBTOTAL</span>
          <span className="subPrice">
            ${selection.quantity * totalPrice * 3}
          </span>
        </div>
        <div className="buttonsDiv">
          <button className="viewCart">VIEW CART</button>
          <Link
            to="/yourcart"
            className="checkout"
            onClick={() => props.setDrawertoggle(false)}
          >
            CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
