

function SANDBOX(appCore){


	this.core = appCore;



}// End of SANDBOX

SANDBOX.prototype.create = function(moduleID,modInstId){

	var sb_core = this.core;
	var dom = sb_core.dom()
	var events = sb_core.events()
	var ajax = sb_core.ajax()
	var converts = sb_core.converts()

	// console.log('The value of Instance Id')
	// console.log(modInstId)

	if(modInstId){

		// console.log('The module has a view')

		var CONTAINER = dom.queryCont('data-'+moduleID, modInstId);
	
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

			view: CONTAINER,
			moduleMeta: meta,

			sb_getChildById: function(selector){
					
					if(CONTAINER){

						return CONTAINER.queryChildById(selector);

					}
				



			},
			sb_getChildByClass: function(selector){
					
				if(CONTAINER){

					return CONTAINER.queryChildByClass(selector);
				}
			
					



			},


			sb_getAllChildByClass: function(selector){
					
					if(CONTAINER){

						return CONTAINER.queryAllChildByClass(selector);


					}
				


			},

			sb_getById: function(selector){
				
					
					return dom.queryById(selector);



			},

			sb_getByTag: function(parent,selector){
				
					
				return dom.queryByTag(parent,selector);



		},

			sb_getByAttribute: function(attrib){
				
					
				return dom.queryByAttribute(attrib);



			},


			sb_getAllChildByAttribute: function(attrib){
					
					return CONTAINER.queryAllChildByAttribute(attrib);



			},

			sb_getChildByAttribute: function(attrib){
					
					return CONTAINER.queryChildByAttribute(attrib);



			},



			sb_getNodeType: function(node){
					
					

				return dom.queryNodeType(node);



			},


			sb_createElement: function(selector){
					
					
				var el = dom.createElement(selector);

				return el;


			},

			sb_isEqualNode: function(node1,node2){
					
					
				return dom.isEqualNode(node1,node2);

				// return el;


			},

			sb_copyDeep: function(el){
					
					
				var el = dom.copyDeep(el);

				return el;


			},

			sb_copyShallow: function(el){
					
					
				var el = dom.copyShallow(el);

				return el;


			},

			sb_addProperty: function(el,attrib,attribValue){


				if(typeof window === "undefined"){

					return dom.addProperty(el,attrib,attribValue);

				}else{

					 dom.addProperty(el,attrib,attribValue);

				}
				

			},

			sb_removeProperty: function(el,attrib){


				dom.removeProperty(el,attrib);

			},

			sb_insertInner: function(el,content){

				if(typeof window === "undefined"){

					return dom.insertInner(el,content);

				}else{

					dom.insertInner(el,content);

				}
			

			},

			sb_addChild: function(parent,child){


				if(typeof window === "undefined"){

					return dom.addChild(parent,child);

				}else{

					 dom.addChild(parent,child);

				}
				


			},

			sb_getClasses: function(element){


				return dom.getClasses(element);


			},

			sb_addClass: function(classlist,classname){


		 		dom.addClass(classlist,classname);


			},

			sb_removeClass: function(classlist,classname){


				 dom.removeClass(classlist,classname);


			},

			sb_toggleClass: function(classlist,classname){


				 dom.toggleClass(classlist,classname);


			},

			sb_hasClass: function(classlist,classname){


				 return dom.hasClass(classlist,classname);


			},

			sb_getStyles: function(element){


				 return dom.getStyles(element);


			},

			sb_getAttributes: function(element){


				 return dom.getAttributes(element);


			},

			sb_getParent: function(child){


				return dom.getParent(child);


		   },





			// EVENTS manipulations

			sb_addEvent: function(el,ev,handler){
					
			    if(typeof window === "undefined"){

					return	events.addEventHandler(el,ev,handler);

				}else{

					events.addEventHandler(el,ev,handler);

				}
				



			},

			sb_removeEvent: function(el,ev,handler){
					
					
					events.addEventHandler(el,ev,handler);


			},


			sb_getEvent: function(ev){


				return events.getEvent(ev);


			},// End of addEventHandler() method

			sb_getTarget: function(ev){


				return events.getTarget(ev);


			},// End of addEventHandler() method


			sb_preventNormal: function(ev){
					
					
					events.preventNormal(ev);


			},

			sb_stopEventBubble: function(ev){
					
					
				events.stopEventBubble(ev);


		},






			// AJAX communications
			


			sb_ajaxGet: function(url,data,success,failure,type){
					
					
				ajax.get(url,data,success,failure,type);



			},

			sb_ajaxPost: function(url,data,success,failure,type){
					
					
				ajax.post(url,data,success,failure,type);



			},


			// MODULE communications


			sb_notifyListen: function(evts,moduleID,modInstId){

				// console.log('The notifyListen event has been successfuly invoked')
				sb_core.registerEvents(evts,moduleID,modInstId);

			},// End of notifyListen() for events to listen to


			sb_notifyEvent: function(evt){

					// console.log('The notify event has been successfuly invoked')
					sb_core.triggerEvent(evt);





			},// end of notifyEvent() occurence

			sb_validate: function(data){


				var validateResult = sb_core.validator.validate(data);

				return validateResult;


			},

			sb_jsToJson: function(jsObject){


				return converts.jsToJson(jsObject);
			},

			sb_jsonToJs: function(json){

				
				return converts.jsonToJs(json);
			},

			sb_clone: function(c){

				
				return converts.clone(c);
			},
			sb_objectToArray: function(o){

				return converts.objectToArray(o)
			}


			
			
			




	}// End OF return



	

}// End of SANDBOX create() method

export default SANDBOX

