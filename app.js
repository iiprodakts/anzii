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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server_serverdev__ = __webpack_require__(7);

Object(__WEBPACK_IMPORTED_MODULE_0__server_serverdev__["a" /* default */])();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_anzii__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_modules__ = __webpack_require__(69);

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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__esm_esm__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_activate__ = __webpack_require__(68);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pillar_pillar__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pillar_pillar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pillar_pillar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_pao__ = __webpack_require__(17);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Base = function Base() {
  _classCallCheck(this, Base);

  this.CORE = __WEBPACK_IMPORTED_MODULE_1__base_core__["a" /* default */], this.PAO = __WEBPACK_IMPORTED_MODULE_2__base_pao__["a" /* default */], this.PILLAR = __WEBPACK_IMPORTED_MODULE_0__pillar_pillar___default.a;
};

/* harmony default export */ __webpack_exports__["a"] = (new Base());

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// DEPENDECIES 
var os = __webpack_require__(2);

var util = __webpack_require__(11);

var async = __webpack_require__(12);

var extend = __webpack_require__(13);

var fs = __webpack_require__(14);

var path = __webpack_require__(0);

var uuid = __webpack_require__(15);
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



		Library 	 : Pillar
		Version 	 : 1.0.0
		Author		 : Anzii organisation
		Website		 : www.anzii.com
		Date Created : 23/08/2019


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


module.exports = {
  EMAIL: '',
  PASSWORD: '',
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
    console.log('STRING TO ARRAY');
    console.log(string);
    console.log(sep);

    if (this.is_string(string)) {
      console.log('THE STRING IS AN INSTANCE OF STRING');
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
  is_valid_email: function is_valid_email(email) {
    return true;
  },
  is_valid_password: function is_valid_password(password) {
    return true;
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
  throwErrors: function throwErrors(errorMessage) {
    // Define throwErrors method				
    throw new Error(errorMessage);
  },
  contains: function contains(o, v) {
    if (this.is_array(o)) {
      return o.indexOf(v) > -1 ? true : false;
    } else if (this.is_object(o)) {
      if (this.is_array(v)) {
        console.log('THE SPECIFED VALUE TO CHECK IS AN ARRAY');
        console.log(v);
        var outcome = '';

        for (var i = 0; i < v.length; i++) {
          if (!o.hasOwnProperty(v[i])) {
            outcome = false;
            break;
          } else if (i === v.length - 1) {
            outcome = true;
          }
        }

        console.log('THE OUTCOME');
        console.log(outcome);
        return outcome;
      } else {
        return o.hasOwnProperty(v) ? true : false;
      }
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
        // console.log('THE FOROF Y IS NULL')
        // console.log(x)
        var newX = {};

        for (var p in x) {
          var prop = action(p, x[p]);
          newX[prop.p] = prop.v;
        } // console.log('THE NEWX')
        // console.log(newX)


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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("node.extend");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 16 */
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
        this.modules[moduleId][modInstId] = module;
      } else {
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
    isValidEmail: function isValidEmail(e) {
      return PILLAR.is_valid_email(e);
    },
    isValidPassword: function isValidPassword(p) {
      return PILLAR.is_valid_password(p);
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
    },
    mkdirsSync: function mkdirsSync(abs, isFileName, callback) {
      return PILLAR.p_mkdirs(abs, isFileName, callback);
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
    if (moduleID !== 'anziiloger') {
      this.modules['anziiloger']['anziiloger'].setDebugger(this.modules[moduleID][modInstId].constructor.name);
    }

    this.modules[moduleID][modInstId].init();

    if (moduleID === 'global') {
      console.log('THE GLOBAL MODULES IS ABOUT TO RECEIVE MODULES'); // console.log(Object.keys(this.modules))

      this.modules[moduleID][modInstId].globals = Object.keys(this.modules);
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
    },
    stringToArray: function stringToArray(str, sep) {
      return PILLAR.string_to_array(str, sep);
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
            // console.log(self.sanna().modules)
            comp.emit = self.sanna().modules.addiks.emit.bind(comp);
          } else if (typeof comp.emit !== 'function') {
            throw new Error('Emit is a reserved Akii method');
          }
        },
        listens: function listens(comp) {
          // console.log('THE COMPONENT RUNS')
          if (!comp.hasOwnProperty('listens')) {
            // console.log('THE LISTENS COMP PROP')
            comp.listens = self.sanna().modules.addiks.listens.bind(comp); // console.log(comp)
          } else if (typeof comp.listens !== 'function') {
            throw new Error('Listens is a reserved ANZii method');
          }
        },
        log: function log(comp) {
          comp.log = self.sanna().modules.addiks.log.bind(comp);
        },
        query: function query(comp) {
          comp.query = self.sanna().modules.addiks.query.bind(comp);
        }
      },
      addiks: {
        emit: function emit(data) {
          var self = this;
          var pao = this.pao; // self.log(self.constructor.name,'is emitting event:',data.type,'with data: ')

          pao.pa_notifyEvent({
            type: data.type,
            data: data.data
          });
        },
        listens: function listens(evehandles) {
          var self = this;
          var pao = this.pao;
          self.log('MODULE', self.constructor.name, 'listens to event(s):', evehandles);
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
        },
        query: function query() {
          var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var document = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var self = this;
          var pao = self.pao;

          if (!model || !document) {
            throw new Error('Query method missing required parameters');
          } else {
            var modelFrags = pao.pa_isString(model) ? pao.pa_stringToArray(model, '.') : model;
            console.log(pao.pa_stringToArray);
            console.log(modelFrags);

            if (modelFrags.length === 3) {
              var mo = {
                vendor: modelFrags[0],
                table: modelFrags[1],
                operation: modelFrags[2]
              };
              self.emit({
                type: 'data-hive-request',
                data: {
                  model: mo,
                  document: document,
                  handler: handler
                }
              });
            } else if (model[1].trim() === 'PROCEDURE' || 'JOIN' || 'SEARCH' || 'TRANSACTION') {
              var _mo = {
                vendor: modelFrags[0],
                table: modelFrags[1].toLowerCase(),
                operation: modelFrags[1].toLowerCase()
              };
              self.emit({
                type: 'data-hive-request',
                data: {
                  model: _mo,
                  document: document,
                  handler: handler
                }
              });
            } else {
              console.log('THE ARRAY');
              console.log(modelFrags);
              throw new Error('Query method requires database vendor,table and operation');
            }
          }
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
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middleware_index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parsers_index__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_index__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_index__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_index__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_index__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__anziiloger_index__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__system_index__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mysql_index__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dao_index__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dman_index__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__global_index__ = __webpack_require__(65);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }














var Esm = function Esm() {
  _classCallCheck(this, Esm);

  this.Esm = {
    Anziiloger: __WEBPACK_IMPORTED_MODULE_6__anziiloger_index__["a" /* default */],
    Mysql: __WEBPACK_IMPORTED_MODULE_8__mysql_index__["a" /* default */],
    System: __WEBPACK_IMPORTED_MODULE_7__system_index__["a" /* default */],
    Middleware: __WEBPACK_IMPORTED_MODULE_0__middleware_index__["a" /* default */],
    Parsers: __WEBPACK_IMPORTED_MODULE_1__parsers_index__["a" /* default */],
    Router: __WEBPACK_IMPORTED_MODULE_2__router_index__["a" /* default */],
    Request: __WEBPACK_IMPORTED_MODULE_3__request_index__["a" /* default */],
    Dao: __WEBPACK_IMPORTED_MODULE_9__dao_index__["a" /* default */],
    Dman: __WEBPACK_IMPORTED_MODULE_10__dman_index__["a" /* default */],
    Server: __WEBPACK_IMPORTED_MODULE_4__server_index__["a" /* default */],
    Config: __WEBPACK_IMPORTED_MODULE_5__config_index__["a" /* default */],
    Global: __WEBPACK_IMPORTED_MODULE_11__global_index__["a" /* default */]
  };
};

/* harmony default export */ __webpack_exports__["a"] = (new Esm());

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middleware__ = __webpack_require__(20);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__middleware__["a" /* default */]);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(21);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bodyParser = __webpack_require__(1);

var Middleware = function Middleware(pao) {
  _classCallCheck(this, Middleware);

  this.pao = pao;
  this.all = [{
    call: 'static',
    use: 'public'
  }, 'json'];
  this.middlewares = {
    all: [// {type: 'function',value: (req,res,next)=>{
      //    console.log('I am the zeenith ware'),
      //    res.header("Access-Control-Allow-Origin", "*");
      //    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      //    next()
      //   }
      //   },
      // {type: 'module',value: 'test'}
    ] // console.log('THE STORE')
    // console.log(this.supubu

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* init */];
  this.handleAttachMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleAttachMiddleware */];
  this.attachMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* attachMiddleware */];
  this.handleConfigMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleConfigMiddleware */];
  this.handleAddExternalMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleAddExternalMiddleware */];
  this.allWares = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* allWares */];
};

