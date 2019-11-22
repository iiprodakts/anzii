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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.
var crypto = __webpack_require__(19);

module.exports = function nodeRNG() {
  return crypto.randomBytes(16);
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

module.exports = bytesToUuid;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_activate__ = __webpack_require__(23);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // import Esm from './esm/esm'



var Andziiy = function Andziiy() {
  _classCallCheck(this, Andziiy);

  // console.log(Activator.Activate)
  // console.log(Base.SUKU)
  var self = self;
  this.ANDZIIY = __WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]; // this.ESM = Esm

  this.Activate = __WEBPACK_IMPORTED_MODULE_1__base_activate__["a" /* Activate */]; // this.DomLoaded = Base.SUKU.domLoaded.bind(this.SANA.SUKU)
  // this.Html = Base.SUKUS.html.bind(this.SANA.SUKUS)
};

/* harmony default export */ __webpack_exports__["default"] = (new Andziiy());

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pillar_pillar__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pillar_pillar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pillar_pillar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_pao__ = __webpack_require__(22);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Base = function Base() {
  _classCallCheck(this, Base);

  this.CORE = __WEBPACK_IMPORTED_MODULE_1__base_core__["a" /* default */], this.PAO = __WEBPACK_IMPORTED_MODULE_2__base_pao__["a" /* default */], this.PILLAR = __WEBPACK_IMPORTED_MODULE_0__pillar_pillar___default.a;
};

/* harmony default export */ __webpack_exports__["a"] = (new Base());

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var os = __webpack_require__(5);

var util = __webpack_require__(6);

var async = __webpack_require__(7);

var extend = __webpack_require__(9);

var fs = __webpack_require__(15);

var path = __webpack_require__(16);

