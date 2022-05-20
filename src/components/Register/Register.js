import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <form onSubmit={() => console.log('submit')}>
            <div className="input-container">
              <label>First Name</label>
              <input
                type="text"
                name="uname"
                placeholder="First name"
                required
              />
            </div>
            <div className="input-container">
              <label>Last Names</label>
              <input
                type="text"
                name="uname"
                placeholder="Last name"
                required
              />
            </div>
            <div className="input-container">
              <label>Username or Email</label>
              <input
                type="text"
                name="uname"
                placeholder="Username o Email"
                required
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="pass"
                placeholder="Password"
                required
              />
            </div>
            <div className="input-container">
              <label>Confirm Password</label>
              <input
                type="password"
                name="pass"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
