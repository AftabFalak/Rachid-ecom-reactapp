/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from "react";
import "./ProductDetail.css";
import Faq from "react-faq-component";

import productImage from "../../assets/images/ProductCardImage/brand.png";
import card1 from "../../assets/images/ProductCardImage/shoe.PNG";
import card2 from "../../assets/images/ProductCardImage/ring.PNG";
import card3 from "../../assets/images/ProductCardImage/bag.PNG";
import { Rating } from "react-simple-star-rating";
import brandLogo from "../../assets/images/VendorProfile/brand2.PNG";

import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import ProductMainSlider from "../ProductMainSlider";
import RelatedProductsSlider from "../RelatedProductsSlider";
import Reviews from "../Reviews";
import BundleView from "../BundleView";
import Policies from "../core/Policies";
import MeetSeller from "../core/MeetSeller";
const ProductDetail = () => {
  // const { check, setCheck } = useState(false);
  const [selection, setSelection] = useState({
    color: "",
    size: "",
    quantity: 1,
  });
  const [reviewsTab,setReviewsTab]=useState(1)

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
    images: [
      {
        img: "/Assets/images/ProductList/p1.jpeg",
        liked: false,
      },
      {
        img: "/Assets/images/ProductList/p1.jpeg",
        liked: true,
      },
      {
        img: "/Assets/images/ProductList/p1.jpeg",
        liked: false,
      },
    ],
    otherImages: ["ring.PNG", "shoe.PNG", "bag.PNG", "ring.PNG"],
    colors: ["black", "yello", "green"],
    sizes: ["L", "XL", "XXL"],
    faqs: {
      title: "",
      rows: [
        {
          title: "Shipping and return policies",
          content: <Policies />,
        },
        {
          title: "Contant your sellers",
          content: <MeetSeller />,
        },
      ],
    },
  };

  return (
    <div className="ProductDetail container-fluid">
      <div className="row">
        <div className="col-md-4">
          <ProductMainSlider images={product.images} />

          <div className="">
            <div className="tab-container">
              <div onClick={()=>setReviewsTab(1)} className={`tab ${reviewsTab===1&& 'tab-active'}`}>
                <p> Review for this item</p>
                <span>22</span>
              </div>

              <div  onClick={()=>setReviewsTab(2)} className={`tab ${reviewsTab===2&& 'tab-active'}`}>
                <p> Review for this shop</p>
                <span>13</span>
              </div>
            </div>
          </div>
          {reviewsTab===1? <div className="d-flex mt-4">
            <h3>22 reviews </h3>
            <div>
              <Rating
                // onClick={handleRating}
                ratingValue={80}
                fillColor={"gold"}
                size={26}
                className="starRaiting"
              />
            </div>
          </div>:<div className="d-flex mt-4">
            <h3>13 reviews </h3>
            <div>
              <Rating
                // onClick={handleRating}
                ratingValue={30}
                fillColor={"gold"}
                size={26}
                className="starRaiting"
              />
            </div>
          </div>}
         
          <Reviews />

          {/* <div
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
          </div> */}
        </div>
        <div className="col-md-8 justify-content-left">
          <div className="top d-flex  ">
            <h2 className=" font-weight-bold product-heading">
              Fashion Clothing
              <br />
              <span>
                By <Link to="/vendor">joseph</Link>
              </span>
            </h2>
            <img
              src={"/Assets/images/VendorProfile/brand3.jpeg"}
              alt="BrandLogo"
              className="brandLogo"
            />
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
                      <p className="w-100 m-0 mb-1">{size}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="addToCart">
            <div className="counterButton">
              <button
                className="logo minus-btn"
                disabled={selection.quantity == 1}
                onClick={() =>
                  setSelection({
                    ...selection,
                    quantity: selection.quantity - 1,
                  })
                }
              >
                <i className="fa fa-minus"></i>
              </button>
              <div className="countNumber">
                <span>{selection.quantity}</span>
              </div>
              <button
                disabled={selection.quantity === 10}
                className="logo plus-btn"
                onClick={() =>
                  setSelection({
                    ...selection,
                    quantity: selection.quantity + 1,
                  })
                }
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
            <button className="btn addButton">Add to Cart</button>
          </div>

          <hr />
          <div className="wishList d-flex">
            <div className="addtowishlist">
              <i className="fa fa-heart"></i>
              <span> Follow Brand</span>
            </div>

            <div className="d-flex share-box">
              <span className="socialheading">Share:</span>
              <span className="socialicon">
                <FaFacebookF />
              </span>
              <span className="socialicon">
                <BsTwitter />
              </span>
              <span className="socialicon">
                <AiFillInstagram />
              </span>
            </div>
          </div>

          <hr style={{ marginBottom: "0px" }} />

          <Faq data={product.faqs} />

          <RelatedProductsSlider images={product.otherImages} />

          {/* <div className="completeLook">
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
          </div> */}
        </div>
        <div className="col-md-12">
          <BundleView />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
