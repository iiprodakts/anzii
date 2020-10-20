/** @license Anzii 
 * anzii.production.js
 *
 * Copyright (c) IIprodakts PTY (LTD), and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// DEPENDECIES 

const os     = require('os');
const util   = require('util');
const async  = require('async');
const extend = require('node.extend');
const fs     = require('fs');
const path   = require('path');
const uuid   = require('uuid');

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



		Library 	 : Pillar
		Version 	 : 1.0.0
		Author		 : Anzii organisation
		Website		 : www.anzii.org
		Date Created : 23/08/2019


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/




module.exports = {


EMAIL: '',
PASSWORD: '',  
PROMPT: process.argv || [],


p_getWorkingFolder: function(){

    return process.cwd()

},

p_o_freeze: function(o){ 

    if(!(o instanceof Object)) return null 
        
        return Object.freeze(o)
            


},
p_clone: function(o){ 

if(!(o instanceof Object)) return null 
    
    return JSON.parse(JSON.stringify(o))
        


},

/**
 * Performs a deep merge and returns the result.  <b>NOTE:</b> DO NOT ATTEMPT
 * TO MERGE PROPERTIES THAT REFERENCE OTHER PROPERTIES.  This could have
 * unintended side-effects as well as cause errors due to circular dependencies.
 * @static
 * @method deepMerge
 * @param {Object} from
 * @param {Object} to
 * @return {Object}
 */
p_deepMerge : function(from, to) {
    return extend(true, to, from);
},

/**
 * Checks if the supplied object is an errof. If the object is an error the
 * function will throw the error.
 * @static
 * @method ane
 * @param {Object} obj The object to check
 */
p_ane : function(obj){
	if (util.isError(obj)) {
		throw obj;
	}
},

/**
 * Initializes an array with the specified number of values.  The value at each
 * index can be static or a function may be provided.  In the event that a
 * function is provided the function will be called for each item to be placed
 * into the array.  The return value of the function will be placed into the
 * array.
 * @static
 * @method initArray
 * @param {Integer} cnt The length of the array to create
 * @param {Function|String|Number} val The value to initialize each index of
 * the array
 * @return {Array} The initialized array
 */
p_initArray : function(cnt, val) {
    var v = [];
    var isFunc = this.p_isFunction(val);
    for(var i = 0; i < cnt; i++) {
        v.push(isFunc ? val(i) : val);
    }
    return v;
},

/**
 * Escapes a regular expression.
 * @deprecated since 0.7.1 Will be removed in 1.0.  Use RegExpUtils
 * @static
 * @method escapeRegExp
 * @param {String} The expression to escape
 * @return {String} Escaped regular expression.
 */
p_escapeRegExp : function(str) {
	return RegExpUtils.escape(str);
},

/**
 * Merges the properties from the first parameter into the second. This modifies
 * the second parameter instead of creating a new object.
 *
 * @method merge
 * @param {Object} from
 * @param {Object} to
 * @return {Object} The 'to' variable
 */
p_merge : function(from, to) {
    p_forEach(from, function(val, propName) {
        to[propName] = val;
    });
    return to;
},

/**
 * Creates an object that has both the properties of "a" and "b".  When both
 * objects have a property with the same name, "b"'s value will be preserved.
 * @static
 * @method union
 * @return {Object} The union of properties from both a and b.
 */
p_union : function(a, b) {
	var union = {}
	p_merge(a, union);
	p_merge(b, union);
	return union;
},

/**
 * Creates a set of tasks that can be executed by the "async" module.
 * @static
 * @method getTasks
 * @param {Array} iterable The array of items to build tasks for
 * @param {Function} getTaskFunction The function that creates and returns the
 * task to be executed.
 * @example
 * <code>
 * var items = ['apple', 'orange'];
 * var tasks = util.getTasks(items, function(items, i) {
 *     return function(callback) {
 *         console.log(items[i]);
 *         callback(null, null);
 *     },
 * });
 * async.series(tasks, util.cb);
 * <code>
 */
p_getTasks : function (iterable, getTaskFunction) {
	var tasks = [];
	for (var i = 0; i < iterable.length; i++) {
		tasks.push(getTaskFunction(iterable, i));
	}
	return tasks;
},

