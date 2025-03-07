

export default function SpaceService({ service }) {
    const iconMap = {
      "Adaptado discapacitados": "fa-brands fa-accessible-icon",
      "Admite mascotas": "fa-solid fa-dog",
      "Aire acondicionado": "fa-solid fa-fan",
      "Biblioteca": "fa-solid fa-book",
      "Cafetería": "fa-solid fa-mug-hot",
      "Archivo": "fa-solid fa-box-archive",
      "Talleres": "fa-solid fa-hand-dots",
      "Aparcamiento": "fa-solid fa-square-parking",
      "Conciertos": "fa-solid fa-music",
      "Visitas concertadas": "fa-solid fa-calendar-days",
      "Wifi": "fa-solid fa-wifi",
      "Conferencias": "fa-solid fa-comment",
      "Teatro": "fa-solid fa-theater-masks",  
      "Baños": "fa-solid fa-restroom"
    };
    
    return(
      
        <i className={iconMap[service.Nombre] || "fa-solid fa-person-chalkboard"} style={{ color: "#0424a4" }} ></i>
    );
}