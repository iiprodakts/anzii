/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import fs from "node:fs";
import https from "node:https";
import os from "node:os";
import path from "node:path";
// import openssl from "openssl-nodejs";
export const init = function () {
	this.adLog("System has been initialised");
	this.listens({
		"config-system": this.handleConfigureSystem.bind(this),
		"register-shutdown-candidate":
			this.handleRegisterShutDownCandidate.bind(this),
		"distribute-system-resources":
			this.handleDistributeSystemResources.bind(this),
		"attach-workers-to-server": this.handleServerAttachWorkers.bind(this),
		"open-browser-signal": this.handleOpenBrowserSignal.bind(this),
	});
	// self.debug(this.env)
};
export const handleConfigureSystem = function (data) {
	const self = this;

	if (data.callback) self.ON_SERVER_START_LISTENERS.push(data.callback);

	self.handleShutDowns();
	self.clusterCustomConfig = data.payload;

	self.emit({
		type: "take-premier-system-base",
		data: { systemBase: self.systemBase },
	});
	// self.masterWorker(data)
};
export const handleDistributeSystemResources = async function (data) {
	const self = this;
	const pao = self.pao;
	const getFiles = pao.pa_getFiles;
	const getDirs = pao.pa_getDirectories;
	const getFile = pao.pa_getFile;
	const makeDirs = pao.pa_makeDirs;
	const getExtension = pao.pa_getExtension;
	const path = self.path;
	let dirPath = `${self.systemBase.DOCUMENT_ROOT}`;
	let filePath = `${self.systemBase.DOCUMENT_ROOT}${path.sep}sev.js`;
	let createPath = `${self.systemBase.DOCUMENT_ROOT}${path.sep}`;
	// const path = self.path
	// const cwd = process.cwd()
	// self.debug(cwd)
	// self.debug(path.sep)
	// self.debug(path.sep+'includes')
	// self.debug(cwd.substr(0, cwd.indexOf(path.sep+'includes')) >= 0)
	// self.debug('HandleDistributeSystemResources ')
	// // let files = await getFiles(dirPath,{recursive: false},'sev.js')
	// let dirs = await getDirs(dirPath)
	// let file = await getFile(filePath)
	let status = await makeDirs(createPath);
	let ext = getExtension("sev.js");
	// self.debug('GET FILES CALLBACK GETS A CALL')
	// self.debug(files)
	// self.debug(dirs)
	// self.debug(file)

	self.emit({
		type: "take-system-base",
		data: { systemBase: self.systemBase },
	});
	// self.masterWorker(data)
};
export const handleOpenBrowserSignal = function (data) {
	const self = this;

	const {
		availablePort,
		protocol,
		domainToUse,
		pageToOpen,
		runningServerMessage,
	} = self.openBrowserTools;
	self.info(runningServerMessage);
	self.openBrowserApp(availablePort, protocol, domainToUse, pageToOpen);
	// self.masterWorker(data)
};
export const shutDown = async function (type, code) {
	const self = this;

	self.systemIsShuttingDown = true;

	const shutdownPromises = [];

	for (let i = 0; i < self.shutDownServices.length; i++) {
		const sd = self.shutDownServices[i];
		if (typeof sd !== "function") {
			self.warn(
				`Service: ${self.shutDownOrder[i]} must be a function, shutdown attempt failed`,
			);
			continue;
		}

		self.info(`Service: ${self.shutDownOrder[i]} is shutting down`);
		try {
			const result = sd();
			shutdownPromises.push(Promise.resolve(result));
		} catch (err) {
			self.warn("Error during shutdown:", err);
		}
		self.info(`Service: ${self.shutDownOrder[i]} shutdown triggered`);
	}

	Promise.all(shutdownPromises)
		.then((settled) => {
			self.infoSync(
				`System is shutting down through: ${type}, with code: ${code?.stack}`,
			);
			const handles = process._getActiveHandles();

			handles.forEach((h) => {
				try {
					if (h.close) h.close(); // e.g., servers, watchers
					else if (h.destroy) h.destroy(); // e.g., sockets
				} catch (e) {}
			});

			const requests = process._getActiveRequests();
			requests.forEach((r) => {
				try {
					if (r.abort) r.abort();
				} catch (e) {}
			});

			process.exit(0);

			// setTimeout(() => {
			// 	// process.removeAllListeners('SIGINT'); // remove other Ctrl+C handlers
			//     self.logSync("ANZII JS SYSTEM IS SHUTTING DOWN")
			// 	process.exit(0), 10
			// });
		})
		.catch((err) => {
			self.debug("SHUTDOWN PROMISES ERROR", err);
			setTimeout(() => process.exit(0), 10); // allow event loop to flush
		});
};

