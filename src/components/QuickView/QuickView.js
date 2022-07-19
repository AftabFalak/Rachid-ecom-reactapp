import React from "react";
import "./QuickView.css";
import ProductMainSlider from "../ProductMainSlider";
import ProductDetail from "../ProductDetail/ProductDetail";

import { IoCloseOutline } from "react-icons/io5";
const QuickView = ({ open, handleToggle, setQuick }) => {
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
      <div onClick={handleToggle} className="bg-overlay-quick">
        <button
          className="QuickCloseButton"
          onClick={() => {
            setQuick(false);
          }}
        >
          <IoCloseOutline />
        </button>
      </div>
      <div className="QuickView">
        <ProductDetail setQuick={setQuick} viewDetail quickView />
      </div>
    </>
  );
};

export default QuickView;
