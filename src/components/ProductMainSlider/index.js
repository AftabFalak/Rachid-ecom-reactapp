import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import ImagePopupGallery from '../ImagePopupGallery';

import './index.css';

const ProductMainSlider = ({ images, viewDetail, onClose, cross }) => {
  const [data, setData] = useState({
    photoIndex: 0,
    isOpen: false,
    images: images.map((i) => i.img),
  });
  const [like, setLike] = useState(false);
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
                <img src={image.img} className="w-100" />

                <button
                  className="heart-btn"
                  style={{ position: 'absolute', left: '10px', top: '15px' }}
                  onClick={() => setLike(!like)}
                >
                  {like ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>

                <button
                  className="zoom-btn"
                  onClick={() =>
                    setData({ ...data, photoIndex: index, isOpen: true })
                  }
                >
                  <i className="fas fa-expand-arrows-alt"></i>
                </button>

                {viewDetail && (
                  <Link
                    className="view-detail-btn"
                    to="/product-detail"
                    onClick={() => onClose()}
                  >
                    View Detail
                  </Link>
                )}
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default ProductMainSlider;
