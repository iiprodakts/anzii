




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
  // self.log(data.outComehandler)
  // self.log(data.opi)
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
          data.outComehandler({message: 'The specified operation is not supported'})
          
        }else{

          console.log('THE CODE GOES THIS FAR')
          
          if(data.opi === 'insert'){ 
            
            data.opi = 'insertOne' 
            self[data.opi](data) 
            console.log('this runs after opi finishes')
            
          }else if(data.opi === 'find'){
            
            // data.opi = 'findOne' 
            self[data.opi](data)
            
          }else if(data.opi === 'updateOne'){
            
            data.opi = 'updateOne' 
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
            
          }else if(data.opi === 'remove'){
            
            data.opi = 'remove' 
            self[data.opi](data)
            
          }else if(data.opi === 'updateandtake'){

            self[data.opi](data)

          }else{
            
            self[data.opi](data)
            
          }
            
          
        }
        
      }
    }
		
	}
	
	 
	
} 
export const insertOne = function(insert){ 
 
  const self = this 
  const pao = self.pao 

 if(!pao.pa_isObject(insert)){
 	
 }else{
 	
 	 try{

  
    
    
    
    let sql = `INSERT INTO ?? (?) VALUES(?)`;
		let queryAttributes = [insert.table,[...insert.fields],[...insert.values]];
		sql = conn.format(sql, queryAttributes);

 	 	//  let sql = `INSERT INTO ${data.table} SET ?`
 
 	 	  conn.query(sql,function(e,r,f){
         
        console.log('INSERT RESULT')
        console.log(r)
        console.log(e)
        if(e) handler(e,null) 
         r.user = insert.values
 	 	 	  handler(null,r)
 	 	 	  
 	 	 	 
 	 	 })
 	 	
 	 }catch(e){
      
      console.log('CAUTH ERROR')
      console.log(e)
 	 	  handler(e,null)
 	 }
 	
 }
 	
} 
 
export const insertMany = function(insert){ 
 
    if(!pao.pa_isObject(data)){
      
    }else{
      
      try{
        
          let sql = `INSERT INTO ?? (?) VALUES(?)`;
         let result = []  
         let fullImplement = true
        
          insert.bulk.forEach((insertItem,i)=>{
            
             
		      let queryAttributes = [insertItem.table,[...insertItem.fields],[...insertItem.values]];
		        sql = conn.format(sql, queryAttributes);
		        
              conn.query(sql,insertItem,function(e,r,f){ 
              
                if(e){
                  
                  fullImplement = false
                  
                }else{
                  
                  result.push(r)
                
                }
                
                
              }) 	 	   	
          }) 
          
          console.log('bulk insert completed')
          handler(null,result)
    
        
        
      }catch(e){
        
          handler(e,null)
      }
      
    }
 	
 } 
 
export const find = async function(findiks){ 
 
  const self = this 
  const pao = self.pao
  

  // console.log('fIND.FINDIKS')
  // console.log(findiks.query.length)
  // if(findiks.query.length > 0){ return findiks.outComehandler({message: 'ERROR IN MYSQL.FIND.METHOD'})}



  console.log('THE DATA IN FINDONE')
  console.log(findiks)


  if(!pao.pa_isObject(findiks)){
    
    return 
  }else{

    let conn = findiks.conn 
    let handler = findiks.outComehandler
    let query = []
    let result = []  
   
    let multiple = false

    if(findiks.table.toUpperCase().trim() === 'MULTIPLE'){
      
       multiple = true
       query = findiks.query

     }else{

       query.push(findiks.query)

     }

    for(let q=0; q < query.length; q++){

      let find = null
      if(multiple){

        find = {table: query[q].table,...query[q]}

      }else{

        find = {table: findiks.table,...query[q]}
        // find.opiks && Object.keys(find).length === 2 ? '' : !find.conditions ? find.conditions = [`${Object.keys(query)[0]} ISEQUALS ${query[Object.keys(query)[0]]}`]: ''

      }

      
      try{

    
  
  
        let sql = ''
        let attribs = null
        let sqliks = self.queryTemplate(self.queryOptions(find),'select');
     
         console.log('THE SQLKIKS OBJECT FIND')
         console.log(sqliks)
         attribs = [sqliks.attribs.from.table]
  
        sql = sqliks.statement
        let queryAttributes = attribs
        console.log('THE SQL BEFORE FORMAT')
        console.log(sql)
        sql = conn.format(sql,queryAttributes);
        console.log(sql)
  
    
  
       await conn.query(sql,function(e,r,f){
          
            console.log('THE QUERY IS COMPLETED WITH RESULTS')
            console.log(e)
            console.log(r)
            // console.log(typeof r)
            // console.log(f)
            // console.log(r instanceof Array)
            // console.log(pao.pa_isArray(r))
            // console.log(r.length)
            // console.log('After R evaluation')
            if(e) result.push(e) 
  
            if(pao.pa_isArray(r) && r.length > 0 && query.length !== 1 ){  r = r[0]; result.push(r)}else{result = r}
           
           
            if(q === query.length - 1){

              console.log('THE LOOP IS COMPLETE WITH DATA:')
              console.log(result)
              handler(null,result)
      
            }
      
      
            
          
        })
        
      }catch(e){
          
            // console.log('AN ERROR OCCURED IN FIND ONE ')
            // console.log(e)
           return handler(e,null)
      }

      

    }
    
   
    
  }
 	
} 

