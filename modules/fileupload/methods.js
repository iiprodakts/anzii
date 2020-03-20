


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

export const parseFile = function(req,res,next){

     
    const self = this 
    const form = new self.IncomingForm()
    self.log(`I'm the file upload middleware module that's gonna read the file on the req`)

    form.on('file', (field, file) => {

        if(req.uploads && req.uploads instanceof Array){

            req.uploads.push({[field]: file})

        }else{

            req.uploads = new Array({[field]: file})
        }
        // Do something with the file
        // e.g. save it to the database
        // you can access it using file.path
      })

    form.on('end', () => {

        console.log('THE UPLOADED FILES PARSING IS COMPLETE, WE THEN FORWARD THE REQUEST TO THE NEXT MIDDLEWARE')
        next()

    })

    form.parse(req)

	
	

} 











