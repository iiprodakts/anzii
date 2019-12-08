

export const init = function(){
	
	  
	this.listens({

		 'config-dman' : this.handleConfigureDBMan.bind(this)
	}) 
	
	
  //   self.query('mysql',sql,process)
	
}

export const handleConfigureDBMan = function(data){
  
  const self = this 
  const pao = self.pao
  
  if(!pao.pa_isObject(data)){
	  
		self.log(`No Client database client specified,System will use default`,'warn')
	  
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
						self.emit({type:'dao-take-dbs',dbs:self.DBS})

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
	
	self.log(`System is getting a client driver`) 
	
	try{
		
		self.supportedClients[client.name].driver = require(client.name) 
		
		if(!self.supportedClients[client.name].driver){
			
			self.throwError('Failed to get client driver module')
		} 
		
		self.connect(client)
		
	}catch(e){
		
		
	}
	
}


export const connect = function(client){
  
	
	const self = this 
	
	self.log(`System is connecting to client: ${client.name}`) 
	
	try{
		
		 let sclient = self.supportedClients[client.name] 
		 
		 sclient.driver[sclient.connectMethod](options,(err,res)=>{
		 
			  if(err){
				  
			  }else{ 
			  
			  
			  	  self.DBS[client.name] = res
				  self.log("System has successfully connected to client") 
				  self.log(`Client ready to serve queries`)
				  
			  }
	  
	  	})


	}catch(e){
	}

}
		 
	