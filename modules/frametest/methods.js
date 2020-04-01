

export const init = function(){
  
  
  console.log('Register has been initialised')
	this.listens({
		
		'handle-test-task': this.handleFrameTestTask.bind(this),
	})
	
	
	
}


export const handleFrameTestTask= function(data){

 
	console.log(data)
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	const isOBject = pao.pa_isObject
	let user = data.payload.user
	let request = data.payload.request
	self.callback = data.callback

	

	// let uid = user.ID
	console.log('THE DATA INSIDE Adash')
	console.log(user)
	
	console.log('THE PARSED DATA TEST')
	console.log(data)
	console.log(user)

	if(!isOBject(user)) return self.callback({message: 'User has not been specified'},null)
	if(!user.action) return self.callback({message: 'Invalid request'},null)
	if(!contains(user,['payload'])) return self.callback({message: 'missing required key'},null)
	if(!contains(user.payload,['ID'])) return self.callback({message: 'missing required key'},null)
  
	switch(user.action){
		
		case 'delete': {
			
			self
			.deleteThingy(user.payload)
			.then((alertCats)=>{self.callback(null,alertCats)})
			.catch((e)=>{
				console.log('Reject error')
				console.log(e)
				self.callback(e,null)
			})
		}
		break;
		case 'save':{
			
			self.saveThingy(data)
			.then((deleteStat)=>self.callback(null,deleteStat))
			.catch((e)=>self.callback(e,null))
		}
		break;
		case 'update':{
			
			self.updateThingy(user.payload)
			.then((alerts)=>self.callback(null,alerts))
			.catch((e)=>self.callback(e,null))
		}
		break;
		case 'find':{
			
			self.findThingy(user.payload)
			.then((alert)=>self.callback(null,alert))
			.catch((e)=>self.callback(e,null))
		}
		break;
		case 'do': {
			
			self.doThingy(user.payload,request)
			.then((doData)=>self.callback(null,doData))
			.catch((e)=>self.callback(e,null))
		}
		break;
		default: 
		self.callback(new Error('Unknown data request'),null)
		
		
	}

} 


export const testy = function(data){

 
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	let user = data.payload.user
	let clientRequest = data.payload.request
	self.callback = data.callback
	const fetch = require('node-fetch')

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

	// self.query(
	// 	'mysql.jo_user.find',
	// 	  {opiks: ['fuxin.count.options[*].as[AllUsers]']},
	// 	  self.dataRequestHandler.bind(this)
	// )

	const forwarded = clientRequest.req.headers['x-forwarded-for']
	const ip = forwarded ? forwarded.split(/, /)[0] : clientRequest.req.connection.remoteAddress
	// let ip = request.req.headers['x-forwarded-for'] || request.req.connection.remoteAddress;
	let uAgent = clientRequest.req.headers['user-agent']

	let url = self.url
	   url += `&user_ip=${ip}&user_agent=${uAgent}`
	   
	//    var request = require('request');

	console.log('SELF.FETCH')
	// console.log(self.fetch)

	// return self.callback(null,{type: typeof self.fetch})


	self.fetch.get(url).then(response => {
		console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET')
		console.log(response.data)
		return self.callback(null,{success: response.data}) 
		//return response.json();
	  }).catch(err => {self.callback(err,null);});


		// request(url, function (error, response, body) {
		// 	if (!error && response.statusCode == 200) {

		// 		console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET')
		// 		return self.callback(null,{response}) 
		// 	}else{
		// 		console.log('THE REQUEST HAS FAILED TO CAREERJET')
		// 	}
		// })


	
	

	
	
	


} 

