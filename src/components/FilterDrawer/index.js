/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./index.css";
import GoogleButton from "react-google-button";
const FilterDrawer = ({ open, drawertoggle, filters }) => {
  const [tab, setTab] = useState(1);

  return (
    <div className={`FilterDrawer ${!open ? "closed" : ""}`}>
      <div className="head">
        <h5>Filters</h5>
        <button className="close" onClick={() => drawertoggle}>
          <i className="fa fa-times"></i>
        </button>
        <div>
          <hr />
          {tab === 1 ? (
            <div>
              <div>
              <p>Filter By Category</p>
          <button onClick={() => setTab(2)} className="btn-category">{filters?.category}  <span><i className="fa fa-caret-right"></i></span></button>



                Filters LIst
              </div>
              <div className="fix-bottom">
                <button className="btn" onClick={drawertoggle}>Cancel</button>
                <button className="btn btn-black" onClick={drawertoggle}>Apply</button>
              </div>
            </div>
          ) : (
            <div>
              <div className="form ">

                <p>Category List</p>
              </div>

              <div className="fix-bottom">
                <button className="btn btn-back" onClick={()=>setTab(1)}><span><i className="fa fa-caret-left"></i></span> Back</button>
                <button className="btn btn-black" onClick={drawertoggle}>Apply</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