var uuid = __webpack_require__(17);
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
  } // p_merge(util, Util);

};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function (global, factory) {
   true ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.async = global.async || {});
})(this, function (exports) {
  'use strict';

  function slice(arrayLike, start) {
    start = start | 0;
    var newLen = Math.max(arrayLike.length - start, 0);
    var newArr = Array(newLen);

    for (var idx = 0; idx < newLen; idx++) {
      newArr[idx] = arrayLike[start + idx];
    }

    return newArr;
  }
  /**
   * Creates a continuation function with some arguments already applied.
   *
   * Useful as a shorthand when combined with other control flow functions. Any
   * arguments passed to the returned function are added to the arguments
   * originally passed to apply.
   *
   * @name apply
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {Function} fn - The function you want to eventually apply all
   * arguments to. Invokes with (arguments...).
   * @param {...*} arguments... - Any number of arguments to automatically apply
   * when the continuation is called.
   * @returns {Function} the partially-applied function
   * @example
   *
   * // using apply
   * async.parallel([
   *     async.apply(fs.writeFile, 'testfile1', 'test1'),
   *     async.apply(fs.writeFile, 'testfile2', 'test2')
   * ]);
   *
   *
   * // the same process without using apply
   * async.parallel([
   *     function(callback) {
   *         fs.writeFile('testfile1', 'test1', callback);
   *     },
   *     function(callback) {
   *         fs.writeFile('testfile2', 'test2', callback);
   *     }
   * ]);
   *
   * // It's possible to pass any number of additional arguments when calling the
   * // continuation:
   *
   * node> var fn = async.apply(sys.puts, 'one');
   * node> fn('two', 'three');
   * one
   * two
   * three
   */


  var apply = function (fn
  /*, ...args*/
  ) {
    var args = slice(arguments, 1);
    return function ()
    /*callArgs*/
    {
      var callArgs = slice(arguments);
      return fn.apply(null, args.concat(callArgs));
    };
  };

  var initialParams = function (fn) {
    return function ()
    /*...args, callback*/
    {
      var args = slice(arguments);
      var callback = args.pop();
      fn.call(this, args, callback);
    };
  };
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */


  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
  var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

  function fallback(fn) {
    setTimeout(fn, 0);
  }

  function wrap(defer) {
    return function (fn
    /*, ...args*/
    ) {
      var args = slice(arguments, 1);
      defer(function () {
        fn.apply(null, args);
      });
    };
  }

  var _defer;

  if (hasSetImmediate) {
    _defer = setImmediate;
  } else if (hasNextTick) {
    _defer = process.nextTick;
  } else {
    _defer = fallback;
  }

  var setImmediate$1 = wrap(_defer);
  /**
   * Take a sync function and make it async, passing its return value to a
   * callback. This is useful for plugging sync functions into a waterfall,
   * series, or other async functions. Any arguments passed to the generated
   * function will be passed to the wrapped function (except for the final
   * callback argument). Errors thrown will be passed to the callback.
   *
   * If the function passed to `asyncify` returns a Promise, that promises's
   * resolved/rejected state will be used to call the callback, rather than simply
   * the synchronous return value.
   *
   * This also means you can asyncify ES2017 `async` functions.
   *
   * @name asyncify
   * @static
   * @memberOf module:Utils
   * @method
   * @alias wrapSync
   * @category Util
   * @param {Function} func - The synchronous function, or Promise-returning
   * function to convert to an {@link AsyncFunction}.
   * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
   * invoked with `(args..., callback)`.
   * @example
   *
   * // passing a regular synchronous function
   * async.waterfall([
   *     async.apply(fs.readFile, filename, "utf8"),
   *     async.asyncify(JSON.parse),
   *     function (data, next) {
   *         // data is the result of parsing the text.
   *         // If there was a parsing error, it would have been caught.
   *     }
   * ], callback);
   *
   * // passing a function returning a promise
   * async.waterfall([
   *     async.apply(fs.readFile, filename, "utf8"),
   *     async.asyncify(function (contents) {
   *         return db.model.create(contents);
   *     }),
   *     function (model, next) {
   *         // `model` is the instantiated model object.
   *         // If there was an error, this function would be skipped.
   *     }
   * ], callback);
   *
   * // es2017 example, though `asyncify` is not needed if your JS environment
   * // supports async functions out of the box
   * var q = async.queue(async.asyncify(async function(file) {
   *     var intermediateStep = await processFile(file);
   *     return await somePromise(intermediateStep)
   * }));
   *
   * q.push(files);
   */

  function asyncify(func) {
    return initialParams(function (args, callback) {
      var result;

      try {
        result = func.apply(this, args);
      } catch (e) {
        return callback(e);
      } // if result is Promise object


      if (isObject(result) && typeof result.then === 'function') {
        result.then(function (value) {
          invokeCallback(callback, null, value);
        }, function (err) {
          invokeCallback(callback, err.message ? err : new Error(err));
        });
      } else {
        callback(null, result);
      }
    });
  }

  function invokeCallback(callback, error, value) {
    try {
      callback(error, value);
    } catch (e) {
      setImmediate$1(rethrow, e);
    }
  }

  function rethrow(error) {
    throw error;
  }

  var supportsSymbol = typeof Symbol === 'function';

  function isAsync(fn) {
    return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
  }

  function wrapAsync(asyncFn) {
    return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
  }

  function applyEach$1(eachfn) {
    return function (fns
    /*, ...args*/
    ) {
      var args = slice(arguments, 1);
      var go = initialParams(function (args, callback) {
        var that = this;
        return eachfn(fns, function (fn, cb) {
          wrapAsync(fn).apply(that, args.concat(cb));
        }, callback);
      });

      if (args.length) {
        return go.apply(this, args);
      } else {
        return go;
      }
    };
  }
  /** Detect free variable `global` from Node.js. */


  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
  /** Detect free variable `self`. */

  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || Function('return this')();
  /** Built-in value references. */

  var Symbol$1 = root.Symbol;
  /** Used for built-in method references. */

  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto.toString;
  /** Built-in value references. */

  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */

  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }

    return result;
  }
  /** Used for built-in method references. */


  var objectProto$1 = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString$1 = objectProto$1.toString;
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */

  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }
  /** `Object#toString` result references. */


  var nullTag = '[object Null]';
  var undefinedTag = '[object Undefined]';
  /** Built-in value references. */

  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  /** `Object#toString` result references. */


  var asyncTag = '[object AsyncFunction]';
  var funcTag = '[object Function]';
  var genTag = '[object GeneratorFunction]';
  var proxyTag = '[object Proxy]';
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */

  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    } // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.


    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  /** Used as references for various `Number` constants. */


  var MAX_SAFE_INTEGER = 9007199254740991;
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */

  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */


  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  } // A temporary value used to identify if the loop should be broken.
  // See #1064, #1293


  var breakLoop = {};
  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */

  function noop() {// No operation performed.
  }

  function once(fn) {
    return function () {
      if (fn === null) return;
      var callFn = fn;
      fn = null;
      callFn.apply(this, arguments);
    };
  }

  var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

  var getIterator = function (coll) {
    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
  };
  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */


  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */


  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }
  /** `Object#toString` result references. */


  var argsTag = '[object Arguments]';
  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */

  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  /** Used for built-in method references. */


  var objectProto$3 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  /** Built-in value references. */

  var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */

  var isArguments = baseIsArguments(function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  };
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */

  var isArray = Array.isArray;
  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false;
  }
  /** Detect free variable `exports`. */


  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer = moduleExports ? root.Buffer : undefined;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */

  var isBuffer = nativeIsBuffer || stubFalse;
  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */

  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }
  /** `Object#toString` result references. */


  var argsTag$1 = '[object Arguments]';
  var arrayTag = '[object Array]';
  var boolTag = '[object Boolean]';
  var dateTag = '[object Date]';
  var errorTag = '[object Error]';
  var funcTag$1 = '[object Function]';
  var mapTag = '[object Map]';
  var numberTag = '[object Number]';
  var objectTag = '[object Object]';
  var regexpTag = '[object RegExp]';
  var setTag = '[object Set]';
  var stringTag = '[object String]';
  var weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]';
  var dataViewTag = '[object DataView]';
  var float32Tag = '[object Float32Array]';
  var float64Tag = '[object Float64Array]';
  var int8Tag = '[object Int8Array]';
  var int16Tag = '[object Int16Array]';
  var int32Tag = '[object Int32Array]';
  var uint8Tag = '[object Uint8Array]';
  var uint8ClampedTag = '[object Uint8ClampedArray]';
  var uint16Tag = '[object Uint16Array]';
  var uint32Tag = '[object Uint32Array]';
  /** Used to identify `toStringTag` values of typed arrays. */

  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */

  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */


  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }
  /** Detect free variable `exports`. */


  var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports$1 && freeGlobal.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

      if (types) {
        return types;
      } // Legacy `process.binding('util')` for Node.js < 10.


      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();
  /* Node.js helper references. */


  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */

  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  /** Used for built-in method references. */

  var objectProto$2 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */

  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
      key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }

    return result;
  }
  /** Used for built-in method references. */


  var objectProto$5 = Object.prototype;
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */

  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$5;
    return value === proto;
  }
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */


  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeKeys = overArg(Object.keys, Object);
  /** Used for built-in method references. */

  var objectProto$4 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }
  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */


  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
      return ++i < len ? {
        value: coll[i],
        key: i
      } : null;
    };
  }

  function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
      var item = iterator.next();
      if (item.done) return null;
      i++;
      return {
        value: item.value,
        key: i
      };
    };
  }

  function createObjectIterator(obj) {
    var okeys = keys(obj);
    var i = -1;
    var len = okeys.length;
    return function next() {
      var key = okeys[++i];
      return i < len ? {
        value: obj[key],
        key: key
      } : null;
    };
  }

  function iterator(coll) {
    if (isArrayLike(coll)) {
      return createArrayIterator(coll);
    }

    var iterator = getIterator(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
  }

  function onlyOnce(fn) {
    return function () {
      if (fn === null) throw new Error("Callback was already called.");
      var callFn = fn;
      fn = null;
      callFn.apply(this, arguments);
    };
  }

  function _eachOfLimit(limit) {
    return function (obj, iteratee, callback) {
      callback = once(callback || noop);

      if (limit <= 0 || !obj) {
        return callback(null);
      }

      var nextElem = iterator(obj);
      var done = false;
      var running = 0;
      var looping = false;

      function iterateeCallback(err, value) {
        running -= 1;

        if (err) {
          done = true;
          callback(err);
        } else if (value === breakLoop || done && running <= 0) {
          done = true;
          return callback(null);
        } else if (!looping) {
          replenish();
        }
      }

      function replenish() {
        looping = true;

        while (running < limit && !done) {
          var elem = nextElem();

          if (elem === null) {
            done = true;

            if (running <= 0) {
              callback(null);
            }

            return;
          }

          running += 1;
          iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
        }

        looping = false;
      }

      replenish();
    };
  }
  /**
   * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name eachOfLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.eachOf]{@link module:Collections.eachOf}
   * @alias forEachOfLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async function to apply to each
   * item in `coll`. The `key` is the item's key, or index in the case of an
   * array.
   * Invoked with (item, key, callback).
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   */


  function eachOfLimit(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, wrapAsync(iteratee), callback);
  }

  function doLimit(fn, limit) {
    return function (iterable, iteratee, callback) {
      return fn(iterable, limit, iteratee, callback);
    };
  } // eachOf implementation optimized for array-likes


  function eachOfArrayLike(coll, iteratee, callback) {
    callback = once(callback || noop);
    var index = 0,
        completed = 0,
        length = coll.length;

    if (length === 0) {
      callback(null);
    }

    function iteratorCallback(err, value) {
      if (err) {
        callback(err);
      } else if (++completed === length || value === breakLoop) {
        callback(null);
      }
    }

    for (; index < length; index++) {
      iteratee(coll[index], index, onlyOnce(iteratorCallback));
    }
  } // a generic version of eachOf which can handle array, object, and iterator cases.


  var eachOfGeneric = doLimit(eachOfLimit, Infinity);
  /**
   * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
   * to the iteratee.
   *
   * @name eachOf
   * @static
   * @memberOf module:Collections
   * @method
   * @alias forEachOf
   * @category Collection
   * @see [async.each]{@link module:Collections.each}
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A function to apply to each
   * item in `coll`.
   * The `key` is the item's key, or index in the case of an array.
   * Invoked with (item, key, callback).
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   * @example
   *
   * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
   * var configs = {};
   *
   * async.forEachOf(obj, function (value, key, callback) {
   *     fs.readFile(__dirname + value, "utf8", function (err, data) {
   *         if (err) return callback(err);
   *         try {
   *             configs[key] = JSON.parse(data);
   *         } catch (e) {
   *             return callback(e);
   *         }
   *         callback();
   *     });
   * }, function (err) {
   *     if (err) console.error(err.message);
   *     // configs is now a map of JSON data
   *     doSomethingWith(configs);
   * });
   */

  var eachOf = function (coll, iteratee, callback) {
    var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
    eachOfImplementation(coll, wrapAsync(iteratee), callback);
  };

  function doParallel(fn) {
    return function (obj, iteratee, callback) {
      return fn(eachOf, obj, wrapAsync(iteratee), callback);
    };
  }

  function _asyncMap(eachfn, arr, iteratee, callback) {
    callback = callback || noop;
    arr = arr || [];
    var results = [];
    var counter = 0;

    var _iteratee = wrapAsync(iteratee);

    eachfn(arr, function (value, _, callback) {
      var index = counter++;

      _iteratee(value, function (err, v) {
        results[index] = v;
        callback(err);
      });
    }, function (err) {
      callback(err, results);
    });
  }
  /**
   * Produces a new collection of values by mapping each value in `coll` through
   * the `iteratee` function. The `iteratee` is called with an item from `coll`
   * and a callback for when it has finished processing. Each of these callback
   * takes 2 arguments: an `error`, and the transformed item from `coll`. If
   * `iteratee` passes an error to its callback, the main `callback` (for the
   * `map` function) is immediately called with the error.
   *
   * Note, that since this function applies the `iteratee` to each item in
   * parallel, there is no guarantee that the `iteratee` functions will complete
   * in order. However, the results array will be in the same order as the
   * original `coll`.
   *
   * If `map` is passed an Object, the results will be an Array.  The results
   * will roughly be in the order of the original Objects' keys (but this can
   * vary across JavaScript engines).
   *
   * @name map
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with the transformed item.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Results is an Array of the
   * transformed items from the `coll`. Invoked with (err, results).
   * @example
   *
   * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
   *     // results is now an array of stats for each file
   * });
   */


  var map = doParallel(_asyncMap);
  /**
   * Applies the provided arguments to each function in the array, calling
   * `callback` after all functions have completed. If you only provide the first
   * argument, `fns`, then it will return a function which lets you pass in the
   * arguments as if it were a single function call. If more arguments are
   * provided, `callback` is required while `args` is still optional.
   *
   * @name applyEach
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s
   * to all call with the same arguments
   * @param {...*} [args] - any number of separate arguments to pass to the
   * function.
   * @param {Function} [callback] - the final argument should be the callback,
   * called when all functions have completed processing.
   * @returns {Function} - If only the first argument, `fns`, is provided, it will
   * return a function which lets you pass in the arguments as if it were a single
   * function call. The signature is `(..args, callback)`. If invoked with any
   * arguments, `callback` is required.
   * @example
   *
   * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
   *
   * // partial application example:
   * async.each(
   *     buckets,
   *     async.applyEach([enableSearch, updateSchema]),
   *     callback
   * );
   */

  var applyEach = applyEach$1(map);

  function doParallelLimit(fn) {
    return function (obj, limit, iteratee, callback) {
      return fn(_eachOfLimit(limit), obj, wrapAsync(iteratee), callback);
    };
  }
  /**
   * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
   *
   * @name mapLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.map]{@link module:Collections.map}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with the transformed item.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Results is an array of the
   * transformed items from the `coll`. Invoked with (err, results).
   */


  var mapLimit = doParallelLimit(_asyncMap);
  /**
   * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
   *
   * @name mapSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.map]{@link module:Collections.map}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with the transformed item.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Results is an array of the
   * transformed items from the `coll`. Invoked with (err, results).
   */

  var mapSeries = doLimit(mapLimit, 1);
  /**
   * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
   *
   * @name applyEachSeries
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.applyEach]{@link module:ControlFlow.applyEach}
   * @category Control Flow
   * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s to all
   * call with the same arguments
   * @param {...*} [args] - any number of separate arguments to pass to the
   * function.
   * @param {Function} [callback] - the final argument should be the callback,
   * called when all functions have completed processing.
   * @returns {Function} - If only the first argument is provided, it will return
   * a function which lets you pass in the arguments as if it were a single
   * function call.
   */

  var applyEachSeries = applyEach$1(mapSeries);
  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */

  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }

    return array;
  }
  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */


  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];

        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }

      return object;
    };
  }
  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */


  var baseFor = createBaseFor();
  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */

  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }
  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }

    return -1;
  }
  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */


  function baseIsNaN(value) {
    return value !== value;
  }
  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }

    return -1;
  }
  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }
  /**
   * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
   * their requirements. Each function can optionally depend on other functions
   * being completed first, and each function is run as soon as its requirements
   * are satisfied.
   *
   * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
   * will stop. Further tasks will not execute (so any other functions depending
   * on it will not run), and the main `callback` is immediately called with the
   * error.
   *
   * {@link AsyncFunction}s also receive an object containing the results of functions which
   * have completed so far as the first argument, if they have dependencies. If a
   * task function has no dependencies, it will only be passed a callback.
   *
   * @name auto
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Object} tasks - An object. Each of its properties is either a
   * function or an array of requirements, with the {@link AsyncFunction} itself the last item
   * in the array. The object's key of a property serves as the name of the task
   * defined by that property, i.e. can be used when specifying requirements for
   * other tasks. The function receives one or two arguments:
   * * a `results` object, containing the results of the previously executed
   *   functions, only passed if the task has any dependencies,
   * * a `callback(err, result)` function, which must be called when finished,
   *   passing an `error` (which can be `null`) and the result of the function's
   *   execution.
   * @param {number} [concurrency=Infinity] - An optional `integer` for
   * determining the maximum number of tasks that can be run in parallel. By
   * default, as many as possible.
   * @param {Function} [callback] - An optional callback which is called when all
   * the tasks have been completed. It receives the `err` argument if any `tasks`
   * pass an error to their callback. Results are always returned; however, if an
   * error occurs, no further `tasks` will be performed, and the results object
   * will only contain partial results. Invoked with (err, results).
   * @returns undefined
   * @example
   *
   * async.auto({
   *     // this function will just be passed a callback
   *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
   *     showData: ['readData', function(results, cb) {
   *         // results.readData is the file's contents
   *         // ...
   *     }]
   * }, callback);
   *
   * async.auto({
   *     get_data: function(callback) {
   *         console.log('in get_data');
   *         // async code to get some data
   *         callback(null, 'data', 'converted to array');
   *     },
   *     make_folder: function(callback) {
   *         console.log('in make_folder');
   *         // async code to create a directory to store a file in
   *         // this is run at the same time as getting the data
   *         callback(null, 'folder');
   *     },
   *     write_file: ['get_data', 'make_folder', function(results, callback) {
   *         console.log('in write_file', JSON.stringify(results));
   *         // once there is some data and the directory exists,
   *         // write the data to a file in the directory
   *         callback(null, 'filename');
   *     }],
   *     email_link: ['write_file', function(results, callback) {
   *         console.log('in email_link', JSON.stringify(results));
   *         // once the file is written let's email a link to it...
   *         // results.write_file contains the filename returned by write_file.
   *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
   *     }]
   * }, function(err, results) {
   *     console.log('err = ', err);
   *     console.log('results = ', results);
   * });
   */


  var auto = function (tasks, concurrency, callback) {
    if (typeof concurrency === 'function') {
      // concurrency is optional, shift the args.
      callback = concurrency;
      concurrency = null;
    }

    callback = once(callback || noop);
    var keys$$1 = keys(tasks);
    var numTasks = keys$$1.length;

    if (!numTasks) {
      return callback(null);
    }

    if (!concurrency) {
      concurrency = numTasks;
    }

    var results = {};
    var runningTasks = 0;
    var hasError = false;
    var listeners = Object.create(null);
    var readyTasks = []; // for cycle detection:

    var readyToCheck = []; // tasks that have been identified as reachable
    // without the possibility of returning to an ancestor task

    var uncheckedDependencies = {};
    baseForOwn(tasks, function (task, key) {
      if (!isArray(task)) {
        // no dependencies
        enqueueTask(key, [task]);
        readyToCheck.push(key);
        return;
      }

      var dependencies = task.slice(0, task.length - 1);
      var remainingDependencies = dependencies.length;

      if (remainingDependencies === 0) {
        enqueueTask(key, task);
        readyToCheck.push(key);
        return;
      }

      uncheckedDependencies[key] = remainingDependencies;
      arrayEach(dependencies, function (dependencyName) {
        if (!tasks[dependencyName]) {
          throw new Error('async.auto task `' + key + '` has a non-existent dependency `' + dependencyName + '` in ' + dependencies.join(', '));
        }

        addListener(dependencyName, function () {
          remainingDependencies--;

          if (remainingDependencies === 0) {
            enqueueTask(key, task);
          }
        });
      });
    });
    checkForDeadlocks();
    processQueue();

    function enqueueTask(key, task) {
      readyTasks.push(function () {
        runTask(key, task);
      });
    }

    function processQueue() {
      if (readyTasks.length === 0 && runningTasks === 0) {
        return callback(null, results);
      }

      while (readyTasks.length && runningTasks < concurrency) {
        var run = readyTasks.shift();
        run();
      }
    }

    function addListener(taskName, fn) {
      var taskListeners = listeners[taskName];

      if (!taskListeners) {
        taskListeners = listeners[taskName] = [];
      }

      taskListeners.push(fn);
    }

    function taskComplete(taskName) {
      var taskListeners = listeners[taskName] || [];
      arrayEach(taskListeners, function (fn) {
        fn();
      });
      processQueue();
    }

    function runTask(key, task) {
      if (hasError) return;
      var taskCallback = onlyOnce(function (err, result) {
        runningTasks--;

        if (arguments.length > 2) {
          result = slice(arguments, 1);
        }

        if (err) {
          var safeResults = {};
          baseForOwn(results, function (val, rkey) {
            safeResults[rkey] = val;
          });
          safeResults[key] = result;
          hasError = true;
          listeners = Object.create(null);
          callback(err, safeResults);
        } else {
          results[key] = result;
          taskComplete(key);
        }
      });
      runningTasks++;
      var taskFn = wrapAsync(task[task.length - 1]);

      if (task.length > 1) {
        taskFn(results, taskCallback);
      } else {
        taskFn(taskCallback);
      }
    }

    function checkForDeadlocks() {
      // Kahn's algorithm
      // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
      // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
      var currentTask;
      var counter = 0;

      while (readyToCheck.length) {
        currentTask = readyToCheck.pop();
        counter++;
        arrayEach(getDependents(currentTask), function (dependent) {
          if (--uncheckedDependencies[dependent] === 0) {
            readyToCheck.push(dependent);
          }
        });
      }

      if (counter !== numTasks) {
        throw new Error('async.auto cannot execute tasks due to a recursive dependency');
      }
    }

    function getDependents(taskName) {
      var result = [];
      baseForOwn(tasks, function (task, key) {
        if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
          result.push(key);
        }
      });
      return result;
    }
  };
  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */


  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }

    return result;
  }
  /** `Object#toString` result references. */


  var symbolTag = '[object Symbol]';
  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */

  function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  /** Used as references for various `Number` constants. */


  var INFINITY = 1 / 0;
  /** Used to convert symbols to primitives and strings. */

  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
  var symbolToString = symbolProto ? symbolProto.toString : undefined;
  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */

  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }

    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }

    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }
  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */


  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }

    end = end > length ? length : end;

    if (end < 0) {
      end += length;
    }

    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);

    while (++index < length) {
      result[index] = array[index + start];
    }

    return result;
  }
  /**
   * Casts `array` to a slice if it's needed.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {number} start The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the cast slice.
   */


  function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
  }
  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */


  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

    return index;
  }
  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */


  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

    return index;
  }
  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */


  function asciiToArray(string) {
    return string.split('');
  }
  /** Used to compose unicode character classes. */


  var rsAstralRange = '\\ud800-\\udfff';
  var rsComboMarksRange = '\\u0300-\\u036f';
  var reComboHalfMarksRange = '\\ufe20-\\ufe2f';
  var rsComboSymbolsRange = '\\u20d0-\\u20ff';
  var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
  var rsVarRange = '\\ufe0e\\ufe0f';
  /** Used to compose unicode capture groups. */

  var rsZWJ = '\\u200d';
  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */

  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  /** Used to compose unicode character classes. */


  var rsAstralRange$1 = '\\ud800-\\udfff';
  var rsComboMarksRange$1 = '\\u0300-\\u036f';
  var reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f';
  var rsComboSymbolsRange$1 = '\\u20d0-\\u20ff';
  var rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
  var rsVarRange$1 = '\\ufe0e\\ufe0f';
  /** Used to compose unicode capture groups. */

  var rsAstral = '[' + rsAstralRange$1 + ']';
  var rsCombo = '[' + rsComboRange$1 + ']';
  var rsFitz = '\\ud83c[\\udffb-\\udfff]';
  var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
  var rsNonAstral = '[^' + rsAstralRange$1 + ']';
  var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
  var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
  var rsZWJ$1 = '\\u200d';
  /** Used to compose unicode regexes. */

  var reOptMod = rsModifier + '?';
  var rsOptVar = '[' + rsVarRange$1 + ']?';
  var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */

  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */


  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */


  function toString(value) {
    return value == null ? '' : baseToString(value);
  }
  /** Used to match leading and trailing whitespace. */


  var reTrim = /^\s+|\s+$/g;
  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */

  function trim(string, chars, guard) {
    string = toString(string);

    if (string && (guard || chars === undefined)) {
      return string.replace(reTrim, '');
    }

    if (!string || !(chars = baseToString(chars))) {
      return string;
    }

    var strSymbols = stringToArray(string),
        chrSymbols = stringToArray(chars),
        start = charsStartIndex(strSymbols, chrSymbols),
        end = charsEndIndex(strSymbols, chrSymbols) + 1;
    return castSlice(strSymbols, start, end).join('');
  }

  var FN_ARGS = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
  var FN_ARG_SPLIT = /,/;
  var FN_ARG = /(=.+)?(\s*)$/;
  var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

  function parseParams(func) {
    func = func.toString().replace(STRIP_COMMENTS, '');
    func = func.match(FN_ARGS)[2].replace(' ', '');
    func = func ? func.split(FN_ARG_SPLIT) : [];
    func = func.map(function (arg) {
      return trim(arg.replace(FN_ARG, ''));
    });
    return func;
  }
  /**
   * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
   * tasks are specified as parameters to the function, after the usual callback
   * parameter, with the parameter names matching the names of the tasks it
   * depends on. This can provide even more readable task graphs which can be
   * easier to maintain.
   *
   * If a final callback is specified, the task results are similarly injected,
   * specified as named parameters after the initial error parameter.
   *
   * The autoInject function is purely syntactic sugar and its semantics are
   * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
   *
   * @name autoInject
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.auto]{@link module:ControlFlow.auto}
   * @category Control Flow
   * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
   * the form 'func([dependencies...], callback). The object's key of a property
   * serves as the name of the task defined by that property, i.e. can be used
   * when specifying requirements for other tasks.
   * * The `callback` parameter is a `callback(err, result)` which must be called
   *   when finished, passing an `error` (which can be `null`) and the result of
   *   the function's execution. The remaining parameters name other tasks on
   *   which the task is dependent, and the results from those tasks are the
   *   arguments of those parameters.
   * @param {Function} [callback] - An optional callback which is called when all
   * the tasks have been completed. It receives the `err` argument if any `tasks`
   * pass an error to their callback, and a `results` object with any completed
   * task results, similar to `auto`.
   * @example
   *
   * //  The example from `auto` can be rewritten as follows:
   * async.autoInject({
   *     get_data: function(callback) {
   *         // async code to get some data
   *         callback(null, 'data', 'converted to array');
   *     },
   *     make_folder: function(callback) {
   *         // async code to create a directory to store a file in
   *         // this is run at the same time as getting the data
   *         callback(null, 'folder');
   *     },
   *     write_file: function(get_data, make_folder, callback) {
   *         // once there is some data and the directory exists,
   *         // write the data to a file in the directory
   *         callback(null, 'filename');
   *     },
   *     email_link: function(write_file, callback) {
   *         // once the file is written let's email a link to it...
   *         // write_file contains the filename returned by write_file.
   *         callback(null, {'file':write_file, 'email':'user@example.com'});
   *     }
   * }, function(err, results) {
   *     console.log('err = ', err);
   *     console.log('email_link = ', results.email_link);
   * });
   *
   * // If you are using a JS minifier that mangles parameter names, `autoInject`
   * // will not work with plain functions, since the parameter names will be
   * // collapsed to a single letter identifier.  To work around this, you can
   * // explicitly specify the names of the parameters your task function needs
   * // in an array, similar to Angular.js dependency injection.
   *
   * // This still has an advantage over plain `auto`, since the results a task
   * // depends on are still spread into arguments.
   * async.autoInject({
   *     //...
   *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
   *         callback(null, 'filename');
   *     }],
   *     email_link: ['write_file', function(write_file, callback) {
   *         callback(null, {'file':write_file, 'email':'user@example.com'});
   *     }]
   *     //...
   * }, function(err, results) {
   *     console.log('err = ', err);
   *     console.log('email_link = ', results.email_link);
   * });
   */


  function autoInject(tasks, callback) {
    var newTasks = {};
    baseForOwn(tasks, function (taskFn, key) {
      var params;
      var fnIsAsync = isAsync(taskFn);
      var hasNoDeps = !fnIsAsync && taskFn.length === 1 || fnIsAsync && taskFn.length === 0;

      if (isArray(taskFn)) {
        params = taskFn.slice(0, -1);
        taskFn = taskFn[taskFn.length - 1];
        newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
      } else if (hasNoDeps) {
        // no dependencies, use the function as-is
        newTasks[key] = taskFn;
      } else {
        params = parseParams(taskFn);

        if (taskFn.length === 0 && !fnIsAsync && params.length === 0) {
          throw new Error("autoInject task functions require explicit parameters.");
        } // remove callback param


        if (!fnIsAsync) params.pop();
        newTasks[key] = params.concat(newTask);
      }

      function newTask(results, taskCb) {
        var newArgs = arrayMap(params, function (name) {
          return results[name];
        });
        newArgs.push(taskCb);
        wrapAsync(taskFn).apply(null, newArgs);
      }
    });
    auto(newTasks, callback);
  } // Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
  // used for queues. This implementation assumes that the node provided by the user can be modified
  // to adjust the next and last properties. We implement only the minimal functionality
  // for queue support.


  function DLL() {
    this.head = this.tail = null;
    this.length = 0;
  }

  function setInitial(dll, node) {
    dll.length = 1;
    dll.head = dll.tail = node;
  }

  DLL.prototype.removeLink = function (node) {
    if (node.prev) node.prev.next = node.next;else this.head = node.next;
    if (node.next) node.next.prev = node.prev;else this.tail = node.prev;
    node.prev = node.next = null;
    this.length -= 1;
    return node;
  };

  DLL.prototype.empty = function () {
    while (this.head) this.shift();

    return this;
  };

  DLL.prototype.insertAfter = function (node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next) node.next.prev = newNode;else this.tail = newNode;
    node.next = newNode;
    this.length += 1;
  };

  DLL.prototype.insertBefore = function (node, newNode) {
    newNode.prev = node.prev;
    newNode.next = node;
    if (node.prev) node.prev.next = newNode;else this.head = newNode;
    node.prev = newNode;
    this.length += 1;
  };

  DLL.prototype.unshift = function (node) {
    if (this.head) this.insertBefore(this.head, node);else setInitial(this, node);
  };

  DLL.prototype.push = function (node) {
    if (this.tail) this.insertAfter(this.tail, node);else setInitial(this, node);
  };

  DLL.prototype.shift = function () {
    return this.head && this.removeLink(this.head);
  };

  DLL.prototype.pop = function () {
    return this.tail && this.removeLink(this.tail);
  };

  DLL.prototype.toArray = function () {
    var arr = Array(this.length);
    var curr = this.head;

    for (var idx = 0; idx < this.length; idx++) {
      arr[idx] = curr.data;
      curr = curr.next;
    }

    return arr;
  };

  DLL.prototype.remove = function (testFn) {
    var curr = this.head;

    while (!!curr) {
      var next = curr.next;

      if (testFn(curr)) {
        this.removeLink(curr);
      }

      curr = next;
    }

    return this;
  };

  function queue(worker, concurrency, payload) {
    if (concurrency == null) {
      concurrency = 1;
    } else if (concurrency === 0) {
      throw new Error('Concurrency must not be zero');
    }

    var _worker = wrapAsync(worker);

    var numRunning = 0;
    var workersList = [];
    var processingScheduled = false;

    function _insert(data, insertAtFront, callback) {
      if (callback != null && typeof callback !== 'function') {
        throw new Error('task callback must be a function');
      }

      q.started = true;

      if (!isArray(data)) {
        data = [data];
      }

      if (data.length === 0 && q.idle()) {
        // call drain immediately if there are no tasks
        return setImmediate$1(function () {
          q.drain();
        });
      }

      for (var i = 0, l = data.length; i < l; i++) {
        var item = {
          data: data[i],
          callback: callback || noop
        };

        if (insertAtFront) {
          q._tasks.unshift(item);
        } else {
          q._tasks.push(item);
        }
      }

      if (!processingScheduled) {
        processingScheduled = true;
        setImmediate$1(function () {
          processingScheduled = false;
          q.process();
        });
      }
    }

    function _next(tasks) {
      return function (err) {
        numRunning -= 1;

        for (var i = 0, l = tasks.length; i < l; i++) {
          var task = tasks[i];
          var index = baseIndexOf(workersList, task, 0);

          if (index === 0) {
            workersList.shift();
          } else if (index > 0) {
            workersList.splice(index, 1);
          }

          task.callback.apply(task, arguments);

          if (err != null) {
            q.error(err, task.data);
          }
        }

        if (numRunning <= q.concurrency - q.buffer) {
          q.unsaturated();
        }

        if (q.idle()) {
          q.drain();
        }

        q.process();
      };
    }

    var isProcessing = false;
    var q = {
      _tasks: new DLL(),
      concurrency: concurrency,
      payload: payload,
      saturated: noop,
      unsaturated: noop,
      buffer: concurrency / 4,
      empty: noop,
      drain: noop,
      error: noop,
      started: false,
      paused: false,
      push: function (data, callback) {
        _insert(data, false, callback);
      },
      kill: function () {
        q.drain = noop;

        q._tasks.empty();
      },
      unshift: function (data, callback) {
        _insert(data, true, callback);
      },
      remove: function (testFn) {
        q._tasks.remove(testFn);
      },
      process: function () {
        // Avoid trying to start too many processing operations. This can occur
        // when callbacks resolve synchronously (#1267).
        if (isProcessing) {
          return;
        }

        isProcessing = true;

        while (!q.paused && numRunning < q.concurrency && q._tasks.length) {
          var tasks = [],
              data = [];
          var l = q._tasks.length;
          if (q.payload) l = Math.min(l, q.payload);

          for (var i = 0; i < l; i++) {
            var node = q._tasks.shift();

            tasks.push(node);
            workersList.push(node);
            data.push(node.data);
          }

          numRunning += 1;

          if (q._tasks.length === 0) {
            q.empty();
          }

          if (numRunning === q.concurrency) {
            q.saturated();
          }

          var cb = onlyOnce(_next(tasks));

          _worker(data, cb);
        }

        isProcessing = false;
      },
      length: function () {
        return q._tasks.length;
      },
      running: function () {
        return numRunning;
      },
      workersList: function () {
        return workersList;
      },
      idle: function () {
        return q._tasks.length + numRunning === 0;
      },
      pause: function () {
        q.paused = true;
      },
      resume: function () {
        if (q.paused === false) {
          return;
        }

        q.paused = false;
        setImmediate$1(q.process);
      }
    };
    return q;
  }
  /**
   * A cargo of tasks for the worker function to complete. Cargo inherits all of
   * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
   * @typedef {Object} CargoObject
   * @memberOf module:ControlFlow
   * @property {Function} length - A function returning the number of items
   * waiting to be processed. Invoke like `cargo.length()`.
   * @property {number} payload - An `integer` for determining how many tasks
   * should be process per round. This property can be changed after a `cargo` is
   * created to alter the payload on-the-fly.
   * @property {Function} push - Adds `task` to the `queue`. The callback is
   * called once the `worker` has finished processing the task. Instead of a
   * single task, an array of `tasks` can be submitted. The respective callback is
   * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
   * @property {Function} saturated - A callback that is called when the
   * `queue.length()` hits the concurrency and further tasks will be queued.
   * @property {Function} empty - A callback that is called when the last item
   * from the `queue` is given to a `worker`.
   * @property {Function} drain - A callback that is called when the last item
   * from the `queue` has returned from the `worker`.
   * @property {Function} idle - a function returning false if there are items
   * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
   * @property {Function} pause - a function that pauses the processing of tasks
   * until `resume()` is called. Invoke like `cargo.pause()`.
   * @property {Function} resume - a function that resumes the processing of
   * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
   * @property {Function} kill - a function that removes the `drain` callback and
   * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
   */

  /**
   * Creates a `cargo` object with the specified payload. Tasks added to the
   * cargo will be processed altogether (up to the `payload` limit). If the
   * `worker` is in progress, the task is queued until it becomes available. Once
   * the `worker` has completed some tasks, each callback of those tasks is
   * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
   * for how `cargo` and `queue` work.
   *
   * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
   * at a time, cargo passes an array of tasks to a single worker, repeating
   * when the worker is finished.
   *
   * @name cargo
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.queue]{@link module:ControlFlow.queue}
   * @category Control Flow
   * @param {AsyncFunction} worker - An asynchronous function for processing an array
   * of queued tasks. Invoked with `(tasks, callback)`.
   * @param {number} [payload=Infinity] - An optional `integer` for determining
   * how many tasks should be processed per round; if omitted, the default is
   * unlimited.
   * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
   * attached as certain properties to listen for specific events during the
   * lifecycle of the cargo and inner queue.
   * @example
   *
   * // create a cargo object with payload 2
   * var cargo = async.cargo(function(tasks, callback) {
   *     for (var i=0; i<tasks.length; i++) {
   *         console.log('hello ' + tasks[i].name);
   *     }
   *     callback();
   * }, 2);
   *
   * // add some items
   * cargo.push({name: 'foo'}, function(err) {
   *     console.log('finished processing foo');
   * });
   * cargo.push({name: 'bar'}, function(err) {
   *     console.log('finished processing bar');
   * });
   * cargo.push({name: 'baz'}, function(err) {
   *     console.log('finished processing baz');
   * });
   */


  function cargo(worker, payload) {
    return queue(worker, 1, payload);
  }
  /**
   * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
   *
   * @name eachOfSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.eachOf]{@link module:Collections.eachOf}
   * @alias forEachOfSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * Invoked with (item, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Invoked with (err).
   */


  var eachOfSeries = doLimit(eachOfLimit, 1);
  /**
   * Reduces `coll` into a single value using an async `iteratee` to return each
   * successive step. `memo` is the initial state of the reduction. This function
   * only operates in series.
   *
   * For performance reasons, it may make sense to split a call to this function
   * into a parallel map, and then use the normal `Array.prototype.reduce` on the
   * results. This function is for situations where each step in the reduction
   * needs to be async; if you can get the data before reducing it, then it's
   * probably a good idea to do so.
   *
   * @name reduce
   * @static
   * @memberOf module:Collections
   * @method
   * @alias inject
   * @alias foldl
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {*} memo - The initial state of the reduction.
   * @param {AsyncFunction} iteratee - A function applied to each item in the
   * array to produce the next step in the reduction.
   * The `iteratee` should complete with the next state of the reduction.
   * If the iteratee complete with an error, the reduction is stopped and the
   * main `callback` is immediately called with the error.
   * Invoked with (memo, item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result is the reduced value. Invoked with
   * (err, result).
   * @example
   *
   * async.reduce([1,2,3], 0, function(memo, item, callback) {
   *     // pointless async:
   *     process.nextTick(function() {
   *         callback(null, memo + item)
   *     });
   * }, function(err, result) {
   *     // result is now equal to the last value of memo, which is 6
   * });
   */

  function reduce(coll, memo, iteratee, callback) {
    callback = once(callback || noop);

    var _iteratee = wrapAsync(iteratee);

    eachOfSeries(coll, function (x, i, callback) {
      _iteratee(memo, x, function (err, v) {
        memo = v;
        callback(err);
      });
    }, function (err) {
      callback(err, memo);
    });
  }
  /**
   * Version of the compose function that is more natural to read. Each function
   * consumes the return value of the previous function. It is the equivalent of
   * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
   *
   * Each function is executed with the `this` binding of the composed function.
   *
   * @name seq
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.compose]{@link module:ControlFlow.compose}
   * @category Control Flow
   * @param {...AsyncFunction} functions - the asynchronous functions to compose
   * @returns {Function} a function that composes the `functions` in order
   * @example
   *
   * // Requires lodash (or underscore), express3 and dresende's orm2.
   * // Part of an app, that fetches cats of the logged user.
   * // This example uses `seq` function to avoid overnesting and error
   * // handling clutter.
   * app.get('/cats', function(request, response) {
   *     var User = request.models.User;
   *     async.seq(
   *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
   *         function(user, fn) {
   *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
   *         }
   *     )(req.session.user_id, function (err, cats) {
   *         if (err) {
   *             console.error(err);
   *             response.json({ status: 'error', message: err.message });
   *         } else {
   *             response.json({ status: 'ok', message: 'Cats found', data: cats });
   *         }
   *     });
   * });
   */


  function seq()
  /*...functions*/
  {
    var _functions = arrayMap(arguments, wrapAsync);

    return function ()
    /*...args*/
    {
      var args = slice(arguments);
      var that = this;
      var cb = args[args.length - 1];

      if (typeof cb == 'function') {
        args.pop();
      } else {
        cb = noop;
      }

      reduce(_functions, args, function (newargs, fn, cb) {
        fn.apply(that, newargs.concat(function (err
        /*, ...nextargs*/
        ) {
          var nextargs = slice(arguments, 1);
          cb(err, nextargs);
        }));
      }, function (err, results) {
        cb.apply(that, [err].concat(results));
      });
    };
  }
  /**
   * Creates a function which is a composition of the passed asynchronous
   * functions. Each function consumes the return value of the function that
   * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
   * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
   *
   * Each function is executed with the `this` binding of the composed function.
   *
   * @name compose
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {...AsyncFunction} functions - the asynchronous functions to compose
   * @returns {Function} an asynchronous function that is the composed
   * asynchronous `functions`
   * @example
   *
   * function add1(n, callback) {
   *     setTimeout(function () {
   *         callback(null, n + 1);
   *     }, 10);
   * }
   *
   * function mul3(n, callback) {
   *     setTimeout(function () {
   *         callback(null, n * 3);
   *     }, 10);
   * }
   *
   * var add1mul3 = async.compose(mul3, add1);
   * add1mul3(4, function (err, result) {
   *     // result now equals 15
   * });
   */


  var compose = function ()
  /*...args*/
  {
    return seq.apply(null, slice(arguments).reverse());
  };

  var _concat = Array.prototype.concat;
  /**
   * The same as [`concat`]{@link module:Collections.concat} but runs a maximum of `limit` async operations at a time.
   *
   * @name concatLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.concat]{@link module:Collections.concat}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
   * which should use an array as its result. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished, or an error occurs. Results is an array
   * containing the concatenated results of the `iteratee` function. Invoked with
   * (err, results).
   */

  var concatLimit = function (coll, limit, iteratee, callback) {
    callback = callback || noop;

    var _iteratee = wrapAsync(iteratee);

    mapLimit(coll, limit, function (val, callback) {
      _iteratee(val, function (err
      /*, ...args*/
      ) {
        if (err) return callback(err);
        return callback(null, slice(arguments, 1));
      });
    }, function (err, mapResults) {
      var result = [];

      for (var i = 0; i < mapResults.length; i++) {
        if (mapResults[i]) {
          result = _concat.apply(result, mapResults[i]);
        }
      }

      return callback(err, result);
    });
  };
  /**
   * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
   * the concatenated list. The `iteratee`s are called in parallel, and the
   * results are concatenated as they return. There is no guarantee that the
   * results array will be returned in the original order of `coll` passed to the
   * `iteratee` function.
   *
   * @name concat
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
   * which should use an array as its result. Invoked with (item, callback).
   * @param {Function} [callback(err)] - A callback which is called after all the
   * `iteratee` functions have finished, or an error occurs. Results is an array
   * containing the concatenated results of the `iteratee` function. Invoked with
   * (err, results).
   * @example
   *
   * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
   *     // files is now a list of filenames that exist in the 3 directories
   * });
   */


  var concat = doLimit(concatLimit, Infinity);
  /**
   * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
   *
   * @name concatSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.concat]{@link module:Collections.concat}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
   * The iteratee should complete with an array an array of results.
   * Invoked with (item, callback).
   * @param {Function} [callback(err)] - A callback which is called after all the
   * `iteratee` functions have finished, or an error occurs. Results is an array
   * containing the concatenated results of the `iteratee` function. Invoked with
   * (err, results).
   */

  var concatSeries = doLimit(concatLimit, 1);
  /**
   * Returns a function that when called, calls-back with the values provided.
   * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
   * [`auto`]{@link module:ControlFlow.auto}.
   *
   * @name constant
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {...*} arguments... - Any number of arguments to automatically invoke
   * callback with.
   * @returns {AsyncFunction} Returns a function that when invoked, automatically
   * invokes the callback with the previous given arguments.
   * @example
   *
   * async.waterfall([
   *     async.constant(42),
   *     function (value, next) {
   *         // value === 42
   *     },
   *     //...
   * ], callback);
   *
   * async.waterfall([
   *     async.constant(filename, "utf8"),
   *     fs.readFile,
   *     function (fileData, next) {
   *         //...
   *     }
   *     //...
   * ], callback);
   *
   * async.auto({
   *     hostname: async.constant("https://server.net/"),
   *     port: findFreePort,
   *     launchServer: ["hostname", "port", function (options, cb) {
   *         startServer(options, cb);
   *     }],
   *     //...
   * }, callback);
   */

  var constant = function ()
  /*...values*/
  {
    var values = slice(arguments);
    var args = [null].concat(values);
    return function ()
    /*...ignoredArgs, callback*/
    {
      var callback = arguments[arguments.length - 1];
      return callback.apply(this, args);
    };
  };
  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */


  function identity(value) {
    return value;
  }

  function _createTester(check, getResult) {
    return function (eachfn, arr, iteratee, cb) {
      cb = cb || noop;
      var testPassed = false;
      var testResult;
      eachfn(arr, function (value, _, callback) {
        iteratee(value, function (err, result) {
          if (err) {
            callback(err);
          } else if (check(result) && !testResult) {
            testPassed = true;
            testResult = getResult(true, value);
            callback(null, breakLoop);
          } else {
            callback();
          }
        });
      }, function (err) {
        if (err) {
          cb(err);
        } else {
          cb(null, testPassed ? testResult : getResult(false));
        }
      });
    };
  }

  function _findGetResult(v, x) {
    return x;
  }
  /**
   * Returns the first value in `coll` that passes an async truth test. The
   * `iteratee` is applied in parallel, meaning the first iteratee to return
   * `true` will fire the detect `callback` with that result. That means the
   * result might not be the first item in the original `coll` (in terms of order)
   * that passes the test.
  
   * If order within the original `coll` is important, then look at
   * [`detectSeries`]{@link module:Collections.detectSeries}.
   *
   * @name detect
   * @static
   * @memberOf module:Collections
   * @method
   * @alias find
   * @category Collections
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
   * The iteratee must complete with a boolean value as its result.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the `iteratee` functions have finished.
   * Result will be the first item in the array that passes the truth test
   * (iteratee) or the value `undefined` if none passed. Invoked with
   * (err, result).
   * @example
   *
   * async.detect(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, result) {
   *     // result now equals the first file in the list that exists
   * });
   */


  var detect = doParallel(_createTester(identity, _findGetResult));
  /**
   * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name detectLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.detect]{@link module:Collections.detect}
   * @alias findLimit
   * @category Collections
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
   * The iteratee must complete with a boolean value as its result.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the `iteratee` functions have finished.
   * Result will be the first item in the array that passes the truth test
   * (iteratee) or the value `undefined` if none passed. Invoked with
   * (err, result).
   */

  var detectLimit = doParallelLimit(_createTester(identity, _findGetResult));
  /**
   * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
   *
   * @name detectSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.detect]{@link module:Collections.detect}
   * @alias findSeries
   * @category Collections
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
   * The iteratee must complete with a boolean value as its result.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the `iteratee` functions have finished.
   * Result will be the first item in the array that passes the truth test
   * (iteratee) or the value `undefined` if none passed. Invoked with
   * (err, result).
   */

  var detectSeries = doLimit(detectLimit, 1);

  function consoleFunc(name) {
    return function (fn
    /*, ...args*/
    ) {
      var args = slice(arguments, 1);
      args.push(function (err
      /*, ...args*/
      ) {
        var args = slice(arguments, 1);

        if (typeof console === 'object') {
          if (err) {
            if (console.error) {
              console.error(err);
            }
          } else if (console[name]) {
            arrayEach(args, function (x) {
              console[name](x);
            });
          }
        }
      });
      wrapAsync(fn).apply(null, args);
    };
  }
  /**
   * Logs the result of an [`async` function]{@link AsyncFunction} to the
   * `console` using `console.dir` to display the properties of the resulting object.
   * Only works in Node.js or in browsers that support `console.dir` and
   * `console.error` (such as FF and Chrome).
   * If multiple arguments are returned from the async function,
   * `console.dir` is called on each argument in order.
   *
   * @name dir
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} function - The function you want to eventually apply
   * all arguments to.
   * @param {...*} arguments... - Any number of arguments to apply to the function.
   * @example
   *
   * // in a module
   * var hello = function(name, callback) {
   *     setTimeout(function() {
   *         callback(null, {hello: name});
   *     }, 1000);
   * };
   *
   * // in the node repl
   * node> async.dir(hello, 'world');
   * {hello: 'world'}
   */


  var dir = consoleFunc('dir');
  /**
   * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
   * the order of operations, the arguments `test` and `fn` are switched.
   *
   * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
   * @name doDuring
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.during]{@link module:ControlFlow.during}
   * @category Control Flow
   * @param {AsyncFunction} fn - An async function which is called each time
   * `test` passes. Invoked with (callback).
   * @param {AsyncFunction} test - asynchronous truth test to perform before each
   * execution of `fn`. Invoked with (...args, callback), where `...args` are the
   * non-error args from the previous callback of `fn`.
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `fn` has stopped. `callback`
   * will be passed an error if one occurred, otherwise `null`.
   */

  function doDuring(fn, test, callback) {
    callback = onlyOnce(callback || noop);

    var _fn = wrapAsync(fn);

    var _test = wrapAsync(test);

    function next(err
    /*, ...args*/
    ) {
      if (err) return callback(err);
      var args = slice(arguments, 1);
      args.push(check);

      _test.apply(this, args);
    }

    function check(err, truth) {
      if (err) return callback(err);
      if (!truth) return callback(null);

      _fn(next);
    }

    check(null, true);
  }
  /**
   * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
   * the order of operations, the arguments `test` and `iteratee` are switched.
   *
   * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
   *
   * @name doWhilst
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.whilst]{@link module:ControlFlow.whilst}
   * @category Control Flow
   * @param {AsyncFunction} iteratee - A function which is called each time `test`
   * passes. Invoked with (callback).
   * @param {Function} test - synchronous truth test to perform after each
   * execution of `iteratee`. Invoked with any non-error callback results of
   * `iteratee`.
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `iteratee` has stopped.
   * `callback` will be passed an error and any arguments passed to the final
   * `iteratee`'s callback. Invoked with (err, [results]);
   */


  function doWhilst(iteratee, test, callback) {
    callback = onlyOnce(callback || noop);

    var _iteratee = wrapAsync(iteratee);

    var next = function (err
    /*, ...args*/
    ) {
      if (err) return callback(err);
      var args = slice(arguments, 1);
      if (test.apply(this, args)) return _iteratee(next);
      callback.apply(null, [null].concat(args));
    };

    _iteratee(next);
  }
  /**
   * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
   * argument ordering differs from `until`.
   *
   * @name doUntil
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
   * @category Control Flow
   * @param {AsyncFunction} iteratee - An async function which is called each time
   * `test` fails. Invoked with (callback).
   * @param {Function} test - synchronous truth test to perform after each
   * execution of `iteratee`. Invoked with any non-error callback results of
   * `iteratee`.
   * @param {Function} [callback] - A callback which is called after the test
   * function has passed and repeated execution of `iteratee` has stopped. `callback`
   * will be passed an error and any arguments passed to the final `iteratee`'s
   * callback. Invoked with (err, [results]);
   */


  function doUntil(iteratee, test, callback) {
    doWhilst(iteratee, function () {
      return !test.apply(this, arguments);
    }, callback);
  }
  /**
   * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
   * is passed a callback in the form of `function (err, truth)`. If error is
   * passed to `test` or `fn`, the main callback is immediately called with the
   * value of the error.
   *
   * @name during
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.whilst]{@link module:ControlFlow.whilst}
   * @category Control Flow
   * @param {AsyncFunction} test - asynchronous truth test to perform before each
   * execution of `fn`. Invoked with (callback).
   * @param {AsyncFunction} fn - An async function which is called each time
   * `test` passes. Invoked with (callback).
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `fn` has stopped. `callback`
   * will be passed an error, if one occurred, otherwise `null`.
   * @example
   *
   * var count = 0;
   *
   * async.during(
   *     function (callback) {
   *         return callback(null, count < 5);
   *     },
   *     function (callback) {
   *         count++;
   *         setTimeout(callback, 1000);
   *     },
   *     function (err) {
   *         // 5 seconds have passed
   *     }
   * );
   */


  function during(test, fn, callback) {
    callback = onlyOnce(callback || noop);

    var _fn = wrapAsync(fn);

    var _test = wrapAsync(test);

    function next(err) {
      if (err) return callback(err);

      _test(check);
    }

    function check(err, truth) {
      if (err) return callback(err);
      if (!truth) return callback(null);

      _fn(next);
    }

    _test(check);
  }

  function _withoutIndex(iteratee) {
    return function (value, index, callback) {
      return iteratee(value, callback);
    };
  }
  /**
   * Applies the function `iteratee` to each item in `coll`, in parallel.
   * The `iteratee` is called with an item from the list, and a callback for when
   * it has finished. If the `iteratee` passes an error to its `callback`, the
   * main `callback` (for the `each` function) is immediately called with the
   * error.
   *
   * Note, that since this function applies `iteratee` to each item in parallel,
   * there is no guarantee that the iteratee functions will complete in order.
   *
   * @name each
   * @static
   * @memberOf module:Collections
   * @method
   * @alias forEach
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to
   * each item in `coll`. Invoked with (item, callback).
   * The array index is not passed to the iteratee.
   * If you need the index, use `eachOf`.
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   * @example
   *
   * // assuming openFiles is an array of file names and saveFile is a function
   * // to save the modified contents of that file:
   *
   * async.each(openFiles, saveFile, function(err){
   *   // if any of the saves produced an error, err would equal that error
   * });
   *
   * // assuming openFiles is an array of file names
   * async.each(openFiles, function(file, callback) {
   *
   *     // Perform operation on file here.
   *     console.log('Processing file ' + file);
   *
   *     if( file.length > 32 ) {
   *       console.log('This file name is too long');
   *       callback('File name too long');
   *     } else {
   *       // Do work to process file here
   *       console.log('File processed');
   *       callback();
   *     }
   * }, function(err) {
   *     // if any of the file processing produced an error, err would equal that error
   *     if( err ) {
   *       // One of the iterations produced an error.
   *       // All processing will now stop.
   *       console.log('A file failed to process');
   *     } else {
   *       console.log('All files have been processed successfully');
   *     }
   * });
   */


  function eachLimit(coll, iteratee, callback) {
    eachOf(coll, _withoutIndex(wrapAsync(iteratee)), callback);
  }
  /**
   * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
   *
   * @name eachLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.each]{@link module:Collections.each}
   * @alias forEachLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The array index is not passed to the iteratee.
   * If you need the index, use `eachOfLimit`.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   */


  function eachLimit$1(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, _withoutIndex(wrapAsync(iteratee)), callback);
  }
  /**
   * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
   *
   * @name eachSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.each]{@link module:Collections.each}
   * @alias forEachSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each
   * item in `coll`.
   * The array index is not passed to the iteratee.
   * If you need the index, use `eachOfSeries`.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   */


  var eachSeries = doLimit(eachLimit$1, 1);
  /**
   * Wrap an async function and ensure it calls its callback on a later tick of
   * the event loop.  If the function already calls its callback on a next tick,
   * no extra deferral is added. This is useful for preventing stack overflows
   * (`RangeError: Maximum call stack size exceeded`) and generally keeping
   * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
   * contained. ES2017 `async` functions are returned as-is -- they are immune
   * to Zalgo's corrupting influences, as they always resolve on a later tick.
   *
   * @name ensureAsync
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} fn - an async function, one that expects a node-style
   * callback as its last argument.
   * @returns {AsyncFunction} Returns a wrapped function with the exact same call
   * signature as the function passed in.
   * @example
   *
   * function sometimesAsync(arg, callback) {
   *     if (cache[arg]) {
   *         return callback(null, cache[arg]); // this would be synchronous!!
   *     } else {
   *         doSomeIO(arg, callback); // this IO would be asynchronous
   *     }
   * }
   *
   * // this has a risk of stack overflows if many results are cached in a row
   * async.mapSeries(args, sometimesAsync, done);
   *
   * // this will defer sometimesAsync's callback if necessary,
   * // preventing stack overflows
   * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
   */

  function ensureAsync(fn) {
    if (isAsync(fn)) return fn;
    return initialParams(function (args, callback) {
      var sync = true;
      args.push(function () {
        var innerArgs = arguments;

        if (sync) {
          setImmediate$1(function () {
            callback.apply(null, innerArgs);
          });
        } else {
          callback.apply(null, innerArgs);
        }
      });
      fn.apply(this, args);
      sync = false;
    });
  }

  function notId(v) {
    return !v;
  }
  /**
   * Returns `true` if every element in `coll` satisfies an async test. If any
   * iteratee call returns `false`, the main `callback` is immediately called.
   *
   * @name every
   * @static
   * @memberOf module:Collections
   * @method
   * @alias all
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collection in parallel.
   * The iteratee must complete with a boolean result value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result will be either `true` or `false`
   * depending on the values of the async tests. Invoked with (err, result).
   * @example
   *
   * async.every(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, result) {
   *     // if result is true then every file exists
   * });
   */


  var every = doParallel(_createTester(notId, notId));
  /**
   * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
   *
   * @name everyLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.every]{@link module:Collections.every}
   * @alias allLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collection in parallel.
   * The iteratee must complete with a boolean result value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result will be either `true` or `false`
   * depending on the values of the async tests. Invoked with (err, result).
   */

  var everyLimit = doParallelLimit(_createTester(notId, notId));
  /**
   * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
   *
   * @name everySeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.every]{@link module:Collections.every}
   * @alias allSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collection in series.
   * The iteratee must complete with a boolean result value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result will be either `true` or `false`
   * depending on the values of the async tests. Invoked with (err, result).
   */

  var everySeries = doLimit(everyLimit, 1);
  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */

  function baseProperty(key) {
    return function (object) {
      return object == null ? undefined : object[key];
    };
  }

  function filterArray(eachfn, arr, iteratee, callback) {
    var truthValues = new Array(arr.length);
    eachfn(arr, function (x, index, callback) {
      iteratee(x, function (err, v) {
        truthValues[index] = !!v;
        callback(err);
      });
    }, function (err) {
      if (err) return callback(err);
      var results = [];

      for (var i = 0; i < arr.length; i++) {
        if (truthValues[i]) results.push(arr[i]);
      }

      callback(null, results);
    });
  }

  function filterGeneric(eachfn, coll, iteratee, callback) {
    var results = [];
    eachfn(coll, function (x, index, callback) {
      iteratee(x, function (err, v) {
        if (err) {
          callback(err);
        } else {
          if (v) {
            results.push({
              index: index,
              value: x
            });
          }

          callback();
        }
      });
    }, function (err) {
      if (err) {
        callback(err);
      } else {
        callback(null, arrayMap(results.sort(function (a, b) {
          return a.index - b.index;
        }), baseProperty('value')));
      }
    });
  }

  function _filter(eachfn, coll, iteratee, callback) {
    var filter = isArrayLike(coll) ? filterArray : filterGeneric;
    filter(eachfn, coll, wrapAsync(iteratee), callback || noop);
  }
  /**
   * Returns a new array of all the values in `coll` which pass an async truth
   * test. This operation is performed in parallel, but the results array will be
   * in the same order as the original.
   *
   * @name filter
   * @static
   * @memberOf module:Collections
   * @method
   * @alias select
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   * @example
   *
   * async.filter(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, results) {
   *     // results now equals an array of the existing files
   * });
   */


  var filter = doParallel(_filter);
  /**
   * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name filterLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.filter]{@link module:Collections.filter}
   * @alias selectLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   */

  var filterLimit = doParallelLimit(_filter);
  /**
   * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
   *
   * @name filterSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.filter]{@link module:Collections.filter}
   * @alias selectSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results)
   */

  var filterSeries = doLimit(filterLimit, 1);
  /**
   * Calls the asynchronous function `fn` with a callback parameter that allows it
   * to call itself again, in series, indefinitely.
  
   * If an error is passed to the callback then `errback` is called with the
   * error, and execution stops, otherwise it will never be called.
   *
   * @name forever
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {AsyncFunction} fn - an async function to call repeatedly.
   * Invoked with (next).
   * @param {Function} [errback] - when `fn` passes an error to it's callback,
   * this function will be called, and execution stops. Invoked with (err).
   * @example
   *
   * async.forever(
   *     function(next) {
   *         // next is suitable for passing to things that need a callback(err [, whatever]);
   *         // it will result in this function being called again.
   *     },
   *     function(err) {
   *         // if next is called with a value in its first parameter, it will appear
   *         // in here as 'err', and execution will stop.
   *     }
   * );
   */

  function forever(fn, errback) {
    var done = onlyOnce(errback || noop);
    var task = wrapAsync(ensureAsync(fn));

    function next(err) {
      if (err) return done(err);
      task(next);
    }

    next();
  }
  /**
   * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
   *
   * @name groupByLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.groupBy]{@link module:Collections.groupBy}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with a `key` to group the value under.
   * Invoked with (value, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Result is an `Object` whoses
   * properties are arrays of values which returned the corresponding key.
   */


  var groupByLimit = function (coll, limit, iteratee, callback) {
    callback = callback || noop;

    var _iteratee = wrapAsync(iteratee);

    mapLimit(coll, limit, function (val, callback) {
      _iteratee(val, function (err, key) {
        if (err) return callback(err);
        return callback(null, {
          key: key,
          val: val
        });
      });
    }, function (err, mapResults) {
      var result = {}; // from MDN, handle object having an `hasOwnProperty` prop

      var hasOwnProperty = Object.prototype.hasOwnProperty;

      for (var i = 0; i < mapResults.length; i++) {
        if (mapResults[i]) {
          var key = mapResults[i].key;
          var val = mapResults[i].val;

          if (hasOwnProperty.call(result, key)) {
            result[key].push(val);
          } else {
            result[key] = [val];
          }
        }
      }

      return callback(err, result);
    });
  };
  /**
   * Returns a new object, where each value corresponds to an array of items, from
   * `coll`, that returned the corresponding key. That is, the keys of the object
   * correspond to the values passed to the `iteratee` callback.
   *
   * Note: Since this function applies the `iteratee` to each item in parallel,
   * there is no guarantee that the `iteratee` functions will complete in order.
   * However, the values for each key in the `result` will be in the same order as
   * the original `coll`. For Objects, the values will roughly be in the order of
   * the original Objects' keys (but this can vary across JavaScript engines).
   *
   * @name groupBy
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with a `key` to group the value under.
   * Invoked with (value, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Result is an `Object` whoses
   * properties are arrays of values which returned the corresponding key.
   * @example
   *
   * async.groupBy(['userId1', 'userId2', 'userId3'], function(userId, callback) {
   *     db.findById(userId, function(err, user) {
   *         if (err) return callback(err);
   *         return callback(null, user.age);
   *     });
   * }, function(err, result) {
   *     // result is object containing the userIds grouped by age
   *     // e.g. { 30: ['userId1', 'userId3'], 42: ['userId2']};
   * });
   */


  var groupBy = doLimit(groupByLimit, Infinity);
  /**
   * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
   *
   * @name groupBySeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.groupBy]{@link module:Collections.groupBy}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with a `key` to group the value under.
   * Invoked with (value, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Result is an `Object` whoses
   * properties are arrays of values which returned the corresponding key.
   */

  var groupBySeries = doLimit(groupByLimit, 1);
  /**
   * Logs the result of an `async` function to the `console`. Only works in
   * Node.js or in browsers that support `console.log` and `console.error` (such
   * as FF and Chrome). If multiple arguments are returned from the async
   * function, `console.log` is called on each argument in order.
   *
   * @name log
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} function - The function you want to eventually apply
   * all arguments to.
   * @param {...*} arguments... - Any number of arguments to apply to the function.
   * @example
   *
   * // in a module
   * var hello = function(name, callback) {
   *     setTimeout(function() {
   *         callback(null, 'hello ' + name);
   *     }, 1000);
   * };
   *
   * // in the node repl
   * node> async.log(hello, 'world');
   * 'hello world'
   */

  var log = consoleFunc('log');
  /**
   * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name mapValuesLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.mapValues]{@link module:Collections.mapValues}
   * @category Collection
   * @param {Object} obj - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - A function to apply to each value and key
   * in `coll`.
   * The iteratee should complete with the transformed value as its result.
   * Invoked with (value, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. `result` is a new object consisting
   * of each key from `obj`, with each transformed value on the right-hand side.
   * Invoked with (err, result).
   */

  function mapValuesLimit(obj, limit, iteratee, callback) {
    callback = once(callback || noop);
    var newObj = {};

    var _iteratee = wrapAsync(iteratee);

    eachOfLimit(obj, limit, function (val, key, next) {
      _iteratee(val, key, function (err, result) {
        if (err) return next(err);
        newObj[key] = result;
        next();
      });
    }, function (err) {
      callback(err, newObj);
    });
  }
  /**
   * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
   *
   * Produces a new Object by mapping each value of `obj` through the `iteratee`
   * function. The `iteratee` is called each `value` and `key` from `obj` and a
   * callback for when it has finished processing. Each of these callbacks takes
   * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
   * passes an error to its callback, the main `callback` (for the `mapValues`
   * function) is immediately called with the error.
   *
   * Note, the order of the keys in the result is not guaranteed.  The keys will
   * be roughly in the order they complete, (but this is very engine-specific)
   *
   * @name mapValues
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Object} obj - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A function to apply to each value and key
   * in `coll`.
   * The iteratee should complete with the transformed value as its result.
   * Invoked with (value, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. `result` is a new object consisting
   * of each key from `obj`, with each transformed value on the right-hand side.
   * Invoked with (err, result).
   * @example
   *
   * async.mapValues({
   *     f1: 'file1',
   *     f2: 'file2',
   *     f3: 'file3'
   * }, function (file, key, callback) {
   *   fs.stat(file, callback);
   * }, function(err, result) {
   *     // result is now a map of stats for each file, e.g.
   *     // {
   *     //     f1: [stats for file1],
   *     //     f2: [stats for file2],
   *     //     f3: [stats for file3]
   *     // }
   * });
   */


  var mapValues = doLimit(mapValuesLimit, Infinity);
  /**
   * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
   *
   * @name mapValuesSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.mapValues]{@link module:Collections.mapValues}
   * @category Collection
   * @param {Object} obj - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A function to apply to each value and key
   * in `coll`.
   * The iteratee should complete with the transformed value as its result.
   * Invoked with (value, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. `result` is a new object consisting
   * of each key from `obj`, with each transformed value on the right-hand side.
   * Invoked with (err, result).
   */

  var mapValuesSeries = doLimit(mapValuesLimit, 1);

  function has(obj, key) {
    return key in obj;
  }
  /**
   * Caches the results of an async function. When creating a hash to store
   * function results against, the callback is omitted from the hash and an
   * optional hash function can be used.
   *
   * If no hash function is specified, the first argument is used as a hash key,
   * which may work reasonably if it is a string or a data type that converts to a
   * distinct string. Note that objects and arrays will not behave reasonably.
   * Neither will cases where the other arguments are significant. In such cases,
   * specify your own hash function.
   *
   * The cache of results is exposed as the `memo` property of the function
   * returned by `memoize`.
   *
   * @name memoize
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} fn - The async function to proxy and cache results from.
   * @param {Function} hasher - An optional function for generating a custom hash
   * for storing results. It has all the arguments applied to it apart from the
   * callback, and must be synchronous.
   * @returns {AsyncFunction} a memoized version of `fn`
   * @example
   *
   * var slow_fn = function(name, callback) {
   *     // do something
   *     callback(null, result);
   * };
   * var fn = async.memoize(slow_fn);
   *
   * // fn can now be used as if it were slow_fn
   * fn('some name', function() {
   *     // callback
   * });
   */


  function memoize(fn, hasher) {
    var memo = Object.create(null);
    var queues = Object.create(null);
    hasher = hasher || identity;

    var _fn = wrapAsync(fn);

    var memoized = initialParams(function memoized(args, callback) {
      var key = hasher.apply(null, args);

      if (has(memo, key)) {
        setImmediate$1(function () {
          callback.apply(null, memo[key]);
        });
      } else if (has(queues, key)) {
        queues[key].push(callback);
      } else {
        queues[key] = [callback];

        _fn.apply(null, args.concat(function ()
        /*args*/
        {
          var args = slice(arguments);
          memo[key] = args;
          var q = queues[key];
          delete queues[key];

          for (var i = 0, l = q.length; i < l; i++) {
            q[i].apply(null, args);
          }
        }));
      }
    });
    memoized.memo = memo;
    memoized.unmemoized = fn;
    return memoized;
  }
  /**
   * Calls `callback` on a later loop around the event loop. In Node.js this just
   * calls `process.nextTick`.  In the browser it will use `setImmediate` if
   * available, otherwise `setTimeout(callback, 0)`, which means other higher
   * priority events may precede the execution of `callback`.
   *
   * This is used internally for browser-compatibility purposes.
   *
   * @name nextTick
   * @static
   * @memberOf module:Utils
   * @method
   * @see [async.setImmediate]{@link module:Utils.setImmediate}
   * @category Util
   * @param {Function} callback - The function to call on a later loop around
   * the event loop. Invoked with (args...).
   * @param {...*} args... - any number of additional arguments to pass to the
   * callback on the next tick.
   * @example
   *
   * var call_order = [];
   * async.nextTick(function() {
   *     call_order.push('two');
   *     // call_order now equals ['one','two']
   * });
   * call_order.push('one');
   *
   * async.setImmediate(function (a, b, c) {
   *     // a, b, and c equal 1, 2, and 3
   * }, 1, 2, 3);
   */


  var _defer$1;

  if (hasNextTick) {
    _defer$1 = process.nextTick;
  } else if (hasSetImmediate) {
    _defer$1 = setImmediate;
  } else {
    _defer$1 = fallback;
  }

  var nextTick = wrap(_defer$1);

  function _parallel(eachfn, tasks, callback) {
    callback = callback || noop;
    var results = isArrayLike(tasks) ? [] : {};
    eachfn(tasks, function (task, key, callback) {
      wrapAsync(task)(function (err, result) {
        if (arguments.length > 2) {
          result = slice(arguments, 1);
        }

        results[key] = result;
        callback(err);
      });
    }, function (err) {
      callback(err, results);
    });
  }
  /**
   * Run the `tasks` collection of functions in parallel, without waiting until
   * the previous function has completed. If any of the functions pass an error to
   * its callback, the main `callback` is immediately called with the value of the
   * error. Once the `tasks` have completed, the results are passed to the final
   * `callback` as an array.
   *
   * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
   * parallel execution of code.  If your tasks do not use any timers or perform
   * any I/O, they will actually be executed in series.  Any synchronous setup
   * sections for each task will happen one after the other.  JavaScript remains
   * single-threaded.
   *
   * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
   * execution of other tasks when a task fails.
   *
   * It is also possible to use an object instead of an array. Each property will
   * be run as a function and the results will be passed to the final `callback`
   * as an object instead of an array. This can be a more readable way of handling
   * results from {@link async.parallel}.
   *
   * @name parallel
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array|Iterable|Object} tasks - A collection of
   * [async functions]{@link AsyncFunction} to run.
   * Each async function can complete with any number of optional `result` values.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed successfully. This function gets a results array
   * (or object) containing all the result arguments passed to the task callbacks.
   * Invoked with (err, results).
   *
   * @example
   * async.parallel([
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'two');
   *         }, 100);
   *     }
   * ],
   * // optional callback
   * function(err, results) {
   *     // the results array will equal ['one','two'] even though
   *     // the second function had a shorter timeout.
   * });
   *
   * // an example using an object instead of an array
   * async.parallel({
   *     one: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 1);
   *         }, 200);
   *     },
   *     two: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 2);
   *         }, 100);
   *     }
   * }, function(err, results) {
   *     // results is now equals to: {one: 1, two: 2}
   * });
   */


  function parallelLimit(tasks, callback) {
    _parallel(eachOf, tasks, callback);
  }
  /**
   * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name parallelLimit
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.parallel]{@link module:ControlFlow.parallel}
   * @category Control Flow
   * @param {Array|Iterable|Object} tasks - A collection of
   * [async functions]{@link AsyncFunction} to run.
   * Each async function can complete with any number of optional `result` values.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed successfully. This function gets a results array
   * (or object) containing all the result arguments passed to the task callbacks.
   * Invoked with (err, results).
   */


  function parallelLimit$1(tasks, limit, callback) {
    _parallel(_eachOfLimit(limit), tasks, callback);
  }
  /**
   * A queue of tasks for the worker function to complete.
   * @typedef {Object} QueueObject
   * @memberOf module:ControlFlow
   * @property {Function} length - a function returning the number of items
   * waiting to be processed. Invoke with `queue.length()`.
   * @property {boolean} started - a boolean indicating whether or not any
   * items have been pushed and processed by the queue.
   * @property {Function} running - a function returning the number of items
   * currently being processed. Invoke with `queue.running()`.
   * @property {Function} workersList - a function returning the array of items
   * currently being processed. Invoke with `queue.workersList()`.
   * @property {Function} idle - a function returning false if there are items
   * waiting or being processed, or true if not. Invoke with `queue.idle()`.
   * @property {number} concurrency - an integer for determining how many `worker`
   * functions should be run in parallel. This property can be changed after a
   * `queue` is created to alter the concurrency on-the-fly.
   * @property {Function} push - add a new task to the `queue`. Calls `callback`
   * once the `worker` has finished processing the task. Instead of a single task,
   * a `tasks` array can be submitted. The respective callback is used for every
   * task in the list. Invoke with `queue.push(task, [callback])`,
   * @property {Function} unshift - add a new task to the front of the `queue`.
   * Invoke with `queue.unshift(task, [callback])`.
   * @property {Function} remove - remove items from the queue that match a test
   * function.  The test function will be passed an object with a `data` property,
   * and a `priority` property, if this is a
   * [priorityQueue]{@link module:ControlFlow.priorityQueue} object.
   * Invoked with `queue.remove(testFn)`, where `testFn` is of the form
   * `function ({data, priority}) {}` and returns a Boolean.
   * @property {Function} saturated - a callback that is called when the number of
   * running workers hits the `concurrency` limit, and further tasks will be
   * queued.
   * @property {Function} unsaturated - a callback that is called when the number
   * of running workers is less than the `concurrency` & `buffer` limits, and
   * further tasks will not be queued.
   * @property {number} buffer - A minimum threshold buffer in order to say that
   * the `queue` is `unsaturated`.
   * @property {Function} empty - a callback that is called when the last item
   * from the `queue` is given to a `worker`.
   * @property {Function} drain - a callback that is called when the last item
   * from the `queue` has returned from the `worker`.
   * @property {Function} error - a callback that is called when a task errors.
   * Has the signature `function(error, task)`.
   * @property {boolean} paused - a boolean for determining whether the queue is
   * in a paused state.
   * @property {Function} pause - a function that pauses the processing of tasks
   * until `resume()` is called. Invoke with `queue.pause()`.
   * @property {Function} resume - a function that resumes the processing of
   * queued tasks when the queue is paused. Invoke with `queue.resume()`.
   * @property {Function} kill - a function that removes the `drain` callback and
   * empties remaining tasks from the queue forcing it to go idle. No more tasks
   * should be pushed to the queue after calling this function. Invoke with `queue.kill()`.
   */

  /**
   * Creates a `queue` object with the specified `concurrency`. Tasks added to the
   * `queue` are processed in parallel (up to the `concurrency` limit). If all
   * `worker`s are in progress, the task is queued until one becomes available.
   * Once a `worker` completes a `task`, that `task`'s callback is called.
   *
   * @name queue
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {AsyncFunction} worker - An async function for processing a queued task.
   * If you want to handle errors from an individual task, pass a callback to
   * `q.push()`. Invoked with (task, callback).
   * @param {number} [concurrency=1] - An `integer` for determining how many
   * `worker` functions should be run in parallel.  If omitted, the concurrency
   * defaults to `1`.  If the concurrency is `0`, an error is thrown.
   * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
   * attached as certain properties to listen for specific events during the
   * lifecycle of the queue.
   * @example
   *
   * // create a queue object with concurrency 2
   * var q = async.queue(function(task, callback) {
   *     console.log('hello ' + task.name);
   *     callback();
   * }, 2);
   *
   * // assign a callback
   * q.drain = function() {
   *     console.log('all items have been processed');
   * };
   *
   * // add some items to the queue
   * q.push({name: 'foo'}, function(err) {
   *     console.log('finished processing foo');
   * });
   * q.push({name: 'bar'}, function (err) {
   *     console.log('finished processing bar');
   * });
   *
   * // add some items to the queue (batch-wise)
   * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
   *     console.log('finished processing item');
   * });
   *
   * // add some items to the front of the queue
   * q.unshift({name: 'bar'}, function (err) {
   *     console.log('finished processing bar');
   * });
   */


  var queue$1 = function (worker, concurrency) {
    var _worker = wrapAsync(worker);

    return queue(function (items, cb) {
      _worker(items[0], cb);
    }, concurrency, 1);
  };
  /**
   * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
   * completed in ascending priority order.
   *
   * @name priorityQueue
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.queue]{@link module:ControlFlow.queue}
   * @category Control Flow
   * @param {AsyncFunction} worker - An async function for processing a queued task.
   * If you want to handle errors from an individual task, pass a callback to
   * `q.push()`.
   * Invoked with (task, callback).
   * @param {number} concurrency - An `integer` for determining how many `worker`
   * functions should be run in parallel.  If omitted, the concurrency defaults to
   * `1`.  If the concurrency is `0`, an error is thrown.
   * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
   * differences between `queue` and `priorityQueue` objects:
   * * `push(task, priority, [callback])` - `priority` should be a number. If an
   *   array of `tasks` is given, all tasks will be assigned the same priority.
   * * The `unshift` method was removed.
   */


  var priorityQueue = function (worker, concurrency) {
    // Start with a normal queue
    var q = queue$1(worker, concurrency); // Override push to accept second parameter representing priority

    q.push = function (data, priority, callback) {
      if (callback == null) callback = noop;

      if (typeof callback !== 'function') {
        throw new Error('task callback must be a function');
      }

      q.started = true;

      if (!isArray(data)) {
        data = [data];
      }

      if (data.length === 0) {
        // call drain immediately if there are no tasks
        return setImmediate$1(function () {
          q.drain();
        });
      }

      priority = priority || 0;
      var nextNode = q._tasks.head;

      while (nextNode && priority >= nextNode.priority) {
        nextNode = nextNode.next;
      }

      for (var i = 0, l = data.length; i < l; i++) {
        var item = {
          data: data[i],
          priority: priority,
          callback: callback
        };

        if (nextNode) {
          q._tasks.insertBefore(nextNode, item);
        } else {
          q._tasks.push(item);
        }
      }

      setImmediate$1(q.process);
    }; // Remove unshift function


    delete q.unshift;
    return q;
  };
  /**
   * Runs the `tasks` array of functions in parallel, without waiting until the
   * previous function has completed. Once any of the `tasks` complete or pass an
   * error to its callback, the main `callback` is immediately called. It's
   * equivalent to `Promise.race()`.
   *
   * @name race
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
   * to run. Each function can complete with an optional `result` value.
   * @param {Function} callback - A callback to run once any of the functions have
   * completed. This function gets an error or result from the first function that
   * completed. Invoked with (err, result).
   * @returns undefined
   * @example
   *
   * async.race([
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'two');
   *         }, 100);
   *     }
   * ],
   * // main callback
   * function(err, result) {
   *     // the result will be equal to 'two' as it finishes earlier
   * });
   */


  function race(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
    if (!tasks.length) return callback();

    for (var i = 0, l = tasks.length; i < l; i++) {
      wrapAsync(tasks[i])(callback);
    }
  }
  /**
   * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
   *
   * @name reduceRight
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.reduce]{@link module:Collections.reduce}
   * @alias foldr
   * @category Collection
   * @param {Array} array - A collection to iterate over.
   * @param {*} memo - The initial state of the reduction.
   * @param {AsyncFunction} iteratee - A function applied to each item in the
   * array to produce the next step in the reduction.
   * The `iteratee` should complete with the next state of the reduction.
   * If the iteratee complete with an error, the reduction is stopped and the
   * main `callback` is immediately called with the error.
   * Invoked with (memo, item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result is the reduced value. Invoked with
   * (err, result).
   */


  function reduceRight(array, memo, iteratee, callback) {
    var reversed = slice(array).reverse();
    reduce(reversed, memo, iteratee, callback);
  }
  /**
   * Wraps the async function in another function that always completes with a
   * result object, even when it errors.
   *
   * The result object has either the property `error` or `value`.
   *
   * @name reflect
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} fn - The async function you want to wrap
   * @returns {Function} - A function that always passes null to it's callback as
   * the error. The second argument to the callback will be an `object` with
   * either an `error` or a `value` property.
   * @example
   *
   * async.parallel([
   *     async.reflect(function(callback) {
   *         // do some stuff ...
   *         callback(null, 'one');
   *     }),
   *     async.reflect(function(callback) {
   *         // do some more stuff but error ...
   *         callback('bad stuff happened');
   *     }),
   *     async.reflect(function(callback) {
   *         // do some more stuff ...
   *         callback(null, 'two');
   *     })
   * ],
   * // optional callback
   * function(err, results) {
   *     // values
   *     // results[0].value = 'one'
   *     // results[1].error = 'bad stuff happened'
   *     // results[2].value = 'two'
   * });
   */


  function reflect(fn) {
    var _fn = wrapAsync(fn);

    return initialParams(function reflectOn(args, reflectCallback) {
      args.push(function callback(error, cbArg) {
        if (error) {
          reflectCallback(null, {
            error: error
          });
        } else {
          var value;

          if (arguments.length <= 2) {
            value = cbArg;
          } else {
            value = slice(arguments, 1);
          }

          reflectCallback(null, {
            value: value
          });
        }
      });
      return _fn.apply(this, args);
    });
  }
  /**
   * A helper function that wraps an array or an object of functions with `reflect`.
   *
   * @name reflectAll
   * @static
   * @memberOf module:Utils
   * @method
   * @see [async.reflect]{@link module:Utils.reflect}
   * @category Util
   * @param {Array|Object|Iterable} tasks - The collection of
   * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
   * @returns {Array} Returns an array of async functions, each wrapped in
   * `async.reflect`
   * @example
   *
   * let tasks = [
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     function(callback) {
   *         // do some more stuff but error ...
   *         callback(new Error('bad stuff happened'));
   *     },
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'two');
   *         }, 100);
   *     }
   * ];
   *
   * async.parallel(async.reflectAll(tasks),
   * // optional callback
   * function(err, results) {
   *     // values
   *     // results[0].value = 'one'
   *     // results[1].error = Error('bad stuff happened')
   *     // results[2].value = 'two'
   * });
   *
   * // an example using an object instead of an array
   * let tasks = {
   *     one: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     two: function(callback) {
   *         callback('two');
   *     },
   *     three: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'three');
   *         }, 100);
   *     }
   * };
   *
   * async.parallel(async.reflectAll(tasks),
   * // optional callback
   * function(err, results) {
   *     // values
   *     // results.one.value = 'one'
   *     // results.two.error = 'two'
   *     // results.three.value = 'three'
   * });
   */


  function reflectAll(tasks) {
    var results;

    if (isArray(tasks)) {
      results = arrayMap(tasks, reflect);
    } else {
      results = {};
      baseForOwn(tasks, function (task, key) {
        results[key] = reflect.call(this, task);
      });
    }

    return results;
  }

  function reject$1(eachfn, arr, iteratee, callback) {
    _filter(eachfn, arr, function (value, cb) {
      iteratee(value, function (err, v) {
        cb(err, !v);
      });
    }, callback);
  }
  /**
   * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
   *
   * @name reject
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.filter]{@link module:Collections.filter}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - An async truth test to apply to each item in
   * `coll`.
   * The should complete with a boolean value as its `result`.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   * @example
   *
   * async.reject(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, results) {
   *     // results now equals an array of missing files
   *     createFiles(results);
   * });
   */


  var reject = doParallel(reject$1);
  /**
   * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name rejectLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.reject]{@link module:Collections.reject}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - An async truth test to apply to each item in
   * `coll`.
   * The should complete with a boolean value as its `result`.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   */

  var rejectLimit = doParallelLimit(reject$1);
  /**
   * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
   *
   * @name rejectSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.reject]{@link module:Collections.reject}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - An async truth test to apply to each item in
   * `coll`.
   * The should complete with a boolean value as its `result`.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   */

  var rejectSeries = doLimit(rejectLimit, 1);
  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */

  function constant$1(value) {
    return function () {
      return value;
    };
  }
  /**
   * Attempts to get a successful response from `task` no more than `times` times
   * before returning an error. If the task is successful, the `callback` will be
   * passed the result of the successful task. If all attempts fail, the callback
   * will be passed the error and result (if any) of the final attempt.
   *
   * @name retry
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @see [async.retryable]{@link module:ControlFlow.retryable}
   * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
   * object with `times` and `interval` or a number.
   * * `times` - The number of attempts to make before giving up.  The default
   *   is `5`.
   * * `interval` - The time to wait between retries, in milliseconds.  The
   *   default is `0`. The interval may also be specified as a function of the
   *   retry count (see example).
   * * `errorFilter` - An optional synchronous function that is invoked on
   *   erroneous result. If it returns `true` the retry attempts will continue;
   *   if the function returns `false` the retry flow is aborted with the current
   *   attempt's error and result being returned to the final callback.
   *   Invoked with (err).
   * * If `opts` is a number, the number specifies the number of times to retry,
   *   with the default interval of `0`.
   * @param {AsyncFunction} task - An async function to retry.
   * Invoked with (callback).
   * @param {Function} [callback] - An optional callback which is called when the
   * task has succeeded, or after the final failed attempt. It receives the `err`
   * and `result` arguments of the last attempt at completing the `task`. Invoked
   * with (err, results).
   *
   * @example
   *
   * // The `retry` function can be used as a stand-alone control flow by passing
   * // a callback, as shown below:
   *
   * // try calling apiMethod 3 times
   * async.retry(3, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod 3 times, waiting 200 ms between each retry
   * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod 10 times with exponential backoff
   * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
   * async.retry({
   *   times: 10,
   *   interval: function(retryCount) {
   *     return 50 * Math.pow(2, retryCount);
   *   }
   * }, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod the default 5 times no delay between each retry
   * async.retry(apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod only when error condition satisfies, all other
   * // errors will abort the retry control flow and return to final callback
   * async.retry({
   *   errorFilter: function(err) {
   *     return err.message === 'Temporary error'; // only retry on a specific error
   *   }
   * }, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // to retry individual methods that are not as reliable within other
   * // control flow functions, use the `retryable` wrapper:
   * async.auto({
   *     users: api.getUsers.bind(api),
   *     payments: async.retryable(3, api.getPayments.bind(api))
   * }, function(err, results) {
   *     // do something with the results
   * });
   *
   */


  function retry(opts, task, callback) {
    var DEFAULT_TIMES = 5;
    var DEFAULT_INTERVAL = 0;
    var options = {
      times: DEFAULT_TIMES,
      intervalFunc: constant$1(DEFAULT_INTERVAL)
    };

    function parseTimes(acc, t) {
      if (typeof t === 'object') {
        acc.times = +t.times || DEFAULT_TIMES;
        acc.intervalFunc = typeof t.interval === 'function' ? t.interval : constant$1(+t.interval || DEFAULT_INTERVAL);
        acc.errorFilter = t.errorFilter;
      } else if (typeof t === 'number' || typeof t === 'string') {
        acc.times = +t || DEFAULT_TIMES;
      } else {
        throw new Error("Invalid arguments for async.retry");
      }
    }

    if (arguments.length < 3 && typeof opts === 'function') {
      callback = task || noop;
      task = opts;
    } else {
      parseTimes(options, opts);
      callback = callback || noop;
    }

    if (typeof task !== 'function') {
      throw new Error("Invalid arguments for async.retry");
    }

    var _task = wrapAsync(task);

    var attempt = 1;

    function retryAttempt() {
      _task(function (err) {
        if (err && attempt++ < options.times && (typeof options.errorFilter != 'function' || options.errorFilter(err))) {
          setTimeout(retryAttempt, options.intervalFunc(attempt));
        } else {
          callback.apply(null, arguments);
        }
      });
    }

    retryAttempt();
  }
  /**
   * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
   * wraps a task and makes it retryable, rather than immediately calling it
   * with retries.
   *
   * @name retryable
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.retry]{@link module:ControlFlow.retry}
   * @category Control Flow
   * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
   * options, exactly the same as from `retry`
   * @param {AsyncFunction} task - the asynchronous function to wrap.
   * This function will be passed any arguments passed to the returned wrapper.
   * Invoked with (...args, callback).
   * @returns {AsyncFunction} The wrapped function, which when invoked, will
   * retry on an error, based on the parameters specified in `opts`.
   * This function will accept the same parameters as `task`.
   * @example
   *
   * async.auto({
   *     dep1: async.retryable(3, getFromFlakyService),
   *     process: ["dep1", async.retryable(3, function (results, cb) {
   *         maybeProcessData(results.dep1, cb);
   *     })]
   * }, callback);
   */


  var retryable = function (opts, task) {
    if (!task) {
      task = opts;
      opts = null;
    }

    var _task = wrapAsync(task);

    return initialParams(function (args, callback) {
      function taskFn(cb) {
        _task.apply(null, args.concat(cb));
      }

      if (opts) retry(opts, taskFn, callback);else retry(taskFn, callback);
    });
  };
  /**
   * Run the functions in the `tasks` collection in series, each one running once
   * the previous function has completed. If any functions in the series pass an
   * error to its callback, no more functions are run, and `callback` is
   * immediately called with the value of the error. Otherwise, `callback`
   * receives an array of results when `tasks` have completed.
   *
   * It is also possible to use an object instead of an array. Each property will
   * be run as a function, and the results will be passed to the final `callback`
   * as an object instead of an array. This can be a more readable way of handling
   *  results from {@link async.series}.
   *
   * **Note** that while many implementations preserve the order of object
   * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
   * explicitly states that
   *
   * > The mechanics and order of enumerating the properties is not specified.
   *
   * So if you rely on the order in which your series of functions are executed,
   * and want this to work on all platforms, consider using an array.
   *
   * @name series
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array|Iterable|Object} tasks - A collection containing
   * [async functions]{@link AsyncFunction} to run in series.
   * Each function can complete with any number of optional `result` values.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed. This function gets a results array (or object)
   * containing all the result arguments passed to the `task` callbacks. Invoked
   * with (err, result).
   * @example
   * async.series([
   *     function(callback) {
   *         // do some stuff ...
   *         callback(null, 'one');
   *     },
   *     function(callback) {
   *         // do some more stuff ...
   *         callback(null, 'two');
   *     }
   * ],
   * // optional callback
   * function(err, results) {
   *     // results is now equal to ['one', 'two']
   * });
   *
   * async.series({
   *     one: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 1);
   *         }, 200);
   *     },
   *     two: function(callback){
   *         setTimeout(function() {
   *             callback(null, 2);
   *         }, 100);
   *     }
   * }, function(err, results) {
   *     // results is now equal to: {one: 1, two: 2}
   * });
   */


  function series(tasks, callback) {
    _parallel(eachOfSeries, tasks, callback);
  }
  /**
   * Returns `true` if at least one element in the `coll` satisfies an async test.
   * If any iteratee call returns `true`, the main `callback` is immediately
   * called.
   *
   * @name some
   * @static
   * @memberOf module:Collections
   * @method
   * @alias any
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collections in parallel.
   * The iteratee should complete with a boolean `result` value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the iteratee functions have finished.
   * Result will be either `true` or `false` depending on the values of the async
   * tests. Invoked with (err, result).
   * @example
   *
   * async.some(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, result) {
   *     // if result is true then at least one of the files exists
   * });
   */


  var some = doParallel(_createTester(Boolean, identity));
  /**
   * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
   *
   * @name someLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.some]{@link module:Collections.some}
   * @alias anyLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collections in parallel.
   * The iteratee should complete with a boolean `result` value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the iteratee functions have finished.
   * Result will be either `true` or `false` depending on the values of the async
   * tests. Invoked with (err, result).
   */

  var someLimit = doParallelLimit(_createTester(Boolean, identity));
  /**
   * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
   *
   * @name someSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.some]{@link module:Collections.some}
   * @alias anySeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collections in series.
   * The iteratee should complete with a boolean `result` value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the iteratee functions have finished.
   * Result will be either `true` or `false` depending on the values of the async
   * tests. Invoked with (err, result).
   */

  var someSeries = doLimit(someLimit, 1);
  /**
   * Sorts a list by the results of running each `coll` value through an async
   * `iteratee`.
   *
   * @name sortBy
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with a value to use as the sort criteria as
   * its `result`.
   * Invoked with (item, callback).
   * @param {Function} callback - A callback which is called after all the
   * `iteratee` functions have finished, or an error occurs. Results is the items
   * from the original `coll` sorted by the values returned by the `iteratee`
   * calls. Invoked with (err, results).
   * @example
   *
   * async.sortBy(['file1','file2','file3'], function(file, callback) {
   *     fs.stat(file, function(err, stats) {
   *         callback(err, stats.mtime);
   *     });
   * }, function(err, results) {
   *     // results is now the original array of files sorted by
   *     // modified date
   * });
   *
   * // By modifying the callback parameter the
   * // sorting order can be influenced:
   *
   * // ascending order
   * async.sortBy([1,9,3,5], function(x, callback) {
   *     callback(null, x);
   * }, function(err,result) {
   *     // result callback
   * });
   *
   * // descending order
   * async.sortBy([1,9,3,5], function(x, callback) {
   *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
   * }, function(err,result) {
   *     // result callback
   * });
   */

  function sortBy(coll, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);

    map(coll, function (x, callback) {
      _iteratee(x, function (err, criteria) {
        if (err) return callback(err);
        callback(null, {
          value: x,
          criteria: criteria
        });
      });
    }, function (err, results) {
      if (err) return callback(err);
      callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
    });

    function comparator(left, right) {
      var a = left.criteria,
          b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }
  }
  /**
   * Sets a time limit on an asynchronous function. If the function does not call
   * its callback within the specified milliseconds, it will be called with a
   * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
   *
   * @name timeout
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} asyncFn - The async function to limit in time.
   * @param {number} milliseconds - The specified time limit.
   * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
   * to timeout Error for more information..
   * @returns {AsyncFunction} Returns a wrapped function that can be used with any
   * of the control flow functions.
   * Invoke this function with the same parameters as you would `asyncFunc`.
   * @example
   *
   * function myFunction(foo, callback) {
   *     doAsyncTask(foo, function(err, data) {
   *         // handle errors
   *         if (err) return callback(err);
   *
   *         // do some stuff ...
   *
   *         // return processed data
   *         return callback(null, data);
   *     });
   * }
   *
   * var wrapped = async.timeout(myFunction, 1000);
   *
   * // call `wrapped` as you would `myFunction`
   * wrapped({ bar: 'bar' }, function(err, data) {
   *     // if `myFunction` takes < 1000 ms to execute, `err`
   *     // and `data` will have their expected values
   *
   *     // else `err` will be an Error with the code 'ETIMEDOUT'
   * });
   */


  function timeout(asyncFn, milliseconds, info) {
    var fn = wrapAsync(asyncFn);
    return initialParams(function (args, callback) {
      var timedOut = false;
      var timer;

      function timeoutCallback() {
        var name = asyncFn.name || 'anonymous';
        var error = new Error('Callback function "' + name + '" timed out.');
        error.code = 'ETIMEDOUT';

        if (info) {
          error.info = info;
        }

        timedOut = true;
        callback(error);
      }

      args.push(function () {
        if (!timedOut) {
          callback.apply(null, arguments);
          clearTimeout(timer);
        }
      }); // setup timer and call original function

      timer = setTimeout(timeoutCallback, milliseconds);
      fn.apply(null, args);
    });
  }
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeCeil = Math.ceil;
  var nativeMax = Math.max;
  /**
   * The base implementation of `_.range` and `_.rangeRight` which doesn't
   * coerce arguments.
   *
   * @private
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @param {number} step The value to increment or decrement by.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the range of numbers.
   */

  function baseRange(start, end, step, fromRight) {
    var index = -1,
        length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
        result = Array(length);

    while (length--) {
      result[fromRight ? length : ++index] = start;
      start += step;
    }

    return result;
  }
  /**
   * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name timesLimit
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.times]{@link module:ControlFlow.times}
   * @category Control Flow
   * @param {number} count - The number of times to run the function.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - The async function to call `n` times.
   * Invoked with the iteration index and a callback: (n, next).
   * @param {Function} callback - see [async.map]{@link module:Collections.map}.
   */


  function timeLimit(count, limit, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);

    mapLimit(baseRange(0, count, 1), limit, _iteratee, callback);
  }
  /**
   * Calls the `iteratee` function `n` times, and accumulates results in the same
   * manner you would use with [map]{@link module:Collections.map}.
   *
   * @name times
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.map]{@link module:Collections.map}
   * @category Control Flow
   * @param {number} n - The number of times to run the function.
   * @param {AsyncFunction} iteratee - The async function to call `n` times.
   * Invoked with the iteration index and a callback: (n, next).
   * @param {Function} callback - see {@link module:Collections.map}.
   * @example
   *
   * // Pretend this is some complicated async factory
   * var createUser = function(id, callback) {
   *     callback(null, {
   *         id: 'user' + id
   *     });
   * };
   *
   * // generate 5 users
   * async.times(5, function(n, next) {
   *     createUser(n, function(err, user) {
   *         next(err, user);
   *     });
   * }, function(err, users) {
   *     // we should now have 5 users
   * });
   */


  var times = doLimit(timeLimit, Infinity);
  /**
   * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
   *
   * @name timesSeries
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.times]{@link module:ControlFlow.times}
   * @category Control Flow
   * @param {number} n - The number of times to run the function.
   * @param {AsyncFunction} iteratee - The async function to call `n` times.
   * Invoked with the iteration index and a callback: (n, next).
   * @param {Function} callback - see {@link module:Collections.map}.
   */

  var timesSeries = doLimit(timeLimit, 1);
  /**
   * A relative of `reduce`.  Takes an Object or Array, and iterates over each
   * element in series, each step potentially mutating an `accumulator` value.
   * The type of the accumulator defaults to the type of collection passed in.
   *
   * @name transform
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {*} [accumulator] - The initial state of the transform.  If omitted,
   * it will default to an empty Object or Array, depending on the type of `coll`
   * @param {AsyncFunction} iteratee - A function applied to each item in the
   * collection that potentially modifies the accumulator.
   * Invoked with (accumulator, item, key, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result is the transformed accumulator.
   * Invoked with (err, result).
   * @example
   *
   * async.transform([1,2,3], function(acc, item, index, callback) {
   *     // pointless async:
   *     process.nextTick(function() {
   *         acc.push(item * 2)
   *         callback(null)
   *     });
   * }, function(err, result) {
   *     // result is now equal to [2, 4, 6]
   * });
   *
   * @example
   *
   * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
   *     setImmediate(function () {
   *         obj[key] = val * 2;
   *         callback();
   *     })
   * }, function (err, result) {
   *     // result is equal to {a: 2, b: 4, c: 6}
   * })
   */

  function transform(coll, accumulator, iteratee, callback) {
    if (arguments.length <= 3) {
      callback = iteratee;
      iteratee = accumulator;
      accumulator = isArray(coll) ? [] : {};
    }

    callback = once(callback || noop);

    var _iteratee = wrapAsync(iteratee);

    eachOf(coll, function (v, k, cb) {
      _iteratee(accumulator, v, k, cb);
    }, function (err) {
      callback(err, accumulator);
    });
  }
  /**
   * It runs each task in series but stops whenever any of the functions were
   * successful. If one of the tasks were successful, the `callback` will be
   * passed the result of the successful task. If all tasks fail, the callback
   * will be passed the error and result (if any) of the final attempt.
   *
   * @name tryEach
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array|Iterable|Object} tasks - A collection containing functions to
   * run, each function is passed a `callback(err, result)` it must call on
   * completion with an error `err` (which can be `null`) and an optional `result`
   * value.
   * @param {Function} [callback] - An optional callback which is called when one
   * of the tasks has succeeded, or all have failed. It receives the `err` and
   * `result` arguments of the last attempt at completing the `task`. Invoked with
   * (err, results).
   * @example
   * async.tryEach([
   *     function getDataFromFirstWebsite(callback) {
   *         // Try getting the data from the first website
   *         callback(err, data);
   *     },
   *     function getDataFromSecondWebsite(callback) {
   *         // First website failed,
   *         // Try getting the data from the backup website
   *         callback(err, data);
   *     }
   * ],
   * // optional callback
   * function(err, results) {
   *     Now do something with the data.
   * });
   *
   */


  function tryEach(tasks, callback) {
    var error = null;
    var result;
    callback = callback || noop;
    eachSeries(tasks, function (task, callback) {
      wrapAsync(task)(function (err, res
      /*, ...args*/
      ) {
        if (arguments.length > 2) {
          result = slice(arguments, 1);
        } else {
          result = res;
        }

        error = err;
        callback(!err);
      });
    }, function () {
      callback(error, result);
    });
  }
  /**
   * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
   * unmemoized form. Handy for testing.
   *
   * @name unmemoize
   * @static
   * @memberOf module:Utils
   * @method
   * @see [async.memoize]{@link module:Utils.memoize}
   * @category Util
   * @param {AsyncFunction} fn - the memoized function
   * @returns {AsyncFunction} a function that calls the original unmemoized function
   */


  function unmemoize(fn) {
    return function () {
      return (fn.unmemoized || fn).apply(null, arguments);
    };
  }
  /**
   * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
   * stopped, or an error occurs.
   *
   * @name whilst
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Function} test - synchronous truth test to perform before each
   * execution of `iteratee`. Invoked with ().
   * @param {AsyncFunction} iteratee - An async function which is called each time
   * `test` passes. Invoked with (callback).
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `iteratee` has stopped. `callback`
   * will be passed an error and any arguments passed to the final `iteratee`'s
   * callback. Invoked with (err, [results]);
   * @returns undefined
   * @example
   *
   * var count = 0;
   * async.whilst(
   *     function() { return count < 5; },
   *     function(callback) {
   *         count++;
   *         setTimeout(function() {
   *             callback(null, count);
   *         }, 1000);
   *     },
   *     function (err, n) {
   *         // 5 seconds have passed, n = 5
   *     }
   * );
   */


  function whilst(test, iteratee, callback) {
    callback = onlyOnce(callback || noop);

    var _iteratee = wrapAsync(iteratee);

    if (!test()) return callback(null);

    var next = function (err
    /*, ...args*/
    ) {
      if (err) return callback(err);
      if (test()) return _iteratee(next);
      var args = slice(arguments, 1);
      callback.apply(null, [null].concat(args));
    };

    _iteratee(next);
  }
  /**
   * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
   * stopped, or an error occurs. `callback` will be passed an error and any
   * arguments passed to the final `iteratee`'s callback.
   *
   * The inverse of [whilst]{@link module:ControlFlow.whilst}.
   *
   * @name until
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.whilst]{@link module:ControlFlow.whilst}
   * @category Control Flow
   * @param {Function} test - synchronous truth test to perform before each
   * execution of `iteratee`. Invoked with ().
   * @param {AsyncFunction} iteratee - An async function which is called each time
   * `test` fails. Invoked with (callback).
   * @param {Function} [callback] - A callback which is called after the test
   * function has passed and repeated execution of `iteratee` has stopped. `callback`
   * will be passed an error and any arguments passed to the final `iteratee`'s
   * callback. Invoked with (err, [results]);
   */


  function until(test, iteratee, callback) {
    whilst(function () {
      return !test.apply(this, arguments);
    }, iteratee, callback);
  }
  /**
   * Runs the `tasks` array of functions in series, each passing their results to
   * the next in the array. However, if any of the `tasks` pass an error to their
   * own callback, the next function is not executed, and the main `callback` is
   * immediately called with the error.
   *
   * @name waterfall
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
   * to run.
   * Each function should complete with any number of `result` values.
   * The `result` values will be passed as arguments, in order, to the next task.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed. This will be passed the results of the last task's
   * callback. Invoked with (err, [results]).
   * @returns undefined
   * @example
   *
   * async.waterfall([
   *     function(callback) {
   *         callback(null, 'one', 'two');
   *     },
   *     function(arg1, arg2, callback) {
   *         // arg1 now equals 'one' and arg2 now equals 'two'
   *         callback(null, 'three');
   *     },
   *     function(arg1, callback) {
   *         // arg1 now equals 'three'
   *         callback(null, 'done');
   *     }
   * ], function (err, result) {
   *     // result now equals 'done'
   * });
   *
   * // Or, with named functions:
   * async.waterfall([
   *     myFirstFunction,
   *     mySecondFunction,
   *     myLastFunction,
   * ], function (err, result) {
   *     // result now equals 'done'
   * });
   * function myFirstFunction(callback) {
   *     callback(null, 'one', 'two');
   * }
   * function mySecondFunction(arg1, arg2, callback) {
   *     // arg1 now equals 'one' and arg2 now equals 'two'
   *     callback(null, 'three');
   * }
   * function myLastFunction(arg1, callback) {
   *     // arg1 now equals 'three'
   *     callback(null, 'done');
   * }
   */


  var waterfall = function (tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length) return callback();
    var taskIndex = 0;

    function nextTask(args) {
      var task = wrapAsync(tasks[taskIndex++]);
      args.push(onlyOnce(next));
      task.apply(null, args);
    }

    function next(err
    /*, ...args*/
    ) {
      if (err || taskIndex === tasks.length) {
        return callback.apply(null, arguments);
      }

      nextTask(slice(arguments, 1));
    }

    nextTask([]);
  };
  /**
   * An "async function" in the context of Async is an asynchronous function with
   * a variable number of parameters, with the final parameter being a callback.
   * (`function (arg1, arg2, ..., callback) {}`)
   * The final callback is of the form `callback(err, results...)`, which must be
   * called once the function is completed.  The callback should be called with a
   * Error as its first argument to signal that an error occurred.
   * Otherwise, if no error occurred, it should be called with `null` as the first
   * argument, and any additional `result` arguments that may apply, to signal
   * successful completion.
   * The callback must be called exactly once, ideally on a later tick of the
   * JavaScript event loop.
   *
   * This type of function is also referred to as a "Node-style async function",
   * or a "continuation passing-style function" (CPS). Most of the methods of this
   * library are themselves CPS/Node-style async functions, or functions that
   * return CPS/Node-style async functions.
   *
   * Wherever we accept a Node-style async function, we also directly accept an
   * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
   * In this case, the `async` function will not be passed a final callback
   * argument, and any thrown error will be used as the `err` argument of the
   * implicit callback, and the return value will be used as the `result` value.
   * (i.e. a `rejected` of the returned Promise becomes the `err` callback
   * argument, and a `resolved` value becomes the `result`.)
   *
   * Note, due to JavaScript limitations, we can only detect native `async`
   * functions and not transpilied implementations.
   * Your environment must have `async`/`await` support for this to work.
   * (e.g. Node > v7.6, or a recent version of a modern browser).
   * If you are using `async` functions through a transpiler (e.g. Babel), you
   * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
   * because the `async function` will be compiled to an ordinary function that
   * returns a promise.
   *
   * @typedef {Function} AsyncFunction
   * @static
   */

  /**
   * Async is a utility module which provides straight-forward, powerful functions
   * for working with asynchronous JavaScript. Although originally designed for
   * use with [Node.js](http://nodejs.org) and installable via
   * `npm install --save async`, it can also be used directly in the browser.
   * @module async
   * @see AsyncFunction
   */

  /**
   * A collection of `async` functions for manipulating collections, such as
   * arrays and objects.
   * @module Collections
   */

  /**
   * A collection of `async` functions for controlling the flow through a script.
   * @module ControlFlow
   */

  /**
   * A collection of `async` utility functions.
   * @module Utils
   */


  var index = {
    apply: apply,
    applyEach: applyEach,
    applyEachSeries: applyEachSeries,
    asyncify: asyncify,
    auto: auto,
    autoInject: autoInject,
    cargo: cargo,
    compose: compose,
    concat: concat,
    concatLimit: concatLimit,
    concatSeries: concatSeries,
    constant: constant,
    detect: detect,
    detectLimit: detectLimit,
    detectSeries: detectSeries,
    dir: dir,
    doDuring: doDuring,
    doUntil: doUntil,
    doWhilst: doWhilst,
    during: during,
    each: eachLimit,
    eachLimit: eachLimit$1,
    eachOf: eachOf,
    eachOfLimit: eachOfLimit,
    eachOfSeries: eachOfSeries,
    eachSeries: eachSeries,
    ensureAsync: ensureAsync,
    every: every,
    everyLimit: everyLimit,
    everySeries: everySeries,
    filter: filter,
    filterLimit: filterLimit,
    filterSeries: filterSeries,
    forever: forever,
    groupBy: groupBy,
    groupByLimit: groupByLimit,
    groupBySeries: groupBySeries,
    log: log,
    map: map,
    mapLimit: mapLimit,
    mapSeries: mapSeries,
    mapValues: mapValues,
    mapValuesLimit: mapValuesLimit,
    mapValuesSeries: mapValuesSeries,
    memoize: memoize,
    nextTick: nextTick,
    parallel: parallelLimit,
    parallelLimit: parallelLimit$1,
    priorityQueue: priorityQueue,
    queue: queue$1,
    race: race,
    reduce: reduce,
    reduceRight: reduceRight,
    reflect: reflect,
    reflectAll: reflectAll,
    reject: reject,
    rejectLimit: rejectLimit,
    rejectSeries: rejectSeries,
    retry: retry,
    retryable: retryable,
    seq: seq,
    series: series,
    setImmediate: setImmediate$1,
    some: some,
    someLimit: someLimit,
    someSeries: someSeries,
    sortBy: sortBy,
    timeout: timeout,
    times: times,
    timesLimit: timeLimit,
    timesSeries: timesSeries,
    transform: transform,
    tryEach: tryEach,
    unmemoize: unmemoize,
    until: until,
    waterfall: waterfall,
    whilst: whilst,
    // aliases
    all: every,
    allLimit: everyLimit,
    allSeries: everySeries,
    any: some,
    anyLimit: someLimit,
    anySeries: someSeries,
    find: detect,
    findLimit: detectLimit,
    findSeries: detectSeries,
    forEach: eachLimit,
    forEachSeries: eachSeries,
    forEachLimit: eachLimit$1,
    forEachOf: eachOf,
    forEachOfSeries: eachOfSeries,
    forEachOfLimit: eachOfLimit,
    inject: reduce,
    foldl: reduce,
    foldr: reduceRight,
    select: filter,
    selectLimit: filterLimit,
    selectSeries: filterSeries,
    wrapSync: asyncify
  };
  exports['default'] = index;
  exports.apply = apply;
  exports.applyEach = applyEach;
  exports.applyEachSeries = applyEachSeries;
  exports.asyncify = asyncify;
  exports.auto = auto;
  exports.autoInject = autoInject;
  exports.cargo = cargo;
  exports.compose = compose;
  exports.concat = concat;
  exports.concatLimit = concatLimit;
  exports.concatSeries = concatSeries;
  exports.constant = constant;
  exports.detect = detect;
  exports.detectLimit = detectLimit;
  exports.detectSeries = detectSeries;
  exports.dir = dir;
  exports.doDuring = doDuring;
  exports.doUntil = doUntil;
  exports.doWhilst = doWhilst;
  exports.during = during;
  exports.each = eachLimit;
  exports.eachLimit = eachLimit$1;
  exports.eachOf = eachOf;
  exports.eachOfLimit = eachOfLimit;
  exports.eachOfSeries = eachOfSeries;
  exports.eachSeries = eachSeries;
  exports.ensureAsync = ensureAsync;
  exports.every = every;
  exports.everyLimit = everyLimit;
  exports.everySeries = everySeries;
  exports.filter = filter;
  exports.filterLimit = filterLimit;
  exports.filterSeries = filterSeries;
  exports.forever = forever;
  exports.groupBy = groupBy;
  exports.groupByLimit = groupByLimit;
  exports.groupBySeries = groupBySeries;
  exports.log = log;
  exports.map = map;
  exports.mapLimit = mapLimit;
  exports.mapSeries = mapSeries;
  exports.mapValues = mapValues;
  exports.mapValuesLimit = mapValuesLimit;
  exports.mapValuesSeries = mapValuesSeries;
  exports.memoize = memoize;
  exports.nextTick = nextTick;
  exports.parallel = parallelLimit;
  exports.parallelLimit = parallelLimit$1;
  exports.priorityQueue = priorityQueue;
  exports.queue = queue$1;
  exports.race = race;
  exports.reduce = reduce;
  exports.reduceRight = reduceRight;
  exports.reflect = reflect;
  exports.reflectAll = reflectAll;
  exports.reject = reject;
  exports.rejectLimit = rejectLimit;
  exports.rejectSeries = rejectSeries;
  exports.retry = retry;
  exports.retryable = retryable;
  exports.seq = seq;
  exports.series = series;
  exports.setImmediate = setImmediate$1;
  exports.some = some;
  exports.someLimit = someLimit;
  exports.someSeries = someSeries;
  exports.sortBy = sortBy;
  exports.timeout = timeout;
  exports.times = times;
  exports.timesLimit = timeLimit;
  exports.timesSeries = timesSeries;
  exports.transform = transform;
  exports.tryEach = tryEach;
  exports.unmemoize = unmemoize;
  exports.until = until;
  exports.waterfall = waterfall;
  exports.whilst = whilst;
  exports.all = every;
  exports.allLimit = everyLimit;
  exports.allSeries = everySeries;
  exports.any = some;
  exports.anyLimit = someLimit;
  exports.anySeries = someSeries;
  exports.find = detect;
  exports.findLimit = detectLimit;
  exports.findSeries = detectSeries;
  exports.forEach = eachLimit;
  exports.forEachSeries = eachSeries;
  exports.forEachLimit = eachLimit$1;
  exports.forEachOf = eachOf;
  exports.forEachOfSeries = eachOfSeries;
  exports.forEachOfLimit = eachOfLimit;
  exports.inject = reduce;
  exports.foldl = reduce;
  exports.foldr = reduceRight;
  exports.select = filter;
  exports.selectLimit = filterLimit;
  exports.selectSeries = filterSeries;
  exports.wrapSync = asyncify;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(10);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * node.extend
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * @fileoverview
 * Port of jQuery.extend that actually works on node.js
 */

