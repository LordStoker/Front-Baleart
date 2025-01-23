

export default function SpaceList({espacio}) {
    return(

            <div className="col" key={espacio.Identificador}>
              <div className="card h-100 shadow-lg border-0">
                <img
                  src='https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg'
                  className="card-img-top"
                  alt={espacio.Nombre}
                />
                <div className="card-body">
                  <h5 className="card-title text-lg font-bold">{espacio.Nombre}</h5>
                  <p className="card-text text-gray-600">{espacio.Detalles_CA}</p>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-primary">Ver Más</button>
                </div>
              </div>
            </div>

    )
}