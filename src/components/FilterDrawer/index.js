/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./index.css";

import { BsArrowLeft } from "react-icons/bs";
const FilterDrawer = ({ open, drawertoggle, filters }) => {
  const [tab, setTab] = useState(1);

  const allCategorie = [
    {
      categorie: "Home & Living",
      subCategorie: [{ categorie: "Home Doctor" }, { categorie: "Kitchen & Dining" }, { categorie: "Bedding" }],
    },
    {
      categorie: "Clothing",
      subCategorie: [{ categorie: "Women's Clothing" }, { categorie: "Men's Clothing" }, { categorie: "Girls Clothing" }],
    },
    {
      categorie: "Art & Collectibles",
      subCategorie: [{ categorie: "Print" }, { categorie: "Painting" }, { categorie: "Glass Art" }],
    },
    {
      categorie: "Jewellery",
      subCategorie: [{ categorie: "Ring" }, { categorie: "Watches" }, { categorie: "Earrings" }],
    },
    {
      categorie: "Accessories",
      subCategorie: [{ categorie: "Belts & Braces" }, { categorie: "Suits & Lanyards" }, { categorie: "Baby Accessories" }],
    },
    {
      categorie: "Craft Supplies & Tools",
      subCategorie: [{ categorie: "Home & Hobby" }, { categorie: "Jewellery & Beuty" }, { categorie: "Visual Arts" }],
    },
    {
      categorie: "Bags & Purses",
      subCategorie: [{ categorie: "Handbags" }, { categorie: "Totes" }, { categorie: "Backpacks" },{ categorie: "Electronics Cases" }],
    },
    {
      categorie: "Paper & Party Supplies",
      subCategorie: [{ categorie: "Paper" }, { categorie: "Party Supplies" }],
    },
    {
      categorie: "Weddings",
      subCategorie: [{ categorie: "Accessories" }, { categorie: "Decoration" }, { categorie: "Jewellery" }],
    },
    {
      categorie: "Toys & Games",
      subCategorie: [{ categorie: "Toys" }, { categorie: "Games & Puzzle" }, { categorie: "Sports" }],
    },
    {
      categorie: "Books, Films & Music",
      subCategorie: [{ categorie: "Books" }, { categorie: "Music" }],
    },
    {
      categorie: "Bath & Beauty",
      subCategorie: [{ categorie: "Soaps" }, { categorie: "" }, { categorie: "Spa & Relaxaion" }],
    },
    {
      categorie: "Electronics & Accessories",
      subCategorie: [{ categorie: "Docking & Stands" },  { categorie: "Computer & Peripherals" }],
    },
    {
      categorie: "Pet Supplies",
      subCategorie: [{ categorie: "Urns & Memorials" }, { categorie: "Pet Clothing" }, { categorie: "Accessories & Shoe" }],
    },
    {
      categorie: "Shoes",
      subCategorie: [{ categorie: "Women's Shoe" }, { categorie: "Men's Shoe" }],
    },
  ];

  const onClickItem = (index) => {
    const item = allCategorie.forEach((el)=>{
      return
    })
  }

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
                Filters LIst
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
               {allCategorie.map((item,index) => {
                 return(<li key={index} className="list_item"  onClick={() => onClickItem(index)} >{item.categorie}</li>)
               })}
                </ul>
              </div>

              <div className="fix-bottom">
                <button className="btn btn-back" onClick={() => setTab(1)}>
                  <span>
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
