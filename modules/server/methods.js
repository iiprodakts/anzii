


export const init = function(){
  
  
  console.log('Server has been initialised')
	this.listens()
	this.startServer()
	
	
}

export const listens = function(){
	
  var sb = this.sb 
  
  
	sb.sb_notifyListen({
		
		  'render-html': this.handleRenderHtml.bind(this),
		  'ssr-components-count': this.handleSSRComponentCount.bind(this),
		  'ssr-component-id': this.handleSSRComponentId.bind(this),
		  'save-component-data,': this.handleSaveComponentData.bind(this),
		//  'action-dispatch': this.handleActionDispatch.bind(this)
		
	},sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
	
	var sb = this.sb 

	sb.sb_notifyEvent({
	
		type: eNotifs.type,
		data: eNotifs.data

		})
	

} 





export const startServer  = function(data){

	  const self = this 

	    this.startPreRoutes()
		  this.startRouting()
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

export const sendHtml = function(data){

	const self = this 
	console.log('The sendHtml method')
	console.log('The html')
	console.log(data) 
	this.fixedCompS.before = []
	this.fixedCompS.after = []
	 
 
 //    console.log(this)
   self.request.res.status(200).send(
	`
	<!DOCTYPE html>
	   <html lang="en"> 
		 <head> 

			 <meta http-equiv="X-UA-Compatible" content="IE=edge">
			 <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'">
			 <meta name="viewport" content="width=device-width, initial-scale=1">
			 <meta name="description" content="">
			 <meta name="author" content="">
			 <title>SSR with SANA</title>
			 <link href="css/style.css" rel="stylesheet"> 
			 


		 </head>
		 <body data-hydrate="hydrate" data-dom="component"> 
			 <div data-component="component">
			   
			   
				 ${data}
			 </div> 
			
			 <script src="/sana.bundle.js" defer></script>
		 </body> 

		</html> 
		
	   `
	)  

  
}