/**
 * Wraps a function in an anonymous function.  The wrapper function will call
 * the wrapped function with the provided context.  This comes in handy when
 * creating your own task arrays in conjunction with the async function when a
 * prototype function needs to be called with a specific context.
 * @static
 * @method wrapTask
 * @param {*} context The value of "this" for the function to be called
 * @param {Function} func The function to be executed
 * @param {Array} [argArray] The arguments to be supplied to the func parameter
 * when executed.
 * @return {Function}
 */
p_wrapTask : function(context, func, argArray) {
    if (!util.isArray(argArray)) {
        argArray = [];
    }
    return function(callback) {
        argArray.push(callback);
        func.apply(context, argArray);
    }
},

/**
 * Wraps a task in a context as well as a function to mark the start and end time.  The result of the task will be
 * provided in the callback as the "result" property of the result object.  The time of execution can be found as the
 * "time" property.
 * @static
 * @method wrapTimedTask
 * @param {*} context The value of "this" for the function to be called
 * @param {Function} func The function to be executed
 * @param {string} [name] The task's name
 * @param {Array} [argArray] The arguments to be supplied to the func parameter
 * when executed.
 * @return {Function}
 */
p_wrapTimedTask : function(context, func, name, argArray) {
    if (p_isString(argArray)) {
        name = argArray;
        argArray = [];
    }
    var task = p_wrapTask(context, func, argArray);
    return function(callback) {
        var start = Date.now();
        task(function(err, result) {
            callback(err, {
                result: result,
                time: Date.now() - start,
                start: start,
                name: name
            });
        });
    }
},

/**
 * Provides an implementation of for each that accepts an array or object.
 * @static
 * @method forEach
 * @param {Object|Array} iterable
 * @param {Function} handler A function that accepts 4 parameters.  The value
 * of the current property or index.  The current index (property name if object).  The iterable.
 * Finally, the numerical index if the iterable is an object.
 */
p_forEach : function(iterable, handler) {

    var internalHandler;
    var internalIterable;
    if (util.isArray(iterable)) {
        internalHandler = handler;
        internalIterable = iterable;
    }
    else if (p_isObject(iterable)) {

        internalIterable = Object.getOwnPropertyNames(iterable);
        internalHandler = function(propName, i) {
            handler(iterable[propName], propName, iterable, i);
        }
    }
    else {
        return false;
    }

    //execute native foreach on interable
    internalIterable.forEach(internalHandler);
},

/**
 * Hashes an array
 * @static
 * @method arrayToHash
 * @param {Array} array      The array to hash
 * @param {*} [defaultVal:true] Default value if the hashing fails
 * @return {Object} Hash
 */
p_arrayToHash : function(array, defaultVal) {
	if (!util.isArray(array)) {
		return null;
	}

    //set the default value
    if(p_isNullOrUndefined(defaultVal)) {
        defaultVal = true;
    }
	var hash = {}
	for(var i = 0; i < array.length; i++) {
		if (this.p_isFunction(defaultVal)) {
			hash[defaultVal(array, i)] = array[i];
		}
		else {
			hash[array[i]] = defaultVal;
		}
	}
	return hash;
},

p_unikify: function (array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
},

/**
 * Converts an array to an object.
 * @static
 * @method arrayToObj
 * @param {Array} array The array of items to transform from an array to an
 * object
 * @param {String|Function} keyFieldOrTransform When this field is a string it
 * is expected that the array contains objects and that the objects contain a
 * property that the string represents.  The value of that field will be used
 * as the property name in the new object.  When this parameter is a function
 * it is passed two parameters: the array being operated on and the index of
 * the current item.  It is expected that the function will return a value
 * representing the key in the new object.
 * @param {String|Function} [valFieldOrTransform] When this value is a string
 * it is expected that the array contains objects and that the objects contain
 * a property that the string represents.  The value of that field will be used
 * as the property value in the new object.  When this parameter is a function
 * it is passed two parameters: the array being operated on and the index of
 * the current item.  It is expected that the function return a value
 * representing the value of the derived property for that item.
 * @return {Object} The converted array.
 */
