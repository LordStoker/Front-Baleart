export default function Footer({language}) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-0 mt-auto w-full">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center gap-4 mt-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-all" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-all" aria-label="Twitter X">
              <i className="fab fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-all" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <p className="text-sm">© 2025 Baleart. {language === 'esp' ? 'Todos los derechos reservados.' : language === 'cat' ? 'Tots els drets reservats.' : 'All rights reserved.'}</p>
      </div>
    </footer>
  );
}
