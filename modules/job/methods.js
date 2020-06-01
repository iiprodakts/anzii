import FuzzySearch from "fuzzy-search"




export const init = function(){
  
  
  this.log('Job has been initialised') 
  this.listens({
		
	'handle-job-task': this.handleJobTask.bind(this),
	'get-new-jobs': this.handleGetNewJobs.bind(this)
  
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
				  let blackList = ['sort','limit','currentPage','skip','jq']
				  let urlParametersString = '' 
				  let urlParameters = []

				  options.jq ? urlParametersString += `&keywords=${options.jq}`: ''
				  options.sort ? urlParametersString += `&sort=${options.sort}`: '' 
				  options.currentPage ? urlParametersString += `&page=${options.currentPage}`: ''  
				  
				  Object.entries(options).forEach((para,i)=>{
					
					  let key = para[0]
					  if(blackList.indexOf(key) < 0){

						 urlParameters.push(`&${self.getDbKey(key,'source')}=${para[1]}`)
					  }
					  
				  })

				  console.log('THE URL PARAMETERS')
				  console.log(urlParameters)
				  urlParametersString += `${urlParameters.join('')} &pagesize=${extraJobsLimit}`
				  let url = `${self.url}${urlParametersString}`

				  url += `&user_ip=${ip}&user_agent=${uAgent}` 
				  self.log('THE URL')
				  self.log(url)
				  self.log(options)

				  self.fetch.get(url).then(response => {
					console.log('THE REQUEST HAS SUCCEEDED TO CAREERJET')
					console.log(response.data)
					// return resolve({success: response.data}) 
				
				 
					    if(response.data.type.toUpperCase() !== 'JOBS') return self.callback(null,jobs)
			     
						let refinedJobs = self.refineOutsourcedJobs(response.data.jobs) 
						// console.log(refinedJobs) 
						// console.log(jobs) 
						// console.log(response.data.hits) 
						// console.log(jobs.totalJobs)
						jobs.totalJobs = jobs.totalJobs + response.data.hits
						// console.log(jobs.totalJobs)
						jobs.posts = jobs.posts.concat(refinedJobs) 
						self.log(refinedJobs.length)
						                                   
						return self.callback(null,jobs)
					   
					//return response.json();
				  }).catch(err => {

					  self.callback(null,jobs)
					//   console.log('JOBS FROM SOURCE FAILED DUE TO')
					//   return console.log(err) 
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
					  return `&${self.getDbKey(para.key,'source')}=${para.value}`
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


export const handleGetNewJobs = function(data){
	
	const self = this 
	self.logSync('THE NEWJOBS HANDLE REQUEST')
	self.getNewJobs()
}

export const getNewJobs = async function(data){
	
	const self = this 
	
	
	let ip = self.ip.address()
	let uAgent = "Mozilla/5.0"  
	
	const jobsThreshold  = 100 
	let pagesize = 20
	let callCount = jobsThreshold / pagesize 
	let sort = 'date' 
	let hits = 1001
	let accumulatedJobs = [] 
	let allJobs = []
	let filteredJobs = [] 
	let failureCounts = 0 
	let breakOutOfLoop = false
	
	for(let i=0;i <= callCount; i++){
	
	
	   if(accumulatedJobs.length >= jobsThreshold) break 
	   
	   	let url =`${self.url}&page=${i}&pagesize=${pagesize}&sort=${sort}&user_ip=${ip}&user_agent=${uAgent}` 
	   	
		 await self.fetch.get(url)
		 .then((response)=>{
		 	
		 	 if(response.data.type !== 'JOBS') {
		 	 	
		 	 	 if(failureCounts >= 5){
					 breakOutOfLoop = true
		 	 	 	 
		 	 	 }else{
		 	 	 	
		 	 	 	failureCounts++ 
		 	 	 }
		 	 	
		 	 }else{
				  
				self.logSync('we GOT these Many Jobs')
				self.logSync(response.data.jobs.length)
		 	 	let jobs = response.data.jobs 
		 	 	accumulatedJobs.push(jobs) 
		 	 	  accumulatedJobs.length === 1 ? hits = response.data.hits :''
		 	 	  accumulatedJobs.length === 1 
		 	 	      ? hits < jobsThreshold 
		 	 	           ? jobsThreshold = hits - i
		 	 	           : '' 
		 	 	      :''
		 	 }
		 	 
		 }) 
		 .catch((e)=>{
		 	
		 	   self.logSync('Jobs fetching has bumped into an error') 
		 	   self.logSync(e)
		 }) 

		 if(breakOutOfLoop) break
		
	}
	

	
	
			// // console.log('THE REQUEST FOR USER ALERTS HAS SUCCEEDED')
			// // console.log(response.data)
			// console.log('THE TOTALJOBS')
			// console.log(response.data.jobs.length)
			// // return resolve({success: response.data}) 

			self.logSync('THE ACCUMULATED JOBS EQUALS')
			self.logSync(accumulatedJobs.length)
	
			if(accumulatedJobs.length === 0) return 
			accumulatedJobs.forEach((jobsGroup,i)=>{

				if(i === 0){
					self.logSync('tHE FIRST ARRAY')
					self.log(jobsGroup)
				}
				allJobs = [...allJobs,...jobsGroup]
				self.logSync('alljobs lengh at this point after concat')
				self.logSync(allJobs)
			})
			 


			// allJobs = accumulatedJobs[0]
			self.logSync('ALLJOBS')
			self.logSync(allJobs.length)

			
			let refinedJobs = self.refineOutsourcedJobs(allJobs) 
			if(refinedJobs.length < 1) return 
			self.logSync('the RefinedJobs')
			self.logSync(refinedJobs.length)
			
			// refinedJobs = refinedJobs.filter(async(j,i)=>{

			// 	let now = new Date() 
			// 	let jobDate = new Date(j.date) 
			// 	let yesterday = null
			// 	now.setHours(0)
			// 	now.setMinutes(0)
			// 	now.setMilliseconds(0)
			// 	jobDate.setHours(0) 
			// 	jobDate.setMinutes(0) 
			// 	jobDate.setMilliseconds(0) 
			// 	yesterday = now.getDate() - 1

			// 	// self.log('THE DATES') 
			// 	// self.log(yesterday) 
			// 	// self.log(jobDate.getDate())

			// 	if(jobDate.getDate() === yesterday) {
			// 		// await self.log('THE DATES ARE THE SAME') 

			// 		return true
			// 	}else{
			// 		// await self.log('THE DATES DONT MATCH')
			// 	}

				
			// })
			// console.log('THE DATE REFINED JOBS')
			// console.log(refinedJobs)
			
			
			self.getSubscribers('Daily')
			.then((users)=>{
				
				if(!users) return 
				
					let sendList = [] 
				
					self.logSync('THE CURRENT USERS')
					self.logSync(users)
					users.forEach((user,i)=>{
					
						if(sendList.length > 0){
						
							let email = user.email 
							let sendUser = null
							let setUser = sendList.filter((u,p)=>{
							
								if(u.email === email) return true
							
							}) 
							
							if(setUser && setUser.length > 0){ 

								sendUser = self.getMailRecipient(user,refinedJobs,true)  
							}
									
							if(sendUser){
							
								console.log('the setuser')
								console.log(setUser)
								setUser[0].send.push(sendUser)
							
							
							}else{
							
								let sendUser = self.getMailRecipient(user,refinedJobs) 
								if(sendUser){
									
									sendList.push(sendUser)
								}
							}
							
						}else{
						
						
							let sendUser = self.getMailRecipient(user,refinedJobs) 
							self.logSync('THE SENDUSER::FIRST ONE')
							self.logSync(sendUser) 

							if(sendUser){
							
								sendList.push(sendUser) 
							
							}
							
						}
					
					
					})
					
					if(sendList.length > 0){
					

						self.logSync('THE EMAILS TO BE SENT')
						self.logSync(sendList) 

						let sending = [] 
						 
						sendList.forEach((s,i)=>{

							sending.push({message:self.getEmailTemplate(s.email,s.send)})
							
						})

						self.emit({type:"send-email",data:{mail:sending,callback:self.alertEmailResponses.bind(this)}})
					
					}else{

						self.logSync('THE SENDLIST IS EMPTY')
					}
			
					
				
			})
			.catch((e)=>{
				
				self.log('query found no subscribing users')
				self.log(e)
				return 
			})
				
			
				//return                          
		
	//return response.json();
		
	
} 

export const getSubscribers = function(frequency){


	const self = this 


	return new Promise((resolve,reject)=>{

		const self = this 
		let pao = self.pao 
		// let uid = pay.ID

		let queries = {
			returnFields: ['jo_job_alert_subscriber.id','email','frequency'],
			tables:['jo_job_alert_subscriber','jo_job_alert'],
			joins: 2,
			joinPoints: ['jo_job_alert_subscriber.u_id EQUALS jo_job_alert.u_id'],
			conditions:  [`jo_job_alert_subscriber.id EQUALS KEY::alert_mail_id`,` AND jo_job_alert.frequency EQUALS ${frequency}`],
			opiks: ['field.job_keyword.as[jobKeyword]'],
	   }
	

		
	
			
		self.query(
				'mysql.SEARCH',
				queries,
				self.multiDataRequestHandler.bind(this,resolve,reject)
			)
			
	
	
	})
	


}


export const getMailRecipient = function(user,jobs,isSetUser=false){
	
	const self = this 
	const FuzzySearch = self.fuzzySearch 
	//let mailSender = `mashelesepru@gmail.com`
	// console.log('THE JOBS IN MAIL RECIPIENT')
	// console.log(jobs)
	let searchr = new FuzzySearch(jobs,{findAllMatches:true,keys:['jobTitle']}) 
	let userJobs = searchr.search(user.jobKeyword) 
	let modifiedUJobs = []
	self.logSync('THE VALUE OF FUZZYSEARCH')
	self.logSync(jobs[0])

	self.logSync(user.jobKeyword)
	self.logSync('GETMAILCLIENTS USERJOBS')
	self.logSync(userJobs[0])
	if(userJobs && userJobs.length > 0){
	
		  userJobs.forEach((job,i)=>{
			modifiedUJobs.push(job.item)

		  })
			if(modifiedUJobs.length > 10){ 
			
			    modifiedUJobs = modifiedUJobs.splice(0,10)
		
			} 
	
			if(isSetUser) return {jobs:modifiedUJobs,title:`${user.jobKeyword} jobs`}
	
		return {
				
				email: user.email,
				send: [
					
					{
						jobs:modifiedUJobs,
						title: `${user.jobKeyword} jobs`
						
					}
				]
		
			}
	
	
	}else{
	
	  return null
	}
	
	
}

export const getEmailTemplate = function(email,jobs){
	
	const self = this
	
	let mailSender = 'mashelesepru@gamil.com' 
	let jobsInHtml = [] 
	
	
	jobs.forEach((j,i)=>{
		
		   let jobsList = '<ul>' 
		   self.logSync('user list of jobs')
		   self.logSync(j) 
		   let jbs = j.jobs
		   
		   jbs.forEach((jobf,ji)=>{

			jobsList += `<li> <a href=${jobf.url}> ${jobf.jobTitle} </a></li>` 
			self.logSync('THEJOBLISTIN IN ALOOOP')
			self.logSync(jobsList) 

			// if(jobs.length > 2 && ji > 3) return false 
			// if(jobs.length === 2 && ji >= 4) return false 
			
		  

		   })

				
				//  if(job >= 4) break
		   
		  
		   self.logSync('THE JOBSLIST')
		   self.logSync(jobsList)
		  jobsInHtml.push(`
			 <div> ${jobsList}</u> <a href=https://www.jobbri.herokuapp.com> 
			 <button> View all ${j.title} </button></a></div>
		  `)
	})
	
	
	
	 return {
		 
			to: email,
			from: mailSender,
			subject: "Your job alerts subscriptions",
			html: jobsInHtml.join('')
		 
		 }
   

   
   
}


export const alertEmailResponses = function(result){

	const self = this 

	console.log('THE EMAILSENDING RESPONSE')
	console.log(result)
}


export const refineOutsourcedJobs = function(jobs){
	
	    
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains   
	let refinedJobs = []
	self.log('THE JOBS LENGTH')
	self.log(jobs.length)


	jobs.forEach((job,i)=>{
		
		self.logSync('THE CURRENT JOB')
		self.logSync(job)
		let newJob = {}
		
		newJob.jobType = job.job_type || 'Not-specified' 
		newJob.date = job.date 
		newJob.employer = job.company ? job.company.trim() != '' ? job.company : 'Unspecified' : 'Unspecified'
		newJob.jobTitle = job.title 
		newJob.url = job.url 
		
		
		if(contains(job,['salary_min','salary_max'])){ 
			newJob.jobSalary = `${job.salary_min}-${job.salary_max}`
		}else{


            if(!contains(job,'salary')){

				newJob.jobSalary =  'Market related'

			}else{

				newJob.jobSalary = job.salary.trim() !== '' ? job.salary : 'Market related'

			}
			
		}  
		
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
	const contains = pao.pa_contains
	console.log('THE PAYLOAD IN GETJOBS')
	console.log(pay)
	// let u = pay.ID
	// let catID = pay.catID
	let range = {}
	if(contains(pay,'skip') && contains(pay,'limit')){
		range = {offset:pay.skip,count: pay.limit}
	}
	
	
	return new Promise(async (resolve,reject)=>{
		
		
		// await self.log('THE BACTCHSEARCH OBJECT')
		// await self.log(self.searchBatch('office','malamulele','limpopo',range))

		console.log('GET JOBS WITH THING REQUEST')
		console.log(pay)
		// console.log(pay.filters)
		// console.log(pay.filters[0])
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
	let filters = [] 
	let blackList = ['sort','limit','currentPage','skip','jq']
   
    
    if(contains(options,'jq')){
    	   conditions.push(self.getCondition({key:options.jq},'jq'))
    }else{
		conditions.push(self.getCondition({key:202},'location').trim())
    }
    // if(contains(options,'filters') && options.filters.length >= 1){
		
	// 	let filters = options.filters.map((f,i)=>{

	// 		return {key:f.key,value:f.value,table:'jo_job',operand: 'ISEQUALS'}

	// 	})
    //   	conditions.push(self.getCondition(filters,'AND'))
	// }


	Object.entries(options).forEach((f,i)=>{

		self.log('THE ENTRIY VALUE')
		self.log(f)
		if(blackList.indexOf(f[0]) < 0){

			filters.push({key:f[0],value:f[1],table:'jo_job',operand: 'ISEQUALS'})
		}
	

	})

	console.log('THE VALUE OF THE FILTERS')
	console.log(filters)
	if(filters.length >= 1) conditions.push(self.getCondition(filters,'AND'))
	
	return conditions
 
} 

export const getCondition = function(option,id=''){
	
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	 switch(id){
	 	
	 	case 'jq':
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
	 self.log('THE FORMAT QUERY OPTIONS')
	 self.log(options) 
	 self.log(an)
	 
	 let stri = ''
	 
	  
	    options.forEach((i,p)=>{
	    	
	    	   if(p === 0 && i.key === 'jl'){ 
			   
				  if(len === 1){

					stri += `${an.toUpperCase()} GROUP::2 START city_name EQUALS [${i.value}]; OR state_name EQUALS [${i.value}]`

				  }else{
					stri += `${an.toUpperCase()} GROUP::${len} START GROUP::2 START city_name EQUALS [${i.value}], OR state_name EQUALS [${i.value}]; `
				  }
	    	      
	    	   	
	    	   }else if(p === 0){
	    	   	
	    	   	 let derivedKey = self.getDbKey(i.key) 
	    	   	 
	    	   	 	 if(i.key === 'jdp'){
					
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
	    	   	 if(i.key === 'jdp'){
					
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

export const getDbKey = function(i,sors='jobbri'){
	
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains

	if(sors === 'jobbri'){

		switch(i){
	    	   	 	
	    	 
	    	   	 
			case 'jt': return 'job_type'
			case 'jsr': return 'salary'
			case 'jcl': return 'exp_level' 
			case  'jcts':  return 'job_category_id' 
			case 'je': return 'experience_required_years'
			default: return i
			
			
		} 
		

	}else{

		switch(i){
	    	   	 	
	    	 
	    	   	 
			case 'jt': return 'contractperiod'
			case 'jsr': return 'salary'
			case 'currentPage': return 'page'
			case 'jcts': return 'exp_level' 
			case 'je': return 'experience_required_years'
			case 'jl': return 'location'
			default: return i
			
			
		} 
		
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
					'field.job_type.as[jobType]','field.approved_at.as[date]','field.is_featured.as[isFeatured]',
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

export const multiDataRequestHandler = function(resolve=null,reject=null,e=null,result=null){
	
	
	const self = this 
	let pao = self.pao
	console.log('THE TYPE OF E IN DATAREQUEST HANDLER')
	console.log(e)
	if(e) reject(new Error('An error has occured Inside MYSQL'))
	resolve(result)

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