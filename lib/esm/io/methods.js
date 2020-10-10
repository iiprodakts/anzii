


export const init = function(){
  
  
  console.log('List has been initialised') 
  this.startIOShel()
	
}


export const startIOShell = function(){

	
  const self = this 
  self.logSync('Starting i/o Shell operations')
  self.emit({type:"start-io-operations",data:""})
	
} 


