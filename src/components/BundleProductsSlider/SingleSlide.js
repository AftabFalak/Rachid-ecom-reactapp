import React, { useState } from "react";
import "./index";
const SingleSlide = ({ product }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="slide-single">
      <div className="buttons">
        <span>
          <i className="fa fa-cart-plus"></i>
        </span>
        <span className="icon">
          <i className="fa fa-heart"></i>
        </span>

        <button onClick={() => setLiked(!liked)} className="heart-btn">
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

        <span className="icon">
          <i className="fa fa-search"></i>
        </span>
      </div>
      <img className="p-img" src={`${product.image}`} />
      <div className="d-flex py-1 slide-content">
        <div className="slide-text">
          <p className="p-title">{product.title}</p>
          <p className="p-price">{product.price}</p>
        </div>
        <div className="brand-container">
          <img className="p-brand" src={product.brand} />
        </div>
      </div>
    </div>
  );
};

export default SingleSlide;
