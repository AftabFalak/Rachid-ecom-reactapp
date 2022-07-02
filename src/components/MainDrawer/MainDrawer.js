/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./MainDrawer.css";

const MainDrawer = (props) => {
  const [tab, setTab] = useState(1);
  return (
    <div className={`MainDrawer ${!props.open ? "closed" : ""}`}>
      <div className="head">
        <h5>Sign in / Create account</h5>
        <button className="close" onClick={() => props.setDrawertoggle(false)}>
          <i className="fa fa-times"></i>
        </button>

        <div>
          <hr />

          <div>
            <div className="d-flex  mb-3">
              <button
                className={`tab-btn ${tab === 1 ? "selected-tab" : ""}`}
                onClick={() => setTab(1)}
              >
                <i className="fa fa-sign-in-alt"></i> Login In
              </button>
              <button
                className={`tab-btn ${tab === 2 ? "selected-tab" : ""}`}
                onClick={() => setTab(2)}
              >
                <i className="fa fa-user"></i> Create Account
              </button>
            </div>
          </div>

          {tab === 1 ? (
            <form>
              <div className="form mt-2">
                <div className="">
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <div className="input-group-text  rounded-0 bg-white">
                        <i className="fa fa-envelope"></i>{" "}
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control rounded-0  "
                      id="inlineFormInputGroup"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <div className="input-group-text rounded-0  bg-white">
                        <i className="fa fa-lock"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control rounded-0  "
                      id="inlineFormInputGroup"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="form-check mb-1 d-flex justify-content-between">
                    <div>
                      <input
                        className="form-check-input rounded-0"
                        type="checkbox"
                        id="autoSizingCheck"
                      />
                      <label className="form-check-label" for="autoSizingCheck">
                        Remember me
                      </label>
                    </div>
                    <a className="forgotPassword" for="autoSizingCheck">
                      forget password?
                    </a>
                  </div>
                </div>

                <div className=" p-0 mt-5">
                  <button type="submit" className="btn login-button">
                    LOG IN
                  </button>
                </div>
                <div className=" bottomDiv p-0 ">
                  <div className="text-center divider">
                    <div className="line"></div>
                    <p className="text">Or Login with</p>
                  </div>

                  <button
                    type="submit"
                    className="btn facebook-button d-flex justify-content-between"
                  >
                    <img
                      src="/Assets/buttonImages/facebook-icon.jpg"
                      alt=""
                      style={{ width: "21px", height: "100%" }}
                    />
                    <span> FACEBOOK</span>
                    <div></div>
                  </button>
                  <button
                    type="submit"
                    className="btn google-button d-flex justify-content-between"
                  >
                    <img
                      src="/Assets/buttonImages/google-logo.jpg"
                      alt=""
                      style={{ width: "21px", height: "100%" }}
                    />
                    <span> GOOGLE</span>
                    <div></div>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form>
              <div className="form p-0 m-0">
                <div className="">
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control rounded-0  mb-2"
                      id="inlineFormInputGroup"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control rounded-0  mb-2"
                      id="inlineFormInputGroup"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="input-group mb-2">
                    <input
                      type="password"
                      className="form-control rounded-0  mb-2"
                      id="inlineFormInputGroup"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="input-group mb-2">
                    <input
                      type="password"
                      className="form-control rounded-0  mb-2"
                      id="inlineFormInputGroup"
                      placeholder="Confirm password"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck"
                    />
                    <label className="form-check-label" for="autoSizingCheck">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className=" p-0 mt-5">
                    <button type="submit" className="btn register-button">
                      Register
                    </button>
                  </div>
                </div>
                <div className="bottomDiv">
                  <div className="text-center divider">
                    <div className="line"></div>
                    <p className="text">Or Login with</p>
                  </div>

                  <div className="m-5"></div>

                  <button
                    type="submit"
                    className="btn facebook-button d-flex justify-content-between"
                  >
                    <img
                      src="/Assets/buttonImages/facebook-icon.jpg"
                      alt=""
                      style={{ width: "21px", height: "100%" }}
                    />
                    <span> FACEBOOK</span>
                    <div></div>
                  </button>
                  <button
                    type="submit"
                    className="btn google-button d-flex justify-content-between"
                  >
                    <img
                      src="/Assets/buttonImages/google-logo.jpg"
                      alt=""
                      style={{ width: "21px", height: "100%" }}
                    />
                    <span> GOOGLE</span>
                    <div></div>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainDrawer;
