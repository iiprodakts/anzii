import c from "config"




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
  // self.log(data)
	if(!pao.pa_contains(data,['conn','table','opi','query','outComehandler'])){
		
		self.log('Data request operations failed') 
		data.outComehandler({message: 'Database operation failed'})
		
	}else{
		
		if(!pao.pa_isObject(data.conn)){
			self.log('THE connection is not object')
		}else{
			
			if(!pao.pa_isString(data.table)){
      
          self.log('THE TABLE NAME IS NOT A STRING')
			
      }else{
        
        if(!self[data.opi]){

          self.log('DATA.OPI IS NOT CONTAINED AS FUNCTION')
          
        }else{

          console.log('THE CODE GOES THIS FAR')
          
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
            
          }else if(data.opi === 'transaction'){
            
            data.opi = 'transaction'
            self[data.opi](data)
            
          } else if(data.opi === 'procedure'){
            
            data.opi = 'procedure' 
            self[data.opi](data)
            
          }else if(data.opi === 'join'){
            
            data.opi = 'join' 
            self[data.opi](data)
            
          }else if(data.opi === 'search'){
            
            data.opi = 'search' 
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
    let sql = `INSERT INTO ?? (${fields[0]},${fields[1]},${fields[2]},${fields[3]}) VALUES(?)`;
		let queryAttributes = [data.table,[`NULL`,q.email,q.first_name,q.last_name]];
		sql = data.conn.format(sql, queryAttributes);

 	 	//  let sql = `INSERT INTO ${data.table} SET ?`
 
 	 	  data.conn.query(sql,function(e,r,f){
         
        console.log('INSERT RESULT')
        console.log(r)
        console.log(e)
        if(e) data.outComehandler(e,null) 
         r.user = {email: q.email,username: q.first_name} 
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

  console.log('THE DATA IN FINDONE')
  console.log(data)


  if(!pao.pa_isObject(data)){
    
  }else{
    
    try{

      let keys = Object.keys(data.query.user)
      let sql = "SELECT * FROM ?? WHERE ?? = ? LIMIT 1";
      let queryAttributes = [data.table,keys[0], data.query.user[keys[0]]];
      sql = data.conn.format(sql, queryAttributes);
      console.log('THE SQL')
      console.log(sql)

	

      data.conn.query(sql,[data.query],function(e,r,f){
        
          console.log('THE QUERY IS COMPLETED WITH RESULTS')
          console.log(e)
          console.log(r)
          console.log(typeof r)
          console.log(f)
          console.log(r instanceof Array)
          console.log('After R evaluation')
          if(e) data.outComehandler(e,null,data) 

          if(pao.pa_isArray(r) && r.length > 0)  r = r[0]
         
          data.outComehandler(null,r,data)
          
        
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
 

export const transaction = function(data){

   const self = this
   if(typeof data.query === 'function'){

    data.query()
   }else{

    self.TRANSACTION(data.query,data.conn,data.outComehandler)
   }h
}

export const procedure = function(data){

  console.log('THE procedure got a call')
  const self = this
  if(typeof data.query === 'function'){

   data.query()
  }else{

   console.log('INSIDE PROCEDURE')
  //  console.log(data.outComehandler)
  //  console.log(data)
   self.PROCEDURE(data.query,data.conn,data.outComehandler)
  }
}


export const join = function(data){

  console.log('THE procedure got a call')
  const self = this
  if(typeof data.query === 'function'){

   data.query()
  }else{

   console.log('INSIDE JOIN')
  //  console.log(data.outComehandler)
  //  console.log(data)
   self.JOIN(data.query,data.conn,data.outComehandler)
  }
} 

export const search = function(data){

  console.log('THE search got a call')
  const self = this
  if(typeof data.query === 'function'){

   data.query()
  }else{

   console.log('INSIDE SEARCH')
  //  console.log(data.outComehandler)
  //  console.log(data)
   self.SEARCH(data.query,data.conn,data.outComehandler)
  }
}


 export const TRANSACTION = function(collections,conn,handler = null){
	
	
	  
  const self = this 
  const pao = self.pao
  let collectionsIds = [] 
  let breakOut = false 
  
  for(let c=0; c < collections.length; c++){
    
       let i = collections[c] 
       let fields = null
       let sources = null 
       let own = null
       
     if(!pao.pa_contains(i,'fields')){

      handler('Required collection/table field missing')
      break;

     }else{

      if(pao.pa_contains(i.fields,'tables')){

        sources = i.fields.tables
        own = i.fields.own
      }
     } 
         
       sources 
         ? fields = self.combineFields(sources,own,collectionsIds) : ''
       fields 
         ? i.fields = fields : ''
        
        
        
        
        self.insert(i,conn)
        .then((insert)=>{
          
            collectionsIds.push(insert)
           
        })
        .catch((failedInsert)=>{
            
             self.rollback(collectionsIds)
             handler(failedInsert,null) 
             breakOut = true
          
        }) 

        if(breakOut) break
        
        if(c === collections.length - 1 ){
          
           console.log('Operation completed successfully')
           handler('Transaction Operation sucessful')
        }
        
    
  }

}

export const PROCEDURE = async function(collections,conn,handler = null){
	
  
 
  const self = this 
  const pao = self.pao

  self.log('THE PROCEDURE METHOD')
  self.log(collections)
  self.log(handler)
  self.log(conn)
	  
  let collectionsIds = []  
  let breakOut = false 
  
  for(let c=0; c < collections.length; c++){
    
       let i = collections[c] 
       let fields = null
       let sources = null 
       let own = null
       
     if(!pao.pa_contains(i,'fields')){

      handler('Required collection/table field missing')
      break;

     }else{

      if(pao.pa_contains(i.fields,'tables')){

        console.log('sources will be assigned A VALUE')
        sources = i.fields.tables
        own = i.fields.own
      }
     } 
         
       sources 
         ? fields = self.combineFields(sources,own,collectionsIds) : ''
       fields 
         ? i.fields = fields : ''
        
        
        
        
        await self.insert(i,conn)
         .then((insert)=>{
           
             collectionsIds.push(insert)
            
         })
         .catch((failedInsert)=>{
             
              handler(failedInsert,null) 
              breakOut = true
           
         }) 

         if(breakOut) break
        if(c === collections.length - 1 ){
          
           console.log('Operation completed successfully')
           console.log(collectionsIds)
           if(collectionsIds.length > 0){
             console.log('PROCEDURE IS COMPLETED')
             console.log(collectionsIds)
            handler(null,{user:{username: collectionsIds[0].fields.email}})

           }else{
            handler('An insert has went wrong')
           }
          
        }
        
    
  }

}


export const insert = function(inset,conn){

     let self = this 
     let pao = pao
  return new Promise(function(resolve, reject) {


    // do a thing, possibly async, then… 
  console.log('Executing the insert promise')

     
      let sql = `INSERT INTO ?? SET ?`;
  let queryAttributes = [inset.name,inset.fields];
  sql = conn.format(sql, queryAttributes);

    //  let sql = `INSERT INTO ${data.table} SET ?`

    conn.query(sql,function(e,r,f){
      
    
    if(e) {
      
      console.log('Promise is rejecting')
      reject(e) 
      
    }else{
      
        
       
        

        self.findOne({conn: conn,table: inset.name,query:{user:{id: r.insertId}},outComehandler: (e=null,r=null,data=null)=>{

            let insert = {} 

            if(e){

              console.log('the errorINSERT')
              console.log(e)
              console.log(data)
              insert.error = e
              insert.lastInsert = data.query.user.id
              insert.fields = null
              insert.collection = data.table

  
              console.log('Promise is Resolving with findOne error')
              console.log(insert)
              resolve(insert)

            }else{


              insert.lastInsert = data.query.user.id
              insert.fields = r
              insert.collection = data.table
  
              console.log('Promise is Resolving with FindOne SUCCESS')
              console.log(insert)
              resolve(insert)

            }

           

        }})
       




        
        
      
      
    }

      })



  }); 

} 

export const JOIN = async function(join,conn,handler = null){
	
  
 
      const self = this 
			const pao = self.pao
	    	    
			self.joinExek(join,conn)
			.then((result)=>{
        
          console.log('jOIN is successful, sending results to the requester')
          console.log(result)
					handler(null,result)
					
			})
			.catch((failedRequest)=>{
          
          console.log('JOIN FAILED')
          console.log(failedRequest)
					handler(failedRequest,null) 
					
				
			}) 

}

export const SEARCH = async function(search,conn,handler = null){
	
  
 
  const self = this 
  const pao = self.pao
        

  if(!pao.pa_contains(search,'batch')){


    self.searchExek(search,conn)
    .then((result)=>{
      
        console.log('search is successful, sending results to the requester')
        console.log(result)
        handler(null,result)
        
    })
    .catch((failedRequest)=>{
        
        console.log('search FAILED')
        console.log(failedRequest)
        handler(failedRequest,null) 
        
      
    }) 

  }else{

       let resultSet = []
       let batch = search.search


      for(let s=0; s < batch.length; s++){

         await self.searchExek(batch[s],conn)
          .then((result)=>{
            
              console.log('search is successful, pushing results to the resultSet')
              console.log(result)
              resultSet.push(result)
              // handler(null,result)
              
          })
          .catch((failedRequest)=>{
              
              console.log('search FAILED')
              console.log(failedRequest) 
              resultSet.push({item: s,errorMessage: `Item of ${s} position has failed`,error: failedRequest})
              // handler(failedRequest,null) 
              
            
          }) 

          if(s === batch.length - 1 ){
          
            console.log('Operation completed successfully')
            console.log(resultSet)
             handler(null,resultSet)
 
            
         }
        
      }

  }
 

}

export const combineFields = function(tables,own,ids){

let fields = {} 

console.log('COMBINE FIELDS GETS A CALL')


tables.forEach((v,i)=>{
                
                
                for(let co = 0; co < ids.length; co++){
                  
                  if(ids[co].collection === v.name){
                    
                     v.values.forEach((vv,ii)=>{
                       
                         console.log('THE VV')
                         console.log(vv)
                         let fieldValuePair = vv.split('.') 

                         console.log('FIELD VALUE PAIR')
                         console.log(fieldValuePair)
                        fields[fieldValuePair[1]] = ids[co].fields[fieldValuePair[0]]
                         
                         
                         
                       
                     }) 
                     
                     break;
                  }
                }
           
           })
          

       
let keys = Object.keys(own)  
console.log('THE KEYS OF OWN')
console.log(keys)   

keys.forEach((k,i)=>{
  
    fields[k] = own[k]
})

console.log('THE FIELDS')
console.log(fields)
return fields
}


export const rollback = function(rolbacks){

const self = this


rolbacks.forEach((roll,i)=>{
 
  self.deleteOne({id: roll.lastInsert},conn)
  
})


}

export const joinExek = function(join,conn){

   let self = this

  return new Promise(function(resolve, reject) {
    
    
            // do a thing, possibly async, then… 
            console.log('Executing the JOIN promise')
            
            
     
            let options = {
              
              fields: join.returnFields,
              from: {table: join.tables[0],condition: self.joinConditionsFormat(join.conditions) },
              joinPoints: self.joinConditionsFormat(join.joinPoints,'ON'),
              tables: join.tables.splice(1,join.tables.length),
              type: join.type.toUpperCase(),
              length: join.joins
            }
  
       
           let sql = self.joinStatement(options);
           let queryAttributes = [ options.from.table,options.tables[0]]
           console.log('THE SQL BEFORE FORMAT')
           console.log(sql)
           sql = conn.format(sql,queryAttributes);
           console.log(sql)
   
            conn.query(sql,function(e,r,f){
            
          
                if(e) {
                  
                    console.log('Promise is rejecting JOIN')
                    console.log(e)
                    reject(e) 
                    
                }else{
                  
                    console.log('Promise is Resolving JOIN')
                    console.log(r)
                    console.log(r[0])
                    resolve(r[0])
                }
    
            
            })
  
  
  
  }); 
  
  } 


export const joinConditionsFormat = function(conditions,type=null){

   console.log('CONDITIONS')
   console.log(conditions)

    if(type){

    
          let cons = conditions 
          let condition = []

          cons.forEach((con,i)=>{

            let conList = con.trim().split(' ')
            let operand = '='

          
            condition.push(`${conList[0]} ${operand} ${conList[2]}`)


          })
          
          console.log('THE JOIN ON CONDITION')
          console.log(condition)
          return condition


        

     

    }else{

      let cons = conditions 
      let condition = ''

      cons.forEach((con,i)=>{

        console.log('THE con ITEM')
        console.log(con)
        let conList = con.trim().split(' ')
        console.log('THE CONLIST')
        console.log(conList)
        let operand = ''


        switch(conList[1]){

          case 'EQUALS' : 
            operand = '='
            break;
          case 'ISGREATEROREQUALS' : 
            operand = '>='
            break;
          case 'ISLESSOREQUALS' : 
            operand = '<='
            break;
          default: 
           operand = '='
        }
      
        condition += `${conList[0]} ${operand} '${conList[2]}'`


      })
      
      console.log('THE JOIN FROM CONDITION')
      console.log(condition)
      return condition.trim()


    }

}
  
export const joinStatement = function (options){
  
  console.log('THE JOIN OPTIONS')
  console.log(options)
	 
  switch(options.length){
    
    
     case 3: 
       return `SELECT ${options.fields}
               FROM ${options.from.table}
               JOIN ${options.tables[0]}
                  ON ${options.conditions[0]}
               JOIN options.tables[1]
                  ON ${options.conditions[1]}
               WHERE ${options.from.condition}
               
               `
       break;
     case 4: 
       return `SELECT ${options.fields}
               FROM ${options.from.table}
               JOIN ${options.tables[0]}
                  ON ${options.conditions[0]}
               JOIN options.tables[1]
                  ON ${options.conditions[1]}
               JOIN options.tables[2]
                  ON ${options.conditions[2]}
               WHERE ${options.from.condition}
               
               `
       break;
     case 5: 
       return `SELECT ${options.fields}
               FROM ${options.from.table}
               JOIN ${options.tables[0]}
                  ON ${options.conditions[0]}
               JOIN options.tables[1]
                  ON ${options.conditions[1]}
               JOIN options.tables[2]
                  ON ${options.conditions[2]} 
               JOIN options.tables[3]
                  ON ${options.conditions[3]}
               WHERE ${options.from.condition}
               
               `
       break;
     default: 
       return `SELECT ${options.fields}
               FROM  ??
               JOIN  ${options.tables[0]}
                  ON ${options.searchPoints[0]}
               WHERE ${options.from.condition}
               `
  }
  
  
}

 
export const searchExek = function(search,conn){

  const self = this
  const contains = self.pao.pa_contains

 return new Promise(function(resolve, reject) {
   
   
           // do a thing, possibly async, then… 
           console.log('Executing the search promise')
  
           
          let sql = ''
          let attribs = null
          let sqliks = self.searchStatement(self.searchOptions(search));
       
           console.log('THE SQLKIKS OBJECT')
           console.log(sqliks)
           contains(sqliks.attribs,'tables') ? attribs = [sqliks.attribs.from.table,...sqliks.attribs.tables] : attribs = [sqliks.attribs.from.table]

          sql = sqliks.statement
          let queryAttributes = attribs
          console.log('THE SQL BEFORE FORMAT')
          console.log(sql)
          sql = conn.format(sql,queryAttributes);
          console.log(sql)
  
           conn.query(sql,function(e,r,f){
           
         
               if(e) {
                 
                   console.log('Promise is rejecting search')
                   console.log(e)
                   reject(e) 
                   
               }else{
                 
                   console.log('Promise is Resolving search')
                   console.log(r)
                   console.log(r[0])
                   resolve(r)
               }
   
           
           })
 
 
 
 }); 
 
 } 


export const searchConditionsFormat = function(conditions,type=null){

  console.log('CONDITIONS')
  console.log(conditions)

   if(type){

   
         let cons = conditions 
         let condition = []

         cons.forEach((con,i)=>{

           let conList = con.trim().split(' ')
           let operand = '='

         
           condition.push(`${conList[0]} ${operand} ${conList[2]}`)


         })
         
         console.log('THE search ON CONDITION')
         console.log(condition)
         return condition


       

    

   }else{

     let cons = conditions 
     let condition = ''

     cons.forEach((con,i)=>{

       console.log('THE con ITEM')
       console.log(con)
       let conList = con.trim().split(' ')
       console.log('THE CONLIST')
       console.log(conList)
       let operand = ''
       let leftoperand = ''
       let match = false

       if(conList.length > 3){

         if(conList[0].trim() === 'MATCH' && conList.length === 5){


           let oCon = conList.slice(0)

           console.log('THE O CON')
           console.log(oCon)

           let matchFields = oCon[1].trim()
           let matchKeys = oCon[3].trim()

           matchFields[0] === '[' ? matchFields = matchFields.slice(1,matchFields.length -1) : ''
           matchKeys[0] === '[' ? matchKeys = matchKeys.slice(1,matchKeys.length - 1) : ''
           console.log('THE MATCH FIELDS')
           console.log(matchFields)
           let op = ''
           operand = oCon[2].trim()
         

          
           switch(oCon[4]){

            case 'BOOLEAN' : 
              op = `AGAINST (${matchKeys} IN BOOLEAN MODE)`
            break;
            case 'QUERY' : 
              op = `AGAINST (${matchKeys} IN QUERY EXPRESSION MODE)`
            break;
            
            default: 
              op = `AGAINST ("${matchKeys}" IN NATURAL LANGUAGE MODE)`

           }

           conList[0] = `MATCH (${matchFields}) ${op}`
          //  leftoperand = ` ${op}`
           match = true


           

         }else{


         }

       }else{

        switch(conList[1]){

          case 'EQUALS' : 
            operand = '='
            break;
          case 'ISGREATEROREQUALS' : 
            operand = '>='
            break;
          case 'ISLESSOREQUALS' : 
            operand = '<='
            break;
          case 'ISLIKE' : 
            operand = 'LIKE'
            break;
          case 'ISIN' : 
          operand = 'IN'
          break;
          case 'ISREGEX' : 
            operand = 'REGEXP'
            break;
          default: 
            operand = '='
        }

        leftoperand = conList[2]

       }
     
       match ? condition += `${conList[0]}` :  condition += `${conList[0]} ${operand} '${leftoperand}'`
       


     })
     
     console.log('THE search FROM CONDITION')
     console.log(condition)
     return condition.trim()


   }

}
 
export const searchStatement = function (options){
 
 console.log('THE search OPTIONSSTATEMENT')
 console.log(options)
 const self = this 
 const contains = self.pao.pa_contains

 if(!options) return null

  if(contains(options,'length')){
    
    let sqlAttribs = {}
     sqlAttribs.attribs = {from: options.from,tables: options.tables}
     console.log('THE OPTIONS LENGTH')
     console.log(options.length)
    switch(options.length){
    
      case 3: 
        sqlAttribs.statement = `SELECT ${options.fields}
                FROM ??
                JOIN ??
                  ON ${options.joinPoints[0]}
                JOIN ??
                  ON ${options.joinPoints[1]}
                WHERE ${options.from.condition}
                
                `
        break;
      case 4: 
        sqlAttribs.statement = `SELECT ${options.fields}
                FROM ${options.from.table}
                JOIN ${options.tables[0]}
                  ON ${options.joinPoints[0]}
                JOIN ${options.tables[1]}
                  ON ${options.joinPoints[1]}
                JOIN ${options.tables[2]}
                  ON ${options.joinPoints[2]}
                WHERE ${options.from.condition}
                
                `
        break;
      case 5: 
       sqlAttribs.statement = `SELECT ${options.fields}
                FROM ${options.from.table}
                JOIN ${options.tables[0]}
                  ON ${options.joinPoints[0]}
                JOIN ${options.tables[1]}
                  ON ${options.joinPoints[1]}
                JOIN ${options.tables[2]}
                  ON ${options.joinPoints[2]} 
                JOIN ${options.tables[3]}
                  ON ${options.joinPoints[3]}
                WHERE ${options.from.condition}
                
                `
        break;
      default:  
        sqlAttribs.statement = `SELECT ${options.fields}
                FROM  ??
                JOIN  ${options.tables[0]}
                  ON ${options.joinPoints[0]}
                WHERE ${options.from.condition}
              `
    }

    return sqlAttribs
  

  }else{

    let sqlAttribs = {}
    sqlAttribs.attribs = {from: options.from}

    if(contains(options.from,'condition')){

      sqlAttribs.statement = `SELECT ${options.fields}
              FROM  ??
              WHERE ${options.from.condition}
              `

    }else{

      sqlAttribs.statement = `SELECT ${options.fields}
                              FROM  ??
                              `

    }

    return sqlAttribs
   

  }
  
 
 
}

export const searchOptions = function (i){
 
  console.log('THE search BATCH ITEM')
  console.log(i)
  const self = this 
  let pao = self.pao
  let contains = pao.pa_contains




    if(contains(i,['joins','conditions','joinPoints'])){

       console.log('THE SEARCH ITEM CONTAINS BOTH JOINS,CONDITIONS, AND JOINPOINTS')

       let options = {}
       
       options.from = {table: i.tables[0],condition: self.searchConditionsFormat(i.conditions) }
       options.joinPoints = i.joinPoints ? self.searchConditionsFormat(i.joinPoints,'ON') : null
       options.length = i.tables.length
       options.tables =  i.tables.splice(1,i.tables.length)
      
      
       contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
       contains(i,'type') ? options.type = i.type : ''
       contains(i,'take') ? options.take = i.take : ''
       contains(i,'soundex') ? options.soundex : ''


       return options
    }else if(contains(i,['conditions'])){

      let options = {}
      options.from = {table: i.tables[0],condition: self.searchConditionsFormat(i.conditions) }

      contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
      contains(i,'type') ? options.type = i.type : ''
      contains(i,'take') ? options.take = i.take : ''
      contains(i,'soundex') ? options.soundex : ''

      return options

    }else if(contains(i,'tables') && i.tables instanceof Array){

      let options = {}
      options.from = {table: i.tables[0]}

      contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
      contains(i,'type') ? options.type = i.type : ''
      contains(i,'take') ? options.take = i.take : ''
      contains(i,'soundex') ? options.soundex : ''

      return options

    }else{

      return null
    }
   
  
  
 }

