import React from 'react';
import Slider from 'react-slick';

import './MainCarosuel.css';

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
    <div id="MainCarosuel">
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
            <div style={{ position: 'relative' }}>
              <img
                className="d-block "
                src={require('../../assets/images/Home/mainn.png')}
              />
              <div className="carousel-caption inner-section">
                <div className="m-5">
                  <Slider {...settings}>
                    <div className="slide-single">
                      <div
                        style={{
                          height: '380px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <h2 className="single-product-heading">
                          Red Leather Jacket.
                        </h2>

                        <div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <img
                              src="https://resources.mandmdirect.com/Images/_default/j/j/5/jj5767_1_large.jpg"
                              style={{
                                width: '100px',
                                height: '100px',
                                resize: 'contain',
                              }}
                            />
                          </div>
                          <div className="priceDiv text-align-center">
                            <p className="single-product-price">$250.00</p>
                          </div>
                        </div>
                        <div className="buttonDiv">
                          <button to="/shop" className="single-product-button">
                            Go To Shop
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="slide-single">
                      <div
                        style={{
                          height: '380px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <h2 className="single-product-heading">
                          Green Hoodi Jacket.
                        </h2>
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <img
                              src="https://qph.cf2.quoracdn.net/main-qimg-9849ddf9c427d3389790aa52dab826c3-lq"
                              style={{
                                width: '100px',
                                height: '100px',
                                resize: 'contain',
                              }}
                            />
                          </div>
                          <div className="priceDiv text-align-center">
                            <p className="single-product-price">$250.00</p>
                          </div>
                        </div>
                        <div className="buttonDiv">
                          <button className="single-product-button">
                            Go To Shop
                          </button>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="carousel-item">
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
          </div> */}
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
