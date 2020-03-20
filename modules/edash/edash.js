 
import * as methods from "./methods"



class Edash{
  
  
  constructor(pao){

    this.pao = pao
  
    



    
     this.init = methods.init
     this.handleEdashTask = methods.handleEdashTask 
     this.getEmployerTools = methods.getEmployerTools
     this.searchBatch = methods.searchBatch
     this.searchBatchHandler = methods.searchBatchHandler 
     this.dealWithDataStorageResponse = methods.dealWithDataStorageRespomse
    
  }


  

}

export default Edash