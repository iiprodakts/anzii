 
import * as methods from "./methods"



class Bookmark{
  
  
  constructor(pao){

    this.pao = pao
  
    



    
     this.init = methods.init
     this.handleBookmarkTask = methods.handleBookmarkTask 
     this.saveBookmark = methods.saveBookmark
     this.getBookmark = methods.getBookmark
     this.deleteBookmark = methods.DeleteBookmark
     this.searchBatch = methods.searchBatch
     this.searchBatchHandler = methods.searchBatchHandler 
     this.dealWithDataStorageResponse = methods.dealWithDataStorageRespomse
    
  }


  

}

export default Bookmark