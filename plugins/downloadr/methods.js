


export const init = function(){
  
  
  this.adLog('FileMan has been initialised') 
  this.listens({
		
	'handle-downloadr-task': this.downloadrTaskHandler.bind(this),
	// 'handle-remove-file': this.handleRemoveFile.bind(this)
   
  })

	
}


 

export const downloadrTaskHandler = async function(data){

	
	const self = this 
	let user = data.payload.user
	self.callback = data.callback

	// self.pao.pa_wiLog('the download data')
	// self.pao.pa_wiLog(data)

	self.infoSync('Handling downloadr task Handler')
	self.infoSync(data)
	self.infoSync(user)

	self.emit({type: 'get-file',data: {
		fileName: user.fileName,
		filePath: 'uploads',
		getType: 'stream',
		callback: self.receiveFile.bind(self)
	}})
	// data.callback(null,{downloadr: 'successfully created'})
	
	// self.beginFileSave(data)
	// .then((response)=>{
		
	// 	self.callback(null,response)
	// })
	// .catch((e)=>{
		
	// 	self.callback(e,null)
	// })
	
	
  

} 

export const receiveFile = function(file){

 let self = this 
 self.infoSync('THE received file')
//  self.pao.pa_wiLog('T=RECEIVE FILE DATA')
//  self.pao.pa_wiLog(file)
 return self.callback(null,{rStream: file.readStream,ext: file.ext},'stream')

}

