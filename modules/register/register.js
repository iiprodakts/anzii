
import * as methods from "./methods"

//Dependecies

const crypto = require('crypto')

class Register{
  
  
  constructor(pao){

    this.pao = pao 
    this.crypto = crypto 
    this.tmpd = null 
    this.strategies = {anzii:true,social:true}
    

    // methods

     this.init = methods.init 
     this.handleRegisterTask = methods.handleRegisterTask 
     this.registerUser = methods.registerUser 
     this.addUser = methods.addUser 
     this.saveUser = methods.saveUser
     this.createJwt = methods.createJwt 
     this.sendEmail = methods.sendEmail 
     this.hookFunkToThingy = methods.hookFunkToThingy
     this.registerStrategy = methods.registerStrategy 
     this.anzii = methods.anzii 
     this.social = methods.social
     this.isUserExist = methods.isUserExist 
     this.isCallback = methods.isCallback 
     this.hash = methods.hash 
     this.insertHandler = methods.insertHandler 
     this.findHandler = methods.findHandler
     this.procedureDoc = methods.procedureDoc
     this.setTokenHeader = methods.setTokenHeader
   
     
    

  }


  

}

export default Register