import React from 'react';
import Slider from 'react-slick';

import { useNavigate } from 'react-router-dom';

import './MainCarosuel.css';

const MainCarosuel = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate('/shop');
  };
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="MainCarosuel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide  d-none d-md-block"
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
                className="d-block"
                src={require('../../assets/images/Home/mainn.png')}
              />

              <div className="carousel-caption inner-section">
                <div>
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
                          <button
                            onClick={handelClick}
                            className="single-product-button"
                          >
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
                          <button
                            onClick={handelClick}
                            className="single-product-button"
                          >
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

          <div className="carousel-item">
            <div style={{ position: 'relative' }}>
              <img
                className="d-block "
                src={require('../../assets/images/Home/main2.png')}
              />
              <div className="carousel-caption inner-section d-none d-md-block">
                <div>
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
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebpCF1h7kO8JojWabWZsFt5gZvd8yR95OlQ&usqp=CAU"
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
                          <button
                            onClick={handelClick}
                            className="single-product-button"
                          >
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
                              src="https://www.billerudkorsnas.com/globalassets/managed-packaging/shoes-kuru.png"
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
                          <button
                            onClick={handelClick}
                            className="single-product-button"
                          >
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

      {/* ///////////////////////////////////////////////////////////// */}
      <div className="d-md-none">
        <div className="inner-section-small-main">
          <Slider {...settings}>
            <div className="slide-single-small">
              <img
                src={require('../../assets/images/Home/mainn.png')}
                style={{
                  width: '100%',
                  height: '420px',
                  margin: '0px',
                }}
              />
            </div>

            <div className="slide-single-small">
              <img
                src={require('../../assets/images/Home/mainn.png')}
                style={{
                  width: '100%',
                  height: '420px',
                  margin: '0px',
                }}
              />
            </div>
          </Slider>
        </div>
        <div className="inner-section-small">
          <div>
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
                  <h1 className="single-product-heading-small">
                    Red Leather Jacket.
                  </h1>

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
                          width: '120px',
                          height: '120px',
                          resize: 'contain',
                        }}
                      />
                    </div>
                    <div className="priceDiv text-align-center">
                      <p className="single-product-price-small">$250.00</p>
                    </div>
                  </div>
                  <div className="buttonDiv">
                    <button
                      onClick={handelClick}
                      className="single-product-button"
                    >
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
                  <h2 className="single-product-heading-small">
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
                          width: '120px',
                          height: '120px',
                          resize: 'contain',
                        }}
                      />
                    </div>
                    <div className="priceDiv text-align-center">
                      <p className="single-product-price-small">$250.00</p>
                    </div>
                  </div>
                  <div className="buttonDiv">
                    <button
                      onClick={handelClick}
                      className="single-product-button"
                    >
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
  );
};

export default MainCarosuel;
