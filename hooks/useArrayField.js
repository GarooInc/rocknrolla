import { useState } from 'react';

export function useArrayField(initialArray) {
  const [array, setArray] = useState(initialArray);

  const updateField = (index, key, value) => {
    setArray((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [key]: value,
      };
      return updated;
    });
  };

  const addEntry = (e) => {
    if (e?.nativeEvent || typeof e?.preventDefault === 'function') {
      console.warn('Se intentó agregar una entrada usando un evento. Ignorado.');
      return;
    }

    if (initialArray.length === 0 || typeof initialArray[0] !== 'object') return;

    const base = initialArray[0];
    const emptyEntry = {};

    for (const key of Object.keys(base)) {
      emptyEntry[key] = typeof base[key] === 'object' && base[key] !== null
        ? structuredClone(base[key])
        : '';
    }

    setArray((prev) => [...prev, emptyEntry]);
  };

  return [array, updateField, addEntry];
}
