
import * as methods from "./methods"
const file = require('./file.json')



class IO{
  
  
  constructor(pao){

    this.pao = pao 
    this.FILE = file
  
  
     this.init = methods.init
     this.startIOShell = methods.startIOShell
   
  
     
    
  }


  

}

export default IO