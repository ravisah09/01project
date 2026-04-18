import { useState } from "react";

 function Navbar({ currentPage, setCurrentPage }) {
  return <div>Navbar</div>;
}

  const links = ["Home", "About", "Contact"];

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold tracking-wide cursor-pointer"
          onClick={() => setCurrentPage("Home")}
        >
          🌟 MyWebsite
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => setCurrentPage(link)}
                className={`hover:text-yellow-300 transition-colors duration-200 pb-1 ${
                  currentPage === link
                    ? "border-b-2 border-yellow-300 text-yellow-300"
                    : ""
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-800 px-6 pb-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => {
                setCurrentPage(link);
                setMenuOpen(false);
              }}
              className={`block w-full text-left py-3 text-lg border-b border-indigo-600 hover:text-yellow-300 transition-colors ${
                currentPage === link ? "text-yellow-300 font-semibold" : ""
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );



export default Navbar;