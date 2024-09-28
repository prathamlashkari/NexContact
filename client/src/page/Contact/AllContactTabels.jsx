import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useContext } from "react";
import { MyTheme } from "../../context/Theme";
import LinkIcon from "@mui/icons-material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ContactModal from "../../component/Contact/ContactModal";

let theme;
const columns = (handleEyeClick) => [
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar alt={params.row.firstName} src={params.row.avatar} />
        <span style={{ marginLeft: "10px" }}>
          {params.row.firstName} {params.row.lastName}
        </span>
      </div>
    ),
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <CallIcon />
        <span style={{ marginLeft: "5px" }}>{params.row.phone}</span>
      </div>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    renderCell: (params) => <div>{params.row.email}</div>,
  },
  {
    field: "link",
    headerName: "Link",
    width: 200,
    renderCell: (params) => (
      <span>
        <LinkIcon
          style={{
            marginTop: "12px",
          }}
        />
      </span>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <div>
        <IconButton color={theme ? "primary" : "secondary"}>
          <EditIcon />
        </IconButton>
        <IconButton
          color={theme ? "primary" : "secondary"}
          onClick={() => handleEyeClick(params.row)}
        >
          <RemoveRedEyeIcon />
        </IconButton>
        <IconButton color={theme ? "primary" : "secondary"}>
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    firstName: "Jon",
    lastName: "Snow",
    phone: "123-456-7890",
    avatar: "https://via.placeholder.com/40",
    email: "jonsnow@gamil.com",
    link: "https://jonsnow.com",
  },
  {
    id: 2,
    firstName: "Cersei",
    lastName: "Lannister",
    phone: "123-456-7891",
    avatar: "https://via.placeholder.com/40",
    email: "cersei@gamil.com",
    link: "https://cersei.com",
  },
  // Add more rows as needed
];

export default function AllContactTables() {
  const { dark } = useContext(MyTheme);
  theme = dark;

  const [selectedContact, setSelectedContact] = useState(null);
  const [open, setOpen] = useState(false);

  // Handle eye icon click
  const handleEyeClick = (contact) => {
    console.log("cicked");
    setSelectedContact(contact);
    setOpen(true);
  };

  return (
    <div>
      <Paper
        sx={{
          height: 400,
          width: "80%",
          backgroundColor: dark ? "#333" : "#fff",
          color: dark ? "#f9f9f9" : "#333",
          boxShadow: dark
            ? "0 4px 8px rgba(0, 0, 0, 0.8)"
            : "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns(handleEyeClick)}
          pageSizeOptions={[5, 10]}
          sx={{
            border: 0,
            "& .MuiDataGrid-cell ": {
              color: dark ? "#f9f9f9" : "#333",
            },
            "& .MuiDataGrid-row--borderBottom css-yrdy0g-MuiDataGrid-columnHeaderRow":
              {
                backgroundColor: dark ? "#555" : "#e0e0e0",
                color: dark ? "#fff" : "#000",
              },
          }}
        />
      </Paper>

      {/* Modal to display contact details */}
      <ContactModal open={open} setOpen={setOpen} contact={selectedContact} />
    </div>
  );
}
