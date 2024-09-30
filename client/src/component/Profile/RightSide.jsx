import React from "react";
import { Avatar, Box, Typography, Paper, Grid2 } from "@mui/material";
import { useContext } from "react";
import { MyTheme } from "../../context/Theme";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { dark } = useContext(MyTheme);

  const {
    name,
    email,
    phoneNumber,
    about,
    profilePic = "https://png.pngtree.com/png-clipart/20230913/original/pngtree-profile-picture-vector-png-image_11063301.png",
  } = useSelector((store) => store.userReducer);

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
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} sm={4}>
          <Avatar
            alt={name}
            src={
              "https://png.pngtree.com/png-clipart/20230913/original/pngtree-profile-picture-vector-png-image_11063301.png"
            }
            sx={{
              width: 150,
              height: 150,
              margin: "auto",
              boxShadow: dark
                ? "0 4px 10px rgba(0, 0, 0, 0.7)"
                : "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid2>
        <Grid2 item xs={12} sm={8}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h4" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Email:</strong> {email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Phone:</strong> {phoneNumber}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>About:</strong> {about}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Paper>
  );
};

export default ProfilePage;
