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


    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedModalities, setSelectedModalities] = useState([]);

    const handleServiceChange = (service) => {
        setSelectedServices(prevSelected => 
            prevSelected.includes(service) 
            ? prevSelected.filter(s => s !== service) 
            : [...prevSelected, service]
        );
    };

    const handleModalityChange = (modality) => {
        setSelectedModalities(prevSelected => 
            prevSelected.includes(modality) 
            ? prevSelected.filter(m => m !== modality) 
            : [...prevSelected, modality]
        );
    };

    return(
        <>
        <div className="row flex ">
          <div className="col-lg-3">
            <div className="filter-sidebar" style={{ position: 'sticky', top: '20px', height: '100vh', overflowY: 'auto', padding: '2rem', backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ marginBottom: '2rem' }}>Filtrar por Servicios</h3>
              <div className="row row-cols-4" style={{ marginBottom: '2rem' }}>
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="col d-flex justify-content-center" 
                    title={service.Nombre_ES} 
                    onClick={() => handleServiceChange(service)} 
                    style={{ 
                      borderRadius: '8px', 
                      border: '1px solid #dee2e6', 
                      padding: '0.5rem', 
                      margin: '0.5rem',
                      backgroundColor: selectedServices.includes(service) ? 'blue' : 'white',
                      color: selectedServices.includes(service) ? 'white' : 'black'
                    }}>
                    <SpaceService service={service} />
                  </div>    
                ))}
              </div>
              <h3 style={{ marginBottom: '2rem' }}>Filtrar por Modalidades</h3>
              <div className="row row-cols-4">
                {modalities.map((modality, index) => (
                  <div 
                    key={index} 
                    className="col d-flex justify-content-center" 
                    title={modality.Nombre_ES} 
                    onClick={() => handleModalityChange(modality)} 
                    style={{ 
                      borderRadius: '8px', 
                      border: '1px solid #dee2e6', 
                      padding: '0.5rem', 
                      margin: '0.5rem',
                      backgroundColor: selectedModalities.includes(modality) ? 'blue' : 'white',
                      color: selectedModalities.includes(modality) ? 'white' : 'black'
                    }}>
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