
import * as methods from "./methods"

//Dependecies

const crypto = require('crypto')
const fetch = require('axios')

class FrameTest{
  
  
  constructor(pao){

    this.pao = pao 
    this.crypto = crypto 
    this.tmpd = null 
    this.strategies = {anzii:true,social:true}
    this.url = 'http://public.api.careerjet.net/search?locale_code=en_ZA&affid=0e6712acc74087da913e65985433a122&keywords=web developer&location=gauteng&pagesize=50'
    this.fetch = fetch
    

    // methods

     this.init = methods.init 
     this.handleFrameTestTask = methods.handleFrameTestTask 
     this.registerStrategy = methods.registerStrategy 
     this.anzii = methods.anzii 
     this.social = methods.social
     this.isUserExist = methods.isUserExist 
     this.isCallback = methods.isCallback 
     this.hash = methods.hash 
     this.insertHandler = methods.insertHandler 
     this.findHandler = methods.findHandler
     this.procedureDoc = methods.procedureDoc
     this.setTokenHeader = methods.setTokenHeader
     this.testy = methods.testy 
     this.dataRequestHandler = methods.dataRequestHandler
     this.saveThingy = methods.saveThingy
     this.deleteThingy = methods.deleteThingy
     this.updateThingy = methods.updateThingy 
     this.findThingy = methods.findThingy 
     this.doThingy = methods.doThingy 
     this.thingyDataRequestHandler = methods.thingyDataRequestHandler
   
     
    

  }


  

}

export default FrameTest