


export const init = function(){
  
  
  this.log('Asettings has been initialised') 
  this.listens({
		
	'handle-asettings-task': this.handleAsettingsTask.bind(this)
  
  })

	
}


export const handleAsettingsTask = async function(data){

	
	console.log(data)
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	const isOBject = pao.pa_isObject
	let user = data.payload.user
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
  
  switch(data.action){
  	
  	 case 'getProfile': {
  	 	
  	 	self.getProfile(user.payload)
  	 	.then((retrievedUser)=>self.callback(null,retrievedUser))
  	 	.catch((e)=>self.callback(e,null))
  	 }
  	 break;
  	 case 'deleteAccount':{
  	 	
  	 	self.deleteAccount(user.payload)
  	 	.then((deleteStat)=>self.callback(null,deleteStat))
  	 	.catch((e)=>self.callback(e,null))
  	 }
  	 break;
  	 case 'changeAvatar':{
  	 	
  	 	  self.changeAvatar(user.payload)
  	 	.then((changedAv)=>self.callback(null,changedAv))
  	 	.catch((e)=>self.callback(e,null))
  	 }
  	 break;
  	 case 'updateUser': {
  	 	
  	 	self.updateUser(user.payload)
  	 	.then((updated)=>self.callback(null,updated))
  	 	.catch((e)=>self.callback(e,null))
  	 }
  	 default: 
  	 self.callback(new Error('Unknown data request'),null)
  	
  	
  }

} 


export const getUserProfile = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	const {profile} = data
	
	
	return new Promise((resolve,reject)=>{
		
		
		if(!data.profile) return reject(new Error('Invalid Request')) 
		
		if(!data.profile.userId) return reject(new Error('Invalid'))
		
		let query = 	{
			
					returnFields: ['first_name','last_name','profile','email'],
					tables:['jo_user','jo_alerts'],
					joins: 2,
					joinPoints: ['jo_user.id EQUALS jo_alerst_subscription.u_id'],
					conditions: [`id EQUALS ${profile.userID}`],
					type: 'inner'
			   }
		
		self.query(
		'mysql.SEARCH',
		  query,
		  self.dataRequestHandler.bind(this,resolve,reject)
	)
		
	})
 

}


export const deleteAccount = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	const {account} = data
	
	
	return new Promise((resolve,reject)=>{
		
		
		if(!data.account) return reject(new Error('Invalid Request')) 
		
		if(!data.account.userId) return reject(new Error('Invalid Request'))
		
		let query = 	{
		
					conditions: [`id EQUALS ${account.userID}`]
			   } 
		
		self.query(
		'mysql.jo_user.remove',
		  query,
		  self.dataRequestDeleteHandler.bind(this,resolve,reject)
	)
		
	})
  


	


}


export const updateUser = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	const {update} = data
	
	
	return new Promise((resolve,reject)=>{
		
		
		if(!data.update) return reject(new Error('Invalid Request')) 
		
		if(!data.update.userId) return reject(new Error('Invalid Request'))
		
		let query = 	{
			    // set : {password: p}
					conditions: [`id EQUALS ${account.userID}`]
			   }
		
		self.query(
		'mysql.jo_user.update',
		  query,
		  self.dataRequestUserUpdateHandler.bind(this,resolve,reject)
	)
		
	})
  


	


}

export const changeAvatar = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	const {avatar} = data
	
	
	return new Promise((resolve,reject)=>{
		
		
		if(!data.avatar) return reject(new Error('Invalid Request')) 
		
		if(!data.avatar.userId) return reject(new Error('Invalid Request'))
		
		let query = 	{
			    // set : {password: p}
					conditions: [`id EQUALS ${account.userID}`]
			   }
		
		self.query(
		'mysql.jo_user.update',
		  query,
		  self.dataRequestUserUpdateHandler.bind(this,resolve,reject)
	)
		
	})
  


	


}


