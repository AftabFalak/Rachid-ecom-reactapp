import React from "react";
import "./QuickView.css";
import ProductMainSlider from "../ProductMainSlider";
import ProductDetail from "../ProductDetail/ProductDetail";

const QuickView = ({ open, handleToggle }) => {
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
  };
  return (
    <>
      <div onClick={handleToggle} className="bg-overlay"></div>
      <div className="QuickView">
        <ProductDetail quickView />
        {/* <ProductMainSlider images={product.images} /> */}
      </div>
    </>
  );
};

export default QuickView;
