import React, { useContext } from "react";
import "./Home.css";
import { MyTheme } from "../../context/Theme";
const Home = () => {
  const { dark } = useContext(MyTheme);

  return <div className={`${dark ? "dark-mode" : ""}`}>Home</div>;
};

export default Home;