export const alertUnsubscription = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	const {update} = data
	
	
	return new Promise((resolve,reject)=>{
		
		
		if(!data.update) return reject(new Error('Invalid Request')) 
		
		if(!data.update.userId) return reject(new Error('Invalid Request'))
		
		let query = 	{
			    // set : {password: p}
					conditions: [`id EQUALS ${account.userID}`]
			   }
		
		self.query(
		'mysql.jo_user.update',
		  query,
		  self.dataRequestUserUpdateHandler.bind(this,resolve,reject)
	)
		
	})
  
}

export const alertAddition = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	const {update} = data
	
	
	return new Promise((resolve,reject)=>{
		
		
		if(!data.update) return reject(new Error('Invalid Request')) 
		
		if(!data.update.userId) return reject(new Error('Invalid Request'))
		
		let query = 	{
			    // set : {password: p}
					conditions: [`id EQUALS ${account.userID}`]
			   }
		
		self.query(
		'mysql.jo_user.update',
		  query,
		  self.dataRequestUserUpdateHandler.bind(this,resolve,reject)
	)
		
	})
  



}


export const alertMailUpdate = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	const {update} = data
	
	
	return new Promise((resolve,reject)=>{
		
		
		if(!data.update) return reject(new Error('Invalid Request')) 
		
		if(!data.update.userId) return reject(new Error('Invalid Request'))
		
		let query = 	{
			    // set : {password: p}
					conditions: [`id EQUALS ${account.userID}`]
			   }
		
		self.query(
		'mysql.jo_user.update',
		  query,
		  self.dataRequestUserUpdateHandler.bind(this,resolve,reject)
	)
		
	})
  


	


}



export const dataRequestDeleteHandler = function(e=null,result=null){
	
	
	const self = this 
	let pao = self.pao 
	
	if(e) return reject(new Error('db error'))
  if(!result) return reject(new Error('')) 
  
   resolve(result)

}


export const dataRequestHandler = function(e=null,result=null,resolve,reject){
	
	
	const self = this 
	let pao = self.pao 
	
	if(e) return reject(new Error('db error'))
  if(!result) return reject(new Error('')) 
  
   resolve(result)

}

export const searchBatch = function(key){

	// let fields = {
	
	// 	jo_user: { id: 'NULL',u_type: data.usertype,first_name: data.firstname,last_name: data.lastname,email: data.email },
	// 	jo_account: {own:{id:'NULL'},tables: [{name:'jo_user',values:['u_type.account_name']}]},
	// 	jo_user_account_join: {own:{id:'NULL'},tables: [{name:'jo_user',values:['id.u_id','email.account_email']},{name:'jo_account',values:['id.account_id']}]},
	// 	jo_login: {own:{id:'NULL',password:data.password},tables: [{name:'jo_user',values:['id.u_id','email.username']}]}
	// }

	// return [
	
	// 	{name: 'jo_user',fields: fields.jo_user},
	// 	{name: 'jo_account',fields: fields.jo_account},
	// 	{name: 'jo_user_account_join',lastInsert: ['jo_user','jo_account'],fields: fields.jo_user_account_join},
	// 	{name: 'jo_login',lastInsert: ['jo_user'],fields: fields.jo_login}
		
	//    ]



	   return [
				{
					returnFields: ['all'],
					tables:['jo_job','jo_recruiter','jo_company'],
					joins: 3,
					joinPoints: ['jo_job.u_id EQUALS jo_recruiter.id','jo_company.id EQUALS jo_recruiter.company_id'],
					conditions: [`MATCH [job_title] AGAINST [${key}] NATURAL`,`OR MATCH [description] AGAINST [php] NATURAL`],
					take: 10,
					soundex: true,
					type: 'inner'
			   },
			   {
				returnFields: ['state_name','country_id'],
				tables:['jo_states'],
				joinPoints: ['jo_states.id EQUALS jo_country.u_id'],
				conditions: [`country_id EQUALS 202`]
			  },
			  {
				returnFields: ['all'],
				tables:['jo_category']
		      }

	   ]
}

export const searchBatchHandler = function(e=null,batchResults=null){

	const self = this 
	let pao = self.pao

	console.log('THE BATCH RESULTS') 
	console.log(batchResults)
	self.callback(null,{batch:batchResults})


}