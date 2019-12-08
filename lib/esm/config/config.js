
import * as methods from "./methods"
import config from '../../../confy'

// Dependecies 


const envObserver = require('config')




class Config{
  
  
  constructor(pao){

    this.pao = pao
    this.config = config 
    this.envObserver = envObserver
   
     this.init = methods.init
     this.configure = methods.configure
  }


  

}

export default Config