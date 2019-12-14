



export const init = function(){
  
  
  console.log('Mysql has been initialised')
	this.listens({
		
		'mysql-data-request': this.handleMysqlDataRequest.bind(this)
		
	})
	
	
	
}


export const handleMysqlDataRequest = function(data){

 
  const self = this 
  const pao = self.pao
  self.log("Handling Mysql Data Request") 
  self.log(data.table)
  self.log(data.outComehandler)
  self.log(data.opi)
	if(!pao.pa_contains(data,['conn','table','opi','query','outComehandler'])){
		
		self.log('Data request operations failed') 
		data.outComehandler({message: 'Database operation failed'})
		
	}else{
		
		if(!pao.pa_isObject(data.conn)){
			
		}else{
			
			if(!pao.pa_isString(data.table)){
			
			
      }else{
        
        if(!self[data.opi]){
          
        }else{
          
            if(data.opi === 'insert'){ 
            
              data.opi = 'insertOne' 
              self[data.opi](data) 
              console.log('this runs after opi finishes')
              
            }else if(data.opi === 'find'){
              
              data.opi = 'findOne' 
              self[data.opi](data)
              
            }else if(data.opi === 'updateOne'){
              
              data.opi = 'UpdateOne' 
              self[data.opi](data)
              
            }else{
              
              self[data.opi](data)
              
            }
            
          
        }
        
      }
    }
		
	}
	
	 
	
} 
export const insertOne = function(data){ 
 
  const self = this 
  const pao = self.pao 

 if(!pao.pa_isObject(data)){
 	
 }else{
 	
 	 try{

  
    
    let q = data.query.user 
    let fields = Object.keys(q)
    let sql = `INSERT INTO ?? (${fields[0]},${fields[1]},${fields[2]},${fields[3]},${fields[4]}) VALUES(?)`;
		let queryAttributes = ['f_users',[`NULL`,q.email_address,q.user_name,q.password,q.hash]];
		sql = data.conn.format(sql, queryAttributes);

 	 	//  let sql = `INSERT INTO ${data.table} SET ?`
 
 	 	  data.conn.query(sql,function(e,r,f){
         
        console.log('INSERT RESULT')
        console.log(r)
        console.log(e)
        if(e) data.outComehandler(e,null) 
         r.user = {email: q.email_address,username: q.user_name} 
 	 	 	  data.outComehandler(null,r)
 	 	 	  
 	 	 	 
 	 	 })
 	 	
 	 }catch(e){
      
      console.log('CAUTH ERROR')
      console.log(e)
 	 	  data.outComehandler(e,null)
 	 }
 	
 }
 	
} 
 
export const insertMany = function(data){ 
 
    if(!pao.pa_isObject(data)){
      
    }else{
      
      try{
        
        let sql = `INSERT INTO ${data.table} SET ?` 
        let result = []  
        let fullImplement = true
        
          data.forEach((d,i)=>{
            
              data.query(sql,d,function(e,r,f){ 
              
                if(e){
                  
                  fullImplement = false
                  
                }else{
                  
                  result.push(r)
                
                }
                
                
              }) 	 	   	
          }) 
          
          data.outComeHandler(null,result)
    
        
        
      }catch(e){
        
          data.outComeHandler(e,null)
      }
      
    }
 	
 } 
 
export const findOne = function(data){ 
 
  const self = this 
  const pao = self.pao  

  console.log('FIND ONE GOT A CALL')

  if(!pao.pa_isObject(data)){
    
  }else{
    
    try{


      let sql = "SELECT * FROM ?? WHERE ?? = ? LIMIT 1";
      let queryAttributes = ['f_users','email_address', data.query.user];
      sql = data.conn.format(sql, queryAttributes);

	

      data.conn.query(sql,[data.query],function(e,r,f){
        
          console.log('THE QUERY IS COMPLETED WITH RESULTS')
          console.log(e)
          console.log(r)
          if(e) data.outComehandler(e,null) 

          if(pao.pa_isArray(r) && r.length > 0)  r = r[0]
         
          data.outComehandler(null,r)
          
        
      })
      
    }catch(e){
      
        // console.log('AN ERROR OCCURED IN FIND ONE ')
        // console.log(e)
        data.outComehandler(e,null)
    }
    
  }
 	
} 
 
 
export const UpdateOne = function(data){ 
 
  if(!pao.pa_isObject(document)){
    
  }else{
    
    try{
      
      let sql = `SELECT * FROM ${data.table} WHERE ?`
  
      let result = data.query(sql,[data.query],function(e,r,f){
        
          if(e) data.outComeHandler(e,null) 
          data.outComeHandler(null,r)
          
        
      })
      
    }catch(e){
      
        data.outComeHandler(e,null)
    }
    
  }
 	
} 
 
 
 
export const deleteOne = function(data){ 
 
 if(!pao.pa_isObject(document)){
 	
 }else{
 	
 	 try{
 	 	
 	 	 let sql = `SELECT * FROM ${data.table} WHERE ?`
 
 	 	 let result = data.query(sql,[data.query],function(e,r,f){
 	 	 	
 	 	 	  if(e) data.outComeHandler(e,null) 
 	 	 	   data.outComeHandler(null,r)
 	 	 	  
 	 	 	 
 	 	 })
 	 	
 	 }catch(e){
 	 	
 	 	  data.outComeHandler(e,null)
 	 }
 	
 }
 	
} 
 
 


