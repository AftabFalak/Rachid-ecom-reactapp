/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from "react";
import "./ProductDetail.css";

import productImage from "../../assets/images/brand.png";
import brandLogo from "../../assets/images/brand2.PNG";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetail = () => {
  const { check, setCheck } = useState(false);
  const cards = [
    {
      image: productImage,
      brandName: "Outfitter",
      productTitle: "Bag",
      stock: 4,
      price: 344.4,
      oldPrice: 344.4,
    },
    {
      image: productImage,
      brandName: "Outfitter",
      productTitle: "Bag",
      stock: 4,
      price: 344.4,
      oldPrice: 344.4,
    },
    {
      image: productImage,
      brandName: "Outfitter",
      productTitle: "Bag",
      stock: 4,
      price: 344.4,
      oldPrice: 344.4,
    },
  ];
  return (
    <div className="ProductDetail">
      <div className="row">
        <div className="col-md-6 border">
          <div
            id="carouselExampleIndicators"
            className="carousel slide w-50"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block" src={productImage} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src={productImage}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img className="d-block" src={productImage} alt="Third slide" />
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
        <div className="col-md-6 border justify-content-left">
          <div className="top d-flex justify-content-start align-items-center">
            <img src={brandLogo} alt="BrandLogo" className="brandLogo" />
            <h1 className="ml-5 font-weight-bold">Fashion Clothing</h1>
          </div>
          <div className="priceView">
            <span className="oldPrice">$145.00</span>
            <span className="offer">50% Off</span>
            <h1 className="price">$87.00</h1>
            <div className="colorSelection d-flex">
              <div className="circle yellow" onClick={() => setCheck(true)}>
                {true ? <i className="fa fa-check check"></i> : ""}
              </div>
              <div className="circle white">
                {true ? <i className="fa fa-check check"></i> : ""}
              </div>
              <div className="circle pink">
                {true ? <i className="fa fa-check check"></i> : ""}
              </div>
            </div>
          </div>

          <div className="productDetail">
            <h3>Product Heading</h3>
            <p className="productDetailPara">
              It is a long establishes fact that a reader will be distracted by
              the content of the page when lookin at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal distribute.
            </p>
          </div>
          <hr />
          <div className="addToCart">
            <div className="size">
              <span>S</span> <span>M</span> <span>L</span>
            </div>
            <span className="instock">In Stock</span>

            <div className="counterView">
              <span className="quantity">Quantity</span>

              <div className="counterButton">
                <div className="logo">
                  <i class="fa fa-less-than"></i>
                </div>
                <div className="countNumber">
                  <span>{"1"}</span>
                </div>
                <div className="logo">
                  <i class="fa fa-greater-than"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="buttonView">
          <button className="btn addButton">Add to Cart</button>
          </div>
          <hr />
          <div className="wishList">Add To Wish List</div>
          <div className="completeLook">
            <h1>Complete the look</h1>

            <div className="row">
              {cards.map((item, index) => {
                return (
                  <div
                    className="card p-0"
                    style={{ width: "15rem" }}
                    key={index}
                  >
                    <img
                      className="card-img-top"
                      src={item.image}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <button className="btn btn-outline-primary buttonOutline">
                        <i className="fa-solid fa-cart-arrow-down"></i> ADD TO
                        CART
                      </button>
                      <p className="brandName">{item.brandName}</p>
                      <p className="stock">
                        {item.productTitle} <span>{item.stock}</span>
                      </p>
                      <span className="price">$344.40</span>{" "}
                      <span className="oldPrice text-decuration-underline">
                        $410.00
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
