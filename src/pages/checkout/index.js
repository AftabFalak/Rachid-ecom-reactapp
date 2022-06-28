import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './index.css';

import Topbar from '../../components/Layout/Checkout/Topbar';
import Detail from '../../components/Layout/Checkout/Detail';
import Payment from '../../components/Layout/Checkout/Payment';
import Review from '../../components/Layout/Checkout/Review';

import { BsCart, BsFillCheckCircleFill } from 'react-icons/bs';
import { FiUser, FiCheckCircle } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';

export const initOrders = [
  {
    id: 1,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZE6hrQg7QAGSzNnPoYrT1TiR3PS4HJ9jkg&usqp=CAU',
    title: 'Calvin Klien Jeans Keds',
    size: '8.5',
    color: 'Black',
    price: '125.00',
    quantity: 1,
  },
  {
    id: 2,
    imageUrl:
      'https://media.dior.com/couture/ecommerce/media/catalog/product/f/b/1604511903_113J698A0531_C888_E08_GH.jpg',
    title: 'The North Face Hoodi',
    size: 'XL',
    color: 'Gray',
    price: '125.00',
    quantity: 2,
  },
  {
    id: 3,
    imageUrl:
      'https://cdn.luxe.digital/media/20220218153508/best-sunglasses-men-randolph-aviator-luxe-digital-780x520.jpg',
    title: 'Medicine Chameleon Sunglasses',
    size: 'SM',
    color: 'Gray/Black',
    price: '125.00',
    quantity: 3,
  },
];

export const OrderDeleteHandler = (id) => {
  setOrders(() => orders.filter((el) => el.id !== id));
};

const Checkout = () => {
  const [orders, setOrders] = useState([...initOrders]);
  const tabs = [
    {
      id: 1,
      title: 'Shopping Cart',
      link: '/yourcart',
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

  let Page = Detail;

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
    default:
      break;
  }

  return (
    <section className="container">
      <Topbar page={params.page} tabs={tabs} />
      <Page orders={orders} />
    </section>
  );
};

export default Checkout;
