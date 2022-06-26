import React from "react";
import BrandGroupImages from "../../BrandGroupImages";
import BundleProductsSlider from "../../BundleProductsSlider";
import './index.css'
const SingleBrandView = ({ view, right }) => {
  return (
    <div>
      {right ? (
        <div className="row">
          <div className="col-md-6">
            <BundleProductsSlider products={view.products} />
            <BrandGroupImages products={view.products} />
          </div>
          <div className="col-md-6">
            <div className="bundle-img position-relative">
              <img src={view.bundle} width={"100%"} />
              <div className="bundle-content">
                <div>
                  <button className="heart-btn">
                    
                <i className={`fa${false ? "" : "r"} fa-heart`}></i>
                  </button>
                  <button className="shop-btn">Shoppo dec outfit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <div className="bundle-img">
              <img src={view.bundle} width={"100%"} />
            </div>
          </div>
          <div className="col-md-6">
            <BundleProductsSlider products={view.products} />

            <BrandGroupImages products={view.products} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBrandView;
