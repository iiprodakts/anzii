/* eslint-disable no-mixed-spaces-and-tabs */
export const init = function () {
	this.adLog("Request has been initialised");
	this.listens({
		"config-request": this.handleConfigRequest.bind(this),
		"request-handover": this.handleRequestHandOver.bind(this),
		"request-global-request-response":
			this.handleRequestGlobalResponse.bind(this),
		// 'request-view-response': this.handleRequestViewResponse.bind(this),
		"request-global-request-error": this.handleRequestGlobalError.bind(this),
		"request-handler-error": this.handleHandlerError.bind(this),
		"router-alias-list": this.handleRouterAliasList.bind(this),
	});
};
export const handleConfigRequest = function (data) {
	const self = this;
	// self.infoSync("handleRequest Data;;;");
	// self.infoSync(data);
	data.forEach((route) => {
		route.view ? self.views.push(route.path) : "";
	});
};
export const handleRequestHandOver = function (data) {
	const self = this;

	let aliasList = self.routesAliasList;
	let aliatikHandlers = self.aliatikHandlers;
	let parsed = self.parseRequest(data.req);

	data.req.uploads
		? parsed.user
			? (parsed.user.uploads = data.req.uploads)
			: (parsed.user = { uploads: data.req.uploads })
		: "";
	// self.debug('parsed')
	// self.debug(parsed.url.trim().split('/'))
	let handler = parsed.handler;
	aliasList.indexOf(handler) >= 0
		? (handler = aliatikHandlers[aliasList.indexOf(handler)])
		: "";
	self.handler = handler;
	if (handler && handler.trim() !== "") {
		let uza = parsed.user || null;
		self.requestData = {
			parsed: parsed,
			handler: handler,
			request: { req: data.req, res: data.res, next: data.next },
		};
		uza ? (self.requestData.user = uza) : "";

		if (!self.views || self.views.length === 0)
			return self.emit({ type: "request-global-request", data: handler });
		if (self.isView(data.req.originalUrl, uza))
			return self.emit({
				type: `do-view-task`,
				data: {
					payload: self.requestData,
					callback: (fail = null, success = null, method = null) => {
						self.taskerHandler({ fail, res: data.res, success, method });
					},
				},
			});

		return self.emit({ type: "request-global-request", data: handler });
	} else {
		if (!self.views || self.views.length === 0) return self.handlePathError();
		let uza = parsed.user || null;
		self.requestData = {
			parsed: parsed,
			handler: handler,
			request: { req: data.req, res: data.res, next: data.next },
		};
		uza ? (self.requestData.user = uza) : "";
		if (self.isView("/home"))
			return self.emit({
				type: `do-view-task`,
				data: {
					payload: self.requestData,
					callback: (fail = null, success = null, method = null) => {
						self.taskerHandler({ fail, res: data.res, success, method });
					},
				},
			});
		return self.handlePathError();
	}
};
export const parseRequest = function (req) {
	// self.debug('THE REQUEST BODY')
	// self.debug(req.body)
	let requiredData = { url: req.originalUrl };
	let url =
		requiredData.url.indexOf("/") === 0
			? requiredData.url.slice(1, requiredData.url.length)
			: requiredData.url;
	let isPath = url.indexOf("/") > 0 ? true : false;
	if (req.query && Object.keys(req.query).length > 0) {
		requiredData.user = req.query;
		let urlFragments = url.split("?");
		if (isPath) {
			let pathFrags = urlFragments[0].split("/");

			requiredData.handler = pathFrags[0];
		} else {
			requiredData.handler = urlFragments[0];
		}
	} else if (req.params && Object.keys(req.params).length > 0) {
		requiredData.user = req.params;
		if (isPath) {
			let pathFrags = url.split("/");

			requiredData.handler = pathFrags[0];
		} else {
			requiredData.handler = url;
		}
	} else if (req.body && Object.keys(req.body).length > 0) {
		requiredData.user = req.body;
		if (isPath) {
			let pathFrags = url.split("/");
			requiredData.handler = pathFrags[0];
		} else {
			requiredData.handler = url;
		}
	} else {
		requiredData.user = {};
		if (isPath) {
			let pathFrags = url.split("/");

			requiredData.handler = pathFrags[0];
			delete requiredData.user;
		} else {
			requiredData.handler = url;
			delete requiredData.user;
		}
	}
	return requiredData;
};
// eslint-disable-next-line no-unused-vars
export const handleRequestGlobalError = function () {
	const self = this;
	self.writeResponse({
		error: true,
		type: "serverError",
		code: 502,
		message: "The server error",
	});
};
// eslint-disable-next-line no-unused-vars
export const handlePathError = function () {
	const self = this;
	self.writeResponse({
		error: true,
		type: "ServerError",
		code: 502,
		message: "The requested task[handler] could not be completed",
	});
};
export const handleRouterAliasList = function (data) {
	const self = this;

	// self.writeResponse({error: true,type: 'ServerError',code: 502,message: 'The requested task[handler] could not be completed'})
	self.routesAliasList = data.aliasList;
	self.aliatikHandlers = data.handlers;
};
export const handleRequestGlobalResponse = function (data) {
	const self = this;
	const res = self.requestData.request.res;
	if (!data) {
		self.handleByHandlerError();
	} else {
		self.emit({
			type: `handle-${self.requestData.handler}-task`,
			data: {
				payload: self.requestData,
				callback: (fail = null, success = null, method = null) => {
					self.taskerHandler({ fail, res, success, method });
				},
			},
		});
	}
};
export const isView = function (path, user = null) {
	const self = this;
	let views = self.views;

	if (!user && path.trim() === "/home") {
		self.requestData.parsed.derivedUrl = "/home";
		if (views.indexOf(path) >= 0) return true;
		return false;
	} else {
		if (views.indexOf(path) >= 0) return true;
		if (path.indexOf("?") > 0) {
			for (let qv = 0; qv <= views.length; qv++) {
				if (path.indexOf(views[qv]) >= 0 && views[qv] !== "/") {
					self.requestData.parsed.derivedUrl = views[qv];
					return true;
				} else if (qv === views.length - 1) {
					return false;
				}
			}
		}
		let parasList = user ? Object.keys(user) : [];
		let parasString = "";

		parasList.forEach((para, i) => {
			i === 0 ? (parasString = `:${para}`) : (parasString += `/:${para}`);
		});

		for (let v = 0; v < views.length; v++) {
			if (views[v].indexOf(parasString) > 0) {
				let viewPath = views[v].substr(0, views[v].indexOf(parasString));
				let comparePath = viewPath + parasString;

				if (path.indexOf(viewPath) >= 0) {
					self.requestData.parsed.derivedUrl = comparePath;
					return true;
				} else {
					return false;
				}
			}
		}
	}
	return false;
};
export const handleBadRequestError = function () {
	const self = this;
	self.writeResponse({
		error: true,
		type: "BadRequest",
		code: 400,
		message: "Bad Request",
	});
};
export const handleHandlerNotFound = function () {
	const self = this;
	self.writeResponse({
		error: true,
		type: "NotFound",
		code: 404,
		message: "The requested task could not be completed",
	});
};
export const handleByHandlerError = function () {
	const self = this;
	self.writeResponse({
		error: true,
		type: "notFound",
		code: 404,
		message: "The requested task could not be completed",
	});
};
export const handleHandlerError = function () {
	const self = this;
	self.handleHandlerError();
};
export const writeResponse = function (response) {
	const self = this;
	const pao = self.pao;
	// self.debug('THE DATA IN WRITERESPONSE')
	// self.debug(data)
	// 	const { method, payload, res, code = 200 } = response;
	// const { view = null, toCLientPayload = null } = payload;
	let { data = "", method = "regular" } = response;
	if (method === "regular") {
		if (!data?.redirect) {
			pao.pa_isString(data)
				? (data = pao.pa_jsToJson({ text: data }))
				: (data = pao.pa_jsToJson(data));
		}
	}
	self.emit({
		type: "write-server-request-response",
		data: {
			payload: data,
			res: response.res,
			method: method,
			code: response.code,
		},
	});
};
export const taskerHandler = function (handlerFeedback) {
	const self = this;
	const { fail = null, success = null, method = null } = handlerFeedback;
	self.debug("THE HANDLER FEEDBACK", handlerFeedback);

	if (fail) {
		let code = fail?.code || 400;
		self.failureHandle({
			data: fail,
			res: handlerFeedback.res,
			code,
		});
	} else if (success) {
		let code = success?.code || 200;
		method
			? self.successfullHandle({
					data: success,
					method,
					res: handlerFeedback.res,
					code,
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  })
			: self.successfullHandle({
					data: success,
					res: handlerFeedback.res,
					code,
			  });
	}
};
export const successfullHandle = function (successResponseData) {
	const self = this;
	self.writeResponse(successResponseData);
};
export const failureHandle = function (errorResponseData) {
	const self = this;

	self.writeResponse(errorResponseData);
};
