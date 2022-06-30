import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandGroupImages from '../../components/BrandGroupImages';
import BundleView from '../../components/BundleView';
import brandLogo from '../../assets/images/VendorProfile/brand2.PNG';
import './index.css';
import ProductView from '../../components/ProductView';

import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { SiQuora } from 'react-icons/si';
const BudleViewPage = () => {
  const [product, setProduct] = useState({
    image: '/Assets/images/bundle-images/view1.png',
    otherImages: ['ring.PNG', 'shoe.PNG', 'bag.PNG', 'ring.PNG'],
    colors: ['black', 'yellow', 'green'],
    sizes: ['L', 'XL', 'XXL'],
    faqs: {
      title: '',
      rows: [
        {
          title: 'Lorem ipsum dolor sit amet,',
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                    ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                    In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                    Fusce sed commodo purus, at tempus turpis.`,
        },
        {
          title: 'Nunc maximus, magna at ultricies elementum',
          content:
            'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
        },
      ],
    },
    products: [
      {
        image: '/Assets/images/ProductList/shoe.PNG',
        brand: '/Assets/images/VendorProfile/niche.jpeg',
        title: 'Salate supensedes',
        price: '$20.11',
        color: '',
        size: '',
        quantity: 1,
        colors: ['black', 'skyblue', 'darkgray', 'lightgreen'],
        sizes: ['L', 'XL', 'XXL'],
      },
      {
        image: '/Assets/images/ProductList/ring.PNG',
        brand: '/Assets/images/VendorProfile/vitra.jpeg',
        title: 'Dolor ad hoc tolant',
        price: '$50.54',
        color: '',
        size: '',
        quantity: 1,
        colors: ['black', 'orange', 'green'],
        sizes: ['L', 'XL', 'XXL'],
      },
      {
        image: '/Assets/images/ProductList/bag.PNG',
        brand: '/Assets/images/VendorProfile/roshylts.jpeg',
        title: 'Salate supensedes special',
        price: '$99.76',
        color: '',
        size: '',
        quantity: 1,
        colors: ['purple', 'red', 'gray'],
        sizes: ['L', 'XL', 'XXL'],
      },
      {
        image: '/Assets/images/ProductList/brand.png',
        brand: '/Assets/images/VendorProfile/packit.jpeg',
        title: 'Dolor ad hoc tolant',
        price: '$30.76',
        color: '',
        size: '',
        quantity: 1,
        colors: ['black', 'yellow', 'green'],
        sizes: ['L', 'XL', 'XXL'],
      },
    ],
  });
  const [liked, setLiked] = useState(false);
  const handleProduct = (data, index) => {
    console.log(data, index);
    const products = [...product.products];
    products[index] = { ...products[index], ...data };
    setProduct({ ...product, products });
  };

  return (
    <div className="BundleViewPage p-2">
      <div className="row mainViewRow">
        <div className="col-md-6">
          <div className="main-image-container heart-parent">
            <div className="d-md-none d-sm-block border-0">
              <div className="d-flex align-items-start border">
                <h2 className="product-heading">
                  Get the Look
                  <span className="inspired-by">
                    Inspired By <Link to="/vendor">Joseph</Link>
                  </span>
                </h2>
                <div>
                  <a href="/vendor" className="d-flex">
                    <img
                      src={brandLogo}
                      alt="BrandLogo"
                      className="brandLogo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <img className="b-img" width={'100%'} src={product.image} />
            <button onClick={() => setLiked(!liked)} className="heart-btn">
              {liked ? (
                <span>
                  <i className="fa fa-heart"></i>
                </span>
              ) : (
                <div>
                  <i className="far fa-heart"></i>
                </div>
              )}
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-md-block d-sm-none d-none border-0">
            <div className="d-flex">
              <h2 className="product-heading">
                Get the Look
                <span className="inspired-by">
                  Inspired By <Link to="/vendor">Joseph</Link>
                </span>
              </h2>
              <div>
                <a href="/vendor">
                  <img src={brandLogo} alt="BrandLogo" className="brandLogo" />
                </a>
              </div>
            </div>
          </div>
          <h4 className="brand-heading">In Cooperation with</h4>
          <BrandGroupImages products={product.products} />
          <div className="shopthelook">
            <div>
              <button className="button">Shop the Look</button>
            </div>
            <div className="social-links">
              <h4 className="brand-heading">Share</h4>
              <div className="d-flex justify-content-between align-items-center">
                <FaFacebookF className="social-icon" />
                <BsTwitter className="social-icon" />
                <SiQuora className="social-icon" />
              </div>
            </div>
          </div>
          {product.products.map((prod, index) => {
            return (
              <ProductView
                product={prod}
                index={index}
                handleProduct={handleProduct}
              />
            );
          })}
        </div>
      </div>
      <BundleView />
    </div>
  );
};

export default BudleViewPage;
