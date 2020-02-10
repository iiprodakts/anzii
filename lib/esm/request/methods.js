


export const init = function(){
  
  
  console.log('Request has been initialised') 

	this.listens({
		
		'request-handover': this.handleRequestHandOver.bind(this), 
		'request-global-request-response': this.handleRequestGlobalResponse.bind(this),
		'request-global-request-error': this.handleRequestGlobalError.bind(this),
		'request-handler-error': this.handleHandlerError.bind(this)
		
	  
  })
	
	
}


export const handleRequestHandOver = function(data){

	
	const self = this 
	self.request.res = data.res

	let parsed = self.parseRequest(data.req)

	console.log('parsed')
	console.log(parsed.url.trim().split('/'))
	let handler = parsed.url.split('/')[1]


	if(handler){

		self.requestData = {parsed: parsed,handler: handler,request: {req: data.req,res: data.res} }
		self.emit({type: 'request-global-request',data: handler})

	}else{

		self.handlePathError()
	}

	 


	
} 

export const parseRequest = function(req){

	

	console.log('The req')
	// console.log('THE REQUEST BODY')
	// console.log(req.body)
	
	let requiredData = {url: req.originalUrl}
	if(req.query && Object.keys(req.query).length > 0){

		console.log('THE QUERY')
		console.log(req.query)
		requiredData.user = req.query

	}else if(req.params && Object.keys(req.params).length > 1){

		console.log('THE PARAMS')
		console.log(req.params)
		requiredData.user = req.params
	}else if(req.body && Object.keys(req.body).length > 1){

		console.log('THE REQUEST BODY')
		console.log(req.body) 
		requiredData.user = req.body
	}

	
	return requiredData

	

} 

export const handleRequestGlobalError = function(data){

	const self = this
	self.writeResponse({error: true,type: 'serverError',code: 502,message: 'The server error'})
}

export const handlePathError = function(data){
	

	const self = this
	self.writeResponse({error: true,type: 'ServerError',code: 502,message: 'The requested task[handler] could not be completed'})
}

export const handleRequestGlobalResponse = function(data){

	 
	const self = this

	if(!data){

		self.handleByHandlerError()

	}else{

		self.emit({type: `handle-${self.requestData.handler}-task`,data: {user:self.requestData,callback: self.taskerHandler.bind(self),
			
		} })
	}
}


export const handleBadRequestError = function(){

	const self = this
	self.writeResponse({error: true,type: 'BadRequest',code: 400,message: 'Bad Request'})
}

export const handleHandlerNotFound = function(){

	 const self = this
	 self.writeResponse({error: true,type: 'NotFound',code: 404,message: 'The requested task could not be completed'})
}

export const handleByHandlerError = function(){

	const self = this
	self.writeResponse({error: true,type: 'notFound',code: 404,message: 'The requested task could not be completed'})
}

export const handleHandlerError = function(){
	const self = this
	self.handleHandlerError()
}



export const writeResponse = function(data){

	const self = this 
	const pao = self.pao 
	console.log('THE DATA IN WRITERESPONSE')
	console.log(data)
	pao.pa_isString() ? data = pao.pa_jsToJson({text: data}) : data =  pao.pa_jsToJson(data)
	self.emit({type: 'write-server-request-response',data: {data: data,res: self.request.res}}) 

}

export const taskerHandler = function(fail = null,success = null){

	const self = this 
	const pao = self.pao 

	console.log('THE TASKER HANDLER')
	console.log(fail)

	if(fail){


		self.failureHandle({error: true,message: fail})
	}else if(success){

		self.successfullHandle(success)
	}


}

export const successfullHandle = function(data){

	const self = this 
	self.writeResponse(data)
}

export const failureHandle = function(data){

	const self = this 
	self.writeResponse(data)
}