var is = __webpack_require__(11);

var has = __webpack_require__(12);

var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor; // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target

var setProperty = function setP(target, name, value) {
  if (defineProperty && name === '__proto__') {
    defineProperty(target, name, {
      enumerable: true,
      configurable: true,
      value: value,
      writable: true
    });
  } else {
    target[name] = value;
  }
}; // Return undefined instead of __proto__ if '__proto__' is not an own property


var getProperty = function getP(obj, name) {
  if (name === '__proto__') {
    if (!has(obj, name)) {
      return void 0;
    } else if (gOPD) {
      // In early versions of node, obj['__proto__'] is buggy when obj has
      // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
      return gOPD(obj, name).value;
    }
  }

  return obj[name];
};

module.exports = function extend() {
  var target = arguments[0] || {};
  var i = 1;
  var length = arguments.length;
  var deep = false;
  var options, name, src, copy, copyIsArray, clone; // Handle a deep copy situation

  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {}; // skip the boolean and the target

    i = 2;
  } // Handle case when target is a string or something (possible in deep copy)


  if (typeof target !== 'object' && !is.fn(target)) {
    target = {};
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    options = arguments[i];

    if (options != null) {
      if (typeof options === 'string') {
        options = options.split('');
      } // Extend the base object


      for (name in options) {
        src = getProperty(target, name);
        copy = getProperty(options, name); // Prevent never-ending loop

        if (target === copy) {
          continue;
        } // Recurse if we're merging plain objects or arrays


        if (deep && copy && (is.hash(copy) || (copyIsArray = is.array(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && is.array(src) ? src : [];
          } else {
            clone = src && is.hash(src) ? src : {};
          } // Never move original objects, clone them


          setProperty(target, name, extend(deep, clone, copy)); // Don't bring in undefined values
        } else if (typeof copy !== 'undefined') {
          setProperty(target, name, copy);
        }
      }
    }
  } // Return the modified object


  return target;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals window, HTMLElement */

/**!
 * is
 * the definitive JavaScript type testing library
 *
 * @copyright 2013-2014 Enrico Marino / Jordan Harband
 * @license MIT
 */

var objProto = Object.prototype;
var owns = objProto.hasOwnProperty;
var toStr = objProto.toString;
var symbolValueOf;

if (typeof Symbol === 'function') {
  symbolValueOf = Symbol.prototype.valueOf;
}

var bigIntValueOf;

if (typeof BigInt === 'function') {
  bigIntValueOf = BigInt.prototype.valueOf;
}

var isActualNaN = function (value) {
  return value !== value;
};

var NON_HOST_TYPES = {
  'boolean': 1,
  number: 1,
  string: 1,
  undefined: 1
};
var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
var hexRegex = /^[A-Fa-f0-9]+$/;
/**
 * Expose `is`
 */

var is = {};
/**
 * Test general.
 */

/**
 * is.type
 * Test if `value` is a type of `type`.
 *
 * @param {*} value value to test
 * @param {String} type type
 * @return {Boolean} true if `value` is a type of `type`, false otherwise
 * @api public
 */

is.a = is.type = function (value, type) {
  return typeof value === type;
};
/**
 * is.defined
 * Test if `value` is defined.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is defined, false otherwise
 * @api public
 */


is.defined = function (value) {
  return typeof value !== 'undefined';
};
/**
 * is.empty
 * Test if `value` is empty.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @api public
 */


is.empty = function (value) {
  var type = toStr.call(value);
  var key;

  if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
    return value.length === 0;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (owns.call(value, key)) {
        return false;
      }
    }

    return true;
  }

  return !value;
};
/**
 * is.equal
 * Test if `value` is equal to `other`.
 *
 * @param {*} value value to test
 * @param {*} other value to compare with
 * @return {Boolean} true if `value` is equal to `other`, false otherwise
 */


