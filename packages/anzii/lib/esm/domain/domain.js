import path from "path";
import fs from "fs";
import * as passport from "passport";
import * as methods from "./methods.js";
class Domain {
    constructor(pao) {
        this.pao = pao;
        this.system = null;
        this.fs = fs;
        this.path = path;
        this.passport = passport;
        this.init = methods.init;
        this.handleSetDomainDefaults = methods.handleSetDomainDefaults;
        this.handleConfigDomain = methods.handleConfigDomain;
        this.handleTakeSystemBase = methods.handleTakeSystemBase;
        this.hookIntoWebpackCompilation = methods.hookIntoWebpackCompilation;
    }
}
export default Domain;
