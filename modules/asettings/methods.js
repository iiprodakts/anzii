


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
	const forOf = pao.pa_forOf
	let user = data.payload.user
	self.callback = data.callback

	if(user.uploads){

		let uploads = user.uploads
		user.action  = uploads.fields.action,
		user.payload = {

				files: uploads.files || null,
				ID: uploads.fields.ID,
				old: uploads.fields.old
			
		}
	}

	

	// let uid = user.ID
	await self.log('THE DATA INSIDE ASETTINGS')
	await self.log(user)
	
	// console.log('THE PARSED DATA TEST')
	// console.log(data)
	// console.log(user)

	if(!isOBject(user)) return self.callback({message: 'User has not been specified'},null)
	if(!user.action) return self.callback({message: 'Invalid request'},null)
	if(!contains(user,['payload'])) return self.callback({message: 'missing required key'},null)
	if(!contains(user.payload,['ID'])) return self.callback({message: 'missing required key'},null)
  
  switch(user.action){
  	
  	 case 'getProfile': {
  	 	
  	 	self.getUserProfile(user.payload)
  	 	.then(async (retrievedUser)=>{

			   let userProfile = retrievedUser[0]
			    userProfile.url = `http://localhost:3000/download/${userProfile.profileUrl}`

			//    retrievedUser.url = `http://localhost:3000/download/${retrievedUser.profile_url}`
			   await self.log('THE RETRIEVED USER') 
			   await self.log(userProfile)
			   self.callback(null,userProfile)
			})
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
			.then(async (changedAv)=>{
				await self.log('THE CHANGED AV')

				let userProfile = {
					url : `http://localhost:3000/download/${changedAv.profileUrl}`,
					profileUrl: changedAv.profileUrl
				}
				
				self.callback(null,userProfile)
				})
			.catch((e)=>self.callback(e,null))
  	 }
  	 break;
  	 case 'updateUser': {
  	 	
  	 	self.updateUser(user.payload)
  	 	.then((updated)=>{

			updated.taken ? updated.taken instanceof Array ? updated.taken = updated.taken[0]: '' :''
			return self.callback(null,{update: {...updated.taken}})
		
		})
  	 	.catch((e)=>self.callback(e,null))
	 }
	 break;
	 case 'updateUserAlert': {
  	 	
		self.updateUser(user.payload)
		.then((updated)=>self.callback(null,updated))
		.catch((e)=>self.callback(e,null))
	 }
	 break;
	 case 'addAltAlert': {
  	 	
		self.updateUser(user.payload)
		.then((updated)=>self.callback(null,updated))
		.catch((e)=>self.callback(e,null))
	 }
	 break; 
	 case 'removeAlert': {
  	 	
		self.updateUser(user.payload)
		.then((updated)=>self.callback(null,updated))
		.catch((e)=>self.callback(e,null))
	 }
	 break; 
	 case 'unsubscribeFromAlerts': {
  	 	
		self.updateUser(user.payload)
		.then((updated)=>self.callback(null,updated))
		.catch((e)=>self.callback(e,null))
	 }
	 break;     
	 default: 
  	 return self.callback(new Error('Unknown data request'),null)
  	
  	
  }

} 


