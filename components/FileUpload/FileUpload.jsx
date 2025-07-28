const FileUpload = ({ label, name, required, accept = ".jpg,.pdf", onChange }) => (
    <div className="inputtype">
      <label className="labelform">{label}
      {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input type="file" className="file-input file-input-ghost" name={name} accept={accept} onChange={onChange} /> 

    </div>
  );
  
  export default FileUpload;  