import React from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ImagePopupGallery = ({ data, setData }) => {
  const { photoIndex, isOpen, images } = data;

  console.log(data);
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
export default ImagePopupGallery;
