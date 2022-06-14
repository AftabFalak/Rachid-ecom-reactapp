import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./index.css";

import Topbar from "../../components/Layout/Checkout/Topbar";
import Detail from "../../components/Layout/Checkout/Detail";
import Payment from "../../components/Layout/Checkout/Payment";
import Review from "../../components/Layout/Checkout/Review";
import ShoppingCart from "../../components/Layout/Checkout/ShoppingCart";

const Checkout = () => {
  let Page = ShoppingCart;

  const params = useParams();

  switch (params.page) {
    case "detail":
      Page = Detail;
      break;
    case "payment":
      Page = Payment;
      break;
    case "review":
      Page = Review;
      break;
    case "shoppingcart":
      Page = ShoppingCart;
      break;
    default:
      break;
  }

  return (
    <section className="dashboard-section section-b-space">
      <div className="container">
        <Topbar page={params.page} />
        <div className="faq-content tab-content" id="top-tabContent">
          <Page />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
