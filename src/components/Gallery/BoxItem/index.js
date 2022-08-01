import React, { useState } from 'react';

import { BsCartPlus } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import './index.css';

const BoxItem = ({ item, quick, setQuick }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  const handleClick = () => {
    navigate('/product-detail');
  };
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
