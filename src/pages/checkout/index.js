import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './index.css';

import Topbar from '../../components/Layout/Checkout/Topbar';
import Detail from '../../components/Layout/Checkout/Detail';
import Payment from '../../components/Layout/Checkout/Payment';
import Review from '../../components/Layout/Checkout/Review';
import ShoppingCart from '../../components/Layout/Checkout/ShoppingCart';

import { BsCart, BsFillCheckCircleFill } from 'react-icons/bs';
import { FiUser, FiCheckCircle } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';

const Checkout = () => {
  const tabs = [
    {
      id: 1,
      title: 'Shopping Cart',
      link: '/checkout/shoppingcart',
      endPoint: 'shoppingcart',
      icon: <BsCart className="TabIcon" />,
    },
    {
      id: 2,
      title: 'Your details',
      link: '/checkout/detail',
      endPoint: 'detail',
      icon: <FiUser className="TabIcon" />,
    },
    {
      id: 3,
      title: 'Payment',
      link: '/checkout/payment',
      endPoint: 'payment',
      icon: <MdPayment className="TabIcon" />,
    },
    {
      id: 4,
      title: 'Final Review',
      link: '/checkout/review',
      endPoint: 'review',
      icon: <FiCheckCircle className="TabIcon" />,
    },
  ];

  let Page = ShoppingCart;

  const params = useParams();

  switch (params.page) {
    case 'detail':
      Page = Detail;
      break;
    case 'payment':
      Page = Payment;
      break;
    case 'review':
      Page = Review;
      break;
    case 'shoppingcart':
      Page = ShoppingCart;
      break;
    default:
      break;
  }

  return (
    <section className="container">
      <Topbar page={params.page} tabs={tabs} />
      <Page />
    </section>
  );
};

export default Checkout;
