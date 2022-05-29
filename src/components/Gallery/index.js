import React, { useState } from "react";
import Masonry from "react-masonry-css";
import FilterDrawer from "../FilterDrawer";
import BoxItem from "./BoxItem";
import "./index.css";
const Gallery = ({ cards, heading }) => {
  const [open, setOpen] = useState(false);
  const toggleOpenDrawer = () => {
    setOpen(!open);
  };
  const [filters, setFilters] = useState({
    category: "All Categories",
    offers: "",
    delivery: "",
    price: { type: "Any Price", range: [0, 10000] },
    loation: { custom: "lahore" },
    type: "Home Made",
    orderingOption: { cards: false, wrapped: false, custom: false },
  });

  return (
    <div className="Gallery">
      <h3>{heading}</h3>
      <div className="d-flex justify-content-between productDropDownsView">
        <button className="btn btn-filters" onClick={() => setOpen(true)}>
          <i className="fa fa-filter"></i> Filters
        </button>
        <select name="cars" id="cars" className="productsDropDowns">
          <option selected disabled hidden>
            Sort by: Relevency
          </option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {cards.map((item, index) => {
          return <BoxItem key={`card-${index}`} item={item} />;
        })}
      </Masonry>

      {open && (
        <FilterDrawer
          open={open}
          drawertoggle={toggleOpenDrawer}
          filters={filters}
        />
      )}
    </div>
  );
};

export default Gallery;
