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
import { Link } from "react-router-dom";

const ProductDetail = () => {
  // const { check, setCheck } = useState(false);
  const { count, setCount } = useState(0);
  const [selection, setSelection] = useState({
    color: "",
    size: "",
  });
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

  const product = {
    colors: ["black", "yello", "green"],
    sizes: ["L", "XL", "XXL"],
  };
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
          <div className="top d-flex  ">
            <h2 className=" font-weight-bold product-heading">
              Fashion Clothing
              <br />
              <span>
                By <Link to="/vendor">joseph</Link>
              </span>
            </h2>
            <img src={brandLogo} alt="BrandLogo" className="brandLogo" />
          </div>
          <div className="priceView">
            <span className="oldPrice">$345.00</span>
            <span className="offer">$234.00</span>

            <div className="short-description">
              <p>
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
            {product.colors && (
              <div className="colorSelection d-flex">
                <p>Color: </p>
                {product.colors.map((color) => {
                  return (
                    <div
                      onClick={() => setSelection({ ...selection, color })}
                      className={`circle ${
                        color === selection.color ? "color-selected" : ""
                      }`}
                    >
                      <div
                        style={{ backgroundColor: color }}
                        className="inner-circle"
                      ></div>
                    </div>
                  );
                })}
              </div>
            )}
            {product.colors && (
              <div className="sizeSelection d-flex">
                <p>Size: </p>
                {product.sizes.map((size) => {
                  return (
                    <div
                      onClick={() => setSelection({ ...selection, size: size })}
                      className={`size ${
                        size === selection.size ? "size-selected" : ""
                      }`}
                    >
                      <p className="w-100 m-0 mb-1" >{size}</p>
                    </div>
                  );
                })}
              </div>
            )}
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
                  <span>{"1"}</span>
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
                        <AiOutlineShoppingCart /> ADD TO CART
                      </button>
                      <div>
                        <img
                          src={item.brandLogo}
                          alt=""
                          style={{ width: "50px" }}
                        />
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
