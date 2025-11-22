/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-mixed-spaces-and-tabs */
export const init = function () {
	this.adLog("Mysql has been initialised");
	this.listens({
		"mysql-data-request": this.handleMysqlDataRequest.bind(this),
	});
};
export const handleMysqlDataRequest = function (data) {
	const self = this;
	const pao = self.pao;

	if (
		!pao.pa_contains(data, ["conn", "table", "opi", "query", "outComehandler"])
	) {
		
		return data.outComehandler({ message: "Database operation failed" });
	} else {
		if (!pao.pa_isObject(data.conn)) {
			
		} else {
			if (!pao.pa_isString(data.table)) {
				
			} else {
				if (data.opi.trim() !== "deletemultiple" && !self[data.opi]) {
					

					return data.outComehandler({
						message: "The specified operation is not supported",
					});
				} else {
					if (data.opi === "insert") {
						data.opi = "insertOne";
						self[data.opi](data);
					} else if (data.opi === "find") {
						// data.opi = 'findOne'
						self[data.opi](data);
					} else if (data.opi === "updateOne") {
						data.opi = "updateOne";
						self[data.opi](data);
					} else if (data.opi === "transaction") {
						data.opi = "transaction";
						self[data.opi](data);
					} else if (data.opi === "procedure") {
						data.opi = "procedure";
						self[data.opi](data);
					} else if (data.opi === "join") {
						data.opi = "join";
						self[data.opi](data);
					} else if (data.opi === "search") {
						data.opi = "search";
						self[data.opi](data);
					} else if (data.opi === "remove") {
						data.opi = "remove";
						self[data.opi](data);
					} else if (data.opi === "updateandtake") {
						self[data.opi](data);
					} else if (data.opi === "insertandtake") {
						self[data.opi](data);
					} else if (data.opi === "deleteandtake") {
						self[data.opi](data);
					} else if (data.opi === "deletemultiple") {
						self.deleteandtake(data);
					} else {
						self[data.opi](data);
					}
				}
			}
		}
	}
};
export const insertOne = function (insert) {
	const self = this;
	const pao = self.pao;
	// eslint-disable-next-line no-empty
	if (!pao.pa_isObject(insert)) {
	} else {
		try {
			// self.infoSync('THE INSERT INSERT ONE')
			// self.infoSync(insert)
			let handler = insert.outComehandler;
			const conn = insert.conn;
			const connector = insert.connector;
			const query = insert.query;

			let sql = `INSERT INTO ?? (??) VALUES(?)`;
			let queryAttributes = [
				insert.table,
				["id", ...query.fields],
				[null, ...query.values],
			];
			sql = connector.format(sql, queryAttributes);

			//  let sql = `INSERT INTO ${data.table} SET ?`
			conn.query(sql, function (e, r) {
				if (e) return handler(e, null);
				r.user = insert.values;
				

				self.infoSync(handler);
				handler(null, r);
			});
		} catch (e) {
			self.infoSync(e);
			// eslint-disable-next-line no-undef
			handler(e, null);
		}
	}
};
export const insertMany = function (insert) {
	const self = this;
	const pao = self.pao;
	// eslint-disable-next-line no-undef, no-empty
	if (!pao.pa_isObject(data)) {
	} else {
		try {
			let sql = `INSERT INTO ?? (?) VALUES(?)`;
			let result = [];
			// eslint-disable-next-line no-unused-vars
			let fullImplement = true;
			insert.bulk.forEach((insertItem) => {
				let queryAttributes = [
					insertItem.table,
					[...insertItem.fields],
					[...insertItem.values],
				];
				// eslint-disable-next-line no-undef
				sql = connector.format(sql, queryAttributes);
				// eslint-disable-next-line no-undef
				conn.query(sql, insertItem, function (e, r) {
					if (e) {
						fullImplement = false;
					} else {
						result.push(r);
					}
				});
			});
			
			// eslint-disable-next-line no-undef
			handler(null, result);
		} catch (e) {
			// eslint-disable-next-line no-undef
			handler(e, null);
		}
	}
};
export const find = async function (findiks) {
	const self = this;
	const pao = self.pao;
	// self.infoSync('THE FINDIKS')
	// self.infoSync(findiks)
	// 
	// 
	// if(findiks.query.length > 0){ return findiks.outComehandler({message: 'ERROR IN MYSQL.FIND.METHOD'})}
	// 
	// 
	if (!pao.pa_isObject(findiks)) {
		throw new Error("Argument:: findiks, is required");
	} else {
		let conn = findiks.conn;
		let connector = findiks.connector;
		let handler = findiks.outComehandler;
		let query = [];
		let result = [];
		// self.infoSync('THE FUNCTIONS')
		// self.infoSync(connector.format)
		// self.infoSync(conn.query)
		conn.getConnection(async function (err, connection) {
			if (err)
				throw new Error("THERE WAS AN ERROR GETTING CONNECTION FROM THE POOL");
			let multiple = false;
			if (findiks.table.toUpperCase().trim() === "MULTIPLE") {
				multiple = true;
				query = findiks.query;
			} else {
				query.push(findiks.query);
			}
			for (let q = 0; q < query.length; q++) {
				// self.infoSync('INDEX')
				// self.infoSync(q)
				// self.infoSync('THE RESULT VALUE')
				// self.infoSync(result)
				let find = null;
				if (multiple) {
					find = { table: query[q].table, ...query[q] };
				} else {
					find = { table: findiks.table, ...query[q] };
					// find.opiks && Object.keys(find).length === 2 ? '' : !find.conditions ? find.conditions = [`${Object.keys(query)[0]} ISEQUALS ${query[Object.keys(query)[0]]}`]: ''
				}
				try {
					// self.infoSync('THE FIND')
					// self.infoSync(find)

					let sql = "";
					let attribs = null;
					let sqliks = self.queryTemplate(self.queryOptions(find), "select");
					//  
					//  
					attribs = [sqliks.attribs.from.table];
					sql = sqliks.statement;
					let queryAttributes = attribs;
					// 
					sql = connector.format(sql, queryAttributes);

					let currentResult = await self.findIterateItemPromise(
						connection,
						sql,
					);
					let isError = currentResult instanceof Array ? false : true;

					if (isError) {
						if (find.alias) {
							if (result instanceof Array) {
								result = { [find.alias]: { ERROR: currentResult.e } };
							} else {
								result[find.alias] = { ERROR: currentResult.e };
							}
						} else {
							result.push({ ERROR: currentResult.e });
						}
					} else if (currentResult.length === 0 && query.length === 1) {
						connection.release();
						findiks.select
							? handler(null, [], findiks.select)
							: handler(null, []);
						return;
					} else {
						if (find.alias) {
							if (result instanceof Array) {
								result = { [find.alias]: currentResult };
							} else {
								result[find.alias] = currentResult;
							}
						} else {
							result.push(currentResult);
						}
					}
					if (q === query.length - 1) {
						connection.release();
						if (result.length === 1 && result[0] instanceof Array)
							result = result[0];
						findiks.select
							? handler(null, result, findiks.select)
							: handler(null, result);
						return;
					}
					// self.infoSync('THE QUERYRESULT')
					// self.infoSync(queryRes)
					// conn.query(sql,function(e,r,f){
					//       // 
					//       // 
					//       // 
					//       // 
					//       // 
					//       // 
					//       // 
					//       // 
					//       // 
					//       // self.infoSync('THE rESULT HAS BEEN RETRIEVED')
					//       // self.infoSync(r)
					//       // self.infoSync(result)
					//       // self.infoSync(pao.pa_isArray(r))
					//       // self.infoSync(r.length)
					//       // self.infoSync(query.length)
					//       // self.infoSync(e)
					//       try{
					//       if(e) result.push(e)
					//       if(pao.pa_isArray(r) && r.length > 0 && query.length !== 1 ){
					//           if(find.alias){
					//             if(result instanceof Array){
					//               self.infoSync('THE RESULT TO BE CONVERTED TO OBJECT')
					//               self.infoSync(find.alias)
					//               result = {[find.alias]: [...r]}
					//               self.infoSync(result)
					//             }else{
					//               self.infoSync('THE RESULT OBJECT IS TYPE OBJECT')
					//               self.infoSync(result)
					//               result[find.alias] = [...r]
					//             }
					//           }else{
					//             r = [...r];
					//             result.push(r)
					//           }
					//         }else{
					//           // self.infoSync('the result is not an array')
					//           // self.infoSync(r)
					//           // if(result.length > 0){
					//           //   self.infoSync('THE RESULT IS GREATER THAN ZERO')
					//           // }else{
					//           // }
					//           result = r
					//         }
					//       if(q === query.length - 1){
					//         
					//         
					//         self.infoSync('THE CURRENT LAST RESULT')
					//          self.infoSync(q)
					//          self.infoSync(r)
					//         self.infoSync('THE LOOP IS COMPLETE WITH RESULTS')
					//         self.infoSync(result)
					//         findiks.select ?  handler(null,result,findiks.select) : handler(null,result)
					//         return
					//       }else{
					//          self.infoSync('THE CURRENT RESULT')
					//          self.infoSync(q)
					//          self.infoSync(r)
					//       }
					//     }catch(erra){
					//       self.infoSync('ther erra')
					//       self.infoSync(erra)
					//     }
					//   })
				} catch (e) {
					// 
					// 
					findiks.select ? handler(e, null, findiks.select) : handler(e, null);
					return;
				}
			}
		});
	}
};
export const findOne = async function (findiks) {
	const self = this;
	const pao = self.pao;

	if (!pao.pa_isObject(findiks)) {
		throw new Error("Argument:: findiks, is required");
	} else {
		let conn = findiks.conn;
		let connector = findiks.connector;
		let handler = findiks.outComehandler;
		let query = [];
		let result = [];
		let multiple = false;
		if (findiks.table.toUpperCase().trim() === "MULTIPLE") {
			multiple = true;
			query = findiks.query;
		} else {
			query.push(findiks.query);
		}
		for (let q = 0; q < query.length; q++) {
			let find = null;
			if (multiple) {
				find = { table: query[q].table, ...query[q] };
			} else {
				find = { table: findiks.table, ...query[q] };
				// find.opiks && Object.keys(find).length === 2 ? '' : !find.conditions ? find.conditions = [`${Object.keys(query)[0]} ISEQUALS ${query[Object.keys(query)[0]]}`]: ''
			}
			try {
				// self.infoSync('THE FIND')
				// self.infoSync(find)

				let sql = "";
				let attribs = null;
				let sqliks = self.queryTemplate(self.queryOptions(find), "select");
				//  
				//  
				attribs = [sqliks.attribs.from.table];
				sql = sqliks.statement;
				let queryAttributes = attribs;
				// 
				sql = connector.format(sql, queryAttributes);

				let currentResult = await self.findIterateItemPromise(conn, sql);
				let isError = currentResult instanceof Array ? false : true;

				if (isError) {
					if (find.alias) {
						if (result instanceof Array) {
							result = { [find.alias]: { ERROR: currentResult.e } };
						} else {
							result[find.alias] = { ERROR: currentResult.e };
						}
					} else {
						result.push({ ERROR: currentResult.e });
					}
				} else if (currentResult.length === 0 && query.length === 1) {
					// eslint-disable-next-line no-undef
					connection.release();
					findiks.select
						? handler(null, [], findiks.select)
						: handler(null, []);
					return;
				} else {
					if (find.alias) {
						if (result instanceof Array) {
							result = { [find.alias]: currentResult };
						} else {
							result[find.alias] = currentResult;
						}
					} else {
						result.push(currentResult);
					}
				}
				if (q === query.length - 1) {
					if (result.length === 1 && result[0] instanceof Array)
						result = result[0];
					findiks.select
						? handler(null, result, findiks.select)
						: handler(null, result);
					return;
				}
			} catch (e) {
				// 
				// 
				// eslint-disable-next-line no-undef
				connection.release();
				findiks.select ? handler(e, null, findiks.select) : handler(e, null);
				return;
			}
		}
	}
};
export const findIterateItemPromise = function (conn, sql) {
	const self = this;
	return new Promise((resolve, reject) => {
		conn.query(sql, function (e, r) {
			if (e) return reject({ FIND_ITERATE_ERROR: true, e: e });
			return resolve(r);
			// if(pao.pa_isArray(r) && r.length > 0 && query.length !== 1 ){
			//     if(find.alias){
			//       if(result instanceof Array){
			//         self.infoSync('THE RESULT TO BE CONVERTED TO OBJECT')
			//         self.infoSync(find.alias)
			//         result = {[find.alias]: [...r]}
			//         self.infoSync(result)
			//       }else{
			//         self.infoSync('THE RESULT OBJECT IS TYPE OBJECT')
			//         self.infoSync(result)
			//         result[find.alias] = [...r]
			//       }
			//     }else{
			//       r = [...r];
			//       result.push(r)
			//     }
			//   }else{
			//     result = r
			//   }
		});
	});
};
export const updateOne = function (updatiks) {
	const self = this;
	
	
	self.infoSync("THE UPDATIKS");
	self.infoSync(updatiks.update);
	const pao = self.pao;
	let conn = updatiks.conn;
	let connector = updatiks.connector;
	let handler = updatiks.outComehandler;
	let update = { table: updatiks.table, ...updatiks.query };
	//
	// eslint-disable-next-line no-empty
	if (!pao.pa_isObject(updatiks)) {
	} else {
		try {
			let sql = "";
			let attribs = null;
			let sqliks = self.queryTemplate(self.queryOptions(update), "update");
			
			
			attribs = [sqliks.attribs.from.table];
			sql = sqliks.statement;
			let queryAttributes = attribs;
			
			
			// self.infoSync('THE CONNECTION METHODS')
			// self.infoSync(conn)
			sql = connector.format(sql, queryAttributes);
			
			self.infoSync("THE UPDATE SQL");
			self.infoSync(sql);
			conn.query(sql, function (e, r) {
				if (e) handler(e, null);
				updatiks.update ? handler(null, r, updatiks.update) : handler(null, r);
			});
		} catch (e) {
			handler(e, null);
		}
	}
};
export const updateMany = function (update) {
	const self = this;
	const pao = self.pao;
	// eslint-disable-next-line no-empty, no-undef
	if (!pao.pa_isObject(data)) {
	} else {
		try {
			let sql = `UPDATE TABLE ?? SET ?? WHERE ??`;
			let result = [];
			// eslint-disable-next-line no-unused-vars
			let fullImplement = true;
			update.bulk.forEach((updateItem) => {
				let queryAttributes = [
					update.table,
					[...update.fields],
					update.condition,
				];
				// eslint-disable-next-line no-undef
				sql = connector.format(sql, queryAttributes);
				// eslint-disable-next-line no-undef
				conn.query(sql, updateItem, function (e, r) {
					if (e) {
						fullImplement = false;
					} else {
						result.push(r);
					}
				});
			});
			
			// eslint-disable-next-line no-undef
			handler(null, result);
		} catch (e) {
			// eslint-disable-next-line no-undef
			handler(e, null);
		}
	}
};
export const updateandtake = async function (updateAndTake) {
	const self = this;
	
	
	const pao = self.pao;
	let conn = updateAndTake.conn;
	let connector = updateAndTake.connector;
	let handler = updateAndTake.outComehandler;
	let updateTake = updateAndTake.query;
	//
	// eslint-disable-next-line no-empty
	if (!pao.pa_isObject(updateAndTake)) {
	} else {
		try {
			let options = await self.searchOptions(updateTake, true);
			self
				.multiTableUpdate(options, conn, connector)
				.then((updated) => {
					if (updated.changedRows > 0) {
						self
							.take(options, conn, updateTake.conditions, connector)
							.then((taken) => {
								// updated.changedRows > 0 ? handler(null,{updated: true,taken: taken}) : ''
								handler(null, { updated: true, taken: taken });
							})
							.catch((e) => {
								handler(e, null);
							});
					} else {
						// handler({updated: false,taken: taken})
						
						
						self
							.take(options, conn, updateTake.conditions, connector)
							.then((taken) => {
								handler(null, { updated: false, taken: taken });
							})
							.catch((e) => {
								handler(e, null);
							});
						//
						// {
						//   tables:['jo_user','jo_pao.pa_wiLogin'],
						//   joins: 2,
						//   joinPoints: ['jo_user.id EQUALS jo_pao.pa_wiLogin.id'],
						//   conditions: [`jo_user.id EQUALS 1`,`AND jo_pao.pa_wiLogin.u_id EQUALS 1`],
						//   opiks: ['field.first_name.as[firstName]','field.last_name.as[lastName]',
						//   set: [{first_name: 'Surprise',last_name: 'Mashele'},{password: '1234567'}],
						//   takeFrom: 'jo_user'
						//  }
					}
				})
				.catch((e) => {
					handler(e, null);
				});
		} catch (e) {
			handler(e, null);
		}
	}
};
export const insertandtake = async function (insertAndTake) {
	const self = this;
	
	
	// self.infoSync('THe insertAnd Take')
	// self.infoSync(insertAndTake)
	const pao = self.pao;
	let conn = insertAndTake.conn;
	let handler = insertAndTake.outComehandler;
	let insert = insertAndTake.query.insert;
	let takeQuery = insertAndTake.query.take;
	let connector = insertAndTake.connector;
	//
	// eslint-disable-next-line no-empty
	if (!pao.pa_isObject(insertAndTake)) {
	} else {
		try {
			let insertTakeHandle = async function (error = null, inserted = null) {
				await 
				await 
				await 
				await 
				!takeQuery.conditions
					? (takeQuery.conditions = [`id ISEQUAL ${inserted.insertId}`])
					: "";
				await 
				let take = {};
				take.conn = conn;
				take.query = takeQuery;
				take.connector = connector;
				// eslint-disable-next-line no-unused-vars
				take.outComehandler = (e = null, taken) => {
					handler(null, { inserted: inserted, taken: taken });
				};
				self.infoSync("INSERTANDTAKE TAKING");
				self.infoSync(take);
				self.search(take);
				// throw new Error('MADE UP ERROR')
				//  self.SEARCH(take)
			};
			insert.outComehandler = insertTakeHandle.bind(self);
			insert.conn = conn;
			insert.connector = connector;
			insert.query = {
				fields: [...insert.fields],
				values: [...insert.values],
			};
			self.insertOne(insert);
		} catch (e) {
			handler(e, null);
		}
	}
};
export const deleteandtake = async function (deleteAndTake) {
	const self = this;
	
	
	const pao = self.pao;
	let conn = deleteAndTake.conn;
	let handler = deleteAndTake.outComehandler;
	let connector = deleteAndTake.connector;
	let remove = null;
	let takeQuery = null;
	if (deleteAndTake.query.remove) {
		remove = deleteAndTake.query.remove;
		takeQuery = deleteAndTake.query.take;
	}
	//
	// eslint-disable-next-line no-empty
	if (!pao.pa_isObject(deleteAndTake)) {
	} else {
		try {
			let deleteTakeHandle = async function (error = null, deleted = null) {
				await 
				await 
				await 
				if (!takeQuery) {
					handler(null, { deleted: deleted });
				} else {
					!takeQuery.conditions
						? (takeQuery.conditions = remove.conditions)
						: "";
					await 
					let take = {};
					take.conn = conn;
					take.connector = connector;
					take.query = takeQuery;
					// eslint-disable-next-line no-unused-vars
					take.outComehandler = (e = null, taken) => {
						
						
						
						handler(null, { deleted: deleted, taken: taken });
					};
					self.search(take);
				}
				// throw new Error('MADE UP ERROR')
				//  self.SEARCH(take)
			};
			if (!remove) remove = deleteAndTake.query;
			remove.outComehandler = deleteTakeHandle.bind(self);
			remove.conn = conn;
			remove.connector = connector;
			self.removeJoin(remove);
		} catch (e) {
			handler(e, null);
		}
	}
};
export const updateJoinTemplate = function (options) {
	// `UPDATE ??
	// SET ${options.set}
	// WHERE ${options.from.condition}
	// `
	const self = this;
	
	
	let sqlAttribs = {};
	sqlAttribs.attribs = { from: options.from, tables: options.tables };
	switch (options.length) {
		case 2:
			sqlAttribs.statement = `UPDATE ??
                            JOIN ${options.tables[0]}
                              ON ${options.joinPoints[0]}
                            SET ${options.set}
                            WHERE ${options.from.condition}
                            `;
			break;
		case 3:
			sqlAttribs.statement = `UPDATE ??,??,??
                              JOIN ${options.tables[0]}
                                ON ${options.conditions[0]}
                              JOIN ${options.tables[1]}
                                ON ${options.conditions[1]}
                              SET ${options.set}
                              WHERE ${options.from.condition}
                              
                              `;
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
                            
                            `;
			break;
		default:
			sqlAttribs.statement = `UPDATE ??
                            SET ${options.set}
                            WHERE ${options.from.condition}
                            
                            `;
	}
	return sqlAttribs;
};
export const multiTableUpdate = async function (options, conn, connector) {
	const self = this;
	const pao = self.pao;
	const contains = pao.pa_contains;
	return new Promise((resolve, reject) => {
		try {
			// 
			// 
			// attribs = [sqliks.attribs.from.table]
			let sql = "";
			let attribs = null;
			let sqliks = self.updateJoinTemplate(options);
			
			
			contains(sqliks.attribs, "tables") && sqliks.attribs.tables
				? (attribs = [sqliks.attribs.from.table, ...sqliks.attribs.tables])
				: (attribs = [sqliks.attribs.from.table]);
			sql = sqliks.statement;
			let queryAttributes = attribs;
			
			
			sql = connector.format(sql, queryAttributes);
			
			conn.query(sql, function (e, r) {
				if (e) return reject(e);
				resolve(r);
			});
		} catch (e) {
			reject(e);
		}
	});
};
export const take = async function (options, conn, conditions, connector) {
	const self = this;
	
	
	return new Promise((resolve, reject) => {
		if (options.takeFrom) {
			let takeFrom = options.takeFrom;
			
			
			if (takeFrom.condition) {
				
				options.from.condition = takeFrom.condition;
				takeFrom.tables.length > 1
					? (options.length = takeFrom.tables.length)
					: "";
				options.length
					? takeFrom.joinPoints
						? (options.joinPoints = takeFrom.joinPoints)
						: ""
					: "";
				self
					.takeSql(options, conn, connector)
					.then((resultset) => {
						resolve(resultset);
					})
					.catch((e) => {
						reject(e);
					});
			} else {
				
				
				delete options.length;
				options.from.condition = self.searchConditionsFormat([conditions[0]]);
				// options.tables = options.tables[0]
				self
					.takeSql(options, conn, connector)
					.then((resultset) => {
						resolve(resultset);
					})
					.catch((e) => {
						reject(e);
					});
			}
		} else {
			
			self
				.takeSql(options, conn, connector)
				.then((resultset) => {
					resolve(resultset);
				})
				.catch((e) => {
					reject(e);
				});
		}
	});
};
export const takeSql = function (takeOptions, conn, connector) {
	const self = this;
	const pao = self.pao;
	const contains = pao.pa_contains;
	
	
	return new Promise(function (resolve, reject) {
		// do a thing, possibly async, then…
		
		let sql = "";
		let attribs = null;
		let sqliks = self.searchStatement(takeOptions);
		
		
		contains(sqliks.attribs, "tables")
			? (attribs = [sqliks.attribs.from.table, ...sqliks.attribs.tables])
			: (attribs = [sqliks.attribs.from.table]);
		sql = sqliks.statement;
		let queryAttributes = attribs;
		
		
		// 
		sql = connector.format(sql, queryAttributes);
		
		conn.query(sql, function (e, r) {
			if (e) {
				
				
				reject(e);
			} else {
				
				
				
				resolve(r);
			}
		});
	});
};
export const removeJoin = function (removiks) {
	const self = this;
	const pao = self.pao;
	const contains = pao.pa_contains;
	let conn = removiks.conn;
	let connector = removiks.connector;
	let handler = removiks.outComehandler;
	// let remove = {table: removiks.table,...removiks.query}
	// eslint-disable-next-line no-empty
	if (!pao.pa_isObject(removiks)) {
	} else {
		try {
			let sql = "";
			let attribs = null;
			let sqliks = self.queryTemplate(self.searchOptions(removiks), "delete");
			
			
			contains(sqliks.attribs, "tables")
				? (attribs = [...sqliks.attribs.tables, sqliks.attribs.from.table])
				: (attribs = [sqliks.attribs.from.table]);
			sql = sqliks.statement;
			let queryAttributes = attribs;
			
			
			sql = connector.format(sql, queryAttributes);
			
			conn.query(sql, function (e, r) {
				if (e) return handler(e, null);
				handler(null, r);
			});
		} catch (e) {
			handler(e, null);
		}
	}
};
export const remove = function (removiks) {
	const self = this;
	const pao = self.pao;
	let conn = removiks.conn;
	let connector = removiks.connector;
	let handler = removiks.outComehandler;
	let remove = { table: removiks.table, ...removiks.query };
	// eslint-disable-next-line no-empty
	if (!pao.pa_isObject(removiks)) {
	} else {
		try {
			let sql = "";
			let attribs = null;
			let sqliks = self.queryTemplate(self.queryOptions(remove), "delete");
			
			
			attribs = [sqliks.attribs.from.table];
			sql = sqliks.statement;
			let queryAttributes = attribs;
			
			
			sql = connector.format(sql, queryAttributes);
			
			conn.query(sql, function (e, r) {
				if (e) handler(e, null);
				return removiks.delete
					? handler(null, r, removiks.delete)
					: handler(null, r);
				// handler(null,r)
			});
		} catch (e) {
			handler(e, null);
		}
	}
};
export const queryOptions = function (i) {
	const self = this;
	
	
	let pao = self.pao;
	let contains = pao.pa_contains;
	// let rest = {
	// 	conditions: [`country_id EQUALS 202`],
	// 	opiks: ['field.id.as[stateId]','field.state_name.as[state]','field.country_id.as[countryId]'],
	// 	sort: 'order[state_name].asc',
	// 	range: '2,5',
	// 	take: 5
	//   }
	let options = {};
	i.conditions
		? (options.from = {
				table: i.table,
				condition: self.searchConditionsFormat(i.conditions),
		  })
		: (options.from = { table: i.table });
	
	
	contains(i, ["returnFields", "opiks"])
		? (options.fields = self.searchFieldsFormat(i.opiks, i.returnFields))
		: contains(i, "opiks")
		? (options.fields = self.searchFieldsFormat(i.opiks))
		: contains(i, "returnFields")
		? i.returnFields.length === 1 && i.returnFields[0].trim() === "all"
			? (options.fields = "*")
			: (options.fields = i.returnFields)
		: (options.fields = "*");
	contains(i, "take") ? (options.take = i.take) : "";
	contains(i, "range") ? (options.range = i.range) : "";
	contains(i, "sort") ? (options.sort = i.sort) : "";
	contains(i, "set") ? (options.set = self.set(i.set)) : "";
	contains(i, "takeFrom")
		? i.takeFrom.conditions
			? ((options.takeFrom = i.takeFrom),
			  (options.takeFrom.condition = self.searchConditionsFormat(
					i.takeFrom.conditions,
			  )))
			: (options.takeFrom = i.takeFrom)
		: "";
	
	
	return options;
};
export const queryTemplate = function (options, type) {
	const self = this;
	const pao = self.pao;
	const contains = pao.pa_contains;
	
	
	if (type === "select") {
		let sqlAttribs = {};
		sqlAttribs.attribs = { from: options.from };
		let limit = " ";
		let sort = options.sort ? self.sort(options.sort) : " ";
		options.take
			? (limit = self.limit(options.take, "take"))
			: options.range
			? (limit = self.limit(options.range, "range"))
			: " ";
		if (contains(options.from, "condition")) {
			sqlAttribs.statement = `SELECT ${options.fields}
                              FROM  ??
                              WHERE ${options.from.condition}
                              ${sort}
                              ${limit}

                              `;
		} else {
			sqlAttribs.statement = `SELECT ${options.fields}
                              FROM  ??
                              ${sort}
                              ${limit}
                              `;
		}
		return sqlAttribs;
	} else if (type === "update") {
		let sqlAttribs = {};
		sqlAttribs.attribs = { from: options.from };
		sqlAttribs.statement = `UPDATE ??
                            SET ${options.set}
                            WHERE ${options.from.condition}
                            `;
		return sqlAttribs;
	} else if (type === "delete") {
		if (options.length) {
			let sqlAttribs = {};
			sqlAttribs.attribs = { from: options.from, tables: options.tables };
			options.tables.unshift(options.from.table);
			
			
			
			
			switch (options.length) {
				case 3:
					sqlAttribs.statement = `DELETE ??,??,??
                                  FROM ??
                                  JOIN ${options.tables[1]}
                                    ON ${options.joinPoints[0]}
                                  JOIN ${options.tables[2]}
                                    ON ${options.joinPoints[1]}
                                  WHERE ${options.from.condition}
                                  
                                  `;
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
                                
                                `;
					break;
				default:
					sqlAttribs.statement = `DELETE ??,??
                                  FROM ??
                                  JOIN ${options.tables[1]}
                                    ON ${options.joinPoints[0]}
                                  WHERE ${options.from.condition}
                                  
                                  `;
			}
			
			
			return sqlAttribs;
		} else {
			let sqlAttribs = {};
			sqlAttribs.attribs = { from: options.from };
			sqlAttribs.statement = `DELETE
                                FROM ??
                                `;
			options.from.condition
				? (sqlAttribs.statement += ` WHERE ${options.from.condition}`)
				: "";
			return sqlAttribs;
		}
	}
};
export const transaction = function (data) {
	const self = this;
	if (typeof data.query === "function") {
		data.query();
	} else {
		self.TRANSACTION(
			data.query,
			data.conn,
			data.outComehandler,
			data.connector,
		);
	}
};
export const procedure = function (data) {
	const self = this;
	
	if (typeof data.query === "function") {
		data.query();
	} else {
		
		//  
		//  
		self.PROCEDURE(data.query, data.conn, data.outComehandler, data.connector);
	}
};
export const join = function (data) {
	const self = this;
	
	if (typeof data.query === "function") {
		data.query();
	} else {
		
		//  
		//  
		self.JOIN(data.query, data.conn, data.outComehandler);
	}
};
export const search = function (data) {
	const self = this;
	
	if (typeof data.query === "function") {
		data.query();
	} else {
		
		//  
		//  
		self.SEARCH(data.query, data.conn, data.outComehandler, data.connector);
	}
};
export const TRANSACTION = function (
	collections,
	conn,
	handler = null,
	connector,
) {
	const self = this;
	const pao = self.pao;
	let collectionsIds = [];
	let breakOut = false;
	for (let c = 0; c < collections.length; c++) {
		let i = collections[c];
		let fields = null;
		let sources = null;
		let own = null;
		if (!pao.pa_contains(i, "fields")) {
			handler("Required collection/table field missing");
			break;
		} else {
			if (pao.pa_contains(i.fields, "tables")) {
				sources = i.fields.tables;
				own = i.fields.own;
			}
		}
		sources ? (fields = self.combineFields(sources, own, collectionsIds)) : "";
		fields ? (i.fields = fields) : "";
		self
			.insert(i, conn, connector)
			.then((insert) => {
				collectionsIds.push(insert);
			})
			.catch((failedInsert) => {
				self.rollback(collectionsIds);
				handler(failedInsert, null);
				breakOut = true;
			});
		if (breakOut) break;
		if (c === collections.length - 1) {
			
			handler("Transaction Operation sucessful");
		}
	}
};
export const PROCEDURE = async function (
	collections,
	conn,
	handler = null,
	connector,
) {
	const self = this;
	const pao = self.pao;
	
	
	
	//
	let collectionsIds = [];
	let breakOut = false;
	conn.getConnection(async (err, connection) => {
		self.infoSync(err);
		if (err)
			throw new Error("There was an error getting a connection from the pool");
		for (let c = 0; c < collections.length; c++) {
			let i = collections[c];
			let fields = null;
			let sources = null;
			let own = null;
			let action = null;
			let dictionary = null;
			self.infoSync("tHE FIELDS AND Tables from afar");
			self.infoSync(i);
			self.infoSync(i.fields);
			self.infoSync(i.tables);
			if (!pao.pa_contains(i, "fields") && i.action && i.action !== "delete") {
				handler("Required collection/table field missing");
				break;
			} else {
				if (pao.pa_contains(i.fields, "tables")) {
					
					sources = i.fields.tables;
					own = i.fields.own;
				} else if (pao.pa_contains(i.fields, "own")) {
					if (i.fields.own instanceof Array) {
						let dicts = i.fields.own.map((doc) => {
							return {
								...doc,
							};
						});
						i.fields = dicts;
					}
				}
			}
			sources
				? (fields = self.combineFields(sources, own, collectionsIds))
				: "";
			fields ? (i.fields = fields) : "";
			i.action ? (action = i.action) : (action = "insert");
			i.dictionary ? (dictionary = true) : dictionary;
			switch (action) {
				case "insert":
					{
						await self
							.insert(i, connection, connector)
							.then((insert) => {
								collectionsIds.push(insert);
							})
							.catch((failedInsert) => {
								handler(failedInsert, null);
								breakOut = true;
							});
					}
					break;
				case "update":
					{
						await self
							.procedureUpdate(i, connection, connector)
							.then((update) => {
								self.infoSync("THE UPDATED");
								collectionsIds.push(update);
							})
							.catch((failedUpdate) => {
								handler(failedUpdate, null);
								breakOut = true;
							});
					}
					break;
				case "delete":
					{
						await self
							.procedureDelete(i, connection, connector)
							.then((deleted) => {
								self.infoSync("THE DELETED");
								collectionsIds.push(deleted);
							})
							.catch((failedDelete) => {
								handler(failedDelete, null);
								breakOut = true;
							});
					}
					break;
				case "select":
					{
						await self
							.procedureSelect(i, connection, connector)
							.then((selected) => {
								self.infoSync("THE DELETED");
								collectionsIds.push(selected);
							})
							.catch((failedSelect) => {
								handler(failedSelect, null);
								breakOut = true;
							});
					}
					break;
				default:
					throw new Error("No valid table procedure action has been defined");
			}
			// await self.insert(i,conn)
			// .then((insert)=>{
			//     collectionsIds.push(insert)
			// })
			// .catch((failedInsert)=>{
			//       handler(failedInsert,null)
			//       breakOut = true
			// })
			if (breakOut) break;
			if (c === collections.length - 1) {
				
				
				connection.release();
				if (collectionsIds.length > 0) {
					
					
					let savedData = null;
					self.infoSync("THE COLLECTIONS");
					self.infoSync(collectionsIds);
					self.infoSync(collectionsIds[0]);
					// handler(null,{user:{username: collectionsIds[0].fields.email}})
					if (collectionsIds[0].isDelete) {
						savedData = collectionsIds.map((sd) => {
							return {
								documentID: sd.collectionAlt,
								document: { ...sd.fields },
								isDeleted: sd.isDeleted,
							};
						});
						return handler(null, { user: savedData });
					} else if (
						collectionsIds[0].isUpdate ||
						collectionsIds[0].collectionAlt
					) {
						savedData = collectionsIds.map((sd) => {
							return {
								documentID: sd.collectionAlt,
								document: { ...sd.fields },
								isUpdated: sd.isUpdated,
							};
						});
						return handler(null, { user: savedData });
					} else {
						return handler(null, { user: collectionsIds[0].fields });
					}
				} else {
					return handler("An insert has went wrong");
				}
			}
		}
	});
};
export const insert = function (inset, conn, connector) {
	let self = this;
	let pao = pao;
	return new Promise(function (resolve, reject) {
		// do a thing, possibly async, then…
		
		self.infoSync("THE INSET");
		self.infoSync(inset);
		let sql = "";
		let queryAttributes = "";
		let escaped = [];
		let sqlValues = ``;
		let sqlKeys = `(`;
		!inset.dictionary
			? ((sql = `INSERT INTO ?? SET ?`),
			  (queryAttributes = [inset.name, inset.fields]),
			  (sql = connector.format(sql, queryAttributes)))
			: // eslint-disable-next-line no-unused-vars
			  ((escaped = inset.fields.map((di, i) => {
					let values = Object.entries(di);
					let escapedValues = {};
					sqlValues += `(`;
					values.forEach((v, ii) => {
						i === 0
							? ii === values.length - 1
								? (sqlKeys += `${v[0]}`)
								: (sqlKeys += `${v[0]},`)
							: "";
						escapedValues[v[0]] = conn.escape(v[1]);
						if (ii === values.length - 1) {
							//  i === 0 ? sqlKeys += `${v[0]}` : ''
							sqlValues += `${escapedValues[v[0]]}`;
						} else {
							sqlValues += `${escapedValues[v[0]]},`;
						}
					});
					if (i === inset.fields.length - 1) {
						inset.fields.length === 1 ? (sqlKeys += `)`) : "";
						sqlValues += `)`;
					} else {
						i === 0 ? (sqlKeys += `)`) : "";
						sqlValues += `),`;
					}
					return escapedValues;
			  })),
			  (sql = `INSERT INTO ${inset.name} ${sqlKeys} VALUES ${sqlValues}`));
		//     let sql = `INSERT INTO ?? SET ?`;
		// let queryAttributes = [inset.name,inset.fields];
		// sql = connector.format(sql, queryAttributes);
		//  let sql = `INSERT INTO ${data.table} SET ?`
		self.infoSync("THE SQL");
		self.infoSync(sql);
		conn.query(sql, function (e, r) {
			if (e) {
				
				reject(e);
			} else {
				//{table: 'jo_job_alert',opiks: ['fuxin.count.options[*].as[alertsCount]'],conditions:[`u_id EQUALS ${uid}`]}
				self.findOne({
					conn: conn,
					table: inset.name,
					connector: connector,
					//query:{user:{id: r.insertId}},
					query: {
						returnFields: ["*"],
						conditions: [`id EQUALS ${r.insertId}`],
					},
					outComehandler: (e = null, r = null, data = null) => {
						let insert = {};
						if (e) {
							
							
							
							insert.error = e;
							insert.lastInsert = data.query.user.id;
							insert.fields = null;
							insert.collection = data.table;
							insert.collectionAlt = inset.altName ? inset.altName : "";
							
							
							resolve(insert);
						} else {
							self.infoSync("THE RESULT FROM FIND");
							self.infoSync(r);
							self.infoSync(r[0].email);
							self.infoSync(inset.name);
							let foundUser = r[0];
							insert.lastInsert = foundUser.id;
							insert.fields = { ...foundUser };
							insert.collection = inset.name;
							insert.collectionAlt = inset.altName ? inset.altName : "";
							// throw new Error()
							
							
							resolve(insert);
						}
					},
				});
			}
		});
	});
};
export const procedureUpdate = function (update, conn, connector) {
	const self = this;
	// self.infoSync('THE UPDATE IN PROCEDUREUPDATE')
	// self.infoSync(update)
	// let sets = Object.entries(update.fields)
	// let set = sets.map((f,i)=>{})
	return new Promise(function (resolve) {
		self.updateOne({
			conn,
			connector,
			update: update,
			query: {
				set: [
					...Object.entries(update.fields).map((f) => {
						return { [f[0]]: f[1] };
					}),
				],
				conditions: [update.condition],
				table: update.name,
			},
			outComehandler: (e = null, r = null, data = null) => {
				self.infoSync("THE UPDATE DATA");
				self.infoSync(data);
				let update = {};
				if (e) {
					
					
					
					self.infoSync("THE ERROR");
					self.infoSync(e);
					update.error = e;
					update.fields = null;
					update.collection = data.name;
					update.collectionAlt = data.altName ? data.altName : "";
					
					
					resolve(update);
				} else {
					self.infoSync("THE SUCCESS");
					self.infoSync(r);
					// self.infoSync(data)
					if (
						(r.affectedRows && r.affectedRows > 0) ||
						(r.changedRows && r.changedRows > 0)
					) {
						self.infoSync(data.updateKeyID);
						update.lastInsert = data.updateKey;
						update.fields =
							data.updateKey && data.updateKeyID
								? { ...data.fields, [data.updateKeyID]: data.updateKey }
								: { ...data.fields };
						update.collection = data.name;
						update.collectionAlt = data.altName ? data.altName : "";
						update.affectedRows = r.affectedRows;
						update.isUpdate = true;
						update.isUpdated = true;
					} else {
						update.lastInsert = data.updateKey;
						// update.fields = {...data.fields,[data.updateKeyID]: data.updateKey}
						update.fields =
							data.updateKey && data.updateKeyID
								? { ...data.fields, [data.updateKeyID]: data.updateKey }
								: { ...data.fields };
						update.collection = data.name;
						update.collectionAlt = data.altName ? data.altName : "";
						update.affectedRows = 0;
						update.isUpdate = true;
						update.isUpdated = false;
					}
					
					
					resolve(update);
				}
			},
		});
	});
};
export const procedureDelete = function (toDelete, conn, connector) {
	const self = this;
	// self.infoSync('THE UPDATE IN PROCEDUREUPDATE')
	// self.infoSync(update)
	// let sets = Object.entries(update.fields)
	// let set = sets.map((f,i)=>{})
	return new Promise(function (resolve) {
		self.remove({
			conn,
			connector,
			delete: toDelete,
			query: { conditions: [toDelete.condition], table: toDelete.name },
			outComehandler: (e = null, r = null, data = null) => {
				let update = {};
				if (e) {
					
					
					
					self.infoSync("THE ERROR");
					self.infoSync(e);
					update.error = e;
					update.fields = null;
					update.collection = data.name;
					update.collectionAlt = data.altName ? data.altName : "";
					
					
					resolve(update);
				} else {
					self.infoSync("THE DELETE SUCCESS");
					self.infoSync(r);
					// self.infoSync(data)
					if (r.affectedRows && r.affectedRows > 0) {
						// update.fields = {...data.fields}
						update.collection = data.name;
						update.collectionAlt = data.altName ? data.altName : "";
						update.fields = { ...data.fields };
						update.isDelete = true;
						update.isDeleted = true;
					} else {
						// update.fields = {...data.fields,[data.updateKeyID]: data.updateKey}
						// update.fields = {...data.fields}
						update.collection = data.name;
						update.collectionAlt = data.altName ? data.altName : "";
						update.isDelete = true;
						update.isDeleted = false;
					}
					
					
					resolve(update);
				}
			},
		});
	});
};
export const procedureSelect = function (select, conn, connector) {
	const self = this;
	// self.infoSync('THE UPDATE IN PROCEDUREUPDATE')
	// self.infoSync(update)
	// let sets = Object.entries(update.fields)
	// let set = sets.map((f,i)=>{})
	return new Promise(function (resolve) {
		self.find({
			conn: conn,
			select: select,
			table: select.name,
			connector: connector,
			//query:{user:{id: r.insertId}},
			query: { returnFields: select.fields, conditions: select.conditions },
			outComehandler: (e = null, r = null, data = null) => {
				let select = {};
				if (e) {
					
					
					
					select.error = e;
					select.lastInsert = data.query.user.id;
					select.fields = null;
					select.collection = data.table;
					
					
					resolve(insert);
				} else {
					self.infoSync("THE RESULT FROM FIND");
					self.infoSync(r);
					self.infoSync(r[0].email);
					self.infoSync(select.name);
					let foundUser = r[0];
					select.lastInsert = foundUser.id;
					select.fields = { ...foundUser };
					select.collection = select.name;
					// throw new Error()
					
					
					resolve(select);
				}
			},
		});
	});
};
export const JOIN = async function (join, conn, handler = null) {
	const self = this;
	self
		.joinExek(join, conn)
		.then((result) => {
			
			
			handler(null, result);
		})
		.catch((failedRequest) => {
			
			
			handler(failedRequest, null);
		});
};
export const SEARCH = async function (search, conn, handler = null, connector) {
	const self = this;
	const pao = self.pao;
	
	
	if (!pao.pa_contains(search, "batch")) {
		self
			.searchExek(search, conn, connector)
			.then((result) => {
				
				// 
				handler(null, result);
			})
			.catch((failedRequest) => {
				
				
				handler(failedRequest, null);
			});
	} else {
		let resultSet = [];
		let batch = search.search;
		for (let s = 0; s < batch.length; s++) {
			await self
				.searchExek(batch[s], conn, connector)
				.then((result) => {
					
					// 
					resultSet.push(result);
					if (s === batch.length - 1) {
						
						// 
						handler(null, resultSet);
					}
					// handler(null,result)
				})
				.catch((failedRequest) => {
					
					
					resultSet.push({
						item: s,
						errorMessage: `Item of ${s} position has failed`,
						error: failedRequest,
					});
					// handler(failedRequest,null)
				});
		}
	}
};
export const combineFields = function (tables, own, ids) {
	const self = this;
	let fields = {};
	
	self.infoSync("THE TABLES");
	self.infoSync(tables);
	self.infoSync(ids);
	tables.forEach((v) => {
		for (let co = 0; co < ids.length; co++) {
			if (ids[co].collection === v.name) {
				v.values.forEach((vv) => {
					
					
					let fieldValuePair = vv.split(".");
					
					
					fields[fieldValuePair[1]] = ids[co].fields[fieldValuePair[0]];
				});
				break;
			}
		}
	});
	let keys = Object.keys(own);

	if (own instanceof Array) {
		let dictFields = own.map((docu) => {
			return {
				...fields,
				...docu,
			};
		});

		return dictFields;
	} else {
		let keys = Object.keys(own);

		keys.forEach((k) => {
			fields[k] = own[k];
		});

		return fields;
	}
};
export const rollback = function (rolbacks) {
	const self = this;
	rolbacks.forEach((roll) => {
		// eslint-disable-next-line no-undef
		self.deleteOne({ id: roll.lastInsert }, conn);
	});
};
export const joinExek = function (join, conn, connector) {
	let self = this;
	return new Promise(function (resolve, reject) {
		// do a thing, possibly async, then…

		let options = {
			fields: join.returnFields,
			from: {
				table: join.tables[0],
				condition: self.joinConditionsFormat(join.conditions),
			},
			joinPoints: self.joinConditionsFormat(join.joinPoints, "ON"),
			tables: join.tables.splice(1, join.tables.length),
			type: join.type.toUpperCase(),
			length: join.joins,
		};
		let sql = self.joinStatement(options);
		let queryAttributes = [options.from.table, options.tables[0]];

		sql = connector.format(sql, queryAttributes);

		conn.query(sql, function (e, r) {
			if (e) {
				reject(e);
			} else {
				resolve(r[0]);
			}
		});
	});
};
export const joinConditionsFormat = function (conditions, type = null) {
	const self = this;

	if (type) {
		let cons = conditions;
		let condition = [];
		cons.forEach((con) => {
			let conList = con.trim().split(" ");
			let operand = "=";
			condition.push(`${conList[0]} ${operand} ${conList[2]}`);
		});

		return condition;
	} else {
		let cons = conditions;
		let condition = "";
		cons.forEach((con) => {
			let conList = con.trim().split(" ");

			let operand = "";
			switch (conList[1]) {
				case "EQUALS":
					operand = "=";
					break;
				case "ISGREATEROREQUALS":
					operand = ">=";
					break;
				case "ISLESSOREQUALS":
					operand = "<=";
					break;
				default:
					operand = "=";
			}
			condition += `${conList[0]} ${operand} '${conList[2]}'`;
		});

		return condition.trim();
	}
};
export const joinStatement = function (options) {
	const self = this;

	switch (options.length) {
		case 3:
			return `SELECT ${options.fields}
               FROM ${options.from.table}
               JOIN ${options.tables[0]}
                  ON ${options.conditions[0]}
               JOIN options.tables[1]
                  ON ${options.conditions[1]}
               WHERE ${options.from.condition}
               
               `;
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
               
               `;
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
               
               `;
		case 6:
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
               JOIN options.tables[4]
                 ON ${options.conditions[4]}
               WHERE ${options.from.condition}
               
               `;
		case 7:
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
               JOIN options.tables[4]
                  ON ${options.conditions[4]}
                JOIN options.tables[5]
                  ON ${options.conditions[5]}
               WHERE ${options.from.condition}
               
               `;
		case 8:
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
               JOIN options.tables[4]
                  ON ${options.conditions[4]}
                JOIN options.tables[5]
                  ON ${options.conditions[5]}
                JOIN options.tables[6]
                  ON ${options.conditions[6]}
               WHERE ${options.from.condition}
               
               `;
		default:
			return `SELECT ${options.fields}
               FROM  ??
               JOIN  ${options.tables[0]}
                  ON ${options.joinPoints[0]}
               WHERE ${options.from.condition}
               `;
	}
};
export const searchExek = function (search, conn, connector) {
	const self = this;
	const contains = self.pao.pa_contains;

	return new Promise(function (resolve, reject) {
		// do a thing, possibly async, then…

		let sql = "";
		let attribs = null;
		let sqliks = self.searchStatement(self.searchOptions(search));

		contains(sqliks.attribs, "tables")
			? (attribs = [sqliks.attribs.from.table, ...sqliks.attribs.tables])
			: (attribs = [sqliks.attribs.from.table]);
		sql = sqliks.statement;
		let queryAttributes = attribs;

		sql = connector.format(sql, queryAttributes);
		

		conn.query(sql, function (e, r) {
			if (e) {
				
				reject(e);
			} else {
				resolve(r);
			}
		});
	});
};
export const searchConditionsFormat = function (conditions, type = null) {
	const self = this;

	if (type) {
		let condition = self.parseFormatCondition(conditions, type);

		return condition;
	} else {
		let cons = conditions;
		let condition = "";
		cons.forEach((con) => {
			if (con.indexOf("GROUP::") >= 0) {
				condition += self.parseGroup(con);
			} else {
				condition += self.parseFormatCondition(con);
			}
			/*
            
            let conList = con.trim().split(' ')
            
            
            let operand = ''
            let leftoperand = ''
            let multiCon = false
            let match = false
        
            if(conList[0].trim() === 'MATCH' || conList[1].trim() === 'MATCH'){
        
              
              if(conList.indexOf('AGAINST') > 0 && conList.length >= 5){
        
        
                let oCon = conList.slice(0)
        
                
                
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
		});

		return condition.trim();
	}
};
export const searchStatement = function (options) {
	const self = this;

	const contains = self.pao.pa_contains;
	if (!options) return null;
	if (contains(options, "length")) {
		let sqlAttribs = {};
		sqlAttribs.attribs = { from: options.from, tables: options.tables };

		let limit = " ";
		let sort = options.sort ? self.sort(options.sort) : " ";
		options.take
			? (limit = self.limit(options.take, "take"))
			: options.range
			? (limit = self.limit(options.range, "range"))
			: " ";
		switch (options.length) {
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
                
                `;
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
                `;
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
                `;
				break;
			default:
				sqlAttribs.statement = `SELECT ${options.fields}
                FROM  ??
                JOIN  ${options.tables[0]}
                  ON ${options.joinPoints[0]}
                WHERE ${options.from.condition}
                ${sort}
                ${limit}
              `;
		}
		return sqlAttribs;
	} else {
		let sqlAttribs = {};
		sqlAttribs.attribs = { from: options.from };
		let limit = " ";
		let sort = options.sort ? self.sort(options.sort) : " ";
		options.take
			? (limit = self.limit(options.take, "take"))
			: options.range
			? (limit = self.limit(options.range, "range"))
			: " ";
		if (contains(options.from, "condition")) {
			sqlAttribs.statement = `SELECT ${options.fields}
              FROM  ??
              WHERE ${options.from.condition}
              ${sort}
              ${limit}
              `;
		} else {
			sqlAttribs.statement = `SELECT ${options.fields}
                              FROM  ??
                              ${sort}
                              ${limit}
                              `;
		}
		return sqlAttribs;
	}
};
export const searchOptions = function (i, multiSet = false) {
	const self = this;
	let pao = self.pao;
	let contains = pao.pa_contains;
	let setTables = "";
	setTables = multiSet ? [...i.tables] : "";

	if (contains(i, ["joins", "conditions", "joinPoints"])) {
		let options = {};
		options.from = {
			table: i.tables[0],
			condition: self.searchConditionsFormat(i.conditions),
		};
		options.joinPoints = i.joinPoints
			? self.searchConditionsFormat(i.joinPoints, "ON")
			: null;
		options.length = i.tables.length;
		options.tables = i.tables.splice(1, i.tables.length);
		//  contains(i,['returnFields','opiks']) ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) : ''
		//  contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
		//  contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''
		contains(i, ["returnFields", "opiks"])
			? (options.fields = self.searchFieldsFormat(i.opiks, i.returnFields))
			: contains(i, "opiks")
			? (options.fields = self.searchFieldsFormat(i.opiks))
			: contains(i, "returnFields")
			? i.returnFields.length === 1 && i.returnFields[0].trim() === "all"
				? (options.fields = "*")
				: (options.fields = i.returnFields)
			: "";
		contains(i, "type") ? (options.type = i.type) : "";
		contains(i, "take") ? (options.take = i.take) : "";
		contains(i, "range") ? (options.range = i.range) : "";
		contains(i, "soundex") ? (options.soundex = i.soundex) : "";
		contains(i, "sort") ? (options.sort = i.sort) : "";
		contains(i, "set")
			? (options.set = multiSet ? self.set(i.set, setTables) : self.set(i.set))
			: "";
		//  contains(i,'takeFrom') ? options.takeFrom = i.takeFrom : ''
		contains(i, "takeFrom")
			? i.takeFrom.conditions
				? ((options.takeFrom = i.takeFrom),
				  (options.takeFrom.condition = self.searchConditionsFormat(
						i.takeFrom.conditions,
				  )))
				: (options.takeFrom = i.takeFrom)
			: "";
		return options;
	} else if (contains(i, ["conditions"])) {
		let options = {};
		options.from = {
			table: i.tables[0],
			condition: self.searchConditionsFormat(i.conditions),
		};
		// contains(i,['returnFields','opiks']) ? options.fields = self.searchFieldsFormat(i.opiks,i.returnFields) : ''
		// contains(i,'returnFields') ? i.returnFields.length === 1 && i.returnFields[0].trim() === 'all' ? options.fields='*' : options.fields= i.returnFields : ''
		// contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''
		contains(i, ["returnFields", "opiks"])
			? (options.fields = self.searchFieldsFormat(i.opiks, i.returnFields))
			: contains(i, "opiks")
			? (options.fields = self.searchFieldsFormat(i.opiks))
			: contains(i, "returnFields")
			? i.returnFields.length === 1 && i.returnFields[0].trim() === "all"
				? (options.fields = "*")
				: (options.fields = i.returnFields)
			: "";
		contains(i, "type") ? (options.type = i.type) : "";
		contains(i, "take") ? (options.take = i.take) : "";
		contains(i, "range") ? (options.range = i.range) : "";
		contains(i, "soundex") ? (options.soundex = i.soundex) : "";
		contains(i, "sort") ? (options.sort = i.sort) : "";
		contains(i, "set")
			? (options.set = multiSet ? self.set(i.set, setTables) : self.set(i.set))
			: "";
		contains(i, "takeFrom")
			? i.takeFrom.conditions
				? ((options.takeFrom = i.takeFrom),
				  (options.takeFrom.condition = self.searchConditionsFormat(
						i.takeFrom.conditions,
				  )))
				: (options.takeFrom = i.takeFrom)
			: "";
		return options;
	} else if (contains(i, "tables") && i.tables instanceof Array) {
		let options = {};
		options.from = { table: i.tables[0] };
		contains(i, ["returnFields", "opiks"])
			? (options.fields = self.searchFieldsFormat(i.opiks, i.returnFields))
			: contains(i, "opiks")
			? (options.fields = self.searchFieldsFormat(i.opiks))
			: contains(i, "returnFields")
			? i.returnFields.length === 1 && i.returnFields[0].trim() === "all"
				? (options.fields = "*")
				: (options.fields = i.returnFields)
			: "";
		// contains(i,'opiks') ?  options.fields = self.searchFieldsFormat(i.opiks) : ''
		contains(i, "type") ? (options.type = i.type) : "";
		contains(i, "take") ? (options.take = i.take) : "";
		contains(i, "range") ? (options.range = i.range) : "";
		contains(i, "soundex") ? (options.soundex = i.soundex) : "";
		contains(i, "sort") ? (options.sort = i.sort) : "";
		contains(i, "set")
			? (options.set = multiSet ? self.set(i.set, setTables) : self.set(i.set))
			: "";
		contains(i, "takeFrom")
			? i.takeFrom.conditions
				? ((options.takeFrom = i.takeFrom),
				  (options.takeFrom.condition = self.searchConditionsFormat(
						i.takeFrom.conditions,
				  )))
				: (options.takeFrom = i.takeFrom)
			: "";
		return options;
	} else {
		return null;
	}
};
export const searchFieldsFormat = function (fields, rFields = null) {
	const self = this;

	let fis = fields;
	let keyword = "";
	let otherFields = rFields ? rFields.join(",") : "";
	let all = "";
	let fieldstatement = "";
	let multiFields = [];
	let allFields = otherFields.indexOf("all") >= 0;
	let lastCondition = false;

	for (let fi = 0; fi < fis.length; fi++) {
		if (fis[fi].indexOf("fuxin") >= 0 || fis[fi].indexOf("field") >= 0) {
			multiFields.push(true);
		}
		if (multiFields.length > 1) {
			break;
		}
	}
	fis.forEach((f, i) => {
		let formated = self.fieldFormat(f);
		if (formated instanceof Object) {
			keyword = formated.value.toUpperCase();
		} else {
			if (i === fis.length - 1) {
				lastCondition = true;
			}
			fieldstatement += allFields
				? multiFields && i !== fis.length - 1
					? `${formated},`
					: formated
				: lastCondition && rFields === null
				? `${formated}`
				: `${formated},`;
		}
	});
	allFields === true ? (all = "*,") : "";
	return allFields
		? `${all} ${keyword} ${fieldstatement}`
		: `${all} ${keyword} ${fieldstatement} ${otherFields}`;
};
export const fieldFormat = function (field, from = null) {
	const self = this;

	//  let splitFieldRegx = /\.(?![^\[]]*\]])/
	let nestedIntFuxin = "";
	let last =
		field.lastIndexOf(".as") >= 0 ? field.lastIndexOf(".as") : field.length;
	field.indexOf(".options[fuxin") >= 0
		? (nestedIntFuxin = field.slice(field.indexOf(".options[fuxin"), last))
		: "";

	nestedIntFuxin.trim() !== ""
		? (field = field.substr(0, field.indexOf(nestedIntFuxin)))
		: "";
	// nestedIntFuxin.trim() !== '' ? field =  : ''
	// let splicedArray = conList.splice(2)
	// 
	// 
	// 
	// conList[2] = splicedArray.join(' ');
	// 
	// 
	//  let fieldList = field.trim().split('.')
	//  fieldList.length > 3 ? fieldList[3].indexOf('as[') < 0 ? fieldList[2] = fieldList.splice(2).join(' ') : '' : ''
	let fieldList = field.trim().split(".");
	nestedIntFuxin.trim() !== "" ? fieldList.push(nestedIntFuxin) : "";

	let fieldstatement = null;
	//fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]
	let as =
		fieldList[0] === "fuxin"
			? fieldList.length > 3
				? `AS ${self.options(`${fieldList[3]}`, "as")}`
				: " "
			: " ";
	
	
	switch (fieldList[0]) {
		case "keyword":
			fieldstatement = from
				? fieldList[1].toUpperCase()
				: { statement: "keyword", value: fieldList[1].toUpperCase() };
			break;
		case "fuxin":
			fieldstatement = ` ${fieldList[1].toUpperCase()}(${self.options(
				`${fieldList[2]}`,
				"option",
			)}) ${as} `;
			break;
		case "field":
			if (fieldList.length === 3)
				fieldstatement = `${fieldList[1]} AS ${self.options(
					fieldList[2],
					"as",
				)}`;
			break;
		default:
			fieldstatement = "";
	}
	return fieldstatement.trim();
};
export const options = function (option, type = "") {
	const self = this;

	if (option !== "undefined") {
		let stripedOption = option.slice(
			option.indexOf("[") + 1,
			option.lastIndexOf("]"),
		);

		if (type === "as") {
			return `${stripedOption}`;
		} else if (type === "option") {
			let args = stripedOption.split(",");
			if (args instanceof Array && args.length > 1) {
				if (args[0].indexOf("keyword") >= 0) {
					return self.fieldFormat(args[0], true);
				} else if (args[0].indexOf("fuxin") >= 0) {
					if (args[1]) {
						return `${self.fieldFormat(args[0])},${args[1].trim()}`;
					} else {
						return self.fieldFormat(args[0]);
					}
				} else {
					return `${stripedOption}`;
				}
			} else {
				return args.join(",");
			}
		}
	} else {
		return "";
	}
};
export const sort = function (sort) {
	const self = this;

	let sortArgs = sort.split(".");
	let sortFields = sort.slice(sort.indexOf("[") + 1, sort.lastIndexOf("]"));
	let sortStatement = "";
	if (sortArgs[0].indexOf("order") >= 0) {
		if (sortArgs.length > 1) {
			if (sortArgs[1].toUpperCase() === "DESC") {
				sortStatement = `ORDER BY ${sortFields} DESC`;
			} else {
				sortStatement = `ORDER BY ${sortFields}`;
			}
		} else {
			sortStatement = `ORDER BY ${sortFields}`;
		}
	} else if (sortArgs[0].indexOf("group") >= 0) {
		if (sortArgs.length > 1) {
			if (sortArgs[1].toUpperCase() === "DESC") {
				sortStatement = `GROUP BY ${sortFields} DESC`;
			} else {
				sortStatement = `GROUP BY ${sortFields} ASC`;
			}
		} else {
			sortStatement = `GROUP BY ${sortFields} ASC`;
		}
	}
	return sortStatement;
};
export const limit = function (limit, type = null) {
	let limitStatement = "";
	if (type === "take") {
		limitStatement = `LIMIT ${limit} OFFSET 0`;
	} else if (type === "range") {
		let ranges = limit.split(",");
		let offset = ranges[0];
		let count = ranges[1];
		limitStatement = `LIMIT ${count} OFFSET ${offset}`;
	}
	return limitStatement;
};
export const parseGroup = function (con, level = 1) {
	const self = this;
	const pao = self.pao;
	let isObject = pao.pa_isObject;
	//AND GROUP::2 START created_at FUXIN [ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]]
	let fullCon = "";
	let connector = "";
	let res = self.conditionsConnector(con);

	if (isObject(res)) {
		con = res.condixion;
		connector = res.connector;
	}
	if (con.trim().indexOf("GROUP::") === 0) {
		//let groupRegx = /GROUP::/
		let exStr = con.replace("GROUP::", "").trim();
		let groupLen = 0;
		let startStr = "";
		let conStr = "";

		if (typeof parseInt(exStr[0]) === "number") {
			// eslint-disable-next-line no-unused-vars
			groupLen = parseInt(exStr[0]);
			startStr = exStr.slice(1).trim();
			if (startStr.indexOf("START") === 0 || startStr.indexOf("$") === 0) {
				conStr = startStr.replace("START", "").trim();

				let groupCons = "";
				//  let groupL1Cons = ''
				//  let groupL2Cons = ''
				//  let groupL3Cons = ''
				let grouped = [];

				if (level === 1) {
					groupCons = conStr.split(";");

					grouped = groupCons.map((c) => {
						//  self.conditionsConnector()
						if (c.indexOf("GROUP::") >= 0) {
							return self.parseGroup(c, 2);
						} else {
							return self.parseFormatCondition(c);
						}
					});
				} else if (level === 2) {
					groupCons = conStr.split(",");

					grouped = groupCons.map((c) => {
						// c = self.conditionsConnector(c)
						if (c.indexOf("GROUP::") >= 0) {
							return self.parseGroup(c, 3);
						} else {
							return self.parseFormatCondition(c);
						}
					});
				} else if (level === 3) {
					groupCons = conStr.split("|");
					grouped = groupCons.map((c) => {
						return self.parseFormatCondition(c);
					});
				}

				fullCon = `${connector} (${grouped.join(" ")})`;
				// eslint-disable-next-line no-empty
			} else {
			}
		}
	}

	return fullCon;
};
export const parseFormatCondition = function (con, type = null) {
	const self = this;
	if (type) {
		let cons = con;
		let condition = [];
		cons.forEach((kon) => {
			// let conList = kon.trim().split(' ')
			let conList = kon.trim().match(/(\[[^\]]+\]|\S+)/g);
			let operand = "=";
			condition.push(`${conList[0]} ${operand} ${conList[2]}`);
		});

		return condition;
	} else {
		let condition = "";

		// let conList = con.trim().split(' ')
		// let conList = con.trim().match(/(?:"^\s\[]+|"[^"]*")+/g)
		let conList = con.trim().match(/(\[[^\]]+\]|\S+)/g);

		let operand = "";
		let leftoperand = "";
		let multiCon = false;
		let match = false;
		let conFuxin = false;
		let whiteSpace = " ";
		if (
			conList[0].trim() === "MATCH" ||
			conList[1].trim() === "MATCH" ||
			conList[1].trim() === "FUXIN" ||
			conList[2].trim() === "FUXIN"
		) {
			if (conList.indexOf("AGAINST") > 0 && conList.length >= 5) {
				let oCon = conList.slice(0);

				multiCon = oCon[0].trim().toUpperCase() !== "MATCH" ? true : false;
				let matchFields = "";
				let matchKeys = "";
				if (multiCon) {
					matchFields = oCon[2].trim();
					matchKeys = oCon[4].trim();
				} else {
					matchFields = oCon[1].trim();
					matchKeys = oCon[3].trim();
				}
				matchFields[0] === "["
					? (matchFields = matchFields.slice(1, matchFields.length - 1))
					: "";
				matchKeys[0] === "["
					? (matchKeys = matchKeys.slice(1, matchKeys.length - 1))
					: "";

				let op = "";
				operand = multiCon ? oCon[3].trim() : oCon[2].trim();
				let mode = multiCon ? oCon[5] : oCon[4];
				switch (mode) {
					case "BOOLEAN":
						op = `AGAINST ("${matchKeys}"" IN BOOLEAN MODE) `;
						break;
					case "QUERY":
						op = `AGAINST ("${matchKeys}" IN QUERY EXPRESSION MODE) `;
						break;
					default:
						op = `AGAINST ("${matchKeys}" IN NATURAL LANGUAGE MODE) `;
				}
				conList[0] = multiCon
					? `${oCon[0]} MATCH (${matchFields}) ${op}`
					: `MATCH (${matchFields}) ${op}`;
				//  leftoperand = ` ${op}`
				match = true;
			} else {
				//[ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]]
				//created_at FUXIN [ISGREATEROREQUALS fuxin.date_sub.options[fuxin.now,INTERVAL ${intExp} ${intUnit}]]
				let oCon = conList.slice(0);
				conFuxin = true;

				multiCon = oCon[1].trim().toUpperCase() !== "FUXIN" ? true : false;
				let fuxinIndex = multiCon ? 3 : 2;
				let splicedFuxinArr = oCon.splice(fuxinIndex);
				oCon.push(splicedFuxinArr.join(" "));

				if (oCon[fuxinIndex].indexOf("[") >= 0) {
					let stripedSqBkts = oCon[fuxinIndex].slice(
						1,
						oCon[fuxinIndex].length - 1,
					);
					stripedSqBkts = stripedSqBkts.trim();
					// let splitRegex = /([.*?])/g

					let operator = stripedSqBkts.substr(0, stripedSqBkts.indexOf(" "));
					let functionalStr = stripedSqBkts.substr(
						stripedSqBkts.indexOf(" ") + 1,
					);

					let gotOperand = self.getOperand(operator);
					let bakedFuxin = self.fieldFormat(functionalStr);

					// throw new Error()
					condition = multiCon
						? `${oCon[0]} ${oCon[1]} ${gotOperand} ${bakedFuxin}`
						: `${oCon[0]} ${gotOperand} ${bakedFuxin}`;
				}
				// }
			}
		} else {
			let oCon = conList.slice(0);

			let firstStrItem = oCon[0].trim().toUpperCase();
			multiCon =
				firstStrItem === "AND" ||
				firstStrItem === "OR" ||
				firstStrItem === "NOT"
					? true
					: false;
			let operator = multiCon ? conList[2] : conList[1];

			operand = self.getOperand(operator);
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
			leftoperand = multiCon ? conList[3] : conList[2];
			leftoperand[0] === "["
				? (leftoperand = `'${leftoperand.slice(1, leftoperand.length - 1)}'`)
				: leftoperand.indexOf("KEY::") >= 0
				? (leftoperand = `${leftoperand.replace("KEY::", "").trim()}`)
				: (leftoperand = `'${leftoperand}'`);
		}
		if (!conFuxin) {
			match
				? (condition += `${conList[0]}`)
				: multiCon
				? (condition += `${whiteSpace} ${conList[0]} ${conList[1]} ${operand} ${leftoperand}`)
				: (condition += `${conList[0]} ${operand} ${leftoperand}`);
		}

		return condition;
	}
};
export const getOperand = function (operator) {
	let operand = "";
	switch (operator) {
		case "EQUALS":
			operand = "=";
			break;
		case "ISGREATEROREQUALS":
			operand = ">=";
			break;
		case "ISLESSOREQUALS":
			operand = "<=";
			break;
		case "ISLIKE":
			operand = "LIKE";
			break;
		case "ISIN":
			operand = "IN";
			break;
		case "ISREGEX":
			operand = "REGEXP";
			break;
		case "ISNOT":
			operand = "NOT";
			break;
		case "ISNOTNULL":
			operand = "IS NOT NULL";
			break;
		case "ISNULL":
			operand = "IS NULL";
			break;
		default:
			operand = "=";
	}
	return operand;
};
export const conditionsConnector = function (c) {
	const self = this;
	let connector = {};

	if (c.trim().indexOf("GROUP::") > 0) {
		
		if (c.trim().indexOf("AND") === 0) {
			connector.connector = ` AND`;
			connector.condixion = c.replace("AND", "").trim();
		} else if (c.trim().indexOf("OR") === 0) {
			connector.connector = ` OR`;
			connector.condixion = c.replace("OR", "").trim();
		} else if (c.trim().indexOf("NOT") === 0) {
			connector.connector = ` NOT`;
			connector.condixion = c.replace("NOT", "").trim();
		}
		return connector;
	} else {
		return c;
	}
};
export const set = function (set, multiSets = false) {
	const self = this;
	const pao = self.pao;
	const objectToArray = pao.pa_objectToArray;

	let setStrings = "";
	set.forEach((s, i) => {
		let setString = "";
		let modSet = objectToArray(s, true);

		modSet.forEach((col, pos) => {
			multiSets
				? (setString +=
						pos === modSet.length - 1
							? `${multiSets[i]}.${col.key} = "${col.value}"`
							: `${multiSets[i]}.${col.key} = "${col.value}", `)
				: (setString +=
						pos === modSet.length - 1
							? `${col.key} = "${col.value}"`
							: `${col.key} = "${col.value}", `);
		});
		setStrings += i === set.length - 1 ? `${setString}` : `${setString}, `;
		// let key = ''
		// let value = ''
		// key = Object.keys(s)[0]
		// value = s[Object.keys(s)[0]]
		// 
		// 
		// 
		// setString += i === set.length - 1 ? `${key} = "${value}"` : `${key} = "${value}", `
	});

	return setStrings;
};
