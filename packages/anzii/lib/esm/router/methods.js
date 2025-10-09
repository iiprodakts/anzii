export const init = function () {
	this.adLog("Router has been initialised");
	this.listens({
		"config-router": this.handleConfigRouter.bind(this),
		"router-middleware": this.handleRouterMiddleware.bind(this),
		"attach-routes": this.handleAttachRoutes.bind(this),
	});
};
export const handleConfigRouter = function (data) {
	const self = this;

	self.routes = data;
};
export const handleRouterMiddleware = function (data) {
	const self = this;

	self.routerMiddleware = data.middleware;
};
export const handleAttachRoutes = function (data) {
	this.attachRoutes(data);
};
export const attachRoutes = function (data) {
	const self = this;
	console.log("ATTACHING ROUTES", self.routes);
	if (data.app) {
		let aliasList = [];
		let aliatikHandlers = [];
		data.app.use(self.cors());
		data.app.use("/", data.router);

		if (!self.routes) {
			self.warn("NO_CONFIGURED_ROUTES, ANZII WILL RESOLVE TO DEFAULT ROUTES");
			// self.warn('Anzii is rendering default routes::')
			const defaultRoutes = [
				{
					path: "/greeting/:name/:surname",
					alias: "hello",
					method: "GET",
					type: "public",
				},
				// {
				// path: '/test',
				// method: 'POST',
				// 	type: 'public'
				// },
				// {
				// 	path: '/test',
				// 	method: 'GET',
				// 	type: 'public'
				// },
				// {
				// 	path: '/',
				// 	method: 'GET',
				// 	type: 'public'
				// }
			];
			defaultRoutes.forEach((r) => {
				if (r.alias)
					aliasList.push(r.path.split("/")[1]), aliatikHandlers.push(r.alias);
				r["router"] = data.router;
				self.renderRoute(r);
			});
			data.router.use(self.outOfRouterContext.bind(this));
			aliasList.length > 0
				? self.emit({
						type: "router-alias-list",
						data: { aliasList: aliasList, handlers: aliatikHandlers },
						// eslint-disable-next-line no-mixed-spaces-and-tabs
				  })
				: "";
			return;
		}
		self.routes.forEach((r) => {
			if (!r?.catchAll) {
				if (r.alias)
					aliasList.push(r.path.split("/")[1]), aliatikHandlers.push(r.alias);
				r["router"] = data.router;
				self.renderRoute(r);
			} else {
				r["router"] = data.router;
				self.catchAll = r;
			}
		});
		// data.router.use("*.js", (req, res, next) => {
		// 	res.set("Content-Type", "text/javascript");
		// 	console.log("SETTING JS");
		// 	return res.status(200);
		// });
		// data.router.use(
		// 	/\.(gif|jpe?g|tiff?|png|webp|bmp|ico)$/i,
		// 	(req, res, next) => {
		// 		var extname = path.extname(req.url);
		// 		let ext = "";

		// 		switch (extname) {
		// 			case ".png":
		// 				ext = "image/png";
		// 				break;
		// 			case ".svg":
		// 				ext = "image/svg+xml";
		// 				break;
		// 			case ".gif":
		// 				ext = "image/gif";
		// 				break;
		// 			case ".jpeg":
		// 				ext = "image/jpeg";
		// 				break;
		// 			case ".jpg":
		// 				ext = "image/jpg";
		// 				break;
		// 			default:
		// 				console.log("UNKNOWN EXTENSION");
		// 		}
		// 		console.log("SETTING IMAGES");
		// 		res.set("Content-Type", `${ext}`);

		// 		return res.status(200);
		// 	},
		// );
		// data.router.use("*.css", (req, res, next) => {
		// 	console.log("SETTING CSS");
		// 	res.set("Content-Type", "text/css");
		// 	return res.status(200);
		// });

		// if (self.catchAll) data.app.get("/*", self.catchAll);
		data.router.use(self.outOfRouterContext.bind(this));
		// data.app.get("/*", self.outOfRouterContext.bind(this));
		aliasList.length > 0
			? self.emit({
					type: "router-alias-list",
					data: { aliasList: aliasList, handlers: aliatikHandlers },
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  })
			: "";
	}
};
export const renderRoute = function (r) {
	const self = this;
	const pao = this.pao;

	let routy = {
		router: r.router,
		method: r.method,
		path: r.path,
		handOver: self.handOver,
	};
	// self.debug('THE ROUTE MIDDLEWARE')
	// self.debug(self.routerMiddleware.public)
	if (r.middlewares) {
		if (self.routerMiddleware && self.routerMiddleware[r.type]) {
			self.middlewareType(r.type, r.middlewares);
			self.middlewareType(
				r.type,
				pao.pa_objectToArray(self.routerMiddleware[r.type]),
			);
			self.appendRouter({
				middleware: self[`filtered${r.type}Middlewares`],
				...routy,
			});
			self[`filtered${r.type}Middlewares`] = [];
		} else {
			self.middlewareType(r.type, r.middlewares);
			self.appendRouter({
				middleware: self[`filtered${r.type}Middlewares`],
				...routy,
			});
			self[`filtered${r.type}Middlewares`] = [];
		}
	} else if (self.routerMiddleware && self.routerMiddleware[r.type]) {
		self.middlewareType(
			r.type,
			pao.pa_objectToArray(self.routerMiddleware[r.type]),
		);
		self.appendRouter({
			middleware: self[`filtered${r.type}Middlewares`],
			...routy,
		});
		self[`filtered${r.type}Middlewares`] = [];
	} else {
		self.appendRouter(routy);
		self[`filteredpublicMiddlewares`] = [];
		self[`filteredprivateMiddlewares`] = [];
	}
};
export const appendRouter = function (r) {
	// self.debug('THE APPENDROUTER')
	// self.infoSync('THE CURRENT ROUTER')
	// self.infoSync(r)
	if (r.middleware) {
		// self.info('THE CURRENT ROUTER with middleware')
		// self.infoSync(r.path)
		// self.infoSync(r.middleware)
		// self.infoSync(r.handOver)

		r.router[r.method.toLowerCase()](
			r.path,
			r.middleware,
			r.handOver.bind(this),
		);
	} else {
		// self.info('THE CURRENT ROUTER with middleware')
		// self.infoSync(r.path)
		// self.infoSync(r.middleware)
		// self.infoSync(r.handOver)
		r.router[r.method.toLowerCase()](r.path, r.handOver.bind(this));
	}
};
export const middlewareType = function (type, middlewares) {
	const self = this;
	// self.debug('THE MIDDLEWARETYP MIDDLEWARES')
	// self.debug(middlewares)
	// self.infoSync('The Router middlewares')
	// self.infoSync(middlewares)
	middlewares.forEach((m) => {
		if (m.type === "function") {
			self[`filtered${type}Middlewares`].push(m.value);
		} else if (m.type === "module") {
			self.emit({
				type: `add-${m.value}-middleware`,
				data: { type: type, filterCallback: self.filterCallback.bind(self) },
			});
		}
	});
};
export const outOfRouterContext = async function (req, res, next) {
	const self = this;

	let reqresID = self.pao.pa_generateUniqueID();
	req.R_ID = reqresID;
	res.R_ID = reqresID;

	self.debug("Handling out of context route", req.originalUrl);
	if (self.catchAll && req.originalUrl === "/") {
		// self.requestData = {
		// 	parsed: parsed,
		// 	handler: handler,
		// 	request: { req: data.req, res: data.res, next: data.next },
		// };
		return self.emit({
			type: `catch-all`,
			data: {
				payload: "self.requestData",
				callback: (response) => {
					self.debug("THE CATCH-ALL RESPONSE", response);

					return self.emit({
						type: "write-server-request-response",
						data: {
							data: { data: { type: "modular", view: response.html } },
							res,
							method: "renderView",
						},
					});
				},
			},
		});
	}
	next();
	// if (req.accepts(["html", "json"]) === "json") {
	// 	data = {
	// 		error: false,
	// 		accepts: "html",
	// 		type: "StaticServe",
	// 		code: 200,
	// 		sendFile: true,
	// 		fileSource: folderPath,
	// 	};
	// } else if (req.accepts(["html", "json"]) === "html") {

	// 	data = {
	// 		error: true,
	// 		accepts: "html",
	// 		type: "NotFound",
	// 		code: 404,
	// 		message: "Resource was not found: OutOfContext",
	// 	};
	// } else {
	// 	data = {
	// 		error: true,
	// 		accepts: "txt",
	// 		type: "NotFound",
	// 		code: 404,
	// 		message: "Resource was not found: OutOfContext",
	// 	};
	// }
	// return self.emit({
	// 	type: "write-server-request-response",
	// 	data: { data: data, res: res },
	// });
};
export async function handOver(req, res, next) {
	const self = this;

	let reqresID = self.pao.pa_generateUniqueID();
	req.R_ID = reqresID;
	res.R_ID = reqresID;
	res.ACCEPTS = self.getRequestAccepts(req);
	self.infoSync(
		`HANDLING REQUEST OF ID: ${req.R_ID.split("-")[0]} WITH METHOD: ${
			req.method
		} AND URL OF: ${req.originalUrl}`,
	);

	return self.emit({
		type: "request-handover",
		data: { req: req, res: res, next: next },
	});
	// return res.json({todo:{list:{items:['I ate food','I wrote code','I read a book','I watched a movie']}}})
}
export const filterCallback = function (filterType, moduleMiddleware) {
	const self = this;
	if (filterType === "public") {
		self.filteredpublicMiddlewares.push(moduleMiddleware);
	} else {
		self.filteredprivateMiddlewares.push(moduleMiddleware);
	}
};
export const getRequestAccepts = function (req) {
	if (req.accepts("json")) {
		return "json";
	} else if (req.accepts("html")) {
		return "html";
	} else if (req.accepts("txt")) {
		return "txt";
	} else if (req.accepts("image/webp")) {
		return "image/webp";
	} else if (req.accepts("image/png")) {
		return "image/png";
	} else if (req.accepts("image/jpeg")) {
		return "image/jpeg";
	} else {
		("not-acceptable");
	}
};
