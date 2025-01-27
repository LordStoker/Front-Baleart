import React, { useState } from 'react';

export default function Contacto() {
    const [showNotification, setShowNotification] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        asunto: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        setShowNotification(true);
        setFormData({
            name: '',
            email: '',
            message: '', 
            asunto: ''
        });
        setTimeout(() => {
            setShowNotification(false);
        }, 3000); 
    }

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    return (
        <div>
            <h1>Contacto</h1>
            {showNotification && (
                <div className="alert alert-success" role="alert">
                    El mensaje se ha enviado correctamente.
                </div>
            )}
            <form className="mt-4 p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="John Doe" 
                        value={formData.name} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="JohnDoe@smith.com" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="asunto" className="form-label">Asunto</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="asunto" 
                        placeholder="Error en la página " 
                        value={formData.asunto} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea 
                        className="form-control" 
                        id="message" 
                        rows="3" 
                        placeholder="Tu mensaje" 
                        value={formData.message} 
                        onChange={handleChange} 
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}