/* harmony default export */ __webpack_exports__["a"] = (Middleware);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleAttachMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleConfigMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleAddExternalMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return attachMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allWares; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var init = function init() {
  this.log('Middleware has been initialised');
  this.listens({
    'config-middleware': this.handleConfigMiddleware.bind(this),
    'add-ext-middleware': this.handleAddExternalMiddleware.bind(this),
    'attach-middleware': this.handleAttachMiddleware.bind(this)
  });
};
var handleAttachMiddleware = function handleAttachMiddleware(data) {
  this.attachMiddleware(data);
};
var handleConfigMiddleware = function handleConfigMiddleware(data) {
  var self = this; //  console.log('THE HANDLE CONFIG MIDDLEWARE')
  //  console.log(data)
  //  console.log(data)

  var middlewares = data; //  console.log(middlewares)

  var _loop = function _loop(p) {
    // self.log('THE P')
    // self.log(p)
    if (self.middlewares[p]) {
      if (middlewares[p].addMiddleware) {
        // self.log('INSIDE EXISTENT MIDDLEWARE ITEM')
        // self.log(middlewares[p])
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
var handleAddExternalMiddleware = function handleAddExternalMiddleware(data) {
  var self = this;
  var pao = self.pao;
  self.log('ADD EXTERNAL MIDDLEWARE EVENT HAS OCCURED');

  if (data.type) {
    if (data.type === 'private') {
      if (data.level === 'top') {
        if (pao.pa_isArray(data.middleware.funk)) {
          data.middleware.forEach(function (m, i) {
            self.middleware.unshift({
              type: 'function',
              value: m.funk,
              ext: true
            });
          });
        } else {
          self.log('THE MIDDLEWARES BEFORE');
          self.log(self.middlewares);

          if (self.middlewares.pprivate) {
            var len = Object.keys(self.middlewares.pprivate).length;
            self.middlewares.pprivate[len] = {
              type: 'function',
              value: data.middleware.funk,
              ext: true
            };
            self.log('Middlewares');
            self.log(self.middlewares);
          }
        }
      } else {}
    } else if (data.type === 'public') {} else if (data.type === 'all') {
      if (data.level === 'top') {}
    }
  }
};
var attachMiddleware = function attachMiddleware(data) {
  var self = this;

  if (data.app) {
    // console.log('SELF.MIDDLEWARES')
    // console.log(self.middlewares)
    if (self.all.length > 0) {
      console.log('THE Allwares is greater than zero');

      if (data.xpress) {
        self.allWares(data.app, data.xpress);
      }
    }

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
      // console.log('FOR EVERY REQUEST MIDDLEWARES')
      // console.log(self.middlewares.all)
      self.middlewares.all.forEach(function (m, i) {
        if (m.type === 'function') {
          data.app.use(m.value);
        } else if (m.type === 'module') {// self.emit({type: `add-${m.value}-middleware`,data: data.app})
        }
      });
    }
  }
};
var allWares = function allWares(app, xpress) {
  var self = this;
  var pao = self.pao;
  self.all.forEach(function (w, i) {
    if (pao.pa_isObject(w)) {
      console.log('Executing allwares');

      if (w.use) {
        console.log('The public:', w.call);
        app.use(xpress[w.call]('public'));
      } else {
        console.log('The none-public:', w.call);
        app.use(xpress[w.call]());
      }
    } else {
      self.log('middleware is string');
      app.use(xpress[w]());
    }
  });
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parsers__ = __webpack_require__(23);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__parsers__["a" /* default */]);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(24);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var jsonfile = __webpack_require__(3),
    path = __webpack_require__(0),
    bodyParser = __webpack_require__(1);

var Parsers = function Parsers(pao) {
  _classCallCheck(this, Parsers);

  this.pao = pao;
  this.path = path;
  this.dependiks = {
    jsonfile: jsonfile,
    bodyParser: bodyParser
  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleShareMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleShareMiddleware */];
};

/* harmony default export */ __webpack_exports__["a"] = (Parsers);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleShareMiddleware; });
var init = function init() {
  this.log('Parsers has been initialised');
  this.listens({
    'share-middleware': this.handleShareMiddleware.bind(this)
  });
};
var handleShareMiddleware = function handleShareMiddleware() {
  var self = this;
  console.log('HANLDE SHARE MIDDLEWARE EVENT HAS OCCURED');
  self.emit({
    type: "add-ext-middleware",
    data: {
      type: 'all',
      level: 'top',
      middleware: {
        funk: [{
          body: self.dependiks.bodyParser,
          call: 'json'
        }]
      }
    }
  });
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(26);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */]);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(27);
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return handleConfigRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleRouterMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleAttachRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return attachRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return renderRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appendRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return middlewareType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return outOfRouterContext; });
/* harmony export (immutable) */ __webpack_exports__["d"] = handOver;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filterCallback; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    handOver: self.handOver // console.log('THE ROUTE MIDDLEWARE')
    // console.log(self.routerMiddleware.public)

  };

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
  // console.log('THE APPENDROUTER')
  if (r.middleware) {
    r.router[r.method.toLowerCase()](r.path, r.middleware, r.handOver.bind(this));
  } else {
    r.router[r.method.toLowerCase()](r.path, r.handOver.bind(this));
  }
};
var middlewareType = function middlewareType(type, middlewares) {
  var self = this; // console.log('THE MIDDLEWARETYP MIDDLEWARES')
  // console.log(middlewares)

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
var outOfRouterContext =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var self, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            data = {
              error: true,
              type: "NotFound",
              code: 404,
              message: 'Resource was not found: OutOfContext'
            };
            self.emit({
              type: 'write-server-request-response',
              data: {
                data: data,
                res: res
              }
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function outOfRouterContext(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
function handOver(_x3, _x4) {
  return _handOver.apply(this, arguments);
}

function _handOver() {
  _handOver = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var self;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('THE CAUGHT REQUEST INSIDE ROUTER');
            self = this;
            self.emit({
              type: 'request-handover',
              data: {
                req: req,
                res: res
              }
            }); // return res.json({todo:{list:{items:['I ate food','I wrote code','I read a book','I watched a movie']}}})

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _handOver.apply(this, arguments);
}

var filterCallback = function filterCallback(filterType, moduleMiddleware) {
  var self = this;

  if (filterType === 'public') {
    self.filteredpublicMiddlewares.push(moduleMiddleware);
  } else {
    self.filteredprivateMiddlewares.push(moduleMiddleware);
  }
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(29);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */]);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(30);
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
  this.writeResponse = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* writeResponse */];
  this.taskerHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* taskerHandler */];
  this.successfullHandle = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* successfullHandle */];
  this.failureHandle = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* failureHandle */];
};

/* harmony default export */ __webpack_exports__["a"] = (Request);

/***/ }),
/* 30 */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return writeResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return taskerHandler; });
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
      handler: handler,
      request: {
        req: data.req,
        res: data.res
      }
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
  console.log('The req'); // console.log('THE REQUEST BODY')
  // console.log(req.body)

  var requiredData = {
    url: req.originalUrl
  };

  if (req.query && Object.keys(req.query).length > 0) {
    console.log('THE QUERY');
    console.log(req.query);
    requiredData.user = req.query;
  } else if (req.params && Object.keys(req.params).length > 1) {
    console.log('THE PARAMS');
    console.log(req.params);
    requiredData.user = req.params;
  } else if (req.body && Object.keys(req.body).length > 1) {
    console.log('THE REQUEST BODY');
    console.log(req.body);
    requiredData.user = req.body;
  }

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

  if (!data) {
    self.handleByHandlerError();
  } else {
    self.emit({
      type: "handle-".concat(self.requestData.handler, "-task"),
      data: {
        user: self.requestData,
        callback: self.taskerHandler.bind(self)
      }
    });
  }
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
  var pao = self.pao;
  console.log('THE DATA IN WRITERESPONSE');
  console.log(data);
  pao.pa_isString() ? data = pao.pa_jsToJson({
    text: data
  }) : data = pao.pa_jsToJson(data);
  self.emit({
    type: 'write-server-request-response',
    data: {
      data: data,
      res: self.request.res
    }
  });
};
var taskerHandler = function taskerHandler() {
  var fail = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;
  console.log('THE TASKER HANDLER');
  console.log(fail);

  if (fail) {
    self.failureHandle({
      error: true,
      message: fail
    });
  } else if (success) {
    self.successfullHandle(success);
  }
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(32);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */]);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(33);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var express = __webpack_require__(34),
    // fs = require('fs'),
// randomstring = require("randomstring"),
jsonfile = __webpack_require__(3),
    path = __webpack_require__(0),
    bodyParser = __webpack_require__(1); // const app = express()
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
/* 33 */
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
    type: 'share-middleware',
    data: ''
  });
  self.emit({
    type: 'attach-middleware',
    data: {
      app: self.http,
      xpress: self.xpress
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
  self.emit({
    type: 'attach-workers-to-server',
    data: {
      app: self.http
    }
  }); // self.http.listen(process.env.PORT || 3000,()=>{
  //   self.log("The Server is listening",'info')
  // })
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
  self.log('SERVER IS ABOUT TO SEND RESPONSE BACK TO CLIENT');
  data.res.set('Connection', 'close');
  data.res.status(200).send(data.data);
  console.log(data.data);
  self.log('SERVER HAS SENT A RESPONSE BACK TO THE CLIENT');
  return;
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(36);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */]);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confy__ = __webpack_require__(38);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


 // Dependecies 

var envObserver = __webpack_require__(42);

var supportsColor = __webpack_require__(43);

var Config = function Config(pao) {
  _classCallCheck(this, Config);

  this.pao = pao;
  this.config = __WEBPACK_IMPORTED_MODULE_1__confy__["a" /* default */];
  this.envObserver = envObserver;
  this.supportsColor = supportsColor;
  this.env = 'development';
  this.aliases = {
    development: 'dev',
    production: 'prod',
    staging: 'stage'
  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.configure = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* configure */];
  this.enviroment = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* enviroment */];
};

