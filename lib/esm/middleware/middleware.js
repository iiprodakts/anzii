
import * as methods from "./methods"
const bodyParser = require('body-parser');



class Middleware{
  
  
  constructor(pao){

    this.pao = pao 
    this.body = bodyParser
    this.middlewares = {

      all:[

        {type: 'function',value: (req,res,next)=>{ console.log('I am the zeenith ware'),next()}},
        {type: 'module',value: 'test'}
      ]
     
    }

      
    
   
    // console.log('THE STORE')
    // console.log(this.supubu
     
     this.init = methods.init
     this.handleAttachMiddleware = methods.handleAttachMiddleware
     this.attachMiddleware = methods.attachMiddleware
     this.handleConfigMiddleware = methods.handleConfigMiddleware
    
    

  }


}

export default Middleware