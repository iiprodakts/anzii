
import * as methods from "./methods"



class Dao{
  
  
  constructor(pao){

    this.pao = pao 
    this.DBS = null 
    this.connectors=null
  
    



    
     this.init = methods.init
     this.handleDataHiveRequest = methods.handleDataHiveRequest 
     this.handleDaoTakeDbs = methods.handleDaoTakeDbs
  
     
    
  }


  

}

export default Dao