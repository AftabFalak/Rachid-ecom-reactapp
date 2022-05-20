/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import productImage from '../../assets/images/brand.png';
import productImage1 from '../../assets/images/bag.PNG';
import productImage2 from '../../assets/images/shoe.PNG';
import productImage3 from '../../assets/images/ring.PNG';

import './Content.css';
function Content() {
  return (
    <div className="">
      <div className="row p-5 ">
        <div className="col-6 mx-5">
          <div className="container-fluid bg-warning">
            <div className="row">
              <div className="column">
                <img src={productImage} />
              </div>
              <div className="column">
                <img src={productImage1} />
                <img src={productImage2} />
              </div>
              <div className="column">
                <img src={productImage3} />
                <img src={productImage1} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ border: '2px solid black' }} className="col-4 p-5 mx-4 ">
          <div className="row ">
            <div className="col-6">
              <img src={require('../../assets/images/brand2.PNG')} alt="" />
            </div>
            <div className="col-6">
              <p> i am image</p>
              <button className="btn btn-outline-primary">+ Follow</button>
            </div>
          </div>
          <div className="row ">
            <div className="col-6">
              <img src={require('../../assets/images/brand2.PNG')} alt="" />
            </div>
            <div className="col-6">
              <p> i am image</p>
              <button className="btn btn-outline-primary">+ Follow</button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img src={require('../../assets/images/brand2.PNG')} alt="" />
            </div>
            <div className="col-6">
              <p> i am image</p>
              <button className="btn btn-outline-primary">+ Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
