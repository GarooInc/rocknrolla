const InputField = ({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  onBlur,
  checkError
}) => (
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
      onBlur={onBlur}
    />
    {checkError && (
      <div className="text-red-600 text-xs mt-1">{checkError}</div>
    )}
  </div>
);

export default InputField;
