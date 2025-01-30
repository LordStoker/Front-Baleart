import SpaceList from "../components/SpaceList"


export default function Espacio({espacios, loadMore, hasMoreFiltered, setSearch}){
    return(
        <>
        <div className="row row-cols-1 row-cols-md-2 pt-1 row-cols-lg-3 g-4">
        <input 
          type="text"
          placeholder="Buscar un espacio" 
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus 
          onChange = {(e) => setSearch(e.target.value)}
        />
            {espacios.map(espacio =>
                 <SpaceList key={espacio.Identificador} espacio={espacio} />)}
        </div>
        {hasMoreFiltered && <div className="d-flex justify-content-center loadMore">
             <button onClick={loadMore} className="btn btn-primary">Ver Más</button>
        </div>}
        </>
    )
    
}