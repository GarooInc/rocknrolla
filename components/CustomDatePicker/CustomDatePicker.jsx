"use client";
import React, { useState } from 'react';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];
const years = Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - i);

const CustomDatePicker = ({ namePrefix, onChange }) => {
  const [selectedDate, setSelectedDate] = useState({
    dia: '',
    mes: '',
    anio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const field = name.replace(`${namePrefix}_`, '');
    const updatedDate = { ...selectedDate, [field]: value };

    setSelectedDate(updatedDate);

    if (onChange) {
      const dateString = `${updatedDate.dia}-${updatedDate.mes}-${updatedDate.anio}`;
      onChange(dateString);
    }
  };

  return (
    <div className="inputfield flex items-center">
      <select
        name={`${namePrefix}_dia`}
        className="bg-transparent border-none text-center outline-none appearance-none w-full"
        value={selectedDate.dia}
        onChange={handleChange}
      >
        <option value="">día</option>
        {days.map(day => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
      <div className="w-px h-6 bg-gray-400 mx-3" />
      <select
        name={`${namePrefix}_mes`}
        className="bg-transparent border-none text-center outline-none appearance-none w-full"
        value={selectedDate.mes}
        onChange={handleChange}
      >
        <option value="">mes</option>
        {months.map((month, i) => (
          <option key={i} value={i + 1}>{month}</option>
        ))}
      </select>
      <div className="w-px h-6 bg-gray-400 mx-3" />
      <select
        name={`${namePrefix}_anio`}
        className="bg-transparent border-none text-center outline-none appearance-none w-full"
        value={selectedDate.anio}
        onChange={handleChange}
      >
        <option value="">año</option>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomDatePicker;