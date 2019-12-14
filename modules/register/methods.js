

export const init = function(){
  
  
  console.log('Register has been initialised')
	this.listens({
		
		'handle-register-task': this.handleRegisterTask.bind(this),
	})
	
	
	
}


export const handleRegisterTask= function(data){

 
	const self = this 
	self.log("Handling Registration task")
	self.log(data)
	
	self.registerStrategy(data)

} 


export const registerStrategy = function(data){

 
	const self = this 
	const pao = self.pao 
	let user = data.user.parsed.user
	
	if(!pao.pa_contains(user,'strategy')){
		
		data.callback('Missing required Strategy',null)
		
	}else{
		
		if(!pao.pa_contains(self.strategies,user.strategy)){
			
			  data.callback('Specified strategy not supported')
		
		}else{
			
			console.log('STRATEGY: CURRENT')
			console.log(user.strategy)
			self.tmpd = data
			self[user.strategy](data)
		}
		
	}
	
	


} 


export const anzii = function(data){

 
	const self = this
	const pao = self.pao 
	self.log("Executing Anzii registration strategy")

  if(!pao.pa_contains(data,'user')){
	  
	
  }else{
  	let user =  data.user.parsed.user
  	if(!(pao.pa_contains(user,['email','password']))){
		  
		data.callback({message: 'missing required keys for registration'})
  		
  	}else{
  		
  		 if(!pao.pa_isValidEmail(user.email) || !pao.pa_isValidPassword(user.password)){ 
  		 
  		  data.callback({message: 'either password or email is invalid'})
  		 	
  		 }else{
			   
			self.isUserExist(data)
  		 	
  		 }
  		
  	}
  	
  }



 

} 


export const social = function(data){

	  const self = this 
	  self.log('Executing Social registration strategy')
	  
	  

} 


export const isUserExist  = function(data){

	  const self = this 
	  let user =  data.user.parsed.user
	  self.log('Checking if user is taken') 
	  self.callback = data.callback
	  self.query(
	      'mysql.f_users.findOne',
			{user: user.email},
			self.findHandler.bind(this)
	  )
	  
	 
	  
}

export const isCallback = function(data,over=null){
	
	  
	if(!data.hasOwnProperty('callback')){
			
			 self.log('Task handle request me failed','warn') 
			 
			 self.emit({
			 	type: 'request-task-handle-failed',
			 	data: {message: 'failed'}
			 })
			 
			
		}else{
			
			if(over){
			
			 data.callback(over)
				
			}else{
				
				data.callback()
			}
			
			
		}
}

export const processResults = function(e,r){
	
	
	
	
}


export const setTokenHeader = function(e=null,token=null){

	const self = this 
	const pao = self.pao 

	if(e){

		console.log('TOKEN CREATION FAILED')
		console.log(e)
		self.callback(e)

	}else{

		console.log('TOKEN CREATION SUCCESSFULL')
		console.log('SETTING TOKEN HEADER')
		console.log(self.tmpd)
		self.tmpd.user.request.res.set('X-AUTH-TOKEN',token.token) 
		self.callback(null,{user: token.user})

	}
	
}

export const insertHandler = function(e =null,r = null){

	const self = this 
	const pao = self.pao 


	if(e){

		self.callback(e,null)

	}else{

		if(!r){

			self.callback({message: 'Insert operation failed'},null)
		}else{

			self.emit({type:'create-jwt-token',data:{payload: r.user,callback: self.setTokenHeader.bind(self)}})
		}
	}

}

export const findHandler = async function(e =null,r = null){

	const self = this 
	const pao = self.pao 


	if(e){

		self.callback({message: 'An error occured attempting to find user'},null)

	}else{
        console.log('THE VALUE R')
		console.log(pao.pa_isArray(r))

		if(!r || (pao.pa_isArray(r) && r.length > 0)){

			let user = self.tmpd.user.parsed.user
			self.emit({type:"hash-payload",data: {payload: user.password,callback: self.hash.bind(self)}})
			

		}else{

			self.callback({message: 'User is already taken'},null)
			
		}
	}
	// token.res.set('X-AUTH-TOKEN',token.tk)
}


export const hash = async function(e=null,h=null){

	const self = this 
	if(e){

		console.log(e)
		self.callback({message: 'registration failed due to server error:hash'})
		
	}else{

		console.log('hased')
		console.log(h)
		let user = self.tmpd.user.parsed.user
		let password = h 
		let hash = await self.crypto.randomBytes(35).toString('hex')
		self.query(
			'mysql.f_users.insertOne',
			  {user: {user_id: null,email_address: user.email,user_name: user.username,password: password,hash: hash}},
			  self.insertHandler.bind(this)
		)

	}
	

}

