import * as methods from "./methods";
// 
// const dman = require('redis')
class Dman {
    constructor(pao) {
        this.pao = pao;
        this.DBS = [];
        this.supportedClients = {
            // mongo: {
            //   protocol: 'mongopro',
            //   connectMethods: ''
            // 	// connect: (0
            // },
            mysql: {
                protocol: '',
                // connectMethod: 'createConnection'
                connectMethod: 'createPool'
            },
            // pg: {
            // },
            // redis: {
            // },
            // sqlite: {
            // }
        };
        // // methods
        this.init = methods.init;
        this.handleConfigureDBMan = methods.handleConfigureDBMan;
        this.connectToClient = methods.connectToClient;
        this.getClientDriver = methods.getClientDriver;
        this.connect = methods.connect;
    }
}
export default Dman;
