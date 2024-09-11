import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "../../assets/NavLogo.jpg";
import "./Navbar.css";

const Navbar = ({ theme, setDark }) => {
  const naivgate = useNavigate();
  return (
    <div className={`${theme ? "dark-theme" : ""} container`}>
      <div onClick={() => naivgate("/")} className="logo-name-container">
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
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <span>
        <button className="nav-button-button">Login</button>
        <button className="nav-button-button">Signup</button>
      </span>
      <span
        className={`${
          !theme ? "dark-border" : "light-border"
        } dark-mode-button`}
        onClick={setDark}
      >
        {!theme ? (
          <DarkModeIcon
            style={{
              color: "black",
              fontSize: "40px",
            }}
          />
        ) : (
          <LightModeIcon
            style={{
              fontSize: "40px",
            }}
          />
        )}
      </span>
    </div>
  );
};

export default Navbar;
