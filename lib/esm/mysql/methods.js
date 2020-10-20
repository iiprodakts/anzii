




export const init = function(){
  
  
  this.logSync('Mysql has been initialised')
	this.listens({
		
		'mysql-data-request': this.handleMysqlDataRequest.bind(this)
		
	})
	
	
	
}


export const handleMysqlDataRequest = function(data){

 
  const self = this 
  const pao = self.pao
  // self.log("Handling Mysql Data Request") 
  // self.log(data.table)
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
        
        if((data.opi.trim() !== 'deletemultiple' && !self[data.opi] )){


          self.log('DATA.OPI IS NOT CONTAINED AS FUNCTION')
          self.log(data.opi.trim() !== 'deletemultiple')
          self.log(data.opi)
          data.outComehandler({message: 'The specified operation is not supported'})
          
        }else{

          self.logSync('THE CODE GOES THIS FAR')
          
          if(data.opi === 'insert'){ 
            
            data.opi = 'insertOne' 
            self[data.opi](data) 
            self.logSync('this runs after opi finishes')
            
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

          }else if(data.opi === 'insertandtake'){

            self[data.opi](data)

          }else if(data.opi === 'deleteandtake'){
            self[data.opi](data)
          }else if(data.opi === 'deletemultiple'){

            self.deleteandtake(data)

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

  
    
    let handler = insert.outComehandler 
    const conn = insert.conn 
    const query = insert.query
    
    self.log('THE INSERT OBJECT')
    self.log(insert)
    let sql = `INSERT INTO ?? (??) VALUES(?)`;
		let queryAttributes = [insert.table,['id',...query.fields],[null,...query.values]];
    sql = conn.format(sql, queryAttributes);
    self.logSync('THE SQL STATEMENT') 
    self.logSync(sql)

 	 	//  let sql = `INSERT INTO ${data.table} SET ?`
 
 	 	  conn.query(sql,function(e,r,f){
         
        self.logSync('INSERT RESULT')
        self.logSync(r)
        self.logSync(e)
        if(e) return handler(e,null) 
        r.user = insert.values 
        self.logSync(r.user)
 	 	 	  handler(null,r)
 	 	 	  
 	 	 	 
 	 	 })
 	 	
 	 }catch(e){
      
      self.logSync('CAUTH ERROR')
      self.logSync(e)
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
          
          self.logSync('bulk insert completed')
          handler(null,result)
    
        
        
      }catch(e){
        
          handler(e,null)
      }
      
    }
 	
 } 
 
export const find = async function(findiks){ 
 
  const self = this 
  const pao = self.pao
  

  // self.logSync('fIND.FINDIKS')
  // self.logSync(findiks.query.length)
  // if(findiks.query.length > 0){ return findiks.outComehandler({message: 'ERROR IN MYSQL.FIND.METHOD'})}



  // self.logSync('THE DATA IN FINDONE')
  // self.logSync(findiks)


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
     
         self.logSync('THE SQLKIKS OBJECT FIND')
         self.logSync(sqliks)
         attribs = [sqliks.attribs.from.table]
  
        sql = sqliks.statement
        let queryAttributes = attribs
        self.logSync('THE SQL BEFORE FORMAT')
        self.logSync(sql)
        sql = conn.format(sql,queryAttributes);
        self.logSync(sql)
  
    
  
       await conn.query(sql,function(e,r,f){
          
            self.logSync('THE QUERY IS COMPLETED WITH RESULTS')
            self.logSync(e)
            self.logSync(r)
            // self.logSync(typeof r)
            // self.logSync(f)
            // self.logSync(r instanceof Array)
            // self.logSync(pao.pa_isArray(r))
            // self.logSync(r.length)
            // self.logSync('After R evaluation')
            if(e) result.push(e) 
  
            if(pao.pa_isArray(r) && r.length > 0 && query.length !== 1 ){  r = r[0]; result.push(r)}else{result = r}
           
           
            if(q === query.length - 1){

              self.logSync('THE LOOP IS COMPLETE WITH DATA:')
              self.logSync(result)
              handler(null,result)
      
            }
      
      
            
          
        })
        
      }catch(e){
          
            // self.logSync('AN ERROR OCCURED IN FIND ONE ')
            // self.logSync(e)
           return handler(e,null)
      }

      

    }
    
   
    
  }
 	
} 

export const updateOne = function(updatiks){ 

  self.logSync('THE UPDATIKS')
  self.logSync(updatiks)

  const self = this 
  const pao = self.pao
  let conn = updatiks.conn 
  let handler = updatiks.outComehandler 
  let update = {table: updatiks.table,...updatiks.query}

  //self.logSync(update)
 
  if(!pao.pa_isObject(updatiks)){
    
  }else{
    
    try{
      
      let sql = ''
      let attribs = null
      let sqliks = self.queryTemplate(self.queryOptions(update),'update');
      
   
       self.logSync('THE SQLKIKS OBJECT UPDATE')
       self.logSync(sqliks)
       attribs = [sqliks.attribs.from.table]

      sql = sqliks.statement
      let queryAttributes = attribs
      self.logSync('THE SQL BEFORE FORMAT')
      self.logSync(sql)
      sql = conn.format(sql,queryAttributes);
      self.logSync(sql)


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
          
          self.logSync('bulk update completed')
          handler(null,result)
    
        
        
      }catch(e){
        
          handler(e,null)
      }
      
    }
 	
 } 

