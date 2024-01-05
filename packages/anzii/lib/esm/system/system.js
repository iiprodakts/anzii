import cluster from "cluster";
import open from "open";
import os from "os";
import path from "path";
import * as methods from "./methods.js";
class System {
	constructor(pao) {
		this.pao = pao;
		this.context = process;
		this.env = this.context.env;
		this.cluster = cluster;
		this.os = os;
		this.path = path;
		this.shutDownServices = [];
		this.numOfDBSD = 3;
		this.allowedDBSTR = 10000;
		this.systemIsShuttingDown = false;
		this.shutDownOrder = [];
		this.systemBase = { DOCUMENT_ROOT: process.cwd() };
		this.open = open;
		this.init = methods.init;
		this.handleConfigureSystem = methods.handleConfigureSystem;
		this.handleRegisterShutDownCandidate =
			methods.handleRegisterShutDownCandidate;
		this.handleServerAttachWorkers = methods.handleServerAttachWorkers;
		this.handleDistributeSystemResources =
			methods.handleDistributeSystemResources;
		this.masterWorker = methods.masterWorker;
		// this.folkSlaveWorkers = methods.folkSlaveWorkers
		this.handleShutDowns = methods.handleShutDowns;
		this.shutDown = methods.shutDown;
		this.openBrowserApp = methods.openBrowserApp;
	}
}
export default System;