export const updateOne = function(updatiks){ 

  console.log('THE UPDATIKS')
  console.log(updatiks)

  const self = this 
  const pao = self.pao
  let conn = updatiks.conn 
  let handler = updatiks.outComehandler 
  let update = {table: updatiks.table,...updatiks.query}

  //console.log(update)
 
  if(!pao.pa_isObject(updatiks)){
    
  }else{
    
    try{
      
      let sql = ''
      let attribs = null
      let sqliks = self.queryTemplate(self.queryOptions(update),'update');
      
   
       console.log('THE SQLKIKS OBJECT UPDATE')
       console.log(sqliks)
       attribs = [sqliks.attribs.from.table]

      sql = sqliks.statement
      let queryAttributes = attribs
      console.log('THE SQL BEFORE FORMAT')
      console.log(sql)
      sql = conn.format(sql,queryAttributes);
      console.log(sql)


      conn.query(sql,function(e,r,f){
        
          if(e) handler(e,null)

          handler(null,r)
          
        
      })
      
    }catch(e){
      
        handler(e,null)
    }
    
  }
 	
} 
 
 export const updateMany = function(update){ 
 
    if(!pao.pa_isObject(data)){
      
    }else{
      
      try{
        
         let sql = `UPDATE TABLE ?? SET ?? WHERE ??`
         let result = []  
         let fullImplement = true
        
        
          update.bulk.forEach((updateItem,i)=>{
            
             
		      let queryAttributes = [update.table,[...update.fields],update.condition];
		      
		 sql = conn.format(sql, queryAttributes);
		        
              conn.query(sql,updateItem,function(e,r,f){ 
              
                if(e){
                  
                  fullImplement = false
                  
                }else{
                  
                  result.push(r)
                
                }
                
                
              }) 	 	   	
          }) 
          
          console.log('bulk update completed')
          handler(null,result)
    
        
        
      }catch(e){
        
          handler(e,null)
      }
      
    }
 	
 } 

export const updateandtake = async function(updateAndTake){ 

  console.log('THE UPDATIKANDTAKE')
  console.log(updateAndTake)

  const self = this 
  const pao = self.pao
  let conn = updateAndTake.conn 
  let handler = updateAndTake.outComehandler 
  let updateTake = updateAndTake.query

  //console.log(update)
 
  if(!pao.pa_isObject(updateAndTake)){
    
  }else{
    
    try{
      
       let options = await self.searchOptions(updateTake,true)
       self.multiTableUpdate(options,conn)
       .then((updated)=>{

          if(updated.changedRows > 0){

            self.take(options,conn,updateTake.conditions)
            .then((taken)=>{

              handler(null,{updated: updated,taken: taken})

            })
            .catch((e)=>{

                handler(e,null)

            })

          }else{

            // handler({updated: false,taken: taken})
            console.log('NO CHANGED ROWS IN A MULTIPLE UPDATE')

              self.take(options,conn,updateTake.conditions)
              .then((taken)=>{

                handler(null,{updated: updated,taken: taken})

              })
              .catch((e)=>{

                  handler(e,null)

              })

            //
            // {
					
            //   tables:['jo_user','jo_login'],
            //   joins: 2,
            //   joinPoints: ['jo_user.id EQUALS jo_login.id'],
            //   conditions: [`jo_user.id EQUALS 1`,`AND jo_login.u_id EQUALS 1`],
            //   opiks: ['field.first_name.as[firstName]','field.last_name.as[lastName]',
            //   set: [{first_name: 'Surprise',last_name: 'Mashele'},{password: '1234567'}],
            //   takeFrom: 'jo_user'
            //  }
            

          }
         

       })
       .catch((e)=>{
         handler(e,null)
       })

        
      
    }catch(e){
      
        handler(e,null)
    }
    
  }
 	
}

export const updateJoinTemplate = function(options){


  // `UPDATE ??
  // SET ${options.set}
  // WHERE ${options.from.condition}
  
  // `

  const self = this

  self.log('UPDATE OPTIONS')
  self.log(options)

  let sqlAttribs = {}
  sqlAttribs.attribs = {from: options.from,tables: options.tables}

    
  switch(options.length){
    
    case 3: 
      sqlAttribs.statement = `UPDATE ??,??,??
                              JOIN ${options.tables[0]}
                                ON ${options.conditions[0]}
                              JOIN ${options.tables[1]}
                                ON ${options.conditions[1]}
                              SET ${options.set}
                              WHERE ${options.from.condition}
                              
                              `
      break;
    case 4: 
    sqlAttribs.statement = `UPDATE ??,??,??,??
                            JOIN ${options.tables[0]}
                              ON ${options.conditions[0]}
                            JOIN ${options.tables[1]}
                              ON ${options.conditions[1]}
                            JOIN ${options.tables[2]}
                            ON ${options.conditions[2]}
                            SET ${options.set}
                            WHERE ${options.from.condition}
                            
                            `
      break;

    default: 
    sqlAttribs.statement = `UPDATE ??
                            JOIN ${options.tables[0]}
                              ON ${options.joinPoints[0]}
                            SET ${options.set}
                            WHERE ${options.from.condition}
                            
                            `
 }

 return sqlAttribs



}

