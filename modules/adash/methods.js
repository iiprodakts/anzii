


export const init = function(){
  
  
  this.log('Bookmark has been initialised') 
  this.listens({
		
	'handle-adash-task': this.handleAdashTask.bind(this)
  
  })

	
}


export const handleAdashTask = function(data){

	console.log(data)
	const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	const isOBject = pao.pa_isObject
	let user = data.payload.user
	self.callback = data.callback

	if(!isOBject(user)) return self.callback({message: 'User has not been specified'},null)
	if(!contains(user,['ID'])) return self.callback({message: 'missing required key'},null)

	let uid = user.ID
	console.log('THE DATA INSIDE Adash')
	console.log(user)
	
	console.log('THE PARSED DATA TEST')
	console.log(data)
	console.log(user)



 return	self
	.getApplicantTools(uid)
	.then((counts)=>{self.callback(null,counts)})
	.catch((e)=>{
		console.log('Reject error')
		console.log(e)
		self.callback(e,null)
	})

} 


export const getApplicantTools = function(uid){
	
	
    const self = this 
	
return new Promise((resolve,reject)=>{


	let queries = [
		{table: 'jo_job_alert',opiks: ['fuxin.count.options[*].as[alertsCount]'],conditions:[`u_id EQUALS ${uid}`]},
		{table:'jo_job_bookmark',opiks: ['fuxin.count.options[*].as[savedCount]'],conditions:[`u_id EQUALS ${uid}`]},
		{table:'jo_search_history',opiks: ['fuxin.count.options[*].as[historyCount]'],conditions:[`u_id EQUALS ${uid}`]}
	]

	self.query(
			'mysql.multiple.find',
			queries,
			self.dataRequestHandler.bind(this,resolve,reject)
		)
		

})
	

}

export const dataRequestHandler = function(resolve=null,reject=null,e=null,result=null){

 
	const self = this
	const pao = self.pao 

	console.log('THE TYPE OF E IN DATAREQUEST HANDLER')
	console.log(typeof e)
	console.log(e)
	console.log(resolve)
	console.log(reject)
	if(e) reject(new Error('An error has occured Inside MYSQL'))
	resolve(result)
	
	// self.log("Executing DataRequestHandler:ADASH")
	// self.log(data)
	// self.callback(null,data)



} 

