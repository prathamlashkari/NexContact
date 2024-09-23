import React, { useContext } from "react";
import "./Profile.css";
import AsideBar from "./AsideBar";
import { AsideData } from "../../constant/AsideData.jsx";
import { MyTheme } from "../../context/Theme.jsx";

const Profile = ({ theme }) => {
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
      <div>
        <h1>WellCome To profile Page</h1>
      </div>
    </div>
  );
};

export default Profile;
