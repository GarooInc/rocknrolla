const InputField = ({ label, name, type = "text", required = false, value, onChange }) => (
  <div className="inputtype">
    {label && <label className="labelform" htmlFor={name}>{label}</label>}
    <input
      className="inputfield"
      type={type}
      id={name}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;