export const init = function () {
    this.adLog('Middleware has been initialised');
    this.listens({
        'config-middleware': this.handleConfigMiddleware.bind(this),
        'add-ext-middleware': this.handleAddExternalMiddleware.bind(this),
        'attach-middleware': this.handleAttachMiddleware.bind(this),
    });
};
export const handleAttachMiddleware = function (data) {
    this.attachMiddleware(data);
};
export const handleConfigMiddleware = function (data) {
    const self = this;
    //  self.pao.pa_wiLog('THE HANDLE CONFIG MIDDLEWARE')
    //  self.pao.pa_wiLog(data)
    //  self.pao.pa_wiLog(data)
    let middlewares = data;
    //  self.pao.pa_wiLog(middlewares)
    for (let p in middlewares) {
        // self.pao.pa_wiLog('THE P')
        // self.pao.pa_wiLog(p)
        if (self.middlewares[p]) {
            if (middlewares[p].addMiddleware) {
                // self.pao.pa_wiLog('INSIDE EXISTENT MIDDLEWARE ITEM')
                // self.pao.pa_wiLog(middlewares[p])
                middlewares[p].addMiddleware.forEach((m, i) => {
                    self.middlewares[p].push(m);
                });
            }
            else if (p === 'removeMiddleware') {
            }
        }
        else {
            if (middlewares[p].addMiddleware) {
                self.middlewares[p] = { ...middlewares[p].addMiddleware };
            }
        }
    }
};
export const handleAddExternalMiddleware = function (data) {
    const self = this;
    const pao = self.pao;
    self.pao.pa_wiLog('ADD EXTERNAL MIDDLEWARE EVENT HAS OCCURED');
    if (data.type) {
        if (data.type === 'private') {
            if (data.level === 'top') {
                if (pao.pa_isArray(data.middleware.funk)) {
                    data.middleware.forEach((m, i) => {
                        self.middleware.unshift({ type: 'function', value: m.funk, ext: true });
                    });
                }
                else {
                    self.pao.pa_wiLog('THE MIDDLEWARES BEFORE');
                    self.pao.pa_wiLog(self.middlewares);
                    if (self.middlewares.pprivate) {
                        let len = Object.keys(self.middlewares.pprivate).length;
                        self.middlewares.pprivate[len] = { type: 'function', value: data.middleware.funk, ext: true };
                        self.pao.pa_wiLog('Middlewares');
                        self.pao.pa_wiLog(self.middlewares);
                    }
                }
            }
            else {
            }
        }
        else if (data.type === 'public') {
        }
        else if (data.type === 'all') {
            if (data.level === 'top') {
            }
        }
    }
};
export const attachMiddleware = function (data) {
    const self = this;
    if (data.app) {
        // self.pao.pa_wiLog('SELF.MIDDLEWARES')
        // self.pao.pa_wiLog(self.middlewares)
        if (self.all.length > 0) {
            self.pao.pa_wiLog('THE Allwares is greater than zero');
            if (data.xpress) {
                self.allWares(data.app, data.xpress);
            }
        }
        if (self.middlewares.pprivate && self.middlewares.ppublic) {
            self.emit({ type: 'router-middleware', data: { middleware: { public: self.middlewares.ppublic, private: self.middlewares.pprivate } } });
        }
        else if (self.middlewares.private) {
            self.emit({ type: 'router-middleware', data: { middleware: { private: self.middlewares.pprivate } } });
        }
        else if (self.middlewares.public) {
            self.emit({ type: 'router-middleware', data: { middleware: { public: self.middlewares.ppublic } } });
        }
        if (self.middlewares.all) {
            // self.pao.pa_wiLog('FOR EVERY REQUEST MIDDLEWARES')
            // self.pao.pa_wiLog(self.middlewares.all)
            self.middlewares.all.forEach((m, i) => {
                if (m.type === 'function') {
                    data.app.use(m.value);
                }
                else if (m.type === 'module') {
                    // self.emit({type: `add-${m.value}-middleware`,data: data.app})
                }
            });
        }
    }
};
export const allWares = function (app, xpress) {
    const self = this;
    const pao = self.pao;
    self.all.forEach((w, i) => {
        if (pao.pa_isObject(w)) {
            self.pao.pa_wiLog('Executing allwares');
            if (w.use) {
                self.pao.pa_wiLog('The public:', w.call);
                app.use(xpress[w.call]('public'));
            }
            else {
                self.pao.pa_wiLog('The none-public:', w.call);
                app.use(xpress[w.call]());
            }
        }
        else {
            self.pao.pa_wiLog('middleware is string');
            app.use(xpress[w]());
        }
    });
};
