import React, { useState } from "react";
import FilterDrawer from "../../components/FilterDrawer";
import Gallery from "../../components/Gallery";
import { items } from "../../components/VenderProfile/VenderProfile";
import "./index.css";
const Shop = (props) => {



  return (
    <div className="Shop">
      <Gallery  cards={items} heading={"Find Products You Love"} />
    </div>
  );
};

export default Shop;
