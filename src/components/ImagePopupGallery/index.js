import React, { Component } from "react";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const ImagePopupGallery = ({ data,setData }) => {

  const { photoIndex, isOpen,images } = data;

  console.log(data)
  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setData({ ...data, isOpen: false })}
          onMovePrevRequest={() =>
            setData({
              ...data,
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            setData({
              ...data,
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
        />
      )}
    </div>
  );
};
export default ImagePopupGallery