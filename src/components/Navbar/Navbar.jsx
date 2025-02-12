import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import logo from "../../assets/website/logo.png"
import logoDark from "../../assets/website/logoDark.png"
import { useTheme } from "../../Context/ThemeContext";

export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "/#about",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "Work",
    link: "/#testimonial",
  },
  {
    id: 4,
    name: "Contact",
    link: "/#contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (state) => {
    setShowMenu(state);
  };
  const {theme:currentTheme} = useTheme();
  return (
    <div
      className="relative z-10 w-full dark:bg-black dark:text-white duration-300"
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a
            target="_blank"
            href="#"
            className="flex items-center gap-3"
          >
            <img src={currentTheme === "dark" ? logoDark : logo} alt="" className="w-[50%] md:w-[35%] sm:w-[35%]" />

          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 mr-3">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={() => toggleMenu(false)}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={() => toggleMenu(true)}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
