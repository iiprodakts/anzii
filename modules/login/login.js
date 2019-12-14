
import * as methods from "./methods"


class Login{
  
  
  constructor(pao){

    this.pao = pao 
    this.strategies = {anzii:true,social:true}
  
    
    

    // // methods

   

    this.init = methods.init
    this.handleLoginTask = methods.handleLoginTask 
    this.loginStrategy = methods.loginStrategy 
    this.anzii = methods.anzii 
    this.social = methods.social
    this.isUserExist = methods.isUserExist 
    this.compare = methods.compare
    this.findHandler = methods.findHandler
    this.setTokenHeader = methods.setTokenHeader
     
    

  }


  

}

export default Login