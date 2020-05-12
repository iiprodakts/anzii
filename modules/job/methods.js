



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
    const clientRequest = data.payload.request
	let user = data.payload.user
	self.callback = data.callback 
	self.log(data)

	

	// let uid = user.ID
	console.log('THE DATA INSIDE Adash')
	console.log(user)
	
	// console.log('THE PARSED DATA TEST')
	// console.log(data)
	// console.log(user)

	// self
	// .getJobs(user)
	// .then((jobs)=>{self.callback(null,jobs)})
	// .catch((e)=>{
	// 	console.log('Reject error')
	// 	console.log(e)
	// 	self.callback(e,null)
	// })


	

	if(!isOBject(user)) return self.callback({message: 'User has not been specified'},null)
	if(!user.action) return self.callback({message: 'Invalid request'},null)
	 if(!contains(user,['payload'])) return self.callback({message: 'missing required key'},null)
	// if(!contains(user.payload,['ID'])) return self.callback({message: 'missing required key'},null)
  
 switch(user.action){
		
		case 'getJobsWithThingy': {
			
			self
			.getJobsWithThingy(user.payload)
			.then((jobs)=>{
				
				
				let pageLimit = user.payload.limit 
				let totalJobs = jobs.totalJobs 
				let options = user.payload

				if(totalJobs === 0 || totalJobs < pageLimit){ 
				
				  let extraJobsLimit = pageLimit - totalJobs 
				
				  
				//   let jobsJson = self.jobsJson
				//   self.log(jobsJson.pages)
				//   self.log(jobsJson.hits)
				//   let refinedJobs = self.refineOutsourcedJobs(jobsJson.jobs) 
				//   jobs.totalJobs = jobs.totalJobs + jobsJson.hits 
				//   self.log(refinedJobs.length)
													 
				//   return self.callback(null,refinedJobs)
				 
				  

				  const forwarded = clientRequest.req.headers['x-forwarded-for']
				  const ip = forwarded ? forwarded.split(/, /)[0] : clientRequest.req.connection.remoteAddress
				  let uAgent = clientRequest.req.headers['user-agent']
				  let urlParametersString = '' 

				  options.keywords ? urlParametersString += `&keywords=${options.keywords}`: ''
				  let urlParameters = options.filters.map((para,i)=>{
					  if(para.key === 'location') para.value = "Cape Town"
					  return `&${self.getDbKey(para.key)}=${para.value}`
				  })

				  console.log('THE URL PARAMETERS')
				  console.log(urlParameters)
				  urlParametersString += `${urlParameters.join('')} &limit=${extraJobsLimit}`
				  let url = `${self.url}${urlParametersString}`

				  url += `&user_ip=${ip}&user_agent=${uAgent}`

				  self.fetch.get(url).then(response => {
					console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET')
					console.log(response.data)
					// return resolve({success: response.data}) 
				
			     
			     
						let refinedJobs = self.refineOutsourcedJobs(response.data.jobs) 
						console.log(refinedJobs) 
						console.log(jobs) 
						console.log(response.data.hits) 
						console.log(jobs.totalJobs)
						jobs.totalJobs = jobs.totalJobs + response.data.hits
						console.log(jobs.totalJobs)
						jobs.posts = jobs.posts.concat(refinedJobs) 
						self.log(refinedJobs.length)
						                                   
						return self.callback(null,jobs)
					   
					//return response.json();
				  }).catch(err => {

					  self.callback(null,jobs)
					  console.log('JOBS FROM SOURCE FAILED DUE TO')
					  return console.log(err) 
				  });
			     
			     
					
				}else{
				
				  self.callback(null,jobs)
				
				}
				
				})
			.catch((e)=>{
				console.log('Reject error')
				console.log(e)
				self.callback(e,null)
			})
		}
		break;
		case 'getJobs':{
			
			self.getJobs(user.payload)
			.then((jobs)=>{
				
				let pageLimit = user.payload.limit 
				let totalJobs = jobs.totalJobs 
				let options = user.payload.search

				if(totalJobs < pageLimit){ 
				
				  let extraJobsLimit = pageLimit - totalJobs 
				  

				  const forwarded = clientRequest.req.headers['x-forwarded-for']
				  const ip = forwarded ? forwarded.split(/, /)[0] : clientRequest.req.connection.remoteAddress
				  let uAgent = clientRequest.req.headers['user-agent']
			  
				  let urlParameters = options.map((para,i)=>{
					  return `&${para.key}=${para.value}`
				  })
				  let urlParametersString = `${urlParameters.split(',')} &limit=${extraJobsLimit}`
				  let url = `${self.url}${urlParametersString}`

				  url += `&user_ip=${ip}&user_agent=${uAgent}`

				  self.fetch.get(url).then(response => {
					console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET')
					console.log(response.data)
					// return resolve({success: response.data}) 
				
			     
			     
						let refinedJobs = self.refineOutsourcedJobs(response.data) 
						jobs.totalJobs = jobs.totalJobs + refinedJobs.totalHits 
						                                   
						return self.callback(null,jobs)
					   
					//return response.json();
				  }).catch(err => {

					  self.callback(null,jobs)
					  console.log('JOBS FROM SOURCE FAILED DUE TO')
					  return console.log(err) 
				  });
			     
			     
					
				}else{
				
				  self.callback(null,jobs)
				
				}
			})
			.catch((e)=>self.callback(e,null))
		}
		break;
		default: 
		self.callback(new Error('Unknown data request'),null)
		
		
	}



} 


