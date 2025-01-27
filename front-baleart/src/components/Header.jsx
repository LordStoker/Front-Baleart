import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md py-3 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Baleart</h1>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg transition-transform duration-300 hover:scale-105 "
          onClick={() => setIsOpen(!isOpen)}>
          <i className="bi bi-list"></i>
        </button>
      </div>
      {isOpen && (
        <nav className="mt-4 bg-gray-700 rounded-lg shadow-lg">
          <ul className="space-y-2 p-4">
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
      )}
    </header>
  );
}
