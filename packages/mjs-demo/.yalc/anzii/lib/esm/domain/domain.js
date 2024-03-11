import fs from "fs";
import passport from "passport";
import path from "path";
import * as methods from "./methods.js";
const { initialize } = passport;
class Domain {
	constructor(pao) {
		this.pao = pao;
		this.system = null;
		this.fs = fs;
		this.path = path;
		this.passport = passport;
		this.init = methods.init;
		this.passportInitialize = initialize;
		this.handleSetDomainDefaults = methods.handleSetDomainDefaults;
		this.handleConfigDomain = methods.handleConfigDomain;
		this.handleTakeSystemBase = methods.handleTakeSystemBase;
		this.hookIntoWebpackCompilation = methods.hookIntoWebpackCompilation;
	}
}
export default Domain;
