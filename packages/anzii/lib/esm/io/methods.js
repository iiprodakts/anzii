export const init = function () {
	this.startIOShell();
};
export const startIOShell = function () {
	const self = this;

	self.emit({ type: "start-io-operations", data: "" });
};
