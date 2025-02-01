import { renderStars } from './SpaceList';
import SpaceType from './SpaceType';

export default function SpaceDetail({espacio}) {
    return(
      <div className="md:grid-cols-2 gap-8">
      <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">{espacio.Nombre}</h1>
      <img src='https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg' alt={espacio.Nombre} className="w-full h-96 object-cover rounded-lg" />
      <div>
       <SpaceType tipo={espacio.Tipodeespacio} />
      <h3 className="text-xl font-semibold text-gray-700">Valoración: {espacio.Puntuacióntotal} {renderStars(espacio.Puntuacióntotal)}</h3>
      <div>
      <p className="text-gray-600">{espacio.Dirección}</p>
      </div>
      <div className="flex flex-nowrap">
      <p className="card-text text-gray-600 flex justify-center">{espacio.Servicios?.length > 0 && 'Servicios: '}&nbsp;</p>
      {espacio.Servicios?.map((servicio, index) => (
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
      <div className="flex flex-nowrap items-stretch">
      <p className="card-text text-gray-600 flex justify-center">{espacio.Modalidades?.length > 0 && 'Modalidades: '}&nbsp;</p>
      {espacio.Modalidades?.map((modalidad, index) => (
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
      <div>
      <p className="text-gray-600">Comentarios: {espacio.Nºdevotaciones}</p>
      </div>
      </div>
      <p className="text-lg text-gray-600">{espacio.Detalles_ES}</p>

      <div className="mt-6">
      <h3 className="text-xl font-semibold text-gray-700">Comentarios</h3>
      {espacio.Comentarios?.length > 0 ? (
      espacio.Comentarios.map((comentario, index) => (
      <div key={index} className="mt-4">
      <p className="text-gray-800 font-semibold">{comentario.Autor.Email}</p>
      <p className="text-gray-600">{comentario.Comentario}</p>
      <p className="text-gray-600">Puntuación: {comentario.Puntuación} {renderStars(comentario.Puntuación)}</p>
      <div className="flex flex-wrap mt-2">
        {comentario.Imágenes && comentario.Imágenes?.map((imagen, imgIndex) => (
        <a key={imgIndex} href="https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg" target="_blank" rel="noopener noreferrer" className="w-16 h-16 mr-2 mb-2">
          <img src="https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg" alt={`Comentario de ${comentario.Autor.Email}`} className="w-full h-full object-cover rounded-lg" />
        </a>
        ))}
      </div>
      </div>
      ))
      ) : (
      <p className="text-gray-600">No hay comentarios disponibles.</p>
      )}
      </div>

      </div>
      </div>
    )
}