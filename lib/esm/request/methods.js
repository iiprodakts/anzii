


export const init = function(){
  
  
	console.log('Request has been initialised') 
  
	  this.listens({
		  
		  'config-request': this.handleConfigRequest.bind(this),
		  'request-handover': this.handleRequestHandOver.bind(this), 
		  'request-global-request-response': this.handleRequestGlobalResponse.bind(this),
		  // 'request-view-response': this.handleRequestViewResponse.bind(this),
		  'request-global-request-error': this.handleRequestGlobalError.bind(this),
		  'request-handler-error': this.handleHandlerError.bind(this),
		  'router-alias-list': this.handleRouterAliasList.bind(this)
		  
		
	})
	  
	  
  }
  
  
  export const handleConfigRequest = function(data){
  
  
	  const self = this 
  
	  data.forEach(route => {
		  
		  route.view ? self.views.push(route.path) : ''
  
	  });
  
  
  }
  
  export const handleRequestHandOver = function(data){
  
	  
	  const self = this 
	  self.request.res = data.res
	  let aliasList = self.routesAliasList
	  let aliatikHandlers = self.aliatikHandlers 
	  let parsed = self.parseRequest(data.req)
  
	  console.log('THE ALIATIKS')
	  console.log(parsed)
	  console.log(aliasList)
	  console.log(aliatikHandlers)
  
	  data.req.uploads ? 
		  parsed.user ? parsed.user.uploads = data.req.uploads  : parsed.user = {uploads: data.req.uploads}
		  : ''
  
	  // console.log('parsed')
	  // console.log(parsed.url.trim().split('/'))
	  let handler = parsed.handler
	   aliasList.indexOf(handler) >= 0 ? handler = aliatikHandlers[aliasList.indexOf(handler)] : ''
	   self.handler = handler
  
  
	  if(handler && handler.trim() !== ''){
  
		  self.requestData = {parsed: parsed,user: parsed.user,handler: handler,request: {req: data.req,res: data.res} }
  
		  
		  if(!self.views || self.views.length === 0) return self.emit({type: 'request-global-request',data: handler})
		  if(self.isView(data.req.originalUrl,parsed.user)) return self.emit({type: `do-view-task`,data: {payload:self.requestData,callback: self.taskerHandler.bind(self),
			  
		  } })
		  return self.emit({type: 'request-global-request',data: handler})
		  
  
	  }else{
  
		  if(!self.views || self.views.length === 0) return self.handlePathError() 
		  self.requestData = {parsed: parsed,user: parsed.user,handler: handler,request: {req: data.req,res: data.res} }
		  if(self.isView('/home')) return self.emit({type: `do-view-task`,data: {payload:self.requestData,callback: self.taskerHandler.bind(self),
		  } })
		  
		  return self.handlePathError() 
	  }
  
	   
  
  
	  
  } 
  
  export const parseRequest = function(req){
  
	  
  
	  console.log('The req')
	  console.log(req.body)
	  console.log(req.query)
	  console.log(req.params)
	  // console.log('THE REQUEST BODY')
	  // console.log(req.body)
	  
	  let requiredData = {url: req.originalUrl}
	  let url = requiredData.url.indexOf('/') === 0 ? requiredData.url.slice(1,requiredData.url.length) : requiredData.url
	  let isPath = url.indexOf('/') > 0 ? true : false 
  
	  if(req.query && Object.keys(req.query).length > 0){
  
		  console.log('THE QUERY')
		  console.log(req.query)
		  requiredData.user = req.query
  
		  let urlFragments = url.split('?')
		  
  
  
		  if(isPath){
			  
			  let pathFrags = urlFragments[0].split('/')
			  console.log('THE PATH FRAGS')
			  console.log(pathFrags)
			  requiredData.handler = pathFrags[0]
  
		  }else{
  
			  console.log('THE REMAINING CONTENT AFTER SPLIT OF ?')
			  console.log(urlFragments)
			  requiredData.handler = urlFragments[0]
  
		  }
  
  
  
	  }else if(req.params && Object.keys(req.params).length > 0){
  
		  console.log('THE PARAMS')
		  console.log(req.params)
		  requiredData.user = req.params
  
		  
  
  
		  if(isPath){
			  
			  let pathFrags = url.split('/')
			  console.log('THE PATH FRAGS')
			  console.log(pathFrags)
			  requiredData.handler = pathFrags[0]
  
		  }else{
  
			  requiredData.handler = url
  
		  }
  
  
	  }else if(req.body && Object.keys(req.body).length > 0){
  
		  console.log('THE REQUEST BODY')
		  console.log(req.body) 
		  requiredData.user = req.body
		  if(isPath){
			  
			  let pathFrags = url.split('/')
			  console.log('THE PATH FRAGS')
			  console.log(pathFrags)
			  requiredData.handler = pathFrags[0]
  
		  }else{
  
			  requiredData.handler = url
  
		  }
	  }else{
  
  
		  requiredData.user = {}
		  
		  if(isPath){
			  
			  let pathFrags = url.split('/')
			  console.log('THE PATH FRAGS')
			  console.log(pathFrags)
			  requiredData.handler = pathFrags[0]
  
		  }else{
  
			  requiredData.handler = url
  
		  }
  
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
  export const handleRouterAliasList = function(data){
	  
  
	   const self = this
	   self.log('Router ALIATIKHANDLERS WITH DATA:')
	   self.log(data)
	  // self.writeResponse({error: true,type: 'ServerError',code: 502,message: 'The requested task[handler] could not be completed'})
  
	  self.routesAliasList = data.aliasList
	  self.aliatikHandlers = data.handlers
  
  
  }
  
  export const handleRequestGlobalResponse = function(data){
  
	   
	  const self = this
  
	  if(!data){
  
		  self.handleByHandlerError()
  
	  }else{
  
		  self.emit({type: `handle-${self.requestData.handler}-task`,data: {payload:self.requestData,callback: self.taskerHandler.bind(self),
			  
		  } })
	  }
  }
  
  export const isView = function(path,user=null){
  
	   
	  const self = this 
	  let views = self.views 
	  
  
	  self.logSync('THE VIEW PATH')
	  self.logSync(path)
	  self.logSync(user)
	  self.logSync(views)
	  // self.logSync('.extention check status')
	  //  self.logSync(path.indexOf('.'))
	  // if(path.indexOf('.') >= 0) return false
  
	  if(!user){
  
		  self.logSync('THE PARSED USsER') 
		  self.logSync(self.requestData)
		  
		  if(self.requestData.user) self.requestData.parsed.derivedUrl = '/home'
		  if(views.indexOf(path) >= 0) return true 
		  return false
  
	  }else{
  
		  if(views.indexOf(path) >= 0) return true 
  
  
		  let parasList = Object.keys(user) 
		  let parasString = ''
		  self.logSync('THE PARALIST')
		  self.logSync(parasList)
		   parasList.forEach((para,i)=>{
  
			  i === 0 ?  parasString = `:${para}` : parasString += `/:${para}`
			  
		  })
  
		  self.logSync('thE PARARSTRING')
		  self.logSync(parasString)
  
		for(let v=0 ; v < views.length; v++){
  
		  if(views[v].indexOf(parasString) > 0){
  
			  let viewPath = views[v].substr(0,views[v].indexOf(parasString)) 
			  let comparePath = viewPath+parasString
  
			  self.logSync('EXTRACTED VIEW PATH')
			  self.logSync(viewPath)
			  self.logSync(comparePath)
			  self.logSync(path)
			  self.logSync(path.indexOf(viewPath))
			  
  
			  if(path.indexOf(viewPath) >= 0){
  
				  self.logSync('Theviewpath matched')
				  self.requestData.parsed.derivedUrl = comparePath
				  return true
  
			  }else{
  
				  return false
			  }
  
			  
  
		  }
		}
  
	  
  
	  }
	  
	  return false
  
	  
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
  
  
  
  export const writeResponse = function(data,method='regular'){
  
	  const self = this 
	  const pao = self.pao 
	  // console.log('THE DATA IN WRITERESPONSE')
	  // console.log(data)
	  if(method === 'regular'){
  
		  pao.pa_isString() ? data = pao.pa_jsToJson({text: data}) : data =  pao.pa_jsToJson(data)
		  
	  }
	  
	  self.emit({type: 'write-server-request-response',data: {data: data,res: self.request.res,method: method}}) 
  
  }
  
  export const taskerHandler = function(fail = null,success = null,method=null){
  
	  const self = this 
	  const pao = self.pao 
  
	  console.log('THE TASKER HANDLER')
	  console.log(fail)
	  console.log(method)
  
	  if(fail){
  
  
		  self.failureHandle({error: true,message: fail})
	  }else if(success){
  
		  method ? self.successfullHandle(success,method) : self.successfullHandle(success)
		  
	  }
  
  
  }
  
  export const successfullHandle = function(data,method){
  
	  const self = this 
	  self.writeResponse(data,method)
  }
  
  export const failureHandle = function(data){
  
	  const self = this 
	  self.writeResponse(data)
  }
  
  