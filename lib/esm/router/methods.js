


export const init = function(){
  
  
  console.log('Router has been initialised') 

	this.listens({
		
		'config-router': this.handleConfigRouter.bind(this),
		'router-middleware': this.handleRouterMiddleware.bind(this),
		'attach-routes': this.handleAttachRoutes.bind(this),

	  
  })
	
	
	
}

export const handleConfigRouter = function(data){

	 console.log('THE HANDLE CONFIG ROUTER MODULE')

	 const self = this
	 self.routes = data

	
} 


export const handleRouterMiddleware = function(data){

	const self = this 
	console.log('THE ROUTER MIDDLEWARE')
	console.log(data)

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
		data.app.use('/',data.router)
		self.routes.forEach((r,i)=>{
			
			if(r.alias) aliasList.push(r.path.split('/')[1]), aliatikHandlers.push(r.alias)
			r['router'] = data.router
			self.renderRoute(r)
				
			
		})
		// data.router.use(self.outOfRouterContext.bind(this))
		aliasList.length > 0 ? self.emit({type: 'router-alias-list',data: {aliasList:aliasList,handlers: aliatikHandlers}}) : ''

	 }
}


export const renderRoute = function(r){

	const self = this
	const pao = this.pao
	let routy = {router: r.router,method: r.method,path: r.path,handOver: self.handOver}

	// console.log('THE ROUTE MIDDLEWARE')
    // console.log(self.routerMiddleware.public)
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

	// console.log('THE APPENDROUTER')

	if(r.middleware){

		
		r.router[r.method.toLowerCase()](r.path,r.middleware,r.handOver.bind(this))

	}else{

		r.router[r.method.toLowerCase()](r.path,r.handOver.bind(this))
	}


}

export const middlewareType = function(type,middlewares){

	const self = this
	
		// console.log('THE MIDDLEWARETYP MIDDLEWARES')
		// console.log(middlewares)
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
	await self.log('THE OUTOFROUTERCONTEXT REQUESTS')
	await self.log(req.originalUrl)
	let data = {error: true,type:"NotFound",code:404,message:'Resource was not found: OutOfContext'}
	return self.emit({type: 'write-server-request-response',data: {data: data,res: res}})

}

export async function handOver(req,res){

	const self = this
	await self.log('THE CAUGHT REQUEST INSIDE ROUTER::END POINT HIT')
	await self.log(req.originalUrl)
	await self.log(req.params)
	await self.log(req.body)
	return self.emit({type: 'request-handover',data:{req:req,res:res}})
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
