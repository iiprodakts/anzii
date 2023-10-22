import Base from './base.js';
import Esm from './esm/esm.js';
import * as Activator from './base/activate.js';
class Anzii {
    constructor() {
        // console.log(Activator.Activate)
        const self = self;
        this.ANZII = Base;
        this.ESM = Esm;
        this.Activate = Activator.Activate;
        // this.DomLoaded = Base.SUKU.domLoaded.bind(this.SANA.SUKU)
        // this.Html = Base.SUKUS.html.bind(this.SANA.SUKUS)
    }
}
export default new Anzii();
