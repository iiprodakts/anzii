
import * as methods from "./methods"

 // Dependecies 
 
 const winston = require('winston')



class Anziiloger{
  
  
  constructor(pao){

    this.pao = pao
    this.winlo = winston 
    this.logger = null
    this.defaultTransports = [
    {
        
        trans: 'File',
        level: 'info', 
        
        handleExceptions: true, 
        json: true,
        label: 'Anzilloger',
        maxsize: 5242880,
        maxFiles: 5,
        timestamp: true,
        colorize: false
    },
    {
        trans: 'Console',
        level: 'debug',
        handleExceptions: true, 
        json: false,
        timestamp: true,
        colorize: true
    }
    ]
  
    



    
     this.init = methods.init
     this.handleLogRequest = methods.handleLogRequest
     this.handleAnziilogerConfig = methods.handleAnziilogerConfig 
     this.info = methods.info 
     this.warn = methods.warn 
     this.error = methods.error 
     this.debug = methods.debug
     
     
    
  }


  

}

export default Anziiloger