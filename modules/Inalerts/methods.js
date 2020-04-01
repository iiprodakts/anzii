


export const init = function(){
  
  
  this.log('Inalerts has been initialised') 
  this.listens({
		
	'handle-inalerts-task': this.handleInternalAlertsTask.bind(this)
  
  })

	
}


export const handleInternalAlertsTask = async function(data){

	
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
  
	switch(user.action){
		
		case 'getAlertCategories': {
			
			self
			.getGroupedAlerts(user.payload)
			.then((alertCats)=>{self.callback(null,alertCats)})
			.catch((e)=>{
				console.log('Reject error')
				console.log(e)
				self.callback(e,null)
			})
		}
		break;
		case 'saveAlerts':{
			
			self.deleteAccount(data)
			.then((deleteStat)=>self.callback(null,deleteStat))
			.catch((e)=>self.callback(e,null))
		}
		break;
		case 'getAlerts':{
			
			self.getAlerts(user.payload)
			.then((alerts)=>self.callback(null,alerts))
			.catch((e)=>self.callback(e,null))
		}
		break;
		case 'getAlertById':{
			
			self.getAlertById(user.payload)
			.then((alert)=>self.callback(null,alert))
			.catch((e)=>self.callback(e,null))
		}
		break;
		case 'updateAlert': {
			
			self.updateUserAlert(user.payload)
			.then((updated)=>{

				updated.changedRows && updated.changedRows > 0 
					? self.callback(null,{updateStatus: true,frequency: user.payload.update.frequency})
					: self.callback(null,{updateStatus: false})
			})
			.catch((e)=>self.callback(e,null))
		}
		break;
		case 'deleteAlerts': {
			
			self.deleteAlerts(data)
			.then((deleted)=>{

				deleted.affectedRows && deleted.affectedRows > 0 
					? self.callback(null,{deleteStatus: true})
					: self.callback(null,{deleteStatus: false})
				
			})
			.catch((e)=>self.callback(e,null))
		}
		break;
		default: 
		self.callback(new Error('Unknown data request'),null)
		
		
	}



	

} 


export const saveAlerts = function(data){
	
	
	const self = this 
	let pao = self.pao

	
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

export const getAlerts = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	let uid = pay.ID
	let catID = pay.catID
	
	
	return new Promise((resolve,reject)=>{
		
		
		let conditions = catID > 0 ? [`u_id EQUALS ${uid}`,`AND alert_category_id EQUALS ${catID}`] : [`u_id EQUALS ${uid}`]
		
		let queries = 
			{returnFields:['frequency'],opiks: ['field.id.as[alertID]','field.job_keyword.as[jobKeyword]','field.date_created.as[alertDate]'],conditions:conditions,take: 5}
		
	
		self.query(
				'mysql.jo_job_alert.find',
				queries,
				self.multiDataRequestHandler.bind(this,resolve,reject)
			)
			
		
	})
 

}


export const getAlertById = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	let uid = pay.ID
	let alertID = pay.alertID

	
	
	return new Promise((resolve,reject)=>{
		
		
		 
		
		let queries = 
			{returnFields:['frequency'],opiks: ['field.id.as[alertID]','field.job_keyword.as[jobKeyword]','field.date_created.as[alertDate]'],conditions: [`u_id EQUALS ${uid} `,`AND id EQUALS ${alertID}`]}
		
	
		self.query(
				'mysql.jo_job_alert.find',
				queries,
				self.multiDataRequestHandler.bind(this,resolve,reject)
			)
			
		
	})
 

}




export const manageAlerts = function(data){
	
	
	const self = this 
	let pao = self.pao 
	
	
	
  self.query(
  
		'mysql.jo_alerts.removeOne',
		  data,
		  self.dealWithDataStorageResponse(response)
	 )
	

	

}


export const deleteAlerts = function(pay){
	
	
	return new Promise((resolve,reject)=>{
		
		
		const self = this 
		const pao = self.pao 
		let uid = pay.ID
		let alertID = pay.alertID
		
		
		let queries = {conditions: [`u_id EQUALS ${uid} `,`AND id EQUALS ${alertID}`]}
	
		self.query(
				'mysql.jo_job_alert.remove',
				queries,
				self.multiDataRequestHandler.bind(this,resolve,reject)
			)
			
		
	})

}


export const updateUserAlert = function(pay){
	
	
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
			{conditions: [`u_id EQUALS ${uid} `,`AND id EQUALS ${alertID}`],
			 set: [{frequency:frequency}]
			}
		
	
		self.query(
				'mysql.jo_job_alert.updateOne',
				queries,
				self.multiDataRequestHandler.bind(this,resolve,reject)
			)

			
		
	})
	 
	
	
	
	
}

export const getGroupedAlerts = function(pay){
	
	
	const self = this 
	let uid = pay.ID
	
return new Promise((resolve,reject)=>{


	let queries = 
		{
			
			tables: ['jo_job_alert_category','jo_category'],
			joins: 2,
			opiks: ['field.category_id.as[categoryID]','field.alert_category_count.as[jobAlertCount]','fuxin.substring_index.options[category_name,"/",1].as[name]'],
			joinPoints: ['jo_job_alert_category.category_id EQUALS jo_category.id'],
			conditions:[`u_id EQUALS ${uid}`],
			type: 'inner'
		}
	

		
	self.query(
			'mysql.SEARCH',
			queries,
			self.dataRequestAlertGroupHandler.bind(this,resolve,reject)
		)
		

// 		SELECT category_id AS categoryID,alert_category_count AS jobAlertCount,category_name AS name
// FROM jo_job_alert_category 
// INNER JOIN jo_category
// 	ON jo_job_alert_category.category_id = jo_category.id 
// WHERE u_id=1


})
	

}



export const dataRequestAlertGroupHandler = function(resolve=null,reject=null,e=null,result=null){
	
	
	const self = this 
	let pao = self.pao
	console.log('THE TYPE OF E IN DATAREQUEST HANDLER')
	if(e) reject(new Error('An error has occured Inside MYSQL'))
	resolve(result)

}

export const multiDataRequestHandler = function(resolve=null,reject=null,e=null,result=null){
	
	
	const self = this 
	let pao = self.pao
	console.log('THE TYPE OF E IN DATAREQUEST HANDLER')
	console.log(e)
	if(e) reject(new Error('An error has occured Inside MYSQL'))
	resolve(result)

}

export const searchBatch = function(key){

	



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
