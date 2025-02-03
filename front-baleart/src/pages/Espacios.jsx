import SpaceList from "../components/SpaceList"
import Search from "../components/Search"
import LoadMoreButton from "../components/LoadMoreButton"
import SpaceService from "../components/SpaceService"
import SpaceModality from "../components/SpaceModality"
import { useState, useEffect } from 'react';




export default function Espacio({espacios, loadMore, hasMoreFiltered, setSearch}){

    const [services, setServices] = useState([]);
    const [modalities, setModalities] = useState([]);

    useEffect(() => {
        Promise.all([
          fetch('/api/service').then(response => response.json()),
          fetch('/api/modality').then(response => response.json())
        ])
        .then(([s, m]) => {
            setServices(s.data);
            setModalities(m.data);
        })
        .catch(error => console.error('Error fetching data:', error));
      }, []);


    return(
        <>
        <div className="row">
          <div className="col-lg-3">
            <div className="filter-sidebar" style={{ position: 'sticky', top: '0', height: '100vh', overflowY: 'auto', padding: '1rem', backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6' }}>
              <h3>Filtrar por Servicios</h3>
              <div className="row row-cols-4">
                {services.map((service, index) => (
                  <div key={index} className="col" title={service.Nombre_ES} onClick={() => handleServiceChange(service)}>
                    <SpaceService service={service} />
                  </div>
                ))}
              </div>
              <h3>Filtrar por Modalidades</h3>
              <div className="row row-cols-4">
                {modalities.map((modality, index) => (
                  <div key={index} className="col" title={modality.Nombre_ES} onClick={() => handleModalityChange(modality)}>
                    <SpaceModality modality={modality} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row row-cols-1 row-cols-md-2 pt-1 row-cols-lg-3 g-4">
              <Search handleChange={setSearch} />
              {espacios.map(espacio =>
                <SpaceList key={espacio.Identificador} espacio={espacio} />)}
            </div>
            <LoadMoreButton
              hasMoreFiltered={hasMoreFiltered}
              handleClick={loadMore} />
          </div>
        </div>
        </>
    )
    
}