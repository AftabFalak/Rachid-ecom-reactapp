import React from "react";
import Slider from "react-slick";
import './index.css'
const ProductMainSlider = ({images}) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="ProductMainSlider">
    <Slider {...settings}>
     {images.map(image=>{
        return <div><img src={`/Assets/images/ProductList/${image}`}/></div>
     })}
    </Slider>
    </div>
  );
};

export default ProductMainSlider;
