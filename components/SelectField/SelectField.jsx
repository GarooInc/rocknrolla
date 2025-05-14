const SelectField = ({ label, name, options }) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name}>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
  
  export default SelectField;  