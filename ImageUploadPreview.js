import React, { Component } from "react";


  
export default class ImageUploadPreview extends Component {
	fileObj = [];
    fileArray = [];
    file = [];
    
	
    constructor(props) {
        super(props);
		
        this.state = {
            file: [null]
            
        };
        
		
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }
    async onSubmit(e){
        e.preventDefault() 
        this.uploadFile(this.state.file);
        console.log(this.state.file);
    }

    async uploadFile(file){ 
        const formData = new FormData();
		console.log(formData);
    }
    
 
    render() {
        return (
			<div className="row">
               
                {(this.fileArray || []).map(url => (
                    
					<div class="parent">
                         <div className="file-card">
                        <div class="image-row">
                        <img className="file-card-item" src={url} alt="..." key={url} className="img-responsive rounded" />
					</div>
                    </div>
                    </div>
                ))}
                
				<form onSubmit={ this.onSubmit } className="form-inline">
                    
					<div className="form-group">
                    
                    <div class="container1">
                    <h1>Upload rice images</h1>
                    
                    <div class="btm"><button type="submit" className="btn btn-success" >Upload</button>
                    </div>
                    
                        
						<input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple  >

                        </input>
                    
					</div>
                    
                    
                    <div>
                    </div>
                    </div>
                
                    
                    </form >
			</div>
        )
    }
}