export const multiTableUpdate = async function(options,conn){


    const self = this 
    const pao = self.pao 
    const contains = pao.pa_contains


   return  new Promise((resolve,reject)=>{

        try{
          
        
          
      
          // console.log('THE SQLKIKS OBJECT UPDATE')
          // console.log(sqliks)
          // attribs = [sqliks.attribs.from.table]

          let sql = ''
          let attribs = null
          let sqliks = self.updateJoinTemplate(options);
        
          console.log('THE SQLKIKS OBJECT')
          console.log(sqliks)
          contains(sqliks.attribs,'tables') ? attribs = [sqliks.attribs.from.table,...sqliks.attribs.tables] : attribs = [sqliks.attribs.from.table]

          sql = sqliks.statement
          let queryAttributes = attribs
          console.log('THE SQL BEFORE FORMAT::MULTIUPDATE')
          console.log(sql)
          sql = conn.format(sql,queryAttributes);
          console.log(sql)


          conn.query(sql,function(e,r,f){
            
              if(e) return reject(e)

              resolve(r)
              
            
          })
          
        }catch(e){
          
          reject(e)
        }


    })


}

export const take = async function(options,conn,conditions){

   const self = this 
   const pao = self.pao 

    return new Promise((resolve,reject)=>{

      if(options.takeFrom){

           let takeFrom = options.takeFrom
          if(takeFrom.conditions){

            self.log('THE TAKEFROM CONDITIION IS SET')

            options.conditions = takeFrom.conditions 
            takeFrom.tables.length > 1 ? options.length = takeFrom.tables.length : '' 
            options.length ? takeFrom.joinPoints ? options.joinPoints = takeFrom.joinPoints : '' : '' 
            self.takeSql(options,conn)
            .then((resultset)=>{

              resolve(resultset)

            })
            .catch((e)=>{

              reject(e)

            })

 

          }else{

            self.log('THE TAKEFROM HAS NO SET CONDITIONS') 
            self.log(options)
            delete options.length
            options.from.condition = self.searchConditionsFormat([conditions[0]])
            // options.tables = options.tables[0]
            
            self.takeSql(options,conn)
            .then((resultset)=>{

              resolve(resultset)

            })
            .catch((e)=>{

              reject(e)

            })

          }

      }else{

        self.log('THE TAKEFROM IS NOT DEFINED')
        self.takeSql(options,conn)
            .then((resultset)=>{

              resolve(resultset)

            })
            .catch((e)=>{

              reject(e)

            })

      }


    })
   

}

