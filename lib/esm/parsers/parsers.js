
import * as methods from "./methods"

const jsonfile = require('jsonfile'),
path = require('path'),
bodyParser = require('body-parser');


class Parsers{
  
  
  constructor(pao){

    this.pao = pao
    this.path = path
    this.dependiks = {
      jsonfile: jsonfile,
      bodyParser: bodyParser
    }
    
    
     this.init = methods.init
     this.handleShareMiddleware = methods.handleShareMiddleware
    
  }


  

}

export default Parsers