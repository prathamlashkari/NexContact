import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useContext, useEffect } from "react";
import { MyTheme } from "../../context/Theme";
import LinkIcon from "@mui/icons-material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ContactModal from "../../component/Contact/ContactModal";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  useDeleteContactMutation,
  useGetAllContactQuery,
} from "../../store/api/UserApi";

let theme;
const columns = (handleEyeClick, handleEdit, handleDelete) => [
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar alt={params.row.name} src={params.row.profileImage} />
        <span style={{ marginLeft: "10px" }}>{params.row.name}</span>
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
      <Link to={params.row.link} target="_blank">
        <LinkIcon
          style={{
            marginTop: "12px",
            color: "red",
            cursor: "pointer",
          }}
        />
      </Link>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <div>
        <IconButton
          color={theme ? "primary" : "secondary"}
          onClick={() => handleEdit(params.row.id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color={theme ? "primary" : "secondary"}
          onClick={() => handleEyeClick(params.row)}
        >
          <RemoveRedEyeIcon />
        </IconButton>
        <IconButton
          color={theme ? "primary" : "secondary"}
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];

export default function AllContactTables() {
  const { dark } = useContext(MyTheme);
  const navigate = useNavigate();
  theme = dark;
  const { data } = useGetAllContactQuery();
  const [deleteContact] = useDeleteContactMutation();
  useEffect(() => {}, [data]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [open, setOpen] = useState(false);

  const handleEyeClick = (contact) => {
    setSelectedContact(contact);
    setOpen(true);
  };

  const handleEdit = (id) => {
    navigate(`/edit-contact/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      try {
        const res = await deleteContact(id);
        // toast.success(res.data.msg);
      } catch (error) {
        // toast.error(error);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
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
          rows={data}
          columns={columns(handleEyeClick, handleEdit, handleDelete, navigate)}
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

      <ContactModal open={open} setOpen={setOpen} contact={selectedContact} />
    </div>
  );
}
