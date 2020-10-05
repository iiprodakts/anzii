

export const  Activate =  function(libs = []){

	
	// let pao = ''
	// let core = ''

	
	   
		// console.log('The Server')
		const core = new this.ANZII.CORE(this.ANZII.PILLAR)
		const pao = new this.ANZII.PAO(core) 
		let anziiloger = {Anziiloger: this.ESM.Esm.Anziiloger} 
		// console.log('ANZII PILLAR PROMPT')
		// console.log(pao.PROMPT)

		
		delete this.ESM.Esm.Anziiloger
        // console.log(anziiloger)
		// console.log(this.ESM.Esm)
	
	
	// console.log('The core before modules')
	// console.log(pao.sb_jsToJson(core))
	
	// console.log(libs.length)
	// console.log('The ESM MODULES SHOULD BE IN PLACE RIGHT NOw')
	// console.log(this.ESM)
	// console.log(pao)

	// let global = pao.pa_clone(this.ESM.Esm.Global) 
	// delete this.ESM.Esm.Global
	libs.unshift(anziiloger)
	// console.log('THE CORE')
	// 	console.log(libs)
	libs.push(this.ESM.Esm)

	// libs.push(global) 

	libs.forEach( lib => {


	
		for (let moco in lib) {
		
			// console.log('Inside activate')
			// console.log(moco)
			// console.log('THE LIB MOCO')
			// console.log(typeof lib[moco])
			// console.log(lib[moco])
	
            
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