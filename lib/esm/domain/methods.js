


export const init = function(){
  
  
  this.log('View has been initialised') 
  this.listens({
	
	'config-domain': this.handleConfigDomain.bind(this),
	'take-premier-system-base': this.handleTakeSystemBase.bind(this),
	'set-domain-defaults': this.handleSetDomainDefaults.bind(this)
	
  
  })

	
}


export const handleSetDomainDefaults = function(data){

	const self = this 
	const domains = self.domainCandidates
	const path = self.path

	self.log('SETTING DOMAIN DEFAULTS')
	// self.log(data)
	self.logSync(self.system)
	// self.logSync(data)

	domains.forEach(dumain => {
		
		
		self.log('THE DOMAIN SETTInGS')
		self.logSync(dumain)
		if(dumain.name === 'views') return data.app.set(dumain.name,path.join(self.system.DOCUMENT_ROOT,dumain.set))
		if(dumain.name === 'static') return data.app.use(data.xpress.static(path.join(self.system.DOCUMENT_ROOT,dumain.set)))
		data.app.set(dumain.name,dumain.set)

	});


}

export const handleConfigDomain = function(data){

	
	const self = this 
	self.logSync('Configuring Domain')
	self.logSync(data)
	self.domainCandidates = data
}


export const handleTakeSystemBase = function(data){

	
	const self = this 
	self.logSync('THE SYSTEMBASE HANDLE')
	self.logSync(data)
	self.system = data.systemBase
	
	
  

} 
