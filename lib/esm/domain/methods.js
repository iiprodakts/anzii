


export const init = function(){
  
  
  this.adLog('Domain has been initialised') 
  this.listens({
	
	'config-domain': this.handleConfigDomain.bind(this),
	'take-premier-system-base': this.handleTakeSystemBase.bind(this),
	'set-domain-defaults': this.handleSetDomainDefaults.bind(this)
	
  
  })

	
}


export const handleSetDomainDefaults = function(data){

	const self = this 
	const domains = self.domainCandidates 
	const passport = self.passport
	const path = self.path

	self.infoSync('SETTING DOMAIN DEFAULTS')
	// self.pao.pa_wiLog(data)
	self.pao.pa_wiLog(self.system)
	// self.pao.pa_wiLog(data)

	domains.forEach(dumain => {
		
		
		self.pao.pa_wiLog('THE DOMAIN SETTInGS')
		self.pao.pa_wiLog(dumain)
		if(dumain.name === 'views') return data.app.set(dumain.name,path.join(self.system.DOCUMENT_ROOT,dumain.set))
		if(dumain.name === 'static') {
			self.pao.pa_wiLog('DOMAIN IS STATIC')
			self.pao.pa_wiLog(path.join(self.system.DOCUMENT_ROOT,dumain.set))
			return data.app.use(data.xpress.static(path.join(self.system.DOCUMENT_ROOT,dumain.set)))
		}
		if(dumain.name === 'passport') return data.app.use(passport.initialize())
		data.app.set(dumain.name,dumain.set)

	});


}

export const handleConfigDomain = function(data){

	
	const self = this 
	self.pao.pa_wiLog('Configuring Domain')
	self.pao.pa_wiLog(data)
	self.domainCandidates = data
}


export const handleTakeSystemBase = function(data){

	
	const self = this 
	self.pao.pa_wiLog('THE SYSTEMBASE HANDLE')
	self.pao.pa_wiLog(data)
	self.system = data.systemBase
	


} 
