
import * as methods from "./methods"


// 



class Dman{
  
  
  constructor(pao){

    this.DBS   = [] 
    this.supportedClients = {
    	
    	mongo: {
    		
        protocol: 'mongopro',
        connectMethods: ''
    		// connect: ()
    		
    	},
    	mysql: {
        
        protocol: '',
        connectMethod: ''
    	},
    	pg: {
    		
    	},
    	redis: {
    		
    	},
    	sqlite: {
    		
    		
    	}
    	
    	
    }
    


    // // methods

     this.init = methods.init
     this.connectToDbServer = methods.connectToDbServer 
     this.getDbHandle = methods.getDbHandle

  }


  

}

export default Dman