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
  width: 400,
  bgcolor: dark ? "#333" : "background.paper",
  color: dark ? "#fff" : "#000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
            <Avatar
              alt={contact.firstName}
              src={contact.avatar}
              sx={{ width: 80, height: 80, marginBottom: "1rem" }}
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {contact.firstName} {contact.lastName}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <strong>Email:</strong> {contact.email}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <strong>Phone:</strong> {contact.phone}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <strong>Link:</strong> <a href={contact.link}>{contact.link}</a>
            </Typography>
          </>
        ) : (
          <Typography>No Contact Selected</Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          sx={{ marginTop: "1rem" }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}
