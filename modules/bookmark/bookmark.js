 
import * as methods from "./methods"



class Bookmark{
  
  
  constructor(pao){

    this.pao = pao
  
    



    
     this.init = methods.init
     this.handleBookmarkTask = methods.handleBookmarkTask 
     this.bookmark = methods.bookmark
     this.getSavedBookmarks = methods.getSavedBookmarks
     this.deleteBookmark = methods.DeleteBookmark
     this.multiDataRequestHandler = methods.multiDataRequestHandler
    
  }


  

}

export default Bookmark