is.equal = function equal(value, other) {
  if (value === other) {
    return true;
  }

  var type = toStr.call(value);
  var key;

  if (type !== toStr.call(other)) {
    return false;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (!is.equal(value[key], other[key]) || !(key in other)) {
        return false;
      }
    }

    for (key in other) {
      if (!is.equal(value[key], other[key]) || !(key in value)) {
        return false;
      }
    }

    return true;
  }

  if (type === '[object Array]') {
    key = value.length;

    if (key !== other.length) {
      return false;
    }

    while (key--) {
      if (!is.equal(value[key], other[key])) {
        return false;
      }
    }

    return true;
  }

  if (type === '[object Function]') {
    return value.prototype === other.prototype;
  }

  if (type === '[object Date]') {
    return value.getTime() === other.getTime();
  }

  return false;
};
/**
 * is.hosted
 * Test if `value` is hosted by `host`.
 *
 * @param {*} value to test
 * @param {*} host host to test with
 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
 * @api public
 */


is.hosted = function (value, host) {
  var type = typeof host[value];
  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
};
/**
 * is.instance
 * Test if `value` is an instance of `constructor`.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an instance of `constructor`
 * @api public
 */


is.instance = is['instanceof'] = function (value, constructor) {
  return value instanceof constructor;
};
/**
 * is.nil / is.null
 * Test if `value` is null.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is null, false otherwise
 * @api public
 */


