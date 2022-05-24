import React from "react";

import Gallery from "../../components/Gallery";

import { items } from "../../components/VenderProfile/VenderProfile";

import "./index.css";

import ShopDrawer from "../../components/ShopDrawer";

const Shop = (props) => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-between productDropDownsView">
          <select
            name="cars"
            id="cars"
            className="productsDropDowns"
            disabled
            onClick={props.toggleDrawer}
          >
            <option value="volvo">Search by Category</option>
            <option value="mercedes">Mercedes</option>
          </select>

          <select name="cars" id="cars" className="productsDropDowns">
            <option value="volvo">Sort by: Relevency</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <Gallery cards={items} heading={"Find Products You Love"} />
      </div>
      <ShopDrawer
        open={props.open.drawerOpen}
        setDrawertoggle={props.setDrawerOpen}
      />
    </>
  );
};

export default Shop;
