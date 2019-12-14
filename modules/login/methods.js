

export const init = function(){
  
  
  console.log('Login has been initialised')
	this.listens({
		
		'handle-login-task': this.handleLoginTask.bind(this),
		
		
	})
	
	
	
}



export const handleLoginTask= function(data){

 
	const self = this 
	self.log("Handling Login task")
	self.log(data)
	self.loginStrategy(data)

} 


export const loginStrategy = function(data){

 
	const self = this 
	const pao = self.pao 
	let user = data.user.parsed.user
	
	if(!pao.pa_contains(user,'strategy')){
		
		data.callback('Missing required Strategy',null)
		
	}else{
		
		if(!pao.pa_contains(self.strategies,user.strategy)){
			
			  data.callback('Specified strategy not supported')
		
		}else{
			
			console.log('STRATEGY: CURRENT')
			console.log(user.strategy)
			self.tmpd = data
			self[user.strategy](data)
		}
		
	}
	
	


} 

export const anzii = function(data){

 
	const self = this
	const pao = self.pao 
	self.log("Executing Anzii registration strategy")

  if(!pao.pa_contains(data,'user')){
	  
	
  }else{
  	let user =  data.user.parsed.user
  	if(!(pao.pa_contains(user,['email','password']))){
		  
		data.callback({message: 'missing required keys for registration'})
  		
  	}else{
  		
  		 if(!pao.pa_isValidEmail(user.email) || !pao.pa_isValidPassword(user.password)){ 
  		 
  		  data.callback({message: 'either password or email is invalid'})
  		 	
  		 }else{
			   
			self.isUserExist(data)
  		 	
  		 }
  		
  	}
  	
  }



 

} 


export const social = function(data){

	  const self = this 
	  self.log('Executing Social registration strategy')
	  
	  

} 


export const isUserExist  = function(data){

	  const self = this 
	  let user =  data.user.parsed.user
	  self.log('Checking if user is taken') 
	  self.callback = data.callback
	  self.query(
	      'mysql.f_users.findOne',
			{user: user.email},
			self.findHandler.bind(this)
	  )
	  
	 
	  
}


export const setTokenHeader = function(e=null,token=null){

	const self = this 
	const pao = self.pao 

	if(e){

		console.log('TOKEN CREATION FAILED')
		console.log(e)
		self.callback(e)

	}else{

		console.log('TOKEN CREATION SUCCESSFULL')
		console.log('SETTING TOKEN HEADER')
		console.log(self.tmpd)
		self.tmpd.user.request.res.set('X-AUTH-TOKEN',token.token) 
		self.callback(null,{user: token.user})

	}
	
}

export const findHandler = async function(e =null,r = null){

	const self = this 
	const pao = self.pao 


	if(e){

		self.callback({message: 'An error occured attempting to find user'},null)

	}else{

		if(!r || (pao.pa_isArray(r) && r.length > 0)){

			self.callback({message: 'User does not exist'},null)

		}else{

			self.log('Login User exist')
			self.log(r)
			self.log(self.tmpd)
            let password = self.tmpd.user.parsed.user.password
			self.emit({type: 'compare-payload',data:{payload: {plainpass: password,hash: r.password },callback: self.compare.bind(this)}})
			
			
		}
	}
	// token.res.set('X-AUTH-TOKEN',token.tk)
}

export const compare = function(e=null,c=null){

	const self = this 
	if(e){

		console.log(e)
		self.callback({message: 'Login failed due to server error:hash'})
		
	}else{

		

		if(c){
			
			self.log('Login User is valid')
		    self.log(c)
			let user = {email: self.tmpd.user.parsed.user.email,username: 'sample'}
			self.emit({type:'create-jwt-token',data:{payload: user,callback: self.setTokenHeader.bind(self)}})

		}else{

			self.callback({message: 'Invalid login'},null)
		}

	}
	

}






