
import * as methods from "./methods"



class Midleware{
  
  
  constructor(pao){

    this.pao = pao 
   
    // console.log('THE STORE')
    // console.log(this.supubu
     
     this.init = methods.init
     this.handleAddMiddleware = methods.handleAddMiddleware
     this.addMiddleware = methods.addMiddleware
    
    

  }


}

export default Midleware