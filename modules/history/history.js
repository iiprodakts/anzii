 
import * as methods from "./methods"



class History{
  
  
  constructor(pao){

    this.pao = pao
  
    



    
     this.init = methods.init
     this.handleHistoryTask = methods.handleHistoryTask 
     this.saveHistory = methods.saveHistory
     this.getHistory = methods.getHistory
     this.deleteHistory = methods.DeleteHistory

    
  }


  

}

export default History