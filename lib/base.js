import PILLAR from "./pillar/pillar";
import CORE from "./base/core";
import PAO from "./base/pao";
class Base {
    constructor() {
        this.CORE = CORE,
            this.PAO = PAO,
            this.PILLAR = PILLAR;
    }
}
export default new Base();