export const deleteThingy = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	let uid = pay.ID
	let alertID = pay.alertID

	
	
	return new Promise((resolve,reject)=>{
		
		
		 
		
		
		let queries = {conditions: [`u_id EQUALS ${uid} `,`AND id EQUALS ${alertID}`]}
	
		self.query(
				'mysql.jo_job_alert.remove',
				queries,
				self.thingyDataRequestHandler.bind(this,resolve,reject)
			)
			
		
	})
	

}
export const saveThingy = function(data){
	
	
	const self = this 
	let pao = self.pao 
	
	
	
  return new Promise((resolve,reject)=>{
		
		
		if(!data.profile) return reject(new Error('Invalid Request')) 
		
		if(!data.profile.userId) return reject(new Error('Invalid'))
		
		let query ={
			
					conditions: [`id EQUALS ${profile.userID}`]
			   }
		
		self.query(
		'mysql.SEARCH',
		  query,
		  self.thingyDataRequestHandler.bind(this,resolve,reject)
	)
		
	})
	

}
export const updateThingy = function(data){
	
	
	const self = this 
	let pao = self.pao 
	
	
	
  return new Promise((resolve,reject)=>{
		
		
		if(!data.profile) return reject(new Error('Invalid Request')) 
		
		if(!data.profile.userId) return reject(new Error('Invalid'))
		
		let query ={
			
					conditions: [`id EQUALS ${profile.userID}`]
			   }
		
		self.query(
		'mysql.SEARCH',
		  query,
		  self.thingyDataRequestHandler.bind(this,resolve,reject)
	)
		
	})
	

}
export const findThingy = function(data){
	
	
	const self = this 
	let pao = self.pao 
	
	
	
  return new Promise((resolve,reject)=>{
		
		
		if(!data.profile) return reject(new Error('Invalid Request')) 
		
		if(!data.profile.userId) return reject(new Error('Invalid'))
		
		let query ={
			
					conditions: [`id EQUALS ${profile.userID}`]
			   }
		
		self.query(
		'mysql.SEARCH',
		  query,
		  self.thingyDataRequestHandler.bind(this,resolve,reject)
	)
		
	})
	

}
export const doThingy = function(pay,request){
	
	
	
	
  return new Promise((resolve,reject)=>{
		
		
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	let user = pay
	let clientRequest = request
	

	console.log('THE DATA INSIDE TESTY')
	console.log(user)
	

	console.log('THE PARSED DATA TEST')
	console.log(user)
	// self.callback(null,user)

	// let rest = {
		  
	// 	// conditions: [`email ISEQUALS ${user.email}`],
	// 	// set: [{first_name: 'Ntsako'},{last_name: 'Mahori'}]
	// 	opiks: ['fuxin.count.options[*].as[AllUsers]']
		
	//   }

	// self.query(
	// 	'mysql.jo_user.find',
	// 	  {opiks: ['fuxin.count.options[*].as[AllUsers]']},
	// 	  self.dataRequestHandler.bind(this)
	// )

	const forwarded = clientRequest.req.headers['x-forwarded-for']
	const ip = forwarded ? forwarded.split(/, /)[0] : clientRequest.req.connection.remoteAddress
	// let ip = request.req.headers['x-forwarded-for'] || request.req.connection.remoteAddress;
	let uAgent = clientRequest.req.headers['user-agent']

	let url = self.url
	   url += `&user_ip=${ip}&user_agent=${uAgent}`
	   
	//    var request = require('request');

	console.log('SELF.FETCH')
	// console.log(self.fetch)

	// return self.callback(null,{type: typeof self.fetch})


	self.fetch.get(url).then(response => {
		console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET')
		console.log(response.data)
		return resolve({success: response.data}) 
		//return response.json();
	  }).catch(err => {reject(err);});


		// request(url, function (error, response, body) {
		// 	if (!error && response.statusCode == 200) {

		// 		console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET')
		// 		return self.callback(null,{response}) 
		// 	}else{
		// 		console.log('THE REQUEST HAS FAILED TO CAREERJET')
		// 	}
		// })


	
	
		
	})
	

}

export const thingyDataRequestHandler = function(resolve=null,reject=null,e=null,result=null){
	
	
	const self = this 
	let pao = self.pao
	console.log('THE TYPE OF E IN DATAREQUEST HANDLER')
	console.log(e)
	if(e) reject(e)
	resolve(result)

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

