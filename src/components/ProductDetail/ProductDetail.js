/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from "react";
import "./ProductDetail.css";

import productImage from "../../assets/images/ProductCardImage/brand.png";
import card1 from "../../assets/images/ProductCardImage/shoe.PNG";
import card2 from "../../assets/images/ProductCardImage/ring.PNG";
import card3 from "../../assets/images/ProductCardImage/bag.PNG";

import brandLogo from "../../assets/images/VendorProfile/brand2.PNG";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetail = () => {
  // const { check, setCheck } = useState(false);
  const { count, setCount } = useState(0);

  const cards = [
    {
      image: card1,
      brandName: "Outfitter",
      productTitle: "Bag",
      stock: 4,
      price: 344.4,
      oldPrice: 344.4,
      brandLogo: brandLogo,
    },
    {
      image: card2,
      brandName: "Levise",
      productTitle: "Bag",
      stock: 4,
      price: 344.4,
      oldPrice: 344.4,
      brandLogo: brandLogo,
    },
    {
      image: card3,
      brandName: "Denizen",
      productTitle: "Bag",
      stock: 4,
      price: 344.4,
      oldPrice: 344.4,
      brandLogo: brandLogo,
    },
  ];
  return (
    <div className="ProductDetail">
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center">
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
        <div className="col-md-6 justify-content-left">
          <div className="top d-flex justify-content-start align-items-center">
            <img src={brandLogo} alt="BrandLogo" className="brandLogo" />
            <h1 className="ml-5 font-weight-bold">Fashion Clothing</h1>
          </div>
          <div className="priceView">
            <span className="oldPrice">$145.00</span>
            <span className="offer">50% Off</span>
            <h1 className="price">$87.00</h1>
            <div className="colorSelection d-flex">
              <div className="circle yellow" >
                {true ? <i className="fa fa-check check"></i> : ""}
              </div>
              <div className="circle white">
                {false ? <i className="fa fa-check check"></i> : ""}
              </div>
              <div className="circle pink">
                {false ? <i className="fa fa-check check"></i> : ""}
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
                <div className="logo" onClick={() => setCount(count - 1)}>
                  <i className="fa fa-less-than"></i>
                </div>
                <div className="countNumber">
                  <span>{'1'}</span>
                </div>
                <div className="logo" onClick={() => setCount(count + 1)}>
                  <i className="fa fa-greater-than"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="buttonView">
            <button className="btn addButton">Add to Cart</button>
          </div>
          <hr />
          <div className="wishList d-flex justify-content-between">
            <div>
              <span className="socialheading">Share it</span>
              <FaFacebookF className="socialicon" />
              <AiOutlineGooglePlus className="socialicon" />
              <BsTwitter className="socialicon" />
              <AiFillInstagram className="socialicon" />
            </div>
            <div className="addtowishlist">
              <i className="fa fa-heart"></i>
              <span>Add To Wish List</span>
            </div>
          </div>

          <hr />

          <div className="completeLook">
            <h1 className="text-align-left">Complete the look</h1>

            <div className="d-flex justify-content-between">
              {cards.map((item, index) => {
                return (
                  <div
                    className="card p-0 singleCard"
                    style={{ width: "15rem" }}
                    key={index}
                  >
                    <AiOutlineHeart
                      style={{
                        color: "black",
                        fontSize: "35px",
                        position: "absolute",
                        right: 10,
                        top: 10,
                        backgroundColor: "#ffff",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />

                    <AiOutlineSearch
                      style={{
                        color: "black",
                        fontSize: "35px",
                        position: "absolute",
                        right: 10,
                        top: 55,
                        backgroundColor: "#ffff",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                    <img
                      className="card-img-top cardImageBottom"
                      src={item.image}
                      alt="Card image cap"
                    />
                    <div className="card-body cardBody">
                      <button className="btn btn-outline-primary buttonOutline">
                        <AiOutlineShoppingCart/> ADD TO
                        CART
                      </button>
                      <div >
                        <img src={item.brandLogo} alt="" style={{width: '50px'}} />
                      <span className="brandName">{item.brandName}</span>
                      </div>
                      <p className="stockAva">
                        {item.productTitle} <span>{item.stock}</span>
                      </p>
                      <span className="price">$344.40</span>{" "}
                      <span className="oldPricecard text-decuration-underline">
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
