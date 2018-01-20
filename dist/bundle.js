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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 361);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return LANG_RU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return LANG_EN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FIELD_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return END_GAME_TIME_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return END_GAME_PLAYER_KILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return END_GAME_PROTEST_RATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return END_GAME_WIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COP_MODE_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COP_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return COP_MODE_PURSUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COP_MODE_CONVOY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COP_MODE_FIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return COP_MODE_STUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return SWAT_MODE_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return SWAT_MODE_HUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return SHIELD_MODE_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return SHIELD_MODE_DRIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FOV_MODE_NORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FOV_MODE_CAPTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return PROTESTER_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return PROTESTER_MODE_ARRESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return PROTESTER_MODE_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return PROTESTER_MODE_FOLLOW; });
/* unused harmony export PROTESTER_MODE_AGITATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return PROTESTER_MODE_NOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return JOURNALIST_MODE_WANDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return JOURNALIST_MODE_SHOOTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return JOURNALIST_MODE_FOLLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return JOURNALIST_MODE_ARRESTED; });
/* unused harmony export PADDY_WAGON_MODE_STAY */
/* unused harmony export PADDY_WAGON_MODE_LEAVE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return I18N_GAME_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return I18N_MENU_BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return I18N_MENU_LEVEL_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return I18N_MENU_LEVEL_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return I18N_MENU_HOW_TO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return I18N_MENU_CONTROLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return I18N_CONTROLS_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return I18N_CONTROLS_RUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return I18N_CONTROLS_POSTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return I18N_HOW_TO_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return I18N_HOW_TO_CHEER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return I18N_HOW_TO_CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return I18N_HOW_TO_COPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return I18N_UI_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return I18N_UI_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return I18N_UI_PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return I18N_END_WIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return I18N_END_ARRESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return I18N_END_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return I18N_END_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return I18N_STATS_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I18N_STATS_TOTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return I18N_STATS_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return I18N_STATS_ARRESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return I18N_STATS_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return PLAYER_MODE_FIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return PLAYER_MODE_NORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return PLAYER_MODE_STUN; });
var LANG_RU = 'ru';
var LANG_EN = 'en';

var FIELD_OFFSET = {
    top: 150,
    right: 50,
    bottom: 50,
    left: 50
};

var END_GAME_TIME_OUT = 'timeOut';
var END_GAME_PLAYER_KILLED = 'playerKilled';
var END_GAME_PROTEST_RATE = 'protestRate';
var END_GAME_WIN = 'win';

var COP_MODE_ENTER = 'enter';
var COP_MODE_WANDER = 'wander';
var COP_MODE_PURSUE = 'pursue';
var COP_MODE_CONVOY = 'convoy';
var COP_MODE_FIGHT = 'fight';
var COP_MODE_STUN = 'stun';

var SWAT_MODE_HIDE = 'hide';
var SWAT_MODE_HUNT = 'hunt';

var SHIELD_MODE_HIDE = 'hide';
var SHIELD_MODE_DRIVE = 'drive';

var FOV_MODE_NORMAL = 'normal';
var FOV_MODE_CAPTURE = 'capture';

var PROTESTER_MODE_WANDER = 'wander';
var PROTESTER_MODE_ARRESTED = 'arrested';
var PROTESTER_MODE_LEAVE = 'leave';
var PROTESTER_MODE_FOLLOW = 'follow';
var PROTESTER_MODE_AGITATE = 'agitate';
var PROTESTER_MODE_NOD = 'nod';

var JOURNALIST_MODE_WANDER = 'wander';
var JOURNALIST_MODE_SHOOTING = 'shooting';
var JOURNALIST_MODE_FOLLOW = 'follow';
var JOURNALIST_MODE_ARRESTED = 'arrested';

var PADDY_WAGON_MODE_STAY = 'stay';
var PADDY_WAGON_MODE_LEAVE = 'leave';

var I18N_GAME_TITLE = 'gameTitle';
var I18N_MENU_BACK = 'menuBack';
var I18N_MENU_LEVEL_1 = 'menuLevel1';
var I18N_MENU_LEVEL_2 = 'menuLevel2';
var I18N_MENU_HOW_TO = 'menuHowTo';
var I18N_MENU_CONTROLS = 'menuControls';
var I18N_CONTROLS_MOVE = 'controlsMove';
var I18N_CONTROLS_RUN = 'controlsRun';
var I18N_CONTROLS_POSTER = 'controlsPoster';
var I18N_HOW_TO_SCALE = 'howToScale';
var I18N_HOW_TO_CHEER = 'howToCheer';
var I18N_HOW_TO_CALL = 'howToCall';
var I18N_HOW_TO_COPS = 'howToCops';
var I18N_UI_SCALE = 'uiScale';
var I18N_UI_LOADING = 'uiLoading';
var I18N_UI_PAUSE = 'uiPause';
var I18N_END_WIN = 'endWin';
var I18N_END_ARRESTED = 'endArrested';
var I18N_END_TIME = 'endTime';
var I18N_END_FAIL = 'endFail';
var I18N_STATS_TIME = 'statsTime';
var I18N_STATS_TOTAL = 'statsTotal';
var I18N_STATS_ACTIVE = 'statsActive';
var I18N_STATS_ARRESTED = 'statsArrested';
var I18N_STATS_LEFT = 'statsLeft';

var PLAYER_MODE_FIGHT = 'fight';
var PLAYER_MODE_NORMAL = 'normal';
var PLAYER_MODE_STUN = 'stun';

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

var DiagonalMovement = {
    Always: 1,
    Never: 2,
    IfAtMostOneObstacle: 3,
    OnlyWhenNoObstacles: 4
};

module.exports = DiagonalMovement;

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(158);
var isBuffer = __webpack_require__(496);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

/**
 * Backtrace according to the parent records and return the path.
 * (including both start and end nodes)
 * @param {Node} node End node
 * @return {Array<Array<number>>} the path
 */
function backtrace(node) {
    var path = [[node.x, node.y]];
    while (node.parent) {
        node = node.parent;
        path.push([node.x, node.y]);
    }
    return path.reverse();
}
exports.backtrace = backtrace;

/**
 * Backtrace from start and end node, and return the path.
 * (including both start and end nodes)
 * @param {Node}
 * @param {Node}
 */
function biBacktrace(nodeA, nodeB) {
    var pathA = backtrace(nodeA),
        pathB = backtrace(nodeB);
    return pathA.concat(pathB.reverse());
}
exports.biBacktrace = biBacktrace;

/**
 * Compute the length of the path.
 * @param {Array<Array<number>>} path The path
 * @return {number} The length of the path
 */
function pathLength(path) {
    var i, sum = 0, a, b, dx, dy;
    for (i = 1; i < path.length; ++i) {
        a = path[i - 1];
        b = path[i];
        dx = a[0] - b[0];
        dy = a[1] - b[1];
        sum += Math.sqrt(dx * dx + dy * dy);
    }
    return sum;
}
exports.pathLength = pathLength;


/**
 * Given the start and end coordinates, return all the coordinates lying
 * on the line formed by these coordinates, based on Bresenham's algorithm.
 * http://en.wikipedia.org/wiki/Bresenham's_line_algorithm#Simplification
 * @param {number} x0 Start x coordinate
 * @param {number} y0 Start y coordinate
 * @param {number} x1 End x coordinate
 * @param {number} y1 End y coordinate
 * @return {Array<Array<number>>} The coordinates on the line
 */
function interpolate(x0, y0, x1, y1) {
    var abs = Math.abs,
        line = [],
        sx, sy, dx, dy, err, e2;

    dx = abs(x1 - x0);
    dy = abs(y1 - y0);

    sx = (x0 < x1) ? 1 : -1;
    sy = (y0 < y1) ? 1 : -1;

    err = dx - dy;

    while (true) {
        line.push([x0, y0]);

        if (x0 === x1 && y0 === y1) {
            break;
        }
        
        e2 = 2 * err;
        if (e2 > -dy) {
            err = err - dy;
            x0 = x0 + sx;
        }
        if (e2 < dx) {
            err = err + dx;
            y0 = y0 + sy;
        }
    }

    return line;
}
exports.interpolate = interpolate;


/**
 * Given a compressed path, return a new path that has all the segments
 * in it interpolated.
 * @param {Array<Array<number>>} path The path
 * @return {Array<Array<number>>} expanded path
 */
function expandPath(path) {
    var expanded = [],
        len = path.length,
        coord0, coord1,
        interpolated,
        interpolatedLen,
        i, j;

    if (len < 2) {
        return expanded;
    }

    for (i = 0; i < len - 1; ++i) {
        coord0 = path[i];
        coord1 = path[i + 1];

        interpolated = interpolate(coord0[0], coord0[1], coord1[0], coord1[1]);
        interpolatedLen = interpolated.length;
        for (j = 0; j < interpolatedLen - 1; ++j) {
            expanded.push(interpolated[j]);
        }
    }
    expanded.push(path[len - 1]);

    return expanded;
}
exports.expandPath = expandPath;


/**
 * Smoothen the give path.
 * The original path will not be modified; a new path will be returned.
 * @param {PF.Grid} grid
 * @param {Array<Array<number>>} path The path
 */
function smoothenPath(grid, path) {
    var len = path.length,
        x0 = path[0][0],        // path start x
        y0 = path[0][1],        // path start y
        x1 = path[len - 1][0],  // path end x
        y1 = path[len - 1][1],  // path end y
        sx, sy,                 // current start coordinate
        ex, ey,                 // current end coordinate
        newPath,
        i, j, coord, line, testCoord, blocked;

    sx = x0;
    sy = y0;
    newPath = [[sx, sy]];

    for (i = 2; i < len; ++i) {
        coord = path[i];
        ex = coord[0];
        ey = coord[1];
        line = interpolate(sx, sy, ex, ey);

        blocked = false;
        for (j = 1; j < line.length; ++j) {
            testCoord = line[j];

            if (!grid.isWalkableAt(testCoord[0], testCoord[1])) {
                blocked = true;
                break;
            }
        }
        if (blocked) {
            lastValidCoord = path[i - 1];
            newPath.push(lastValidCoord);
            sx = lastValidCoord[0];
            sy = lastValidCoord[1];
        }
    }
    newPath.push([x1, y1]);

    return newPath;
}
exports.smoothenPath = smoothenPath;


/**
 * Compress a path, remove redundant nodes without altering the shape
 * The original path is not modified
 * @param {Array<Array<number>>} path The path
 * @return {Array<Array<number>>} The compressed path
 */
function compressPath(path) {

    // nothing to compress
    if(path.length < 3) {
        return path;
    }

    var compressed = [],
        sx = path[0][0], // start x
        sy = path[0][1], // start y
        px = path[1][0], // second point x
        py = path[1][1], // second point y
        dx = px - sx, // direction between the two points
        dy = py - sy, // direction between the two points
        lx, ly,
        ldx, ldy,
        sq, i;

    // normalize the direction
    sq = Math.sqrt(dx*dx + dy*dy);
    dx /= sq;
    dy /= sq;

    // start the new path
    compressed.push([sx,sy]);

    for(i = 2; i < path.length; i++) {

        // store the last point
        lx = px;
        ly = py;

        // store the last direction
        ldx = dx;
        ldy = dy;

        // next point
        px = path[i][0];
        py = path[i][1];

        // next direction
        dx = px - lx;
        dy = py - ly;

        // normalize
        sq = Math.sqrt(dx*dx + dy*dy);
        dx /= sq;
        dy /= sq;

        // if the direction has changed, store the point
        if ( dx !== ldx || dy !== ldy ) {
            compressed.push([lx,ly]);
        }
    }

    // store the last point
    compressed.push([px,py]);

    return compressed;
}
exports.compressPath = compressPath;


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

/**
 * @namespace PF.Heuristic
 * @description A collection of heuristic functions.
 */
module.exports = {

  /**
   * Manhattan distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} dx + dy
   */
  manhattan: function(dx, dy) {
      return dx + dy;
  },

  /**
   * Euclidean distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} sqrt(dx * dx + dy * dy)
   */
  euclidean: function(dx, dy) {
      return Math.sqrt(dx * dx + dy * dy);
  },

  /**
   * Octile distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} sqrt(dx * dx + dy * dy) for grids
   */
  octile: function(dx, dy) {
      var F = Math.SQRT2 - 1;
      return (dx < dy) ? F * dx + dy : F * dy + dx;
  },

  /**
   * Chebyshev distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} max(dx, dy)
   */
  chebyshev: function(dx, dy) {
      return Math.max(dx, dy);
  }

};


/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    level1: {
        id: 'level1',
        worldWidth: 1200,
        worldHeight: 800,
        duration: 3 * 60, // s
        winningThreshold: 100,
        scoreWin: 500,
        cops: {
            count: [[4, 0], [20, 1], [100, 2], [200, 3], [300, 6], [400, 7], [1000, 10]],
            speed: {
                value: 60,
                running: 1.7,
                convoy: 0.5
            },
            fov: {
                distance: 150,
                angle: 100
            }
        },
        press: {
            count: [[4, 0], [40, 1], [100, 2], [1000, 4]],
            speed: {
                value: 50
            },
            fov: {
                distance: 150,
                angle: 100
            },
            score: 0,
            duration: 5 // s
        },
        protesters: {
            count: {
                start: 100,
                max: 100,
                add: 14
            },
            speed: {
                value: 60
            },
            mood: 0.3,
            moodUp: 0.002,
            moodDown: 0.0001,
            poster: {
                drop: 0.3,
                alive: 20 // s
            }
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                running: 1.7
            },
            radius: 120,
            stamina: 100,
            staminaCooldown: 5, // s
            powerUp: 0.1,
            powerDown: 0.01
        },
        swat: {
            count: 5,
            speed: {
                value: 200
            },
            frequency: 5000,
            scoreThreshold: 300
        },
        star: {
            score: 200
        }
    }
    // level2: {
    //     id: 'level2',
    //     worldWidth: 800,
    //     worldHeight: 800,
    //     duration: 4 * 60, // s
    //     winningThreshold: 75,
    //     cops: {
    //         count: [
    //             [40, 1],
    //             [50, 2],
    //             [60, 3],
    //             [90, 4],
    //             [100, 5]
    //         ],
    //         speed: {
    //             value: 60,
    //             running: 1.8
    //         },
    //         fov: {
    //             distance: 150,
    //             angle: 120
    //         }
    //     },
    //     swat: {
    //         count: 5,
    //         speed: {
    //             value: 200
    //         },
    //         frequency: 5000,
    //         scoreThreshold: 300
    //     },
    //     press: {
    //         count: 5,
    //         speed: {
    //             value: 50
    //         },
    //         fov: {
    //             distance: 100,
    //             angle: 100
    //         },
    //         duration: 5
    //     },
    //     protesters: {
    //         count: {
    //             start: 20,
    //             max: 60,
    //             add: 10
    //         },
    //         max: 60,
    //         speed: {
    //             value: 60
    //         },
    //         mood: 0.25,
    //         moodUp: 0.002,
    //         moodDown: 0.0001,
    //         poster: {
    //             drop: 0.12,
    //             alive: 20 // s
    //         }
    //     },
    //     player: {
    //         speed: {
    //             value: 100,
    //             withPoster: 0.6,
    //             running: 1.5
    //         },
    //         radius: 120,
    //         stamina: 200,
    //         staminaCooldown: 5, // s
    //         powerUp: 0.1,
    //         powerDown: 0.01
    //     }
    // }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Prefab = function () {
    function Prefab(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            speed = _ref.speed,
            _ref$atlasKey = _ref.atlasKey,
            atlasKey = _ref$atlasKey === undefined ? null : _ref$atlasKey,
            spriteKey = _ref.spriteKey,
            spriteName = _ref.spriteName,
            props = _ref.props,
            GameObject = _ref.GameObject,
            moveTo = _ref.moveTo;

        _classCallCheck(this, Prefab);

        this.props = props;
        this.game = game;
        this.GameObject = GameObject;
        this.spriteKey = spriteKey;
        this.speed = _extends({
            current: speed.value
        }, speed);

        if (atlasKey && atlasKey !== "") {
            this.viewSprite = this.game.add.sprite(x, y, atlasKey, spriteKey + "-0");
        } else {
            this.viewSprite = this.game.add.sprite(x, y, spriteKey, 0);
        }

        this.sprite = this.game.add.sprite(x, y);
        this.sprite.mz = this;
        this.viewSprite.mz = this;
        this.sprite.name = spriteName;
        this.sprite.anchor.set(0.5);
        this.sprite.addChild(this.viewSprite);

        //this.changeAnimations(spriteKey, 3);

        // this.sprite.width = this.viewSprite.width;
        // this.sprite.height = this.viewSprite.height;

        this.game.physics.arcade.enable(this.sprite);
        // this.game.physics.arcade.enable(this.viewSprite);
        this.game.physics.arcade.enable(this.viewSprite);
        this.sprite.body.reset(this.sprite.x, this.sprite.y);
        this.viewSprite.anchor.set(0.5);
        this.viewSprite.reset(0, 0);

        // console.log(this.viewSprite);

        this.stayingTimer = this.game.time.create(false);
        this.curAnimationState = 'stop';

        this.mode = null;
        this.moveTo = moveTo;
    }

    _createClass(Prefab, [{
        key: "update",
        value: function update() {}
    }, {
        key: "setMode",
        value: function setMode(mode) {
            this.mode = mode;
        }
    }, {
        key: "setSpeed",
        value: function setSpeed(value) {
            if (this.speed.current === value) {
                return;
            }
            this.speed.current = value;
        }
    }, {
        key: "setVelocity",
        value: function setVelocity(target) {
            var rotationToTarget = this.game.math.angleBetweenPoints(this.sprite.body.center, target);
            this.game.physics.arcade.velocityFromRotation(rotationToTarget, this.speed.current, this.sprite.body.velocity);
            this.viewSprite.rotation = rotationToTarget - Math.PI / 2;
            // console.log('rotation to target', rotationToTarget);
        }

        // moveTo(target, { callback, shouldStop, reset = true } = {}) {
        //   if (reset) {
        //     const targets = this.moveTarget;
        //     this.moveTarget = [];
        //     targets.forEach(target => target.forceStop(this))
        //   }
        //
        //   if (target) {
        //     const newTarget = new MoveTarget({ target, callback, shouldStop })
        //     this.moveTarget.push(newTarget)
        //     newTarget.update(this)
        //   }
        //   else
        //   {
        //       this.sprite.body.stop();
        //   }
        // }

    }, {
        key: "getNextCoords",
        value: function getNextCoords(bounds) {
            var coords = this.generateCoords(bounds);
            while (this.GameObject.checkContainWagon(coords)) {
                coords = this.generateCoords(bounds);
            }return coords;
        }
    }, {
        key: "generateCoords",
        value: function generateCoords(bounds) {
            var directions = [];
            if (!bounds) {
                bounds = {
                    top: this.sprite.y - this.sprite.top + __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* FIELD_OFFSET */].top,
                    right: this.game.world.width - (this.sprite.right - this.sprite.x),
                    bottom: this.game.world.height - (this.sprite.bottom - this.sprite.y),
                    left: this.sprite.x - this.sprite.left
                };
            }

            if (this.sprite.x > bounds.left) {
                directions.push('left');
            }
            if (this.sprite.x < bounds.right) {
                directions.push('right');
            }
            if (this.sprite.y > bounds.top) {
                directions.push('top');
            }
            if (this.sprite.y < bounds.bottom) {
                directions.push('bottom');
            }

            var direction = this.game.rnd.between(0, directions.length - 1);
            var x = this.sprite.x;
            var y = this.sprite.y;
            switch (directions[direction]) {
                case 'left':
                    x = this.game.rnd.between(bounds.left, this.sprite.x - 1);
                    break;
                case 'right':
                    x = this.game.rnd.between(this.sprite.x + 1, bounds.right);
                    break;
                case 'top':
                    y = this.game.rnd.between(bounds.top, this.sprite.y - 1);
                    break;
                case 'bottom':
                    y = this.game.rnd.between(this.sprite.y + 1, bounds.bottom);
                    break;
            }
            return { x: Math.round(x), y: Math.round(y) };
        }
    }, {
        key: "updateProgressBar",
        value: function updateProgressBar(percent) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x00ff00;

            var y = -30;
            var width = 25;
            var height = 5;
            this.progressBar.clear();
            percent = this.game.math.clamp(percent, 0, 1);
            if (percent !== 0) {
                this.progressBar.lineStyle(1, color, 1);
                this.progressBar.drawRect(-width / 2, y - height / 2, width, height);
                this.progressBar.lineStyle(height, color, 1);
                this.progressBar.moveTo(-width / 2, y);
                this.progressBar.lineTo(Math.round(width * (-0.5 + percent)), y);
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            // this.sprite.animations.stop(null, true);
            this.sprite.body.stop();
        }
    }, {
        key: "stopWandering",
        value: function stopWandering() {
            this.moveTo(null);
            this.stayingTimer.stop(true);
        }
    }, {
        key: "revive",
        value: function revive() {
            this.sprite.body.enable = true;
            this.sprite.revive(1);
        }
    }, {
        key: "kill",
        value: function kill() {
            this.mode = null;
            this.moveTo(null);

            this.sprite.kill();
        }
    }, {
        key: "updateAnimation",
        value: function updateAnimation() {
            var velocity = this.sprite.body.velocity;
            var withPoster = !!this.showPoster;
            var newState = 'stop';

            if (velocity.x != 0 || velocity.y != 0) {
                if (this.canRun) {
                    if (Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y) < this.speed.value * (this.speed.running - 0.1)) {
                        newState = 'walk';
                    } else {
                        newState = 'run';
                    }
                } else {
                    newState = 'walk';
                }
            }

            newState = newState + (withPoster ? 'Poster' : '');
            if (newState != this.curAnimationState) {
                this.curAnimationState = newState;
                /*
                // console.log('new state', newState);
                if (newState.substr(0, 4) === 'stop')
                {
                    this.viewSprite.animations.stop(null, true);
                    let frame  = this.spriteKey + "-" + (withPoster ? 3 : 0);
                    this.viewSprite.frame = frame;
                    console.log('Frame:', this.spriteKey, frame);
                  }
                else
                */
                //console.log(this.spriteKey, newState);
                this.viewSprite.animations.play(newState);
            }
        }
    }, {
        key: "changeAnimations",
        value: function changeAnimations(spriteKey, canWalk) {

            var last = this.viewSprite.animations.getAnimation("walk");
            if (last) last.destroy();

            last = this.viewSprite.animations.getAnimation("stop");
            if (last) last.destroy();

            var walk_anim = Phaser.Animation.generateFrameNames(spriteKey + '-', 1, 2, '', 0);
            this.viewSprite.animations.add('walk', walk_anim, 3, true);

            //let stop_anim = //Phaser.Animation.generateFrameNames(spriteKey +'-', 0, 0, '', 0);
            this.viewSprite.animations.add('stop', [spriteKey + "-0", spriteKey + "-0"], canWalk, true);
            //console.log(this.spriteKey, this.viewSprite.animations);

            if (!this.isNOD) {

                last = this.viewSprite.animations.getAnimation("walkPoster");
                if (last) last.destroy();

                last = this.viewSprite.animations.getAnimation("stopPoster");
                if (last) last.destroy();

                var walkPoster_anim = Phaser.Animation.generateFrameNames(spriteKey + '-', 4, 5, '', 0);
                this.viewSprite.animations.add('walkPoster', walkPoster_anim, canWalk, true);

                //let stopPoster_anim = Phaser.Animation.generateFrameNames(spriteKey + '-', 3, 3, '', 0);
                this.viewSprite.animations.add('stopPoster', [spriteKey + "-3", spriteKey + "-3"], canWalk, false);
            }
        }
    }, {
        key: "changeViewSprite",
        value: function changeViewSprite(atlasKey, spriteKey) {
            var canWalk = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            this.sprite.removeChild(this.viewSprite);
            this.viewSprite.kill();
            this.viewSprite.destroy();
            this.spriteKey = spriteKey;

            if (atlasKey && atlasKey !== "") {
                this.viewSprite = this.game.add.sprite(0, 0, atlasKey, spriteKey + "-0");
            } else {
                this.viewSprite = this.game.add.sprite(0, 0, spriteKey, 0);
            }

            this.viewSprite.mz = this;
            this.sprite.addChild(this.viewSprite);

            this.game.physics.arcade.enable(this.viewSprite);
            this.viewSprite.anchor.set(0.5);
            this.viewSprite.reset(0, 0);

            this.curAnimationState = 'stop';
            this.changeAnimations(spriteKey, canWalk);
        }
    }]);

    return Prefab;
}();

/* harmony default export */ __webpack_exports__["a"] = (Prefab);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(472);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author imor / https://github.com/imor
 */
var Heap       = __webpack_require__(69);
var Util       = __webpack_require__(44);
var Heuristic  = __webpack_require__(53);
var DiagonalMovement = __webpack_require__(14);

/**
 * Base class for the Jump Point Search algorithm
 * @param {object} opt
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 */
function JumpPointFinderBase(opt) {
    opt = opt || {};
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.trackJumpRecursion = opt.trackJumpRecursion || false;
}

/**
 * Find and return the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
JumpPointFinderBase.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var openList = this.openList = new Heap(function(nodeA, nodeB) {
            return nodeA.f - nodeB.f;
        }),
        startNode = this.startNode = grid.getNodeAt(startX, startY),
        endNode = this.endNode = grid.getNodeAt(endX, endY), node;

    this.grid = grid;


    // set the `g` and `f` value of the start node to be 0
    startNode.g = 0;
    startNode.f = 0;

    // push the start node into the open list
    openList.push(startNode);
    startNode.opened = true;

    // while the open list is not empty
    while (!openList.empty()) {
        // pop the position of node which has the minimum `f` value.
        node = openList.pop();
        node.closed = true;

        if (node === endNode) {
            return Util.expandPath(Util.backtrace(endNode));
        }

        this._identifySuccessors(node);
    }

    // fail to find the path
    return [];
};

/**
 * Identify successors for the given node. Runs a jump point search in the
 * direction of each available neighbor, adding any points found to the open
 * list.
 * @protected
 */
JumpPointFinderBase.prototype._identifySuccessors = function(node) {
    var grid = this.grid,
        heuristic = this.heuristic,
        openList = this.openList,
        endX = this.endNode.x,
        endY = this.endNode.y,
        neighbors, neighbor,
        jumpPoint, i, l,
        x = node.x, y = node.y,
        jx, jy, dx, dy, d, ng, jumpNode,
        abs = Math.abs, max = Math.max;

    neighbors = this._findNeighbors(node);
    for(i = 0, l = neighbors.length; i < l; ++i) {
        neighbor = neighbors[i];
        jumpPoint = this._jump(neighbor[0], neighbor[1], x, y);
        if (jumpPoint) {

            jx = jumpPoint[0];
            jy = jumpPoint[1];
            jumpNode = grid.getNodeAt(jx, jy);

            if (jumpNode.closed) {
                continue;
            }

            // include distance, as parent may not be immediately adjacent:
            d = Heuristic.octile(abs(jx - x), abs(jy - y));
            ng = node.g + d; // next `g` value

            if (!jumpNode.opened || ng < jumpNode.g) {
                jumpNode.g = ng;
                jumpNode.h = jumpNode.h || heuristic(abs(jx - endX), abs(jy - endY));
                jumpNode.f = jumpNode.g + jumpNode.h;
                jumpNode.parent = node;

                if (!jumpNode.opened) {
                    openList.push(jumpNode);
                    jumpNode.opened = true;
                } else {
                    openList.updateItem(jumpNode);
                }
            }
        }
    }
};

module.exports = JumpPointFinderBase;


/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Protester = function (_Prefab) {
    _inherits(Protester, _Prefab);

    function Protester(_ref) {
        var onDropPoster = _ref.onDropPoster,
            prefabOptions = _objectWithoutProperties(_ref, ['onDropPoster']);

        _classCallCheck(this, Protester);

        var _this = _possibleConstructorReturn(this, (Protester.__proto__ || Object.getPrototypeOf(Protester)).call(this, prefabOptions));

        _this.posterSprite = _this.viewSprite.addChild(_this.game.make.sprite(-8, 13, "ALL_IMAGES", 'plakat', 0));
        _this.posterSprite.bringToTop();
        _this.posterSprite.anchor.set(0.5, 1);
        _this.posterSprite.visible = false;

        _this.showPoster = false;
        _this.dropPoster = 1;

        _this.onDropPoster = onDropPoster;
        return _this;
    }

    _createClass(Protester, [{
        key: 'update',
        value: function update() {
            // this.injurySprite.visible = this.sprite.health !== 1;
            this.posterSprite.visible = this.posterSprite.alive && this.showPoster;
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_1__constants_js__["V" /* PROTESTER_MODE_ARRESTED */]:
                    {
                        this.dropPosterRnd();

                        this.moveTo(null);

                        var x = props.x,
                            y = props.y,
                            by = props.by;

                        this.sprite.x = x;
                        this.sprite.y = y;

                        by && by.onArrest && by.onArrest(this);

                        break;
                    }
            }

            _get(Protester.prototype.__proto__ || Object.getPrototypeOf(Protester.prototype), 'setMode', this).call(this, mode, props);
        }
    }, {
        key: 'dropPosterRnd',
        value: function dropPosterRnd() {
            if (this.game.rnd.frac() < this.dropPoster) {
                this.posterSprite.kill();
                this.onDropPoster && this.onDropPoster({ x: this.sprite.x, y: this.sprite.y });
            }
        }
    }, {
        key: 'changeViewSprite',
        value: function changeViewSprite(atlasKey, spriteKey) {
            var canWalk = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            _get(Protester.prototype.__proto__ || Object.getPrototypeOf(Protester.prototype), 'changeViewSprite', this).call(this, atlasKey, spriteKey, canWalk);
            this.posterSprite = this.viewSprite.addChild(this.game.make.sprite(-8, 13, "ALL_IMAGES", 'plakat', 0));
            this.posterSprite.bringToTop();
            this.posterSprite.anchor.set(0.5, 1);
            this.posterSprite.visible = false;
            this.showPoster = false;
            this.dropPoster = 1;
        }
    }]);

    return Protester;
}(__WEBPACK_IMPORTED_MODULE_0__Prefab_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Protester);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//let CACHED_TEXTURE = null;

var ProgressBar = function () {
    function ProgressBar(_ref) {
        var radius = _ref.radius,
            width = _ref.width,
            color = _ref.color,
            lineWidth = _ref.lineWidth,
            game = _ref.game,
            sprite_type = _ref.sprite_type;

        _classCallCheck(this, ProgressBar);

        this.lastWidth = 0;
        this.game = game;
        this.graphics = this.game.add.group();

        this.fullWidth = width; // + radius * 2;
        this.graphics.y = -30;
        this.graphics.x = -this.fullWidth / 2;

        //this.radius = radius;
        //this.width = width;
        this.color = color;
        //this.lineWidth = lineWidth;

        var s = sprite_type ? sprite_type : "small_progress";

        var bg = game.add.sprite(0, 0, "ALL_IMAGES", s);

        this.graphics.addChild(bg);

        this.fillSprite = game.add.sprite(0, 0, "ALL_IMAGES", s);
        this.fillSprite.tint = this.color;

        this.graphics.addChild(this.fillSprite);

        this.cropRect = new Phaser.Rectangle(0, 0, width / 2, radius * 2); //width);
        this.fillSprite.crop(this.cropRect);

        this.graphics.visible = false;
    }

    _createClass(ProgressBar, [{
        key: "update",
        value: function update(percent) {

            percent = this.game.math.clamp(percent, 0, 1);

            if (this.fillSprite.tint !== this.color) this.fillSprite.tint = this.color;

            if (percent !== 0) {

                var fillWidth = Math.round(percent * this.fullWidth);
                if (this.lastWidth === fillWidth) {
                    return;
                }

                this.graphics.visible = true;

                this.lastWidth = fillWidth;

                this.cropRect.width = fillWidth;
                this.fillSprite.updateCrop();
            } else {
                if (this.lastWidth === 0) return;

                this.lastWidth = 0;
                this.graphics.visible = false;
            }
        }
    }]);

    return ProgressBar;
}();

/* harmony default export */ __webpack_exports__["a"] = (ProgressBar);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DefaultBehavior__ = __webpack_require__(146);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ManuallyBehavior = function (_DefaultBehavior) {
  _inherits(ManuallyBehavior, _DefaultBehavior);

  function ManuallyBehavior() {
    _classCallCheck(this, ManuallyBehavior);

    return _possibleConstructorReturn(this, (ManuallyBehavior.__proto__ || Object.getPrototypeOf(ManuallyBehavior)).apply(this, arguments));
  }

  _createClass(ManuallyBehavior, [{
    key: 'show',
    value: function show() {
      this.showed = true;
      if (this.fl_hide === false) return;
      this.fl_hide = false;
      this.fadeIn();
    }
  }]);

  return ManuallyBehavior;
}(__WEBPACK_IMPORTED_MODULE_0__DefaultBehavior__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (ManuallyBehavior);

/***/ }),
/* 99 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(458);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/**
 * A node in grid. 
 * This class holds some basic information about a node and custom 
 * attributes may be added, depending on the algorithms' needs.
 * @constructor
 * @param {number} x - The x coordinate of the node on the grid.
 * @param {number} y - The y coordinate of the node on the grid.
 * @param {boolean} [walkable] - Whether this node is walkable.
 */
function Node(x, y, walkable) {
    /**
     * The x coordinate of the node on the grid.
     * @type number
     */
    this.x = x;
    /**
     * The y coordinate of the node on the grid.
     * @type number
     */
    this.y = y;
    /**
     * Whether this node can be walked through.
     * @type boolean
     */
    this.walkable = (walkable === undefined ? true : walkable);
}

module.exports = Node;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var Heap       = __webpack_require__(69);
var Util       = __webpack_require__(44);
var Heuristic  = __webpack_require__(53);
var DiagonalMovement = __webpack_require__(14);

/**
 * A* path-finder. Based upon https://github.com/bgrins/javascript-astar
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching 
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {number} opt.weight Weight to apply to the heuristic to allow for
 *     suboptimal paths, in order to speed up the search.
 */
function AStarFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.weight = opt.weight || 1;
    this.diagonalMovement = opt.diagonalMovement;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }

    // When diagonal movement is allowed the manhattan heuristic is not
    //admissible. It should be octile instead
    if (this.diagonalMovement === DiagonalMovement.Never) {
        this.heuristic = opt.heuristic || Heuristic.manhattan;
    } else {
        this.heuristic = opt.heuristic || Heuristic.octile;
    }
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
AStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var openList = new Heap(function(nodeA, nodeB) {
            return nodeA.f - nodeB.f;
        }),
        startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        heuristic = this.heuristic,
        diagonalMovement = this.diagonalMovement,
        weight = this.weight,
        abs = Math.abs, SQRT2 = Math.SQRT2,
        node, neighbors, neighbor, i, l, x, y, ng;

    // set the `g` and `f` value of the start node to be 0
    startNode.g = 0;
    startNode.f = 0;

    // push the start node into the open list
    openList.push(startNode);
    startNode.opened = true;

    // while the open list is not empty
    while (!openList.empty()) {
        // pop the position of node which has the minimum `f` value.
        node = openList.pop();
        node.closed = true;

        // if reached the end position, construct the path and return it
        if (node === endNode) {
            return Util.backtrace(endNode);
        }

        // get neigbours of the current node
        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }

            x = neighbor.x;
            y = neighbor.y;

            // get the distance between current node and the neighbor
            // and calculate the next g score
            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

            // check if the neighbor has not been inspected yet, or
            // can be reached with smaller cost from the current node
            if (!neighbor.opened || ng < neighbor.g) {
                neighbor.g = ng;
                neighbor.h = neighbor.h || weight * heuristic(abs(x - endX), abs(y - endY));
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = node;

                if (!neighbor.opened) {
                    openList.push(neighbor);
                    neighbor.opened = true;
                } else {
                    // the neighbor can be reached with smaller cost.
                    // Since its f value has been updated, we have to
                    // update its position in the open list
                    openList.updateItem(neighbor);
                }
            }
        } // end for each neighbor
    } // end while not open list empty

    // fail to find the path
    return [];
};

module.exports = AStarFinder;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var Heap       = __webpack_require__(69);
var Util       = __webpack_require__(44);
var Heuristic  = __webpack_require__(53);
var DiagonalMovement = __webpack_require__(14);

/**
 * A* path-finder.
 * based upon https://github.com/bgrins/javascript-astar
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {number} opt.weight Weight to apply to the heuristic to allow for
 *     suboptimal paths, in order to speed up the search.
 */
function BiAStarFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.weight = opt.weight || 1;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }

    //When diagonal movement is allowed the manhattan heuristic is not admissible
    //It should be octile instead
    if (this.diagonalMovement === DiagonalMovement.Never) {
        this.heuristic = opt.heuristic || Heuristic.manhattan;
    } else {
        this.heuristic = opt.heuristic || Heuristic.octile;
    }
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
BiAStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var cmp = function(nodeA, nodeB) {
            return nodeA.f - nodeB.f;
        },
        startOpenList = new Heap(cmp),
        endOpenList = new Heap(cmp),
        startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        heuristic = this.heuristic,
        diagonalMovement = this.diagonalMovement,
        weight = this.weight,
        abs = Math.abs, SQRT2 = Math.SQRT2,
        node, neighbors, neighbor, i, l, x, y, ng,
        BY_START = 1, BY_END = 2;

    // set the `g` and `f` value of the start node to be 0
    // and push it into the start open list
    startNode.g = 0;
    startNode.f = 0;
    startOpenList.push(startNode);
    startNode.opened = BY_START;

    // set the `g` and `f` value of the end node to be 0
    // and push it into the open open list
    endNode.g = 0;
    endNode.f = 0;
    endOpenList.push(endNode);
    endNode.opened = BY_END;

    // while both the open lists are not empty
    while (!startOpenList.empty() && !endOpenList.empty()) {

        // pop the position of start node which has the minimum `f` value.
        node = startOpenList.pop();
        node.closed = true;

        // get neigbours of the current node
        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened === BY_END) {
                return Util.biBacktrace(node, neighbor);
            }

            x = neighbor.x;
            y = neighbor.y;

            // get the distance between current node and the neighbor
            // and calculate the next g score
            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

            // check if the neighbor has not been inspected yet, or
            // can be reached with smaller cost from the current node
            if (!neighbor.opened || ng < neighbor.g) {
                neighbor.g = ng;
                neighbor.h = neighbor.h ||
                    weight * heuristic(abs(x - endX), abs(y - endY));
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = node;

                if (!neighbor.opened) {
                    startOpenList.push(neighbor);
                    neighbor.opened = BY_START;
                } else {
                    // the neighbor can be reached with smaller cost.
                    // Since its f value has been updated, we have to
                    // update its position in the open list
                    startOpenList.updateItem(neighbor);
                }
            }
        } // end for each neighbor


        // pop the position of end node which has the minimum `f` value.
        node = endOpenList.pop();
        node.closed = true;

        // get neigbours of the current node
        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened === BY_START) {
                return Util.biBacktrace(neighbor, node);
            }

            x = neighbor.x;
            y = neighbor.y;

            // get the distance between current node and the neighbor
            // and calculate the next g score
            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

            // check if the neighbor has not been inspected yet, or
            // can be reached with smaller cost from the current node
            if (!neighbor.opened || ng < neighbor.g) {
                neighbor.g = ng;
                neighbor.h = neighbor.h ||
                    weight * heuristic(abs(x - startX), abs(y - startY));
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = node;

                if (!neighbor.opened) {
                    endOpenList.push(neighbor);
                    neighbor.opened = BY_END;
                } else {
                    // the neighbor can be reached with smaller cost.
                    // Since its f value has been updated, we have to
                    // update its position in the open list
                    endOpenList.updateItem(neighbor);
                }
            }
        } // end for each neighbor
    } // end while not open list empty

    // fail to find the path
    return [];
};

module.exports = BiAStarFinder;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(20);
var normalizeHeaderName = __webpack_require__(499);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(159);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(159);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(498)))

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pack = {
    boot: [{
        type: 'spritesheet',
        key: 'enter_bg',
        url: __webpack_require__(363),
        frameWidth: 135,
        frameHeight: 106
    }, {
        type: 'spritesheet',
        key: 'enter_logo',
        url: __webpack_require__(364),
        frameWidth: 669,
        frameHeight: 312
    }],
    initial: [{
        type: 'atlasJSONArray',
        key: 'ALL_IMAGES',
        textureURL: __webpack_require__(532),
        atlasURL: __webpack_require__(533),
        atlasData: null
    }, {
        type: 'spritesheet',
        key: 'langButtons',
        url: __webpack_require__(365),
        frameWidth: 50,
        frameHeight: 50
    }],
    helpTouch: [{
        type: 'spritesheet',
        key: 'helpMove',
        url: __webpack_require__(366),
        frameWidth: 100,
        frameHeight: 100
    }, {
        type: 'spritesheet',
        key: 'helpRun',
        url: __webpack_require__(367),
        frameWidth: 100,
        frameHeight: 100
    }, {
        type: 'spritesheet',
        key: 'helpPoster',
        url: __webpack_require__(368),
        frameWidth: 70,
        frameHeight: 70
    }],
    helpDesktop: [{
        type: 'spritesheet',
        key: 'helpMove',
        url: __webpack_require__(369),
        frameWidth: 150,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'helpRun',
        url: __webpack_require__(370),
        frameWidth: 150,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'helpPoster',
        url: __webpack_require__(371),
        frameWidth: 250,
        frameHeight: 50
    }],
    helpTips: [{
        type: 'image',
        key: 'space_pozor',
        url: __webpack_require__(372),
        frameWidth: 338,
        frameHeight: 74
    }, {
        type: 'image',
        key: 'space_fight',
        url: __webpack_require__(373),
        frameWidth: 338,
        frameHeight: 74
    }, {
        type: 'image',
        key: 'shift_run',
        url: __webpack_require__(374),
        frameWidth: 338,
        frameHeight: 74
    }, {
        type: 'image',
        key: 'journalists',
        url: __webpack_require__(375),
        frameWidth: 338,
        frameHeight: 74
    }],
    tweets: [{
        type: 'image',
        key: 'tw_styazshkin',
        url: __webpack_require__(376),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_granitweet',
        url: __webpack_require__(377),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_vigimadi',
        url: __webpack_require__(378),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_ovdinfo',
        url: __webpack_require__(379),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_koshelyaeva',
        url: __webpack_require__(380),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_brewerov',
        url: __webpack_require__(381),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_asilikedem',
        url: __webpack_require__(382),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_fb_pal',
        url: __webpack_require__(383),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_ya_yanson',
        url: __webpack_require__(384),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_galiamina',
        url: __webpack_require__(385),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_ogonwatch',
        url: __webpack_require__(386),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_the_ins_ru',
        url: __webpack_require__(387),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_kirilenko_a',
        url: __webpack_require__(388),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_tvrain',
        url: __webpack_require__(389),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_gruppa_voina',
        url: __webpack_require__(390),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_kszhivago',
        url: __webpack_require__(391),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_plushev',
        url: __webpack_require__(392),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_aban_in',
        url: __webpack_require__(393),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_rrubanov',
        url: __webpack_require__(394),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_navalny',
        url: __webpack_require__(395),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_noliquid',
        url: __webpack_require__(396),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_varlamov',
        url: __webpack_require__(397),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_mediazzzona',
        url: __webpack_require__(398),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_zhuravleva',
        url: __webpack_require__(399),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_asluhn',
        url: __webpack_require__(400),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_help',
        url: __webpack_require__(401),
        frameWidth: 400,
        frameHeight: 400
    }, {
        type: 'image',
        key: 'tw_evgenyfeldman',
        url: __webpack_require__(402),
        frameWidth: 400,
        frameHeight: 400
    }],
    levelCommon: [{
        type: 'spritesheet',
        key: 'defend',
        url: __webpack_require__(403),
        frameWidth: 360,
        frameHeight: 81
    }, {
        type: 'spritesheet',
        key: 'playButton',
        url: __webpack_require__(404),
        frameWidth: 100,
        frameHeight: 100
    }, {
        type: 'spritesheet',
        key: 'help',
        url: __webpack_require__(405),
        frameWidth: 48,
        frameHeight: 48
    }, {
        type: 'spritesheet',
        key: 'points_1',
        url: __webpack_require__(406),
        frameWidth: 67,
        frameHeight: 45
    }, {
        type: 'spritesheet',
        key: 'points_2',
        url: __webpack_require__(407),
        frameWidth: 67,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'points_5',
        url: __webpack_require__(408),
        frameWidth: 69,
        frameHeight: 46
    }, {
        type: 'spritesheet',
        key: 'points_10',
        url: __webpack_require__(409),
        frameWidth: 104,
        frameHeight: 47
    }, {
        type: 'spritesheet',
        key: 'paddy_wagon',
        url: __webpack_require__(410),
        frameWidth: 123,
        frameHeight: 303
    }, {
        type: 'spritesheet',
        key: 'klyaksa',
        url: __webpack_require__(411),
        frameWidth: 1035,
        frameHeight: 1035
        /*,
        {
            type: 'spritesheet',
            key: 'star_01',
            url: require('./star_01.png'),
            frameHeight: 37,
            frameWidth: 31,
            frameMax: 3,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'star_02',
            url: require('./star_02.png'),
            frameHeight: 37,
            frameWidth: 31,
            frameMax: 3,
            margin: 0,
            spacing: 0
        }
        {
            type: 'spritesheet',
            key: 'star_03',
            url: require('./star_03.png'),
            frameHeight: 37,
            frameWidth: 31,
            frameMax: 3,
            margin: 0,
            spacing: 0
        }*/
    }, {
        type: 'spritesheet',
        key: 'repeatButton',
        url: __webpack_require__(412),
        frameWidth: 100,
        frameHeight: 100
    }, {
        type: 'spritesheet',
        key: 'soundButtons',
        url: __webpack_require__(142),
        frameWidth: 48,
        frameHeight: 48
    }, {
        type: 'spritesheet',
        key: 'restartButton',
        url: __webpack_require__(413),
        frameWidth: 48,
        frameHeight: 48
    },
    /*
    {
        type: 'spritesheet',
        key: 'omon',
        url: require('./omon.png'),
        frameWidth: 31,
        frameHeight: 37
    },
    {
        type: 'spritesheet',
        key: 'nod',
        url: require('./nod.png'),
        frameWidth: 31,
        frameHeight: 37
    },*/
    {
        type: 'spritesheet',
        key: 'podskazka_plakat',
        url: __webpack_require__(142),
        frameWidth: 50,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'plakat',
        url: __webpack_require__(414),
        frameWidth: 44,
        frameHeight: 12
    }, {
        type: 'audio',
        key: 'theme',
        urls: __webpack_require__(415)
    }, {
        type: 'audio',
        key: 'punch01',
        urls: __webpack_require__(416)
    }, {
        type: 'audio',
        key: 'punch02',
        urls: __webpack_require__(417)
    }, {
        type: 'audio',
        key: 'applause',
        urls: __webpack_require__(418)
    }, {
        type: 'audio',
        key: 'boo',
        urls: __webpack_require__(419)
    }, {
        type: 'audio',
        key: 'bp_loop',
        urls: __webpack_require__(420)
    }, {
        type: 'audio',
        key: 'meeting_sound',
        urls: __webpack_require__(421)
    }, {
        type: 'audio',
        key: 'croud',
        urls: __webpack_require__(422)
    }, {
        type: 'audio',
        key: 'scream03',
        urls: __webpack_require__(423)
    }, {
        type: 'audio',
        key: 'truck',
        urls: __webpack_require__(424)
    }, {
        type: 'audio',
        key: 'pick',
        urls: __webpack_require__(425)
    }, {
        type: 'atlasJSONArray',
        key: 'humans',
        textureURL: __webpack_require__(426),
        atlasURL: __webpack_require__(427),
        atlasData: null
    }],
    level1: [

    /*
    
    {
        type: 'spritesheet',
        key: 'border',
        url: require('./border.png'),
        frameWidth: 100,
        frameHeight: 50
    },
    {
        type: 'spritesheet',
        key: 'auto',
        url: require('./auto.png'),
        frameWidth: 290,
        frameHeight: 135
    },
    {
        type: 'spritesheet',
        key: 'cop',
        url: require('./cop01.png'),
        frameWidth: 44,
        frameHeight: 49
    },
    {
        type: 'spritesheet',
        key: 'shield',
        url: require('./shield.png'),
        frameWidth: 316,
        frameHeight: 140
    }
    ,{
        type: 'spritesheet',
        key: 'journalist',
        url: require('./journalist01.png'),
        frameWidth: 32,
        frameHeight: 49
    },
    {
        type: 'spritesheet',
        key: 'player_sprite',
        url: require('./player_sprite.png'),
        frameWidth: 31,
        frameHeight: 37,
        frameMax: 7,
        margin: 0,
        spacing: 0
    },
    {
        type: 'spritesheet',
        key: 'npc_01',
        url: require('./npc_01.png'),
        frameWidth: 31,
        frameHeight: 37,
        frameMax: 6,
        margin: 0,
        spacing: 0
    },
    {
        type: 'spritesheet',
        key: 'npc_02',
        url: require('./npc_02.png'),
        frameWidth: 31,
        frameHeight: 37,
        frameMax: 6,
        margin: 0,
        spacing: 0
    },
    {
        type: 'spritesheet',
        key: 'npc_03',
        url: require('./npc_03.png'),
        frameWidth: 31,
        frameHeight: 37,
        frameMax: 6,
        margin: 0,
        spacing: 0
    },
    {
        type: 'spritesheet',
        key: 'npc_04',
        url: require('./npc_04.png'),
        frameWidth: 31,
        frameHeight: 37,
        frameMax: 6,
        margin: 0,
        spacing: 0
    },
    {
        type: 'spritesheet',
        key: 'npc_05',
        url: require('./npc_05.png'),
        frameWidth: 31,
        frameHeight: 37,
        frameMax: 6,
        margin: 0,
        spacing: 0
    },
    {
        type: 'spritesheet',
        key: 'npc_06',
        url: require('./npc_06.png'),
        frameWidth: 31,
        frameHeight: 38,
        frameMax: 6,
        margin: 0,
        spacing: 0
    },
    {
        type: 'spritesheet',
        key: 'npc_07',
        url: require('./npc_07.png'),
        frameWidth: 31,
        frameHeight: 38,
        frameMax: 6,
        margin: 0,
        spacing: 0
    },
    {
        type: 'spritesheet',
        key: 'npc_08',
        url: require('./npc_08.png'),
        frameWidth: 31,
        frameHeight: 38,
        frameMax: 6,
        margin: 0,
        spacing: 0
    },
      
    
    {
        type: 'spritesheet',
        key: 'cop_sprite',
        url: require('./cop.png'),
        frameWidth: 31,
        frameHeight: 37,
        frameMax: 3,
        margin: 0,
        spacing: 0
    },
    {
        type: 'spritesheet',
        key: 'press_sprite',
        url: require('./press.png'),
        frameWidth: 31,
        frameHeight: 37,
        frameMax: 3,
        margin: 0,
        spacing: 0
    },
    {
        type: 'spritesheet',
        key: 'press_01',
        url: require('./press_01.png'),
        frameWidth: 31,
        frameHeight: 37,
        frameMax: 3,
        margin: 0,
        spacing: 0
    },
    {
        type: 'spritesheet',
        key: 'press_02',
        url: require('./press_02.png'),
        frameWidth: 31,
        frameHeight: 37,
        frameMax: 3,
        margin: 0,
        spacing: 0
    },
      /*,
    {
        type: 'spritesheet',
        key: 'protester1',
        url: require('./protester01.png'),
        frameWidth: 32,
        frameHeight: 48
    },
    {
        type: 'spritesheet',
        key: 'protester2',
        url: require('./protester02.png'),
        frameWidth: 30,
        frameHeight: 46
    },
    {
        type: 'spritesheet',
        key: 'protester3',
        url: require('./protester03.png'),
        frameWidth: 30,
        frameHeight: 47
    },*/
    {
        type: 'spritesheet',
        key: 'injury',
        url: __webpack_require__(428),
        frameWidth: 30,
        frameHeight: 31
    }, {
        type: 'spritesheet',
        key: 'poster',
        url: __webpack_require__(429),
        frameWidth: 60,
        frameHeight: 71
    }, {
        type: 'spritesheet',
        key: 'mobile_poster',
        url: __webpack_require__(430),
        frameWidth: 50,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'dropped_poster',
        url: __webpack_require__(431),
        frameWidth: 44,
        frameHeight: 34
    }, {
        type: 'image',
        key: 'ground',
        url: __webpack_require__(432),
        overwrite: false
    }, {
        type: 'image',
        key: 'meeting_map',
        url: __webpack_require__(433),
        overwrite: false
    }, {
        type: 'image',
        key: 'garbage_01',
        url: __webpack_require__(434),
        overwrite: false
    }, {
        type: 'image',
        key: 'garbage_02',
        url: __webpack_require__(435),
        overwrite: false
    }, {
        type: 'image',
        key: 'garbage_03',
        url: __webpack_require__(436),
        overwrite: false
    }]
    /*
    level2: [
        {
            type: 'spritesheet',
            key: 'border',
            url: require('./border.png'),
            frameWidth: 100,
            frameHeight: 50
        },
        {
            type: 'spritesheet',
            key: 'auto',
            url: require('./auto.png'),
            frameWidth: 290,
            frameHeight: 135
        },
        {
            type: 'spritesheet',
            key: 'cop',
            url: require('./cop02.png'),
            frameWidth: 46,
            frameHeight: 54
        },
        {
            type: 'spritesheet',
            key: 'swat',
            url: require('./swat.png'),
            frameWidth: 30,
            frameHeight: 46
        },
        {
            type: 'spritesheet',
            key: 'shield',
            url: require('./shield.png'),
            frameWidth: 316,
            frameHeight: 140
        },
        {
            type: 'spritesheet',
            key: 'journalist',
            url: require('./journalist01.png'),
            frameWidth: 32,
            frameHeight: 49
        },
        {
            type: 'spritesheet',
            key: 'protester1',
            url: require('./protester01.png'),
            frameWidth: 32,
            frameHeight: 48
        },
        {
            type: 'spritesheet',
            key: 'protester2',
            url: require('./protester02.png'),
            frameWidth: 30,
            frameHeight: 46
        },
        {
            type: 'spritesheet',
            key: 'protester3',
            url: require('./protester03.png'),
            frameWidth: 30,
            frameHeight: 47
        },
        {
            type: 'spritesheet',
            key: 'injury',
            url: require('./injury.png'),
            frameWidth: 30,
            frameHeight: 31
        },
        {
            type: 'spritesheet',
            key: 'poster',
            url: require('./poster.png'),
            frameWidth: 60,
            frameHeight: 71
        },
        {
            type: 'image',
            key: 'ground',
            url: require('./ground02.png'),
            overwrite: false
        }
    ]*/
};
/* harmony default export */ __webpack_exports__["a"] = (JSON.stringify(pack));

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7986b3adc568860d6103f4ba43b8ee07.png";

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Protester_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SlotManager__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HelpInfo__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ProgressBar__ = __webpack_require__(97);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var TAP_RUNNING_DELTA = 200;

var Player = function (_Protester) {
    _inherits(Player, _Protester);

    function Player(_ref) {
        var fovGroup = _ref.fovGroup,
            radius = _ref.radius,
            cheering = _ref.cheering,
            stamina = _ref.stamina,
            staminaCooldown = _ref.staminaCooldown,
            powerUp = _ref.powerUp,
            powerDown = _ref.powerDown,
            slots = _ref.slots,
            protesterOptions = _objectWithoutProperties(_ref, ['fovGroup', 'radius', 'cheering', 'stamina', 'staminaCooldown', 'powerUp', 'powerDown', 'slots']);

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, _extends({
            atlasKey: 'humans',
            spriteKey: 'player_sprite',
            spriteName: 'player'
        }, protesterOptions)));

        _this.fightCount = 0;

        _this.sprite.inputEnabled = true;
        _this.sprite.input.priorityID = 1;

        _this.sprite.body.collideWorldBounds = true;
        _this.sprite.body.mass = 7;
        _this.sprite.body.setSize(37, 37);

        _this.direction = 0;

        _this.power = 1;
        // this.powerUpValue = powerUp;
        // this.powerDownValue = powerDown;
        // this.powerTimer = this.game.time.create(false);
        // this.powerTimer.loop(2000, this.powerDown, this);
        // this.powerTimer.start();

        _this.cheering = cheering;

        _this.stamina = stamina;
        _this.maxStamina = stamina;
        _this.cooldownTimer = _this.game.time.create(false);
        _this.noPosterTimer = _this.game.time.create(false);
        _this.staminaCooldown = staminaCooldown * 1000;

        _this.tapStartTimestamp = Date.now();
        _this.tapDelta = Infinity;

        _this.fightProgressBar = new __WEBPACK_IMPORTED_MODULE_4__ProgressBar__["a" /* default */]({ game: _this.game, width: 44, radius: 5, color: 0x5479ef });
        _this.sprite.addChild(_this.fightProgressBar.graphics);

        _this.staminaBar = new __WEBPACK_IMPORTED_MODULE_4__ProgressBar__["a" /* default */]({ game: _this.game, width: 44, radius: 5, color: 0xe3ad92 });
        _this.sprite.addChild(_this.staminaBar.graphics);

        _this.cooldownBar = new __WEBPACK_IMPORTED_MODULE_4__ProgressBar__["a" /* default */]({ game: _this.game, width: 44, radius: 5, color: 0xf0526f });
        _this.sprite.addChild(_this.cooldownBar.graphics);

        _this.audioScream = _this.game.add.audio('scream03');

        _this.showPoster = false;
        _this.isFrozen = false;
        _this.isGoing = false;
        _this.stunTimer = _this.game.time.create(false);

        _this.isWalking = false;
        _this.isRunning = false;

        _this.slots = new __WEBPACK_IMPORTED_MODULE_1__SlotManager__["a" /* default */](_this.sprite, _this, slots || [{ x: -30, y: 0 }, { x: -30, y: 30 }, { x: -30, y: -30 }, { x: -30, y: -60 }]);

        _this.radius = {
            initial: radius,
            graphic: 0,
            actual: 0,
            actualSq: 0,
            tween: {}
        };
        _this.resetRadius();

        _this.circleGraphics = _this.game.add.graphics(0, 0);
        fovGroup.add(_this.circleGraphics);

        // events
        _this.game.onResume.add(_this.handleGameResume, _this);

        _this.keys = {
            up: _this.game.input.keyboard.addKey(Phaser.Keyboard.UP),
            down: _this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
            left: _this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            right: _this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            space: _this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
            shift: _this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT)
        };

        _this.sprite.smoothed = true;
        // this.sprite.body.setCircle(20);

        var n = "player_sprite";
        var fpsAnimation = 3;
        _this.viewSprite.animations.add('walk', [n + "-1", n + "-2"], fpsAnimation, true);
        _this.viewSprite.animations.add('run', [n + "-1", n + "-2"], fpsAnimation * _this.speed.running, true);
        _this.viewSprite.animations.add('walkPoster', [n + "-5", n + "-6"], fpsAnimation, true);
        _this.viewSprite.animations.add('runPoster', [n + "-5", n + "-6"], fpsAnimation * _this.speed.running, true);
        _this.viewSprite.animations.add('stop', [n + "-0", n + "-0"], fpsAnimation, true);
        _this.viewSprite.animations.add('stopPoster', [n + "-3", n + "-3"], fpsAnimation, true);

        //this.changeAnimations("player_sprite",3);
        _this.fightBar = 0;

        _this.canRun = true;

        Player.instance = _this;
        window.Player = _this;
        return _this;
    }

    _createClass(Player, [{
        key: 'update',
        value: function update() {
            var _this2 = this;

            this.resetRadius();
            this.slots.update();

            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'update', this).call(this);

            this.circleGraphics.clear();

            if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["V" /* PROTESTER_MODE_ARRESTED */] || this.isFrozen || this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["U" /* PLAYER_MODE_STUN */]) {
                this.updateAnimation();
                this.hideProgressBars();
                return;
            }

            if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["S" /* PLAYER_MODE_FIGHT */]) {
                // this.updateAnimation();
                if (this.keys.space.justDown) {
                    this.fightBar += 1;
                    this.viewSprite.frame = this.viewSprite.frame === 3 ? 4 : 3;
                }
                this.updateFightBar();
                return;
            }

            this.circleGraphics
            // .lineStyle(1, 0x33ff33, 1)
            .beginFill(0x0db14b, 0.3).drawCircle(this.sprite.x, this.sprite.y, this.radius.graphic * 2).endFill();

            var newSpeed = this.speed.value;

            var areMovingKeysDown = this.keys.up.isDown || this.keys.down.isDown || this.keys.left.isDown || this.keys.right.isDown;

            if (!this.cooldownTimer.running) {
                if (areMovingKeysDown && this.keys.shift.isDown || this.tapDelta < TAP_RUNNING_DELTA) {
                    if (this.GameObject.mz.advices.shift !== null) {
                        this.GameObject.mz.advices.shift.hide();
                        this.GameObject.mz.advices.shift = null;
                    }
                    if (this.stamina > 0) {
                        this.stamina -= 1;
                        newSpeed *= this.speed.running;
                    } else {
                        this.cooldownTimer.add(this.staminaCooldown, function () {
                            _this2.cooldownTimer.stop(true);
                            _this2.stamina = _this2.maxStamina;
                        });
                        this.cooldownTimer.start();
                    }
                } else if (this.stamina < this.maxStamina) {
                    this.stamina += 1;
                }
            }

            if (this.stamina < this.maxStamina) {
                if (this.cooldownTimer.running) {
                    this.updateCooldownBar(this.cooldownTimer.ms / this.staminaCooldown);
                } else {
                    var percentBar = this.stamina / this.maxStamina;
                    this.updateStaminaBar(percentBar);
                }
            } else {
                this.hideProgressBars();
            }

            if (this.showPoster) {
                newSpeed *= this.speed.withPoster;
            }

            this.setSpeed(newSpeed);
            this.viewSprite.angle = this.direction - 90;

            if (areMovingKeysDown) {
                if (this.GameObject.mz.advices.move) {
                    this.GameObject.mz.advices.move.hide();
                    this.GameObject.mz.advices.move = null;
                }
                this.moveTo(null);
                var angles = [];

                if (this.keys.up.isDown) {
                    angles.push(-90);
                }
                if (this.keys.down.isDown) {
                    angles.push(90);
                }
                if (this.keys.left.isDown) {
                    if (this.keys.up.isDown) {
                        angles.push(-180);
                    } else {
                        angles.push(180);
                    }
                }
                if (this.keys.right.isDown) {
                    angles.push(0);
                }
                var angle = angles.reduce(function (value, sum) {
                    return sum + value;
                }, 0) / angles.length;
                this.direction = angle;
                this.game.physics.arcade.velocityFromAngle(angle, this.speed.current, this.sprite.body.velocity);
                // console.log('direction', this.direction);
                // this.sprite.frame = 2;
                this.resetClickSpeed(true);
            } else if (this.keys.up.justUp || this.keys.down.justUp || this.keys.left.justUp || this.keys.right.justUp) {
                this.isGoing = false;
                this.stop();
            }

            if (this.keys.space.justDown && this.mode !== __WEBPACK_IMPORTED_MODULE_2__constants_js__["S" /* PLAYER_MODE_FIGHT */] && !this.noPosterTimer.running) {
                this.togglePoster();
            }
            this.updateAnimation();
        }
    }, {
        key: 'handleGameResume',
        value: function handleGameResume() {
            this.moveTo(null);
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            // console.log('player mode', mode);
            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["V" /* PROTESTER_MODE_ARRESTED */]:
                    {
                        this.sprite.body.immovable = true;
                        this.togglePoster(false);

                        this.sprite.body.collideWorldBounds = false;

                        this.cooldownTimer.stop(true);
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["S" /* PLAYER_MODE_FIGHT */]:
                    {
                        var _target = props.target;
                        var arrested = _target.mz.getArrestedSprite();

                        this.moveTo(null);
                        if (arrested) {
                            this.viewSprite.angle = Math.atan2(_target.y + arrested.y - this.sprite.y, _target.x + arrested.x - this.sprite.x) * 180 / Math.PI - 90;
                        }
                        this.showPoster = false;
                        this.fightBar = 10;
                        this.GameObject.mz.timers.fight.stop();
                        this.GameObject.mz.timers.fight.removeAll();
                        this.GameObject.mz.timers.fight.loop(Math.max(400 - this.fightCount * 20, 160), this.handleTickFight, this);
                        this.GameObject.mz.timers.fight.add(5000, this.handleFightLose, this);
                        this.GameObject.mz.timers.fight.start();
                        this.sprite.body.immovable = true;
                        this.viewSprite.animations.stop(null, true);
                        // HelpInfo.show('space_fight')
                        this.GameObject.mz.objects.fightAdvice.visible = true;
                        console.log(this.GameObject.mz.timers.fight);
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["U" /* PLAYER_MODE_STUN */]:
                    {
                        // HelpInfo.hide('space_fight')
                        this.GameObject.mz.objects.fightAdvice.visible = false;
                        this.showPoster = false;
                        this.GameObject.mz.timers.fight.stop();
                        this.GameObject.mz.timers.fight.removeAll();
                        this.sprite.body.immovable = true;
                        this.stunTimer.stop();
                        this.stunTimer.removeAll();
                        this.stunTimer.add(5000, this.handleRecoverStun, this);
                        if (this.stunTween) this.stunTween.stop();
                        // this.stunTimer.loop(100, this.handleAlphaTick, this);
                        this.stunTween = this.game.add.tween(this.viewSprite);
                        this.stunTween.to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 500, true);
                        this.stunTween.start();
                        this.stunTimer.start();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["T" /* PLAYER_MODE_NORMAL */]:
                    {
                        // HelpInfo.hide('space_fight')
                        this.GameObject.mz.objects.fightAdvice.visible = false;
                        this.showPoster = false;
                        this.stunTimer.removeAll();
                        this.stunTimer.stop();
                        if (this.stunTween) this.stunTween.stop();
                        this.viewSprite.alpha = 1;
                        this.sprite.body.immovable = false;
                        this.sprite.body.enable = true;
                        break;
                    }
                default:
                    {
                        this.sprite.body.immovable = false;
                        break;
                    }
            }

            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'setMode', this).call(this, mode, props);
        }
    }, {
        key: 'handleAlphaTick',
        value: function handleAlphaTick() {}
    }, {
        key: 'handleRecoverStun',
        value: function handleRecoverStun() {
            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["T" /* PLAYER_MODE_NORMAL */]);
        }
    }, {
        key: 'togglePoster',
        value: function togglePoster() {
            var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.showPoster;

            if (on === this.showPoster) {
                return;
            }

            if (this.GameObject.mz.advices.space !== null) {
                this.GameObject.mz.advices.space.hide();
                this.GameObject.mz.advices.space = null;
            }

            // play sound
            if (on) {
                this.audioScream.play('', 0, 0.1);
            }

            this.showPoster = on;
        }

        // powerUp(value = this.powerUpValue) {
        //     if (value !== 0) {
        //         this.powerChange(value);
        //     }
        // }
        //
        // powerDown(value = this.powerDownValue) {
        //     const power = Math.max(1, this.power - value);
        //     if (power !== this.power) {
        //         this.powerChange(-value);
        //     }
        // }
        //
        // powerChange(value) {
        //     this.power += value;
        //
        //     this.posterSprite.scale.set(this.power);
        // }

    }, {
        key: 'resetClickSpeed',
        value: function resetClickSpeed(discard) {
            if (discard) {
                this.tapDelta = Infinity;
            } else {
                var now = Date.now();
                this.tapDelta = now - this.tapStartTimestamp;
                this.tapStartTimestamp = now;
            }
        }
    }, {
        key: 'resetRadius',
        value: function resetRadius() {
            var newRadius = this.showPoster ? this.radius.initial : 0;
            newRadius *= this.power;

            if (newRadius === this.radius.actual) {
                return;
            }

            if (this.radius.tween.isRunning) {
                this.radius.tween.stop();
            }

            if (this.game.math.fuzzyEqual(newRadius, this.radius.graphic, 1)) {
                this.radius.graphic = newRadius;
            } else {
                this.radius.tween = this.game.add.tween(this.radius);
                this.radius.tween.to({ graphic: newRadius }, 500, Phaser.Easing.Exponential.Out);
                this.radius.tween.start();
            }

            this.radius.actual = newRadius;
            this.radius.actualSq = Math.pow(this.radius.actual, 2);
        }
    }, {
        key: 'freeze',
        value: function freeze() {
            if (this.sprite.alive) {
                this.moveTo(null);
            }

            this.isFrozen = true;
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.game.onResume.removeAll();
            // this.powerTimer.stop(true);

            _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'kill', this).call(this);
        }
    }, {
        key: 'screenAttack',
        value: function screenAttack() {}
    }, {
        key: 'updateFightBar',
        value: function updateFightBar() {
            this.staminaBar.update(0);
            this.cooldownBar.update(0);
            var percent = this.fightBar / 20;
            this.fightProgressBar.update(percent);
            if (percent >= 1) {
                this.handleFightWin();
            }
        }
    }, {
        key: 'updateStaminaBar',
        value: function updateStaminaBar(percent) {
            this.fightProgressBar.update(0);
            this.cooldownBar.update(0);
            this.staminaBar.update(percent);
        }
    }, {
        key: 'updateCooldownBar',
        value: function updateCooldownBar(percent) {
            this.staminaBar.update(0);
            this.fightProgressBar.update(0);
            this.cooldownBar.update(percent);
        }
    }, {
        key: 'hideProgressBars',
        value: function hideProgressBars() {
            this.staminaBar.update(0);
            this.fightProgressBar.update(0);
            this.cooldownBar.update(0);
        }
    }, {
        key: 'handleTickFight',
        value: function handleTickFight() {
            this.fightBar--;
            if (this.fightBar < 0) this.fightBar = 0;
        }
    }, {
        key: 'handleFightWin',
        value: function handleFightWin() {
            var _this3 = this;

            this.clearTimers();
            this.hideProgressBars();
            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["T" /* PLAYER_MODE_NORMAL */]);
            this.fightCount++;
            this.noPosterTimer.add(1000, function () {
                _this3.noPosterTimer.stop(true);
            });
            this.noPosterTimer.start();
            this.GameObject.fightWin();
            // this.game.winCop();
        }
    }, {
        key: 'handleFightLose',
        value: function handleFightLose() {
            this.clearTimers();
            this.hideProgressBars();
            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["U" /* PLAYER_MODE_STUN */]);
            this.GameObject.fightLose();
        }
    }, {
        key: 'clearTimers',
        value: function clearTimers() {
            this.GameObject.mz.timers.fight.removeAll();
            this.GameObject.mz.timers.fight.stop();
        }
    }]);

    return Player;
}(__WEBPACK_IMPORTED_MODULE_0__Protester_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SlotManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slot__ = __webpack_require__(444);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SlotManager = function () {
  function SlotManager(target, directionObject, config) {
    _classCallCheck(this, SlotManager);

    this.slots = config.map(function (data) {
      return new __WEBPACK_IMPORTED_MODULE_0__Slot__["a" /* default */](target, directionObject, data);
    });
  }

  _createClass(SlotManager, [{
    key: 'update',
    value: function update() {
      this.slots.filter(function (slot) {
        return slot.taken;
      }).forEach(function (slot) {
        return slot.update();
      });
    }
  }, {
    key: 'take',
    value: function take(protester) {
      var slot = this.slots.find(function (x) {
        return !x.taken;
      });
      if (!slot) return null;
      slot.take(protester);
      return slot;
    }
  }, {
    key: 'hasEmptySlots',
    value: function hasEmptySlots() {
      return !!this.slots.find(function (x) {
        return !x.taken;
      });
    }
  }, {
    key: 'dismissAll',
    value: function dismissAll() {
      this.slots.forEach(function (slot) {
        slot.taken && slot.taken.onSlotDismissing && slot.taken.onSlotDismissing();
        slot.dismiss();
      });
    }
  }, {
    key: 'getTakens',
    value: function getTakens() {
      return this.slots.filter(function (slot) {
        return slot.taken;
      }).map(function (slot) {
        return slot.taken;
      });
    }
  }]);

  return SlotManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (SlotManager);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* run setGame before calling show\hide methods */
/* helpName = asset key */
var HelpInfo = function () {
    function HelpInfo() {
        _classCallCheck(this, HelpInfo);

        this.sprites = {};
    }

    _createClass(HelpInfo, [{
        key: 'setGame',
        value: function setGame(game) {
            this.game = game;
        }
    }, {
        key: 'addSprite',
        value: function addSprite(helpName) {
            var _game$game = game.game,
                width = _game$game.width,
                height = _game$game.height;

            var centerX = width / 2;

            var sprite = this.sprites[helpName] = this.game.add.sprite(centerX, height - 10, helpName);
            sprite.fixedToCamera = true;
            return sprite;
        }
    }, {
        key: 'fadeIn',
        value: function fadeIn(sprite) {
            var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

            return this.game.add.tween(sprite).to({ alpha: 1 }, time, Phaser.Easing.Linear.None, true);
        }
    }, {
        key: 'fadeOut',
        value: function fadeOut(sprite) {
            var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

            var tween = this.game.add.tween(sprite).to({ alpha: 1 }, time, Phaser.Easing.Linear.None);
            tween.add.onComplete(function () {
                sprite.kill();
            }, this.game);

            return tween;
        }
    }, {
        key: 'show',
        value: function show(helpName) {
            var anim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (typeof this.game === 'undefined') {
                throw new Error('HelpInfo don\'t have game instance');
            }

            var sprite = this.addSprite(helpName);
            sprite.anchor.set(0.5, 1);
            var minWidth = sprite.width;
            var maxWidth = 600;
            var posibleWidth = this.game.camera.width - 100;
            if (posibleWidth < minWidth) posibleWidth = minWidth;
            if (posibleWidth > maxWidth) posibleWidth = maxWidth;
            var scale = posibleWidth / minWidth;
            sprite.width = sprite.width * scale;
            sprite.height = sprite.height * scale;

            if (anim) {
                sprite.alpha = 0;
                this.fadeIn(sprite, anim);
            }
        }
    }, {
        key: 'hide',
        value: function hide(helpName) {
            var _this = this;

            var anim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (typeof helpName === 'undefined') {
                Object.keys(this.sprites).forEach(function (key) {
                    return _this.sprites[key] && _this.sprites[key].kill();
                });

                return;
            }

            var currentSprite = this.sprites[helpName];
            if (anim) {
                this.fadeOut(currentSprite, anim);
            } else {
                currentSprite.kill();
            }
        }
    }]);

    return HelpInfo;
}();

/* harmony default export */ __webpack_exports__["a"] = (new HelpInfo());

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultBehavior = function () {
  function DefaultBehavior() {
    _classCallCheck(this, DefaultBehavior);

    this.fl_hide = true;
    this.showed = false;
  }

  _createClass(DefaultBehavior, [{
    key: "set",
    value: function set(k, v) {
      this[k] = v;
    }
  }, {
    key: "show",
    value: function show() {
      var _this = this;

      this.showed = true;
      if (this.fl_hide === false) return;
      this.fl_hide = false;

      var _tweet = this.tweet,
          animOptions = _tweet.animOptions,
          game = _tweet.game;

      this.fadeIn();
      this.tweet.showed.add(function () {
        // показываем visible секунд
        game.time.events.add(animOptions.visible, function () {
          // debugger;
          _this.hide();
        }, game);
      });
    }
  }, {
    key: "fadeIn",
    value: function fadeIn() {
      var tweet = this.tweet;
      var animOptions = tweet.animOptions,
          game = tweet.game;

      var tween = tweet.game.add.tween(tweet.groupAll);
      tween.to({ y: tweet.showedY, alpha: 1 }, animOptions.fadeIn, Phaser.Easing.Default, true);

      tween.onComplete.add(function () {
        tweet.showed.dispatch();
      });
      tween.start();
    }
  }, {
    key: "hide",
    value: function hide() {
      if (!this.showed) {
        this.tweet.destroy.dispatch();
      }
      if (this.fl_hide === true) return;
      this.fl_hide = true;

      this.fadeOut();
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      var _this2 = this;

      var _tweet2 = this.tweet,
          animOptions = _tweet2.animOptions,
          game = _tweet2.game;

      // показываем следующий твит раньше, чем скрылся
      // текущий на 70 процентах от всего времени

      game.time.events.add(animOptions.fadeOut * 0.7, function () {
        _this2.tweet.nextTweet.dispatch();
      });

      var tweetTween = game.add.tween(this.tweet.groupTweet);
      tweetTween.to({
        y: -100, alpha: 0
      }, animOptions.fadeOut, Phaser.Easing.Default, true);

      var bgTween = game.add.tween(this.tweet.bg);
      bgTween.to({
        alpha: 0
      }, animOptions.fadeOut * 1.2, Phaser.Easing.Default, true);
      bgTween.onComplete.add(function () {
        // испускаем событие об оконачательном скрытии
        _this2.tweet.hided.dispatch();
      });
    }
  }]);

  return DefaultBehavior;
}();

/* harmony default export */ __webpack_exports__["a"] = (DefaultBehavior);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DEFAULT_COLORS;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var DEFAULT_COLORS = (_DEFAULT_COLORS = {}, _defineProperty(_DEFAULT_COLORS, __WEBPACK_IMPORTED_MODULE_0__constants_js__["m" /* FOV_MODE_NORMAL */], 0x2b3992), _defineProperty(_DEFAULT_COLORS, __WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* FOV_MODE_CAPTURE */], 0x2b3992), _DEFAULT_COLORS);

var FOV = function () {
    function FOV(_ref) {
        var game = _ref.game,
            radius = _ref.radius,
            angle = _ref.angle,
            _ref$colors = _ref.colors,
            colors = _ref$colors === undefined ? DEFAULT_COLORS : _ref$colors;

        _classCallCheck(this, FOV);

        this.game = game;
        this.radius = radius;
        this.radiusSq = Math.pow(this.radius, 2);
        this.halfViewAngle = this.game.math.degToRad(angle / 2);
        this.colors = colors;

        this.graphics = this.game.add.graphics(0, 0);
        this.center = null;
        this.isActive = true;
    }

    _createClass(FOV, [{
        key: 'update',
        value: function update(_ref2) {
            var _graphics;

            var x = _ref2.x,
                y = _ref2.y,
                angle = _ref2.angle,
                mode = _ref2.mode;

            this.center = { x: x, y: y };
            this.angle = angle;

            this.graphics.clear();

            if (!this.isActive) {
                return;
            }

            var startAngle = this.angle - this.halfViewAngle;
            var endAngle = this.angle + this.halfViewAngle;
            var arcStart = [x + Math.cos(startAngle) * this.radius, y + Math.sin(startAngle) * this.radius];

            this.graphics.beginFill(this.colors[mode || __WEBPACK_IMPORTED_MODULE_0__constants_js__["m" /* FOV_MODE_NORMAL */]], mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["m" /* FOV_MODE_NORMAL */] ? 0.2 : 0.5);
            this.graphics.moveTo(x, y);
            (_graphics = this.graphics).lineTo.apply(_graphics, arcStart);
            this.graphics.arc(x, y, this.radius, startAngle, endAngle, false, 10);
            this.graphics.lineTo(x, y);
            this.graphics.endFill();
        }
    }, {
        key: 'containsPoint',
        value: function containsPoint(_ref3) {
            var x = _ref3.x,
                y = _ref3.y;

            if (!this.center) {
                return false;
            }
            var distanceSq = this.game.math.distanceSq(this.center.x, this.center.y, x, y);
            if (distanceSq > this.radiusSq) {
                return false;
            }
            var angle = this.game.math.angleBetweenPoints(this.center, { x: x, y: y });

            var leftAngle = this.angle - this.halfViewAngle;
            var rightAngle = this.angle + this.halfViewAngle;

            if (leftAngle <= angle && angle <= rightAngle) {
                return true;
            }

            angle -= 2 * Math.PI * Math.sign(angle);

            return leftAngle <= angle && angle <= rightAngle;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.graphics.destroy();
            this.isActive = false;
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.graphics.kill();
            this.isActive = false;
        }
    }, {
        key: 'revive',
        value: function revive() {
            this.graphics.revive();
            this.isActive = true;
        }
    }]);

    return FOV;
}();

/* harmony default export */ __webpack_exports__["a"] = (FOV);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Star */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Protester__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SlotManager__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var slotsPositions = drawStarPosition(0, 0, 3, 70, 50);

var defaults = {
  interval: 1,

  agitation: {
    duration: 10,
    direction: 0,
    slots: slotsPositions
  },
  speed: 100
};

var starDatabase = ['navalny', 'limonov', 'verzilov'];
/*
 * Star lifecyle: rest -> moveIn -> agitate -> moveOut -> rest
 */
var Star = function (_Protester) {
  _inherits(Star, _Protester);

  function Star(_ref) {
    var config = _ref.config,
        GameObject = _ref.GameObject,
        prefabOptions = _objectWithoutProperties(_ref, ["config", "GameObject"]);

    _classCallCheck(this, Star);

    // console.log({ config, GameObject, ...prefabOptions })
    var fullConfig = _extends({}, defaults, config);
    //  console.log(prefabOptions)
    var rand = Math.floor(Math.random() * 3);

    var _this = _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this, _extends({}, GameObject.getRandomCoordinates(), {
      atlasKey: "humans",
      spriteKey: "star_0" + (rand + 1),
      spriteName: "star_0" + (rand + 1),
      speed: { value: fullConfig.speed }
    }, prefabOptions, { GameObject: GameObject
    })));

    _this.name = starDatabase[rand];

    _this.config = fullConfig;

    _this.restTimer = _this.game.time.create(false);
    //this.viewSprite.animations.add('walk', [1, 2], 3, true);

    _this.kill();
    return _this;
  }

  _createClass(Star, [{
    key: "setState",
    value: function setState(state) {
      var _this2 = this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      switch (state) {
        case Star.STATE.REST:
          {
            this.state = { type: Star.STATE.REST };
            this.restTimer.add(this.config.interval * 1000, function () {
              return _this2.setState(Star.STATE.MOVE_IN);
            }, this);
            this.restTimer.start();
            break;
          }
        case Star.STATE.MOVE_IN:
          {
            this.restTimer.stop();
            this.revive();
            var coords = this.GameObject.getRandomCoordinates();
            console.log('star coords', coords);
            this.moveTo(coords, { callback: function callback() {
                return _this2.setState(Star.STATE.AGITATE);
              }, phasing: true });
            this.state = { type: Star.STATE.MOVE_IN };
            this.GameObject.mz.tweet.rTweet({ type: 'star_' + this.name + '_enter' }, { visible: 5000, fadeIn: 500, fadeOut: 500 });
            break;
          }
        case Star.STATE.AGITATE:
          {
            var _config$agitation = this.config.agitation,
                slots = _config$agitation.slots,
                duration = _config$agitation.duration,
                direction = _config$agitation.direction;


            this.direction = direction;

            this.moveTo();
            var slotsManager = new __WEBPACK_IMPORTED_MODULE_1__SlotManager__["a" /* default */](this.sprite, this, slots);
            this.state = { type: Star.STATE.AGITATE, slots: slotsManager };
            break;
          }
        case Star.STATE.ARRESTED:
          {
            // this.GameObject.mz.tweet.rTweet({type: 'star_'+this.name+'_enter'}, {visible: 5000, fadeIn: 500, fadeOut: 500});
            var _config$agitation2 = this.config.agitation,
                _slots = _config$agitation2.slots,
                _duration = _config$agitation2.duration,
                _direction = _config$agitation2.direction;


            this.moveTo();
            this.state = { type: Star.STATE.ARRESTED };
            var x = props.x,
                y = props.y;

            this.sprite.x = x;
            this.sprite.y = y;
            break;
          }
      }
    }
  }, {
    key: "update",
    value: function update() {
      switch (this.state.type) {
        case Star.STATE.AGITATE:
          {
            var wanderingProtesters = this.GameObject.mz.arrays.protesters.filter(function (sprite) {
              return sprite.alive;
            }).map(function (protester) {
              return protester.mz;
            }).filter(function (protester) {
              return protester.mode === __WEBPACK_IMPORTED_MODULE_2__constants__["Z" /* PROTESTER_MODE_WANDER */];
            });

            while (this.state.slots.hasEmptySlots() && wanderingProtesters.length > 0) {
              var protester = wanderingProtesters.shift();
              var slot = this.state.slots.take(protester);
              protester.setMode(__WEBPACK_IMPORTED_MODULE_2__constants__["W" /* PROTESTER_MODE_FOLLOW */], { slot: slot });
            }

            break;
          }
      }

      _get(Star.prototype.__proto__ || Object.getPrototypeOf(Star.prototype), "update", this).call(this);
      this.updateAnimation();
    }
  }, {
    key: "revive",
    value: function revive() {
      var _GameObject$randomOff = this.GameObject.randomOffscreenCoords(),
          x = _GameObject$randomOff.x,
          y = _GameObject$randomOff.y;

      this.sprite.revive(1);
      this.sprite.x = x;
      this.sprite.y = y;
      this.sprite.body.reset(x, y);
    }
  }, {
    key: "kill",
    value: function kill() {
      this.setState(Star.STATE.REST);
      this.moveTo(null);

      this.sprite.kill();
    }
  }]);

  return Star;
}(__WEBPACK_IMPORTED_MODULE_0__Protester__["a" /* default */]);

Star.STATE = {
  REST: "rest",
  MOVE_IN: "moveIn",
  AGITATE: "agitate",
  ARRESTED: __WEBPACK_IMPORTED_MODULE_2__constants__["V" /* PROTESTER_MODE_ARRESTED */]
};
/* harmony default export */ __webpack_exports__["a"] = (Star);

function drawStar(graphic, cx, cy, spikes, outerRadius, innerRadius) {
  var rot = Math.PI / 2 * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;

  graphic.moveTo(cx, cy - outerRadius);
  for (var i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    graphic.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    graphic.lineTo(x, y);
    rot += step;
  }
  graphic.lineTo(cx, cy - outerRadius);
  // ctx.closePath();
  // ctx.lineWidth=5;
  // ctx.strokeStyle='blue';
  // ctx.stroke();
  // ctx.fillStyle='skyblue';
  // ctx.fill();
}

function drawStarPosition(cx, cy, spikes, outerRadius, innerRadius) {
  var rot = Math.PI / 2 * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;
  var list = [];

  for (var i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    list.push({ x: x, y: y });
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    list.push({ x: x, y: y });
    rot += step;
  }
  list.push({ x: cx, y: cy - outerRadius });
  return list;
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

/**!

 @license
 handlebars v4.0.11

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(35);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(36);

	var _handlebarsCompilerCompiler = __webpack_require__(41);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(42);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(39);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(21);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(22);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(10);

	var _decorators = __webpack_require__(18);

	var _logger = __webpack_require__(20);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.11';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(7)['default'];

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(11);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(12);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(13);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(14);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(15);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(16);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(17);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(19);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(23)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(30).Object.seal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(26);

	__webpack_require__(27)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(28)
	  , core    = __webpack_require__(30)
	  , fails   = __webpack_require__(33);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(30)
	  , ctx       = __webpack_require__(31)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(37);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(38);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(40);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// File ignored in coverage tests via setting in .istanbul.yml
	/* Jison generated parser */
	"use strict";

	exports.__esModule = true;
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
	        /**/) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
	        /**/) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(39);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0,
	      depthString = '';

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	        depthString += '../';
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(35);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      for (var _name in knownHelpers) {
	        /* istanbul ignore else */
	        if (_name in knownHelpers) {
	          this.options.knownHelpers[_name] = knownHelpers[_name];
	        }
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  options = _utils.extend({}, options);
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(43);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/17ff32b5555510c86e7a57dfd51172ea.png";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/9d48420ccfe00c06991f68370f049b27.png";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/47fe7fff7a4b579b1c74c47019f46c26.png";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/dee3c3c1e303bf8f95617c297a91b235.png";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/a939b71af5e6561b8897f4d9cdddae8e.png";

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFormattedTime;
/* harmony export (immutable) */ __webpack_exports__["b"] = lineIntersection;
function getFormattedTime(seconds) {
    return String(Math.floor(seconds / (60 * 60))).padStart(2, '0') + ':' + String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
}

function lineIntersection(line1, line2) {
    var A1 = line1[1].y - line1[0].y;
    var B1 = line1[0].x - line1[1].x;
    var C1 = A1 * line1[0].x + B1 * line1[0].y;

    var A2 = line2[1].y - line2[0].y;
    var B2 = line2[0].x - line2[1].x;
    var C2 = A2 * line2[0].x + B2 * line2[0].y;

    var x = (B2 * C1 - B1 * C2) / (A1 * B2 - A2 * B1);

    var det = A1 * B2 - A2 * B1;
    var y = (A1 * C2 - A2 * C1) / det;
    return { x: x, y: y };
}

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Converter = function () {
  function Converter(collider) {
    _classCallCheck(this, Converter);

    this.collider = collider;

    var _rCoordsToMCoords = this.rCoordsToMCoords({ x: Infinity, y: Infinity }),
        _rCoordsToMCoords2 = _slicedToArray(_rCoordsToMCoords, 2),
        maxX = _rCoordsToMCoords2[0],
        maxY = _rCoordsToMCoords2[1];

    Object.assign(this, { maxX: maxX, maxY: maxY });
  }

  _createClass(Converter, [{
    key: "rCoordsToMCoords",
    value: function rCoordsToMCoords(_ref) {
      var x = _ref.x,
          y = _ref.y;
      var _collider = this.collider,
          game = _collider.game,
          scale = _collider.scale;

      return [rCoordToMCoord(x, scale, game.world.width), rCoordToMCoord(y, scale, game.world.height)];
    }
  }, {
    key: "mCoordsToRCoords",
    value: function mCoordsToRCoords(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          x = _ref3[0],
          y = _ref3[1];

      var scale = this.collider.scale;


      return {
        x: mCoordToRCoord(x, scale),
        y: mCoordToRCoord(y, scale)
      };
    }
  }]);

  return Converter;
}();

function rCoordToMCoord(value, scale, max) {
  var x = value;
  if (x < 0) x = 0;else if (x > max) x = max;

  return Math.floor(x / scale) + 1;
}

function mCoordToRCoord(x, scale) {
  return (x - 0.5) * scale;
}

/* harmony default export */ __webpack_exports__["a"] = (Converter);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(20);
var settle = __webpack_require__(500);
var buildURL = __webpack_require__(502);
var parseHeaders = __webpack_require__(503);
var isURLSameOrigin = __webpack_require__(504);
var createError = __webpack_require__(160);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(505);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (undefined !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(506);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(501);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9434893573162bf469a78bef73803752.eot";

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d0d736d4684c6fa2222ae37d668f495a.eot";

/***/ }),
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_Boot_js__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_Loading_js__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_StartMenu_js__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_Help_js__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_Controls_js__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__states_Game_js__ = __webpack_require__(443);







function init() {
  var windowInnerHeight = window.innerHeight;
  if (document.body.clientHeight > windowInnerHeight) {
    document.body.style.height = windowInnerHeight + 'px';
    document.documentElement.style.height = windowInnerHeight + 'px';
  }

  var containerNode = document.querySelector('.js-game-container');

  var game = new Phaser.Game({
    width: containerNode.clientWidth,
    height: containerNode.clientHeight,
    parent: containerNode,
    antialias: true,
    enableDebug: false,
    multiTexture: true,
    renderer: Phaser.WEBGL
    // resolution: window.devicePixelRatio || 1
  });

  game.state.add('Boot', __WEBPACK_IMPORTED_MODULE_0__states_Boot_js__["a" /* default */]);
  game.state.add('Loading', __WEBPACK_IMPORTED_MODULE_1__states_Loading_js__["a" /* default */]);
  // game.state.add('StartMenu', StartMenu);
  // game.state.add('Help', Help);
  // game.state.add('Controls', Controls);
  game.state.add('Game', __WEBPACK_IMPORTED_MODULE_5__states_Game_js__["a" /* default */]);

  game.state.start('Boot');
  window.game = game;
}

if (undefined === 'production') window.protestGameInit = init;else setTimeout(init, 50);

// document.querySelector('.game-background').style.backgroundImage = `url(${require('./assets/pattern.png')})`;
// document.querySelector('.game-background').style.backgroundImage = `url(${require('./assets/background.png')})`;
// document.querySelector('.game-background').style.backgroundImage = `url(${require('./assets/meeting_map.png')})`;
// document.body.style.backgroundImage = `url(${require('./assets/pattern.png')})`;

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_pack_js__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_i18n_js__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(67);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Boot = function () {
    function Boot() {
        _classCallCheck(this, Boot);
    }

    _createClass(Boot, [{
        key: 'init',
        value: function init() {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;

            this.game.mz = {};
        }
    }, {
        key: 'preload',
        value: function preload() {
            this.load.pack('boot', null, __WEBPACK_IMPORTED_MODULE_0__assets_pack_js__["a" /* default */]);
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.mz.i18n = new __WEBPACK_IMPORTED_MODULE_1__objects_i18n_js__["a" /* default */]({
                game: this.game
            });

            this.state.onStateChange.add(this.handleStateChange, this);

            this.state.start('Loading', true, false, {
                assets: [

                ///['atlasArray', require('../assets/humans.png'), require('../assets/humans.json')],
                ['pack', 'initial', null, __WEBPACK_IMPORTED_MODULE_0__assets_pack_js__["a" /* default */]], ['pack', 'help' + (Phaser.Device.desktop ? 'Desktop' : 'Touch'), null, __WEBPACK_IMPORTED_MODULE_0__assets_pack_js__["a" /* default */]], ['pack', 'helpTips', null, __WEBPACK_IMPORTED_MODULE_0__assets_pack_js__["a" /* default */]], ['pack', 'tweets', null, __WEBPACK_IMPORTED_MODULE_0__assets_pack_js__["a" /* default */]], ['pack', 'levelCommon', null, __WEBPACK_IMPORTED_MODULE_0__assets_pack_js__["a" /* default */]], ['pack', 'level1', null, __WEBPACK_IMPORTED_MODULE_0__assets_pack_js__["a" /* default */]]],
                nextState: ['Game', true, false, __WEBPACK_IMPORTED_MODULE_2__levels__["a" /* default */]['level1']]
            });
        }
    }, {
        key: 'handleStateChange',
        value: function handleStateChange() {
            this.game.mz.i18n.clear();
        }
    }]);

    return Boot;
}();

/* harmony default export */ __webpack_exports__["a"] = (Boot);

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/f0a315e32ceca663726778d1c06a4197.png";

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7890ea6754fb124fa101877cec2457dd.png";

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/66dd3dd498c059b331146e5fe01f17dd.png";

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/3e736cadcb61ec5e4f210df6e7bedd19.png";

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/0a98a949b4886079723975216652cf49.png";

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/c96144591ab8112e33935164269d6683.png";

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/4190e618de11fbf3ae3d41873529b2e0.png";

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/3eb6c3176371a0f3cc4fc69f68d0daea.png";

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fde6591e1dde24e589cfc497a07e708c.png";

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7e7209b2ebbb293cced90b043b2f69c3.png";

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/35dee4384b15d9d37855aabb26e87203.png";

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/e0ebce32899a3e8c50f5dbf32d264911.png";

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/df26508edc26ee3ebb6284d6467783fe.png";

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/9fa556559461c3286dc52836c3f71295.jpg";

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/6fdca65403892d28a5cb3c41916027dd.jpeg";

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/73f9d1a24b95edc21231f34bd969fe60.jpg";

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/ae25b01cae3eac0aae527614dea051c2.png";

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/ac5e583c05f4cd726f78f03969f33638.jpg";

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7826dc2b3c0031a0b6ffdb4aaefec6b1.jpeg";

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/1a3f7728b040b95b206686e4077441ee.jpg";

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/90af67382ae02ee96bcf4ab4ab75d5b8.jpg";

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d57ac0086872987c1950144c4791527a.jpg";

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/81739b51326452e4e37b5bbd473f9f11.jpg";

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/5199bf9235868222797eba63d089fef4.jpg";

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d3291cd3470e278aac6c709a5d7e1d7a.jpeg";

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/81f3d17c788178b49146a0815c54170a.jpg";

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7ca8239d678965070d563133c7ede9db.jpg";

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/bc4359c1a8417a4299621e2eff961ea3.jpg";

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/a038756be158829b8f3ff2f57ee34b32.jpeg";

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/bab50b5ea286de92d3841a1acb66eb3f.jpeg";

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/47b2bfe8b945cdf2c70cb0835d0ac419.jpeg";

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/73a34c439fb4eeadcd0a201e40630ac1.png";

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/213163a0d505713487737f4b815f116f.png";

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/657a67d3871c7aa1d4f67961d331152e.gif";

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/1a524d9f32ff68b39c508fd4686a9f74.jpg";

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/98250809c2f2aa90abee630ee6b118b0.jpg";

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d26b4e184bd225dadd5dc671f2d6dcdc.jpg";

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/4fd5bb2e1b096c8eea0b5d8144006856.jpg";

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/56b7547af4363943b51c81e401210a40.png";

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/5bd3b74e2a30818e8e753a03890100ca.jpg";

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/02e6feea7a1f6d5e79c4b6af7347842f.png";

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/784a4a24da47767dec8d65b727fc8383.png";

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/56b7547af4363943b51c81e401210a40.png";

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/714cfc1d07a07da6a11f8ea8c99dd73e.png";

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/95699dcea5eb9c37a078056a95904535.png";

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/5c90af949e1ed86965df6aacb86b7f00.png";

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/87bc704d499017ce98ac19c70b6b8a54.png";

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/6415893186a9d405eb58026c9746e687.png";

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/b6f612c9937d49d43dc479b8f14b27b4.png";

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/414510c3df8e81d30baba58bc049457c.png";

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/9cd6d0cc464716c355134fb57aaeb01b.png";

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/2a26da10b1fb67e5d95ddab98fe4f421.png";

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/31269e05cd13ab095ae3bbb217d2f567.mp3";

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/0cb89b881decdf87d1ccaba4ae7aaffb.mp3";

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/dca004f04dec60da50cca8fecc4161f2.mp3";

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/3745bf01cd4446437f37de7991ad805b.mp3";

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/52b53826ba253bf501d879893845b5f4.mp3";

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/cc69a8bb85e88cd19f58b38d64716100.mp3";

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/2033c60f2c5126c0ddeb447413b7d6b8.mp3";

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/15a327358f08be2e673ef27c2e5dcaa1.mp3";

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/05b4ea2cf7bcddf26622cdaafb40b881.mp3";

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/b2187268a6f521f79c03adf9bedcf458.mp3";

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/dd570435d42a0e42441e1fc12af0f4fa.mp3";

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/23d99d2701df0f3d76e640ecbb282400.png";

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/b36f0d0ff9fe4ff1b22c5c0284235664.json";

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d4bedbdde1c2adef9d869553fe67a350.png";

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/28dbeb6c57f67cd17abbd912371bac9c.png";

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/3b9989ad6121134042d7f025e79fa1ae.png";

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7a91b31a7170db537179dddf57b51e41.png";

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/e8369a8e936a5b0fabd5b1b42fed03d5.png";

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/43c9157961c1fc650563b17ffc533ca0.png";

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/499d4ef96e3877165c799362c7d75bbc.png";

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/1eaed2f89278cfcd852da07dade84399.png";

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/9dde16c42cc7847b49de34399cc61a3c.png";

/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_i18n_js__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var i18n = function () {
    function i18n(_ref) {
        var game = _ref.game;

        _classCallCheck(this, i18n);

        this.game = game;
        this.textObjects = [];
        this.currentLang = navigator.language === __WEBPACK_IMPORTED_MODULE_1__constants_js__["R" /* LANG_RU */] ? __WEBPACK_IMPORTED_MODULE_1__constants_js__["R" /* LANG_RU */] : __WEBPACK_IMPORTED_MODULE_1__constants_js__["Q" /* LANG_EN */];
        this.translations = __WEBPACK_IMPORTED_MODULE_0__assets_i18n_js__["a" /* default */];
    }

    _createClass(i18n, [{
        key: 'setLang',
        value: function setLang(lang) {
            var _this = this;

            this.currentLang = lang;
            this.textObjects.forEach(function (_ref2) {
                var inst = _ref2.inst,
                    text = _ref2.text;

                inst.setText(_this.getTranslation(text));
            });
        }
    }, {
        key: 'createText',
        value: function createText(x, y, text, font) {
            var textObject = this.game.add.text(x, y, this.getTranslation(text), font);
            this.textObjects.push({
                inst: textObject,
                text: text
            });
            return textObject;
        }
    }, {
        key: 'getTranslation',
        value: function getTranslation(text) {
            return this.translations[text][this.currentLang];
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.textObjects = [];
        }
    }]);

    return i18n;
}();

/* harmony default export */ __webpack_exports__["a"] = (i18n);

/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(6);
var _cnst$I18N_GAME_TITLE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (_cnst$I18N_GAME_TITLE = {}, _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["u" /* I18N_GAME_TITLE */], {
    en: 'Peaceful protest',
    ru: 'Мирная акция протеста'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["C" /* I18N_MENU_LEVEL_1 */], {
    en: '> Level 01',
    ru: '> Уровень 01'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["D" /* I18N_MENU_LEVEL_2 */], {
    en: '> Level 02',
    ru: '> Уровень 02'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["B" /* I18N_MENU_HOW_TO */], {
    en: 'How to play?',
    ru: 'Как играть?'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["A" /* I18N_MENU_CONTROLS */], {
    en: 'Controls',
    ru: 'Управление'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["z" /* I18N_MENU_BACK */], {
    en: '<   Back',
    ru: '<   Назад'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["n" /* I18N_CONTROLS_MOVE */], {
    en: 'move around',
    ru: 'двигаться'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["p" /* I18N_CONTROLS_RUN */], {
    en: 'run',
    ru: 'бегать'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["o" /* I18N_CONTROLS_POSTER */], {
    en: 'show poster',
    ru: 'показать плакат'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["y" /* I18N_HOW_TO_SCALE */], {
    en: 'Fill the protest scale before your time runs out',
    ru: 'Заполните шкалу протеста на 100%, пока не вышло время'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["w" /* I18N_HOW_TO_CHEER */], {
    en: 'Show your poster to people around you to cheer them up',
    ru: 'Показывайте плакат другим людям, чтобы поднять их настроение'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["v" /* I18N_HOW_TO_CALL */], {
    en: 'Show your poster to journalists for several seconds to call out for more people',
    ru: 'Показывайте плакат журналистам несколько секунд, чтобы позвать больше людей'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["x" /* I18N_HOW_TO_COPS */], {
    en: 'Cops will chase you and others for showing posters',
    ru: 'Полицейские вас арестуют, если поймают с плакатом'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["L" /* I18N_UI_SCALE */], {
    en: 'Protest meter',
    ru: 'Шкала протеста'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["J" /* I18N_UI_LOADING */], {
    en: 'Loading',
    ru: 'Загрузка'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["K" /* I18N_UI_PAUSE */], {
    en: 'Pause',
    ru: 'Пауза'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["t" /* I18N_END_WIN */], {
    en: 'You did it!',
    ru: 'Митинг удался!'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["q" /* I18N_END_ARRESTED */], {
    en: 'They got you, pal',
    ru: 'Суши сухари, дружище'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["s" /* I18N_END_TIME */], {
    en: 'Time is out!',
    ru: 'Время вышло!'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["r" /* I18N_END_FAIL */], {
    en: 'You failed :(',
    ru: 'Ты слил протест :('
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["H" /* I18N_STATS_TIME */], {
    en: 'Your time',
    ru: 'Время'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["I" /* I18N_STATS_TOTAL */], {
    en: 'Total protesters',
    ru: 'Всего протестующих'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["E" /* I18N_STATS_ACTIVE */], {
    en: 'Active',
    ru: 'Осталось на митинге'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["F" /* I18N_STATS_ARRESTED */], {
    en: 'Arrested',
    ru: 'Арестовано'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["G" /* I18N_STATS_LEFT */], {
    en: 'Left home',
    ru: 'Ушло домой'
}), _cnst$I18N_GAME_TITLE);

/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Loading = function () {
    function Loading() {
        _classCallCheck(this, Loading);
    }

    _createClass(Loading, [{
        key: 'init',
        value: function init(config) {
            this.mz = {
                config: config,
                objects: {
                    textProgress: null
                }
            };
        }
    }, {
        key: 'preload',
        value: function preload() {
            var _this = this;

            // this.game.stage.backgroundColor = '#000';
            var bgTile = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'enter_bg');
            bgTile.fixedToCamera = true;

            this.mz.config.assets.forEach(function (_ref) {
                var _load, _load2, _load3, _load4;

                var _ref2 = _toArray(_ref),
                    assetType = _ref2[0],
                    assetParams = _ref2.slice(1);

                console.log("Loading assets");

                switch (assetType) {
                    case 'pack':
                        //  console.log("Loading pack:" + assetParams.key);
                        (_load = _this.load).pack.apply(_load, _toConsumableArray(assetParams));
                        break;
                    case 'spritesheet':
                        //  console.log("Loading spritesheet:" + assetParams.key);
                        (_load2 = _this.load).spritesheet.apply(_load2, _toConsumableArray(assetParams));
                        break;
                    case 'image':
                        //  console.log("Loading image:" + assetParams.key);
                        (_load3 = _this.load).image.apply(_load3, _toConsumableArray(assetParams));
                        break;
                    case 'atlasArray':
                        //  console.log("Loading atlas:" + assetParams.key);
                        (_load4 = _this.load).atlasJSONArray.apply(_load4, _toConsumableArray(assetParams));
                        break;
                }
            });

            // this.mz.objects.textLoading = this.game.add.text(
            //     this.game.world.centerX - 5,
            //     this.game.world.centerY,
            //     this.game.mz.i18n.getTranslation(I18N_UI_LOADING),
            //     {
            //         font: '26px Arial',
            //         fill: '#000'
            //     }
            // );
            // this.mz.objects.textLoading.anchor.set(1, 0.5);

            this.mz.objects.enterLogo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 100, 'enter_logo');

            if (this.game.width < 500) {
                this.mz.objects.enterLogo.scale.setTo(0.5);
            } else {
                if (this.game.width > 1000) {
                    this.mz.objects.enterLogo.scale.setTo(0.7);
                } else {
                    this.mz.objects.enterLogo.scale.setTo(0.7);
                }
            }

            this.mz.objects.enterLogo.anchor.setTo(0.5, 1);

            this.mz.objects.textProgress = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 110, '0 %', {
                font: '26px Arial',
                fill: '#000'
            });
            this.mz.objects.textProgress.resolution = window.devicePixelRatio || 1;
            this.mz.objects.textProgress.anchor.set(0.5, 0);
        }
    }, {
        key: 'loadUpdate',
        value: function loadUpdate() {
            this.mz.objects.textProgress.setText(this.game.load.progress + ' %');
        }
    }, {
        key: 'create',
        value: function create() {
            var _state;

            (_state = this.state).start.apply(_state, _toConsumableArray(this.mz.config.nextState));
        }
    }]);

    return Loading;
}();

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_pack_js__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(6);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var StartMenu = function () {
    function StartMenu() {
        _classCallCheck(this, StartMenu);
    }

    _createClass(StartMenu, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#000';
        }
    }, {
        key: 'create',
        value: function create() {
            var _this = this;

            this.game.world.resize(this.game.width, this.game.height);

            this.title = this.game.mz.i18n.createText(this.game.width / 2, this.game.height / 6, __WEBPACK_IMPORTED_MODULE_2__constants_js__["u" /* I18N_GAME_TITLE */], {
                fill: '#fff'
            });
            this.title.anchor.set(0.5);

            var menuOffset = this.game.height / 3;
            var menuVerticalSpacing = Math.min(this.game.height / 7, 70);
            this.menu = [[__WEBPACK_IMPORTED_MODULE_2__constants_js__["C" /* I18N_MENU_LEVEL_1 */], this.handleClickPlay.bind(this, 'level1')],
            // [I18N_MENU_LEVEL_2, this.handleClickPlay.bind(this, 'level2')],
            [__WEBPACK_IMPORTED_MODULE_2__constants_js__["B" /* I18N_MENU_HOW_TO */], this.handleClickHelp.bind(this)], [__WEBPACK_IMPORTED_MODULE_2__constants_js__["A" /* I18N_MENU_CONTROLS */], this.handleClickControls.bind(this)]].map(function (_ref, i) {
                var _ref2 = _slicedToArray(_ref, 2),
                    itemTitle = _ref2[0],
                    callback = _ref2[1];

                return [_this.game.mz.i18n.createText(40, i * menuVerticalSpacing + menuOffset, itemTitle, {
                    font: '22px Arial',
                    fill: '#fff'
                }), callback];
            });

            this.langButton = this.game.add.button(this.game.world.width - 10, 0, 'langButtons', this.handleClickLang.bind(this));
            this.langButton.anchor.set(1, 0);

            this.game.input.onDown.add(this.handleClickMenu, this);
        }
    }, {
        key: 'update',
        value: function update() {
            this.langButton.frame = this.game.mz.i18n.currentLang === __WEBPACK_IMPORTED_MODULE_2__constants_js__["R" /* LANG_RU */] ? 1 : 0;
        }
    }, {
        key: 'handleClickPlay',
        value: function handleClickPlay(level) {
            this.state.start('Loading', true, false, {
                assets: [['pack', 'levelCommon', null, __WEBPACK_IMPORTED_MODULE_1__assets_pack_js__["a" /* default */]], ['pack', level, null, __WEBPACK_IMPORTED_MODULE_1__assets_pack_js__["a" /* default */]]],
                nextState: ['Game', true, false, __WEBPACK_IMPORTED_MODULE_0__levels_js__["a" /* default */][level]]
            });
        }
    }, {
        key: 'handleClickLang',
        value: function handleClickLang() {
            this.game.mz.i18n.setLang(this.game.mz.i18n.currentLang === __WEBPACK_IMPORTED_MODULE_2__constants_js__["R" /* LANG_RU */] ? __WEBPACK_IMPORTED_MODULE_2__constants_js__["Q" /* LANG_EN */] : __WEBPACK_IMPORTED_MODULE_2__constants_js__["R" /* LANG_RU */]);
        }
    }, {
        key: 'handleClickMenu',
        value: function handleClickMenu() {
            var _this2 = this;

            this.menu.some(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    item = _ref4[0],
                    callback = _ref4[1];

                if (item.getBounds().contains(_this2.game.input.x, _this2.game.input.y)) {
                    _this2.game.input.onDown.remove(_this2.handleClickMenu, _this2);
                    callback();
                    return true;
                }
            });
        }
    }, {
        key: 'handleClickHelp',
        value: function handleClickHelp() {
            this.state.start('Help', true, false);
        }
    }, {
        key: 'handleClickControls',
        value: function handleClickControls() {
            this.state.start('Controls', true, false);
        }
    }]);

    return StartMenu;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (StartMenu);

/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Help = function () {
    function Help() {
        _classCallCheck(this, Help);
    }

    _createClass(Help, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#000';
        }
    }, {
        key: 'create',
        value: function create() {
            var _this = this;

            var horizontalOffset = this.game.width / 15;

            this.back = this.game.add.text(horizontalOffset, this.game.height / 15, this.game.mz.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["z" /* I18N_MENU_BACK */]), {
                fill: '#fff'
            });

            var textGroup = this.game.add.group();
            var verticalOffset = 0;
            var spacing = this.game.height / 30;
            var fontSize = Math.min(22, Math.round(this.game.height / 19));
            [__WEBPACK_IMPORTED_MODULE_0__constants__["y" /* I18N_HOW_TO_SCALE */], __WEBPACK_IMPORTED_MODULE_0__constants__["w" /* I18N_HOW_TO_CHEER */], __WEBPACK_IMPORTED_MODULE_0__constants__["v" /* I18N_HOW_TO_CALL */], __WEBPACK_IMPORTED_MODULE_0__constants__["x" /* I18N_HOW_TO_COPS */]].forEach(function (text, i) {
                var textObject = _this.game.add.text(horizontalOffset, verticalOffset, i + 1 + '. ' + _this.game.mz.i18n.getTranslation(text) + '.', {
                    font: fontSize + 'px Arial',
                    fill: '#fff',
                    wordWrap: true,
                    wordWrapWidth: _this.game.width - horizontalOffset * 2
                });
                verticalOffset += textObject.height + spacing;
                textGroup.add(textObject);
            });
            textGroup.y = (this.game.height + this.back.bottom - verticalOffset + spacing) / 2;

            this.game.input.onDown.add(this.handleClickBack, this);
        }
    }, {
        key: 'handleClickBack',
        value: function handleClickBack() {
            if (this.back.getBounds().contains(this.game.input.x, this.game.input.y)) {
                this.game.input.onDown.remove(this.handleClickBack, this);
                this.state.start('StartMenu', true, false);
                return true;
            }
        }
    }]);

    return Help;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (Help);

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(6);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Controls = function () {
    function Controls() {
        _classCallCheck(this, Controls);
    }

    _createClass(Controls, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#000';
        }
    }, {
        key: 'create',
        value: function create() {
            var _this = this;

            this.back = this.game.add.text(40, this.game.height / 15, this.game.mz.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["z" /* I18N_MENU_BACK */]), {
                fill: '#fff'
            });

            var offset = this.game.height / 3.4;
            var spacing = Math.min(100, this.game.height / 3.8);
            var prefix = 'help';
            [['Move', __WEBPACK_IMPORTED_MODULE_0__constants__["n" /* I18N_CONTROLS_MOVE */]], ['Run', __WEBPACK_IMPORTED_MODULE_0__constants__["p" /* I18N_CONTROLS_RUN */]], ['Poster', __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* I18N_CONTROLS_POSTER */]]].forEach(function (_ref, i) {
                var _ref2 = _slicedToArray(_ref, 2),
                    spriteKey = _ref2[0],
                    text = _ref2[1];

                var imageObj = _this.game.add.sprite(_this.game.width / 4, i * spacing + offset, prefix + spriteKey);
                imageObj.anchor.set(0.5);
                var textObj = _this.game.add.text(_this.game.width / 2, i * spacing + offset, _this.game.mz.i18n.getTranslation(text), {
                    font: '20px Arial',
                    fill: '#fff'
                });
                textObj.anchor.set(0, 0.5);
            });

            this.game.input.onDown.add(this.handleClickBack, this);
        }
    }, {
        key: 'handleClickBack',
        value: function handleClickBack() {
            if (this.back.getBounds().contains(this.game.input.x, this.game.input.y)) {
                this.game.input.onDown.remove(this.handleClickBack, this);
                this.state.start('StartMenu', true, false);
                return true;
            }
        }
    }]);

    return Controls;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (Controls);

/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_NPCProtester_js__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Cop_js__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_Journalist_js__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_Star_js__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_SWATSquad_js__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objects_Shield_js__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__objects_DroppedPoster_js__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__objects_GameInterface_js__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__objects_PauseMenu_js__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__objects_EndMenu_js__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Collider_Collider_js__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__objects_HelpInfo_js__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__objects_Camera__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__objects_Tweets___ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modal___ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__levels__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__objects_CirclePool__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__debug_js__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__levelObjects_js__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__constants_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__utils_js__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__objects_Tweets_ManuallyBehavior__ = __webpack_require__(98);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






























var Game = function () {
    function Game() {
        _classCallCheck(this, Game);
    }

    _createClass(Game, [{
        key: 'init',
        value: function init(level) {
            // FIXME: debug
            window.game = this;

            this.mz = {
                level: level,
                garbageLevel: 0,
                gameEnded: false,
                screenAttacked: false,
                score: 0,
                timePassed: 0, // s
                protesters: {
                    alive: 0,
                    arrested: 0,
                    revived: 0,
                    left: 0,
                    toRevive: level.protesters.count.start,
                    meanMood: level.protesters.mood
                },
                cops: {
                    alive: 0
                },
                postersToRevive: [],
                events: {
                    keys: {},
                    fieldClickHandler: null
                },
                timers: {
                    swat: null,
                    screen: null,
                    resize: null,
                    fight: null,
                    twits: null,
                    gameTime: null
                },
                objects: {
                    star: null,
                    player: null,
                    swat: null,
                    shield: null,
                    bgTile: null,
                    garbage_01: null,
                    garbage_02: null,
                    garbage_03: null,
                    interface: null,
                    audio: {},
                    pauseMenu: null,
                    endMenu: null,
                    screenAttack: null,
                    mask: null,
                    fightAdvice: null
                },
                arrays: {
                    protesters: [],
                    cops: [],
                    press: [],
                    borders: [],
                    droppedPosters: [],
                    wagons: [],
                    enterWagons: [],
                    awaitWagons: [],
                    leftWagons: []
                },
                groups: {
                    d: null,
                    cars: null,
                    droppedPosters: null,
                    copsFOV: null,
                    pressFOV: null,
                    playerFOV: null,
                    npcProtesters: null,
                    levelObjects: null,
                    player: null,
                    circles: null
                },
                zoomLevel: -1,
                advices: {
                    move: null,
                    space: null,
                    shift: null,
                    agitate: null,
                    press: null,
                    arrest: null,
                    fight: null,
                    people: null,
                    omon: null,
                    star: null,
                    nod: null,
                    cops: null
                },
                showedAdvice: {
                    move: false,
                    arrest: false,
                    nod: false,
                    omon: false,
                    shift: false,
                    cops: false
                },
                circles: {
                    npc: null,
                    cop: null,
                    press: null
                },
                tweet: null,
                limitScore: level.scoreWin,
                starScore: level.star.score,
                pressScore: level.press.score,
                pressJailed: false,
                musicStage: 'start'
            };
            this.mz.score = 0;
        }
    }, {
        key: 'create',
        value: function create() {
            var _this = this;

            this.debuger = new __WEBPACK_IMPORTED_MODULE_18__debug_js__["a" /* default */](this.game);
            this.collider = new __WEBPACK_IMPORTED_MODULE_11__Collider_Collider_js__["a" /* default */]({ game: this.game, gameObject: this, scale: 20 });
            this.mz.tweet = new __WEBPACK_IMPORTED_MODULE_14__objects_Tweets___["a" /* default */](this.game);
            this.mz.pressJailed = false;
            this.mz.tweet.resetShowedTweets();
            this.mz.score = 0;
            // this.game.time.advancedTiming = true;

            this.game.stage.backgroundColor = '#ccc';
            // this.game.sound.mute = true;

            this.game.world.resize(this.mz.level.worldWidth, this.mz.level.worldHeight);

            this.mz.objects.bgTile = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'meeting_map');
            this.mz.objects.bgTile.fixedToCamera = true;

            this.mz.objects.garbage_01 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'garbage_01');
            this.mz.objects.garbage_02 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'garbage_02');
            this.mz.objects.garbage_03 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'garbage_03');
            this.mz.objects.garbage_01.visible = false;
            this.mz.objects.garbage_02.visible = false;
            this.mz.objects.garbage_03.visible = false;

            this.mz.objects.audio.theme = this.game.add.audio('bp_loop');
            this.mz.objects.audio.theme.loopFull(0.001);
            this.game.add.tween(this.mz.objects.audio.theme).to({ volume: 0.15 }, 20000).start();

            this.mz.objects.audio.audioPunch = [this.game.add.audio('punch01'), this.game.add.audio('punch02')];
            this.mz.objects.audio.random = [this.game.add.audio('croud')];
            this.mz.objects.audio.applause = this.game.add.audio('applause');
            this.mz.objects.audio.boo = this.game.add.audio('boo');
            this.mz.objects.audio.pick = this.game.add.audio('pick');
            this.mz.objects.audio.meeting = this.game.add.audio('meeting_sound');
            // this.mz.objects.audio.song = this.game.add.audio('bp_song');


            // FOVs should always be below everything
            this.mz.groups.playerFOV = this.game.add.group();
            this.mz.groups.pressFOV = this.game.add.group();
            this.mz.groups.copsFOV = this.game.add.group();
            this.mz.groups.levelObjects = this.game.add.group();

            this.mz.groups.droppedPosters = this.game.add.group();

            this.mz.groups.cars = this.game.add.group();
            // cars
            // for (let i = 0; i < this.game.world.width; i += 300) {
            //     const autoSprite = this.game.add.sprite(i, 120, 'auto');
            //     autoSprite.anchor.set(0, 1);
            //     this.mz.groups.cars.add(autoSprite);
            // }

            this.mz.groups.d = this.game.add.group();
            this.mz.groups.player = this.game.add.group();
            this.mz.groups.npcProtesters = this.game.add.group();

            this.mz.levelObjects = {};

            // this.mz.groups.d.add(this.mz.objects.star);
            // player
            this.mz.objects.player = this.createPrefab(__WEBPACK_IMPORTED_MODULE_0__objects_Player_js__["a" /* default */], _extends({
                x: this.game.world.centerX,
                y: this.game.world.centerY,
                fovGroup: this.mz.groups.playerFOV
            }, this.mz.level.player, {
                onDropPoster: this.handleDropPoster.bind(this)
            }));
            // this.mz.groups.player.add(this.mz.objects.player);

            // this.collider.addEntity({ object: this.mz.objects.player, sprite: this.mz.objects.player.sprite })
            this.game.camera.follow(this.mz.objects.player.sprite);

            this.mz.groups.d.add(this.mz.objects.player.sprite);

            // top borders
            // for (let i = 0; i < this.game.world.width; i += 100) {
            //     const offset = Math.max(0, 50 - this.mz.objects.player.sprite.height);
            //     const borderTop = this.game.add.sprite(i, FIELD_OFFSET.top - 25, 'border', 0, this.mz.groups.d);
            //     borderTop.anchor.set(0, 0.5);
            //     this.game.physics.arcade.enable(borderTop);
            //     borderTop.body.setSize(borderTop.width, offset);
            //     borderTop.body.immovable = true;
            //     this.mz.arrays.borders.push(borderTop);
            // }

            // cops
            this.createCops();

            this.mz.timers.screen = this.game.time.create(false);
            this.mz.timers.resize = this.game.time.create(false);
            this.mz.timers.fight = this.game.time.create(false);
            this.mz.timers.twits = this.game.time.create(false);
            this.mz.timers.twits = this.game.time.create(false);
            if (this.mz.timers.gameTime) {
                this.mz.timers.gameTime.destroy();
            }
            this.mz.timers.gameTime = this.game.time.create(false);
            this.mz.timers.gameTime.start();
            this.mz.timers.twits.loop(1000 * 60, function () {
                if (Math.random() < 0.5) _this.mz.tweet.rTweet({ type: 'description' }, { visible: 5000, fadeIn: 500, fadeOut: 500 });
            });
            this.mz.timers.twits.start();

            // swat
            if (this.mz.level.swat) {
                this.mz.objects.swat = new __WEBPACK_IMPORTED_MODULE_5__objects_SWATSquad_js__["a" /* default */](_extends({
                    gameObject: this,
                    game: this.game
                }, this.mz.level.swat, {
                    group: this.mz.groups.d
                }));
                this.mz.timers.swat = this.game.time.create(false);
            }

            // shield
            // this.mz.objects.shield = new Shield({
            //     game: this.game,
            //     speed: {
            //         value: 300
            //     }
            // });

            // press
            this.onFinishShooting = this.handleFinishShooting.bind(this);
            var pressRequired = this.getPressRequiredNumber();
            for (var _i = this.mz.arrays.press.length; _i < pressRequired; _i++) {
                var isFirst = _i === 0;
                var coords = isFirst ? {
                    x: this.mz.objects.player.sprite.x + 20,
                    y: this.mz.objects.player.sprite.y - 50
                } : this.getRandomCoordinates();
                var journalist = this.createPrefab(__WEBPACK_IMPORTED_MODULE_3__objects_Journalist_js__["a" /* default */], _extends({}, coords, {
                    fov: {
                        group: this.mz.groups.pressFOV,
                        distance: this.mz.level.press.fov.distance,
                        angle: this.mz.level.press.fov.angle
                    },
                    speed: this.mz.level.press.speed,
                    shootingDuration: this.mz.level.press.duration,
                    cooldownDuration: this.mz.level.press.duration * pressRequired * 2,
                    onFinishShooting: this.onFinishShooting,
                    atlasKey: 'humans',
                    spriteName: 'journalist' + _i
                }));
                this.mz.arrays.press.push(journalist.sprite);
                this.mz.groups.d.add(journalist.sprite);
                journalist.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["P" /* JOURNALIST_MODE_WANDER */]);
            }

            // protesters
            this.createProtesters();

            // interface
            this.mz.objects.interface = new __WEBPACK_IMPORTED_MODULE_8__objects_GameInterface_js__["a" /* default */]({
                game: this.game,
                onTogglePoster: function onTogglePoster() {
                    _this.mz.objects.player.togglePoster();
                }
            });
            // this.updateScore();


            // bottom borders
            // for (let i = 0; i < this.game.world.width; i += 100) {
            //     const offset = Math.max(0, 50 - this.mz.objects.player.sprite.height);
            //     const borderBottom = this.game.add.sprite(i, this.game.world.height - 25, 'border', 0, this.mz.groups.d);
            //     borderBottom.anchor.set(0, 0.5);
            //     this.game.physics.arcade.enable(borderBottom);
            //     borderBottom.body.setSize(borderBottom.width, offset, 0, borderBottom.height - offset);
            //     borderBottom.body.immovable = true;
            //     this.mz.arrays.borders.push(borderBottom);
            // }

            this.mz.objects.timer = this.game.time.create();
            this.mz.objects.timer.loop(Phaser.Timer.SECOND, this.updateTimer, this);
            this.mz.objects.timer.start();

            // pause menu
            this.mz.objects.pauseMenu = new __WEBPACK_IMPORTED_MODULE_9__objects_PauseMenu_js__["a" /* default */]({ game: this.game });

            // events

            // click on field
            var fieldClickHandler = this.game.add.sprite(0, 0);
            fieldClickHandler.fixedToCamera = true;
            fieldClickHandler.scale.set(this.game.width, this.game.height);
            fieldClickHandler.inputEnabled = true;
            fieldClickHandler.input.priorityID = 1;
            fieldClickHandler.events.onInputDown.add(this.handleTap, this);
            this.mz.events.fieldClickHandler = fieldClickHandler;

            // pause
            this.game.onPause.add(this.handlePause, this);
            this.game.onResume.add(this.handlePause, this);
            this.game.input.onDown.add(this.handleUnpause, this);

            this.mz.events.keys.esc = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            // this.game.camera.width = 600;
            // this.game.camera.height = 300;
            // this.game.camera.scale.x = 2;
            // this.game.camera.scale.y = 2;

            this.game.camera.setBoundsToWorld();
            this.customCamera = new __WEBPACK_IMPORTED_MODULE_13__objects_Camera__["a" /* default */](this.game.camera, this.game);
            __WEBPACK_IMPORTED_MODULE_12__objects_HelpInfo_js__["a" /* default */].setGame(this.game);
            this.mz.advices.move = this.mz.tweet.tweet(Phaser.Device.desktop ? 'Передвигайтесь по улице с помощью стрелочек' : 'Коснитесь экрана, чтобы передвигаться по улице', 'help', { behavior: __WEBPACK_IMPORTED_MODULE_23__objects_Tweets_ManuallyBehavior__["a" /* default */] });
            this.mz.advices.space = this.mz.tweet.tweet(Phaser.Device.desktop ? 'Нажмите ПРОБЕЛ, чтобы начать агитацию/перестать агитировать' : 'Нажмите на значок справа внизу экрана, чтобы начать/закончить агитацию', 'help', { behavior: __WEBPACK_IMPORTED_MODULE_23__objects_Tweets_ManuallyBehavior__["a" /* default */] });
            this.mz.advices.agitate = this.mz.tweet.tweet('Проводите агитацию рядом с человеком без плаката, чтобы он присоединился к вам', 'help', { behavior: __WEBPACK_IMPORTED_MODULE_23__objects_Tweets_ManuallyBehavior__["a" /* default */] });
            // this.mz.advices.shift = this.mz.tweet.tweet(
            //     'Чтобы бегать нажмите shift',
            //     'tw_help',
            //     {behavior: ManuallyBehavior}
            // );


            Object(__WEBPACK_IMPORTED_MODULE_19__levelObjects_js__["b" /* reset */])();
            // setTimeout(this.screenAttack.bind(this), 200);

            if (!this.circleGraphic) this.circleGraphic = this.game.add.graphics();

            this.mz.groups.circles = this.game.add.group();

            this.mz.objects.fightAdvice = this.game.add.sprite(this.game.width / 2, this.game.height / 2 - 50, 'defend');
            this.mz.objects.fightAdvice.anchor.setTo(0.5, 1);
            this.mz.objects.fightAdvice.fixedToCamera = true;
            this.mz.objects.fightAdvice.visible = false;

            var processingGraphic = this.game.add.graphics();
            var ratio = window.devicePixelRatio || 1;
            this.mz.circles.press = processingGraphic.clear().beginFill(0xf7c169, 0.7).drawCircle(10, 10, 20).endFill().generateTexture(ratio);
            this.mz.circles.npc = processingGraphic.clear().beginFill(0x6eed83, 0.7).drawCircle(10, 10, 20).endFill().generateTexture(ratio);
            this.mz.circles.cop = processingGraphic.clear().beginFill(0x2b3992, 0.7).drawCircle(10, 10, 20).endFill().generateTexture(ratio);
            this.circlePool = new __WEBPACK_IMPORTED_MODULE_17__objects_CirclePool__["a" /* default */](this.game);
        }
    }, {
        key: 'update',
        value: function update() {
            var _this2 = this;

            this.debuger.update(); // update debuger, for reset counter
            var now = Date.now();

            this.updateGarbage();
            // this.mz.pressJailed = false;
            // update background
            this.mz.objects.bgTile.tilePosition.set(-this.game.camera.x, -this.game.camera.y);

            if (!this.mz.objects.star && this.mz.starScore <= this.mz.score) {
                this.createStar();
            }

            this.createLevelObjects();

            this.collider.update();

            if (!this.mz.gameEnded) {
                this.playRandomSound();
            }

            // update player
            this.mz.objects.player.update();

            // update protesters
            var lastTickMeanMood = this.mz.protesters.meanMood;

            this.mz.protesters.meanMood = 0;
            this.mz.protesters.alive = 0;
            var posterProtesters = [];

            if (this.mz.objects.player.showPoster) {
                posterProtesters.push(this.mz.objects.player.sprite);
            }
            var worldBounds = this.game.world.bounds;
            for (var _i2 = 0; _i2 < this.mz.arrays.protesters.length; _i2++) {
                var sprite = this.mz.arrays.protesters[_i2];
                if (!sprite.alive) {
                    if (this.mz.protesters.toRevive !== 0) {
                        var mood = Math.min(this.game.math.clamp(lastTickMeanMood, this.mz.level.protesters.mood, (this.mz.level.winningThreshold - 1) / 100), 0.6);
                        this.reviveProtester({
                            sprite: sprite,
                            mood: mood,
                            isFirst: this.mz.protesters.alive === 0
                        });
                        this.mz.protesters.alive++;
                        this.mz.protesters.meanMood += mood;
                    }
                } else {
                    sprite.mz.update();

                    var closeToPoster = false;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = posterProtesters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var protesterSprite = _step.value;

                            if (this.getDistanceSq(sprite, protesterSprite) <= this.mz.objects.player.radius.actualSq) {
                                closeToPoster = true;
                                break;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    sprite.mz.toggleCheering(!this.mz.gameEnded && closeToPoster && worldBounds.contains(sprite.x, sprite.y));

                    this.mz.protesters.alive++;
                    this.mz.protesters.meanMood += sprite.mz.mood;
                }
            }

            this.mz.protesters.toRevive = 0;

            this.mz.protesters.meanMood = this.mz.protesters.alive !== 0 ? this.mz.protesters.meanMood / this.mz.protesters.alive : 0;
            // this.mz.score = 100 * this.game.math.clamp(
            //     100 * (
            //         0.5 * this.mz.protesters.alive / this.mz.level.protesters.count.max +
            //         0.5 * this.mz.protesters.meanMood
            //     ) / this.mz.level.winningThreshold,
            //     0,
            //     1
            // );

            // update interface
            if (!this.mz.gameEnded) {
                this.mz.objects.interface.update({
                    score: this.mz.score,
                    protestersAlive: this.mz.protesters.alive,
                    protestersTotal: this.mz.level.protesters.count.max,
                    meanMood: this.mz.protesters.meanMood,
                    percent: this.mz.score / this.mz.limitScore,
                    showPoster: __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__["a" /* default */].instance.showPoster
                });
            }

            // update journalists
            this.mz.arrays.press.forEach(function (journalistSprite) {
                var journalist = journalistSprite.mz;
                if (journalist.mode === __WEBPACK_IMPORTED_MODULE_22__constants__["M" /* JOURNALIST_MODE_ARRESTED */]) {
                    return;
                }
                if (journalistSprite.alive) {
                    var newTarget = null;

                    if (!_this2.mz.gameEnded && journalist.FOV.isActive && _this2.mz.objects.player.showPoster && journalist.FOV.containsPoint(_this2.mz.objects.player.sprite.body.center)) {
                        newTarget = _this2.mz.objects.player.sprite;
                    }

                    if (_this2.mz.score >= _this2.mz.pressScore && !_this2.mz.pressJailed) {
                        var protesterBounds = journalistSprite.getBounds();

                        // vs cops
                        for (var j = 0; j < _this2.mz.arrays.cops.length; j++) {
                            var copSprite = _this2.mz.arrays.cops[j];
                            if (!copSprite.alive || copSprite.mz.target !== journalistSprite || !Phaser.Rectangle.intersects(protesterBounds, copSprite.getBounds()) || copSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_22__constants__["e" /* COP_MODE_STUN */] || copSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_22__constants__["c" /* COP_MODE_FIGHT */] || copSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["a" /* COP_MODE_CONVOY */]) {
                                continue;
                            }

                            _this2.proceedToJail(journalistSprite, copSprite);
                            journalist.FOV.kill();
                            _this2.mz.pressJailed = true;
                            return;
                        }
                    }

                    if (newTarget) {
                        journalist.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["O" /* JOURNALIST_MODE_SHOOTING */], { target: newTarget });
                    } else if (journalist.mode !== __WEBPACK_IMPORTED_MODULE_20__constants_js__["P" /* JOURNALIST_MODE_WANDER */] && journalist.mode !== __WEBPACK_IMPORTED_MODULE_22__constants__["N" /* JOURNALIST_MODE_FOLLOW */]) {
                        journalist.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["P" /* JOURNALIST_MODE_WANDER */]);
                    }

                    journalist.update();
                }
            });

            // update swat
            if (this.mz.objects.swat) {
                if ((this.mz.score >= this.mz.level.swat.scoreThreshold || this.mz.gameEnded) && this.mz.objects.swat.mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["_2" /* SWAT_MODE_HIDE */] && !this.mz.timers.swat.running) {
                    this.mz.timers.swat.add(this.mz.level.swat.frequency, this.launchSWAT, this);
                    this.mz.timers.swat.start();
                } else if (this.mz.timers.swat.running && this.mz.score < this.mz.level.swat.scoreThreshold) {
                    this.mz.timers.swat.stop(true);
                }
                this.mz.objects.swat.update();
            }

            // update shield
            // this.mz.objects.shield.update();

            // update cops
            var copsRequired = this.getCopsRequiredNumber();
            if (this.mz.cops.alive < this.mz.arrays.cops.length && this.mz.arrays.wagons.length) {
                // revive if necessary

                if (copsRequired > this.mz.cops.alive) {
                    if (!this.mz.showedAdvice.cops) {
                        this.mz.showedAdvice.cops = true;
                        this.mz.tweet.tweet('Во время агитации остерегайтесь сотрудников полиции, опустите плакат до того, как они вас заметят', 'help', { visible: 5000, fadeIn: 500, fadeOut: 500 });
                    }
                    this.reviveCops(copsRequired - this.mz.cops.alive);
                    this.mz.cops.alive = copsRequired;
                }
            }

            // if (copsRequired > this.mz.cops.alive && this.mz.arrays.wagons.length === 0 && this.mz.arrays.enterWagons.length === 0 )
            // {
            //     this.handleEnterWagon(this.mz.arrays.awaitWagons[0], 300, 0)
            // }

            this.handleEnteringWagons();
            this.handleLeavingWagons();

            var pressRequired = this.getPressRequiredNumber();
            for (var _i3 = this.mz.arrays.press.length; _i3 < pressRequired; _i3++) {
                var isFirst = _i3 === 0;
                var coords = isFirst ? {
                    x: this.mz.objects.player.sprite.x + 20,
                    y: this.mz.objects.player.sprite.y - 20
                } : this.getRandomCoordinates();
                console.log('press first', isFirst, coords);

                var journalist = this.createPrefab(__WEBPACK_IMPORTED_MODULE_3__objects_Journalist_js__["a" /* default */], _extends({}, coords, {
                    fov: {
                        group: this.mz.groups.pressFOV,
                        distance: this.mz.level.press.fov.distance,
                        angle: this.mz.level.press.fov.angle
                    },
                    speed: this.mz.level.press.speed,
                    shootingDuration: this.mz.level.press.duration,
                    cooldownDuration: this.mz.level.press.duration * pressRequired * 2,
                    onFinishShooting: this.onFinishShooting,
                    atlasKey: "humans",
                    spriteName: 'journalist' + _i3
                }));

                this.mz.arrays.press.push(journalist.sprite);
                this.mz.groups.d.add(journalist.sprite);
                journalist.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["P" /* JOURNALIST_MODE_WANDER */]);
            }
            var protesterTargets = this.mz.arrays.protesters.filter(function (x) {
                return x.mz.showPoster;
            }).concat(this.mz.score >= this.mz.pressScore && !this.mz.pressJailed ? this.mz.arrays.press : []);
            var lastCopDecisionTimeout = 200;
            var attractionStrength = 0;
            if (this.mz.objects.player.showPoster) {
                attractionStrength = 0.2;
                for (var p = 0; p < this.mz.arrays.press; p++) {
                    if (this.mz.arrays.press[i].mz.mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["O" /* JOURNALIST_MODE_SHOOTING */]) {
                        attractionStrength += 0.4;
                    }
                }
                protesterTargets.push(this.mz.objects.player.sprite);
            }
            var copAttr = Math.min(1, attractionStrength * this.mz.objects.player.power);
            for (var _i4 = 0; _i4 < this.mz.cops.alive; _i4++) {
                var copSprite = this.mz.arrays.cops[_i4];
                var cop = copSprite.mz;

                if (cop.mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["a" /* COP_MODE_CONVOY */] && this.mz.objects.player.mode !== __WEBPACK_IMPORTED_MODULE_20__constants_js__["S" /* PLAYER_MODE_FIGHT */] && this.mz.objects.player.mode !== __WEBPACK_IMPORTED_MODULE_20__constants_js__["U" /* PLAYER_MODE_STUN */] && this.mz.objects.player.mode !== __WEBPACK_IMPORTED_MODULE_20__constants_js__["V" /* PROTESTER_MODE_ARRESTED */]) {
                    var playerCenter = this.mz.objects.player.sprite.body.center;
                    var diffCop = Math.abs(copSprite.body.center.x - playerCenter.x) + Math.abs(copSprite.body.center.y - playerCenter.y);
                    if (diffCop < 40) {
                        this.mz.objects.player.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["S" /* PLAYER_MODE_FIGHT */], { target: copSprite });
                        cop.setMode(__WEBPACK_IMPORTED_MODULE_22__constants__["c" /* COP_MODE_FIGHT */]);
                    }
                }

                if (cop.mode !== __WEBPACK_IMPORTED_MODULE_20__constants_js__["a" /* COP_MODE_CONVOY */] && cop.mode !== __WEBPACK_IMPORTED_MODULE_20__constants_js__["b" /* COP_MODE_ENTER */] && cop.mode !== __WEBPACK_IMPORTED_MODULE_22__constants__["c" /* COP_MODE_FIGHT */] && cop.mode !== __WEBPACK_IMPORTED_MODULE_22__constants__["e" /* COP_MODE_STUN */] && cop.lastDecisionTime < now) {
                    cop.lastDecisionTime = now + lastCopDecisionTimeout + Math.random() * 50;
                    // set attraction point and strength
                    cop.attractionPoint = _extends({}, this.mz.objects.player.sprite.body.center);

                    cop.attractionStrength = copAttr;

                    // find target for a cop
                    var newTarget = null;
                    var distanceToTargetSq = Infinity;

                    for (var _i5 = 0; _i5 < protesterTargets.length; _i5++) {
                        var protester = protesterTargets[_i5].mz;
                        if (!protester.sprite.alive || !cop.FOV.containsPoint(protester.sprite.body.center)) {
                            continue;
                        }
                        var distanceToProtesterSq = this.getDistanceSq(copSprite.body.center, protester.sprite.body.center);
                        // give higher priority to current target
                        if (protester.sprite === cop.target) {
                            distanceToProtesterSq *= 3 / 4;
                        }
                        if (distanceToProtesterSq < distanceToTargetSq) {
                            newTarget = protester.sprite;
                            distanceToTargetSq = distanceToProtesterSq;
                        }
                        //console.log('new target', newTarget);
                    }
                    if (cop.target && cop.target.mz.mode !== __WEBPACK_IMPORTED_MODULE_20__constants_js__["V" /* PROTESTER_MODE_ARRESTED */] && cop.FOV.containsPoint(cop.target.body.center)) {
                        var _distanceToProtesterSq = this.getDistanceSq(copSprite.body.center, cop.target.body.center) * 3 / 4;;
                        if (_distanceToProtesterSq < distanceToTargetSq) {
                            newTarget = cop.target;
                        }
                    }
                    if (newTarget) {
                        // if theres a target in a view, pursue him
                        cop.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["d" /* COP_MODE_PURSUE */], { target: newTarget });
                    } else if (cop.mode !== __WEBPACK_IMPORTED_MODULE_20__constants_js__["f" /* COP_MODE_WANDER */]) {
                        // else wander around, if not yet
                        cop.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["f" /* COP_MODE_WANDER */]);
                    }
                }

                cop.update();
            }

            // protesters collision
            var allProtesters = [].concat(_toConsumableArray(this.mz.arrays.protesters), [this.mz.objects.player.sprite]);
            if (this.mz.objects.star) allProtesters.push(this.mz.objects.star.sprite);

            this.swatFrame = (this.swatFrame || 0) + 1;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = allProtesters[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _protesterSprite = _step2.value;


                    if (!_protesterSprite.alive || _protesterSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["V" /* PROTESTER_MODE_ARRESTED */]) {
                        continue;
                    }

                    var protesterBounds = _protesterSprite.getBounds();

                    // vs swat
                    if (this.mz.objects.swat) {
                        var j = this.swatFrame % this.mz.objects.swat.sprites.length;
                        var swatSprite = this.mz.objects.swat.sprites[j];
                        if (swatSprite.children.length !== 0 || swatSprite.x <= 0 || swatSprite.x >= this.game.world.width || !Phaser.Rectangle.intersects(protesterBounds, swatSprite.getBounds())) {
                            continue;
                        }
                        this.arrest(_protesterSprite, swatSprite);
                    }
                }

                // // vs cops
                // for (let j = 0; j < this.mz.arrays.cops.length; j++) {
                //     const copSprite = this.mz.arrays.cops[j];
                //     if (
                //         !copSprite.alive ||
                //         copSprite.mz.target !== protesterSprite ||
                //         !Phaser.Rectangle.intersects(protesterBounds, copSprite.getBounds()) ||
                //         protesterSprite.mz.mode === PLAYER_MODE_FIGHT ||
                //         copSprite.mz.mode === COP_MODE_STUN ||
                //         copSprite.mz.mode === COP_MODE_FIGHT ||
                //         copSprite.mz.mode === COP_MODE_CONVOY
                //     ) {
                //         continue;
                //     }
                //     this.proceedToJail(protesterSprite, copSprite);
                // }


                // player collisions
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (this.mz.objects.player.mode !== __WEBPACK_IMPORTED_MODULE_20__constants_js__["V" /* PROTESTER_MODE_ARRESTED */] && !this.mz.gameEnded) {
                // vs posters
                for (var _i6 = 0; _i6 < this.mz.arrays.droppedPosters.length; _i6++) {
                    var droppedPoster = this.mz.arrays.droppedPosters[_i6];
                    if (!droppedPoster.sprite.alive) {
                        continue;
                    }
                    if (Phaser.Rectangle.intersects(droppedPoster.sprite.getBounds(), this.mz.objects.player.sprite.getBounds())) {
                        this.mz.objects.audio.pick.play('', 0, 0.25);
                        // this.mz.objects.player.powerUp();
                        droppedPoster.kill();
                    }
                }
            }

            // player vs borders collision
            // this.game.physics.arcade.collide(
            //     this.mz.objects.player.sprite,
            //     this.mz.arrays.borders
            // );
            var checkFollowPlayer = function checkFollowPlayer(sprite) {
                return !(sprite && sprite.mz && sprite.mz.mode && sprite.mz.mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["W" /* PROTESTER_MODE_FOLLOW */] && sprite.mz.following && sprite.mz.following.target === _this2.mz.objects.player.sprite);
            };
            var pursueTarget = function pursueTarget(mode, isArrest) {
                return function (copSprite, protesterSprite) {
                    var isTarget = copSprite.mz.target === protesterSprite && copSprite.mz.mode === mode;
                    if (isArrest && isTarget) {
                        if (!copSprite.alive || protesterSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["S" /* PLAYER_MODE_FIGHT */] || copSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_22__constants__["e" /* COP_MODE_STUN */] || copSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_22__constants__["c" /* COP_MODE_FIGHT */] || copSprite.mz.mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["a" /* COP_MODE_CONVOY */]) {
                            return false;
                        }
                        _this2.proceedToJail(protesterSprite, copSprite);
                    }
                    return !isTarget;
                };
            };
            this.game.physics.arcade.collide(this.mz.objects.player.sprite, this.mz.arrays.protesters, null, function (sprite1, sprite2) {
                return pursueTarget(__WEBPACK_IMPORTED_MODULE_22__constants__["Y" /* PROTESTER_MODE_NOD */])(sprite2, sprite1) && checkFollowPlayer(sprite1) && checkFollowPlayer(sprite2);
            });
            // this.game.physics.arcade.collide(
            //     this.mz.objects.player.sprite,
            //     this.mz.arrays.cops
            // );
            // player vs borders collision
            // this.game.physics.arcade.collide(
            //     this.mz.arrays.protesters,
            //     this.mz.arrays.borders
            // );
            // this.game.physics.arcade.collide(
            //     this.mz.arrays.protesters,
            //     this.mz.arrays.cops
            // );
            this.game.physics.arcade.collide(this.mz.objects.swat.sprites, this.mz.objects.swat.sprites);
            this.game.physics.arcade.collide(this.mz.levelObjects.paddyWagon, this.mz.objects.player.sprite);
            this.game.physics.arcade.collide(this.mz.levelObjects.paddyWagon, this.mz.arrays.protesters, function (wagon, protester) {
                var moveEntity = _this2.collider.getEntityBySprite(protester);
                var targets = moveEntity.move;
                if (targets.length) {
                    var moveEntry = targets[0];
                    var target = moveEntry.target;
                    if (moveEntry.phasing && _this2.checkContainWagon(target)) {
                        protester.mz.moveTo(null);
                        if (protester.mz.mode === __WEBPACK_IMPORTED_MODULE_22__constants__["Z" /* PROTESTER_MODE_WANDER */]) protester.mz.wander();
                    } else {
                        var xSide = null;
                        if (protester.x > wagon.body.x + wagon.body.width) {
                            xSide = 'right';
                        } else {
                            if (protester.x < wagon.body.x) {
                                xSide = 'left';
                            }
                        }
                        var ySide = null;
                        if (protester.y > wagon.body.y + wagon.body.height) {
                            ySide = 'bottom';
                        } else {
                            if (protester.y < wagon.body.y) {
                                ySide = 'top';
                            }
                        }
                        var distanceMove = 30;
                        switch (true) {
                            // case !!(xSide && ySide): {
                            //     alert('who knows :(');
                            //     break;
                            // }
                            case !!xSide:
                                {
                                    var goTop = !!Math.round(Math.random());
                                    var x = protester.x + Math.sign(protester.x - wagon.body.x) * distanceMove;
                                    var y = goTop ? wagon.body.y - distanceMove : wagon.body.y + wagon.body.height + distanceMove;
                                    protester.mz.moveTo({ x: x, y: y }, { prepend: true, phasing: true, reset: false });

                                    break;
                                }
                            case !!ySide:
                                {
                                    var goLeft = !!Math.round(Math.random());
                                    var _y = protester.y + Math.sign(protester.y - wagon.body.y) * distanceMove;
                                    var _x = goLeft ? wagon.body.x - distanceMove : wagon.body.x + wagon.body.width + distanceMove;
                                    protester.mz.moveTo({ x: _x, y: _y }, { prepend: true, phasing: true, reset: false });
                                    break;
                                }
                            default:
                            //console.log(xSide, ySide);
                        }
                    }
                }
            });

            if (this.mz.objects.star) {
                this.game.physics.arcade.collide(this.mz.objects.player.sprite, this.mz.objects.star.sprite);
                // this.game.physics.arcade.collide(
                //     this.mz.levelObjects.paddyWagon,
                //     this.mz.objects.star.sprite
                // );
            }
            this.game.physics.arcade.collide(this.mz.arrays.cops, this.mz.arrays.protesters, null, pursueTarget(__WEBPACK_IMPORTED_MODULE_20__constants_js__["d" /* COP_MODE_PURSUE */], true));

            var handlePlayerPursue = pursueTarget(__WEBPACK_IMPORTED_MODULE_20__constants_js__["d" /* COP_MODE_PURSUE */], true);

            this.game.physics.arcade.collide(this.mz.arrays.cops, this.mz.objects.player.sprite, null, function (cop, player) {
                return handlePlayerPursue(cop, player) && false;
            });

            // update posters
            this.mz.arrays.droppedPosters.forEach(function (droppedPoster) {
                if (droppedPoster.sprite.alive) {
                    droppedPoster.update();
                }
            });

            this.mz.postersToRevive.forEach(this.createPoster, this);
            this.mz.postersToRevive = [];

            //TODO - remove this
            this.mz.groups.d.sort('y', Phaser.Group.SORT_ASCENDING);

            if (!this.mz.gameEnded) {
                this.checkWin();
            }

            // events
            if (this.mz.events.keys.esc.justUp) {
                this.game.paused = !this.game.paused;
            }

            this.mz.objects.star && this.mz.objects.star.update();

            if (this.mz.screenAttacked) {
                //
                this.mz.objects.screenAttack.clear().beginFill(0x67c079, 0.95).moveTo(0, 0).arc(this.mz.objects.player.sprite.x, this.mz.objects.player.sprite.y, 50, 0, Math.PI * 2).lineTo(0, 0).lineTo(0, this.game.world.height).lineTo(this.game.world.width, this.game.world.height).lineTo(this.game.world.width, 0).lineTo(0, 0).endFill();
            }

            if (this.mz.protesters.alive >= 20 && this.mz.musicStage === 'start') {
                // this.GameObject.mz.objects.audio.theme.fadeOut(10000);
                this.mz.musicStage = 'crowd';
                this.mz.objects.audio.meeting.loopFull(0.01);
                this.game.add.tween(this.mz.objects.audio.meeting).to({ volume: 0.15 }, 30000).start();
                // .fadeIn(20000);
            }

            if (!Phaser.Device.desktop) {
                this.updateCircle();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
            // this.game.debug.cameraInfo(this.game.camera, 32, 32);
            // this.game.debug.body(this.mz.objects.player.sprite);
            // this.game.debug.bodyInfo(this.mz.objects.player.sprite, 0, 100);

            // this.mz.arrays.borders.forEach(sprite => {
            //     this.game.debug.body(sprite);
            // });
            // this.mz.arrays.cops.forEach(sprite => {
            //     this.game.debug.body(sprite);
            // });
            // this.mz.arrays.protesters.forEach(sprite => {
            //     this.game.debug.body(sprite);
            // });
            // this.mz.arrays.press.forEachExists(sprite => {
            //     this.game.debug.body(sprite);
            // });
        }
    }, {
        key: 'handleTap',
        value: function handleTap(sprite, pointer) {
            var coords = {
                x: pointer.x + this.game.camera.x,
                y: pointer.y + this.game.camera.y
            };

            var player = this.mz.objects.player;
            if (player.mode !== __WEBPACK_IMPORTED_MODULE_20__constants_js__["S" /* PLAYER_MODE_FIGHT */] && player.mode !== __WEBPACK_IMPORTED_MODULE_20__constants_js__["U" /* PLAYER_MODE_STUN */]) {
                if (this.mz.advices.move) {
                    this.mz.advices.move.hide();
                    this.mz.advices.move = null;
                }
                var angleDegree = player.sprite.position.angle(coords, true);
                player.direction = angleDegree;
                player.resetClickSpeed();

                player.moveTo(coords, { callback: function callback() {
                        return player.resetClickSpeed(true);
                    }, phasing: true });
            }
            if (player.mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["S" /* PLAYER_MODE_FIGHT */]) {
                player.fightBar += 1;
            }
        }
    }, {
        key: 'handleProtesterLeft',
        value: function handleProtesterLeft() {
            this.mz.protesters.left++;
        }
    }, {
        key: 'handleDropPoster',
        value: function handleDropPoster(coords) {
            // defer poster creation to the end of update method
            this.mz.postersToRevive.push(coords);
        }
    }, {
        key: 'handleFinishShooting',
        value: function handleFinishShooting(journalist) {
            this.mz.protesters.toRevive += this.mz.level.protesters.count.add;
            this.increaseScore(10, journalist.sprite);
        }
    }, {
        key: 'handlePause',
        value: function handlePause() {
            if (this.game.paused) {
                this.mz.objects.pauseMenu.revive();
            } else {
                this.mz.objects.pauseMenu.kill();
            }
        }
    }, {
        key: 'handleUnpause',
        value: function handleUnpause() {
            if (this.game.paused) {
                if (this.mz.objects.pauseMenu.replayButton.getBounds().contains(this.game.input.x, this.game.input.y)) {
                    this.game.paused = false;
                }
            }
        }
    }, {
        key: 'updateScore',
        value: function updateScore() {
            this.mz.objects.interface.updateScore(this.mz.score + ' / ' + this.mz.limitScore);
        }
    }, {
        key: 'updateTimer',
        value: function updateTimer() {
            this.mz.timePassed++;
            this.mz.objects.interface.updateTimer(Object(__WEBPACK_IMPORTED_MODULE_21__utils_js__["a" /* getFormattedTime */])(this.mz.timePassed));
        }
    }, {
        key: 'createCops',
        value: function createCops() {
            var totalCount = this.mz.level.cops.count[this.mz.level.cops.count.length - 1][1];
            this.mz.cops.alive = this.getCopsRequiredNumber();
            for (var _i7 = 0; _i7 < totalCount; _i7++) {
                var x = void 0,
                    y = void 0;
                // if (i < this.mz.cops.alive) {
                //     const offset = 60;
                //     const wagon = this.pickRandomWagon();
                //     x = Math.round(wagon.body.center.x) + offset;
                //     y = wagon.y + wagon.body.height + 15;
                // } else {
                //     const randCoords = this.getRandomCoordinates();
                //     x = randCoords.x;
                //     y = randCoords.y;
                // }
                var cop = this.createPrefab(__WEBPACK_IMPORTED_MODULE_2__objects_Cop_js__["a" /* default */], {
                    x: x, y: y,
                    alive: false,
                    fov: {
                        group: this.mz.groups.copsFOV,
                        distance: this.mz.level.cops.fov.distance,
                        angle: this.mz.level.cops.fov.angle
                    },
                    speed: this.mz.level.cops.speed,
                    atlasKey: 'humans',
                    spriteKey: "cop",
                    spriteName: 'cop' + _i7
                });

                this.mz.arrays.cops.push(cop.sprite);
                this.mz.groups.d.add(cop.sprite);

                // if (i < this.mz.cops.alive) {
                //     cop.setMode(COP_MODE_WANDER);
                // }
            }
        }
    }, {
        key: 'reviveCops',
        value: function reviveCops(count) {
            for (var _i8 = 0; _i8 < count; _i8++) {
                var index = _i8 + this.mz.cops.alive;
                var copSprite = this.mz.arrays.cops[index];
                copSprite.mz.revive(Boolean(index % 2));
            }
        }
    }, {
        key: 'getCopsRequiredNumber',
        value: function getCopsRequiredNumber() {
            var result = 0;
            for (var _i9 = 0; _i9 < this.mz.level.cops.count.length; _i9++) {
                if (this.mz.score <= this.mz.level.cops.count[_i9][0]) {
                    result = this.mz.level.cops.count[_i9][1];
                    break;
                }
            }
            return result;
        }
    }, {
        key: 'getPressRequiredNumber',
        value: function getPressRequiredNumber() {
            var result = 0;
            for (var _i10 = 0; _i10 < this.mz.level.press.count.length; _i10++) {
                if (this.mz.score <= this.mz.level.press.count[_i10][0]) {
                    result = this.mz.level.press.count[_i10][1];
                    break;
                }
            }
            return result;
        }
    }, {
        key: 'createProtesters',
        value: function createProtesters() {
            var count = this.mz.level.protesters.count.max;
            var onDropPoster = this.handleDropPoster.bind(this);
            var onLeft = this.handleProtesterLeft.bind(this);
            for (var _i11 = 0; _i11 < count; _i11++) {
                var coords = _i11 === 0 ? { x: this.game.world.centerX, y: this.game.world.centerY } : this.getRandomCoordinates();

                var protester = this.createPrefab(__WEBPACK_IMPORTED_MODULE_1__objects_NPCProtester_js__["a" /* default */], _extends({}, coords, {
                    group: this.mz.groups.d,
                    speed: this.mz.level.protesters.speed,
                    atlasKey: "humans",
                    spriteKey: 'npc_0' + (Math.floor(Math.random() * 8) + 1),
                    spriteName: 'protester' + _i11,
                    mood: this.mz.level.protesters.mood,
                    moodUp: this.mz.level.protesters.moodUp,
                    moodDown: this.mz.level.protesters.moodDown,
                    dropPoster: this.mz.level.protesters.poster.drop,
                    onLeft: onLeft,
                    onDropPoster: onDropPoster
                }));
                this.mz.arrays.protesters.push(protester.sprite);
            }
        }
    }, {
        key: 'randomOffscreenCoords',
        value: function randomOffscreenCoords() {
            var randomOffset = this.game.rnd.between(0, 100);

            return {
                x: this.game.rnd.between(0, 1) === 0 ? -100 - randomOffset : this.game.world.width + 100 + randomOffset,
                y: this.getRandomCoordinateY()
            };
        }
    }, {
        key: 'reviveProtester',
        value: function reviveProtester(_ref) {
            var sprite = _ref.sprite,
                mood = _ref.mood,
                isFirst = _ref.isFirst;

            var coords = isFirst ? { x: this.game.world.centerX + 20, y: this.game.world.centerY + 20 } : this.randomOffscreenCoords();
            sprite.mz.revive(_extends({}, coords, {
                nextCoords: isFirst ? { x: this.game.world.centerX + 20, y: this.game.world.centerY + 20 } : this.getRandomCoordinates(),
                mood: mood,
                isFirst: isFirst
            }));

            this.mz.protesters.toRevive--;
            this.mz.protesters.revived++;
        }
    }, {
        key: 'beatUpProtester',
        value: function beatUpProtester(sprite) {
            sprite.body.enable = false;
            // sprite.mz.viewSprite.damage(0.1);
            this.playRandomPunch();
        }
    }, {
        key: 'createPoster',
        value: function createPoster(coords) {
            var isRevived = false;
            for (var _i12 = 0; _i12 < this.mz.arrays.droppedPosters.length; _i12++) {
                var droppedPoster = this.mz.arrays.droppedPosters[_i12];
                if (!droppedPoster.sprite.alive) {
                    droppedPoster.revive(coords);
                    isRevived = true;
                    break;
                }
            }
            if (!isRevived) {
                this.mz.arrays.droppedPosters.push(new __WEBPACK_IMPORTED_MODULE_7__objects_DroppedPoster_js__["a" /* default */](_extends({
                    game: this.game,
                    group: this.mz.groups.droppedPosters
                }, coords, {
                    alive: this.mz.level.protesters.poster.alive
                })));
            }
        }
    }, {
        key: 'proceedToJail',
        value: function proceedToJail(protesterSprite, copSprite) {
            var _this3 = this;

            var closestCarCoords = null;
            var minDistanceSq = Infinity;
            this.mz.arrays.wagons.forEach(function (carSprite) {
                var carCoords = {
                    x: carSprite.body.x + carSprite.body.width / 2 + carSprite.entagleX,
                    y: carSprite.body.y + carSprite.body.height + carSprite.entagleY
                };
                var distanceToCarSq = _this3.getDistanceSq(copSprite, carCoords);
                if (distanceToCarSq < minDistanceSq) {
                    closestCarCoords = carCoords;
                    minDistanceSq = distanceToCarSq;
                }
            });

            this.arrest(protesterSprite, copSprite);
            copSprite.mz.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["a" /* COP_MODE_CONVOY */], { jailCoords: closestCarCoords });
        }
    }, {
        key: 'arrest',
        value: function arrest(protesterSprite, copSprite) {
            this.beatUpProtester(protesterSprite);

            copSprite.addChild(protesterSprite);

            if (protesterSprite.name === 'player') {
                this.game.camera.follow(copSprite);
            }
            var x = protesterSprite.body.center.x - copSprite.body.center.x;
            var y = protesterSprite.body.center.y - copSprite.body.center.y;
            protesterSprite.mz.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["V" /* PROTESTER_MODE_ARRESTED */], {
                x: Math.sign(x) * Math.min(Math.abs(x), 17),
                y: Math.sign(y) * Math.min(Math.abs(y), 17),
                by: copSprite.mz
            });

            if (protesterSprite.name !== 'player') {
                this.mz.protesters.arrested++;
            }
        }
    }, {
        key: 'unarrest',
        value: function unarrest(copSprite) {
            var protesterSprite = null;
            for (var j = 0; j < copSprite.children.length; j++) {
                if (copSprite.getChildAt(j) !== copSprite.mz.viewSprite && copSprite.getChildAt(j).mz) {
                    protesterSprite = copSprite.getChildAt(j);
                    break;
                }
            }
            var prevX = protesterSprite.x;
            var prevY = protesterSprite.y;

            copSprite.removeChild(protesterSprite);
            this.mz.groups.d.add(protesterSprite);
            // this.beatUpProtester(protesterSprite);

            // copSprite.removeChild(protesterSprite);

            if (protesterSprite.name === 'player') {
                this.game.camera.follow(copSprite);
            }

            if (protesterSprite.name !== 'player') {
                protesterSprite.mz.mood = 0.1;
                this.mz.protesters.arrested--;
                protesterSprite.mz.kill();
                protesterSprite.body.enable = true;
                var x = copSprite.x + prevX;
                var y = copSprite.y + prevY;
                protesterSprite.mz.revive({ x: x, y: y, nextCoords: { x: x, y: y } });
                protesterSprite.visible = true;
                var slot = __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__["a" /* default */].instance.slots.take(this);
                if (slot) {
                    protesterSprite.mz.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["W" /* PROTESTER_MODE_FOLLOW */], { slot: slot });
                }
                // protesterSprite.mz.setMode(PROTESTER_MODE_WANDER);
            }
        }
    }, {
        key: 'launchSWAT',
        value: function launchSWAT() {
            if (!this.mz.showedAdvice.omon) {
                this.mz.showedAdvice.omon = true;
                this.mz.advices.omon = this.mz.tweet.tweet('Будьте осторожны, ОМОН передвигается быстро и хватает всех без разбору.', 'help', { visible: 5000, fadeIn: 500, fadeOut: 500 });
            }

            this.mz.timers.swat.stop(true);

            this.mz.objects.audio.boo.play();

            var direction = this.game.rnd.between(0, 1) === 0 ? 'ltor' : 'rtol';

            var start = {
                x: direction === 'ltor' ? -100 : this.game.world.width + 100,
                y: this.getRandomCoordinateY()
            };

            var targets = [];

            if (this.mz.objects.star && this.mz.objects.star.sprite.alive) {
                var _mz$objects$star$spri = this.mz.objects.star.sprite.body.center,
                    x = _mz$objects$star$spri.x,
                    y = _mz$objects$star$spri.y;

                targets.push({ x: x, y: y });
            }

            targets.push({
                x: direction === 'ltor' ? this.game.world.width + 100 : -100,
                y: this.getRandomCoordinateY()
            });

            this.mz.objects.swat.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["_3" /* SWAT_MODE_HUNT */], { start: start, targets: targets });
        }
    }, {
        key: 'launchShield',
        value: function launchShield() {
            this.mz.objects.shield.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["_0" /* SHIELD_MODE_DRIVE */], {
                y: this.game.height / 2 + this.game.camera.y
            });
        }
    }, {
        key: 'checkWin',
        value: function checkWin() {
            if (this.mz.protesters.alive <= 0) {
                this.endGame(__WEBPACK_IMPORTED_MODULE_20__constants_js__["h" /* END_GAME_PROTEST_RATE */]);
            } else if (this.mz.score >= this.mz.limitScore) {
                this.endGame(__WEBPACK_IMPORTED_MODULE_20__constants_js__["j" /* END_GAME_WIN */]);
            } else if (this.mz.objects.player.mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["V" /* PROTESTER_MODE_ARRESTED */] || !this.mz.objects.player.sprite.alive) {
                this.endGame(__WEBPACK_IMPORTED_MODULE_20__constants_js__["g" /* END_GAME_PLAYER_KILLED */]);
            }
        }
    }, {
        key: 'endGame',
        value: function endGame(mode) {
            var _this4 = this;

            this.mz.gameEnded = true;

            this.game.camera.unfollow();
            this.mz.objects.interface.kill();
            // this.mz.objects.timer.stop();
            this.mz.events.fieldClickHandler.kill();

            // pause
            this.game.onPause.removeAll();
            this.game.onResume.removeAll();

            // player
            this.mz.objects.player.freeze();

            this.game.input.keyboard.removeKey(Phaser.Keyboard.ESC);
            this.game.input.onDown.remove(this.handleUnpause, this);

            if (mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["j" /* END_GAME_WIN */]) {
                this.mz.objects.audio.applause.play('', 0, 0.25);
                this.mz.arrays.protesters.forEach(function (sprite) {
                    sprite.mz.moodUp(1);
                });
                Object(__WEBPACK_IMPORTED_MODULE_15__modal___["a" /* default */])('success', this.mz.timers.gameTime.seconds, function () {
                    _this4.mz.objects.audio.theme.stop();
                    _this4.mz.objects.audio.meeting.stop();
                    // this.mz.objects.audio.song.stop();
                    _this4.game.state.start('Game', true, false, __WEBPACK_IMPORTED_MODULE_16__levels__["a" /* default */]['level1']);
                });
            } else {

                this.mz.objects.audio.boo.play();
                switch (mode) {
                    case __WEBPACK_IMPORTED_MODULE_20__constants_js__["h" /* END_GAME_PROTEST_RATE */]:
                        {
                            // this.launchShield();
                            Object(__WEBPACK_IMPORTED_MODULE_15__modal___["a" /* default */])('desolation', 0, function () {
                                _this4.mz.objects.audio.theme.stop();
                                _this4.mz.objects.audio.meeting.stop();
                                // this.mz.objects.audio.song.stop();
                                _this4.game.state.start('Game', true, false, __WEBPACK_IMPORTED_MODULE_16__levels__["a" /* default */]['level1']);
                            });
                            break;
                        }
                    case __WEBPACK_IMPORTED_MODULE_20__constants_js__["g" /* END_GAME_PLAYER_KILLED */]:
                        {
                            Object(__WEBPACK_IMPORTED_MODULE_15__modal___["a" /* default */])('arrested', 0, function () {
                                _this4.mz.objects.audio.theme.stop();
                                _this4.mz.objects.audio.meeting.stop();
                                // this.mz.objects.audio.song.stop();
                                _this4.game.state.start('Game', true, false, __WEBPACK_IMPORTED_MODULE_16__levels__["a" /* default */]['level1']);
                            });
                            break;
                        }
                }
            }
        }
    }, {
        key: 'playRandomSound',
        value: function playRandomSound() {
            if (this.game.rnd.between(0, 600 * (1 / this.mz.objects.audio.random.length)) === 0) {
                this.game.rnd.pick(this.mz.objects.audio.random).play('', 0, 0.25);
            }
        }
    }, {
        key: 'playRandomPunch',
        value: function playRandomPunch() {
            this.game.rnd.pick(this.mz.objects.audio.audioPunch).play('', 0, 0.25);
        }
    }, {
        key: 'getDistanceSq',
        value: function getDistanceSq(obj1, obj2) {
            return this.game.math.distanceSq(obj1.x, obj1.y, obj2.x, obj2.y);
        }
    }, {
        key: 'checkContainWagon',
        value: function checkContainWagon(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;
            var extraDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;

            if (this.mz.levelObjects.paddyWagon) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = this.mz.levelObjects.paddyWagon[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var w = _step3.value;

                        var startX = w.body.x - extraDistance;
                        var endX = w.body.x + w.body.width + extraDistance;
                        var startY = w.body.y - extraDistance;
                        var endY = w.body.y + w.body.height + extraDistance;
                        if (x > startX && x < endX && y > startY && y < endY) return true;
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            }
            return false;
        }
    }, {
        key: 'getRandomCoordinates',
        value: function getRandomCoordinates() {
            var coords = {
                x: this.getRandomCoordinateX(),
                y: this.getRandomCoordinateY()
            };

            while (this.checkContainWagon(coords)) {
                coords = {
                    x: this.getRandomCoordinateX(),
                    y: this.getRandomCoordinateY()
                };
            }
            return coords;
        }
    }, {
        key: 'getRandomCoordinateX',
        value: function getRandomCoordinateX() {
            return this.game.math.clamp(this.game.world.randomX, __WEBPACK_IMPORTED_MODULE_20__constants_js__["k" /* FIELD_OFFSET */].left, this.game.world.width - __WEBPACK_IMPORTED_MODULE_20__constants_js__["k" /* FIELD_OFFSET */].right);
        }
    }, {
        key: 'getRandomCoordinateY',
        value: function getRandomCoordinateY() {
            return this.game.math.clamp(this.game.world.randomY, __WEBPACK_IMPORTED_MODULE_20__constants_js__["k" /* FIELD_OFFSET */].top, this.game.world.height - __WEBPACK_IMPORTED_MODULE_20__constants_js__["k" /* FIELD_OFFSET */].bottom);
        }
    }, {
        key: 'screenAttack',
        value: function screenAttack() {
            var awaitStop = 5000;
            var alphaStops = 49;
            var alphaStep = awaitStop / (alphaStops + 1);
            var spriteHeight = 1035;
            var spriteWidth = 1035;
            if (this.mz.screenAttacked) {
                this.mz.timers.screen.stop();
                this.mz.timers.screen.removeAll();
                this.mz.timers.screen.add(awaitStop, this.screenAttackStop, this);

                this.mz.timers.screen.start();
            } else {
                this.mz.screenAttacked = true;
                this.mz.objects.screenAttack = this.game.add.graphics(0, 0);
                this.mz.objects.screenAttack.clear().beginFill(0x67c079, 0.95).moveTo(0, 0).arc(this.mz.objects.player.sprite.x, this.mz.objects.player.sprite.y, 50, 0, Math.PI * 2).lineTo(0, 0).lineTo(0, this.game.world.height).lineTo(this.game.world.width, this.game.world.height).lineTo(this.game.world.width, 0).lineTo(0, 0).endFill();

                this.mz.timers.screen.add(awaitStop, this.screenAttackStop, this);

                this.mz.timers.screen.start();
            }
        }
    }, {
        key: 'screenAttackStop',
        value: function screenAttackStop() {
            this.mz.objects.screenAttack.destroy();
            this.mz.objects.screenAttack = null;
            this.mz.screenAttacked = false;
        }
    }, {
        key: 'screenAttackAlpha',
        value: function screenAttackAlpha() {
            console.log('attack alpha');
            this.mz.objects.screenAttack.alpha -= 0.005;
        }
    }, {
        key: 'createLevelObject',
        value: function createLevelObject(sprite) {
            var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                personalMatrix = _ref3.personalMatrix;

            this.collider.addEntity({ sprite: sprite, object: { sprite: sprite }, personalMatrix: personalMatrix });
            return game;
        }
    }, {
        key: 'createPrefab',
        value: function createPrefab(constructor, options) {
            var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                personalMatrix = _ref4.personalMatrix;

            var moveTo = this.collider.moveToFactory();
            var defaults = { game: this.game, GameObject: this, moveTo: moveTo };
            var game = new constructor(_extends({}, defaults, options));
            this.collider.addEntity({ sprite: game.sprite, object: game, personalMatrix: personalMatrix });
            return game;
        }
    }, {
        key: 'cameraZoom',
        value: function cameraZoom(zoom, duration) {
            game.camera.scale.x += zoomAmount;
            game.camera.scale.y += zoomAmount;

            game.camera.bounds.x = size.x * game.camera.scale.x;
            game.camera.bounds.y = size.y * game.camera.scale.y;
            game.camera.bounds.width = size.width * game.camera.scale.x;
            game.camera.bounds.height = size.height * game.camera.scale.y;
            // this.game.world.resize(this.game.world.width+10, this.game.world.height+10);
        }
    }, {
        key: 'fightLose',
        value: function fightLose() {
            var _this5 = this;

            var _loop = function _loop(_i13) {
                var copSprite = _this5.mz.arrays.cops[_i13];
                var cop = copSprite.mz;
                if (cop.mode === __WEBPACK_IMPORTED_MODULE_22__constants__["c" /* COP_MODE_FIGHT */]) {
                    var closestCarCoords = null;
                    var minDistanceSq = Infinity;
                    _this5.mz.arrays.wagons.forEach(function (carSprite) {
                        var carCoords = {
                            x: carSprite.body.x + carSprite.body.width / 2 + carSprite.entagleX,
                            y: carSprite.body.y + carSprite.body.height + carSprite.entagleY
                        };
                        var distanceToCarSq = _this5.getDistanceSq(copSprite, carCoords);
                        if (distanceToCarSq < minDistanceSq) {
                            closestCarCoords = carCoords;
                            minDistanceSq = distanceToCarSq;
                        }
                    });

                    copSprite.mz.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["a" /* COP_MODE_CONVOY */], { jailCoords: closestCarCoords });
                }
            };

            for (var _i13 = 0; _i13 < this.mz.cops.alive; _i13++) {
                _loop(_i13);
            }
        }
    }, {
        key: 'increaseScore',
        value: function increaseScore(points, sprite) {
            this.mz.score += points;
            if (sprite) {
                this.playPoints(sprite, points);
            }
            var takens = __WEBPACK_IMPORTED_MODULE_0__objects_Player_js__["a" /* default */].instance.slots.getTakens();
            if (takens.length) {
                this.mz.score += takens.length;
                for (var _i14 = 0; _i14 < takens.length; _i14++) {
                    if (takens[_i14].sprite) {
                        this.playPoints(takens[_i14].sprite, 1);
                    }
                }
            }
            // this.updateScore();
        }
    }, {
        key: 'fightWin',
        value: function fightWin() {
            for (var _i15 = 0; _i15 < this.mz.cops.alive; _i15++) {
                var _copSprite = this.mz.arrays.cops[_i15];
                var cop = _copSprite.mz;
                if (cop.mode === __WEBPACK_IMPORTED_MODULE_22__constants__["c" /* COP_MODE_FIGHT */]) {
                    this.unarrest(_copSprite);
                    cop.setMode(__WEBPACK_IMPORTED_MODULE_22__constants__["e" /* COP_MODE_STUN */]);
                    this.increaseScore(10, _copSprite);
                }
            }
            if (Math.random() < 0.3) {
                this.mz.tweet.rTweet({ type: 'defended' }, { visible: 5000, fadeIn: 500, fadeOut: 500 });
            }
        }
    }, {
        key: 'handleEnterWagon',
        value: function handleEnterWagon(wagon, x, y) {
            this.game.physics.arcade.moveToXY(wagon, x, y, 60);
            this.mz.arrays.enterWagons.push({ wagon: wagon, x: x, y: y });
            this.mz.arrays.awaitWagons.splice(this.mz.arrays.awaitWagons.findIndex(function (x) {
                return x === wagon;
            }), 1);
        }
    }, {
        key: 'handleGotPlaceWagon',
        value: function handleGotPlaceWagon(wagon) {
            this.mz.arrays.wagons.push(wagon);
            wagon.body.stop();
        }
    }, {
        key: 'handleEnteringWagons',
        value: function handleEnteringWagons() {
            for (var _i16 = 0; _i16 < this.mz.arrays.enterWagons.length; _i16++) {
                var w = this.mz.arrays.enterWagons[_i16];
                if (w) {
                    var diff = Math.sqrt(Math.pow(w.wagon.x - w.x, 2) + Math.pow(w.wagon.y - w.y, 2));
                    if (diff < 10) {
                        this.handleGotPlaceWagon(w.wagon);
                        this.mz.arrays.enterWagons.splice(_i16, 1);
                        _i16--;
                    }
                }
            }
        }
    }, {
        key: 'handleLeaveWagon',
        value: function handleLeaveWagon(wagon, x, y) {
            var _this6 = this;

            for (var _i17 = 0; _i17 < this.mz.arrays.wagons.length; _i17++) {
                var w = this.mz.arrays.wagons[_i17];
                if (w === wagon) {
                    this.mz.arrays.wagons.splice(_i17, 1);
                    this.game.physics.arcade.moveToXY(wagon, x, y, 60);
                    this.mz.arrays.leftWagons.push(wagon);
                    break;
                }
            }
            for (var _i18 = 0; _i18 < this.mz.levelObjects.paddyWagon.length; _i18++) {
                var _w = this.mz.levelObjects.paddyWagon[_i18];
                if (_w === wagon) {
                    this.mz.levelObjects.paddyWagon.splice(_i18, 1);
                    break;
                }
            }

            var _loop2 = function _loop2(cop) {
                if (cop.alive && cop.mz.mode === __WEBPACK_IMPORTED_MODULE_20__constants_js__["a" /* COP_MODE_CONVOY */]) {
                    var closestCarCoords = null;
                    var minDistanceSq = Infinity;
                    _this6.mz.arrays.wagons.forEach(function (carSprite) {
                        var carCoords = {
                            x: carSprite.body.x + carSprite.body.width / 2 + carSprite.entagleX,
                            y: carSprite.body.y + carSprite.body.height + carSprite.entagleY
                        };
                        var distanceToCarSq = _this6.getDistanceSq(cop, carCoords);
                        if (distanceToCarSq < minDistanceSq) {
                            closestCarCoords = carCoords;
                            minDistanceSq = distanceToCarSq;
                        }
                    });
                    cop.mz.setMode(__WEBPACK_IMPORTED_MODULE_20__constants_js__["a" /* COP_MODE_CONVOY */], { jailCoords: closestCarCoords });
                }
            };

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.mz.arrays.cops[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var cop = _step4.value;

                    _loop2(cop);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }, {
        key: 'handleLeavingWagons',
        value: function handleLeavingWagons() {
            for (var _i19 = 0; _i19 < this.mz.arrays.leftWagons.length; _i19++) {
                var w = this.mz.arrays.leftWagons[_i19];
                if (w && (w.y + w.height < 0 || w.x + w.width < 0 || w.y - w.height > this.game.world.height || w.x - w.width > this.game.world.width)) {
                    this.mz.arrays.leftWagons.splice(_i19, 1);
                    this.collider.removeEntityBySprite(w);
                    w.destroy();
                    break;
                }
            }
        }
    }, {
        key: 'pickRandomWagon',
        value: function pickRandomWagon() {
            return this.mz.arrays.wagons.length ? this.mz.arrays.wagons[Math.floor(Math.random() * this.mz.arrays.wagons.length)] : null;
        }
    }, {
        key: 'createStar',
        value: function createStar() {
            this.mz.objects.star = this.createPrefab(__WEBPACK_IMPORTED_MODULE_4__objects_Star_js__["a" /* default */], {});
            this.mz.objects.star.setState(__WEBPACK_IMPORTED_MODULE_4__objects_Star_js__["a" /* default */].STATE.MOVE_IN);
        }
    }, {
        key: 'createLevelObjects',
        value: function createLevelObjects() {
            var _this7 = this;

            var _loop3 = function _loop3(key) {
                var _levelObjects$key = __WEBPACK_IMPORTED_MODULE_19__levelObjects_js__["a" /* default */][key],
                    speed = _levelObjects$key.speed,
                    personalMatrix = _levelObjects$key.personalMatrix,
                    sprite = _levelObjects$key.sprite,
                    positions = _levelObjects$key.positions,
                    objectClass = _levelObjects$key.objectClass,
                    immovable = _levelObjects$key.immovable,
                    group = _levelObjects$key.group,
                    extras = _objectWithoutProperties(_levelObjects$key, ['speed', 'personalMatrix', 'sprite', 'positions', 'objectClass', 'immovable', 'group']);

                if (!_this7.mz.levelObjects[key]) {
                    _this7.mz.levelObjects[key] = [];
                }
                _this7.mz.levelObjects[key] = _this7.mz.levelObjects[key].concat(positions.filter(function (x) {
                    return !x.done && x.score <= _this7.mz.score;
                }).map(function (obj, i) {
                    var startX = obj.startX,
                        startY = obj.startY,
                        moveX = obj.moveX,
                        moveY = obj.moveY,
                        angle = obj.angle,
                        entagleX = obj.entagleX,
                        entagleY = obj.entagleY;

                    var levelObject = _this7.game.add.sprite(startX, startY, sprite, 0);
                    levelObject.entagleX = entagleX;
                    levelObject.entagleY = entagleY;
                    levelObject.spriteName = sprite + i;
                    levelObject.anchor.setTo(0.5);
                    if (angle) {
                        levelObject.angle = angle;
                    }
                    _this7.game.physics.arcade.enable(levelObject);
                    if (angle === 90 || angle === -90) {
                        // levelObject.anchor.setTo(1, 0);
                        levelObject.body.setSize(levelObject.height, levelObject.width, levelObject.width / 2 - levelObject.height / 2, levelObject.height / 2 - levelObject.width / 2);
                    }
                    // else
                    // {
                    //     levelObject.body.setSize(levelObject.width, levelObject.height, -levelObject.width/2, -levelObjects.height/2);
                    // }
                    _this7.mz.groups[group].add(levelObject);

                    if (immovable) {
                        levelObject.body.immovable = true;
                    }
                    _this7.collider.addEntity({ sprite: levelObject, object: _this7.game, obstacle: true });
                    if (key === 'paddyWagon') {
                        _this7.mz.groups.cars.add(levelObject);
                        _this7.mz.arrays.awaitWagons.push(levelObject);
                        _this7.handleEnterWagon(levelObject, moveX, moveY);
                    }
                    obj.done = true;
                    return levelObject;
                }));
            };

            for (var key in __WEBPACK_IMPORTED_MODULE_19__levelObjects_js__["a" /* default */]) {
                _loop3(key);
            }
        }
    }, {
        key: 'playPoints',
        value: function playPoints(sprite, points) {
            var spritePoint = this.game.add.sprite(sprite.x, sprite.y - 10, 'points_' + points);
            spritePoint.scale.setTo(0.5);
            spritePoint.anchor.set(0.5);
            var tween = game.add.tween(spritePoint);
            tween.to({ y: sprite.y - 200, alpha: 0.7 }, 1500, Phaser.Easing.Default, true);
            tween.onComplete.add(function () {
                spritePoint.destroy();
            });
        }
    }, {
        key: 'updateGarbage',
        value: function updateGarbage() {
            var garbageLevel = Math.floor(this.mz.score / 100);
            if (this.mz.garbageLevel < garbageLevel) {
                this.mz.garbageLevel = garbageLevel;
                if (this.mz.objects['garbage_0' + this.mz.garbageLevel]) this.mz.objects['garbage_0' + this.mz.garbageLevel].visible = true;
            }
        }
    }, {
        key: 'updateCircle',
        value: function updateCircle() {
            var _this8 = this;

            var circles = this.mz.arrays.press.map(function (x) {
                return { sprite: x, color: 0xf7c169, circle: _this8.mz.circles.press, key: 'press' };
            }).concat(this.mz.arrays.protesters.map(function (x) {
                return { sprite: x, color: 0x6eed83, circle: _this8.mz.circles.npc, key: 'npc' };
            })).concat(this.mz.arrays.cops.map(function (x) {
                return { sprite: x, color: 0x2b3992, circle: _this8.mz.circles.cop, key: 'cop' };
            })).filter(function (x) {
                return !x.sprite.inCamera && x.sprite.visible;
            });
            var cameraBounds = new Phaser.Rectangle(this.game.camera.view.x + 10, this.game.camera.view.y + 10, this.game.camera.view.width - 20, this.game.camera.height - 20);
            var c = { x: cameraBounds.centerX, y: cameraBounds.centerY };
            var lines = {
                top: [{ x: cameraBounds.x, y: cameraBounds.y }, { x: cameraBounds.x + cameraBounds.width, y: cameraBounds.y }],
                right: [{ x: cameraBounds.x + cameraBounds.width, y: cameraBounds.y }, { x: cameraBounds.x + cameraBounds.width, y: cameraBounds.y + cameraBounds.height }],
                bottom: [{ x: cameraBounds.x, y: cameraBounds.y + cameraBounds.height }, { x: cameraBounds.x + cameraBounds.width, y: cameraBounds.y + cameraBounds.height }],
                left: [{ x: cameraBounds.x, y: cameraBounds.y }, { x: cameraBounds.x, y: cameraBounds.y + cameraBounds.height }]
            };
            // this.circleGraphic.clear();
            for (var _i20 = 0; _i20 < circles.length; _i20++) {
                var _circles$_i = circles[_i20],
                    _sprite = _circles$_i.sprite,
                    color = _circles$_i.color,
                    circle = _circles$_i.circle,
                    key = _circles$_i.key;


                if (_sprite.alive && !this.game.camera.view.contains(_sprite.x, _sprite.y)) {
                    var positions = [];
                    if (cameraBounds.x < _sprite.x) positions.push('right');else positions.push('left');
                    if (cameraBounds.y < _sprite.y) positions.push('bottom');else positions.push('top');

                    var mainLine = [{ x: _sprite.x, y: _sprite.y }, c];
                    var interPoint = null;
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = positions[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var p = _step5.value;

                            var line = lines[p];
                            var shouldBePoint = Object(__WEBPACK_IMPORTED_MODULE_21__utils_js__["b" /* lineIntersection */])(line, mainLine);
                            // console.log(shouldBePoint, line, mainLine, sprite);
                            if (this.game.camera.view.contains(shouldBePoint.x, shouldBePoint.y)) {
                                interPoint = shouldBePoint;
                                break;
                            }
                        }

                        // console.log('intersection point', interPoint);
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }

                    this.circlePool.add(key, circle, interPoint.x, interPoint.y);
                    // this.circleGraphic.beginFill(color, 0.7).drawCircle(interPoint.x, interPoint.y, 20).endFill()
                    // Phaser.Line.intersectionWithRectangle(line, cameraBounds, intersectionPoint);
                    // console.log(intersectionPoint, sprite);
                }
            }
            this.circlePool.reset();
        }

        // updateTheme(){
        //     if (this.mz.musicStage !== 'prefinal' && this.mz.score > 250)
        //     {
        //         this.mz.musicStage = 'prefinal';
        //         // this.mz.objects.audio.meeting.fadeOut(10000);
        //         // this.mz.objects.audio.theme.fadeOut(10000);
        //         this.GameObject.mz.objects.audio.song.loopFull(0.01);
        //         this.game.add.tween(this.mz.objects.audio.song).to({volume:0.15}, 5000).start();
        //     }
        // }

    }]);

    return Game;
}();

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slot = function () {
    function Slot(target, directionObject, _ref) {
        var x = _ref.x,
            y = _ref.y;

        _classCallCheck(this, Slot);

        this.target = target;
        this.directionObject = directionObject;
        this.basePoint = new Phaser.Point(x, y);
        this.taken = null;
        this.callback = null;
        this.point = { x: target.x, y: target.y };
        // console.log('constructor slot', this);
        this.update();
    }

    _createClass(Slot, [{
        key: "update",
        value: function update() {
            var basePoint = this.basePoint,
                _target = this.target,
                x = _target.x,
                y = _target.y;

            this.point = Phaser.Point.rotate(new Phaser.Point(x + basePoint.x, y + basePoint.y), x, y, this.directionObject.direction, true);

            if (Number.isNaN(this.x) || Number.isNaN(this.y)) throw new Error("Slot mathematics error");
        }
    }, {
        key: "take",
        value: function take(protester) {
            this.update();
            this.taken = protester;
        }
    }, {
        key: "dismiss",
        value: function dismiss() {
            this.taken = null;
        }
    }, {
        key: "x",
        get: function get() {
            return this.point.x;
        }
    }, {
        key: "y",
        get: function get() {
            return this.point.y;
        }
    }, {
        key: "follow",
        get: function get() {
            return true;
        }
    }]);

    return Slot;
}();

/* harmony default export */ __webpack_exports__["a"] = (Slot);

/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Protester_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Player_js__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProgressBar__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tweets_ManuallyBehavior__ = __webpack_require__(98);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var NPCProtester = function (_Protester) {
    _inherits(NPCProtester, _Protester);

    function NPCProtester(_ref) {
        var _this;

        var group = _ref.group,
            mood = _ref.mood,
            moodDown = _ref.moodDown,
            moodUp = _ref.moodUp,
            dropPoster = _ref.dropPoster,
            onLeft = _ref.onLeft,
            prefabOptions = _objectWithoutProperties(_ref, ['group', 'mood', 'moodDown', 'moodUp', 'dropPoster', 'onLeft']);

        _classCallCheck(this, NPCProtester);

        var spriteKey = (_this = _possibleConstructorReturn(this, (NPCProtester.__proto__ || Object.getPrototypeOf(NPCProtester)).call(this, prefabOptions)), _this);

        _this.group = group;
        _this.group.add(_this.sprite);

        _this.progressBar = new __WEBPACK_IMPORTED_MODULE_2__ProgressBar__["a" /* default */]({
            radius: 5,
            width: 44,
            color: 0x6eed83,
            lineWidth: 0,
            game: _this.game
        });
        _this.sprite.addChild(_this.progressBar.graphics);

        _this.leavingTimer = _this.game.time.create(false);

        _this.mood = 1 || mood;
        _this.initialMood = mood;
        _this.moodUpValue = moodUp;
        _this.moodDownValue = moodDown;
        _this.shownPoster = false;

        _this.dropPoster = dropPoster;

        _this.isBeingCheeredUp = false;

        _this.onLeft = onLeft;

        _this.isFollower = true;
        _this.following = null;
        _this.isNOD = !_this.isFollower && Math.random() < 0.05;
        _this.isAgitator = false;
        _this.nodDone = false;
        _this.slot = null;
        _this.sprite.body.setSize(37, 37);

        /*
                const fpsAnimation = 3;
                this.viewSprite.animations.add('walk', [1, 2], fpsAnimation, true);
                this.viewSprite.animations.add('walkPoster', [4, 5], fpsAnimation, true);
        
        
                if (this.isNOD)
                {
                    this.changeViewSprite('humans/nod', 3);
                }
        */
        // initially dead
        _this.kill();
        return _this;
    }

    _createClass(NPCProtester, [{
        key: 'update',
        value: function update() {
            if (this.mood === 0 && !this.leavingTimer.running && this.mode === __WEBPACK_IMPORTED_MODULE_3__constants_js__["Z" /* PROTESTER_MODE_WANDER */]) {
                this.leavingTimer.add(this.game.rnd.between(1000, 5000), this.leave, this);
                this.leavingTimer.start();
            } else if (this.mood > 0 && this.leavingTimer.running) {
                this.leavingTimer.stop(true);
            }
            if (this.mood > 0 && this.mode === __WEBPACK_IMPORTED_MODULE_3__constants_js__["X" /* PROTESTER_MODE_LEAVE */] && !this.nodDone) {
                this.setMode(__WEBPACK_IMPORTED_MODULE_3__constants_js__["Z" /* PROTESTER_MODE_WANDER */]);
            }

            if (this.mode === __WEBPACK_IMPORTED_MODULE_3__constants_js__["Y" /* PROTESTER_MODE_NOD */] && this.nodDone) {
                this.setMode(__WEBPACK_IMPORTED_MODULE_3__constants_js__["X" /* PROTESTER_MODE_LEAVE */]);
            }

            if (this.isBeingCheeredUp) {
                if (this.isNOD) {
                    if (!this.nodDone && this.mode != __WEBPACK_IMPORTED_MODULE_3__constants_js__["Y" /* PROTESTER_MODE_NOD */]) this.setMode(__WEBPACK_IMPORTED_MODULE_3__constants_js__["Y" /* PROTESTER_MODE_NOD */]);
                } else {
                    if (this.mood >= 1) this.progressBar.update(0);else this.progressBar.update(this.mood);
                    this.moodUp(this.moodUpValue);
                }
            } else if (this.mood < 1) {
                this.moodDown(this.moodDownValue);
                this.progressBar.update(0);
            }

            this.showPoster = this.mode !== __WEBPACK_IMPORTED_MODULE_3__constants_js__["V" /* PROTESTER_MODE_ARRESTED */] && this.mood >= 1 && !this.isNOD;
            // if (this.isFollower)
            //     alert('ia am follower');
            if (this.showPoster && this.isFollower) {
                if (!this.following) {
                    var slot = __WEBPACK_IMPORTED_MODULE_1__Player_js__["a" /* default */].instance.slots.take(this);
                    if (slot) {
                        this.setMode(__WEBPACK_IMPORTED_MODULE_3__constants_js__["W" /* PROTESTER_MODE_FOLLOW */], { slot: slot });
                    }
                }
            }

            if (this.following && this.following.target === __WEBPACK_IMPORTED_MODULE_1__Player_js__["a" /* default */].instance.sprite) {
                this.showPoster = __WEBPACK_IMPORTED_MODULE_1__Player_js__["a" /* default */].instance.showPoster;
            }

            if (this.showPoster && !this.shownPoster) {
                this.shownPoster = true;
                this.GameObject.increaseScore(5, this.sprite);
                if (this.GameObject.mz.advices.agitate) {
                    this.GameObject.mz.advices.agitate.hide();
                    this.GameObject.mz.advices.agitate = null;
                    this.GameObject.mz.advices.press = this.GameObject.mz.tweet.tweet('Подойдите к журналисту и поднимите плакат в поле его видимости. Когда журналист закончит трансляцию - придут новые митингующие.', 'help', { behavior: __WEBPACK_IMPORTED_MODULE_4__Tweets_ManuallyBehavior__["a" /* default */] });
                }
            }

            //this.sprite.tint = 0xffffff;
            // if (this.mood >= 0.75) {
            //     const tintSaturation = (this.mood - 0.75) / (1 - 0.75) * 0.25;
            //     this.sprite.tint = Phaser.Color.RGBArrayToHex([
            //         1 - tintSaturation,
            //         1,
            //         1 - tintSaturation
            //     ]);
            // } else if (this.mood <= 0.25) {
            //     const tintSaturation = (1 - this.mood / 0.25) * 0.25;
            //     this.sprite.tint = Phaser.Color.RGBArrayToHex([
            //         1,
            //         1 - tintSaturation,
            //         1 - tintSaturation
            //     ]);
            // }

            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'update', this).call(this);
            this.updateAnimation();
        }
    }, {
        key: 'handleLeft',
        value: function handleLeft() {
            this.onLeft();
            this.kill();
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var _this2 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_3__constants_js__["Z" /* PROTESTER_MODE_WANDER */]:
                    {
                        this.setSpeed(this.speed.value);
                        // this.GameObject.mz.groups.d.add(this.sprite);

                        // clean up previous state
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_3__constants_js__["X" /* PROTESTER_MODE_LEAVE */]) {
                            this.moveTo(null);
                        }

                        var coords = props.coords,
                            _props$phasing = props.phasing,
                            phasing = _props$phasing === undefined ? false : _props$phasing;

                        if (coords) {
                            this.moveTo(coords, { callback: function callback() {
                                    return _this2.wander();
                                }, phasing: phasing });
                        } else {
                            this.wander();
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants_js__["W" /* PROTESTER_MODE_FOLLOW */]:
                    {

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_3__constants_js__["Z" /* PROTESTER_MODE_WANDER */]) {
                            this.stopWandering();
                        }
                        var slot = props.slot;

                        this.dismissSlotsTaken();
                        this.following = slot;
                        if (slot.target === __WEBPACK_IMPORTED_MODULE_1__Player_js__["a" /* default */].instance.sprite) {
                            this.setSpeed(this.speed.value * 1.5);
                            // this.GameObject.mz.groups.npcProtesters.add(this.sprite);
                            // alert('change group');
                            // console.log('sprite', this.sprite);
                        }
                        this.moveTo(slot, { follow: true });
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants_js__["V" /* PROTESTER_MODE_ARRESTED */]:
                    {
                        this.setSpeed(this.speed.value);
                        // clean up previous state
                        this.dismissSlotsTaken();
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_3__constants_js__["Z" /* PROTESTER_MODE_WANDER */]) {
                            this.stopWandering();
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants_js__["Y" /* PROTESTER_MODE_NOD */]:
                    {
                        if (!this.GameObject.mz.showedAdvice.nod) {
                            this.GameObject.mz.showedAdvice.nod = true;
                            this.GameObject.mz.advices.nod = this.GameObject.mz.tweet.tweet('Смотрите, чтобы вам не плеснули зеленкой в лицо', 'help', { visible: 5000, fadeIn: 500, fadeOut: 500 });
                        }
                        this.setSpeed(this.speed.value);
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_3__constants_js__["Z" /* PROTESTER_MODE_WANDER */]) {
                            this.stopWandering();
                        }
                        //   console.log(this.GameObject);
                        this.target = this.GameObject.mz.objects.player.sprite;
                        this.moveTo(this.GameObject.mz.objects.player.sprite, {
                            callback: function callback() {
                                _this2.nodDone = true;
                                _this2.GameObject.screenAttack();
                                _this2.target = null;
                                _this2.moveTo(null);
                            },
                            phasing: true
                        });
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants_js__["X" /* PROTESTER_MODE_LEAVE */]:
                    {
                        this.setSpeed(this.speed.value);
                        // clean up previous state
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_3__constants_js__["Z" /* PROTESTER_MODE_WANDER */]) {
                            this.stopWandering();
                        }

                        var x = this.sprite.x < this.game.world.width / 2 ? -100 : this.game.world.width + 100;
                        var y = this.sprite.y;

                        this.moveTo({ x: x, y: y }, { callback: function callback() {
                                return _this2.handleLeft();
                            }, phasing: true });
                        break;
                    }
            }

            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'setMode', this).call(this, mode, props);
        }
    }, {
        key: 'wander',
        value: function wander() {
            var _this3 = this;

            var nextAction = this.game.rnd.between(0, 10);
            if (nextAction === 0) {
                this.moveTo(this.getNextCoords(), { callback: function callback() {
                        return _this3.wander();
                    } });
            } else {
                this.stayingTimer.stop(true);
                this.stayingTimer.add(this.game.rnd.between(3000, 6000), this.wander, this);
                this.stayingTimer.start();
            }
        }
    }, {
        key: 'leave',
        value: function leave() {
            this.setMode(__WEBPACK_IMPORTED_MODULE_3__constants_js__["X" /* PROTESTER_MODE_LEAVE */]);
            this.leavingTimer.stop(true);
        }
    }, {
        key: 'toggleCheering',
        value: function toggleCheering() {
            var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.isBeingCheeredUp;

            if (on === this.isBeingCheeredUp) {
                return;
            }

            this.isBeingCheeredUp = on;
        }
    }, {
        key: 'moodUp',
        value: function moodUp(value) {
            this.mood = Math.min(this.mood + value, 1);
        }
    }, {
        key: 'moodDown',
        value: function moodDown(value) {
            this.mood = Math.max(this.mood - value, 0);
        }
    }, {
        key: 'revive',
        value: function revive(_ref2) {
            var x = _ref2.x,
                y = _ref2.y,
                nextCoords = _ref2.nextCoords,
                _ref2$mood = _ref2.mood,
                mood = _ref2$mood === undefined ? this.initialMood : _ref2$mood,
                isFirst = _ref2.isFirst;

            this.sprite.x = x;
            this.sprite.y = y;
            this.sprite.body.reset(x, y);

            if (isFirst) {
                this.isNOD = false;
                this.isFollower = true;
            }

            this.posterSprite.revive();

            this.mood = mood;

            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'revive', this).call(this);
            this.setMode(__WEBPACK_IMPORTED_MODULE_3__constants_js__["Z" /* PROTESTER_MODE_WANDER */], { coords: nextCoords, phasing: true });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.dismissSlotsTaken();
            this.isFollower = Math.random() < 0.05;
            this.isNOD = !this.isFollower && Math.random() < 0.03;
            this.isAgitator = !this.isFollower && !this.isNOD && Math.random() < 0.01;

            if (this.isNOD) {
                this.changeViewSprite('humans', 'nod', 3);
            } else {
                this.changeViewSprite('humans', 'npc_0' + (Math.floor(Math.random() * 8) + 1), 3);
            }

            this.nodDone = false;
            this.slot = null;
            this.shownPoster = false;
        }
    }, {
        key: 'changeViewSprite',
        value: function changeViewSprite(atlasKey, key, canWalk) {
            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'changeViewSprite', this).call(this, atlasKey, key, canWalk);

            //this.changeAnimations(key, canWalk);
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.group.add(this.sprite);
            this.stopWandering();
            this.reset();
            _get(NPCProtester.prototype.__proto__ || Object.getPrototypeOf(NPCProtester.prototype), 'kill', this).call(this);
        }
    }, {
        key: 'dismissSlotsTaken',
        value: function dismissSlotsTaken() {
            if (!this.following) return;
            this.following.dismiss();
            this.following = null;
        }
    }, {
        key: 'onSlotDismissing',
        value: function onSlotDismissing() {
            this.following = null;
            this.setMode(__WEBPACK_IMPORTED_MODULE_3__constants_js__["Z" /* PROTESTER_MODE_WANDER */]);
        }
    }]);

    return NPCProtester;
}(__WEBPACK_IMPORTED_MODULE_0__Protester_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (NPCProtester);

/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FOV_js__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Cop = function (_Prefab) {
    _inherits(Cop, _Prefab);

    function Cop(_ref) {
        var alive = _ref.alive,
            fov = _ref.fov,
            _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y,
            prefabOptions = _objectWithoutProperties(_ref, ['alive', 'fov', 'x', 'y']);

        _classCallCheck(this, Cop);

        var _this = _possibleConstructorReturn(this, (Cop.__proto__ || Object.getPrototypeOf(Cop)).call(this, _extends({ x: x, y: y }, prefabOptions)));
        //console.log(prefabOptions);


        _this.FOV = new __WEBPACK_IMPORTED_MODULE_1__FOV_js__["a" /* default */]({
            game: _this.game,
            radius: fov.distance,
            angle: fov.angle
        });
        fov.group.add(_this.FOV.graphics);

        _this.target = null;
        _this.attractionPoint = null;
        _this.attractionStrength = 0;
        _this.returnCoords = null;
        _this.lastDecisionTime = 0;

        _this.sprite.body.immovable = true;
        _this.sprite.body.setSize(37, 37);
        _this.stunTimer = _this.game.time.create(false);

        var fpsAnimation = 3;
        _this.viewSprite.animations.add('walk', ["cop-1", "cop-2"], fpsAnimation, true);
        _this.viewSprite.animations.add('stop', ["cop-0", "cop-0"], fpsAnimation, true);

        if (!alive) {
            _this.kill();
        }
        return _this;
    }

    _createClass(Cop, [{
        key: 'update',
        value: function update() {
            var newSpeed = this.speed.value;
            if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* COP_MODE_PURSUE */] || this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* COP_MODE_ENTER */]) {
                newSpeed *= this.speed.running;
            }
            if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* COP_MODE_CONVOY */]) newSpeed *= this.speed.convoy;
            this.setSpeed(newSpeed);

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'update', this).call(this);

            this.FOV.update({
                x: this.sprite.x,
                y: this.sprite.y,
                angle: this.sprite.body.angle,
                mode: this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* COP_MODE_PURSUE */] ? __WEBPACK_IMPORTED_MODULE_2__constants_js__["l" /* FOV_MODE_CAPTURE */] : __WEBPACK_IMPORTED_MODULE_2__constants_js__["m" /* FOV_MODE_NORMAL */]
            });

            this.updateAnimation();
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var _this2 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* COP_MODE_WANDER */]:
                    {
                        var coords = props.coords;
                        // clean up previous state

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* COP_MODE_PURSUE */]) {
                            this.target = null;
                        } else if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* COP_MODE_CONVOY */] || this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["c" /* COP_MODE_FIGHT */] || this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["e" /* COP_MODE_STUN */]) {
                            this.target = null;
                            this.returnCoords = null;
                            this.FOV.revive();
                        }
                        if (coords) {
                            this.moveTo(coords, { callback: function callback() {
                                    return _this2.wander();
                                }, superphasing: true });
                        } else {
                            this.wander();
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["d" /* COP_MODE_PURSUE */]:
                    {
                        var _target = props.target;
                        // clean up previous state

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* COP_MODE_WANDER */]) {
                            this.stopWandering();
                        }
                        this.target = _target;
                        this.moveTo(_target, { phasing: true });
                        if (!this.GameObject.mz.showedAdvice.shift) {
                            this.GameObject.mz.showedAdvice.shift = true;
                            if (Phaser.Device.desktop) {
                                this.GameObject.mz.tweet.tweet('Если вы зажмете SHIFT, вы сможете убегать от полиции, однако смотрите не выдохнитесь', 'help', { visible: 5000, fadeIn: 500, fadeOut: 500 });
                            } else {
                                this.GameObject.mz.tweet.tweet('если вы дважды быстро коснетесь экрана, вы сможете убегать от полиции, однако смотрите не выдохнитесь', 'help', { visible: 5000, fadeIn: 500, fadeOut: 500 });
                            }
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* COP_MODE_CONVOY */]:
                    {
                        if (!this.GameObject.mz.showedAdvice.arrest) {
                            this.GameObject.mz.showedAdvice.arrest = true;
                            this.GameObject.mz.tweet.tweet(Phaser.Device.desktop ? 'Чтобы помешать задержанию демонстранта, подойдите к нему и быстро жмите на пробел много раз подряд' : 'Чтобы помешать задержанию демонстранта, подойдите к нему и быстро жмите по экрану много раз подряд', 'help', { visible: 5000, fadeIn: 500, fadeOut: 500 });
                        }
                        var jailCoords = props.jailCoords;

                        this.FOV.kill();
                        this.returnCoords = { x: this.sprite.x, y: this.sprite.y };
                        this.moveTo(jailCoords, { callback: function callback() {
                                return _this2.handleCovoyEnd();
                            }, superphasing: true });
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* COP_MODE_ENTER */]:
                    {
                        var _coords = props.coords;


                        var callback = function callback() {
                            _this2.FOV.revive();
                            _this2.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* COP_MODE_WANDER */]);
                        };
                        this.moveTo(_coords, { callback: callback, reset: false, phasing: true });
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["c" /* COP_MODE_FIGHT */]:
                    {
                        this.stopWandering();
                        this.jailTarget = this.moveTargets;
                        // this.FOV.kill();
                        this.moveTo(null);
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["e" /* COP_MODE_STUN */]:
                    {
                        this.stopWandering();
                        this.stunTimer.stop();
                        this.stunTimer.removeAll();
                        if (this.stunTween) this.stunTween.stop();
                        this.stunTween = this.game.add.tween(this.viewSprite);
                        this.stunTween.to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 500, true);
                        this.stunTween.start();
                        this.stunTimer.add(5000, this.handleRecoverStun, this);
                        this.stunTimer.start();
                        break;
                    }
            }

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'setMode', this).call(this, mode);
        }
    }, {
        key: 'handleRecoverStun',
        value: function handleRecoverStun() {
            this.stunTimer.removeAll();
            this.stunTimer.stop();
            this.stunTween.stop();
            this.viewSprite.alpha = 1;
            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* COP_MODE_WANDER */]);
        }
    }, {
        key: 'handleCovoyEnd',
        value: function handleCovoyEnd() {
            for (var i = 0; i < this.sprite.children.length; i++) {
                if (this.sprite.getChildAt(i) !== this.viewSprite) this.sprite.getChildAt(i).mz.kill();
            }

            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["f" /* COP_MODE_WANDER */], { coords: this.returnCoords });
            // const tweets = this.GameObject.mz.tweet.find({type: 'arrest'});
            // const tweet = tweets[Math.floor(tweets.length * Math.random())];
            if (Math.random() < 0.3) this.GameObject.mz.tweet.rTweet({ type: 'arrest' }, { visible: 5000, fadeIn: 500, fadeOut: 500 });
        }
    }, {
        key: 'getArrestedSprite',
        value: function getArrestedSprite() {
            for (var i = 0; i < this.sprite.children.length; i++) {
                if (this.sprite.getChildAt(i) !== this.viewSprite) return this.sprite.getChildAt(i);
            }
            return null;
        }
    }, {
        key: 'handleFightWin',
        value: function handleFightWin() {}
    }, {
        key: 'wander',
        value: function wander() {
            var _this3 = this;

            var nextAction = this.attractionStrength > 0 ? 1 : this.game.rnd.between(0, 2);
            if (nextAction !== 0) {
                this.moveTo(this.getNextCoords(), { callback: function callback() {
                        return _this3.wander();
                    }, superphasing: true });
            } else {
                this.stayingTimer.stop(true);
                this.stayingTimer.add(this.game.rnd.between(1000, 3000), this.wander, this);
                this.stayingTimer.start();
            }
        }
    }, {
        key: 'getNextCoords',
        value: function getNextCoords() {
            var bounds = void 0;
            var rnd = this.game.rnd.frac();
            if (this.attractionStrength === 1 || this.attractionStrength > 0 && rnd <= this.attractionStrength) {
                bounds = {
                    top: Math.min(this.sprite.y, this.attractionPoint.y),
                    right: Math.max(this.sprite.x, this.attractionPoint.x),
                    bottom: Math.max(this.sprite.y, this.attractionPoint.y),
                    left: Math.min(this.sprite.x, this.attractionPoint.x)
                };
            }
            var coords = _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'getNextCoords', this).call(this, bounds);
            // console.log(coords);
            return coords;
        }
    }, {
        key: 'revive',
        value: function revive(rtl) {
            var offset = 100;
            var wagon = this.GameObject.pickRandomWagon();
            var x = Math.round(wagon.body.center.x) + wagon.entagleX;
            var y = wagon.y + wagon.body.height + wagon.entagleY;
            this.sprite.x = x;
            this.sprite.y = y;
            this.sprite.body.reset(x, y);
            this.sprite.body.enable = true;

            // const entranceX = this.game.rnd.between(1, Math.floor(this.game.world.width / 100) - 1) * 100;
            this.FOV.revive();

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'revive', this).call(this);
            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["b" /* COP_MODE_ENTER */], { coords: { x: x, y: y + 50 } });
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.target = null;

            this.stopWandering();
            this.FOV.kill();
            this.sprite.body.enable = false;

            _get(Cop.prototype.__proto__ || Object.getPrototypeOf(Cop.prototype), 'kill', this).call(this);
        }
    }]);

    return Cop;
}(__WEBPACK_IMPORTED_MODULE_0__Prefab_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Cop);

/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Prefab_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FOV_js__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ProgressBar__ = __webpack_require__(97);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Journalist = function (_Prefab) {
    _inherits(Journalist, _Prefab);

    function Journalist(_ref) {
        var _colors;

        var fov = _ref.fov,
            shootingDuration = _ref.shootingDuration,
            cooldownDuration = _ref.cooldownDuration,
            onFinishShooting = _ref.onFinishShooting,
            prefabOptions = _objectWithoutProperties(_ref, ['fov', 'shootingDuration', 'cooldownDuration', 'onFinishShooting']);

        _classCallCheck(this, Journalist);

        var spriteKey = Math.random() >= 0.5 ? 'press_01' : 'press_02';

        var _this = _possibleConstructorReturn(this, (Journalist.__proto__ || Object.getPrototypeOf(Journalist)).call(this, _extends({ spriteKey: spriteKey }, prefabOptions)));

        _this.FOV = new __WEBPACK_IMPORTED_MODULE_1__FOV_js__["a" /* default */]({
            game: _this.game,
            radius: fov.distance,
            angle: fov.angle,
            colors: (_colors = {}, _defineProperty(_colors, __WEBPACK_IMPORTED_MODULE_2__constants_js__["m" /* FOV_MODE_NORMAL */], 0xf7c169), _defineProperty(_colors, __WEBPACK_IMPORTED_MODULE_2__constants_js__["l" /* FOV_MODE_CAPTURE */], 0xf7c169), _colors)
        });
        fov.group.add(_this.FOV.graphics);

        _this.progressBar = new __WEBPACK_IMPORTED_MODULE_4__ProgressBar__["a" /* default */]({ game: _this.game, width: 44, radius: 5, color: 0xf7c169 });
        _this.sprite.addChild(_this.progressBar.graphics);

        _this.cooldownBar = new __WEBPACK_IMPORTED_MODULE_4__ProgressBar__["a" /* default */]({ game: _this.game, width: 44, radius: 5, color: 0xf0526f });
        _this.sprite.addChild(_this.cooldownBar.graphics);

        // this.sprite.addChild(this.progressBar);
        _this.sprite.body.setSize(37, 37);

        _this.shootingTimer = _this.game.time.create(false);
        _this.shootingDuration = shootingDuration * 1000;

        _this.cooldownTimer = _this.game.time.create(false);
        _this.cooldownDuration = cooldownDuration * 1000;

        _this.onFinishShooting = onFinishShooting;

        _this.target = null;
        _this.following = null;
        //this.viewSprite.animations.add('walk', [1, 2], 3, true);
        _this.changeAnimations(spriteKey, 3);
        return _this;
    }

    _createClass(Journalist, [{
        key: 'update',
        value: function update() {
            if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["O" /* JOURNALIST_MODE_SHOOTING */]) {
                this.turnTo(this.target);
            }
            if (this.shootingTimer.running) {
                this.updateProgressBar(this.shootingTimer.ms / this.shootingDuration);
            } else if (this.cooldownTimer.running) {
                this.updateCooldownBar(this.cooldownTimer.ms / this.cooldownDuration);
            } else {
                this.updateProgressBar(0);
            }

            this.FOV.update({
                x: this.sprite.x,
                y: this.sprite.y,
                angle: this.sprite.body.angle,
                mode: this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["O" /* JOURNALIST_MODE_SHOOTING */] ? __WEBPACK_IMPORTED_MODULE_2__constants_js__["l" /* FOV_MODE_CAPTURE */] : __WEBPACK_IMPORTED_MODULE_2__constants_js__["m" /* FOV_MODE_NORMAL */],
                tween: true
            });
            this.updateAnimation();
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["P" /* JOURNALIST_MODE_WANDER */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["O" /* JOURNALIST_MODE_SHOOTING */]) {
                            this.target = null;
                            this.shootingTimer.stop(true);
                        }
                        this.wander();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["O" /* JOURNALIST_MODE_SHOOTING */]:
                    {
                        var _target = props.target;

                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["O" /* JOURNALIST_MODE_SHOOTING */] && this.target === _target) {
                            break;
                        } else if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["P" /* JOURNALIST_MODE_WANDER */]) {
                            this.stopWandering();
                        }
                        this.target = _target;

                        this.shootingTimer.add(this.shootingDuration, this.shootingTimerCallback, this);
                        this.shootingTimer.start();

                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_2__constants_js__["N" /* JOURNALIST_MODE_FOLLOW */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["P" /* JOURNALIST_MODE_WANDER */]) {
                            this.stopWandering();
                        }

                        var slot = props.slot;

                        this.following = slot;
                        this.moveTo(slot, { follow: true });
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants__["M" /* JOURNALIST_MODE_ARRESTED */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__constants_js__["P" /* JOURNALIST_MODE_WANDER */]) {
                            this.stopWandering();
                            this.target = null;
                        }
                        this.moveTo(null);
                        var x = props.x,
                            y = props.y;

                        this.sprite.x = x;
                        this.sprite.y = y;
                        this.GameObject.mz.tweet.rTweet({ type: 'journalist_arrest' }, { visible: 5000, fadeIn: 500, fadeOut: 500 });
                    }
            }

            _get(Journalist.prototype.__proto__ || Object.getPrototypeOf(Journalist.prototype), 'setMode', this).call(this, mode);
        }
    }, {
        key: 'wander',
        value: function wander() {
            var _this2 = this;

            var nextAction = this.game.rnd.between(0, 2);
            if (nextAction !== 0) {
                this.moveTo(this.getNextCoords(), { callback: function callback() {
                        return _this2.wander();
                    }, superphasing: true });
            } else {
                this.stayingTimer.stop(true);
                this.stayingTimer.add(this.game.rnd.between(1000, 3000), this.wander, this);
                this.stayingTimer.start();
            }
        }
    }, {
        key: 'turnTo',
        value: function turnTo(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            this.sprite.body.angle = this.game.math.angleBetweenPoints(this.sprite, { x: x, y: y });
            this.viewSprite.rotation = this.sprite.body.angle - Math.PI / 2;
        }
    }, {
        key: 'shootingTimerCallback',
        value: function shootingTimerCallback() {
            if (this.GameObject.mz.advices.press) {
                this.GameObject.mz.advices.press.hide();
                this.GameObject.mz.advices.press = null;
            }
            this.onFinishShooting(this);

            this.FOV.kill();

            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["P" /* JOURNALIST_MODE_WANDER */]);

            this.shootingTimer.stop(true);
            this.cooldownTimer.add(this.cooldownDuration, this.cooldownTimerCallback, this);
            this.cooldownTimer.start();
        }
    }, {
        key: 'cooldownTimerCallback',
        value: function cooldownTimerCallback() {
            this.FOV.revive();
            this.cooldownTimer.stop(true);
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.cooldownTimer.stop(true);
            this.shootingTimer.stop(true);
            this.stopWandering();
            this.FOV.kill();

            _get(Journalist.prototype.__proto__ || Object.getPrototypeOf(Journalist.prototype), 'kill', this).call(this);
        }
    }, {
        key: 'hideProgressBars',
        value: function hideProgressBars() {
            this.progressBar.update(0);
            this.cooldownBar.update(0);
        }
    }, {
        key: 'updateProgressBar',
        value: function updateProgressBar(percent) {
            this.cooldownBar.update(0);
            this.progressBar.update(percent);
        }
    }, {
        key: 'updateCooldownBar',
        value: function updateCooldownBar(percent) {
            this.progressBar.update(0);
            this.cooldownBar.update(percent);
        }
    }, {
        key: 'revive',
        value: function revive(_ref3) {
            var x = _ref3.x,
                y = _ref3.y;

            this.sprite.x = x;
            this.sprite.y = y;
            this.sprite.body.reset(x, y);

            _get(Journalist.prototype.__proto__ || Object.getPrototypeOf(Journalist.prototype), 'revive', this).call(this);
            this.setMode(__WEBPACK_IMPORTED_MODULE_2__constants_js__["P" /* JOURNALIST_MODE_WANDER */]);
        }
    }]);

    return Journalist;
}(__WEBPACK_IMPORTED_MODULE_0__Prefab_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Journalist);

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Star_js__ = __webpack_require__(148);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var SQUAD_DENSITY = 35;
var SQUAD_DISCIPLINE = 0.4;
var TURN_FREQUENCY = 30;

var SWATSquad = function () {
    // TODO: prefab???? ? ?
    function SWATSquad(_ref) {
        var game = _ref.game,
            gameObject = _ref.gameObject,
            count = _ref.count,
            speed = _ref.speed,
            group = _ref.group;

        _classCallCheck(this, SWATSquad);

        this.game = game;
        this.gameObject = gameObject;

        this.speed = _extends({
            current: speed.value
        }, speed);

        this.mode = __WEBPACK_IMPORTED_MODULE_0__constants_js__["_2" /* SWAT_MODE_HIDE */];
        this.moveTarget = null;
        this.updateIndex = 0;

        this.sprites = [];
        for (var i = 0; i < count; i++) {
            var swatSprite = this.game.add.sprite(-100, -100, 'humans', 'omon-0');
            swatSprite.anchor.set(0.5);
            swatSprite.visible = false;
            swatSprite.mz = this;

            this.game.physics.arcade.enable(swatSprite);

            this.sprites.push(swatSprite);
            group.add(swatSprite);
            var fpsAnimation = 5;
            swatSprite.animations.add('walk', ['omon-1', 'omon-2'], fpsAnimation, true);
            swatSprite.animations.play('walk');
        }
    }

    _createClass(SWATSquad, [{
        key: 'update',
        value: function update() {
            if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["_3" /* SWAT_MODE_HUNT */]) {
                var lastSprite = this.sprites[this.sprites.length - 1];
                var firstSprite = this.sprites[0];

                if (this.game.math.fuzzyEqual(this.game.math.distanceSq(firstSprite.x, firstSprite.y, this.moveTargets[0].x, this.moveTargets[0].y), 0, 50)) {
                    this.moveTargets[0].callback && this.moveTargets[0].callback();
                    this.moveTargets.shift();
                    this.moveTargets.length === 0 ? this.setMode(__WEBPACK_IMPORTED_MODULE_0__constants_js__["_2" /* SWAT_MODE_HIDE */]) : this.update();
                } else {
                    var _moveTargets = _toArray(this.moveTargets),
                        moveTarget = _moveTargets[0],
                        rest = _moveTargets.slice(1);
                    // change direction once in a while


                    if (this.updateIndex % TURN_FREQUENCY === 0) {
                        var angle = this.game.math.angleBetweenPoints(firstSprite, moveTarget) + (this.updateIndex === 0 ? 1 : -1) * this.game.rnd.realInRange(0, SQUAD_DISCIPLINE);
                        this.game.physics.arcade.velocityFromRotation(angle, this.speed.current, firstSprite.body.velocity);
                        firstSprite.rotation = angle - Math.PI / 2;
                    }

                    for (var i = 1; i < this.sprites.length; i++) {
                        var swatSprite = this.sprites[i];
                        var angleToTarget = this.game.math.angleBetweenPoints(swatSprite, this.sprites[i - 1]);
                        this.game.physics.arcade.velocityFromRotation(angleToTarget, this.speed.current, swatSprite.body.velocity);
                        swatSprite.rotation = angleToTarget - Math.PI / 2;
                    }

                    if (this.updateIndex === 2 * TURN_FREQUENCY - 1) {
                        this.updateIndex = 0;
                    } else {
                        this.updateIndex++;
                    }
                }
            }
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_0__constants_js__["_2" /* SWAT_MODE_HIDE */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["_3" /* SWAT_MODE_HUNT */]) {
                            for (var i = 0; i < this.sprites.length; i++) {
                                for (var j = 0; j < this.sprites[i].children.length; j++) {
                                    this.sprites[i].getChildAt(j).mz.kill();
                                }
                                this.sprites[i].removeChildren();
                                this.sprites[i].visible = false;
                                this.sprites[i].body.stop();
                            }
                            this.updateIndex = 0;
                            this.moveTargets = [];
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_0__constants_js__["_3" /* SWAT_MODE_HUNT */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["_2" /* SWAT_MODE_HIDE */]) {
                            var start = props.start,
                                targets = props.targets;
                            var x = start.x,
                                y = start.y;


                            this.moveTargets = targets;

                            var _targets = _toArray(targets),
                                moveTarget = _targets[0],
                                rest = _targets.slice(1);

                            var directionSign = moveTarget.x > x ? -1 : 1;
                            for (var _i = 0; _i < this.sprites.length; _i++) {
                                var swatSprite = this.sprites[_i];
                                swatSprite.x = x + _i * directionSign * SQUAD_DENSITY;
                                swatSprite.y = y;
                                swatSprite.visible = true;
                            }
                        }
                        break;
                    }
            }

            this.mode = mode;
        }
    }, {
        key: 'onArrest',
        value: function onArrest(protester) {
            if (Math.random() < 0.3) {
                this.gameObject.mz.tweet.rTweet({ type: 'omon' }, { visible: 5000, fadeIn: 500, fadeOut: 500 });
            }
            if (protester instanceof __WEBPACK_IMPORTED_MODULE_1__Star_js__["a" /* default */]) {
                console.log("Arrested star");
                this.gameObject.mz.tweet.rTweet({ type: 'star_' + protester.name + '_arrest' }, { visible: 5000, fadeIn: 500, fadeOut: 500 });
                // const paddyWagon = this.gameObject.mz.arrays.wagons[0];
                this.gameObject.mz.tweet.rTweet({ type: 'star_' + protester.name + '_bus' }, { visible: 5000, fadeIn: 500, fadeOut: 500 });
                // this.gameObject.handleLeaveWagon(paddyWagon, -300, 0);
                for (var i = 0; i < this.sprites.length; i++) {
                    for (var j = 0; j < this.sprites[i].children.length; j++) {
                        this.sprites[i].getChildAt(j).mz.kill();
                    }
                    this.sprites[i].removeChildren();
                    this.sprites[i].visible = false;
                    this.sprites[i].body.stop();
                }
                this.moveTargets = [{ x: 0, y: 200 }];
                // this.moveTargets.unshift({x: paddyWagon.body.x + paddyWagon.body.width, y: paddyWagon.body.y + paddyWagon.body.height, callback })
            }
        }
    }]);

    return SWATSquad;
}();

function pickRandomElementFromArray(array) {
    if (array.length === 0) return undefined;
    var index = Math.floor(Math.random() * array.length);
    if (index >= array.length) index = 0;
    return array[index];
}

/* harmony default export */ __webpack_exports__["a"] = (SWATSquad);

/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DIR = {
    ltr: 'ltr',
    rtl: 'rtl'
};

var Shield = function () {
    function Shield(_ref) {
        var game = _ref.game,
            speed = _ref.speed;

        _classCallCheck(this, Shield);

        this.game = game;

        this.speed = _extends({
            current: speed.value
        }, speed);

        this.mode = __WEBPACK_IMPORTED_MODULE_0__constants_js__["_1" /* SHIELD_MODE_HIDE */];

        this.sprite = this.game.add.sprite(this.game.world.width * 2, this.game.world.height / 2 + this.game.camera.y, 'shield');
        this.sprite.anchor.set(0.5);
        this.sprite.exist = false;

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.immovable = true;

        this.direction = DIR.rtl;

        this.audio = this.game.add.audio('truck');
    }

    _createClass(Shield, [{
        key: 'update',
        value: function update() {
            if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["_0" /* SHIELD_MODE_DRIVE */]) {
                if (this.direction === DIR.ltr && this.sprite.x >= this.game.world.width + this.sprite.width || this.direction === DIR.rtl && this.sprite.x <= -this.sprite.width) {
                    this.setMode(__WEBPACK_IMPORTED_MODULE_0__constants_js__["_1" /* SHIELD_MODE_HIDE */]);
                }
            }
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_0__constants_js__["_1" /* SHIELD_MODE_HIDE */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["_0" /* SHIELD_MODE_DRIVE */]) {
                            // change direction for the next ride
                            this.direction = this.direction === DIR.ltr ? DIR.rtl : DIR.ltr;

                            this.sprite.kill();
                            this.sprite.body.stop();

                            this.audio.stop();
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_0__constants_js__["_0" /* SHIELD_MODE_DRIVE */]:
                    {
                        if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["_1" /* SHIELD_MODE_HIDE */]) {
                            var y = props.y;

                            this.sprite.x = this.direction === DIR.ltr ? -this.game.world.width : this.game.world.width * 2;
                            this.sprite.y = y;
                            this.sprite.body.velocity.x = this.speed.current * (this.direction === DIR.ltr ? 1 : -1);
                            this.sprite.scale.x = this.sprite.scale.y * (this.direction === DIR.ltr ? -1 : 1);

                            this.audio.loopFull(0.25);
                            this.game.camera.shake(0.005, 3000);
                        }
                        break;
                    }
            }

            this.mode = mode;
        }
    }]);

    return Shield;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (Shield);

/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DroppedPoster = function () {
    function DroppedPoster(_ref) {
        var game = _ref.game,
            group = _ref.group,
            x = _ref.x,
            y = _ref.y,
            alive = _ref.alive;

        _classCallCheck(this, DroppedPoster);

        this.game = game;
        this.aliveTime = alive * 1000;

        this.sprite = this.game.add.sprite(x, y, "ALL_IMAGES", 'dropped_poster');
        group.add(this.sprite);
        this.sprite.anchor.set(0.5);
        this.sprite.rotation = this.game.rnd.sign() * Math.PI / 3;

        this.livingTimer = this.game.time.create(false);
        this.dyingTimer = this.game.time.create(false);
        this.launchLivingTimer();
    }

    _createClass(DroppedPoster, [{
        key: "update",
        value: function update() {
            if (this.dyingTimer.running) {
                this.sprite.alpha = Math.floor(this.dyingTimer.ms / 400) % 2;
            }
        }
    }, {
        key: "handleLivingTimer",
        value: function handleLivingTimer() {
            this.dyingTimer.add(this.aliveTime / 4, this.kill, this);
            this.dyingTimer.start();
        }
    }, {
        key: "launchLivingTimer",
        value: function launchLivingTimer() {
            this.livingTimer.add(3 * this.aliveTime / 4, this.handleLivingTimer, this);
            this.livingTimer.start();
        }
    }, {
        key: "revive",
        value: function revive(coords) {
            this.sprite.x = coords.x;
            this.sprite.y = coords.y;
            this.sprite.alpha = 1;

            this.launchLivingTimer();
            this.sprite.revive();
        }
    }, {
        key: "kill",
        value: function kill() {
            this.livingTimer.stop(true);
            this.dyingTimer.stop(true);
            this.sprite.kill();
        }
    }]);

    return DroppedPoster;
}();

/* harmony default export */ __webpack_exports__["a"] = (DroppedPoster);

/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_ProgressBar_js__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levels__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help___ = __webpack_require__(453);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var GameInterface = function () {
    function GameInterface(_ref) {
        var game = _ref.game,
            onTogglePoster = _ref.onTogglePoster;

        _classCallCheck(this, GameInterface);

        this.game = game;
        this.onTogglePoster = onTogglePoster;
        this.lastMute = false;
        this.group = this.game.add.group();
        this.group.fixedToCamera = true;

        var isWide = this.game.width > 500;

        // Ибо нефиг плодить классы, будем юзать стандартный прогесс-бар
        this.score = new __WEBPACK_IMPORTED_MODULE_0__objects_ProgressBar_js__["a" /* default */]({
            radius: 10,
            width: 180,
            color: 0xf0526f,
            lineWidth: 10,
            game: this.game,
            sprite_type: "big_progress"
        });
        this.score.graphics.visible = true;
        this.score.graphics.y = isWide ? 20 : 10;
        this.score.graphics.x = this.game.width / 2 - 90;
        this.group.add(this.score.graphics);
        //this.score.update(0.01);

        if (!isWide) this.score.graphics.x = this.game.width - this.score.fullWidth - 10;

        this.textScore = this.game.add.text(this.game.width - 20, 20, '', {
            font: '25px Arial',
            fill: '#fff'
        });
        this.textScore.anchor.set(1, 0);
        this.textScore.setShadow(2, 2, 'rgba(0, 0, 0, .8)', 0);

        this.textTime = this.game.add.text(isWide ? this.game.width / 2 : this.game.width - 60, isWide ? 50 : 40, '', {
            font: 'bold 26px Arial',
            fill: '#fff'
        });
        this.textTime.anchor.set(0.5, 0);
        this.textTime.resolution = window.devicePixelRatio || 1;
        // this.textTime.setShadow(2, 2, 'rgba(0, 0, 0, .8)', 0);

        this.textTime.setText('00:00:00');

        this.group.add(this.textScore);
        this.group.add(this.textTime);

        this.buttonSound = this.game.add.button(isWide ? 20 : 10, isWide ? 20 : 10, 'ALL_IMAGES', this.handleClickSound, this, "volume_off", "volume_off", "volume_off" //, "volume_on",
        // this.group
        );
        this.group.add(this.buttonSound);
        this.buttonSound.input.priorityID = 2;

        if (!Phaser.Device.desktop) {
            this.buttonPoster = this.game.add.button(this.game.width - 20, this.game.height - 120, 'ALL_IMAGES', this.handleTogglePoster, this, "mobile_poster-0", "mobile_poster-0", "mobile_poster-0");

            this.group.add(this.buttonPoster);

            this.buttonPoster.anchor.set(1, 1);
            this.buttonPoster.input.priorityID = 2;

            this.buttonHelp = this.game.add.button(10, 10 + 48 + 10, 'ALL_IMAGES', this.handleHelp, this, "help", "help", "help");

            this.group.add(this.buttonHelp);
            this.buttonHelp.input.priorityID = 2;
            this.buttonHelp.anchor.set(0, 0);
        } else {
            this.restartButton = this.game.add.button(this.game.width - (isWide ? 20 : 10), isWide ? 20 : 10, 'ALL_IMAGES', this.handleRestartButton, this, "restart", "restart", "restart");

            this.group.add(this.restartButton);

            this.restartButton.anchor.set(1, 0);
            this.restartButton.input.priorityID = 2;

            this.buttonHelp = this.game.add.button(this.game.width - ((isWide ? 20 : 10) + 48 + 20), isWide ? 20 : 10, 'ALL_IMAGES', this.handleHelp, this, "help", "help", "help");

            this.group.add(this.buttonHelp);
            this.buttonHelp.input.priorityID = 2;
            this.buttonHelp.anchor.set(1, 0);
        }

        this.lastPost = false;
    }

    _createClass(GameInterface, [{
        key: 'update',
        value: function update(_ref2) {
            var score = _ref2.score,
                protestersAlive = _ref2.protestersAlive,
                protestersTotal = _ref2.protestersTotal,
                meanMood = _ref2.meanMood,
                percent = _ref2.percent,
                showPoster = _ref2.showPoster;


            this.score.update(percent);
            this.score.graphics.visible = true;

            if (this.buttonPoster) {
                if (showPoster != this.lastPost) {
                    var name = "mobile_poster-" + (showPoster ? 1 : 0);
                    this.buttonPoster.setFrames(name, name, name);
                }
                this.lastPost = showPoster;
            }
        }
    }, {
        key: 'updateTimer',
        value: function updateTimer(time) {
            this.textTime.setText(time);
        }
    }, {
        key: 'updateScore',
        value: function updateScore(score, time) {
            // this.textScore.setText(score);
        }
    }, {
        key: 'handleClickSound',
        value: function handleClickSound() {
            this.game.sound.mute = !this.game.sound.mute;

            if (this.game.sound.mute) {
                this.buttonSound.setFrames("volume_on", "volume_on", "volume_on");
            } else {
                this.buttonSound.setFrames("volume_off", "volume_off", "volume_off");
            }
        }
    }, {
        key: 'handleTogglePoster',
        value: function handleTogglePoster() {

            this.onTogglePoster();
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.group.killAll();
        }
    }, {
        key: 'handleRestartButton',
        value: function handleRestartButton() {
            this.game.state.start('Game', true, false, __WEBPACK_IMPORTED_MODULE_1__levels__["a" /* default */]['level1']);
        }
    }, {
        key: 'handleHelp',
        value: function handleHelp() {
            var _this = this;

            this.game.paused = true;
            Object(__WEBPACK_IMPORTED_MODULE_2__help___["a" /* default */])(Phaser.Device.desktop, function () {
                _this.game.paused = false;
            });
        }
    }]);

    return GameInterface;
}();

/* harmony default export */ __webpack_exports__["a"] = (GameInterface);

/***/ }),
/* 452 */,
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_handlebars_dist_handlebars_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_handlebars_dist_handlebars_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_handlebars_dist_handlebars_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_raw_loader_template_html__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_raw_loader_template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_raw_loader_template_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_style_loader_css_loader_style_css__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_style_loader_css_loader_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_style_loader_css_loader_style_css__);





var template = __WEBPACK_IMPORTED_MODULE_0_handlebars_dist_handlebars_js___default.a.compile(__WEBPACK_IMPORTED_MODULE_1_raw_loader_template_html___default.a);

var data = [{
  image: __webpack_require__(459),
  text: "передвигайтесь по улице с помощью стрелочек"
}, {
  image: __webpack_require__(460),
  text: "зажмите, чтобы начать агитацию, отпустите, чтобы перестать"
}, {
  image: __webpack_require__(461),
  text: "если вы зажмете клавишу, вы сможете убегать <br class='hide-700' /> от полиции, однако смотрите не выдохнитесь"
}, {
  image: __webpack_require__(151),
  text: "подождите, пока человек поднимет плакат, тогда он присоединится к&nbsp;вам"
}, {
  image: __webpack_require__(152),
  text: "подойдите к журналисту и поднимите плакат так, чтобы он&nbsp;вас заметил; <br /> когда журналист закончит прямой эфир, на&nbsp;площадь подтянутся новые люди"
}, {
  image: __webpack_require__(153),
  text: "во время агитации остерегайтесь сотрудников полиции, опустите <br class='hide-900' /> плакат до&nbsp;того, как&nbsp;они&nbsp;вас заметят"
}, {
  image: __webpack_require__(154),
  text: "смотрите, чтобы вам не&nbsp;плеснули зеленкой в&nbsp;лицо"
}, {
  image: __webpack_require__(155),
  text: "чтобы помешать задержанию демонстранта, подойдите к&nbsp;нему <br class='hide-700' /> и&nbsp;быстро жмите на&nbsp;пробел много раз подряд"
}];
var mobileData = [{
  image: __webpack_require__(462),
  text: "коснитесь экрана, чтобы передвигаться по улице"
}, {
  image: __webpack_require__(463),
  text: "если вы дважды коснетесь экрана, вы сможете убегать от полиции, однако смотрите не выдохнитесь"
}, {
  image: __webpack_require__(464),
  text: "нажмите, чтобы начать агитацию"
}, {
  image: __webpack_require__(151),
  text: "подождите, пока человек поднимет плакат, тогда он присоединится к&nbsp;вам"
}, {
  image: __webpack_require__(152),
  text: "подойдите к журналисту и поднимете плакат так, чтобы он вас заметил; когда журналист закончит прямой эфир, на площадь подтянутся новые люди"
}, {
  image: __webpack_require__(153),
  text: "во время агитации остерегайтесь сотрудников полиции, опустите плакат до того, как они вас заметят"
}, {
  image: __webpack_require__(154),
  text: "смотрите, чтобы вам не&nbsp;плеснули зеленкой в&nbsp;лицо"
}, {
  image: __webpack_require__(155),
  text: "чтобы помешать задержанию демонстранта, подойдите к нему и быстро жмите на экран много раз подряд"
}];

var show = function show(isDesktop, cb) {
  var containerEl = document.querySelector('[data-js-selector="help-container"]');
  var fragment = document.createElement('div');
  var html = template({
    data: isDesktop ? data : mobileData,
    separator: __webpack_require__(465)
  });
  fragment.innerHTML = html;
  containerEl.appendChild(fragment);

  var closeEl = document.querySelector('[data-js-selector="help-close"]');
  var hide = function hide(e) {
    containerEl.removeChild(fragment);
    cb && cb();
  };
  closeEl.onclick = hide;

  return hide;
};

/* harmony default export */ __webpack_exports__["a"] = (show);

/***/ }),
/* 454 */
/***/ (function(module, exports) {

module.exports = "<div class=\"help-container\">\r\n  <div class=\"help\">\r\n    <span data-js-selector=\"help-close\" class='help_close'> </span>\r\n    {{#each data}}\r\n      <div class=\"help_line help-line\">\r\n        <div class=\"help-line_pic\">\r\n          <img src=\"{{ image }}\" />\r\n        </div>\r\n        <div class=\"help-line_separator\">\r\n          <img src=\"{{../separator }}\" />\r\n        </div>\r\n        <div class=\"help-line_text\">\r\n          {{{ text }}}\r\n        </div>\r\n      </div>\r\n    {{/each}}\r\n  </div>\r\n</div>"

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(456);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(100)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(150);
exports = module.exports = __webpack_require__(99)(false);
// imports


// module
exports.push([module.i, ".help-container {\r\n  width: 100%;\r\n  min-height: 100%;\r\n  left: 0px; top: 0px;\r\n\r\n  position: absolute;\r\n  background: rgba(0,0,0,0.8);\r\n\r\n  font-family: Arial;\r\n  text-align: left;\r\n  font-size: 14px;\r\n}\r\n\r\n.help {\r\n  position: fixed;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  left: 0px;\r\n  right: 0px;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  padding: 30px 0px;\r\n  box-sizing: border-box;\r\n/*  margin: 30px 0px;*/\r\n}\r\n.help_close {\r\n  display: inline-block;\r\n  width: 51px; height: 51px;\r\n  background: white;\r\n  position: absolute;\r\n  top: 20px; right: 20px;\r\n  background: url(" + escape(__webpack_require__(457)) + ");\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.help-line_pic {\r\n  height: 90px;\r\n  text-align: center;\r\n}\r\n.help-line_pic:before {\r\n  content: '\\200B';\r\n  height: 100%;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.help-line_pic img {\r\n  vertical-align: middle;\r\n}\r\n\r\n.help-line_text {\r\n  color: white;\r\n  padding: 0px 20px;\r\n  line-height: 18px;\r\n}\r\n\r\n.help-line_separator {\r\n  display: none;\r\n}\r\n\r\n.hide-900 {\r\n  display: none;\r\n}\r\n.hide-700 {\r\n  display: none;\r\n}\r\n@media(min-width: 900px){\r\n  .hide-900 {\r\n    display: inline-block;\r\n  }\r\n}\r\n\r\n@media(min-width: 700px){\r\n  .hide-700 {\r\n    display: inline-block;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media(min-width: 700px) {\r\n  .help-container {\r\n/*    position: fixed;\r\n    overflow-y: scroll;*/\r\n    background: none;\r\n/*    display: flex;*/\r\n\r\n\r\n  }\r\n  .help {\r\n    height: 90%;\r\n    width: 800px;\r\n    background: rgba(0,0,0,0.85);\r\n    margin: auto auto;\r\n    padding: 20px 0px 20px 60px;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    /*\r\n    left: auto; right: auto; top: auto; bottom: auto;\r\n    */\r\n    overflow: auto;\r\n  }\r\n  .help-line {\r\n    height: 80px;\r\n    display: table-row;\r\n  }\r\n\r\n  .help-line_pic {\r\n    white-space: nowrap;\r\n    height: 80px;\r\n  }\r\n  .help-line_pic, .help-line_text, .help-line_separator {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n  .help-line_text {\r\n    padding: 0px 60px 0px 0px;\r\n  }\r\n\r\n  .help-line_separator {\r\n    line-height: 1px;\r\n    font-size: 1px;\r\n    padding: 0px 30px 0px 60px;\r\n  }\r\n}\r\n\r\n@media(max-height: 768px) and (min-width: 700px) {\r\n  /*\r\n    для широких и не высоких мониторов(или окна)\r\n    хак: оставляем вид как на большом, но теперь\r\n    показываем скролл в подсказках\r\n  */\r\n  .help {\r\n    position: fixed;\r\n    height: 90%;\r\n    overflow-y: scroll;\r\n    left: 0px;\r\n    right: 0px;\r\n    top: 0px;\r\n    bottom: 0px;\r\n  }\r\n}", ""]);

// exports


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/dafcb77b31dbfe770f5f58b03ce56487.png";

/***/ }),
/* 458 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/be8f49f103cf64ce06df046de4d425ea.png";

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/1dfb5f51b2b7fc8e02dec325b93f62da.png";

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/3e05e8d95533ab7eaed9967bd69c2d2a.png";

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/1b9ac687d7c68d5098444b2474710217.png";

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/64600b75274f59c068dd69e61e3e5958.png";

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/63aefc388c7cb41505116025501ecc98.png";

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/13ee4626b3a76a1ec67b1fa0e8f77fe0.png";

/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PauseMenu = function () {
    function PauseMenu(_ref) {
        var game = _ref.game;

        _classCallCheck(this, PauseMenu);

        this.game = game;

        this.sprite = this.game.add.sprite(0, 0);

        this.overlay = this.game.add.graphics(0, 0);
        this.overlay.beginFill(0xffffff, 0.7);
        this.overlay.drawRect(0, 0, this.game.width, this.game.height);
        this.overlay.endFill();

        this.title = this.game.add.text(this.game.width / 2, 2 / 3 * this.game.height / 2, this.game.mz.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["K" /* I18N_UI_PAUSE */]));
        this.title.anchor.set(0.5);

        this.replayButton = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'playButton');
        this.replayButton.anchor.set(0.5);

        this.sprite.addChild(this.overlay);
        this.sprite.addChild(this.title);
        this.sprite.addChild(this.replayButton);
        this.sprite.fixedToCamera = true;

        this.kill();
    }

    _createClass(PauseMenu, [{
        key: 'kill',
        value: function kill() {
            this.sprite.kill();
        }
    }, {
        key: 'revive',
        value: function revive() {
            this.sprite.revive();
        }
    }]);

    return PauseMenu;
}();

/* harmony default export */ __webpack_exports__["a"] = (PauseMenu);

/***/ }),
/* 467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(156);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var STRIPE_DURATION = 1500;
var OVERLAY_DURATION = 3000;

var EndMenu = function () {
    function EndMenu(_ref) {
        var game = _ref.game,
            mode = _ref.mode,
            score = _ref.score,
            stats = _ref.stats;

        _classCallCheck(this, EndMenu);

        this.game = game;
        this.mode = mode;
        this.stats = stats;

        var stripeHeight = this.game.height / 6;

        this.sprite = this.game.add.sprite(0, 0);
        this.sprite.fixedToCamera = true;

        this.topStripe = this.game.add.graphics(0, 0);
        this.topStripe.beginFill(0);
        this.topStripe.drawRect(0, -stripeHeight, this.game.width, stripeHeight);
        this.topStripe.endFill();

        var stripesTween = this.game.add.tween(this.topStripe).to({ top: stripeHeight }, STRIPE_DURATION).start();
        stripesTween.onComplete.addOnce(this.handleTweenComplete, this);

        this.bottomStripe = this.game.add.graphics(0, 0);
        this.bottomStripe.beginFill(0);
        this.bottomStripe.drawRect(0, this.game.height, this.game.width, this.game.height + stripeHeight);
        this.bottomStripe.endFill();
        this.game.add.tween(this.bottomStripe).to({ top: -stripeHeight }, STRIPE_DURATION).start();

        this.overlay = this.game.add.graphics(0, 0);
        this.overlay.beginFill(0);
        this.overlay.drawRect(0, 0, this.game.width, this.game.height);
        this.overlay.endFill();
        this.overlay.alpha = 0;
        var overlayTween = this.game.add.tween(this.overlay).to({ alpha: 0.5 }, OVERLAY_DURATION).start();
        overlayTween.onComplete.addOnce(this.showStats, this);

        this.replayButton = this.game.add.button(this.game.width - 50, 50, 'repeatButton', this.handleClickPlay, this);
        this.replayButton.anchor.set(0.5);
        this.replayButton.visible = false;

        this.sprite.addChild(this.topStripe);
        this.sprite.addChild(this.bottomStripe);
        this.sprite.addChild(this.overlay);
        this.sprite.addChild(this.replayButton);
        this.sprite.addChild(score);
    }

    _createClass(EndMenu, [{
        key: 'handleTweenComplete',
        value: function handleTweenComplete() {
            this.replayButton.visible = true;
        }
    }, {
        key: 'handleClickPlay',
        value: function handleClickPlay() {
            this.game.state.start('StartMenu');
        }
    }, {
        key: 'showStats',
        value: function showStats() {
            var _this = this;

            var titleText = '';
            if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["j" /* END_GAME_WIN */]) {
                titleText = __WEBPACK_IMPORTED_MODULE_0__constants_js__["t" /* I18N_END_WIN */];
            } else if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["g" /* END_GAME_PLAYER_KILLED */]) {
                titleText = __WEBPACK_IMPORTED_MODULE_0__constants_js__["q" /* I18N_END_ARRESTED */];
            } else if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["i" /* END_GAME_TIME_OUT */]) {
                titleText = __WEBPACK_IMPORTED_MODULE_0__constants_js__["s" /* I18N_END_TIME */];
            } else if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["h" /* END_GAME_PROTEST_RATE */]) {
                titleText = __WEBPACK_IMPORTED_MODULE_0__constants_js__["r" /* I18N_END_FAIL */];
            }

            var horizontalOffset = this.game.width / 15;
            var title = this.game.add.text(horizontalOffset, 40, this.game.mz.i18n.getTranslation(titleText), {
                font: '26px Arial',
                fill: this.mode === __WEBPACK_IMPORTED_MODULE_0__constants_js__["j" /* END_GAME_WIN */] ? '#393' : '#933',
                wordWrap: true,
                wordWrapWidth: this.replayButton.left - horizontalOffset * 2
            });
            this.sprite.addChild(title);

            var stats = [[__WEBPACK_IMPORTED_MODULE_0__constants_js__["I" /* I18N_STATS_TOTAL */], this.stats.revived], [__WEBPACK_IMPORTED_MODULE_0__constants_js__["E" /* I18N_STATS_ACTIVE */], this.stats.alive], [__WEBPACK_IMPORTED_MODULE_0__constants_js__["F" /* I18N_STATS_ARRESTED */], this.stats.arrested], [__WEBPACK_IMPORTED_MODULE_0__constants_js__["G" /* I18N_STATS_LEFT */], this.stats.left]];

            if (this.mode !== __WEBPACK_IMPORTED_MODULE_0__constants_js__["i" /* END_GAME_TIME_OUT */]) {
                stats.unshift([__WEBPACK_IMPORTED_MODULE_0__constants_js__["H" /* I18N_STATS_TIME */], String(Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["a" /* getFormattedTime */])(this.stats.time))]);
            }

            var verticalOffset = title.bottom + title.top;
            var leftColumnWidth = 0;
            stats.forEach(function (_ref2, i) {
                var _ref3 = _slicedToArray(_ref2, 1),
                    text = _ref3[0];

                var label = _this.game.add.text(horizontalOffset, i * 40 + verticalOffset, _this.game.mz.i18n.getTranslation(text) + ':', {
                    font: '24px Arial',
                    fill: '#fff'
                });
                if (label.width > leftColumnWidth) {
                    leftColumnWidth = label.width;
                }
                _this.sprite.addChild(label);
            });

            leftColumnWidth += 2 * horizontalOffset;

            stats.forEach(function (_ref4, i) {
                var _ref5 = _slicedToArray(_ref4, 2),
                    _ = _ref5[0],
                    value = _ref5[1];

                var valueText = _this.game.add.text(leftColumnWidth, i * 40 + verticalOffset, String(value), {
                    font: '24px Arial',
                    fill: '#fff'
                });
                _this.sprite.addChild(valueText);
            });
        }
    }]);

    return EndMenu;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (EndMenu);

/***/ }),
/* 468 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Collider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Converter_js__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Updater_js__ = __webpack_require__(469);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Collider = function () {
  function Collider(_ref) {
    var game = _ref.game,
        gameObject = _ref.gameObject,
        scale = _ref.scale;

    _classCallCheck(this, Collider);

    Object.assign(this, {
      game: game,
      gameObject: gameObject,
      scale: scale,
      entities: []
    });

    this.updater = new __WEBPACK_IMPORTED_MODULE_1__Updater_js__["a" /* default */](this);
  }

  _createClass(Collider, [{
    key: "update",
    value: function update() {
      this.updater.update();

      //console.log("Colider invokes:" + this.invokes++);
    }
  }, {
    key: "addEntity",
    value: function addEntity(_ref2) {
      var sprite = _ref2.sprite,
          object = _ref2.object,
          obstacle = _ref2.obstacle;

      this.entities.push({
        sprite: sprite,
        object: object,
        obstacle: obstacle || false,
        move: [],
        personalMatrix: this.compilePersonalMatrix(sprite),
        times: 0,
        lastDecisionTime: 0,
        lastCoords: [0, 0],
        decision: 0,
        lastTarget: null
      });
    }
  }, {
    key: "removeEntityBySprite",
    value: function removeEntityBySprite(sprite) {
      for (var i = 0; i < this.entities.length; i++) {
        if (this.entities[i].sprite === sprite) {
          this.entities.splice(i, 1);
          break;
        }
      }
    }
  }, {
    key: "getEntityBySprite",
    value: function getEntityBySprite(sprite) {
      return this.entities.find(function (x) {
        return x.sprite === sprite;
      });
    }
  }, {
    key: "moveEntity",
    value: function moveEntity(object, target) {
      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref3$callback = _ref3.callback,
          callback = _ref3$callback === undefined ? function () {} : _ref3$callback,
          _ref3$phasing = _ref3.phasing,
          phasing = _ref3$phasing === undefined ? false : _ref3$phasing,
          _ref3$follow = _ref3.follow,
          follow = _ref3$follow === undefined ? false : _ref3$follow,
          _ref3$reset = _ref3.reset,
          reset = _ref3$reset === undefined ? true : _ref3$reset,
          _ref3$superphasing = _ref3.superphasing,
          superphasing = _ref3$superphasing === undefined ? false : _ref3$superphasing,
          _ref3$prepend = _ref3.prepend,
          prepend = _ref3$prepend === undefined ? false : _ref3$prepend;

      var entity = this.entities.find(function (x) {
        return x.object === object;
      });
      if (!entity && target) throw new Error("object not registered (" + object + ")");
      if (!entity) return;

      if (reset) entity.move = [];
      if (target) {
        if (prepend) entity.move.unshift({ target: target, callback: callback, follow: follow, phasing: phasing, superphasing: superphasing });else entity.move.push({ target: target, callback: callback, follow: follow, phasing: phasing, superphasing: superphasing });
      }
    }
  }, {
    key: "moveToFactory",
    value: function moveToFactory() {
      var collider = this;
      // Use old syntax to explicitly allow context changing
      return function moveTo(target) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        collider.moveEntity(this, target, opts);
      };
    }
  }, {
    key: "compilePersonalMatrix",
    value: function compilePersonalMatrix(sprite) {
      var converter = new __WEBPACK_IMPORTED_MODULE_0__Converter_js__["a" /* default */](this);

      var _converter$rCoordsToM = converter.rCoordsToMCoords(sprite.body.center),
          _converter$rCoordsToM2 = _slicedToArray(_converter$rCoordsToM, 2),
          centerX = _converter$rCoordsToM2[0],
          centerY = _converter$rCoordsToM2[1];

      var _converter$rCoordsToM3 = converter.rCoordsToMCoords(sprite.body),
          _converter$rCoordsToM4 = _slicedToArray(_converter$rCoordsToM3, 2),
          startX = _converter$rCoordsToM4[0],
          startY = _converter$rCoordsToM4[1];

      var _converter$rCoordsToM5 = converter.rCoordsToMCoords({
        x: sprite.body.x + sprite.body.width,
        y: sprite.body.y + sprite.body.height
      }),
          _converter$rCoordsToM6 = _slicedToArray(_converter$rCoordsToM5, 2),
          endX = _converter$rCoordsToM6[0],
          endY = _converter$rCoordsToM6[1];

      var _sprite$body = sprite.body,
          height = _sprite$body.height,
          width = _sprite$body.width,
          x = _sprite$body.x,
          y = _sprite$body.y,
          center = _sprite$body.center;


      var result = [];
      for (var _x3 = startX; _x3 <= endX; _x3++) {
        for (var _y = startY; _y <= endY; _y++) {
          result.push([_x3 - centerX, _y - centerY]);
        }
      }return result;
    }
  }, {
    key: "updatePersonalMatrix",
    value: function updatePersonalMatrix(sprite) {
      var newMatrix = this.compilePersonalMatrix(sprite);
      var entity = this.getEntityBySprite(sprite);
      entity.personalMatrix = newMatrix;
      return newMatrix;
    }
  }, {
    key: "invokeRawMoving",
    value: function invokeRawMoving(object, target) {
      object.setVelocity(target);
    }
  }]);

  return Collider;
}();

/* harmony default export */ __webpack_exports__["a"] = (Collider);

/***/ }),
/* 469 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pathfinding__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pathfinding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pathfinding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Converter_js__ = __webpack_require__(157);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var FORCE_DISABLE_PATHFINDING_ON_MOBILE = true;

var decisionTimeout = 1000;
// const phasingDecisionTime = 100;
var timesTimeout = 2;

var matrixTimeout = 2000;

var obstaclesTimeout = 10000;

var savedMatrix = {
  move: { time: 0, matrix: null },
  immovable: { time: 0, matrix: null }
};

var obstacleTimer = 0;
var isPathinfindingDisabled = true;

var Updater = function () {
  function Updater(collider) {
    var _this = this;

    _classCallCheck(this, Updater);

    this.collider = collider;
    this.converter = new __WEBPACK_IMPORTED_MODULE_1__Converter_js__["a" /* default */](collider);
    var now = Date.now();
    this.matrix = this._getMatrix('move', now);
    this.immovableMatrix = this._getMatrix('immovable', now);
    if (obstacleTimer < now) {
      obstacleTimer = now + obstaclesTimeout;
      this.collider.entities.filter(function (x) {
        return x.obstacle;
      }).forEach(function (x) {
        return _this.collider.updatePersonalMatrix(x.sprite);
      });
    }

    if (FORCE_DISABLE_PATHFINDING_ON_MOBILE) {
      isPathinfindingDisabled = !Phaser.Device.desktop;
      if (isPathinfindingDisabled) console.warn('Force disable pathfinding!!!');
    }
  }

  _createClass(Updater, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      var collider = this.collider,
          converter = this.converter;

      var now = new Date().getTime();
      collider.entities.forEach(function (entity) {
        var move = entity.move,
            sprite = entity.sprite,
            object = entity.object,
            personalMatrix = entity.personalMatrix,
            lastDecisionTime = entity.lastDecisionTime,
            lastCoords = entity.lastCoords,
            decision = entity.decision,
            lastTarget = entity.lastTarget;


        if (move.length === 0) return void (sprite.mz && sprite.mz.stop());
        var _move$ = move[0],
            target = _move$.target,
            phasing = _move$.phasing,
            follow = _move$.follow,
            callback = _move$.callback,
            superphasing = _move$.superphasing;

        var moveFrom = converter.rCoordsToMCoords(sprite.body.center);
        var moveTo = converter.rCoordsToMCoords(target);

        if (moveFrom[0] === lastCoords[0] && moveFrom[1] === lastCoords[1]) {
          entity.times++;
        } else {
          entity.times = 0;
          entity.lastCoords = moveFrom;
        }

        phasing = true;

        if (phasing || FORCE_DISABLE_PATHFINDING) {

          sprite.phasing = true;
          var path = [moveFrom, moveTo];
          var pathClear = !equals(moveFrom, moveTo);
        } else {
          if (decision && lastDecisionTime < now && lastTarget === target) {
            var path = decision;
          } else {
            entity.lastDecisionTime = now + decisionTimeout;
            entity.lastTarget = target;
            var finder = new __WEBPACK_IMPORTED_MODULE_0_pathfinding___default.a.AStarFinder({ allowDiagonal: true, dontCrossCorners: true });
            if (superphasing) {
              var path = _this2._findImmovablePath({ finder: finder, from: moveFrom, to: moveTo });
            } else {
              var path = _this2._findPath({ finder: finder, from: moveFrom, to: moveTo, personalMatrix: personalMatrix });
            }
          }
          var pathClear = path[2] || mget(_this2.matrix, path[1]) === false;
        }

        if (pathClear) {
          var nextTarget = converter.mCoordsToRCoords(path[1]);
          collider.invokeRawMoving(object, nextTarget);
        } else {
          if (follow) return void sprite.body.stop();
          if (callback) callback();
          sprite.phasing = false;
          move.shift();
        }
      });
    }
  }, {
    key: "_findPath",
    value: function _findPath(_ref) {
      var finder = _ref.finder,
          from = _ref.from,
          to = _ref.to,
          personalMatrix = _ref.personalMatrix;

      var matrix = this._cloneMatrix();

      this._applyPersonalMatrix(false, { personalMatrix: personalMatrix, target: from, matrix: matrix });
      mset(matrix, to, false);

      var grid = new __WEBPACK_IMPORTED_MODULE_0_pathfinding___default.a.Grid(matrix);
      return finder.findPath.apply(finder, _toConsumableArray(from).concat(_toConsumableArray(to), [grid]));
    }
  }, {
    key: "_findImmovablePath",
    value: function _findImmovablePath(_ref2) {
      var finder = _ref2.finder,
          from = _ref2.from,
          to = _ref2.to,
          personalMatrix = _ref2.personalMatrix;

      var matrix = this.immovableMatrix;

      var grid = new __WEBPACK_IMPORTED_MODULE_0_pathfinding___default.a.Grid(matrix);
      return finder.findPath.apply(finder, _toConsumableArray(from).concat(_toConsumableArray(to), [grid]));
    }
  }, {
    key: "_getMatrix",
    value: function _getMatrix() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'move';
      var time = arguments[1];

      var save = savedMatrix[type];
      if (save.time < time) {
        savedMatrix[type].matrix = type === 'move' ? this._buildMatrix() : this._buildImmovableMatrix();
        savedMatrix[type].time = time + matrixTimeout;
        console.log("[GET New matrix]");
      } else {
        console.log("[GET Cached matrix]");
      }
      return savedMatrix[type].matrix;
    }
  }, {
    key: "_buildMatrix",
    value: function _buildMatrix() {
      var _converter = this.converter,
          maxX = _converter.maxX,
          maxY = _converter.maxY;

      var matrix = mzero(maxX + 1, maxY + 1);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.collider.entities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ref3 = _step.value;
          var sprite = _ref3.sprite,
              personalMatrix = _ref3.personalMatrix;

          if (!sprite.alive) continue;
          if (sprite.mz && sprite.mz.mode === null) continue;
          var target = this.converter.rCoordsToMCoords(sprite.body.center);
          this._applyPersonalMatrix(true, { personalMatrix: personalMatrix, target: target, matrix: matrix });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return matrix;
    }
  }, {
    key: "_buildImmovableMatrix",
    value: function _buildImmovableMatrix() {
      var _converter2 = this.converter,
          maxX = _converter2.maxX,
          maxY = _converter2.maxY;

      var matrix = mzero(maxX + 1, maxY + 1);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.collider.entities[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _ref4 = _step2.value;
          var sprite = _ref4.sprite,
              personalMatrix = _ref4.personalMatrix,
              obstacle = _ref4.obstacle;

          if (!obstacle) continue;
          if (!sprite.alive) continue;
          if (sprite.mz && sprite.mz.mode === null) continue;
          if (!sprite.body) continue;
          if (!sprite.body.immovable) continue;
          var target = this.converter.rCoordsToMCoords(sprite.body.center);
          this._applyPersonalMatrix(true, { personalMatrix: personalMatrix, target: target, matrix: matrix });
        }

        // console.log(matrix, mshow(matrix))
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return matrix;
    }
  }, {
    key: "_applyPersonalMatrix",
    value: function _applyPersonalMatrix(value, _ref5) {
      var personalMatrix = _ref5.personalMatrix,
          target = _ref5.target,
          matrix = _ref5.matrix;
      var _converter3 = this.converter,
          maxX = _converter3.maxX,
          maxY = _converter3.maxY;

      var _target = _slicedToArray(target, 2),
          x1 = _target[0],
          y1 = _target[1];

      personalMatrix.forEach(function (point) {
        var _point = _slicedToArray(point, 2),
            x2 = _point[0],
            y2 = _point[1];

        mset(matrix, [Math.max(Math.min(x1 + x2, maxX), 0), Math.max(Math.min(y1 + y2, maxY), 0)], value);
      });
    }
  }, {
    key: "_cloneMatrix",
    value: function _cloneMatrix() {
      return this.matrix.map(function (line) {
        return line.map(function (item) {
          return item;
        });
      });
    }
  }, {
    key: "_printMatrix",
    value: function _printMatrix(matrix) {
      return mshow(matrix);
    }
  }]);

  return Updater;
}();

function mget(matrix, path) {
  if (!path) return null;

  var _path = _slicedToArray(path, 2),
      x = _path[0],
      y = _path[1];

  return matrix[y][x];
}

function mset(matrix, path, value) {
  if (!path) return;

  var _path2 = _slicedToArray(path, 2),
      x = _path2[0],
      y = _path2[1];

  matrix[y][x] = value;
}

function mzero(maxX, maxY) {
  var matrix = [];
  for (var y = 0; y < maxY; y++) {
    matrix[y] = [];
    for (var x = 0; x < maxX; x++) {
      matrix[y][x] = false;
    }
  }
  return matrix;
}

function mshow(matrix) {
  return matrix.map(function (row) {
    return row.map(function (x) {
      return x ? 1 : 0;
    }).join();
  }).join("\n");
}

function equals(a, b) {
  var _a = _slicedToArray(a, 2),
      xa = _a[0],
      ya = _a[1];

  var _b = _slicedToArray(b, 2),
      xb = _b[0],
      yb = _b[1];

  return xa === xb && ya === yb;
}

/* harmony default export */ __webpack_exports__["a"] = (Updater);

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(471);


/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'Heap'                      : __webpack_require__(69),
    'Node'                      : __webpack_require__(101),
    'Grid'                      : __webpack_require__(474),
    'Util'                      : __webpack_require__(44),
    'DiagonalMovement'          : __webpack_require__(14),
    'Heuristic'                 : __webpack_require__(53),
    'AStarFinder'               : __webpack_require__(102),
    'BestFirstFinder'           : __webpack_require__(475),
    'BreadthFirstFinder'        : __webpack_require__(476),
    'DijkstraFinder'            : __webpack_require__(477),
    'BiAStarFinder'             : __webpack_require__(103),
    'BiBestFirstFinder'         : __webpack_require__(478),
    'BiBreadthFirstFinder'      : __webpack_require__(479),
    'BiDijkstraFinder'          : __webpack_require__(480),
    'IDAStarFinder'             : __webpack_require__(481),
    'JumpPointFinder'           : __webpack_require__(482),
};


/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// Generated by CoffeeScript 1.8.0
(function() {
  var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;

  floor = Math.floor, min = Math.min;


  /*
  Default comparison function to be used
   */

  defaultCmp = function(x, y) {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  };


  /*
  Insert item x in list a, and keep it sorted assuming a is sorted.
  
  If x is already in a, insert it to the right of the rightmost x.
  
  Optional args lo (default 0) and hi (default a.length) bound the slice
  of a to be searched.
   */

  insort = function(a, x, lo, hi, cmp) {
    var mid;
    if (lo == null) {
      lo = 0;
    }
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (lo < 0) {
      throw new Error('lo must be non-negative');
    }
    if (hi == null) {
      hi = a.length;
    }
    while (lo < hi) {
      mid = floor((lo + hi) / 2);
      if (cmp(x, a[mid]) < 0) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return ([].splice.apply(a, [lo, lo - lo].concat(x)), x);
  };


  /*
  Push item onto heap, maintaining the heap invariant.
   */

  heappush = function(array, item, cmp) {
    if (cmp == null) {
      cmp = defaultCmp;
    }
    array.push(item);
    return _siftdown(array, 0, array.length - 1, cmp);
  };


  /*
  Pop the smallest item off the heap, maintaining the heap invariant.
   */

  heappop = function(array, cmp) {
    var lastelt, returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    lastelt = array.pop();
    if (array.length) {
      returnitem = array[0];
      array[0] = lastelt;
      _siftup(array, 0, cmp);
    } else {
      returnitem = lastelt;
    }
    return returnitem;
  };


  /*
  Pop and return the current smallest value, and add the new item.
  
  This is more efficient than heappop() followed by heappush(), and can be
  more appropriate when using a fixed size heap. Note that the value
  returned may be larger than item! That constrains reasonable use of
  this routine unless written as part of a conditional replacement:
      if item > array[0]
        item = heapreplace(array, item)
   */

  heapreplace = function(array, item, cmp) {
    var returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    returnitem = array[0];
    array[0] = item;
    _siftup(array, 0, cmp);
    return returnitem;
  };


  /*
  Fast version of a heappush followed by a heappop.
   */

  heappushpop = function(array, item, cmp) {
    var _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (array.length && cmp(array[0], item) < 0) {
      _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];
      _siftup(array, 0, cmp);
    }
    return item;
  };


  /*
  Transform list into a heap, in-place, in O(array.length) time.
   */

  heapify = function(array, cmp) {
    var i, _i, _j, _len, _ref, _ref1, _results, _results1;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    _ref1 = (function() {
      _results1 = [];
      for (var _j = 0, _ref = floor(array.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--){ _results1.push(_j); }
      return _results1;
    }).apply(this).reverse();
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      i = _ref1[_i];
      _results.push(_siftup(array, i, cmp));
    }
    return _results;
  };


  /*
  Update the position of the given item in the heap.
  This function should be called every time the item is being modified.
   */

  updateItem = function(array, item, cmp) {
    var pos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    pos = array.indexOf(item);
    if (pos === -1) {
      return;
    }
    _siftdown(array, 0, pos, cmp);
    return _siftup(array, pos, cmp);
  };


  /*
  Find the n largest elements in a dataset.
   */

  nlargest = function(array, n, cmp) {
    var elem, result, _i, _len, _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    result = array.slice(0, n);
    if (!result.length) {
      return result;
    }
    heapify(result, cmp);
    _ref = array.slice(n);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      elem = _ref[_i];
      heappushpop(result, elem, cmp);
    }
    return result.sort(cmp).reverse();
  };


  /*
  Find the n smallest elements in a dataset.
   */

  nsmallest = function(array, n, cmp) {
    var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (n * 10 <= array.length) {
      result = array.slice(0, n).sort(cmp);
      if (!result.length) {
        return result;
      }
      los = result[result.length - 1];
      _ref = array.slice(n);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elem = _ref[_i];
        if (cmp(elem, los) < 0) {
          insort(result, elem, 0, null, cmp);
          result.pop();
          los = result[result.length - 1];
        }
      }
      return result;
    }
    heapify(array, cmp);
    _results = [];
    for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
      _results.push(heappop(array, cmp));
    }
    return _results;
  };

  _siftdown = function(array, startpos, pos, cmp) {
    var newitem, parent, parentpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    newitem = array[pos];
    while (pos > startpos) {
      parentpos = (pos - 1) >> 1;
      parent = array[parentpos];
      if (cmp(newitem, parent) < 0) {
        array[pos] = parent;
        pos = parentpos;
        continue;
      }
      break;
    }
    return array[pos] = newitem;
  };

  _siftup = function(array, pos, cmp) {
    var childpos, endpos, newitem, rightpos, startpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    endpos = array.length;
    startpos = pos;
    newitem = array[pos];
    childpos = 2 * pos + 1;
    while (childpos < endpos) {
      rightpos = childpos + 1;
      if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {
        childpos = rightpos;
      }
      array[pos] = array[childpos];
      pos = childpos;
      childpos = 2 * pos + 1;
    }
    array[pos] = newitem;
    return _siftdown(array, startpos, pos, cmp);
  };

  Heap = (function() {
    Heap.push = heappush;

    Heap.pop = heappop;

    Heap.replace = heapreplace;

    Heap.pushpop = heappushpop;

    Heap.heapify = heapify;

    Heap.updateItem = updateItem;

    Heap.nlargest = nlargest;

    Heap.nsmallest = nsmallest;

    function Heap(cmp) {
      this.cmp = cmp != null ? cmp : defaultCmp;
      this.nodes = [];
    }

    Heap.prototype.push = function(x) {
      return heappush(this.nodes, x, this.cmp);
    };

    Heap.prototype.pop = function() {
      return heappop(this.nodes, this.cmp);
    };

    Heap.prototype.peek = function() {
      return this.nodes[0];
    };

    Heap.prototype.contains = function(x) {
      return this.nodes.indexOf(x) !== -1;
    };

    Heap.prototype.replace = function(x) {
      return heapreplace(this.nodes, x, this.cmp);
    };

    Heap.prototype.pushpop = function(x) {
      return heappushpop(this.nodes, x, this.cmp);
    };

    Heap.prototype.heapify = function() {
      return heapify(this.nodes, this.cmp);
    };

    Heap.prototype.updateItem = function(x) {
      return updateItem(this.nodes, x, this.cmp);
    };

    Heap.prototype.clear = function() {
      return this.nodes = [];
    };

    Heap.prototype.empty = function() {
      return this.nodes.length === 0;
    };

    Heap.prototype.size = function() {
      return this.nodes.length;
    };

    Heap.prototype.clone = function() {
      var heap;
      heap = new Heap();
      heap.nodes = this.nodes.slice(0);
      return heap;
    };

    Heap.prototype.toArray = function() {
      return this.nodes.slice(0);
    };

    Heap.prototype.insert = Heap.prototype.push;

    Heap.prototype.top = Heap.prototype.peek;

    Heap.prototype.front = Heap.prototype.peek;

    Heap.prototype.has = Heap.prototype.contains;

    Heap.prototype.copy = Heap.prototype.clone;

    return Heap;

  })();

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = Heap;
  } else {
    window.Heap = Heap;
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(473)(module)))

/***/ }),
/* 473 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

var Node = __webpack_require__(101);
var DiagonalMovement = __webpack_require__(14);

/**
 * The Grid class, which serves as the encapsulation of the layout of the nodes.
 * @constructor
 * @param {number|Array<Array<(number|boolean)>>} width_or_matrix Number of columns of the grid, or matrix
 * @param {number} height Number of rows of the grid.
 * @param {Array<Array<(number|boolean)>>} [matrix] - A 0-1 matrix
 *     representing the walkable status of the nodes(0 or false for walkable).
 *     If the matrix is not supplied, all the nodes will be walkable.  */
function Grid(width_or_matrix, height, matrix) {
    var width;

    if (typeof width_or_matrix !== 'object') {
        width = width_or_matrix;
    } else {
        height = width_or_matrix.length;
        width = width_or_matrix[0].length;
        matrix = width_or_matrix;
    }

    /**
     * The number of columns of the grid.
     * @type number
     */
    this.width = width;
    /**
     * The number of rows of the grid.
     * @type number
     */
    this.height = height;

    /**
     * A 2D array of nodes.
     */
    this.nodes = this._buildNodes(width, height, matrix);
}

/**
 * Build and return the nodes.
 * @private
 * @param {number} width
 * @param {number} height
 * @param {Array<Array<number|boolean>>} [matrix] - A 0-1 matrix representing
 *     the walkable status of the nodes.
 * @see Grid
 */
Grid.prototype._buildNodes = function(width, height, matrix) {
    var i, j,
        nodes = new Array(height);

    for (i = 0; i < height; ++i) {
        nodes[i] = new Array(width);
        for (j = 0; j < width; ++j) {
            nodes[i][j] = new Node(j, i);
        }
    }


    if (matrix === undefined) {
        return nodes;
    }

    if (matrix.length !== height || matrix[0].length !== width) {
        throw new Error('Matrix size does not fit');
    }

    for (i = 0; i < height; ++i) {
        for (j = 0; j < width; ++j) {
            if (matrix[i][j]) {
                // 0, false, null will be walkable
                // while others will be un-walkable
                nodes[i][j].walkable = false;
            }
        }
    }

    return nodes;
};


Grid.prototype.getNodeAt = function(x, y) {
    return this.nodes[y][x];
};


/**
 * Determine whether the node at the given position is walkable.
 * (Also returns false if the position is outside the grid.)
 * @param {number} x - The x coordinate of the node.
 * @param {number} y - The y coordinate of the node.
 * @return {boolean} - The walkability of the node.
 */
Grid.prototype.isWalkableAt = function(x, y) {
    return this.isInside(x, y) && this.nodes[y][x].walkable;
};


/**
 * Determine whether the position is inside the grid.
 * XXX: `grid.isInside(x, y)` is wierd to read.
 * It should be `(x, y) is inside grid`, but I failed to find a better
 * name for this method.
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
Grid.prototype.isInside = function(x, y) {
    return (x >= 0 && x < this.width) && (y >= 0 && y < this.height);
};


/**
 * Set whether the node on the given position is walkable.
 * NOTE: throws exception if the coordinate is not inside the grid.
 * @param {number} x - The x coordinate of the node.
 * @param {number} y - The y coordinate of the node.
 * @param {boolean} walkable - Whether the position is walkable.
 */
Grid.prototype.setWalkableAt = function(x, y, walkable) {
    this.nodes[y][x].walkable = walkable;
};


/**
 * Get the neighbors of the given node.
 *
 *     offsets      diagonalOffsets:
 *  +---+---+---+    +---+---+---+
 *  |   | 0 |   |    | 0 |   | 1 |
 *  +---+---+---+    +---+---+---+
 *  | 3 |   | 1 |    |   |   |   |
 *  +---+---+---+    +---+---+---+
 *  |   | 2 |   |    | 3 |   | 2 |
 *  +---+---+---+    +---+---+---+
 *
 *  When allowDiagonal is true, if offsets[i] is valid, then
 *  diagonalOffsets[i] and
 *  diagonalOffsets[(i + 1) % 4] is valid.
 * @param {Node} node
 * @param {DiagonalMovement} diagonalMovement
 */
Grid.prototype.getNeighbors = function(node, diagonalMovement) {
    var x = node.x,
        y = node.y,
        neighbors = [],
        s0 = false, d0 = false,
        s1 = false, d1 = false,
        s2 = false, d2 = false,
        s3 = false, d3 = false,
        nodes = this.nodes;

    // ↑
    if (this.isWalkableAt(x, y - 1)) {
        neighbors.push(nodes[y - 1][x]);
        s0 = true;
    }
    // →
    if (this.isWalkableAt(x + 1, y)) {
        neighbors.push(nodes[y][x + 1]);
        s1 = true;
    }
    // ↓
    if (this.isWalkableAt(x, y + 1)) {
        neighbors.push(nodes[y + 1][x]);
        s2 = true;
    }
    // ←
    if (this.isWalkableAt(x - 1, y)) {
        neighbors.push(nodes[y][x - 1]);
        s3 = true;
    }

    if (diagonalMovement === DiagonalMovement.Never) {
        return neighbors;
    }

    if (diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {
        d0 = s3 && s0;
        d1 = s0 && s1;
        d2 = s1 && s2;
        d3 = s2 && s3;
    } else if (diagonalMovement === DiagonalMovement.IfAtMostOneObstacle) {
        d0 = s3 || s0;
        d1 = s0 || s1;
        d2 = s1 || s2;
        d3 = s2 || s3;
    } else if (diagonalMovement === DiagonalMovement.Always) {
        d0 = true;
        d1 = true;
        d2 = true;
        d3 = true;
    } else {
        throw new Error('Incorrect value of diagonalMovement');
    }

    // ↖
    if (d0 && this.isWalkableAt(x - 1, y - 1)) {
        neighbors.push(nodes[y - 1][x - 1]);
    }
    // ↗
    if (d1 && this.isWalkableAt(x + 1, y - 1)) {
        neighbors.push(nodes[y - 1][x + 1]);
    }
    // ↘
    if (d2 && this.isWalkableAt(x + 1, y + 1)) {
        neighbors.push(nodes[y + 1][x + 1]);
    }
    // ↙
    if (d3 && this.isWalkableAt(x - 1, y + 1)) {
        neighbors.push(nodes[y + 1][x - 1]);
    }

    return neighbors;
};


/**
 * Get a clone of this grid.
 * @return {Grid} Cloned grid.
 */
Grid.prototype.clone = function() {
    var i, j,

        width = this.width,
        height = this.height,
        thisNodes = this.nodes,

        newGrid = new Grid(width, height),
        newNodes = new Array(height);

    for (i = 0; i < height; ++i) {
        newNodes[i] = new Array(width);
        for (j = 0; j < width; ++j) {
            newNodes[i][j] = new Node(j, i, thisNodes[i][j].walkable);
        }
    }

    newGrid.nodes = newNodes;

    return newGrid;
};

module.exports = Grid;


/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

var AStarFinder = __webpack_require__(102);

/**
 * Best-First-Search path-finder.
 * @constructor
 * @extends AStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 */
function BestFirstFinder(opt) {
    AStarFinder.call(this, opt);

    var orig = this.heuristic;
    this.heuristic = function(dx, dy) {
        return orig(dx, dy) * 1000000;
    };
}

BestFirstFinder.prototype = new AStarFinder();
BestFirstFinder.prototype.constructor = BestFirstFinder;

module.exports = BestFirstFinder;


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(44);
var DiagonalMovement = __webpack_require__(14);

/**
 * Breadth-First-Search path finder.
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function BreadthFirstFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
BreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var openList = [],
        diagonalMovement = this.diagonalMovement,
        startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        neighbors, neighbor, node, i, l;

    // push the start pos into the queue
    openList.push(startNode);
    startNode.opened = true;

    // while the queue is not empty
    while (openList.length) {
        // take the front node from the queue
        node = openList.shift();
        node.closed = true;

        // reached the end position
        if (node === endNode) {
            return Util.backtrace(endNode);
        }

        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            // skip this neighbor if it has been inspected before
            if (neighbor.closed || neighbor.opened) {
                continue;
            }

            openList.push(neighbor);
            neighbor.opened = true;
            neighbor.parent = node;
        }
    }
    
    // fail to find the path
    return [];
};

module.exports = BreadthFirstFinder;


/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

var AStarFinder = __webpack_require__(102);

/**
 * Dijkstra path-finder.
 * @constructor
 * @extends AStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function DijkstraFinder(opt) {
    AStarFinder.call(this, opt);
    this.heuristic = function(dx, dy) {
        return 0;
    };
}

DijkstraFinder.prototype = new AStarFinder();
DijkstraFinder.prototype.constructor = DijkstraFinder;

module.exports = DijkstraFinder;


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

var BiAStarFinder = __webpack_require__(103);

/**
 * Bi-direcitional Best-First-Search path-finder.
 * @constructor
 * @extends BiAStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 */
function BiBestFirstFinder(opt) {
    BiAStarFinder.call(this, opt);

    var orig = this.heuristic;
    this.heuristic = function(dx, dy) {
        return orig(dx, dy) * 1000000;
    };
}

BiBestFirstFinder.prototype = new BiAStarFinder();
BiBestFirstFinder.prototype.constructor = BiBestFirstFinder;

module.exports = BiBestFirstFinder;


/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(44);
var DiagonalMovement = __webpack_require__(14);

/**
 * Bi-directional Breadth-First-Search path finder.
 * @constructor
 * @param {object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function BiBreadthFirstFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }
}


/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
BiBreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        startOpenList = [], endOpenList = [],
        neighbors, neighbor, node,
        diagonalMovement = this.diagonalMovement,
        BY_START = 0, BY_END = 1,
        i, l;

    // push the start and end nodes into the queues
    startOpenList.push(startNode);
    startNode.opened = true;
    startNode.by = BY_START;

    endOpenList.push(endNode);
    endNode.opened = true;
    endNode.by = BY_END;

    // while both the queues are not empty
    while (startOpenList.length && endOpenList.length) {

        // expand start open list

        node = startOpenList.shift();
        node.closed = true;

        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened) {
                // if this node has been inspected by the reversed search,
                // then a path is found.
                if (neighbor.by === BY_END) {
                    return Util.biBacktrace(node, neighbor);
                }
                continue;
            }
            startOpenList.push(neighbor);
            neighbor.parent = node;
            neighbor.opened = true;
            neighbor.by = BY_START;
        }

        // expand end open list

        node = endOpenList.shift();
        node.closed = true;

        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened) {
                if (neighbor.by === BY_START) {
                    return Util.biBacktrace(neighbor, node);
                }
                continue;
            }
            endOpenList.push(neighbor);
            neighbor.parent = node;
            neighbor.opened = true;
            neighbor.by = BY_END;
        }
    }

    // fail to find the path
    return [];
};

module.exports = BiBreadthFirstFinder;


/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

var BiAStarFinder = __webpack_require__(103);

/**
 * Bi-directional Dijkstra path-finder.
 * @constructor
 * @extends BiAStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function BiDijkstraFinder(opt) {
    BiAStarFinder.call(this, opt);
    this.heuristic = function(dx, dy) {
        return 0;
    };
}

BiDijkstraFinder.prototype = new BiAStarFinder();
BiDijkstraFinder.prototype.constructor = BiDijkstraFinder;

module.exports = BiDijkstraFinder;


/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

var Util       = __webpack_require__(44);
var Heuristic  = __webpack_require__(53);
var Node       = __webpack_require__(101);
var DiagonalMovement = __webpack_require__(14);

/**
 * Iterative Deeping A Star (IDA*) path-finder.
 *
 * Recursion based on:
 *   http://www.apl.jhu.edu/~hall/AI-Programming/IDA-Star.html
 *
 * Path retracing based on:
 *  V. Nageshwara Rao, Vipin Kumar and K. Ramesh
 *  "A Parallel Implementation of Iterative-Deeping-A*", January 1987.
 *  ftp://ftp.cs.utexas.edu/.snapshot/hourly.1/pub/AI-Lab/tech-reports/UT-AI-TR-87-46.pdf
 *
 * @author Gerard Meier (www.gerardmeier.com)
 *
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {number} opt.weight Weight to apply to the heuristic to allow for
 *     suboptimal paths, in order to speed up the search.
 * @param {boolean} opt.trackRecursion Whether to track recursion for
 *     statistical purposes.
 * @param {number} opt.timeLimit Maximum execution time. Use <= 0 for infinite.
 */
function IDAStarFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.weight = opt.weight || 1;
    this.trackRecursion = opt.trackRecursion || false;
    this.timeLimit = opt.timeLimit || Infinity; // Default: no time limit.

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }

    // When diagonal movement is allowed the manhattan heuristic is not
    // admissible, it should be octile instead
    if (this.diagonalMovement === DiagonalMovement.Never) {
        this.heuristic = opt.heuristic || Heuristic.manhattan;
    } else {
        this.heuristic = opt.heuristic || Heuristic.octile;
    }
}

/**
 * Find and return the the path. When an empty array is returned, either
 * no path is possible, or the maximum execution time is reached.
 *
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
IDAStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    // Used for statistics:
    var nodesVisited = 0;

    // Execution time limitation:
    var startTime = new Date().getTime();

    // Heuristic helper:
    var h = function(a, b) {
        return this.heuristic(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
    }.bind(this);

    // Step cost from a to b:
    var cost = function(a, b) {
        return (a.x === b.x || a.y === b.y) ? 1 : Math.SQRT2;
    };

    /**
     * IDA* search implementation.
     *
     * @param {Node} The node currently expanding from.
     * @param {number} Cost to reach the given node.
     * @param {number} Maximum search depth (cut-off value).
     * @param {Array<Array<number>>} The found route.
     * @param {number} Recursion depth.
     *
     * @return {Object} either a number with the new optimal cut-off depth,
     * or a valid node instance, in which case a path was found.
     */
    var search = function(node, g, cutoff, route, depth) {
        nodesVisited++;

        // Enforce timelimit:
        if (this.timeLimit > 0 &&
            new Date().getTime() - startTime > this.timeLimit * 1000) {
            // Enforced as "path-not-found".
            return Infinity;
        }

        var f = g + h(node, end) * this.weight;

        // We've searched too deep for this iteration.
        if (f > cutoff) {
            return f;
        }

        if (node == end) {
            route[depth] = [node.x, node.y];
            return node;
        }

        var min, t, k, neighbour;

        var neighbours = grid.getNeighbors(node, this.diagonalMovement);

        // Sort the neighbours, gives nicer paths. But, this deviates
        // from the original algorithm - so I left it out.
        //neighbours.sort(function(a, b){
        //    return h(a, end) - h(b, end);
        //});

        
        /*jshint -W084 *///Disable warning: Expected a conditional expression and instead saw an assignment
        for (k = 0, min = Infinity; neighbour = neighbours[k]; ++k) {
        /*jshint +W084 *///Enable warning: Expected a conditional expression and instead saw an assignment
            if (this.trackRecursion) {
                // Retain a copy for visualisation. Due to recursion, this
                // node may be part of other paths too.
                neighbour.retainCount = neighbour.retainCount + 1 || 1;

                if(neighbour.tested !== true) {
                    neighbour.tested = true;
                }
            }

            t = search(neighbour, g + cost(node, neighbour), cutoff, route, depth + 1);

            if (t instanceof Node) {
                route[depth] = [node.x, node.y];

                // For a typical A* linked list, this would work:
                // neighbour.parent = node;
                return t;
            }

            // Decrement count, then determine whether it's actually closed.
            if (this.trackRecursion && (--neighbour.retainCount) === 0) {
                neighbour.tested = false;
            }

            if (t < min) {
                min = t;
            }
        }

        return min;

    }.bind(this);

    // Node instance lookups:
    var start = grid.getNodeAt(startX, startY);
    var end   = grid.getNodeAt(endX, endY);

    // Initial search depth, given the typical heuristic contraints,
    // there should be no cheaper route possible.
    var cutOff = h(start, end);

    var j, route, t;

    // With an overflow protection.
    for (j = 0; true; ++j) {

        route = [];

        // Search till cut-off depth:
        t = search(start, 0, cutOff, route, 0);

        // Route not possible, or not found in time limit.
        if (t === Infinity) {
            return [];
        }

        // If t is a node, it's also the end node. Route is now
        // populated with a valid path to the end node.
        if (t instanceof Node) {
            return route;
        }

        // Try again, this time with a deeper cut-off. The t score
        // is the closest we got to the end node.
        cutOff = t;
    }

    // This _should_ never to be reached.
    return [];
};

module.exports = IDAStarFinder;


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author aniero / https://github.com/aniero
 */
var DiagonalMovement = __webpack_require__(14);
var JPFNeverMoveDiagonally = __webpack_require__(483);
var JPFAlwaysMoveDiagonally = __webpack_require__(484);
var JPFMoveDiagonallyIfNoObstacles = __webpack_require__(485);
var JPFMoveDiagonallyIfAtMostOneObstacle = __webpack_require__(486);

/**
 * Path finder using the Jump Point Search algorithm
 * @param {Object} opt
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {DiagonalMovement} opt.diagonalMovement Condition under which diagonal
 *      movement will be allowed.
 */
function JumpPointFinder(opt) {
    opt = opt || {};
    if (opt.diagonalMovement === DiagonalMovement.Never) {
        return new JPFNeverMoveDiagonally(opt);
    } else if (opt.diagonalMovement === DiagonalMovement.Always) {
        return new JPFAlwaysMoveDiagonally(opt);
    } else if (opt.diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {
        return new JPFMoveDiagonallyIfNoObstacles(opt);
    } else {
        return new JPFMoveDiagonallyIfAtMostOneObstacle(opt);
    }
}

module.exports = JumpPointFinder;


/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = __webpack_require__(70);
var DiagonalMovement = __webpack_require__(14);

/**
 * Path finder using the Jump Point Search algorithm allowing only horizontal
 * or vertical movements.
 */
function JPFNeverMoveDiagonally(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFNeverMoveDiagonally.prototype = new JumpPointFinderBase();
JPFNeverMoveDiagonally.prototype.constructor = JPFNeverMoveDiagonally;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFNeverMoveDiagonally.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    if (dx !== 0) {
        if ((grid.isWalkableAt(x, y - 1) && !grid.isWalkableAt(x - dx, y - 1)) ||
            (grid.isWalkableAt(x, y + 1) && !grid.isWalkableAt(x - dx, y + 1))) {
            return [x, y];
        }
    }
    else if (dy !== 0) {
        if ((grid.isWalkableAt(x - 1, y) && !grid.isWalkableAt(x - 1, y - dy)) ||
            (grid.isWalkableAt(x + 1, y) && !grid.isWalkableAt(x + 1, y - dy))) {
            return [x, y];
        }
        //When moving vertically, must check for horizontal jump points
        if (this._jump(x + 1, y, x, y) || this._jump(x - 1, y, x, y)) {
            return [x, y];
        }
    }
    else {
        throw new Error("Only horizontal and vertical movements are allowed");
    }

    return this._jump(x + dx, y + dy, x, y);
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFNeverMoveDiagonally.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        if (dx !== 0) {
            if (grid.isWalkableAt(x, y - 1)) {
                neighbors.push([x, y - 1]);
            }
            if (grid.isWalkableAt(x, y + 1)) {
                neighbors.push([x, y + 1]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
        }
        else if (dy !== 0) {
            if (grid.isWalkableAt(x - 1, y)) {
                neighbors.push([x - 1, y]);
            }
            if (grid.isWalkableAt(x + 1, y)) {
                neighbors.push([x + 1, y]);
            }
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.Never);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFNeverMoveDiagonally;


/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = __webpack_require__(70);
var DiagonalMovement = __webpack_require__(14);

/**
 * Path finder using the Jump Point Search algorithm which always moves
 * diagonally irrespective of the number of obstacles.
 */
function JPFAlwaysMoveDiagonally(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFAlwaysMoveDiagonally.prototype = new JumpPointFinderBase();
JPFAlwaysMoveDiagonally.prototype.constructor = JPFAlwaysMoveDiagonally;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFAlwaysMoveDiagonally.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    // check for forced neighbors
    // along the diagonal
    if (dx !== 0 && dy !== 0) {
        if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
            (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
            return [x, y];
        }
        // when moving diagonally, must check for vertical/horizontal jump points
        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
        }
    }
    // horizontally/vertically
    else {
        if( dx !== 0 ) { // moving along x
            if((grid.isWalkableAt(x + dx, y + 1) && !grid.isWalkableAt(x, y + 1)) ||
               (grid.isWalkableAt(x + dx, y - 1) && !grid.isWalkableAt(x, y - 1))) {
                return [x, y];
            }
        }
        else {
            if((grid.isWalkableAt(x + 1, y + dy) && !grid.isWalkableAt(x + 1, y)) ||
               (grid.isWalkableAt(x - 1, y + dy) && !grid.isWalkableAt(x - 1, y))) {
                return [x, y];
            }
        }
    }

    return this._jump(x + dx, y + dy, x, y);
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFAlwaysMoveDiagonally.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        // search diagonally
        if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x + dx, y + dy)) {
                neighbors.push([x + dx, y + dy]);
            }
            if (!grid.isWalkableAt(x - dx, y)) {
                neighbors.push([x - dx, y + dy]);
            }
            if (!grid.isWalkableAt(x, y - dy)) {
                neighbors.push([x + dx, y - dy]);
            }
        }
        // search horizontally/vertically
        else {
            if(dx === 0) {
                if (grid.isWalkableAt(x, y + dy)) {
                    neighbors.push([x, y + dy]);
                }
                if (!grid.isWalkableAt(x + 1, y)) {
                    neighbors.push([x + 1, y + dy]);
                }
                if (!grid.isWalkableAt(x - 1, y)) {
                    neighbors.push([x - 1, y + dy]);
                }
            }
            else {
                if (grid.isWalkableAt(x + dx, y)) {
                    neighbors.push([x + dx, y]);
                }
                if (!grid.isWalkableAt(x, y + 1)) {
                    neighbors.push([x + dx, y + 1]);
                }
                if (!grid.isWalkableAt(x, y - 1)) {
                    neighbors.push([x + dx, y - 1]);
                }
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.Always);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFAlwaysMoveDiagonally;


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = __webpack_require__(70);
var DiagonalMovement = __webpack_require__(14);

/**
 * Path finder using the Jump Point Search algorithm which moves
 * diagonally only when there are no obstacles.
 */
function JPFMoveDiagonallyIfNoObstacles(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFMoveDiagonallyIfNoObstacles.prototype = new JumpPointFinderBase();
JPFMoveDiagonallyIfNoObstacles.prototype.constructor = JPFMoveDiagonallyIfNoObstacles;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFMoveDiagonallyIfNoObstacles.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    // check for forced neighbors
    // along the diagonal
    if (dx !== 0 && dy !== 0) {
        // if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
            // (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
            // return [x, y];
        // }
        // when moving diagonally, must check for vertical/horizontal jump points
        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
        }
    }
    // horizontally/vertically
    else {
        if (dx !== 0) {
            if ((grid.isWalkableAt(x, y - 1) && !grid.isWalkableAt(x - dx, y - 1)) ||
                (grid.isWalkableAt(x, y + 1) && !grid.isWalkableAt(x - dx, y + 1))) {
                return [x, y];
            }
        }
        else if (dy !== 0) {
            if ((grid.isWalkableAt(x - 1, y) && !grid.isWalkableAt(x - 1, y - dy)) ||
                (grid.isWalkableAt(x + 1, y) && !grid.isWalkableAt(x + 1, y - dy))) {
                return [x, y];
            }
            // When moving vertically, must check for horizontal jump points
            // if (this._jump(x + 1, y, x, y) || this._jump(x - 1, y, x, y)) {
                // return [x, y];
            // }
        }
    }

    // moving diagonally, must make sure one of the vertical/horizontal
    // neighbors is open to allow the path
    if (grid.isWalkableAt(x + dx, y) && grid.isWalkableAt(x, y + dy)) {
        return this._jump(x + dx, y + dy, x, y);
    } else {
        return null;
    }
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFMoveDiagonallyIfNoObstacles.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        // search diagonally
        if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x, y + dy) && grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y + dy]);
            }
        }
        // search horizontally/vertically
        else {
            var isNextWalkable;
            if (dx !== 0) {
                isNextWalkable = grid.isWalkableAt(x + dx, y);
                var isTopWalkable = grid.isWalkableAt(x, y + 1);
                var isBottomWalkable = grid.isWalkableAt(x, y - 1);

                if (isNextWalkable) {
                    neighbors.push([x + dx, y]);
                    if (isTopWalkable) {
                        neighbors.push([x + dx, y + 1]);
                    }
                    if (isBottomWalkable) {
                        neighbors.push([x + dx, y - 1]);
                    }
                }
                if (isTopWalkable) {
                    neighbors.push([x, y + 1]);
                }
                if (isBottomWalkable) {
                    neighbors.push([x, y - 1]);
                }
            }
            else if (dy !== 0) {
                isNextWalkable = grid.isWalkableAt(x, y + dy);
                var isRightWalkable = grid.isWalkableAt(x + 1, y);
                var isLeftWalkable = grid.isWalkableAt(x - 1, y);

                if (isNextWalkable) {
                    neighbors.push([x, y + dy]);
                    if (isRightWalkable) {
                        neighbors.push([x + 1, y + dy]);
                    }
                    if (isLeftWalkable) {
                        neighbors.push([x - 1, y + dy]);
                    }
                }
                if (isRightWalkable) {
                    neighbors.push([x + 1, y]);
                }
                if (isLeftWalkable) {
                    neighbors.push([x - 1, y]);
                }
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.OnlyWhenNoObstacles);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFMoveDiagonallyIfNoObstacles;


/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = __webpack_require__(70);
var DiagonalMovement = __webpack_require__(14);

/**
 * Path finder using the Jump Point Search algorithm which moves
 * diagonally only when there is at most one obstacle.
 */
function JPFMoveDiagonallyIfAtMostOneObstacle(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFMoveDiagonallyIfAtMostOneObstacle.prototype = new JumpPointFinderBase();
JPFMoveDiagonallyIfAtMostOneObstacle.prototype.constructor = JPFMoveDiagonallyIfAtMostOneObstacle;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFMoveDiagonallyIfAtMostOneObstacle.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    // check for forced neighbors
    // along the diagonal
    if (dx !== 0 && dy !== 0) {
        if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
            (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
            return [x, y];
        }
        // when moving diagonally, must check for vertical/horizontal jump points
        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
        }
    }
    // horizontally/vertically
    else {
        if( dx !== 0 ) { // moving along x
            if((grid.isWalkableAt(x + dx, y + 1) && !grid.isWalkableAt(x, y + 1)) ||
               (grid.isWalkableAt(x + dx, y - 1) && !grid.isWalkableAt(x, y - 1))) {
                return [x, y];
            }
        }
        else {
            if((grid.isWalkableAt(x + 1, y + dy) && !grid.isWalkableAt(x + 1, y)) ||
               (grid.isWalkableAt(x - 1, y + dy) && !grid.isWalkableAt(x - 1, y))) {
                return [x, y];
            }
        }
    }

    // moving diagonally, must make sure one of the vertical/horizontal
    // neighbors is open to allow the path
    if (grid.isWalkableAt(x + dx, y) || grid.isWalkableAt(x, y + dy)) {
        return this._jump(x + dx, y + dy, x, y);
    } else {
        return null;
    }
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFMoveDiagonallyIfAtMostOneObstacle.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        // search diagonally
        if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x, y + dy) || grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y + dy]);
            }
            if (!grid.isWalkableAt(x - dx, y) && grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x - dx, y + dy]);
            }
            if (!grid.isWalkableAt(x, y - dy) && grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y - dy]);
            }
        }
        // search horizontally/vertically
        else {
            if(dx === 0) {
                if (grid.isWalkableAt(x, y + dy)) {
                    neighbors.push([x, y + dy]);
                    if (!grid.isWalkableAt(x + 1, y)) {
                        neighbors.push([x + 1, y + dy]);
                    }
                    if (!grid.isWalkableAt(x - 1, y)) {
                        neighbors.push([x - 1, y + dy]);
                    }
                }
            }
            else {
                if (grid.isWalkableAt(x + dx, y)) {
                    neighbors.push([x + dx, y]);
                    if (!grid.isWalkableAt(x, y + 1)) {
                        neighbors.push([x + dx, y + 1]);
                    }
                    if (!grid.isWalkableAt(x, y - 1)) {
                        neighbors.push([x + dx, y - 1]);
                    }
                }
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.IfAtMostOneObstacle);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFMoveDiagonallyIfAtMostOneObstacle;


/***/ }),
/* 487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
    function Camera(camera, game) {
        _classCallCheck(this, Camera);

        this.scale = camera.scale;
        this.camera = camera;
        this.game = game;
        this.bounds = Phaser.Rectangle.clone(this.game.camera.bounds);
    }

    _createClass(Camera, [{
        key: "zoomTo",
        value: function zoomTo(scale, duration) {
            var bounds = this.bounds;
            this.scale = scale;
            var cameraBounds = this.game.camera.bounds;
            game.add.tween(cameraBounds).to({
                x: bounds.width * (1 - scale) / 2,
                y: bounds.height * (1 - scale) / 2,
                width: bounds.width * scale,
                height: bounds.height * scale
            }, duration).start();
            return game.add.tween(this.game.camera.scale).to({
                x: scale, y: scale
            }, duration).start();
        }
    }]);

    return Camera;
}();

/* harmony default export */ __webpack_exports__["a"] = (Camera);

/***/ }),
/* 488 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_js__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DefaultBehavior_js__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ManuallyBehavior_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tweet_js__ = __webpack_require__(490);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Tweets = function () {
  function Tweets(game) {
    _classCallCheck(this, Tweets);

    this.game = game;
    this.queue = [];
    this.executing = false;
    this.showedTweet = [];
  }

  _createClass(Tweets, [{
    key: 'find',
    value: function find(selector) {
      var filtered = Object.values(__WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* default */]);
      var sKeys = Object.keys(selector);
      if (sKeys.length === 1 && typeof selector['id'] !== 'undefined') return [__WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* default */][selector['id']]];

      return filtered.filter(function (tw) {
        var st = false;
        Object.keys(selector).forEach(function (key) {
          if (tw[key] == selector[key]) st = true;else st = false;
        });
        return st;
      });
    }
  }, {
    key: 'resetShowedTweets',
    value: function resetShowedTweets() {
      this.showedTweet = [];
    }
  }, {
    key: 'rTweet',
    value: function rTweet(selector, options) {
      var _this = this;

      var tweets = this.find(selector);
      var tweet = void 0;
      if (tweets.length > 0) {
        // debugger;
        var tweetsIds = tweets.map(function (tw) {
          return tw.id;
        }).filter(function (id) {
          return _this.showedTweet.indexOf(id) < 0;
        });
        // console.log('n.kozh tweets_ids', tweetsIds);
        if (tweetsIds.length == 0) {
          console.warn('Твиты такого типа уже все показаны');
          return null;
        }

        var tweet_id = tweetsIds[this.game.rnd.integerInRange(0, tweetsIds.length - 1)];
        this.showedTweet.push(tweet_id);
        tweet = tweets.find(function (tw) {
          return tw.id === tweet_id;
        });
      }
      //console.log('n.kozh rTweet called', tweet);
      return this._tweet({
        text: tweet.text,
        name: tweet.name,
        image: tweet.nickname
      }, options);
    }
  }, {
    key: '_tweet',
    value: function _tweet(tweet) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      //console.log('n.kozh _tweet called', tweet);
      var tweetInstance = this.createTweet(tweet, options);
      tweetInstance.destroy.add(function () {
        _this2.removeFromQueue(tweetInstance);
      });
      //console.log('tw instance', tweetInstance);
      if (tweetInstance.behavior instanceof __WEBPACK_IMPORTED_MODULE_2__ManuallyBehavior_js__["a" /* default */]) {
        this.pushToQueue(tweetInstance, true);
      } else {
        this.pushToQueue(tweetInstance);
      }
      this.startQueue();
      return tweetInstance;
    }
  }, {
    key: 'tweet',
    value: function tweet(text, image, options) {
      window._Tweets = this;
      //console.log('n.kozh tweet called', text, image)
      return this._tweet({
        text: text, image: image
      }, options);
    }
  }, {
    key: 'createTweet',
    value: function createTweet(data, options) {
      var anim = {
        visible: options.visible || 1000,
        fadeOut: options.fadeOut || 500,
        fadeIn: options.fadeIn || 1000
      };
      var custom = {
        fontSize: options.fontSize
      };

      var behavior = options.behavior || __WEBPACK_IMPORTED_MODULE_1__DefaultBehavior_js__["a" /* default */];

      var tweet = new __WEBPACK_IMPORTED_MODULE_3__Tweet_js__["a" /* default */](data, anim, custom);
      tweet.set('game', this.game);
      tweet.setBehavior(behavior);

      tweet.build();
      return tweet;
    }
  }, {
    key: 'pushToQueue',
    value: function pushToQueue(tweetInstance) {
      var toHead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (toHead) {
        this.queue.unshift(tweetInstance);
      } else {
        this.queue.push(tweetInstance);
      }
    }
  }, {
    key: 'removeFromQueue',
    value: function removeFromQueue(tweetInstance) {
      for (var i = 0; i < this.queue.length; i++) {
        if (this.queue[i] === tweetInstance) this.queue.splice(i, 1);
      }
    }
  }, {
    key: 'startQueue',
    value: function startQueue() {
      //console.log('n.kozh start Queue executing status', this.executing);
      if (this.executing) return;

      if (this.queue.length) {
        this.processTask(this.queue.shift());
      }
    }
  }, {
    key: 'processTask',
    value: function processTask(tweet) {
      var _this3 = this;

      this.executing = true;
      this.currentTweet = tweet;
      tweet.show();

      tweet.nextTweet.add(function () {
        _this3.executing = false;
        _this3.startQueue();
      });
    }
  }]);

  return Tweets;
}();

/* harmony default export */ __webpack_exports__["a"] = (Tweets);

/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /* arrest */
  0: {
    id: 0,
    name: "Денис Стяжкин",
    text: "#Москва на Белорусской задержали уже 10 человек",
    nickname: "styazshkin",
    type: "arrest"
  },
  1: {
    id: 1,
    name: "Грани.ру",
    text: "У Пушкина начали задерживать праздношатающихся",
    nickname: "granitweet",
    type: "arrest"
  },
  2: {
    id: 2,
    name: "Vyacheslav Gimadi",
    text: "Меня задержали. Шёл по Тверской в кроссовках. #ДимонОтветит и мы победим!",
    nickname: "vigimadi",
    type: "arrest"
  },
  3: {
    id: 3,
    name: "ОВД-Инфо",
    text: "В Москве на акциях против коррупции задержано более 130 человек. Задержания в настоящий момент продолжаются на Тверской.",
    nickname: "ovdinfo",
    type: "arrest"
  },
  4: {
    id: 4,
    name: "мутабор",
    text: "даже не дошла до митинга и уже в автозаке",
    nickname: "koshelyaeva",
    type: "arrest"
  },
  5: {
    id: 5,
    name: "Andrey Pivovarov",
    text: "Задержали депутата Максима Резника",
    nickname: "brewerov",
    type: "arrest"
  },
  6: {
    id: 6,
    name: "швец д",
    text: "круто (увезли)",
    nickname: "asilikedem",
    type: "arrest"
  },
  7: {
    id: 7,
    name: "Александр Паль",
    text: "В автозаке тепло.",
    nickname: "fb_pal",
    type: "arrest"
  },

  /* omon */

  8: {
    id: 8,
    name: "Ян Кателевский",
    text: "Жёстко повязали, сорвали пресс карта избили ногами и лубинками, повредили трахею когда душили, били головой об автозак",
    nickname: "ya_yanson",
    type: "omon"
  },
  9: {
    id: 9,
    name: "Юлия Галямина",
    text: "Омоновец дал мне кулаком в лицо. Мужа сильно избили, сломали очки",
    nickname: "galiamina",
    type: "omon"
  },
  10: {
    id: 10,
    name: "ОГОН",
    text: "Задержанных около Тверского бульвара бьют головой об автозак, и дубинкой по ногам. Автозак номер о0577 до этого был у Известий #12июня",
    nickname: "ogonwatch",
    type: "omon"
  },
  11: {
    id: 11,
    name: "The Insider",
    text: "Полиция уже избивает дубинками людей. Всех, без разбору.",
    nickname: "the_ins_ru",
    type: "omon"
  },
  12: {
    id: 12,
    name: "Алексей Кириленко",
    text: "Омон надел противогаз #ДеньРоссии",
    nickname: "kirilenko_a",
    type: "omon"
  },
  13: {
    id: 13,
    name: "Телеканал Дождь",
    text: "На вид мальчику не больше 12-13 лет.",
    nickname: "tvrain",
    type: "omon"
  },
  14: {
    id: 14,
    name: "Пётр Верзилов",
    text: "На  Пушкинский ОМОН двигается боевыми квадратами, валит людей на землю и задерживает.",
    nickname: "gruppa_voina",
    type: "omon"
  },
  15: {
    id: 15,
    name: "Пётр Верзилов",
    text: "Парня повалили на землю возле памятника Пушкину и бьют, заломив руки за спину",
    nickname: "gruppa_voina",
    type: "omon"
  },
  16: {
    id: 16,
    name: "ТоталитаризмЖараИюль",
    text: "ОМОН разбивает толпу",
    nickname: "kszhivago",
    type: "omon"
  },

  /* defended */

  17: {
    id: 17,
    name: "Plushev",
    text: "Толпа не отдаёт задержанных",
    nickname: "plushev",
    type: "defended"
  },

  /* star */

  18: {
    id: 18,
    name: "Алексей Абанин",
    text: "Большая куча вместе с @navalny идёт в сторону пушкинской от маяковской",
    nickname: "aban_in",
    type: "star_navalny_enter"
  },
  19: {
    id: 19,
    name: "Рубанов Роман",
    text: "Навального задержали",
    nickname: "rrubanov",
    type: "star_navalny_arrest"
  },
  20: {
    id: 20,
    name: "Alexey Navalny‏",
    text: "Ребята, со мной все хорошо. Не надо меня отбивать. Идите по Тверской. Наша сегодняшняя тема - борьба с коррупцией",
    nickname: "navalny",
    type: "star_navalny_bus"
  },

  21: {
    id: 21,
    name: "Пётр Верзилов",
    text: "Народ все прибывает на Пушкинскую, идут задержания",
    nickname: "gruppa_voina",
    type: "star_verzilov_enter"
  },
  22: {
    id: 22,
    name: "Повар Войны",
    text: "Медиамагнат Пётр Верзилов был задержан на Пушкинской площади в Москве.",
    nickname: "noliquid",
    type: "star_verzilov_arrest"
  },
  23: {
    id: 23,
    name: "Пётр Верзилов",
    text: 'Уау, в нашем автозаке актёр Александр Паль, лауреат премии "Кинотавра" за лучшую мужскую роль в фильме "Тряпичный союз". Очень крутой фильм!',
    nickname: "gruppa_voina",
    type: "star_verzilov_bus"
  },

  24: {
    id: 24,
    name: "Илья Варламов",
    text: "Лимонова задержали",
    nickname: "varlamov",
    type: "star_limonov_enter"
  },
  25: {
    id: 25,
    name: "Медиазона",
    text: "По предварительным данным, Лимонова повезут в ОВД по Тверскому району, остальных задержанных — в ОВД Красносельский",
    nickname: "mediazzzona",
    type: "star_limonov_arrest"
  },
  26: {
    id: 26,
    name: "Телеканал Дождь",
    text: "Илья Яшин оказался в автозаке, хотя даже не успел совершить ничего провокационного и незаконного. Яшин рассказал, как его задержали, и кто оказался с ним в автозаке",
    nickname: "tvrain",
    type: "star_limonov_bus"
  },

  /* description */

  27: {
    id: 27,
    name: "Журавлева",
    text: "на тверской заставе омон, космонавты в черном, спецтехника и ШТАБ",
    nickname: "zhuravleva",
    type: "description"
  },
  28: {
    id: 28,
    name: "Plushev",
    text: "Над Тверской вертолёт",
    nickname: "plushev",
    type: "description"
  },
  29: {
    id: 29,
    name: "ОГОН",
    text: "На Охотном ряду выстаиваются сотрудники и устанавливают ограждения.",
    nickname: "ogonwatch",
    type: "description"
  },

  /* journalist_arrest */

  30: {
    id: 30,
    name: "Alec Luhn",
    text: "I took a photo of police detaining a guy at @navalny protest so they detained me as well even though I repeatedly said I was a journalist",
    nickname: "asluhn",
    type: "journalist_arrest"
  },
  31: {
    id: 31,
    name: "Feldman",
    text: "меня задержали на Пушкинской площади",
    nickname: "evgenyfeldman",
    type: "journalist_arrest"
  }

});

/***/ }),
/* 490 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const_js__ = __webpack_require__(492);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var calcGroupPosition = function calcGroupPosition(textGameObject) {
  var y = 0;
  if (textGameObject._height < __WEBPACK_IMPORTED_MODULE_1__const_js__["a" /* AVATAR_SIZE */] + __WEBPACK_IMPORTED_MODULE_1__const_js__["c" /* MARGIN_BOTTOM */]) {
    y = -(__WEBPACK_IMPORTED_MODULE_1__const_js__["a" /* AVATAR_SIZE */] + __WEBPACK_IMPORTED_MODULE_1__const_js__["c" /* MARGIN_BOTTOM */]);
  } else {
    y = -(textGameObject._height + __WEBPACK_IMPORTED_MODULE_1__const_js__["c" /* MARGIN_BOTTOM */]);
  }

  return y - 20;
};

var getTextStyle = function getTextStyle(width) {
  return {
    font: '16px William Text',
    fill: 'white',
    wordWrap: true,
    wordWrapWidth: width - (__WEBPACK_IMPORTED_MODULE_1__const_js__["d" /* MARGIN_LEFT */] + __WEBPACK_IMPORTED_MODULE_1__const_js__["a" /* AVATAR_SIZE */] + __WEBPACK_IMPORTED_MODULE_1__const_js__["b" /* AVATAR_TEXT_SPACING */])
  };
};

var BaseTweet = function () {
  function BaseTweet(data, animOptions, styles) {
    _classCallCheck(this, BaseTweet);

    this.data = data;
    this.animOptions = animOptions;
    this.styles = styles;

    this.hided = new Phaser.Signal();
    this.showed = new Phaser.Signal();
    this.nextTweet = new Phaser.Signal();
    this.destroy = new Phaser.Signal();
  }

  _createClass(BaseTweet, [{
    key: 'set',
    value: function set(key, val) {
      this[key] = val;
    }
  }, {
    key: 'setBehavior',
    value: function setBehavior(Strgy) {

      this.behavior = new Strgy();
      this.behavior.set('tweet', this);
    }
  }, {
    key: 'build',
    value: function build() {
      var _data = this.data,
          text = _data.text,
          image = _data.image,
          name = _data.name;
      var _game = this.game,
          width = _game.width,
          height = _game.height;

      var tweet = this.game.add.group();

      var nameGameObject = void 0;
      var textGameObject = void 0;
      if (name) {
        nameGameObject = this.game.add.text(__WEBPACK_IMPORTED_MODULE_1__const_js__["d" /* MARGIN_LEFT */] + __WEBPACK_IMPORTED_MODULE_1__const_js__["a" /* AVATAR_SIZE */] + __WEBPACK_IMPORTED_MODULE_1__const_js__["b" /* AVATAR_TEXT_SPACING */], height, name, {
          font: '14px abc',
          // fill: '#fcfcfc',
          fill: '#ddecff'
        });
        nameGameObject.font = 'Graphik LC, Arial';
        nameGameObject.resolution = window.devicePixelRatio || 1;
        nameGameObject.fixedToCamera = true;

        textGameObject = this.game.add.text(__WEBPACK_IMPORTED_MODULE_1__const_js__["d" /* MARGIN_LEFT */] + __WEBPACK_IMPORTED_MODULE_1__const_js__["a" /* AVATAR_SIZE */] + __WEBPACK_IMPORTED_MODULE_1__const_js__["b" /* AVATAR_TEXT_SPACING */], height + 20, text, getTextStyle(width));
        textGameObject.resolution = window.devicePixelRatio || 1;
        textGameObject.font = 'Arial';
        textGameObject.fixedToCamera = true;
      } else {

        textGameObject = this.game.add.text(__WEBPACK_IMPORTED_MODULE_1__const_js__["d" /* MARGIN_LEFT */] + __WEBPACK_IMPORTED_MODULE_1__const_js__["a" /* AVATAR_SIZE */] + __WEBPACK_IMPORTED_MODULE_1__const_js__["b" /* AVATAR_TEXT_SPACING */], height, text, getTextStyle(width));
        textGameObject.resolution = window.devicePixelRatio || 1;
        textGameObject.font = 'Arial';
        textGameObject.fixedToCamera = true;
      }

      if (this.styles.fontSize) {
        textGameObject.fontSize = this.styles.fontSize;
      }

      var avatar = this.game.add.sprite(0, 0, "ALL_IMAGES", image);

      if (name) {
        avatar.alignTo(nameGameObject, Phaser.LEFT_TOP, __WEBPACK_IMPORTED_MODULE_1__const_js__["b" /* AVATAR_TEXT_SPACING */]);
      } else {
        avatar.alignTo(textGameObject, Phaser.LEFT_TOP, __WEBPACK_IMPORTED_MODULE_1__const_js__["b" /* AVATAR_TEXT_SPACING */]);
      }

      avatar.fixedToCamera = true;

      var mask = this.game.add.graphics(__WEBPACK_IMPORTED_MODULE_1__const_js__["d" /* MARGIN_LEFT */] + __WEBPACK_IMPORTED_MODULE_1__const_js__["a" /* AVATAR_SIZE */] / 2, height + __WEBPACK_IMPORTED_MODULE_1__const_js__["a" /* AVATAR_SIZE */] / 2);
      mask.beginFill(0xffffff);
      mask.drawCircle(0, 0, __WEBPACK_IMPORTED_MODULE_1__const_js__["a" /* AVATAR_SIZE */]);
      mask.fixedToCamera = true;
      avatar.mask = mask;

      tweet.add(mask);
      tweet.add(avatar);
      if (name) {
        //nameGameObject.cacheAsBitmap = true;
        tweet.add(nameGameObject);
      }

      //textGameObject.cacheAsBitmap = true;
      tweet.add(textGameObject);
      this.groupTweet = tweet;

      avatar.bringToTop();
      textGameObject.bringToTop();
      if (name) nameGameObject.bringToTop();

      var bg = this.createTwBackground(tweet);
      this.bg = bg;

      var all = this.game.add.group();
      all.alpha = 0;
      all.add(bg);
      all.add(tweet);

      //enable cahing of bitmap

      // all.cacheAsBitmap = true;
      console.log("TEXT GROUP:" + name + " CACHED!");
      this.groupAll = all;
      this.showedY = calcGroupPosition(textGameObject, tweet);
      return this;
    }
  }, {
    key: 'createTwBackground',
    value: function createTwBackground() {
      var _game2 = this.game,
          width = _game2.width,
          height = _game2.height;

      var bounds = this.groupTweet.getBounds();
      var groupH = this.groupTweet.height;


      var bitmapH = groupH + __WEBPACK_IMPORTED_MODULE_1__const_js__["c" /* MARGIN_BOTTOM */] * 2 + 40;
      var bitmap = this.game.add.bitmapData(width, bitmapH);
      bitmap.fixedToCamera = true;
      var aplhaIterp = [{ x: 0, y: 0 }, { x: bitmapH * 30 / 100, y: 0.3 }, { x: bitmapH * 80 / 100, y: 0.5 }, { x: bitmapH, y: 0.7 }];
      for (var y = 0; y < bitmapH; y += 2) {
        // bitmap.rect(0, y, width, 2, 'rgba(0,0,0,'+ lagrange(aplhaIterp, y) +')');
        bitmap.rect(0, y, width, 2, 'rgba(0,0,0,' + 0.2 + ')');
      }

      // var spriteBg = this.game.add.sprite(0, height-MARGIN_BOTTOM-20, bitmap);
      var spriteBg = this.game.add.sprite(0, height - __WEBPACK_IMPORTED_MODULE_1__const_js__["c" /* MARGIN_BOTTOM */] - 13, bitmap);
      spriteBg.fixedToCamera = true;

      return spriteBg;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.groupAll.killAll();
      this.groupAll.destroy();
    }
  }, {
    key: 'show',
    value: function show() {
      // debugger;
      this.behavior.show();
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.behavior.hide();
    }
  }]);

  return BaseTweet;
}();

/* harmony default export */ __webpack_exports__["a"] = (BaseTweet);

/***/ }),
/* 491 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export lagrange */
/* unused harmony export higlightHashTags */
var lagrange = function lagrange(arr, x) {
  var n = 0;
  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    var currX = curr.x,
        currY = curr.y;

    var a = 1;
    for (var j = 0; j < arr.length; j++) {
      if (i === j) continue;
      var _arr$j = arr[j],
          xj = _arr$j.x,
          yj = _arr$j.y;

      a *= (x - xj) / (currX - xj);
    }
    a = a * currY;
    n += a;
  }
  return n;
};

var higlightHashTags = function higlightHashTags(textGameObj, text, style) {
  var originalColor = style.originalColor,
      higlightedColor = style.higlightedColor;

  var hashRegExp = /#[A-zА-я_]*/g;
  var res = void 0;
  while (res = hashRegExp.exec(text)) {
    var _res = res,
        index = _res.index,
        group = _res[0];


    textGameObj.addColor(higlightedColor, index);
    textGameObj.addColor(originalColor, index + group.length);
  }
};

/***/ }),
/* 492 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MARGIN_BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AVATAR_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MARGIN_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AVATAR_TEXT_SPACING; });
/* отступ твита снизу. Если текст выше аватарки от текста, если аватарка выше от аватарки */
var MARGIN_BOTTOM = 5;

/* размер аватарки, это квадрат */
var AVATAR_SIZE = 48;

/* отступ слева начиная от аватарки */
var MARGIN_LEFT = 25;

/* отсутп между аватаркой и текстом */
var AVATAR_TEXT_SPACING = 20;

/***/ }),
/* 493 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_handlebars_dist_handlebars_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_handlebars_dist_handlebars_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_handlebars_dist_handlebars_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raw_loader_modal_html__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raw_loader_modal_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_raw_loader_modal_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_css_loader_style_css__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_css_loader_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_style_loader_css_loader_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sha256_js__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sha256_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__sha256_js__);







// import font from  'style-loader!css-loader!./font.css';
if (undefined === 'development') __webpack_require__(518);

var HOST_URL = 'https://v3-stage.zona.media';
// const HOST_URL = 'http://localhost:8081';
var template = __WEBPACK_IMPORTED_MODULE_0_handlebars_dist_handlebars_js___default.a.compile(__WEBPACK_IMPORTED_MODULE_2_raw_loader_modal_html___default.a);

var hash = function hash(_ref) {
  var score = _ref.score,
      name = _ref.name,
      email = _ref.email;

  var string = '' + score + name + email + '0795782855';
  return __WEBPACK_IMPORTED_MODULE_4__sha256_js___default.a.hash(string);
};

var getScore = function getScore() {
  return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(HOST_URL + '/game_score');
};

var getScoreFake = function getScoreFake() {
  return new Promise(function (resolve) {
    resolve([{
      nick: 'Nikitka Magraritka',
      contact: 'mogafk@gmail.com',
      score: 1021.7
    }, {
      nick: 'Putin',
      contact: 'putin@rf.gos',
      score: 4332
    }]);
  });
};

var sendNewScore = function sendNewScore(formData) {
  if (!validate(formData)) return Promise.reject('validation error');
  var cats = hash(formData);
  return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
    method: 'post',
    url: HOST_URL + '/game_score',
    data: {
      score: formData.score,
      nick: formData.name,
      contact: formData.email,
      cats: cats
    }
  });
};
var sendNewScoreFake = function sendNewScoreFake(formData) {
  if (validate(formData)) {
    return Promise.resolve();
  }
  return Promise.reject();
};

var validate = function validate(formData) {
  var nameEl = document.querySelector('[data-js-selector="participated-form-name"]');
  var emailEl = document.querySelector('[data-js-selector="participated-form-email"]');
  if (typeof fomData === 'undefined') formData = {
    name: nameEl.value,
    email: emailEl.value
  };

  var res = true;
  if (formData.name.length === 0) {
    nameEl.className += ' invalid';
    res = false;
    console.log('name add invalid');
  } else {
    console.log('name remove invalid');
    nameEl.className = nameEl.className.replace(/invalid/gi, '');
  }

  var emailValid = formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
  if (formData.email.length === 0 || !emailValid) {
    emailEl.className += ' invalid';
    res = false;
  } else {
    emailEl.className = emailEl.className.replace(/invalid/gi, '');
  }

  return res;
};

__WEBPACK_IMPORTED_MODULE_0_handlebars_dist_handlebars_js___default.a.registerHelper('parseScoreTime', function (sec) {
  var h = ~~(sec / 3600);
  var m = ~~(sec / 60) - h * 60;
  var s = ~~(sec % 60);
  return h + ':' + m + ':' + s;
});

__WEBPACK_IMPORTED_MODULE_0_handlebars_dist_handlebars_js___default.a.registerHelper('plus', function (a, b) {
  return a + b;
});

var resultTypes = {
  'success': {
    title: 'Отличный митинг! Вы бодры и на свободе',
    text: function text(ratingPos) {
      var ratingMap = ['первое', 'второе'];
      if (ratingPos < 2) {
        return '\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C! \u0412\u044B \u0437\u0430\u043D\u044F\u043B\u0438 ' + ratingMap[ratingPos] + ' \u043C\u0435\u0441\u0442\u043E \u0432 \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0435\u043C \u0442\u043E\u043F\u0435, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043E\u044E \u043F\u043E\u0447\u0442\u0443 \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u0438\u044F \u0432 \u0440\u043E\u0437\u044B\u0433\u0440\u044B\u0448\u0435 \u043F\u0440\u0438\u0437\u043E\u0432.';
      }

      return 'Да вы опытный активист! Попробуйте сыграть снова и набрать очки еще быстрее, тогда вы сможете выиграть наш приз — ватник «Будет хуже».';
    },
    background: __webpack_require__(526)
  },
  'arrested': {
    title: 'Вас свинтили. Скучайте в автозаке',
    text: 'Агитируйте аккуратнее, и тогда полиция не обратит на вас внимание. Используйте shift, чтобы передвигаться быстрее и ускользать из лап Нацгвардии.',
    background: __webpack_require__(527)
  },
  'desolation': {
    title: 'Попробуйте одиночные пикеты',
    text: 'Вы остались в одиночестве. Ваш протест был настолько пассивным, что вас просто никто не заметил.',
    background: __webpack_require__(528)
  }
};

var _show = function _show(context, currentScore, cb) {
  // debugger;
  var html = template(context);
  var fragment = document.createElement('div');
  fragment.innerHTML = html;
  document.body.appendChild(fragment);

  if (context.scores.find(function (s) {
    return s.showForm;
  })) {
    var formEl = document.querySelector('[data-js-selector="participated-form"]');
    var nameEl = document.querySelector('[data-js-selector="participated-form-name"]');
    var emailEl = document.querySelector('[data-js-selector="participated-form-email"]');

    nameEl.onkeyup = validate;
    emailEl.onkeyup = validate;
    formEl.onsubmit = function (e) {
      e.preventDefault();

      var formData = {
        name: nameEl.value,
        email: emailEl.value,
        score: currentScore
      };
      // sendNewScoreFake(formData)
      sendNewScore(formData).then(function (res) {
        var c = context.scores.find(function (s) {
          return s.current;
        });
        c.nick = formData.name;
        c.contact = formData.email;
        c.showForm = false;
        document.body.removeChild(fragment);
        _show(context, currentScore, cb);
      });

      return false;
    };
  }
  document.querySelector('[data-js-selector="replay-button"]').onclick = function () {
    document.body.removeChild(fragment);
    cb();
  };
};

var show = function show(type, currentScore, cb) {
  // export default (type, currentScore, cb) => {
  var context = resultTypes[type];

  getScore().then(function (_ref2) {
    var scores = _ref2.data;

    // getScoreFake().then((scores) => {
    if (type === 'success') {
      for (var i = 0; i < scores.length; i++) {
        if (scores[i].score > currentScore) {
          break;
        }
      }
      scores.splice(i, 0, { showForm: true, current: true, score: currentScore });

      if (typeof context.text === 'function') context.text = context.text(i);
    }
    context.scores = scores.slice(0, 2);
    context.currentURL = encodeURIComponent(window.location.href + ('?result=' + type + '&_share=1'));

    _show(context, currentScore, cb);
  }).catch(function (err) {
    console.error('getScore error:', err);
  });
};

// setTimeout(() => show('arrested', 900, () => console.log('заново')), 1500);

/* harmony default export */ __webpack_exports__["a"] = (show);

// show('success');
// show('arrested', 900, () => true);
// show('arrested', 1200);

// export show;

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(495);

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(20);
var bind = __webpack_require__(158);
var Axios = __webpack_require__(497);
var defaults = __webpack_require__(104);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(162);
axios.CancelToken = __webpack_require__(512);
axios.isCancel = __webpack_require__(161);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(513);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 496 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(104);
var utils = __webpack_require__(20);
var InterceptorManager = __webpack_require__(507);
var dispatchRequest = __webpack_require__(508);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 498 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(20);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(160);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(20);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(20);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(20);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(20);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(20);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(20);
var transformData = __webpack_require__(509);
var isCancel = __webpack_require__(161);
var defaults = __webpack_require__(104);
var isAbsoluteURL = __webpack_require__(510);
var combineURLs = __webpack_require__(511);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(20);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(162);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 514 */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"game-end-container\">\r\n  <div class=\"game-end\">\r\n    <div class=\"game-end_picture\" style=\"background-image: url('{{background}}')\"></div>\r\n    <div class=\"game-end_content\">\r\n      <h1 class=\"game-end_header\">\r\n        {{ title }}\r\n      </h1>\r\n      <div class=\"game-end_text\">\r\n        {{ text }}\r\n      </div>\r\n\r\n      <div class=\"game-end_score\">\r\n        {{#each scores}}\r\n          {{#if showForm }}\r\n            <form data-js-selector=\"participated-form\" class=\"game-end_participated score-form\">\r\n              <input data-js-selector=\"participated-form-name\" class=\"score-form_input\" type=\"text\" placeholder=\"Имя\" />\r\n              <input data-js-selector=\"participated-form-email\" class=\"score-form_input\" type=\"text\" placeholder=\"Почта\" />\r\n              <button data-js-selector=\"participated-form-send\" class=\"game-button participated-button\">Участвовать</button>\r\n            </form>\r\n          {{^}}\r\n            <div class=\"score-line\">\r\n              <span class=\"score-line_position\">{{plus @index 1}}.</span>\r\n              <span class=\"score-line_name\">{{ nick }} —</span>\r\n              <span class=\"score-line_time\">{{ parseScoreTime score }}</span>\r\n            </div>\r\n          {{/if}}\r\n        {{/each}}\r\n      </div>\r\n\r\n      <div class=\"game-end_replay\">\r\n          <button data-js-selector=\"replay-button\" class=\"game-button replay-button\">Начать заново</button>\r\n      </div>\r\n\r\n      <div class=\"game-end_shares game-shares\">\r\n        <div class=\"game-shares_header\">Поделиться результатом</div>\r\n        <div class=\"game-shares_shares-container\">\r\n          <a class=\"game-shares_icon game-shares_icon--tlg\" target=\"_blank\" href=\"https://t.me/share/url?url={{currentURL}}\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\r\n              <path d=\"M18.92 6.089L4.747 11.555c-.967.388-.962.928-.176 1.168l3.534 1.104 1.353 4.146c.164.454.083.634.56.634.368 0 .53-.168.736-.368.13-.127.903-.88 1.767-1.719l3.677 2.717c.676.373 1.165.18 1.333-.628l2.414-11.374c.247-.99-.378-1.44-1.025-1.146zM8.66 13.573l7.967-5.026c.398-.242.763-.112.463.154l-6.822 6.155-.265 2.833-1.343-4.116z\" fill=\"#63a9dc\" fill-rule=\"evenodd\"/>\r\n            </svg>\r\n          </a>\r\n\r\n          <a class=\"game-shares_icon game-shares_icon--ok\" target=\"_blank\" href=\"https://connect.ok.ru/offer?url={{currentURL}}\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\r\n              <path d=\"M11.674 6.536a1.69 1.69 0 0 0-1.688 1.688c0 .93.757 1.687 1.688 1.687a1.69 1.69 0 0 0 1.688-1.687 1.69 1.69 0 0 0-1.688-1.688zm0 5.763a4.08 4.08 0 0 1-4.076-4.075 4.08 4.08 0 0 1 4.076-4.077 4.08 4.08 0 0 1 4.077 4.077 4.08 4.08 0 0 1-4.077 4.075zm-1.649 3.325a7.633 7.633 0 0 1-2.367-.98 1.194 1.194 0 0 1 1.272-2.022 5.175 5.175 0 0 0 5.489 0 1.194 1.194 0 1 1 1.272 2.022 7.647 7.647 0 0 1-2.367.98l2.279 2.28a1.194 1.194 0 0 1-1.69 1.688l-2.238-2.24-2.24 2.24a1.193 1.193 0 1 1-1.689-1.689l2.279-2.279\" fill=\"#ff9e4c\" fill-rule=\"evenodd\"/>\r\n            </svg>\r\n          </a>\r\n\r\n          <a class=\"game-shares_icon game-shares_icon--fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=1727953450799543&display=popup&href={{currentURL}}\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\r\n                <path d=\"M13.423 20v-7.298h2.464l.369-2.845h-2.832V8.042c0-.824.23-1.385 1.417-1.385h1.515V4.111A20.255 20.255 0 0 0 14.148 4c-2.183 0-3.678 1.326-3.678 3.76v2.097H8v2.845h2.47V20h2.953z\" fill=\"#3c5998\" fill-rule=\"evenodd\"/>\r\n              </svg>\r\n          </a>\r\n          <a class=\"game-shares_icon game-shares_icon--tw\" target=\"_blank\" href=\"https://twitter.com/intent/tweet?text={{currentURL}}\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\r\n              <path d=\"M20 7.539a6.56 6.56 0 0 1-1.885.517 3.294 3.294 0 0 0 1.443-1.816 6.575 6.575 0 0 1-2.085.796 3.283 3.283 0 0 0-5.593 2.994A9.32 9.32 0 0 1 5.114 6.6a3.28 3.28 0 0 0 1.016 4.382 3.274 3.274 0 0 1-1.487-.41v.041a3.285 3.285 0 0 0 2.633 3.218 3.305 3.305 0 0 1-1.482.056 3.286 3.286 0 0 0 3.066 2.28A6.585 6.585 0 0 1 4 17.524 9.291 9.291 0 0 0 9.032 19c6.038 0 9.34-5 9.34-9.337 0-.143-.004-.285-.01-.425A6.672 6.672 0 0 0 20 7.538z\" fill=\"#01acee\" fill-rule=\"evenodd\"/>\r\n            </svg>\r\n          </a>\r\n          <a class=\"game-shares_icon game-shares_icon--vk\" target=\"_blank\" href=\"http://vk.com/share.php?url={{currentURL}}\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\r\n                <path d=\"M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.576-1.496c.588-.19 1.341 1.26 2.14 1.818.605.422 1.064.33 1.064.33l2.137-.03s1.117-.071.587-.964c-.043-.073-.308-.661-1.588-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.84-.244-.84-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.212.262-.212.262s-.382 1.03-.89 1.907c-1.07 1.85-1.499 1.948-1.674 1.832-.407-.267-.305-1.075-.305-1.648 0-1.793.267-2.54-.521-2.733-.262-.065-.454-.107-1.123-.114-.858-.009-1.585.003-1.996.208-.274.136-.485.44-.356.457.159.022.519.099.71.363.246.341.237 1.107.237 1.107s.142 2.11-.33 2.371c-.325.18-.77-.187-1.725-1.865-.489-.859-.859-1.81-.859-1.81s-.07-.176-.198-.272c-.154-.115-.37-.151-.37-.151l-2.286.015s-.343.01-.469.161C3.94 7.721 4.043 8 4.043 8s1.79 4.258 3.817 6.403c1.858 1.967 3.968 1.838 3.968 1.838h.957z\" fill=\"#48719e\" fill-rule=\"evenodd\"/>\r\n              </svg>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(516);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(100)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(99)(false);
// imports


// module
exports.push([module.i, "\r\n.game-end-container {\r\n  position: fixed;\r\n  top: 0px; left: 0px;\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow-y: scroll;\r\n  font-size: 14px;\r\n  display: flex;\r\n  z-index: 2;\r\n}\r\n\r\n.game-end {\r\n  margin: auto auto;\r\n  width: 500px;\r\n  background: white;\r\n  padding-bottom: 15px;\r\n  text-align: center;\r\n}\r\n  .game-end_picture {\r\n    min-height: 200px;\r\n    width: 100%;\r\n    background: #ccc;\r\n    background-size: cover;\r\n  }\r\n  .game-end_content {\r\n    padding: 35px 20px 30px 20px;\r\n  }\r\n  .game-end_header {\r\n    font-size: 20px;\r\n    margin: 0px;\r\n    font-family: 'Graphik LC';\r\n  }\r\n  .game-end_text {\r\n    /* margin: 0px 50px; */\r\n    font-size: 16px;\r\n    line-height: 26px;\r\n    font-family: 'Graphik LC';\r\n    margin-top: 30px;\r\n  }\r\n  .game-end_replay {\r\n    margin-top: 40px;\r\n  }\r\n  .game-end_score {\r\n    margin-top: 40px;\r\n  }\r\n  .game-end_participated {\r\n    margin: 40px 0px;\r\n  }\r\n  .game-end_shares {\r\n    margin-top: 35px;\r\n  }\r\n\r\n.score-line {\r\n  margin-top: 20px;\r\n  font-size: 16px;\r\n  font-family: 'Graphik LC';\r\n}\r\n  .score-line_name {\r\n    font-weight: 900;\r\n  }\r\n.game-shares{}\r\n  .game-shares_header {\r\n    font-family: 'Graphik LC';\r\n    font-size: 16px;\r\n  }\r\n  .game-shares_shares-container {\r\n    margin-top: 12px;\r\n    margin-left: -10px;\r\n  }\r\n  .game-shares_icon {\r\n    display: inline-block;\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 100%;\r\n    border: 1px solid #f1f1f1;\r\n\r\n    line-height: 30px;\r\n    vertical-align: middle;\r\n\r\n    margin-left: 10px;\r\n\r\n    cursor: pointer;\r\n    background: transparent;\r\n    transition: background 0.2s linear;\r\n  }\r\n  .game-shares_icon svg {\r\n    position: relative;\r\n  }\r\n  .game-shares_icon svg path {\r\n    transition: fill 0.2s linear;\r\n  }\r\n  .game-shares_icon--tw:hover {\r\n    background: #01acee;\r\n  }\r\n  .game-shares_icon--fb:hover {\r\n    background: #3c5998;\r\n  }\r\n  .game-shares_icon--vk:hover {\r\n    background: #48719e;\r\n  }\r\n  .game-shares_icon--ok:hover {\r\n    background: #ff9e4c;\r\n  }\r\n  .game-shares_icon--tlg:hover {\r\n    background: #63a9dc;\r\n  }\r\n\r\n  .game-shares_icon--tw:hover svg path {\r\n    fill: white;\r\n  }\r\n  .game-shares_icon--fb:hover svg path {\r\n    fill: white;\r\n  }\r\n  .game-shares_icon--vk:hover svg path {\r\n    fill: white;\r\n  }\r\n  .game-shares_icon--ok:hover svg path {\r\n    fill: white;\r\n  }\r\n  .game-shares_icon--tlg:hover svg path {\r\n    fill: white;\r\n  }\r\n  .game-shares_icon--tw svg{\r\n    margin-left: 1px;\r\n  }\r\n  .game-shares_icon--fb svg {\r\n    margin-left: -2px;\r\n  }\r\n  .game-shares_icon--vk svg {\r\n    margin-top: 2px;\r\n  }\r\n  .game-shares_icon--ok svg {\r\n    margin-left: 1px;\r\n  }\r\n  .game-shares_icon--tlg svg {\r\n    margin-left: -2px;\r\n    margin-top: -1px\r\n  }\r\n\r\n.game-button {\r\n  border: 0;\r\n  background: #ec4d69;\r\n  color: white;\r\n  font-weight: 900;\r\n  padding: 15px 35px;\r\n  min-width: 186px;\r\n\r\n  cursor: pointer;\r\n  font-family: 'Graphik LC';\r\n  font-weight: 900;\r\n  font-size: 16px;\r\n  -webkit-font-smoothing: antialiased;\r\n  transition: background 0.5s linear;\r\n}\r\n.game-button:focus {\r\n  outline: 0;\r\n}\r\n\r\n.replay-button {\r\n  background: #ec4d69;\r\n}\r\n.replay-button:hover {\r\n  background: red;\r\n}\r\n.participated-form {\r\n  letter-spacing: 10px;\r\n}\r\n.participated-button {\r\n  background: #73eb87;\r\n}\r\n.participated-button:hover {\r\n  background: green;\r\n}\r\n\r\n.score-form {\r\n}\r\n  .score-form_input {\r\n    display: block;\r\n    margin: 15px auto;\r\n    min-height: 46px;\r\n    min-width: 186px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    box-sizing: border-box;\r\n    border: 1px solid #ccc;\r\n  }\r\n  .score-form_input.invalid {\r\n    background: #ed4d6966;\r\n  }\r\n  @media(min-width: 500px){\r\n    .score-form_input {\r\n      margin-top: 0px;\r\n      display: inline-block;\r\n    }\r\n  }", ""]);

// exports


/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* SHA-256 (FIPS 180-4) implementation in JavaScript                  (c) Chris Veness 2002-2017  */
/*                                                                                   MIT Licence  */
/* www.movable-type.co.uk/scripts/sha256.html                                                     */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */



/**
 * SHA-256 hash function reference implementation.
 *
 * This is an annotated direct implementation of FIPS 180-4, without any optimisations. It is
 * intended to aid understanding of the algorithm rather than for production use.
 *
 * While it could be used where performance is not critical, I would recommend using the ‘Web
 * Cryptography API’ (developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest) for the browser,
 * or the ‘crypto’ library (nodejs.org/api/crypto.html#crypto_class_hash) in Node.js.
 *
 * See csrc.nist.gov/groups/ST/toolkit/secure_hashing.html
 *     csrc.nist.gov/groups/ST/toolkit/examples.html
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sha256 = function () {
    function Sha256() {
        _classCallCheck(this, Sha256);
    }

    _createClass(Sha256, null, [{
        key: 'hash',


        /**
         * Generates SHA-256 hash of string.
         *
         * @param   {string} msg - (Unicode) string to be hashed.
         * @param   {Object} [options]
         * @param   {string} [options.msgFormat=string] - Message format: 'string' for JavaScript string
         *   (gets converted to UTF-8 for hashing); 'hex-bytes' for string of hex bytes ('616263' ≡ 'abc') .
         * @param   {string} [options.outFormat=hex] - Output format: 'hex' for string of contiguous
         *   hex bytes; 'hex-w' for grouping hex bytes into groups of (4 byte / 8 character) words.
         * @returns {string} Hash of msg as hex character string.
         */
        value: function hash(msg, options) {
            var defaults = { msgFormat: 'string', outFormat: 'hex' };
            var opt = Object.assign(defaults, options);

            // note use throughout this routine of 'n >>> 0' to coerce Number 'n' to unsigned 32-bit integer

            switch (opt.msgFormat) {
                default: // default is to convert string to UTF-8, as SHA only deals with byte-streams
                case 'string':
                    msg = utf8Encode(msg);break;
                case 'hex-bytes':
                    msg = hexBytesToString(msg);break; // mostly for running tests
            }

            // constants [§4.2.2]
            var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

            // initial hash value [§5.3.3]
            var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];

            // PREPROCESSING [§6.2.1]

            msg += String.fromCharCode(0x80); // add trailing '1' bit (+ 0's padding) to string [§5.1.1]

            // convert string msg into 512-bit blocks (array of 16 32-bit integers) [§5.2.1]
            var l = msg.length / 4 + 2; // length (in 32-bit integers) of msg + ‘1’ + appended length
            var N = Math.ceil(l / 16); // number of 16-integer (512-bit) blocks required to hold 'l' ints
            var M = new Array(N); // message M is N×16 array of 32-bit integers

            for (var i = 0; i < N; i++) {
                M[i] = new Array(16);
                for (var j = 0; j < 16; j++) {
                    // encode 4 chars per integer (64 per block), big-endian encoding
                    M[i][j] = msg.charCodeAt(i * 64 + j * 4 + 0) << 24 | msg.charCodeAt(i * 64 + j * 4 + 1) << 16 | msg.charCodeAt(i * 64 + j * 4 + 2) << 8 | msg.charCodeAt(i * 64 + j * 4 + 3) << 0;
                } // note running off the end of msg is ok 'cos bitwise ops on NaN return 0
            }
            // add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
            // note: most significant word would be (len-1)*8 >>> 32, but since JS converts
            // bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
            var lenHi = (msg.length - 1) * 8 / Math.pow(2, 32);
            var lenLo = (msg.length - 1) * 8 >>> 0;
            M[N - 1][14] = Math.floor(lenHi);
            M[N - 1][15] = lenLo;

            // HASH COMPUTATION [§6.2.2]

            for (var _i = 0; _i < N; _i++) {
                var W = new Array(64);

                // 1 - prepare message schedule 'W'
                for (var t = 0; t < 16; t++) {
                    W[t] = M[_i][t];
                }for (var _t = 16; _t < 64; _t++) {
                    W[_t] = Sha256.σ1(W[_t - 2]) + W[_t - 7] + Sha256.σ0(W[_t - 15]) + W[_t - 16] >>> 0;
                }

                // 2 - initialise working variables a, b, c, d, e, f, g, h with previous hash value
                var a = H[0],
                    b = H[1],
                    c = H[2],
                    d = H[3],
                    e = H[4],
                    f = H[5],
                    g = H[6],
                    h = H[7];

                // 3 - main loop (note '>>> 0' for 'addition modulo 2^32')
                for (var _t2 = 0; _t2 < 64; _t2++) {
                    var T1 = h + Sha256.Σ1(e) + Sha256.Ch(e, f, g) + K[_t2] + W[_t2];
                    var T2 = Sha256.Σ0(a) + Sha256.Maj(a, b, c);
                    h = g;
                    g = f;
                    f = e;
                    e = d + T1 >>> 0;
                    d = c;
                    c = b;
                    b = a;
                    a = T1 + T2 >>> 0;
                }

                // 4 - compute the new intermediate hash value (note '>>> 0' for 'addition modulo 2^32')
                H[0] = H[0] + a >>> 0;
                H[1] = H[1] + b >>> 0;
                H[2] = H[2] + c >>> 0;
                H[3] = H[3] + d >>> 0;
                H[4] = H[4] + e >>> 0;
                H[5] = H[5] + f >>> 0;
                H[6] = H[6] + g >>> 0;
                H[7] = H[7] + h >>> 0;
            }

            // convert H0..H7 to hex strings (with leading zeros)
            for (var _h = 0; _h < H.length; _h++) {
                H[_h] = ('00000000' + H[_h].toString(16)).slice(-8);
            } // concatenate H0..H7, with separator if required
            var separator = opt.outFormat == 'hex-w' ? ' ' : '';

            return H.join(separator);

            /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

            function utf8Encode(str) {
                try {
                    return new TextEncoder().encode(str, 'utf-8').reduce(function (prev, curr) {
                        return prev + String.fromCharCode(curr);
                    }, '');
                } catch (e) {
                    // no TextEncoder available?
                    return unescape(encodeURIComponent(str)); // monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
                }
            }

            function hexBytesToString(hexStr) {
                // convert string of hex numbers to a string of chars (eg '616263' -> 'abc').
                var str = hexStr.replace(' ', ''); // allow space-separated groups
                return str == '' ? '' : str.match(/.{2}/g).map(function (byte) {
                    return String.fromCharCode(parseInt(byte, 16));
                }).join('');
            }
        }

        /**
         * Rotates right (circular right shift) value x by n positions [§3.2.4].
         * @private
         */

    }, {
        key: 'ROTR',
        value: function ROTR(n, x) {
            return x >>> n | x << 32 - n;
        }

        /**
         * Logical functions [§4.1.2].
         * @private
         */

    }, {
        key: '\u03A30',
        value: function _(x) {
            return Sha256.ROTR(2, x) ^ Sha256.ROTR(13, x) ^ Sha256.ROTR(22, x);
        }
    }, {
        key: '\u03A31',
        value: function _(x) {
            return Sha256.ROTR(6, x) ^ Sha256.ROTR(11, x) ^ Sha256.ROTR(25, x);
        }
    }, {
        key: '\u03C30',
        value: function _(x) {
            return Sha256.ROTR(7, x) ^ Sha256.ROTR(18, x) ^ x >>> 3;
        }
    }, {
        key: '\u03C31',
        value: function _(x) {
            return Sha256.ROTR(17, x) ^ Sha256.ROTR(19, x) ^ x >>> 10;
        }
    }, {
        key: 'Ch',
        value: function Ch(x, y, z) {
            return x & y ^ ~x & z;
        } // 'choice'

    }, {
        key: 'Maj',
        value: function Maj(x, y, z) {
            return x & y ^ x & z ^ y & z;
        } // 'majority'

    }]);

    return Sha256;
}();

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

if (typeof module != 'undefined' && module.exports) module.exports = Sha256; // ≡ export default Sha256

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(519);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(100)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./font.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./font.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(150);
exports = module.exports = __webpack_require__(99)(false);
// imports


// module
exports.push([module.i, "\r\n@font-face {\r\n\tfont-family: 'Graphik LC';\r\n\tsrc: url(" + escape(__webpack_require__(163)) + ");\r\n\tsrc: url(" + escape(__webpack_require__(163)) + "?#iefix) format('embedded-opentype'),\r\n\t\t url(" + escape(__webpack_require__(520)) + ") format('woff'),\r\n\t\t url(" + escape(__webpack_require__(521)) + ") format('truetype'),\r\n\t\t url(" + escape(__webpack_require__(522)) + "#Graphik-Bold-Cy) format('svg');\r\n\tfont-weight:  700;\r\n\tfont-style:   normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Graphik LC';\r\n\tsrc: url(" + escape(__webpack_require__(164)) + ");\r\n\tsrc: url(" + escape(__webpack_require__(164)) + "?#iefix) format('embedded-opentype'),\r\n\t\t url(" + escape(__webpack_require__(523)) + ") format('woff'),\r\n\t\t url(" + escape(__webpack_require__(524)) + ") format('truetype'),\r\n\t\t url(" + escape(__webpack_require__(525)) + "#Graphik-Regular-Cy) format('svg');\r\n\tfont-weight:  400;\r\n\tfont-style:   normal;\r\n\tfont-stretch: normal;\r\n}\r\n/*\r\n@font-face {\r\n\tfont-family: 'Fira Mono';\r\n\tsrc: url('font/firamono/firamono-regular-webfont.eot');\r\n\tsrc: url('font/firamono/firamono-regular-webfont.eot?#iefix') format('embedded-opentype'),\r\n\turl('font/firamono/firamono-regular-webfont.woff2') format('woff2'),\r\n\turl('font/firamono/firamono-regular-webfont.woff') format('woff'),\r\n\turl('font/firamono/firamono-regular-webfont.ttf') format('truetype'),\r\n\turl('font/firamono/firamono-regular-webfont.svg#fira_monoregular') format('svg');\r\n\tfont-weight: normal;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Fira Mono';\r\n\tsrc: url('font/firamono/firamono-bold-webfont.eot');\r\n\tsrc: url('font/firamono/firamono-bold-webfont.eot?#iefix') format('embedded-opentype'),\r\n\turl('font/firamono/firamono-bold-webfont.woff2') format('woff2'),\r\n\turl('font/firamono/firamono-bold-webfont.woff') format('woff'),\r\n\turl('font/firamono/firamono-bold-webfont.ttf') format('truetype'),\r\n\turl('font/firamono/firamono-bold-webfont.svg#fira_monobold') format('svg');\r\n\tfont-weight: bold;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'William Text';\r\n    src: url('font/williamtext/WilliamTextStd-Regular.eot'); \r\n    src: url('font/williamtext/WilliamTextStd-Regular.eot?#iefix') format('embedded-opentype'), \r\n         url('font/williamtext/WilliamTextStd-Regular.woff') format('woff'), \r\n         url('font/williamtext/WilliamTextStd-Regular.ttf') format('truetype'),\r\n         url('font/williamtext/WilliamTextStd-Regular.svg#WilliamTextStd') format('svg'); \r\n    font-style: normal;\r\n    font-weight: normal;\r\n    text-rendering: optimizeLegibility;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'William Text';\r\n    src: url('font/williamtext/WilliamTextStd-RegularItalic.eot'); \r\n    src: url('font/williamtext/WilliamTextStd-RegularItalic.eot?#iefix') format('embedded-opentype'),\r\n         url('font/williamtext/WilliamTextStd-RegularItalic.woff') format('woff'),\r\n         url('font/williamtext/WilliamTextStd-RegularItalic.ttf') format('truetype'), \r\n         url('font/williamtext/WilliamTextStd-RegularItalic.svg#WilliamTextStd-RegularItalic') format('svg');\r\n    font-style: italic;\r\n    font-weight: normal;\r\n    text-rendering: optimizeLegibility;\r\n}\r\n\r\n*/", ""]);

// exports


/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d91e742625ea399af3faaa4e5c59a995.woff";

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e5254037d61d5989b8faeb5209bd64ad.ttf";

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4ecc190072cefb30e460b04d3a0f3348.svg";

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2dc619ef85572abdabcb5b4dcd5091cd.woff";

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "12c7e8c75d41275ebe0ae2e0a38e98c5.ttf";

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d35c960a02bb45fef6a408b9011e7522.svg";

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/11b262bff204f4e050a3474e893e8c2c.png";

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/47ae53c30a42889503bba0fa9fdfd314.png";

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/70a630cd17d2862578ea123aed5481c7.png";

/***/ }),
/* 529 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CirclePool = function () {
    function CirclePool(game) {
        _classCallCheck(this, CirclePool);

        this.game = game;
        this.pool = {};
    }

    _createClass(CirclePool, [{
        key: "pull",
        value: function pull(key, texture, x, y) {
            if (!this.pool[key]) {
                this.pool[key] = {
                    offset: 0,
                    list: []
                };
            }
            var item = this.pool[key].list[this.pool[key].offset];
            if (!item) {
                item = this.game.add.sprite(x, y, texture);
                item.anchor.set(0.5);
                this.pool[key].list.push(item);
            }
            this.pool[key].offset++;
            return item;
        }
    }, {
        key: "add",
        value: function add(key, texture, x, y) {
            var sprite = this.pull(key, texture, x, y);
            sprite.x = x;
            sprite.y = y;
        }
    }, {
        key: "reset",
        value: function reset() {
            for (var k in this.pool) {
                var pool = this.pool[k];
                for (var i = pool.offset; i < pool.list.length; i++) {
                    pool.list[i].visible = false;
                }
                pool.offset = 0;
            }
        }
    }]);

    return CirclePool;
}();

/* harmony default export */ __webpack_exports__["a"] = (CirclePool);

/***/ }),
/* 530 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Debuger = function () {
	function Debuger(game) {
		var _this = this;

		_classCallCheck(this, Debuger);

		setTimeout(function () {

			console.log("ADD DEBUGER!:", game);
			_this.legasyDrawElements = game.renderer.gl.__proto__.drawElements;
			_this.elements = 0;
			_this.debug_text = document.querySelector("#debug");

			var _that = _this;
			game.renderer.gl.__proto__.drawElements = function (mode, count, type, offset) {
				_that.elements++;
				_that.legasyDrawElements.call(game.renderer.gl, mode, count, type, offset);
			};

			console.log("Rebind drawElements!!");

			game.time.advancedTiming = true;

			setInterval(function () {
				_this.debug_text.innerHTML = "FPS:" + game.time.fps + "<br> DCPF: " + _this.elements;
			}, 500);
		}, 500);
	}

	_createClass(Debuger, [{
		key: "update",
		value: function update() {
			this.elements = 0;
		}
	}]);

	return Debuger;
}();

/* harmony default export */ __webpack_exports__["a"] = (Debuger);

/***/ }),
/* 531 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PaddyWagon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_Prefab_js__ = __webpack_require__(68);




var PaddyWagon = {
    sprite: "paddy_wagon",
    speed: { value: 100 },
    group: 'cars',
    immovable: true,
    positions: [{
        startX: -300,
        startY: 75,
        angle: 90,
        score: 20,
        moveX: 150,
        moveY: 75,
        entagleX: 60,
        entagleY: 20
    }, {
        startX: 1000,
        startY: -300,
        angle: 0,
        score: 100,
        moveX: 1000,
        moveY: 150,
        entagleX: 40,
        entagleY: 20
    }, {
        startX: 1200,
        startY: 700,
        angle: -90,
        score: 200,
        moveX: 1000,
        moveY: 700,
        entagleX: -60,
        entagleY: -160
    }]
};

var data = {
    paddyWagon: PaddyWagon
};
/* harmony default export */ __webpack_exports__["a"] = (data);

var reset = function reset() {
    for (var k in data) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = data[k].positions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var p = _step.value;

                p.done = false;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
};

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/6904d619c1ec6661282e0b22a9455e81.png";

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/75dd4fe599b012f14bd6fb668476c80f.json";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
//# sourceMappingURL=bundle.js.map