



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
	  self.request = {req,res,next}
	  self.log(req.headers)
	 
	  if(req.headers['x-auth-token']){
	  	
	  	let token = req.headers['x-auth-token']
	  	self.emit({
	  		type: 'verify-jwt-token',
	  		data: {
	  			
	  			
	  			token: token,
	  			callback: self.token.bind(this)
	  			
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


export const token = function(e=null,r=null){
	
	const self = this 
	self.log('Authentication Middleware executed')
	
	if(e){
		
		 console.log(e)
		 let data = {
		  error: true,
		  message: "Invalid token"
		  
		  }
		self.emit({
			type: 'write-server-request-response',
			data:{ 
			 data: data,
			 res: self.request.res
			
			}
			
		})
		
	}else{
		
		// re.req.user = r 
		console.log('THE SUCCESSFULLY VERIFIED TOKEN')
		console.log(r)
		self.request.next()
		
	}
	
}



	

  
