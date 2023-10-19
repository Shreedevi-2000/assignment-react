import React, { useState } from 'react';

function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = [...selectedFiles, ...event.target.files];
    setSelectedFiles(newFiles);
  };
  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  return (
    <div className="disply">
      
    <form>
    
      <label htmlFor="file-upload" className="custom-file-upload">
        
      <h1>Upload rice images</h1>             
        <input
          type="file"
          id="file-upload"
          accept=".jpg, .jpeg, .png, .pdf"
           
          onChange={handleFileChange}
        />
        <i className="card" ></i> Upload +
      </label>
      
      {selectedFiles.length > 0 && (
        <div className="file-card">
          {selectedFiles.map((file, index) => (
            <div key={index} className="file-card-item">
              <p>{file.name}</p>
              <button  onClick={() => handleRemoveFile(index)}>x</button>
            </div>
          ))}
        </div>
      )}
      </form>
    </div>

  );
}
export default FileUpload
