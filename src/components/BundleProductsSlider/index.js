import React, { useState } from 'react';
import Slider from 'react-slick';
import './index.css';
import { BsCartPlus } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineSearch, AiFillHeart } from 'react-icons/ai';

import QuickView from '../QuickView/QuickView';

const BundleProductsSlider = ({ products }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const [liked, setLiked] = useState(false);
  const [quickView, setQuickView] = useState(false);

  return (
    <div className="BundleProductsSlider">
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div className="slide-single">
              <div className="buttons">
                <span>
                  <BsCartPlus />
                </span>
                <span onClick={() => setLiked(!liked)} className="icon">
                  {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                </span>

                <span className="icon" onClick={() => setQuickView(true)}>
                  <AiOutlineSearch />
                </span>
              </div>
              <img className="p-img" src={`${product.image}`} />
              <div className="d-flex py-1 slide-content">
                <div className="slide-text">
                  <p className="p-title">{product.title}</p>
                  <p className="p-price">{product.price}</p>
                </div>
                <div className="brand-container">
                  <a href="/vendor">
                    <img className="p-brand" src={product.brand} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      {quickView && <QuickView onClose={() => setQuickView(false)} />}
    </div>
  );
};

export default BundleProductsSlider;
