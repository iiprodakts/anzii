

export const init = function(){
	
	this.log('Dman has been initialised')
	this.listens({

		 'config-dman' : this.handleConfigureDBMan.bind(this)
	}) 
	
	
  //   self.query('mysql',sql,process)
	
}

export const handleConfigureDBMan = function(data){
  
  const self = this 
  const pao = self.pao
  console.log('THE DBMAN HANLDECONFIGURE') 
  console.log('THE SUPPORTED CLIENTS')
  console.log(self.supportedClients)
  
  if(!pao.pa_isObject(data)){
	  
		self.log(`No Client database client specified,System will use default`,'warn');
	  
  }else{
	  
	   if(!pao.pa_contains(data,'clients')){
		   
			self.error('System requires clients property with valid config to interface with database clients')
		   
	   }else{
		   
			 if(!pao.pa_isArray(data.clients)){
			 
			 }else{
			 
			   let supported = self.supportedClients 
			   
			   try{
				   
					data.clients.forEach((c,i)=>{
						
						
						  if(!pao.pa_contains(supported,c.name)){
							  
							   self.throwError(`Client: "${c.name} is not supported by the system"`)
							  
						  }else{
							  
							  self.connectToClient(c)
							   
							  
						  }
						
					})

					if(self.DBS.length > 0){

						self.log(`Sending databases to the dao`)
						self.emit({type:'dao-take-dbs',data: {dbs:self.DBS}})

					}
					
				   
			   }catch(e){
				   
				   
			   }
				 
				 
				 
			 }
		   
		   
	   }
	  
  }
  
}

export const connectToClient = function(client){
  
	const self = this 
	
	self.log(`System is about to connect to client: ${client.name}`) 
	self.getClientDriver(client) 
	self.supportedClients[client.name].connect(client)
	
} 


export const getClientDriver = function(client){
  
	
	const self = this 
	
	console.log(`System is getting a client driver`)
	console.log('THE OTHER DETAILS BELOW') 
	console.log(client.name)
	console.log(client.name === 'mysql')
	
	try{
		
		switch(client.name){

			case 'mysql': self.supportedClients[client.name].driver = require('mysql') 
			break;
			case 'pg': self.supportedClients[client.name].driver = require('pg') 
			break;
			case 'redis': self.supportedClients[client.name].driver = require('redis') 
			break;
			case 'mongo': self.supportedClients[client.name].driver = require('mongo') 
			break;
			default: self.supportedClients[client.name].driver = require('sqlite') 
			break;
		}
	
		
		if(!self.supportedClients[client.name].driver){
			
			console.log('THE DRIVER REQUIREMENT FAILED')
			self.throwError('Failed to get client driver module')
		} 
		
		self.connect(client)
		
	}catch(e){
		
		console.log('THE DRIVER CONNECT ERROR')
		console.log(e.stack)
		
	}
	
}


export const connect = function(client){
  
	
	const self = this 
	
	self.log(`System is connecting to client: ${client.name}`) 
	
	try{
		
		 let sclient = self.supportedClients[client.name] 
		 let opts = {host: client.connect.host,user: client.connect.user,password: client.connect.pass, database: client.connect.name}
		let res = sclient.driver[sclient.connectMethod](opts,(err,res)=>{
		 
			  if(err){

				console.log('THE ACTUAL CONNECTION ERROR')
				console.log(err.stack)
				  
			  }else{ 
			  
			  
			  	  self.DBS[client.name] = res
				  self.log("System has successfully connected to client") 
				  self.log(`Client ready to serve queries`)
				  
			  }
	  
		  }) 
		  
		//   console.log(res)
		  res.connect(function(e){

			if(e){

				throw new Error(e)
			}else{

				self.DBS[client.name] = res
				self.log("System has successfully connected to client") 
				self.log(`Client ready to serve queries`)
			}

		  })

		//   console.log('THE RESULTS')
		//   res.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
		// 	if (error) throw error;
		// 	console.log('THE CONNECTION TO THE DATABASE')
		// 	console.log('The solution is: ', results[0].solution);
		//   });
		//   res.query()


	}catch(e){

		console.log('THE CONNECTION EROR')
		console.log(e.stack)
	}

}
		 
	