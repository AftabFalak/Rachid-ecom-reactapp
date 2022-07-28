import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

import Reviews from '../Reviews';
import PaginatedPages from '../Pagination';

import './index.css';

const ReviewsTab = () => {
  const [reviewsTab, setReviewsTab] = useState(1);
  return (
    <div className="ReviewsTab">
      <div className="p-3">
        <div className="tab-container">
          <div
            onClick={() => setReviewsTab(1)}
            className={`tab mr-3 ${reviewsTab === 1 && 'tab-active mr-4'}`}
          >
            <p> Review for this item</p>
            <span>22</span>
          </div>

          <div
            onClick={() => setReviewsTab(2)}
            className={`tab ${reviewsTab === 2 && 'tab-active'}`}
          >
            <p> Review for this shop</p>
            <span>13</span>
          </div>
        </div>
      </div>
      {reviewsTab === 1 ? (
        <div className="d-flex pl-3 align-items-center">
          <h3>22 reviews </h3>
          <div>
            <Rating
              ratingValue={80}
              fillColor={'gold'}
              size={22}
              className="starRaitingTop"
            />
          </div>
        </div>
      ) : (
        <div className="d-flex  pl-3 pb-0">
          <h3>13 reviews </h3>
          <div>
            <Rating
              ratingValue={30}
              fillColor={'gold'}
              size={26}
              className="starRaiting"
            />
          </div>
        </div>
      )}
      <Reviews />
      <div className="ml-5 mb-4">
        <PaginatedPages itemsPerPage={3} />
      </div>
    </div>
  );
};

export default ReviewsTab;