/* harmony default export */ __webpack_exports__["a"] = (Config);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return enviroment; });
var init = function init() {
  this.log('Config has been initialised');
  this.configure();
};
var configure = function configure() {
  var self = this;
  var config = self.config; // console.log('THE VALUE OF CONFIG SELF.CONFIG')
  // console.log(self.config)

  if (self.config) {
    if (self.config.hasOwnProperty('logger')) {
      console.log('THE LOGGER IS THE FIRST MODULE TO GET CONFIG');
      self.emit({
        type: "config-anziiloger",
        data: self.config.logger
      });
    }

    self.enviroment();
    self.config.hasOwnProperty('cluster') ? self.emit({
      type: 'config-system',
      data: self.config.cluster
    }) : '';

    for (var c in config) {
      console.log(c);

      if (c !== 'logger') {
        self.emit({
          type: "config-".concat(c),
          data: config[c]
        });
      }
    }
  }
};
var enviroment = function enviroment() {
  var self = this;
  var envObserver = self.envObserver;
  var supportsColor = self.supportsColor;
  console.log('THE CURRENT ENVIROMENT'); // console.log(envObserver)

  if (supportsColor.stdout) {
    console.log('Terminal stdout supports color');
  }

  if (supportsColor.stdout.has256) {
    console.log('Terminal stdout supports 256 colors');
  }

  if (supportsColor.stderr.has16m) {
    console.log('Terminal stderr supports 16 million colors (truecolor)');
  }

  if (self.envObserver.has('enviroment')) {
    if (self.aliases.hasOwnProperty(envObserver.enviroment)) {
      self.env = self.aliases[envObserver.enviroment];
      var envCofig = envObserver.get(self.env);

      if (envCofig.hasOwnProperty('database')) {
        var clients = [];
        var db = envCofig.database;
        console.log('THE DB');
        console.log(db);

        for (var c in db) {
          console.log('THE VALUE Of C');
          console.log(c);
          console.log(db[c]);
          clients.push({
            name: c,
            connect: db[c].connect
          });
        }

        self.emit({
          type: "config-dman",
          data: {
            clients: clients
          }
        });
      }

      if (envObserver.has('appOrphic')) {
        console.log('THE JWT appOrphic');
        console.log(envObserver);
        console.log(envObserver.appOrphic);
        console.log(envObserver.appOrphic.flaDev);
        self.emit({
          type: 'save-jwt-key',
          data: {
            key: envObserver.appOrphic['flaDev']
          }
        });
      } else {
        self.emit({
          type: 'save-jwt-key',
          data: {
            key: 'f124sfet48tq3dfmlvoszx1'
          }
        });
      }
    } else {
      self.log('Enviroment config invalid, resorting to default', 'warn');
    }
  } // let db = self.envObserver.get('dev')
  // console.log(db)
  // console.log(db.database.mysql.connect.user)

};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__includes_routes__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__includes_globals__ = __webpack_require__(41);


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
    trans: ['file', {
      path: 'http://www.iiprodakts/logger'
    }]
  },
  cluster: {
    workers: 3,
    spawn: true
  },
  server: 'server'
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middlewares__ = __webpack_require__(40);

/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/register',
  method: 'POST',
  type: 'public'
}, {
  path: '/login',
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
/* 40 */
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
/* 41 */
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
    console.log('I AM THE MIDDLEWARE THAT RUNS ON EVERY REQUEST');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // console.log(req)

    next();
  }
}];

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("supports-color");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anziiloger__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__anziiloger__["a" /* default */]);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(46);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // Dependecies 

var winston = __webpack_require__(47);

var debugr = __webpack_require__(48);

var Anziiloger = function Anziiloger(pao) {
  _classCallCheck(this, Anziiloger);

  this.pao = pao;
  this.winlo = winston;
  this.debugr = debugr;
  this.logger = null;
  this.debugas = {};
  this.defaultTransports = [{
    trans: 'File',
    level: 'info',
    handleExceptions: true,
    json: true,
    label: 'Anzilloger',
    maxsize: 5242880,
    maxFiles: 5,
    timestamp: true,
    colorize: false
  }, {
    trans: 'Console',
    level: 'debug',
    handleExceptions: true,
    json: false,
    timestamp: true,
    colorize: true
  }];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* init */];
  this.handleLogRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleLogRequest */];
  this.handleAnziilogerConfig = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleAnziilogerConfig */];
  this.info = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* info */];
  this.warn = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* warn */];
  this.error = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* error */];
  this.debug = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* debug */];
  this.setDebugger = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* setDebugger */];
};

/* harmony default export */ __webpack_exports__["a"] = (Anziiloger);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleLogRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleAnziilogerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setDebugger; });
var init = function init() {
  this.setDebugger(this.constructor.name); //   this.handleAnziilogerConfig()

  console.log('Anziiloger has been initialised');
  this.listens({
    'config-anziiloger': this.handleAnziilogerConfig.bind(this),
    'anziiloger-log': this.handleLogRequest.bind(this)
  });
};
var handleLogRequest = function handleLogRequest(data) {
  var self = this;

  if (self.logger) {
    switch (data.type) {
      case 'info':
        self.info(data);
        break;

      case 'warn':
        self.warn(data);
        break;

      case 'error':
        self.error(data);

      default:
        self.debug(data);
    }
  } else {
    console.log(data.source, 'logged message: ', data.message, ' of type ', data.type);
  }
};
var handleAnziilogerConfig = function handleAnziilogerConfig(data) {
  var self = this; // console.log('THE DEUGAS')
  // console.log(self.debugas)

  var pao = self.pao; // console.log('ANZII LOGGER IS CATCHING AN EVENT FROM CONFIG')
  // console.log(data)
  // data.hasOwnProperty('transports')
  //   ? pao.pa_isArray(data.transports) 
  // 	 ? self.defaultTransports.concat(data.transports)
  // 	 : console.log('Config: invalid def..  ')
  //   :''

  var now = new Date();
  self.logger = new self.winlo.createLogger({
    transports: [new self.winlo.transports.File({
      name: 'production',
      level: 'info',
      filename: './logs/production.log',
      handleExceptions: true,
      json: true,
      label: 'Anzilloger',
      maxsize: 5242880,
      maxFiles: 5,
      timestamp: now,
      colorize: false
    }), new self.winlo.transports.File({
      name: 'errors',
      level: 'error',
      filename: './logs/errors.log',
      handleExceptions: true,
      json: true,
      label: 'Anzilloger',
      maxsize: 5242880,
      maxFiles: 5,
      timestamp: true,
      colorize: false
    }), new self.winlo.transports.Console({
      level: 'debug',
      label: 'Anzilloger',
      timestamp: true,
      colorize: true
    })]
  });
};
var info = function info(log) {
  var self = this; // self.log('THE INFO METHOD RECEIVES A CALL')
  // self.log(log)

  self.logger.info("".concat(log.source, ": ").concat(log.message));
};
var debug = function debug(log) {
  var self = this;

  if (self.debugas.hasOwnProperty(log.source.toLowerCase())) {
    // console.log('THE DEBUG MODULE IS USED')
    // console.log(self.debugas)
    self.debugas[log.source.toLowerCase()](log.message);
  } else {
    self.logger.debug("".concat(log.source, ": ").concat(log.message));
  }
};
var warn = function warn(log) {
  var self = this;
  self.logger.warn("".concat(log.source, ": ").concat(log.message));
};
var error = function error(log) {
  var self = this;
  self.logger.error("".concat(log.source, ": ").concat(log.message));
};
var setDebugger = function setDebugger(mod) {
  var self = this;
  var name = mod.toLowerCase();
  self.debugas[name] = self.debugr("anzii:".concat(name));
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__system__ = __webpack_require__(50);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__system__["a" /* default */]);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(51);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // Dependecies

var cluster = __webpack_require__(52);

var http = __webpack_require__(53);

var os = __webpack_require__(2);

var System = function System(pao) {
  _classCallCheck(this, System);

  this.pao = pao;
  this.context = process;
  this.env = this.context.env;
  this.cluster = cluster;
  this.os = os;
  this.shutDownServices = [];
  this.numOfDBSD = 3;
  this.allowedDBSTR = 10000;
  this.systemIsShuttingDown = false;
  this.shutDownOrder = [];
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* init */];
  this.handleConfigureSystem = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleConfigureSystem */];
  this.handleRegisterShutDownCandidate = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleRegisterShutDownCandidate */];
  this.handleServerAttachWorkers = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleServerAttachWorkers */];
  this.masterWorker = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* masterWorker */];
  this.folkSlaveWorkers = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* folkSlaveWorkers */];
  this.handleShutDowns = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* handleShutDowns */];
  this.shutDown = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* shutDown */];
};

