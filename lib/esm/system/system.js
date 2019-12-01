
import * as methods from "./methods"

// Dependecies

const cluster = require('cluster');
const http = require('http');
const os = require('os')



class System{
  
  
  constructor(pao){

    this.pao = pao 
    this.context = process
    this.env = this.context.env.NODE_ENV
    this.cluster = cluster 
    this.os = os 
    this.shutDownServices = []
    this.numOfDBSD = 3
    this.allowedDBSTR = 10000
    this.systemIsShuttingDown = false 
    this.shutDownOrder = []


    this.init = methods.init 
    this.handleConfigureSystem = methods.handleConfigureSystem
    this.handleRegisterShutDownCandidate = methods.handleRegisterShutDownCandidate
    this.handleServerAttachWorkers = methods.handleServerAttachWorkers
    this.masterWorker = methods.masterWorker
    this.folkSlaveWorkers = methods.folkSlaveWorkers
    this.handleShutDowns = methods.handleShutDowns 
    this.shutDown = methods.shutDown 



    
  }


  

}

export default System