p_arrayToObj : function(array, keyFieldOrTransform, valFieldOrTransform) {
    if (!util.isArray(array)) {
		return null;
	}

    var keyIsString = p_isString(keyFieldOrTransform);
    var keyIsFunc   = this.p_isFunction(keyFieldOrTransform);
    if (!keyIsString && !keyIsFunc) {
        return null;
    }

    var valIsString = p_isString(valFieldOrTransform);
    var valIsFunc   = this.p_isFunction(valFieldOrTransform);
    if (!valIsString && !valIsFunc) {
        valFieldOrTransform = null;
    }

    var obj = {}
    for (var i = 0; i < array.length; i++) {

        var item = array[i];
        var key  = keyIsString ? item[keyFieldOrTransform] : keyFieldOrTransform(array, i);

        if (valIsString) {
            obj[key] = item[valFieldOrTransform];
        }
        else if (valIsFunc) {
            obj[key] = valFieldOrTransform(array, i);
        }
        else {
            obj[key] = item;
        }
    }
    return obj;
},

/**
 * Converts an array of objects into a hash where the key the value of the
 * specified property. If multiple objects in the array have the same value for
 * the specified value then the last one found will be kept.
 * @static
 * @method objArrayToHash
 * @param {Array} array The array to convert
 * @param {String} hashProp The property who's value will be used as the key
 * for each object in the array.
 * @return {Object} A hash of the values in the array
 */
p_objArrayToHash : function(array, hashProp) {
    if (!util.isArray(array)) {
		return null;
	}

    var hash = {}
	for(var i = 0; i < array.length; i++) {
        hash[array[i][hashProp]] = array[i];
	}
	return hash;
},

/**
 * Converts a hash to an array. When provided, the hashKeyProp will be the
 * property name of each object in the array that holds the hash key.
 * @static
 * @method hashToArray
 * @param {Object} obj The object to convert
 * @param {String} [hashKeyProp] The property name that will hold the hash key.
 * @return {Array} An array of each property value in the hash.
 */
p_hashToArray : function(obj, hashKeyProp) {
	if (!p_isObject(obj)) {
		return null;
	}

    var doHashKeyTransform = p_isString(hashKeyProp);
    return Object.keys(obj).reduce(function(prev, prop) {
        prev.push(obj[prop]);
        if (doHashKeyTransform) {
            obj[prop][hashKeyProp] = prop;
        }
        return prev;
    }, []);
},

/**
 * Inverts a hash
 * @static
 * @method invertHash
 * @param {Object} obj Hash object
 * @return {Object} Inverted hash
 */
p_invertHash : function(obj) {
	if (!p_isObject(obj)) {
		return null;
	}

	var new_obj = {}
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			new_obj[obj[prop]] = prop;
		}
	}
	return new_obj;
},

/**
 * Clones an array
 * @static
 * @method copyArray
 * @param {Array} array
 * @return {Array} Cloned array
 */
p_copyArray : function(array) {
	if (!util.isArray(array)) {
		return null;
	}

	var clone = [];
	for (var i = 0; i < array.length; i++) {
		clone.push(array[i]);
	}
	return clone;
},

p_dedupeArray : function(array) {
    var hash = p_arrayToHash(array);
    return Object.keys(hash);
},

/**
 * Pushes all of one array's values into another
 * @static
 * @method arrayPushAll
 * @param {Array} from
 * @param {Array} to
 * @return {Boolean} FALSE when the parameters are not Arrays
 */
p_arrayPushAll : function(from, to) {
	if (!util.isArray(from) || !util.isArray(to)) {
		return false;
	}

	for (var i = 0; i < from.length; i++) {
		to.push(from[i]);
	}
},



/**
 * Creates a unique Id
 * @static
 * @method uniqueId
 * @return {String} Unique Id Object
 */
p_generateUniqueID : function(){
	return uuid.v4();
},

/**
 * Tests if a value is an object
 * @static
 * @method isObject
 * @param {*} value
 * @return {Boolean}
 */
p_isObject : function(value) {
    const that = this
	return !that.p_isNullOrUndefined(value) && typeof value === 'object';
},

/**
 * Tests if a value is an string
 * @static
 * @method isString
 * @param {*} value
 * @return {Boolean}
 */
p_isString : function(value) {
    const that = this
	return !that.p_isNullOrUndefined(value) && typeof value === 'string';
},

/**
 * Tests if a value is a function
 * @static
 * @method isFunction
 * @param {*} value
 * @return {Boolean}
 */
p_isFunction : function(value) {
	return !this.p_isNullOrUndefined(value) && typeof value === 'function';
},

/**
 * Tests if a value is NULL or undefined
 * @static
 * @method isNullOrUndefined
 * @param {*} value
 * @return {Boolean}
 */
