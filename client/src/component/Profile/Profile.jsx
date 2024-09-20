import React from "react";
import "./Profile.css";
import AsideBar from "./AsideBar";
import { AsideData } from "../../constant/AsideData.jsx";

const Profile = ({ theme }) => {
  const asideData = AsideData;

  return (
    <div className={` ${theme ? "profile-dark-theme" : ""} profile-container`}>
      <div className="aside-container">
        {asideData.map((item, index) => (
          <AsideBar
            key={index}
            theme={theme}
            icon={item.icon}
            text={item.text}
            url={item.url}
          />
        ))}
      </div>
      <div>
        <h1>WellCome To profile Page</h1>
      </div>
    </div>
  );
};

export default Profile;
