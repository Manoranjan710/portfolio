import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex md:flex-row justify-between items-center h-20 p-3 text-white bg-slate-900">
      <div>
        <h1 className="md:text-5xl text-xl font-signature ml-2">
          {" "}
          Manoranjan{" "}
        </h1>
      </div>
      <ul className=" md:flex md:flex-row md:space-x-14 md:mr-20 text-sm md:text-xl">
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
