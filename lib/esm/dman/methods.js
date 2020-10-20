

export const init = function(){
	
	this.logSync('Dman has been initialised')
	this.listens({

		 'config-dman' : this.handleConfigureDBMan.bind(this)
	}) 
	
	
  //   self.query('mysql',sql,process)
	
}

export const handleConfigureDBMan = function(data){
  
  const self = this 
  const pao = self.pao
//   self.logSync('THE DBMAN HANLDECONFIGURE') 
//   self.logSync('THE SUPPORTED CLIENTS')
//   self.logSync(self.supportedClients)
  
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
							  
							  self.logSync('THE SYSTEM IS ABOUT TO CONNECT TO THE THE SERVER')
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
	// self.supportedClients[client.name].connect(client)
	
} 


export const getClientDriver = function(client){
  
	
	const self = this 
	
	self.logSync(`System is getting a client driver`)
	self.logSync('THE OTHER DETAILS BELOW') 
	self.logSync(client.name)
	self.logSync(client.name === 'mysql')
	
	try{
		
        let name = client.name
		if(name === 'mysql'){

			self.supportedClients[client.name].driver = require('mysql')}
		// }else if(name === 'pg'){

		// 	self.supportedClients[client.name].driver = require('pg')

		// }else if(name === 'redis'){

		// 	self.supportedClients[client.name].driver = require('redis') 

		// }else if(name === 'mongo'){

		// 	self.supportedClients[client.name].driver = require('mongo') 
		// }else{

		// 	self.supportedClients[client.name].driver = require('sqlite') 

		// }

		
		// switch(client.name){

		// 	case 'mysql': self.supportedClients[client.name].driver = require('mysql') 
		// 	break;
		// 	case 'pg': self.supportedClients[client.name].driver = require('pg') 
		// 	break;
		// 	case 'redis': self.supportedClients[client.name].driver = require('redis') 
		// 	break;
		// 	case 'mongo': self.supportedClients[client.name].driver = require('mongo') 
		// 	break;
		// 	default: self.supportedClients[client.name].driver = require('sqlite') 
		// 	break;
		// }
	
		
		if(!self.supportedClients[client.name].driver){
			
			self.logSync('THE DRIVER REQUIREMENT FAILED')
			self.throwError('Failed to get client driver module')
		} 
		
		self.connect(client)
		
	}catch(e){
		
		self.logSync('THE DRIVER CONNECT ERROR')
		self.logSync(e.stack)
		
	}
	
}


export const connect = function(client){
  
	
	const self = this 
	
	self.logSync(`System is connecting to client: ${client.name}`) 
	
	try{
		
		 let sclient = self.supportedClients[client.name] 
		 let opts = {host: client.connect.host,user: client.connect.user,password: client.connect.pass, database: client.connect.name}
		let res = sclient.driver[sclient.connectMethod](opts,(err,res)=>{
		 
			  if(err){

				self.logSync('THE ACTUAL CONNECTION ERROR')
				self.logSync(err.stack)
				  
			  }else{ 
			  
			  
			  	  self.DBS[client.name] = res
				  self.log("System has successfully connected to client") 
				  self.log(`Client ready to serve queries`)
				  
			  }
	  
		  }) 
		  
		//   self.logSync(res)
		  res.connect(function(e){

			if(e){

				self.logSync('THE SYSTEM HAS FAILED TO CONNECT TO THE DATABASE, please refer to the error below:')
				self.logSync(e.message)
				throw new Error(e)
			}else{

				self.DBS[client.name] = res
				self.log("System has successfully connected to client") 
				self.log("System is handing client connection") 
				self.emit({type: 'dao-take-dbs',data:{vendor: client.name,conn: res}}) 
				self.log(`Client ready to serve queries`)

			}

		  })

		//   self.logSync('THE RESULTS')
		//   res.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
		// 	if (error) throw error;
		// 	self.logSync('THE CONNECTION TO THE DATABASE')
		// 	self.logSync('The solution is: ', results[0].solution);
		//   });
		//   res.query()


	}catch(e){

		self.logSync('THE CONNECTION EROR')
		self.logSync(e.stack)
	}

}
		 
	