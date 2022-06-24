import React from 'react';
import './index.css';

const MeetSeller = () => {
  return (
    <div className="MeetSeller">
      <div className="d-flex align-items-center">
        <div className="mr-4">
          <img
            src="https://image.shutterstock.com/image-photo/young-business-man-working-home-260nw-1654831870.jpg"
            alt="seller image"
          />
        </div>
        <div>
          <h3 className="name">Uwe</h3>
          <span className="ownerOff">
            Owner of <span>WoodcraftsHarzs</span>
          </span>
        </div>
      </div>
      <button className="messageButton">Message Uwe</button>
      <p className="description">
        This seller usually responds within 24 hours.
      </p>
    </div>
  );
};

export default MeetSeller;
