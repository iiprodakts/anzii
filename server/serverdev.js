
import Andziiy from '../lib/andziiy'
import Modules from '../init/modules'
// import Server from '../shared/modules/server/index'

let server  = function(){


    // console.log('THE SERVER IS RUNNNING')

    // console.log(Components)
    // console.log('The typeof Components')
    // console.log(Components instanceof Array)
    // console.log('The server Module')
    // console.log(Server)
    // Components.unshift({Server})
    // let html = true
   
    Andziiy.Activate(Modules)
  
}


export default server
