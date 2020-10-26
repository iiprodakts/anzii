

export const  Activate =  function(libs = []){

	
	
	   
		//  console.log('The Server') 
		//  console.log('THE LIBS')
		//  console.log(libs)
		//  console.log(this.ESM.Esm)
		const core = new this.ANZII.CORE(this.ANZII.PILLAR)
		const pao = new this.ANZII.PAO(core) 
		let anziiloger = {Anziiloger: this.ESM.Esm.Anziiloger} 
		let hitList = ['System','Middleware','Router','Request','Server','Parsers'] 
		let IO  =  this.ESM.Esm.IO ? {IO: this.ESM.Esm.IO} : null 
		let isPush = true
		//  console.log('ANZII PILLAR PROMPT')
		//  console.log(pao.PROMPT) 
		 

		 if(pao.PROMPT.indexOf('cli') >= 0){

			//  console.log('This should be a cli app') 
			//  process.env.SUPPRESS_NO_CONFIG_WARNING = true
			 if(IO) delete this.ESM.Esm.IO
			 for(let plugin in this.ESM.Esm){

				if(hitList.indexOf(plugin) >= 0){

					// console.log('Deleteing modules not needed for cli operations')
					delete this.ESM.Esm[plugin]
				}
			 }
		 }else { 

			 isPush = false 
			 if(IO) delete this.ESM.Esm.IO 
			 delete IO.IO 
			 IO = null

			}


		delete this.ESM.Esm.Anziiloger
        // console.log(anziiloger)
	    // console.log(this.ESM.Esm)
	
	
	

	// let global = pao.pa_clone(this.ESM.Esm.Global) 
	// delete this.ESM.Esm.Global
	libs.unshift(anziiloger)
	// console.log('THE CORE')
	// 	console.log(libs)
	libs.push(this.ESM.Esm) 
	isPush ? libs.push(IO) : ''

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
			
					new lib[moco](pao.create(moduId,null,moco)),
					moduId,modInstId,moco
	
				);
	
				// console.log(`Currently starting module: ${moco}`)
				core.startModule(moduId,modInstId);
	
				// console.log('Dependicies')
				// console.log(typeof this.ANDZIIY.core)
				// let moduId = mod.name.toLowerCase();
			
	

		}


		
	});






	

}