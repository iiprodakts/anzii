
import * as methods from "./methods"

const jimp = require('jimp')
// const wrStream = require('streamifier')
// const rStream = require('concat-stream')



class Imageman{
  
  
  constructor(pao){

    this.pao = pao
    this.grafix = jimp
    
    
     this.init = methods.init
     this.handleManipulateImage = methods.handleManipulateImage 
     this.handleResizeImage = methods.handleResizeImage
     this.handleCropImage = methods.handleCropImage
     this.resizeImage = methods.resizeImage
     this.cropImage = methods.cropImage
     this.greyScale = methods.greyScale
     
    
  }


  

}

export default Imageman