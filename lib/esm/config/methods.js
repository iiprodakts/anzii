


export const init = function(){
  
  
	this.log('Config has been initialised') 
	this.configure()

	
}


export const configure = function(){
	
	const self = this
	let config = self.config

	// console.log('THE VALUE OF CONFIG SELF.CONFIG')
	// console.log(self.config)

	if(self.config){

		if(self.config.hasOwnProperty('logger')){

			console.log('THE LOGGER IS THE FIRST MODULE TO GET CONFIG')
			self.emit({
				
				type: `config-anziiloger`,
				data: self.config.logger
				
			})

		}
		
		self.config.hasOwnProperty('cluster') ? self.emit({type: 'config-system',data: self.config.cluster}) : ''
		
		for(let c in config){
		

			console.log(c)

			if(c !== 'logger'){

				self.emit({
					
					type: `config-${c}`,
					data: config[c]
					
				}) 

			
			}
		
		}

	
	}
	

}