/* harmony default export */ __webpack_exports__["a"] = (System);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleConfigureSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return shutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return masterWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return folkSlaveWorkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleShutDowns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleServerAttachWorkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleRegisterShutDownCandidate; });
var init = function init() {
  this.log('System has been initialised');
  this.listens({
    'config-system': this.handleConfigureSystem.bind(this),
    'register-shutdown-candidate': this.handleRegisterShutDownCandidate.bind(this),
    'attach-workers-to-server': this.handleServerAttachWorkers.bind(this)
  }); // console.log(this.env)
};
var handleConfigureSystem = function handleConfigureSystem(data) {
  var self = this;
  self.log("System ENVIROMENT IS: ".concat(self.env));
  self.handleShutDowns();
  self.clusterCustomConfig = data; // self.masterWorker(data)
};
var shutDown = function shutDown(type, code) {
  var self = this;
  self.log("SHUTDOWN TYPE: ".concat(type, ",code: ").concat(code));
  self.systemIsShuttingDown = true;

  if (self.shutDownServices.length > 0) {
    self.shutDownServices.forEach(function (sd, i) {
      if (typeof sd !== 'function') {
        self.log("Service: ".concat(self.shutDownOrder[i], " must be a function,shutdown attempt failed"), 'warn');
      } else {
        self.log("Service: ".concat(self.shutDownOrder[i], " is shutting down"), 'info');
      }
    });
  }

  self.log("System is shutting down through: ".concat(type, ",with code: ").concat(code.stack));
  type === 'uncaughtException' ? self.context.kill(1) : self.context[type]();
};
var masterWorker = function masterWorker(app) {
  var self = this;
  self.log("THE STATUS OF isMaster: ".concat(self.cluster.isMaster));

  if (self.cluster.isMaster) {
    self.log("Master ".concat(self.context.pid, " is running"));

    if (self.clusterCustomConfig.spawn) {
      var slaves = self.clusterCustomConfig.workers ? self.clusterCustomConfig.workers : 'auto';

      if (slaves === 'auto') {
        slaves = self.os.cpus().length;

        for (var s = 0; slaves < slaves; s++) {
          self.cluster.fork();
        }
      } else {
        if (typeof slaves === 'number') {
          for (var _s = 0; _s < slaves; _s++) {
            self.log("Forking slave number: ".concat(_s));
            self.cluster.fork();
          }
        }
      }
    } else {
      self.log('System is running on a single thread/core');
    } // app.listen(self.context.env.PORT || 3000,()=>{
    // 	self.log("The Server is listening via workers",'info')
    //   })


    self.cluster.on('exit', function (worker, code, signal) {
      console.log("worker ".concat(worker.process.pid, " died"));
    });
  } else {
    console.log('IT IS NOT THE MASTER PROCESS');
    console.log("Worker ".concat(process.pid, " started"));
    app.listen(self.context.env.PORT || 3000, function () {
      self.log("The Server is listening via workers", 'info');
    });
  }
};
var folkSlaveWorkers = function folkSlaveWorkers(mainWorker) {};
var handleShutDowns = function handleShutDowns() {
  console.log('Shutdowns are being handled');
  var self = this;
  self.context.on('INT', function (code) {
    if (!self.systemIsShuttingDown) {
      self.shutDown('kill', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
  self.context.on('SIGTEM', function (code) {
    if (!self.systemIsShuttingDown) {
      self.shutDown('exit', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
  self.context.on('uncaughtException', function (code) {
    if (!self.systemIsShuttingDown) {
      self.shutDown('uncaughtException', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
  self.context.on('unhandledRejection', function (code) {
    console.log('uncaughtException occured from unhandlerejected');

    if (!self.systemIsShuttingDown) {
      self.shutDown('uncaughtException', code);
    } else {
      self.log('System is already ShuttingDown');
    }
  });
};
var handleServerAttachWorkers = function handleServerAttachWorkers(data) {
  var self = this;
  self.masterWorker(data.app);
};
var handleRegisterShutDownCandidate = function handleRegisterShutDownCandidate(data) {
  var self = this;

  if (data.hasOwnProperty('candidate') && pao.pa_isFunction(data.candidate) && data.hasOwnProperty('name') && pao.pa_isString(name)) {
    if (!(self.shutDownServices.indexOf(data.name) > -1)) {
      self.shutDownServices.push(data.candidate);
      self.shutDownOrder.push(data.name);
    }
  } else {
    self.log('Candidate could not be registered for shutdown', 'warn');
  }
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("cluster");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mysql__ = __webpack_require__(55);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__mysql__["a" /* default */]);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(56);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Mysql = function Mysql(pao) {
  _classCallCheck(this, Mysql);

  this.pao = pao; // // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* init */];
  this.handleMysqlDataRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* handleMysqlDataRequest */];
  this.insertOne = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* insertOne */];
  this.insertMany = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* insertMany */];
  this.findOne = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* findOne */];
  this.updateOne = __WEBPACK_IMPORTED_MODULE_0__methods__["updateOne"];
  this.TRANSACTION = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* TRANSACTION */];
  this.PROCEDURE = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* PROCEDURE */];
  this.JOIN = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* JOIN */];
  this.procedure = __WEBPACK_IMPORTED_MODULE_0__methods__["p" /* procedure */];
  this.transaction = __WEBPACK_IMPORTED_MODULE_0__methods__["r" /* transaction */];
  this.join = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* join */];
  this.joinExek = __WEBPACK_IMPORTED_MODULE_0__methods__["n" /* joinExek */];
  this.joinStatement = __WEBPACK_IMPORTED_MODULE_0__methods__["o" /* joinStatement */];
  this.joinConditionsFormat = __WEBPACK_IMPORTED_MODULE_0__methods__["m" /* joinConditionsFormat */];
  this.combineFields = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* combineFields */];
  this.insert = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* insert */];
  this.rollback = __WEBPACK_IMPORTED_MODULE_0__methods__["q" /* rollback */];
  this.deleteOne = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* deleteOne */];
};

/* harmony default export */ __webpack_exports__["a"] = (Mysql);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return handleMysqlDataRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return insertOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return insertMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findOne; });
/* unused harmony export UpdateOne */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return procedure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROCEDURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JOIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return combineFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return rollback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return joinExek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return joinConditionsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return joinStatement; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var init = function init() {
  console.log('Mysql has been initialised');
  this.listens({
    'mysql-data-request': this.handleMysqlDataRequest.bind(this)
  });
};
var handleMysqlDataRequest = function handleMysqlDataRequest(data) {
  var self = this;
  var pao = self.pao;
  self.log("Handling Mysql Data Request");
  self.log(data.table);
  self.log(data.outComehandler);
  self.log(data.opi); // self.log(data)

  if (!pao.pa_contains(data, ['conn', 'table', 'opi', 'query', 'outComehandler'])) {
    self.log('Data request operations failed');
    data.outComehandler({
      message: 'Database operation failed'
    });
  } else {
    if (!pao.pa_isObject(data.conn)) {
      self.log('THE connection is not object');
    } else {
      if (!pao.pa_isString(data.table)) {
        self.log('THE TABLE NAME IS NOT A STRING');
      } else {
        if (!self[data.opi]) {
          self.log('DATA.OPI IS NOT CONTAINED AS FUNCTION');
        } else {
          console.log('THE CODE GOES THIS FAR');

          if (data.opi === 'insert') {
            data.opi = 'insertOne';
            self[data.opi](data);
            console.log('this runs after opi finishes');
          } else if (data.opi === 'find') {
            data.opi = 'findOne';
            self[data.opi](data);
          } else if (data.opi === 'updateOne') {
            data.opi = 'UpdateOne';
            self[data.opi](data);
          } else if (data.opi === 'transaction') {
            data.opi = 'transaction';
            self[data.opi](data);
          } else if (data.opi === 'procedure') {
            data.opi = 'procedure';
            self[data.opi](data);
          } else if (data.opi === 'join') {
            data.opi = 'join';
            self[data.opi](data);
          } else if (data.opi === 'search') {
            data.opi = 'search';
            self[data.opi](data);
          } else {
            self[data.opi](data);
          }
        }
      }
    }
  }
};
var insertOne = function insertOne(data) {
  var self = this;
  var pao = self.pao;

  if (!pao.pa_isObject(data)) {} else {
    try {
      var q = data.query.user;
      var fields = Object.keys(q);
      var sql = "INSERT INTO ?? (".concat(fields[0], ",").concat(fields[1], ",").concat(fields[2], ",").concat(fields[3], ") VALUES(?)");
      var queryAttributes = [data.table, ["NULL", q.email, q.first_name, q.last_name]];
      sql = data.conn.format(sql, queryAttributes); //  let sql = `INSERT INTO ${data.table} SET ?`

      data.conn.query(sql, function (e, r, f) {
        console.log('INSERT RESULT');
        console.log(r);
        console.log(e);
        if (e) data.outComehandler(e, null);
        r.user = {
          email: q.email,
          username: q.first_name
        };
        data.outComehandler(null, r);
      });
    } catch (e) {
      console.log('CAUTH ERROR');
      console.log(e);
      data.outComehandler(e, null);
    }
  }
};
var insertMany = function insertMany(data) {
  if (!pao.pa_isObject(data)) {} else {
    try {
      var sql = "INSERT\xA0INTO\xA0".concat(data.table, "\xA0SET\xA0?");
      var result = [];
      var fullImplement = true;
      data.forEach(function (d, i) {
        data.query(sql, d, function (e, r, f) {
          if (e) {
            fullImplement = false;
          } else {
            result.push(r);
          }
        });
      });
      data.outComeHandler(null, result);
    } catch (e) {
      data.outComeHandler(e, null);
    }
  }
};
var findOne = function findOne(data) {
  var self = this;
  var pao = self.pao;
  console.log('THE DATA IN FINDONE');
  console.log(data);

  if (!pao.pa_isObject(data)) {} else {
    try {
      var keys = Object.keys(data.query.user);
      var sql = "SELECT * FROM ?? WHERE ?? = ? LIMIT 1";
      var queryAttributes = [data.table, keys[0], data.query.user[keys[0]]];
      sql = data.conn.format(sql, queryAttributes);
      console.log('THE SQL');
      console.log(sql);
      data.conn.query(sql, [data.query], function (e, r, f) {
        console.log('THE QUERY IS COMPLETED WITH RESULTS');
        console.log(e);
        console.log(r);
        console.log(_typeof(r));
        console.log(f);
        console.log(r instanceof Array);
        console.log('After R evaluation');
        if (e) data.outComehandler(e, null, data);
        if (pao.pa_isArray(r) && r.length > 0) r = r[0];
        data.outComehandler(null, r, data);
      });
    } catch (e) {
      // console.log('AN ERROR OCCURED IN FIND ONE ')
      // console.log(e)
      data.outComehandler(e, null);
    }
  }
};
var UpdateOne = function UpdateOne(data) {
  if (!pao.pa_isObject(document)) {} else {
    try {
      var sql = "SELECT * FROM\xA0".concat(data.table, "\xA0WHERE\xA0?");
      var result = data.query(sql, [data.query], function (e, r, f) {
        if (e) data.outComeHandler(e, null);
        data.outComeHandler(null, r);
      });
    } catch (e) {
      data.outComeHandler(e, null);
    }
  }
};
var deleteOne = function deleteOne(data) {
  if (!pao.pa_isObject(document)) {} else {
    try {
      var sql = "SELECT * FROM\xA0".concat(data.table, "\xA0WHERE\xA0?");
      var result = data.query(sql, [data.query], function (e, r, f) {
        if (e) data.outComeHandler(e, null);
        data.outComeHandler(null, r);
      });
    } catch (e) {
      data.outComeHandler(e, null);
    }
  }
};
var transaction = function transaction(data) {
  var self = this;

  if (typeof data.query === 'function') {
    data.query();
  } else {
    self.TRANSACTION(data.query, data.conn, data.outComehandler);
  }

  h;
};
var procedure = function procedure(data) {
  console.log('THE procedure got a call');
  var self = this;

  if (typeof data.query === 'function') {
    data.query();
  } else {
    console.log('INSIDE PROCEDURE'); //  console.log(data.outComehandler)
    //  console.log(data)

    self.PROCEDURE(data.query, data.conn, data.outComehandler);
  }
};
var join = function join(data) {
  console.log('THE procedure got a call');
  var self = this;

  if (typeof data.query === 'function') {
    data.query();
  } else {
    console.log('INSIDE JOIN'); //  console.log(data.outComehandler)
    //  console.log(data)

    self.JOIN(data.query, data.conn, data.outComehandler);
  }
};
var TRANSACTION = function TRANSACTION(collections, conn) {
  var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var self = this;
  var pao = self.pao;
  var collectionsIds = [];
  var breakOut = false;

  for (var c = 0; c < collections.length; c++) {
    var i = collections[c];
    var fields = null;
    var sources = null;
    var own = null;

    if (!pao.pa_contains(i, 'fields')) {
      handler('Required collection/table field missing');
      break;
    } else {
      if (pao.pa_contains(i.fields, 'tables')) {
        sources = i.fields.tables;
        own = i.fields.own;
      }
    }

    sources ? fields = self.combineFields(sources, own, collectionsIds) : '';
    fields ? i.fields = fields : '';
    self.insert(i, conn).then(function (insert) {
      collectionsIds.push(insert);
    })["catch"](function (failedInsert) {
      self.rollback(collectionsIds);
      handler(failedInsert, null);
      breakOut = true;
    });
    if (breakOut) break;

    if (c === collections.length - 1) {
      console.log('Operation completed successfully');
      handler('Transaction Operation sucessful');
    }
  }
};
var PROCEDURE =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(collections, conn) {
    var handler,
        self,
        pao,
        collectionsIds,
        breakOut,
        c,
        i,
        fields,
        sources,
        own,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            handler = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
            self = this;
            pao = self.pao;
            self.log('THE PROCEDURE METHOD');
            self.log(collections);
            self.log(handler);
            self.log(conn);
            collectionsIds = [];
            breakOut = false;
            c = 0;

          case 10:
            if (!(c < collections.length)) {
              _context.next = 31;
              break;
            }

            i = collections[c];
            fields = null;
            sources = null;
            own = null;

            if (pao.pa_contains(i, 'fields')) {
              _context.next = 20;
              break;
            }

            handler('Required collection/table field missing');
            return _context.abrupt("break", 31);

          case 20:
            if (pao.pa_contains(i.fields, 'tables')) {
              console.log('sources will be assigned A VALUE');
              sources = i.fields.tables;
              own = i.fields.own;
            }

          case 21:
            sources ? fields = self.combineFields(sources, own, collectionsIds) : '';
            fields ? i.fields = fields : '';
            _context.next = 25;
            return self.insert(i, conn).then(function (insert) {
              collectionsIds.push(insert);
            })["catch"](function (failedInsert) {
              handler(failedInsert, null);
              breakOut = true;
            });

          case 25:
            if (!breakOut) {
              _context.next = 27;
              break;
            }

            return _context.abrupt("break", 31);

          case 27:
            if (c === collections.length - 1) {
              console.log('Operation completed successfully');
              console.log(collectionsIds);

              if (collectionsIds.length > 0) {
                console.log('PROCEDURE IS COMPLETED');
                console.log(collectionsIds);
                handler(null, {
                  user: {
                    username: collectionsIds[0].fields.email
                  }
                });
              } else {
                handler('An insert has went wrong');
              }
            }

          case 28:
            c++;
            _context.next = 10;
            break;

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function PROCEDURE(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var insert = function insert(inset, conn) {
  var self = this;
  var pao = pao;
  return new Promise(function (resolve, reject) {
    // do a thing, possibly async, then… 
    console.log('Executing the insert promise');
    var sql = "INSERT INTO ?? SET ?";
    var queryAttributes = [inset.name, inset.fields];
    sql = conn.format(sql, queryAttributes); //  let sql = `INSERT INTO ${data.table} SET ?`

    conn.query(sql, function (e, r, f) {
      if (e) {
        console.log('Promise is rejecting');
        reject(e);
      } else {
        self.findOne({
          conn: conn,
          table: inset.name,
          query: {
            user: {
              id: r.insertId
            }
          },
          outComehandler: function outComehandler() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var insert = {};

            if (e) {
              console.log('the errorINSERT');
              console.log(e);
              console.log(data);
              insert.error = e;
              insert.lastInsert = data.query.user.id;
              insert.fields = null;
              insert.collection = data.table;
              console.log('Promise is Resolving with findOne error');
              console.log(insert);
              resolve(insert);
            } else {
              insert.lastInsert = data.query.user.id;
              insert.fields = r;
              insert.collection = data.table;
              console.log('Promise is Resolving with FindOne SUCCESS');
              console.log(insert);
              resolve(insert);
            }
          }
        });
      }
    });
  });
};
var JOIN =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(join, conn) {
    var handler,
        self,
        pao,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            handler = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
            self = this;
            pao = self.pao;
            self.joinExek(join, conn).then(function (result) {
              console.log('jOIN is successful, sending results to the requester');
              console.log(result);
              handler(null, result);
            })["catch"](function (failedRequest) {
              console.log('JOIN FAILED');
              console.log(failedRequest);
              handler(failedRequest, null);
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function JOIN(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var combineFields = function combineFields(tables, own, ids) {
  var fields = {};
  console.log('COMBINE FIELDS GETS A CALL');
  tables.forEach(function (v, i) {
    var _loop = function _loop(co) {
      if (ids[co].collection === v.name) {
        v.values.forEach(function (vv, ii) {
          console.log('THE VV');
          console.log(vv);
          var fieldValuePair = vv.split('.');
          console.log('FIELD VALUE PAIR');
          console.log(fieldValuePair);
          fields[fieldValuePair[1]] = ids[co].fields[fieldValuePair[0]];
        });
        return "break";
      }
    };

    for (var co = 0; co < ids.length; co++) {
      var _ret = _loop(co);

      if (_ret === "break") break;
    }
  });
  var keys = Object.keys(own);
  console.log('THE KEYS OF OWN');
  console.log(keys);
  keys.forEach(function (k, i) {
    fields[k] = own[k];
  });
  console.log('THE FIELDS');
  console.log(fields);
  return fields;
};
var rollback = function rollback(rolbacks) {
  var self = this;
  rolbacks.forEach(function (roll, i) {
    self.deleteOne({
      id: roll.lastInsert
    }, conn);
  });
};
var joinExek = function joinExek(join, conn) {
  var self = this;
  return new Promise(function (resolve, reject) {
    // do a thing, possibly async, then… 
    console.log('Executing the JOIN promise');
    var options = {
      fields: join.returnFields,
      from: {
        table: join.tables[0],
        condition: self.joinConditionsFormat(join.conditions)
      },
      joinPoints: self.joinConditionsFormat(join.joinPoints, 'ON'),
      tables: join.tables.splice(1, join.tables.length),
      type: join.type.toUpperCase(),
      length: join.joins
    };
    var sql = self.joinStatement(options);
    var queryAttributes = [options.from.table, options.tables[0]];
    console.log('THE SQL BEFORE FORMAT');
    console.log(sql);
    sql = conn.format(sql, queryAttributes);
    console.log(sql);
    conn.query(sql, function (e, r, f) {
      if (e) {
        console.log('Promise is rejecting JOIN');
        console.log(e);
        reject(e);
      } else {
        console.log('Promise is Resolving JOIN');
        console.log(r);
        console.log(r[0]);
        resolve(r[0]);
      }
    });
  });
};
var joinConditionsFormat = function joinConditionsFormat(conditions) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  console.log('CONDITIONS');
  console.log(conditions);

  if (type) {
    var cons = conditions;
    var condition = [];
    cons.forEach(function (con, i) {
      var conList = con.trim().split(' ');
      var operand = '=';
      condition.push("".concat(conList[0], " ").concat(operand, " ").concat(conList[2]));
    });
    console.log('THE JOIN ON CONDITION');
    console.log(condition);
    return condition;
  } else {
    var _cons = conditions;
    var _condition = '';

    _cons.forEach(function (con, i) {
      console.log('THE con ITEM');
      console.log(con);
      var conList = con.trim().split(' ');
      console.log('THE CONLIST');
      console.log(conList);
      var operand = '';

      switch (conList[1]) {
        case 'EQUALS':
          operand = '=';
          break;

        case 'ISGREATEROREQUALS':
          operand = '>=';
          break;

        case 'ISLESSOREQUALS':
          operand = '<=';
          break;

        default:
          operand = '=';
      }

      _condition += "".concat(conList[0], " ").concat(operand, " '").concat(conList[2], "'");
    });

    console.log('THE JOIN FROM CONDITION');
    console.log(_condition);
    return _condition.trim();
  }
};
var joinStatement = function joinStatement(options) {
  console.log('THE JOIN OPTIONS');
  console.log(options);

  switch (options.length) {
    case 3:
      return "SELECT ".concat(options.fields, "\n               FROM ").concat(options.from.table, "\n               JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.conditons[0], "\n               JOIN options.tables[1]\n                  ON ").concat(options.conditions[1], "\n               WHERE ").concat(options.from.condition, "\n               \n               ");
      break;

    case 4:
      return "SELECT ".concat(options.fields, "\n               FROM ").concat(options.from.table, "\n               JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.conditons[0], "\n               JOIN options.tables[1]\n                  ON ").concat(options.conditions[1], "\n               JOIN options.tables[2]\n                  ON ").concat(options.conditions[2], "\n               WHERE ").concat(options.from.condition, "\n               \n               ");
      break;

    case 5:
      return "SELECT ".concat(options.fields, "\n               FROM ").concat(options.from.table, "\n               JOIN ").concat(options.tables[0], "\n                  ON ").concat(options.conditons[0], "\n               JOIN options.tables[1]\n                  ON ").concat(options.conditions[1], "\n               JOIN options.tables[2]\n                  ON ").concat(options.conditions[2], " \n               JOIN options.tables[3]\n                  ON ").concat(options.conditions[3], "\n               WHERE ").concat(options.from.condition, "\n               \n               ");
      break;

    default:
      return "SELECT ".concat(options.fields, "\n               FROM  ??\n               JOIN  ??\n                  ON ").concat(options.joinPoints[0], "\n               WHERE ").concat(options.from.condition, "\n               ");
  }
};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dao__ = __webpack_require__(58);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__dao__["a" /* default */]);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(59);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Dao = function Dao(pao) {
  _classCallCheck(this, Dao);

  this.pao = pao;
  this.DBS = null;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleDataHiveRequest = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleDataHiveRequest */];
  this.handleDaoTakeDbs = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleDaoTakeDbs */];
};

/* harmony default export */ __webpack_exports__["a"] = (Dao);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleDataHiveRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleDaoTakeDbs; });
var init = function init() {
  console.log('Dao has been initialised');
  this.listens({
    'dao-take-dbs': this.handleDaoTakeDbs.bind(this),
    'data-hive-request': this.handleDataHiveRequest.bind(this)
  });
};
var handleDataHiveRequest = function handleDataHiveRequest(data) {
  var self = this;
  var pao = self.pao;
  console.log('DAO');
  console.log(data);

  if (!pao.pa_contains(self.DBS, data.model.vendor)) {
    throw new Error('Specified database client is unknown');
  } else {
    var model = data.model;
    self.emit({
      type: "".concat(model.vendor, "-data-request"),
      data: {
        conn: self.DBS[model.vendor],
        table: model.table,
        opi: model.operation,
        query: data.document,
        outComehandler: data.handler
      }
    });
  }
};
var handleDaoTakeDbs = function handleDaoTakeDbs(data) {
  var self = this;
  self.log('Handling Hive Request');

  if (self.DBS === null) {
    self.DBS = {};
    self.DBS[data.vendor] = data.conn;
  } else {
    self.DBS[data.vendor] = data.conn;
  } // self.log('The dbs inside self.DBS')
  // console.log(self.DBS)

};

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dman__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__dman__["a" /* default */]);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(62);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // 
// const dman = require('redis')

