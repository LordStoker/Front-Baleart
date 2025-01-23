
export default function Footer(){
    return (
        <footer className="bg-gray-900 text-gray-300 py-4 mt-5">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              © 2025 Baleart. Todos los derechos reservados.
            </p>
            <ul className="d-flex justify-content-center gap-3 mt-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-all"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-all"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-all"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </footer>
      );
}