export const getUserProfile = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	let uid = pay.ID 
	
	
	return new Promise((resolve,reject)=>{
		
		
		// if(!data.profile) return reject(new Error('Invalid Request')) 
		
		// if(!data.profile.userId) return reject(new Error('Invalid'))
		
		let query = {
			
					returnFields: ['jo_job_alert_subscriber.email','jo_job_alert_subscriber.id'],
					tables:['jo_user','jo_job_alert_subscriber'],
					joins: 2,
					joinPoints: ['jo_user.id EQUALS jo_job_alert_subscriber.u_id'],
					conditions: [`jo_user.id EQUALS ${uid}`],
					opiks: ['field.profile_url.as[profileUrl]','field.first_name.as[firstName]','field.last_name.as[lastName]'],
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

	console.log('The update')
	console.log(pay)


	


	return new Promise((resolve,reject)=>{
			
			
			if(!pay.update) return reject(new Error('Update data missing'))

			let uid = pay.ID
			let alertID = pay.alertID 
			let update = pay.update 
			let frequency = update.frequency



			
			
			let queries = 
				{conditions: [`u_id EQUALS ${uid} `,`AND is_active EQUALS 1`],
				set: [{is_active:0,is_deleted:1}]
				}
			
		
			self.query(
					'mysql.jo_user.updateOne',
					queries,
					self.multiDataRequestHandler.bind(this,resolve,reject)
				)

				
			
	})
		


	


}


export const updateUser = function(pay){
	
	
	const self = this 
	const pao = self.pao 


	
	
	return new Promise((resolve,reject)=>{
		
		const {update} = pay 

		let set = []
		// let password = update.password 
		let uid = pay.ID


		if(update.fullName) {

			// let names = update.fullName.split(' ')
			let profile = {} 
			profile.first_name = update.fullName.firstName
			profile.last_name = update.fullName.lastName 
			set.push(profile)
		}

		if(update.password){
			let access = {}
			access.password = update.password 
			set.push(access)
		}
		// set.password = update.password 

		console.log('THE SET:ASSETTINGS')
		console.log(set)

		
		let query = 
					{
				
					tables:['jo_user','jo_login'],
					joins: 2,
					joinPoints: ['jo_user.id EQUALS jo_login.u_id'],
					conditions: [`jo_user.id EQUALS ${uid}`,`AND jo_login.u_id EQUALS ${uid}`],
					opiks: ['field.first_name.as[firstName]','field.last_name.as[lastName]'],
					set: set,
					takeFrom: 'jo_user'
				}

				self.query(
					'mysql.UPDATEANDTAKE',
					query,
					self.dataRequestHandler.bind(this,resolve,reject)
				  )
		
	})


}

export const changeAvatar = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	let files = pay.files
	let file = files.file.path 
	let ID = pay.ID 
	let old = pay.old
	


	
	
	return new Promise(async (resolve,reject)=>{
		
		
		self.modifyFile(file,'resize-image')
		.then(async (resized)=>{

			await self.log('RESIZE SUCCESSFULL')
			await self.log(resized)

			self.saveUploads(files,ID,old)
			.then(async (saved)=>{

				// resolve(saved)
				await self.log('THE SAVED FILE UPLOADS')
				await self.log(saved)

				self.saveFileUrlToDb(saved.url,ID)
				.then(async (updated)=>{
					
					await self.log('THE UPDATED FILE URL')
					await self.log(updated)
					let updatedUser  = {
						profileUrl: saved.url
					}
					resolve(updatedUser)

				})
				.catch((e)=>{

					reject(e)

				})

			})
			.catch((e)=>reject(e))

		})
		.catch(async (e)=>{

			await self.log('An error occured')
			reject(e)
		})

		
		
	})
  


	


}

export const modifyFile = function(file,event){

	console.log('ABOUT TO SEND THE FILE TO IMAGEMAN')

	const self = this 


	return new Promise((resolve,reject)=>{

		let fileOptions = {

			dimensions: {x: 250,y: 250},
			image: file
	
		}
	
		console.log(file)
	
		self.emit({type: event,data: {image: fileOptions,callback: self.handleImageManipulation.bind(this,resolve,reject)}})

	})
	
	// console.log('CHECK IF ASYNC FROM ANOTHER MODULE EXECUTES ACCORDINGLY')
}


export const handleImageManipulation = function(resolve,reject,e=null,resizeResponse){

	if(e){
		reject(e)
	}else{
		resolve(resizeResponse)
	}
}

export const saveUploads = function(files,userID,old){
	
	
	const self = this 
	let pao = self.pao 
	// let files = files 

	

	return new Promise((resolve,reject)=>{

			self.emit({type:'save-file',data: {files: files,multiple: false,old: old,dir: '/uploads',ID: userID,saveType:'unlinkold',callback: self.handleFileSave.bind(this,resolve,reject)}})

	})
	




}

export const handleFileSave = function(resolve,reject,e=null,saveResponse=null){


	 if(e){
		 reject(e)
	 }else{
		 resolve(saveResponse)
	 }

}

export const saveFileUrlToDb = function(url,uid){

	const self = this 

	return new Promise((resolve,reject)=>{

		let queries = 
			{conditions: [`id EQUALS ${uid} `],
			 set: [{profile_url:url}]
			}
		
	
		self.query(
				'mysql.jo_user.updateOne',
				queries,
				self.dataRequestHandler.bind(this,resolve,reject)
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


export const dataRequestHandler = function(resolve,reject,e=null,result=null){
	
	
	const self = this 
	let pao = self.pao 
	
	if(e) return reject(e)
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