export const takeSql = function(takeOptions,conn){


  const self = this 
  const pao = self.pao
  const contains = pao.pa_contains
  console.log('THE SEARCH')
  console.log(search)

  return new Promise(function(resolve, reject) {
    
    
          // do a thing, possibly async, then… 
          console.log('Executing the search promise')
  
          
          let sql = ''
          let attribs = null
          let sqliks = self.searchStatement(takeOptions);
      
          console.log('THE SQLKIKS OBJECT')
          console.log(sqliks)
          contains(sqliks.attribs,'tables') ? attribs = [sqliks.attribs.from.table,...sqliks.attribs.tables] : attribs = [sqliks.attribs.from.table]

          sql = sqliks.statement
          let queryAttributes = attribs
          console.log('THE SQL BEFORE FORMAT::')
          console.log(sql) 
          console.log(conn)
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
 
 
export const remove = function(removiks){ 

  const self = this 
  const pao = self.pao
  let conn = removiks.conn 
  let handler = removiks.outComehandler 
  let remove = {table: removiks.table,...removiks.query}
 
 if(!pao.pa_isObject(removiks)){
 	
 }else{
 	
 	 try{
 	 	
 	 	   let sql = ''
      let attribs = null
      let sqliks = self.queryTemplate(self.queryOptions(remove),'delete');
   
       console.log('THE SQLKIKS OBJECT DELETED[REMOVE]')
       console.log(sqliks)
       attribs = [sqliks.attribs.from.table]

      sql = sqliks.statement
      let queryAttributes = attribs
      console.log('THE SQL BEFORE FORMAT')
      console.log(sql)
      sql = conn.format(sql,queryAttributes);
      console.log(sql)

      conn.query(sql,function(e,r,f){
        
          if(e) handler(e,null) 
          handler(null,r)
          
        
      })
 	 	
 	 }catch(e){
 	 	
 	 	  handler(e,null)
 	 }
 	
 }
 	
} 

export const queryOptions = function (i){
 
  console.log('THE search BATCH ITEM')
  console.log(i)
  const self = this 
  let pao = self.pao
  let contains = pao.pa_contains

  // let rest = {
			
	// 	conditions: [`country_id EQUALS 202`],
	// 	opiks: ['field.id.as[stateId]','field.state_name.as[state]','field.country_id.as[countryId]'],
	// 	sort: 'order[state_name].asc',
	// 	range: '2,5',
	// 	take: 5
	//   }



       let options = {}
       
      i.conditions 
        ? options.from = {table: i.table,condition: self.searchConditionsFormat(i.conditions) }
        : options.from = {table: i.table}
     console.log('THE CODE GETS HERE')
     console.log(options)
     
      contains(i,['returnFields','opiks']) 
        ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) 
        : contains(i,'opiks') 
            ?  options.fields = self.searchFieldsFormat(i.opiks) 
            :  contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : options.fields='*'
      contains(i,'take') ? options.take = i.take : ''
      contains(i,'range') ? options.range = i.range : ''
      contains(i,'sort') ? options.sort = i.sort : ''
      contains(i,'set') ? options.set = self.set(i.set) : ''
      contains(i,'takeFrom') ? options.takeFrom = i.takeFrom : ''


      console.log('THE OPTIONS')
      console.log(options)

      return options
    
  
  
 }

export const queryTemplate = function(options,type){


  const self = this 
  const pao = self.pao 
  const contains = pao.pa_contains

  console.log('THE QUERY TEMPLATE')
  console.log(options)

  if(type === 'select'){

    let sqlAttribs = {}
    sqlAttribs.attribs = {from: options.from}
    let limit = ' '
    let sort = options.sort ? self.sort(options.sort) :' '
     options.take ? limit = self.limit(options.take,'take') :  options.range ? limit = self.limit(options.range,'range') :' '

    
    if(contains(options.from,'condition')){

      sqlAttribs.statement = `SELECT ${options.fields}
                              FROM  ??
                              WHERE ${options.from.condition}
                              ${sort}
                              ${limit}

                              `

    }else{

      sqlAttribs.statement = `SELECT ${options.fields}
                              FROM  ??
                              ${sort}
                              ${limit}
                              `

    }

    return sqlAttribs

  }else if(type === 'update'){

    let sqlAttribs = {}
    sqlAttribs.attribs = {from: options.from}

    sqlAttribs.statement = `UPDATE ??
                            SET ${options.set}
                            WHERE ${options.from.condition}
                            `
    return sqlAttribs

  }else if(type === 'delete'){


    let sqlAttribs = {}
    sqlAttribs.attribs = {from: options.from}

    sqlAttribs.statement = `DELETE
                            FROM ??
                            `
    options.from.condition ? sqlAttribs.statement += ` WHERE ${options.from.condition}` : ''
    return sqlAttribs

  }


}
 
 

export const transaction = function(data){

   const self = this
   if(typeof data.query === 'function'){

    data.query()
   }else{

    self.TRANSACTION(data.query,data.conn,data.outComehandler)
   }
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
  console.log('THE SEARCH search object contents')
  console.log(search)

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
              if(s === batch.length - 1 ){
          
                console.log('Operation completed successfully')
                console.log(resultSet)
                 handler(null,resultSet)
     
                
             }
              // handler(null,result)
              
          })
          .catch((failedRequest)=>{
              
              console.log('search FAILED')
              console.log(failedRequest) 
              resultSet.push({item: s,errorMessage: `Item of ${s} position has failed`,error: failedRequest})
              // handler(failedRequest,null) 
              
            
          }) 

         
        
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
                  ON ${options.joinPoints[0]}
               WHERE ${options.from.condition}
               `
  }
  
  
}

 
export const searchExek = function(search,conn){

  const self = this
  const contains = self.pao.pa_contains
  console.log('THE SEARCH')
  console.log(search)

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

   const self = this 
   const pao = self.pao

  if(type){

   
     
    let condition = self.parseFormatCondition(conditions,type)
    console.log('THE search ON CONDITION')
    console.log(condition)
    
    return condition


  }else{

  let cons = conditions 
  let condition = ''

  cons.forEach((con,i)=>{



    if(con.indexOf('GROUP::') >= 0 ){

       console.log('CONDITION FROM SEARCHCONDITIONFORMAT')
       console.log(con)
       condition += self.parseGroup(con)

    }else{

       condition += self.parseFormatCondition(con)

    }



    /*console.log('THE con ITEM')
    console.log(con)
    let conList = con.trim().split(' ')
    console.log('THE CONLIST')
    console.log(conList)
    let operand = ''
    let leftoperand = ''
    let multiCon = false
    let match = false

    if(conList[0].trim() === 'MATCH' || conList[1].trim() === 'MATCH'){

      
      if(conList.indexOf('AGAINST') > 0 && conList.length >= 5){


        let oCon = conList.slice(0)

        console.log('THE O CON')
        console.log(oCon) 
         multiCon = oCon[0].trim().toUpperCase() !== 'MATCH' ? true : false

        let matchFields = ''
        let matchKeys = ''

        if(multiCon){
          
            matchFields = oCon[2].trim()
          matchKeys = oCon[4].trim()
          
        }else{
            
              matchFields = oCon[1].trim()
            matchKeys = oCon[3].trim()
        }
        

        matchFields[0] === '[' ? matchFields = matchFields.slice(1,matchFields.length -1) : ''
        matchKeys[0] === '[' ? matchKeys = matchKeys.slice(1,matchKeys.length - 1) : ''
        console.log('THE MATCH FIELDS')
        console.log(matchFields)
        let op = ''
        operand = multiCon ? oCon[3].trim() : oCon[2].trim() 
        let mode = multiCon ? oCon[5] : oCon[4]
      

      
        switch(mode){

        case 'BOOLEAN' : 
          op = `AGAINST ("${matchKeys}"" IN BOOLEAN MODE) `
        break;
        case 'QUERY' : 
          op = `AGAINST ("${matchKeys}" IN QUERY EXPRESSION MODE) `
        break;
        
        default: 
          op = `AGAINST ("${matchKeys}" IN NATURAL LANGUAGE MODE) `

        }

        conList[0] = multiCon ? `${oCon[0]} MATCH (${matchFields}) ${op}` :`MATCH (${matchFields}) ${op}`
      //  leftoperand = ` ${op}`
        match = true


        

      }else{


      }

    }else{


      
        let oCon = conList.slice(0)

        console.log('THE O CON')
        console.log(oCon) 
        multiCon = oCon[0].trim().toUpperCase() === ('AND' || 'OR' || 'NOT') ? true : false     
        let operator = multiCon ? conList[2] : conList[1]

      switch(operator){

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
        case 'ISNOT' : 
        operand = 'NOT'
        break;
        case 'ISNOTNULL' : 
        operand = 'IS NOT NULL'
        break;
        case 'ISNULL' : 
        operand = 'IS NULL'
        break;
        default: 
          operand = '='
      }

    leftoperand = multiCon ? conList[3] : conList[2]

    }

    match ? condition += `${conList[0]}` : multiCon ? condition += ` ${conList[0]} ${conList[1]} ${operand} '${leftoperand}' `
    : condition += `${conList[0]} ${operand} '${leftoperand}' `*/
    


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
     let limit = ' '
     let sort = options.sort ? self.sort(options.sort) :' '
     options.take ? limit = self.limit(options.take,'take') :  options.range ? limit = self.limit(options.range,'range') :' '

    switch(options.length){
    
      case 3: 
       
        sqlAttribs.statement = `SELECT ${options.fields}
                FROM ??
                JOIN ??
                  ON ${options.joinPoints[0]}
                JOIN ??
                  ON ${options.joinPoints[1]}
                WHERE ${options.from.condition}
                ${sort}
                ${limit}
                
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
                ${sort}
                ${limit}
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
                ${sort}
                ${limit}
                `
        break;
      default: 
      
        sqlAttribs.statement = `SELECT ${options.fields}
                FROM  ??
                JOIN  ${options.tables[0]}
                  ON ${options.joinPoints[0]}
                WHERE ${options.from.condition}
                ${sort}
                ${limit}
              `
    }

    return sqlAttribs
  

  }else{

    let sqlAttribs = {}
    sqlAttribs.attribs = {from: options.from}
    let limit = ' '
    let sort = options.sort ? self.sort(options.sort) :' '
     options.take ? limit = self.limit(options.take,'take') :  options.range ? limit = self.limit(options.range,'range') :' '

    
    if(contains(options.from,'condition')){

      sqlAttribs.statement = `SELECT ${options.fields}
              FROM  ??
              WHERE ${options.from.condition}
              ${sort}
              ${limit}
              `

    }else{

      sqlAttribs.statement = `SELECT ${options.fields}
                              FROM  ??
                              ${sort}
                              ${limit}
                              `

    }

    return sqlAttribs
   

  }
  
 
 
}

