import React from "react";
import { Link } from "react-router-dom";
import './index.css'
const ProductView = ({ product, index, handleProduct }) => {
  return (
    <div className="ProductView">
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} width="100%" />
        </div>
        <div className="col-md-8">
          <div className="top d-flex  ">
            <h4 className=" font-weight-bold product-heading">
              Fashion Clothing
              <br />
              <span>
                By <Link to="/vendor">joseph</Link>
              </span>
            </h4>
            <img src={product.brand} alt="BrandLogo" className="brandLogo" />
          </div>
          <div className="priceView">
            <span className="oldPrice">$345.00</span>
            <span className="offer">$234.00</span>

            <div className="short-description"></div>
            {product.colors && (
              <div className="colorSelection d-flex">
                <p>Color: </p>
                {product.colors.map((color) => {
                  return (
                    <div
                      onClick={() => handleProduct({ color }, index)}
                      className={`circle ${
                        color === product.color ? "color-selected" : ""
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
                      onClick={() => handleProduct({ size }, index)}
                      className={`size ${
                        size === product.size ? "size-selected" : ""
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
            <button className="btn addButton">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
