
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import {useState, useEffect} from 'react';
import SpaceList from './components/SpaceList';


export default function App() {

  const [espacios, setEspacios] = useState([])
  const [espaciosDisplay, setEspaciosDisplay] = useState([])

  useEffect(() => {
    fetch('/api/space')
      .then((response) => response.json())
      .then((data) => {
        setEspacios(data.data);
        setEspaciosDisplay(data.data.slice(0, 6)); 
      })
  }, [])
  console.log(espacios);
  return (
    <>
      <Header />
      <div className="container mx-auto my-4">
        <div className="row row-cols-1 row-cols-md-4 g-4">
        {espacios.map(espacio => <SpaceList key={espacio.Identificador} espacio={espacio} />)}
        </div>
      </div>
      <Footer />      
    </>
  )
}


