
import * as methods from "./methods"
import config from '../../../confy'




class Config{
  
  
  constructor(pao){

    this.pao = pao
    this.config = config
   
     this.init = methods.init
     this.configure = methods.configure
  }


  

}

export default Config