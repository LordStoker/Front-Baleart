import { NavLink } from "react-router-dom";
import { useState } from "react";
import espFlag from "../assets/esp.png";
import engFlag from "../assets/eng.png";
import catFlag from "../assets/cat.png";

export default function Header({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  function getFlag(language) {
    switch (language) {
      case "esp":
        return espFlag;
      case "eng":
        return engFlag;
      case "cat":
        return catFlag;
      default:
        return engFlag;
    }
  }

  return (
    <header className="no-underline fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md rounded-2xl z-50 px-3 flex justify-between items-center">
      
      <p className="text-2xl font-bold mb-1 ">Baleart</p>      
      <nav className="flex items-center space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-bold px-4 py-2 transition-all duration-500 rounded-lg ${
              isActive
                ? "bg-red-500 text-white"
                : "bg-transparent text-gray-300 hover:bg-red-300 hover:text-white"
            }`
          }
        >
          {language === "esp" ? "Inicio" : language === "cat" ? "Inici" : "Home"}
        </NavLink>
        <NavLink
          to="espacios"
          className={({ isActive }) =>
            `text-lg font-bold px-4 py-2 transition-all duration-500 rounded-lg ${
              isActive
                ? "bg-red-500 text-white"
                : "bg-transparent text-gray-300 hover:bg-red-300 hover:text-white"
            }`
          }
        >
          {language === "esp" ? "Espacios" : language === "cat" ? "Espais" : "Spaces"}
        </NavLink>
        <NavLink
          to="contacto"
          className={({ isActive }) =>
            `text-lg font-bold px-4 py-2 transition-all duration-500 rounded-lg ${
              isActive
                ? "bg-red-500 text-white"
                : "bg-transparent text-gray-300 hover:bg-red-300 hover:text-white"
            }`
          }
        >
          {language === "esp" ? "Contacto" : language === "cat" ? "Contacte" : "Contact"}
        </NavLink>
        <NavLink
          to="comentarios"
          className={({ isActive }) =>
            `text-lg font-bold px-4 py-2 transition-all duration-500 rounded-lg ${
              isActive
                ? "bg-red-500 text-white"
                : "bg-transparent text-gray-300 hover:bg-red-300 hover:text-white"
            }`
          }
        >
          {language === "esp" ? "Comentarios" : language === "cat" ? "Comentaris" : "Comments"}
        </NavLink>
      </nav>

      
      <div className="flex items-center space-x-4 relative">
        {/* USUARIO */}
        <span className="text-lg font-bold">
          {language === "eng" ? "Hello, Usuario" : "Hola, Usuario"}
        </span>

        
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 rounded-full hover:bg-gray-700 transition-all duration-300 flex items-center justify-center focus:outline-none"
            aria-label="Seleccionar idioma"
          >
            <img src={getFlag(language)} alt="Selected language flag" className="w-6 h-6" />
          </button>

          {isOpen && (
            <ul className="list-none absolute right-0 mt-2 w-32 bg-gray-900 text-white rounded-lg shadow-lg z-50">
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer mr-auto -mx-8"
                onClick={() => setLanguage("cat")}
              >
                <img src={catFlag} alt="Catalan flag" className="w-5 h-5 mr-2" />
                Català
              </li>
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer mr-auto -mx-8"
                onClick={() => setLanguage("eng")}
              >
                <img src={engFlag} alt="English flag" className="w-5 h-5 mr-2" />
                English
              </li>
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer mr-auto -mx-8"
                onClick={() => setLanguage("esp")}
              >
                <img src={espFlag} alt="Spanish flag" className="w-5 h-5 mr-2" />
                Español
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
