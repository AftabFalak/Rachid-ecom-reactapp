/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import pic1 from '../../assets/images/bag.PNG';
import pic2 from '../../assets/images/brand.png';
import pic3 from '../../assets/images/ring.PNG';
import pic4 from '../../assets/images/shoe.PNG';

function List() {
  const cards = [
    {
      image: pic1,
      brandName: 'Outfitter',
      productTitle: 'Bag',
      stock: 4,
      price: 344.4,
      oldPrice: 344.4,
    },
    {
      image: pic2,
      brandName: 'Outfitter',
      productTitle: 'Bag',
      stock: 4,
      price: 344.4,
      oldPrice: 344.4,
    },
    {
      image: pic3,
      brandName: 'Outfitter',
      productTitle: 'Bag',
      stock: 4,
      price: 344.4,
      oldPrice: 344.4,
    },
    {
      image: pic4,
      brandName: 'Outfitter',
      productTitle: 'Bag',
      stock: 4,
      price: 344.4,
      oldPrice: 344.4,
    },
  ];
  return (
    <div className="row">
      <div className="col-3">
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={pic1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={pic1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={pic3} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={pic4} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
