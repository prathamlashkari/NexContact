import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
export const AsideData = [
  {
    icon: <ViewKanbanIcon />,
    text: "Profile",
    url: "profile",
  },
  {
    icon: <InboxIcon />,
    text: "Add Contact",
    url: "add-contact",
  },
  {
    icon: <GroupIcon />,
    text: "Contacts",
    url: "contacts",
  },
  {
    icon: <ProductionQuantityLimitsIcon />,
    text: "Products",
    url: "products",
  },
  {
    icon: <LoginIcon />,
    text: "Sign In",
    url: "signin",
  },
  {
    icon: <LogoutIcon />,
    text: "Sign Up",
    url: "signUp",
  },
];
