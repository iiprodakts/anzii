

const os = require('os')
export const init = function(){
  
  
  this.log('Fetch has been initialised') 
  this.listens({
		
	'fetch-handle-task': this.handleListTask.bind(this)
  
  })

	
}


export const handleListTask = function(data){

	
	const self = this 
    self.list(data)

} 


export const list = function(data){
	
	
	const self = this 
	let pao = self.pao
	let cpus = os.cpus().length
	if(data.hasOwnProperty('callbacks')){


		if(pao.pa_isObject(data.callbacks)){

			if(data.callbacks.successfullHandle){
				
				data.callbacks.successfullHandle({fetch: ['Fetch','the','data',cpus]})

			}
		}
	}else{

	}

}
