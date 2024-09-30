import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import GroupIcon from "@mui/icons-material/Group";
import InboxIcon from "@mui/icons-material/Inbox";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
export const AsideData = [
  {
    icon: <EmojiPeopleIcon />,
    text: "Profile",
    url: "",
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
    url: "/login",
  },
  {
    icon: <LogoutIcon />,
    text: "Sign Up",
    url: "/signup",
  },
];
