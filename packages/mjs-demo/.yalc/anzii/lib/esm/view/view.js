import * as methods from "./methods.js";
class View {
    constructor(pao) {
        this.pao = pao;
        this.views = null;
        this.init = methods.init;
        this.handleConfigView = methods.handleConfigView;
        this.handleViewTask = methods.handleViewTask;
        this.checkViewType = methods.checkViewType;
        this.isTemplateView = methods.isTemplateView;
        this.isModularView = methods.isModularView;
        this.viewHandler = methods.viewHandler;
    }
}
export default View;
