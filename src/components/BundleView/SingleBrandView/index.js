import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import BrandGroupImages from '../../BrandGroupImages';
import BundleProductsSlider from '../../BundleProductsSlider';

import './index.css';

const SingleBrandView = ({ view, rotate, isBundleView, isBundleView_new }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      {isBundleView && isBundleView_new ? (
        <div className="row">
          <div className="col-md-6">
            <div className="bundle-img position-relative">
              <img src={view.bundle} width={'100%'} height={'100%'} />
              <div className="bundle-content">
                <div>
                  <button
                    onClick={() => setLiked(!liked)}
                    className="heart-btn"
                  >
                    {liked ? (
                      <span>
                        <i className="fa fa-heart"></i>
                      </span>
                    ) : (
                      <div>
                        <i className="far fa-heart"></i>
                      </div>
                    )}
                  </button>
                  <Link to="/bundle-view" className="shop-btn">
                    Shop the Look
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-sm-block d-md-none my-3 mx-2">
              <BrandGroupImages products={view.products} />
            </div>
          </div>
          <div className="col-md-6">
            <BundleProductsSlider products={view.products} />
            <div className="d-none d-md-block mx-2">
              <BrandGroupImages products={view.products} />
            </div>
          </div>
        </div>
      ) : (
        <>
          {rotate ? (
            <div className="row">
              <div className="col-md-6">
                <div className="bundle-img position-relative">
                  <img src={view.bundle} width={'100%'} height={'100%'} />
                  <div className="bundle-content">
                    <div>
                      <button
                        onClick={() => setLiked(!liked)}
                        className="heart-btn"
                      >
                        {liked ? (
                          <span>
                            <i className="fa fa-heart"></i>
                          </span>
                        ) : (
                          <div>
                            <i className="far fa-heart"></i>
                          </div>
                        )}
                      </button>
                      <Link to="/bundle-view" className="shop-btn">
                        Shop the Look
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="d-sm-block d-md-none my-3 mx-2">
                  <BrandGroupImages products={view.products} />
                </div>
              </div>
              <div className="col-md-6">
                <BundleProductsSlider products={view.products} />
                <div className="d-none d-md-block mx-2">
                  <BrandGroupImages products={view.products} />
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="d-none d-md-block">
                <div className="row">
                  <div className="col-md-6">
                    <BundleProductsSlider products={view.products} />
                    <BrandGroupImages products={view.products} />
                  </div>
                  <div className="col-md-6">
                    <div className="bundle-img position-relative">
                      <img src={view.bundle} width={'100%'} />
                      <div className="bundle-content">
                        <div>
                          <button
                            onClick={() => setLiked(!liked)}
                            className="heart-btn"
                          >
                            {liked ? (
                              <span>
                                <AiFillHeart />
                              </span>
                            ) : (
                              <div>
                                <AiOutlineHeart />
                              </div>
                            )}
                          </button>
                          <Link to="/bundle-view" className="shop-btn">
                            Shop the Look
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-none">
                <div className="row">
                  <div className="col-md-6">
                    <div className="bundle-img position-relative">
                      <img src={view.bundle} width={'100%'} />
                      <div className="bundle-content">
                        <div>
                          <button
                            onClick={() => setLiked(!liked)}
                            className="heart-btn"
                          >
                            {liked ? (
                              <span>
                                <AiFillHeart />
                              </span>
                            ) : (
                              <div>
                                <AiOutlineHeart />
                              </div>
                            )}
                          </button>
                          <Link to="/bundle-view" className="shop-btn">
                            Shop the Look
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <BrandGroupImages products={view.products} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <BundleProductsSlider products={view.products} />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SingleBrandView;