export const searchOptions = function (i,multiSet=false){
 
  
  const self = this 
  let pao = self.pao
  let contains = pao.pa_contains 
  let setTables = ''
  setTables = multiSet ? [...i.tables] : ''

  self.log('THE search BATCH ITEM') 
  self.log(i)
  console.log(i)




    if(contains(i,['joins','conditions','joinPoints'])){

       console.log('THE SEARCH ITEM CONTAINS BOTH JOINS,CONDITIONS, AND JOINPOINTS')

       let options = {}
       
       options.from = {table: i.tables[0],condition: self.searchConditionsFormat(i.conditions) }
       options.joinPoints = i.joinPoints ? self.searchConditionsFormat(i.joinPoints,'ON') : null
       options.length = i.tables.length
       options.tables =  i.tables.splice(1,i.tables.length)
      
      //  contains(i,['returnFields','opiks']) ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) : ''
      //  contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
      //  contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''
      contains(i,['returnFields','opiks']) 
        ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) 
        : contains(i,'opiks') 
            ?  options.fields = self.searchFieldsFormat(i.opiks) 
            :  contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
       contains(i,'type') ? options.type = i.type : ''
       contains(i,'take') ? options.take = i.take : ''
       contains(i,'range') ? options.range = i.range : ''
       contains(i,'soundex') ? options.soundex = i.soundex : ''
       contains(i,'sort') ? options.sort = i.sort : '' 
       contains(i,'set') ? options.set = multiSet ? self.set(i.set,setTables) : self.set(i.set) : ''
       contains(i,'takeFrom') ? options.takeFrom = i.takeFrom : ''



       return options
    }else if(contains(i,['conditions'])){

      let options = {}
      options.from = {table: i.tables[0],condition: self.searchConditionsFormat(i.conditions) }

      // contains(i,['returnFields','opiks']) ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) : ''
      // contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
      // contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''

      contains(i,['returnFields','opiks']) 
        ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) 
        : contains(i,'opiks') 
            ?  options.fields = self.searchFieldsFormat(i.opiks) 
            :  contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
      contains(i,'type') ? options.type = i.type : ''
      contains(i,'take') ? options.take = i.take : ''
      contains(i,'range') ? options.range = i.range : ''
      contains(i,'soundex') ? options.soundex = i.soundex : ''
      contains(i,'sort') ? options.sort = i.sort : '' 
      contains(i,'set') ? options.set = multiSet ? self.set(i.set,setTables) : self.set(i.set) : ''
      contains(i,'takeFrom') ? options.takeFrom = i.takeFrom : ''


      return options

    }else if(contains(i,'tables') && i.tables instanceof Array){

      let options = {}
      options.from = {table: i.tables[0]}

      contains(i,['returnFields','opiks']) 
        ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) 
        : contains(i,'opiks') 
            ?  options.fields = self.searchFieldsFormat(i.opiks) 
            :  contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
     
      // contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''
      contains(i,'type') ? options.type = i.type : ''
      contains(i,'take') ? options.take = i.take : ''
      contains(i,'range') ? options.range = i.range : ''
      contains(i,'soundex') ? options.soundex = i.soundex : ''
      contains(i,'sort') ? options.sort = i.sort : '' 
      contains(i,'set') ? options.set = multiSet ? self.set(i.set,setTables) : self.set(i.set) : ''
      contains(i,'takeFrom') ? options.takeFrom = i.takeFrom : ''


      return options

    }else{

      return null
    }
   
  
  
 }  

 export const searchFieldsFormat = function(fields,rFields=null){

  console.log('THE SELECT STATEMENT OPIKS OBJECT')
  console.log(fields)
  console.log(rFields)

  const self = this 
  const contains = self.pao.pa_contains


   
         let fis = fields 
         let keyword = ''
         let otherFields = rFields ? rFields.join(',') : ''
         let all = ''
         let fieldstatement = ''
         let multiFields = []
         let allFields =    otherFields.indexOf('all') >= 0
         let lastCondition = false

         console.log('THE OTHER FIELDS')
         console.log(otherFields)
         console.log(otherFields.indexOf('all') >= 0)

         for(let fi=0; fi < fis.length; fi++){

            if(fis[fi].indexOf('fuxin') >=0 || fis[fi].indexOf('field') >= 0 ){

              multiFields.push(true)
            }
            if(multiFields.length > 1){
              break;
            }

         }

         fis.forEach((f,i)=>{

           let formated = self.fieldFormat(f)
           if(formated instanceof Object){

              keyword = formated.value.toUpperCase()

           }else{

            console.log('THE FORMATED')
            console.log(formated)
            console.log(allFields)
            console.log(otherFields)
            if(i === fis.length-1){lastCondition = true}
            fieldstatement += allFields ? multiFields && i !== fis.length - 1 ? `${formated},` : formated : lastCondition && rFields === null ? `${formated}`: `${formated},`

           }
           
        
         })

        allFields === true ?  all = '*,' : ''

        return  allFields  ?  `${all} ${keyword} ${fieldstatement}` : `${all} ${keyword} ${fieldstatement} ${otherFields}`
         
      
       



   

}


