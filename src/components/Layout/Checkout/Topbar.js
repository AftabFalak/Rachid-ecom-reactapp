import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsFillCheckCircleFill } from 'react-icons/bs';

const Topbar = ({ page, tabs }) => {
  const [arr, setArr] = useState([]);
  const [checked, setChecked] = useState(true);

  return (
    <div id="checkout-topbar">
      {tabs.map(({ link, endPoint, icon, iconActive, title, id }, index) => (
        <Link to={link} className="singleTab" onClick={() => setArr([])}>
          {tabs.findIndex(t=>page===t.endPoint)>=id ? (
            <div className="checkedIconDiv">
              <BsFillCheckCircleFill className={`checkedIcon`} />
            </div>
          ) : (
            <> </>
          )}
          {(page === endPoint || tabs.findIndex(t=>page===t.endPoint)>=id) ? iconActive : icon}
          <p className={`${(page === endPoint || tabs.findIndex(t=>page===t.endPoint)>=id) && 'activeText'}`}>
            {id}- {title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Topbar;
