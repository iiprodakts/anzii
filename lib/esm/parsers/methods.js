



export const init = function(){
  
  
	this.log('Parsers has been initialised')
	this.listens({
		  
		  'share-middleware': this.handleShareMiddleware.bind(this)
		  
	  })
	  
	  
	  
  }
  
  
  export const handleShareMiddleware  = function(){
  
		const self = this 
  
		 console.log('HANLDE SHARE MIDDLEWARE EVENT HAS OCCURED')
		 self.emit({
			   
			   type: "add-ext-middleware",
			   data: {
				   
				   type: 'all',
				   level: 'top',
				   middleware: {funk: [

						
						{body: self.dependiks.bodyParser,call: 'json'}

						]
					}
			   }
			 
		 })
  
		
  
  } 
  
 
  
  
	  
  
	
  