var Dman = function Dman(pao) {
  _classCallCheck(this, Dman);

  this.pao = pao;
  this.DBS = [];
  this.supportedClients = {
    // mongo: {
    //   protocol: 'mongopro',
    //   connectMethods: ''
    // 	// connect: (0
    // },
    mysql: {
      protocol: '',
      connectMethod: 'createConnection'
    } // pg: {
    // },
    // redis: {
    // },
    // sqlite: {
    // }
    // // methods

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleConfigureDBMan = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleConfigureDBMan */];
  this.connectToClient = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* connectToClient */];
  this.getClientDriver = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* getClientDriver */];
  this.connect = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* connect */];
};

/* harmony default export */ __webpack_exports__["a"] = (Dman);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleConfigureDBMan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return connectToClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getClientDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connect; });
var init = function init() {
  this.log('Dman has been initialised');
  this.listens({
    'config-dman': this.handleConfigureDBMan.bind(this)
  }); //   self.query('mysql',sql,process)
};
var handleConfigureDBMan = function handleConfigureDBMan(data) {
  var self = this;
  var pao = self.pao;
  console.log('THE DBMAN HANLDECONFIGURE');
  console.log('THE SUPPORTED CLIENTS');
  console.log(self.supportedClients);

  if (!pao.pa_isObject(data)) {
    self.log("No Client database client specified,System will use default", 'warn');
  } else {
    if (!pao.pa_contains(data, 'clients')) {
      self.error('System requires clients property with valid config to interface with database clients');
    } else {
      if (!pao.pa_isArray(data.clients)) {} else {
        var supported = self.supportedClients;

        try {
          data.clients.forEach(function (c, i) {
            if (!pao.pa_contains(supported, c.name)) {
              self.throwError("Client: \"".concat(c.name, " is not supported by the system\""));
            } else {
              self.connectToClient(c);
            }
          });

          if (self.DBS.length > 0) {
            self.log("Sending databases to the dao");
            self.emit({
              type: 'dao-take-dbs',
              data: {
                dbs: self.DBS
              }
            });
          }
        } catch (e) {}
      }
    }
  }
};
var connectToClient = function connectToClient(client) {
  var self = this;
  self.log("System is about to connect to client: ".concat(client.name));
  self.getClientDriver(client);
  self.supportedClients[client.name].connect(client);
};
var getClientDriver = function getClientDriver(client) {
  var self = this;
  console.log("System is getting a client driver");
  console.log('THE OTHER DETAILS BELOW');
  console.log(client.name);
  console.log(client.name === 'mysql');

  try {
    var name = client.name;

    if (name === 'mysql') {
      self.supportedClients[client.name].driver = __webpack_require__(63);
    } else if (name === 'pg') {
      self.supportedClients[client.name].driver = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"pg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } else if (name === 'redis') {
      self.supportedClients[client.name].driver = __webpack_require__(64);
    } else if (name === 'mongo') {
      self.supportedClients[client.name].driver = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"mongo\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } else {
      self.supportedClients[client.name].driver = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"sqlite\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } // switch(client.name){
    // 	case 'mysql': self.supportedClients[client.name].driver = require('mysql') 
    // 	break;
    // 	case 'pg': self.supportedClients[client.name].driver = require('pg') 
    // 	break;
    // 	case 'redis': self.supportedClients[client.name].driver = require('redis') 
    // 	break;
    // 	case 'mongo': self.supportedClients[client.name].driver = require('mongo') 
    // 	break;
    // 	default: self.supportedClients[client.name].driver = require('sqlite') 
    // 	break;
    // }


    if (!self.supportedClients[client.name].driver) {
      console.log('THE DRIVER REQUIREMENT FAILED');
      self.throwError('Failed to get client driver module');
    }

    self.connect(client);
  } catch (e) {
    console.log('THE DRIVER CONNECT ERROR');
    console.log(e.stack);
  }
};
var connect = function connect(client) {
  var self = this;
  self.log("System is connecting to client: ".concat(client.name));

  try {
    var sclient = self.supportedClients[client.name];
    var opts = {
      host: client.connect.host,
      user: client.connect.user,
      password: client.connect.pass,
      database: client.connect.name
    };
    var res = sclient.driver[sclient.connectMethod](opts, function (err, res) {
      if (err) {
        console.log('THE ACTUAL CONNECTION ERROR');
        console.log(err.stack);
      } else {
        self.DBS[client.name] = res;
        self.log("System has successfully connected to client");
        self.log("Client ready to serve queries");
      }
    }); //   console.log(res)

    res.connect(function (e) {
      if (e) {
        throw new Error(e);
      } else {
        self.DBS[client.name] = res;
        self.log("System has successfully connected to client");
        self.log("System is handing client connection");
        self.emit({
          type: 'dao-take-dbs',
          data: {
            vendor: client.name,
            conn: res
          }
        });
        self.log("Client ready to serve queries");
      }
    }); //   console.log('THE RESULTS')
    //   res.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    // 	if (error) throw error;
    // 	console.log('THE CONNECTION TO THE DATABASE')
    // 	console.log('The solution is: ', results[0].solution);
    //   });
    //   res.query()
  } catch (e) {
    console.log('THE CONNECTION EROR');
    console.log(e.stack);
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(66);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */]);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(67);
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
/* 67 */
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
  self.log('The Modules: ', self.globals);

  if (self.globals && self.globals.length > 0) {
    if (self.globals.indexOf(data) > -1) {
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
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activate; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Activate = function Activate() {
  var libs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // let pao = ''
  // let core = ''
  // console.log('The Server')
  var core = new this.ANZII.CORE(this.ANZII.PILLAR);
  var pao = new this.ANZII.PAO(core);
  var anziiloger = {
    Anziiloger: this.ESM.Esm.Anziiloger
  };
  delete this.ESM.Esm.Anziiloger; // console.log(anziiloger)
  // console.log(this.ESM.Esm)
  // console.log('The core before modules')
  // console.log(pao.sb_jsToJson(core))
  // console.log(libs.length)
  // console.log('The ESM MODULES SHOULD BE IN PLACE RIGHT NOw')
  // console.log(this.ESM)
  // console.log(pao)
  // let global = pao.pa_clone(this.ESM.Esm.Global) 
  // delete this.ESM.Esm.Global

  libs.unshift(anziiloger);
  console.log('THE CORE');
  console.log(libs);
  libs.push(this.ESM.Esm); // libs.push(global) 

  libs.forEach(function (lib) {
    for (var moco in lib) {
      // console.log('Inside activate')
      // console.log(moco)
      console.log('THE LIB MOCO');
      console.log(_typeof(lib[moco]));
      console.log(lib[moco]);
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
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_test__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_list__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_fetch__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_jwt__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_hash__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_register__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_authentication__ = __webpack_require__(94);








/* harmony default export */ __webpack_exports__["a"] = ({
  Test: __WEBPACK_IMPORTED_MODULE_0__modules_test__["a" /* default */],
  List: __WEBPACK_IMPORTED_MODULE_1__modules_list__["a" /* default */],
  Fetch: __WEBPACK_IMPORTED_MODULE_2__modules_fetch__["a" /* default */],
  Jwt: __WEBPACK_IMPORTED_MODULE_3__modules_jwt__["a" /* default */],
  Hash: __WEBPACK_IMPORTED_MODULE_4__modules_hash__["a" /* default */],
  Register: __WEBPACK_IMPORTED_MODULE_5__modules_register__["a" /* default */],
  Login: __WEBPACK_IMPORTED_MODULE_6__modules_login__["a" /* default */],
  Authentication: __WEBPACK_IMPORTED_MODULE_7__modules_authentication__["a" /* default */]
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test__ = __webpack_require__(71);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__test__["a" /* default */]);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(72);
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
/* 72 */
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
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list__ = __webpack_require__(74);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__list__["a" /* default */]);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(75);
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
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleListTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return list; });
var init = function init() {
  console.log('List has been initialised');
  this.listens({
    'handle-list-task': this.handleListTask.bind(this)
  });
};
var handleListTask = function handleListTask(data) {
  var self = this;
  self.list(data);
};
var list = function list(data) {
  var self = this;
  var pao = self.pao;
  self.log('LIST DATA');
  self.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      todo: {
        list: {
          items: ['I ate food', 'I wrote code', 'I read a book', 'I watched a movie']
        }
      }
    });
  } else {}
};

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetch__ = __webpack_require__(77);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__fetch__["a" /* default */]);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(78);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Fetch = function Fetch(pao) {
  _classCallCheck(this, Fetch);

  this.pao = pao;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* init */];
  this.handleListTask = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleListTask */];
  this.list = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* list */];
};

