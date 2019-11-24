
import * as methods from "./methods"


class Router{
  
  
  constructor(pao){

    this.pao = pao
  
     this.init = methods.init
     this.handleAddRoutes = methods.handleAddRoutes
     this.addRoutes = methods.addRoutes
  }


  

}

export default Router