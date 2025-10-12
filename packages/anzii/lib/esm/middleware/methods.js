export const init = function () {
	this.adLog("Middleware has been initialised");
	this.listens({
		"config-middleware": this.handleConfigMiddleware.bind(this),
		"add-ext-middleware": this.handleAddExternalMiddleware.bind(this),
		"attach-middleware": this.handleAttachMiddleware.bind(this),
	});
};
export const handleAttachMiddleware = function (data) {
	this.attachMiddleware(data);
};
export const handleConfigMiddleware = function (data) {
	const self = this;
	self.debug("THE HANDLE CONFIG MIDDLEWARE", data);

	let middlewares = data;
	//  self.debug(middlewares)
	let middlewaresIDS = Object.keys(middlewares);
	middlewaresIDS.forEach((middlewareGroup) => {
		let currentMiddlewaresGroup = [...middlewares[middlewareGroup]];
		switch (middlewareGroup) {
			case "public":
				self.public = currentMiddlewaresGroup;
				break;
			case "private":
				self.private = currentMiddlewaresGroup;
				break;
			case "all":
				self.all = currentMiddlewaresGroup;
				break;
			default:
				throw new Error("Invalid middleware type");
		}
	});
};
export const handleAddExternalMiddleware = function (data) {
	const self = this;
	const pao = self.pao;
	const contains = pao.pa_contains;
	const { payload } = data;

	self.info("ADD EXTERNAL MIDDLEWARE EVENT HAS OCCURED", data);
	self.info("THE SELF.TYPES", self.MiddlewareTypes);

	payload.forEach((middleware) => {
		self.info("THE CURRENT ADD EXTERNAL MIDDLEWARE", middleware);
		self.info("THE MIDDLEWARE TYPE", middleware.type);
		self.info(
			"THE CONTAINS",
			contains(self.MiddlewareTypes, [`${middleware.type}`]),
		);
		// if (contains(self.MiddlewareTypes, [`${middleware.type}`]))
		// 	throw new Error("Invalid middleware type");
		self.setMiddleware(middleware.type, middleware);
	});

	// if (data.type) {
	// 	if (data.type === "private") {
	// 		if (data.level === "top") {
	// 			if (pao.pa_isArray(data.middleware.funk)) {
	// 				// eslint-disable-next-line no-unused-vars
	// 				data.middleware.forEach((m, i) => {
	// 					self.middleware.unshift({
	// 						type: "function",
	// 						value: m.funk,
	// 						ext: true,
	// 					});
	// 				});
	// 			} else {
	// 				self.debug(
	// 					"THE MIDDLEWARES BEFORE",
	// 					self.middlewares,
	// 					self.middlewares.pprivate,
	// 				);

	// 				if (self.middlewares.pprivate) {
	// 					let len = Object.keys(self.middlewares.pprivate).length;
	// 					self.middlewares.pprivate[len] = {
	// 						type: "function",
	// 						value: data.middleware.funk,
	// 						ext: true,
	// 					};
	// 				} else {
	// 					self.middlewares["pprivate"] = [
	// 						{
	// 							type: "function",
	// 							value: data.middleware.funk,
	// 							ext: true,
	// 						},
	// 					];
	// 				}

	// 				self.debug("AFTER Middlewares", self.middlewares);
	// 			}
	// 			// eslint-disable-next-line no-empty
	// 		} else {
	// 		}
	// 		// eslint-disable-next-line no-empty
	// 	} else if (data.type === "public") {
	// 	} else if (data.type === "all") {
	// 		// eslint-disable-next-line no-empty
	// 		if (data.level === "top") {
	// 		}
	// 	}
	// }
};
export const attachMiddleware = function (data) {
	const self = this;
	if (data.app) {
		// self.debug('SELF.MIDDLEWARES')
		// self.debug(self.middlewares)
		// if (self.all.length > 0) {
		// 	self.debug("THE Allwares is greater than zero");
		// 	if (data.xpress) {
		// 		self.allWares(data.app, data.xpress);
		// 	}
		// }
		if (self?.private && self?.public) {
			self.emit({
				type: "router-middleware",
				data: {
					middlewares: {
						public: self.public,
						private: self.private,
					},
				},
			});
		} else if (self?.private) {
			self.emit({
				type: "router-middleware",
				data: { middlewares: { private: self.private } },
			});
		} else if (self?.public) {
			self.emit({
				type: "router-middleware",
				data: { middlewares: { public: self.public } },
			});
		}
		if (self?.all) {
			self.all.forEach((m) => {
				self.info("MIDDLEWARE ALL", m);
				self.debug("CURRENT M AND OTPIONS", m.type, m?.options);
				if (m.type === "function") {
					if (m?.options) {
						self.debug("CURRENT ME HAS OPTIONS");
						data.app.use(m.value(m.options));
					} else {
						data.app.use(m.value);
					}
				} else if (m.type === "module") {
					self.emit({ type: `add-${m.value}-middleware`, data: data.app });
				}
			});
			data.app.use(data.xpress.json());
		} else {
			data.app.use(data.xpress.json());
		}
	}
};
export const allWares = function (app, xpress) {
	const self = this;
	const pao = self.pao;
	// eslint-disable-next-line no-unused-vars
	self.all.forEach((w, i) => {
		if (pao.pa_isObject(w)) {
			self.debug("Executing allwares");
			if (w.use) {
				self.debug("The public:", w.call);
				app.use(xpress[w.call]("public"));
			} else {
				self.debug("The none-public:", w.call);
				app.use(xpress[w.call]());
			}
		} else {
			self.debug("middleware is string");
			app.use(xpress[w]());
		}
	});
};
export const setMiddleware = function (type, middlewareInstance) {
	const self = this;
	const { middleware } = middlewareInstance;
	self.info("SET MIDDLEWARE", type, middlewareInstance);

	if (self[type]) {
		if (middlewareInstance?.level) {
			if (middlewareInstance.level === "top") {
				self[type] = [
					self.formatMiddlewareStructure(middleware),
					...self[type],
				];
			} else {
				self[type] = [
					...self[type],
					self.formatMiddlewareStructure(middleware),
				];
			}
		} else {
			self[type].push(self.formatMiddlewareStructure(middleware));
		}
	} else {
		self[type] = [self.formatMiddlewareStructure(middleware)];
	}
};
export const formatMiddlewareStructure = function (middleware) {
	const self = this;
	self.info("The Middleware format ", middleware);
	let formated = { type: "function", value: middleware.funk, ext: true };
	if (middleware?.options) formated["options"] = middleware.options;

	return formated;
};
