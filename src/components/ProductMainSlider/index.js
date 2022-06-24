import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ImagePopupGallery from "../ImagePopupGallery";
import "./index.css";
const ProductMainSlider = ({ images }) => {
  const [data, setData] = useState({
    photoIndex: 0,
    isOpen: false,
    images: images.map((i) => i.img),
  });
  useEffect(() => {
    setData({ ...data, images: images.map((i) => i.img) });
  }, [images]);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <ImagePopupGallery data={data} setData={setData} />
      <div className="ProductMainSlider">
        <Slider {...settings}>
          {images.map((image, index) => {
            return (
              <div className="heart-parent">
                <img src={image.img} />
                <button
                  className="heart-btn"
                  onClick={() =>
                    setData({ ...data, photoIndex: index, isOpen: true })
                  }
                >
                  <i className={`fa${image.liked ? "" : "r"} fa-heart`}></i>
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default ProductMainSlider;
