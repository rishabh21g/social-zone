import React, { useEffect, useRef } from "react";
import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  const menuRef = useRef(null);

  // Detect click outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu(false); // Close the menu
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed top-0 bottom-0 z-20 flex h-screen w-3/4 flex-col bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-300 md:hidden shadow-md`}
      ref={menuRef}
    >
      {/* Navigation Links */}
      <div className="flex flex-col items-center h-full">
        <nav>
          <ul className="space-y-6 text-xl flex flex-col items-center">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <a
                  href={data.link}
                  className="text-lg font-medium hover:text-primary transition-colors duration-200"
                  onClick={() => toggleMenu(false)} // Close menu on link click
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
