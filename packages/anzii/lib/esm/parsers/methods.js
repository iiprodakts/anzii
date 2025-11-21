export const init = function () {
	this.adLog("Parsers has been initialised");
	this.listens({
		"share-middleware": this.handleShareMiddleware.bind(this),
	});
};
export const handleShareMiddleware = function () {
	const self = this;
	self.debug("HANLDE SHARE MIDDLEWARE EVENT HAS OCCURED");
	self.emit({
		type: "add-ext-middleware",
		data: {
			payload: [
				// {
				// 	type: "all",
				// 	level: "top",
				// 	middleware: {
				// 		call: "json",
				// 		// options: [{ body: self.dependiks.bodyParser, call: "json" }],
				// 	},
				// },
				{
					type: "all",
					level: "top",
					middleware: {
						funk: (req, res, next) => {
							res.header("Access-Control-Allow-Origin", "*");
							res.header(
								"Access-Control-Allow-Headers",
								"Origin, X-Requested-With, Content-Type, Accept",
							);
							next();
						},
					},
				},
			],
		},
	});
};
