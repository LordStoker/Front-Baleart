import {useState} from 'react';

export default function SpaceList({espacio}) {

  const [readMore, setReadMore] = useState(false);

    return(
      <div className="col" key={espacio.Identificador}>
      <div className="card h-100 shadow-lg border-0 transition-transform duration-400 hover:scale-105">
        <img
        src='https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg'
        className="card-img-top"
        alt={espacio.Nombre}
        />  
        <div className="card-body">
        <h5 className="card-title text-lg font-bold">{espacio.Nombre}</h5>
        <p className="card-text text-gray-600">Municipio: {espacio.Dirección.split(' - ')[1]}</p>
        <p className="card-text text-gray-600">Puntuación Total: {espacio.Puntuacióntotal}</p>
        <p className="card-text text-gray-600">Nº de comentarios: {espacio.Nºdevotaciones}</p>
        
        <div className="flex flex-nowrap items-stretch">
        <p className="card-text text-gray-600">Servicios: &nbsp;</p>
          {espacio.Servicios.map((servicio, index) => (
          <div className="card-text text-gray-600 mr-2" key={index}>
            {servicio.Nombre_ES === 'Adaptado discapacitados' ? <i className="bi bi-person-wheelchair"></i> :
            servicio.Nombre_ES === 'Aire acondicionado' ? <i className="fa-solid fa-fan"></i>:
            servicio.Nombre_ES === 'Biblioteca' ? <i className="bi bi-book"></i> :
            servicio.Nombre_ES === 'Cafetería' ? <i className="bi bi-cup-hot"></i> :
            servicio.Nombre_ES === 'Archivo' ? <i className="bi bi-archive"></i> :
            servicio.Nombre_ES === 'Talleres' ? <i className="fa-solid fa-hand-dots"></i> :
            servicio.Nombre_ES === 'Aparcamiento' ? <i className="fa-solid fa-square-parking"></i> :
            servicio.Nombre_ES === 'Conciertos' ? <i className="fa-solid fa-music"></i> :
            servicio.Nombre_ES === 'Visitas concertadas' ? <i className="fa-solid fa-calendar-days"></i> :
            servicio.Nombre_ES === 'Wifi' ? <i className="fa-solid fa-wifi"></i> : 
            servicio.Nombre_ES === 'Conferencias' ? <i className="fa-solid fa-comment"></i> :
            servicio.Nombre_ES === 'Baños' ? <i className="fa-solid fa-restroom"></i> : <i className="fa-solid fa-person-chalkboard"></i>}
          </div>
          ))}
        </div>
        <p className="card-text text-gray-600">Modalidades:</p>
        <ul>
          {espacio.Modalidades.map((servicio, index) => (
          <li className="card-text text-gray-600" key={index}>{servicio.Nombre_ES}</li>
          ))}
        </ul>
        <p className="card-text text-gray-600">{readMore ? espacio.Detalles_ES : `${espacio.Detalles_ES.substring(0, 100)}...`}</p>
        </div>
        <div className="card-footer text-center">
        <button onClick={() => setReadMore(!readMore)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">{readMore ? "Mostrar menos" : "Mostrar más"}</button>
        </div>
      </div>
      </div>
    )
}