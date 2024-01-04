


export const init = function(){
  
  
  this.adLog('File has been initialised') 
  this.listens({
		
	'serve-file-data-request': this.handleServeFileDataRequest.bind(this)
  
  })

	
}


export const handleServeFileDataRequest = function(data){

	
	const self = this 
	
} 


