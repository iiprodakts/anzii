


export const init = function(){
  
  
  console.log('List has been initialised') 
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
				new  self.winlo.transports.File(
					
				
					{


					name: 'production',
					level: 'info', 
					filename: './logs/production.log',
					handleExceptions: true, 
					json: true,
					label: 'Anzilloger',
					maxsize: 5242880,
					maxFiles: 5,
					timestamp: now,
					colorize: false}
				  
				),
				new  self.winlo.transports.File(
					
				
					{


					name: 'errors',
					level: 'error', 
					filename: './logs/errors.log',
					handleExceptions: true, 
					json: true,
					label: 'Anzilloger',
					maxsize: 5242880,
					maxFiles: 5,
					timestamp: true,
					colorize: false}
				  
				),
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


export const info = function(log){
   
   
	const self = this 
	self.log('THE INFO METHOD RECEIVES A CALL')
	self.log(log)
	self.logger.info(`${log.source}: ${log.message}`)
   
} 



export const debug = function(log){
   
   
	const self = this 
	self.logger.debug(`${log.source}: ${log.message}`)
   
} 




export const warn = function(log){
   
   
	const self = this 
	self.logger.warn(`${log.source}: ${log.message}`)
   
}


export const error = function(log){
   
   
	const self = this 
	self.logger.error(`${log.source}: ${log.message}`)
   
}

