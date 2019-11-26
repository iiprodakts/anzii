


export const init = function(){
  
  
  console.log('Global has been initialised') 
  this.listens({
		
	'request-global-request': this.handleRequestGlobalRequest.bind(this),
  
})
	
	
	
}

export const handleRequestGlobalRequest = function(data){

	const self = this 
	
	if(self.globals && self.globals.length > 0){

		if(self.globals.hasOwnProperty(data.module)){

			self.emit({type: 'request-global-request-response',data: true})
		}else{
			
			self.emit({type: 'request-global-request-response',data: false})
		}
	
	}else{

		self.emit({type: 'request-global-request-error',data: false})

	}
	
	
} 


