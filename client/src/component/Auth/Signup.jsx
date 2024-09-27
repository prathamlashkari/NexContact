import React, { useContext, useState } from "react";
import "./auth.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyTheme } from "../../context/Theme";

const Signup = ({ theme }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    about: "",
    phoneNumber: "",
  });
  const { dark } = useContext(MyTheme);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted:", formData);
  };

  return (
    <div className={`auth-container ${dark ? "dark-theme" : ""}`}>
      <div className={`auth-card ${dark ? "dark-card" : ""}`}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>About</label>
            <textarea
              name="about"
              placeholder="Tell us about yourself"
              value={formData.about}
              onChange={handleChange}
            />
          </div>
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
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        <div className="social-login">
          <p>or sign up with</p>
          <button className="social-btn google">
            <FaGoogle /> Sign up with Google
          </button>
          <button className="social-btn github">
            <FaGithub /> Sign up with GitHub
          </button>
        </div>

        <p className="toggle-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
