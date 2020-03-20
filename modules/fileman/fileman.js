
import * as methods from "./methods"


const multer = require('multer')
// const wrStream = require('streamifier')
// const rStream = require('concat-stream')





class FileMan{
  
  
  constructor(pao){

    this.pao = pao
    this.multer = multer
    this.supportedStorageTypes = ['local','awsS3','cloudinary','digitalOcean']
    this.supportedFileTypes = {image: ['png,gif,jpeg,jpg'],text: ['pdf','docx','txt'],db:['sql','csv']}
    

    
     this.init = methods.init
     this.handleParseFile = methods.handleParseFile
     this.handleSaveFile = methods.handleSaveFile
     this.handleMakeFile = methods.handleMakeFile
     this.handleRemoveFile = methods.handleRemoveFile
     this.generateFileName = methods.generateFileName
     this.validateFile = methods.validateFile
     this.saveFile = methods.saveFile
     this.saveToSource = methods.saveToSource
     
    
  }


  

}

export default FileMan