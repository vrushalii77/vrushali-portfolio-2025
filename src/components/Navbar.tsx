import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png"; // 👈 Replace with your logo path

const Navbar: React.FC = () => {
  const links = ["Skills", "Projects", "Certifications", "Connect"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full top-0 left-0 z-50 bg-black  shadow-md px-2 lg:px-30 fixed">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-auto h-12 lg:h-12 object-cover shadow-lg"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="
                relative text-white font-semibold pb-1 text-xl
                transition-all duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-[#38bdf8] after:transition-all after:duration-300
                hover:after:w-full
              "
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-2xl text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Sidebar (Floating Black Card) */}
      <div
        className={`fixed top-20 right-0 h-auto w-[60%] sm:w-[250px] 
    bg-black/90 rounded-2xl shadow-xl backdrop-blur-md border border-gray-800
    transform transition-transform duration-300 ease-in-out z-40
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button inside */}
        <div className="flex justify-end p-4 text-xl text-gray-400 cursor-pointer">
          <FaTimes onClick={() => setIsOpen(false)} />
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-center gap-6 pb-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg sm:text-xl font-medium hover:text-transparent 
          bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] transition-all duration-300"
              >
                {link}
              </a>
            </li>
          ))}

          {/* Extra Button like View Resume */}
          <li className="w-full px-6">
            <button
              className="w-full bg-gradient-to-r from-[#38bdf8] via-[#f472b6] to-[#facc15] 
        text-black font-semibold py-2 rounded-xl shadow-md hover:opacity-90 transition"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              View Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
