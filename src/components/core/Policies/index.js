import React from "react";
import "./index.css";
import { FaHandPaper, FaShippingFast } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";
const Policies = () => {
  return (
    <div className="Policies">
      <h4 className="arrival">Arrival</h4>

      <h3 className="dateHeading">Jun 20-Jul 1</h3>

      <div
        style={{
          width: "100%",
          height: "15px",
          borderBottom: "2px solid #eaeaea",
          textAlign: "center",
        }}
      >
        <div className="d-flex justify-content-between">
          <span
            style={{
              backgroundColor: "#eaeaea",
              padding: "0px 10px",
              borderRadius: "50%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: "6px",
            }}
          >
            <FaHandPaper />
          </span>
          <span
            style={{
              backgroundColor: "#eaeaea",
              padding: "0 10px",
              borderRadius: "50%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: "6px",
            }}
          >
            <FaShippingFast />
          </span>
          <span
            style={{
              backgroundColor: "#eaeaea",
              padding: "0 10px",
              borderRadius: "50%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: "6px",
            }}
          >
            <AiOutlineGift />
          </span>
        </div>

        <div className="d-flex justify-content-between text-left mt-4 statusRow">
          <div>
            <p className="dateStatus">Jun 13</p>
            <p className="mt-1 orderStatus">Order placed</p>
          </div>
          <div>
            <p className="dateStatus">Jun 16-20</p>
            <p className="mt-1 orderStatus">Order ships</p>
          </div>
          <div>
            <p className="dateStatus">Jun 20-jul 1</p>
            <p className="mt-1 orderStatus">Delivered!</p>
          </div>
        </div>
        <hr />

        <div className="d-flex text-left mt-4">
          <div className="mr-5">
            <p>Cost to ship</p>
            <h3 className="dateHeading">Free</h3>
          </div>
          <div>
            <p>Returns</p>
            <h3 className="dateHeading">Accepted</h3>
            <span>Exceptions may apply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
