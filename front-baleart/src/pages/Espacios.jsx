import SpaceList from "../components/SpaceList"


export default function Espacio({espacios, loadMore}){




    return(
        <>
        <div className="row row-cols-1 row-cols-md-2 pt-1 row-cols-lg-4 g-4">
            {espacios.map(espacio => <SpaceList key={espacio.Identificador} espacio={espacio} />)}
        </div>
        <div className="d-flex justify-content-center loadMore">
            <button onClick={loadMore} className="btn btn-primary">Ver Más</button>
        </div>
        </>
    )
    
}