is.nil = is['null'] = function (value) {
  return value === null;
};
/**
 * is.undef / is.undefined
 * Test if `value` is undefined.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is undefined, false otherwise
 * @api public
 */


is.undef = is.undefined = function (value) {
  return typeof value === 'undefined';
};
/**
 * Test arguments.
 */

/**
 * is.args
 * Test if `value` is an arguments object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */


is.args = is.arguments = function (value) {
  var isStandardArguments = toStr.call(value) === '[object Arguments]';
  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
  return isStandardArguments || isOldArguments;
};
/**
 * Test array.
 */

/**
 * is.array
 * Test if 'value' is an array.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an array, false otherwise
 * @api public
 */


is.array = Array.isArray || function (value) {
  return toStr.call(value) === '[object Array]';
};
/**
 * is.arguments.empty
 * Test if `value` is an empty arguments object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
 * @api public
 */


is.args.empty = function (value) {
  return is.args(value) && value.length === 0;
};
/**
 * is.array.empty
 * Test if `value` is an empty array.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an empty array, false otherwise
 * @api public
 */


is.array.empty = function (value) {
  return is.array(value) && value.length === 0;
};
/**
 * is.arraylike
 * Test if `value` is an arraylike object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */


is.arraylike = function (value) {
  return !!value && !is.bool(value) && owns.call(value, 'length') && isFinite(value.length) && is.number(value.length) && value.length >= 0;
};
/**
 * Test boolean.
 */

