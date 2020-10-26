
import * as methods from "./methods"
const bodyParser = require('body-parser');



class Middleware{
  
  
  constructor(pao){

    this.pao = pao 
    this.all = [{call: 'static',use: 'public'},'json']
    this.middlewares = {
      
      all:[

        {type: 'function',value: (req,res,next)=>{
          //  adL('I am the zeenith ware'),
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           next()
          }
          },
        // {type: 'module',value: 'test'}
      ]
     
    }

      
    
   
    // console.log('THE STORE')
    // console.log(this.supubu
     
     this.init = methods.init
     this.handleAttachMiddleware = methods.handleAttachMiddleware
     this.attachMiddleware = methods.attachMiddleware
     this.handleConfigMiddleware = methods.handleConfigMiddleware 
     this.handleAddExternalMiddleware = methods.handleAddExternalMiddleware 
     this.allWares = methods.allWares
    
    

  }


}

export default Middleware