p_isNullOrUndefined : function(value) {
    return value === null || typeof value === 'undefined';
},

/**
 * Tests if a value is a boolean
 * @static
 * @method isBoolean
 * @param {*} value
 * @return {Boolean}
 */
p_isBoolean : function(value) {
    return value === true || value === false;
},

/**
 * Retrieves the subdirectories of a path
 * @static
 * @method getDirectories
 * @param {String}   dirPath The starting path
 * @param {Function} cb      Callback function
 */
p_getDirectories : function(dirPath) {

    
    const that = this

    return new Promise((resolve,reject)=>{

        var dirs = [];
        fs.readdir(dirPath, function(err, files) {
            if (util.isError(err)) {
                return reject(err);
            }

            var tasks = that.p_getTasks(files, function(files, index) {
                return function(callback) {

                    var fullPath = path.join(dirPath, files[index]);
                    fs.stat(fullPath, function(err, stat) {
                        if (util.isError(err)) {
                            return reject(err);
                        }
                        if (that.p_isNullOrUndefined(stat)) {
                            console.log('WARN: Util: unstatable file encountered: %s', fullPath);
                        }
                        else if (stat.isDirectory()) {
                            dirs.push(fullPath);
                        }
                        callback(err);
                    });
                }
            });
            async.parallel(tasks, function(err/*, results*/) {
                resolve(dirs);
            });
        });


    })
	
},

/**
 * Retrieves file and/or directorie absolute paths under a given directory path.
 * @static
 * @method getFiles
 * @param {String} dirPath The path to the directory to be examined
 * @param {Object} [options] Options that customize the results
 * @param {Boolean} [options.recursive=false] A flag that indicates if
 * directories should be recursively searched.
 * @param {Function} [options.filter] A function that returns a boolean
 * indicating if the file should be included in the result set.  The function
 * should take two parameters.  The first is a string value representing the
 * absolute path of the file.  The second is the stat object for the file.
 * @param {Function} cb A callback that takes two parameters. The first is an
 * Error, if occurred. The second is an array of strings representing the
 * absolute paths for files that met the criteria specified by the filter
 * function.
 */
p_getFiles : function(dirPath, options,fileName) {

    let that = this

    return new Promise((resolve,reject)=>{

        // if (this.p_isFunction(options)) {
        //     cb      = options;
        //     options = {
        //         recursive: false,
        //         filter: function(/*fullPath, stat*/) { return true; }
        //     }
        // }

        if(!options){

            options = {
                recursive: false,
                filter: function(/*fullPath, stat*/) { return true; }
            }

        }
        
    
        console.log('The directory path')
        console.log(dirPath)
        console.log(fileName)
    
        //read files from dir
        fs.readdir(dirPath, function(err, q) {
            if (util.isError(err)) {
                return reject(err);
            }
            
            console.log('The readdir results q')
            console.log(q)
    
            //seed the queue with the absolute paths not just the file names
            for (var i = 0; i < q.length; i++) {
    
                console.log()
                q[i] = path.join(dirPath, q[i]);
            }
    
            //process the q
            var filePaths = [];
            async.whilst(
                function() { return q.length > 0; },
                function(callback) {
    
                    var fullPath = q.shift();
                    fs.stat(fullPath, function(err, stat) {
                        if (util.isError(err)) {
                            return callback(err);
                        }
    
                        //apply filter
                        var meetsCriteria = true;
                        if (that.p_isFunction(options.filter)) {
                            meetsCriteria = options.filter(fullPath, stat);
                        }
    
                        //examine result and add it when criteria is met
                        if (meetsCriteria) {
                            filePaths.push(fullPath);
                        }
    
                        //when recursive queue up directory's for processing
                        if (!options.recursive || !stat.isDirectory()) {
                            return callback(null);
                        }
    
                        //read the directory contents and append it to the queue
                        fs.readdir(fullPath, function(err, childFiles) {
                            if (util.isError(err)) {
                                return callback(err);
                            }
    
                            childFiles.forEach(function(item) {
                                q.push(path.join(fullPath, item));
                            });
                            callback(null);
                        });
                    });
                },
                function(err) {
                    
                    console.log('THE FILES ARRay')
                    let filePath = dirPath+path.sep+fileName
                    console.log(filePath)
                    if(filePaths.indexOf(filePath) !== -1){

                        console.log('THE IS A NEED FOR A SPECIFIC FILE')
                        let filePathCont = filePaths[filePaths.indexOf(filePath)]
                        let file = filePathCont.substr(filePath.indexOf(fileName),filePathCont.length - 1)
                        console.log(filePathCont)
                        console.log(file)

                        resolve(file)

                    }else{

                        resolve(filePaths);

                    }
                    
                }
            );
        });

    })
    
},
p_getFile : function(filePath) {

    const that = this
    

    return new Promise((resolve,reject)=>{

    
    
        console.log('The directory path')
        console.log(filePath)
    
        //read files from dir

        var s = fs.createReadStream(filePath);
        if(s){
            resolve(s)
        }

        
       
    })
    
},

