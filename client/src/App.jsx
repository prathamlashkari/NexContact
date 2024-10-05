import { lazy, Suspense, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { MyTheme } from "./context/Theme";
import EditContact from "./page/Contact/EditContact";
import { useGetUserQuery } from "./store/api/UserApi";
import { setUser } from "./store/reducer/UserReducer";

// const NavBar = lazy(() => import("./component/Navbar/Navbar"));
const Home = lazy(() => import("./page/Home/Home"));
const About = lazy(() => import("./page/About/About"));
const Service = lazy(() => import("./page/Service/Service"));
const Contact = lazy(() => import("./page/Contact/Contact"));
const Login = lazy(() => import("./component/Auth/Login"));
const Signup = lazy(() => import("./component/Auth/Signup"));
const Profile = lazy(() => import("./component/Profile/Profile"));

function App() {
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { data } = useGetUserQuery();
  const { dark } = useContext(MyTheme);

  useEffect(() => {
    if (jwt) {
      if (data) {
        dispatch(setUser(data));
      }
    }
  }, [jwt, data, dispatch]);
  return (
    <Suspense fallback={<div>Loading......</div>}>
      <Navbar />
      <div
        style={{
          backgroundColor: dark ? "#333" : "white",
          height: "100vh",
        }}
      >
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/service"} element={<Service />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/user/profile/*"} element={<Profile />} />
          <Route path={"/edit-contact/:id"} element={<EditContact />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
