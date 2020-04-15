 
import * as methods from "./methods"



class Inalerts{
  
  
  constructor(pao){

    this.pao = pao
  
    



    
     this.init = methods.init
     this.handleInternalAlertsTask = methods.handleInternalAlertsTask 
     this.saveAlerts = methods.saveAlerts
     this.getAlerts = methods.getAlerts
     this.saveAlertsSubscribtions = methods.saveAlertsSubscribtions 
     this.getAlertsSubscriptions = methods.getAlertsSubscriptions
     this.deleteAlertsSubscriptions = methods.deleteAlertsSubscriptions 
     this.updateAlertsSubscriptions = methods.updateAlertsSubscriptions
     this.manageAlerts = methods.manageAlerts
     this.getGroupedAlerts = methods.getGroupedAlerts
     this.updateUserAlert = methods.updateUserAlert
     this.dataRequestAlertGroupHandler = methods.dataRequestAlertGroupHandler
     this.multiDataRequestHandler = methods.multiDataRequestHandler
     this.getAlertById = methods.getAlertById
     
    //  this.searchBatch = methods.searchBatch
    //  this.searchBatchHandler = methods.searchBatchHandler
    
  }


  

}

export default Inalerts