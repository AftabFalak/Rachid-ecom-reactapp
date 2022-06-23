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
              <img className="p-img" src={`${product.image}`} />
              <p className="p-title">{product.title}</p>
              <img className="p-brand" src={product.brand}/>
              <p className="p-price">{product.price}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BundleProductsSlider;
