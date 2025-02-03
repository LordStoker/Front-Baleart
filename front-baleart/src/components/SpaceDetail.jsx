import { renderStars } from "./SpaceList";
import SpaceType from "./SpaceType";
import React, { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap';
import SpaceService from "./SpaceService";
import SpaceModality from "./SpaceModality";

export default function SpaceDetail({ espacio }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const commentsPerPage = 2;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = espacio.Comentarios?.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
          <Spinner animation="border" role="status">              
          </Spinner>
      </div>
  );
  }

  return (
    <>
      <div className="md:grid md:grid-cols-1 gap-6 p-6 bg-gray-50 rounded-lg shadow-lg">
        <div className="space-y-1">
          <p className="text-2xl font-bold text-gray-800">{espacio.Nombre}</p>
          <SpaceType tipo={espacio.Tipodeespacio} />
          <p className="text-gray-600">{espacio.Dirección}</p>
          <img
            src="https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg"
            alt={espacio.Nombre}
            className="w-full h-96 object-cover rounded-lg"
          />

          <p className="text-lg text-gray-600">{espacio.Detalles_ES}</p>
          <p className="text-gray-600">Comentarios: {espacio.Nºdevotaciones}</p>

          <p className="text-3xl font-semibold text-gray-700">
            Valoración: {espacio.Puntuacióntotal}{" "}
            {renderStars(espacio.Puntuacióntotal)}
          </p>

          <p className="card-text text-gray-600 flex ">
            {espacio.Servicios?.length > 0 && "Servicios: "}&nbsp;
          </p>
          <div className="flex flex-wrap ">
            {espacio.Servicios?.map((servicio, index) => (
              <div
                className="card-text text-gray-600 flex items-center mr-2"
                key={index}
                title={servicio.Nombre_ES}
                >
                <SpaceService service={servicio} />
              </div>
            ))}
          </div>

          <p className="card-text text-gray-600 flex ">
            {espacio.Modalidades?.length > 0 && "Modalidades: "}&nbsp;
          </p>
          <div className="flex flex-wrap">
            {espacio.Modalidades?.map((modalidad, index) => (
              <div
                className="card-text text-gray-600 mr-2 flex "
                key={index}
                title={modalidad.Nombre_ES}
              >
                <SpaceModality modality={modalidad} />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <p className="text-3xl font-semibold text-gray-700">Comentarios</p>
            {currentComments?.length > 0 ? (
              currentComments.map((comentario, index) => (
                <div key={index} className="mt-4">
                  <p className="text-gray-800 font-semibold">
                    {comentario.Autor.Email}
                  </p>
                  <p className="text-gray-600">{comentario.Comentario}</p>

                  <div className="flex flex-wrap mt-2">
                    {comentario.Imágenes &&
                      comentario.Imágenes?.map((imagen, imgIndex) => (
                        <a
                          key={imgIndex}
                          href="https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-16 h-16 mr-2 mb-2"
                        >
                          <img
                            src="https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg"
                            alt={`Comentario de ${comentario.Autor.Email}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </a>
                      ))}
                  </div>
                  <p className="text-blue-600">
                    Puntuación: {comentario.Puntuación}{" "}
                    {renderStars(comentario.Puntuación)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No hay comentarios disponibles.</p>
            )}
            <div className="flex justify-center mt-4">
              {Array.from(
                {
                  length: Math.ceil(
                    espacio.Comentarios?.length / commentsPerPage
                  ),
                },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 mx-1 rounded ${
                      currentPage === i + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <p className="text-3xl font-semibold text-gray-700">
            Añadir Comentario
          </p>
          <form className="mt-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="comentario"
              >
                Comentario
              </label>
              <textarea
                id="comentario"
                name="comentario"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Escribe tu comentario"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="puntuacion"
              >
                Puntuación
              </label>
              <select
                id="puntuacion"
                name="puntuacion"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="1">1 estrella</option>
                <option value="2">2 estrellas</option>
                <option value="3">3 estrellas</option>
                <option value="4">4 estrellas</option>
                <option value="5">5 estrellas</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
