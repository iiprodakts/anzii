


export const init = function(){
  
  
  console.log('List has been initialised') 
  this.listens({
		
    'dao-take-dbs': this.handleDaoTakeDbs.bind(this),	
	'data-hive-request': this.handleDataHiveRequest.bind(this)
  
  })

	
}


export const handleDataHiveRequest = function(data){

	
	const self = this 
	self.list(data) 
	
	if(self.DBS[data.v]){



	}

} 


export const handleDaoTakeDbs = function(data){

	
	const self = this 
	self.DBS = data.dbs
	self.log('The dbs inside self.DBS')
	console.log(self.DBS)

}


