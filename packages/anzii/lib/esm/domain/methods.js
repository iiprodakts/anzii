export const init = function () {
	this.adLog("Domain has been initialised");
	this.listens({
		"config-domain": this.handleConfigDomain.bind(this),
		"take-premier-system-base": this.handleTakeSystemBase.bind(this),
		"set-domain-defaults": this.handleSetDomainDefaults.bind(this),
	});
};
export const handleSetDomainDefaults = function (data) {
	const self = this;
	const domains = self.domainCandidates;
	const passport = self.passport;
	const path = self.path;
	self.infoSync("SETTING DOMAIN DEFAULTS");
	console.log("Domain resources data", data);
	console.log("THE DOMAINS", domains);
	// self.pao.pa_wiLog(data)
	self.pao.pa_wiLog(self.system);
	// self.pao.pa_wiLog(data)
	// console.log("OUTPUT PATH", data.custom.webpackConfig.output);
	// console.log("PATH", data.custom.webpackConfig.output.path);
	if (!domains) return;
	domains.forEach((dumain) => {
		self.pao.pa_wiLog("THE DOMAIN SETTInGS");
		self.pao.pa_wiLog(dumain);
		if (dumain.name === "views")
			return data.app.set(
				dumain.name,
				path.join(self.system?.DOCUMENT_ROOT, dumain.set),
			);
		if (dumain.name === "static") {
			self.pao.pa_wiLog("DOMAIN IS STATIC");
			self.pao.pa_wiLog(path.join(self.system?.DOCUMENT_ROOT, dumain.set));
			console.log("DOMAIN IS STATIC", dumain);
			console.log("DOCUMENT ROOT", self.system?.DOCUMENT_ROOT);
			console.log(
				"JOINED PATH",
				path.join(self.system?.DOCUMENT_ROOT, dumain.set),
			);
			return data.app.use(
				data.xpress.static(path.join(self.system?.DOCUMENT_ROOT, dumain.set)),
			);
		}
		if (dumain.name === "passport") return data.app.use(passport.initialize());
		// if (dumain.name === "webpackDevMiddleware")
		//     return data.app.use(dumain.use(data.custom.compiler, {
		//         publicPath: data.custom.webpackConfig.output.path,
		//         writeToDisk: true
		//     }));
		// if (dumain.name === "webpackHotMiddleware")
		//     return data.app.use(dumain.use(data.custom.compiler));
		data.app.set(dumain.name, dumain.set);
	});
	//data.app.set(, dumain.set);
	// data?.custom?.compiler ? self.hookIntoWebpackCompilation(data.custom.compiler) : null;
};
export const handleConfigDomain = function (data) {
	const self = this;
	self.pao.pa_wiLog("Configuring Domain");
	self.pao.pa_wiLog(data);
	self.domainCandidates = data;
};
export const handleTakeSystemBase = function (data) {
	const self = this;
	self.pao.pa_wiLog("THE SYSTEMBASE HANDLE");
	self.pao.pa_wiLog(data);
	self.system = data.systemBase;
};
export const hookIntoWebpackCompilation = async function (compiler) {
	compiler.hooks.invalid.tap("invalid", () => {
		console.log("wEBPACK is compiling....");
	});
	compiler.hooks.done.tap("done", (stats) => {
		console.log("WEBPACK IS DONE COMPILING");
		console.log(stats.toJson({ all: false, errors: true, warnings: true }));
	});
	return true;
};
