import React, { useContext } from "react";
import "./Contact.css";
import { MyTheme } from "../../context/Theme";
const Contact = () => {
  const { dark } = useContext(MyTheme);

  return <div>Contact</div>;
};

export default Contact;
