


import Middleware from "./middleware/index"
import Parsers from './parsers/index'
import Router from './router/index'
import Server from './server/index'



 


class Esm{

    constructor(){

        this.Esm = {
            Middleware,Parsers,Router,Server
        }
       
    }
    
}

export default new Esm()