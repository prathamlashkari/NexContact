import React from "react";
import { Avatar, Box, Typography, Paper, Grid } from "@mui/material";
import { useContext } from "react";
import { MyTheme } from "../../context/Theme";

const ProfilePage = () => {
  const { dark } = useContext(MyTheme);

  // Sample user data (replace with your actual data)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    about: "Software Engineer with a passion for building web applications.",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "3rem",
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#f9f9f9" : "#333",
        boxShadow: dark
          ? "0 4px 8px rgba(0, 0, 0, 0.8)"
          : "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Avatar
            alt={user.name}
            src={user.image}
            sx={{
              width: 150,
              height: 150,
              margin: "auto",
              boxShadow: dark
                ? "0 4px 10px rgba(0, 0, 0, 0.7)"
                : "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h4" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Phone:</strong> {user.phone}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>About:</strong> {user.about}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfilePage;
