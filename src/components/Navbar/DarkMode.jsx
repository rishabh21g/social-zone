import React, { useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { useTheme } from "../../Context/ThemeContext";

const DarkMode = () => {
  
  const element = document.documentElement; // access to html element
 const {theme , setTheme} = useTheme();
 
  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => {
          setTheme("light")
          
        }}
          className="text-2xl" />
      ) : (
        <BiSolidMoon onClick={() => {
          setTheme("dark")
        }}
          className="text-2xl" />
      )}
    </>
  );
};

export default DarkMode;
