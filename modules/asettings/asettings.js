 
import * as methods from "./methods"



class Asettings{
  
  
  constructor(pao){

    this.pao = pao
  
    



    
     this.init = methods.init
     this.handleAsettingsTask = methods.handleAsettingsTask
     this.getUserProfile = methods.getUserProfile
     this.deleteAccount = methods.deleteAccount
     this.updateUser = methods.updateUser 
     this.changeAvatar = methods.changeAvatar 
     this.handleImageManipulation = methods.handleImageManipulation
     this.modifyFile = methods.modifyFile 
     this.saveUploads = methods.saveUploads
     this.handleFileSave = methods.handleFileSave 
     this.saveFileUrlToDb = methods.saveFileUrlToDb
     this.dataRequestHandler = methods.dataRequestHandler
     
     this.getApplicantTools = methods.getApplicantTools
     this.searchBatch = methods.searchBatch
     this.searchBatchHandler = methods.searchBatchHandler 
     this.dealWithDataStorageResponse = methods.dealWithDataStorageRespomse
    
  }


  

}

export default Asettings