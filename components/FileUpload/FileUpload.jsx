const FileUpload = ({ label, name, accept = ".jpg,.pdf", onChange }) => (
    <div className="inputtype">
      <label className="labelform">{label}</label>
      <input type="file" className="file-input file-input-ghost" name={name} accept={accept} onChange={onChange} /> 

    </div>
  );
  
  export default FileUpload;  