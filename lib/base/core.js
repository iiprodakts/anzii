

function CORE(lib){

   
	this.PILLAR = lib
	this.modules = {}; 
	this.globalModules = [] 
	this.PROMPT = this.PILLAR.PROMPT
	// this.parent = this


}// End of the CORE class



CORE.prototype.createModule = function(module,moduleId,modInstId,className){

	var modules = this.modules;
	this.sanna().runForModules(module,className)

	

	// console.log('THe modules Object')
	// console.log(modules)


	if(Object.keys(modules).length > 0){


		
		for(let mod in modules){

			//console.log(modules[mod]);

		

			if(mod === moduleId){

				 this.modules[moduleId][modInstId] = module;

			}else{

				
				this.modules[moduleId] = {};
				this.modules[moduleId][modInstId] = module;

			}


		}// End of for loop

		


	}else{

	
		this.modules[moduleId] = {};
		this.modules[moduleId][modInstId] = module;


	}// End of ifesleif test

	




}// End of store modules method

// CORE.prototype.PROMPT = this.PILLAR.PROMPT

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
		  isValidEmail: function(e){

			
			return PILLAR.is_valid_email(e)


	  	},
	  	isValidPassword: function(p){

		return PILLAR.is_valid_password(p)

  		},
		  unlikeProps: function(a,b){

			 return PILLAR.unlike_props(a,b)				

		  },
		  contains: function(o,v){

			return PILLAR.contains(o,v)
		  },
		  forOf: function(o,action,no){

			 return  PILLAR.for_of(o,action,no)
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
		mkdirsSync: function(abs, isFileName,callback){

			return PILLAR.p_mkdirs(abs, isFileName, callback)
		},
		getFiles: function(p,opts,callback){

			return PILLAR.p_getFiles(p, opts, callback)
		},
		getFile: function(f){

			return PILLAR.p_getFile(f)
		},
		getDirectories: function(p){

			return PILLAR.p_getDirectories(p)

		},
		getExtension: function(f,callback){

			return PILLAR.p_getExtension(f,callback)
		},
		generateUniqueID: function(){

			return PILLAR.p_generateUniqueID()
		},
		unikify: function(a){

			return PILLAR.p_unikify(a)
		},
		getWorkingFolder: function(a){

			return PILLAR.p_getWorkingFolder()
		},
		makeFolderSync: function(absPath){

			return PILLAR.p_makeFolderSync(absPath)
		},
		createFolderContent: function(source,target){

			return PILLAR.p_createFolderContent(source,target)
		},
		loadFile: function(filepath){

			return PILLAR.p_loadFile(filepath)
		},
		getMainFileName: function(){

			return PILLAR.p_getMainFileName()
		},
		getRootDir: function(){

			return PILLAR.p_getRootDir()
		},
		isExistingDir: function(filepath){

			return PILLAR.p_isExistingDir(filepath)
		}
		


		


	}

}

/*

	The methods immediately after this method will be used for module inter communication, which is
	a way that modules communicate with each other indirectly.
	

*/

