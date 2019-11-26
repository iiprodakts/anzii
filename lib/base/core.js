





function CORE(lib){

   
	this.PILLAR = lib
	this.modules = {}; 
	this.globalModules = []
	// this.parent = this


}// End of the CORE class



CORE.prototype.createModule = function(module,moduleId,modInstId){

	var modules = this.modules;
	this.sanna().runForModules(module)

	// console.log('THe modules Object')
	// console.log(modules)


	if(Object.keys(modules).length > 0){



		for(let mod in modules){

			//console.log(modules[mod]);

			if(mod === moduleId){

				 this.globalModules.push(module)
				 this.modules[moduleId][modInstId] = module;

			}else{


				this.globalModules.push(module)
				this.modules[moduleId] = {};
				this.modules[moduleId][modInstId] = module;

			}


		}// End of for loop



	}else{


		this.modules[moduleId] = {};
		this.modules[moduleId][modInstId] = module;


	}// End of ifesleif test

	




}// End of store modules method


CORE.prototype.events = function() {

		 const PILLAR = this.PILLAR 
		//  const parent = this.parent


		return{

				addEventHandler: function(el,ev,handler){


					if(typeof window === "undefined"){

						return PILLAR.ev_addHandler(el,ev,handler);

					}else{

						 PILLAR.ev_addHandler(el,ev,handler);
					}
				


				},// End of addEventHandler() method

				removeEventHandler: function(el,ev,handler){


					PILLAR.ev_removeHandler(el,ev,handler);


				},// End of addEventHandler() method

				getEvent: function(ev){


					return PILLAR.getEvent(ev);


				},// End of addEventHandler() method

				getTarget: function(ev){


					return PILLAR.getTarget(ev);


				},// End of addEventHandler() method

				preventNormal: function(ev){


					PILLAR.preventDefault(ev);


				},// End of addEventHandler() method

				stopEventBubble: function(ev){


					PILLAR.stopPropagation(ev);


				},// End of addEventHandler() method


		}



};// End of CORE EVENTS manipulation object



CORE.prototype.ajax = function() {


	    const PILLAR = this.PILLAR
		return {

				get: function(url,data,success,failure,type){



					PILLAR.ajax_get(url,data,success,failure,type);



				},// End of ajax get() method

				post: function(url,data,success,failure,type){



					PILLAR.ajax_post(url,data,success,failure,type);



				},// End of ajax post() method
			
			

			}

};// End of CORE AJAX manipulation object


CORE.prototype.validators = function(){

	const PILLAR = this.PILLAR
	return {

		 isFunction: function (x) {
			return PILLAR.is_function(x)
		  },
		  isArray: function (x) {
			return PILLAR.is_array(x)
		  },
		  isDate: function (x) {

			return PILLAR.is_date(x)
		  },
		  isObject: function (x) {
			return PILLAR.is_object(x)
		  },
		  isString: function(x){
	
			return PILLAR.is_string(x)
		  },
		  isValue: function (x) {
			return PILLAR.is_value(x)
		  },
		  isNotFalsey: function(x) {
	
			return PILLAR.is_not_falsey(x)
		  },
	
		  trimSpaces: function(x){
	
			return PILLAR.trim_spaces(x)
		  },
		  isEqualab: function(a,b,f = null){

			 return PILLAR.is_equal_ab(a,b,f)
			
		  },

		  isSameValue: function(x,y){

				return PILLAR.is_same_value(x,y)

		  },
		  unlikeProps: function(a,b){

			 return PILLAR.unlike_props(a,b)				

		  },
		  contains: function(o,v){

			return PILLAR.contains(o,v)
		  },
		  forOf: function(o,action){

			 return  PILLAR.for_of(o,action)
		  },
		  addValuesTo: function(o,k,v){

			return PILLAR.add_values_to(o,k,v)

		  },
		  findIn: function(x,i,f){

			return PILLAR.find_in(x,i,f)
		  }


	}

}


CORE.prototype.util = function(){


	const PILLAR = this.PILLAR
	
	return {

		makeDirs: function(p,isFileName,callback){

			return PILLAR.p_mkdirs(p, isFileName, callback);
		},

	}

}

/*

	The methods immediately after this method will be used for module inter communication, which is
	a way that modules communicate with each other indirectly.
	

*/

CORE.prototype.registerEvents = function(evts,module_id,mod_inst_id){


	
	if(evts && module_id && mod_inst_id){


		if(this.modules[module_id][mod_inst_id]){
			
			this.modules[module_id][mod_inst_id].events = evts;
			


		}


	}






}// End of registerEvents method


