

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
	console.log('THE DATA INSIDE STRATEGY')
	console.log(user)
	
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
	      'mysql.jo_user.findOne',
			{user: { email: user.email}},
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
		console.log(r.length)
		console.log(r.length > 0)
		console.log('after r has been re-assigned a new value')
		console.log(r)
		console.log(!r)


		if((pao.pa_isArray(r) && r.length === 0)){

			console.log('ANZII USER DOES NOT EXIST, CREATE USER')
			let user = self.tmpd.user.parsed.user
			self.emit({type:"hash-payload",data: {payload: user.password,callback: self.hash.bind(self)}})

		}else{

			

			console.log('THE TAKEN USER')
			console.log(r)
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

		console.log('hashed')
		console.log(h)
		let user = self.tmpd.user.parsed.user
		let password = h 
		let hash = await self.crypto.randomBytes(35).toString('hex')
		user.password = password
		user.hash =  hash

		self.query(
			'mysql.PROCEDURE',
			  self.procedureDoc(user),
			  self.insertHandler.bind(this)
		)

		// self.query(
		// 	'mysql.jo_user.insertOne',
		// 	  {user: {id: null,email: user.email,first_name: user.firstname,last_name: user.lastname,password: password,hash: hash}},
		// 	  self.insertHandler.bind(this)
		// )

	}
	

}

export const procedureDoc = function(data){

	let fields = {
	
		jo_user: { id: 'NULL',u_type: data.usertype,first_name: data.firstname,last_name: data.lastname,email: data.email },
		jo_account: {own:{id:'NULL'},tables: [{name:'jo_user',values:['u_type.account_name']}]},
		jo_user_account_join: {own:{id:'NULL'},tables: [{name:'jo_user',values:['id.u_id','email.account_email']},{name:'jo_account',values:['id.account_id']}]},
		jo_login: {own:{id:'NULL',password:data.password},tables: [{name:'jo_user',values:['id.u_id','email.username']}]}
	}

	return [
	
		{name: 'jo_user',fields: fields.jo_user},
		{name: 'jo_account',fields: fields.jo_account},
		{name: 'jo_user_account_join',lastInsert: ['jo_user','jo_account'],fields: fields.jo_user_account_join},
		{name: 'jo_login',lastInsert: ['jo_user'],fields: fields.jo_login}
		
	   ]
}

