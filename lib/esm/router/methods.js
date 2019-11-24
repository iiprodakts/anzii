


export const init = function(){
  
  
  console.log('Router has been initialised') 

	this.listens({
		
		'add-routes': this.handleAddRoutes.bind(this),
	  
  })
	
	
	
}


export const handleAddRoutes = function(data){

	this.addRoutes(data)

	
} 

export const addRoutes = function(data){

	
	
	const self = this
	const pao = self.pao
	console.log('ABOUT TO ADD PARSERS')

	

	
	
	
} 

