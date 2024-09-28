import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import { MyTheme } from "../../context/Theme";

const style = (dark) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  backdropFilter: "blur(15px)",
  border: dark
    ? "1px solid rgba(0, 0, 0, 0.2)"
    : "1px solid rgba(0, 0, 0, 0.2)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px rgba(0, 0, 225, 0.37)", // Depth
  color: dark ? "#f1f1f1" : "#333",
  p: 4,
});

const avatarStyle = {
  width: 100,
  height: 100,
  borderRadius: "50%",
  border: "2px solid #fff", // Neon effect
  boxShadow: "0px 0px 15px 5px rgba(0, 0, 225, 0.2)", // Neon glow
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
};

const fieldStyle = (dark) => ({
  marginBottom: "1rem",
  padding: "10px",
  borderRadius: "12px",
  background: dark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
  color: dark ? "white" : "black",
});

export default function ContactModal({ open, setOpen, contact }) {
  const { dark } = useContext(MyTheme);

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style(dark)}>
        {contact ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt={contact.firstName}
                src={contact.avatar}
                sx={avatarStyle}
              />
              <Typography
                variant="h5"
                sx={{ margin: "1rem 0", fontWeight: "bold" }}
              >
                {contact.firstName} {contact.lastName}
              </Typography>
            </Box>

            <Box sx={fieldStyle(dark)}>
              <Typography variant="body1">
                <strong>Email:</strong> {contact.email}
              </Typography>
            </Box>

            <Box sx={fieldStyle(dark)}>
              <Typography variant="body1">
                <strong>Phone:</strong> {contact.phone}
              </Typography>
            </Box>

            <Box sx={fieldStyle(dark)}>
              <Typography variant="body1">
                <strong>Link:</strong>{" "}
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: dark ? "white" : "black",
                    marginLeft: "5px",
                  }}
                >
                  {contact.link}
                </a>
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              sx={{
                marginTop: "2rem",
                width: "100%",
                padding: "10px",
                fontSize: "16px",
              }}
            >
              Close
            </Button>
          </>
        ) : (
          <Typography>No Contact Selected</Typography>
        )}
      </Box>
    </Modal>
  );
}
