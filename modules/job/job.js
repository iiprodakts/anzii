
import * as methods from "./methods"



class Job{
  
  
  constructor(pao){

    this.pao = pao
    // this.partners = [
    
    //  {
    //  	url: 'https://www.indeed.com'
    //    apiCreds:{uname: 'name'}
    //  }
    
    // ]
    



    
     this.init = methods.init
     this.handleJobTask = methods.handleJobTask
     this.getJobs = methods.getJobs 
     this.getJFP = methods.getJFP
     this.getNativeJobs = methods.getNativeJobs
     this.searchBatch = methods.searchBatch
     this.searchBatchHandler = methods.searchBatchHandler
    
  }


  

}

export default Job