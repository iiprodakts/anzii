import jsonfile from "jsonfile";
import path from "path";
import * as bodyParser from "body-parser";
import * as methods from "./methods.js";
class Parsers {
    constructor(pao) {
        this.pao = pao;
        this.path = path;
        this.dependiks = {
            jsonfile: jsonfile,
            bodyParser: bodyParser
        };
        this.init = methods.init;
        this.handleShareMiddleware = methods.handleShareMiddleware;
    }
}
export default Parsers;
