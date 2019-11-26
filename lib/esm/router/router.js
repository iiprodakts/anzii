
import * as methods from "./methods"


class Router{
  
  
  constructor(pao){

    this.pao = pao
    this.routes = null 
    this.routerMiddleware = null
    this.filteredpublicMiddlewares = []
    this.filteredprivateMiddlewares = []



     this.init = methods.init
     this.handleConfigRouter = methods.handleConfigRouter
     this.handleAttachRoutes = methods.handleAttachRoutes
     this.handleRouterMiddleware = methods.handleRouterMiddleware
     this.attachRoutes = methods.attachRoutes
     this.renderRoute = methods.renderRoute
     this.appendRouter = methods.appendRouter
     this.middlewareType = methods.middlewareType
     this.handOver = methods.handOver 
     this.filterCallback = methods.filterCallback


  }


  

}

export default Router