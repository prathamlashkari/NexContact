import React, { useState } from "react";
import "./auth.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = ({ theme }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
  };

  return (
    <div className={`auth-container ${theme ? "dark-theme" : "light-theme"}`}>
      <div className={`auth-card ${theme ? "dark-card" : "light-card"}`}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <div className="social-login">
          <p>or login with</p>
          <button className="social-btn google">
            <FaGoogle /> Login with Google
          </button>
          <button className="social-btn github">
            <FaGithub /> Login with GitHub
          </button>
        </div>

        <p className="toggle-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
