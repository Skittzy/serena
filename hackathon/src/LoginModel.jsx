import React from "react";
import "./LoginModel.css";

export default function LoginModal({ onClose }) {
  return (
    <div className="login-fullscreen">
      <button className="back-btn" onClick={onClose}>←</button>
      <div className="login-content">
        <h2 className="modal-title">Login To Your Account</h2>

        <div className="input-field">
          <span className="icon">📧</span>
          <input type="email" placeholder="example@email.com" />
        </div>

        <div className="input-field">
          <span className="icon">🔒</span>
          <input type="password" placeholder="Password" />
          <span className="icon eye">🙈</span>
        </div>

        <a href="#" className="forgot-password">Forget Password?</a>

        <button className="login-btn">Login</button>

        <p className="signup-text">
          Create New Account? <span className="bold">Sign up</span>
        </p>

        <p className="continue-text">Continue With Accounts</p>

        <div className="social-buttons">
          <button className="social google">GOOGLE</button>
          <button className="social facebook">FACEBOOK</button>
        </div>
      </div>
    </div>
  );
}
