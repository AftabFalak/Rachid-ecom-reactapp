/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./index.css";

import { BsArrowLeft } from "react-icons/bs";
const FilterDrawer = ({ open, drawertoggle, filters, allCategorie }) => {
  const [tab, setTab] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryBoxShow, setCategoryBoxShow] = useState(false)

  const onClickItem = (index) => {
    const item = allCategorie.forEach((el) => {
      return;
    });
  };

  const handleOnClick = () => {

    setCategoryBoxShow(true)

  }

  const handleOnBlur = () => {
    setCategoryBoxShow(false)
    console.log("ddd")
  }

  const a = 10;
  return (
    <>
      {categoryBoxShow && <>
        <div className="backdrop-invisible"></div> </>}

      <div className={`FilterDrawer ${!open ? "closed" : ""}`}>

      {categoryBoxShow && <>
        <div className="backdrop-invisible" onClick={handleOnBlur}></div> </>}
        <div className="head">
          <h5>Filters</h5>
          <button className="close" onClick={() => drawertoggle()}>
            <i className="fa fa-times"></i>
          </button>
          <hr />
          <div>
            {tab === 1 ? (
              <div
                className="Tab_1 ScrollVieww"
                style={{ height: "85vh", overfollowY: "scroll" }}
              >
                <p>Filter By Category</p>

                <div className="category-container" tabIndex={1} onClick={handleOnClick}  >
                  <button className="btn-category">All Categories</button>

                  {categoryBoxShow && <>
                    <div className="backdrop-invisible"></div>
                    <ul className="list">
                      {allCategorie.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="list_item d-flex"
                            onClick={() => onClickItem(index)}
                          >
                            <p
                              className="m-0"
                              onClick={() => setSelectedCategory(item.categorie)}
                            >
                              {item.categorie}{" "}
                            </p>
                            {item.categorie === selectedCategory}

                            <label class="containerCheckbox justify-content-end">
                              <input type="checkbox" />
                              <span class="checkmarkCheckbox"></span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </>

                  }

                </div>

                <div className="filtersList">
                  <div className="offers my-3">
                    <span className="font-weight-bold">Special offers</span>
                    <label class="containerCheckbox">
                      Free Dilevery
                      <input type="checkbox" />
                      <span class="checkmarkCheckbox"></span>
                    </label>
                    <label class="containerCheckbox">
                      On sale
                      <input type="checkbox" />
                      <span class="checkmarkCheckbox"></span>
                    </label>
                  </div>
                  <div className="dilevery my-3">
                    <span className="font-weight-bold">Ready to dispatch in</span>

                    <label class="containerCheckbox">
                      1 business day
                      <input type="checkbox" />
                      <span class="checkmarkCheckbox"></span>
                    </label>
                    <label class="containerCheckbox">
                      1–3 business days
                      <input type="checkbox" />
                      <span class="checkmarkCheckbox"></span>
                    </label>
                  </div>

                  <div className="prices my-3">
                    <span className="font-weight-bold">Price ($)</span>
                    <label class="container">
                      Any Price
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">
                      Under USD 25
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">
                      USD 25 to USD 50
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">
                      USD 50 to USD 100
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">
                      Over USD 100
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">
                      Custom
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>

                    <div className="flex">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Low"
                        className="pricesInut"
                      />
                      <span className="mx-2">to</span>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Hight"
                        className="pricesInut"
                      />
                    </div>
                  </div>

                  <div className="location my-3">
                    <span className="font-weight-bold">Shop location</span>

                    <label class="container">
                      <span>Anywhere</span>
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">
                      <span>Pakistan</span>
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">
                      <span>Custom</span>
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>

                    <div className="flex">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter location"
                        className="locationInut"
                      />
                    </div>
                  </div>

                  <div className="itemType my-3">
                    <span className="font-weight-bold">Item Type</span>
                    <label class="container">
                      <span>All Times</span>
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>

                    <label class="container">
                      <span>Handmade</span>
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container">
                      <span>Vintage</span>
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark"></span>
                    </label>
                  </div>

                  <div className="orderingOption my-3">
                    <span className="font-weight-bold">Ordering options</span>
                    <label class="containerCheckbox">
                      Accepts Etsy gift cards
                      <input type="checkbox" />
                      <span class="checkmarkCheckbox"></span>
                    </label>
                    <label class="containerCheckbox">
                      Can be gift-wrapped
                      <input type="checkbox" />
                      <span class="checkmarkCheckbox"></span>
                    </label>
                    <label class="containerCheckbox">
                      Customisable
                      <input type="checkbox" />
                      <span class="checkmarkCheckbox"></span>
                    </label>
                  </div>

                  <div className="my-3">
                    <select name="country" id="country" className="countrySelect">
                      <option value="germany">Germany</option>
                      <option value="pakistan">Pakistan</option>
                    </select>
                  </div>
                </div>
                <div className="fix-bottom">
                  <button className="btn btn-cancel" onClick={drawertoggle}>
                    Cancel
                  </button>
                  <button className="btn btn-black" onClick={drawertoggle}>
                    Apply
                  </button>
                </div>
              </div>
            ) : (
              <div className="Tab_2">
                <div className="form">
                  <p className="Tab_2_heading">Categories</p>
                </div>

                <div className="All_Categories_List">
                  <p className="all_categories">All Categories</p>

                  <ul className="list">
                    {allCategorie.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="list_item"
                          onClick={() => onClickItem(index)}
                        >
                          <p
                            className="m-0"
                            onClick={() => setSelectedCategory(item.categorie)}
                          >
                            {item.categorie}
                          </p>
                          {item.categorie === selectedCategory && (
                            <ul>
                              {item.subCategorie.map((sub, index) => {
                                return <li>{sub.categorie}</li>;
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="fix-bottom">
                  <button className="btn btn-back" onClick={() => setTab(1)}>
                    <span className="backArrowIcon">
                      <BsArrowLeft />
                    </span>{" "}
                    Back
                  </button>
                  <button className="btn btn-black" onClick={drawertoggle}>
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>

  );
};

export default FilterDrawer;
