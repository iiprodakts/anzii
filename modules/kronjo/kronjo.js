
import * as methods from "./methods"

 const nodeSchedule = require('node-schedule')


class Kronjo{
  
  
  constructor(pao){

      this.pao = pao
      this.taskr = nodeSchedule 
      this.krons = []
      
      
     this.init = methods.init
     this.handleKronjoTask = methods.handleKronjoTask 
     this.handleConfigKronjo = methods.handleConfigKronjo 
     this.handleSingleProcessTasks = methods.handleSingleProcessTasks
     this.scheduleTask = methods.scheduleTask
     
     
    
  }


  

}

export default Kronjo