export const fieldFormat = function(field,from=null){

  console.log('THE SELECT STATEMENT OPIKS OBJECT FIELD FORMAT')
  console.log(field)
  const self = this 
  const contains = self.pao.pa_contains
  
         let fieldList = field.trim().split('.')
         console.log('THE FIELD LIST')
         console.log(fieldList)
         let fieldstatement = null
         let as = fieldList[0] === 'fuxin' ? fieldList.length > 3 ? `AS ${self.options(`${fieldList[3]}`,'as')}` : ' ' : ' '

         console.log('THE as')
         console.log(as)

     
            switch(fieldList[0]){

              case 'keyword': 
                fieldstatement = from ? fieldList[1].toUpperCase() : {statement:'keyword',value: fieldList[1].toUpperCase()} 
              break;
              case 'fuxin':
                 fieldstatement = ` ${fieldList[1].toUpperCase()}(${self.options(`${fieldList[2]}`,'option')}) ${as} `
              break;
              case 'field':
                if(fieldList.length === 3) fieldstatement = `${fieldList[1]} AS ${self.options(fieldList[2],'as')}`

              break;
              default:
                fieldstatement=''
            }

         
      
         return fieldstatement



   

}


export const options = function(option,type=''){

   const self = this 
   const contains = self.pao.pa_contains
   let stripedOption = option.slice(option.indexOf('[')+1,option.lastIndexOf(']'))
   console.log('OPTIONS: STRIPEDOPTION')
   console.log(stripedOption)

   if(type === 'as'){

     return `${stripedOption}`

   }else if(type === 'option'){

     let args = stripedOption.split(',')

     if(args instanceof Array && args.length > 1){

        if(args[0].indexOf('keyword') > 0){

          return self.fieldFormat(args[0],true)

        }else if(args[0].indexOf('fuxin') > 0){
          
          return self.fieldFormat(args[0])
        }else{

          return `${stripedOption}`
        }

     }else{

      return args.join(',')
     }




   }else{

   }

}

