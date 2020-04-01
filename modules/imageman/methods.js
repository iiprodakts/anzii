


export const init = function(){
  
  
  this.log('Job has been initialised') 
  this.listens({
		
	'manipulate-image': this.handleManipulateImage.bind(this),
	'resize-image': this.handleResizeImage.bind(this),
	'greyscale-image': this.handleResizeImage.bind(this),
	'crop-image': this.handleResizeImage.bind(this),
    'scale-image': this.handleResizeImage.bind(this) 
  
  
  })

	
}


export const  handleManipulateImage = async function(data){


	const self = this 
	self.getJobs(data)
	
	return new Promise((resolve,reject)=>{




	})
	

}

export const handleResizeImage = async function(data){


	const self = this 
	self.callback = data.callback
	let imageData = data.image
	self.resizeImage(imageData)
	 .then(async function(resized){
		 
		   await self.log('THE RESIZED IMAGE')
		   await self.log(resized)
	 	   self.callback(null,resized)
	 	
	 	})
	 .catch((e)=>{
	 	
	 	  self.callback(e,null)
	 	
	 })

} 

export const resizeImage = function(imageData){


	const self = this 
	const grafix = self.grafix
	const {image,dimensions} = imageData
	const {x,y} = dimensions

	
	
	return new Promise((resolve,reject)=>{

       grafix.read(image)
       .then((img)=>{
		   
			 console.log('READ IMAGE IMAGE ')
			 console.log(img)
			 console.log(img.resize)
			img.resize(x,y)
			.writeAsync(image)
			.then((resized)=>{
				console.log('THE WRITTEN IMAGE')
				console.log(resized)
				resolve(resized)

			})
			.catch((e)=>{
				
			 	reject(new Error(e.message))
			 })

			 
       	
       })
       .catch((e)=>{
       	
       	 reject(new Error(e.message))
       	
       })


	})
	

} 



export const handleCropImage = function(data){


	const self = this 
	self.getJobs(data)
	
	return new Promise((resolve,reject)=>{




	})
	

}

export const greyScale = function(data){


	const self = this 
	self.getJobs(data)
	
	return new Promise((resolve,reject)=>{




	})
	

}


