import React, {useState} from "react";

import Gallery from "../../components/Gallery";

import { items } from "../../components/VenderProfile/VenderProfile";

import "./index.css";


import Modal from 'react-modal';

const Shop = (props) => {

  const [showModal, setShowModal] = useState(false)
  return (
      <div className="Shop">
        <button onClick={()=>setShowModal(true)}>Open</button>
        <Gallery cards={items} heading={"Find Products You Love"} />
        <Modal
        isOpen={showModal}       
        onRequestClose={()=>setShowModal(false)}
        contentLabel="Example Modal"
      >
        <h1>Modal</h1>
       
      </Modal>
      </div>
  );
};

export default Shop;
