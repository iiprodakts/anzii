



export const init = function(){
  
  
  this.log('Authentication has been initialised')
  this.listens({
		
		'share-middleware': this.handleShareMiddleware.bind(this)
		
	})
	
	
	
}


export const handleShareMiddleware  = function(){

	  const self = this 

	   console.log('HANLDE SHARE MIDDLEWARE EVENT HAS OCCURED')
	   self.emit({
	   	  
	   	  type: "add-ext-middleware",
	   	  data: {
	   	  	
	   	  	type: 'private',
	   	  	level: 'top',
	   	  	middleware: {funk: self.auth.bind(self)}
	   	  }
	   	
	   })

	  

} 

export const auth = function(req,res,next){
	
	  const self = this 
	  self.log('THE REQUEST HEADERS')
	  self.log(req.headers)
	 
	  if(req.headers['x-auth-token']){
	  	
	  	let token = req.headers('x-auth-token') 
	  	self.emit({
	  		type: 'verify-jwt-token',
	  		data: {
	  			
	  			token: {
	  				token: token,
	  				 re: {req,res,next},
	  				callback: self.token.bind(this)
	  			}
	  		}
	  	})
	  	
	  	
	  }else{
		  
		console.log('THE X-AUTH DOES NOT EXIST')

	  	self.emit({
	  		type:'write-server-request-response',
	  		data: {
				  data: {  error: true,message: 'Required token header required'},
				  res: res
	  		
	  		}
	  		})
	  	
	  }
	
	
} 


export const token = function(e,r,re){
	
	const self = this 
	self.log('Authentication Middleare executed')
	
	
	
	if(e){
		
		 let data = {
		  error: true,
		  message: "Invalid token"
		  
		  }
		self.emit({
			type: 'write-request-response',
			data:{ 
			 data: data,
			 res: re.res
			
			}
			
		})
		
	}else{
		
		re.req.user = r
		re.next()
		
	}
	
}



	

  
