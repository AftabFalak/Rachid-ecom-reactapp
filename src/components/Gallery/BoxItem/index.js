import React, { useState } from 'react';
import './index.css';
import { BsCartPlus } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineSearch, AiFillHeart } from 'react-icons/ai';

const BoxItem = ({ item, quick, setQuick }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="BoxItem">
      <div className="buttons">
        <span>
          <BsCartPlus />
        </span>

        <span onClick={() => setLike(!like)} className="icon">
          {!like ? <AiOutlineHeart /> : <AiFillHeart />}
        </span>

        <span className="icon" onClick={() => setQuick(true)}>
          <AiOutlineSearch />
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
    </div>
  );
};

export default BoxItem;
