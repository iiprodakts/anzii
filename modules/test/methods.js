


export const init = function(){
  
  
  console.log('Test has been initialised') 
  this.listens({
		
	'handle-testy': this.handleTesty.bind(this),
	'add-test-middleware': this.handleAddTestMiddleware.bind(this)
  
  })
//   console.log(this.pao)
//   console.log(this) 
//   this.emit({

// 	  type: "handle-test",
// 	  data: {
// 		  callback: async function(e,res){

// 			console.dir('The e value is: ',e)
// 			console.log('The res value is: ',res)

// 		  },
// 		  value: "Test value"
// 	  }
// 	})

// 	console.log('AFTER HANDLE-TEST HAS BEEN EMITTED')

	
	
}


export const handleTesty = function(data){

	console.log('HANDLE TEST EVENT HAS BEEN EMITTED')
	
	// this.html = data.html
	const self = this

	console.dir('This module contains the following resources: ',self) 
	console.log(self)
	

	
} 


export const handleAddTestMiddleware = function(data){

	console.log('HandleAddTestMiddleware has occured')
	console.log(data)
	
	// this.html = data.html
	const self = this
	data.filterCallback(data.type,self.test.bind(self))
	
	

	
} 

export const test = function(req,res,next){

	console.log('HI THERE, I AM A TEST MIDDLEWARE AND I LOVE IT')
	console.log(typeof res.send)
	next()
}