/**
 * is.bool
 * Test if `value` is a boolean.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a boolean, false otherwise
 * @api public
 */


is.bool = is['boolean'] = function (value) {
  return toStr.call(value) === '[object Boolean]';
};
/**
 * is.false
 * Test if `value` is false.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is false, false otherwise
 * @api public
 */


is['false'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === false;
};
/**
 * is.true
 * Test if `value` is true.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is true, false otherwise
 * @api public
 */


is['true'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === true;
};
/**
 * Test date.
 */

/**
 * is.date
 * Test if `value` is a date.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a date, false otherwise
 * @api public
 */


is.date = function (value) {
  return toStr.call(value) === '[object Date]';
};
/**
 * is.date.valid
 * Test if `value` is a valid date.
 *
 * @param {*} value value to test
 * @returns {Boolean} true if `value` is a valid date, false otherwise
 */


is.date.valid = function (value) {
  return is.date(value) && !isNaN(Number(value));
};
/**
 * Test element.
 */

/**
 * is.element
 * Test if `value` is an html element.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an HTML Element, false otherwise
 * @api public
 */


is.element = function (value) {
  return value !== undefined && typeof HTMLElement !== 'undefined' && value instanceof HTMLElement && value.nodeType === 1;
};
/**
 * Test error.
 */

