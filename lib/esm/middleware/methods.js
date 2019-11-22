


export const init = function(){
  
  
	console.log('Middleware has been initialised') 
  //   console.log(this.pao)
  //   console.log(this)
	  this.listens()
	 
	  
	  
  }
  
  export const listens = function(){
	  
	var pao = this.pao 
	
	
	  pao.pa_notifyListen({
		  
			'add-middleware': this.handleAddMiddleware.bind(this),
		
  
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

  export const handleAddMiddleware = function(data){

	 this.addMiddleware(data)

  }


  export const addMiddleware = function(data){


	 console.log('aDD MIDDLWARE DATA')
  }
  
  
  
  
  
 
  
  