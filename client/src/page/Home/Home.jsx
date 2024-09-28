import React, { useContext } from "react";
import { MyTheme } from "../../context/Theme";
import "./Home.css";
import { Button, Grid2, Typography, IconButton } from "@mui/material";
import { AddCircleOutline, People, Settings } from "@mui/icons-material";
import HomeImg from "../../../public/home.jpg";
const Home = () => {
  const { dark } = useContext(MyTheme);

  return (
    <div className={`home-container ${dark ? "dark-mode" : ""}`}>
      <header className="home-header">
        <div>
          <img src={HomeImg} alt="" />
          <Typography variant="h2" className="home-title">
            Nex-Contact Manager
          </Typography>
        </div>
        <Typography variant="subtitle1" className="home-subtitle">
          Manage your contacts efficiently and smartly
        </Typography>
      </header>

      <Grid2 container spacing={3} className="home-actions">
        <Grid2 item xs={12} sm={4} className="home-icons">
          <IconButton className="action-icon" color="primary">
            <AddCircleOutline fontSize="large" />
          </IconButton>
          <Typography variant="h6" className="action-text">
            Add New Contact
          </Typography>
        </Grid2>
        <Grid2 item xs={12} sm={4} className="home-icons">
          <IconButton className="action-icon" color="secondary">
            <People fontSize="large" />
          </IconButton>
          <Typography variant="h6" className="action-text">
            View Contacts
          </Typography>
        </Grid2>
        <Grid2 item xs={12} sm={4} className="home-icons">
          <IconButton className="action-icon" color="default">
            <Settings fontSize="large" />
          </IconButton>
          <Typography variant="h6" className="action-text">
            Manage Settings
          </Typography>
        </Grid2>
      </Grid2>

      <Button variant="contained" color="primary" className="cta-button">
        Get Started
      </Button>
    </div>
  );
};

export default Home;
