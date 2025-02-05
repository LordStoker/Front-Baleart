
export default function Footer(){
    return (
        <footer className= " loadmorebutton bg-gray-900 text-gray-300 py-1 mt-3 top-227 fixed w-full h-6">
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