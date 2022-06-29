import React,{useState} from "react";
import { Col, Row } from "reactstrap";
import "./index.css";
const BrandGroupImages = ({ products }) => {
  const [liked, setLiked] = useState(false);
  return (
    <Row className="brands">
      {products.map((p) => {
        return (
          <Col sm={3} xs={3} md={3} className="brand-img m-0 p-0">
            <div className="brand-view heart-parent">
            <button
                    onClick={() => setLiked(!liked)}
                    className="heart-btn"
                  >
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
              <img src={p.brand} width="100%" />
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default BrandGroupImages;