p_isDirectory(item){

},

/* Asynchronously makes the specified directory structure.
 * @static
 * @method mkdirsSync
 * @param {String} absoluteDirPath The absolute path of the directory structure
 * to be created
 * @param {Boolean} isFileName When true the value after the last file
 * separator is treated as a file.  This means that a directory with that value
 * will not be created.
 * @param {Function} cb A callback that provides an error, if occurred
 */
p_makeFolderSync: function(absolutePath){

    return fs.mkdirSync(absolutePath)
},
p_createFolderContent: function(sourcePath,savePath){

    const self = this 
    const CURR_DIR = self.p_getWorkingFolder()
	const filesToCreate = fs.readdirSync(sourcePath); 

    filesToCreate.forEach(file => { 

        const origFilePath = `${sourcePath}/${file}`; 
        
        // Get file statitics 
        const stats = fs.statSync(origFilePath); 

        if (stats.isFile()) { 

            const contents = fs.readFileSync(origFilePath, 'utf8'); 
			const writePath = `${CURR_DIR}/${savePath}/${file}`; 
			
            fs.writeFileSync(writePath, contents, 'utf8'); 

        } else if (stats.isDirectory()) { 


            fs.mkdirSync(`${CURR_DIR}/${savePath}/${file}`);
            // recursive call 
            self.p_createFolderContent(`${sourcePath}/${file}`, `${savePath}/${file}`); 
        } 


    });

},

p_loadFile: function(filepath){

    const self = this 
    return __non_webpack_require__.main.require(filepath);

    

},

p_getMainFileName: function(){

    const self = this 
    // let filename = __non_webpack_require__.main.filename 
    // let dir = path.resolve(path.dirname(filename))
    // let dirIndex = filename.indexOf(dir) 
    // let nameIndex = 0
    // filename = filename.slice(dirIndex,filename.length) 

    // name = filename.slice(dirIndex+1,filename.indexOf('.'))
    // ext = filename.slice(nameIndex,filename.length)

    return null

    

},

p_getRootDir: function(){

    const self = this 
    let filename = __non_webpack_require__.main.filename 
    dir = path.dirname(filename)
    
    return dir

    

},

p_mkdirs : function(absoluteDirPath, isFileName, cb) {


    const that = this 

    return new Promise((resolve,reject)=>{


        if (that.p_isFunction(isFileName)) {
            cb = isFileName;
            isFileName = false;
        }

        if (!that.p_isString(absoluteDirPath)) {
            return reject(new Error('absoluteDirPath must be a valid file path'));
        }
    
        var pieces = absoluteDirPath.split(path.sep);
    
        var curr      = '';
        var isWindows = os.type().toLowerCase().indexOf('windows') !== -1;
        var tasks     = that.p_getTasks(pieces, function(pieces, i) {
            return function(callback) {
    
                //we need to skip the first one bc it will probably be empty and we
                //want to skip the last one because it will probably be the file
                ////// name not a directory.
                var p = pieces[i];
                if (p.length === 0 || (isFileName && i >= pieces.length - 1)) {
                    return callback();
                }
    
                curr += (isWindows && i === 0 ? '' : path.sep) + p;
                fs.exists(curr, function(exists) {
                    if (exists) {
                        return callback();
                    }
                    fs.mkdir(curr, callback);
                });
            }
        });
        async.series(tasks, function(err/*, results*/){
            if(err) return reject(err)
            resolve(true)
        });
        
    })
    

    // const that = this 

    
    // if (that.p_isFunction(isFileName)) {
    //     cb = isFileName;
    //     isFileName = false;
    // }

    // if (!that.p_isString(absoluteDirPath)) {
    //     return cb(new Error('absoluteDirPath must be a valid file path'));
    // }

    // var pieces = absoluteDirPath.split(path.sep);

    // var curr      = '';
    // var isWindows = os.type().toLowerCase().indexOf('windows') !== -1;
    // var tasks     = that.p_getTasks(pieces, function(pieces, i) {
    //     return function(callback) {

    //         //we need to skip the first one bc it will probably be empty and we
    //         //want to skip the last one because it will probably be the file
    //         //name not a directory.
    //         var p = pieces[i];
    //         if (p.length === 0 || (isFileName && i >= pieces.length - 1)) {
    //             return callback();
    //         }

    //         curr += (isWindows && i === 0 ? '' : path.sep) + p;
    //         fs.exists(curr, function(exists) {
    //             if (exists) {
    //                 return callback();
    //             }
    //             fs.mkdir(curr, callback);
    //         });
    //     }
    // });
    // async.series(tasks, function(err/*, results*/){
    //     cb(err);
    // });
},

