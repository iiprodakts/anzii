


export const init = function(){
  
  
	console.log('Config has been initialised') 
	this.configure()

	
}


export const configure = function(){
	
	const self = this
	let config = self.config

	console.log('THE VALUE OF CONFIG SELF.CONFIG')
	console.log(self.config)

	if(self.config){

		
		for(let c in config){
		

			console.log(c)

			if(c === 'logger'){

				self.emit({
				
					type: `config-anziiloger`,
					data: config[c]
					
				})

			
			}else{

				self.emit({
					
					type: `config-${c}`,
					data: config[c]
					
				}) 

				
			}
		
		}

	
	}
	

}
