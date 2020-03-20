


export const init = function(){
  
  
  this.log('History has been initialised') 
  this.listens({
		
	'handle-bookmark-task': this.handleHistoryTask.bind(this)
  
  })

	
}


export const handleHistoryTask = function(data){

  const self = this 
	const pao = self.pao
	const contains = pao.pa_contains
	let user = data.payload.user
	self.callback = data.callback
	console.log('THE DATA INSIDE BOOKMARK')
	console.log(user)
	
	if(!user.action) return self.callback({message: "missing required data"},null) 
	
	switch(user.action){
		
		case 'save': {
			
			 if(isObject(user.payload)){
			 	
			 	 if(!contains(user.payload,['id','job_id','keyword'])){
			 	 	
			 	 	 self.callback({message:'Bad request'},null)
			 	 }else{
			 	 	
			 	 	self.saveHistory(user.payload)
			 	 	
			 	 }
			 }else{
			 	
			 	 self.callback({message:'Bad request'},null)
			 	
			 }
		}
		break
		case 'delete': {
			
			if(isObject(user.payload)){
			 	
			 	 if(!contains(user.payload,['id','job_id'])){
			 	 	
			 	 	 self.callback({message:'Bad request'},null)
			 	 }else{
			 	 	
			 	 	self.deleteHistory(user.payload)
			 	 	
			 	 }
			 }else{
			 	
			 	 self.callback({message:'Bad request'},null)
			 	
			 }
			
		}
		break;
		case 'retrieve':{
			
			if(isObject(user.payload)){
			 	
			 	 if(!contains(user.payload,['id'])){
			 	 	
			 	 	 self.callback({message:'Bad request'},null)
			 	 }else{
			 	 	
			 	 	self.getHistory(user.payload)
			 	 	
			 	 }
			 }else{
			 	
			 	 self.callback({message:'Bad request'},null)
			 	
			 }
		}
		break
		default: self.callback({message:'Invalid request'},null)
	}

} 


export const saveHistory = function(data){
	
	
	const self = this 
	let pao = self.pao 

	
   self.query(
		'mysql.jo_search_history.insert',
		  {id:1,u_id:data.id,job_id:data.jobId,job_category:data.jobCategoryId,created_at: new Date()},
		  self.dataRequestHandler.bind(this)
	)


}

export const getHistory = function(data){
	
	const self = this 
	let pao = self.pao 

	
	 let rest = {
		  
	 	conditions: [`u_id EQUALS ${data.id}`],
	 	limit: 5
		
	  }
	  
	  
	self.query(
		'mysql.jo_search_history.find',
		  rest,
		  self.dataRequestHandler.bind(this)
	)
	

}



export const deleteHistory = function(data){
	
	
	const self = this 
	const pao = self.pao 
	

  self.query(
  
		'mysql.jo_search_history.remove',
		  data,
		  self.dealRequestHandler(response)
	 )
	

	

}

export const dataRequestHandler = function(e=null,data=null){

 
	const self = this
	const pao = self.pao 
	self.log("Executing DataRequestHandler:ADASH")
	self.log(data)
	self.callback(null,data)



} 




