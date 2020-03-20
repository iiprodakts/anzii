 
import * as methods from "./methods"



class Inalerts{
  
  
  constructor(pao){

    this.pao = pao
  
    



    
     this.init = methods.init
     this.handleInternalAlertsTask = methods.handleInternalAlertsTask 
     this.saveAlerts = methods.saveAlerts
     this.getAlerts = methods.getAlerts
     this.manageAlerts = methods.manageAlerts
     this.getGroupedAlerts = methods.getGroupedAlerts
     this.dataRequestAlertGroupHandler = methods.dataRequestAlertGroupHandler
     this.multiDataRequestHandler = methods.multiDataRequestHandler
     
    //  this.searchBatch = methods.searchBatch
    //  this.searchBatchHandler = methods.searchBatchHandler
    
  }


  

}

export default Inalerts