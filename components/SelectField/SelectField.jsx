const SelectField = ({ label, name, options, onChange, value }) => (
    <div className="w-full inputtype">
      <label className="labelform" htmlFor={name}>{label}</label>
      <select id={name} name={name} className="select inputfield" onChange={onChange} value={value}>
        {options.map((opt, i) => (
          <option className="" key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
  
  export default SelectField;  