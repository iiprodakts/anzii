/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server_serverdev__ = __webpack_require__(2);

Object(__WEBPACK_IMPORTED_MODULE_0__server_serverdev__["a" /* default */])();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_anzii__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_modules__ = __webpack_require__(19);

 // import Server from '../shared/modules/server/index'

/* harmony default export */ __webpack_exports__["a"] = (function () {
  console.log('THE SERVER IS RUNNNING'); // console.log(Components)
  // console.log('The typeof Components')
  // console.log(Components instanceof Array)
  // console.log('The server Module')
  // console.log(Server)
  // Components.unshift({Server})
  // let html = true

  __WEBPACK_IMPORTED_MODULE_0__lib_anzii__["a" /* default */].Activate([__WEBPACK_IMPORTED_MODULE_1__init_modules__["a" /* default */]]);
}); // export default server

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__esm_esm__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_activate__ = __webpack_require__(18);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Anzii = function Anzii() {
  _classCallCheck(this, Anzii);

  // console.log(Activator.Activate)
  // console.log(Base.SUKU)
  var self = self;
  this.ANZII = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */];
  this.ESM = __WEBPACK_IMPORTED_MODULE_1__esm_esm__["a" /* default */];
  this.Activate = __WEBPACK_IMPORTED_MODULE_2__base_activate__["a" /* Activate */]; // this.DomLoaded = Base.SUKU.domLoaded.bind(this.SANA.SUKU)
  // this.Html = Base.SUKUS.html.bind(this.SANA.SUKUS)
};

/* harmony default export */ __webpack_exports__["a"] = (new Anzii());

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pillar_pillar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pillar_pillar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pillar_pillar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_core__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_pao__ = __webpack_require__(13);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Base = function Base() {
  _classCallCheck(this, Base);

  this.CORE = __WEBPACK_IMPORTED_MODULE_1__base_core__["a" /* default */], this.PAO = __WEBPACK_IMPORTED_MODULE_2__base_pao__["a" /* default */], this.PILLAR = __WEBPACK_IMPORTED_MODULE_0__pillar_pillar___default.a;
};

/* harmony default export */ __webpack_exports__["a"] = (new Base());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var os = __webpack_require__(6);

var util = __webpack_require__(7);

var async = __webpack_require__(8);

var extend = __webpack_require__(9);

var fs = __webpack_require__(10);

var path = __webpack_require__(0);

var uuid = __webpack_require__(11);
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



		Framework 	 : Pillar
		Version 	 : 1.0.0
		Author		 : Andziiy organisation
		Website		 : www.andziiy.com
		Date Created : 23/08/2019


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


