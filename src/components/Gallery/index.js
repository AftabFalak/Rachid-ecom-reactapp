import React, { useState } from 'react';
import Masonry from 'react-masonry-css';

import { AiOutlineMenuFold } from 'react-icons/ai';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

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
  relvencyBox,
}) => {
  const [open, setOpen] = useState(false);
  const [categoryBoxShow, setCategoryBoxShow] = useState(false);
  const [relvencyBoxShow, setRelvencyBoxShow] = useState(false);

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

  return (
    <>
      {categoryBoxShow && (
        <div
          onClick={() => {
            setCategoryBoxShow(false);
          }}
          className="backdrop-invisible"
        ></div>
      )}
      {relvencyBoxShow && (
        <div
          onClick={() => {
            setRelvencyBoxShow(false);
          }}
          className="backdrop-invisible"
        ></div>
      )}
      <div className="Gallery">
        <div className="productDropDownsView">
          {showFilter && (
            <button className="btn-filters" onClick={() => setOpen(true)}>
              <AiOutlineMenuFold /> <span className="ml-1">All Filters</span>
            </button>
          )}

          {categorieFilterOnTop && (
            <div className="category-container" tabIndex={1}>
              <button
                className="btn-category"
                onClick={() => setCategoryBoxShow(!categoryBoxShow)}
              >
                search by Categories
                <span>{categoryBoxShow ? <FaAngleUp /> : <FaAngleDown />}</span>
              </button>

              {categoryBoxShow ? (
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
              ) : (
                <></>
              )}
            </div>
          )}

          {relvencyBox || categorieFilterOnTop ? (
            <div className="relevency-container" tabIndex={1}>
              <button
                className="btn-category"
                onClick={() => setRelvencyBoxShow(!relvencyBoxShow)}
              >
                Sort by: Relevency
                <span>
                  {' '}
                  {relvencyBoxShow ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </button>

              {relvencyBoxShow ? (
                <>
                  <div className="backdrop-invisible"></div>
                  <ul className="relevensyList">
                    <li className="list_item d-flex">
                      <p className="m-0">Audi </p>
                    </li>
                  </ul>
                </>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
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
            return (
              <BoxItem key={`card-${index}`} setQuick={setQuick} item={item} />
            );
          })}
        </Masonry>
        {quick && (
          <QuickView
            onClose={() => {
              setQuick(false);
              console.log('outer');
            }}
          />
        )}
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
