

export const init = function(){
  
  
	console.log('Middleware has been initialised') 
	  this.listens({
		'config-middleware': this.handleConfigMiddleware.bind(this),
		'attach-middleware': this.handleAttachMiddleware.bind(this),
 	   })
	 
	  
  }
  

  export const handleAttachMiddleware = function(data){

	 this.attachMiddleware(data)

  }

  export const handleConfigMiddleware = function(data){

	 const self = this
	 console.log('THE HANDLE CONFIG MIDDLEWARE')
	 console.log(data)
	 console.log(data)
	 let middlewares = data
	 console.log(middlewares)

	 for(let p in middlewares){

		console.log('THE P')
		console.log(p)
		if(self.middlewares[p]){

			if(middlewares[p].addMiddleware){

				console.log('INSIDE EXISTENT MIDDLEWARE ITEM')
				console.log(middlewares[p])

				
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


  export const attachMiddleware = function(data){

	 const self = this
	 if(data.app){

		console.log('SELF.MIDDLEWARES')
		console.log(self.middlewares)

		if(self.middlewares.pprivate && self.middlewares.ppublic){

			self.emit({type: 'router-middleware',data:{middleware:{public: self.middlewares.ppublic,private: self.middlewares.pprivate}}})
		}else if(self.middlewares.private){
			self.emit({type: 'router-middleware',data:{middleware: {private: self.middlewares.pprivate}}})
		}else if(self.middlewares.public){
			self.emit({type: 'router-middleware',data:{middleware: {public: self.middlewares.ppublic}}})
		}
		 
		if(self.middlewares.all){

			console.log('FOR EVERY REQUEST MIDDLEWARES')
			console.log(self.middlewares.all)

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
  
  
  
  
  
 
  
  