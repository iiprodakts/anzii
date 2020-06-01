


export const init = function(){
  
  
	this.log('History has been initialised') 
	this.listens({
		  
	  'handle-history-task': this.handleHistoryTask.bind(this)
	
	})
  
	  
  }
  
  
  export const handleHistoryTask = async function(data){
  
	  
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
  
	  if(!isOBject(user)) return self.callback({message: 'User has not been specified'},null)
	  if(!user.action) return self.callback({message: 'Invalid request'},null)
	  if(!contains(user,['payload'])) return self.callback({message: 'missing required key'},null)
	  if(!contains(user.payload,['ID'])) return self.callback({message: 'missing required key'},null)
	
	  switch(user.action){
		  
		  case 'getHistory': {
			  
			  self
			  .getSavedHistory(user.payload)
			  .then((history)=>{self.callback(null,history)})
			  .catch((e)=>{
				  console.log('Reject error')
				  console.log(e)
				  self.callback(e,null)
			  })
		  }
		  break;
		  case 'saveHistory':{
			  
			  self.saveHistory(user.payload)
			  .then((saveStatus)=>{

				  
				if(saveStatus.affectedRows >= 1) return self.callback(null,{actionStatus:true})
				self.callback(null,{actionStatus:false})
				
				})
			  .catch((e)=>self.callback(e,null))
		  }
		  break;
		  case 'deleteHistory':{
			  
			  self.deleteHistory(user.payload)
			  .then((deleted)=>self.callback(null,deleted))
			  .catch((e)=>self.callback(e,null))
		  }
		  break;		
		  default: 
		  self.callback(new Error('Unknown data request'),null)
		  
		  
	  }
  
	  
  
  } 
  
  
  export const saveHistory = function(pay){
	  
	  
  
  
	  return new Promise((resolve,reject)=>{
  
		  const self = this 
		  let pao = self.pao 
		  let uid = pay.ID 
		  let history = pay.history 
		  const {keyword,location} = history 
		  self.log('THE SEARCHED TERM LOCATION')
		  self.log(location)
  
		  let query = {
					  
					  fields: ['u_id','keyword','date_searched'],
					  values: [uid,keyword,new Date()]
			  }
		  
	  
	  
		  self.query(
				  'mysql.jo_search_history.insert',
					query,
					self.multiDataRequestHandler.bind(this,resolve,reject)
			  )
			  
	  
	  
	  })
  
	  
	 
  
  
  }
  
  export const getSavedHistory = function(pay){
	  
	  
  
	  
	  return new Promise((resolve,reject)=>{
  
		  const self = this 
		  let pao = self.pao 
		  let uid = pay.ID
  
		  let queries = 
				  {
					  
					  tables:['jo_search_history'],
					  conditions: [`u_id EQUALS ${uid}`],
					  opiks: ['field.u_id.as[userID]','field.keyword.as[searchTerm]','field.date_searched.as[dateSearched]']
			  }
		  
		  self.query(
				  'mysql.SEARCH',
				  queries,
				  self.multiDataRequestHandler.bind(this,resolve,reject)
			  )
			  
	  
	  
	  })
	  
  
  }
  
  
  
  export const deleteHistory = function(pay){
	  
	  
	  return new Promise((resolve,reject)=>{
		  
		  
		  const self = this 
		  const pao = self.pao 
		  let uid = pay.ID
		  let alertID = pay.alertID
		  
		  
		  let queries = {conditions: [`u_id EQUALS ${uid} `,`AND id EQUALS ${alertID}`]}
	  
		  self.query(
				  'mysql.jo_job_history.remove',
				  queries,
				  self.multiDataRequestHandler.bind(this,resolve,reject)
			  )
			  
		  
	  })
	  
  
  }
  
  export const multiDataRequestHandler = function(resolve=null,reject=null,e=null,result=null){
	  
	  
	  const self = this 
	  let pao = self.pao
	  console.log('THE TYPE OF E IN DATAREQUEST HANDLER')
	  console.log(e)
	  if(e) reject(new Error('An error has occured Inside MYSQL'))
	  resolve(result)
  
  }
  
  
  
  
  