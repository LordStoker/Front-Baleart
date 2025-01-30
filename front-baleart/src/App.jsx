import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import {useState, useEffect} from 'react';
import Home from './pages/Home';
import Espacios from './pages/Espacios';
import Contacto from './pages/Contacto';


export default function App() {

  const [espacios, setEspacios] = useState([])
  const [espaciosDisplay, setEspaciosDisplay] = useState([])
  const [filteredSpaces, setFilteredSpaces] = useState([]); 
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/space')
      .then((response) => response.json())
      .then((data) => {
        setEspacios(data.data);
        setFilteredSpaces(data.data);
        setEspaciosDisplay(data.data.slice(0, 12)); 
      })
  }, []);

  //Renderiza de nuevo el filtro cuando cambia search
  useEffect(() => {
    const filteredSpaces = espacios.filter(espacio =>
      espacio.Nombre.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredSpaces(filteredSpaces); //Guarda los filtrados
    setEspaciosDisplay(filteredSpaces.slice(0, 12)); //Guarda los filtrados que se van a mostrar.
  }, [search]);

  function loadMore() {
    const moreSpaces = filteredSpaces.slice(espaciosDisplay.length, espaciosDisplay.length + 6);
    setEspaciosDisplay([...espaciosDisplay, ...moreSpaces]);
  }

  console.log(espacios);
  // console.log(filteredSpaces);
  return (
    <Router>
      <Header />
      <div className="container mx-auto my-4">
        <Routes>
          <Route path="/" element={<Home espacios={espacios} />} />
          <Route path="espacios" element={<Espacios espacios={espaciosDisplay}
            loadMore={loadMore}
            search={search}
            setSearch={setSearch}
            hasMoreFiltered={espaciosDisplay.length < filteredSpaces.length}
            />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer />      
    </Router>
  )
}


