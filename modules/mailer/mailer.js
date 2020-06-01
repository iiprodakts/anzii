
import * as methods from "./methods"

const nodemailer = require('nodemailer')



class Mailer{
  
  
  constructor(pao){

    this.pao = pao 
    this.mailer = nodemailer
    this.supTrans = ['smtp'] 
    this.transport = null
    

    // // methods

   

     this.init = methods.init
     this.handleConfigMailer = methods.handleConfigMailer
     this.handleSendMail = methods.handleSendMail
     this.sendMail = methods.sendMail
     
     
    

  }


  

}

export default Mailer