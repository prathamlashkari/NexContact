import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavLogo from "../../assets/NavLogo.jpg";

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo-name-container">
        <img src={NavLogo} alt="Logo" />
        <span>NexContact</span>
      </div>
      <div className="nav-link-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <button className="nav-button-button">Get Started</button>
    </div>
  );
};

export default Navbar;
