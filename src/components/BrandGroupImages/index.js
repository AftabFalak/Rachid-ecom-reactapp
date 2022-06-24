import React from "react";
import { Col, Row } from "reactstrap";
import "./index.css";
const BrandGroupImages = ({ products }) => {
  return (
    <Row className="brands">
      {products.map((p) => {
        return (
          <Col md={3} className="brand-img m-0 p-0">
            <div className="brand-view heart-parent">
              <button className="heart-btn"><i className="far fa-heart"></i></button>
              <img src={p.brand} width="100%" />
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default BrandGroupImages;
