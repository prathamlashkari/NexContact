import { lazy, Suspense, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const NavBar = lazy(() => import("./component/Navbar/Navbar"));
const Home = lazy(() => import("./page/Home/Home"));
const About = lazy(() => import("./page/About/About"));
const Service = lazy(() => import("./page/Service/Service"));
const Contact = lazy(() => import("./page/Contact/Contact"));

function App() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("myTheme");
    return savedTheme === "true";
  });

  const handleChangeTheme = () => {
    const newTheme = !dark;
    localStorage.setItem("myTheme", newTheme);
    setDark(newTheme);
  };

  return (
    <>
      <Suspense fallback={<div>Loading......</div>}>
        <NavBar theme={dark} setDark={handleChangeTheme} />
        <Routes>
          <Route path={"/"} element={<Home theme={dark} />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/service"} element={<Service />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
