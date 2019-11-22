


export const init = function(){
  
  
  console.log('Test has been initialised') 
  this.listens()
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

export const listens = function(){
	
  var pao = this.pao 
  console.log('Test listens')
  
  
	pao.pa_notifyListen({
		
		  'handle-testy': this.handleTesty.bind(this),
		//  'action-dispatch': this.handleActionDispatch.bind(this)
		
	},pao.moduleMeta.moduleId,pao.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
	
	var pao = this.pao 

	

	pao.pa_notifyEvent({
	
		type: eNotifs.type,
		data: eNotifs.data

		})
	

} 






export const handleTesty = function(data){

	console.log('HANDLE TEST EVENT HAS BEEN EMITTED')
	
	// this.html = data.html
	const self = this

	console.dir('This module contains the following resources: ',self) 
	console.log(self)
	

	
} 

