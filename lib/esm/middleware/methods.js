


export const init = function(){
  
  
	this.log('Middleware has been initialised') 
	this.listens({

		'config-middleware': this.handleConfigMiddleware.bind(this),
		'add-ext-middleware': this.handleAddExternalMiddleware.bind(this),
		'attach-middleware': this.handleAttachMiddleware.bind(this),

 	   })
	 
	  
  }
  

export const handleAttachMiddleware = function(data){

	 this.attachMiddleware(data)

  }

  export const handleConfigMiddleware = function(data){

	 const self = this
	//  console.log('THE HANDLE CONFIG MIDDLEWARE')
	//  console.log(data)
	//  console.log(data)
	 let middlewares = data
	//  console.log(middlewares)

	 for(let p in middlewares){

		// self.log('THE P')
		// self.log(p)
		if(self.middlewares[p]){

			if(middlewares[p].addMiddleware){

				// self.log('INSIDE EXISTENT MIDDLEWARE ITEM')
				// self.log(middlewares[p])

				
				middlewares[p].addMiddleware.forEach((m,i)=>{
					self.middlewares[p].push(m)
				})
				

			}else if(p === 'removeMiddleware'){

			}

		}else{

			
			
			if(middlewares[p].addMiddleware){

				self.middlewares[p] = {...middlewares[p].addMiddleware}
			}
			
		}

	 }

	
	
	
 }

 export const handleAddExternalMiddleware = function(data){

	const self = this 
	const pao = self.pao
	self.log('ADD EXTERNAL MIDDLEWARE EVENT HAS OCCURED')
	
	if(data.type){

		if(data.type === 'private'){

			 if(data.level === 'top'){

				if(pao.pa_isArray(data.middleware.funk)){

					data.middleware.forEach((m,i)=>{

						self.middleware.unshift({type: 'function',value: m.funk,ext: true})
					})

				}else{

					self.log('THE MIDDLEWARES BEFORE')
					self.log(self.middlewares)
					if(self.middlewares.pprivate){

						let len = Object.keys(self.middlewares.pprivate).length
						self.middlewares.pprivate[len] = {type: 'function',value: data.middleware.funk,ext: true}
						self.log('Middlewares')
						self.log(self.middlewares)
					}
				}

			 }else{

			 }
		}else if(data.type === 'public'){

		}else if(data.type === 'all'){

			if(data.level === 'top'){

			}

		}
	}

   
   
}


  export const attachMiddleware = function(data){

	 const self = this
	 if(data.app){

		// console.log('SELF.MIDDLEWARES')
		// console.log(self.middlewares)

		if(self.all.length > 0){

			console.log('THE Allwares is greater than zero')
			
			if(data.xpress){
				self.allWares(data.app,data.xpress)
			}
		
		}
		if(self.middlewares.pprivate && self.middlewares.ppublic){

			self.emit({type: 'router-middleware',data:{middleware:{public: self.middlewares.ppublic,private: self.middlewares.pprivate}}})
		}else if(self.middlewares.private){
			self.emit({type: 'router-middleware',data:{middleware: {private: self.middlewares.pprivate}}})
		}else if(self.middlewares.public){
			self.emit({type: 'router-middleware',data:{middleware: {public: self.middlewares.ppublic}}})
		}
		 
		if(self.middlewares.all){

			// console.log('FOR EVERY REQUEST MIDDLEWARES')
			// console.log(self.middlewares.all)

			self.middlewares.all.forEach((m,i)=>{

				if(m.type === 'function'){
	
					data.app.use(m.value)
				}else if(m.type === 'module'){
	
					// self.emit({type: `add-${m.value}-middleware`,data: data.app})
				}
			})

		}
		
		
	 }
  }
  
  
  export const allWares = function(app,xpress){

	 const self = this 
	 const pao = self.pao 


	 self.all.forEach((w,i)=>{

		if(pao.pa_isObject(w)){

			console.log('Executing allwares')
			if(w.use){

				console.log('The public:',w.call)
				app.use(xpress[w.call]('public'))
			}else{

				console.log('The none-public:',w.call)
				app.use(xpress[w.call]())

			}
			
		}else{

			self.log('middleware is string')
			app.use(xpress[w]())
		}
		
	 })

  }
  
  
  
 
  
  