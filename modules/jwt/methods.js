


export const init = function(){
  
  
    console.log('Jwt has been initialised')
	this.listens({
		
		'save-jwt-key': this.handleSaveJwtKey.bind(this),
		'create-jwt-token': this.handleCreateToken.bind(this),
		'verify-jwt-token': this.handleVerifyToken.bind(this)
		
	})
	
	
	
}


export const handleSaveJwtKey = function(data){

 
	const self = this 
	self.log("Saving Jwt Key") 
	self.key = data.key


} 


export const handleCreateToken = function(data){

 
	const self = this 
	self.log("Jwt Token create request") 
	if(data.hasOwnProperty('payload')){
		 
		self.jwtSign(data)
	}
	


} 


export const handleVerifyToken = function(data){

 
	const self = this 
	self.log("Jwt Token verify request") 
	
	if(data.hasOwnProperty('token')){

		self.jwtVerify(data)
	}
	


} 


export const jwtSign = async function(jw){

	  const self = this 
	  
	   try{ 
	   
		 let token = await self.jwt.sign(jw.payload,self.key) 
		 let tk = {token: token,user: jw.payload}
		 console.log('TOKEN SUCCESSFULLY CREATED')
		 console.log(token)
		 jw.callback(null,tk)
		 
	   }catch(e){
	   	
	   	  jw.callback(e,null)
	   	
	   }

	  

} 


export const jwtVerify  = async function(token){

	  const self = this 
	  self.log('Verifying Tokens')
	  
	  try{
	  	
	  	  let verified = await self.jwt.verify(token.token,self.key) 
	  	  
	  	  if(verified){
	  	  	
	  	  	 token.callback(null,verified)
	  	  }
	  	  
	  	
	  }catch(e){
	  	
	  	  token.callback(e,null)
	  }
	  
	  
}








