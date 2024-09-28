import React, { useContext } from "react";
import { MyTheme } from "../../context/Theme";
import { Typography, Grid, Card, CardContent, IconButton } from "@mui/material";
import { Build, SupportAgent, Code } from "@mui/icons-material";
import "./Service.css";

const Service = () => {
  const { dark } = useContext(MyTheme);

  return (
    <div className={`service-container ${dark ? "dark-mode" : ""}`}>
      <Typography variant="h3" className="section-title">
        Our Services
      </Typography>
      <Grid container spacing={4} className="services-grid">
        <Grid item xs={12} sm={6} md={4}>
          <Card className="service-card">
            <IconButton className="service-icon" color="primary">
              <Build fontSize="large" />
            </IconButton>
            <CardContent>
              <Typography variant="h5" className="service-title">
                Custom Solutions
              </Typography>
              <Typography variant="body2" className="service-description">
                We provide custom contact management solutions tailored to your
                needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="service-card">
            <IconButton className="service-icon" color="secondary">
              <SupportAgent fontSize="large" />
            </IconButton>
            <CardContent>
              <Typography variant="h5" className="service-title">
                24/7 Support
              </Typography>
              <Typography variant="body2" className="service-description">
                Our support team is available 24/7 to assist you with any
                issues.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className="service-card">
            <IconButton className="service-icon" color="default">
              <Code fontSize="large" />
            </IconButton>
            <CardContent>
              <Typography variant="h5" className="service-title">
                API Integrations
              </Typography>
              <Typography variant="body2" className="service-description">
                We offer easy API integrations to manage contacts
                programmatically.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Service;
