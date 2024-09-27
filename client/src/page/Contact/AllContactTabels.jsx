import EditIcon from "@mui/icons-material/Edit";
import WifiIcon from "@mui/icons-material/Wifi";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { useContext } from "react";
import { MyTheme } from "../../context/Theme";
const columns = [
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
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    renderCell: (params) => <div>{params.row.email}</div>,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => (
      <div>
        <span style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "#14f014",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          ></div>{" "}
          Online
        </span>
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: () => (
      <IconButton color="primary">
        <EditIcon />
      </IconButton>
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
    email: "prathamlashkari@gamil.com",
  },
  {
    id: 2,
    firstName: "Cersei",
    lastName: "Lannister",
    phone: "123-456-7891",
    avatar: "https://via.placeholder.com/40",
    email: "prathamlashkari@gamil.com",
  },
  // Add more rows as needed
];

const paginationModel = { page: 0, pageSize: 5 };

export default function AllContactTables() {
  const { dark } = useContext(MyTheme);

  return (
    <Paper
      sx={{
        height: 400,
        width: "100%",
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#f9f9f9" : "#333",
        boxShadow: dark
          ? "0 4px 8px rgba(0, 0, 0, 0.8)"
          : "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
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
          "& .MuiCheckbox-root MuiButtonBase-root": {
            color: dark ? "#f9f9f9" : "#333",
          },
        }}
      />
    </Paper>
  );
}
