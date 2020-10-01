


export const init = function(){
  
  
	this.log('System has been initialised') 
	this.listens({
		'config-system': this.handleConfigureSystem.bind(this),
		'register-shutdown-candidate': this.handleRegisterShutDownCandidate.bind(this),
		'distribute-system-resources': this.handleDistributeSystemResources.bind(this),
		'attach-workers-to-server': this.handleServerAttachWorkers.bind(this)
	})
	// console.log(this.env)


	
}


export const handleConfigureSystem = function(data){
	
	const self = this 

	self.log(`System ENVIROMENT IS: ${self.env}`)
	// self.log(cwd)
	// self.log(path.sep)
	// self.log(path.sep+'includes')
	// self.log(cwd.substr(0, cwd.indexOf(path.sep+'includes')) >= 0)
	self.log(self.systemBase.DOCUMENT_ROOT)
	self.handleShutDowns()
	self.clusterCustomConfig = data
	// self.masterWorker(data)



}

export const handleDistributeSystemResources = async function(data){
	
	const self = this 
	const pao = self.pao
	const getFiles = pao.pa_getFiles
	const getDirs = pao.pa_getDirectories
	const getFile = pao.pa_getFile 
	const makeDirs = pao.pa_makeDirs
	const getExtension = pao.pa_getExtension
	const path = self.path
	let dirPath = `${self.systemBase.DOCUMENT_ROOT}`
	let filePath = `${self.systemBase.DOCUMENT_ROOT}${path.sep}sev.js`
	let createPath = `${self.systemBase.DOCUMENT_ROOT}${path.sep}`
	// const path = self.path
	// const cwd = process.cwd()

	// self.log(cwd)
	// self.log(path.sep)
	// self.log(path.sep+'includes')
	// self.log(cwd.substr(0, cwd.indexOf(path.sep+'includes')) >= 0)
	self.log('HandleDistributeSystemResources ')
	// let files = await getFiles(dirPath,{recursive: false},'sev.js') 
	// let dirs = await getDirs(dirPath) 
	// let file = await getFile(filePath)
	let status = await makeDirs(createPath)
	let ext = getExtension('sev.js')
	

	console.log('GET FILES CALLBACK GETS A CALL')
	// console.log(files)
	// console.log(dirs)
	// console.log(file)
	console.log(ext)
	 console.log(status)		
	self.emit({type: 'take-system-base',data: {systemBase: self.systemBase}})
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

		if(self.clusterCustomConfig && self.clusterCustomConfig.spawn){

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

			self.cluster.on('fork', (worker) => {
				self.log("cluster forking new worker", worker.id);
			});
	
			let mainWorkerId = null;
	
			self.cluster.on('listening', (worker, address) => {
				self.log("cluster listening new worker", worker.id);
				if(null === mainWorkerId) {
					self.log("Making worker " + worker.id + " to main worker");
					mainWorkerId = worker.id;
					worker.send({singleProcessTasks: "startSingleProcessTasks"});
				}
			});
	
			self.cluster.on('exit', (worker, code, signal) => {
				self.log(`worker ${worker.process.pid} died`);
				console.log('FORKING ANOTHER WORK')
	
				console.log('Worker %d died :(', worker.id);
	
				if(worker.id === mainWorkerId) {
					console.log("Main Worker is dead...");
					mainWorkerId = null;
				}
	
				console.trace("I am here");
				self.log(worker);
				self.log(code);
				self.log(signal);
				self.cluster.fork();
					// self.cluster.fork()
				});
			
	   
		}else{
	   
		   self.logSync('System is running on a single thread/core') 

		   app.listen(self.context.env.PORT || 3000,()=>{
	
			self.logSync("The Server is listening via workers",'info')
			self.logSync("THIS WORKER RUNNING IP:")
		  
		  })

		//   process.on('message', function(message) {
		// 	self.log('Worker ' + process.pid + ' received message from master.', message);
		// 	if(message.singleProcessTasks == "startSingleProcessTasks") {
		// 		self.emit({type:'start-single-process-tasks',data:''})
		// 	}
		// });

		   
		} 
		
		

	}else{

		// console.log('IT IS NOT THE MASTER PROCESS')
		console.log(`Worker ${process.pid} started`)

		app.listen(self.context.env.PORT || 3000,()=>{
	
			self.log("The Server is listening via workers",'info')
			self.log("THIS WORKER RUNNING IP:")
		  
		  })

		  process.on('message', function(message) {
			self.log('Worker ' + process.pid + ' received message from master.', message);
			if(message.singleProcessTasks == "startSingleProcessTasks") {
				self.emit({type:'start-single-process-tasks',data:''})
			}
		});


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


