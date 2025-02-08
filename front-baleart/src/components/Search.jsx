import { useEffect, useState } from 'react';

export default function Search({ handleChange, language }) {
  const defaultValue = language === 'esp' ? 'Buscar un espacio' : language === 'cat' ? 'Cercar un espai' : 'Search for a space';
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [language]);

  return (
    <input
      type="text"
      className="searchbar form-control text-white bg-dark border-0 mt-2 py-1 text-center"
      onFocus={(e) => e.target.value === defaultValue ? e.target.value = '' : e.target.value}
      onBlur={(e) => e.target.value === '' ? e.target.value = defaultValue : e.target.value}
      onChange={(e) => {
        setValue(e.target.value);
        handleChange(e.target.value);
      }}
      value={value}
    />
  );
}