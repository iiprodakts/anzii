
import * as methods from "./methods"


// const wrStream = require('streamifier')
// const rStream = require('concat-stream')





class Downloadr{
  
  
  constructor(pao){

    this.pao = pao
    // this.multer = multer
    // this.supportedStorageTypes = ['local','awsS3','cloudinary','digitalOcean']
    // this.supportedFileTypes = {image: ['png,gif,jpeg,jpg'],text: ['pdf','docx','txt'],db:['sql','csv']}
    

    
     this.init = methods.init
     this.downloadrTaskHandler = methods.downloadrTaskHandler
     this.receiveFile = methods.receiveFile
    
  }


  

}

export default Downloadr