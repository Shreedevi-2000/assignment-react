import React, { } from 'react';
import './App.css';

import ImageUploadPreview from './ImageUploadPreview'; 
function App() {  
     
  return (  
    <div className="container">  
      <ImageUploadPreview/>  
    </div>  
  );  
}  
 
export default App;
function App() {
    const [file, setFile] = useState();
    const [images, setImages] = useState();
    function handleImageChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
 
    return (
       
        <div className="App">
       

         
        <h1> Upload rice images</h1>
          <div>
            <input type="file"  multiple  onChange={handleImageChange}/>
            { images.map((image, index) => (<div key={index} className="image-card">
            <img scr={URL.createObjectURL(image)} alt={'Image ${index}'} />
            </div>
            ))}

            <div className="image-scroll-container">
            <div className="e-card e-card-horizontal">
            <img src={file} />   
            <div className="e-card-stacked">        
             </div> 
            </div>
        </div>
        </div>
        </div>
      );
    }

export default App;