import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Reviews from "../Reviews";
import ReactPaginate from "react-paginate";
import PaginatedPages from "../Pagination";

const ReviewsTab = () => {
  const [reviewsTab, setReviewsTab] = useState(1);
  return (
    <div>
      <div className="p-3">
        <div className="tab-container">
          <div
            onClick={() => setReviewsTab(1)}
            className={`tab ${reviewsTab === 1 && "tab-active"}`}
          >
            <p> Review for this item</p>
            <span>22</span>
          </div>

          <div
            onClick={() => setReviewsTab(2)}
            className={`tab ${reviewsTab === 2 && "tab-active"}`}
          >
            <p> Review for this shop</p>
            <span>13</span>
          </div>
        </div>
      </div>
      {reviewsTab === 1 ? (
        <div className="d-flex mt-4 p-3">
          <h3>22 reviews </h3>
          <div>
            <Rating
              // onClick={handleRating}
              ratingValue={80}
              fillColor={"gold"}
              size={26}
              className="starRaiting"
            />
          </div>
        </div>
      ) : (
        <div className="d-flex mt-4 p-3">
          <h3>13 reviews </h3>
          <div>
            <Rating
              // onClick={handleRating}
              ratingValue={30}
              fillColor={"gold"}
              size={26}
              className="starRaiting"
            />
          </div>
        </div>
      )}
      <Reviews />
      <PaginatedPages itemsPerPage={3} />
    </div>
  );
};

export default ReviewsTab;
