
const os     = require('os');
const util   = require('util');
const async  = require('async');
const extend = require('node.extend');
const fs     = require('fs');
const path   = require('path');
const uuid   = require('uuid');


/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



		Framework 	 : Pillar
		Version 	 : 1.0.0
		Author		 : Andziiy organisation
		Website		 : www.andziiy.com
		Date Created : 23/08/2019


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

module.exports = {


       
       b_o_freeze: function(o){ 

            if(!(o instanceof Object)) return null 
             
             return Object.freeze(o)
					


			},
			b_clone: function(o){ 

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
b_deepMerge : function(from, to) {
    return extend(true, to, from);
},

/**
 * Checks if the supplied object is an errof. If the object is an error the
 * function will throw the error.
 * @static
 * @method ane
 * @param {Object} obj The object to check
 */
b_ane : function(obj){
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
b_initArray : function(cnt, val) {
    var v = [];
    var isFunc = b_isFunction(val);
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
b_escapeRegExp : function(str) {
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
b_merge : function(from, to) {
    b_forEach(from, function(val, propName) {
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
b_union : function(a, b) {
	var union = {}
	b_merge(a, union);
	b_merge(b, union);
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
b_getTasks : function (iterable, getTaskFunction) {
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
b_wrapTask : function(context, func, argArray) {
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
b_wrapTimedTask : function(context, func, name, argArray) {
    if (b_isString(argArray)) {
        name = argArray;
        argArray = [];
    }
    var task = b_wrapTask(context, func, argArray);
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
b_forEach : function(iterable, handler) {

    var internalHandler;
    var internalIterable;
    if (util.isArray(iterable)) {
        internalHandler = handler;
        internalIterable = iterable;
    }
    else if (b_isObject(iterable)) {

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
b_arrayToHash : function(array, defaultVal) {
	if (!util.isArray(array)) {
		return null;
	}

    //set the default value
    if (b_isNullOrUndefined(defaultVal)) {
        defaultVal = true;
    }
	var hash = {},
	for(var i = 0; i < array.length; i++) {
		if (b_isFunction(defaultVal)) {
			hash[defaultVal(array, i)] = array[i];
		}
		else {
			hash[array[i]] = defaultVal;
		}
	}
	return hash;
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
b_arrayToObj : function(array, keyFieldOrTransform, valFieldOrTransform) {
    if (!util.isArray(array)) {
		return null;
	}

    var keyIsString = b_isString(keyFieldOrTransform);
    var keyIsFunc   = b_isFunction(keyFieldOrTransform);
    if (!keyIsString && !keyIsFunc) {
        return null;
    }

    var valIsString = b_isString(valFieldOrTransform);
    var valIsFunc   = b_isFunction(valFieldOrTransform);
    if (!valIsString && !valIsFunc) {
        valFieldOrTransform = null;
    }

    var obj = {},
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
b_objArrayToHash : function(array, hashProp) {
    if (!util.isArray(array)) {
		return null;
	}

    var hash = {},
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
b_hashToArray : function(obj, hashKeyProp) {
	if (!b_isObject(obj)) {
		return null;
	}

    var doHashKeyTransform = b_isString(hashKeyProp);
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
b_invertHash : function(obj) {
	if (!b_isObject(obj)) {
		return null;
	}

	var new_obj = {},
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
b_copyArray : function(array) {
	if (!util.isArray(array)) {
		return null;
	}

	var clone = [];
	for (var i = 0; i < array.length; i++) {
		clone.push(array[i]);
	}
	return clone;
},

b_dedupeArray : function(array) {
    var hash = b_arrayToHash(array);
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
b_arrayPushAll : function(from, to) {
	if (!util.isArray(from) || !util.isArray(to)) {
		return false;
	}

	for (var i = 0; i < from.length; i++) {
		to.push(from[i]);
	}
},

/**
 * Empty callback function just used as a place holder if a callback is required
 * and the result is not needed.
 * @static
 * @method cb
 */
b_cb : function(/*err, result*/){
	//do nothing
},

/**
 * Creates a unique Id
 * @static
 * @method uniqueId
 * @return {String} Unique Id Object
 */
b_uniqueId : function(){
	return uuid.v4();
},

/**
 * Tests if a value is an object
 * @static
 * @method isObject
 * @param {*} value
 * @return {Boolean}
 */
b_isObject : function(value) {
	return !b_isNullOrUndefined(value) && typeof value === 'object';
},

/**
 * Tests if a value is an string
 * @static
 * @method isString
 * @param {*} value
 * @return {Boolean}
 */
b_isString : function(value) {
	return !b_isNullOrUndefined(value) && typeof value === 'string';
},

/**
 * Tests if a value is a function
 * @static
 * @method isFunction
 * @param {*} value
 * @return {Boolean}
 */
b_isFunction : function(value) {
	return !b_isNullOrUndefined(value) && typeof value === 'function';
},

/**
 * Tests if a value is NULL or undefined
 * @static
 * @method isNullOrUndefined
 * @param {*} value
 * @return {Boolean}
 */
b_isNullOrUndefined : function(value) {
    return value === null || typeof value === 'undefined';
},

/**
 * Tests if a value is a boolean
 * @static
 * @method isBoolean
 * @param {*} value
 * @return {Boolean}
 */
b_isBoolean : function(value) {
    return value === true || value === false;
},

/**
 * Retrieves the subdirectories of a path
 * @static
 * @method getDirectories
 * @param {String}   dirPath The starting path
 * @param {Function} cb      Callback function
 */
b_getDirectories : function(dirPath, cb) {

	var dirs = [];
	fs.readdir(dirPath, function(err, files) {
		if (util.isError(err)) {
			return cb(err);
		}

		var tasks = b_getTasks(files, function(files, index) {
			return function(callback) {

				var fullPath = path.join(dirPath, files[index]);
				fs.stat(fullPath, function(err, stat) {
                    if (util.isError(err)) {
                        return cb(err);
                    }
                    if (b_isNullOrUndefined(stat)) {
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
			cb(err, dirs);
		});
	});
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
b_getFiles : function(dirPath, options, cb) {
    if (b_isFunction(options)) {
        cb      = options;
        options = {
            recursive: false,
            filter: function(/*fullPath, stat*/) { return true; }
        }
    }

    //read files from dir
    fs.readdir(dirPath, function(err, q) {
        if (util.isError(err)) {
			return cb(err);
		}

        //seed the queue with the absolute paths not just the file names
        for (var i = 0; i < q.length; i++) {
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
                    if (b_isFunction(options.filter)) {
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
                cb(err, filePaths);
            }
        );
    });
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
b_mkdirs : function(absoluteDirPath, isFileName, cb) {
    if (b_isFunction(isFileName)) {
        cb = isFileName;
        isFileName = false;
    }

    if (!b_isString(absoluteDirPath)) {
        return cb(new Error('absoluteDirPath must be a valid file path'));
    }

    var pieces = absoluteDirPath.split(path.sep);

    var curr      = '';
    var isWindows = os.type().toLowerCase().indexOf('windows') !== -1;
    var tasks     = b_getTasks(pieces, function(pieces, i) {
        return function(callback) {

            //we need to skip the first one bc it will probably be empty and we
            //want to skip the last one because it will probably be the file
            //name not a directory.
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
        cb(err);
    });
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
b_mkdirsSync : function(absoluteDirPath, isFileName) {
    if (!b_isString(absoluteDirPath)) {
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
b_getExtension : function(filePath, options) {
    if (!b_isString(filePath) || filePath.length <= 0) {
        return null;
    }
    if (!b_isObject(options)) {
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
b_getFileExtensionFilter : function(extension) {
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
b_inherits : function(Type1, Type2) {
    if (b_isNullOrUndefined(Type1) || b_isNullOrUndefined(Type2)) {
        throw new Error('The type parameters must be objects or prototypes');
    }

    util.inherits(Type1, Type2);
    b_merge(Type2, Type1);
}


// b_merge(util, Util);






}

