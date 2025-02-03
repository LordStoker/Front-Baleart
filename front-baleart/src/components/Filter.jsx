import { useState } from 'react';
import SpaceService from './SpaceService';
import SpaceModality from './SpaceModality';

export default function Filter({ services, modalities, onFilterChange }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedModalities, setSelectedModalities] = useState([]);

  function handleServiceChange (service) {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter(s => s !== service)
      : [...selectedServices, service];
    setSelectedServices(updatedServices);
    onFilterChange(updatedServices, selectedModalities);
  };

  function handleModalityChange (modality) {
    const updatedModalities = selectedModalities.includes(modality)
      ? selectedModalities.filter(m => m !== modality)
      : [...selectedModalities, modality];
    setSelectedModalities(updatedModalities);
    onFilterChange(selectedServices, updatedModalities);
  };

  return (
    <div className="filter-sidebar">
      <h3>Filtrar por Servicios</h3>
      {services.map((service, index) => (
        <div key={index} onClick={() => handleServiceChange(service)}>
          <SpaceService service={service} />
        </div>
      ))}
      <h3>Filtrar por Modalidades</h3>
      {modalities.map((modality, index) => (
        <div key={index} onClick={() => handleModalityChange(modality)}>
          <SpaceModality modality={modality} />
        </div>
      ))}
    </div>
  );
}
