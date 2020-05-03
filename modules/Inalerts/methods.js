import { alternatives } from "joi"
import { searchFieldsFormat } from "../../lib/esm/mysql/methods"



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
		case 'saveAlertsSubscriptions':{
			
			self.saveAlertsSubscriptions(user.payload)
			.then((saved)=>{
				
				let inserted = saved.inserted 
				let taken = saved.taken 
				let insertTaken = {} 
				let alertsEmails = {}

				if(inserted.insertId > 0){
					insertTaken.inserted = true
				}
				if(taken && taken instanceof Array){

					if(taken.length === 1){

						alertsEmails.mainEmail = taken[0]
						
					}else{

						alertsEmails.mainEmail = taken[0]
						alertsEmails.altEmail = taken[1]
					}

					insertTaken.taken = alertsEmails
				}
				self.callback(null,insertTaken)
			})
			.catch((e)=>self.callback(e,null))
		}
		break;
		case 'getAlertsSubscriptions':{
			
			self.getAlertsSubscriptions(user.payload)
			.then((alerts)=>{

				let alertsEmails = {}
				if(alerts.length === 1){

					alertsEmails.mainEmail = alerts[0]
				}else{

					alertsEmails.mainEmail = alerts[0]
					alertsEmails.altEmail = alerts[1]
				}
				self.callback(null,alertsEmails)
			})
			.catch((e)=>self.callback(e,null))
		}
		break;
		case 'deleteAlertsSubscriptions': {
			
			self.deleteAlertsSubscriptions(user.payload)
			.then((deleted)=>{

				// deleted.affectedRows && deleted.affectedRows > 0 
				// 	? self.callback(null,{deleteStatus: true})
				// 	: self.callback(null,{deleteStatus: false})

				if(!deleted.taken){

					deleted.deleted 
						? self.callback(null,{taskSuccessful: true}) 
						: self.callback(null,{taskSuccessful: false})
				}else{

					if(!deleted.deleted){

						self.callback(null,{taken: deleted.taken})
					}else{
						self.callback(null,{taskSuccessful: true,taken: deleted.taken})
					}
				}
				
				
			})
			.catch((e)=>self.callback(e,null))
		}
		break;
		case 'updateAlertsSubscriptions': {
			
			self.updateAlertsSubscriptions(user.payload)
			.then((alerts)=>{

				console.log('THE ALERTS IN UPDATE')
				console.log(alerts)
				
				let alertsEmails = {}

				if(alerts.taken){

					if(alerts.taken.length === 1){

						alertsEmails.mainEmail = alerts.taken[0]
					}else{
	
						alertsEmails.mainEmail = alerts.taken[0]
						alertsEmails.altEmail = alerts.taken[1]
					}
					alerts.updated 
							? self.callback(null,{taskSuccessful: true,taken:alertsEmails})
							: self.callback(null,{taskSuccessful: false, taken: alertsEmails})

				}else{
					
					alerts.updated
							? self.callback(null,{taskSuccessful: true,taken:alertsEmails})
							: self.callback(null,{taskSuccessful: false, taken: alertsEmails})
				}
				
			})
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

export const saveAlertsSubscriptions = function(pay){
	
	
	const self = this 
	let pao = self.pao

	return new Promise((resolve,reject)=>{
		
		 let uid = pay.ID
		 let save = pay.save 
		 let email = save.email
		
		
		let query ={
			
					insert: {
						table: 'jo_job_alert_subscriber',
						fields: ['email','u_id','start_date'],
						values: [`${email}`,`${uid}`,new Date()]
					},
					take:{
						
						tables:['jo_job_alert_subscriber'],
						opiks: ['field.id.as[alertMailID]','field.email.as[alertEmail]'],
						conditions: [`u_id EQUALS ${uid}`],
						take: 5
					}
			   }
		
		self.query(
		'mysql.INSERTANDTAKE',
		  query,
		  self.multiDataRequestHandler.bind(this,resolve,reject)
	)
		
	})

	
}

export const getAlertsSubscriptions = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	let uid = pay.ID
	
	
	return new Promise((resolve,reject)=>{
		

		
		let queries = 
			{opiks: ['field.id.as[alertMailID]','field.email.as[alertEmail]'],conditions: [`u_id EQUALS ${uid}`],take: 5}
		
	
		self.query(
				'mysql.jo_job_alert_subscriber.find',
				queries,
				self.multiDataRequestHandler.bind(this,resolve,reject)
			)
			
		
	})
 

}

export const deleteAlertsSubscriptions = function(pay){
	
	
	return new Promise((resolve,reject)=>{
		
		
		const self = this 
		const pao = self.pao 
		let uid = pay.ID
		let alertMailID = pay.delete.alertMailID 

		let conditions = alertMailID === 0 ?  [`jo_job_alert_subscriber.u_id EQUALS ${uid} `] :  [`jo_job_alert_subscriber.u_id EQUALS ${uid} `,`AND jo_job_alert_subscriber.id EQUALS ${alertMailID}`]
		
		
		

		if(alertMailID === 0){

			let query = {

				tables: ['jo_job_alert_subscriber','jo_job_alert_category','jo_job_alert'],
				joins: 2,
				joinPoints: ['jo_job_alert_subscriber.id EQUALS jo_job_alert_category.alert_mail_id','jo_job_alert_category.alert_mail_id EQUALS jo_job_alert.alert_mail_id'],
				conditions: conditions
			}

			self.query(
				'mysql.DELETEMULTIPLE',
				query,
				self.multiDataRequestHandler.bind(this,resolve,reject)
			)

		}else{
			let query ={
				
				remove: {
					tables: ['jo_job_alert_subscriber','jo_job_alert_category','jo_job_alert'],
					joins: 3,
					joinPoints: ['jo_job_alert_subscriber.id EQUALS jo_job_alert_category.alert_mail_id','jo_job_alert_category.alert_mail_id EQUALS jo_job_alert.alert_mail_id'],
					conditions: conditions
				},
				take:{
					
					tables:['jo_job_alert_subscriber'],
					opiks: ['field.id.as[alertMailID]','field.email.as[alertEmail]'],
					conditions: [`jo_job_alert_subscriber.u_id EQUALS ${uid}`],
					take: 5
				}
			}
		
		
			self.query(
					'mysql.DELETEANDTAKE',
					query,
					self.multiDataRequestHandler.bind(this,resolve,reject)
				)

		}
			
		
	})
 

}

export const updateAlertsSubscriptions = function(pay){
	
	
	const self = this 
	const pao = self.pao 

	console.log('The update')
	console.log(pay)


	return new Promise((resolve,reject)=>{
		
		
		//  if(!pay.update) return reject(new Error('Update data missing'))

		 let uid = pay.ID
		 let alertMailID = pay.update.alertMailID 
		 let updateMail = pay.update.email
		//  let alertID = pay.alertID 
		//  let update = pay.update 
		//  let frequency = update.frequency



		 
		
		// let queries = 
		// 	{conditions: [`u_id EQUALS ${uid} `,`AND id EQUALS ${alertID}`],
		// 	 set: [{frequency:frequency}]
		// 	}

		let queries = 
					{
				   
					tables:['jo_job_alert_subscriber'],
					conditions: [`u_id EQUALS ${uid} `,`AND id EQUALS ${alertMailID}`],
					opiks: ['field.id.as[alertMailID]','field.email.as[alertEmail]'],
					set: [{email: updateMail}],
					takeFrom: {
						tables:['jo_job_alert_subscriber'],
						conditions: [`u_id EQUALS ${uid}`],

					}
				  }
		
	
		self.query(
				'mysql.UPDATEANDTAKE',
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
