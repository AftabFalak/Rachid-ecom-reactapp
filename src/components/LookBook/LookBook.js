import React, { useState } from 'react';
import Slider from 'react-slick';
import { Container, Row, Media, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './LookBook.css';

const LookBookDot = ({
  img,
  brd,
  title,
  price,
  num,
  details,
  classes,
  link,
}) => {
  const [dot, setDot] = useState(false);
  return (
    <div className={`${classes}`}>
      <span>{num}</span>

      <a href={link}>
        <div className="dot-showbox single-dot" style={{ width: '180px' }}>
          <Media
            src={img}
            className="img-fluid blur-up lazyload"
            style={{ height: '50%!important' }}
            alt=""
          />
          <div className="dot-info">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="title-dot">{title}</p>
                <p className="price-dot">{price}</p>
              </div>
              <Link to="/vendor">
                <Media src={brd} className="img-brand" alt="" />
              </Link>
            </div>
          </div>
          <button className="addToCart">Add To Cart</button>
        </div>
      </a>
    </div>
  );
};

const Lookbook = () => {
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="lookbook section-b-space ratio_square border p-0 m-0 w-100">
      <div className="d-none d-md-block">
        <Slider {...settings}>
          <div className="d-flex justify-content-center align-items-center">
            <div className="lookbook-block mr-1">
              <div>
                <Media
                  src={require('../../assets/images/Home/ye.png')}
                  className="img-fluid blur-up lazyload bg-img w-100 h-100"
                />
              </div>
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/niche.jpeg')}
                num={'1'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot"
                price="200$"
                link="#"
              />
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/vitra.jpeg')}
                num={'2'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot dot2"
                price="200$"
                link="#"
              />
            </div>

            <div className="lookbook-block">
              <div>
                <Media
                  src={require('../../assets/images/Home/ye.png')}
                  className="img-fluid blur-up lazyload w-100 h-100"
                />
              </div>
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/vitra.jpeg')}
                num={'1'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot dot3"
                price="200$"
                link="#"
              />
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/vitra.jpeg')}
                num={'2'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot dot4"
                price="200$"
                link="#"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="lookbook-block mr-1">
              <div>
                <Media
                  src={require('../../assets/images/Home/ye.png')}
                  className="img-fluid blur-up lazyload bg-img w-100"
                />
              </div>
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/vitra.jpeg')}
                num={'1'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot"
                price="200$"
                link="#"
              />
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/vitra.jpeg')}
                num={'2'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot dot2"
                price="200$"
                link="#"
              />
            </div>

            <div className="lookbook-block">
              <div>
                <Media
                  src={require('../../assets/images/Home/ye.png')}
                  className="img-fluid blur-up lazyload bg-img w-100"
                />
              </div>
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/niche.jpeg')}
                num={'1'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot dot3"
                price="200$"
                link="#"
              />
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/niche.jpeg')}
                num={'2'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot dot4"
                price="200$"
                link="#"
              />
            </div>
          </div>
        </Slider>
      </div>

      <div className="d-md-none">
        <Slider {...settings}>
          <div className="d-flex justify-content-center align-items-center">
            <div className="lookbook-block">
              <div>
                <Media
                  src={require('../../assets/images/Home/ye.png')}
                  className="img-fluid blur-up lazyload w-100"
                  style={{ height: '65vh' }}
                />
              </div>
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/vitra.jpeg')}
                num={'1'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot dot3"
                price="200$"
                link="#"
              />
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/vitra.jpeg')}
                num={'2'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot dot4"
                price="200$"
                link="#"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="lookbook-block">
              <div>
                <Media
                  src={require('../../assets/images/Home/ye.png')}
                  className="img-fluid blur-up lazyload bg-img w-100"
                />
              </div>
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/niche.jpeg')}
                num={'1'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot dot3"
                price="200$"
                link="#"
              />
              <LookBookDot
                img={require('../../assets/images/pro3/ring.PNG')}
                brd={require('../../assets/images/VendorProfile/niche.jpeg')}
                num={'2'}
                title="Dolor ad hoc "
                details="details"
                classes="lookbook-dot dot4"
                price="200$"
                link="#"
              />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Lookbook;
