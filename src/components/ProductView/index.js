import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ProductView = ({ product, index, handleProduct }) => {
  return (
    <div className="ProductView p-0 mt-3">
      <hr />

      <div className="row p-0">
        <div className="col-md-4">
          <img src={product.image} width="100%" />
        </div>
        <div className="col-md-8 p-1 product-info">
          <div className="top d-flex">
            <h4 className="product-heading">
              {product.title}
              <br />
              <span>
                By <Link to="/vendor">joseph</Link>
              </span>
            </h4>
            <a href='/vendor'>
            <img src={product.brand} alt="BrandLogo" className="brandLogo" />
            </a>
          </div>
          <div className="priceView">
            <span className="oldPrice">$345.00</span>
            <span className="offer">$234.00</span>

            <div className="short-description"></div>
            {product.colors && (
              <div className="colorSelection d-flex">
                {product.colors.map((color) => {
                  return (
                    <div
                      onClick={() => handleProduct({ color }, index)}
                      className={`circle ${
                        color === product.color ? 'color-selected' : ''
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
          </div>

          <div className="addToCart">
            <div className="counterButton">
              <button
                className="logo minus-btn"
                disabled={product.quantity == 1}
                onClick={() =>
                  handleProduct(
                    {
                      quantity: product.quantity - 1,
                    },
                    index
                  )
                }
              >
                <i className="fa fa-minus"></i>
              </button>
              <div className="countNumber">
                <span>{product.quantity}</span>
              </div>
              <button
                disabled={product.quantity === 10}
                className="logo plus-btn"
                onClick={() =>
                  handleProduct(
                    {
                      quantity: product.quantity + 1,
                    },
                    index
                  )
                }
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
            {product.colors && (
              <div className="sizeSelection d-flex">
                <select className="select-size">
                  <option value={''} selected disabled>
                    Select Size
                  </option>
                  {product.sizes.map((size) => {
                    return (
                      <option
                        onClick={() => handleProduct({ size }, index)}
                        className={`size ${
                          size === product.size ? 'size-selected' : ''
                        }`}
                      >
                        {size}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}
          </div>
          <button className="btn addButton ">
            <i className="fa fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
