import React, { useContext } from "react";
import "./Profile.css";
import { Divider, Drawer, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MyTheme } from "../../context/Theme";
const AsideBar = ({ icon, text, url }) => {
  const navigate = useNavigate();
  const { dark } = useContext(MyTheme);
  return (
    <div onClick={() => navigate(url)}>
      <IconButton
        style={{
          color: dark ? "white" : "black",
        }}
      >
        {icon}
      </IconButton>
      <span>{text}</span>
      <Divider />
    </div>
  );
};

export default AsideBar;
