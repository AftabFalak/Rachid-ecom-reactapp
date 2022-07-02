import React from 'react';
import './QuickView.css';
import ProductMainSlider from '../ProductMainSlider';

const QuickView = () => {
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
      <div className="bg-overlay"></div>
      <div className="QuickView">
        <ProductMainSlider images={product.images} />
      </div>
    </>
  );
};

export default QuickView;
