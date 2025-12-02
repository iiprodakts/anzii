import * as methods from "./methods.js";
class Middleware {
	constructor(pao) {
		this.pao = pao;
		this.middlewares = {
			all: [
				{
					type: "function",
					value: (req, res, next) => {
						//  adL('I am the zeenith ware'),
						res.header("Access-Control-Allow-Origin", "*");
						res.header(
							"Access-Control-Allow-Headers",
							"Origin, X-Requested-With, Content-Type, Accept",
						);
						next();
					},
				},
			],
		};
		this.MiddlewareTypes = ["all", "private", "public"];
		// console.log('THE STORE')
		// console.log(this.supubu
		this.init = methods.init;
		this.handleAttachMiddleware = methods.handleAttachMiddleware;
		this.attachMiddleware = methods.attachMiddleware;
		this.handleConfigMiddleware = methods.handleConfigMiddleware;
		this.handleAddExternalMiddleware = methods.handleAddExternalMiddleware;
		this.setMiddleware = methods.setMiddleware;
		this.formatMiddlewareStructure = methods.formatMiddlewareStructure;
		this.allWares = methods.allWares;
	}
}
export default Middleware;
