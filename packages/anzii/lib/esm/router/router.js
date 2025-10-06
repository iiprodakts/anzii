import cors from "cors";
import path from "path";
import * as methods from "./methods.js";
class Router {
	constructor(pao) {
		this.pao = pao;
		this.routes = null;
		this.routerMiddleware = null;
		this.filteredpublicMiddlewares = [];
		this.filteredprivateMiddlewares = [];
		this.path = path;
		this.cors = cors;
		this.supportedMimeTypes = [
			"application/json",
			"application/pdf",
			"text/html",
			"image/png",
			"video/mp4",
			"font/woff2",
			"audio/mpeg",
			"multipart/form-data",
			"application/vnd.ms-excel",
			"application/vnd.api+json",
		];
		this.init = methods.init;
		this.handleConfigRouter = methods.handleConfigRouter;
		this.handleAttachRoutes = methods.handleAttachRoutes;
		this.handleRouterMiddleware = methods.handleRouterMiddleware;
		this.attachRoutes = methods.attachRoutes;
		this.renderRoute = methods.renderRoute;
		this.appendRouter = methods.appendRouter;
		this.middlewareType = methods.middlewareType;
		this.outOfRouterContext = methods.outOfRouterContext;
		this.handOver = methods.handOver;
		this.filterCallback = methods.filterCallback;
		this.getRequestAccepts = methods.getRequestAccepts;
	}
}
export default Router;
