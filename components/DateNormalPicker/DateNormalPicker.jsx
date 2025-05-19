import React from 'react';
import dayjs from 'dayjs';

export default function CustomDatePicker({ value, onChange, label = "Date" }) {
  const handleChange = (e) => {
    const dateValue = dayjs(e.target.value);
    onChange(dateValue);
  };

  return (
    <div className='w-full'>
      <input
        className='bg-gray-200 rounded-2xl px-4 py-2 w-full datefield'
        type="date"
        value={dayjs(value).format('DD-MM-YYYY')}
        onChange={handleChange}
        
      />
    </div>
  );
}