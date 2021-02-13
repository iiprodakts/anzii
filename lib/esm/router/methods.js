


export const init = function(){
  
  
  this.adLog('Router has been initialised') 

	this.listens({
		
		'config-router': this.handleConfigRouter.bind(this),
		'router-middleware': this.handleRouterMiddleware.bind(this),
		'attach-routes': this.handleAttachRoutes.bind(this),

	  
  })
	
	
	
}

export const handleConfigRouter = function(data){


	 const self = this
	 
	 self.pao.pa_wiLog('THE HANDLE CONFIG ROUTER MODULE') 
	 self.pao.pa_wiLog(data)
	 self.routes = data

	
} 


export const handleRouterMiddleware = function(data){

	const self = this 
	self.pao.pa_wiLog('THE ROUTER MIDDLEWARE')
	self.pao.pa_wiLog(data)

	self.routerMiddleware = data.middleware
}


export const handleAttachRoutes = function(data){

	this.attachRoutes(data)

	
} 



export const attachRoutes = function(data){

	const self = this
	
	if(data.app){

		let aliasList = []
		let aliatikHandlers = []
		data.app.use(self.cors())
		data.app.use('/',data.router)
		if(!self.routes){

			self.warn("NO_CONFIGURED_ROUTES, ANZII WILL RESOLVE TO DEFAULT ROUTES")
			// self.warn('Anzii is rendering default routes::')
			
			const defaultRoutes = [
				{
					path: '/greeting/:name/:surname',
					alias: 'hello',
					method: 'GET',
					type: 'public'
				},
				// {
				// path: '/test',
				// method: 'POST',
				// 	type: 'public'
				// },
				// {
				// 	path: '/test',
				// 	method: 'GET',
				// 	type: 'public'
				// },
				// {
				// 	path: '/',
				// 	method: 'GET',
				// 	type: 'public'
				// }
		]

			defaultRoutes.forEach((r,i)=>{
			
				if(r.alias) aliasList.push(r.path.split('/')[1]), aliatikHandlers.push(r.alias)
				r['router'] = data.router
				self.renderRoute(r)
					
				
			})
			aliasList.length > 0 ? self.emit({type: 'router-alias-list',data: {aliasList:aliasList,handlers: aliatikHandlers}}) : ''

			return
		}
		self.routes.forEach((r,i)=>{
			
			if(r.alias) aliasList.push(r.path.split('/')[1]), aliatikHandlers.push(r.alias)
			r['router'] = data.router
			self.renderRoute(r)
				
			
		})
		
		data.router.use('*.js',(req,res,next)=>{

			res.set('Content-Type','text/javascript')
			next()

		})
		data.router.use(self.outOfRouterContext.bind(this))
		aliasList.length > 0 ? self.emit({type: 'router-alias-list',data: {aliasList:aliasList,handlers: aliatikHandlers}}) : ''

	 }
}


export const renderRoute = function(r){

	const self = this
	const pao = this.pao
	let routy = {router: r.router,method: r.method,path: r.path,handOver: self.handOver}

	// self.pao.pa_wiLog('THE ROUTE MIDDLEWARE')
    // self.pao.pa_wiLog(self.routerMiddleware.public)
	if(r.middlewares){

		if(self.routerMiddleware && self.routerMiddleware[r.type]){

			self.middlewareType(r.type,r.middlewares)
			self.middlewareType(r.type,pao.pa_objectToArray(self.routerMiddleware[r.type]))
			self.appendRouter({middleware: self[`filtered${r.type}Middlewares`],...routy})

		}else{

			self.middlewareType(r.type,r.middlewares)
			self.appendRouter({middleware: self[`filtered${r.type}Middlewares`],...routy})

		}
	}else if(self.routerMiddleware && self.routerMiddleware[r.type]){

		self.middlewareType(r.type,pao.pa_objectToArray(self.routerMiddleware[r.type]))
		self.appendRouter({middleware: self[`filtered${r.type}Middlewares`],...routy})

	}else{

		self.appendRouter(routy)
	}

}




export const appendRouter = function(r){

	const self = this
	// self.pao.pa_wiLog('THE APPENDROUTER')


	if(r.middleware){

		
		r.router[r.method.toLowerCase()](r.path,r.middleware,r.handOver.bind(this))

	}else{

		r.router[r.method.toLowerCase()](r.path,r.handOver.bind(this))
	}


}

export const middlewareType = function(type,middlewares){

	const self = this
	
		// self.pao.pa_wiLog('THE MIDDLEWARETYP MIDDLEWARES')
		// self.pao.pa_wiLog(middlewares)
		middlewares.forEach((m,i)=>{

			if(m.type === 'function'){

				self[`filtered${type}Middlewares`].push(m.value)

			}else if(m.type === 'module'){

				self.emit({type: `add-${m.value}-middleware`,data: {type: type,filterCallback: self.filterCallback.bind(self)}})
			}
		})


	
}

export const outOfRouterContext = async function(req,res){

	const self = this 
	let data = null 
	let reqresID = self.pao.pa_generateUniqueID()
	req.R_ID = reqresID 
	res.R_ID = reqresID 
	self.infoSync('Handling out of context route')
	self.infoSync(req.originalUrl)
	self.adLog('THE OUTOFROUTERCONTEXT REQUESTS')
	// self.logSync(req.is)
	// self.logSync(req.get)
	// self.logSync(req.is('text'))
	self.adLog(req.accepts(['html', 'json']))
	
	
	// self.logSync(req.accepts()) 

	
    if(req.accepts(['html', 'json']) === 'json'){

		data = {error: true,accepts: 'json',type:"NotFound",code:404,message:'Resource was not found: OutOfContext'}
	}else if(req.accepts(['html', 'json']) === 'html'){

		data = {error: true,accepts: 'html',type:"NotFound",code:404,message:'Resource was not found: OutOfContext'}
	}else{

		data = {error: true,accepts: 'txt',type:"NotFound",code:404,message:'Resource was not found: OutOfContext'}
	}

	return self.emit({type: 'write-server-request-response',data: {data: data,res: res}})

}

export async function handOver(req,res,next){

	const self = this
	await self.pao.pa_wiLog('THE CAUGHT REQUEST INSIDE ROUTER::END POINT HIT') 
	self.infoSync(next)
	let reqresID = self.pao.pa_generateUniqueID()
	req.R_ID = reqresID 
	res.R_ID = reqresID
	self.infoSync(`HANDLING REQUEST OF ID: ${req.R_ID.split('-')[0]} WITH METHOD: ${req.method} AND URL OF: ${req.originalUrl}`)
	await self.pao.pa_wiLog(req.originalUrl)
	await self.pao.pa_wiLog(req.params)
	await self.pao.pa_wiLog(req.body)
	return self.emit({type: 'request-handover',data:{req:req,res:res,next: next}})
	// return res.json({todo:{list:{items:['I ate food','I wrote code','I read a book','I watched a movie']}}})

	

}

export const filterCallback = function(filterType,moduleMiddleware){

	const self = this 

	if(filterType === 'public'){

		self.filteredpublicMiddlewares.push(moduleMiddleware)

	}else{
		self.filteredprivateMiddlewares.push(moduleMiddleware)

	}
	

}
