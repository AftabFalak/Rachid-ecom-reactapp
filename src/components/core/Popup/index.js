import React from 'react';

import './index.css';

const Popup = ({ children, title }) => {
  return (
    <div className="AddPopupp">
      <div className="bg-overlay"></div>
      <div className="AddPopup">
        <div className="heading">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
