import React from "react";
import Slider from "react-slick";
import "./index.css";
const BundleProductsSlider = ({ products }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="BundleProductsSlider">
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div className="slide-single">
              <div className="buttons">
                <span>
                  <i className="fa fa-cart-plus"></i>
                </span>
                <span className="icon">
                  <i className="fa fa-heart"></i>
                </span>
              </div>
              <img className="p-img" src={`${product.image}`} />
              <div className="d-flex py-1 slide-content">
                <div className="slide-text">
                  <p className="p-title">{product.title}</p>
                  <p className="p-price">{product.price}</p>
                </div>
                <div className="brand-container">
                  <img className="p-brand" src={product.brand} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BundleProductsSlider;
