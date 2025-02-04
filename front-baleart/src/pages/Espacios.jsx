import SpaceList from "../components/SpaceList"
import Search from "../components/Search"
import LoadMoreButton from "../components/LoadMoreButton"
import SpaceService from "../components/SpaceService"
import SpaceModality from "../components/SpaceModality"
import SpaceTypeForFilter from "../components/SpaceTypeForFilter"
import { useState, useEffect } from 'react';

export default function Espacio({ espacios, loadMore, hasMoreFiltered, setSearch, selectedServices, setSelectedServices, selectedModalities, setSelectedModalities, selectedSpaceType, setSelectedSpaceType, setSelectedMunicipality }) {
  const [services, setServices] = useState([]);
  const [modalities, setModalities] = useState([]);
  const [types, setTypes] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('/api/service').then(response => response.json()),
      fetch('/api/modality').then(response => response.json()), 
      fetch('/api/spacetype').then(response => response.json()),
      fetch('/api/municipality').then(response => response.json())
    ])
    .then(([s, m, t, mun]) => {
      setServices(s.data);
      setModalities(m.data);
      setTypes(t);
      setMunicipios(mun.data);
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

  function handleTypeChange (type) {
    setSelectedSpaceType(prevSelected => 
      prevSelected.includes(type) 
      ? prevSelected.filter(t => t !== type) 
      : [...prevSelected, type]
    );
  };




return (
  <>
    <div className="row">
      <div className="col-lg-3">
        <div className="filter p-3 rounded-lg shadow-md sticky top-10 bg-zinc-200">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-8.586L3.293 6.707A1 1 0 013 6V4z"></path>
          </svg>
          <div className="flex items-center mb-1">
            <p className="font-bold text-md"> Servicios:</p>
          </div>
          <div className="flex flex-wrap border">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ cursor: 'pointer' }}
                title={service.Nombre}
                className={`p-1 m-1 border rounded-full ${selectedServices.includes(service.Nombre) ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                onClick={() => handleServiceChange(service.Nombre)}
              >
                <SpaceService service={service} />
              </div>
            ))}
          </div>

          <div className="flex items-center mt-3 mb-1">
            <p className="font-bold text-md">Modalidades:</p>
          </div>
          <div className="flex flex-wrap">
            {modalities.map((modality, index) => (
              <div
                key={index}
                style={{ cursor: 'pointer' }}
                title={modality.Nombre}
                className={`p-1 m-1 border rounded-full ${selectedModalities.includes(modality.Nombre) ? 'bg-red-300 text-white' : 'bg-white text-black'}`}
                onClick={() => handleModalityChange(modality.Nombre)}
              >
                <SpaceModality modality={modality} />
              </div>
            ))}
          </div>

          <div className="flex items-center mt-3 mb-1">
            <p className="font-bold text-md">Tipo de Espacio:</p>
          </div>
          <div className="flex flex-wrap">
            {types.map((type, index) => (
              <div
                key={index}
                style={{ cursor: 'pointer' }}
                title={type.description_ES}
                className={`p-1 m-1 border rounded-full ${selectedSpaceType.includes(type.description_ES) ? 'bg-fuchsia-400 text-white' : 'bg-white text-black'}`}
                onClick={() => handleTypeChange(type.description_ES)}
              >
                <SpaceTypeForFilter tipo={type.description_ES} />
              </div>
            ))}
          </div>
          <div className="flex items-center mt-3 mb-1">
          <p className="font-bold text-md">Municipios:</p>
          </div>
          <div className="flex flex-wrap">
          <select
            className="p-1 m-1 border rounded-full bg-white text-black"
            onChange={(e) => setSelectedMunicipality(e.target.value)}
          >
            <option value="">- Ninguno -</option>
            {municipios.map((municipio, index) => (
            <option key={index} value={municipio.Municipio}>
              {municipio.Municipio}
            </option>
            ))}
          </select>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="row row-cols-1 row-cols-md-2 pt-1 row-cols-lg-3 g-3">
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