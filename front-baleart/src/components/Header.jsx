import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gray-800 text-white shadow-md rounded-lg z-50 md:grid-cols-2 py-0">
      <div className="container flex justify-between items-center px-1">
        <p className="text-2xl font-bold py-2 ml-4 flex items-center leading-none">Baleart</p>
        <nav className="navbar flex items-center ml-5">
          <ul className="flex space-x-4 items-center">
            <li>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/"
                className={({ isActive }) =>
                  `relative text-lg font-bold px-4 py-2 flex items-center h-full leading-none transition-all duration-500 cursor-pointer
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
                style={{ textDecoration: "none" }}
                to="espacios"
                className={({ isActive }) =>
                  `relative text-lg font-bold px-4 py-2 flex items-center h-full leading-none transition-all duration-500 cursor-pointer
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
                style={{ textDecoration: "none" }}
                to="contacto"
                className={({ isActive }) =>
                  `relative text-lg font-bold px-4 py-2 flex items-center h-full leading-none transition-all duration-500 cursor-pointer
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
        
        {/* Usuario + Botón Idiomas */}
        <div className="flex items-center space-x-1 py-2 mb-3">
          <div className="text-lg font-bold px-1 flex items-center leading-none">Hola, Usuario</div>
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