CORE.prototype.triggerEvent = function(evt){

	
	

	var moduId = null;

	if(evt){

		// console.log('Event contains data')
		for(let moduId in this.modules){

			// console.log('Modules contains modules')

			if(this.modules.hasOwnProperty(moduId)){

				// console.log('given module belongs to modules object')
				moduId = this.modules[moduId];

				for(let modInst in moduId){

					// console.log('Instances of a given moduleS')
					// console.log(moduId[modInst].events.type)
					// console.log(evt.type)
					
					if(moduId[modInst].events && moduId[modInst].events[evt.type]){

						moduId[modInst].events[evt.type](evt.data);

					}// End of inner if statement


				}

			}


		}// End of for in statement

	}// End of outer evt object check






}// End of triggerEvent method


CORE.prototype.startModule = function(moduleId,modInstId){




		var moduleID = moduleId;

		if(this.modules[moduleID][modInstId]){


			this.modules[moduleID][modInstId].init(); 
			if(moduleID === 'global'){
				
				console.log('THE GLOBAL MODULES IS ABOUT TO RECEIVE MODULES')
				this.modules[moduleID][modInstId].globals = this.globalModules
			}
		}

}// End of startModule() core method



CORE.prototype.startAllModules = function(){


	for(let modu in this.modules){

		var modSuper = this.modules[mod];

		for(let modInstId in modSuper){



			try{


				this.modules[modSuper][modInstId].init();


			}catch(e){


				console.log(e);


			}// End of try catch




		}

		
		


	}


}// End of startAllModules() core method


CORE.prototype.stopModule = function(moduleId,modInstId){


		var moduleID = moduleId;

		if(this.modules[moduleID][modInstId]){


			this.modules[moduleID][modInstId].destroy();
		}

}// End of stopModule() core method


CORE.prototype.stopAllModules = function(){


	for(let modu in this.modules){


		var modSuper = this.modules[mod];

		for(let modInstId in modSuper){



			try{


				this.modules[modSuper][modInstId].destroy();


			}catch(e){


				console.log(e);


			}// End of try catch




		}

		


	}


}// End of stopAllModules() core method



CORE.prototype.converts = function(){

		const PILLAR = this.PILLAR
	
		return {

			jsToJson: function(jsObject){


				return PILLAR.js_to_json(jsObject);
			},

			jsonToJs: function(json){


				return PILLAR.json_to_js(json);

			},
			clone: function(c){


				return PILLAR.clone(c);

			},
			objectToArray: function(o){

				return PILLAR.object_to_array(o)
			}


	}




}

CORE.prototype.sanna = function(){
	

	const self = this
	   
	return {

			
			modules: {

				validators: {

					emit: function(comp){

						if(!(comp.hasOwnProperty('emit'))){

							console.log(self.sanna().modules)
							comp.emit = self.sanna().modules.addiks.emit.bind(comp)

						}else if((typeof comp.emit !== 'function')){

							throw new Error('Emit is a reserved Akii method')
						}
					},
					listens: function(comp){

						console.log('THE COMPONENT RUNS')
						
						if(!(comp.hasOwnProperty('listens'))){

							console.log('THE LISTENS COMP PROP')
							comp.listens = self.sanna().modules.addiks.listens.bind(comp)
							console.log(comp)

						}else if((typeof comp.listens !== 'function')){

							throw new Error('Listens is a reserved ANZii method')
						}

					}
				},
				addiks: {

					emit: function(data){
						

						const self = this 
						const pao = this.pao 
						console.log(self.constructor.name,'is emitting event:',data.type,'with data: ')
						
						
							pao.pa_notifyEvent({
								
								type: data.type,
								data: data.data
							
							})	   	  
						
						
						
					},
					listens: function(evehandles){
						
							
						const self = this 
						const pao = this.pao 

						console.log('MODULE',self.constructor.name, 'listens to event(s):',evehandles)
						
						const mId = self.constructor.name.toLowerCase()
						const mInsId = self.constructor.name.toLowerCase()
						
						
							pao.pa_notifyListen(
								evehandles
							,mId,mInsId)	   	
							
						
						
					}
				}

				
			},
			
			runForModules: function(comp){

	
				let validators = this.modules.validators
				
					for(let v in validators){

						validators[v](comp)

					}
					

				

			},
		

	}

	
 
 
 
 
}







	
export default CORE;