import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const links = ["Resume", "Tool", "Organization", "Pricing"];

  return (
    <nav className="border-b border-black/10 bg-white shadow-sm">
      <div className="flex flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">

  
        <div className="flex items-center justify-center gap-6">
          <NavLink to='/' className={({isActive})=>`cursor-pointer font-semibold transition  ${isActive ? "text-black" : "text-black/60 hover:text-black" }`}>Home</NavLink>
          {links.map((link, index) => (
            <span
              key={index}
              className="cursor-pointer font-semibold text-black/60 transition hover:text-black"
            >
              {link}
            </span>
          ))}
        </div>


        <div className="flex gap-3">
          <NavLink
            to="/login"
            className="rounded-md border-2 border-green-700 bg-white px-5 py-2 text-green-700 transition hover:bg-green-600 hover:text-white"
          >
            Login
          </NavLink>

          <NavLink
            to="/sign-up"
            className="rounded-md border-2 border-green-700 bg-green-600 px-5 py-2 text-white transition hover:bg-green-700"
          >
            Sign Up
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;