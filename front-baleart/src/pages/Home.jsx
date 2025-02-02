import React, { useState, useEffect } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import { renderStars } from '../components/SpaceList';

export default function Home({ espacios }) {
    const [loading, setLoading] = useState(true);
    const [topEspacios, setTopEspacios] = useState([]);

    useEffect(() => {
        if (espacios.length > 0) {
            const sortedEspacios = espacios
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 4);
            setTopEspacios(sortedEspacios);
            setLoading(false);
        }
    }, [espacios]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <p className="text-4xl font-extrabold text-center my-4 text-gray-800">Espacios más destacados</p>
            <Carousel className="shadow-lg rounded-lg overflow-hidden">
                {topEspacios.map((espacio, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-full h-96 object-cover"
                            src={"https://baleart-handling.com/wp-content/uploads/2022/01/baleart_casal-solleric_resized_29.jpg"}
                            alt={espacio.Nombre}
                        />
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
