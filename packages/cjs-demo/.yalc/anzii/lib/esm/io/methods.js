export const init = function () {
	this.adLog("IO has been initialised");
	this.startIOShell();
};
export const startIOShell = function () {
	const self = this;
	self.adLog("Starting i/o Shell operations");
	self.emit({ type: "start-io-operations", data: "" });
};
