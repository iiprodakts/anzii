
import * as methods from "./methods"



class Midleware{
  
  
  constructor(pao){

    this.pao = pao 
    this.sticky = null
    
  
    // console.log('THE STORE')
    // console.log(this.supubu
     
     this.init = methods.init
     this.listens = methods.listens
     this.emit = methods.emit
     this.handleAddMiddleware = methods.handleAddMiddleware
     this.addMiddleware = methods.addMiddleware
    
    

  }


}

export default Midleware