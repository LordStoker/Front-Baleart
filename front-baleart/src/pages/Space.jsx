import SpaceDetail from '../components/SpaceDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Space() {
    const { id } = useParams();
    const [espacio, setEspacio] = useState({});
    useEffect(() => {
        fetch(`/api/space/${id}`)
        .then(res => res.json())
        .then(data => setEspacio(data.data))
        .catch(err => console.error("Error cargando datos", err));
    }, []);

    console.log(espacio);
    return (
        <div className="container mx-auto px-4 py-8">
            <SpaceDetail espacio={espacio}/>
        </div>
        
    )
}
