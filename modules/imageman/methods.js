


export const init = function(){
  
  
  this.log('Job has been initialised') 
  this.listens({
		
	'handle-manipulate-image': this.handleManipulateImage.bind(this),
	'handle-resize-image': this.handleResizeImage.bind(this),
	'handle-greyscale-image': this.handleResizeImage.bind(this),
	'handle-crop-image': this.handleResizeImage.bind(this),
  'handle-scale-image': this.handleResizeImage.bind(this) 
  
  
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
	self.resizeImage(data)
	 .then((resized)=>{
	 	
	 	   data.callback(null,resized)
	 	
	 	})
	 .catch((e)=>{
	 	
	 	  data.callback(e,null)
	 	
	 })

} 

export const resizeImage = function(data){


	const self = this 
	const grafix = self.grafix
	const {image,dimensions} = data 
	const {x,y} = dimensions

	
	
	return new Promise((resolve,reject)=>{

       grafix.read(image)
       .then((img)=>{
       	
       img.resize(x,y)
       .then((resized)=>resolve(resized))
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


