import { useState } from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png"; // Asegúrate de que la ruta a la imagen del logo sea correcta.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#6B4D4D] p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full mr-4" />
          <ol className="hidden md:flex space-x-8 text-white font-semibold">
            <li className="hover:text-gray-200 transition duration-300">uno</li>
            <li className="hover:text-gray-200 transition duration-300">dos</li>
            <li className="hover:text-gray-200 transition duration-300">tres</li>
          </ol>
        </div>
        <div className="flex items-center">
          <CartWidget />
          <button 
            className="md:hidden ml-4 text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3 12.5a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#6B4D4D] p-4">
          <ol className="space-y-4 text-white font-semibold">
            <li className="hover:text-gray-200 transition duration-300">uno</li>
            <li className="hover:text-gray-200 transition duration-300">dos</li>
            <li className="hover:text-gray-200 transition duration-300">tres</li>
          </ol>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