/**
 * Synchronously makes the specified directory structure.
 * @static
 * @method mkdirsSync
 * @param {String} absoluteDirPath The absolute path of the directory structure
 * to be created
 * @param {Boolean} isFileName When true the value after the last file
 * separator is treated as a file.  This means that a directory with that value
 * will not be created.
 */
p_mkdirsSync : function(absoluteDirPath, isFileName) {

    const that = this

    if (!that.p_isString(absoluteDirPath)) {
        throw new Error('absoluteDirPath must be a valid file path');
    }

    var pieces    = absoluteDirPath.split(path.sep);
    var curr      = '';
    var isWindows = os.type().toLowerCase().indexOf('windows') !== -1;
    pieces.forEach(function(p, i) {

        //we need to skip the first one bc it will probably be empty and we
        //want to skip the last one because it will probably be the file
        //name not a directory.
        if (p.length === 0 || (isFileName && i >= pieces.length - 1)) {
            return;
        }

        curr += (isWindows && i === 0 ? '' : path.sep) + p;
        if (!fs.existsSync(curr)) {
            fs.mkdirSync(curr);
        }
    });
},

/**
 * Retrieves the extension off of the end of a string that represents a URI to
 * a resource
 * @static
 * @method getExtension
 * @param {String} filePath URI to the resource
 * @param {Object} [options]
 * @param {Boolean} [options.lower=false] When TRUE the extension will be returned as lower case
 * @param {String} [options.sep] The file path separator used in the path.  Defaults to the OS default.
 * @return {String} The value after the last '.' character
 */
p_getExtension : function(filePath, options) {

    const that = this
    if (!that.p_isString(filePath) || filePath.length <= 0) {
        return null;
    }
    if (!that.p_isObject(options)) {
        options = {}
    }

    //do to the end of the path
    var pathPartIndex = filePath.lastIndexOf(options.sep || path.sep) || 0;
    if (pathPartIndex > -1) {
			filePath = filePath.substr(pathPartIndex);
		}

    var ext = null;
    var index = filePath.lastIndexOf('.');
    if (index >= 0) {
        ext = filePath.substring(index + 1);

        //apply options
        if (options.lower) {
            ext = ext.toLowerCase();
        }
    }
    return ext;
},

/**
 * Creates a filter function to be used with the getFiles function to skip files that are not of the specified type
 * @static
 * @method getFileExtensionFilter
 * @param extension
 * @return {Function}
 */
p_getFileExtensionFilter : function(extension) {
    var ext = '.' + extension;
    return function(fullPath) {
        return fullPath.lastIndexOf(ext) === (fullPath.length - ext.length);
    }
},

//inherit from node's version of 'util'.  We can't use node's "util.inherits"
//function because util is an object and not a prototype.

/**
 * Overrides the basic inherit functionality to include static functions and
 * properties of prototypes
 * @static
 * @method inherits
 * @param {Function} Type1
 * @param {Function} Type2
 */
p_inherits : function(Type1, Type2) {
    if (p_isNullOrUndefined(Type1) || p_isNullOrUndefined(Type2)) {
        throw new Error('The type parameters must be objects or prototypes');
    }

    util.inherits(Type1, Type2);
    p_merge(Type2, Type1);
},



