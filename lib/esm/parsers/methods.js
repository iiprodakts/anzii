


export const init = function(){
  
  
  console.log('Parsers has been initialised') 
  this.listens()
	
	
	
}

export const listens = function(){
	
  var pao = this.pao 
  
  
	pao.pa_notifyListen({
		
		  'add-parsers': this.handleAddParsers.bind(this),
		
	},pao.moduleMeta.moduleId,pao.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
	
	var pao = this.pao 
	console.log('tHE EVENT EMITTED BY SERVEER')
	console.log(eNotifs)

	pao.pa_notifyEvent({
	
		type: eNotifs.type,
		data: eNotifs.data

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

