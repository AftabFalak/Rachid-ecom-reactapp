import React from 'react';
import MainCarosuel from '../../components/MainCarosuel/MainCarosuel';
import BundleView from '../../components/BundleView';

import { TbShirt } from 'react-icons/tb';
import Slider from 'react-slick';
import './index.css';
const Home = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
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

      <div className="m-5 bg-light slide-parent">
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
        <BundleView header={false} />
        <BundleView header={false} />
        <BundleView header={false} />
      </div>
    </div>
  );
};

export default Home;
