const SelectField = ({ label, name, options }) => (
    <div className="w-full inputtype">
      <label className="labelform" htmlFor={name}>{label}</label>
      <select id={name} name={name} className="inputfield w-full">
        {options.map((opt, i) => (
          <option className="" key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
  
  export default SelectField;  