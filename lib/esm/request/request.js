import * as methods from "./methods";
class Request {
    constructor(pao) {
        this.pao = pao;
        this.request = {};
        this.routesAliasList = [];
        this.aliatikHandlers = [];
        this.requestData = null;
        this.views = [];
        this.init = methods.init;
        this.handleConfigRequest = methods.handleConfigRequest;
        this.handleRequestHandOver = methods.handleRequestHandOver;
        this.parseRequest = methods.parseRequest;
        this.handleRequestGlobalError = methods.handleRequestGlobalError;
        this.handleRequestGlobalResponse = methods.handleRequestGlobalResponse;
        this.isView = methods.isView;
        this.handleBadRequestError = methods.handleBadRequestError;
        this.handleHandlerNotFound = methods.handleHandlerNotFound;
        this.handleByHandlerError = methods.handleByHandlerError;
        this.handleHandlerError = methods.handleHandlerError;
        this.handlePathError = methods.handlePathError;
        this.handleRouterAliasList = methods.handleRouterAliasList;
        //  this.handleViewRender = methods.handleViewRender
        //  this.renderView = methods.renderView
        this.writeResponse = methods.writeResponse;
        this.taskerHandler = methods.taskerHandler;
        this.successfullHandle = methods.successfullHandle;
        this.failureHandle = methods.failureHandle;
    }
}
export default Request;
