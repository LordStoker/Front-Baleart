import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md py-1 rounded-lg relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold py-5">Baleart</h1>
        <nav className="flex-1 flex justify-center items-center">
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative block text-lg font-bold px-4 py-2 transition-all duration-500 cursor-pointer
                ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "bg-transparent text-gray-300 hover:bg-red-300 hover:text-white"
                } rounded-lg`
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="espacios"
                className={({ isActive }) =>
                  `relative block text-lg font-bold px-4 py-2 transition-all duration-500 cursor-pointer
                ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "bg-transparent text-gray-300 hover:bg-red-300 hover:text-white"
                } rounded-lg`
                }
              >
                Espacios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contacto"
                className={({ isActive }) =>
                  `relative block text-lg font-bold px-4 py-2 transition-all duration-500 cursor-pointer
                ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "bg-transparent text-gray-300 hover:bg-red-300 hover:text-white"
                } rounded-lg`
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="text-lg font-bold px-3">Usuario</div>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center focus:outline-none"
              aria-label="Seleccionar idioma"
            >
              <span className="text-white">🌐</span>
            </button>
            {isOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Català</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">English</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Castellano</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
