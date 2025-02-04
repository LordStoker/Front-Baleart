export default function SpaceTypeForFilter({ tipo }) {
  const iconMap = {
    "Museo": "fa-solid fa-landmark",
    "Galería": "fa-solid fa-images",
    "Sala de exposiciones": "fa-solid fa-door-open",
    "Centro Cultural": "fa-solid fa-university",
    "Sede Institucional": "fa-solid fa-building",
    "Hotel": "fa-solid fa-hotel",
    "Palacio": "fa-solid fa-chess",
    "Refugio": "fa-solid fa-house-user",
    "Casal": "fa-solid fa-users",
    "Iglesia": "fa-solid fa-church",
    "Biblioteca": "fa-solid fa-book",
    "Teatro": "fa-solid fa-theater-masks",
    "Apartamento": "fa-solid fa-house-chimney-window",
    "Casa Unifamiliar": "fa-solid fa-home",
    "Oficina": "fa-solid fa-briefcase",
    "Club Deportivo": "fa-solid fa-dumbbell",
    "Castillo": "fa-solid fa-chess-rook",
    "Jardines": "fa-solid fa-seedling",
    "Hospital": "fa-solid fa-hospital",
    "Cementerio": "fa-solid fa-cross",
    "Parque": "fa-solid fa-tree",
    "Piscina": "fa-solid fa-water-ladder",
    "Barrio": "fa-solid fa-city",
    "Pasaje": "fa-solid fa-road",
    "Faro": "fa-solid fa-lightbulb"
  };

  return (
    <div className="flex items-center space-x-2 text-lg">
      <i className={iconMap[tipo] || "fa-solid fa-map-marker-alt"} style={{ color: "#8a0194" }}></i>
    </div>
  );
}
