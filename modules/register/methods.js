


export const init = function(){
  
  
  console.log('Server has been initialised') 
//   console.log(this.pao)
//   console.log(this)
	this.listens()
	this.startServer()
	
	
}

export const listens = function(){
	
  var pao = this.pao 
  
  
	pao.pa_notifyListen({
		
		  'render-html': this.handleRenderHtml.bind(this),
		  'ssr-components-count': this.handleSSRComponentCount.bind(this),
		  'ssr-component-id': this.handleSSRComponentId.bind(this),
		  'save-component-data,': this.handleSaveComponentData.bind(this),
		  'handle-test': this.handleTest.bind(this),

		//  'action-dispatch': this.handleActionDispatch.bind(this)
		
	},pao.moduleMeta.moduleId,pao.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
	
	var pao = this.pao 
	console.log('tHE EVENT EMITTED BY SERVEER')
	console.log(eNotifs)

	pao.pa_notifyEvent({
	
		type: eNotifs.type,
		data: eNotifs.data

		})
	

} 






export const handleRenderHtml = function(data){

	console.log('HANDLE renderhtml has occured')
	
	// this.html = data.html
	const self = this
	// self.html.push(data.html)
	// self.componentCount++
	// self.trackCount() 
	
	if(data.hasOwnProperty("fixedComp")){
		
			if(data.fixedComp === "before"){
					
						if(self.fixedCompS.before.length > 0){
					
							console.log('BF')
						
							let bf = self.fixedCompS.before 
							console.log(bf.length)
							for(let c =0; c < bf.length; c++){
								
								console.log('INSIDE FOR LOOP')
								if(bf[c].compID === data.id){
									
									  console.log('About to call the opend func')
										bf[c].html =  self.opend(bf[c].html,data.html)
									
									
								}else if(c === (bf.length - 1)){
									
									console.log('DIFFERENT ID PUSH TO ID')
									self.fixedCompS.before.push({
										
										html: data.html,
										compID : data.id
										
									})
									
									
								}
							}
								
								
						}else{
								
							   console.log('THE before Arrray has nothing at this point')
									self.fixedCompS.before.push({
										
										html: data.html,
										compID : data.id
										
									})
								
						}
							
						
						
					
			}else{
					
						if(self.fixedCompS.after.length > 0){
					
							console.log('INSIDE AFTER STUFF')
							console.log(self.fixedCompS)
							console.log(self.fixedCompS.after)
							console.log(self.fixedCompS.after.length)
							let bf = self.fixedCompS.after 
							console.log('THE BEFORE')
							console.log(bf)
							for(let c =0; c < bf.length; c++){
								
								if(bf[c].compID === data.id){
									
										bf[c].html =  self.opend(bf[c].html,data.html)
									
									
								}else if(c === bf.length - 1){
									
									
										self.fixedCompS.after.push({
											
											html: data.html,
											compID : data.id
											
										})
										
									
									}
							}
								
								
						}else{
								
							self.fixedCompS.after.push({
								
								html: data.html,
								compID : data.id
								
							})
						
							
							
						}
						
			}
						
	}else{
		
		  self.html.push(data.html)
			self.componentCount++
			self.trackCount() 
	
		
	}
	// console.log('HANDLE renderhtml:self.html')
	// console.log(self.html)
	// console.log('HANDLE renderhtml:self.comonentCount')
	// console.log(self.componentCount)
	// console.log('HANDLE renderhtml:self.componentID')
	// console.log(self.componentId)
	
} 

export const handleSSRComponentCount = function(data){

	// console.log('HANDLE Server start event has occured')
	
	// this.html = data.html
	const self = this
	const pao = self.pao

	console.log('Component count')
	console.log(data)

	data instanceof Array
		? self.ssrComponentLen = pao.pao_clone(data)
		: self.ssrComponentLen = data
		
	
	
	if(data instanceof Array){
		self.componentRefLen = []
   }

   console.log('SSR COMPONENT LEN:')
   console.log(self.ssrComponentLen)

	
	
	
} 


export const handleSSRComponentId = function(data){

	// console.log('HANDLE Server start event has occured')
	
	// this.html = data.html
	const self = this

	console.log('ComponentId has occured') 

		
	//   self.componentId.push(data)
	
	
	
	

} 



export const handleSaveComponentData = function(data){

	
	const self = this
	const pao = self.pao 
	
	// self.compData.push(data)

	// console.log('Component count')
	// console.log(data)

	
	
	
} 

export const handleTest = function(data){

	
	const self = this
	const pao = self.pao 

	console.dir('The data: ',data)

	 if(data.hasOwnProperty('callback')){

		console.log("THE SENT VALUE")
		console.log(data.value)
		data.callback(null,"The server response succeded")
	 }else{

		data.callback(new Error('The error occured'))
	 } 

	 self.emit({

		type: "handle-testy",
		data: "test"

	 })
	
	// self.compData.push(data)

	// console.log('Component count')
	// console.log(data)

	
	
	
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

