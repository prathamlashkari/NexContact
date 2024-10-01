import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "../../store/api/UserApi";
import { setUser, logOut } from "../../store/reducer/UserReducer";
import { MyTheme } from "../../context/Theme";
import { Avatar, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NavLogo from "../../assets/NavLogo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { dark, handleChangeTheme } = useContext(MyTheme);
  const dispatch = useDispatch();

  const user = useSelector((store) => store.userReducer);
  const jwt = localStorage.getItem("jwt");

  const { data, isSuccess } = useGetUserQuery(undefined, {
    skip: !!user.name,
  });

  useEffect(() => {
    if (jwt && isSuccess && data) {
      dispatch(setUser(data));
    }
  }, [jwt, data, isSuccess, dispatch]);

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className={`${dark ? "dark-theme" : ""} container`}>
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
        {user.name ? (
          <>
            <IconButton
              onClick={() => navigate("/user/profile")}
              style={{ height: "1rem" }}
            >
              <Avatar src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-profile-picture-vector-png-image_11063301.png" />
            </IconButton>
            <button
              onClick={handleLogOut}
              className="nav-button-button"
              style={{ backgroundColor: "red" }}
            >
              Logout
            </button>
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
            </button>
          </>
        )}
      </span>
      <span
        className={`${!dark ? "dark-border" : "light-border"} dark-mode-button`}
        onClick={handleChangeTheme}
      >
        {!dark ? (
          <DarkModeIcon style={{ color: "black", fontSize: "30px" }} />
        ) : (
          <LightModeIcon style={{ fontSize: "30px" }} />
        )}
      </span>
    </div>
  );
};

export default Navbar;
