/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./index.css";

import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const MobileMenuDrawer = ({ open, drawertoggle, filters, allCategorie }) => {
  const [tab, setTab] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryBoxShow, setCategoryBoxShow] = useState(false);

  const onClickItem = (index) => {
    const item = allCategorie.forEach((el) => {
      return;
    });
  };

  const handleOnClick = () => {
    setCategoryBoxShow(true);
  };

  const handleOnBlur = () => {
    setCategoryBoxShow(false);
    console.log("ddd");
  };

  return (
    <>
      {categoryBoxShow && <div className="backdrop-invisible"></div>}

      <div className={`MobileMenuDrawer ${!open ? "closed" : ""}`}>
        {categoryBoxShow && (
          <>
            <div className="backdrop-invisible" onClick={handleOnBlur}></div>{" "}
          </>
        )}
        <div className="head">
          <button className="close" onClick={() => drawertoggle()}>
            <i className="fa fa-times"></i>
          </button>
          <hr style={{ marginTop: "40px" }} />
          <div className="menu-list">
            <ul>
              <li>
                <a href={"/shop"}>Shop</a>
              </li>
              <li>
                <a href={"/vendor"}>Vendor</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenuDrawer;