export const sort = function(sort){

    console.log('THE SORT GOT A RESPONSE')
    console.log(sort)
    let sortArgs = sort.split('.')
    let sortFields = sort.slice(sort.indexOf('[') +1,sort.lastIndexOf(']'))
    let sortStatement = ''

    if(sortArgs[0].indexOf('order') >= 0){

        if(sortArgs.length > 1){

           if(sortArgs[1].toUpperCase() === 'DESC'){

              sortStatement = `ORDER BY ${sortFields} DESC`

           }else{

            sortStatement = `ORDER BY ${sortFields}`

           }

        }else{

          sortStatement = `ORDER BY ${sortFields}`

        }    

    }else if(sortArgs[0].indexOf('group') >= 0){


        if(sortArgs.length > 1){

          if(sortArgs[1].toUpperCase() === 'DESC'){

            sortStatement = `GROUP BY ${sortFields} DESC`

          }else{

          sortStatement = `GROUP BY ${sortFields} ASC`

          }

      }else{

        sortStatement = `GROUP BY ${sortFields} ASC`

      }   
    }

   return sortStatement
}

export const limit = function(limit,type=null){

   
   let limitStatement = ''
   if(type === 'take'){

     limitStatement = `LIMIT ${limit}`

   }else if(type === 'range'){

      let ranges = limit.split(',')
      let offset = ranges[0]
      let count = ranges[1]

      limitStatement = `LIMIT ${count} OFFSET ${offset}`

   }

   return limitStatement
   
}

export const parseGroup = function(con,level=1){

  const self = this 
  const pao = self.pao
  let isObject = pao.pa_isObject

  let fullCon = ''

   let connector = ''
   
 
    let res =  self.conditionsConnector(con)
    console.log('THE RES VALUE')
    console.log(res)

    if(isObject(res)){
        
       console.log('THE RES IS AN OBJECT')
       console.log(res)
       con = res.condixion
       connector = res.connector
    }
     
  if(con.trim().indexOf('GROUP::') === 0){

    console.log('THE GROUP:: string is the first')
    //let groupRegx = /GROUP::/
    
    let exStr = con.replace('GROUP::','').trim()
    let groupLen = 0
    let startStr = ''
    let conStr = ''

    console.log('THE extracted string')
    console.log(exStr)

    
    

    if(typeof parseInt(exStr[0]) === 'number'){

      console.log('extStr type is a number')

       groupLen = parseInt(exStr[0])

       startStr = exStr.slice(1).trim()

       if(startStr.indexOf('START') === 0 || startStr.indexOf('$') === 0){

           conStr = startStr.replace('START','').trim()
           console.log(startStr)
           let groupCons = ''
          //  let groupL1Cons = ''
          //  let groupL2Cons = ''
          //  let groupL3Cons = ''
           let grouped = []
           
           console.log('PARSEGROUP EXECUTES THIS FAR')
           console.log(conStr)


           if(level === 1){

             groupCons = conStr.split(';')

             console.log('LEVEL 1 GROUPCONS')
             console.log(groupCons)

              grouped =  groupCons.map((c,i)=>{

                            let connector = ''
                            console.log('THE C CONDITION')
                            console.log(c)
                            console.log(c.indexOf('GROUP::'))
                            //  self.conditionsConnector()

                            if(c.indexOf('GROUP::') >= 0){

                              return self.parseGroup(c,2)

                            }else{

                              return self.parseFormatCondition(c)

                            }
                      })



           }else if(level === 2){

            groupCons = conStr.split(',')

             console.log('LEVEL 2 GROUPCONS')
             console.log(groupCons)


                grouped =  groupCons.map((c,i)=>{

                              // c = self.conditionsConnector(c)

                              if(c.indexOf('GROUP::') >= 0){

                                return self.parseGroup(c,3)

                              }else{

                                return self.parseFormatCondition(c)

                              }
                          })

           }else if(level === 3){

                  groupCons = conStr.split('|')

                  grouped =  groupCons.map((c,i)=>{

                                  return self.parseFormatCondition(c)
 
                            })

           }

          console.log('GROUPED')
          console.log(grouped)
          console.log(groupCons)

           fullCon = `${connector} (${grouped.join(' ')})`
           

       }else{


       }

       


     




      

    }



 }


  console.log('THE FULL GROUPED CONDITION TO BE RETURNED:')
  console.log(fullCon)
  return fullCon

}

