import React, { useEffect } from "react";
import { Avatar, Box, Typography, Paper, Grid2 } from "@mui/material";
import { useContext } from "react";
import { MyTheme } from "../../context/Theme";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "../../store/api/UserApi";
import { setUser } from "../../store/reducer/UserReducer";

const ProfilePage = () => {
  const { dark } = useContext(MyTheme);

  // Redux state for user details
  const { name, email, phoneNumber, about } = useSelector(
    (store) => store.userReducer
  );

  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  // Fetch user data only if there's no existing data in Redux
  const { data, isSuccess } = useGetUserQuery(undefined, {
    skip: !!name, // Skip fetching if name (user data) already exists in Redux
  });

  // Update Redux with fetched user data
  useEffect(() => {
    if (jwt && isSuccess && data) {
      dispatch(setUser(data));
    }
  }, [jwt, isSuccess, data, dispatch]);

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
              {name || "Loading..."}{" "}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Email:</strong> {email || "Loading..."}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Phone:</strong> {phoneNumber || "Loading..."}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>About:</strong> {about || "Loading..."}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Paper>
  );
};

export default ProfilePage;
