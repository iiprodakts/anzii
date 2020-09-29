
const Anzii = require('./anzii')

module.exports = function(modules = null){

    //  console.log('THE VALUE OF ACTIVATE')
    //  console.log(Anzii)
    // console.log(Components)
    // console.log('The typeof Components')
    // console.log(Components instanceof Array)
    // console.log('The server Module')
    // console.log(Server)
    // Components.unshift({Server})
    // let html = true
   
    modules ?  Anzii.Activate([modules]) :  Anzii.Activate()
   
  
}


