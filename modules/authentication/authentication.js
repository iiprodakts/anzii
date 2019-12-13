
import * as methods from "./methods"


class Authentication{
  
  
  constructor(pao){

    this.pao = pao
    
    // methods

   

     this.init = methods.init
     this.handleShareMiddleware = methods.handleShareMiddleware
     this.auth = methods.auth 
    
    

  }


  

}

export default Authentication