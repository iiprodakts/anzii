
import * as methods from "./methods"

// Dependecies






class System{
  
  
  constructor(pao){

    this.pao = pao
    this.env = process.env.NODE_ENV
   
     this.init = methods.init
    
  }


  

}

export default System