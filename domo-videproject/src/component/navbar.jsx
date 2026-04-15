import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-[90%] z-20 border-b bg-gray-900 text-white rounded-lg">
  <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="logo"
          />
          <span className="text-xl font-bold">Flowbite</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;