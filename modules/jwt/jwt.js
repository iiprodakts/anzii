
import * as methods from "./methods"

const jwt = require('jsonwebtoken')



class Jwt{
  
  
  constructor(pao){

    this.pao = pao 
    this.jwt = jwt 
    this.key = "randomefyerczhk5r325xsr6"
    

    // // methods

   

     this.init = methods.init
     this.jwtSign = methods.jwtSign 
     this.jwtVerify = methods.jwtVerify 
     this.handleSaveJwtKey = methods.handleSaveJwtKey
     this.handleCreateToken = methods.handleCreateToken 
     this.handleVerifyToken = methods.handleVerifyToken
     
    

  }


  

}

export default Jwt