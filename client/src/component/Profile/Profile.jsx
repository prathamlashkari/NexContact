import React, { lazy, useContext } from "react";
import "./Profile.css";
import AsideBar from "./AsideBar";
import { AsideData } from "../../constant/AsideData.jsx";
import { MyTheme } from "../../context/Theme.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import ProfilePage from "./RightSide.jsx";
const AddContact = lazy(() => import("../../page/Contact/AddContact.jsx"));
const AllContacts = lazy(() =>
  import("../../page/Contact/AllContactTabels.jsx")
);

const Profile = () => {
  const asideData = AsideData;
  const { dark } = useContext(MyTheme);
  return (
    <div className={` ${dark ? "profile-dark-theme" : ""} profile-container`}>
      <div className="aside-container">
        {asideData.map((item, index) => (
          <AsideBar
            key={index}
            icon={item.icon}
            text={item.text}
            url={item.url}
          />
        ))}
      </div>
      <div className="right-container">
        <Routes>
          <Route path="" element={<ProfilePage />} />
          <Route path="add-contact" element={<AddContact />} />
          <Route path="contacts" element={<AllContacts />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
