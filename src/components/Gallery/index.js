import React from "react";
import Masonry from "react-masonry-css";
import BoxItem from "./BoxItem";
import "./index.css";
const Gallery = ({ cards, heading }) => {
  return (
    <div className="Gallery">
      <h3>{heading}</h3>
      {/* <div className="d-flex justify-content-between productDropDownsView">
        <select name="cars" id="cars" className="productsDropDowns" disabled={staticFilter ? false : true} >
          <option value="volvo">Search by Category</option>
          <option value="mercedes">Mercedes</option>
        </select>

        <select name="cars" id="cars" className="productsDropDowns">
          <option value="volvo">Sort by: 
          Relevency</option>
          <option value="audi">Audi</option>
        </select>
      </div> */}

      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {cards.map((item, index) => {
          return <BoxItem key={`card-${index}`} item={item} />;
        })}
      </Masonry>
    </div>
  );
};

export default Gallery;
