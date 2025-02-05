import LoadMoreButton from "./LoadMoreButton";
import {renderStars} from "./SpaceList";


export default function ComentariosList({comentarios, loadMore, hasMoreFiltered}){
    return(
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                {comentarios.map((comentario, index) => (
                    <div key={index} className="p-4 border rounded shadow bg-blue-300 mb-4">
                        <div className="font-bold text-lg">{comentario.Autor.Nombre} {comentario.Autor.Apellidos}</div>
                        <div className="text-gray-500 text-sm">{comentario.Espacio}</div>
                        <div className="mt-2">{comentario.Comentario}</div>
                        <div className="flex flex-wrap mt-2">{comentario.Imágenes && comentario.Imágenes.map((imagen, imgIndex) => (
                            <a key={imgIndex} href={imagen.url} target="_blank" rel="noopener noreferrer" className="w-16 h-16 mr-2 mb-2">
                                <img src={imagen.url} alt={`Comentario de ${comentario.Autor.Email}`} className="w-full h-full object-cover rounded-lg"/>
                            </a>
                        ))}
                        </div>
                        <div className="text-blue-600">Puntuación: {comentario.Puntuación} {renderStars(comentario.Puntuación)}</div>
                    </div>
                ))}
            </div>
            <LoadMoreButton hasMoreFiltered={hasMoreFiltered} handleClick={loadMore}/>
        </div>
    )
}