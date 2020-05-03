import { SplitChunksPlugin } from "webpack"



export const init = function(){
  
  
  this.log('Job has been initialised') 
  this.listens({
		
	'handle-job-task': this.handleJobTask.bind(this)
  
  })

	
}


export const handleJobTask = async function(data){

	
	
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	const isOBject = pao.pa_isObject
	let user = data.payload.user
	self.callback = data.callback 
	self.log(data)

	

	// let uid = user.ID
	console.log('THE DATA INSIDE Adash')
	console.log(user)
	
	console.log('THE PARSED DATA TEST')
	console.log(data)
	console.log(user)

	self
	.getJobs(user)
	.then((jobs)=>{self.callback(null,jobs)})
	.catch((e)=>{
		console.log('Reject error')
		console.log(e)
		self.callback(e,null)
	})


	

	// if(!isOBject(user)) return self.callback({message: 'User has not been specified'},null)
	// if(!user.action) return self.callback({message: 'Invalid request'},null)
	// if(!contains(user,['payload'])) return self.callback({message: 'missing required key'},null)
	// if(!contains(user.payload,['ID'])) return self.callback({message: 'missing required key'},null)
  
	/*switch(user.action){
		
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
		default: 
		self.callback(new Error('Unknown data request'),null)
		
		
	}*/


} 


export const getJobs = function(pay){
	
	
	const self = this 
	const pao = self.pao 
	console.log('THE PAYLOAD IN GETJOBS')
	console.log(pay)
	// let u = pay.ID
	// let catID = pay.catID
	let range = {}
	if(pay.skip && pay.limit){
		range = {offset:pay.skip,count: pay.limit}
	}
	
	
	return new Promise(async (resolve,reject)=>{
		
		
		// await self.log('THE BACTCHSEARCH OBJECT')
		// await self.log(self.searchBatch('office','malamulele','limpopo',range))
	
		self.query(
				'mysql.SEARCH',
				{batch: true,search: self.searchBatch('office','malamulele','limpopo',range)},
				self.searchBatchHandler.bind(this,resolve,reject)
			)

			// self.query(
			// 	'mysql.SEARCH',
			// 	 {batch: true,search: self.searchBatch(search.key)},
			// 	  self.searchBatchHandler.bind(this)
			// )
			
		
	})
 
	


}

export const getJFP = function(data){
	
	
	const self = this 
	let pao = self.pao
	

	

	

}

export const getNativeJobs = function(data){
	
	
	const self = this 
	let pao = self.pao
	let cpus = 4

	console.log(data)
	if(data.hasOwnProperty('callback')){

		data.callback(null,{fetch: ['Fetch','the','data',cpus]})

			
		
	}else{

	}

} 


export const saveApplication = function(data){
	
	
	const self = this 
	let pao = self.pao
	let cpus = 4

	console.log(data)
	if(data.hasOwnProperty('callback')){

		data.callback(null,{fetch: ['Fetch','the','data',cpus]})

			
		
	}else{

	}

} 

export const getJobDetail = function(data){
	
	
	const self = this 
	let pao = self.pao
	let cpus = 4

	console.log(data)
	if(data.hasOwnProperty('callback')){

		data.callback(null,{fetch: ['Fetch','the','data',cpus]})

			
		
	}else{

	}

} 


export const searchBatch = function(key,city,state,range){

	 const self = this
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

		let intExp = 1 
		let intUnit = 'DAY' 

		self.log('THE INTERVAL VALUES')
		self.log(`${intExp} ${intUnit}`)

	   return [
				{
					returnFields: ['jo_job.id'],
					tables:['jo_job','jo_country','jo_company'],
					joins: 3,
					joinPoints: ['jo_job.u_id EQUALS jo_country.id','jo_job.company_id EQUALS jo_company.id'],
					conditions: [`GROUP::2 START GROUP::2 START MATCH [job_title] AGAINST [${key}] NATURAL, OR MATCH [position] AGAINST [${key}] NATURAL;AND jo_job.country_id EQUALS 202`,
								`AND GROUP::3 START city_name EQUALS ${city}; OR state_name EQUALS ${state};AND created_at FUXIN [ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]]`,
								
								],
					opiks: ['field.job_title.as[jobTitle]','field.company_logo.as[logo]','field.salary.as[jobSalary]',
					'field.name.as[employer]','field.salary_currency.as[currency]','field.is_main_featured.as[isMainFeatured]',
					'field.job_type.as[type]','field.approved_at.as[date]','field.is_featured.as[isFeatured]',
					'field.is_free.as[isFree]','field.is_sponsored.as[isSponsored]','field.city_name.as[jobCity]'],
					range:`${range.offset},${range.count}`,
					soundex: true,
					sort: 'order[jobTitle].asc',
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
			  },
			  {
				
				tables:['jo_job','jo_country','jo_company'],
				joins: 3,
				joinPoints: ['jo_job.u_id EQUALS jo_country.id','jo_job.company_id EQUALS jo_company.id'],
				conditions: [`GROUP::2 START GROUP::2 START MATCH [job_title] AGAINST [${key}] NATURAL, OR MATCH [position] AGAINST [${key}] NATURAL;AND jo_job.country_id EQUALS 202`,
							`AND GROUP::2 START city_name EQUALS ${city}; OR state_name EQUALS ${state}`],
				opiks: ['fuxin.count.options[*].as[totalJobs]']
		   },

	   ]
}

export const searchBatchHandler = function(resolve=null,reject=null,e=null,batchResults=null){

	const self = this 
	let pao = self.pao

	console.log('THE BATCH RESULTS') 
	console.log(batchResults)
   if(e) return reject(e,null)

   let result = {}
   result.posts = batchResults[0]
   result.states = batchResults[1]
   result.categories = batchResults[2]
   result.totalJobs = batchResults[3][0].totalJobs

   resolve(result)


}
