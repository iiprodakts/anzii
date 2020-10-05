


export const init = function(){
  
  
  this.setDebugger(this.constructor.name) 
//   this.handleAnziilogerConfig()
  console.log('Anziiloger has been initialised') 

  this.listens({
		
	'config-anziiloger': this.handleAnziilogerConfig.bind(this),
	'anziiloger-log': this.handleLogRequest.bind(this)
  
  })

	
}

export const handleLogRequest = function(data){

	const self = this 


	if(self.logger){

		switch(data.type){

			case 'info': self.info(data)
			break
			case 'warn': self.warn(data)
			break 
			case 'error': self.error(data)
			default: self.debug(data)
		}

	}else{

		console.log(data.source,'logged message: ',data.message,' of type ',data.type)

	}
	
	

}

export const handleAnziilogerConfig = function(data){
	
	const self = this 
	// console.log('THE DEUGAS')
	// console.log(self.debugas)
	const pao = self.pao
	
	// console.log('ANZII LOGGER IS CATCHING AN EVENT FROM CONFIG')
	// console.log(data)
	// data.hasOwnProperty('transports')
	//   ? pao.pa_isArray(data.transports) 
	// 	 ? self.defaultTransports.concat(data.transports)
	// 	 : console.log('Config: invalid def..  ')
	//   :''

	
	let now = new Date()
	self.logger = new self.winlo.createLogger({
		
		 transports: [ 
				// new  self.winlo.transports.File(
					
				
				// 	{


				// 	name: 'production',
				// 	level: 'info', 
				// 	filename: './logs/production.log',
				// 	handleExceptions: true, 
				// 	json: true,
				// 	label: 'Anzilloger',
				// 	maxsize: 5242880,
				// 	maxFiles: 5,
				// 	timestamp: now,
				// 	colorize: false}
				  
				// ),
				// new  self.winlo.transports.File(
					
				
				// 	{


				// 	name: 'errors',
				// 	level: 'error', 
				// 	filename: './logs/errors.log',
				// 	handleExceptions: true, 
				// 	json: true,
				// 	label: 'Anzilloger',
				// 	maxsize: 5242880,
				// 	maxFiles: 5,
				// 	timestamp: true,
				// 	colorize: false}
				  
				// ),
				new  self.winlo.transports.Console(
					
				
					{


					
					level: 'debug', 
					label: 'Anzilloger',
					timestamp: true,
					colorize: true
				}
				  
				)

			 
		 ]
		
	})

	
   
}



export const info = async function(log){
   
   
	const self = this 
	const pao = self.pao 
	const contains = pao.pa_contains 
	
	if(contains(log,'sync')){
		await self.logger.info(`${log.source}: ${log.message}`)
	}else{
		
		self.logger.info(`${log.source}: ${log.message}`)
	}
	// self.log('THE INFO METHOD RECEIVES A CALL')
	// self.log(log) 
	
	
   
} 



export const debug = async function(log){
   
   const self = this 
	const pao = self.pao 
	const contains = pao.pa_contains 
	
	if(contains(log,'sync')){ 
	
		
	if(self.debugas.hasOwnProperty(log.source.toLowerCase())){

		// console.log('THE DEBUG MODULE IS USED')
		// console.log(self.debugas)
		await self.debugas[log.source.toLowerCase()](log.message)
	}else{

		await self.logger.debug(`${log.source}: ${log.message}`)

	}
	
		
	}else{
		
		
	if(self.debugas.hasOwnProperty(log.source.toLowerCase())){

		// console.log('THE DEBUG MODULE IS USED')
		// console.log(self.debugas)
		self.debugas[log.source.toLowerCase()](log.message)
	}else{

		self.logger.debug(`${log.source}: ${log.message}`)

	}
	
	}
	
   
} 




export const warn = async function(log){
   
   
	//const self = this 
	//self.logger.warn(`${log.source}: ${log.message}`)
   
   const self = this 
	const pao = self.pao 
	const contains = pao.pa_contains 
	
	if(contains(log,'sync')){
		await self.logger.warn(`${log.source}: ${log.message}`)
	}else{
		
		self.logger.warn(`${log.source}: ${log.message}`)
	}

}


export const error = async function(log){
   
   
	//const self = this 
	//self.logger.error(`${log.source}: ${log.message}`)  
	
	
   	const self = this 
	const pao = self.pao 
	const contains = pao.pa_contains 
	
	if(contains(log,'sync')){
		await self.logger.error(`${log.source}: ${log.message}`)
	}else{
		
		self.logger.error(`${log.source}: ${log.message}`)
	}

}

export const setDebugger = async function(mod){

	const self = this 
	let name = mod.toLowerCase() 
	// console.log('THE CURRETN MODULE IN ANZILOGGER')
	// console.log(mod)
	self.debugas[name] = self.debugr(`anzii:${name}`)
}


