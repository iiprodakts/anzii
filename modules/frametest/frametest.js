
import * as methods from "./methods"

//Dependecies

const crypto = require('crypto')

class FrameTest{
  
  
  constructor(pao){

    this.pao = pao 
    this.crypto = crypto 
    this.tmpd = null 
    this.strategies = {anzii:true,social:true}
    

    // methods

     this.init = methods.init 
     this.handleFrameTestTask = methods.handleFrameTestTask 
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
     this.testy = methods.testy 
     this.dataRequestHandler = methods.dataRequestHandler
   
     
    

  }


  

}

export default FrameTest