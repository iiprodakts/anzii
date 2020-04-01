
import * as methods from "./methods"


const multiPartFormParser = require('formidable')
// const wrStream = require('streamifier')
// const rStream = require('concat-stream')





class FileUpload{
  
  
  constructor(pao){

    this.pao = pao
    this.multiFormParser = multiPartFormParser
    // this.IncomingForm = this.multiFormParser.IncomingForm
    // this.supportedStorageTypes = ['local','awsS3','cloudinary','digitalOcean']
    // this.supportedFileTypes = {image: ['png,gif,jpeg,jpg'],text: ['pdf','docx','txt'],db:['sql','csv']}
    

    
     this.init = methods.init
     this.handleAddUploadMiddleware = methods.handleAddUploadMiddleware
     this.parseFile = methods.parseFile
  
     
    
  }


  

}

export default FileUpload