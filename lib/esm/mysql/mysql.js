
import * as methods from "./methods"




class Mysql{
  
  
  constructor(pao){

    this.pao = pao 
    

    // // methods

   

     this.init = methods.init
     this.handleMysqlDataRequest = methods.handleMysqlDataRequest 
     this.insertOne = methods.insertOne 
     this.insertMany = methods.insertMany 
     this.findOne = methods.findOne 
     this.updateOne = methods.updateOne 
     this.TRANSACTION = methods.TRANSACTION 
     this.PROCEDURE = methods.PROCEDURE 
     this.JOIN = methods.JOIN
     this.SEARCH = methods.SEARCH
     this.procedure = methods.procedure 
     this.transaction = methods.transaction
     this.join = methods.join
     this.joinExek = methods.joinExek
     this.joinStatement = methods.joinStatement 
     this.joinConditionsFormat = methods.joinConditionsFormat
     this.search = methods.search 
     this.searchExek = methods.searchExek 
     this.searchStatement = methods.searchStatement
     this.searchConditionsFormat = methods.searchConditionsFormat 
     this.searchOptions = methods.searchOptions
     this.combineFields = methods.combineFields
     this.insert = methods.insert 
     this.rollback = methods.rollback
     this.deleteOne = methods.deleteOne
     
    

  }


  

}

export default Mysql