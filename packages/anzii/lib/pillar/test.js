// export const find_in = moduleExports.find_in;

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
     export const p_initArray = function (cnt, val) {
        var v = [];
        var isFunc = this.p_isFunction(val);
        for (var i = 0; i < cnt; i++) {
            v.push(isFunc ? val(i) : val);
        }
        return v;
    }
    
    /**
     * Hashes an array
     * @static
     * @method arrayToHash
     * @param {Array} array      The array to hash
     * @param {*} [defaultVal =true] Default value if the hashing fails
     * @return {Object} Hash
     */
     export const p_arrayToHash = function (array, defaultVal) {
        if (!util.isArray(array)) {
            return null;
        }
        //set the default value
        if (p_isNullOrUndefined(defaultVal)) {
            defaultVal = true;
        }
        var hash = {};
        for (var i = 0; i < array.length; i++) {
            if (this.p_isFunction(defaultVal)) {
                hash[defaultVal(array, i)] = array[i];
            }
            else {
                hash[array[i]] = defaultVal;
            }
        }
        return hash;
    }
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
     * it is passed two parameters = the array being operated on and the index of
     * the current item.  It is expected that the function will return a value
     * representing the key in the new object.
     * @param {String|Function} [valFieldOrTransform] When this value is a string
     * it is expected that the array contains objects and that the objects contain
     * a property that the string represents.  The value of that field will be used
     * as the property value in the new object.  When this parameter is a function
     * it is passed two parameters = the array being operated on and the index of
     * the current item.  It is expected that the function return a value
     * representing the value of the derived property for that item.
     * @return {Object} The converted array.
     */
     export const p_arrayToObj = function (array, keyFieldOrTransform, valFieldOrTransform) {
        if (!util.isArray(array)) {
            return null;
        }
        var keyIsString = p_isString(keyFieldOrTransform);
        var keyIsFunc = this.p_isFunction(keyFieldOrTransform);
        if (!keyIsString && !keyIsFunc) {
            return null;
        }
        var valIsString = p_isString(valFieldOrTransform);
        var valIsFunc = this.p_isFunction(valFieldOrTransform);
        if (!valIsString && !valIsFunc) {
            valFieldOrTransform = null;
        }
        var obj = {};
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            var key = keyIsString ? item[keyFieldOrTransform] : keyFieldOrTransform(array, i);
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
    }

    /**
     * Tests if a value is an object
     * @static
     * @method isObject
     * @param {*} value
     * @return {Boolean}
     */
     export const  p_isObject = function (value) {
        const that = this;
        return !that.p_isNullOrUndefined(value) && typeof value === 'object';
    }
    /**
     * Tests if a value is an string
     * @static
     * @method isString
     * @param {*} value
     * @return {Boolean}
     */
     export const p_isString = function (value) {
        const that = this;
        return !that.p_isNullOrUndefined(value) && typeof value === 'string';
    }
    /**
     * Tests if a value is a function
     * @static
     * @method isFunction
     * @param {*} value
     * @return {Boolean}
     */
     export const p_isFunction = function (value) {
        return !this.p_isNullOrUndefined(value) && typeof value === 'function';
    }
    /**
     * Retrieves the subdirectories of a path
     * @static
     * @method getDirectories
     * @param {String}   dirPath The starting path
     * @param {Function} cb      Callback function
     */
     export const p_getDirectories = function (dirPath) {
        const that = this;
        return new Promise((resolve, reject) => {
            var dirs = [];
            fs.readdir(dirPath, function (err, files) {
                if (util.isError(err)) {
                    return reject(err);
                }
                var tasks = that.p_getTasks(files, function (files, index) {
                    return function (callback) {
                        var fullPath = path.join(dirPath, files[index]);
                        fs.stat(fullPath, function (err, stat) {
                            if (util.isError(err)) {
                                return reject(err);
                            }
                            if (that.p_isNullOrUndefined(stat)) {
                                this.p_wiLog('WARN: Util: unstatable file encountered: %s', fullPath);
                            }
                            else if (stat.isDirectory()) {
                                dirs.push(fullPath);
                            }
                            callback(err);
                        });
                    };
                });
                async.parallel(tasks, function (err /*, results*/) {
                    resolve(dirs);
                });
            });
        });
    }
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
     export const p_getFiles = function (dirPath, options, fileName) {
        let that = this;
        // console.log('gETTING FILES')
        // console.log(dirPath)
        // console.log(options)
        return new Promise((resolve, reject) => {
            // if (this.p_isFunction(options)) {
            //     cb      = options;
            //     options = {
            //         recursive: false,
            //         filter: function(/*fullPath, stat*/) { return true; }
            //     }
            // }
            // if(!options){
            //     options = {
            //         recursive: false,
            //         filter: function(/*fullPath, stat*/) { return true; }
            //     }
            // }
            that.p_wiLog('The directory path');
            that.p_wiLog(dirPath);
            that.p_wiLog(fileName);
            // console.log(fileName)
            //read files from dir
            fs.readdir(dirPath, function (err, q) {
                if (util.types.isNativeError(err)) {
                    return reject(err);
                }
                that.p_wiLog('The readdir results q');
                that.p_wiLog(q);
                // console.log(q)
                let filePaths = [];
                //seed the queue with the absolute paths not just the file names
                for (var i = 0; i < q.length; i++) {
                    // that.p_wiLog(q[i])
                    // q[i] = path.join(dirPath, q[i]); 
                    filePaths.push(path.join(dirPath, q[i]));
                }
                //process the q
                // console.log(q)
                // console.log(filePaths)
                if (filePaths.indexOf(path.join(dirPath, fileName)) !== -1) {
                    that.p_wiLog('THE IS A NEED FOR A SPECIFIC FILE');
                    // let filePathCont = filePaths[filePaths.indexOf(filePath)]
                    // let file = filePathCont.substr(filePath.indexOf(fileName),filePathCont.length - 1)
                    // that.p_wiLog(filePathCont)
                    // that.p_wiLog(file)
                    let file = filePaths[filePaths.indexOf(path.join(dirPath, fileName))];
                    // console.log('THE FILE')
                    // console.log(file)
                    return resolve(file);
                }
                else {
                    return resolve(null);
                }
                // for(let p =0; p < filePaths.length; p++){
                //     if(filePaths.indexOf(filePath) !== -1){
                //         that.p_wiLog('THE IS A NEED FOR A SPECIFIC FILE')
                //         let filePathCont = filePaths[filePaths.indexOf(filePath)]
                //         let file = filePathCont.substr(filePath.indexOf(fileName),filePathCont.length - 1)
                //         that.p_wiLog(filePathCont)
                //         that.p_wiLog(file)
                //         resolve(file)
                //     }else{
                //         resolve(filePaths);
                //     }
                // }
                //  var filePaths = [];
                // async.whilst(
                //     function() {
                //         console.log('THE Q LENGTH')
                //         console.log(q.length) 
                //         console.log(q.length)
                //         return q.length > 0; }
                //     function(callback) {
                //         console.log('The second with ca')
                //         console.log(callback)
                //         var fullPath = q.shift();
                //         fs.stat(fullPath, function(err, stat) {
                //             if (util.types.isNativeError(err)) {
                //                 console.log('THERE ERROR')
                //                 return callback(err);
                //             }
                //             //apply filter
                //             var meetsCriteria = true;
                //             if (that.p_isFunction(options.filter)) {
                //                 meetsCriteria = options.filter(fullPath, stat);
                //             }
                //             //examine result and add it when criteria is met
                //             if (meetsCriteria) {
                //                 filePaths.push(fullPath);
                //             }
                //             //when recursive queue up directory's for processing
                //             if (!options.recursive || !stat.isDirectory()) {
                //                 return callback(null);
                //             }
                //             //read the directory contents and append it to the queue
                //             fs.readdir(fullPath, function(err, childFiles) {
                //                 if (util.types.isNativeError(err)) {
                //                     return callback(err);
                //                 }
                //                 childFiles.forEach(function(item) {
                //                     q.push(path.join(fullPath, item));
                //                 });
                //                 callback(null);
                //             });
                //         });
                //     }
                //     function(err) {
                //         console.log('THE FILES ARRAY')
                //         console.log(err)
                //         that.p_wiLog('THE FILES ARRay')
                //         let filePath = dirPath+path.sep+fileName
                //         that.p_wiLog(filePath)
                //         if(filePaths.indexOf(filePath) !== -1){
                //             that.p_wiLog('THE IS A NEED FOR A SPECIFIC FILE')
                //             let filePathCont = filePaths[filePaths.indexOf(filePath)]
                //             let file = filePathCont.substr(filePath.indexOf(fileName),filePathCont.length - 1)
                //             that.p_wiLog(filePathCont)
                //             that.p_wiLog(file)
                //             resolve(file)
                //         }else{
                //             resolve(filePaths);
                //         }
                //     }
                // );
            });
        });
    }
    export const p_getFile = function (filePath) {
        const that = this;
        return new Promise((resolve, reject) => {
            this.p_wiLog('The directory path');
            this.p_wiLog(filePath);
            //read files from dir
            var s = fs.createReadStream(filePath);
            if (s) {
                resolve(s);
            }
        });
    }
    export const p_createFolderContent = function (sourcePath, savePath, ignore = null) {
        // console.log("CREATE FOLDER CONTENT SOURCE", sourcePath)
        const self = this;
        const CURR_DIR = self.p_getWorkingFolder();
        const filesToCreate = fs.readdirSync(sourcePath);
        // console.log("CREATE FOLDER CONTENT CURR_DI",CURR_DIR)
        // console.log("CREATE FOLDER CONTENT FILES TO CREATE", filesToCreate)
        // console.log("CREATE FOLDER CONTENT FILES TO IGNORE", ignore)
        filesToCreate.forEach(file => {
            const origFilePath = `${sourcePath}/${file}`;
            // console.log("CREATE FOLDER CONTENT Original File pATH", origFilePath)
            // Get file statitics 
            const stats = fs.statSync(origFilePath);
            let skip = false;
            if (stats.isFile()) {
                // let fileBaseName = path.basename(origFilePath)
                // console.log("CREATE FOLDER CONTENT writepath pATH", fileBaseName)
                // console.log("CREATE FOLDER CONTENT file", file)
                if (ignore && this.contains(ignore, file))
                    skip = true;
                if (!skip) {
                    const contents = fs.readFileSync(origFilePath, 'utf8');
                    const writePath = `${CURR_DIR}/${savePath}/${file}`;
                    // console.log("CREATE FOLDER CONTENT writepath pATH", origFilePath)
                    fs.writeFileSync(writePath, contents, 'utf8');
                }
            }
            else if (stats.isDirectory()) {
                // console.log("THE FOLDER", file)
                if (ignore && this.contains(ignore, file))
                    skip = true;
                if (!skip) {
                    fs.mkdirSync(`${CURR_DIR}/${savePath}/${file}`);
                    // recursive call 
                    self.p_createFolderContent(`${sourcePath}/${file}`, `${savePath}/${file}`);
                }
            }
        });
    }
    export const p_loadFile = function (filepath) {
        const self = this;
        // console.log('THE FILEPATH')
        // console.log(filepath)
        // console.log(__non_webpack_require__.main)
        // eslint-disable-next-line no-undef
        return __non_webpack_require__.main.require(filepath);
    }

   
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
     export const p_getExtension = function (filePath, options) {
        const that = this;
        if (!that.p_isString(filePath) || filePath.length <= 0) {
            return null;
        }
        if (!that.p_isObject(options)) {
            options = {};
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
    }
    export const clone = function (o) {
        if (o instanceof Array) {
            let newA = [];
            o.forEach(e => {
                if (e instanceof Array) {
                    newA.push(this.clone(e));
                }
                else if (e instanceof Object) {
                    newA.push(this.clone(e));
                }
                else {
                    newA.push(e);
                }
            });
            return newA;
        }
        else if (o instanceof Object && typeof o !== 'function') {
            let n = {};
            for (let p in o) {
                if (o[p] instanceof Array) {
                    n[p] = this.clone(o[p]);
                }
                else if (o[p] instanceof Object && typeof o[p] !== 'function') {
                    n[p] = this.clone(o[p]);
                }
                else {
                    if (p === 'callback') {
                        this.p_wiLog('The current property is callback');
                    }
                    n[p] = o[p];
                }
            }
            return n;
        }
    }
    /*********************************** OBJECT AND ARRAY CASTING ************************************************************/
    export const object_to_array = function (castObj, keys = false) {
        // this.p_wiLog('THE CAST OBJECT')
        // this.p_wiLog(castObj)
        if (castObj instanceof Object) {
            if (!(castObj instanceof Array)) {
                var arr = [];
                var count = 0;
                if (keys) {
                    for (let key in castObj) {
                        arr[count] = { key: key, value: castObj[key] };
                        ++count;
                    }
                }
                else {
                    for (let key in castObj) {
                        arr[count] = castObj[key];
                        ++count;
                    }
                }
                //    this.p_wiLog('THE RETURN OF CONVERTED OBJECT')
                //    this.p_wiLog(arr)
                return arr;
            }
            else {
                return castObj;
            }
        }
        else {
            this.throwErrors('Argument 1 of object_to_array() must be an object');
        }
    }
    export const array_to_object = function (castArr) {
        if (castArr instanceof Array) {
            var obj = {};
            for (var i = 0; i < castArr.length; i++) {
                var property = 'property_' + (i + 1);
                obj[property] = castArr[i];
            }
            return obj;
        }
        else {
            this.throwErrors('Argument 1 of array_to_object() must be an array');
        }
    }
    export const string_to_array = function (string, sep) {
        // this.p_wiLog('STRING TO ARRAY')
        // this.p_wiLog(string) 
        // this.p_wiLog(sep)
        if (this.is_string(string)) {
            // this.p_wiLog('THE STRING IS AN INSTANCE OF STRING')
            return string.split(sep);
        }
    }
    export const set_deeply = function (path, deep, value = null, type = null) {
        //  this.p_wiLog('TYPEOF AC')
        //  this.p_wiLog(ac)
        // if(!(ac)){
        // 	this.p_wiLog('AC IS NULL')
        // 	var a = deep 
        // }
        // this.p_wiLog('THE VALUE OF A')
        // this.p_wiLog(a)
        if (path.length === 1) {
            this.p_wiLog('ABOUT TO SET DEEPLY NESTED PROP');
            this.p_wiLog('THE DEEP');
            this.p_wiLog(deep);
            if (!(value)) {
                this.p_wiLog('THIS DEEP ARRAY');
                this.p_wiLog(this.js_to_json(deep));
                this.p_wiLog('THE DEEP I,i');
                deep.splice(path[0], 1);
                this.p_wiLog(deep);
            }
            else {
                deep[path[0]] = value;
            }
            this.p_wiLog(path);
            this.p_wiLog(path[0]);
            this.p_wiLog(deep[path]);
            return true;
        }
        if (!(deep[path[0]])) {
            this.p_wiLog('THE PROPERTY BELOW DOES NOT EXIST');
            this.p_wiLog(path);
            this.p_wiLog(path[0]);
            //  this.p_wiLog(deep[path[0]])
            return false;
        }
        return this.set_deeply(path.slice(1), deep[path[0]], value, type);
    }

    export const is_value = function (x) {
        return !this.isObject(x) && !this.isArray(x);
    }
    export const is_not_falsey = function (x) {
        if (this.trim_spaces(x)) {
            return true;
        }
        else {
            return false;
        }
    }
    export const compare_values = function (value1, value2) {
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
    }
    export const is_equal_ab = function (a, b, flag = 'values') {
        if (!(this.is_object(a) && this.is_object(b))) {
            return false;
        }
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        if (flag.trim() === 'keys') {
            var akeys = Object.keys(a).sort();
            var bKeys = Object.keys(b).sort();
            return JSON.stringify(aKeys) === JSON.stringify(bKeys);
            // var akeys = Object.keys(a)
            // for (let k of akeys) {
            // 	if (a[k] !== b[k]) {
            // 	return false;
            // 	}
            // }
            // return true
        }
        else {
            if (!(this.js_to_json(a) === this.js_to_json(b))) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    export const is_same_value = function (x, y) {
        if (this.isBrowserSupported('Object', 'is')) {
            return Object.is(x, y);
        }
        else {
            return this.polyFills().objectIs(x, y);
        }
    }
    export const contains = function (o, v) {
        if (this.is_array(o)) {
            return o.indexOf(v) > -1 ? true : false;
        }
        else if (this.is_object(o)) {
            if (this.is_array(v)) {
                this.p_wiLog('THE SPECIFED VALUE TO CHECK IS AN ARRAY');
                this.p_wiLog(v);
                let outcome = '';
                for (let i = 0; i < v.length; i++) {
                    if (!o.hasOwnProperty(v[i])) {
                        outcome = false;
                        break;
                    }
                    else if (i === v.length - 1) {
                        outcome = true;
                    }
                }
                this.p_wiLog('THE OUTCOME');
                this.p_wiLog(outcome);
                return outcome;
            }
            else {
                return o.hasOwnProperty(v) ? true : false;
            }
        }
        else {
            this.throwErrors('Contains() requires either an array pure js object');
        }
    }
    export const for_of = function (x, action, y = null) {
        x = this.clone(x);
        if (this.is_array(x)) {
            x.forEach(action);
        }
        else if (this.is_object(x)) {
            if (!(y)) {
                // this.p_wiLog('THE FOROF Y IS NULL')
                // this.p_wiLog(x)
                // this.p_wiLog('THE Y IS DEFINED')
                let newX = {};
                for (let p in x) {
                    let prop = action(p, x[p]);
                    newX[prop.p] = prop.v;
                }
                // this.p_wiLog('THE NEWX')
                // this.p_wiLog(newX)
                return newX;
            }
            else {
                for (let p in x) {
                    action(p, x[p]);
                }
            }
        }
        else {
            this.throwErrors('Object of for_of() must be an Array or pure object');
        }
    }
    export const add_values_to = function (x, keys, values) {
        if (this.is_array(x)) {
            x.forEach(action);
        }
        else if (this.is_object(x)) {
            keys.forEach((k, i) => {
                let vItemKeys = Object.keys(values[k]);
                if (x[k]) {
                    vItemKeys.forEach((v) => {
                        x[k][v] = values[v];
                    });
                }
                else {
                    x[k] = {};
                    vItemKeys.forEach((v) => {
                        x[k][v] = values[v];
                    });
                }
            });
            return x;
        }
        else {
            this.throwErrors('Object of for_of() must be an Array or pure object');
        }
    }
    export const find_in = function (x, id, f) {
        if (this.is_array(x)) {
            if (this.is_value(x[0])) {
                return x.indexOf(f) > -1 ? x[f] : false;
            }
            else if (this.is_object(x[0])) {
                for (let i = 0; i < x.length; i++) {
                    if (sb.sb_contains(x[i], id) && x[i][id] === f) {
                        return x[i];
                    }
                }
            }
        }
    }
