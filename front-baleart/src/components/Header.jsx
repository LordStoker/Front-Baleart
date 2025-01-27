import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md py-3">
      <div className="container mx-auto d-flex justify-content-between align-items-center">
        <h1 className="text-2xl font-bold">Baleart</h1>
        <nav>
          <ul className="d-flex gap-4 m-0 p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                        `relative block text-lg font-bold px-4 py-2 transition-all duration-500 cursor-pointer
              ${
                isActive
                  ? "bg-red-500 text-white"
                  : "bg-transparent text-gray-800 hover:bg-red-300 hover:text-gray-900"
              }`
            }>
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
                  : "bg-transparent text-gray-800 hover:bg-red-300 hover:text-gray-900"
              }`
            }>
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
                  : "bg-transparent text-gray-800 hover:bg-red-300 hover:text-gray-900"
              }`
            }>
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
