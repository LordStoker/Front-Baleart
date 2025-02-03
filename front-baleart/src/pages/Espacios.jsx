import SpaceList from "../components/SpaceList"
import Search from "../components/Search"
import LoadMoreButton from "../components/LoadMoreButton"
import SpaceService from "../components/SpaceService"
import SpaceModality from "../components/SpaceModality"
import { useState, useEffect } from 'react';

export default function Espacio({ espacios, loadMore, hasMoreFiltered, setSearch, selectedServices, setSelectedServices, selectedModalities, setSelectedModalities }) {
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

  function handleServiceChange (service) {
    setSelectedServices(prevSelected => 
      prevSelected.includes(service) 
      ? prevSelected.filter(s => s !== service) 
      : [...prevSelected, service]
    );
  };

  function handleModalityChange (modality) {
    setSelectedModalities(prevSelected => 
      prevSelected.includes(modality) 
      ? prevSelected.filter(m => m !== modality) 
      : [...prevSelected, modality]
    );
  };

return (
    <>
        <div className="row">
            <div className="col-lg-3">
                <div className="filter p-4 rounded-lg shadow-md sticky top-10 bg-emerald-600">
                    <p className="font-bold text-lg mb-2">Filtrar por Servicios:</p>
                    <div className="flex flex-wrap">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                style={{ cursor: 'pointer' }}
                                title={service.Nombre_ES}
                                className={`p-2 m-1 border rounded-full ${selectedServices.includes(service.Nombre_ES) ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                onClick={() => handleServiceChange(service.Nombre_ES)}
                            >
                                <SpaceService service={service} />
                            </div>
                        ))}
                    </div>
                    <p className="font-bold text-lg mt-4 mb-2">Filtrar por Modalidades:</p>
                    <div className="flex flex-wrap">
                        {modalities.map((modality, index) => (
                            <div
                                key={index}
                                style={{ cursor: 'pointer' }}
                                title={modality.Nombre_ES}
                                className={`p-2 m-1 border rounded-full ${selectedModalities.includes(modality.Nombre_ES) ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                onClick={() => handleModalityChange(modality.Nombre_ES)}
                            >
                                <SpaceModality modality={modality} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="row row-cols-1 row-cols-md-2 pt-2 row-cols-lg-3 g-4">
                    <Search handleChange={setSearch} />
                    {espacios.map(espacio =>
                        <SpaceList key={espacio.Identificador} espacio={espacio} />
                    )}
                </div>
                <LoadMoreButton
                    hasMoreFiltered={hasMoreFiltered}
                    handleClick={loadMore} />
            </div>
        </div>
    </>
);
}