import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "./index.css";
const Reviews = () => {
  const [reviewList,setReviewList] =useState( [
    {
      username: "Lenka",
      date: "08 May, 2022",
      star: 40,
      text: "well made shelves, very solid",
      purchased: {
        image: "/Assets/ProductList/2.jpg",
        title: "Handcrafted Solid Wood Shelf",
      },
      helpful: false,
    },
    {
      username: "Lenka",
      date: "08 May, 2022",
      star: 100,
      text: "well made shelves, very solid",
      purchased: {
        image: "/Assets/ProductList/2.jpg",
        title: "Handcrafted Solid Wood Shelf",
      },
      helpful: true,
    },
    {
      username: "Lenka",
      date: "08 May, 2022",
      star: 85,
      text: "well made shelves, very solid",
      purchased: {
        image: "/Assets/ProductList/2.jpg",
        title: "Handcrafted Solid Wood Shelf",
      },
      helpful: true,
    },
  ]);

  return (
    <div>
      {reviewList.map((review, index) => {
        return (
          <div className="reviewBox">
            <div className="img-box">
              <img src={"/Assets/images/ProductList/2.jpg"} />
            </div>
            <div className="review-box">
              <div>
                <p className="name-date">
                  {review.username} <span>{review.date}</span>
                </p>
              </div>
              <Rating
                ratingValue={review.star}
                fillColor={"black"}
                size={20}
                className="starRaiting"
              />
              <p className="review-text">{review.text}</p>
              <p className="p-item">Purchased item:</p>
              <div className="p-item-box">
                <div className="p-img">
                  <img src={"/Assets/images/ProductList/2.jpg"} />
                </div>
                <div className="p-title">
                  <Link to={"/"}>{review.purchased.title}</Link>
                </div>
              </div>
              {review.helpful ? (
                <span className="helpful" onClick={()=>{
                    const revs=[...reviewList]
                    revs[index].helpful=!revs[index].helpful
                    setReviewList(revs)

                }}>
                  <i className="fa fa-check"></i> 1 Helpful
                </span>
              ) : (
                <p className="helpful" onClick={()=>{
                    const revs=[...reviewList]
                    revs[index].helpful=!revs[index].helpful
                    setReviewList(revs)

                }}>
                  <i className="fa fa-thumbs-up"></i> Helpful?
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