export const masterWorker = function (app, system) {
	const self = this;

	const serverTimeout = self.serverTimeout;
	const portToUse = self?.context?.env?.PORT ? self?.context?.env?.PORT : 3000;
	const shouldOpenBrowser = self?.context?.env?.ANZII_OPEN_BROWSER
		? typeof self.context.env.ANZII_OPEN_BROWSER === "string" &&
		  self.context.env.ANZII_OPEN_BROWSER === "true"
			? true
			: false
		: false;

	const shouldWaitForSignal = system?.shouldWaitForSignal
		? system.shouldWaitForSignal
		: false;
	const shouldStopServer = self?.context?.env?.ANZII_STOP_SERVER ? true : false;
	const useHttps =
		system?.useHttps || self?.context?.evn?.ANZII_APP_USE_HTTP ? true : false;
	const useCustomDomain =
		system?.useCustomDomain || self?.context?.evn?.ANZII_USE_CUSTOM_DOMAIN
			? true
			: false;
	const useSockets =
		system?.useSockets || self?.context?.evn?.ANZII_USE_SOCKETS
			? system.useSockets
			: false;
	const appProtocol = useHttps ? "https" : "http";
	const useAvailablePort = system?.useAvailablePort
		? system.useAvailablePort
		: true;
	const appDomain = useCustomDomain ? system?.domainName : "localhost";
	const pageToOpen = system?.pageToOpen
		? system.pageToOpen === "/"
			? ""
			: system.pageToOpen
		: "";
	let serverSettings = {
		useHttps,
		useCustomDomain,
		useAvailablePort,
		shouldOpenBrowser,
		protocol: appProtocol,
		domainToUse: appDomain,
		serverTimeout,
		appOpts: system?.appOpts,
		shouldStopServer,
		pageToOpen,
		shouldWaitForSignal,
		useSockets,
	};

	self
		.getServerPort(portToUse, useAvailablePort)
		.then((availablePort) => {
			self[
				"runningServerMessage"
			] = `The Application is running and listening on port: ${availablePort}`;
			serverSettings["availablePort"] = availablePort;
			if (self.cluster.isMaster) {
				if (self.clusterCustomConfig && self.clusterCustomConfig.spawn) {
					let slaves = self.clusterCustomConfig.workers
						? self.clusterCustomConfig.workers
						: "auto";
					if (slaves === "auto") {
						slaves = self.os.cpus().length;
						for (let s = 0; slaves < slaves; s++) {
							self.cluster.fork();
						}
					} else {
						if (typeof slaves === "number") {
							for (let s = 0; s < slaves; s++) {
								self.debug(`Forking slave number: ${s}`);
								self.cluster.fork();
							}
						}
					}
					self.cluster.on("fork", (worker) => {
						self.debug("cluster forking new worker", worker.id);
					});
					let mainWorkerId = null;
					self.cluster.on("listening", (worker, address) => {
						if (null === mainWorkerId) {
							mainWorkerId = worker.id;
							worker.send({ singleProcessTasks: "startSingleProcessTasks" });
						}
					});
					self.cluster.on("exit", (worker, code, signal) => {
						self.debug("Worker %d died :(", worker.id);
						if (!shouldStopServer) {
							if (worker.id === mainWorkerId) {
								self.debug("Main Worker is dead...");
								mainWorkerId = null;
							}

							self.cluster.fork();
							// self.cluster.fork()
						} else {
							self.debug("Server has been shutdown");
						}
					});
				} else {
					self.debug("System is running on a single thread/core");
					self
						.runServer(app, serverSettings)
						.then((started) => {
							if (self.ON_SERVER_START_LISTENERS) {
								self.ON_SERVER_START_LISTENERS.forEach(
									(serverStartListener) => {
										serverStartListener({ data: "Server has been started" });
									},
								);
							}
							self.info(self?.runningServerMessage);
						})
						.catch((err) => {
							self.error("The was an error running the server", err);
						});
				}
			} else {
				// self.debug('IT IS NOT THE MASTER PROCESS')
				self.debug(`Worker ${process.pid} started`);
				self
					.runServer(app, serverSettings)
					.then((started) => {
						if (self.ON_SERVER_START_LISTENERS) {
							self.ON_SERVER_START_LISTENERS.forEach((serverStartListener) => {
								serverStartListener({ data: "Server has been started" });
							});
						}
						self.info(self?.runningServerMessage);
					})
					.catch((err) => {
						self.error("The was an error running the server", err);
					});

				process.on("message", function (message) {
					self.debug(
						"Worker " + process.pid + " received message from master.",
						message,
					);
					if (message.singleProcessTasks == "startSingleProcessTasks") {
						self.emit({ type: "start-single-process-tasks", data: "" });
					}
				});
			}
		})
		.catch((err) => {
			self.error("Server could not be started due to a port isssue", err);
		});
};
// export const folkSlaveWorkers = function(mainWorker){
// }
export const handleShutDowns = function () {
	const self = this;

	self.context.on("SIGINT", function (code) {
		if (!self.systemIsShuttingDown) {
			self.shutDown("kill", code);
		} else {
			self.infoSync("System is already ShuttingDown:: INT EXIT");
		}
	});
	self.context.on("SIGTERM", function (code) {
		if (!self.systemIsShuttingDown) {
			self.shutDown("exit", code);
		} else {
			self.infoSync("System is already ShuttingDown:: SIGTEM EXIT");
		}
	});
	self.context.on("uncaughtException", function (code) {
		if (!self.systemIsShuttingDown) {
			self.shutDown("uncaughtException", code);
		} else {
			self.infoSync("System is already ShuttingDown:: UNHANDLEDEXCEPTION EXIT");
		}
	});
	self.context.on("unhandledRejection", function (code) {
		self.infoSync(code.stack);
		if (!self.systemIsShuttingDown) {
			self.shutDown("uncaughtException", code);
		} else {
			self.infoSync("System is already ShuttingDown:: Unhandled Rejection");
		}
	});
};
export const handleServerAttachWorkers = function (data) {
	const self = this;

	self.masterWorker(data.app, data.system);
};
export const handleRegisterShutDownCandidate = function (data) {
	const self = this;
	const pao = self.pao;

	const { payload } = data;
	if (
		payload.hasOwnProperty("candidate") &&
		pao.pa_isFunction(payload.candidate) &&
		payload.hasOwnProperty("name") &&
		pao.pa_isString(payload.name)
	) {
		if (!(self.shutDownServices.indexOf(payload.name) > -1)) {
			self.shutDownServices.push(payload.candidate);
			self.shutDownOrder.push(payload.name);
			data.callback({
				message: "Service successfully registered for shutdown",
			});
		}
	} else {
		self.warn("Candidate could not be registered for shutdown");
	}
};
export const openBrowserApp = async function (
	portToOpenTo,
	protocol = "http",
	domain = "localhost",
	pageToOpen,
) {
	const self = this;
	const open = self.open;
	await open(`${protocol}://${domain}:${portToOpenTo}/${pageToOpen}`);
};

