 
import * as methods from "./methods"



class History{
  
  
  constructor(pao){

    this.pao = pao
  
    



    
     this.init = methods.init
     this.handleHistoryTask = methods.handleHistoryTask 
     this.history = methods.history 
     this.saveHistory = methods.saveHistory
     this.getSavedHistory = methods.getSavedHistory
     this.deleteHistory = methods.DeleteHistory
     this.multiDataRequestHandler = methods.multiDataRequestHandler
    
  }


  

}

export default History