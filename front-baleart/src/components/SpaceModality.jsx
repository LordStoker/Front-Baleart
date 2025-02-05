export default function SpaceModality({ modality }) {
    const iconMap = {
      "Pintura": "fa-solid fa-palette",
      "Escultura": "fa-solid fa-building-columns",
      "Fotografía": "fa-solid fa-camera",
      "Videoarte": "fa-solid fa-video",
      "Grafiti": "fa-solid fa-spray-can",
      "Instalación": "fa-solid fa-users-gear",
      "Performance": "fa-solid fa-chart-simple",
      "Tejidos": "fa-solid fa-shirt",
      "Joyas": "fa-solid fa-gem",
      "Ilustración": "fa-solid fa-panorama",
      "Música": "fa-solid fa-headphones-simple",
      "Video": "fa-solid fa-video",
      "Estampación": "fa-solid fa-stamp",
      "Vidrio": "fa-solid fa-wine-glass-empty"
    };
    
    return(
        <i className={iconMap[modality.Nombre] || ""} style={{ color: "#9f0712" }}></i>
    );
}