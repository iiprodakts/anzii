

import Base from './base'
import Esm from './esm/esm'
import * as Activator from './base/activate'


class Anzii{

    constructor(){

		// console.log(Activator.Activate)
		// console.log(Base.SUKU)
		const self = self

		this.ANZII = Base
		this.ESM = Esm
		this.Activate = Activator.Activate
		// this.DomLoaded = Base.SUKU.domLoaded.bind(this.SANA.SUKU)
		// this.Html = Base.SUKUS.html.bind(this.SANA.SUKUS)
		
        
    }
    
}

export default new Anzii()


