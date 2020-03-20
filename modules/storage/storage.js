
import * as methods from "./methods" 




class Storage{
  
  
  constructor(pao){

    this.pao = pao
    this.supportedStorageTypes = ['local','awsS3','cloudinary','digitalOcean']
    this.supportedFileTypes = {image: ['png,gif,jpeg,jpg'],text: ['pdf','docx','txt'],db:['sql','csv']}
    
    



    
     this.init = methods.init
     this.receiveFile = methods.receiveFile 
     this.handleSaveFile = methods.handleSaveFile
     this.validateFile = methods.validateFile
     this.saveFile = methods.saveFile
     this.saveToSource = methods.saveToSource
     
    
  }


  

}

export default Storage