export const getServerPort = function (port = 3000, useAvailablePort = true) {
	const self = this;

	return new Promise((resolve, reject) => {
		if (!useAvailablePort) return resolve(port);

		self
			.detectPort(port)
			.then((gotPort) => {
				if (gotPort.toString() === port) {
					resolve(gotPort);
				} else {
					self.portFinder
						.getPortPromise()
						.then((openPort) => {
							self.infoSync(
								`Specified port: ${port} is in use, anzii will resort to port:${openPort}`,
							);
							resolve(openPort);
						})
						.catch((err) => {
							reject(err);
						});
				}
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const getSslCerts = function (pathOrSets) {
	const self = this;

	return new Promise((resolve, reject) => {});
};

export const runServer = function (app, serverSettings) {
	const self = this;

	return new Promise((resolve, reject) => {
		const { shouldStopServer, serverTimeout, useHttps } = serverSettings;
		if (useHttps) {
			self.runHttps(app, serverSettings).then((serv) => {
				self.setServerOptions(serv, shouldStopServer, serverTimeout);
				resolve(true);
			});
		} else {
			self.runHttp(app, serverSettings).then((serv) => {
				self.setServerOptions(serv, shouldStopServer, serverTimeout);
				resolve(true);
			});
		}
	});
};

export const runHttps = function (app, settings) {
	const self = this;
	const { appOpts, availablePort, useSockets = false } = settings;
	// const { sslOpts } = appOpts;

	return new Promise((resolve, reject) => {
		let serv = https.createServer(appOpts, app);
		if (useSockets && useSockets?.hookSocketToServer)
			useSockets.hookSocketToServer(serv);
		serv.listen(availablePort, () => {
			self.appListener(settings);
		});
		resolve(serv);
	});
};
export const runHttp = function (app, settings) {
	const self = this;
	const { availablePort, useSocket = false } = settings;

	return new Promise((resolve, reject) => {
		const serv = app.listen(availablePort, () => {
			self.appListener(settings);
		});
		resolve(serv);
	});
};

export const appListener = function (settings) {
	const self = this;
	const {
		availablePort,
		shouldOpenBrowser,
		protocol,
		domainToUse,
		pageToOpen,
		shouldWaitForSignal,
	} = settings;
	process.env[
		"ANZII_APP_URL"
	] = `${protocol}://${domainToUse}:${availablePort}`;

	// self.infoSync(
	// 	`The formed url is ${protocol}://${domainToUse}:${availablePort}`,
	// );
	// self.infoSync(`The app full url: ${process.env.ANZII_APP_URL}`);
	let runningServerMessage = `The Application is running on PID:: ${process.pid} and listening on port: ${availablePort} with domain: ${domainToUse} and Protocol: ${protocol}`;

	if (shouldOpenBrowser) {
		if (!shouldWaitForSignal) {
			self.infoSync(runningServerMessage);
			return self.openBrowserApp(
				availablePort,
				protocol,
				domainToUse,
				pageToOpen,
			);
		}
		self["runningServerMessage"] = runningServerMessage;
		settings["runningServerMessage"] = runningServerMessage;
		self.openBrowserTools = settings;
	} else {
		runningServerMessage = `The Application is running and listening on port: ${availablePort}`;
		self["runningServerMessage"] = runningServerMessage;
	}
};

export const setServerOptions = function (
	serv,
	shouldStopServer = false,
	serverTimeout,
) {
	const self = this;
	serv.timeout = serverTimeout;
	setTimeout(function () {
		if (shouldStopServer) {
			process.exit(0);
			//serv.close();
		}
	}, 3000);
};

export const createCustomDomain = function () {
	const self = this;
	const pao = self.pao;
	const loadFile = pao.pa_loadFile;

	loadFile(path.resolve(process.cwd(), "certsConfig.json")).then(
		(sslConfig) => {
			let config = JSON.parse(sslConfig);
			self.emit({
				type: `create-ssl-certificate`,
				data: {
					payload: { config },
					callback: (fromOpenSSl) => {
						// console.log("THE SSL ", fromOpenSSl);
					},
				},
			});
		},
	);
};

export const readHostsFile = function (next) {
	const self = this;
	const operatingSystem = self.getSystemType();
	let hostsFilePath = null;

	switch (operatingSystem) {
		case "darwin":
			hostsFilePath = "/etc/hosts";
			break;
		default:
			hostsFilePath = "c:windowssystem32driversetchosts";
	}

	let data = fs.readFileSync(hostsFilePath, { encoding: "utf-8" });

	let newHostEntry = `127.0.0.1 example.com`;
	data += newHostEntry + "\n";

	fs.writeFileSync(hostsFilePath, data);
	next(null, data);

	// return new Promise((resolve, reject) => {});
};

export const getSystemType = function () {
	const self = this;
	return os.platform();
};
