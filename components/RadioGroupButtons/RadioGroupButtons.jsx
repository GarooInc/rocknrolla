"use client";
const RadioGroupButtons = ({ name,required, options = [], selected, onChange, value }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-between w-full">
      {options.map((option, index) => (
        <label
          key={index}
          className="inputfield flex flex-1 text-start gap-2"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            id={`${name}-${option.value}`}
            required={required}
            checked={selected === option.value}
            onChange={() => onChange(option.value)}
            className="accent-black outline-none focus:outline-none"
          />
          <span className="text-black">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroupButtons;
