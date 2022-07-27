import React, { useState } from 'react';

import { items } from '../../components/VenderProfile/VenderProfile';

import Gallery from '../../components/Gallery';

import './index.css';

const Shop = () => {
  return (
    <div className="Shop">
      <Gallery
        cards={items}
        heading={'Find Products You Love'}
        categorieFilterOnTop={false}
      />
    </div>
  );
};

export default Shop;
