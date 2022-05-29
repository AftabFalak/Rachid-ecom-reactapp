/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./index.css";

import { BsArrowLeft } from "react-icons/bs";
const FilterDrawer = ({ open, drawertoggle, filters, allCategorie }) => {
  const [tab, setTab] = useState(1);
  const [selectedCategory,setSelectedCategory]=useState();

  const onClickItem = (index) => {
    const item = allCategorie.forEach((el) => {
      return;
    });
  };

  return (
    <div className={`FilterDrawer ${!open ? "closed" : ""}`}>
      <div className="head">
        <h5>Filters</h5>
        <button className="close" onClick={() => drawertoggle()}>
          <i className="fa fa-times"></i>
        </button>
        <div>
          <hr />
          {tab === 1 ? (
            <div>
              <div>
                <p>Filter By Category</p>
                <button onClick={() => setTab(2)} className="btn-category">
                  {filters?.category}{" "}
                  <span>
                    <i className="fa fa-caret-right"></i>
                  </span>
                </button>
                <div className="filtersList">
                  <div className="offers my-3">
                    <span className="font-weight-bold">Special offers</span>
                    <div>
                      <input type="checkbox" className="mr-2" id="" />
                      <span>Free Dilevery</span>
                    </div>
                    <div>
                      <input type="checkbox" className="mr-2" id="" />
                      <span>On sale</span>
                    </div>
                  </div>
                  <div className="dilevery my-3">
                    <span className="font-weight-bold">
                      Ready to dispatch in
                    </span>
                    <div>
                      <input type="checkbox" className="mr-2" id="" />
                      <span>1 business day</span>
                    </div>
                    <div>
                      <input type="checkbox" className="mr-2" id="" />
                      <span>1–3 business days</span>
                    </div>
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
                      <input type="text" name="" id="" placeholder="Low" />
                      <span className="mx-2">to</span>
                      <input type="text" name="" id="" placeholder="Hight" />
                    </div>
                  </div>

                  <div className="location my-3">
                    <span className="font-weight-bold">Shop location</span>
                    <div>
                      <input type="radio" name="price" className="mr-2" id="" />
                      <span>Anywhere</span>
                    </div>
                    <div>
                      <input type="radio" name="price" className="mr-2" id="" />
                      <span>Pakistan</span>
                    </div>
                    <div>
                      <input type="radio" name="price" className="mr-2" id="" />
                      <span>Custom</span>
                    </div>

                    <div className="flex">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter location"
                      />
                    </div>
                  </div>

                  <div className="itemType my-3">
                    <span className="font-weight-bold">Item Type</span>
                    <div>
                      <input type="radio" name="price" className="mr-2" id="" />
                      <span>All Times</span>
                    </div>
                    <div>
                      <input type="radio" name="price" className="mr-2" id="" />
                      <span>Handmade</span>
                    </div>
                    <div>
                      <input type="radio" name="price" className="mr-2" id="" />
                      <span>Vintage</span>
                    </div>
                  </div>

                  <div className="orderingOption my-3">
                    <span className="font-weight-bold">Ordering options</span>
                    <div>
                      <input
                        type="checkbox"
                        name="price"
                        className="mr-2"
                        id=""
                      />
                      <span>Accepts Etsy gift cards</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="price"
                        className="mr-2"
                        id=""
                      />
                      <span>Can be gift-wrapped</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="price"
                        className="mr-2"
                        id=""
                      />
                      <span>Customisable</span>
                    </div>
                  </div>

                  <div className="my-3">
                    <select
                      name="country"
                      id="country"
                      className="countrySelect"
                    >
                      <option value="germany">Germany</option>
                      <option value="pakistan">Pakistan</option>
                    </select>
                  </div>
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
                        <p className="m-0" onClick={()=>setSelectedCategory(item.categorie)}>{item.categorie}</p>
                        {item.categorie === selectedCategory && <ul>

                          {item.subCategorie.map((sub, index) => {
                            return <li>{sub.categorie}</li>

                          })}

                        </ul>}
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
  );
};

export default FilterDrawer;
