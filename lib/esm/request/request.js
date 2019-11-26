
import * as methods from "./methods"


class Request{
  
  
  constructor(pao){

     this.pao = pao
     this.request = {}
     this.requestData = null
  
     this.init = methods.init
     this.handleRequestHandOver = methods.handleRequestHandOver
     this.parseRequest = methods.parseRequest
     this.handleRequestGlobalError =  methods.handleRequestGlobalError
     this.handleRequestGlobalResponse = methods.handleRequestGlobalResponse 
     this.handleBadRequestError = methods.handleBadRequestError 
     this.handleHandlerNotFound = methods.handleHandlerNotFound 
     this.handleByHandlerError = methods.handleByHandlerError
     this.handleHandlerError = methods.handleHandlerError 
     this.handlePathError = methods.handlePathError
     this.writeResponse = methods.writeResponse 
     this.successfullHandle = methods.successfullHandle 
     this.failureHandle = methods.failureHandle



  }


  

}

export default Request