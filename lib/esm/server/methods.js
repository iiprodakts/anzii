


export const init = function(){
  
  
  console.log('Server has been initialised') 
//   console.log(this.pao)
//   console.log(this)
	this.listens({

		'config-server': this.handleConfigServer.bind(this),
		'config-domain-resources': this.handleDomainResources.bind(this),
		'write-server-request-response': this.handleWriteServerRequestResponse.bind(this)
	})
	

}

export const handleConfigServer = function(data){

	const self = this

	// self.emit({type:'share-middleware',data:''})
	self.emit({type: 'attach-middleware',data: {app: self.http,xpress: self.xpress}})
	self.emit({type: 'attach-routes',data: {app: self.http,router: self.router}})
	self.emit({type: 'distribute-system-resources',data:''})
	self.startServer()
	 
}

export const handleDomainResources = function(data){

	const self = this 

	self.logSync('THE server is emitting system defaults event')
	self.emit({type: 'set-domain-defaults',data:{app: self.http,xpress: self.xpress}})

}



export const startServer  = function(data){

	  const self = this 

	    // this.startPreRoutes()
		// this.startRouting()
		this.runServer()

	  

} 


export const startPreRoutes  = function(){

	    const self = this 

	   
	  	self.http.use(self.dependiks.bodyParser.json())

		// self.http.use(function(req, res, next) {

		// 	// console.log(req.body)
		// 	// console.log('Your mobile has reached this code Surprise')
		// 	res.header("Access-Control-Allow-Origin", "*");
		// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		
		// 	return next();
		// });

		self.http.use('*.js',function(req, res, next) {

			// console.log(req.body)
			// console.log('Your mobile has reached this code Surprise')
			res.set("content-type", "text/javascript");
			return next();
		})
		
		self.http.use(self.xpress.static("public"))

	
	 
	 

}


export const startRouting  = function(){

	  const self = this 

	//   self.http.get('/smarfo/menu',function(req,res){

	// 	console.log('Request for menu has just been received')
	// 	let categories = require('./jsondb/foodcategories.json');
	// 	return res.send(categories.menu);
	
	// })

	self.http.get('/todo',self.renderHtml.bind(self))
	self.http.get('/ibr',self.renderHtml.bind(self))
	self.http.get('/home',self.renderHtml.bind(self))
	self.http.use('/',self.renderHtml.bind(self))
		
	
	
	  
	  

}

export const runServer  = function(){

	const self = this 
	
	self.emit({type: 'attach-workers-to-server',data: {app: self.http}})
	// self.http.listen(process.env.PORT || 3000,()=>{
	
	//   self.log("The Server is listening",'info')
	
	// })
   

} 



export const renderHtml = function(req,res){

	   const self = this 
	   console.log('A request has been made to one of the routes')
	   console.log('The html')
	   console.log('The request URL')
	   console.log(req.url)
	   self.request = {

		 req: req,
		 res: res

	   }

	   self.emit({
		   type: "address-changed",
		   data: {
			   url: req.url
		   }
	   })
	//    console.log(this)
	
	 
}

