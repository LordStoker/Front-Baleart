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


export default function App() {
  const [espacios, setEspacios] = useState([]);
  const [espaciosDisplay, setEspaciosDisplay] = useState([]);
  const [filteredSpaces, setFilteredSpaces] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedModalities, setSelectedModalities] = useState([]);

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
      const matchesServices = selectedServices.every(service => espacio.Servicios.some(s => s.Nombre_ES === service));
      const matchesModalities = selectedModalities.every(modality => espacio.Modalidades.some(m => m.Nombre_ES === modality));
      return matchesName && matchesServices && matchesModalities;
    });
    setFilteredSpaces(filteredSpaces);
    setEspaciosDisplay(filteredSpaces.slice(0, 12));
  }, [search, selectedServices, selectedModalities]);

  function loadMore() {
    const moreSpaces = filteredSpaces.slice(espaciosDisplay.length, espaciosDisplay.length + 6);
    setEspaciosDisplay([...espaciosDisplay, ...moreSpaces]);
  }

  return (
    <Router>
      <Header />
      <div className="container mx-auto my-4">
        <Routes>
          <Route path="/" element={<Home espacios={espacios} />} />
          <Route path="espacios" element={<Espacios 
            espacios={espaciosDisplay}
            loadMore={loadMore}
            search={search}
            setSearch={setSearch}
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            selectedModalities={selectedModalities}
            setSelectedModalities={setSelectedModalities}
            hasMoreFiltered={espaciosDisplay.length < filteredSpaces.length}
          />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="espacio/:id" element={<Space />} />
        </Routes>
      </div>
      <Footer />      
    </Router>
  );
}


