import React from 'react';
import MainCarosuel from '../../components/MainCarosuel/MainCarosuel';
import BundleView from '../../components/BundleView';

import { TbShirt } from 'react-icons/tb';
import Slider from 'react-slick';

const Home = () => {
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
    <div className="Home">
      <MainCarosuel />

      <div className="m-5 bg-light">
        <Slider {...settings}>
          <div className="slide-single">
            <TbShirt style={{ fontSize: '30px' }} />
          </div>
        </Slider>
      </div>

      <BundleView />
      <BundleView right={false} />
      <BundleView />
    </div>
  );
};

export default Home;
