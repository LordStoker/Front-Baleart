import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import SpaceService from './SpaceService';
import SpaceModality from './SpaceModality';
import spaces from '../data/spaces.json';
import SpaceTypeForFilter from './SpaceTypeForFilter';

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
    <div className="col text-1xl font-bold flex items-center leading-none">
      <div className="card shadow-lg border-0 transition-transform duration-400 hover:scale-103 h-100 gap-2 mb-3 flex flex-col px-1">
        <Link to={`/espacio/${espacio.Identificador}`} className="text-decoration-none link-dark flex-grow">
          <img
            src={spaces.find(space => space.registre === espacio.NºRegistro)?.image}
            className="card-img-top h-40"
            alt={espacio.Nombre}
          />
          <div className="text-center">
            <div className="flex justify-center bg-fuchsia-300 border-4 border-fuchsia-800 rounded-lg" title={espacio.Tipodeespacio}><SpaceTypeForFilter tipo={espacio.Tipodeespacio}/></div>
            <p className="card-title text-2xl font-bold flex justify-center bg-emerald-300 border-4 border-emerald-800 rounded-lg">{<> &nbsp; {espacio.Nombre}</>}</p>
          </div>
          <div className="card-body">
            <p className="card-text text-gray-600 flex border-b-2 border-b-black">Municipio: {espacio.Dirección.split(' - ')[1]}</p>
            <p className="card-text text-gray-600 flex items-center border-b-2 border-b-black">Valoración: {espacio.Puntuacióntotal}&nbsp;{renderStars(espacio.Puntuacióntotal)}</p>
            <p className="card-text text-gray-600 flex border-b-2 border-b-black">Comentarios: {espacio.Nºdevotaciones}</p>
            <div className="flex flex-nowrap border-b-2 border-b-black">
              <p className="card-text text-blue-800 flex">{espacio.Servicios.length > 0 && 'Servicios: '}&nbsp;</p>
              {espacio.Servicios?.map((servicio, index) => (
                <div className="card-text mr-2 flex" key={index} title={servicio.Nombre_ES}>
                  <SpaceService service={servicio} />
                </div>
              ))}
            </div>
            <div className="flex flex-nowrap items-stretch border-b-2 border-b-black pt-3">
              <p className="card-text text-red-900 flex">{espacio.Modalidades.length > 0 && 'Modalidades: '}&nbsp;</p>
              {espacio.Modalidades?.map((modalidad, index) => (
                <div className="card-text text-gray-600 mr-2 flex items-stretch justify-between" key={index} title={modalidad.Nombre_ES}>
                  <SpaceModality modality={modalidad} />
                </div>
              ))}
            </div>
            <p className="card-text text-gray-600 border-b-2">{readMore ? espacio.Detalles_ES : `${espacio.Detalles_ES.substring(0, 100)}...`}</p>
          </div>
        </Link>
        <div className="flex justify-center items-center text-center my-2">
          <button onClick={() => setReadMore(!readMore)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2  w-full rounded">{readMore ? "Mostrar menos" : "Mostrar más"}</button>
        </div>
      </div>
    </div>
  );
}
