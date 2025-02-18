import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import SpaceService from './SpaceService';
import SpaceModality from './SpaceModality';
import spaces from '../data/spaces.json';
import SpaceTypeForFilter from './SpaceTypeForFilter';
import noImage from '../assets/no-image.jpg';

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

export default function SpaceList({ espacio, language }) {
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
    <div className="col text-1xl font-bold flex items-center leading-none mt-5">
      <div className="card shadow-lg border-0 transition-transform duration-400 hover:scale-103 h-100 gap-2 mb-4 flex flex-col px-1">
        <Link to={`/espacio/${espacio.Identificador}`} className="text-decoration-none link-dark flex-grow">
          <img
            src={spaces.find(space => space.registre === espacio.NºRegistro)?.image || noImage}
            alt={espacio.Nombre}
            className="card-img-top h-40"
          />
          <div className="text-center">
            <div className="flex justify-center bg-fuchsia-300 border-4 border-fuchsia-800 rounded-lg" title={espacio.Tipodeespacio}><SpaceTypeForFilter tipo={espacio.Tipodeespacio}/></div>
            <p className="card-title text-2xl font-bold flex justify-center bg-emerald-300 border-4 border-emerald-800 rounded-lg">{<> &nbsp; {espacio.Nombre}</>}</p>
          </div>
          <div className="card-body">
            <p className="card-text text-gray-600 flex border-b-2 border-b-black">{language === 'esp' ? 'Municipio' : language === 'cat' ? 'Municipi' : 'Municipality'}: {espacio.Dirección.split(' - ')[1]}</p>
            <p className="card-text text-gray-600 flex items-center border-b-2 border-b-black">{language === 'esp' ? 'Valoración' : language === 'cat' ? 'Valoració' : 'Score'}: {espacio.Puntuacióntotal}&nbsp;{renderStars(espacio.Puntuacióntotal)}</p>
            <p className="card-text text-gray-600 flex border-b-2 border-b-black">{language === 'esp' ? 'Comentarios' : language === 'cat' ? 'Comentaris' : 'Comments'}: {espacio.Nºdevotaciones}</p>
            <div className="flex flex-nowrap border-b-2 border-b-black">
              <p className="card-text text-blue-800 flex">{espacio.Servicios.length > 0 && language === 'esp' ? 'Servicios: ' : language === 'cat' ? 'Serveis: ' : 'Services: '}&nbsp;</p>
              {espacio.Servicios?.map((servicio, index) => (
                <div className="card-text mr-2 flex" key={index} title={language === 'esp' ? servicio.Nombre_ES : language === 'cat' ? servicio.Nombre_CA : servicio.Nombre_EN}>
                  <SpaceService service={servicio} />
                </div>
              ))}
            </div>
            <div className="flex flex-nowrap items-stretch border-b-2 border-b-black pt-3">
              <p className="card-text text-red-900 flex">{espacio.Modalidades.length > 0 && language === 'esp' ? 'Modalidades: ' : language === 'cat' ? 'Modalitats: ' : 'Modalities: '}&nbsp;</p>
              {espacio.Modalidades?.map((modalidad, index) => (
                <div className="card-text text-gray-600 mr-2 flex items-stretch justify-between" key={index} title={language === 'esp' ? modalidad.Nombre_ES : language === 'cat' ? modalidad.Nombre_CA : modalidad.Nombre_EN}>
                  <SpaceModality modality={modalidad} />
                </div>
              ))}
            </div>
            <p className="card-text text-gray-600 border-b-2">{readMore 
              ? (language === 'esp' ? espacio.Detalles_ES 
              : language === 'cat' ? espacio.Detalles_CA 
              : espacio.Detalles_EN) 
            : (language === 'esp' ? `${espacio.Detalles_ES.substring(0, 100)}...` 
              : language === 'cat' ? `${espacio.Detalles_CA.substring(0, 100)}...` 
              : `${espacio.Detalles_EN.substring(0, 100)}...`)}</p>
          </div>
        </Link>
        <div className="flex justify-center items-center text-center my-2">
          <button onClick={() => setReadMore(!readMore)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2  w-full rounded">{readMore 
          ? (language === 'esp' ? "Mostrar menos" 
            : language === 'cat' ? "Mostrar menys"
            : 'Show less' )
          :(language === 'esp' ? 'Mostrar más'
            : language === 'cat' ? 'Mostrar més'
            : 'Show more'
          )}</button>
        </div>
      </div>
    </div>
  );
}
