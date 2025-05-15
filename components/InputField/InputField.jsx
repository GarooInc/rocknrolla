const InputField = ({ label, name, type = "text", required = false }) => (
    <div className="inputtype">
      {
        label && <label className="labelform" htmlFor={name}>{label}</label>
      }
      <input className="inputfield" type={type} id={name} name={name} required={required} />
    </div>
  );
  
  export default InputField;
  