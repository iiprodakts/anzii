


export const init = function(){
  
  
  console.log('List has been initialised') 
  this.listens({
		
	'handle-list-task': this.handleListTask.bind(this)
  
  })

	
}


export const handleListTask = function(data){

	
	const self = this 
    self.list(data)

} 


export const list = function(data){
	
	
	const self = this 
	let pao = self.pao

	self.log('LIST DATA')
	self.log(data)
	if(data.hasOwnProperty('callback')){

	
				
		data.callback(null,{todo:{list:{items:['I ate food','I wrote code','I read a book','I watched a movie']}}})

		
	}else{

	}

}
