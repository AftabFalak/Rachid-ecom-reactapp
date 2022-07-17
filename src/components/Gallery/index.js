import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import FilterDrawer from '../FilterDrawer';
import BoxItem from './BoxItem';
import QuickView from '../QuickView/QuickView';

import './index.css';

export const allCategorie = [
  {
    categorie: 'Home & Living',
    subCategorie: [
      { categorie: 'Home Doctor' },
      { categorie: 'Kitchen & Dining' },
      { categorie: 'Bedding' },
    ],
  },
  {
    categorie: 'Clothing',
    subCategorie: [
      { categorie: "Women's Clothing" },
      { categorie: "Men's Clothing" },
      { categorie: 'Girls Clothing' },
    ],
  },
  {
    categorie: 'Art & Collectibles',
    subCategorie: [
      { categorie: 'Print' },
      { categorie: 'Painting' },
      { categorie: 'Glass Art' },
    ],
  },
  {
    categorie: 'Jewellery',
    subCategorie: [
      { categorie: 'Ring' },
      { categorie: 'Watches' },
      { categorie: 'Earrings' },
    ],
  },
  {
    categorie: 'Accessories',
    subCategorie: [
      { categorie: 'Belts & Braces' },
      { categorie: 'Suits & Lanyards' },
      { categorie: 'Baby Accessories' },
    ],
  },
  {
    categorie: 'Craft Supplies & Tools',
    subCategorie: [
      { categorie: 'Home & Hobby' },
      { categorie: 'Jewellery & Beuty' },
      { categorie: 'Visual Arts' },
    ],
  },
  {
    categorie: 'Bags & Purses',
    subCategorie: [
      { categorie: 'Handbags' },
      { categorie: 'Totes' },
      { categorie: 'Backpacks' },
      { categorie: 'Electronics Cases' },
    ],
  },
  {
    categorie: 'Paper & Party Supplies',
    subCategorie: [{ categorie: 'Paper' }, { categorie: 'Party Supplies' }],
  },
  {
    categorie: 'Weddings',
    subCategorie: [
      { categorie: 'Accessories' },
      { categorie: 'Decoration' },
      { categorie: 'Jewellery' },
    ],
  },
  {
    categorie: 'Toys & Games',
    subCategorie: [
      { categorie: 'Toys' },
      { categorie: 'Games & Puzzle' },
      { categorie: 'Sports' },
    ],
  },
  {
    categorie: 'Books, Films & Music',
    subCategorie: [{ categorie: 'Books' }, { categorie: 'Music' }],
  },
  {
    categorie: 'Bath & Beauty',
    subCategorie: [
      { categorie: 'Soaps' },
      { categorie: '' },
      { categorie: 'Spa & Relaxaion' },
    ],
  },
  {
    categorie: 'Electronics & Accessories',
    subCategorie: [
      { categorie: 'Docking & Stands' },
      { categorie: 'Computer & Peripherals' },
    ],
  },
  {
    categorie: 'Pet Supplies',
    subCategorie: [
      { categorie: 'Urns & Memorials' },
      { categorie: 'Pet Clothing' },
      { categorie: 'Accessories & Shoe' },
    ],
  },
  {
    categorie: 'Shoes',
    subCategorie: [{ categorie: "Women's Shoe" }, { categorie: "Men's Shoe" }],
  },
];

const Gallery = ({
  cards,
  heading,
  showFilter = true,
  categorieFilterOnTop,
}) => {
  const [open, setOpen] = useState(false);
  const [categoryBoxShow, setCategoryBoxShow] = useState(false);
  const toggleOpenDrawer = () => {
    setOpen(!open);
  };
  const [quick, setQuick] = useState(false);
  const [filters, setFilters] = useState({
    category: 'All Categories',
    offers: '',
    delivery: '',
    price: { type: 'Any Price', range: [0, 10000] },
    loation: { custom: 'lahore' },
    type: 'Home Made',
    orderingOption: { cards: false, wrapped: false, custom: false },
  });

  const handleMouseOver = () => {
    setCategoryBoxShow(true);
  };
  const handleOnBlur = () => {
    setCategoryBoxShow(false);
    console.log('ddd');
  };
  return (
    <>
      {categoryBoxShow && (
        <div className="backdrop-invisible" onClick={handleOnBlur}></div>
      )}
      <div className="Gallery">
        <h3>{heading}</h3>
        <div className="productDropDownsView">
          {showFilter && (
            <button className="btn btn-filters" onClick={() => setOpen(true)}>
              <i className="fa fa-filter"></i> Filters
            </button>
          )}
          {categorieFilterOnTop && (
            <div
              className="category-container"
              tabIndex={1}
              onMouseOver={handleMouseOver}
            >
              <button className="btn-category">All Categories</button>
              {categoryBoxShow && (
                <>
                  <div className="backdrop-invisible"></div>
                  <ul className="list">
                    {allCategorie.map((item, index) => {
                      return (
                        <li key={index} className="list_item d-flex">
                          <p className="m-0">{item.categorie} </p>

                          <label className="containerCheckbox justify-content-end">
                            <input type="checkbox" />
                            <span className="checkmarkCheckbox"></span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          )}
          <select name="cars" id="cars" className="productsDropDowns">
            <option selected disabled hidden>
              Sort by: Relevency
            </option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <Masonry
          breakpointCols={{
            default: 4,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {cards.map((item, index) => {
            return <BoxItem key={`card-${index}`} setQuick={setQuick} item={item} />;
          })}
        </Masonry>
        {quick && <QuickView setQuick={setQuick} />}
        {open && (
          <FilterDrawer
            open={open}
            drawertoggle={toggleOpenDrawer}
            filters={filters}
            allCategorie={allCategorie}
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