module.exports = {
  p_o_freeze: function p_o_freeze(o) {
    if (!(o instanceof Object)) return null;
    return Object.freeze(o);
  },
  p_clone: function p_clone(o) {
    if (!(o instanceof Object)) return null;
    return JSON.parse(JSON.stringify(o));
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
  p_deepMerge: function p_deepMerge(from, to) {
    return extend(true, to, from);
  },

  /**
   * Checks if the supplied object is an errof. If the object is an error the
   * function will throw the error.
   * @static
   * @method ane
   * @param {Object} obj The object to check
   */
  p_ane: function p_ane(obj) {
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
  p_initArray: function p_initArray(cnt, val) {
    var v = [];
    var isFunc = p_isFunction(val);

    for (var i = 0; i < cnt; i++) {
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
  p_escapeRegExp: function p_escapeRegExp(str) {
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
  p_merge: function p_merge(from, to) {
    p_forEach(from, function (val, propName) {
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
  p_union: function p_union(a, b) {
    var union = {};
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
  p_getTasks: function p_getTasks(iterable, getTaskFunction) {
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
  p_wrapTask: function p_wrapTask(context, func, argArray) {
    if (!util.isArray(argArray)) {
      argArray = [];
    }

    return function (callback) {
      argArray.push(callback);
      func.apply(context, argArray);
    };
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
  p_wrapTimedTask: function p_wrapTimedTask(context, func, name, argArray) {
    if (p_isString(argArray)) {
      name = argArray;
      argArray = [];
    }

    var task = p_wrapTask(context, func, argArray);
    return function (callback) {
      var start = Date.now();
      task(function (err, result) {
        callback(err, {
          result: result,
          time: Date.now() - start,
          start: start,
          name: name
        });
      });
    };
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
  p_forEach: function p_forEach(iterable, handler) {
    var internalHandler;
    var internalIterable;

    if (util.isArray(iterable)) {
      internalHandler = handler;
      internalIterable = iterable;
    } else if (p_isObject(iterable)) {
      internalIterable = Object.getOwnPropertyNames(iterable);

      internalHandler = function internalHandler(propName, i) {
        handler(iterable[propName], propName, iterable, i);
      };
    } else {
      return false;
    } //execute native foreach on interable


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
  p_arrayToHash: function p_arrayToHash(array, defaultVal) {
    if (!util.isArray(array)) {
      return null;
    } //set the default value


    if (p_isNullOrUndefined(defaultVal)) {
      defaultVal = true;
    }

    var hash = {};

    for (var i = 0; i < array.length; i++) {
      if (p_isFunction(defaultVal)) {
        hash[defaultVal(array, i)] = array[i];
      } else {
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
  p_arrayToObj: function p_arrayToObj(array, keyFieldOrTransform, valFieldOrTransform) {
    if (!util.isArray(array)) {
      return null;
    }

    var keyIsString = p_isString(keyFieldOrTransform);
    var keyIsFunc = p_isFunction(keyFieldOrTransform);

    if (!keyIsString && !keyIsFunc) {
      return null;
    }

    var valIsString = p_isString(valFieldOrTransform);
    var valIsFunc = p_isFunction(valFieldOrTransform);

    if (!valIsString && !valIsFunc) {
      valFieldOrTransform = null;
    }

    var obj = {};

    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      var key = keyIsString ? item[keyFieldOrTransform] : keyFieldOrTransform(array, i);

      if (valIsString) {
        obj[key] = item[valFieldOrTransform];
      } else if (valIsFunc) {
        obj[key] = valFieldOrTransform(array, i);
      } else {
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
  p_objArrayToHash: function p_objArrayToHash(array, hashProp) {
    if (!util.isArray(array)) {
      return null;
    }

    var hash = {};

    for (var i = 0; i < array.length; i++) {
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
  p_hashToArray: function p_hashToArray(obj, hashKeyProp) {
    if (!p_isObject(obj)) {
      return null;
    }

    var doHashKeyTransform = p_isString(hashKeyProp);
    return Object.keys(obj).reduce(function (prev, prop) {
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
  p_invertHash: function p_invertHash(obj) {
    if (!p_isObject(obj)) {
      return null;
    }

    var new_obj = {};

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
  p_copyArray: function p_copyArray(array) {
    if (!util.isArray(array)) {
      return null;
    }

    var clone = [];

    for (var i = 0; i < array.length; i++) {
      clone.push(array[i]);
    }

    return clone;
  },
  p_dedupeArray: function p_dedupeArray(array) {
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
  p_arrayPushAll: function p_arrayPushAll(from, to) {
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
  p_cb: function p_cb()
  /*err, result*/
  {//do nothing
  },

  /**
   * Creates a unique Id
   * @static
   * @method uniqueId
   * @return {String} Unique Id Object
   */
  p_uniqueId: function p_uniqueId() {
    return uuid.v4();
  },

  /**
   * Tests if a value is an object
   * @static
   * @method isObject
   * @param {*} value
   * @return {Boolean}
   */
  p_isObject: function p_isObject(value) {
    return !p_isNullOrUndefined(value) && _typeof(value) === 'object';
  },

  /**
   * Tests if a value is an string
   * @static
   * @method isString
   * @param {*} value
   * @return {Boolean}
   */
  p_isString: function p_isString(value) {
    return !p_isNullOrUndefined(value) && typeof value === 'string';
  },

  /**
   * Tests if a value is a function
   * @static
   * @method isFunction
   * @param {*} value
   * @return {Boolean}
   */
  p_isFunction: function p_isFunction(value) {
    return !p_isNullOrUndefined(value) && typeof value === 'function';
  },

  /**
   * Tests if a value is NULL or undefined
   * @static
   * @method isNullOrUndefined
   * @param {*} value
   * @return {Boolean}
   */
  p_isNullOrUndefined: function p_isNullOrUndefined(value) {
    return value === null || typeof value === 'undefined';
  },

  /**
   * Tests if a value is a boolean
   * @static
   * @method isBoolean
   * @param {*} value
   * @return {Boolean}
   */
  p_isBoolean: function p_isBoolean(value) {
    return value === true || value === false;
  },

  /**
   * Retrieves the subdirectories of a path
   * @static
   * @method getDirectories
   * @param {String}   dirPath The starting path
   * @param {Function} cb      Callback function
   */
  p_getDirectories: function p_getDirectories(dirPath, cb) {
    var dirs = [];
    fs.readdir(dirPath, function (err, files) {
      if (util.isError(err)) {
        return cb(err);
      }

      var tasks = p_getTasks(files, function (files, index) {
        return function (callback) {
          var fullPath = path.join(dirPath, files[index]);
          fs.stat(fullPath, function (err, stat) {
            if (util.isError(err)) {
              return cb(err);
            }

            if (p_isNullOrUndefined(stat)) {
              console.log('WARN: Util: unstatable file encountered: %s', fullPath);
            } else if (stat.isDirectory()) {
              dirs.push(fullPath);
            }

            callback(err);
          });
        };
      });
      async.parallel(tasks, function (err
      /*, results*/
      ) {
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
  p_getFiles: function p_getFiles(dirPath, options, cb) {
    if (p_isFunction(options)) {
      cb = options;
      options = {
        recursive: false,
        filter: function filter()
        /*fullPath, stat*/
        {
          return true;
        }
      };
    } //read files from dir


    fs.readdir(dirPath, function (err, q) {
      if (util.isError(err)) {
        return cb(err);
      } //seed the queue with the absolute paths not just the file names


      for (var i = 0; i < q.length; i++) {
        q[i] = path.join(dirPath, q[i]);
      } //process the q


      var filePaths = [];
      async.whilst(function () {
        return q.length > 0;
      }, function (callback) {
        var fullPath = q.shift();
        fs.stat(fullPath, function (err, stat) {
          if (util.isError(err)) {
            return callback(err);
          } //apply filter


          var meetsCriteria = true;

          if (p_isFunction(options.filter)) {
            meetsCriteria = options.filter(fullPath, stat);
          } //examine result and add it when criteria is met


          if (meetsCriteria) {
            filePaths.push(fullPath);
          } //when recursive queue up directory's for processing


          if (!options.recursive || !stat.isDirectory()) {
            return callback(null);
          } //read the directory contents and append it to the queue


          fs.readdir(fullPath, function (err, childFiles) {
            if (util.isError(err)) {
              return callback(err);
            }

            childFiles.forEach(function (item) {
              q.push(path.join(fullPath, item));
            });
            callback(null);
          });
        });
      }, function (err) {
        cb(err, filePaths);
      });
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
  p_mkdirs: function p_mkdirs(absoluteDirPath, isFileName, cb) {
    if (p_isFunction(isFileName)) {
      cb = isFileName;
      isFileName = false;
    }

    if (!p_isString(absoluteDirPath)) {
      return cb(new Error('absoluteDirPath must be a valid file path'));
    }

    var pieces = absoluteDirPath.split(path.sep);
    var curr = '';
    var isWindows = os.type().toLowerCase().indexOf('windows') !== -1;
    var tasks = p_getTasks(pieces, function (pieces, i) {
      return function (callback) {
        //we need to skip the first one bc it will probably be empty and we
        //want to skip the last one because it will probably be the file
        //name not a directory.
        var p = pieces[i];

        if (p.length === 0 || isFileName && i >= pieces.length - 1) {
          return callback();
        }

        curr += (isWindows && i === 0 ? '' : path.sep) + p;
        fs.exists(curr, function (exists) {
          if (exists) {
            return callback();
          }

          fs.mkdir(curr, callback);
        });
      };
    });
    async.series(tasks, function (err
    /*, results*/
    ) {
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
  p_mkdirsSync: function p_mkdirsSync(absoluteDirPath, isFileName) {
    if (!p_isString(absoluteDirPath)) {
      throw new Error('absoluteDirPath must be a valid file path');
    }

    var pieces = absoluteDirPath.split(path.sep);
    var curr = '';
    var isWindows = os.type().toLowerCase().indexOf('windows') !== -1;
    pieces.forEach(function (p, i) {
      //we need to skip the first one bc it will probably be empty and we
      //want to skip the last one because it will probably be the file
      //name not a directory.
      if (p.length === 0 || isFileName && i >= pieces.length - 1) {
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
  p_getExtension: function p_getExtension(filePath, options) {
    if (!p_isString(filePath) || filePath.length <= 0) {
      return null;
    }

    if (!p_isObject(options)) {
      options = {};
    } //do to the end of the path


    var pathPartIndex = filePath.lastIndexOf(options.sep || path.sep) || 0;

    if (pathPartIndex > -1) {
      filePath = filePath.substr(pathPartIndex);
    }

    var ext = null;
    var index = filePath.lastIndexOf('.');

    if (index >= 0) {
      ext = filePath.substring(index + 1); //apply options

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
  p_getFileExtensionFilter: function p_getFileExtensionFilter(extension) {
    var ext = '.' + extension;
    return function (fullPath) {
      return fullPath.lastIndexOf(ext) === fullPath.length - ext.length;
    };
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
  p_inherits: function p_inherits(Type1, Type2) {
    if (p_isNullOrUndefined(Type1) || p_isNullOrUndefined(Type2)) {
      throw new Error('The type parameters must be objects or prototypes');
    }

    util.inherits(Type1, Type2);
    p_merge(Type2, Type1);
  },
  js_to_json: function js_to_json(jsObject, filter, indent) {
    var jsonString = JSON.stringify(jsObject);
    return jsonString;
  },
  json_to_js: function json_to_js(jsonString, options) {
    var jsObject = JSON.parse(jsonString);
    return jsObject;
  },
  clone: function clone(o) {
    var _this = this;

    if (o instanceof Array) {
      var newA = [];
      o.forEach(function (e) {
        if (e instanceof Array) {
          newA.push(_this.clone(e));
        } else if (e instanceof Object) {
          newA.push(_this.clone(e));
        } else {
          newA.push(e);
        }
      });
      return newA;
    } else if (o instanceof Object && typeof o !== 'function') {
      var n = {};

      for (var p in o) {
        if (o[p] instanceof Array) {
          n[p] = this.clone(o[p]);
        } else if (o[p] instanceof Object && typeof o[p] !== 'function') {
          n[p] = this.clone(o[p]);
        } else {
          if (p === 'callback') {
            console.log('The current property is callback');
          }

          n[p] = o[p];
        }
      }

      return n;
    }
  },

  /*********************************** OBJECT AND ARRAY CASTING ************************************************************/
  object_to_array: function object_to_array(castObj) {
    if (castObj instanceof Object) {
      if (!(castObj instanceof Array)) {
        var arr = [];
        var count = 0;

        for (var key in castObj) {
          arr[count] = castObj[key];
          ++count;
        }

        return arr;
      } else {
        return castObj;
      }
    } else {
      this.throwErrors('Argument 1 of object_to_array() must be an object');
    }
  },
  array_to_object: function array_to_object(castArr) {
    if (castArr instanceof Array) {
      var obj = {};

      for (var i = 0; i < castArr.length; i++) {
        var property = 'property_' + (i + 1);
        obj[property] = castArr[i];
      }

      return obj;
    } else {
      this.throwErrors('Argument 1 of array_to_object() must be an array');
    }
  },
  string_to_array: function string_to_array(string, sep) {
    if (string instanceof String) {
      return string.split(sep);
    }
  },
  set_deeply: function set_deeply(path, deep) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    //  console.log('TYPEOF AC')
    //  console.log(ac)
    // if(!(ac)){
    // 	console.log('AC IS NULL')
    // 	var a = deep 
    // }
    // console.log('THE VALUE OF A')
    // console.log(a)
    if (path.length === 1) {
      console.log('ABOUT TO SET DEEPLY NESTED PROP');
      console.log('THE DEEP');
      console.log(deep);

      if (!value) {
        console.log('THIS DEEP ARRAY');
        console.log(this.js_to_json(deep));
        console.log('THE DEEP I,i');
        deep.splice(path[0], 1);
        console.log(deep);
      } else {
        deep[path[0]] = value;
      }

      console.log(path);
      console.log(path[0]);
      console.log(deep[path]);
      return true;
    }

    if (!deep[path[0]]) {
      console.log('THE PROPERTY BELOW DOES NOT EXIST');
      console.log(path);
      console.log(path[0]); //  console.log(deep[path[0]])

      return false;
    }

    return this.set_deeply(path.slice(1), deep[path[0]], value, type);
  },
  get_deeply: function get_deeply(path) {},
  is_function: function is_function(x) {
    return Object.prototype.toString.call(x) === '[object Function]';
  },
  is_array: function is_array(x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  },
  is_date: function is_date(x) {
    return Object.prototype.toString.call(x) === '[object Date]';
  },
  is_object: function is_object(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  },
  is_string: function is_string(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  },
  is_value: function is_value(x) {
    return !this.isObject(x) && !this.isArray(x);
  },
  is_not_falsey: function is_not_falsey(x) {
    if (this.trim_spaces(x)) {
      return true;
    } else {
      return false;
    }
  },
  trim_spaces: function trim_spaces(x) {
    if (x instanceof String) {
      return x.trim();
    } else {
      return x;
    }
  },
  compare_values: function compare_values(value1, value2) {
    if (value1 === value2) {
      return;
    }

    if (this.is_date(value1) && this.is_date(value2) && value1.getTime() === value2.getTime()) {
      return;
    }

    if (value1 !== value2) {
      value1 = value2;
      return;
    }
  },
  is_equal_ab: function is_equal_ab(a, b) {
    var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'values';

    if (!(this.is_object(a) && this.is_object(b))) {
      return false;
    }

    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    if (flag.trim() === 'keys') {
      var akeys = Object.keys(a).sort();
      var bKeys = Object.keys(b).sort();
      return JSON.stringify(aKeys) === JSON.stringify(bKeys); // var akeys = Object.keys(a)
      // for (let k of akeys) {
      // 	if (a[k] !== b[k]) {
      // 	return false;
      // 	}
      // }
      // return true
    } else {
      if (!(this.js_to_json(a) === this.js_to_json(b))) {
        return false;
      } else {
        return true;
      }
    }
  },
  is_same_value: function is_same_value(x, y) {
    if (this.isBrowserSupported('Object', 'is')) {
      return Object.is(x, y);
    } else {
      return this.polyFills().objectIs(x, y);
    }
  },
  unlike_props: function unlike_props(a, b) {
    var akeys = Object.keys(a);
    var bkeys = Object.keys(b);

    if (a.length > b.length) {
      var _unlike = null;

      for (var _i = 0, _akeys = akeys; _i < _akeys.length; _i++) {
        var k = _akeys[_i];

        if (a[k] !== b[k]) {
          if (_unlike) {
            _unlike.a.push(k);
          } else {
            _unlike = {
              a: [k]
            };
          }
        }
      }

      return _unlike;
    } else {
      for (var _i2 = 0, _bkeys = bkeys; _i2 < _bkeys.length; _i2++) {
        var _k = _bkeys[_i2];

        if (b[_k] !== a[_k]) {
          if (unlike) {
            unlike.b.push(_k);
          } else {
            unlike = {
              b: [_k]
            };
          }
        }
      }

      return unlike;
    }
  },
  contains: function contains(o, v) {
    if (this.is_array(o)) {
      return o.indexOf(v) > -1 ? true : false;
    } else if (this.is_object(o)) {
      return o.hasOwnProperty(v) ? true : false;
    } else {
      this.throwErrors('Contains() requires either an array pure js object');
    }
  },
  for_of: function for_of(x, action) {
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    x = this.clone(x);

    if (this.is_array(x)) {
      x.forEach(action);
    } else if (this.is_object(x)) {
      if (!y) {
        console.log('THE FOROF Y IS NULL');
        console.log(x);
        var newX = {};

        for (var p in x) {
          var prop = action(p, x[p]);
          newX[prop.p] = prop.v;
        }

        console.log('THE NEWX');
        console.log(newX);
        return newX;
      } else {
        for (var _p in x) {
          action(_p, x[_p]);
        }
      }
    } else {
      this.throwErrors('Object of for_of() must be an Array or pure object');
    }
  },
  add_values_to: function add_values_to(x, keys, values) {
    if (this.is_array(x)) {
      x.forEach(action);
    } else if (this.is_object(x)) {
      keys.forEach(function (k, i) {
        var vItemKeys = Object.keys(values[k]);

        if (x[k]) {
          vItemKeys.forEach(function (v) {
            x[k][v] = values[v];
          });
        } else {
          x[k] = {};
          vItemKeys.forEach(function (v) {
            x[k][v] = values[v];
          });
        }
      });
      return x;
    } else {
      this.throwErrors('Object of for_of() must be an Array or pure object');
    }
  },
  find_in: function find_in(x, id, f) {
    if (this.is_array(x)) {
      if (this.is_value(x[0])) {
        return x.indexOf(f) > -1 ? x[f] : false;
      } else if (this.is_object(x[0])) {
        for (var i = 0; i < x.length; i++) {
          if (sb.sb_contains(x[i], id) && x[i][id] === f) {
            return x[i];
          }
        }
      }
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("node.extend");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function CORE(lib) {
  this.PILLAR = lib;
  this.modules = {};
  this.globalModules = []; // this.parent = this
} // End of the CORE class


CORE.prototype.createModule = function (module, moduleId, modInstId) {
  var modules = this.modules;
  this.sanna().runForModules(module); // console.log('THe modules Object')
  // console.log(modules)

  if (Object.keys(modules).length > 0) {
    for (var _mod in modules) {
      //console.log(modules[mod]);
      if (_mod === moduleId) {
        this.globalModules.push(module);
        this.modules[moduleId][modInstId] = module;
      } else {
        this.globalModules.push(module);
        this.modules[moduleId] = {};
        this.modules[moduleId][modInstId] = module;
      }
    } // End of for loop

  } else {
    this.modules[moduleId] = {};
    this.modules[moduleId][modInstId] = module;
  } // End of ifesleif test

}; // End of store modules method


CORE.prototype.events = function () {
  var PILLAR = this.PILLAR; //  const parent = this.parent

  return {
    addEventHandler: function addEventHandler(el, ev, handler) {
      if (typeof window === "undefined") {
        return PILLAR.ev_addHandler(el, ev, handler);
      } else {
        PILLAR.ev_addHandler(el, ev, handler);
      }
    },
    // End of addEventHandler() method
    removeEventHandler: function removeEventHandler(el, ev, handler) {
      PILLAR.ev_removeHandler(el, ev, handler);
    },
    // End of addEventHandler() method
    getEvent: function getEvent(ev) {
      return PILLAR.getEvent(ev);
    },
    // End of addEventHandler() method
    getTarget: function getTarget(ev) {
      return PILLAR.getTarget(ev);
    },
    // End of addEventHandler() method
    preventNormal: function preventNormal(ev) {
      PILLAR.preventDefault(ev);
    },
    // End of addEventHandler() method
    stopEventBubble: function stopEventBubble(ev) {
      PILLAR.stopPropagation(ev);
    } // End of addEventHandler() method

  };
}; // End of CORE EVENTS manipulation object


CORE.prototype.ajax = function () {
  var PILLAR = this.PILLAR;
  return {
    get: function get(url, data, success, failure, type) {
      PILLAR.ajax_get(url, data, success, failure, type);
    },
    // End of ajax get() method
    post: function post(url, data, success, failure, type) {
      PILLAR.ajax_post(url, data, success, failure, type);
    } // End of ajax post() method

  };
}; // End of CORE AJAX manipulation object


CORE.prototype.validators = function () {
  var PILLAR = this.PILLAR;
  return {
    isFunction: function isFunction(x) {
      return PILLAR.is_function(x);
    },
    isArray: function isArray(x) {
      return PILLAR.is_array(x);
    },
    isDate: function isDate(x) {
      return PILLAR.is_date(x);
    },
    isObject: function isObject(x) {
      return PILLAR.is_object(x);
    },
    isString: function isString(x) {
      return PILLAR.is_string(x);
    },
    isValue: function isValue(x) {
      return PILLAR.is_value(x);
    },
    isNotFalsey: function isNotFalsey(x) {
      return PILLAR.is_not_falsey(x);
    },
    trimSpaces: function trimSpaces(x) {
      return PILLAR.trim_spaces(x);
    },
    isEqualab: function isEqualab(a, b) {
      var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return PILLAR.is_equal_ab(a, b, f);
    },
    isSameValue: function isSameValue(x, y) {
      return PILLAR.is_same_value(x, y);
    },
    unlikeProps: function unlikeProps(a, b) {
      return PILLAR.unlike_props(a, b);
    },
    contains: function contains(o, v) {
      return PILLAR.contains(o, v);
    },
    forOf: function forOf(o, action) {
      return PILLAR.for_of(o, action);
    },
    addValuesTo: function addValuesTo(o, k, v) {
      return PILLAR.add_values_to(o, k, v);
    },
    findIn: function findIn(x, i, f) {
      return PILLAR.find_in(x, i, f);
    }
  };
};

CORE.prototype.util = function () {
  var PILLAR = this.PILLAR;
  return {
    makeDirs: function makeDirs(p, isFileName, callback) {
      return PILLAR.p_mkdirs(p, isFileName, callback);
    }
  };
};
/*

	The methods immediately after this method will be used for module inter communication, which is
	a way that modules communicate with each other indirectly.
	

*/


CORE.prototype.registerEvents = function (evts, module_id, mod_inst_id) {
  if (evts && module_id && mod_inst_id) {
    if (this.modules[module_id][mod_inst_id]) {
      this.modules[module_id][mod_inst_id].events = evts;
    }
  }
}; // End of registerEvents method


CORE.prototype.triggerEvent = function (evt) {
  var moduId = null;

  if (evt) {
    // console.log('Event contains data')
    for (var _moduId in this.modules) {
      // console.log('Modules contains modules')
      if (this.modules.hasOwnProperty(_moduId)) {
        // console.log('given module belongs to modules object')
        _moduId = this.modules[_moduId];

        for (var modInst in _moduId) {
          // console.log('Instances of a given moduleS')
          // console.log(moduId[modInst].events.type)
          // console.log(evt.type)
          if (_moduId[modInst].events && _moduId[modInst].events[evt.type]) {
            _moduId[modInst].events[evt.type](evt.data);
          } // End of inner if statement

        }
      }
    } // End of for in statement

  } // End of outer evt object check

}; // End of triggerEvent method


CORE.prototype.startModule = function (moduleId, modInstId) {
  var moduleID = moduleId;

  if (this.modules[moduleID][modInstId]) {
    this.modules[moduleID][modInstId].init();

    if (moduleID === 'global') {
      console.log('THE GLOBAL MODULES IS ABOUT TO RECEIVE MODULES');
      this.modules[moduleID][modInstId].globals = this.globalModules;
    }
  }
}; // End of startModule() core method


CORE.prototype.startAllModules = function () {
  for (var modu in this.modules) {
    var modSuper = this.modules[mod];

    for (var modInstId in modSuper) {
      try {
        this.modules[modSuper][modInstId].init();
      } catch (e) {
        console.log(e);
      } // End of try catch

    }
  }
}; // End of startAllModules() core method


CORE.prototype.stopModule = function (moduleId, modInstId) {
  var moduleID = moduleId;

  if (this.modules[moduleID][modInstId]) {
    this.modules[moduleID][modInstId].destroy();
  }
}; // End of stopModule() core method


CORE.prototype.stopAllModules = function () {
  for (var modu in this.modules) {
    var modSuper = this.modules[mod];

    for (var modInstId in modSuper) {
      try {
        this.modules[modSuper][modInstId].destroy();
      } catch (e) {
        console.log(e);
      } // End of try catch

    }
  }
}; // End of stopAllModules() core method


CORE.prototype.converts = function () {
  var PILLAR = this.PILLAR;
  return {
    jsToJson: function jsToJson(jsObject) {
      return PILLAR.js_to_json(jsObject);
    },
    jsonToJs: function jsonToJs(json) {
      return PILLAR.json_to_js(json);
    },
    clone: function clone(c) {
      return PILLAR.clone(c);
    },
    objectToArray: function objectToArray(o) {
      return PILLAR.object_to_array(o);
    }
  };
};

CORE.prototype.sanna = function () {
  var self = this;
  return {
    modules: {
      validators: {
        emit: function emit(comp) {
          if (!comp.hasOwnProperty('emit')) {
            console.log(self.sanna().modules);
            comp.emit = self.sanna().modules.addiks.emit.bind(comp);
          } else if (typeof comp.emit !== 'function') {
            throw new Error('Emit is a reserved Akii method');
          }
        },
        listens: function listens(comp) {
          console.log('THE COMPONENT RUNS');

          if (!comp.hasOwnProperty('listens')) {
            console.log('THE LISTENS COMP PROP');
            comp.listens = self.sanna().modules.addiks.listens.bind(comp);
            console.log(comp);
          } else if (typeof comp.listens !== 'function') {
            throw new Error('Listens is a reserved ANZii method');
          }
        },
        log: function log(comp) {
          comp.log = self.sanna().modules.addiks.log.bind(comp);
        }
      },
      addiks: {
        emit: function emit(data) {
          var self = this;
          var pao = this.pao;
          console.log(self.constructor.name, 'is emitting event:', data.type, 'with data: ');
          pao.pa_notifyEvent({
            type: data.type,
            data: data.data
          });
        },
        listens: function listens(evehandles) {
          var self = this;
          var pao = this.pao;
          console.log('MODULE', self.constructor.name, 'listens to event(s):', evehandles);
          var mId = self.constructor.name.toLowerCase();
          var mInsId = self.constructor.name.toLowerCase();
          pao.pa_notifyListen(evehandles, mId, mInsId);
        },
        log: function log() {
          var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No message provided';
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'console';
          var self = this;
          var pao = this.pao;
          var data = {
            message: message,
            type: type
          };
          data.source = self.constructor.name;
          self.emit({
            type: 'anziiloger-log',
            data: data
          });
        }
      }
    },
    runForModules: function runForModules(comp) {
      var validators = this.modules.validators;

      for (var v in validators) {
        validators[v](comp);
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (CORE);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PAO(appPillar) {
  this.core = appPillar;
} // End of PAO


PAO.prototype.create = function (moduleID, modInstId) {
  var pa_core = this.core; // const util = pa_core.util
  // var events = pa_core.events()
  // var ajax = pa_core.ajax()
  // const validators = pa_core.validators()

  var util = pa_core.validators().forOf(pa_core.util(), function (p, a) {
    return {
      p: ["pa_".concat(p)],
      v: a
    };
  });
  var converts = pa_core.validators().forOf(pa_core.converts(), function (p, a) {
    return {
      p: ["pa_".concat(p)],
      v: a
    };
  });
  var validators = pa_core.validators().forOf(pa_core.validators(), function (p, a) {
    return {
      p: ["pa_".concat(p)],
      v: a
    };
  }); // console.log('THE VALIDATORS')
  // console.log(validators)
  // console.log('The value of Instance Id')
  // console.log(modInstId)

  if (modInstId) {
    // console.log('The module has a view')
    // var CONTAINER = dom.queryCont('data-'+moduleID, modInstId);
    var meta = {
      moduleId: moduleID,
      modInstId: modInstId
    };
  } else {
    // console.log('The module has no view')
    var meta = {
      moduleId: moduleID,
      modInstId: moduleID
    };
  }

  return _objectSpread({
    // DOM manipulations
    // view: CONTAINER,
    moduleMeta: meta
  }, util, {}, validators, {}, converts, {
    // 	pa_getChildByClass: function(selector){
    // 		if(CONTAINER){
    // 			return CONTAINER.queryChildByClass(selector);
    // 		}
    // 	},
    // 	pa_getAllChildByClass: function(selector){
    // 			if(CONTAINER){
    // 				return CONTAINER.queryAllChildByClass(selector);
    // 			}
    // 	},
    // 	pa_getById: function(selector){
    // 			return dom.queryById(selector);
    // 	},
    // 	pa_getByTag: function(parent,selector){
    // 		return dom.queryByTag(parent,selector);
    // },
    // 	pa_getByAttribute: function(attrib){
    // 		return dom.queryByAttribute(attrib);
    // 	},
    // 	pa_getAllChildByAttribute: function(attrib){
    // 			return CONTAINER.queryAllChildByAttribute(attrib);
    // 	},
    // 	pa_getChildByAttribute: function(attrib){
    // 			return CONTAINER.queryChildByAttribute(attrib);
    // 	},
    // 	pa_getNodeType: function(node){
    // 		return dom.queryNodeType(node);
    // 	},
    // 	pa_createElement: function(selector){
    // 		var el = dom.createElement(selector);
    // 		return el;
    // 	},
    // 	pa_isEqualNode: function(node1,node2){
    // 		return dom.isEqualNode(node1,node2);
    // 		// return el;
    // 	},
    // 	pa_copyDeep: function(el){
    // 		var el = dom.copyDeep(el);
    // 		return el;
    // 	},
    // 	pa_copyShallow: function(el){
    // 		var el = dom.copyShallow(el);
    // 		return el;
    // 	},
    // 	pa_addProperty: function(el,attrib,attribValue){
    // 		if(typeof window === "undefined"){
    // 			return dom.addProperty(el,attrib,attribValue);
    // 		}else{
    // 			 dom.addProperty(el,attrib,attribValue);
    // 		}
    // 	},
    // 	pa_removeProperty: function(el,attrib){
    // 		dom.removeProperty(el,attrib);
    // 	},
    // 	pa_insertInner: function(el,content){
    // 		if(typeof window === "undefined"){
    // 			return dom.insertInner(el,content);
    // 		}else{
    // 			dom.insertInner(el,content);
    // 		}
    // 	},
    // 	pa_addChild: function(parent,child){
    // 		if(typeof window === "undefined"){
    // 			return dom.addChild(parent,child);
    // 		}else{
    // 			 dom.addChild(parent,child);
    // 		}
    // 	},
    // 	pa_getClasses: function(element){
    // 		return dom.getClasses(element);
    // 	},
    // 	pa_addClass: function(classlist,classname){
    //  		dom.addClass(classlist,classname);
    // 	},
    // 	pa_removeClass: function(classlist,classname){
    // 		 dom.removeClass(classlist,classname);
    // 	},
    // 	pa_toggleClass: function(classlist,classname){
    // 		 dom.toggleClass(classlist,classname);
    // 	},
    // 	pa_hasClass: function(classlist,classname){
    // 		 return dom.hasClass(classlist,classname);
    // 	},
    // 	pa_getStyles: function(element){
    // 		 return dom.getStyles(element);
    // 	},
    // 	pa_getAttributes: function(element){
    // 		 return dom.getAttributes(element);
    // 	},
    // 	pa_getParent: function(child){
    // 		return dom.getParent(child);
    //    },
    // 	// EVENTS manipulations
    // 	pa_addEvent: function(el,ev,handler){
    // 	    if(typeof window === "undefined"){
    // 			return	events.addEventHandler(el,ev,handler);
    // 		}else{
    // 			events.addEventHandler(el,ev,handler);
    // 		}
    // 	},
    // 	pa_removeEvent: function(el,ev,handler){
    // 			events.addEventHandler(el,ev,handler);
    // 	},
    // 	pa_getEvent: function(ev){
    // 		return events.getEvent(ev);
    // 	},// End of addEventHandler() method
    // 	pa_getTarget: function(ev){
    // 		return events.getTarget(ev);
    // 	},// End of addEventHandler() method
    // 	pa_preventNormal: function(ev){
    // 			events.preventNormal(ev);
    // 	},
    // 	pa_stopEventBubble: function(ev){
    // 		events.stopEventBubble(ev);
    // },
    // 	// AJAX communications
    // 	pa_ajaxGet: function(url,data,success,failure,type){
    // 		ajax.get(url,data,success,failure,type);
    // 	},
    // 	pa_ajaxPost: function(url,data,success,failure,type){
    // 		ajax.post(url,data,success,failure,type);
    // 	},
    // 	// MODULE communications
    pa_notifyListen: function pa_notifyListen(evts, moduleID, modInstId) {
      // console.log('The notifyListen event has been successfuly invoked')
      pa_core.registerEvents(evts, moduleID, modInstId);
    },
    // End of notifyListen() for events to listen to
    pa_notifyEvent: function pa_notifyEvent(evt) {
      // console.log('The notify event has been successfuly invoked')
      pa_core.triggerEvent(evt);
    } // end of notifyEvent() occurence
    // 	pa_validate: function(data){
    // 		var validateResult = pa_core.validator.validate(data);
    // 		return validateResult;
    // 	},
    // 	pa_jsToJson: function(jsObject){
    // 		return converts.jsToJson(jsObject);
    // 	},
    // 	pa_jsonToJs: function(json){
    // 		return converts.jsonToJs(json);
    // 	},
    // 	pa_clone: function(c){
    // 		return converts.clone(c);
    // 	},
    // 	pa_objectToArray: function(o){
    // 		return converts.objectToArray(o)
    // 	}
    // End OF return

  });
}; // End of PAO create() method


/* harmony default export */ __webpack_exports__["a"] = (PAO);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middleware_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parsers_index__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_index__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_index__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_index__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_index__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__anziiloger_index__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_index__ = __webpack_require__(55);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var Esm = function Esm() {
  _classCallCheck(this, Esm);

  this.Esm = {
    Anziiloger: __WEBPACK_IMPORTED_MODULE_6__anziiloger_index__["a" /* default */],
    Middleware: __WEBPACK_IMPORTED_MODULE_0__middleware_index__["a" /* default */],
    Parsers: __WEBPACK_IMPORTED_MODULE_1__parsers_index__["a" /* default */],
    Router: __WEBPACK_IMPORTED_MODULE_2__router_index__["a" /* default */],
    Request: __WEBPACK_IMPORTED_MODULE_3__request_index__["a" /* default */],
    Server: __WEBPACK_IMPORTED_MODULE_4__server_index__["a" /* default */],
    Config: __WEBPACK_IMPORTED_MODULE_5__config_index__["a" /* default */],
    Global: __WEBPACK_IMPORTED_MODULE_7__global_index__["a" /* default */]
  };
};

/* harmony default export */ __webpack_exports__["a"] = (new Esm());

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activate; });
var Activate = function Activate(libs) {
  // let pao = ''
  // let core = ''
  console.log('The Server');
  var core = new this.ANZII.CORE(this.ANZII.PILLAR);
  var pao = new this.ANZII.PAO(core); // console.log('The core before modules')
  // console.log(pao.sb_jsToJson(core))

  console.log('The libs');
  console.log(libs);
  console.log(libs.length);
  console.log('The ESM MODULES SHOULD BE IN PLACE RIGHT NOw');
  console.log(this.ESM);
  console.log(pao); // let global = pao.pa_clone(this.ESM.Esm.Global) 
  // delete this.ESM.Esm.Global

  libs.push(this.ESM.Esm); // libs.push(global) 

  libs.forEach(function (lib) {
    for (var moco in lib) {
      console.log('Inside activate');
      console.log(moco);
      var moduId = moco.toLowerCase(); // console.log('THE V')
      // console.log(v)
      // console.log(`Currently executing module: ${moco}`)

      var modInstId = moduId; // console.log('Executing module without view')

      core.createModule(new lib[moco](pao.create(moduId, null)), moduId, modInstId); // console.log(`Currently starting module: ${moco}`)

      core.startModule(moduId, modInstId); // console.log('Dependicies')
      // console.log(typeof this.ANDZIIY.core)
      // let moduId = mod.name.toLowerCase();
    }
  });
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_test__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_list__ = __webpack_require__(52);


/* harmony default export */ __webpack_exports__["a"] = ({
  Test: __WEBPACK_IMPORTED_MODULE_0__modules_test__["a" /* default */],
  List: __WEBPACK_IMPORTED_MODULE_1__modules_list__["a" /* default */]
});

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test__ = __webpack_require__(27);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__test__["a" /* default */]);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(28);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Test = function Test(pao) {
  _classCallCheck(this, Test);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleTesty = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleTesty */];
  this.handleAddTestMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleAddTestMiddleware */];
  this.test = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* test */];
};

/* harmony default export */ __webpack_exports__["a"] = (Test);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleTesty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleAddTestMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return test; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var init = function init() {
  console.log('Test has been initialised');
  this.listens({
    'handle-testy': this.handleTesty.bind(this),
    'add-test-middleware': this.handleAddTestMiddleware.bind(this)
  }); //   console.log(this.pao)
  //   console.log(this) 
  //   this.emit({
  // 	  type: "handle-test",
  // 	  data: {
  // 		  callback: async function(e,res){
  // 			console.dir('The e value is: ',e)
  // 			console.log('The res value is: ',res)
  // 		  },
  // 		  value: "Test value"
  // 	  }
  // 	})
  // 	console.log('AFTER HANDLE-TEST HAS BEEN EMITTED')
};
var handleTesty = function handleTesty(data) {
  console.log('HANDLE TEST EVENT HAS BEEN EMITTED'); // this.html = data.html

  var self = this;
  console.dir('This module contains the following resources: ', self);
  console.log(self);
};
var handleAddTestMiddleware = function handleAddTestMiddleware(data) {
  console.log('HandleAddTestMiddleware has occured');
  console.log(data); // this.html = data.html

  var self = this;
  data.filterCallback(data.type, self.test.bind(self));
};
var test = function test(req, res, next) {
  console.log('HI THERE, I AM A TEST MIDDLEWARE AND I LOVE IT');
  console.log(_typeof(res.send));
  next();
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middleware__ = __webpack_require__(30);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__middleware__["a" /* default */]);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(31);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bodyParser = __webpack_require__(25);

var Middleware = function Middleware(pao) {
  _classCallCheck(this, Middleware);

  this.pao = pao;
  this.body = bodyParser;
  this.middlewares = {
    all: [{
      type: 'function',
      value: function value(req, res, next) {
        console.log('I am the zeenith ware'), next();
      }
    }, {
      type: 'module',
      value: 'test'
    }] // console.log('THE STORE')
    // console.log(this.supubu

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* init */];
  this.handleAttachMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleAttachMiddleware */];
  this.attachMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* attachMiddleware */];
  this.handleConfigMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleConfigMiddleware */];
};

/* harmony default export */ __webpack_exports__["a"] = (Middleware);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleAttachMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleConfigMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachMiddleware; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var init = function init() {
  console.log('Middleware has been initialised');
  this.listens({
    'config-middleware': this.handleConfigMiddleware.bind(this),
    'attach-middleware': this.handleAttachMiddleware.bind(this)
  });
};
var handleAttachMiddleware = function handleAttachMiddleware(data) {
  this.attachMiddleware(data);
};
var handleConfigMiddleware = function handleConfigMiddleware(data) {
  var self = this;
  console.log('THE HANDLE CONFIG MIDDLEWARE');
  console.log(data);
  console.log(data);
  var middlewares = data;
  console.log(middlewares);

  var _loop = function _loop(p) {
    self.log('THE P');
    self.log(p);

    if (self.middlewares[p]) {
      if (middlewares[p].addMiddleware) {
        self.log('INSIDE EXISTENT MIDDLEWARE ITEM');
        self.log(middlewares[p]);
        middlewares[p].addMiddleware.forEach(function (m, i) {
          self.middlewares[p].push(m);
        });
      } else if (p === 'removeMiddleware') {}
    } else {
      if (middlewares[p].addMiddleware) {
        self.middlewares[p] = _objectSpread({}, middlewares[p].addMiddleware);
      }
    }
  };

  for (var p in middlewares) {
    _loop(p);
  }
};
var attachMiddleware = function attachMiddleware(data) {
  var self = this;

  if (data.app) {
    console.log('SELF.MIDDLEWARES');
    console.log(self.middlewares);

    if (self.middlewares.pprivate && self.middlewares.ppublic) {
      self.emit({
        type: 'router-middleware',
        data: {
          middleware: {
            "public": self.middlewares.ppublic,
            "private": self.middlewares.pprivate
          }
        }
      });
    } else if (self.middlewares["private"]) {
      self.emit({
        type: 'router-middleware',
        data: {
          middleware: {
            "private": self.middlewares.pprivate
          }
        }
      });
    } else if (self.middlewares["public"]) {
      self.emit({
        type: 'router-middleware',
        data: {
          middleware: {
            "public": self.middlewares.ppublic
          }
        }
      });
    }

    if (self.middlewares.all) {
      console.log('FOR EVERY REQUEST MIDDLEWARES');
      console.log(self.middlewares.all);
      self.middlewares.all.forEach(function (m, i) {
        if (m.type === 'function') {
          data.app.use(m.value);
        } else if (m.type === 'module') {// self.emit({type: `add-${m.value}-middleware`,data: data.app})
        }
      });
    }
  }
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(33);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */]);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(34);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var express = __webpack_require__(23),
    // fs = require('fs'),
// randomstring = require("randomstring"),
jsonfile = __webpack_require__(24),
    path = __webpack_require__(0),
    bodyParser = __webpack_require__(25); // const app = express()
// import notifier from './notifier'


var Server = function Server(pao) {
  _classCallCheck(this, Server);

  this.pao = pao;
  this.xpress = express;
  this.http = this.xpress();
  this.router = this.xpress.Router();
  this.path = path;
  this.html = [];
  this.request = null;
  this.componentCount = 0;
  this.componentId = [];
  this.ssrComponentLen = 0;
  this.componentRefLen = 0;
  this.fixedCompS = {
    before: [],
    after: []
  };
  this.compData = [];
  this.dependiks = {
    jsonfile: jsonfile,
    bodyParser: bodyParser // // methods

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleConfigServer = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleConfigServer */];
  this.handleWriteServerRequestResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleWriteServerRequestResponse */];
  this.startServer = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* startServer */];
  this.startPreRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* startPreRoutes */];
  this.startRouting = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* startRouting */];
  this.runServer = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* runServer */];
  this.renderHtml = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* renderHtml */];
};

/* harmony default export */ __webpack_exports__["a"] = (Server);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleConfigServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return startServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return startPreRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return startRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return runServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return renderHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleWriteServerRequestResponse; });
var init = function init() {
  console.log('Server has been initialised'); //   console.log(this.pao)
  //   console.log(this)

  this.listens({
    'config-server': this.handleConfigServer.bind(this),
    'write-server-request-response': this.handleWriteServerRequestResponse.bind(this)
  });
};
var handleConfigServer = function handleConfigServer(data) {
  var self = this;
  self.emit({
    type: 'attach-middleware',
    data: {
      app: self.http
    }
  });
  self.emit({
    type: 'attach-routes',
    data: {
      app: self.http,
      router: self.router
    }
  });
  self.startServer();
};
var startServer = function startServer(data) {
  var self = this; // this.startPreRoutes()
  // this.startRouting()

  this.runServer();
};
var startPreRoutes = function startPreRoutes() {
  var self = this;
  self.http.use(self.dependiks.bodyParser.json()); // self.http.use(function(req, res, next) {
  // 	// console.log(req.body)
  // 	// console.log('Your mobile has reached this code Surprise')
  // 	res.header("Access-Control-Allow-Origin", "*");
  // 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // 	return next();
  // });

  self.http.use('*.js', function (req, res, next) {
    // console.log(req.body)
    // console.log('Your mobile has reached this code Surprise')
    res.set("content-type", "text/javascript");
    return next();
  });
  self.http.use(self.xpress["static"]("public"));
};
var startRouting = function startRouting() {
  var self = this; //   self.http.get('/smarfo/menu',function(req,res){
  // 	console.log('Request for menu has just been received')
  // 	let categories = require('./jsondb/foodcategories.json');
  // 	return res.send(categories.menu);
  // })

  self.http.get('/todo', self.renderHtml.bind(self));
  self.http.get('/ibr', self.renderHtml.bind(self));
  self.http.get('/home', self.renderHtml.bind(self));
  self.http.use('/', self.renderHtml.bind(self));
};
var runServer = function runServer() {
  var self = this;
  self.http.listen(process.env.PORT || 3000, function () {
    console.log("The Server is listening");
  });
};
var renderHtml = function renderHtml(req, res) {
  var self = this;
  console.log('A request has been made to one of the routes');
  console.log('The html');
  console.log('The request URL');
  console.log(req.url);
  self.request = {
    req: req,
    res: res
  };
  self.emit({
    type: "address-changed",
    data: {
      url: req.url
    }
  }); //    console.log(this)
};
var handleWriteServerRequestResponse = function handleWriteServerRequestResponse(data) {
  var self = this;
  console.log('SERVER IS ABOUT TO SEND RESPONSE BACK TO CLIENT');
  data.res.set('Connection', 'close');
  data.res.status(200).send(data.data);
  console.log('SERVER HAS SENT A RESPONSE BACK TO THE CLIENT');
  return;
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parsers__ = __webpack_require__(36);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__parsers__["a" /* default */]);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(37);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var jsonfile = __webpack_require__(24),
    path = __webpack_require__(0),
    bodyParser = __webpack_require__(25);

var Parsers = function Parsers(pao) {
  _classCallCheck(this, Parsers);

  this.pao = pao;
  this.path = path;
  this.dependiks = {
    jsonfile: jsonfile,
    bodyParser: bodyParser
  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleAddParsers = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleAddParsers */];
  this.addParsers = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* addParsers */];
};

/* harmony default export */ __webpack_exports__["a"] = (Parsers);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleAddParsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addParsers; });
var init = function init() {
  console.log('Parsers has been initialised');
  this.listens({
    'add-parsers': this.handleAddParsers.bind(this)
  });
};
var handleAddParsers = function handleAddParsers(data) {
  this.addParsers(data);
};
var addParsers = function addParsers(data) {
  var self = this;
  var pao = self.pao;
  console.log('ABOUT TO ADD PARSERS');
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(39);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */]);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(40);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Router = function Router(pao) {
  _classCallCheck(this, Router);

  this.pao = pao;
  this.routes = null;
  this.routerMiddleware = null;
  this.filteredpublicMiddlewares = [];
  this.filteredprivateMiddlewares = [];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* init */];
  this.handleConfigRouter = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* handleConfigRouter */];
  this.handleAttachRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleAttachRoutes */];
  this.handleRouterMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleRouterMiddleware */];
  this.attachRoutes = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* attachRoutes */];
  this.renderRoute = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* renderRoute */];
  this.appendRouter = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* appendRouter */];
  this.middlewareType = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* middlewareType */];
  this.outOfRouterContext = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* outOfRouterContext */];
  this.handOver = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handOver */];
  this.filterCallback = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* filterCallback */];
};

/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return handleConfigRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleRouterMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleAttachRoutes; });
/* unused harmony export addRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return attachRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return renderRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appendRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return middlewareType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return outOfRouterContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filterCallback; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var init = function init() {
  console.log('Router has been initialised');
  this.listens({
    'config-router': this.handleConfigRouter.bind(this),
    'router-middleware': this.handleRouterMiddleware.bind(this),
    'attach-routes': this.handleAttachRoutes.bind(this)
  });
};
var handleConfigRouter = function handleConfigRouter(data) {
  console.log('THE HANDLE CONFIG ROUTER MODULE');
  var self = this;
  self.routes = data;
};
var handleRouterMiddleware = function handleRouterMiddleware(data) {
  var self = this;
  console.log('THE ROUTER MIDDLEWARE');
  console.log(data);
  self.routerMiddleware = data.middleware;
};
var handleAttachRoutes = function handleAttachRoutes(data) {
  this.attachRoutes(data);
};
var addRoutes = function addRoutes(data) {};
var attachRoutes = function attachRoutes(data) {
  var self = this;

  if (data.app) {
    data.app.use('/', data.router);
    self.routes.forEach(function (r, i) {
      r['router'] = data.router;
      self.renderRoute(r);
    });
    data.router.use(self.outOfRouterContext.bind(this));
  }
};
var renderRoute = function renderRoute(r) {
  var self = this;
  var pao = this.pao;
  var routy = {
    router: r.router,
    method: r.method,
    path: r.path,
    handOver: self.handOver
  };
  console.log('THE ROUTE MIDDLEWARE');
  console.log(self.routerMiddleware["public"]);

  if (r.middlewares) {
    if (self.routerMiddleware && self.routerMiddleware[r.type]) {
      self.middlewareType(r.type, r.middlewares);
      self.middlewareType(r.type, pao.pa_objectToArray(self.routerMiddleware[r.type]));
      self.appendRouter(_objectSpread({
        middleware: self["filtered".concat(r.type, "Middlewares")]
      }, routy));
    } else {
      self.middlewareType(r.type, r.middlewares);
      self.appendRouter(_objectSpread({
        middleware: self["filtered".concat(r.type, "Middlewares")]
      }, routy));
    }
  } else if (self.routerMiddleware && self.routerMiddleware[r.type]) {
    self.middlewareType(r.type, pao.pa_objectToArray(self.routerMiddleware[r.type]));
    self.appendRouter(_objectSpread({
      middleware: self["filtered".concat(r.type, "Middlewares")]
    }, routy));
  } else {
    self.appendRouter(routy);
  }
};
var appendRouter = function appendRouter(r) {
  console.log('THE APPENDROUTER');

  if (r.middleware) {
    r.router[r.method.toLowerCase()](r.path, r.middleware, r.handOver.bind(this));
  } else {
    r.router[r.method.toLowerCase()](r.path, r.handOver.bind(this));
  }
};
var middlewareType = function middlewareType(type, middlewares) {
  var self = this;
  console.log('THE MIDDLEWARETYP MIDDLEWARES');
  console.log(middlewares);
  middlewares.forEach(function (m, i) {
    if (m.type === 'function') {
      self["filtered".concat(type, "Middlewares")].push(m.value);
    } else if (m.type === 'module') {
      self.emit({
        type: "add-".concat(m.value, "-middleware"),
        data: {
          type: type,
          filterCallback: self.filterCallback.bind(self)
        }
      });
    }
  });
};
var outOfRouterContext = function outOfRouterContext(req, res) {
  var self = this;
  var data = {
    error: true,
    type: "NotFound",
    code: 404,
    message: 'Resource was not found'
  };
  self.emit({
    type: 'write-server-request-response',
    data: {
      data: data,
      res: res
    }
  });
};
var handOver = function handOver(req, res) {
  console.log('THE CAUGHT REQUEST INSIDE ROUTER');
  var self = this;
  self.emit({
    type: 'request-handover',
    data: {
      req: req,
      res: res
    }
  }); // return res.json({todo:{list:{items:['I ate food','I wrote code','I read a book','I watched a movie']}}})
};
var filterCallback = function filterCallback(filterType, moduleMiddleware) {
  var self = this;

  if (filterType === 'public') {
    self.filteredpublicMiddlewares.push(moduleMiddleware);
  } else {
    self.filteredprivateMiddlewares.push(moduleMiddleware);
  }
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(42);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */]);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confy__ = __webpack_require__(44);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Config = function Config(pao) {
  _classCallCheck(this, Config);

  this.pao = pao;
  this.config = __WEBPACK_IMPORTED_MODULE_1__confy__["a" /* default */];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.configure = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* configure */];
};

/* harmony default export */ __webpack_exports__["a"] = (Config);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configure; });
var init = function init() {
  console.log('Config has been initialised');
  this.configure();
};
var configure = function configure() {
  var self = this;
  var config = self.config;
  console.log('THE VALUE OF CONFIG SELF.CONFIG');
  console.log(self.config);

  if (self.config) {
    for (var c in config) {
      console.log(c);

      if (c === 'logger') {
        self.emit({
          type: "config-anziiloger",
          data: config[c]
        });
      } else {
        self.emit({
          type: "config-".concat(c),
          data: config[c]
        });
      }
    }
  }
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__includes_routes__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__includes_globals__ = __webpack_require__(51);


/* harmony default export */ __webpack_exports__["a"] = ({
  middleware: {
    ppublic: {
      addMiddleware: __WEBPACK_IMPORTED_MODULE_1__includes_globals__["c" /* ppublic */]
    },
    pprivate: {
      addMiddleware: __WEBPACK_IMPORTED_MODULE_1__includes_globals__["b" /* pprivate */]
    },
    all: {
      addMiddleware: __WEBPACK_IMPORTED_MODULE_1__includes_globals__["a" /* all */]
    }
  },
  router: __WEBPACK_IMPORTED_MODULE_0__includes_routes__["a" /* default */],
  logger: {
    level: 'info',
    transports: ['file', {
      path: 'http://www.iiprodakts/logger'
    }]
  },
  server: 'server'
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(46);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */]);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(47);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Request = function Request(pao) {
  _classCallCheck(this, Request);

  this.pao = pao;
  this.request = {};
  this.requestData = null;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* init */];
  this.handleRequestHandOver = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* handleRequestHandOver */];
  this.parseRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* parseRequest */];
  this.handleRequestGlobalError = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleRequestGlobalError */];
  this.handleRequestGlobalResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* handleRequestGlobalResponse */];
  this.handleBadRequestError = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleBadRequestError */];
  this.handleHandlerNotFound = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleHandlerNotFound */];
  this.handleByHandlerError = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleByHandlerError */];
  this.handleHandlerError = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleHandlerError */];
  this.handlePathError = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* handlePathError */];
  this.writeResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* writeResponse */];
  this.successfullHandle = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* successfullHandle */];
  this.failureHandle = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* failureHandle */];
};

