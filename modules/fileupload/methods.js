


export const init = function(){
  
  
  this.log('Fileupload has been initialised') 
  this.listens({
		
	'add-upload-middleware': this.handleAddUploadMiddleware.bind(this)
  
  })

	
}


export const handleAddUploadMiddleware = function(data){

	
	console.log('HandleAddUploadMiddleware has occured')
	console.log(data)
	
	// this.html = data.html
	const self = this
	data.filterCallback(data.type,self.parseFile.bind(self))
	

} 

export const parseFile = async function(req,res,next){

     
    const self = this 
    const pao = self.pao 
    const forOf = pao.pa_forOf
    // const form = new self.IncomingForm()
    const form = self.multiFormParser({
      keepExtensions: true,maxFileSize: 1 * 1024 * 1024,uploadDir: __dirname}
      )
    await self.log(`I'm the file upload middleware module that's gonna read the file on the req`)
    let contentType = req.headers['content-type']
    await self.log(contentType)
    await self.log(req.headers)

    // self.log(form.parse)
    // console.log(next)

    if(contentType.indexOf('multipart/form-data') === -1){

      return 	next()
      // self.emit({
      //             type:'write-server-request-response',
      //             data: {
      //               data: {  error: true,message: 'Invalid content-type for file upload'},
      //               res: res
                  
      //             }
	  	//       	})
    }


    // form.once('error',(e)=>{

    //   console.log('THE PARSE ERROR HAS OCCURED')
    //   console.log(e)
      

    // })
    // form.on('file', (field, file) => {

    //     if(req.uploads && req.uploads instanceof Array){

    //         req.uploads.push({[field]: file})

    //     }else{

    //         req.uploads = new Array({[field]: file})
    //     }
    //     // Do something with the file
    //     // e.g. save it to the database
    //     // you can access it using file.path
    //   })

    // form.on('end', () => {

    //     console.log('THE UPLOADED FILES PARSING IS COMPLETE, WE THEN FORWARD THE REQUEST TO THE NEXT MIDDLEWARE')
    //     next()

    // })

    form.parse(req,(err,fields,files)=>{

      console.log('THE PARSE METHOD RUNS')
      console.log(req.headers)

      if(err){

        console.log('The fields error')
        console.log(err)
        return 	self.emit({
                    type:'write-server-request-response',
                    data: {
                      data: {  error: true,message: 'File parse error'},
                      res: res
                    
                    }
                })

      }else{

        console.log('THE UPLOADED FILES PARSING IS COMPLETE, WE THEN FORWARD THE REQUEST TO THE NEXT MIDDLEWARE')
        console.log(fields)
        console.log(Object.keys(files).length)
        if((fields === false && files === false)){

          return 	self.emit({
                      type:'write-server-request-response',
                      data: {
                        data: {  error: true,message: 'No fields have been provided'},
                        res: res
                      
                      }
                  })

        }else{

          if(files){
            console.log('THE files')
            // console.log(files)
            

           let uploads = forOf(files,(key,value)=>{
              console.log('THE forOf methods is running')
              // console.log(file)
              // console.log(key)
              // console.log(value)
              return {
                p: key,
                v: {
                  path: value.path,
                  name: value.name
                }
              }

            },false)

            console.log('THE UPLOADS')
            console.log(uploads)


            
            req.uploads = {files: uploads,fields: fields}
            // console.log('THE FILES')
            // console.log(req.uploads)
            next()
          }
        
        }
        
      }

      
    })

	
	

} 











