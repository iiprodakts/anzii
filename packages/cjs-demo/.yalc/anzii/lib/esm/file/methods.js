export const init = function () {
	this.adLog("File has been initialised");
	this.listens({
		"serve-file-data-request": this.handleServeFileDataRequest.bind(this),
	});
};

// eslint-disable-next-line no-unused-vars
export const handleServeFileDataRequest = function (data) {
	// eslint-disable-next-line no-unused-vars
	const self = this;
};
