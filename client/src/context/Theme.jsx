import { createContext, useState } from "react";

export const MyTheme = createContext();

export const ThemeProvider = ({ children }) => {
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
    <MyTheme.Provider value={{ dark, handleChangeTheme }}>
      {children}
    </MyTheme.Provider>
  );
};
