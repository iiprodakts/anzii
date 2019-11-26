

function PAO(appPillar){


	this.core = appPillar;



}// End of PAO

PAO.prototype.create = function(moduleID,modInstId){

	const pa_core = this.core;
	// const util = pa_core.util
	// var events = pa_core.events()
	// var ajax = pa_core.ajax()
	// const validators = pa_core.validators()
	const util = pa_core.validators().forOf(pa_core.util(),(p,a)=>{ return {p: [`pa_${p}`],v : a}})
	const converts = pa_core.validators().forOf(pa_core.converts(),(p,a)=>{ return {p: [`pa_${p}`],v : a}})
	const validators = pa_core.validators().forOf(pa_core.validators(),(p,a)=>{ return {p: [`pa_${p}`],v : a}})
	// console.log('THE VALIDATORS')
	// console.log(validators)

	// console.log('The value of Instance Id')
	// console.log(modInstId)

	if(modInstId){

		// console.log('The module has a view')

		// var CONTAINER = dom.queryCont('data-'+moduleID, modInstId);
	
		var meta = {
			moduleId: moduleID,
			modInstId: modInstId
		}

		

	}else{

		// console.log('The module has no view')
		var meta = {
			moduleId: moduleID,
			modInstId: moduleID
		}

	}
	




	return {


			// DOM manipulations

			// view: CONTAINER,
			moduleMeta: meta,
			...util,
			...validators,
			...converts,


		// 	pa_getChildByClass: function(selector){
					
		// 		if(CONTAINER){

		// 			return CONTAINER.queryChildByClass(selector);
		// 		}
			
					



		// 	},


		// 	pa_getAllChildByClass: function(selector){
					
		// 			if(CONTAINER){

		// 				return CONTAINER.queryAllChildByClass(selector);


		// 			}
				


		// 	},

		// 	pa_getById: function(selector){
				
					
		// 			return dom.queryById(selector);



		// 	},

		// 	pa_getByTag: function(parent,selector){
				
					
		// 		return dom.queryByTag(parent,selector);



		// },

		// 	pa_getByAttribute: function(attrib){
				
					
		// 		return dom.queryByAttribute(attrib);



		// 	},


		// 	pa_getAllChildByAttribute: function(attrib){
					
		// 			return CONTAINER.queryAllChildByAttribute(attrib);



		// 	},

		// 	pa_getChildByAttribute: function(attrib){
					
		// 			return CONTAINER.queryChildByAttribute(attrib);



		// 	},



		// 	pa_getNodeType: function(node){
					
					

		// 		return dom.queryNodeType(node);



		// 	},


		// 	pa_createElement: function(selector){
					
					
		// 		var el = dom.createElement(selector);

		// 		return el;


		// 	},

		// 	pa_isEqualNode: function(node1,node2){
					
					
		// 		return dom.isEqualNode(node1,node2);

		// 		// return el;


		// 	},

		// 	pa_copyDeep: function(el){
					
					
		// 		var el = dom.copyDeep(el);

		// 		return el;


		// 	},

		// 	pa_copyShallow: function(el){
					
					
		// 		var el = dom.copyShallow(el);

		// 		return el;


		// 	},

		// 	pa_addProperty: function(el,attrib,attribValue){


		// 		if(typeof window === "undefined"){

		// 			return dom.addProperty(el,attrib,attribValue);

		// 		}else{

		// 			 dom.addProperty(el,attrib,attribValue);

		// 		}
				

		// 	},

		// 	pa_removeProperty: function(el,attrib){


		// 		dom.removeProperty(el,attrib);

		// 	},

		// 	pa_insertInner: function(el,content){

		// 		if(typeof window === "undefined"){

		// 			return dom.insertInner(el,content);

		// 		}else{

		// 			dom.insertInner(el,content);

		// 		}
			

		// 	},

		// 	pa_addChild: function(parent,child){


		// 		if(typeof window === "undefined"){

		// 			return dom.addChild(parent,child);

		// 		}else{

		// 			 dom.addChild(parent,child);

		// 		}
				


		// 	},

		// 	pa_getClasses: function(element){


		// 		return dom.getClasses(element);


		// 	},

		// 	pa_addClass: function(classlist,classname){


		//  		dom.addClass(classlist,classname);


		// 	},

		// 	pa_removeClass: function(classlist,classname){


		// 		 dom.removeClass(classlist,classname);


		// 	},

		// 	pa_toggleClass: function(classlist,classname){


		// 		 dom.toggleClass(classlist,classname);


		// 	},

		// 	pa_hasClass: function(classlist,classname){


		// 		 return dom.hasClass(classlist,classname);


		// 	},

		// 	pa_getStyles: function(element){


		// 		 return dom.getStyles(element);


		// 	},

		// 	pa_getAttributes: function(element){


		// 		 return dom.getAttributes(element);


		// 	},

		// 	pa_getParent: function(child){


		// 		return dom.getParent(child);


		//    },





		// 	// EVENTS manipulations

		// 	pa_addEvent: function(el,ev,handler){
					
		// 	    if(typeof window === "undefined"){

		// 			return	events.addEventHandler(el,ev,handler);

		// 		}else{

		// 			events.addEventHandler(el,ev,handler);

		// 		}
				



		// 	},

		// 	pa_removeEvent: function(el,ev,handler){
					
					
		// 			events.addEventHandler(el,ev,handler);


		// 	},


		// 	pa_getEvent: function(ev){


		// 		return events.getEvent(ev);


		// 	},// End of addEventHandler() method

		// 	pa_getTarget: function(ev){


		// 		return events.getTarget(ev);


		// 	},// End of addEventHandler() method


		// 	pa_preventNormal: function(ev){
					
					
		// 			events.preventNormal(ev);


		// 	},

		// 	pa_stopEventBubble: function(ev){
					
					
		// 		events.stopEventBubble(ev);


		// },






		// 	// AJAX communications
			


		// 	pa_ajaxGet: function(url,data,success,failure,type){
					
					
		// 		ajax.get(url,data,success,failure,type);



		// 	},

		// 	pa_ajaxPost: function(url,data,success,failure,type){
					
					
		// 		ajax.post(url,data,success,failure,type);



		// 	},


		// 	// MODULE communications


			pa_notifyListen: function(evts,moduleID,modInstId){

				// console.log('The notifyListen event has been successfuly invoked')
				pa_core.registerEvents(evts,moduleID,modInstId);

			},// End of notifyListen() for events to listen to


			pa_notifyEvent: function(evt){

					// console.log('The notify event has been successfuly invoked')
					pa_core.triggerEvent(evt);





			},// end of notifyEvent() occurence

		// 	pa_validate: function(data){


		// 		var validateResult = pa_core.validator.validate(data);

		// 		return validateResult;


		// 	},

		// 	pa_jsToJson: function(jsObject){


		// 		return converts.jsToJson(jsObject);
		// 	},

		// 	pa_jsonToJs: function(json){

				
		// 		return converts.jsonToJs(json);
		// 	},

		// 	pa_clone: function(c){

				
		// 		return converts.clone(c);
		// 	},
		// 	pa_objectToArray: function(o){

		// 		return converts.objectToArray(o)
		// 	}


			
			
			




	}// End OF return



	

}// End of PAO create() method

export default PAO

