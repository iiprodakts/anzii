


export const init = function(){
  
  
    console.log('Mailer has been initialised')
	this.listens({
		
		'config-mailer': this.handleConfigMailer.bind(this),
		'send-email': this.handleSendMail.bind(this)
		
	})
	
	
	
}


export const handleConfigMailer = function(data){

 
	const self = this 
	
	self.transport = self.mailer.createTransport({
		
		host: 'smtp.mailtrap.io', 
		port: 2525, 
		auth: { 
		        user: 'bd9ca9c390819c', 
		        pass: 'eae12fa48b0f5c'
			  },
		pool: true, // use pooled connection
		rateLimit: true, // enable to make sure we are limiting
		maxConnections: 1, // set limit to 1 connection only
		maxMessages: 100, // send 3 emails per second
		
	})


} 


export const handleSendMail = function(data){

 
	const self = this 
	self.mailSendHandler = data.callback 
	self.log("Mailer is about to send email") 
	// console.log(data)
	
	if(self.transport){
		
		
		/*if(!pao.pa_contains(data,'message')){
			 
			 
		  data.callback(new Error('Missing required text property')) 
		 
		}else{
			
			if(!pao.pa_contains(data.messages,['to','from','content'])){
				
				 data.callback(new Error('Missing required text property')) 
				 
			}else{
				
				
				if(!pao.pa_contains(data.messages.content,['text'])){
				
				   data.callback(new Error('Missing required text property'))
	
			  }else{
			  	
			  	  self.sendMail(data.message,data.callback)
			  	
			  }
				
			}
		}*/ 
	
		let mailiks = data.mail 
		let mailSendResponses = []
		
		if(mailiks instanceof Array){
			
			let mailsLen = mailiks.length
			let handleMultiSend = (e,res)=>{
				
				if(e){
					
					 self.log('THE EMAIL SENDING ERROR RESPONSE')
					 self.log(e)

					 mailSendResponses.push({
					 	errored: true,
					 	message: e
					 })
					
				}else{ 

					self.log('THE EMAIL SENDING SUCCESS RESPONSE')
					 self.log(res)
				
					mailSendResponses.push({ 
					
						errored: false,
						message: res
					})
					
				}

				if(mailSendResponses.length === mailsLen ){

					self.log('THE MAILRESPONSES')
					// self.log(mailSendResponses)
				   self.mailSendHandler(mailSendResponses)

				}
			} 
			
			mailiks.forEach(async (receivr,i)=>{
				
				await self.sendMail(receivr.message,handleMultiSend) 
				
			}) 
			
			

			  
			
			
			
		}else{
			
			self.sendMail(mailiks,self.mailSendHandler)
		}
		
		
	}else{
		
		self.log('No configured email transport,Mailer requires transport to send') 
		self.mailSendHandler(new Error('No configured email transporter'))
		
	}
	
	
	


} 


export const sendMail = function(message,callback){

 
	const self = this 

    self.transport.sendMail(message,callback)
  

}

