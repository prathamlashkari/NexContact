import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "../../assets/NavLogo.jpg";
import "./Navbar.css";
import { Avatar, IconButton } from "@mui/material";
const Navbar = ({ theme, setDark }) => {
  const navigate = useNavigate();
  const user = true;
  return (
    <div className={`${theme ? "dark-theme" : ""} container`}>
      <div onClick={() => navigate("/")} className="logo-name-container">
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
        {user ? (
          <>
            <IconButton
              onClick={() => navigate("/user/profile")}
              style={{ height: "1rem" }}
            >
              <Avatar src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-profile-picture-vector-png-image_11063301.png" />
            </IconButton>
            <button
              onClick={() => navigate("/logout")}
              className="nav-button-button"
              style={{ backgroundColor: "red" }}
            >
              Logout
            </button>{" "}
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="nav-button-button"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="nav-button-button"
            >
              Signup
            </button>{" "}
          </>
        )}
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
              fontSize: "30px",
            }}
          />
        ) : (
          <LightModeIcon
            style={{
              fontSize: "30px",
            }}
          />
        )}
      </span>
    </div>
  );
};

export default Navbar;