CORE.prototype.registerEvents = function(evts = {},module_id = '',mod_inst_id = ''){

	// console.log('THE REGISTER MODULES METHOD')
	// console.log(evts)
	// console.log(module_id,mod_inst_id)
	
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

		// console.log('THE START MODULE') 
		// console.log(moduleId)

		if(this.modules[moduleID][modInstId]){


			if(moduleID !== 'anziiloger'){

				// console.log('not A LOGGER MODULE')
				// console.log(this.modules[moduleID][modInstId].getClassName) 
				// console.log(this.modules[moduleID][modInstId].getClassName())
				//  this.modules['anziiloger']['anziiloger'].setDebugger(this.modules[moduleID][modInstId].constructor.name) 
				 this.modules['anziiloger']['anziiloger'].setDebugger(this.modules[moduleID][modInstId].getClassName()) 
				// this.modules['anziiloger']['anziiloger'].setDebugger(moduleID)
			}
			this.modules[moduleID][modInstId].init(); 
			if(moduleID === 'global'){
				
				// console.log('THE GLOBAL MODULES IS ABOUT TO RECEIVE MODULES')
				// console.log(Object.keys(this.modules))
			
				this.modules[moduleID][modInstId].globals = Object.keys(this.modules)
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


				// console.log(e);


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


				// console.log(e);


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
			objectToArray: function(o={},key=false){

				return PILLAR.object_to_array(o,key)
			},
			stringToArray: function(str,sep){

				return PILLAR.string_to_array(str,sep)
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

							// console.log(self.sanna().modules)
							comp.emit = self.sanna().modules.addiks.emit.bind(comp)

						}else if((typeof comp.emit !== 'function')){

							throw new Error('Emit is a reserved Akii method')
						}
					},
					listens: function(comp){

						// console.log('THE COMPONENT RUNS')
						
						if(!(comp.hasOwnProperty('listens'))){

							// console.log('THE LISTENS COMP PROP')
							comp.listens = self.sanna().modules.addiks.listens.bind(comp)
							// console.log(comp)

						}else if((typeof comp.listens !== 'function')){

							throw new Error('Listens is a reserved ANZii method')
						}

					},
					log: function(comp){

						comp.log = self.sanna().modules.addiks.log.bind(comp)
					},
					logSync: function(comp){

						comp.logSync = self.sanna().modules.addiks.log.bind(comp)
					},
					getClassName: function(comp){

						comp.getClassName = self.sanna().modules.addiks.getClassName.bind(comp)
					},
					
					query: function(comp){

						comp.query = self.sanna().modules.addiks.query.bind(comp)
					}
				},
				addiks: {

					emit:  function(data){
						

						const self = this 
						const pao = this.pao 
						// self.log(self.constructor.name,'is emitting event:',data.type,'with data: ')
						
						
							pao.pa_notifyEvent({
								
								type: data.type,
								data: data.data
							
							})	   	  
						
						
						
					},
					listens: function(evehandles){
						
							
						const self = this 
						const pao = this.pao 

						// console.log('THE VALUE OF SELF')
						// console.log(self)

						self.log('MODULE',self.getClassName(), 'listens to event(s):',evehandles)
						
						// const mId = self.constructor.name.toLowerCase()
						// const mInsId = self.constructor.name.toLowerCase() 
						const mId = pao.moduleMeta.moduleId
						const mInsId = pao.moduleMeta.modInstId 
						// console.log('LISTENS METHOD RECEIVED A CALL')
						// console.log(pao.moduleMeta)
						// console.log(pao.moduleMeta.modInstId)
						// console.log(mInsId)
						
							pao.pa_notifyListen(
								evehandles
							,mId,mInsId)	   	
							
						
						
					},
					log: function(message= 'No message provided',type = 'console'){

						const self = this 
						const pao = this.pao 
						let data = {message: message,type: type}
						data.source = self.getClassName()
						self.emit({type:'anziiloger-log',data: data})
					},
					logSync: function(message= 'No message provided',type = 'console'){

						const self = this 
						const pao = this.pao 
						let data = {message: message,type: type}
						data.source = self.getClassName()
						data.sync = true
						self.emit({type:'anziiloger-log',data: data})
					},
					getClassName: function(){

						const self = this 
						const pao = this.pao 
						// console.log('GET CLASSNAME')
						// console.log(pao)
						return pao.moduleMeta.className
	
					},
					query: function(model=null,document = null,handler= null){

						const self = this 
						const pao = self.pao 


						if(!model || !document){
						
							throw new Error('Query method missing required parameters')
							
						}else{

						
								let modelFrags = pao.pa_isString(model) ? pao.pa_stringToArray(model,'.') : model 
								// console.log(pao.pa_stringToArray)
								// console.log(modelFrags)
								if(modelFrags.length === 3){

									let mo = {vendor: modelFrags[0],table: modelFrags[1],operation: modelFrags[2]}
									self.emit({
										type: 'data-hive-request',
										data: {model: mo,document,handler}
									})

								}else if(model[1].trim() === 'PROCEDURE' || 'JOIN' || 'SEARCH' || 'TRANSACTION' || 'UPDATEANDTAKE' || 'INSERTANDTAKE' || 'DELETEANDTAKE' || 'DELETEMULTIPLE'){

									
									let mo = {vendor: modelFrags[0],table: modelFrags[1].toLowerCase(),operation: modelFrags[1].toLowerCase()}
									self.emit({
										type: 'data-hive-request',
										data: {model: mo,document,handler}
									})

									
									
								}else{
									// console.log('THE ARRAY')
									// console.log(modelFrags)
									throw new Error('Query method requires database vendor,table and operation')
								}
							

						}

					}
				}

				
			},
			
			runForModules: function(comp,clname){

	
				let validators = this.modules.validators
				
					for(let v in validators){

						validators[v](comp,clname)

					}
					

				

			},
		

	}

	
 
 
 
 
}







	
export default CORE;