js_to_json: function(jsObject,filter,indent){




    var jsonString = JSON.stringify(jsObject);


    return jsonString;

},

json_to_js: function(jsonString,options){


var jsObject = JSON.parse(jsonString);

return jsObject;

        

},

clone: function(o){



    if(o instanceof Array){

    let newA = []
    o.forEach(e => {

    if(e instanceof Array){

        newA.push(this.clone(e))

    }else if(e instanceof Object){

        newA.push(this.clone(e))
    }else{

        newA.push(e)
    }
        
    });

    return newA

    }else if(o instanceof Object && typeof o !== 'function'){


        let n = {}
        for(let p in o){

            if(o[p] instanceof Array){

                n[p] = this.clone(o[p])
            }else if(o[p] instanceof Object && typeof o[p] !== 'function' ){

                
                n[p] = this.clone(o[p])
            }else{


                    if(p === 'callback'){

                        console.log('The current property is callback')
                    }
                n[p] = o[p]
            }
            
            
        }

        return n
    }

        

},

/*********************************** OBJECT AND ARRAY CASTING ************************************************************/



object_to_array: function(castObj,keys=false){
    // console.log('THE CAST OBJECT')
    // console.log(castObj)

if(castObj instanceof Object){


    if(!(castObj instanceof Array)){





        var arr = [];
        var count = 0;

        if(keys){

            for(let key in castObj){


                arr[count] =  {key: key,value: castObj[key]};
    
                ++count;
            }

        }else{

            for(let key in castObj){


                arr[count] =  castObj[key];
    
                ++count;
            }

        }
        
    //    console.log('THE RETURN OF CONVERTED OBJECT')
    //    console.log(arr)
        return arr;



    }else{


        return castObj;
    }



}else{


    this.throwErrors('Argument 1 of object_to_array() must be an object');
}


    


},

array_to_object: function(castArr){



if(castArr instanceof Array){




        var obj = {}; 

        for(var i=0; i < castArr.length; i++){

            var property = 'property_'+(i+1);
            
            obj[property] = castArr[i];


        }

        

        return obj;
    
}else{


    this.throwErrors('Argument 1 of array_to_object() must be an array');


}




},

string_to_array: function(string,sep){

    // console.log('STRING TO ARRAY')
    // console.log(string) 
    // console.log(sep)
    if(this.is_string(string)){

        // console.log('THE STRING IS AN INSTANCE OF STRING')
        return string.split(sep)
    }

},


set_deeply: function(path,deep,value = null,type=null){


    //  console.log('TYPEOF AC')
    //  console.log(ac)
    // if(!(ac)){

    // 	console.log('AC IS NULL')
    // 	var a = deep 
    // }

    // console.log('THE VALUE OF A')
    // console.log(a)

  if(path.length === 1){

        console.log('ABOUT TO SET DEEPLY NESTED PROP')
        console.log('THE DEEP')
        console.log(deep)


        if(!(value)){


            console.log('THIS DEEP ARRAY')
            console.log(this.js_to_json(deep))
            console.log('THE DEEP I,i')
            deep.splice(path[0],1)
            console.log(deep)
            
            

        }else{

            deep[path[0]] = value

        }
        
        console.log(path)
        console.log(path[0]) 
        console.log(deep[path])
        return true
  }

  if(!(deep[path[0]])){

     console.log('THE PROPERTY BELOW DOES NOT EXIST')
     console.log(path)
     console.log(path[0])
    //  console.log(deep[path[0]])
     return false
  }

 return this.set_deeply(path.slice(1),deep[path[0]],value,type)

 

},

get_deeply : function(path){



},
is_function: function (x) {
return Object.prototype.toString.call(x) === '[object Function]';
},
is_array: function (x) {
return Object.prototype.toString.call(x) === '[object Array]';
},
is_date: function (x) {
return Object.prototype.toString.call(x) === '[object Date]';
},
is_object: function (x) {
return Object.prototype.toString.call(x) === '[object Object]';
},
is_string: function(x){

return Object.prototype.toString.call(x) === '[object String]';
},
is_value: function (x) {
return !this.isObject(x) && !this.isArray(x);
},
is_not_falsey: function(x) {

  if(this.trim_spaces(x)){return true}else{return false}
},

