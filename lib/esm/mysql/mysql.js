
import * as methods from "./methods"




class Mysql{
  
  
  constructor(pao){

    this.pao = pao 
    

    // // methods

   

     this.init = methods.init
     this.handleMysqlDataRequest = methods.handleMysqlDataRequest 
     this.insertOne = methods.insertOne 
     this.insertMany = methods.insertMany 
     this.findOne = methods.findOne 
     this.updateOne = methods.updateOne 
     this.deleteOne = methods.deleteOne
     
    

  }


  

}

export default Mysql