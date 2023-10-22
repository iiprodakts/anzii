import Middleware from "./middleware/index.js";
import Parsers from './parsers/index.js';
import Router from './router/index.js';
import Request from './request/index.js';
import Server from './server/index.js';
import Config from './config/index.js';
import Anziiloger from './anziiloger/index.js';
import System from './system/index.js';
import Mysql from './mysql/index.js';
import Dao from './dao/index.js';
import Dman from './dman/index.js';
import View from './view/index.js';
import Domain from './domain/index.js';
import Global from './global/index.js';
import IO from './io/index.js';
class Esm {
    constructor() {
        this.Esm = {
            Anziiloger, Mysql, System, Middleware, Parsers, Router, Request, View, Domain, Dao, Dman, Server, Config, IO, Global
        };
    }
}
export default new Esm();
