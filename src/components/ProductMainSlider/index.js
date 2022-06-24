import React from "react";
import Slider from "react-slick";
import './index.css'
const ProductMainSlider = ({images}) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="ProductMainSlider">
    <Slider {...settings}>
     {images.map(image=>{
        return <div className="heart-parent">
          <img src={image.img}/>
          <button className="heart-btn"><i className={`fa${image.liked?'':'r'} fa-heart`}></i></button>
          </div>
     })}
    </Slider>
    </div>
  );
};

export default ProductMainSlider;
