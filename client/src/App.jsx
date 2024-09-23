import { lazy, Suspense, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/Theme";

const NavBar = lazy(() => import("./component/Navbar/Navbar"));
const Home = lazy(() => import("./page/Home/Home"));
const About = lazy(() => import("./page/About/About"));
const Service = lazy(() => import("./page/Service/Service"));
const Contact = lazy(() => import("./page/Contact/Contact"));
const Login = lazy(() => import("./component/Auth/Login"));
const Signup = lazy(() => import("./component/Auth/Signup"));
const Profile = lazy(() => import("./component/Profile/Profile"));

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading......</div>}>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/service"} element={<Service />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/user/profile"} element={<Profile />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
