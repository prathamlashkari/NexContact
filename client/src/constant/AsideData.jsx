import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
export const AsideData = [
  {
    icon: <DashboardIcon />,
    text: "DashBoard",
    url: "dashBoard",
  },
  {
    icon: <ViewKanbanIcon />,
    text: "KanBan",
    url: "kanban",
  },
  {
    icon: <InboxIcon />,
    text: "Inbox",
    url: "inbox",
  },
  {
    icon: <GroupIcon />,
    text: "Users",
    url: "users",
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
