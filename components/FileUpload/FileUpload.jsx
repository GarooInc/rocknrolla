const FileUpload = ({ label, name, accept = ".jpg,.pdf" }) => (
    <div className="inputtype">
      <label className="labelform">{label}</label>
      <input className="inputfield" type="file" name={name} accept={accept} />
    </div>
  );
  
  export default FileUpload;  