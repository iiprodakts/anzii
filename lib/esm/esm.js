


import Middleware from "./middleware/index"
import Parsers from './parsers/index'
import Router from './router/index'
import Request from './request/index'
import Server from './server/index'
import Config from './config/index'
import Anziiloger from './anziiloger/index'
import System from './system/index'
import Mysql from './mysql/index'
import Dao from './dao/index'
import Dman from './dman/index'
import Global from './global/index'



 


class Esm{

    constructor(){

        this.Esm = {
            Anziiloger,Mysql,System,Middleware,Parsers,Router,Request,Dao,Dman,Server,Config,Global
        }
       
    }
    
}

export default new Esm()