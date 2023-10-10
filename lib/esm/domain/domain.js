
import * as methods from "./methods"


const path = require('path')
const fs = require('fs') 
const passport = require('passport')



class Domain{
  
  
  constructor(pao){

    this.pao = pao
    this.system = null
    this.fs = fs 
    this.path = path 
    this.passport = passport
  
    



    
     this.init = methods.init
     this.handleSetDomainDefaults = methods.handleSetDomainDefaults
     this.handleConfigDomain = methods.handleConfigDomain
     this.handleTakeSystemBase = methods.handleTakeSystemBase 
    
     
    
  }


  

}

export default Domain