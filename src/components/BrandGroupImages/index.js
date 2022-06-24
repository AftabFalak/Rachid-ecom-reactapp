import React from 'react';
import { Col, Row } from 'reactstrap';
import './index.css';
const BrandGroupImages = ({ products }) => {
  return (
    <Row className="brands">
      {products.map((p) => {
        return (
          <Col md={3} className="brand-img m-0 p-0">
            <img src={p.brand} width="100%" />
          </Col>
        );
      })}
    </Row>
  );
};

export default BrandGroupImages;
