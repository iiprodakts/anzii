


export const init = function(){
  
  
  console.log('List has been initialised') 
  this.listens({
		
	'list-handle-task': this.handleListTask.bind(this)
  
  })

	
}


export const handleListTask = function(data){

	
	const self = this 
    self.list(data)

} 


export const list = function(data){
	
	console.log('LIST DATA')
	console.log(data)
	const self = this 
	let pao = self.pao
	if(data.hasOwnProperty('callbacks')){

		if(pao.pa_isObject(data.callbacks)){

			if(data.callbacks.successfullHandle){
				
				data.callbacks.successfullHandle({todo:{list:{items:['I ate food','I wrote code','I read a book','I watched a movie']}}})

			}
		}
	}else{

	}

}
