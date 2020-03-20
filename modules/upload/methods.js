


export const init = function(){
  
  
  this.log('Upload has been initialised') 
  this.listens({
		
	'handle-upload-task': this.handleJobTask.bind(this)
  
  })

	
}


export const handleUploadTask = function(data){

	
	const self = this 
    self.geUploads(data)

} 


export const getUploads = function(data){
	
	
	const self = this 
	let pao = self.pao
	let user = data.payload.user
	self.callback = data.callback

	console.log('THE PARSED DATA JOBGETUPLOADS')
	console.log(data)
	console.log(user)
	self.callback(null,{message: 'Uploads successfully retrieved'})
	// let search = user.search
	// console.log(data.parsed.search)





}



