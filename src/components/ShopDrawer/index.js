/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";


const ShopDrawer = (props) => {
  return (
  <div className="ShopModal">

    <button onClick={()=> props.setShowModal('false')}> close</button>

  </div>
  );
};

export default ShopDrawer;
