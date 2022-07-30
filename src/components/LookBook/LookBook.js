import React from 'react';
import { Container, Row, Media, Col } from 'reactstrap';
// import CommonLayout from '../../components/shop/common-layout';

const LookBookDot = ({ img, title, price, num, details, classes, link }) => {
  return (
    <div className={classes}>
      <span>{num}</span>
      <a href={link}>
        <div className="dot-showbox">
          <Media src={img} className="img-fluid blur-up lazyload" alt="" />
          <div className="dot-info">
            <h5 className="title">{title}</h5>
            <h5>{price}</h5>
            <h6>{details}</h6>
          </div>
        </div>
      </a>
    </div>
  );
};

const Lookbook = () => {
  return (
    <div>
      <section className="lookbook section-b-space ratio_square">
        <Container>
          <Row>
            <Col md="6">
              <div className="lookbook-block">
                <div>
                  <Media
                    src={require('../../assets/images/Home/mainn.png')}
                    className="img-fluid blur-up lazyload bg-img"
                  />
                </div>
                <LookBookDot
                  img={require('../../assets/images/pro3/bag.PNG')}
                  num={'1'}
                  title="tee"
                  details="details"
                  classes="lookbook-dot"
                  price="200$"
                  link="#"
                />
                <LookBookDot
                  img={require('../../assets/images/pro3/brand.png')}
                  num={'2'}
                  title="tee"
                  details="details"
                  classes="lookbook-dot dot2"
                  price="200$"
                  link="#"
                />
              </div>
            </Col>
            <Col md="6">
              <div className="lookbook-block">
                <div>
                  <Media
                    src={require('../../assets/images/Home/mainn.png')}
                    className="img-fluid blur-up lazyload bg-img"
                  />
                </div>
                <LookBookDot
                  img={require('../../assets/images/pro3/shoe.PNG')}
                  num={'1'}
                  title="tee"
                  details="details"
                  classes="lookbook-dot dot3"
                  price="200$"
                  link="#"
                />
                <LookBookDot
                  img={require('../../assets/images/pro3/ring.PNG')}
                  num={'2'}
                  title="tee"
                  details="details"
                  classes="lookbook-dot dot4"
                  price="200$"
                  link="#"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Lookbook;
