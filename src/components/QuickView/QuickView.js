import React from 'react';

import { IoCloseOutline } from 'react-icons/io5';

import ProductDetail from '../ProductDetail/ProductDetail';
import './QuickView.css';

const QuickView = ({ setQuick, onClose }) => {
  const product = {
    images: [
      {
        img: '/Assets/images/ProductList/p1.jpeg',
        liked: false,
      },
      {
        img: '/Assets/images/ProductList/p1.jpeg',
        liked: true,
      },
      {
        img: '/Assets/images/ProductList/p1.jpeg',
        liked: false,
      },
    ],
  };
  return (
    <>
      <div className="bg-overlay-quick">
        <button
          className="QuickCloseButton"
          onClick={() => {
            onClose();
          }}
        >
          <IoCloseOutline style={{ fontSize: '34px' }} />
        </button>
      </div>
      <div className="QuickView">
        <ProductDetail
          setQuick={setQuick}
          viewDetail
          quickView
          onClose={onClose}
          cross={true}
        />
      </div>
    </>
  );
};

export default QuickView;
