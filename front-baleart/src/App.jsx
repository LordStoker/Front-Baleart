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

  useEffect(() => {
    fetch('/api/space')
      .then((response) => response.json())
      .then((data) => {
        setEspacios(data.data);
        setEspaciosDisplay(data.data.slice(0, 12)); 
      })
  }, [])

  function loadMore() {
    const moreSpaces = espacios.slice(espaciosDisplay.length, espaciosDisplay.length + 9);
    setEspaciosDisplay([...espaciosDisplay, ...moreSpaces]);
  }

  console.log(espacios);
  return (
    <Router>
      <Header />
      <div className="container mx-auto my-4">
        <Routes>
          <Route path="/" element={<Home espacios={espacios} />} />
          <Route path="espacios" element={<Espacios espacios={espaciosDisplay} loadMore={loadMore}/>} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer />      
    </Router>
  )
}


