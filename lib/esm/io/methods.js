


export const init = function(){
  
  
  this.logSync('IO has been initialised') 
  this.startIOShell()
	
}


export const startIOShell = function(){

	
  const self = this 
  self.logSync('Starting i/o Shell operations')
  self.emit({type:"start-io-operations",data:""})
	
} 