trim_spaces: function(x){

if(x instanceof String){return x.trim()}else{return x}
},
compare_values: function (value1, value2) {
   
if (value1 === value2) {
      return 
}
if (this.is_date(value1) && this.is_date(value2) && value1.getTime() === value2.getTime()) {
  return
}
if (value1 !== value2) {
      value1 = value2
      return
}


},
is_equal_ab: function(a,b,flag = 'values'){


if(!(this.is_object(a) && this.is_object(b))){
    return false
}

if(Object.keys(a).length !== Object.keys(b).length){

    return false
}


if(flag.trim() === 'keys'){

    var akeys = Object.keys(a).sort()
    var bKeys = Object.keys(b).sort()
    return JSON.stringify(aKeys) === JSON.stringify(bKeys) 

    // var akeys = Object.keys(a)

    // for (let k of akeys) {

    // 	if (a[k] !== b[k]) {
    // 	return false;
    // 	}
    // }

    // return true

}else{

    
    if(!(this.js_to_json(a) === this.js_to_json(b))){

        return false
    }else{

        return true
    }

}



},
is_valid_email: function(email){

    return true
},
is_valid_password: function(password){

    return true
},
is_same_value: function(x,y){

    if(this.isBrowserSupported('Object','is')){

        return Object.is(x,y)

    }else{

        return this.polyFills().objectIs(x,y)
        
    }

},
unlike_props: function(a,b){

let akeys = Object.keys(a)
let bkeys = Object.keys(b)

if(a.length > b.length){

    let unlike = null

    for (let k of akeys) {

        if (a[k] !== b[k]) {

            if(unlike){

                unlike.a.push(k)
            }else{

                unlike = {a: [k]}
            }

        }
    }

    return unlike

}else{

    for (let k of bkeys) {

        if (b[k] !== a[k]) {

            if(unlike){

                unlike.b.push(k)
            }else{

                unlike = {b: [k]}
            }

        }
    }

    return unlike


}

    

},
throwErrors: function(errorMessage){ // Define throwErrors method				
    throw new Error(errorMessage);


},
contains: function(o,v){

    

if(this.is_array(o)){

    return o.indexOf(v) > -1 ? true : false

}else if(this.is_object(o)){

    if(this.is_array(v)){
     
        console.log('THE SPECIFED VALUE TO CHECK IS AN ARRAY')
        console.log(v)
        let outcome = ''

        for(let i = 0; i < v.length; i++){

            if(!o.hasOwnProperty(v[i])){

                outcome = false
                break
            }else if(i === v.length - 1){

                outcome = true
            }
        }
        
        console.log('THE OUTCOME')
        console.log(outcome)
        return outcome

    }else{

        return o.hasOwnProperty(v) ? true : false 

    }
    

}else{

    this.throwErrors('Contains() requires either an array pure js object')
}


},

for_of: function(x,action,y=null){

  x = this.clone(x)

if(this.is_array(x)){

    x.forEach(action)

}else if(this.is_object(x)){

    if(!(y)){

        // console.log('THE FOROF Y IS NULL')
        // console.log(x)
        // console.log('THE Y IS DEFINED')
        let newX = {}
        for(let p in x){

           
           let prop = action(p,x[p])
           newX[prop.p] = prop.v

        }

        // console.log('THE NEWX')
        // console.log(newX)

        return newX

    }else{

        for(let p in x){

            action(p,x[p])
        }

        

    }

}else{

    this.throwErrors('Object of for_of() must be an Array or pure object')
}

},
add_values_to: function(x,keys,values){

if(this.is_array(x)){

    x.forEach(action)

}else if(this.is_object(x)){



        keys.forEach((k,i)=>{

            let vItemKeys = Object.keys(values[k])
            
            if(x[k]){

                vItemKeys.forEach((v)=>{

                    x[k][v] = values[v]
                })
                
            }else{

                x[k] = {}

                vItemKeys.forEach((v)=>{

                    x[k][v] = values[v]
                })

            }
            
        })

         return x


}else{

    this.throwErrors('Object of for_of() must be an Array or pure object')
}

},
find_in: function(x,id,f){

if(this.is_array(x)){

    if(this.is_value(x[0])){

        return	x.indexOf(f) > - 1 ? x[f] : false
    }else if(this.is_object(x[0])){

        for(let i=0; i < x.length; i++){

            if(sb.sb_contains(x[i],id) && x[i][id] === f ){

                return x[i]
            }
        }
    }
    

 }


}



}

