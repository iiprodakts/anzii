


export const init = function(){
  

	this.adLog('Config has been initialised') 
	this.setLogNamespaces()
    this.getConfigFile()
	this.configure() 
	

	
}

export const setLogNamespaces = function(){

	const self = this 
	let defaultDebugNamespaces = "anzii:system,anzii:server, anzii:request,anzii:router,anzii:server "

	if(!process.env.Debug) return process.env.Debug= defaultDebugNamespaces 
	

}

export const getConfigFile = function(){

	const self = this
	try {

		
	
		self.config = this.pao.pa_loadFile('./.config.js')
		// console.log(self.config)
		
	} catch (error) {
	
		 console.log('THE .CONFIG ERROR')
		 console.log(error)
		self.warn('THE .config.js CONFIGURATION_FILE_WAS_NOT_FOUND_IN_THE_ROOT')
		self.warn('Anzii will use defaults')
		self.config = null

	}


}


export const configure = function(){
	
	const self = this
	let config = self.config
	

	// self.pao.pa_wiLog('THE VALUE OF CONFIG SELF.CONFIG')
	// self.pao.pa_wiLog(self.config)


	if(!self.config){


		self.emit({
				
			type: `config-anziiloger`,
			data: {level: 'info'}
			
		})

		self.emit({type: 'config-system',data: {workers: 1, spawn: true}})

		self.emit({
				
			type: `config-server`,
			data: `server`
			
		})
		
		return 
	}

	if(self.config){

		if(self.config.hasOwnProperty('logger')){

			// self.pao.pa_wiLog('THE LOGGER IS THE FIRST MODULE TO GET CONFIG')
			self.emit({
				
				type: `config-anziiloger`,
				data: self.config.logger
				
			})

		}

		self.enviroment()
		self.config.hasOwnProperty('cluster') 
			? (self.emit({type: 'config-system',data: self.config.cluster})) : '' 

		
		for(let c in config){
		
            // self.pao.pa_wiLog('The module in Config')
			// self.pao.pa_wiLog(c)

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

	// self.pao.pa_wiLog('THE CURRENT ENVIROMENT')
	// self.pao.pa_wiLog(envObserver)
	
	// if (supportsColor.stdout) {
	// 	self.pao.pa_wiLog('Terminal stdout supports color');
	// }
	
	// if (supportsColor.stdout.has256) {
	// 	self.pao.pa_wiLog('Terminal stdout supports 256 colors');
	// }
	
	// if (supportsColor.stderr.has16m) {
	// 	self.pao.pa_wiLog('Terminal stderr supports 16 million colors (truecolor)')
	// }
	

	if(self.envObserver.has('enviroment')){

		if(self.aliases.hasOwnProperty(envObserver.enviroment)){

			self.env = self.aliases[envObserver.enviroment] 
			let envCofig = envObserver.get(self.env)

			if(envCofig.hasOwnProperty('database')){

				let clients = [] 
				let db = envCofig.database
				// self.pao.pa_wiLog('THE DB')
				// self.pao.pa_wiLog(db)

				for(let c in db){

					// self.pao.pa_wiLog('THE VALUE Of C')
					// self.pao.pa_wiLog(c)
					// self.pao.pa_wiLog(db[c])
					clients.push({

						name: c,
						connect: db[c].connect
					})
				}


				// self.pao.pa_wiLog('THE DATABASE CLIENTS')
				// self.pao.pa_wiLog(clients)
				self.emit({
				
					type: `config-dman`,
					data: {clients: clients}
					
				})

				self.emit({
				
					type: `config-backupr`,
					data: {clients: clients}
					
				})
			
				
			}
			if(envObserver.has('appOrphic')){
				// self.pao.pa_wiLog('THE JWT appOrphic')
				// self.pao.pa_wiLog(envObserver)
				// self.pao.pa_wiLog(envObserver.appOrphic)
				// self.pao.pa_wiLog(envObserver.appOrphic.flaDev)
				self.emit({type: 'save-jwt-key',data:{key:envObserver.appOrphic['flaDev']}})
			}else{

				self.emit({type: 'save-jwt-key',data: {key:'f124sfet48tq3dfmlvoszx1'}})
			}

		}else{

			self.log('Enviroment config invalid, resorting to default','warn')

		}
	}
	// let db = self.envObserver.get('dev')
	// self.pao.pa_wiLog(db)
	// self.pao.pa_wiLog(db.database.mysql.connect.user)

}
