import React from 'react';
import './CSS/LoginSignUp.css';

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <div className="loginsignup-login">
          <p>Already have an account? <span>Login here</span></p>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree"></label>
          <p>By continuing, I agree to the <span>terms of use</span> & <span>privacy policy</span>.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;