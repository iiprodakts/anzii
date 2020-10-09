


export const init = function(){
  
  
	this.log('Config has been initialised') 
	console.log(this.config)
	this.configure() 

	
}


export const configure = function(){
	
	const self = this
	let config = self.config
	

	// console.log('THE VALUE OF CONFIG SELF.CONFIG')
	// console.log(self.config)


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

			console.log('THE LOGGER IS THE FIRST MODULE TO GET CONFIG')
			self.emit({
				
				type: `config-anziiloger`,
				data: self.config.logger
				
			})

		}

		self.enviroment()
		self.config.hasOwnProperty('cluster') 
			? (self.emit({type: 'config-system',data: self.config.cluster})) : '' 

		
		for(let c in config){
		
            console.log('The module in Config')
			console.log(c)

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

	console.log('THE CURRENT ENVIROMENT')
	// console.log(envObserver)
	
	if (supportsColor.stdout) {
		console.log('Terminal stdout supports color');
	}
	
	if (supportsColor.stdout.has256) {
		console.log('Terminal stdout supports 256 colors');
	}
	
	if (supportsColor.stderr.has16m) {
		console.log('Terminal stderr supports 16 million colors (truecolor)')
	}
	

	if(self.envObserver.has('enviroment')){

		if(self.aliases.hasOwnProperty(envObserver.enviroment)){

			self.env = self.aliases[envObserver.enviroment] 
			let envCofig = envObserver.get(self.env)

			if(envCofig.hasOwnProperty('database')){

				let clients = [] 
				let db = envCofig.database
				console.log('THE DB')
				console.log(db)

				for(let c in db){

					console.log('THE VALUE Of C')
					console.log(c)
					console.log(db[c])
					clients.push({

						name: c,
						connect: db[c].connect
					})
				}


				console.log('THE DATABASE CLIENTS')
				console.log(clients)
				self.emit({
				
					type: `config-dman`,
					data: {clients: clients}
					
				})
				
			}
			if(envObserver.has('appOrphic')){
				console.log('THE JWT appOrphic')
				console.log(envObserver)
				console.log(envObserver.appOrphic)
				console.log(envObserver.appOrphic.flaDev)
				self.emit({type: 'save-jwt-key',data:{key:envObserver.appOrphic['flaDev']}})
			}else{

				self.emit({type: 'save-jwt-key',data: {key:'f124sfet48tq3dfmlvoszx1'}})
			}

		}else{

			self.log('Enviroment config invalid, resorting to default','warn')

		}
	}
	// let db = self.envObserver.get('dev')
	// console.log(db)
	// console.log(db.database.mysql.connect.user)

}
