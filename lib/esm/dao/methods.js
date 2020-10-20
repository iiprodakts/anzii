


export const init = function(){
  
  
  this.logSync('Dao has been initialised') 
  this.listens({
		
    'dao-take-dbs': this.handleDaoTakeDbs.bind(this),	
	'data-hive-request': this.handleDataHiveRequest.bind(this)
  
  })

	
}


export const handleDataHiveRequest = function(data){

	
	const self = this 
	const pao = self.pao 
	self.logSync('DAO')
	self.logSync(data)
	
	if(!pao.pa_contains(self.DBS,data.model.vendor)){

		throw new Error('Specified database client is unknown')
	}else{

		let model = data.model
		self.emit({
			type: `${model.vendor}-data-request`,
			data: {conn: self.DBS[model.vendor],table: model.table,opi: model.operation,query: data.document,outComehandler: data.handler}
		})

	}
	


} 


export const handleDaoTakeDbs = function(data){

	
	const self = this
	self.log('Handling Hive Request')
	if(self.DBS === null){

		self.DBS = {} 
		self.DBS[data.vendor] = data.conn
	}else{

		self.DBS[data.vendor] = data.conn

	}
	
	// self.log('The dbs inside self.DBS')
	// self.logSync(self.DBS)

}


