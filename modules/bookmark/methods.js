


export const init = function(){
  
  
  this.log('Bookmark has been initialised') 
  this.listens({
		
	'handle-bookmark-task': this.handleBookmarkTask.bind(this)
  
  })

	
}


export const handleBookmarkTask = async function(data){

	
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
		
		case 'getBookmarks': {
			
			self
			.getSavedBookmarks(user.payload)
			.then((bookmarks)=>{self.callback(null,bookmarks)})
			.catch((e)=>{
				console.log('Reject error')
				console.log(e)
				self.callback(e,null)
			})
		}
		break;
		case 'bookmarkItem':{
			
			self.bookmark(user.payload)
			.then((bookmarkStatus)=>self.callback(null,bookmarkStatus))
			.catch((e)=>self.callback(e,null))
		}
		break;
		case 'deleteBookmark':{
			
			self.deleteBookmark(user.payload)
			.then((deleted)=>self.callback(null,deleted))
			.catch((e)=>self.callback(e,null))
		}
		break;		
		default: 
		self.callback(new Error('Unknown data request'),null)
		
		
	}

	

} 


export const bookmark = function(pay){
	
	
	const self = this 
	let pao = self.pao 

	
   self.query(
		'mysql.jo_job_bookmark.insert',
		  {id:1,u_id:data.id,job_id:data.jobId,job_category:data.jobCategoryId,created_at: new Date()},
		  self.dataRequestHandler.bind(this)
	)


}

export const getSavedBookmarks = function(pay){
	
	

	
	return new Promise((resolve,reject)=>{

		const self = this 
		let pao = self.pao 
		let uid = pay.ID

		let queries = 
				{
					returnFields: ['id'],
					tables:['jo_job_bookmark'],
					conditions: [`u_id EQUALS ${uid}`],
					opiks: ['field.u_id.as[userID]','field.job_id.as[jobID]','field.job_title.as[jobTitle]','field.logo_url.as[logo]','field.salary.as[jobSalary]',
					'field.company_name.as[employer]','field.salary_currency.as[currency]',
					'field.job_type.as[type]','field.post_date.as[postDate]','field.date_bookmarked.as[dateBookmarked]'],
					sort: 'order[jobTitle].asc',
					
			}
		
	
			
		self.query(
				'mysql.SEARCH',
				queries,
				self.multiDataRequestHandler.bind(this,resolve,reject)
			)
			
	
	
	})
	

}



export const deleteBookmark = function(pay){
	
	
	return new Promise((resolve,reject)=>{
		
		
		const self = this 
		const pao = self.pao 
		let uid = pay.ID
		let alertID = pay.alertID
		
		
		let queries = {conditions: [`u_id EQUALS ${uid} `,`AND id EQUALS ${alertID}`]}
	
		self.query(
				'mysql.jo_job_bookmark.remove',
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




