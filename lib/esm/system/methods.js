


export const init = function(){
  
  
	this.log('System has been initialised') 
	this.listens({
		'config-system': this.handleConfigureSystem.bind(this),
		'register-shutdown-candidate': this.handleRegisterShutDownCandidate.bind(this),
		'attach-workers-to-server': this.handleServerAttachWorkers.bind(this)
	})
	// console.log(this.env)


	
}


export const handleConfigureSystem = function(data){
	
	const self = this 

	self.log(`System ENVIROMENT IS: ${self.env}`)
	self.handleShutDowns()
	self.clusterCustomConfig = data
	// self.masterWorker(data)



}

export const shutDown = function(type,code){

	const self = this 

	self.log(`SHUTDOWN TYPE: ${type},code: ${code}`)
	
	self.systemIsShuttingDown = true
	
	if(self.shutDownServices.length > 0){

		self.shutDownServices.forEach((sd,i) => {
			
			if(typeof sd !== 'function'){

				self.log(`Service: ${self.shutDownOrder[i]} must be a function,shutdown attempt failed`,'warn')
			}else{

				self.log(`Service: ${self.shutDownOrder[i]} is shutting down`,'info')
			}
			
		});
	}

	self.log(`System is shutting down through: ${type},with code: ${code.stack}`)
	type === 'uncaughtException' ? self.context.kill(1) : self.context[type]()

}

export const masterWorker = function(app){

	const self = this 



     self.log(`THE STATUS OF isMaster: ${self.cluster.isMaster}`)
	if(self.cluster.isMaster){

		self.log(`Master ${self.context.pid} is running`)

		if(self.clusterCustomConfig.spawn){

			let slaves = self.clusterCustomConfig.workers ? self.clusterCustomConfig.workers : 'auto'
	   
			if(slaves === 'auto'){
	   
			   slaves = self.os.cpus().length 
	   
			   for(let s = 0; slaves < slaves; s++){
	   
				   self.cluster.fork()
			   }
	   
			}else{
	   
			   if(typeof slaves === 'number'){
	   
				   for(let s = 0; s < slaves; s++){
	   
					   self.log(`Forking slave number: ${s}`)
					   self.cluster.fork()
				   }
			   }
			}
	   
		}else{
	   
		   self.log('System is running on a single thread/core')
		} 
		// app.listen(self.context.env.PORT || 3000,()=>{
	
		// 	self.log("The Server is listening via workers",'info')
		  
		//   })

		self.cluster.on('exit', (worker, code, signal) => {
			console.log(`worker ${worker.process.pid} died`);
		  });

	}else{

		console.log('IT IS NOT THE MASTER PROCESS')
		console.log(`Worker ${process.pid} started`)

		app.listen(self.context.env.PORT || 3000,()=>{
	
			self.log("The Server is listening via workers",'info')
		  
		  })




	}
  
	 
}

export const folkSlaveWorkers = function(mainWorker){

}

export const handleShutDowns = function(){

	 console.log('Shutdowns are being handled')
	 const self = this 

	 self.context.on('INT',function(code){

		if(!self.systemIsShuttingDown){

			self.shutDown('kill',code)

		}else{

			self.log('System is already ShuttingDown')
		}

	 })
	 self.context.on('SIGTEM',function(code){

		if(!self.systemIsShuttingDown){

		
			self.shutDown('exit',code)

		}else{

			self.log('System is already ShuttingDown')
		}

	 })

	 self.context.on('uncaughtException',function(code){

		if(!self.systemIsShuttingDown){

			
			self.shutDown('uncaughtException',code)

		}else{

			self.log('System is already ShuttingDown')
		}

	 })

	 self.context.on('unhandledRejection',function(code){
		
		console.log('uncaughtException occured from unhandleredjected',code.stack)
		if(!self.systemIsShuttingDown){

			
			self.shutDown('uncaughtException',code)

		}else{

			self.log('System is already ShuttingDown')
		}

	 })
	
}

export const handleServerAttachWorkers = function(data){

	const self = this 
	self.masterWorker(data.app)
}


export const handleRegisterShutDownCandidate = function(data){

	

	const self = this

	if((data.hasOwnProperty('candidate') && pao.pa_isFunction(data.candidate)) && data.hasOwnProperty('name') && pao.pa_isString(name)){

      if(!(self.shutDownServices.indexOf(data.name) > -1)){

		 self.shutDownServices.push(data.candidate)
		 self.shutDownOrder.push(data.name)
	  }


	}else{

		self.log('Candidate could not be registered for shutdown','warn')
	}
}