export const updateandtake = async function(updateAndTake){ 

  self.logSync('THE UPDATIKANDTAKE')
  self.logSync(updateAndTake)

  const self = this 
  const pao = self.pao
  let conn = updateAndTake.conn 
  let handler = updateAndTake.outComehandler 
  let updateTake = updateAndTake.query

  //self.logSync(update)
 
  if(!pao.pa_isObject(updateAndTake)){
    
  }else{
    
    try{
      
       let options = await self.searchOptions(updateTake,true)
       self.multiTableUpdate(options,conn)
       .then((updated)=>{

          if(updated.changedRows > 0){

            self.take(options,conn,updateTake.conditions)
            .then((taken)=>{

              // updated.changedRows > 0 ? handler(null,{updated: true,taken: taken}) : ''
              handler(null,{updated: true,taken: taken})

            })
            .catch((e)=>{

                handler(e,null)

            })

          }else{

            // handler({updated: false,taken: taken})
            self.logSync('NO CHANGED ROWS IN A MULTIPLE UPDATE')
            self.logSync(options)

              self.take(options,conn,updateTake.conditions)
              .then((taken)=>{

                handler(null,{updated: false,taken: taken})

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

export const insertandtake = async function(insertAndTake){ 

  self.logSync('THE INSERTANDTAKE')
  self.logSync(insertAndTake)

  const self = this 
  const pao = self.pao
  let conn = insertAndTake.conn 
  let handler = insertAndTake.outComehandler 
  let insert = insertAndTake.query.insert
  let takeQuery = insertAndTake.query.take 

  //self.logSync(update)
 
  if(!pao.pa_isObject(insertAndTake)){
    
  }else{
    
    try{
      
      
      let insertTakeHandle = async function(error = null,inserted=null){

          await self.log('THE INSERTED RECORD UPDATE')
          await self.log(error)
          await self.log(inserted)
          await self.log(self.SEARCH) 
          !takeQuery.conditions ? takeQuery.conditions = [`id ISEQUAL ${inserted.insertId}`] : ''
          await self.log(takeQuery)
          let take = {}
          take.conn = conn 
          take.query = takeQuery
          take.outComehandler = (e=null,taken)=>{
        
             handler(null,{inserted: inserted,taken: taken})

          }

          self.search(take)
          // throw new Error('MADE UP ERROR')
        //  self.SEARCH(take)

        }
       insert.outComehandler = insertTakeHandle.bind(self)
       insert.conn = conn 
       self.insertOne(insert)
      
      
    }catch(e){
      
        handler(e,null)
    }
    
  }
 	
}

export const deleteandtake = async function(deleteAndTake){ 

  self.logSync('THE DELETEANDTAKE')
  self.logSync(deleteAndTake)

  const self = this 
  const pao = self.pao
  let conn = deleteAndTake.conn 
  let handler = deleteAndTake.outComehandler 
  let remove = null 
  let takeQuery = null


  if(deleteAndTake.query.remove){

    remove = deleteAndTake.query.remove
    takeQuery = deleteAndTake.query.take 
  }
  

  //self.logSync(update)
 
  if(!pao.pa_isObject(deleteAndTake)){
    
  }else{
    
    try{
      
      
      let deleteTakeHandle = async function(error = null,deleted=null){

          await self.log('THE deleted RECORD UPDATE')
          await self.log(error)
          await self.log(deleted)

          if(!takeQuery){

            handler(null,{deleted: deleted})

          }else{ 

            !takeQuery.conditions ? takeQuery.conditions = remove.conditions : ''
            await self.log(takeQuery)
            let take = {}
            take.conn = conn 
            take.query = takeQuery
            take.outComehandler = (e=null,taken)=>{
          
              self.logSync('DELETED AND TAKEN OPERATION')
              self.logSync(deleted)
              self.logSync(taken)
              handler(null,{deleted: deleted,taken: taken})

            }
            self.search(take)

          }
          // throw new Error('MADE UP ERROR')
        //  self.SEARCH(take)

        }

       if(!remove) remove = deleteAndTake.query
       remove.outComehandler = deleteTakeHandle.bind(self)
       remove.conn = conn 
       self.removeJoin(remove)
      
      
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

    case 2: 
    sqlAttribs.statement = `UPDATE ??
                            JOIN ${options.tables[0]}
                              ON ${options.joinPoints[0]}
                            SET ${options.set}
                            WHERE ${options.from.condition}
                            `
    break;
    
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
          
        
          
      
          // self.logSync('THE SQLKIKS OBJECT UPDATE')
          // self.logSync(sqliks)
          // attribs = [sqliks.attribs.from.table]

          let sql = ''
          let attribs = null
          let sqliks = self.updateJoinTemplate(options);
        
          self.logSync('THE SQLKIKS OBJECT')
          self.logSync(sqliks)
          contains(sqliks.attribs,'tables') && sqliks.attribs.tables ? attribs = [sqliks.attribs.from.table,...sqliks.attribs.tables] : attribs = [sqliks.attribs.from.table]

          sql = sqliks.statement
          let queryAttributes = attribs
          self.logSync('THE SQL BEFORE FORMAT::MULTIUPDATE')
          self.logSync(sql)
          sql = conn.format(sql,queryAttributes);
          self.logSync(sql)


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
   self.logSync('TAKE:::')
   self.logSync(options)

    return new Promise((resolve,reject)=>{

      if(options.takeFrom){

           let takeFrom = options.takeFrom 
           self.logSync('THE TAKEFROM BY TAKEFROM')
           self.logSync(takeFrom)
          if(takeFrom.condition){

            self.log('THE TAKEFROM CONDITIION IS SET')
           

            options.from.condition = takeFrom.condition 
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
  self.logSync('THE SEARCH')
  self.logSync(search)

  return new Promise(function(resolve, reject) {
    
    
          // do a thing, possibly async, then… 
          self.logSync('Executing the search promise')
  
          
          let sql = ''
          let attribs = null
          let sqliks = self.searchStatement(takeOptions);
      
          self.logSync('THE SQLKIKS OBJECT')
          self.logSync(sqliks)
          contains(sqliks.attribs,'tables') ? attribs = [sqliks.attribs.from.table,...sqliks.attribs.tables] : attribs = [sqliks.attribs.from.table]

          sql = sqliks.statement
          let queryAttributes = attribs
          self.logSync('THE SQL BEFORE FORMAT::')
          self.logSync(sql) 
          // self.logSync(conn)
          sql = conn.format(sql,queryAttributes);
          self.logSync(sql)
  
          conn.query(sql,function(e,r,f){
          
        
              if(e) {
                
                  self.logSync('Promise is rejecting search')
                  self.logSync(e)
                  reject(e) 
                  
              }else{
                
                  self.logSync('Promise is Resolving search')
                  self.logSync(r)
                  self.logSync(r[0])
                  resolve(r)
              }
  
          
          })
  
  
  
  }); 



}
 
export const removeJoin = function(removiks){ 

  const self = this 
  const pao = self.pao
  const contains = pao.pa_contains
  let conn = removiks.conn 
  let handler = removiks.outComehandler 
  
  // let remove = {table: removiks.table,...removiks.query}
 
 if(!pao.pa_isObject(removiks)){
 	
 }else{
 	
 	 try{
 	 	
 	 	   let sql = ''
      let attribs = null
      let sqliks = self.queryTemplate(self.searchOptions(removiks),'delete');
   
       self.logSync('THE SQLKIKS OBJECT DELETEDANDTAKE[REMOVE]')
       self.logSync(sqliks)
       contains(sqliks.attribs,'tables') ? attribs = [...sqliks.attribs.tables,sqliks.attribs.from.table] : attribs = [sqliks.attribs.from.table]

      sql = sqliks.statement
      let queryAttributes = attribs
      self.logSync('THE SQL BEFORE FORMAT')
      self.logSync(sql)
      sql = conn.format(sql,queryAttributes);
      self.logSync(sql)

      conn.query(sql,function(e,r,f){
        
          if(e) return handler(e,null) 
          handler(null,r)
          
        
      })
 	 	
 	 }catch(e){
 	 	
 	 	  handler(e,null)
 	 }
 	
 }
 	
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
   
       self.logSync('THE SQLKIKS OBJECT DELETED[REMOVE]')
       self.logSync(sqliks)
       attribs = [sqliks.attribs.from.table]

      sql = sqliks.statement
      let queryAttributes = attribs
      self.logSync('THE SQL BEFORE FORMAT')
      self.logSync(sql)
      sql = conn.format(sql,queryAttributes);
      self.logSync(sql)

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
 
  self.logSync('THE search BATCH ITEM')
  self.logSync(i)
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
     self.logSync('THE CODE GETS HERE')
     self.logSync(options)
     
      contains(i,['returnFields','opiks']) 
        ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) 
        : contains(i,'opiks') 
            ?  options.fields = self.searchFieldsFormat(i.opiks) 
            :  contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : options.fields='*'
      contains(i,'take') ? options.take = i.take : ''
      contains(i,'range') ? options.range = i.range : ''
      contains(i,'sort') ? options.sort = i.sort : ''
      contains(i,'set') ? options.set = self.set(i.set) : ''
      contains(i,'takeFrom') 
              ?  i.takeFrom.conditions 
            
                    ? (options.takeFrom = i.takeFrom, options.takeFrom.condition = self.searchConditionsFormat(i.takeFrom.conditions))
                    : options.takeFrom = i.takeFrom
                
              : ''
      


      self.logSync('THE OPTIONS')
      self.logSync(options)

      return options
    
  
  
 }

export const queryTemplate = function(options,type){


  const self = this 
  const pao = self.pao 
  const contains = pao.pa_contains

  self.logSync('THE QUERY TEMPLATE')
  self.logSync(options)

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

      
    if(options.length){

      let sqlAttribs = {}
      sqlAttribs.attribs = {from: options.from,tables: options.tables} 
      options.tables.unshift(options.from.table)
      self.logSync('DELETE OPTIONS OBJECT')
      self.logSync(options)
      self.logSync(options.tables)
      self.logSync(options.length)

      switch(options.length){

       
        case 3: 
          sqlAttribs.statement = `DELETE ??,??,??
                                  FROM ??
                                  JOIN ${options.tables[1]}
                                    ON ${options.joinPoints[0]}
                                  JOIN ${options.tables[2]}
                                    ON ${options.joinPoints[1]}
                                  WHERE ${options.from.condition}
                                  
                                  `
          break;
        case 4: 
        sqlAttribs.statement = `DELETE ??,??,??,??
                                FROM ??
                                JOIN ${options.tables[1]}
                                  ON ${options.joinPoints[0]}
                                JOIN ${options.tables[2]}
                                  ON ${options.joinPoints[1]}
                                JOIN ${options.tables[3]}
                                ON ${options.joinPoints[3]}
                                WHERE ${options.from.condition}
                                
                                `
          break; 
        
       
         default:  
          sqlAttribs.statement = `DELETE ??,??
                                  FROM ??
                                  JOIN ${options.tables[1]}
                                    ON ${options.joinPoints[0]}
                                  WHERE ${options.from.condition}
                                  
                                  `
             
                                
      }

      self.logSync('SQL ATTRRIBS')
      self.logSync(sqlAttribs)
      return sqlAttribs

    }else{

        let sqlAttribs = {}
        sqlAttribs.attribs = {from: options.from}
        

        sqlAttribs.statement = `DELETE
                                FROM ??
                                `
        options.from.condition ? sqlAttribs.statement += ` WHERE ${options.from.condition}` : '' 
        return sqlAttribs

    }

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

  self.logSync('THE procedure got a call')
  const self = this
  if(typeof data.query === 'function'){

   data.query()
  }else{

   self.logSync('INSIDE PROCEDURE')
  //  self.logSync(data.outComehandler)
  //  self.logSync(data)
   self.PROCEDURE(data.query,data.conn,data.outComehandler)
  }
}


export const join = function(data){

  self.logSync('THE procedure got a call')
  const self = this
  if(typeof data.query === 'function'){

   data.query()
  }else{

   self.logSync('INSIDE JOIN')
  //  self.logSync(data.outComehandler)
  //  self.logSync(data)
   self.JOIN(data.query,data.conn,data.outComehandler)
  }
} 

export const search = function(data){

  self.logSync('THE search got a call')
  const self = this
  if(typeof data.query === 'function'){

   data.query()
  }else{

   self.logSync('INSIDE SEARCH')
  //  self.logSync(data.outComehandler)
  //  self.logSync(data)
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
          
           self.logSync('Operation completed successfully')
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

        self.logSync('sources will be assigned A VALUE')
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
          
           self.logSync('Operation completed successfully')
           self.logSync(collectionsIds)
           if(collectionsIds.length > 0){
             self.logSync('PROCEDURE IS COMPLETED')
             self.logSync(collectionsIds)
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
  self.logSync('Executing the insert promise')

     
      let sql = `INSERT INTO ?? SET ?`;
  let queryAttributes = [inset.name,inset.fields];
  sql = conn.format(sql, queryAttributes);

    //  let sql = `INSERT INTO ${data.table} SET ?`

    conn.query(sql,function(e,r,f){
      
    
    if(e) {
      
      self.logSync('Promise is rejecting')
      reject(e) 
      
    }else{
      
        
       
        

        self.findOne({conn: conn,table: inset.name,query:{user:{id: r.insertId}},outComehandler: (e=null,r=null,data=null)=>{

            let insert = {} 

            if(e){

              self.logSync('the errorINSERT')
              self.logSync(e)
              self.logSync(data)
              insert.error = e
              insert.lastInsert = data.query.user.id
              insert.fields = null
              insert.collection = data.table

  
              self.logSync('Promise is Resolving with findOne error')
              self.logSync(insert)
              resolve(insert)

            }else{


              insert.lastInsert = data.query.user.id
              insert.fields = r
              insert.collection = data.table
  
              self.logSync('Promise is Resolving with FindOne SUCCESS')
              self.logSync(insert)
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
        
          self.logSync('jOIN is successful, sending results to the requester')
          self.logSync(result)
					handler(null,result)
					
			})
			.catch((failedRequest)=>{
          
          self.logSync('JOIN FAILED')
          self.logSync(failedRequest)
					handler(failedRequest,null) 
					
				
			}) 

}

export const SEARCH = async function(search,conn,handler = null){
	
  
 
  const self = this 
  const pao = self.pao
  self.logSync('THE SEARCH search object contents')
  self.logSync(search)

  if(!pao.pa_contains(search,'batch')){


    self.searchExek(search,conn)
    .then((result)=>{
      
        self.logSync('search is successful, sending results to the requester')
        // self.logSync(result)
        handler(null,result)
        
    })
    .catch((failedRequest)=>{
        
        self.logSync('search FAILED')
        self.logSync(failedRequest)
        handler(failedRequest,null) 
        
      
    }) 

  }else{

       let resultSet = []
       let batch = search.search


      for(let s=0; s < batch.length; s++){

         await self.searchExek(batch[s],conn)
          .then((result)=>{
            
              self.logSync('search is successful, pushing results to the resultSet')
              // self.logSync(result)
              resultSet.push(result)
              if(s === batch.length - 1 ){
          
                self.logSync('Operation completed successfully')
                // self.logSync(resultSet)
                 handler(null,resultSet)
     
                
             }
              // handler(null,result)
              
          })
          .catch((failedRequest)=>{
              
              self.logSync('search FAILED')
              self.logSync(failedRequest) 
              resultSet.push({item: s,errorMessage: `Item of ${s} position has failed`,error: failedRequest})
              // handler(failedRequest,null) 
              
            
          }) 

         
        
      }

  }
 

}

export const combineFields = function(tables,own,ids){

let fields = {} 

self.logSync('COMBINE FIELDS GETS A CALL')


tables.forEach((v,i)=>{
                
                
                for(let co = 0; co < ids.length; co++){
                  
                  if(ids[co].collection === v.name){
                    
                     v.values.forEach((vv,ii)=>{
                       
                         self.logSync('THE VV')
                         self.logSync(vv)
                         let fieldValuePair = vv.split('.') 

                         self.logSync('FIELD VALUE PAIR')
                         self.logSync(fieldValuePair)
                        fields[fieldValuePair[1]] = ids[co].fields[fieldValuePair[0]]
                         
                         
                         
                       
                     }) 
                     
                     break;
                  }
                }
           
           })
          

       
let keys = Object.keys(own)  
self.logSync('THE KEYS OF OWN')
self.logSync(keys)   

keys.forEach((k,i)=>{
  
    fields[k] = own[k]
})

self.logSync('THE FIELDS')
self.logSync(fields)
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
            self.logSync('Executing the JOIN promise')
            
            
     
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
           self.logSync('THE SQL BEFORE FORMAT')
           self.logSync(sql)
           sql = conn.format(sql,queryAttributes);
           self.logSync(sql)
   
            conn.query(sql,function(e,r,f){
            
          
                if(e) {
                  
                    self.logSync('Promise is rejecting JOIN')
                    self.logSync(e)
                    reject(e) 
                    
                }else{
                  
                    self.logSync('Promise is Resolving JOIN')
                    self.logSync(r)
                    self.logSync(r[0])
                    resolve(r[0])
                }
    
            
            })
  
  
  
  }); 
  
  } 


export const joinConditionsFormat = function(conditions,type=null){

   self.logSync('CONDITIONS')
   self.logSync(conditions)

    if(type){

    
          let cons = conditions 
          let condition = []

          cons.forEach((con,i)=>{

            let conList = con.trim().split(' ')
            let operand = '='

          
            condition.push(`${conList[0]} ${operand} ${conList[2]}`)


          })
          
          self.logSync('THE JOIN ON CONDITION')
          self.logSync(condition)
          return condition


        

     

    }else{

      let cons = conditions 
      let condition = ''

      cons.forEach((con,i)=>{

        self.logSync('THE con ITEM')
        self.logSync(con)
        let conList = con.trim().split(' ')
        self.logSync('THE CONLIST')
        self.logSync(conList)
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
      
      self.logSync('THE JOIN FROM CONDITION')
      self.logSync(condition)
      return condition.trim()


    }

}
  
export const joinStatement = function (options){
  
  self.logSync('THE JOIN OPTIONS')
  self.logSync(options)
	 
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
  self.logSync('THE SEARCH')
  self.logSync(search)

 return new Promise(function(resolve, reject) {
   
   
           // do a thing, possibly async, then… 
           self.logSync('Executing the search promise')
  
           
          let sql = ''
          let attribs = null
          let sqliks = self.searchStatement(self.searchOptions(search));
       
           self.logSync('THE SQLKIKS OBJECT')
           self.logSync(sqliks)
           contains(sqliks.attribs,'tables') ? attribs = [sqliks.attribs.from.table,...sqliks.attribs.tables] : attribs = [sqliks.attribs.from.table]

          sql = sqliks.statement
          let queryAttributes = attribs
          self.logSync('THE SQL BEFORE FORMAT')
          self.logSync(sql)
          sql = conn.format(sql,queryAttributes);
          self.logSync(sql)
  
           conn.query(sql,function(e,r,f){
           
         
               if(e) {
                 
                   self.logSync('Promise is rejecting search')
                   self.logSync(e)
                   reject(e) 
                   
               }else{
                 
                   self.logSync('Promise is Resolving search')
                  //  self.logSync(r)
                  //  self.logSync(r[0])
                   resolve(r)
               }
   
           
           })
 
 
 
 }); 
 
 } 


export const searchConditionsFormat = function(conditions,type=null){

  self.logSync('CONDITIONS')
  self.logSync(conditions)

   const self = this 
   const pao = self.pao

  if(type){

   
     
    let condition = self.parseFormatCondition(conditions,type)
    self.logSync('THE search ON CONDITION')
    self.logSync(condition)
    
    return condition


  }else{

  let cons = conditions 
  let condition = ''

  cons.forEach((con,i)=>{



    if(con.indexOf('GROUP::') >= 0 ){

       self.logSync('CONDITION FROM SEARCHCONDITIONFORMAT')
       self.logSync(con)
       condition += self.parseGroup(con)

    }else{

       condition += self.parseFormatCondition(con)

    }



    /*self.logSync('THE con ITEM')
    self.logSync(con)
    let conList = con.trim().split(' ')
    self.logSync('THE CONLIST')
    self.logSync(conList)
    let operand = ''
    let leftoperand = ''
    let multiCon = false
    let match = false

    if(conList[0].trim() === 'MATCH' || conList[1].trim() === 'MATCH'){

      
      if(conList.indexOf('AGAINST') > 0 && conList.length >= 5){


        let oCon = conList.slice(0)

        self.logSync('THE O CON')
        self.logSync(oCon) 
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
        self.logSync('THE MATCH FIELDS')
        self.logSync(matchFields)
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

        self.logSync('THE O CON')
        self.logSync(oCon) 
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

  self.logSync('THE search FROM CONDITION')
  self.logSync(condition)
  return condition.trim()


  }

}
 
export const searchStatement = function (options){
 
 self.logSync('THE search OPTIONSSTATEMENT')
 self.logSync(options)
 const self = this 
 const contains = self.pao.pa_contains

 if(!options) return null

  if(contains(options,'length')){
    
    let sqlAttribs = {}
     sqlAttribs.attribs = {from: options.from,tables: options.tables}
     self.logSync('THE OPTIONS LENGTH')
     self.logSync(options.length)
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
  self.logSync(i)




    if(contains(i,['joins','conditions','joinPoints'])){

       self.logSync('THE SEARCH ITEM CONTAINS BOTH JOINS,CONDITIONS, AND JOINPOINTS')

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
      //  contains(i,'takeFrom') ? options.takeFrom = i.takeFrom : '' 
       contains(i,'takeFrom') 
                ?  i.takeFrom.conditions 
              
                      ? (options.takeFrom = i.takeFrom, options.takeFrom.condition = self.searchConditionsFormat(i.takeFrom.conditions))
                      : options.takeFrom = i.takeFrom
                  
                : ''



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
      contains(i,'takeFrom') 
          ?  i.takeFrom.conditions 
        
                ? (options.takeFrom = i.takeFrom, options.takeFrom.condition = self.searchConditionsFormat(i.takeFrom.conditions))
                : options.takeFrom = i.takeFrom
            
          : ''


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
      contains(i,'takeFrom') 
          ?  i.takeFrom.conditions 
        
                ? (options.takeFrom = i.takeFrom, options.takeFrom.condition = self.searchConditionsFormat(i.takeFrom.conditions))
                : options.takeFrom = i.takeFrom
            
          : ''

      return options

    }else{

      return null
    }
   
  
  
 }  

 export const searchFieldsFormat = function(fields,rFields=null){

  self.logSync('THE SELECT STATEMENT OPIKS OBJECT')
  self.logSync(fields)
  self.logSync(rFields)

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

         self.logSync('THE OTHER FIELDS')
         self.logSync(otherFields)
         self.logSync(otherFields.indexOf('all') >= 0)

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

            self.logSync('THE FORMATED')
            self.logSync(formated)
            self.logSync(allFields)
            self.logSync(otherFields)
            if(i === fis.length-1){lastCondition = true}
            fieldstatement += allFields ? multiFields && i !== fis.length - 1 ? `${formated},` : formated : lastCondition && rFields === null ? `${formated}`: `${formated},`

           }
           
        
         })

        allFields === true ?  all = '*,' : ''

        return  allFields  ?  `${all} ${keyword} ${fieldstatement}` : `${all} ${keyword} ${fieldstatement} ${otherFields}`
         
      
       



   

}


export const fieldFormat = function(field,from=null){

  self.logSync('THE SELECT STATEMENT OPIKS OBJECT FIELD FORMAT')
  self.logSync(field)
  const self = this 
  const contains = self.pao.pa_contains
  
        //  let splitFieldRegx = /\.(?![^\[]]*\]])/ 
         let nestedIntFuxin = ''
         let last = field.lastIndexOf('.as') >= 0 ? field.lastIndexOf('.as') : field.length

          field.indexOf('.options[fuxin') >= 0 
            ? nestedIntFuxin = field.slice(field.indexOf('.options[fuxin'),last)
            : ''
          self.logSync('THE NESTEDINTFUXIN')
          self.logSync(nestedIntFuxin)
          self.logSync(field) 
          nestedIntFuxin.trim() !== '' ? field = field.substr(0,field.indexOf(nestedIntFuxin)) : ''
          // nestedIntFuxin.trim() !== '' ? field =  : '' 
        // let splicedArray = conList.splice(2)
        // self.logSync('THE SPLICED ARRAY')
        // self.logSync(splicedArray)
        // self.logSync(splicedArray.join(' '))
        // conList[2] = splicedArray.join(' ');
        // self.logSync(conList)
        // self.logSync(conList[2].indexOf('['))
        //  let fieldList = field.trim().split('.')
        //  fieldList.length > 3 ? fieldList[3].indexOf('as[') < 0 ? fieldList[2] = fieldList.splice(2).join(' ') : '' : ''
         let fieldList = field.trim().split('.')
         nestedIntFuxin.trim() !== '' ? fieldList.push(nestedIntFuxin) : ''
         self.logSync('THE FIELD LIST')
         self.logSync(fieldList)
         
         let fieldstatement = null 
         //fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]
         let as = fieldList[0] === 'fuxin' ? fieldList.length > 3 ? `AS ${self.options(`${fieldList[3]}`,'as')}` : ' ' : ' '

         self.logSync('THE as')
         self.logSync(as)

     
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

         
      
         return fieldstatement.trim()



   

}


export const options = function(option,type=''){

   const self = this 
   const contains = self.pao.pa_contains
   self.logSync('THE CURRENT OPTION')
   self.logSync(option)
   
   if(option !== 'undefined'){

    let stripedOption = option.slice(option.indexOf('[')+1,option.lastIndexOf(']'))
    self.logSync('OPTIONS: STRIPEDOPTION')
    self.logSync(stripedOption)

      if(type === 'as'){

        return `${stripedOption}`
  
      }else if(type === 'option'){
  
        let args = stripedOption.split(',')
  
        if(args instanceof Array && args.length > 1){
  
          if(args[0].indexOf('keyword') >= 0){
  
            return self.fieldFormat(args[0],true)
  
          }else if(args[0].indexOf('fuxin') >= 0){
            
            if(args[1]){
              return `${self.fieldFormat(args[0])},${args[1].trim()}`
            }else{
              return self.fieldFormat(args[0])
            }
           
          }else{
  
            return `${stripedOption}`
          }
  
        }else{
          return args.join(',')
        }
      }

   }else{

     self.logSync('THE OPTION IS UNDEFINED')
     self.logSync(option)
     return ''

   }

}

export const sort = function(sort){

    self.logSync('THE SORT GOT A RESPONSE')
    self.logSync(sort)
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
  //AND GROUP::2 START created_at FUXIN [ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]]

  let fullCon = ''

   let connector = ''
   
 
    let res =  self.conditionsConnector(con)
    self.logSync('THE RES VALUE')
    self.logSync(res)

    if(isObject(res)){
        
       self.logSync('THE RES IS AN OBJECT')
       self.logSync(res)
       con = res.condixion
       connector = res.connector
    }
     
  if(con.trim().indexOf('GROUP::') === 0){

    self.logSync('THE GROUP:: string is the first')
    //let groupRegx = /GROUP::/
    
    let exStr = con.replace('GROUP::','').trim()
    let groupLen = 0
    let startStr = ''
    let conStr = ''

    self.logSync('THE extracted string')
    self.logSync(exStr)

    
    

    if(typeof parseInt(exStr[0]) === 'number'){

      self.logSync('extStr type is a number')

       groupLen = parseInt(exStr[0])

       startStr = exStr.slice(1).trim()

       if(startStr.indexOf('START') === 0 || startStr.indexOf('$') === 0){

           conStr = startStr.replace('START','').trim()
           self.logSync(startStr)
           let groupCons = ''
          //  let groupL1Cons = ''
          //  let groupL2Cons = ''
          //  let groupL3Cons = ''
           let grouped = []
           
           self.logSync('PARSEGROUP EXECUTES THIS FAR')
           self.logSync(conStr)


           if(level === 1){

             groupCons = conStr.split(';')

             self.logSync('LEVEL 1 GROUPCONS')
             self.logSync(groupCons)

              grouped =  groupCons.map((c,i)=>{

                            let connector = ''
                            self.logSync('THE C CONDITION')
                            self.logSync(c)
                            self.logSync(c.indexOf('GROUP::'))
                            //  self.conditionsConnector()

                            if(c.indexOf('GROUP::') >= 0){

                              return self.parseGroup(c,2)

                            }else{

                              return self.parseFormatCondition(c)

                            }
                      })



           }else if(level === 2){

            groupCons = conStr.split(',')

             self.logSync('LEVEL 2 GROUPCONS')
             self.logSync(groupCons)


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

          self.logSync('GROUPED')
          self.logSync(grouped)
          self.logSync(groupCons)

           fullCon = `${connector} (${grouped.join(' ')})`
           

       }else{


       }

       


     




      

    }



 }


  self.logSync('THE FULL GROUPED CONDITION TO BE RETURNED:')
  self.logSync(fullCon)
  return fullCon

}

export const parseFormatCondition = function(con,type=null){

  const self = this 
  const pao = self.pao

  if(type){

   
    let cons = con
    let condition = []

    cons.forEach((kon,i)=>{

      // let conList = kon.trim().split(' ')
      let conList = kon.trim().match(/(\[[^\]]+\]|\S+)/g)
      let operand = '='

    
      condition.push(`${conList[0]} ${operand} ${conList[2]}`)


    })
    
    self.logSync('THE search ON CONDITION')
    self.logSync(condition)
    return condition


  



  }else{


  let condition = ''


    self.logSync('THE con ITEM')
    self.logSync(con)

    // let conList = con.trim().split(' ')
    // let conList = con.trim().match(/(?:"^\s\[]+|"[^"]*")+/g) 
    let conList = con.trim().match(/(\[[^\]]+\]|\S+)/g)
    self.logSync('THE CONLIST')
    self.logSync(conList)
    let operand = ''
    let leftoperand = ''
    let multiCon = false
    let match = false 
    let conFuxin = false 
    let whiteSpace = ' '

    if((conList[0].trim() === 'MATCH' || conList[1].trim() === 'MATCH') || (conList[1].trim() === 'FUXIN' || conList[2].trim() === 'FUXIN')){

      
      if(conList.indexOf('AGAINST') > 0 && conList.length >= 5){


        let oCon = conList.slice(0)

        self.logSync('THE O CON')
        self.logSync(oCon) 
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
        self.logSync('THE MATCH FIELDS')
        self.logSync(matchFields)
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

        //[ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]] 
        //created_at FUXIN [ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]]

        let oCon = conList.slice(0) 
        conFuxin = true

        self.logSync('THE O CON::FUXIN')
        self.logSync(oCon) 
         multiCon = oCon[1].trim().toUpperCase() !== 'FUXIN' ? true : false 
         let fuxinIndex = multiCon ? 3 : 2 
         let splicedFuxinArr = oCon.splice(fuxinIndex) 
         oCon.push(splicedFuxinArr.join(' '))
         self.logSync(fuxinIndex)
         self.logSync(oCon)
        //  self.logSync(splicedFuxinArr)




       

        // if(oCon.indexOf('FUXIN') > 0){

        //   self.logSync('THE FUXIN OP IN SEARCHCONDITIONS')
        //   self.logSync(oCon) 
        //   let splicedArray = multiCon ? oCon.splice(3) : oCon.splice(2)
        //   self.logSync('THE SPLICED ARRAY')
        //   self.logSync(splicedArray)
        //   self.logSync(splicedArray.join(' '))
        //   multiCon ? oCon[3] = splicedArray.join(' ') : oCon[2] = splicedArray.join(' ');

        //   self.logSync(oCon)
        //   self.logSync(oCon[2].indexOf('['))
        //   // throw new Error()

          if(oCon[fuxinIndex].indexOf('[') >= 0){

            self.logSync('OTHER CONTENT IS IN THE SQUARE BRACKETS')
            let stripedSqBkts = oCon[fuxinIndex].slice(1,oCon[fuxinIndex].length -1) 
                stripedSqBkts = stripedSqBkts.trim()
            // let splitRegex = /([.*?])/g
            self.logSync('AFTER THE STRIPED HAS BEEN TRIMMED')
            self.logSync(stripedSqBkts)
            let operator = stripedSqBkts.substr(0,stripedSqBkts.indexOf(' '))
            let functionalStr = stripedSqBkts.substr(stripedSqBkts.indexOf(' ')+1)
            self.logSync('THE SPLITFUXINCONS')
            self.logSync(operator)
            self.logSync(functionalStr)
            let gotOperand = self.getOperand(operator) 
            let bakedFuxin = self.fieldFormat(functionalStr)  
            self.logSync(gotOperand)
            self.logSync(bakedFuxin)
            // throw new Error()
            condition = multiCon ?  `${oCon[0]} ${oCon[1]} ${gotOperand} ${bakedFuxin}`  :  `${oCon[0]} ${gotOperand} ${bakedFuxin}` 
            self.logSync('THE CONDITION IN FUXIN TEST')
            self.logSync(condition)




          }
        // }

      }

    }else{


      
        let oCon = conList.slice(0)

        self.logSync('THE O CON')
        self.logSync(oCon) 
        let firstStrItem = oCon[0].trim().toUpperCase()
        multiCon = (firstStrItem ===  'AND' || firstStrItem === 'OR' || firstStrItem === 'NOT') ? true : false     
        let operator = multiCon ? conList[2] : conList[1]

        self.logSync('THE MULTICON STATUS:::')
        self.logSync(multiCon)
        self.logSync(oCon) 
        operand = self.getOperand(operator)

      // switch(operator){

      //   case 'EQUALS' : 
      //     operand = '='
      //     break;
      //   case 'ISGREATEROREQUALS' : 
      //     operand = '>='
      //     break;
      //   case 'ISLESSOREQUALS' : 
      //     operand = '<='
      //     break;
      //   case 'ISLIKE' : 
      //     operand = 'LIKE'
      //     break;
      //   case 'ISIN' : 
      //   operand = 'IN'
      //   break;
      //   case 'ISREGEX' : 
      //     operand = 'REGEXP'
      //     break;
      //   case 'ISNOT' : 
      //   operand = 'NOT'
      //   break;
      //   case 'ISNOTNULL' : 
      //   operand = 'IS NOT NULL'
      //   break;
      //   case 'ISNULL' : 
      //   operand = 'IS NULL'
      //   break;
      //   default: 
      //     operand = '='
      // }

    leftoperand = multiCon ? conList[3] : conList[2] 
    leftoperand[0] === '[' 
        ? leftoperand = `'${leftoperand.slice(1,leftoperand.length -1)}'` 
        : leftoperand.indexOf('KEY::') >= 0 
            ? leftoperand = `${leftoperand.replace('KEY::','').trim()}`
            : leftoperand = `'${leftoperand}'`
      
    self.logSync('THE VALUE OF THE LEFFFFFT OPERAND')
    self.logSync(leftoperand)
    self.logSync(leftoperand.indexOf('KEY::'))

    }

    if(!conFuxin){

      match ? condition += `${conList[0]}` : multiCon ? condition += `${whiteSpace} ${conList[0]} ${conList[1]} ${operand} ${leftoperand}`
    : condition += `${conList[0]} ${operand} ${leftoperand}`

    }
    
    


  

  self.logSync('THE search FROM CONDITION')
  self.logSync(condition)
  return condition


  }
 
}


export const getOperand = function(operator) {

  let operand = ''

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

 return operand

}


export const conditionsConnector = function(c){

  let connector = {}

  self.logSync('THE INDEX OF GROUP:: IN CONDITIONS CONNECTOR')
  self.logSync(c.trim().indexOf('GROUP::'))
  self.logSync(c)

  if(c.trim().indexOf('GROUP::') > 0){

    self.logSync('THE INDEX OF GROUP IS AT ONE')


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
        self.logSync('THE CONVERTED SET OBJECT')
        self.logSync(modSet)

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
        // self.logSync('THE LENGTH OF S')
        // self.logSync(set.length)
        // self.logSync(i)

        
        // setString += i === set.length - 1 ? `${key} = "${value}"` : `${key} = "${value}", `


    })

   self.logSync('THE SETSTRINGS')
    self.logSync(setStrings)
   return setStrings
  
}