/* harmony default export */ __webpack_exports__["a"] = (Fetch);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleListTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return list; });
var init = function init() {
  this.log('Fetch has been initialised');
  this.listens({
    'handle-fetch-task': this.handleListTask.bind(this)
  });
};
var handleListTask = function handleListTask(data) {
  var self = this;
  self.list(data);
};
var list = function list(data) {
  var self = this;
  var pao = self.pao;
  var cpus = 4;
  console.log(data);

  if (data.hasOwnProperty('callback')) {
    data.callback(null, {
      fetch: ['Fetch', 'the', 'data', cpus]
    });
  } else {}
};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jwt__ = __webpack_require__(80);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__jwt__["a" /* default */]);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(81);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var jwt = __webpack_require__(82);

var Jwt = function Jwt(pao) {
  _classCallCheck(this, Jwt);

  this.pao = pao;
  this.jwt = jwt;
  this.key = "randomefyerczhk5r325xsr6"; // // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* init */];
  this.jwtSign = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* jwtSign */];
  this.jwtVerify = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* jwtVerify */];
  this.handleSaveJwtKey = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleSaveJwtKey */];
  this.handleCreateToken = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* handleCreateToken */];
  this.handleVerifyToken = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleVerifyToken */];
};

/* harmony default export */ __webpack_exports__["a"] = (Jwt);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleSaveJwtKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleCreateToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleVerifyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return jwtSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return jwtVerify; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Jwt has been initialised');
  this.listens({
    'save-jwt-key': this.handleSaveJwtKey.bind(this),
    'create-jwt-token': this.handleCreateToken.bind(this),
    'verify-jwt-token': this.handleVerifyToken.bind(this)
  });
};
var handleSaveJwtKey = function handleSaveJwtKey(data) {
  var self = this;
  self.log("Saving Jwt Key");
  self.key = data.key;
};
var handleCreateToken = function handleCreateToken(data) {
  var self = this;
  self.log("Jwt Token create request");
  console.log(data);

  if (data.hasOwnProperty('payload')) {
    self.jwtSign(data);
  }
};
var handleVerifyToken = function handleVerifyToken(data) {
  var self = this;
  self.log("Jwt Token verify request");

  if (data.hasOwnProperty('token')) {
    self.jwtVerify(data);
  }
};
var jwtSign =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(jw) {
    var self, token, tk;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            _context.prev = 1;
            _context.next = 4;
            return self.jwt.sign(jw.payload, self.key);

          case 4:
            token = _context.sent;
            tk = {
              token: token,
              user: {
                name: jw.payload.username,
                acesstoken: token
              }
            };
            console.log('TOKEN SUCCESSFULLY CREATED');
            console.log(token);
            jw.callback(null, tk);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            jw.callback(_context.t0, null);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 11]]);
  }));

  return function jwtSign(_x) {
    return _ref.apply(this, arguments);
  };
}();
var jwtVerify =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(token) {
    var self, verified;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            self = this;
            self.log('Verifying Tokens');
            _context2.prev = 2;
            _context2.next = 5;
            return self.jwt.verify(token.token, self.key);

          case 5:
            verified = _context2.sent;

            if (verified) {
              token.callback(null, verified);
            }

            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            token.callback(_context2.t0, null);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 9]]);
  }));

  return function jwtVerify(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hash__ = __webpack_require__(84);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__hash__["a" /* default */]);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(85);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bcrypt = __webpack_require__(86);

