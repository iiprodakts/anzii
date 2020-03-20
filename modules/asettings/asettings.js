 
import * as methods from "./methods"



class Asettings{
  
  
  constructor(pao){

    this.pao = pao
  
    



    
     this.init = methods.init
     this.handleAsettingsTask = methods.handleAsettingsTask 
     this.getApplicantTools = methods.getApplicantTools
     this.searchBatch = methods.searchBatch
     this.searchBatchHandler = methods.searchBatchHandler 
     this.dealWithDataStorageResponse = methods.dealWithDataStorageRespomse
    
  }


  

}

export default Asettings