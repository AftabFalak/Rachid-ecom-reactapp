import React, { useState } from 'react';
import './index.css';
const Annoucements = () => {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="announcementDescription">
        {isReadMore ? text.slice(0, 180) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? '...read more' : ' show less'}
        </span>
      </p>
    );
  };

  return (
    <div className="bg-white Announcements">
      <h3 className="m-0 announcementHeading">Annoucements</h3>
      <span className="m-0 span">Updated on 23 Nov 2021</span>
      <ReadMore>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
        nostrum, ad iste facere illum voluptatum. Illum eum voluptatem ab dolor,
        libero qui cupiditate natus iste necessitatibus quam non? Eos, tempore
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta ex
        aliquid beatae rerum
      </ReadMore>
    </div>
  );
};

export default Annoucements;
