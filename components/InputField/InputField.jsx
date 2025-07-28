import { useState } from 'react';

const InputField = ({
  label,
  secondaryLabel,
  name,
  type = "text",
  required,
  value,
  onChange,
  onBlur,
  checkError
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="inputtype">
      <div className="flex gap-2 justify-start items-center">
        {label && <label className="labelform" htmlFor={name}>{label}
        {required && <span className="text-red-500 ml-1">*</span>}
        </label>}
        {secondaryLabel && focused && (
          <span className="text-xs text-gray-500">{secondaryLabel}</span>
        )}
      </div>
      <input
        className="inputfield"
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          onBlur && onBlur(e);
        }}
      />
      {checkError && (
        <div className="text-red-600 text-xs mt-1">{checkError}</div>
      )}
    </div>
  );
};

export default InputField;
