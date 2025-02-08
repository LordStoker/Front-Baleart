import SpaceList from "../components/SpaceList"
import Search from "../components/Search"
import LoadMoreButton from "../components/LoadMoreButton"
import SpaceService from "../components/SpaceService"
import SpaceModality from "../components/SpaceModality"
import SpaceTypeForFilter from "../components/SpaceTypeForFilter"
import { useState, useEffect } from 'react';

export default function Espacio({ espacios, loadMore, hasMoreFiltered, setSearch, selectedServices, setSelectedServices, selectedModalities, setSelectedModalities, selectedSpaceType, setSelectedSpaceType, setSelectedMunicipality, setSelectedStars, language }) {
  const [services, setServices] = useState([]);
  const [modalities, setModalities] = useState([]);
  const [types, setTypes] = useState([]);
  const [municipios, setMunicipios] = useState([]);


  useEffect(() => {

    setSearch('');
    setSelectedServices([]);
    setSelectedModalities([]);
    setSelectedSpaceType([]);
    setSelectedMunicipality('');
    setSelectedStars('');

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

  console.log(types);

return (
  <>
    <div className="row">
      <div className="col-lg-3">
        <div className="filter p-3 rounded-lg shadow-md sticky top-15 bg-zinc-200">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-8.586L3.293 6.707A1 1 0 013 6V4z"></path>
          </svg>
          <Search handleChange={setSearch} language={language} />
          <div className="flex items-center mb-1">
            <p className="font-bold text-md"> {language === 'esp' ? 'Servicios' : language === 'cat' ? 'Serveis' : 'Services'}:</p>
          </div>
          <div className="flex flex-wrap border">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ cursor: 'pointer' }}
                title={language === 'esp' ? service.Nombre_ES : language === 'cat' ? service.Nombre_CA : service.Nombre_EN}
                className={`p-1 m-1 border rounded-full ${selectedServices.includes(service.Nombre) ? 'bg-blue-500' : 'bg-white'}`}
                onClick={() => handleServiceChange(service.Nombre)}
              >
                <SpaceService service={service} />
              </div>
            ))}
          </div>

          <div className="flex items-center mt-3 mb-1">
            <p className="font-bold text-md">{language === 'esp' ? 'Modalidades' : language === 'cat' ? 'Modalitats' : 'Modalities'}:</p>
          </div>
          <div className="flex flex-wrap">
            {modalities.map((modality, index) => (
              <div
                key={index}
                style={{ cursor: 'pointer' }}
                title={language === 'esp' ? modality.Nombre_ES : language === 'cat' ? modality.Nombre_CA : modality.Nombre_EN}
                className={`p-1 m-1 border rounded-full ${selectedModalities.includes(modality.Nombre) ? 'bg-red-300 text-white' : 'bg-white text-black'}`}
                onClick={() => handleModalityChange(modality.Nombre)}
              >
                <SpaceModality modality={modality} />
              </div>
            ))}
          </div>

          <div className="flex items-center mt-3 mb-1">
            <p className="font-bold text-md">{language === 'esp' ? 'Buscar varios tipo espacio:' : language === 'cat' ? 'Cercar per tipus d\'espai:' : 'Search for different space types:'}</p>
          </div>
          <div className="flex flex-wrap">
            {types.map((type, index) => (
              <div
                key={index}
                style={{ cursor: 'pointer' }}
                title={language === 'esp' ? type.description_ES : language === 'cat' ? type.description_CA : type.description_EN}
                className={`p-1 m-1 border rounded-full ${selectedSpaceType.includes(type.description_ES) ? 'bg-fuchsia-400 text-white' : 'bg-white text-black'}`}
                onClick={() => handleTypeChange(type.description_ES)}
              >
                <SpaceTypeForFilter tipo={type.description_ES} />
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <p className="font-bold text-md">{language === 'esp' ? 'Valoración:' : language === 'cat' ? 'Valoració:' : 'Score:'}</p>
          </div>
          <div className="flex flex-wrap">
            <select
              className="p-1 border rounded-full bg-white text-black"
              onChange={(e) => setSelectedStars(e.target.value)}
            >
              <option value="">{language === 'esp' ? '- Ninguno -' : language === 'cat' ? '- Cap -' : '- None -'}</option>
              {[0, 1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating === 0 ? language === 'esp' ? '- Sin valoración -' : language === 'cat' ? '- Sense valorar -' : '- Not scored -' : 
                    rating === 1 ? '★' :
                    rating === 2 ? '★★' :
                    rating === 3 ? '★★★' : 
                    rating === 4 ? '★★★★' : '★★★★★'}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
          <p className="font-bold text-md">{language === 'esp' ? 'Municipios:' : language === 'cat' ? 'Municipis:' : 'Municipalities:'}</p>
          </div>
          <div className="flex flex-wrap">
          <select
            className="p-1 border rounded-full bg-white text-black"
            onChange={(e) => setSelectedMunicipality(e.target.value)}
          >
            <option value="">{language === 'esp' ? '- Todos -' : language === 'cat' ? '- Tots -' : '- All -'}</option>
            {municipios.map((municipio, index) => (
            <option key={index} value={municipio.Municipio}>
              {municipio.Municipio}
            </option>
            ))}
          </select>
          </div>
        </div>
      </div>
      <div className="col-lg-9 mt-5">
        <div className="row row-cols-1 row-cols-md-2 pt-1 row-cols-lg-3 g-3">
          
          {espacios.map(espacio =>
            <SpaceList key={espacio.Identificador} espacio={espacio} language={language} />
          )}
        </div>
        <LoadMoreButton
          hasMoreFiltered={hasMoreFiltered}
          handleClick={loadMore}
          language={language}
           />
      </div>
    </div>
  </>
);
}