


export const init = function(){
  
    this.getConfigFile()
	this.configure() 

	
}

export const getConfigFile = function(){

	const self = this
	try {

		
	
		self.config = this.pao.pa_loadFile('./.config.js')
		// console.log(self.config)
		
	} catch (error) {
	
	
		self.log('THE .config.js CONFIGURATION_FILE_WAS_NOT_FOUND_IN_THE_ROOT')
		self.log('Anzii will use defaults')
		self.config = null

	}


}


export const configure = function(){
	
	const self = this
	let config = self.config
	

	// self.logSync('THE VALUE OF CONFIG SELF.CONFIG')
	// self.logSync(self.config)


	if(!self.config){


		self.emit({
				
			type: `config-anziiloger`,
			data: {level: 'info'}
			
		})

		self.emit({
				
			type: `config-server`,
			data: `server`
			
		})
		
		return 
	}

	if(self.config){

		if(self.config.hasOwnProperty('logger')){

			self.logSync('THE LOGGER IS THE FIRST MODULE TO GET CONFIG')
			self.emit({
				
				type: `config-anziiloger`,
				data: self.config.logger
				
			})

		}

		self.enviroment()
		self.config.hasOwnProperty('cluster') 
			? (self.emit({type: 'config-system',data: self.config.cluster})) : '' 

		
		for(let c in config){
		
            self.logSync('The module in Config')
			self.logSync(c)

			c === 'router'
				? config.views 
					? (self.emit({type:'config-request',data: config[c]}),self.emit({type:'config-view',data:{routes: config[c],handlers: config.views} })) 
					: (self.emit({type:'config-request',data: config[c]}),self.emit({type:'config-view',data: config[c]}))
				:''
			

			if(c !== 'logger' || c !== 'views'){

				
				

				self.emit({
					
					type: `config-${c}`,
					data: config[c]
					
				}) 

				c === 'domain'
					? (self.emit({type:'config-domain-resources',data: ''}))
					:''

				

			
			}
		
		}

	
	}

	


	

}

export const enviroment = function(){

	const self = this
	let envObserver = self.envObserver
	let supportsColor = self.supportsColor

	self.logSync('THE CURRENT ENVIROMENT')
	// self.logSync(envObserver)
	
	if (supportsColor.stdout) {
		self.logSync('Terminal stdout supports color');
	}
	
	if (supportsColor.stdout.has256) {
		self.logSync('Terminal stdout supports 256 colors');
	}
	
	if (supportsColor.stderr.has16m) {
		self.logSync('Terminal stderr supports 16 million colors (truecolor)')
	}
	

	if(self.envObserver.has('enviroment')){

		if(self.aliases.hasOwnProperty(envObserver.enviroment)){

			self.env = self.aliases[envObserver.enviroment] 
			let envCofig = envObserver.get(self.env)

			if(envCofig.hasOwnProperty('database')){

				let clients = [] 
				let db = envCofig.database
				self.logSync('THE DB')
				self.logSync(db)

				for(let c in db){

					self.logSync('THE VALUE Of C')
					self.logSync(c)
					self.logSync(db[c])
					clients.push({

						name: c,
						connect: db[c].connect
					})
				}


				self.logSync('THE DATABASE CLIENTS')
				self.logSync(clients)
				self.emit({
				
					type: `config-dman`,
					data: {clients: clients}
					
				})
				
			}
			if(envObserver.has('appOrphic')){
				self.logSync('THE JWT appOrphic')
				self.logSync(envObserver)
				self.logSync(envObserver.appOrphic)
				self.logSync(envObserver.appOrphic.flaDev)
				self.emit({type: 'save-jwt-key',data:{key:envObserver.appOrphic['flaDev']}})
			}else{

				self.emit({type: 'save-jwt-key',data: {key:'f124sfet48tq3dfmlvoszx1'}})
			}

		}else{

			self.log('Enviroment config invalid, resorting to default','warn')

		}
	}
	// let db = self.envObserver.get('dev')
	// self.logSync(db)
	// self.logSync(db.database.mysql.connect.user)

}
