import React from "react";
import "./Home.css";
const Home = ({ theme }) => {
  return <div className={`${theme ? "dark-mode" : ""}`}>Home</div>;
};

export default Home;
