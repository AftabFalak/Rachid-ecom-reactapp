import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsFillCheckCircleFill } from 'react-icons/bs';

const Topbar = ({ page, tabs }) => {
  const [arr, setArr] = useState([]);
  return (
    <div id="checkout-topbar">
      {tabs.map(({ link, endPoint, icon, title, id }, index) => (
        <Link to={link} className="singleTab" onClick={() => setArr([])}>
          {page === endPoint ? (
            <div className="checkedIconDiv">
              <BsFillCheckCircleFill className="checkedIcon" />
            </div>
          ) : (
            <></>
          )}
          {icon}
          <p>
            {id}- {title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Topbar;
