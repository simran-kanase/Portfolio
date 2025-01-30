import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-[#2c3e50] text-white p-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-[#FCBF49]">PORT</span>FOLIO
        </div>

        {/* Desktop Menu */}
        <ul className="items-center hidden gap-10 text-xl md:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#fcbf49] border-[#fcbf49] border-b-2 cursor-pointer"
                  : "hover:text-[#fcbf49] hover:border-[#fcbf49] hover:border-b-2 cursor-pointer"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#fcbf49] border-[#fcbf49] border-b-2 cursor-pointer"
                  : "hover:text-[#fcbf49] hover:border-[#fcbf49] hover:border-b-2 cursor-pointer"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-[#fcbf49] border-[#fcbf49] border-b-2 cursor-pointer"
                  : "hover:text-[#fcbf49] hover:border-[#fcbf49] hover:border-b-2 cursor-pointer"
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive
                  ? "text-[#fcbf49] border-[#fcbf49] border-b-2 cursor-pointer"
                  : "hover:text-[#fcbf49] hover:border-[#fcbf49] hover:border-b-2 cursor-pointer"
              }
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#fcbf49] border-[#fcbf49] border-b-2 cursor-pointer"
                  : "hover:text-[#fcbf49] hover:border-[#fcbf49] hover:border-b-2 cursor-pointer"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-white md:hidden"
        >
          {isMenuOpen ? "✖" : "☰"} {/* Text-based icon for simplicity */}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col bg-[#2c3e50] text-white text-center text-xl p-4 space-y-4 md:hidden">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
              className={({ isActive }) =>
                isActive
                  ? "text-[#fcbf49] border-[#fcbf49] border-b-2 cursor-pointer"
                  : "hover:text-[#fcbf49] hover:border-[#fcbf49] hover:border-b-2 cursor-pointer"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#fcbf49] border-[#fcbf49] border-b-2 cursor-pointer"
                  : "hover:text-[#fcbf49] hover:border-[#fcbf49] hover:border-b-2 cursor-pointer"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#fcbf49] border-[#fcbf49] border-b-2 cursor-pointer"
                  : "hover:text-[#fcbf49] hover:border-[#fcbf49] hover:border-b-2 cursor-pointer"
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#fcbf49] border-[#fcbf49] border-b-2 cursor-pointer"
                  : "hover:text-[#fcbf49] hover:border-[#fcbf49] hover:border-b-2 cursor-pointer"
              }
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#fcbf49] border-[#fcbf49] border-b-2 cursor-pointer"
                  : "hover:text-[#fcbf49] hover:border-[#fcbf49] hover:border-b-2 cursor-pointer"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
