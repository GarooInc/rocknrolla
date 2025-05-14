const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];
const years = Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - i);

const CustomDatePicker = ({ namePrefix }) => {
  return (
    <div className="inputfield">
      <select name={`${namePrefix}_dia`} className="bg-transparent border-none text-center outline-none appearance-none w-full">
        <option value="">día</option>
        {days.map(day => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
      <div className="w-px h-6 bg-gray-400 mx-3" />
      <select name={`${namePrefix}_mes`} className="bg-transparent border-none text-center outline-none appearance-none w-full">
        <option value="">mes</option>
        {months.map((month, i) => (
          <option key={i} value={i + 1}>{month}</option>
        ))}
      </select>
      <div className="w-px h-6 bg-gray-400 mx-3" />
      <select name={`${namePrefix}_anio`} className="bg-transparent border-none text-center outline-none appearance-none w-full">
        <option value="">año</option>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomDatePicker;