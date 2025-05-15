const FileUpload = ({ label, name, accept = ".jpg,.pdf" }) => (
    <div className="inputtype">
      <label className="labelform">{label}</label>
      <input type="file" className="file-input file-input-ghost" name={name} accept={accept} />

    </div>
  );
  
  export default FileUpload;  