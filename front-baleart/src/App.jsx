import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import {useState, useEffect} from 'react';
import Home from './pages/Home';
import Espacios from './pages/Espacios';
import Contacto from './pages/Contacto';
import Space from  './pages/Space';
import "flowbite";
import Comentarios from './pages/Comentarios';


export default function App() {
  const [espacios, setEspacios] = useState([]);
  const [espaciosDisplay, setEspaciosDisplay] = useState([]);
  const [filteredSpaces, setFilteredSpaces] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedModalities, setSelectedModalities] = useState([]);
  const [selectedSpaceType, setSelectedSpaceType] = useState([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [selectedStars, setSelectedStars] = useState("");  
  const [language, setLanguage] = useState("esp");

  useEffect(() => {
    fetch('/api/space')
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.data.sort((a, b) => b.Puntuacióntotal - a.Puntuacióntotal || Math.random() - 0.5);
        setEspacios(sortedData);
        setFilteredSpaces(sortedData);
        setEspaciosDisplay(sortedData.slice(0, 12)); 
      });
  }, []);

  useEffect(() => {
    const filteredSpaces = espacios.filter(espacio => {
      const matchesName = espacio.Nombre.toLowerCase().includes(search.toLowerCase());
  
      const matchesServices = selectedServices.length === 0 || 
        selectedServices.every(service => 
          espacio.Servicios.some(s => s.Nombre === service)
        );
  
      const matchesModalities = selectedModalities.length === 0 || 
        selectedModalities.every(modality => 
          espacio.Modalidades.some(m => m.Nombre === modality)
        );
  
      const matchesSpaceType = selectedSpaceType.length === 0 || 
        selectedSpaceType.includes(espacio.Tipodeespacio);

      const matchesMunicipality = !selectedMunicipality||
       espacio.Dirección.split(' - ')[1] === selectedMunicipality;

      const matchedStars = !selectedStars ||
        Math.trunc(espacio.Puntuacióntotal) === parseInt(selectedStars);
      return matchesName && matchesServices && matchesModalities && matchesSpaceType && matchesMunicipality && matchedStars;
    }, []);
  
    setFilteredSpaces(filteredSpaces);
    setEspaciosDisplay(filteredSpaces.slice(0, 12));
  }, [search, selectedServices, selectedModalities, selectedSpaceType, selectedMunicipality, selectedStars]);

  function loadMore() {
    const moreSpaces = filteredSpaces.slice(espaciosDisplay.length, espaciosDisplay.length + 6);
    setEspaciosDisplay([...espaciosDisplay, ...moreSpaces]);
  }
console.log(espacios);

  return (
    <Router>
      <Header language={language} setLanguage={setLanguage} />
      <div className="container mx-auto my-1">
        <Routes>
          <Route path="/" element={<Home espacios={espacios} language={language}/>} />
          <Route path="espacios" element={<Espacios 
            espacios={espaciosDisplay}
            loadMore={loadMore}
            search={search}
            setSearch={setSearch}
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            selectedModalities={selectedModalities}
            setSelectedModalities={setSelectedModalities}
            selectedSpaceType={selectedSpaceType}
            setSelectedSpaceType={setSelectedSpaceType}
            selectedMunicipality={selectedMunicipality}
            setSelectedMunicipality={setSelectedMunicipality}
            selectedStars={selectedStars}
            setSelectedStars={setSelectedStars}
            hasMoreFiltered={espaciosDisplay.length < filteredSpaces.length}
            language={language}
          />} />
          <Route path="contacto" element={<Contacto language={language} />} />
          <Route path="espacio/:id" element={<Space language={language} />} />
          <Route path="comentarios" element={<Comentarios language={language} />} />
        </Routes>
      </div>
      <Footer language={language}/>      
    </Router>
  );
}


