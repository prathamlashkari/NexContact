import React from "react";
import "./Profile.css";
import { Divider, Drawer, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
const AsideBar = ({ theme, icon, text, url }) => {
  const navigate = useNavigate();
  console.log(icon);
  return (
    <div onClick={() => navigate(url)}>
      <IconButton
        style={{
          color: theme ? "white" : "black",
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
