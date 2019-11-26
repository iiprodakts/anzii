


export const init = function(){
  
  
  console.log('Server has been initialised') 
//   console.log(this.pao)
//   console.log(this)
	this.listens({

		'config-server': this.handleConfigServer.bind(this),
		'write-server-request-response': this.handleWriteServerRequestResponse.bind(this)
	})
	

}

export const handleConfigServer = function(data){

	const self = this

	self.emit({type: 'attach-middleware',data: {app: self.http}})
	self.emit({type: 'attach-routes',data: {app: self.http,router: self.router}})
	self.startServer()
	 
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
	
	self.http.listen(process.env.PORT || 3000,()=>{
	
	  console.log("The Server is listening")
	
	})
   

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

export const  handleWriteServerRequestResponse = function(data){

	const self = this
	console.log('SERVER IS ABOUT TO SEND RESPONSE BACK TO CLIENT')
	data.res.set('Connection','close')
	data.res.status(200).send(data.data)
	console.log('SERVER HAS SENT A RESPONSE BACK TO THE CLIENT')
	return 
}


