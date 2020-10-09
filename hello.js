
class Hello{
  
  
    constructor(pao){

        this.pao = pao
      
    }

    init(){

        this.listens({
            'handle-hello-task': this.handleHelloTask.bind(this)
        })
    }

    handleHelloTask(data){

        const self = this  

        self.logSync('THE DATA PASSED TO HELLO')
        self.logSync(data)
        self.callback = data.callback 
        let {payload} = data 
        let {user} = payload
        let {name,surname} = user // assume name to be "Ntsako" and surname to be "Mashele"
        let message = `Hello ${name} ${surname}, I'm happy to meet you.'` 
        self.logSync(payload.parsed.user)
        
        return self.callback(null,{message: message})


    }
  
  
    
  
  }
  
  module.exports = Hello