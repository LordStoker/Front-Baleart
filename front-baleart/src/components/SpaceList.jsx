import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import SpaceService from './SpaceService';
import SpaceModality from './SpaceModality';

export function renderStars(rating) {
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

export default function SpaceList({ espacio }) {
  const [readMore, setReadMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
          <Spinner animation="border" role="status">
              <span className="sr-only"></span>
          </Spinner>
      </div>
  );
  }

  return (
    <div className="col text-1xl font-bold py-2 flex items-center leading-none">
      <div className="card h-250 shadow-lg border-0 transition-transform duration-400 hover:scale-105">
        <Link to={`/espacio/${espacio.Identificador}`} className="text-decoration-none link-dark">
          <img
            src='https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg'
            className="card-img-top"
            alt={espacio.Nombre}
          />
          <div className="card-header text-center">
            <p className="card-title text-2xl font-bold flex justify-center">{espacio.Nombre}</p>
          </div>
          <div className="card-body">
            <p className="card-text text-gray-600 flex justify-center">Municipio: {espacio.Dirección.split(' - ')[1]}</p>
            <p className="card-text text-gray-600 flex justify-center items-center">Valoración: {espacio.Puntuacióntotal}&nbsp;{renderStars(espacio.Puntuacióntotal)} </p>
            <p className="card-text text-gray-600 flex justify-center">Comentarios: {espacio.Nºdevotaciones}</p>
            <div className="flex flex-nowrap justify-center">
              <p className="card-text text-gray-600 flex justify-center">{espacio.Servicios.length > 0 && 'Servicios: '}&nbsp;</p>
              {espacio.Servicios?.map((servicio, index) => (
                <div className="card-text text-gray-600 mr-2 flex " key={index} title={servicio.Nombre_ES}>                  
                    <SpaceService service={servicio} />
                </div>
              ))}
            </div>
            <div className="flex flex-nowrap justify-center items-stretch">
              <p className="card-text text-gray-600 flex justify-center">{espacio.Modalidades.length > 0 && 'Modalidades: '}&nbsp;</p>
              {espacio.Modalidades?.map((modalidad, index) => (
                <div className="card-text text-gray-600 mr-2 flex items-stretch justify-between" key={index} title={modalidad.Nombre_ES}>
                  <SpaceModality modality={modalidad} />
                </div>
              ))}
            </div>
            <p className="card-text text-gray-600">{readMore ? espacio.Detalles_ES : `${espacio.Detalles_ES.substring(0, 100)}...`}</p>
          </div>
        </Link>
        <div className="card-footer text-center">
          <button onClick={() => setReadMore(!readMore)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">{readMore ? "Mostrar menos" : "Mostrar más"}</button>
        </div>
      </div>
    </div>
  );
}