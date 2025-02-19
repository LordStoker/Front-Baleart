import React, { useState } from 'react';

export default function Contacto({language}) {
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
                    <label htmlFor="name" className="form-label">{language === 'es' ? 'Nombre' : language === 'cat' ? 'Nom' : 'Name'}</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="John Doe" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">{language === 'es' ? 'Correo electrónico' : language === 'cat' ? 'Correu electrònic' : 'Email'}</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="JohnDoe@smith.com" 
                        value={formData.email} 
                        onChange={handleChange} 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address."
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="asunto" className="form-label">{language === 'es' ? 'Asunto' : language === 'cat' ? 'Assumpte' : 'Topic'}</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="asunto" 
                        value={formData.asunto} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">{language === 'esp' ? 'Mensaje' : language === 'cat' ? 'Missatge' : 'Message'}</label>
                    <textarea 
                        className="form-control" 
                        id="message" 
                        rows="3" 
                        value={formData.message} 
                        onChange={handleChange} 
                        minLength={20}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}