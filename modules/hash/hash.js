
import * as methods from "./methods"


const bcrypt = require('bcryptjs')


class Hash{
  
  
  constructor(pao){

    this.pao = pao
    this.hach = bcrypt
  
    



    
     this.init = methods.init
     this.handleHashPayload = methods.handleHashPayload 
     this.handleComparePayload = methods.handleComparePayload
     this.hash = methods.hash 
     this.compare = methods.compare 
    
     
    
  }


  

}

export default Hash