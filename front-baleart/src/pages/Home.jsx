import React, { useState, useEffect } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import { renderStars } from '../components/SpaceList';
import spaces from '../data/spaces.json';
import compareRegisterNumber from '../components/SpaceList';
import { Link } from 'react-router-dom';

export default function Home({ espacios }) {
    const [loading, setLoading] = useState(true);
    const [topEspacios, setTopEspacios] = useState([]);

    useEffect(() => {
        if (espacios.length > 0) {
            const sortedEspacios = espacios
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 15);
            setTopEspacios(sortedEspacios);
            setLoading(false);
        }
    }, [espacios]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner animation="border" role="status"/>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <p className="text-4xl font-extrabold text-center my-4 text-gray-800">Espacios más destacados</p>
            <Carousel className="shadow-lg rounded-lg overflow-hidden">
                {topEspacios.map((espacio, index) => (
                    <Carousel.Item key={index}>
                        <Link to={`/espacio/${espacio.Identificador}`} className="text-decoration-none link-dark">
                        <img
                            className="d-block w-full h-96 object-cover"
                            src={spaces.find(space => space.registre === espacio.NºRegistro)?.image}
                            alt={espacio.Nombre}
                        />
                        </Link>
                        <Carousel.Caption className="bg-gray-800 bg-opacity-75 p-1 rounded-b-lg">
                            <h3 className="text-xl font-semibold text-white">{espacio.Nombre}</h3>
                            <p className="text-base text-yellow-400">Valoración: {renderStars(espacio.Puntuacióntotal)}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
