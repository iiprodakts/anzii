


export const init = function(){
  
  
  console.log('Test has been initialised') 
  this.listens({
		
	'handle-testy': this.handleTesty.bind(this)
  
  })
//   console.log(this.pao)
//   console.log(this) 
  this.emit({

	  type: "handle-test",
	  data: {
		  callback: function(e,res){

			console.dir('The e value is: ',e)
			console.log('The res value is: ',res)

		  },
		  value: "Test value"
	  }
	})

	console.log('AFTER HANDLE-TEST HAS BEEN EMITTED')

	
	
}


export const handleTesty = function(data){

	console.log('HANDLE TEST EVENT HAS BEEN EMITTED')
	
	// this.html = data.html
	const self = this

	console.dir('This module contains the following resources: ',self) 
	console.log(self)
	

	
} 

