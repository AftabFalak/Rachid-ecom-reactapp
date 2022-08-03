import React, { useState } from 'react';
import Slider from 'react-slick';

import { BsCartPlus } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import QuickView from '../QuickView/QuickView';

import './index.css';

const RelatedProductsSlider = ({ images }) => {
  const navigate = useNavigate();
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [quick, setQuick] = useState(false);
  const [like, setLike] = useState(false);

  const handelClick = () => {
    navigate('/product-detail');
  };

  return (
    <div className="RelatedProductsSlider">
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className="slide-single">
              <div className="buttons">
                <span>
                  <BsCartPlus />
                </span>
                <span className="icon" onClick={() => setLike(!like)}>
                  {like ? <AiFillHeart /> : <AiOutlineHeart />}
                </span>
                <span className="icon" onClick={() => setQuick(true)}>
                  <AiOutlineSearch />
                </span>
              </div>
              <div className="textArea">
                <p>men black t-shirt</p>
                <p>
                  <strong>$65.34</strong>{' '}
                  <small>
                    <strike>$76.43</strike>
                  </small>
                </p>
              </div>
              <img
                src={`/Assets/images/ProductList/${image}`}
                className="singleImageBelow mr-1"
              />
            </div>
          );
        })}
      </Slider>
      {quick && (
        <QuickView
          onClose={() => {
            setQuick(false);
            console.log('inner');
          }}
        />
      )}
    </div>
  );
};

export default RelatedProductsSlider;
