


export const init = function(){
  
  
	console.log('Middleware has been initialised') 
  //   console.log(this.pao)
  //   console.log(this)
	  this.listens({
		  
		'add-middleware': this.handleAddMiddleware.bind(this),
  })
	 
	  
	  
  }
  

  export const handleAddMiddleware = function(data){

	 this.addMiddleware(data)

  }


  export const addMiddleware = function(data){


	 console.log('aDD MIDDLWARE DATA')
  }
  
  
  
  
  
 
  
  