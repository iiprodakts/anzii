import * as PILLAR from "./pillar/pillar.js";
import CORE from "./base/core.js";
import PAO from "./base/pao.js";
class Base {
    constructor() {
        this.CORE = CORE,
            this.PAO = PAO,
            this.PILLAR = PILLAR;
    }
}
export default new Base();
