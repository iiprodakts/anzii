
import * as methods from "./methods"


// const multer = require('multer')
// const wrStream = require('streamifier')
// const rStream = require('concat-stream')
const path = require('path')
const fs = require('fs')
const fileType = require('file-type')





class FileMan{
  
  
  constructor(pao){

    this.pao = pao 
    this.fs = fs 
    this.path = path
    this.FileType = fileType
    this.system = null
    this.supportedStorageTypes = ['local','awsS3','cloudinary','digitalOcean']
    this.supportedFileTypes = {image: ['png,gif,jpeg,jpg'],text: ['pdf','docx','txt'],db:['sql','csv']}
    

    
     this.init = methods.init
     this.handleParseFile = methods.handleParseFile
     this.handleSaveFile = methods.handleSaveFile 
     this.beginFileSave = methods.beginFileSave 
     this.handleRenameFile = methods.handleRenameFile
     this.renameFile = methods. renameFile
     this.handleGetFile = methods.handleGetFile
     this.handleMakeFile = methods.handleMakeFile
    //  this.handleRemoveFile = methods.handleRemoveFile
     this.generateFileName = methods.generateFileName
     this.validateFile = methods.validateFile
     this.saveFile = methods.saveFile 
     this.deleteFile = methods.deleteFile
     this.saveToSource = methods.saveToSource
     this.handleTakeSystemBase = methods.handleTakeSystemBase
     
    
  }


  

}

export default FileMan