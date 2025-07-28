const SelectField = ({ label, name, options, required, onChange, value }) => (
    <div className="w-full inputtype">
      <label className="labelform" htmlFor={name}>{label}
              {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select id={name} name={name} required className="select inputfield" onChange={onChange} value={value}>
        {options.map((opt, i) => (
          <option className="" key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
  
  export default SelectField;  