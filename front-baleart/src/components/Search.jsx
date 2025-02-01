import { useState } from 'react';

export default function Search({handleChange}) {

  const defaulValue = 'Buscar un espacio';
  const [value, SetValue] = useState(defaulValue);


    return(
        <input 
          type="text"
          className="searchbar form-control text-white bg-dark  border-0 mt-4 text-center"          
          onFocus={(e) => e.target.value === defaulValue ? e.target.value = '' : e.target.value} 
          onChange = {(e) => handleChange(e.target.value)}
          defaultValue={'Buscar un espacio'}
        />
    )
}