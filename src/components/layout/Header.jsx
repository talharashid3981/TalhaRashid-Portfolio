import React, { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Header = ({ isDarkMode, toggleTheme }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div 
      className={`w-full h-[60px] z-40 fixed border-b-[1px] px-4 sm:px-8 lg:px-15 flex items-center justify-between ${
        isDarkMode 
          ? 'border-gray-400 bg-[#121928f8]' 
          : 'border-gray-300 bg-white shadow-sm'
      }`}
    >
      {/* Logo */} 
      <div>
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Talha Rashid
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="flex items-center gap-4 sm:gap-8">
        <ul className="hidden md:flex gap-4 lg:gap-8">
          {navItems.map((item) => (
            <li key={item} onClick={() => setActiveLink(item)}>
              <a
                href={`#${item}`}
                className={`relative cursor-pointer font-[16px] py-2 px-1 
                  transition-colors duration-300
                  ${
                    activeLink === item
                      ? "text-blue-400 after:w-full"
                      : isDarkMode 
                        ? "text-gray-300 hover:text-blue-400 after:w-0 hover:after:w-full"
                        : "text-gray-700 hover:text-blue-500 after:w-0 hover:after:w-full"
                  }
                  after:content-[''] after:absolute after:bottom-0 after:left-0 
                  after:h-[2px] after:bg-gradient-to-r 
                  after:from-blue-600 after:to-blue-400 
                  after:transition-all after:duration-300 after:ease-in-out`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className={`md:hidden transition-colors ${
            isDarkMode 
              ? 'text-gray-300 hover:text-blue-400' 
              : 'text-gray-700 hover:text-blue-500'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" // Close (X)
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" // Hamburger
              />
            )}
          </svg>
        </button>

        {/* Theme button */}
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-colors duration-200 ${
            isDarkMode 
              ? 'hover:bg-gray-700' 
              : 'hover:bg-gray-200'
          }`}
        >
          {isDarkMode ? (
            <MdOutlineLightMode className="text-yellow-400 text-xl" />
          ) : (
            <MdOutlineDarkMode className="text-gray-600 text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div 
          className={`absolute top-[60px] left-0 w-full md:hidden ${
            isDarkMode 
              ? 'bg-[#121928] border-b border-gray-600' 
              : 'bg-white border-b border-gray-300 shadow-lg'
          }`}
        >
          <ul className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActiveLink(item);
                  setIsMenuOpen(false); // close menu after click
                }}
              >
                <a
                  href={`#${item}`}
                  className={`block cursor-pointer font-[16px] py-2 px-1 
                    transition-colors duration-300
                    ${
                      activeLink === item
                        ? "text-blue-400"
                        : isDarkMode 
                          ? "text-gray-300 hover:text-blue-400"
                          : "text-gray-700 hover:text-blue-500"
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;