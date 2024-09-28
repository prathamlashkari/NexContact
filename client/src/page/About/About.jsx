import React, { useContext } from "react";
import { MyTheme } from "../../context/Theme";
import "./About.css";
import {
  Container,
  Typography,
  Grid2,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import {
  Flag,
  Star,
  ContactMail,
  Security,
  Speed,
  Group,
} from "@mui/icons-material";

const About = () => {
  const { dark } = useContext(MyTheme);

  return (
    <div className={`about-container ${dark ? "dark-mode" : ""}`}>
      <Container maxWidth="lg">
        {/* Our Mission Section */}
        <section className="about-section">
          <Typography
            style={{ marginBottom: "1rem" }}
            variant="h3"
            className="section-title"
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            style={{ margin: "auto" }}
            className="section-content"
          >
            At Smart Contact Manager, our mission is to provide an intuitive and
            efficient platform to manage your contacts seamlessly. We leverage
            modern technologies to ensure your data is secure, accessible, and
            easy to organize.
          </Typography>
        </section>

        {/* Features Section */}
        <section className="about-section">
          <Typography
            style={{ marginBottom: "2rem", marginTop: "2rem" }}
            variant="h3"
            className="section-title"
          >
            Features
          </Typography>
          <Grid2 container spacing={4} className="features-grid">
            <Grid2 item xs={12} sm={6} md={4}>
              <Card className="feature-card">
                <IconButton className="feature-icon" color="primary">
                  <Speed fontSize="large" />
                </IconButton>
                <CardContent>
                  <Typography
                    variant="h5"
                    className="feature-title"
                    style={{
                      color: dark ? "white" : "black",
                    }}
                  >
                    Fast Performance
                  </Typography>
                  <Typography variant="body2" className="feature-description">
                    Experience lightning-fast load times and seamless navigation
                    across all devices.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4}>
              <Card className="feature-card">
                <IconButton className="feature-icon" color="secondary">
                  <Security fontSize="large" />
                </IconButton>
                <CardContent>
                  <Typography
                    variant="h5"
                    className="feature-title"
                    style={{
                      color: dark ? "white" : "black",
                    }}
                  >
                    Secure Data
                  </Typography>
                  <Typography
                    style={{
                      color: dark ? "white" : "black",
                    }}
                    variant="body2"
                    className="feature-description"
                  >
                    Your contacts are protected with advanced security measures
                    and encrypted storage.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4}>
              <Card className="feature-card">
                <IconButton className="feature-icon" color="default">
                  <Group fontSize="large" />
                </IconButton>
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      color: dark ? "white" : "black",
                    }}
                    className="feature-title"
                  >
                    User Friendly
                  </Typography>
                  <Typography variant="body2" className="feature-description">
                    Intuitive design and easy-to-use interface for managing your
                    contacts effortlessly.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4}>
              <Card className="feature-card">
                <IconButton className="feature-icon" color="success">
                  <Star fontSize="large" />
                </IconButton>
                <CardContent>
                  <Typography
                    style={{
                      color: dark ? "white" : "black",
                    }}
                    variant="h5"
                    className="feature-title"
                  >
                    Premium Features
                  </Typography>
                  <Typography variant="body2" className="feature-description">
                    Unlock additional premium features to enhance your contact
                    management.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </section>

        {/* Contact Us Section */}
        <section className="about-section">
          <Typography
            style={{ margin: "1rem" }}
            variant="h3"
            className="section-title"
          >
            Contact Us
          </Typography>
          <Grid2 container spacing={2} className="contact-Grid2">
            <Grid2 item xs={12} sm={6}>
              <Typography variant="body1" className="contact-info">
                <ContactMail className="contact-icon" /> Email:
                support@smartcontact.com
              </Typography>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <Typography variant="body1" className="contact-info">
                <ContactMail className="contact-icon" /> Phone: +1 (234) 567-890
              </Typography>
            </Grid2>
          </Grid2>
        </section>
      </Container>
    </div>
  );
};

export default About;
