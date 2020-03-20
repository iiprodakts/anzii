
import * as methods from "./methods"



class Notifier{
  
  
  constructor(pao){

    this.pao = pao
    this.partners = [
    
     {
     	url: 'https://www.indeed.com'
       apiCreds:{uname: 'name'}
     }
    
    ]
    



    
     this.init = methods.init
     this.handleNotifierTask = methods.handleNotifierTask
     this.saveNotifierCandidate = methods.saveNotifierCandidate
     this.notifyCandidate = methods.notifyCandidate
     this.removeNotifierCandidates = methods.removeNotifierCandidates
     this.getNotifiedList = methods.getNotifiedList
     
    
  }


  

}

export default Notifier