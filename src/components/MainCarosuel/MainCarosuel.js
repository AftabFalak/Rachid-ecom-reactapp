import React from 'react';

const MainCarosuel = () => {
  return (
    <div className="MainCarosuel">
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
              src={require('../../assets/images/Home/main.jpg')}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Heading</h5>
              <p>Paragraph</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src={require('../../assets/images/Home/main.jpg')}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Heading</h5>
              <p>Paragraph</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src={require('../../assets/images/Home/main.jpg')}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Heading</h5>
              <p>Paragraph</p>
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
