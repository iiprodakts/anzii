


export const init = function(){
  
  
  this.log('Job has been initialised') 
  this.listens({
		
	'handle-job-task': this.handleJobTask.bind(this)
  
  })

	
}


export const handleJobTask = function(data){

	
	const self = this 
    self.getJobs(data)

} 


export const getJobs = function(data){
	
	
	const self = this 
	let pao = self.pao

	self.callback = data.callback

	console.log('THE PARSED DATA JOBGETJOBS')
	console.log(data)
	console.log(data.user.parsed.user.search.key)
	let search = data.user.parsed.user.search
	// console.log(data.parsed.search)

 
	self.query(
		'mysql.SEARCH',
		 {batch: true,search: self.searchBatch(search.key)},
		  self.searchBatchHandler.bind(this)
	)


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
