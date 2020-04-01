
import * as methods from "./methods"



class Upload{
  
  
  constructor(pao){

    this.pao = pao
  
    



    
     this.init = methods.init
     this.handleUploadTask = methods.handleUploadTask
     this.getUploads = methods.getUploads 
     this.handleFileSave = methods.handleFileSave 
     this.handleImageManipulation = methods.handleImageManipulation
     this.saveFileUrlToDb = methods.saveFileUrlToDb 
     this.dataRequestHandler = methods.dataRequestHandler 
     this.modifyFile = methods.modifyFile

    //  this.getJFP = methods.getJFP
    //  this.getNativeJobs = methods.getNativeJobs
    //  this.searchBatch = methods.searchBatch
    //  this.searchBatchHandler = methods.searchBatchHandler
    
  }


  

}

export default Upload