/**
 * is.error
 * Test if `value` is an error object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an error object, false otherwise
 * @api public
 */


is.error = function (value) {
  return toStr.call(value) === '[object Error]';
};
/**
 * Test function.
 */

/**
 * is.fn / is.function (deprecated)
 * Test if `value` is a function.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a function, false otherwise
 * @api public
 */


is.fn = is['function'] = function (value) {
  var isAlert = typeof window !== 'undefined' && value === window.alert;

  if (isAlert) {
    return true;
  }

  var str = toStr.call(value);
  return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
};
/**
 * Test number.
 */

/**
 * is.number
 * Test if `value` is a number.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a number, false otherwise
 * @api public
 */


is.number = function (value) {
  return toStr.call(value) === '[object Number]';
};
/**
 * is.infinite
 * Test if `value` is positive or negative infinity.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
 * @api public
 */


is.infinite = function (value) {
  return value === Infinity || value === -Infinity;
};
/**
 * is.decimal
 * Test if `value` is a decimal number.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @api public
 */


is.decimal = function (value) {
  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
};
/**
 * is.divisibleBy
 * Test if `value` is divisible by `n`.
 *
 * @param {Number} value value to test
 * @param {Number} n dividend
 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
 * @api public
 */


is.divisibleBy = function (value, n) {
  var isDividendInfinite = is.infinite(value);
  var isDivisorInfinite = is.infinite(n);
  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
  return isDividendInfinite || isDivisorInfinite || isNonZeroNumber && value % n === 0;
};
/**
 * is.integer
 * Test if `value` is an integer.
 *
 * @param value to test
 * @return {Boolean} true if `value` is an integer, false otherwise
 * @api public
 */


