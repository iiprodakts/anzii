


export const init = function(){
  
  
  this.log('Upload has been initialised') 
  this.listens({
		
	'handle-upload-task': this.handleUploadTask.bind(this)
  
  })

	
}


export const handleUploadTask = async function(data){

	
	const self = this 
	self.callback = data.callback
	let user = data.payload.user
	let userID = user.uploads.fields.ID
	let file = user.uploads.files.far.path
	await self.log('THE USER DATA UPLOAD')
	await self.log(user)

	self.modifyFile(file,'resize-image')
	.then((resized)=>{

		self.getUploads(user,userID,resized)
		.then((uploaded)=>{

			self.saveFileUrlToDb(uploaded.url,userID)
			.then((saved)=>{
				
				self.callback(null,{updated: saved})
			})
			.catch((e)=>{

				self.callback(e)

			})
			// self.callback(null,uploaded)
		})
		.catch((e)=>{self.callback(e,null)})


	})
	.catch((e)=>{

	})

	
} 


export const modifyFile = function(file,event){

	console.log('ABOUT TO SEND THE FILE TO IMAGEMAN')

	const self = this 


	return new Promise((resolve,reject)=>{

		let fileOptions = {

			dimensions: {x: 250,y: 250},
			image: file
	
		}
	
		console.log(file)
	
		self.emit({type: event,data: {image: fileOptions,callback: self.handleImageManipulation.bind(this,resolve,reject)}})

	})
	
	// console.log('CHECK IF ASYNC FROM ANOTHER MODULE EXECUTES ACCORDINGLY')
}

export const getUploads = function(pay,userID,resized){
	
	
	const self = this 
	let pao = self.pao 
	let files = pay.uploads.files 
	files.resized = resized
	

	return new Promise((resolve,reject)=>{

			self.emit({type:'save-file',data: {files: files,multiple: false,dir: '/uploads',ID: userID,saveType:'rename',callback: self.handleFileSave.bind(this,resolve,reject)}})

	})
	




}

export const handleFileSave = function(resolve,reject,e=null,saveResponse=null){


	 if(e){
		 reject(e)
	 }else{
		 resolve(saveResponse)
	 }

}

export const saveFileUrlToDb = function(url,uid){

	const self = this 

	return new Promise((resolve,reject)=>{

		let queries = 
			{conditions: [`id EQUALS ${uid} `],
			 set: [{profile_url:url}]
			}
		
	
		self.query(
				'mysql.jo_user.updateOne',
				queries,
				self.dataRequestHandler.bind(this,resolve,reject)
			)



	})



	
	
}

export const dataRequestHandler = function(resolve,reject,e=null,success){

	if(e) return reject(e)
	resolve(success)

}

export const handleImageManipulation = function(resolve,reject,e=null,resizeResponse){

	if(e){
		reject(e)
	}else{
		resolve(resizeResponse)
	}
}