export const  handleWriteServerRequestResponse =  async function(data){

	const self = this

	self.logSync('THE DATA TO BE SENT TO CLIENT')
	self.logSync(data.method)
	self.logSync(data.method === 'renderView')

	if(data.method === 'stream'){
		
		return self.streamResponse(data)
		

	}else if(data.method === 'renderView'){
		
		let view = data.data.data
		self.logSync('MAKING A VIEW request response')
		data.res.set('Connection','close')
		// self.logSync(data)
		// self.logSync(data.method)
		// self.logSync(data.data)
		// self.logSync(view)
		// self.logSync(data.data.type === 'template')

		if(view.type.trim() === 'template'){

			self.logSync('Rendering template view')
			self.logSync(data.data.view)

		
			self.logSync('Rendering inside try')
			

			self.getHtml(data.res,view)
			.then((html)=>{

				html.success 
				? (data.res.status(200).send(html.html),
				   self.logSync('SERVER HAS SENT A SUCCESSFULL RESPONSE BACK TO THE CLIENT::REGULAR')
				  )
				: (data.res.status(200).send(html.html),
				   self.logSync('SERVER HAS SENT A FAILED RESPONSE BACK TO THE CLIENT::REGULAR')
				  )

			})
			.catch((e)=>{

				data.res.status(200).send(e.html)
			})


			return 

		}else if(view.type === 'modular'){
		   
			self.logSync('rENDEING MODULAR VIEW')
			return data.res.status(200).send(view.view)

		}
		// self.streamResponse(data)

	}else{

		await self.log('SERVER IS ABOUT TO SEND RESPONSE BACK TO CLIENT::REGULAR')
		await self.log(data.data)
		await data.res.set('Connection','close')
		 if(data.data.accepts){

			 switch(data.data.accepts){

				case 'json': data.res.status(200).send(data.data)
				break;
				case 'html':self.getHtml(data.res,{view: 'main/404',title: "Page could not be found"})
								.then((html)=>{

									return data.res.status(200).send(html.html)

								})
								.catch((e)=>{
									return data.res.status(200).send(e.html)
								})
				break;
				default:  data.res.type('txt').status(200).send('Text not found')
			 }
		 }else{

			data.res.status(200).send(data.data)

		 }
		
		// await data.res.end()
		// // console.log(data.data)
		return await self.log('SERVER HAS SENT A RESPONSE BACK TO THE CLIENT::REGULAR')
		

	}

	
}

export const streamResponse = function(data){

	const self = this 
	const pao = self.pao 
	// const jsonToJs = pao.pa_jsonToJs
	// let data = jsonToJs(dt)

	// console.log('THE STREAM IS RUNNING')
	// console.log(data)

	const type = self.mimeTypes[data.data.ext];
	let rStream = data.data.rStream


	

	rStream.on('open', async function () {
		
		// console.log('INSIDE ON AND PIPING')
		// console.log(type)
		data.res.set('Content-Type', type);
		data.res.set('Connection','close')
		return rStream.pipe(data.res);
		// return await self.log('SERVER HAS SENT A STREAM RESPONSE BACK TO THE CLIENT ENDING REQUEST SOON')

		
	})

	rStream.on('end',async function(){

		data.res.end()
		return await self.log('Stream request has been successfully served WITH END')
	})
	
    rStream.on('error', async function (e) {

		console.log('THE ERROR READSTREAM')
		console.log(e)
		data.res.set('Content-Type', 'application/json');
		data.res.set('Connection','close')
		return data.res.status(404).send({error: true,message: 'Not found'})
		// data.res.end();
	
		// return  await self.log('SERVER HAS SENT A STREAM RESPONSE BACK TO THE CLIENT WITH ERROR')
	});
	

}

export const getHtml = function(res,view){

	const self = this 
	const pao = self.pao 

	self.logSync('THE SET VIEW')
	self.logSync(view)
	return new Promise((resolve,reject)=>{

		let viewda = null 

		view.viewData ? viewda = view.viewData : viewda = {title: view.title } 
		
		res.render(view.view,viewda,(err,html)=>{

			if(err){
	
				  self.logSync('THE ERROR BELOW OCCURED TRYING TO RENDER VIEW')
				  self.logSync(err)

				  res.render('main/500',{title:'Server error'},(err,html)=>{

					if(err) return resolve({html:'<hl>The page could not be found</h1>',success: false}) 
					return resolve({html: html,success: true})

				  })
				  
				 
	
				//   data.res.status(404).send({error: true, message: 'The requested view was not found'})
				//   return self.logSync('SERVER HAS SENT A FAILED RESPONSE BACK TO THE CLIENT::REGULAR')
	
			}else{
	
			
				return resolve({html: html,success: true})
				
				// return self.logSync('SERVER HAS SENT A SUCCESSFULL RESPONSE BACK TO THE CLIENT::REGULAR')
			}
	
		  })


	})

	

	  

}


