import * as methods from "./methods.js";
class IO {
    constructor(pao) {
        this.pao = pao;
        this.init = methods.init;
        this.startIOShell = methods.startIOShell;
    }
}
export default IO;
