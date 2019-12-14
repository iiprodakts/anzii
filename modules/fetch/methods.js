


export const init = function(){
  
  
  this.log('Fetch has been initialised') 
  this.listens({
		
	'handle-fetch-task': this.handleListTask.bind(this)
  
  })

	
}


export const handleListTask = function(data){

	
	const self = this 
    self.list(data)

} 


export const list = function(data){
	
	
	const self = this 
	let pao = self.pao
	let cpus = 4

	console.log(data)
	if(data.hasOwnProperty('callback')){

		data.callback(null,{fetch: ['Fetch','the','data',cpus]})

			
		
	}else{

	}

}
