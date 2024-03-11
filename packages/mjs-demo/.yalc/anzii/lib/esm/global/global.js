import * as methods from "./methods.js";
class Global {
	constructor(pao) {
		this.pao = pao;
		this.globals = [];
		this.init = methods.init;
		this.handleRequestGlobalRequest = methods.handleRequestGlobalRequest;
	}
}
export default Global;
