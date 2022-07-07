import React, { useState } from 'react';
import './index.css';
import QuickView from '../../QuickView/QuickView';
const BoxItem = ({ item }) => {
  const [quickView, setQuickView] = useState(false);
  return (
    <div className="BoxItem">
      <div className="buttons">
        <span>
          <i className="fa fa-cart-plus"></i>
        </span>
        <span className="icon">
          <i className="fa fa-heart"></i>
        </span>
        <span className="icon" onClick={() => setQuickView(true)}>
          <i className="fa fa-search"></i>
        </span>
      </div>
      <div className="textArea">
        <p>men black t-shirt</p>
        <p>
          <strong>$65.34</strong>{' '}
          <small>
            <strike>$76.43</strike>
          </small>
        </p>
      </div>
      <img width={'100%'} src={item.img} />
      {quickView && <QuickView />}
    </div>
  );
};

export default BoxItem;
