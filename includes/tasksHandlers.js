
 export const sendJobAlerts = function(frequency){

    const self = this 
     self.emit({type:"get-new-jobs",data:''})

 } 
 
 export const sendDailyReports = function(){
 	
 	 self.emit({type:"get-reports",data:frequency})
 }



   
  
    
