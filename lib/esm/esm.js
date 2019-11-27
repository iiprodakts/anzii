


import Middleware from "./middleware/index"
import Parsers from './parsers/index'
import Router from './router/index'
import Request from './request/index'
import Server from './server/index'
import Config from './config/index'
import Anziiloger from './anziiloger/index'
import Global from './global/index'



 


class Esm{

    constructor(){

        this.Esm = {
            Anziiloger,Middleware,Parsers,Router,Request,Server,Config,Global
        }
       
    }
    
}

export default new Esm()