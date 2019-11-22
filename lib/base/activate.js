

export const  Activate =  function(libs){

	
	// let pao = ''
	// let core = ''

	
	   
		console.log('The Server')
		const core = new this.ANZII.CORE(this.ANZII.PILLAR)
		const pao = new this.ANZII.PAO(core)
	
	
	// console.log('The core before modules')
	// console.log(pao.sb_jsToJson(core))
	console.log('The libs')
	console.log(libs)
	console.log(libs.length)
	console.log('The ESM MODULES SHOULD BE IN PLACE RIGHT NOw')
	console.log(this.ESM)

	libs.unshift(this.ESM.Esm) 

	libs.forEach( lib => {



		for (let moco in lib) {
		
			console.log('Inside activate')
			console.log(moco)

	

			let moduId = moco.toLowerCase()

			// console.log('THE V')
			// console.log(v)
			// console.log(`Currently executing module: ${moco}`)

			

				
				let modInstId = moduId
						
				// console.log('Executing module without view')

				core.createModule(
			
					new lib[moco](pao.create(moduId,null)),
					moduId,modInstId
	
				);
	
				// console.log(`Currently starting module: ${moco}`)
				core.startModule(moduId,modInstId);
	
				// console.log('Dependicies')
				// console.log(typeof this.ANDZIIY.core)
				// let moduId = mod.name.toLowerCase();
			
	

		}


		
	});






	

}