import React, { useState } from 'react';
import Faq from 'react-faq-component';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';

import ProductMainSlider from '../ProductMainSlider';
import RelatedProductsSlider from '../RelatedProductsSlider';
import BundleView from '../BundleView';
import Policies from '../core/Policies';
import MeetSeller from '../core/MeetSeller';
import ReviewsTab from '../ReviewsTabs';

import './QuickProductDetail.css';

const QuickProductDetail = ({
  quickView,
  setQuick,
  viewDetail,
  onClose,
  cross,
}) => {
  const [selection, setSelection] = useState({
    color: '',
    size: '',
    quantity: 1,
  });
  const [liked, setLiked] = useState(false);

  const product = {
    images: [
      {
        img: '/Assets/images/ProductList/p1.jpeg',
        liked: false,
      },
      {
        img: '/Assets/images/ProductList/p1.jpeg',
        liked: true,
      },
      {
        img: '/Assets/images/ProductList/p1.jpeg',
        liked: false,
      },
    ],
    otherImages: ['ring.PNG', 'shoe.PNG', 'bag.PNG', 'ring.PNG'],
    colors: ['black', 'yello', 'green'],
    sizes: ['L', 'XL', 'XXL'],
    faqs: {
      title: '',
      rows: [
        {
          title: 'Shipping and return policies',
          content: <Policies />,
        },
        {
          title: 'Contant your sellers',
          content: <MeetSeller />,
        },
      ],
    },
  };

  return (
    <div className="QuickProductDetail">
      <div className="row m-0 p-0">
        <div className="col-md-4">
          <ProductMainSlider
            viewDetail={viewDetail}
            images={product.images}
            onClose={onClose}
          />
          {cross || cross === true ? (
            <button
              className="clsButton d-md-none"
              onClick={() => {
                onClose();
              }}
            >
              <IoCloseOutline />
            </button>
          ) : (
            <></>
          )}
          {!quickView && (
            <div className="d-none d-md-block">
              <ReviewsTab />
            </div>
          )}
        </div>
        <div className="col-md-8 justify-content-left ">
          <div className="content-product">
            <div className="top d-flex  ">
              <h3 className=" font-weight-bold text-dark product-heading">
                Fashion Clothing
                <br />
                <span>
                  By <Link to="/vendor">joseph</Link>
                </span>
              </h3>
              <a href="/vendor">
                <img
                  src={'/Assets/images/VendorProfile/brand3.jpeg'}
                  alt="BrandLogo"
                  className="brandLogo"
                />
              </a>
            </div>
            <div className="priceView">
              <span className="oldPrice">$345.00</span>
              <span className="offer">$234.00</span>

              <div className="short-description">
                <p>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took.
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
                          color === selection.color ? 'color-selected' : ''
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
                        onClick={() =>
                          setSelection({ ...selection, size: size })
                        }
                        className={`size ${
                          size === selection.size ? 'size-selected' : ''
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
              <button className="addButton">Add to Cart</button>
            </div>
            <hr />
            <div className="wishList d-flex  align-items-center">
              <button
                onClick={() => setLiked(!liked)}
                className="addtowishlist"
              >
                {liked ? (
                  <div className="d-inline-block m-0">
                    <i className="fa fa-heart"></i>
                    <span> Unfollow Brand</span>
                  </div>
                ) : (
                  <span>
                    <i className="far fa-heart"></i>
                    <span> Follow Brand</span>
                  </span>
                )}
              </button>

              <div className="d-flex share-box jusify-content-center align-items-center">
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

            <hr style={{ marginBottom: '0px' }} />

            {!quickView && <Faq data={product.faqs} />}

            <h3 className="completeHeading">Complete The Look</h3>

            <RelatedProductsSlider images={product.otherImages} />
          </div>

          {!quickView && (
            <div className="d-md-none">
              <ReviewsTab />
            </div>
          )}
        </div>
        {!quickView && (
          <div className="col-md-12">
            <BundleView />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickProductDetail;
