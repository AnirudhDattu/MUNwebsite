import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-transparent">
      <div className="logo">
        <img src={assets.navbar_logo} alt="Logo" className="h-16" />
      </div>
      <nav className="nav-links">
        <ul className="flex space-x-8 items-center">
          {" "}
          {/* Added items-center class */}
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 text-lg px-4"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 text-lg px-4"
            >
              ABOUT US
            </Link>
          </li>
          {/* Increased font size */}
          <li>
            <Link
              to="/sponsors"
              className="text-white hover:text-gray-300 text-lg px-4"
            >
              SPONSORS
            </Link>
          </li>
          {/* Increased font size */}
          {/* "BROCHURE" link */}
          <li>
            <a
              href="link-to-pdf-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-lg px-4"
            >
              BROCHURE
            </a>
          </li>
          <li>
            <a
              href="link-to-google-form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 px-6 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
              style={{ lineHeight: "1.5rem" }}
            >
              REGISTER
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