var Hash = function Hash(pao) {
  _classCallCheck(this, Hash);

  this.pao = pao;
  this.hach = bcrypt;
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleHashPayload = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleHashPayload */];
  this.handleComparePayload = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleComparePayload */];
  this.hash = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* hash */];
  this.compare = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* compare */];
};

/* harmony default export */ __webpack_exports__["a"] = (Hash);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleHashPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleComparePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compare; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('List has been initialised');
  this.listens({
    'hash-payload': this.handleHashPayload.bind(this),
    'compare-payload': this.handleComparePayload.bind(this)
  });
};
var handleHashPayload =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(data) {
    var self, pao, hashed;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self = this;
            pao = self.pao;
            _context.next = 4;
            return self.hash({
              password: data.payload
            });

          case 4:
            hashed = _context.sent;

            if (!pao.pa_isString(hashed)) {
              data.callback({
                e: hashed.e,
                message: 'Hashing failed'
              });
            } else {
              data.callback(null, hashed);
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleHashPayload(_x) {
    return _ref.apply(this, arguments);
  };
}();
var handleComparePayload =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(data) {
    var self, pao, compared;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            self = this;
            pao = self.pao;
            _context2.next = 4;
            return self.compare({
              plainpass: data.payload.plainpass,
              hash: data.payload.hash
            });

          case 4:
            compared = _context2.sent;
            console.log('TEH COMPARED');
            console.log(compared);

            if (pao.pa_isString(compared) || pao.pa_isObject(compared)) {
              data.callback({
                e: compared.e,
                message: 'Comparison failed'
              });
            } else {
              data.callback(null, compared);
            }

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function handleComparePayload(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var hash = function hash(data) {
  var self = this;
  return new Promise(function (resolve, reject) {
    self.hach.genSalt(10, function (err, salt) {
      if (err) {
        reject({
          error: true,
          e: err
        });
      } else {
        self.hach.hash(data.password, salt, function (err, hashedPass) {
          if (err) {
            reject({
              error: true,
              e: err
            });
          } else {
            resolve(hashedPass);
          }
        });
      }
    });
  });
};
var compare = function compare(data) {
  var self = this;
  return new Promise(function (resolve, reject) {
    self.hach.compare(data.plainpass, data.hash, function (err, isMatch) {
      if (err) {
        self.log('Match failed,an error occured');
        self.log(err);
        reject({
          error: true,
          e: err
        });
      } else {
        if (isMatch === true) {
          resolve(isMatch);
        } else {
          resolve(false);
        }
      }
    });
  });
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register__ = __webpack_require__(88);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__register__["a" /* default */]);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(89);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 //Dependecies

var crypto = __webpack_require__(90);

var Register = function Register(pao) {
  _classCallCheck(this, Register);

  this.pao = pao;
  this.crypto = crypto;
  this.tmpd = null;
  this.strategies = {
    anzii: true,
    social: true // methods

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleRegisterTask = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* handleRegisterTask */];
  this.registerStrategy = __WEBPACK_IMPORTED_MODULE_0__methods__["j" /* registerStrategy */];
  this.anzii = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* anzii */];
  this.social = __WEBPACK_IMPORTED_MODULE_0__methods__["l" /* social */];
  this.isUserExist = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* isUserExist */];
  this.isCallback = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* isCallback */];
  this.hash = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* hash */];
  this.insertHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* insertHandler */];
  this.findHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* findHandler */];
  this.procedureDoc = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* procedureDoc */];
  this.setTokenHeader = __WEBPACK_IMPORTED_MODULE_0__methods__["k" /* setTokenHeader */];
};

