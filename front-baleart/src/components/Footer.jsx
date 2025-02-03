
export default function Footer(){
    return (
        <footer className="bg-gray-900 text-gray-300 py-2 mt-4 top-215 fixed bottom-0 w-full">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              © 2025 Baleart. Todos los derechos reservados.
            </p>
            <ul className="d-flex justify-content-center gap-1 mt-1">
              <li>
                <a
                  href=""
                  className="text-gray-300 hover:text-blue-400 transition-all"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-300 hover:text-blue-400 transition-all"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-300 hover:text-blue-400 transition-all"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      );
}