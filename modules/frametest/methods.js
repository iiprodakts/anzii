

export const init = function(){
  
  
  console.log('Register has been initialised')
	this.listens({
		
		'handle-test-task': this.handleFrameTestTask.bind(this),
	})
	
	
	
}


export const handleFrameTestTask= function(data){

 
	const self = this 
	self.log("HANDLING FRAMEWORK REGISTRATION TASK")
	self.log(data)
	
	self.testy(data)

} 


export const testy = function(data){

 
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	let user = data.payload.user
	self.callback = data.callback
	console.log('THE DATA INSIDE TESTY')
	console.log(user)
	

	console.log('THE PARSED DATA TEST')
	console.log(data)
	console.log(user)
	// self.callback(null,user)

	// let rest = {
		  
	// 	// conditions: [`email ISEQUALS ${user.email}`],
	// 	// set: [{first_name: 'Ntsako'},{last_name: 'Mahori'}]
	// 	opiks: ['fuxin.count.options[*].as[AllUsers]']
		
	//   }

	self.query(
		'mysql.jo_user.find',
		  {opiks: ['fuxin.count.options[*].as[AllUsers]']},
		  self.dataRequestHandler.bind(this)
	)
	

	
	
	


} 


export const dataRequestHandler = function(e=null,data=null){

 
	const self = this
	const pao = self.pao 
	self.log("Executing DataRequestHandler")
	self.log(data)
	self.callback(null,data)



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
	  
	 let rest = {
			
		conditions: [`country_id EQUALS 202`],
		opiks: ['field.id.as[stateId]','field.state_name.as[state]','field.country_id.as[countryId]'],
		sort: 'order[state_name].asc',
		range: '2,5',
		take: 5
	  }
	//   {conditions: ['where']}
	 
	  
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

