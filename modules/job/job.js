
import * as methods from "./methods"

const fetch = require('axios') 
const jobs = require('./outjobs.json') 
const fuzzySearch = require('fuse.js') 
const internalIP = require('ip')



class Job{
  
  
  constructor(pao){

    this.pao = pao
    this.url = 'http://public.api.careerjet.net/search?locale_code=en_ZA&affid=0e6712acc74087da913e65985433a122'
    this.fetch = fetch 
    this.jobsJson = jobs 
    this.fuzzySearch = fuzzySearch 
    this.ip = internalIP
    // this.partners = [
    
    //  {
    //  	url: 'https://www.indeed.com'
    //    apiCreds:{uname: 'name'}
    //  }
    
    // ]
    

    
     this.init = methods.init
     this.handleJobTask = methods.handleJobTask 
     this.getJobsWithThingy = methods.getJobsWithThingy 
     this.getCondition = methods.getCondition 
     this.formatQuery = methods.formatQuery 
     this.getDbKey = methods.getDbKey 
     this.generateQueryConditions = methods.generateQueryConditions 
     this.refineOutsourcedJobs = methods.refineOutsourcedJobs
     this.getJobs = methods.getJobs 
     this.getJFP = methods.getJFP
     this.getNativeJobs = methods.getNativeJobs
     this.searchBatch = methods.searchBatch 
     this.getSubscribers = methods.getSubscribers 
     this.handleGetNewJobs = methods.handleGetNewJobs 
     this.getNewJobs = methods.getNewJobs 
     this.getMailRecipient = methods.getMailRecipient 
     this.getEmailTemplate = methods.getEmailTemplate
     this.alertEmailResponses = methods.alertEmailResponses
     this.searchBatchHandler = methods.searchBatchHandler 
     this.multiDataRequestHandler = methods.multiDataRequestHandler
    
  }


  

}

export default Job