import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MyTheme } from "../../context/Theme";
import { useLoginMutation } from "../../store/api/AuthApi";
import "./auth.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { dark } = useContext(MyTheme);
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = login(formData).unwrap();
      localStorage.setItem("jwt", res.jwt);
      navigate("/user/profile");
    } catch (error) {
      console.error("Error is ", error);
    }
  };

  return (
    <div className={`auth-container ${dark ? "dark-theme" : "light-dark"}`}>
      <div className={`auth-card ${dark ? "dark-card" : "light-card"}`}>
        {isLoading ? <h2>loggin in please wait......</h2> : <h2>Login</h2>}
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
