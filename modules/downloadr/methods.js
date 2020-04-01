


export const init = function(){
  
  
  this.log('FileMan has been initialised') 
  this.listens({
		
	'handle-downloadr-task': this.downloadrTaskHandler.bind(this),
	// 'handle-remove-file': this.handleRemoveFile.bind(this)
   
  })

	
}


 

export const downloadrTaskHandler = async function(data){

	
	const self = this 
	let user = data.payload.user
	self.callback = data.callback

	// console.log('the download data')
	// console.log(data)

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
//  console.log('T=RECEIVE FILE DATA')
//  console.log(file)
 self.callback(null,{rStream: file.readStream,ext: file.ext},'stream')

}

