import React from 'react';
import './MainCarosuel.css';

import Slider from 'react-slick';

const MainCarosuel = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <div className="MainCarosuel" style={{ position: 'relative' }}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block "
              src={require('../../assets/images/Home/mainn.png')}
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="inner-section">
                <div>
                  <h5 className="text-light">Heading</h5>
                  <p className="text-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sint eos molestias distinctio dolor exercitationem ullam
                    possimus repudiandae iste inventore repellat eius similique,
                    earum fugit error voluptatem ab impedit aliquid! Ex.
                  </p>
                </div>
                <div
                  className="mx-5"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <Slider {...settings}>
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
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block "
              src={require('../../assets/images/Home/mainn.png')}
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="inner-section">
                <h5 className="text-light">Heading</h5>
                <p className="text-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  eos molestias distinctio dolor exercitationem ullam possimus
                  repudiandae iste inventore repellat eius similique, earum
                  fugit error voluptatem ab impedit aliquid! Ex.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src={require('../../assets/images/Home/mainn.png')}
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="inner-section">
                <h5 className="text-light">Heading</h5>
                <p className="text-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  eos molestias distinctio dolor exercitationem ullam possimus
                  repudiandae iste inventore repellat eius similique, earum
                  fugit error voluptatem ab impedit aliquid! Ex.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default MainCarosuel;
