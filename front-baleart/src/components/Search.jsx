export default function Search({handleChange}) {
    return(
        <input 
          type="text"
          placeholder="Buscar un espacio" 
          className="searchbar form-control bg-dark text-white border-0 mt-4 text-center"
          autoFocus 
          onChange = {(e) => handleChange(e.target.value)}
        />
    )
}