import React from "react";
import Slider from "react-slick";
import "./index.css";
const RelatedProductsSlider = ({ images }) => {
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
  return (
    <div className="RelatedProductsSlider">
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className="slide-single">
              <div className="buttons">
                <span>
                  <i className="fa fa-cart-plus"></i>
                </span>
                <span className="icon">
                  <i className="fa fa-heart"></i>
                </span>
                <span className="icon">
                  <i className="fa fa-search"></i>
                </span>
              </div>
              <img src={`/Assets/images/ProductList/${image}`} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default RelatedProductsSlider;
