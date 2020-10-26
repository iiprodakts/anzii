

function PAO(appPillar){


	this.core = appPillar; 
	this.PROMPT = appPillar.PROMPT



}// End of PAO

PAO.prototype.create = function(moduleID,modInstId,className){

	const pa_core = this.core; 
	const PROMPT = this.PROMPT
	// const util = pa_core.util
	// var events = pa_core.events()
	// var ajax = pa_core.ajax()
	// const validators = pa_core.validators()
	const util = pa_core.validators().forOf(pa_core.util(),(p,a)=>{ return {p: [`pa_${p}`],v : a}})
	const converts = pa_core.validators().forOf(pa_core.converts(),(p,a)=>{ return {p: [`pa_${p}`],v : a}})
	const validators = pa_core.validators().forOf(pa_core.validators(),(p,a)=>{ return {p: [`pa_${p}`],v : a}})
	// util.pa_wiLog('THE VALIDATORS')
	// util.pa_wiLog(validators)

	// util.pa_wiLog('The value of Instance Id')
	// util.pa_wiLog(modInstId)

	if(modInstId){

		// util.pa_wiLog('The module has a view')

		// var CONTAINER = dom.queryCont('data-'+moduleID, modInstId);
	
		var meta = {
			moduleId: moduleID,
			modInstId: modInstId,
			className: className
		}

		

	}else{

		// util.pa_wiLog('The module has no view')
		var meta = {
			moduleId: moduleID,
			modInstId: moduleID,
			className: className

		}

	}
	




	return {


			// DOM manipulations

			// view: CONTAINER,
			moduleMeta: meta,
			PROMPT: PROMPT,
			...util,
			...validators,
			...converts,


			pa_notifyListen: function(evts={},moduleID='',modInstId=''){

				// util.pa_wiLog('The notifyListen event has been successfuly invoked') 
				// util.pa_wiLog(evts) 
				// util.pa_wiLog(moduleID)
				// util.pa_wiLog(modInstId)
				pa_core.registerEvents(evts,moduleID,modInstId);

			},// End of notifyListen() for events to listen to


			pa_notifyEvent: function(evt = {}){

					// util.pa_wiLog('The notify event has been successfuly invoked')
					pa_core.triggerEvent(evt);





			},// end of notifyEvent() occurence

		
			
			




	}// End OF return



	

}// End of PAO create() method

export default PAO

