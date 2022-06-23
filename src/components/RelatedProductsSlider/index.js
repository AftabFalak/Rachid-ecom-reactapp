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
  };
  return (
    <div className="RelatedProductsSlider">
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className="slide-single">
              <img src={`/Assets/images/ProductList/${image}`} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default RelatedProductsSlider;
