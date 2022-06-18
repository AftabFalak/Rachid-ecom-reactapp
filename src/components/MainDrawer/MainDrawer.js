/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './MainDrawer.css';

import GoogleButton from 'react-google-button';

const MainDrawer = (props) => {
  const [tab, setTab] = useState(1);
  return (
    <div className={`MainDrawer ${!props.open ? 'closed' : ''}`}>
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
                className={`tab-btn ${tab === 1 ? 'selected-tab' : ''}`}
                onClick={() => setTab(1)}
              >
                <i className="fa fa-sign-in-alt"></i> Sign In
              </button>
              <button
                className={`tab-btn ${tab === 2 ? 'selected-tab' : ''}`}
                onClick={() => setTab(2)}
              >
                <i className="fa fa-user"></i> Sign Up
              </button>
            </div>
          </div>

          {tab === 1 ? (
            <form>
              <div className="form mt-2">
                <div className="col-auto">
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <div className="input-group-text  rounded-0 bg-white">
                        <i className="fa fa-envelope"></i>{' '}
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
                <div className="col-auto">
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
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input  rounded-0"
                      type="checkbox"
                      id="autoSizingCheck"
                    />
                    <label className="form-check-label" for="autoSizingCheck">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="form-check mb-0  text-center">
                    <a
                      className="form-check-label forgotPassword cursor-pointer btn outline-none border-0"
                      for="autoSizingCheck"
                    >
                      Forgot Account?
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-primary my-3 form-control rounded-0 shadow"
                  >
                    Sign in
                  </button>
                </div>
                <div className="col-auto">
                  <div className="text-center divider">
                    <div className="line"></div>
                    <p className="text">Or sign in via</p>
                  </div>
                  <GoogleButton
                    onClick={() => {
                      console.log('Google button clicked');
                    }}
                    style={{
                      backgroundColor: '#ffff',
                      overflow: 'hidden',
                      color: ' black',
                    }}
                    className="w-100"
                    icon
                  />
                </div>
              </div>
            </form>
          ) : (
            <form>
              <div className="form ">
                <div className="col-auto">
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
                <div className="col-auto">
                  <div className="input-group mb-2">
                    <input
                      type="password"
                      className="form-control rounded-0  mb-2"
                      id="inlineFormInputGroup"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="input-group mb-2">
                    <input
                      type="password"
                      className="form-control rounded-0  mb-2"
                      id="inlineFormInputGroup"
                      placeholder="Confirm password"
                    />
                  </div>
                </div>
                <div className="col-auto">
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
                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-primary mb-2 form-control"
                  >
                    Submit
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
