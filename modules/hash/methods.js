



export const init = function(){
  
  
  console.log('List has been initialised') 
  this.listens({
		
	'hash-payload': this.handleHashPayload.bind(this),
	'compare-payload': this.handleComparePayload.bind(this)
  
  })

	
}


export const handleHashPayload = async function(data){

	
	const self = this 
	const pao = self.pao
	let hashed = await self.hash({password: data.payload})

	if(!pao.pa_isString(hashed)){

		data.callback({e: hashed.e,message: 'Hashing failed'})
	}else{

		data.callback(null,hashed)
	}



} 

export const handleComparePayload = async function(data){

	
	const self = this 
	const pao = self.pao
	let compared = await self.compare({plainpass: data.payload.plainpass,hash: data.payload.hash})
	console.log('TEH COMPARED')
	console.log(compared)
	
	if(pao.pa_isString(compared) || pao.pa_isObject(compared) ){

		data.callback({e: compared.e,message: 'Comparison failed'})
	}else{

		data.callback(null,compared)
	}


} 

export const hash = function(data){

	const self = this
	return new Promise((resolve,reject)=>{



			self.hach.genSalt(10,(err,salt)=>{

		

			if(err){

				reject({error: true, e: err});

			}else{

				self.hach.hash(data.password,salt,(err,hashedPass)=>{

					if(err){

						reject({error: true,e: err});

					}else{

						
						resolve(hashedPass);
					}


				});
			}
			

		});


	



	})
	
	

}

export const compare = function(data){
	
	const self = this 

	return new Promise((resolve,reject)=>{


		self.hach.compare(data.plainpass,data.hash,(err,isMatch)=>{

			if(err){

				self.log('Match failed,an error occured')
				self.log(err)
				reject({error: true,e: err});

			}else{

				if(isMatch === true){

					resolve(isMatch);

				}else{

					resolve(false);

				}

				
				
			}
			

		})




	})
	



}