/* harmony default export */ __webpack_exports__["a"] = (Request);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return handleRequestHandOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return parseRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleRequestGlobalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return handlePathError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleRequestGlobalResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleBadRequestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleHandlerNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleByHandlerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleHandlerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return writeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return successfullHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return failureHandle; });
var init = function init() {
  console.log('Request has been initialised');
  this.listens({
    'request-handover': this.handleRequestHandOver.bind(this),
    'request-global-request-response': this.handleRequestGlobalResponse.bind(this),
    'request-global-request-error': this.handleRequestGlobalError.bind(this),
    'request-handler-error': this.handleHandlerError.bind(this)
  });
};
var handleRequestHandOver = function handleRequestHandOver(data) {
  var self = this;
  self.request.res = data.res;
  var parsed = self.parseRequest(data.req);
  console.log('parsed');
  console.log(parsed.url.trim().split('/'));
  var handler = parsed.url.split('/')[1];

  if (handler) {
    self.requestData = {
      parsed: parsed,
      handler: handler
    };
    self.emit({
      type: 'request-global-request',
      data: handler
    });
  } else {
    self.handlePathError();
  }
};
var parseRequest = function parseRequest(req) {
  console.log('The req');
  var requiredData = {
    url: req.originalUrl
  };

  if (req.query && Object.keys(req.query).length > 0) {
    console.log('THE QUERY');
    console.log(req.query);
    requiredData.qry = req.query;
  } else if (req.params) {
    console.log('THE PARAMS');
    console.log(req.params);
    requiredData.params = req.params;
  }

  console.log('REQUEST DATA', requiredData);
  return requiredData;
};
var handleRequestGlobalError = function handleRequestGlobalError(data) {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'serverError',
    code: 502,
    message: 'The server error'
  });
};
var handlePathError = function handlePathError(data) {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'ServerError',
    code: 502,
    message: 'The requested task[handler] could not be completed'
  });
};
var handleRequestGlobalResponse = function handleRequestGlobalResponse(data) {
  var self = this;
  self.emit({
    type: "".concat(self.requestData.handler, "-handle-task"),
    data: {
      data: self.requestData,
      callbacks: {
        successfullHandle: self.successfullHandle.bind(self),
        failureHandle: self.failureHandle.bind(self)
      }
    }
  });
};
var handleBadRequestError = function handleBadRequestError() {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'BadRequest',
    code: 400,
    message: 'Bad Request'
  });
};
var handleHandlerNotFound = function handleHandlerNotFound() {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'NotFound',
    code: 404,
    message: 'The requested task could not be completed'
  });
};
var handleByHandlerError = function handleByHandlerError() {
  var self = this;
  self.writeResponse({
    error: true,
    type: 'notFound',
    code: 404,
    message: 'The requested task could not be completed'
  });
};
var handleHandlerError = function handleHandlerError() {
  var self = this;
  self.handleHandlerError();
};
var writeResponse = function writeResponse(data) {
  var self = this;
  self.emit({
    type: 'write-server-request-response',
    data: {
      data: data,
      res: self.request.res
    }
  });
};
var successfullHandle = function successfullHandle(data) {
  var self = this;
  self.writeResponse(data);
};
var failureHandle = function failureHandle(data) {
  var self = this;
  self.writeResponse(data);
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middlewares__ = __webpack_require__(50);

/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/register/:username/:pass',
  method: 'POST',
  type: 'public'
}, {
  path: '/login/:username/:pass',
  method: 'post',
  type: 'public'
}, {
  path: '/user',
  method: 'GET',
  type: 'private'
}, {
  path: 'view/:profile',
  method: 'GET',
  type: 'public'
}, {
  path: '/list/:name',
  method: 'GET',
  middlewares: __WEBPACK_IMPORTED_MODULE_0__middlewares__["a" /* list */],
  type: 'private'
}, {
  path: '/pirlo/:name/:pass',
  method: 'GET',
  type: 'public'
}, {
  path: '/fetch',
  method: 'GET',
  type: 'public'
}]);

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return list; });
var list = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log("This is the list middleware");
    next();
  }
}, {
  type: 'function',
  value: function value(req, res, next) {
    console.log('THE originalUrl:');
    console.log(req.originalUrl);
    next();
  }
}, {
  type: 'module',
  value: 'test'
}];

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ppublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pprivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return all; });
var ppublic = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log("This is the public middleware");
    next();
  }
}, {
  type: 'function',
  value: function value(req, res, next) {
    console.log('THE originalUrl: public 2');
    console.log(req.originalUrl);
    next();
  }
}];
var pprivate = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log("This is the PRIVATE middleware");
    next();
  }
}, {
  type: 'function',
  value: function value(req, res, next) {
    console.log('THE originalUrl: ANOTHER PRIVATE');
    console.log(req.originalUrl);
    next();
  }
}];
var all = [{
  type: 'function',
  value: function value(req, res, next) {
    console.log('I AM THE MIDDLEWARE THAT RUNS ON EVERY REQUEST'); // console.log(req)

    next();
  }
}];

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list__ = __webpack_require__(53);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__list__["a" /* default */]);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(54);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var List = function List(pao) {
  _classCallCheck(this, List);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleListTask = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleListTask */];
  this.list = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* list */];
};

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleListTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return list; });
var init = function init() {
  console.log('List has been initialised');
  this.listens({
    'list-handle-task': this.handleListTask.bind(this)
  });
};
var handleListTask = function handleListTask(data) {
  var self = this;
  self.list(data);
};
var list = function list(data) {
  console.log('LIST DATA');
  console.log(data);
  var self = this;
  var pao = self.pao;

  if (data.hasOwnProperty('callbacks')) {
    if (pao.pa_isObject(data.callbacks)) {
      if (data.callbacks.successfullHandle) {
        data.callbacks.successfullHandle({
          todo: {
            list: {
              items: ['I ate food', 'I wrote code', 'I read a book', 'I watched a movie']
            }
          }
        });
      }
    }
  } else {}
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(56);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */]);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(57);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Global = function Global(pao) {
  _classCallCheck(this, Global);

  this.pao = pao;
  this.globals = [];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleRequestGlobalRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleRequestGlobalRequest */];
};

