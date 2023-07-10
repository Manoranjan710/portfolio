import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex md:flex-row justify-between items-center h-20 p-3 text-white bg-slate-900">
      <div>
        <h1 className="md:text-5xl text-3xl font-signature ml-2">Manoranjan</h1>
      </div>
      <div className="md:hidden relative mr-3 text-sm">
        <button
          className="flex items-center px-3 py-2 border border-white rounded text-white hover:text-gray-300 hover:border-gray-300"
          onClick={handleDropdownToggle}
        >
          <svg
            className={`w-4 h-4 fill-current ${
              showDropdown ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z"
            />
          </svg>
        </button>
        {showDropdown && (
          <ul className=" text-sm absolute left-0 mt-2 mr-6 bg-transparent flex flex-col justify-start  ">
            <Link to="/">
              <li
                className="block mr-4 hover:scale-105 py-2 duration-300"
                onClick={handleDropdownToggle}
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                className="block mr-4 hover:scale-105 py-2 duration-300"
                onClick={handleDropdownToggle}
              >
                About
              </li>
            </Link>
            <Link to="/projects">
              <li
                className="block mr-4 hover:scale-105 py-2 duration-300"
                onClick={handleDropdownToggle}
              >
                Projects
              </li>
            </Link>
            <Link to="/contact">
              <li
                className="block mr-4 hover:scale-105 py-2 duration-300"
                onClick={handleDropdownToggle}
              >
                Contact
              </li>
            </Link>
          </ul>
        )}
      </div>
      <ul className="hidden md:flex md:flex-row md:space-x-14 md:mr-20 text-sm md:text-xl">
        <Link to="/">
          <li className="shadow shadow-md shadow-white hover:shadow-xl rounded-lg p-2 hover:scale-105 duration-300">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="shadow shadow-md shadow-white hover:shadow-xl rounded-lg p-2 hover:scale-105 duration-300">
            About me
          </li>
        </Link>
        <Link to="/projects">
          <li className="shadow shadow-md shadow-white hover:shadow-xl rounded-lg p-2 hover:scale-105 duration-300">
            Projects
          </li>
        </Link>
        <Link to="/contact">
          <li className="shadow shadow-md shadow-white hover:shadow-xl rounded-lg p-2 hover:scale-105 duration-300">
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
