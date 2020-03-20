


export const init = function(){
  
  
  this.log('Job has been initialised') 
  this.listens({
		
	'handle-notifier-task': this.handleNotifierTask.bind(this)
  
  })

	
}


export const handleNotifierTask = function(data){

	
	const self = this 
    self.getJobs(data)

} 


export const saveNotfierCandidate = function(data){
	
	
	const self = this 
	let pao = self.pao

	self.callback = data.callback

	console.log('THE PARSED DATA JOBGETJOBS')
	console.log(data)
	console.log(data.user.parsed.user.search.key)
	let search = data.user.parsed.user.search
	// console.log(data.parsed.search)

 
	self.query(
		'mysql.jo_launch_notify.insert',
		 {email: data.email,launch_type: data.launch},
		  self.searchBatchHandler.bind(this)
	)


}

export const notifyCandidate = function(data){
	
	
	const self = this 
	let pao = self.pao
	

	

	

}

export const getNotifiedList = function(data){
	
	
	const self = this 
	let pao = self.pao
	let cpus = 4

	console.log(data)
	if(data.hasOwnProperty('callback')){

		data.callback(null,{fetch: ['Fetch','the','data',cpus]})

			
		
	}else{

	}

} 


export const removeNotifierCandidates = function(data){
	
	
	const self = this 
	let pao = self.pao
	let cpus = 4

	console.log(data)
	if(data.hasOwnProperty('callback')){

		data.callback(null,{fetch: ['Fetch','the','data',cpus]})

			
		
	}else{

	}

} 


