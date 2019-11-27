


export const init = function(){
  
  
  console.log('List has been initialised') 
  this.listens({
		
	'anziiloger-log': this.handleLogRequest.bind(this)
  
  })

	
}

export const handleLogRequest = function(data){

	const self = this 

	console.log(data.source,'logged message: ',data.message,' of type ',data.type)

}


export const handleListTask = function(data){

	
	const self = this 
    self.list(data)

} 


