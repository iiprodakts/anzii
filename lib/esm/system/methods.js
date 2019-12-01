


export const init = function(){
  
  
	this.log('System has been initialised') 
	this.listens({
		'configure-system': this.handleConfigureSystem.bind(this)
	})
	this.log(this.env)


	
}


export const handleConfigureSystem = function(){
	
	const self = this 

	self.handleShutDowns()


}

export const shutDown = function(){

}

export const masterWorker = function(){

}

export const folkSlaveWorkers = function(mainWorker){

}

export const handleShutDowns = function(){

	 const self = this 

	 self.context.on('INT',function(){

	 })
	 self.context.on('SIGTEM',function(){

	 })

	 self.context.on('uncaughtException',function(){

	 })
	
}


