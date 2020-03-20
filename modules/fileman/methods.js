


export const init = function(){
  
  
  this.log('FileMan has been initialised') 
  this.listens({
		
	'handle-save-file': this.handleSaveFile.bind(this),
	'handle-remove-file': this.handleRemoveFile.bind(this)
   
  })

	
}


export const handleParseFile = async function(data){

	
	const self = this 
	const {fileName,size,save} = data 
	
      	self
      	.validateFile(fileName,size)
      	.then((valid)=>{
      		
      		if(save){
      			
      			self.beginFileSave(data)
	        .then((response)=>{
		
		        self.callback(null,response)
	        })
	       .catch((e)=>{

			self.callback(e,null)
		   })
	
      			
      			
      		}else{
      			
      			self.callback(null,valid)
      		}
      	})
      	.catch((e)=>{
      		
      		reject(new Error(e.message))
      		
      	})
	
   

} 

export const handleSaveFile = async function(data){

	
	const self = this 
	
	self.beginFileSave(data)
	.then((response)=>{
		
		self.callback(null,response)
	})
	.catch((e)=>{
		
		self.callback(e,null)
	})
	
	
  

} 

export const beginFileSave = function(file){

	
	 const self = this 
	
    return new Promise((resolve,reject)=>{
   
      	self
      	.validateFile(fileName)
      	.then((valid)=>{
      		
      		self
      		.saveFile(file)
      		.then((savedFile)=>{
      			
      			resolve(savedFile)
      		})
      		.catch((e)=>{
      			
      			reject(new Error(e))
      		})
      		
      	}).
      	catch((e)=>{
      		
      		reject(new Error(e))
      	})
      	
     
  	  
    	
    })
} 


export const handleMakeFile = function(data){

	
	const self = this 
    self.getJobs(data)

} 

export const handleRenameFile = async function(oldPath){

	
	const self = this 
   self.renameFile(oldPath)
   .then((newFile)=>{
   	
   	 self.callback(null,newFile)
   })
   .catch((e)=>{
   	
   	self.callback(e,null)
   })
  

} 





export const handleRemoveFile = function(filePath){

	
	const self = this 
   
   return new Promise((resolve,reject)=>{
   	
   	fs.unlink(filePath).then(()=>resolve(true)).catch((e)=>{reject(new Error(e.message))})
   	
   })

}

export const generateFileName = function(fileName){

	
	const self = this 
	const crypto = self.crypto 
  
  return new Promise((resolve,reject)=>{
  	
  	    // create pseudo random bytes 
  	    const bytes = crypto.pseudoRandomBytes(32);
  	   // create the md5 hash of the random bytes 
  	    const checksum = crypto.createHash('MD5').update(bytes).digest('hex'); 
  	    
  	    self
    	  .FileType.fromFile(fileName)
    	  .then((type)=>{
    	  	
    	  	  if(type.ext){
    	  	  	
    	  	  	  resolve(`${checksum}.${type.ext}`)
    	  	  	 
    	  	  }else{
    	  	  	
    	  	  	 reject(new Error('Extension Error'))
    	  	  }
    	  	 
    	  })
  	    
  	    

  	
  })

} 

export const validateFile = function(fileName,size=0){

	
	const self = this 
	
	
    return new Promise((resolve,reject)=>{
    	
    	
    	 self
    	  .FileType.fromFile(fileName)
    	  .then((type)=>{
    	 	
    	 	   	 if(self.supportedFileTypes.indexOf(type.ext) < 0){
    	 	
    	 	          reject('Filetype not supported')
    	        }else{
    	 	
    	 	          if(size > 0){
    	 	          	
    	 	          	 if(size > fileName.size){
    	 	          	 	
    	 	          	 	  reject(new Error('File exceed accepted size'))
    	 	          	 	
    	 	          	 }else{
    	 	          	 	
    	 	          	 	resolve(true)
    	 	          	 }
    	 	          	
    	 	          }else{
    	 	          
    	 	           resolve(true)
    	 	          
    	 	          }
    	          }
    	  }).catch((e)=>{
    	  	
    	  	   reject(new Error(e.message))
    	  })
    	
   
    	  
    })

} 

export const saveFile = async function(file){

	
	const self = this 
	const pao = self.pao 
  const fs = self.fs 
  
  return new Promise((resolve,reject)=>{
  	
  	
  	
  	
  	let {fileName,path,generateName} = file
  	
  	let name = generateName ? await self.generateFileName(fileName) : fileName
	
	if(!( name instanceof String)) return reject(new Error(name.message))
	
  let savePath = `${self.dir}${path}${name}`
  let wStream = fs.createWriteStream(savePath) 
  let rStream = fs.createReadStream(name) 
  
  wStream.on('end',()=>{
  	
  	 resolve({savedFile: savePath})
  })
  
  wStream.on('error',()=>{
  	
  	reject(new Error('Writablestream encountered an error'))
  	
  })
  
  rStream.on('error',()=>{
  	
  	 reject(new Error('Readablestream encountered an error'))
  	
  })
  
  rStream.pipe(wStream) 
 
  	
  })
  
 
} 


export const renameFile = function(fileName){
	
	const self = this 
	const fs = self.fs 
	let name = await self.generateFileName(fileName)
	
	return new Promise((resolve,reject)=>{
		
		 fs.rename(fileName,name)
		 .then((newFile)=>{
		 	 
		 	 resolve(newFile)
		 	 
		 })
		 .catch((e)=>{
		 	
		 	reject(new Error(e.message))
		 	
		 })
		
	})
	
}








