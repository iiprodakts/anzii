
import * as methods from "./methods.js"
const file = require('./file.json')



class File{
  
  
  constructor(pao){

    this.pao = pao 
    this.FILE = file
  
  
     this.init = methods.init
     this.handleServeFileDataRequest = methods.handleServeFileDataRequest 
     this.getFromCollection = methods.getFromCollection 
     this.setInCollection = methods.setInCollection 
     this.updateInCollection = methods.updateInCollection 
     this.deleteCollection = methods.deleteCollection 
     this.deleteInCollection = methods.deleteInCollection
  
     
    
  }


  

}

export default File