/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleRegisterTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return registerStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return anzii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isUserExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isCallback; });
/* unused harmony export processResults */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return setTokenHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return insertHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return procedureDoc; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Register has been initialised');
  this.listens({
    'handle-register-task': this.handleRegisterTask.bind(this)
  });
};
var handleRegisterTask = function handleRegisterTask(data) {
  var self = this;
  self.log("Handling Registration task");
  self.log(data);
  self.registerStrategy(data);
};
var registerStrategy = function registerStrategy(data) {
  var self = this;
  var pao = self.pao;
  var user = data.user.parsed.user;
  console.log('THE DATA INSIDE STRATEGY');
  console.log(user);

  if (!pao.pa_contains(user, 'strategy')) {
    data.callback('Missing required Strategy', null);
  } else {
    if (!pao.pa_contains(self.strategies, user.strategy)) {
      data.callback('Specified strategy not supported');
    } else {
      console.log('STRATEGY: CURRENT');
      console.log(user.strategy);
      self.tmpd = data;
      self[user.strategy](data);
    }
  }
};
var anzii = function anzii(data) {
  var self = this;
  var pao = self.pao;
  self.log("Executing Anzii registration strategy");

  if (!pao.pa_contains(data, 'user')) {} else {
    var user = data.user.parsed.user;

    if (!pao.pa_contains(user, ['email', 'password'])) {
      data.callback({
        message: 'missing required keys for registration'
      });
    } else {
      if (!pao.pa_isValidEmail(user.email) || !pao.pa_isValidPassword(user.password)) {
        data.callback({
          message: 'either password or email is invalid'
        });
      } else {
        self.isUserExist(data);
      }
    }
  }
};
var social = function social(data) {
  var self = this;
  self.log('Executing Social registration strategy');
};
var isUserExist = function isUserExist(data) {
  var self = this;
  var user = data.user.parsed.user;
  self.log('Checking if user is taken');
  self.callback = data.callback;
  self.query('mysql.jo_user.findOne', {
    user: {
      email: user.email
    }
  }, self.findHandler.bind(this));
};
var isCallback = function isCallback(data) {
  var over = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!data.hasOwnProperty('callback')) {
    self.log('Task handle request me failed', 'warn');
    self.emit({
      type: 'request-task-handle-failed',
      data: {
        message: 'failed'
      }
    });
  } else {
    if (over) {
      data.callback(over);
    } else {
      data.callback();
    }
  }
};
var processResults = function processResults(e, r) {};
var setTokenHeader = function setTokenHeader() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    console.log('TOKEN CREATION FAILED');
    console.log(e);
    self.callback(e);
  } else {
    console.log('TOKEN CREATION SUCCESSFULL');
    console.log('SETTING TOKEN HEADER');
    console.log(self.tmpd);
    self.tmpd.user.request.res.set('X-AUTH-TOKEN', token.token);
    self.callback(null, {
      user: token.user
    });
  }
};
var insertHandler = function insertHandler() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    self.callback(e, null);
  } else {
    if (!r) {
      self.callback({
        message: 'Insert operation failed'
      }, null);
    } else {
      self.emit({
        type: 'create-jwt-token',
        data: {
          payload: r.user,
          callback: self.setTokenHeader.bind(self)
        }
      });
    }
  }
};
var findHandler =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var e,
        r,
        self,
        pao,
        user,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            r = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            self = this;
            pao = self.pao;

            if (e) {
              self.callback({
                message: 'An error occured attempting to find user'
              }, null);
            } else {
              console.log('THE VALUE R');
              console.log(pao.pa_isArray(r));
              console.log(r.length);
              console.log(r.length > 0);
              console.log('after r has been re-assigned a new value');
              console.log(r);
              console.log(!r);

              if (pao.pa_isArray(r) && r.length === 0) {
                console.log('ANZII USER DOES NOT EXIST, CREATE USER');
                user = self.tmpd.user.parsed.user;
                self.emit({
                  type: "hash-payload",
                  data: {
                    payload: user.password,
                    callback: self.hash.bind(self)
                  }
                });
              } else {
                console.log('THE TAKEN USER');
                console.log(r);
                self.callback({
                  message: 'User is already taken'
                }, null);
              }
            } // token.res.set('X-AUTH-TOKEN',token.tk)


          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function findHandler() {
    return _ref.apply(this, arguments);
  };
}();
var hash =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var e,
        h,
        self,
        user,
        password,
        _hash,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
            h = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
            self = this;

            if (!e) {
              _context2.next = 8;
              break;
            }

            console.log(e);
            self.callback({
              message: 'registration failed due to server error:hash'
            });
            _context2.next = 18;
            break;

          case 8:
            console.log('hashed');
            console.log(h);
            user = self.tmpd.user.parsed.user;
            password = h;
            _context2.next = 14;
            return self.crypto.randomBytes(35).toString('hex');

          case 14:
            _hash = _context2.sent;
            user.password = password;
            user.hash = _hash;
            self.query('mysql.PROCEDURE', self.procedureDoc(user), self.insertHandler.bind(this)); // self.query(
            // 	'mysql.jo_user.insertOne',
            // 	  {user: {id: null,email: user.email,first_name: user.firstname,last_name: user.lastname,password: password,hash: hash}},
            // 	  self.insertHandler.bind(this)
            // )

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function hash() {
    return _ref2.apply(this, arguments);
  };
}();
var procedureDoc = function procedureDoc(data) {
  var fields = {
    jo_user: {
      id: 'NULL',
      u_type: data.usertype,
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email
    },
    jo_account: {
      own: {
        id: 'NULL'
      },
      tables: [{
        name: 'jo_user',
        values: ['u_type.account_name']
      }]
    },
    jo_user_account_join: {
      own: {
        id: 'NULL'
      },
      tables: [{
        name: 'jo_user',
        values: ['id.u_id', 'email.account_email']
      }, {
        name: 'jo_account',
        values: ['id.account_id']
      }]
    },
    jo_login: {
      own: {
        id: 'NULL',
        password: data.password
      },
      tables: [{
        name: 'jo_user',
        values: ['id.u_id', 'email.username']
      }]
    }
  };
  return [{
    name: 'jo_user',
    fields: fields.jo_user
  }, {
    name: 'jo_account',
    fields: fields.jo_account
  }, {
    name: 'jo_user_account_join',
    lastInsert: ['jo_user', 'jo_account'],
    fields: fields.jo_user_account_join
  }, {
    name: 'jo_login',
    lastInsert: ['jo_user'],
    fields: fields.jo_login
  }];
};

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login__ = __webpack_require__(92);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__login__["a" /* default */]);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(93);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Login = function Login(pao) {
  _classCallCheck(this, Login);

  this.pao = pao;
  this.strategies = {
    anzii: true,
    social: true // // methods

  };
  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["e" /* init */];
  this.handleLoginTask = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* handleLoginTask */];
  this.loginStrategy = __WEBPACK_IMPORTED_MODULE_0__methods__["g" /* loginStrategy */];
  this.anzii = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* anzii */];
  this.social = __WEBPACK_IMPORTED_MODULE_0__methods__["i" /* social */];
  this.isUserExist = __WEBPACK_IMPORTED_MODULE_0__methods__["f" /* isUserExist */];
  this.compare = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* compare */];
  this.findHandler = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* findHandler */];
  this.setTokenHeader = __WEBPACK_IMPORTED_MODULE_0__methods__["h" /* setTokenHeader */];
};

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleLoginTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return loginStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return anzii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isUserExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setTokenHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return findHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return compare; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log('Login has been initialised');
  this.listens({
    'handle-login-task': this.handleLoginTask.bind(this)
  });
};
var handleLoginTask = function handleLoginTask(data) {
  var self = this;
  self.log("Handling Login task");
  self.log(data);
  self.loginStrategy(data);
};
var loginStrategy = function loginStrategy(data) {
  var self = this;
  var pao = self.pao;
  var user = data.user.parsed.user;

  if (!pao.pa_contains(user, 'strategy')) {
    data.callback('Missing required Strategy', null);
  } else {
    if (!pao.pa_contains(self.strategies, user.strategy)) {
      data.callback('Specified strategy not supported');
    } else {
      console.log('STRATEGY: CURRENT');
      console.log(user.strategy);
      self.tmpd = data;
      self[user.strategy](data);
    }
  }
};
var anzii = function anzii(data) {
  var self = this;
  var pao = self.pao;
  self.log("Executing Anzii login strategy");

  if (!pao.pa_contains(data, 'user')) {} else {
    var user = data.user.parsed.user;

    if (!pao.pa_contains(user, ['email', 'password'])) {
      data.callback({
        message: 'missing required keys for login'
      });
    } else {
      if (!pao.pa_isValidEmail(user.email) || !pao.pa_isValidPassword(user.password)) {
        data.callback({
          message: 'either password or email is invalid'
        });
      } else {
        self.isUserExist(data);
      }
    }
  }
};
var social = function social(data) {
  var self = this;
  self.log('Executing Social registration strategy');
};
var isUserExist = function isUserExist(data) {
  var self = this;
  var user = data.user.parsed.user; //   self.log('Checking if user is taken') 

  self.callback = data.callback;
  var join = {
    returnFields: ['email,first_name,last_name,password'],
    tables: ['jo_user', 'jo_login'],
    joins: 2,
    joinPoints: ['jo_user.id EQUALS jo_login.u_id'],
    conditions: ["email EQUALS ".concat(user.email)],
    type: 'inner' //   self.query(
    // 	'mysql.jo_user.findOne',
    // 	  {user: { email: user.email}},
    // 	  self.findHandler.bind(this)
    // 	  )

  };
  self.query('mysql.JOIN', join, self.findHandler.bind(this));
};
var setTokenHeader = function setTokenHeader() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  var pao = self.pao;

  if (e) {
    console.log('TOKEN CREATION FAILED');
    console.log(e);
    self.callback(e);
  } else {
    console.log('TOKEN CREATION SUCCESSFULL');
    console.log('SETTING TOKEN HEADER');
    console.log(self.tmpd);
    self.tmpd.user.request.res.set('X-AUTH-TOKEN', token.token);
    self.callback(null, {
      user: token.user
    });
  }
};
var findHandler =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var e,
        r,
        self,
        pao,
        password,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            r = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            self = this;
            pao = self.pao;

            if (e) {
              self.callback({
                message: 'An error occured attempting to find user'
              }, null);
            } else {
              if (pao.pa_isArray(r) && r.length === 0) {
                self.callback({
                  message: 'User does not exist'
                }, null);
              } else {
                self.log('Login User exist');
                self.log(r);
                self.log(self.tmpd); // let user = {email: self.tmpd.user.parsed.user.email,username: 'sample'}
                // self.emit({type:'create-jwt-token',data:{payload: user,callback: self.setTokenHeader.bind(self)}})

                password = self.tmpd.user.parsed.user.password;
                self.emit({
                  type: 'compare-payload',
                  data: {
                    payload: {
                      plainpass: password,
                      hash: r.password
                    },
                    callback: self.compare.bind(this)
                  }
                });
              }
            } // token.res.set('X-AUTH-TOKEN',token.tk)


          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function findHandler() {
    return _ref.apply(this, arguments);
  };
}();
var compare = function compare() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;

  if (e) {
    console.log(e);
    self.callback({
      message: 'Login failed due to server error:hash'
    });
  } else {
    if (c) {
      self.log('Login User is valid');
      self.log(c);
      var user = {
        username: self.tmpd.user.parsed.user.email
      };
      self.emit({
        type: 'create-jwt-token',
        data: {
          payload: user,
          callback: self.setTokenHeader.bind(self)
        }
      });
    } else {
      self.callback({
        message: 'Invalid login'
      }, null);
    }
  }
};

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication__ = __webpack_require__(95);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__authentication__["a" /* default */]);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods__ = __webpack_require__(96);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Authentication = function Authentication(pao) {
  _classCallCheck(this, Authentication);

  this.pao = pao; // methods

  this.init = __WEBPACK_IMPORTED_MODULE_0__methods__["c" /* init */];
  this.handleShareMiddleware = __WEBPACK_IMPORTED_MODULE_0__methods__["b" /* handleShareMiddleware */];
  this.auth = __WEBPACK_IMPORTED_MODULE_0__methods__["a" /* auth */];
  this.token = __WEBPACK_IMPORTED_MODULE_0__methods__["d" /* token */];
};

/* harmony default export */ __webpack_exports__["a"] = (Authentication);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleShareMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return token; });
var init = function init() {
  this.log('Authentication has been initialised');
  this.listens({
    'share-middleware': this.handleShareMiddleware.bind(this)
  });
};
var handleShareMiddleware = function handleShareMiddleware() {
  var self = this;
  console.log('HANLDE SHARE MIDDLEWARE EVENT HAS OCCURED');
  self.emit({
    type: "add-ext-middleware",
    data: {
      type: 'private',
      level: 'top',
      middleware: {
        funk: self.auth.bind(self)
      }
    }
  });
};
var auth = function auth(req, res, next) {
  var self = this;
  self.log('THE REQUEST HEADERS');
  self.request = {
    req: req,
    res: res,
    next: next
  };
  self.log(req.headers);

  if (req.headers['x-auth-token']) {
    var _token = req.headers['x-auth-token'];
    self.emit({
      type: 'verify-jwt-token',
      data: {
        token: _token,
        callback: self.token.bind(this)
      }
    });
  } else {
    console.log('THE X-AUTH DOES NOT EXIST');
    self.emit({
      type: 'write-server-request-response',
      data: {
        data: {
          error: true,
          message: 'Required token header required'
        },
        res: res
      }
    });
  }
};
var token = function token() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var self = this;
  self.log('Authentication Middleware executed');

  if (e) {
    console.log(e);
    var data = {
      error: true,
      message: "Invalid token"
    };
    self.emit({
      type: 'write-server-request-response',
      data: {
        data: data,
        res: self.request.res
      }
    });
  } else {
    // re.req.user = r 
    console.log('THE SUCCESSFULLY VERIFIED TOKEN');
    console.log(r);
    self.request.next();
  }
};

/***/ })
/******/ ]);