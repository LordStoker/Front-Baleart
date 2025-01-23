
export default function Header(){
    return(
        <header className="bg-gray-800 text-white shadow-md py-3">
            <div className="container mx-auto d-flex justify-content-between align-items-center">
                <h1 className="text-2xl font-bold">Baleart</h1>
                <nav>
                <ul className="d-flex gap-4 m-0 p-0">
                    <li>
                    <a
                        href="#"
                        className="text-white hover:text-blue-400 transition-all"
                    >
                        Inicio
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-white hover:text-blue-400 transition-all"
                    >
                        Espacios
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-white hover:text-blue-400 transition-all"
                    >
                        Contacto
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
            </header>
    )
}
