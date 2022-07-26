import React, { useState } from 'react';
import MainCarosuel from '../../components/MainCarosuel/MainCarosuel';
import BundleView from '../../components/BundleView';

import { TbShirt } from 'react-icons/tb';
import Slider from 'react-slick';
import './index.css';
import Gallery from '../../components/Gallery';
import { items } from '../../components/VenderProfile/VenderProfile';
const Home = () => {
  const [reviewsTab, setReviewsTab] = useState(1);
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
      {/* <div className="tab-container-profile">
        <div
          onClick={() => setReviewsTab(1)}
          className={`tab ${reviewsTab === 1 && 'tab-active'}`}
        >
          <p> Outfitter's Products</p>
        </div>

        <div
          onClick={() => setReviewsTab(2)}
          className={`tab ${reviewsTab === 2 && 'tab-active'}`}
        >
          <p>Get Inspiration</p>
        </div>
      </div> */}
      {/* {reviewsTab === 1 ? (
        <Gallery
          showFilter={false}
          cards={items}
          heading={'Products'}
          categorieFilterOnTop
        />
      ) : (
        <div>
          <BundleView header={false} />
          <BundleView header={false} rigt={true} />
          <BundleView header={false} />
        </div>
      )} */}

      <div>
        <BundleView header={false} />
        <BundleView header={false} rigt={true} />
        <BundleView header={false} />
      </div>
    </div>
  );
};

export default Home;
