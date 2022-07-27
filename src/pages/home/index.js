import React, { useState } from 'react';
import Slider from 'react-slick';

import MainCarosuel from '../../components/MainCarosuel/MainCarosuel';
import BundleView from '../../components/BundleView';

import './index.css';

const Home = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
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
    <div id="Home">
      <MainCarosuel />

      <div className="m-3 bg-light slide-parent">
        <Slider {...settings}>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/art.jpeg" />
          </div>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/bea.jpeg" />
          </div>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/fur.jpeg" />
          </div>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/com.jpeg" />
          </div>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/sprt.jpeg" />
          </div>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/art.jpeg" />
          </div>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/art.jpeg" />
          </div>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/bea.jpeg" />
          </div>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/fur.jpeg" />
          </div>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/com.jpeg" />
          </div>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/sprt.jpeg" />
          </div>
          <div className="slide-single">
            <img src="/Assets/images/brand-logos/art.jpeg" />
          </div>
        </Slider>
      </div>

      <div>
        <BundleView header={false} rotate={true} />
        <BundleView header={false} rotate={false} />
        <BundleView header={false} rotate={true} />
      </div>
    </div>
  );
};

export default Home;