export const refineOutsourcedJobs = function(jobs){
	
	    
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains   
	let refinedJobs = []


	jobs.forEach((job,i)=>{
		
		let newJob = {}
		
		newJob.jobType = job.job_type || 'Not-specified' 
		newJob.date = job.date 
		newJob.employer = job.company 
		newJob.jobTitle = job.title 
		newJob.url = job.url 
		
		
		if(contains(job,['salary_min','salary_max'])) newJob.jobSalary = `${job.salary_min}-${job.salary_max}`  
		
		if(contains(job,'locations')){
			
				if(job.locations.toLowerCase() === 'south africa'){
					
					newJob.jobCity ='SA'
					
				}else{
					
					let locPieces = job.locations.split(',') 
					newJob.jobCity = locPieces[0]
					
				}
		}else{
			
				newJob.jobCity = 'SA'
		} 

		job.salary_currency_code ? newJob.currency = job.salary_currency_code : newJob.currency = 'ZAR'
		
		refinedJobs.push(newJob)
	})

	return refinedJobs


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

export const getJobsWithThingy = function(pay){
	
	
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

		console.log('GET JOBS WITH THING REQUEST')
		console.log(pay)
		console.log(pay.filters)
		console.log(pay.filters[0])
		let conditions = self.generateQueryConditions(pay) 
		console.log(conditions)
		// return resolve(conditions)
	
		self.query(
				'mysql.SEARCH',
				{batch: true,search: self.searchBatch(conditions,range)},
				self.searchBatchHandler.bind(this,resolve,reject,true)
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


export const generateQueryConditions = function(options){
	
 
    // let options = {
    // 	keywords: '',
    // 	categories: [],
    // datePosted: '',
    // jobType:[],location: '',
    // salaryRange:[],experience:[],
    // gender:[],qualification:[],
    // careerLevel:[] 
    
    // }  
    const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
    let conditions = []
   
    
    if(contains(options,'keywords')){
    	   conditions.push(self.getCondition({key:options.keywords},'keywords'))
    }else{
	
	
    conditions.push(self.getCondition({key:202},'location').trim())
    }
    if(contains(options,'filters')){
		
		let filters = options.filters.map((f,i)=>{

			return {key:f.key,value:f.value,table:'jo_job',operand: 'ISEQUALS'}

		})
      	conditions.push(self.getCondition(filters,'AND'))
	}
	
	return conditions
 
} 

export const getCondition = function(option,id=''){
	
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	 switch(id){
	 	
	 	case 'keywords':
	 	 return `GROUP::2 START GROUP::2 START MATCH [job_title] AGAINST [${option.key}] NATURAL, OR MATCH [position] AGAINST [${option.key}] NATURAL;AND jo_job.country_id EQUALS 202`
	 	case 'location':
	 	  return `jo_job.country_id EQUALS 202`
	 	 default:
	 	 return self.formatQuery(option,id)
	 
	 	
	 	
	 }
	
	
	
} 


export const formatQuery = function(options,an=''){
	
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	 let len = options.length 
	 
	 let stri = ''
	 
	  
	    options.forEach((i,p)=>{
	    	
	    	   if(p === 0 && i.key === 'location'){ 
	    	   
	    	      stri += `${an.toUpperCase()} GROUP::${len} START GROUP::2 START city_name EQUALS ${i.value}, OR state_name EQUALS ${i.value}; `
	    	   	
	    	   }else if(p === 0){
	    	   	
	    	   	 let derivedKey = self.getDbKey(i.key) 
	    	   	 
	    	   	 	 if(i.key === 'datePosted'){
					
						let intExp = i.value
						let intUnit = '' 

						self.log('THE OUTCOME OF ')
						self.log(i.value <= 24)
						
						if(i.value <= 24){
							intUnit = 'HOUR'
						}else if(i.value > 24 && i.value < 168){
							intUnit = 'DAY'
						}else if(i.value >= 168 && i.value < 672 ){
							intUnit = 'WEEK'
						}else if(i.value >= 672){
							intUnit = 'MONTH'
						}
						let lastCond = ' '
						if(p != len - 1) lastCond = '; '
						stri += `${an.toUpperCase()} GROUP::${len} created_at FUXIN [ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]]${lastCond}
						`
	    	   	 }else{
						
					let lastCond = ' '
					if(p != len - 1) lastCond = '; '
	    	   	 	 stri += `${an.toUpperCase()} GROUP::2 ${i.table}.${derivedKey} ${i.operand} ${i.value}${lastCond}`
	    	 
	    	   	 	
	    	   	 }
	    	   	 
	    	   	 
	    	   	 
	    	   }else{
	    	   	
	    	   	  let derivedKey = self.getDbKey(i.key)
	    	   	 if(i.key === 'datePosted'){
					
						let intExp = i.value
						let intUnit = '' 
						
						if(i.value <= 24){
							intUnit = 'HOUR'
						}else if(i.value > 24 && i.value < 168){
							intUnit = 'DAY'
						}else if(i.value >= 168 && i.value < 672 ){
							intUnit = 'WEEK'
						}else if(i.value >= 672){
							intExp = 3
							intUnit = 'MONTH'
						}
	    	   	 	let lastCond = ' '
					if(p != len - 1) lastCond = '; '
	    	   	 	stri += `AND created_at FUXIN [ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]]${lastCond}`
	    	   	 }else{
						
					let lastCond = ' '
					if(p != len - 1) lastCond = '; '
	    	   	 	 stri += `AND ${i.table}.${derivedKey} ${i.operand} ${i.value}${lastCond}`
	    	 
	    	   	 	
	    	   	 }
	    	   	 
	    	   }
	    	
	    	
	    })
	 	
	 	
	 	return stri.trim()
	
	   	 	     	 	 	
	
}

export const getDbKey = function(i){
	
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	    switch(i){
	    	   	 	
	    	 
	    	   	 
	    	   	 	case 'jobType': return 'job_type'
	    	   	 	case 'salaryRange': return 'salary'
	    	   	 	case 'careerLevel': return 'exp_level' 
	    	   	 	case  'categories':  return 'job_category_id' 
	    	   	 	case 'experience': return 'experience_required_years'
	    	   	 	default: return i
	    	   	 	
	    	   	 	
	    	   	 } 
	    	   	 
	    	   	 
	    	   	 
}


export const searchBatch = function(options,range){

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
					//  
					conditions: options,
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
				conditions: options,
				opiks: ['fuxin.count.options[*].as[totalJobs]']
		   },

	   ]
}

export const searchBatchHandler = function(resolve=null,reject=null,withThingy=false,e=null,batchResults=null){

	const self = this 
	let pao = self.pao

	console.log('THE BATCH RESULTS') 
	console.log(batchResults)
   if(e) return reject(e,null)

   
   let result = {} 
   
   if(withThingy){ 
   
   	result.posts = batchResults[0]
    result.states = batchResults[1]
    result.categories = batchResults[2]
    result.totalJobs = batchResults[3][0].totalJobs

   	
   }else{
   	result.posts = batchResults[0] 
   	result.totalJobs = batchResults[3][0].totalJobs
   }
   
   resolve(result)


} 