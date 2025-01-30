import {useState} from 'react';
import Search from './Search';

export default function SpaceList({espacio}) {

  const [readMore, setReadMore] = useState(false);

  function renderStars(rating) {
    return Array.from({ length: 5 }, (_, i) => {
      if (rating >= i + 1) {
        return <i key={`star-${i}`} className="fa-solid fa-star" style={{color : "#FFD43B"}}></i>;
      } else if (rating > i && rating < i + 1) {
        return <i key={`star-${i}`} className="fa-solid fa-star-half-stroke " style={{color : "#FFD43B"}}></i>;
      } else {
        return <i key={`star-${i}`} className="fa-regular fa-star" style={{color : "#FFD43B"}}></i>;
      }
    });
  }
  

    return (
      <div className="col" key={espacio.Identificador}>
      <div className="card h-100 shadow-lg border-0 transition-transform duration-400 hover:scale-105">
        <img
        src='https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg'
        className="card-img-top"
        alt={espacio.Nombre}
        />
        <div className="card-header text-center">
        <h5 className="card-title text-lg font-bold flex justify-center">{espacio.Nombre}</h5>
        </div>
        <div className="card-body">
        <p className="card-text text-gray-600 flex justify-center">Municipio: {espacio.Dirección.split(' - ')[1]}</p>
        <p className="card-text text-gray-600 flex justify-center items-center">Valoración: {espacio.Puntuacióntotal}{renderStars(espacio.Puntuacióntotal)}</p>
        <p className="card-text text-gray-600 flex justify-center">Comentarios: {espacio.Nºdevotaciones}</p>
        <div className="flex flex-nowrap justify-center">
          <p className="card-text text-gray-600 flex justify-center">{espacio.Servicios.length > 0 && 'Servicios: '}&nbsp;</p>
          {espacio.Servicios.map((servicio, index) => (
          <div className="card-text text-gray-600 mr-2 flex " key={index} title={servicio.Nombre_ES}>
            {servicio.Nombre_ES === 'Adaptado discapacitados' ? <i className="fa-brands fa-accessible-icon"></i> :
             servicio.Nombre_ES === 'Aire acondicionado' ? <i className="fa-solid fa-fan"></i> :
             servicio.Nombre_ES === 'Biblioteca' ? <i className="fa-solid fa-book"></i> :
             servicio.Nombre_ES === 'Cafetería' ? <i className="fa-solid fa-mug-hot"></i> :
             servicio.Nombre_ES === 'Archivo' ? <i className="fa-solid fa-box-archive"></i> :
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
        <div className="flex flex-nowrap justify-center items-stretch">
          <p className="card-text text-gray-600 flex justify-center">{espacio.Modalidades.length > 0 && 'Modalidades: '}&nbsp;</p>
          {espacio.Modalidades.map((modalidad, index) => (
          <div className="card-text text-gray-600 mr-2 flex items-stretch justify-between" key={index} title={modalidad.Nombre_ES}>
            {modalidad.Nombre_ES === 'Pintura' ? <i className="fa-solid fa-palette"></i> :
            modalidad.Nombre_ES === 'Escultura' ? <i className="fa-solid fa-building-columns"></i> :
            modalidad.Nombre_ES === 'Fotografía' ? <i className="fa-solid fa-camera"></i> :
            modalidad.Nombre_ES === 'Videoarte' ? <i className="fa-solid fa-video"></i> :
            modalidad.Nombre_ES === 'Grafiti' ? <i className="fa-solid fa-spray-can"></i> :
            modalidad.Nombre_ES === 'Instalación' ? <i className="fa-solid fa-users-gear"></i> :
            modalidad.Nombre_ES === 'Performance' ? <i className="fa-solid fa-chart-simple"></i> :
            modalidad.Nombre_ES === 'Tejidos' ? <i className="fa-solid fa-shirt"></i> :
            modalidad.Nombre_ES === 'Joyas' ? <i className="fa-solid fa-gem"></i> :
            modalidad.Nombre_ES === 'Ilustración' ? <i className="fa-solid fa-panorama"></i> :
            modalidad.Nombre_ES === 'Música' ? <i className="fa-solid fa-headphones-simple"></i> :
            modalidad.Nombre_ES === 'Vídeo' ? <i className="fa-solid fa-video"></i> :
            modalidad.Nombre_ES === 'Estampación' ? <i className="fa-solid fa-stamp"></i> :
            modalidad.Nombre_ES === 'Vidrio' ? <i className="fa-solid fa-wine-glass-empty"></i> : ''}
          </div>
          ))}
        </div>
        <p className="card-text text-gray-600">{readMore ? espacio.Detalles_ES : `${espacio.Detalles_ES.substring(0, 100)}...`}</p>
        </div>
        <div className="card-footer text-center">
        <button onClick={() => setReadMore(!readMore)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">{readMore ? "Mostrar menos" : "Mostrar más"}</button>
        </div>
      </div>
      </div>
    );
}