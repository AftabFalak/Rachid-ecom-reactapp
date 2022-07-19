import React, { useState } from 'react';
import './VenderProfile.css';

import { FaShuttleVan } from 'react-icons/fa';
import {
  AiFillStar,
  AiOutlineInstagram,
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { GoMail } from 'react-icons/go';
import { FiFacebook } from 'react-icons/fi';

import { Rating } from 'react-simple-star-rating';
import m2 from '../../assets/images/ProductList/2.jpg';
import m3 from '../../assets/images/ProductList/3.jpg';
import m4 from '../../assets/images/ProductList/4.jpg';
import m5 from '../../assets/images/ProductList/5.jpg';
import m6 from '../../assets/images/ProductList/6.jpg';
import m7 from '../../assets/images/ProductList/7.jpg';
import m8 from '../../assets/images/ProductList/7.jpg';
import m9 from '../../assets/images/ProductList/9.jpg';
import Gallery from '../Gallery';
import Annoucements from '../Announcements';

import { COLORS } from '../../assets/colors/colors';

export const items = [
  {
    favorite: true,
    category: 'jacket',
    img: m2,
  },
  {
    favorite: true,
    category: 'shirt',
    img: m3,
  },
  {
    favorite: true,
    category: 'shirt',
    img: m3,
  },
  {
    favorite: true,
    category: 'bag',
    img: m4,
  },
  {
    favorite: true,
    category: 'bag',
    img: m5,
  },
  {
    favorite: true,
    category: 'bag',
    img: m6,
  },
  {
    favorite: true,
    category: 'bag',
    img: m7,
  },
  {
    favorite: true,
    category: 'bag',
    img: m8,
  },
  {
    favorite: true,
    category: 'bag',
    img: m9,
  },
  {
    favorite: true,
    category: 'bag',
    img: m2,
  },
  {
    favorite: true,
    category: 'bag',
    img: m6,
  },
  {
    img: m2,
  },
  {
    favorite: true,
    category: 'bag',
    img: m3,
  },
  {
    favorite: true,
    category: 'bag',
    img: m3,
  },
  {
    favorite: true,
    category: 'bag',
    img: m4,
  },
  {
    favorite: true,
    category: 'bag',
    img: m5,
  },
  {
    favorite: true,
    category: 'bag',
    img: m6,
  },
  {
    favorite: true,
    category: 'bag',
    img: m7,
  },
  {
    favorite: true,
    category: 'bag',
    img: m8,
  },
  {
    favorite: true,
    category: 'bag',
    img: m9,
  },
];
const VenderProfile = ({ vendor, show, onClickBack }) => {
  const [rating, setRating] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const photos = [
    {
      src: 'http://example.com/example/img1.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1,
    },
  ];
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="VenderProfile">
      {show && (
        <div className="top-bar-vendder">
          <button className="back-btn" onClick={() => onClickBack(false)}>
            <i className="fa fa-chevron-left"></i>
          </button>
          <h4>{vendor.brandName}</h4>
          <div> </div>
        </div>
      )}
      <div className="vendorInfoView">
        <div className="vendorInfoView_top">
          <div
            className="coverImage"
            style={{ backgroundImage: `url('${vendor.coverImage}')` }}
          ></div>
          <div className="profilePhotoView">
            <div className="profilePhoto"></div>
          </div>
          <button
            className="followBrandButtonSmall d-md-none d-sm-block"
            onClick={() => setFavorite(!favorite)}
            style={{
              width: '20%',
              position: 'absolute',
              top: '40%',
              right: '10px',
            }}
          >
            {favorite ? (
              <span>
                <AiFillHeart className="FollowIconHeart" /> 169
              </span>
            ) : (
              <div>
                <AiOutlineHeart className="FollowIconHeart" /> 168
              </div>
            )}
          </button>
        </div>

        <div className="vendorInfoView_bottom">
          <div className="d-sm-none d-none d-md-block">
            <div className="row">
              <div className="col-md-5 brandInfoView">
                <div className="d-flex align-items-center">
                  <h3 className="brandName m-0">{vendor.brandName}</h3>
                  <div className="starRaitingView">
                    <Rating
                      onClick={handleRating}
                      ratingValue={80}
                      fillColor={COLORS.YELLOW_100}
                      size={22}
                      className="starRaiting"
                    />
                    <span className="raitingPoint">(250)</span>
                  </div>
                </div>
                <div>
                  <p className="brandDescription">
                    Finest engraved wood watch for your love ones.
                  </p>
                </div>
                <div className="venderSales">
                  <div>
                    <AiFillStar /> <span>Star seller | </span>
                    <span>40,284 sales |</span>
                  </div>
                </div>
                <div>
                <button
                  className="followBrandButton d-none d-md-block d-sm-none"
                  onClick={() => setFavorite(!favorite)}
                >
                  {favorite ? (
                    <span>
                      <AiFillHeart className="FollowIconHeart" /> Unfollow Brand
                      (169)
                    </span>
                  ) : (
                    <div>
                      <AiOutlineHeart className="FollowIconHeart" /> Follow
                      Brand (168)
                    </div>
                  )}
                </button>
                </div>  
                <div className="shippingType d-md-none d-sm-block">
                  <span className="align-items-center mr-2">
                    <FaShuttleVan className="shippingLogo" /> {'   '}
                    <span className="shipping-heading">Smooth shipping</span>|
                    {'   '}
                  </span>
                  <span className="align-items-center">
                    <GrMail className="shippingLogo" /> {'   '}
                    <spaan className="shipping-heading">Speedy replies</spaan>
                  </span>
                </div>
              </div>
              <div className="col-md-4 Shipping d-none d-md-block d-sm-none">
                <h4 className="ShippingMainHeader">
                  stayfineofficial is a Star Seller!
                </h4>
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <FaShuttleVan className="shippingLogo mb-2" />
                    <h5 className="shipping-heading">Smooth shipping</h5>
                    <p className="shipping-description m-0">
                      Has a history of shipping on time with tracking
                    </p>
                  </div>
                  <div className="col-md-6 mt-3">
                    <GrMail className="shippingLogo mb-2" />
                    <h5 className="shipping-heading">Speedy replies</h5>
                    <p className="shipping-description m-0">
                      Has a history of replying to messages quikly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ShopMember text-center d-md-block d-sm-block">
                <h4 className="ShopMemberMainHeading">Shop Owner</h4>
                <div className="mt-4">
                  <div className="memberProfileImg m-auto"></div>
                  <p className="memberName">Paul Tian</p>
                  <GoMail className="socialLogo" />{' '}
                  <AiOutlineInstagram className="socialLogo" />
                  <FiFacebook className="socialLogo" />
                </div>
              </div>
            </div>
          </div>
          {/* /////////////////////////////////////////////////////////// */}
          <div className="d-flex align-items-center justify-content-between d-md-none d-sm-block">
            <div className="brandInfoView ">
              <div className="d-flex align-items-center">
                <h3 className="brandName m-0">{vendor.brandName}</h3>
                <div className="starRaitingView">
                  <Rating
                    onClick={handleRating}
                    ratingValue={80}
                    fillColor={COLORS.YELLOW_100}
                    size={16}
                    className="starRaiting"
                  />
                  <span className="raitingPoint">(250)</span>
                </div>
              </div>
              <div>
                <p className="brandDescription">
                  Finest engraved wood watch your love.
                </p>
              </div>
              <div className="venderSales">
                <div>
                  <AiFillStar /> <span>Star seller | </span>
                  <span>40,284 sales |</span>
                </div>
              </div>
              <button
                className="followBrandButton d-none d-md-block d-sm-none"
                onClick={() => setFavorite(!favorite)}
              >
                {favorite ? (
                  <span>
                    <AiFillHeart className="FollowIconHeart" /> Unfollow Brand
                    (169)
                  </span>
                ) : (
                  <div>
                    <AiOutlineHeart className="FollowIconHeart" /> Follow Brand
                    (168)
                  </div>
                )}
              </button>

              <div className="shippingType d-md-none d-sm-block">
                <span className="align-items-center mr-2">
                  <FaShuttleVan className="shippingLogo" /> {'   '}
                  <span className="shipping-heading">Smooth shipping</span>|
                  {'   '}
                </span>
                <span className="align-items-center">
                  <GrMail className="shippingLogo" /> {'   '}
                  <spaan className="shipping-heading">Speedy replies</spaan>
                </span>
              </div>
            </div>
            <div className="ShopMember text-center d-md-block d-sm-block ">
              <h4 className="ShopMemberMainHeading">Shop Owner</h4>
              <div className="mt-1">
                <div className="memberProfileImg m-auto"></div>
                <p className="memberName">Paul Tian</p>
                <div className="mt-2">
                  <GoMail className="socialLogo" />{' '}
                  <AiOutlineInstagram className="socialLogo" />
                  <FiFacebook className="socialLogo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="announcements">
          <Annoucements />
        </div>
      </div>
      <Gallery
        showFilter={false}
        cards={items}
        heading={'Products'}
        categorieFilterOnTop
      />
    </div>
  );
};

export default VenderProfile;