is.integer = is['int'] = function (value) {
  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
};
/**
 * is.maximum
 * Test if `value` is greater than 'others' values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is greater than `others` values
 * @api public
 */


is.maximum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }

  var len = others.length;

  while (--len >= 0) {
    if (value < others[len]) {
      return false;
    }
  }

  return true;
};
/**
 * is.minimum
 * Test if `value` is less than `others` values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is less than `others` values
 * @api public
 */


is.minimum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }

  var len = others.length;

  while (--len >= 0) {
    if (value > others[len]) {
      return false;
    }
  }

  return true;
};
/**
 * is.nan
 * Test if `value` is not a number.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is not a number, false otherwise
 * @api public
 */


is.nan = function (value) {
  return !is.number(value) || value !== value;
};
/**
 * is.even
 * Test if `value` is an even number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an even number, false otherwise
 * @api public
 */


is.even = function (value) {
  return is.infinite(value) || is.number(value) && value === value && value % 2 === 0;
};
/**
 * is.odd
 * Test if `value` is an odd number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an odd number, false otherwise
 * @api public
 */


is.odd = function (value) {
  return is.infinite(value) || is.number(value) && value === value && value % 2 !== 0;
};
/**
 * is.ge
 * Test if `value` is greater than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */


is.ge = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }

  return !is.infinite(value) && !is.infinite(other) && value >= other;
};
/**
 * is.gt
 * Test if `value` is greater than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */


is.gt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }

  return !is.infinite(value) && !is.infinite(other) && value > other;
};
/**
 * is.le
 * Test if `value` is less than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if 'value' is less than or equal to 'other'
 * @api public
 */


is.le = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }

  return !is.infinite(value) && !is.infinite(other) && value <= other;
};
/**
 * is.lt
 * Test if `value` is less than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than `other`
 * @api public
 */


is.lt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }

  return !is.infinite(value) && !is.infinite(other) && value < other;
};
/**
 * is.within
 * Test if `value` is within `start` and `finish`.
 *
 * @param {Number} value value to test
 * @param {Number} start lower bound
 * @param {Number} finish upper bound
 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
 * @api public
 */


is.within = function (value, start, finish) {
  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
    throw new TypeError('all arguments must be numbers');
  }

  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
  return isAnyInfinite || value >= start && value <= finish;
};
/**
 * Test object.
 */

/**
 * is.object
 * Test if `value` is an object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an object, false otherwise
 * @api public
 */


is.object = function (value) {
  return toStr.call(value) === '[object Object]';
};
/**
 * is.primitive
 * Test if `value` is a primitive.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a primitive, false otherwise
 * @api public
 */


is.primitive = function isPrimitive(value) {
  if (!value) {
    return true;
  }

  if (typeof value === 'object' || is.object(value) || is.fn(value) || is.array(value)) {
    return false;
  }

  return true;
};
/**
 * is.hash
 * Test if `value` is a hash - a plain object literal.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a hash, false otherwise
 * @api public
 */


is.hash = function (value) {
  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
};
/**
 * Test regexp.
 */

/**
 * is.regexp
 * Test if `value` is a regular expression.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a regexp, false otherwise
 * @api public
 */


is.regexp = function (value) {
  return toStr.call(value) === '[object RegExp]';
};
/**
 * Test string.
 */

/**
 * is.string
 * Test if `value` is a string.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is a string, false otherwise
 * @api public
 */


is.string = function (value) {
  return toStr.call(value) === '[object String]';
};
/**
 * Test base64 string.
 */

/**
 * is.base64
 * Test if `value` is a valid base64 encoded string.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
 * @api public
 */


is.base64 = function (value) {
  return is.string(value) && (!value.length || base64Regex.test(value));
};
/**
 * Test base64 string.
 */

/**
 * is.hex
 * Test if `value` is a valid hex encoded string.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
 * @api public
 */


is.hex = function (value) {
  return is.string(value) && (!value.length || hexRegex.test(value));
};
/**
 * is.symbol
 * Test if `value` is an ES6 Symbol
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a Symbol, false otherise
 * @api public
 */


is.symbol = function (value) {
  return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
};
/**
 * is.bigint
 * Test if `value` is an ES-proposed BigInt
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a BigInt, false otherise
 * @api public
 */


is.bigint = function (value) {
  // eslint-disable-next-line valid-typeof
  return typeof BigInt === 'function' && toStr.call(value) === '[object BigInt]' && typeof bigIntValueOf.call(value) === 'bigint';
};

module.exports = is;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(13);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(14);

module.exports = Function.prototype.bind || implementation;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
  var target = this;

  if (typeof target !== 'function' || toStr.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }

  var args = slice.call(arguments, 1);
  var bound;

  var binder = function () {
    if (this instanceof bound) {
      var result = target.apply(this, args.concat(slice.call(arguments)));

      if (Object(result) === result) {
        return result;
      }

      return this;
    } else {
      return target.apply(that, args.concat(slice.call(arguments)));
    }
  };

  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];

  for (var i = 0; i < boundLength; i++) {
    boundArgs.push('$' + i);
  }

  bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

  if (target.prototype) {
    var Empty = function Empty() {};

    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }

  return bound;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(18);

var v4 = __webpack_require__(20);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
module.exports = uuid;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(0);

var bytesToUuid = __webpack_require__(1); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html


var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/broofa/node-uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = rng();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(0);

var bytesToUuid = __webpack_require__(1);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function CORE(lib) {
  this.Pillar = lib;
  this.modules = {}; // this.parent = this
} // End of the CORE class


CORE.prototype.createModule = function (module, moduleId, modInstId) {
  var modules = this.modules; // console.log('THe modules Object')
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
  var SUKU = this.PILLAR; //  const parent = this.parent

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
  var SUKU = this.PILLAR;
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

    if (this.modules[moduleID][modInstId].hasOwnProperty("yimo")) {
      console.log("Yimo is defined,module");

      if (typeof this.modules[moduleID][modInstId].yimo === "function") {
        this.modules[moduleID][modInstId].yimo();
      }
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

/* harmony default export */ __webpack_exports__["a"] = (CORE);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function PAO(appPillar) {
  this.core = appPillar;
} // End of PAO


PAO.prototype.create = function (moduleID, modInstId) {
  var pa_core = this.core;
  var util = pa_core.util; // var events = pa_core.events()
  // var ajax = pa_core.ajax()
  // var converts = pa_core.converts()
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

  return {
    // DOM manipulations
    // view: CONTAINER,
    moduleMeta: meta,
    mkDirs: function mkDirs(p, isFileName, callback) {
      return util.makeDirs(p, isFileName, callback);
    },
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

  };
}; // End of PAO create() method


/* harmony default export */ __webpack_exports__["a"] = (PAO);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activate; });
var Activate = function Activate(libs) {
  // console.log('The value of the window.object')
  // console.log(window.location)
  // console.log(window.history)
  // console.log(window.document)
  // console.log(window.document.referrer)
  // console.log(window.this.ANDZIIY)
  // console.log(this)
  // console.log(window.SUKU)
  // console.log(Object.getOwnPropertyNames(window))
  // console.log('ACTIVATE THIS ')
  // console.log(this)
  // console.log(libs)
  // let pao = ''
  // let core = ''
  console.log('The Server');
  var core = new this.ANDZIIY.CORE(this.ANDZIIY.PILLAR);
  var pao = new this.ANDZIIY.PAO(core); // console.log('The core before modules')
  // console.log(pao.sb_jsToJson(core))

  console.log('The libs');
  console.log(libs);
  console.log(libs.length); // console.log('The Esm')
  // console.log(this.ESM)
  // libs.unshift(this.ESM.Esm) 

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

/***/ })
/******/ ]);