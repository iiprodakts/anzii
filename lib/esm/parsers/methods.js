


export const init = function(){
  
  
  console.log('Parsers has been initialised') 
  this.listens({
		
	'add-parsers': this.handleAddParsers.bind(this),
  
})
	
	
	
}


export const handleAddParsers = function(data){

	this.addParsers(data)

	
} 

export const addParsers = function(data){

	
	
	const self = this
	const pao = self.pao
	console.log('ABOUT TO ADD PARSERS')

	

	
	
	
} 

