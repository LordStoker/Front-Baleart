import {useState} from 'react';

export default function SpaceList({espacio}) {

  const [readMore, setReadMore] = useState(false);

  
    return(
            <div className="col" key={espacio.Identificador}>
              <div className="card h-100 shadow-lg border-0 transition-transform duration-400 hover:scale-105  ">
                <img
                  src='https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg'
                  className="card-img-top"
                  alt={espacio.Nombre}
                />  
                <div className="card-body">
                  <h5 className="card-title text-lg font-bold">{espacio.Nombre}</h5>
                  <p className="card-text text-gray-600">{readMore ? espacio.Detalles_ES : `${espacio.Detalles_ES.substring(0, 200)}...`}</p>
                  <p className="card-text text-gray-600">Servicios:</p>
                <ul>
                  {espacio.Servicios.map((servicio, index) => (
                    <li className="card-text text-gray-600" key={index}>{servicio.Nombre_ES}</li>
                  ))}
                </ul>
                </div>
                <div className="card-footer text-center">
                  <button onClick={() => setReadMore(!readMore)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">{readMore ? "Mostrar menos" : "Mostrar más"}</button>
                </div>
              </div>
            </div>

    )
}