


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

		self.requestData = {parsed: parsed,handler: handler}
		self.emit({type: 'request-global-request',data: handler})

	}else{

		self.handlePathError()
	}

	 


	
} 

export const parseRequest = function(req){

	

	console.log('The req')
	
	let requiredData = {url: req.originalUrl}
	if(req.query && Object.keys(req.query).length > 0){

		console.log('THE QUERY')
		console.log(req.query)
		requiredData.qry = req.query

	}else if(req.params){

		console.log('THE PARAMS')
		console.log(req.params)
		requiredData.params = req.params
	}

	console.log('REQUEST DATA',requiredData)
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
	self.emit({type: `${self.requestData.handler}-handle-task`,data: {data:self.requestData,callbacks:{
		successfullHandle: self.successfullHandle.bind(self),
		failureHandle: self.failureHandle.bind(self)
	}} })
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
	self.emit({type: 'write-server-request-response',data: {data: data,res: self.request.res}})
}

export const successfullHandle = function(data){

	const self = this 
	self.writeResponse(data)
}

export const failureHandle = function(data){

	const self = this 
	self.writeResponse(data)
}