/* harmony default export */ __webpack_exports__["a"] = (Global);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleRequestGlobalRequest; });
var init = function init() {
  console.log('Global has been initialised');
  this.listens({
    'request-global-request': this.handleRequestGlobalRequest.bind(this)
  });
};
var handleRequestGlobalRequest = function handleRequestGlobalRequest(data) {
  var self = this;

  if (self.globals && self.globals.length > 0) {
    if (self.globals.hasOwnProperty(data.module)) {
      self.emit({
        type: 'request-global-request-response',
        data: true
      });
    } else {
      self.emit({
        type: 'request-global-request-response',
        data: false
      });
    }
  } else {
    self.emit({
      type: 'request-global-request-error',
      data: false
    });
  }
};

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anziiloger__ = __webpack_require__(59);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__anziiloger__["a" /* default */]);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(60);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Anziiloger = function Anziiloger(pao) {
  _classCallCheck(this, Anziiloger);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleLogRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleLogRequest */];
  this.handleListTask = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleListTask */];
};

/* harmony default export */ __webpack_exports__["a"] = (Anziiloger);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleLogRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleListTask; });
var init = function init() {
  console.log('List has been initialised');
  this.listens({
    'anziiloger-log': this.handleLogRequest.bind(this)
  });
};
var handleLogRequest = function handleLogRequest(data) {
  var self = this;
  console.log(data.source, 'logged message: ', data.message, ' of type ', data.type);
};
var handleListTask = function handleListTask(data) {
  var self = this;
  self.list(data);
};

/***/ })
/******/ ]);