export const parseFormatCondition = function(con,type=null){

  const self = this 
  const pao = self.pao

  if(type){

   
    let cons = con
    let condition = []

    cons.forEach((kon,i)=>{

      let conList = kon.trim().split(' ')
      let operand = '='

    
      condition.push(`${conList[0]} ${operand} ${conList[2]}`)


    })
    
    console.log('THE search ON CONDITION')
    console.log(condition)
    return condition


  



  }else{


  let condition = ''


    console.log('THE con ITEM')
    console.log(con)
    let conList = con.trim().split(' ')
    // let conList = con.trim().match(/(?:"^\s\[]+|"[^"]*")+/g)
    console.log('THE CONLIST')
    console.log(conList)
    let operand = ''
    let leftoperand = ''
    let multiCon = false
    let match = false

    if(conList[0].trim() === 'MATCH' || conList[1].trim() === 'MATCH'){

      
      if(conList.indexOf('AGAINST') > 0 && conList.length >= 5){


        let oCon = conList.slice(0)

        console.log('THE O CON')
        console.log(oCon) 
         multiCon = oCon[0].trim().toUpperCase() !== 'MATCH' ? true : false

        let matchFields = ''
        let matchKeys = ''

        if(multiCon){
          
            matchFields = oCon[2].trim()
          matchKeys = oCon[4].trim()
          
        }else{
            
              matchFields = oCon[1].trim()
            matchKeys = oCon[3].trim()
        }
        

        matchFields[0] === '[' ? matchFields = matchFields.slice(1,matchFields.length -1) : ''
        matchKeys[0] === '[' ? matchKeys = matchKeys.slice(1,matchKeys.length - 1) : ''
        console.log('THE MATCH FIELDS')
        console.log(matchFields)
        let op = ''
        operand = multiCon ? oCon[3].trim() : oCon[2].trim() 
        let mode = multiCon ? oCon[5] : oCon[4]
      

      
        switch(mode){

        case 'BOOLEAN' : 
          op = `AGAINST ("${matchKeys}"" IN BOOLEAN MODE) `
        break;
        case 'QUERY' : 
          op = `AGAINST ("${matchKeys}" IN QUERY EXPRESSION MODE) `
        break;
        
        default: 
          op = `AGAINST ("${matchKeys}" IN NATURAL LANGUAGE MODE) `

        }

        conList[0] = multiCon ? `${oCon[0]} MATCH (${matchFields}) ${op}` :`MATCH (${matchFields}) ${op}`
      //  leftoperand = ` ${op}`
        match = true


        

      }else{


      }

    }else{


      
        let oCon = conList.slice(0)

        console.log('THE O CON')
        console.log(oCon) 
        let firstStrItem = oCon[0].trim().toUpperCase()
        multiCon = (firstStrItem ===  'AND' || firstStrItem === 'OR' || firstStrItem === 'NOT') ? true : false     
        let operator = multiCon ? conList[2] : conList[1]

        console.log('THE MULTICON STATUS:::')
        console.log(multiCon)
        console.log(oCon)

      switch(operator){

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
        case 'ISNOT' : 
        operand = 'NOT'
        break;
        case 'ISNOTNULL' : 
        operand = 'IS NOT NULL'
        break;
        case 'ISNULL' : 
        operand = 'IS NULL'
        break;
        default: 
          operand = '='
      }

    leftoperand = multiCon ? conList[3] : conList[2]

    }

    match ? condition += `${conList[0]}` : multiCon ? condition += ` ${conList[0]} ${conList[1]} ${operand} '${leftoperand}' `
    : condition += `${conList[0]} ${operand} '${leftoperand}' `
    


  

  console.log('THE search FROM CONDITION')
  console.log(condition)
  return condition.trim()


  }
 
}


export const conditionsConnector = function(c){

  let connector = {}

  console.log('THE INDEX OF GROUP:: IN CONDITIONS CONNECTOR')
  console.log(c.trim().indexOf('GROUP::'))
  console.log(c)

  if(c.trim().indexOf('GROUP::') > 0){

    console.log('THE INDEX OF GROUP IS AT ONE')


    if(c.trim().indexOf('AND') === 0){

      connector.connector = ` AND`
      connector.condixion = c.replace('AND','').trim()
     
    }else if(c.trim().indexOf('OR') === 0){

      connector.connector = ` OR`
      connector.condixion = c.replace('OR','').trim()

    }else if(c.trim().indexOf('NOT') === 0){

      connector.connector = ` NOT`
      connector.condixion = c.replace('NOT','').trim()

    }

    return connector

  }else{

     return c
     
  }


}

export const set = function(set,multiSets=false){

  const self = this 
  const pao = self.pao 
  const objectToArray = pao.pa_objectToArray
  self.log('THE SET')
  self.log(set) 
  self.log(multiSets)






    let setStrings = ''

    set.forEach((s,i)=>{


        let setString = '' 
        let modSet = objectToArray(s,true)
        console.log('THE CONVERTED SET OBJECT')
        console.log(modSet)

         modSet.forEach((col,pos)=>{

            multiSets 
              ? setString += pos === modSet.length - 1 ? `${multiSets[i]}.${col.key} = "${col.value}"` : `${multiSets[i]}.${col.key} = "${col.value}", `
              : setString += pos === modSet.length - 1 ? `${col.key} = "${col.value}"` : `${col.key} = "${col.value}", `
           

         })
         
         setStrings += i === set.length - 1 ? `${setString}` : `${setString}, `

        // let key = ''
        // let value = ''

        // key = Object.keys(s)[0]
        // value = s[Object.keys(s)[0]]
        // console.log('THE LENGTH OF S')
        // console.log(set.length)
        // console.log(i)

        
        // setString += i === set.length - 1 ? `${key} = "${value}"` : `${key} = "${value}", `


    })

   console.log('THE SETSTRINGS')
    console.log(setStrings)
   return setStrings
  
}