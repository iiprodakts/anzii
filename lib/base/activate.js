

export const  Activate =  function(libs,fl){

	// console.log('The value of the window.object')
	  
	// console.log(window.location)
	// console.log(window.history)
	// console.log(window.document)
	// console.log(window.document.referrer)
	// console.log(window.this.SANA)
	// console.log(this)
	// console.log(window.SUKU)

	// console.log(Object.getOwnPropertyNames(window))
	 
	// console.log('ACTIVATE THIS ')
	// console.log(this)
	// console.log(libs)

	let sandbox = ''
	let core = ''

	if(fl){
	   
		console.log('The Server')
		core = new this.SANA.CORE(this.SANA.SUKUS)
		sandbox = new this.SANA.SANDBOX(core)
	}else{

		console.log('The Client')
		core = new this.SANA.CORE(this.SANA.SUKU)
		sandbox = new this.SANA.SANDBOX(core)

	}
	
	// console.log('The core before modules')
	// console.log(sandbox.sb_jsToJson(core))
	console.log('The libs')
	console.log(libs)
	console.log(libs.length)
	// console.log('The Esm')
	// console.log(this.ESM)

	libs.unshift(this.ESM.Esm)

	libs.forEach( lib => {



		for (let moco in lib) {
		
			// console.log('Inside activate')
			// console.log(moco)

			let moduId = moco.toLowerCase()
			let v = ''
			if(typeof window !== "undefined"){
				console.log('The type of window is defined')

				console.log(moduId)
				v = this.SANA.SUKU.getAllBy_attribute('data-'+moduId);
			}

			console.log('THE V')
			console.log(v)
			// console.log(`Currently executing module: ${moco}`)

			if(v.length > 0){

				// console.log('Executing the module with view')
			
                console.log('The v is greater than 0')
				var attribs = this.SANA.SUKU.get_element_attributes(v[0]);
				var modInstId = '';

				if(attribs.length > 0){


					for(var a=0; a < attribs.length; a++){

						var attName = attribs[a].name;

						if(attName === 'data-'+moduId){

							var attValue = attribs[a].value;

							modInstId = attValue;


								
							break;
						}

					}

				}// End of check attributes length if statement


				moco === 'activator' ?

					core.createModule(
				
						new lib[moco](sandbox.create(moduId,modInstId),core),
						moduId,modInstId
		
					)

				: 

					core.createModule(
					
						new lib[moco](sandbox.create(moduId,modInstId)),
						moduId,modInstId
		
					)
	
				// console.log(`Currently starting module: ${moco}`)
				core.startModule(moduId,modInstId);
	
				// console.log('Dependicies')
				// console.log(typeof this.SANA.core)
				// // let moduId = mod.name.toLowerCase();

				


			}else{

				
				let modInstId = moduId
					   
				// console.log('Executing module without view')

				core.createModule(
			
					new lib[moco](sandbox.create(moduId,null)),
					moduId,modInstId
	
				);
	
				// console.log(`Currently starting module: ${moco}`)
				core.startModule(moduId,modInstId);
	
				// console.log('Dependicies')
				// console.log(typeof this.SANA.core)
				// // let moduId = mod.name.toLowerCase();

				}
	

		}


		
	});




	

}