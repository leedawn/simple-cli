/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data() {
    return {
      name: "leon",
      address: {
        city: "guangzhou"
      }
    };
  },

  created() {
    console.log('test');
    console.log("development");
    console.log("/");
  },

  methods: {
    getLocalAddress() {
      let result = this.address.city;
      return result;
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listToStyles)
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function (a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function (_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = ('__proto__' in {}); // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof __webpack_require__.g !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools


var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check

var formatComponentName = noop;

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function (str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function (str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if ( true && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (true) {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if ( true && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  if (true) {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array

  if ( true && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) {
    return t;
  });

  if (!valid && haveExpectedTypes) {
    warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType(value, type, vm) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}

var functionTypeCheckRE = /^\s*function (\w+)/;
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */

function getType(fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && isExplicable(typeof value) && !isBoolean(expectedType, receivedType)) {
    message += " with value " + styleValue(value, expectedType);
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value " + styleValue(value, receivedType) + ".";
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];

function isExplicable(value) {
  return EXPLICABLE_TYPES.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) args[len] = arguments[len];

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }

  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function () {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */

/* not type checking this file because flow doesn't play well with Proxy */


var initProxy;

if (true) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var warnReservedPrefix = function (target, key) {
    warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals. ' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = (key in target);
      var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function (tag) {
      return perf.mark(tag);
    };

    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
       true && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      if (true) {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode) // #9658, #10391
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallbackRender, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes = this.$slots[name] || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }

  return eventKeyCode === undefined;
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
       true && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if (true) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode( // we know it's MountedComponentVNode but flow doesn't
vnode, // activeInstance in lifecycle state
parent) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
     true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
      }

      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data.class)) {
    traverse(data.class);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = currentRenderingInstance;

  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null;
    owner.$on('hook:destroyed', function () {
      return remove(owners, owner);
    });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;

        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }

        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {
       true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;

              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;

            if (isUndef(factory.resolved)) {
              reject( true ? "timeout (" + res.timeout + "ms)" : 0);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if (true) {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;

    if (true) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      mark(startTag);

      var vnode = vm._render();

      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);
      mark(startTag);

      vm._update(vnode, hydrating);

      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
/*  */


var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  if (true) {
    circular = {};
  }

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)

if (inBrowser && !isIE) {
  var performance = window.performance;

  if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () {
      return performance.now();
    };
  }
}
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return;
      }

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true ? expOrFn.toString() : 0; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
       true && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        var info = "callback for watcher \"" + this.expression + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if (true) {
      var hyphenatedKey = hyphenate(key);

      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {} // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
     true && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && hasOwn(props, key)) {
       true && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if ( true && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      } else if (vm.$options.methods && key in vm.$options.methods) {
        warn("The computed property \"" + key + "\" is already defined as a method.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  if ( true && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if (true) {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      var info = "callback for immediate watcher \"" + watcher.expression + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if (true) {
      initProxy(vm);
    } else {} // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {
  if ( true && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var entry = cache[key];

    if (entry) {
      var name = entry.name;

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var entry = cache[key];

  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;

      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance
        };
        keys.push(keyToCache); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }

        this.vnodeToCache = null;
      }
    }
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  updated: function updated() {
    this.cacheVNode();
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if (true) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.14';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);

function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
       true && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
      // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
      // #9681 QtWebEngine event.timeStamp is negative value
      e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecessary `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (typeof def$$1 === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
     true && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function (c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function (d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if ( true && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function () {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }

      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (true) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if ( true && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div[data-v-7ba5bd90] {\n  color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/App.vue","webpack://./App.vue"],"names":[],"mappings":"AA8BA;EACE,UAAA;AC7BF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndiv {\n  color: red;\n}\n","div {\n  color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90&scoped=true& */ "./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true& */ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7ba5bd90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&":
/*!****************************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&");


/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/less-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._v("\n  hello " + _vm._s(_vm.name) + " 2\n  "),
    _c("div", [_vm._v(_vm._s(_vm.getLocalAddress()))])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/less-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"]
var update = add("6aa4dce6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/App.vue */ "./src/App.vue");


vue__WEBPACK_IMPORTED_MODULE_1__["default"].config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
}).$mount('#app');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUFBLGdFQUFBLEdBQTJCLEtBQTNCO0FBRUEsSUFBSUEsMkNBQUosQ0FBUTtBQUNOak8sRUFBQUEsTUFBTSxFQUFFOHlCLENBQUMsSUFBSUEsQ0FBQyxDQUFDNEMsZ0RBQUQ7QUFEUixDQUFSLEVBRUcvcUIsTUFGSCxDQUVVLE1BRlYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZS1jbGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NpbXBsZS1jbGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtY2xpL3NyYy9BcHAudnVlIiwid2VicGFjazovL3NpbXBsZS1jbGkvLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovL3NpbXBsZS1jbGkvLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLmpzIiwid2VicGFjazovL3NpbXBsZS1jbGkvLi9zcmMvQXBwLnZ1ZT8xZDllIiwid2VicGFjazovL3NpbXBsZS1jbGkvLi9zcmMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly9zaW1wbGUtY2xpLy4vc3JjL0FwcC52dWU/YjM5YiIsIndlYnBhY2s6Ly9zaW1wbGUtY2xpLy4vc3JjL0FwcC52dWU/ZTMwNiIsIndlYnBhY2s6Ly9zaW1wbGUtY2xpLy4vc3JjL0FwcC52dWU/ODk5NCIsIndlYnBhY2s6Ly9zaW1wbGUtY2xpLy4vc3JjL0FwcC52dWU/YzMwOSIsIndlYnBhY2s6Ly9zaW1wbGUtY2xpLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtY2xpLy4vc3JjL0FwcC52dWU/MzRkMSIsIndlYnBhY2s6Ly9zaW1wbGUtY2xpLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtY2xpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbXBsZS1jbGkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2ltcGxlLWNsaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltcGxlLWNsaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NpbXBsZS1jbGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbGUtY2xpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2ltcGxlLWNsaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICBoZWxsbyB7eyBuYW1lIH19IDJcbiAgICA8ZGl2Pnt7IGdldExvY2FsQWRkcmVzcygpIH19PC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IFwibGVvblwiLFxuICAgICAgYWRkcmVzczoge1xuICAgICAgICBjaXR5OiBcImd1YW5nemhvdVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCl7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuQkFTRV9VUkwpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0TG9jYWxBZGRyZXNzKCkge1xuICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuYWRkcmVzcy5jaXR5O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxuZGl2IHtcbiAgY29sb3I6IHJlZDtcbn1cbjwvc3R5bGU+XG4iLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuIiwiLyohXG4gKiBWdWUuanMgdjIuNi4xNFxuICogKGMpIDIwMTQtMjAyMSBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4vKiAgKi9cblxudmFyIGVtcHR5T2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG5cbi8vIFRoZXNlIGhlbHBlcnMgcHJvZHVjZSBiZXR0ZXIgVk0gY29kZSBpbiBKUyBlbmdpbmVzIGR1ZSB0byB0aGVpclxuLy8gZXhwbGljaXRuZXNzIGFuZCBmdW5jdGlvbiBpbmxpbmluZy5cbmZ1bmN0aW9uIGlzVW5kZWYgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzRGVmICh2KSB7XG4gIHJldHVybiB2ICE9PSB1bmRlZmluZWQgJiYgdiAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc1RydWUgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHRydWVcbn1cblxuZnVuY3Rpb24gaXNGYWxzZSAodikge1xuICByZXR1cm4gdiA9PT0gZmFsc2Vcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBwcmltaXRpdmUuXG4gKi9cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlICh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIClcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICovXG52YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gdG9SYXdUeXBlICh2YWx1ZSkge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKVxufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAgKHYpIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHYpID09PSAnW29iamVjdCBSZWdFeHBdJ1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbCBpcyBhIHZhbGlkIGFycmF5IGluZGV4LlxuICovXG5mdW5jdGlvbiBpc1ZhbGlkQXJyYXlJbmRleCAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdChTdHJpbmcodmFsKSk7XG4gIHJldHVybiBuID49IDAgJiYgTWF0aC5mbG9vcihuKSA9PT0gbiAmJiBpc0Zpbml0ZSh2YWwpXG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAodmFsKSB7XG4gIHJldHVybiAoXG4gICAgaXNEZWYodmFsKSAmJlxuICAgIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiB2YWwuY2F0Y2ggPT09ICdmdW5jdGlvbidcbiAgKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSB0byBhIHN0cmluZyB0aGF0IGlzIGFjdHVhbGx5IHJlbmRlcmVkLlxuICovXG5mdW5jdGlvbiB0b1N0cmluZyAodmFsKSB7XG4gIHJldHVybiB2YWwgPT0gbnVsbFxuICAgID8gJydcbiAgICA6IEFycmF5LmlzQXJyYXkodmFsKSB8fCAoaXNQbGFpbk9iamVjdCh2YWwpICYmIHZhbC50b1N0cmluZyA9PT0gX3RvU3RyaW5nKVxuICAgICAgPyBKU09OLnN0cmluZ2lmeSh2YWwsIG51bGwsIDIpXG4gICAgICA6IFN0cmluZyh2YWwpXG59XG5cbi8qKlxuICogQ29udmVydCBhbiBpbnB1dCB2YWx1ZSB0byBhIG51bWJlciBmb3IgcGVyc2lzdGVuY2UuXG4gKiBJZiB0aGUgY29udmVyc2lvbiBmYWlscywgcmV0dXJuIG9yaWdpbmFsIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIgKHZhbCkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogblxufVxuXG4vKipcbiAqIE1ha2UgYSBtYXAgYW5kIHJldHVybiBhIGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhIGtleVxuICogaXMgaW4gdGhhdCBtYXAuXG4gKi9cbmZ1bmN0aW9uIG1ha2VNYXAgKFxuICBzdHIsXG4gIGV4cGVjdHNMb3dlckNhc2Vcbikge1xuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZVxuICAgID8gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfVxuICAgIDogZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHRhZyBpcyBhIGJ1aWx0LWluIHRhZy5cbiAqL1xudmFyIGlzQnVpbHRJblRhZyA9IG1ha2VNYXAoJ3Nsb3QsY29tcG9uZW50JywgdHJ1ZSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlLlxuICovXG52YXIgaXNSZXNlcnZlZEF0dHJpYnV0ZSA9IG1ha2VNYXAoJ2tleSxyZWYsc2xvdCxzbG90LXNjb3BlLGlzJyk7XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheS5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAoZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIHZhciBoaXQgPSBjYWNoZVtzdHJdO1xuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9KVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXG4gKi9cbnZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xudmFyIGNhbWVsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIGZ1bmN0aW9uIChfLCBjKSB7IHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7IH0pXG59KTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIGEgc3RyaW5nLlxuICovXG52YXIgY2FwaXRhbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pO1xuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbnZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG52YXIgaHlwaGVuYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnLSQxJykudG9Mb3dlckNhc2UoKVxufSk7XG5cbi8qKlxuICogU2ltcGxlIGJpbmQgcG9seWZpbGwgZm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBzdXBwb3J0IGl0LFxuICogZS5nLiwgUGhhbnRvbUpTIDEueC4gVGVjaG5pY2FsbHksIHdlIGRvbid0IG5lZWQgdGhpcyBhbnltb3JlXG4gKiBzaW5jZSBuYXRpdmUgYmluZCBpcyBub3cgcGVyZm9ybWFudCBlbm91Z2ggaW4gbW9zdCBicm93c2Vycy5cbiAqIEJ1dCByZW1vdmluZyBpdCB3b3VsZCBtZWFuIGJyZWFraW5nIGNvZGUgdGhhdCB3YXMgYWJsZSB0byBydW4gaW5cbiAqIFBoYW50b21KUyAxLngsIHNvIHRoaXMgbXVzdCBiZSBrZXB0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxuICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBwb2x5ZmlsbEJpbmQgKGZuLCBjdHgpIHtcbiAgZnVuY3Rpb24gYm91bmRGbiAoYSkge1xuICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxuXG4gIGJvdW5kRm4uX2xlbmd0aCA9IGZuLmxlbmd0aDtcbiAgcmV0dXJuIGJvdW5kRm5cbn1cblxuZnVuY3Rpb24gbmF0aXZlQmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZm4uYmluZChjdHgpXG59XG5cbnZhciBiaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiAgPyBuYXRpdmVCaW5kXG4gIDogcG9seWZpbGxCaW5kO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICovXG5mdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydDtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBleHRlbmQgKHRvLCBfZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gX2Zyb20pIHtcbiAgICB0b1trZXldID0gX2Zyb21ba2V5XTtcbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2ldKSB7XG4gICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogUGVyZm9ybSBubyBvcGVyYXRpb24uXG4gKiBTdHViYmluZyBhcmdzIHRvIG1ha2UgRmxvdyBoYXBweSB3aXRob3V0IGxlYXZpbmcgdXNlbGVzcyB0cmFuc3BpbGVkIGNvZGVcbiAqIHdpdGggLi4ucmVzdCAoaHR0cHM6Ly9mbG93Lm9yZy9ibG9nLzIwMTcvMDUvMDcvU3RyaWN0LUZ1bmN0aW9uLUNhbGwtQXJpdHkvKS5cbiAqL1xuZnVuY3Rpb24gbm9vcCAoYSwgYiwgYykge31cblxuLyoqXG4gKiBBbHdheXMgcmV0dXJuIGZhbHNlLlxuICovXG52YXIgbm8gPSBmdW5jdGlvbiAoYSwgYiwgYykgeyByZXR1cm4gZmFsc2U7IH07XG5cbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHNhbWUgdmFsdWUuXG4gKi9cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIChfKSB7IHJldHVybiBfOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGxvb3NlbHkgZXF1YWwgLSB0aGF0IGlzLFxuICogaWYgdGhleSBhcmUgcGxhaW4gb2JqZWN0cywgZG8gdGhleSBoYXZlIHRoZSBzYW1lIHNoYXBlP1xuICovXG5mdW5jdGlvbiBsb29zZUVxdWFsIChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7IHJldHVybiB0cnVlIH1cbiAgdmFyIGlzT2JqZWN0QSA9IGlzT2JqZWN0KGEpO1xuICB2YXIgaXNPYmplY3RCID0gaXNPYmplY3QoYik7XG4gIGlmIChpc09iamVjdEEgJiYgaXNPYmplY3RCKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpc0FycmF5QSA9IEFycmF5LmlzQXJyYXkoYSk7XG4gICAgICB2YXIgaXNBcnJheUIgPSBBcnJheS5pc0FycmF5KGIpO1xuICAgICAgaWYgKGlzQXJyYXlBICYmIGlzQXJyYXlCKSB7XG4gICAgICAgIHJldHVybiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICAgIHJldHVybiBsb29zZUVxdWFsKGUsIGJbaV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKClcbiAgICAgIH0gZWxzZSBpZiAoIWlzQXJyYXlBICYmICFpc0FycmF5Qikge1xuICAgICAgICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICAgICAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMoYik7XG4gICAgICAgIHJldHVybiBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aCAmJiBrZXlzQS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoYVtrZXldLCBiW2tleV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9IGVsc2UgaWYgKCFpc09iamVjdEEgJiYgIWlzT2JqZWN0Qikge1xuICAgIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGxvb3NlbHkgZXF1YWwgdmFsdWUgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgYXJyYXkgKGlmIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGUgYXJyYXkgbXVzdFxuICogY29udGFpbiBhbiBvYmplY3Qgb2YgdGhlIHNhbWUgc2hhcGUpLCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudC5cbiAqL1xuZnVuY3Rpb24gbG9vc2VJbmRleE9mIChhcnIsIHZhbCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsb29zZUVxdWFsKGFycltpXSwgdmFsKSkgeyByZXR1cm4gaSB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbi8qKlxuICogRW5zdXJlIGEgZnVuY3Rpb24gaXMgY2FsbGVkIG9ubHkgb25jZS5cbiAqL1xuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFNTUl9BVFRSID0gJ2RhdGEtc2VydmVyLXJlbmRlcmVkJztcblxudmFyIEFTU0VUX1RZUEVTID0gW1xuICAnY29tcG9uZW50JyxcbiAgJ2RpcmVjdGl2ZScsXG4gICdmaWx0ZXInXG5dO1xuXG52YXIgTElGRUNZQ0xFX0hPT0tTID0gW1xuICAnYmVmb3JlQ3JlYXRlJyxcbiAgJ2NyZWF0ZWQnLFxuICAnYmVmb3JlTW91bnQnLFxuICAnbW91bnRlZCcsXG4gICdiZWZvcmVVcGRhdGUnLFxuICAndXBkYXRlZCcsXG4gICdiZWZvcmVEZXN0cm95JyxcbiAgJ2Rlc3Ryb3llZCcsXG4gICdhY3RpdmF0ZWQnLFxuICAnZGVhY3RpdmF0ZWQnLFxuICAnZXJyb3JDYXB0dXJlZCcsXG4gICdzZXJ2ZXJQcmVmZXRjaCdcbl07XG5cbi8qICAqL1xuXG5cblxudmFyIGNvbmZpZyA9ICh7XG4gIC8qKlxuICAgKiBPcHRpb24gbWVyZ2Ugc3RyYXRlZ2llcyAodXNlZCBpbiBjb3JlL3V0aWwvb3B0aW9ucylcbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBvcHRpb25NZXJnZVN0cmF0ZWdpZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc3VwcHJlc3Mgd2FybmluZ3MuXG4gICAqL1xuICBzaWxlbnQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG93IHByb2R1Y3Rpb24gbW9kZSB0aXAgbWVzc2FnZSBvbiBib290P1xuICAgKi9cbiAgcHJvZHVjdGlvblRpcDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogV2hldGhlciB0byBlbmFibGUgZGV2dG9vbHNcbiAgICovXG4gIGRldnRvb2xzOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlY29yZCBwZXJmXG4gICAqL1xuICBwZXJmb3JtYW5jZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIEVycm9yIGhhbmRsZXIgZm9yIHdhdGNoZXIgZXJyb3JzXG4gICAqL1xuICBlcnJvckhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIFdhcm4gaGFuZGxlciBmb3Igd2F0Y2hlciB3YXJuc1xuICAgKi9cbiAgd2FybkhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIElnbm9yZSBjZXJ0YWluIGN1c3RvbSBlbGVtZW50c1xuICAgKi9cbiAgaWdub3JlZEVsZW1lbnRzOiBbXSxcblxuICAvKipcbiAgICogQ3VzdG9tIHVzZXIga2V5IGFsaWFzZXMgZm9yIHYtb25cbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBrZXlDb2RlczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB0YWcgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgcmVnaXN0ZXJlZCBhcyBhXG4gICAqIGNvbXBvbmVudC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICovXG4gIGlzUmVzZXJ2ZWRUYWc6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgdXNlZCBhcyBhIGNvbXBvbmVudFxuICAgKiBwcm9wLiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZEF0dHI6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyBhbiB1bmtub3duIGVsZW1lbnQuXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIGlzVW5rbm93bkVsZW1lbnQ6IG5vLFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWVzcGFjZSBvZiBhbiBlbGVtZW50XG4gICAqL1xuICBnZXRUYWdOYW1lc3BhY2U6IG5vb3AsXG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSByZWFsIHRhZyBuYW1lIGZvciB0aGUgc3BlY2lmaWMgcGxhdGZvcm0uXG4gICAqL1xuICBwYXJzZVBsYXRmb3JtVGFnTmFtZTogaWRlbnRpdHksXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBtdXN0IGJlIGJvdW5kIHVzaW5nIHByb3BlcnR5LCBlLmcuIHZhbHVlXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIG11c3RVc2VQcm9wOiBubyxcblxuICAvKipcbiAgICogUGVyZm9ybSB1cGRhdGVzIGFzeW5jaHJvbm91c2x5LiBJbnRlbmRlZCB0byBiZSB1c2VkIGJ5IFZ1ZSBUZXN0IFV0aWxzXG4gICAqIFRoaXMgd2lsbCBzaWduaWZpY2FudGx5IHJlZHVjZSBwZXJmb3JtYW5jZSBpZiBzZXQgdG8gZmFsc2UuXG4gICAqL1xuICBhc3luYzogdHJ1ZSxcblxuICAvKipcbiAgICogRXhwb3NlZCBmb3IgbGVnYWN5IHJlYXNvbnNcbiAgICovXG4gIF9saWZlY3ljbGVIb29rczogTElGRUNZQ0xFX0hPT0tTXG59KTtcblxuLyogICovXG5cbi8qKlxuICogdW5pY29kZSBsZXR0ZXJzIHVzZWQgZm9yIHBhcnNpbmcgaHRtbCB0YWdzLCBjb21wb25lbnQgbmFtZXMgYW5kIHByb3BlcnR5IHBhdGhzLlxuICogdXNpbmcgaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1My9zZW1hbnRpY3Mtc2NyaXB0aW5nLmh0bWwjcG90ZW50aWFsY3VzdG9tZWxlbWVudG5hbWVcbiAqIHNraXBwaW5nIFxcdTEwMDAwLVxcdUVGRkZGIGR1ZSB0byBpdCBmcmVlemluZyB1cCBQaGFudG9tSlNcbiAqL1xudmFyIHVuaWNvZGVSZWdFeHAgPSAvYS16QS1aXFx1MDBCN1xcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwM0YtXFx1MjA0MFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRC87XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKi9cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICB2YXIgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKTtcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vKipcbiAqIERlZmluZSBhIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBkZWYgKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIFBhcnNlIHNpbXBsZSBwYXRoLlxuICovXG52YXIgYmFpbFJFID0gbmV3IFJlZ0V4cCgoXCJbXlwiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiLiRfXFxcXGRdXCIpKTtcbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICBpZiAoYmFpbFJFLnRlc3QocGF0aCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmopIHsgcmV0dXJuIH1cbiAgICAgIG9iaiA9IG9ialtzZWdtZW50c1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvYmpcbiAgfVxufVxuXG4vKiAgKi9cblxuLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG52YXIgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fTtcblxuLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGluV2VleCA9IHR5cGVvZiBXWEVudmlyb25tZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhIVdYRW52aXJvbm1lbnQucGxhdGZvcm07XG52YXIgd2VleFBsYXRmb3JtID0gaW5XZWV4ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0udG9Mb3dlckNhc2UoKTtcbnZhciBVQSA9IGluQnJvd3NlciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xudmFyIGlzSUUgPSBVQSAmJiAvbXNpZXx0cmlkZW50Ly50ZXN0KFVBKTtcbnZhciBpc0lFOSA9IFVBICYmIFVBLmluZGV4T2YoJ21zaWUgOS4wJykgPiAwO1xudmFyIGlzRWRnZSA9IFVBICYmIFVBLmluZGV4T2YoJ2VkZ2UvJykgPiAwO1xudmFyIGlzQW5kcm9pZCA9IChVQSAmJiBVQS5pbmRleE9mKCdhbmRyb2lkJykgPiAwKSB8fCAod2VleFBsYXRmb3JtID09PSAnYW5kcm9pZCcpO1xudmFyIGlzSU9TID0gKFVBICYmIC9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChVQSkpIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdpb3MnKTtcbnZhciBpc0Nocm9tZSA9IFVBICYmIC9jaHJvbWVcXC9cXGQrLy50ZXN0KFVBKSAmJiAhaXNFZGdlO1xudmFyIGlzUGhhbnRvbUpTID0gVUEgJiYgL3BoYW50b21qcy8udGVzdChVQSk7XG52YXIgaXNGRiA9IFVBICYmIFVBLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLyk7XG5cbi8vIEZpcmVmb3ggaGFzIGEgXCJ3YXRjaFwiIGZ1bmN0aW9uIG9uIE9iamVjdC5wcm90b3R5cGUuLi5cbnZhciBuYXRpdmVXYXRjaCA9ICh7fSkud2F0Y2g7XG5cbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbmlmIChpbkJyb3dzZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcHRzLCAncGFzc2l2ZScsICh7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QtcGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG4vLyB0aGlzIG5lZWRzIHRvIGJlIGxhenktZXZhbGVkIGJlY2F1c2UgdnVlIG1heSBiZSByZXF1aXJlZCBiZWZvcmVcbi8vIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgY2FuIHNldCBWVUVfRU5WXG52YXIgX2lzU2VydmVyO1xudmFyIGlzU2VydmVyUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWluQnJvd3NlciAmJiAhaW5XZWV4ICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcbiAgICAgIC8vIFdlYnBhY2sgc2hpbW1pbmcgdGhlIHByb2Nlc3NcbiAgICAgIF9pc1NlcnZlciA9IGdsb2JhbFsncHJvY2VzcyddICYmIGdsb2JhbFsncHJvY2VzcyddLmVudi5WVUVfRU5WID09PSAnc2VydmVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgX2lzU2VydmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBfaXNTZXJ2ZXJcbn07XG5cbi8vIGRldGVjdCBkZXZ0b29sc1xudmFyIGRldnRvb2xzID0gaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gaXNOYXRpdmUgKEN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpXG59XG5cbnZhciBoYXNTeW1ib2wgPVxuICB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTeW1ib2wpICYmXG4gIHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShSZWZsZWN0Lm93bktleXMpO1xuXG52YXIgX1NldDtcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTZXQpKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0O1xufSBlbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0ICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChrZXkpIHtcbiAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNldDtcbiAgfSgpKTtcbn1cblxuLyogICovXG5cbnZhciB3YXJuID0gbm9vcDtcbnZhciB0aXAgPSBub29wO1xudmFyIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSAobm9vcCk7IC8vIHdvcmsgYXJvdW5kIGZsb3cgY2hlY2tcbnZhciBmb3JtYXRDb21wb25lbnROYW1lID0gKG5vb3ApO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG4gIHZhciBjbGFzc2lmeSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGNsYXNzaWZ5UkUsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pXG4gICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xuXG4gIHdhcm4gPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcblxuICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgIGNvbmZpZy53YXJuSGFuZGxlci5jYWxsKG51bGwsIG1zZywgdm0sIHRyYWNlKTtcbiAgICB9IGVsc2UgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKSk7XG4gICAgfVxuICB9O1xuXG4gIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFwiW1Z1ZSB0aXBdOiBcIiArIG1zZyArIChcbiAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXG4gICAgICApKTtcbiAgICB9XG4gIH07XG5cbiAgZm9ybWF0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICh2bSwgaW5jbHVkZUZpbGUpIHtcbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICByZXR1cm4gJzxSb290PidcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygdm0gPT09ICdmdW5jdGlvbicgJiYgdm0uY2lkICE9IG51bGxcbiAgICAgID8gdm0ub3B0aW9uc1xuICAgICAgOiB2bS5faXNWdWVcbiAgICAgICAgPyB2bS4kb3B0aW9ucyB8fCB2bS5jb25zdHJ1Y3Rvci5vcHRpb25zXG4gICAgICAgIDogdm07XG4gICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgfHwgb3B0aW9ucy5fY29tcG9uZW50VGFnO1xuICAgIHZhciBmaWxlID0gb3B0aW9ucy5fX2ZpbGU7XG4gICAgaWYgKCFuYW1lICYmIGZpbGUpIHtcbiAgICAgIHZhciBtYXRjaCA9IGZpbGUubWF0Y2goLyhbXi9cXFxcXSspXFwudnVlJC8pO1xuICAgICAgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAobmFtZSA/IChcIjxcIiArIChjbGFzc2lmeShuYW1lKSkgKyBcIj5cIikgOiBcIjxBbm9ueW1vdXM+XCIpICtcbiAgICAgIChmaWxlICYmIGluY2x1ZGVGaWxlICE9PSBmYWxzZSA/IChcIiBhdCBcIiArIGZpbGUpIDogJycpXG4gICAgKVxuICB9O1xuXG4gIHZhciByZXBlYXQgPSBmdW5jdGlvbiAoc3RyLCBuKSB7XG4gICAgdmFyIHJlcyA9ICcnO1xuICAgIHdoaWxlIChuKSB7XG4gICAgICBpZiAobiAlIDIgPT09IDEpIHsgcmVzICs9IHN0cjsgfVxuICAgICAgaWYgKG4gPiAxKSB7IHN0ciArPSBzdHI7IH1cbiAgICAgIG4gPj49IDE7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfTtcblxuICBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gZnVuY3Rpb24gKHZtKSB7XG4gICAgaWYgKHZtLl9pc1Z1ZSAmJiB2bS4kcGFyZW50KSB7XG4gICAgICB2YXIgdHJlZSA9IFtdO1xuICAgICAgdmFyIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA9IDA7XG4gICAgICB3aGlsZSAodm0pIHtcbiAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBsYXN0ID0gdHJlZVt0cmVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChsYXN0LmNvbnN0cnVjdG9yID09PSB2bS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xuICAgICAgICAgICAgdHJlZVt0cmVlLmxlbmd0aCAtIDFdID0gW2xhc3QsIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZV07XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cmVlLnB1c2godm0pO1xuICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1xcblxcbmZvdW5kIGluXFxuXFxuJyArIHRyZWVcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcbiAgICAgICAgICAgID8gKChmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSkgKyBcIi4uLiAoXCIgKyAodm1bMV0pICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiKVxuICAgICAgICAgICAgOiBmb3JtYXRDb21wb25lbnROYW1lKHZtKSkpOyB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlxcblxcbihmb3VuZCBpbiBcIiArIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIilcIilcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkID0gMDtcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbnZhciBEZXAgPSBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKys7XG4gIHRoaXMuc3VicyA9IFtdO1xufTtcblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiBhZGRTdWIgKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiByZW1vdmVTdWIgKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICBpZiAoRGVwLnRhcmdldCkge1xuICAgIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpO1xuICB9XG59O1xuXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSAoKSB7XG4gIC8vIHN0YWJpbGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIHZhciBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKCk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAvLyBzdWJzIGFyZW4ndCBzb3J0ZWQgaW4gc2NoZWR1bGVyIGlmIG5vdCBydW5uaW5nIGFzeW5jXG4gICAgLy8gd2UgbmVlZCB0byBzb3J0IHRoZW0gbm93IHRvIG1ha2Ugc3VyZSB0aGV5IGZpcmUgaW4gY29ycmVjdFxuICAgIC8vIG9yZGVyXG4gICAgc3Vicy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKCk7XG4gIH1cbn07XG5cbi8vIFRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIFRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2Ugb25seSBvbmUgd2F0Y2hlclxuLy8gY2FuIGJlIGV2YWx1YXRlZCBhdCBhIHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbDtcbnZhciB0YXJnZXRTdGFjayA9IFtdO1xuXG5mdW5jdGlvbiBwdXNoVGFyZ2V0ICh0YXJnZXQpIHtcbiAgdGFyZ2V0U3RhY2sucHVzaCh0YXJnZXQpO1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xuICB0YXJnZXRTdGFjay5wb3AoKTtcbiAgRGVwLnRhcmdldCA9IHRhcmdldFN0YWNrW3RhcmdldFN0YWNrLmxlbmd0aCAtIDFdO1xufVxuXG4vKiAgKi9cblxudmFyIFZOb2RlID0gZnVuY3Rpb24gVk5vZGUgKFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICB0ZXh0LFxuICBlbG0sXG4gIGNvbnRleHQsXG4gIGNvbXBvbmVudE9wdGlvbnMsXG4gIGFzeW5jRmFjdG9yeVxuKSB7XG4gIHRoaXMudGFnID0gdGFnO1xuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMudGV4dCA9IHRleHQ7XG4gIHRoaXMuZWxtID0gZWxtO1xuICB0aGlzLm5zID0gdW5kZWZpbmVkO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLmZuQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuZm5TY29wZUlkID0gdW5kZWZpbmVkO1xuICB0aGlzLmtleSA9IGRhdGEgJiYgZGF0YS5rZXk7XG4gIHRoaXMuY29tcG9uZW50T3B0aW9ucyA9IGNvbXBvbmVudE9wdGlvbnM7XG4gIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuICB0aGlzLnJhdyA9IGZhbHNlO1xuICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gIHRoaXMuaXNSb290SW5zZXJ0ID0gdHJ1ZTtcbiAgdGhpcy5pc0NvbW1lbnQgPSBmYWxzZTtcbiAgdGhpcy5pc0Nsb25lZCA9IGZhbHNlO1xuICB0aGlzLmlzT25jZSA9IGZhbHNlO1xuICB0aGlzLmFzeW5jRmFjdG9yeSA9IGFzeW5jRmFjdG9yeTtcbiAgdGhpcy5hc3luY01ldGEgPSB1bmRlZmluZWQ7XG4gIHRoaXMuaXNBc3luY1BsYWNlaG9sZGVyID0gZmFsc2U7XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjaGlsZDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG4vLyBERVBSRUNBVEVEOiBhbGlhcyBmb3IgY29tcG9uZW50SW5zdGFuY2UgZm9yIGJhY2t3YXJkcyBjb21wYXQuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmNoaWxkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2Vcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWTm9kZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgY3JlYXRlRW1wdHlWTm9kZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIGlmICggdGV4dCA9PT0gdm9pZCAwICkgdGV4dCA9ICcnO1xuXG4gIHZhciBub2RlID0gbmV3IFZOb2RlKCk7XG4gIG5vZGUudGV4dCA9IHRleHQ7XG4gIG5vZGUuaXNDb21tZW50ID0gdHJ1ZTtcbiAgcmV0dXJuIG5vZGVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSAodmFsKSB7XG4gIHJldHVybiBuZXcgVk5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKHZhbCkpXG59XG5cbi8vIG9wdGltaXplZCBzaGFsbG93IGNsb25lXG4vLyB1c2VkIGZvciBzdGF0aWMgbm9kZXMgYW5kIHNsb3Qgbm9kZXMgYmVjYXVzZSB0aGV5IG1heSBiZSByZXVzZWQgYWNyb3NzXG4vLyBtdWx0aXBsZSByZW5kZXJzLCBjbG9uaW5nIHRoZW0gYXZvaWRzIGVycm9ycyB3aGVuIERPTSBtYW5pcHVsYXRpb25zIHJlbHlcbi8vIG9uIHRoZWlyIGVsbSByZWZlcmVuY2UuXG5mdW5jdGlvbiBjbG9uZVZOb2RlICh2bm9kZSkge1xuICB2YXIgY2xvbmVkID0gbmV3IFZOb2RlKFxuICAgIHZub2RlLnRhZyxcbiAgICB2bm9kZS5kYXRhLFxuICAgIC8vICM3OTc1XG4gICAgLy8gY2xvbmUgY2hpbGRyZW4gYXJyYXkgdG8gYXZvaWQgbXV0YXRpbmcgb3JpZ2luYWwgaW4gY2FzZSBvZiBjbG9uaW5nXG4gICAgLy8gYSBjaGlsZC5cbiAgICB2bm9kZS5jaGlsZHJlbiAmJiB2bm9kZS5jaGlsZHJlbi5zbGljZSgpLFxuICAgIHZub2RlLnRleHQsXG4gICAgdm5vZGUuZWxtLFxuICAgIHZub2RlLmNvbnRleHQsXG4gICAgdm5vZGUuY29tcG9uZW50T3B0aW9ucyxcbiAgICB2bm9kZS5hc3luY0ZhY3RvcnlcbiAgKTtcbiAgY2xvbmVkLm5zID0gdm5vZGUubnM7XG4gIGNsb25lZC5pc1N0YXRpYyA9IHZub2RlLmlzU3RhdGljO1xuICBjbG9uZWQua2V5ID0gdm5vZGUua2V5O1xuICBjbG9uZWQuaXNDb21tZW50ID0gdm5vZGUuaXNDb21tZW50O1xuICBjbG9uZWQuZm5Db250ZXh0ID0gdm5vZGUuZm5Db250ZXh0O1xuICBjbG9uZWQuZm5PcHRpb25zID0gdm5vZGUuZm5PcHRpb25zO1xuICBjbG9uZWQuZm5TY29wZUlkID0gdm5vZGUuZm5TY29wZUlkO1xuICBjbG9uZWQuYXN5bmNNZXRhID0gdm5vZGUuYXN5bmNNZXRhO1xuICBjbG9uZWQuaXNDbG9uZWQgPSB0cnVlO1xuICByZXR1cm4gY2xvbmVkXG59XG5cbi8qXG4gKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGhcbiAqIGR5bmFtaWNhbGx5IGFjY2Vzc2luZyBtZXRob2RzIG9uIEFycmF5IHByb3RvdHlwZVxuICovXG5cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xudmFyIGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbnZhciBtZXRob2RzVG9QYXRjaCA9IFtcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl07XG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cbm1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdO1xuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB2YXIgb2IgPSB0aGlzLl9fb2JfXztcbiAgICB2YXIgaW5zZXJ0ZWQ7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSB7IG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7IH1cbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpO1xuICAgIHJldHVybiByZXN1bHRcbiAgfSk7XG59KTtcblxuLyogICovXG5cbnZhciBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpO1xuXG4vKipcbiAqIEluIHNvbWUgY2FzZXMgd2UgbWF5IHdhbnQgdG8gZGlzYWJsZSBvYnNlcnZhdGlvbiBpbnNpZGUgYSBjb21wb25lbnQnc1xuICogdXBkYXRlIGNvbXB1dGF0aW9uLlxuICovXG52YXIgc2hvdWxkT2JzZXJ2ZSA9IHRydWU7XG5cbmZ1bmN0aW9uIHRvZ2dsZU9ic2VydmluZyAodmFsdWUpIHtcbiAgc2hvdWxkT2JzZXJ2ZSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgaXMgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGhlIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaCB1cGRhdGVzLlxuICovXG52YXIgT2JzZXJ2ZXIgPSBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLmRlcCA9IG5ldyBEZXAoKTtcbiAgdGhpcy52bUNvdW50ID0gMDtcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcyk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGlmIChoYXNQcm90bykge1xuICAgICAgcHJvdG9BdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgIH1cbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICovXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIHdhbGsgKG9iaikge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKG9iaiwga2V5c1tpXSk7XG4gIH1cbn07XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiBvYnNlcnZlQXJyYXkgKGl0ZW1zKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSk7XG4gIH1cbn07XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKi9cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIGFzUm9vdERhdGEpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYjtcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX187XG4gIH0gZWxzZSBpZiAoXG4gICAgc2hvdWxkT2JzZXJ2ZSAmJlxuICAgICFpc1NlcnZlclJlbmRlcmluZygpICYmXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSk7XG4gIH1cbiAgaWYgKGFzUm9vdERhdGEgJiYgb2IpIHtcbiAgICBvYi52bUNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICovXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSQkMSAoXG4gIG9iaixcbiAga2V5LFxuICB2YWwsXG4gIGN1c3RvbVNldHRlcixcbiAgc2hhbGxvd1xuKSB7XG4gIHZhciBkZXAgPSBuZXcgRGVwKCk7XG5cbiAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgdmFyIGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgdmFyIHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcbiAgaWYgKCghZ2V0dGVyIHx8IHNldHRlcikgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhbCA9IG9ialtrZXldO1xuICB9XG5cbiAgdmFyIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKHZhbCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKTtcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGRlcGVuZEFycmF5KHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlciAobmV3VmFsKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSB8fCAobmV3VmFsICE9PSBuZXdWYWwgJiYgdmFsdWUgIT09IHZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjdXN0b21TZXR0ZXIpIHtcbiAgICAgICAgY3VzdG9tU2V0dGVyKCk7XG4gICAgICB9XG4gICAgICAvLyAjNzk4MTogZm9yIGFjY2Vzc29yIHByb3BlcnRpZXMgd2l0aG91dCBzZXR0ZXJcbiAgICAgIGlmIChnZXR0ZXIgJiYgIXNldHRlcikgeyByZXR1cm4gfVxuICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBuZXdWYWw7XG4gICAgICB9XG4gICAgICBjaGlsZE9iID0gIXNoYWxsb3cgJiYgb2JzZXJ2ZShuZXdWYWwpO1xuICAgICAgZGVwLm5vdGlmeSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gKiBhbHJlYWR5IGV4aXN0LlxuICovXG5mdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWwpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAoaXNVbmRlZih0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHRhcmdldCkpXG4gICkge1xuICAgIHdhcm4oKFwiQ2Fubm90IHNldCByZWFjdGl2ZSBwcm9wZXJ0eSBvbiB1bmRlZmluZWQsIG51bGwsIG9yIHByaW1pdGl2ZSB2YWx1ZTogXCIgKyAoKHRhcmdldCkpKSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBpc1ZhbGlkQXJyYXlJbmRleChrZXkpKSB7XG4gICAgdGFyZ2V0Lmxlbmd0aCA9IE1hdGgubWF4KHRhcmdldC5sZW5ndGgsIGtleSk7XG4gICAgdGFyZ2V0LnNwbGljZShrZXksIDEsIHZhbCk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmIChrZXkgaW4gdGFyZ2V0ICYmICEoa2V5IGluIE9iamVjdC5wcm90b3R5cGUpKSB7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIHZhciBvYiA9ICh0YXJnZXQpLl9fb2JfXztcbiAgaWYgKHRhcmdldC5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ0F2b2lkIGFkZGluZyByZWFjdGl2ZSBwcm9wZXJ0aWVzIHRvIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgJ2F0IHJ1bnRpbWUgLSBkZWNsYXJlIGl0IHVwZnJvbnQgaW4gdGhlIGRhdGEgb3B0aW9uLidcbiAgICApO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBpZiAoIW9iKSB7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGRlZmluZVJlYWN0aXZlJCQxKG9iLnZhbHVlLCBrZXksIHZhbCk7XG4gIG9iLmRlcC5ub3RpZnkoKTtcbiAgcmV0dXJuIHZhbFxufVxuXG4vKipcbiAqIERlbGV0ZSBhIHByb3BlcnR5IGFuZCB0cmlnZ2VyIGNoYW5nZSBpZiBuZWNlc3NhcnkuXG4gKi9cbmZ1bmN0aW9uIGRlbCAodGFyZ2V0LCBrZXkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAoaXNVbmRlZih0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHRhcmdldCkpXG4gICkge1xuICAgIHdhcm4oKFwiQ2Fubm90IGRlbGV0ZSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiB1bmRlZmluZWQsIG51bGwsIG9yIHByaW1pdGl2ZSB2YWx1ZTogXCIgKyAoKHRhcmdldCkpKSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBpc1ZhbGlkQXJyYXlJbmRleChrZXkpKSB7XG4gICAgdGFyZ2V0LnNwbGljZShrZXksIDEpO1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYiA9ICh0YXJnZXQpLl9fb2JfXztcbiAgaWYgKHRhcmdldC5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ0F2b2lkIGRlbGV0aW5nIHByb3BlcnRpZXMgb24gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnLSBqdXN0IHNldCBpdCB0byBudWxsLidcbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIGlmICghaGFzT3duKHRhcmdldCwga2V5KSkge1xuICAgIHJldHVyblxuICB9XG4gIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgaWYgKCFvYikge1xuICAgIHJldHVyblxuICB9XG4gIG9iLmRlcC5ub3RpZnkoKTtcbn1cblxuLyoqXG4gKiBDb2xsZWN0IGRlcGVuZGVuY2llcyBvbiBhcnJheSBlbGVtZW50cyB3aGVuIHRoZSBhcnJheSBpcyB0b3VjaGVkLCBzaW5jZVxuICogd2UgY2Fubm90IGludGVyY2VwdCBhcnJheSBlbGVtZW50IGFjY2VzcyBsaWtlIHByb3BlcnR5IGdldHRlcnMuXG4gKi9cbmZ1bmN0aW9uIGRlcGVuZEFycmF5ICh2YWx1ZSkge1xuICBmb3IgKHZhciBlID0gKHZvaWQgMCksIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZSA9IHZhbHVlW2ldO1xuICAgIGUgJiYgZS5fX29iX18gJiYgZS5fX29iX18uZGVwLmRlcGVuZCgpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgICBkZXBlbmRBcnJheShlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogT3B0aW9uIG92ZXJ3cml0aW5nIHN0cmF0ZWdpZXMgYXJlIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZVxuICogaG93IHRvIG1lcmdlIGEgcGFyZW50IG9wdGlvbiB2YWx1ZSBhbmQgYSBjaGlsZCBvcHRpb25cbiAqIHZhbHVlIGludG8gdGhlIGZpbmFsIHZhbHVlLlxuICovXG52YXIgc3RyYXRzID0gY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcblxuLyoqXG4gKiBPcHRpb25zIHdpdGggcmVzdHJpY3Rpb25zXG4gKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHN0cmF0cy5lbCA9IHN0cmF0cy5wcm9wc0RhdGEgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCwgdm0sIGtleSkge1xuICAgIGlmICghdm0pIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwib3B0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBjYW4gb25seSBiZSB1c2VkIGR1cmluZyBpbnN0YW5jZSBcIiArXG4gICAgICAgICdjcmVhdGlvbiB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkLidcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0U3RyYXQocGFyZW50LCBjaGlsZClcbiAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdGhhdCByZWN1cnNpdmVseSBtZXJnZXMgdHdvIGRhdGEgb2JqZWN0cyB0b2dldGhlci5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VEYXRhICh0bywgZnJvbSkge1xuICBpZiAoIWZyb20pIHsgcmV0dXJuIHRvIH1cbiAgdmFyIGtleSwgdG9WYWwsIGZyb21WYWw7XG5cbiAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICA/IFJlZmxlY3Qub3duS2V5cyhmcm9tKVxuICAgIDogT2JqZWN0LmtleXMoZnJvbSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICAvLyBpbiBjYXNlIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBvYnNlcnZlZC4uLlxuICAgIGlmIChrZXkgPT09ICdfX29iX18nKSB7IGNvbnRpbnVlIH1cbiAgICB0b1ZhbCA9IHRvW2tleV07XG4gICAgZnJvbVZhbCA9IGZyb21ba2V5XTtcbiAgICBpZiAoIWhhc093bih0bywga2V5KSkge1xuICAgICAgc2V0KHRvLCBrZXksIGZyb21WYWwpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0b1ZhbCAhPT0gZnJvbVZhbCAmJlxuICAgICAgaXNQbGFpbk9iamVjdCh0b1ZhbCkgJiZcbiAgICAgIGlzUGxhaW5PYmplY3QoZnJvbVZhbClcbiAgICApIHtcbiAgICAgIG1lcmdlRGF0YSh0b1ZhbCwgZnJvbVZhbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIERhdGFcbiAqL1xuZnVuY3Rpb24gbWVyZ2VEYXRhT3JGbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtXG4pIHtcbiAgaWYgKCF2bSkge1xuICAgIC8vIGluIGEgVnVlLmV4dGVuZCBtZXJnZSwgYm90aCBzaG91bGQgYmUgZnVuY3Rpb25zXG4gICAgaWYgKCFjaGlsZFZhbCkge1xuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICBpZiAoIXBhcmVudFZhbCkge1xuICAgICAgcmV0dXJuIGNoaWxkVmFsXG4gICAgfVxuICAgIC8vIHdoZW4gcGFyZW50VmFsICYgY2hpbGRWYWwgYXJlIGJvdGggcHJlc2VudCxcbiAgICAvLyB3ZSBuZWVkIHRvIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgICAvLyBtZXJnZWQgcmVzdWx0IG9mIGJvdGggZnVuY3Rpb25zLi4uIG5vIG5lZWQgdG9cbiAgICAvLyBjaGVjayBpZiBwYXJlbnRWYWwgaXMgYSBmdW5jdGlvbiBoZXJlIGJlY2F1c2VcbiAgICAvLyBpdCBoYXMgdG8gYmUgYSBmdW5jdGlvbiB0byBwYXNzIHByZXZpb3VzIG1lcmdlcy5cbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkRGF0YUZuICgpIHtcbiAgICAgIHJldHVybiBtZXJnZURhdGEoXG4gICAgICAgIHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkVmFsLmNhbGwodGhpcywgdGhpcykgOiBjaGlsZFZhbCxcbiAgICAgICAgdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHBhcmVudFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogcGFyZW50VmFsXG4gICAgICApXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRJbnN0YW5jZURhdGFGbiAoKSB7XG4gICAgICAvLyBpbnN0YW5jZSBtZXJnZVxuICAgICAgdmFyIGluc3RhbmNlRGF0YSA9IHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGNoaWxkVmFsLmNhbGwodm0sIHZtKVxuICAgICAgICA6IGNoaWxkVmFsO1xuICAgICAgdmFyIGRlZmF1bHREYXRhID0gdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHBhcmVudFZhbC5jYWxsKHZtLCB2bSlcbiAgICAgICAgOiBwYXJlbnRWYWw7XG4gICAgICBpZiAoaW5zdGFuY2VEYXRhKSB7XG4gICAgICAgIHJldHVybiBtZXJnZURhdGEoaW5zdGFuY2VEYXRhLCBkZWZhdWx0RGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0RGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5zdHJhdHMuZGF0YSA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm1cbikge1xuICBpZiAoIXZtKSB7XG4gICAgaWYgKGNoaWxkVmFsICYmIHR5cGVvZiBjaGlsZFZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnVGhlIFwiZGF0YVwiIG9wdGlvbiBzaG91bGQgYmUgYSBmdW5jdGlvbiAnICtcbiAgICAgICAgJ3RoYXQgcmV0dXJucyBhIHBlci1pbnN0YW5jZSB2YWx1ZSBpbiBjb21wb25lbnQgJyArXG4gICAgICAgICdkZWZpbml0aW9ucy4nLFxuICAgICAgICB2bVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsKVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pXG59O1xuXG4vKipcbiAqIEhvb2tzIGFuZCBwcm9wcyBhcmUgbWVyZ2VkIGFzIGFycmF5cy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VIb29rIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbFxuKSB7XG4gIHZhciByZXMgPSBjaGlsZFZhbFxuICAgID8gcGFyZW50VmFsXG4gICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXG4gICAgICAgID8gY2hpbGRWYWxcbiAgICAgICAgOiBbY2hpbGRWYWxdXG4gICAgOiBwYXJlbnRWYWw7XG4gIHJldHVybiByZXNcbiAgICA/IGRlZHVwZUhvb2tzKHJlcylcbiAgICA6IHJlc1xufVxuXG5mdW5jdGlvbiBkZWR1cGVIb29rcyAoaG9va3MpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlcy5pbmRleE9mKGhvb2tzW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlcy5wdXNoKGhvb2tzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5MSUZFQ1lDTEVfSE9PS1MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICBzdHJhdHNbaG9va10gPSBtZXJnZUhvb2s7XG59KTtcblxuLyoqXG4gKiBBc3NldHNcbiAqXG4gKiBXaGVuIGEgdm0gaXMgcHJlc2VudCAoaW5zdGFuY2UgY3JlYXRpb24pLCB3ZSBuZWVkIHRvIGRvXG4gKiBhIHRocmVlLXdheSBtZXJnZSBiZXR3ZWVuIGNvbnN0cnVjdG9yIG9wdGlvbnMsIGluc3RhbmNlXG4gKiBvcHRpb25zIGFuZCBwYXJlbnQgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VBc3NldHMgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpO1xuICBpZiAoY2hpbGRWYWwpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICAgIHJldHVybiBleHRlbmQocmVzLCBjaGlsZFZhbClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cbn1cblxuQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICBzdHJhdHNbdHlwZSArICdzJ10gPSBtZXJnZUFzc2V0cztcbn0pO1xuXG4vKipcbiAqIFdhdGNoZXJzLlxuICpcbiAqIFdhdGNoZXJzIGhhc2hlcyBzaG91bGQgbm90IG92ZXJ3cml0ZSBvbmVcbiAqIGFub3RoZXIsIHNvIHdlIG1lcmdlIHRoZW0gYXMgYXJyYXlzLlxuICovXG5zdHJhdHMud2F0Y2ggPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICAvLyB3b3JrIGFyb3VuZCBGaXJlZm94J3MgT2JqZWN0LnByb3RvdHlwZS53YXRjaC4uLlxuICBpZiAocGFyZW50VmFsID09PSBuYXRpdmVXYXRjaCkgeyBwYXJlbnRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgaWYgKGNoaWxkVmFsID09PSBuYXRpdmVXYXRjaCkgeyBjaGlsZFZhbCA9IHVuZGVmaW5lZDsgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjaGlsZFZhbCkgeyByZXR1cm4gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCkgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICB9XG4gIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gIHZhciByZXQgPSB7fTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgZm9yICh2YXIga2V5JDEgaW4gY2hpbGRWYWwpIHtcbiAgICB2YXIgcGFyZW50ID0gcmV0W2tleSQxXTtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZFZhbFtrZXkkMV07XG4gICAgaWYgKHBhcmVudCAmJiAhQXJyYXkuaXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBwYXJlbnQgPSBbcGFyZW50XTtcbiAgICB9XG4gICAgcmV0W2tleSQxXSA9IHBhcmVudFxuICAgICAgPyBwYXJlbnQuY29uY2F0KGNoaWxkKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkKSA/IGNoaWxkIDogW2NoaWxkXTtcbiAgfVxuICByZXR1cm4gcmV0XG59O1xuXG4vKipcbiAqIE90aGVyIG9iamVjdCBoYXNoZXMuXG4gKi9cbnN0cmF0cy5wcm9wcyA9XG5zdHJhdHMubWV0aG9kcyA9XG5zdHJhdHMuaW5qZWN0ID1cbnN0cmF0cy5jb21wdXRlZCA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIGlmIChjaGlsZFZhbCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gIH1cbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgdmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGlmIChjaGlsZFZhbCkgeyBleHRlbmQocmV0LCBjaGlsZFZhbCk7IH1cbiAgcmV0dXJuIHJldFxufTtcbnN0cmF0cy5wcm92aWRlID0gbWVyZ2VEYXRhT3JGbjtcblxuLyoqXG4gKiBEZWZhdWx0IHN0cmF0ZWd5LlxuICovXG52YXIgZGVmYXVsdFN0cmF0ID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgcmV0dXJuIGNoaWxkVmFsID09PSB1bmRlZmluZWRcbiAgICA/IHBhcmVudFZhbFxuICAgIDogY2hpbGRWYWxcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgY29tcG9uZW50IG5hbWVzXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ29tcG9uZW50cyAob3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgdmFsaWRhdGVDb21wb25lbnROYW1lKGtleSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb21wb25lbnROYW1lIChuYW1lKSB7XG4gIGlmICghbmV3IFJlZ0V4cCgoXCJeW2EtekEtWl1bXFxcXC1cXFxcLjAtOV9cIiArICh1bmljb2RlUmVnRXhwLnNvdXJjZSkgKyBcIl0qJFwiKSkudGVzdChuYW1lKSkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBjb21wb25lbnQgbmFtZTogXCInICsgbmFtZSArICdcIi4gQ29tcG9uZW50IG5hbWVzICcgK1xuICAgICAgJ3Nob3VsZCBjb25mb3JtIHRvIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUgaW4gaHRtbDUgc3BlY2lmaWNhdGlvbi4nXG4gICAgKTtcbiAgfVxuICBpZiAoaXNCdWlsdEluVGFnKG5hbWUpIHx8IGNvbmZpZy5pc1Jlc2VydmVkVGFnKG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdEbyBub3QgdXNlIGJ1aWx0LWluIG9yIHJlc2VydmVkIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50ICcgK1xuICAgICAgJ2lkOiAnICsgbmFtZVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBFbnN1cmUgYWxsIHByb3BzIG9wdGlvbiBzeW50YXggYXJlIG5vcm1hbGl6ZWQgaW50byB0aGVcbiAqIE9iamVjdC1iYXNlZCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzIChvcHRpb25zLCB2bSkge1xuICB2YXIgcHJvcHMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoIXByb3BzKSB7IHJldHVybiB9XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGksIHZhbCwgbmFtZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YWwgPSBwcm9wc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lID0gY2FtZWxpemUodmFsKTtcbiAgICAgICAgcmVzW25hbWVdID0geyB0eXBlOiBudWxsIH07XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybigncHJvcHMgbXVzdCBiZSBzdHJpbmdzIHdoZW4gdXNpbmcgYXJyYXkgc3ludGF4LicpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgdmFsID0gcHJvcHNba2V5XTtcbiAgICAgIG5hbWUgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgcmVzW25hbWVdID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gdmFsXG4gICAgICAgIDogeyB0eXBlOiB2YWwgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwicHJvcHNcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUocHJvcHMpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIG9wdGlvbnMucHJvcHMgPSByZXM7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGFsbCBpbmplY3Rpb25zIGludG8gT2JqZWN0LWJhc2VkIGZvcm1hdFxuICovXG5mdW5jdGlvbiBub3JtYWxpemVJbmplY3QgKG9wdGlvbnMsIHZtKSB7XG4gIHZhciBpbmplY3QgPSBvcHRpb25zLmluamVjdDtcbiAgaWYgKCFpbmplY3QpIHsgcmV0dXJuIH1cbiAgdmFyIG5vcm1hbGl6ZWQgPSBvcHRpb25zLmluamVjdCA9IHt9O1xuICBpZiAoQXJyYXkuaXNBcnJheShpbmplY3QpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vcm1hbGl6ZWRbaW5qZWN0W2ldXSA9IHsgZnJvbTogaW5qZWN0W2ldIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoaW5qZWN0KSkge1xuICAgIGZvciAodmFyIGtleSBpbiBpbmplY3QpIHtcbiAgICAgIHZhciB2YWwgPSBpbmplY3Rba2V5XTtcbiAgICAgIG5vcm1hbGl6ZWRba2V5XSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICA/IGV4dGVuZCh7IGZyb206IGtleSB9LCB2YWwpXG4gICAgICAgIDogeyBmcm9tOiB2YWwgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiaW5qZWN0XFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKGluamVjdCkpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgcmF3IGZ1bmN0aW9uIGRpcmVjdGl2ZXMgaW50byBvYmplY3QgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzIChvcHRpb25zKSB7XG4gIHZhciBkaXJzID0gb3B0aW9ucy5kaXJlY3RpdmVzO1xuICBpZiAoZGlycykge1xuICAgIGZvciAodmFyIGtleSBpbiBkaXJzKSB7XG4gICAgICB2YXIgZGVmJCQxID0gZGlyc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGlyc1trZXldID0geyBiaW5kOiBkZWYkJDEsIHVwZGF0ZTogZGVmJCQxIH07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydE9iamVjdFR5cGUgKG5hbWUsIHZhbHVlLCB2bSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJcIiArIG5hbWUgKyBcIlxcXCI6IGV4cGVjdGVkIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZSh2YWx1ZSkpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXJnZSB0d28gb3B0aW9uIG9iamVjdHMgaW50byBhIG5ldyBvbmUuXG4gKiBDb3JlIHV0aWxpdHkgdXNlZCBpbiBib3RoIGluc3RhbnRpYXRpb24gYW5kIGluaGVyaXRhbmNlLlxuICovXG5mdW5jdGlvbiBtZXJnZU9wdGlvbnMgKFxuICBwYXJlbnQsXG4gIGNoaWxkLFxuICB2bVxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2tDb21wb25lbnRzKGNoaWxkKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjaGlsZCA9IGNoaWxkLm9wdGlvbnM7XG4gIH1cblxuICBub3JtYWxpemVQcm9wcyhjaGlsZCwgdm0pO1xuICBub3JtYWxpemVJbmplY3QoY2hpbGQsIHZtKTtcbiAgbm9ybWFsaXplRGlyZWN0aXZlcyhjaGlsZCk7XG5cbiAgLy8gQXBwbHkgZXh0ZW5kcyBhbmQgbWl4aW5zIG9uIHRoZSBjaGlsZCBvcHRpb25zLFxuICAvLyBidXQgb25seSBpZiBpdCBpcyBhIHJhdyBvcHRpb25zIG9iamVjdCB0aGF0IGlzbid0XG4gIC8vIHRoZSByZXN1bHQgb2YgYW5vdGhlciBtZXJnZU9wdGlvbnMgY2FsbC5cbiAgLy8gT25seSBtZXJnZWQgb3B0aW9ucyBoYXMgdGhlIF9iYXNlIHByb3BlcnR5LlxuICBpZiAoIWNoaWxkLl9iYXNlKSB7XG4gICAgaWYgKGNoaWxkLmV4dGVuZHMpIHtcbiAgICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLmV4dGVuZHMsIHZtKTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLm1peGlucykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZC5taXhpbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLm1peGluc1tpXSwgdm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvcHRpb25zID0ge307XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIHBhcmVudCkge1xuICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgfVxuICBmb3IgKGtleSBpbiBjaGlsZCkge1xuICAgIGlmICghaGFzT3duKHBhcmVudCwga2V5KSkge1xuICAgICAgbWVyZ2VGaWVsZChrZXkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtZXJnZUZpZWxkIChrZXkpIHtcbiAgICB2YXIgc3RyYXQgPSBzdHJhdHNba2V5XSB8fCBkZWZhdWx0U3RyYXQ7XG4gICAgb3B0aW9uc1trZXldID0gc3RyYXQocGFyZW50W2tleV0sIGNoaWxkW2tleV0sIHZtLCBrZXkpO1xuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbi8qKlxuICogUmVzb2x2ZSBhbiBhc3NldC5cbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBiZWNhdXNlIGNoaWxkIGluc3RhbmNlcyBuZWVkIGFjY2Vzc1xuICogdG8gYXNzZXRzIGRlZmluZWQgaW4gaXRzIGFuY2VzdG9yIGNoYWluLlxuICovXG5mdW5jdGlvbiByZXNvbHZlQXNzZXQgKFxuICBvcHRpb25zLFxuICB0eXBlLFxuICBpZCxcbiAgd2Fybk1pc3Npbmdcbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgYXNzZXRzID0gb3B0aW9uc1t0eXBlXTtcbiAgLy8gY2hlY2sgbG9jYWwgcmVnaXN0cmF0aW9uIHZhcmlhdGlvbnMgZmlyc3RcbiAgaWYgKGhhc093bihhc3NldHMsIGlkKSkgeyByZXR1cm4gYXNzZXRzW2lkXSB9XG4gIHZhciBjYW1lbGl6ZWRJZCA9IGNhbWVsaXplKGlkKTtcbiAgaWYgKGhhc093bihhc3NldHMsIGNhbWVsaXplZElkKSkgeyByZXR1cm4gYXNzZXRzW2NhbWVsaXplZElkXSB9XG4gIHZhciBQYXNjYWxDYXNlSWQgPSBjYXBpdGFsaXplKGNhbWVsaXplZElkKTtcbiAgaWYgKGhhc093bihhc3NldHMsIFBhc2NhbENhc2VJZCkpIHsgcmV0dXJuIGFzc2V0c1tQYXNjYWxDYXNlSWRdIH1cbiAgLy8gZmFsbGJhY2sgdG8gcHJvdG90eXBlIGNoYWluXG4gIHZhciByZXMgPSBhc3NldHNbaWRdIHx8IGFzc2V0c1tjYW1lbGl6ZWRJZF0gfHwgYXNzZXRzW1Bhc2NhbENhc2VJZF07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm5NaXNzaW5nICYmICFyZXMpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ZhaWxlZCB0byByZXNvbHZlICcgKyB0eXBlLnNsaWNlKDAsIC0xKSArICc6ICcgKyBpZCxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3AgKFxuICBrZXksXG4gIHByb3BPcHRpb25zLFxuICBwcm9wc0RhdGEsXG4gIHZtXG4pIHtcbiAgdmFyIHByb3AgPSBwcm9wT3B0aW9uc1trZXldO1xuICB2YXIgYWJzZW50ID0gIWhhc093bihwcm9wc0RhdGEsIGtleSk7XG4gIHZhciB2YWx1ZSA9IHByb3BzRGF0YVtrZXldO1xuICAvLyBib29sZWFuIGNhc3RpbmdcbiAgdmFyIGJvb2xlYW5JbmRleCA9IGdldFR5cGVJbmRleChCb29sZWFuLCBwcm9wLnR5cGUpO1xuICBpZiAoYm9vbGVhbkluZGV4ID4gLTEpIHtcbiAgICBpZiAoYWJzZW50ICYmICFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gaHlwaGVuYXRlKGtleSkpIHtcbiAgICAgIC8vIG9ubHkgY2FzdCBlbXB0eSBzdHJpbmcgLyBzYW1lIG5hbWUgdG8gYm9vbGVhbiBpZlxuICAgICAgLy8gYm9vbGVhbiBoYXMgaGlnaGVyIHByaW9yaXR5XG4gICAgICB2YXIgc3RyaW5nSW5kZXggPSBnZXRUeXBlSW5kZXgoU3RyaW5nLCBwcm9wLnR5cGUpO1xuICAgICAgaWYgKHN0cmluZ0luZGV4IDwgMCB8fCBib29sZWFuSW5kZXggPCBzdHJpbmdJbmRleCkge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNoZWNrIGRlZmF1bHQgdmFsdWVcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICB2YWx1ZSA9IGdldFByb3BEZWZhdWx0VmFsdWUodm0sIHByb3AsIGtleSk7XG4gICAgLy8gc2luY2UgdGhlIGRlZmF1bHQgdmFsdWUgaXMgYSBmcmVzaCBjb3B5LFxuICAgIC8vIG1ha2Ugc3VyZSB0byBvYnNlcnZlIGl0LlxuICAgIHZhciBwcmV2U2hvdWxkT2JzZXJ2ZSA9IHNob3VsZE9ic2VydmU7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIG9ic2VydmUodmFsdWUpO1xuICAgIHRvZ2dsZU9ic2VydmluZyhwcmV2U2hvdWxkT2JzZXJ2ZSk7XG4gIH1cbiAgaWYgKFxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAvLyBza2lwIHZhbGlkYXRpb24gZm9yIHdlZXggcmVjeWNsZS1saXN0IGNoaWxkIGNvbXBvbmVudCBwcm9wc1xuICAgICEoZmFsc2UpXG4gICkge1xuICAgIGFzc2VydFByb3AocHJvcCwga2V5LCB2YWx1ZSwgdm0sIGFic2VudCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGEgcHJvcC5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcERlZmF1bHRWYWx1ZSAodm0sIHByb3AsIGtleSkge1xuICAvLyBubyBkZWZhdWx0LCByZXR1cm4gdW5kZWZpbmVkXG4gIGlmICghaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgdmFyIGRlZiA9IHByb3AuZGVmYXVsdDtcbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1mYWN0b3J5IGRlZmF1bHRzIGZvciBPYmplY3QgJiBBcnJheVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc09iamVjdChkZWYpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGRlZmF1bHQgdmFsdWUgZm9yIHByb3AgXCInICsga2V5ICsgJ1wiOiAnICtcbiAgICAgICdQcm9wcyB3aXRoIHR5cGUgT2JqZWN0L0FycmF5IG11c3QgdXNlIGEgZmFjdG9yeSBmdW5jdGlvbiAnICtcbiAgICAgICd0byByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUuJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyB0aGUgcmF3IHByb3AgdmFsdWUgd2FzIGFsc28gdW5kZWZpbmVkIGZyb20gcHJldmlvdXMgcmVuZGVyLFxuICAvLyByZXR1cm4gcHJldmlvdXMgZGVmYXVsdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB3YXRjaGVyIHRyaWdnZXJcbiAgaWYgKHZtICYmIHZtLiRvcHRpb25zLnByb3BzRGF0YSAmJlxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YVtrZXldID09PSB1bmRlZmluZWQgJiZcbiAgICB2bS5fcHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHJldHVybiB2bS5fcHJvcHNba2V5XVxuICB9XG4gIC8vIGNhbGwgZmFjdG9yeSBmdW5jdGlvbiBmb3Igbm9uLUZ1bmN0aW9uIHR5cGVzXG4gIC8vIGEgdmFsdWUgaXMgRnVuY3Rpb24gaWYgaXRzIHByb3RvdHlwZSBpcyBmdW5jdGlvbiBldmVuIGFjcm9zcyBkaWZmZXJlbnQgZXhlY3V0aW9uIGNvbnRleHRcbiAgcmV0dXJuIHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicgJiYgZ2V0VHlwZShwcm9wLnR5cGUpICE9PSAnRnVuY3Rpb24nXG4gICAgPyBkZWYuY2FsbCh2bSlcbiAgICA6IGRlZlxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGEgcHJvcCBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gYXNzZXJ0UHJvcCAoXG4gIHByb3AsXG4gIG5hbWUsXG4gIHZhbHVlLFxuICB2bSxcbiAgYWJzZW50XG4pIHtcbiAgaWYgKHByb3AucmVxdWlyZWQgJiYgYWJzZW50KSB7XG4gICAgd2FybihcbiAgICAgICdNaXNzaW5nIHJlcXVpcmVkIHByb3A6IFwiJyArIG5hbWUgKyAnXCInLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsICYmICFwcm9wLnJlcXVpcmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHR5cGUgPSBwcm9wLnR5cGU7XG4gIHZhciB2YWxpZCA9ICF0eXBlIHx8IHR5cGUgPT09IHRydWU7XG4gIHZhciBleHBlY3RlZFR5cGVzID0gW107XG4gIGlmICh0eXBlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlID0gW3R5cGVdO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGUubGVuZ3RoICYmICF2YWxpZDsgaSsrKSB7XG4gICAgICB2YXIgYXNzZXJ0ZWRUeXBlID0gYXNzZXJ0VHlwZSh2YWx1ZSwgdHlwZVtpXSwgdm0pO1xuICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGFzc2VydGVkVHlwZS5leHBlY3RlZFR5cGUgfHwgJycpO1xuICAgICAgdmFsaWQgPSBhc3NlcnRlZFR5cGUudmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgdmFyIGhhdmVFeHBlY3RlZFR5cGVzID0gZXhwZWN0ZWRUeXBlcy5zb21lKGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9KTtcbiAgaWYgKCF2YWxpZCAmJiBoYXZlRXhwZWN0ZWRUeXBlcykge1xuICAgIHdhcm4oXG4gICAgICBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciB2YWxpZGF0b3IgPSBwcm9wLnZhbGlkYXRvcjtcbiAgaWYgKHZhbGlkYXRvcikge1xuICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHNpbXBsZUNoZWNrUkUgPSAvXihTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258U3ltYm9sfEJpZ0ludCkkLztcblxuZnVuY3Rpb24gYXNzZXJ0VHlwZSAodmFsdWUsIHR5cGUsIHZtKSB7XG4gIHZhciB2YWxpZDtcbiAgdmFyIGV4cGVjdGVkVHlwZSA9IGdldFR5cGUodHlwZSk7XG4gIGlmIChzaW1wbGVDaGVja1JFLnRlc3QoZXhwZWN0ZWRUeXBlKSkge1xuICAgIHZhciB0ID0gdHlwZW9mIHZhbHVlO1xuICAgIHZhbGlkID0gdCA9PT0gZXhwZWN0ZWRUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gZm9yIHByaW1pdGl2ZSB3cmFwcGVyIG9iamVjdHNcbiAgICBpZiAoIXZhbGlkICYmIHQgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnT2JqZWN0Jykge1xuICAgIHZhbGlkID0gaXNQbGFpbk9iamVjdCh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnQXJyYXknKSB7XG4gICAgdmFsaWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgd2FybignSW52YWxpZCBwcm9wIHR5cGU6IFwiJyArIFN0cmluZyh0eXBlKSArICdcIiBpcyBub3QgYSBjb25zdHJ1Y3RvcicsIHZtKTtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdmFsaWQ6IHZhbGlkLFxuICAgIGV4cGVjdGVkVHlwZTogZXhwZWN0ZWRUeXBlXG4gIH1cbn1cblxudmFyIGZ1bmN0aW9uVHlwZUNoZWNrUkUgPSAvXlxccypmdW5jdGlvbiAoXFx3KykvO1xuXG4vKipcbiAqIFVzZSBmdW5jdGlvbiBzdHJpbmcgbmFtZSB0byBjaGVjayBidWlsdC1pbiB0eXBlcyxcbiAqIGJlY2F1c2UgYSBzaW1wbGUgZXF1YWxpdHkgY2hlY2sgd2lsbCBmYWlsIHdoZW4gcnVubmluZ1xuICogYWNyb3NzIGRpZmZlcmVudCB2bXMgLyBpZnJhbWVzLlxuICovXG5mdW5jdGlvbiBnZXRUeXBlIChmbikge1xuICB2YXIgbWF0Y2ggPSBmbiAmJiBmbi50b1N0cmluZygpLm1hdGNoKGZ1bmN0aW9uVHlwZUNoZWNrUkUpO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVR5cGUgKGEsIGIpIHtcbiAgcmV0dXJuIGdldFR5cGUoYSkgPT09IGdldFR5cGUoYilcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUluZGV4ICh0eXBlLCBleHBlY3RlZFR5cGVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFR5cGVzKSkge1xuICAgIHJldHVybiBpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXMsIHR5cGUpID8gMCA6IC0xXG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkVHlwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzW2ldLCB0eXBlKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbmZ1bmN0aW9uIGdldEludmFsaWRUeXBlTWVzc2FnZSAobmFtZSwgdmFsdWUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgdmFyIG1lc3NhZ2UgPSBcIkludmFsaWQgcHJvcDogdHlwZSBjaGVjayBmYWlsZWQgZm9yIHByb3AgXFxcIlwiICsgbmFtZSArIFwiXFxcIi5cIiArXG4gICAgXCIgRXhwZWN0ZWQgXCIgKyAoZXhwZWN0ZWRUeXBlcy5tYXAoY2FwaXRhbGl6ZSkuam9pbignLCAnKSk7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGVzWzBdO1xuICB2YXIgcmVjZWl2ZWRUeXBlID0gdG9SYXdUeXBlKHZhbHVlKTtcbiAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBzcGVjaWZ5IGV4cGVjdGVkIHZhbHVlXG4gIGlmIChcbiAgICBleHBlY3RlZFR5cGVzLmxlbmd0aCA9PT0gMSAmJlxuICAgIGlzRXhwbGljYWJsZShleHBlY3RlZFR5cGUpICYmXG4gICAgaXNFeHBsaWNhYmxlKHR5cGVvZiB2YWx1ZSkgJiZcbiAgICAhaXNCb29sZWFuKGV4cGVjdGVkVHlwZSwgcmVjZWl2ZWRUeXBlKVxuICApIHtcbiAgICBtZXNzYWdlICs9IFwiIHdpdGggdmFsdWUgXCIgKyAoc3R5bGVWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWRUeXBlKSk7XG4gIH1cbiAgbWVzc2FnZSArPSBcIiwgZ290IFwiICsgcmVjZWl2ZWRUeXBlICsgXCIgXCI7XG4gIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3BlY2lmeSByZWNlaXZlZCB2YWx1ZVxuICBpZiAoaXNFeHBsaWNhYmxlKHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwid2l0aCB2YWx1ZSBcIiArIChzdHlsZVZhbHVlKHZhbHVlLCByZWNlaXZlZFR5cGUpKSArIFwiLlwiO1xuICB9XG4gIHJldHVybiBtZXNzYWdlXG59XG5cbmZ1bmN0aW9uIHN0eWxlVmFsdWUgKHZhbHVlLCB0eXBlKSB7XG4gIGlmICh0eXBlID09PSAnU3RyaW5nJykge1xuICAgIHJldHVybiAoXCJcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdOdW1iZXInKSB7XG4gICAgcmV0dXJuIChcIlwiICsgKE51bWJlcih2YWx1ZSkpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXCJcIiArIHZhbHVlKVxuICB9XG59XG5cbnZhciBFWFBMSUNBQkxFX1RZUEVTID0gWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXTtcbmZ1bmN0aW9uIGlzRXhwbGljYWJsZSAodmFsdWUpIHtcbiAgcmV0dXJuIEVYUExJQ0FCTEVfVFlQRVMuc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZWxlbTsgfSlcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuICgpIHtcbiAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICByZXR1cm4gYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnRvTG93ZXJDYXNlKCkgPT09ICdib29sZWFuJzsgfSlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIC8vIERlYWN0aXZhdGUgZGVwcyB0cmFja2luZyB3aGlsZSBwcm9jZXNzaW5nIGVycm9yIGhhbmRsZXIgdG8gYXZvaWQgcG9zc2libGUgaW5maW5pdGUgcmVuZGVyaW5nLlxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWV4L2lzc3Vlcy8xNTA1XG4gIHB1c2hUYXJnZXQoKTtcbiAgdHJ5IHtcbiAgICBpZiAodm0pIHtcbiAgICAgIHZhciBjdXIgPSB2bTtcbiAgICAgIHdoaWxlICgoY3VyID0gY3VyLiRwYXJlbnQpKSB7XG4gICAgICAgIHZhciBob29rcyA9IGN1ci4kb3B0aW9ucy5lcnJvckNhcHR1cmVkO1xuICAgICAgICBpZiAoaG9va3MpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgY2FwdHVyZSA9IGhvb2tzW2ldLmNhbGwoY3VyLCBlcnIsIHZtLCBpbmZvKSA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChjYXB0dXJlKSB7IHJldHVybiB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGdsb2JhbEhhbmRsZUVycm9yKGUsIGN1ciwgJ2Vycm9yQ2FwdHVyZWQgaG9vaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnbG9iYWxIYW5kbGVFcnJvcihlcnIsIHZtLCBpbmZvKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyAoXG4gIGhhbmRsZXIsXG4gIGNvbnRleHQsXG4gIGFyZ3MsXG4gIHZtLFxuICBpbmZvXG4pIHtcbiAgdmFyIHJlcztcbiAgdHJ5IHtcbiAgICByZXMgPSBhcmdzID8gaGFuZGxlci5hcHBseShjb250ZXh0LCBhcmdzKSA6IGhhbmRsZXIuY2FsbChjb250ZXh0KTtcbiAgICBpZiAocmVzICYmICFyZXMuX2lzVnVlICYmIGlzUHJvbWlzZShyZXMpICYmICFyZXMuX2hhbmRsZWQpIHtcbiAgICAgIHJlcy5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8gKyBcIiAoUHJvbWlzZS9hc3luYylcIik7IH0pO1xuICAgICAgLy8gaXNzdWUgIzk1MTFcbiAgICAgIC8vIGF2b2lkIGNhdGNoIHRyaWdnZXJpbmcgbXVsdGlwbGUgdGltZXMgd2hlbiBuZXN0ZWQgY2FsbHNcbiAgICAgIHJlcy5faGFuZGxlZCA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIGluZm8pO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2xvYmFsSGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKGNvbmZpZy5lcnJvckhhbmRsZXIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5lcnJvckhhbmRsZXIuY2FsbChudWxsLCBlcnIsIHZtLCBpbmZvKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGlmIHRoZSB1c2VyIGludGVudGlvbmFsbHkgdGhyb3dzIHRoZSBvcmlnaW5hbCBlcnJvciBpbiB0aGUgaGFuZGxlcixcbiAgICAgIC8vIGRvIG5vdCBsb2cgaXQgdHdpY2VcbiAgICAgIGlmIChlICE9PSBlcnIpIHtcbiAgICAgICAgbG9nRXJyb3IoZSwgbnVsbCwgJ2NvbmZpZy5lcnJvckhhbmRsZXInKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9nRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybigoXCJFcnJvciBpbiBcIiArIGluZm8gKyBcIjogXFxcIlwiICsgKGVyci50b1N0cmluZygpKSArIFwiXFxcIlwiKSwgdm0pO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICgoaW5Ccm93c2VyIHx8IGluV2VleCkgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IGVyclxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgaXNVc2luZ01pY3JvVGFzayA9IGZhbHNlO1xuXG52YXIgY2FsbGJhY2tzID0gW107XG52YXIgcGVuZGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyAoKSB7XG4gIHBlbmRpbmcgPSBmYWxzZTtcbiAgdmFyIGNvcGllcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29waWVzW2ldKCk7XG4gIH1cbn1cblxuLy8gSGVyZSB3ZSBoYXZlIGFzeW5jIGRlZmVycmluZyB3cmFwcGVycyB1c2luZyBtaWNyb3Rhc2tzLlxuLy8gSW4gMi41IHdlIHVzZWQgKG1hY3JvKSB0YXNrcyAoaW4gY29tYmluYXRpb24gd2l0aCBtaWNyb3Rhc2tzKS5cbi8vIEhvd2V2ZXIsIGl0IGhhcyBzdWJ0bGUgcHJvYmxlbXMgd2hlbiBzdGF0ZSBpcyBjaGFuZ2VkIHJpZ2h0IGJlZm9yZSByZXBhaW50XG4vLyAoZS5nLiAjNjgxMywgb3V0LWluIHRyYW5zaXRpb25zKS5cbi8vIEFsc28sIHVzaW5nIChtYWNybykgdGFza3MgaW4gZXZlbnQgaGFuZGxlciB3b3VsZCBjYXVzZSBzb21lIHdlaXJkIGJlaGF2aW9yc1xuLy8gdGhhdCBjYW5ub3QgYmUgY2lyY3VtdmVudGVkIChlLmcuICM3MTA5LCAjNzE1MywgIzc1NDYsICM3ODM0LCAjODEwOSkuXG4vLyBTbyB3ZSBub3cgdXNlIG1pY3JvdGFza3MgZXZlcnl3aGVyZSwgYWdhaW4uXG4vLyBBIG1ham9yIGRyYXdiYWNrIG9mIHRoaXMgdHJhZGVvZmYgaXMgdGhhdCB0aGVyZSBhcmUgc29tZSBzY2VuYXJpb3Ncbi8vIHdoZXJlIG1pY3JvdGFza3MgaGF2ZSB0b28gaGlnaCBhIHByaW9yaXR5IGFuZCBmaXJlIGluIGJldHdlZW4gc3VwcG9zZWRseVxuLy8gc2VxdWVudGlhbCBldmVudHMgKGUuZy4gIzQ1MjEsICM2NjkwLCB3aGljaCBoYXZlIHdvcmthcm91bmRzKVxuLy8gb3IgZXZlbiBiZXR3ZWVuIGJ1YmJsaW5nIG9mIHRoZSBzYW1lIGV2ZW50ICgjNjU2NikuXG52YXIgdGltZXJGdW5jO1xuXG4vLyBUaGUgbmV4dFRpY2sgYmVoYXZpb3IgbGV2ZXJhZ2VzIHRoZSBtaWNyb3Rhc2sgcXVldWUsIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZFxuLy8gdmlhIGVpdGhlciBuYXRpdmUgUHJvbWlzZS50aGVuIG9yIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXRhdGlvbk9ic2VydmVyIGhhcyB3aWRlciBzdXBwb3J0LCBob3dldmVyIGl0IGlzIHNlcmlvdXNseSBidWdnZWQgaW5cbi8vIFVJV2ViVmlldyBpbiBpT1MgPj0gOS4zLjMgd2hlbiB0cmlnZ2VyZWQgaW4gdG91Y2ggZXZlbnQgaGFuZGxlcnMuIEl0XG4vLyBjb21wbGV0ZWx5IHN0b3BzIHdvcmtpbmcgYWZ0ZXIgdHJpZ2dlcmluZyBhIGZldyB0aW1lcy4uLiBzbywgaWYgbmF0aXZlXG4vLyBQcm9taXNlIGlzIGF2YWlsYWJsZSwgd2Ugd2lsbCB1c2UgaXQ6XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCwgJGZsb3ctZGlzYWJsZS1saW5lICovXG5pZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb21pc2UpKSB7XG4gIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBwLnRoZW4oZmx1c2hDYWxsYmFja3MpO1xuICAgIC8vIEluIHByb2JsZW1hdGljIFVJV2ViVmlld3MsIFByb21pc2UudGhlbiBkb2Vzbid0IGNvbXBsZXRlbHkgYnJlYWssIGJ1dFxuICAgIC8vIGl0IGNhbiBnZXQgc3R1Y2sgaW4gYSB3ZWlyZCBzdGF0ZSB3aGVyZSBjYWxsYmFja3MgYXJlIHB1c2hlZCBpbnRvIHRoZVxuICAgIC8vIG1pY3JvdGFzayBxdWV1ZSBidXQgdGhlIHF1ZXVlIGlzbid0IGJlaW5nIGZsdXNoZWQsIHVudGlsIHRoZSBicm93c2VyXG4gICAgLy8gbmVlZHMgdG8gZG8gc29tZSBvdGhlciB3b3JrLCBlLmcuIGhhbmRsZSBhIHRpbWVyLiBUaGVyZWZvcmUgd2UgY2FuXG4gICAgLy8gXCJmb3JjZVwiIHRoZSBtaWNyb3Rhc2sgcXVldWUgdG8gYmUgZmx1c2hlZCBieSBhZGRpbmcgYW4gZW1wdHkgdGltZXIuXG4gICAgaWYgKGlzSU9TKSB7IHNldFRpbWVvdXQobm9vcCk7IH1cbiAgfTtcbiAgaXNVc2luZ01pY3JvVGFzayA9IHRydWU7XG59IGVsc2UgaWYgKCFpc0lFICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJyAmJiAoXG4gIGlzTmF0aXZlKE11dGF0aW9uT2JzZXJ2ZXIpIHx8XG4gIC8vIFBoYW50b21KUyBhbmQgaU9TIDcueFxuICBNdXRhdGlvbk9ic2VydmVyLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl0nXG4pKSB7XG4gIC8vIFVzZSBNdXRhdGlvbk9ic2VydmVyIHdoZXJlIG5hdGl2ZSBQcm9taXNlIGlzIG5vdCBhdmFpbGFibGUsXG4gIC8vIGUuZy4gUGhhbnRvbUpTLCBpT1M3LCBBbmRyb2lkIDQuNFxuICAvLyAoIzY0NjYgTXV0YXRpb25PYnNlcnZlciBpcyB1bnJlbGlhYmxlIGluIElFMTEpXG4gIHZhciBjb3VudGVyID0gMTtcbiAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2hDYWxsYmFja3MpO1xuICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoY291bnRlcikpO1xuICBvYnNlcnZlci5vYnNlcnZlKHRleHROb2RlLCB7XG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICB9KTtcbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgMjtcbiAgICB0ZXh0Tm9kZS5kYXRhID0gU3RyaW5nKGNvdW50ZXIpO1xuICB9O1xuICBpc1VzaW5nTWljcm9UYXNrID0gdHJ1ZTtcbn0gZWxzZSBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoc2V0SW1tZWRpYXRlKSkge1xuICAvLyBGYWxsYmFjayB0byBzZXRJbW1lZGlhdGUuXG4gIC8vIFRlY2huaWNhbGx5IGl0IGxldmVyYWdlcyB0aGUgKG1hY3JvKSB0YXNrIHF1ZXVlLFxuICAvLyBidXQgaXQgaXMgc3RpbGwgYSBiZXR0ZXIgY2hvaWNlIHRoYW4gc2V0VGltZW91dC5cbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHNldEltbWVkaWF0ZShmbHVzaENhbGxiYWNrcyk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBGYWxsYmFjayB0byBzZXRUaW1lb3V0LlxuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGltZW91dChmbHVzaENhbGxiYWNrcywgMCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrIChjYiwgY3R4KSB7XG4gIHZhciBfcmVzb2x2ZTtcbiAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbChjdHgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBoYW5kbGVFcnJvcihlLCBjdHgsICduZXh0VGljaycpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3Jlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlKGN0eCk7XG4gICAgfVxuICB9KTtcbiAgaWYgKCFwZW5kaW5nKSB7XG4gICAgcGVuZGluZyA9IHRydWU7XG4gICAgdGltZXJGdW5jKCk7XG4gIH1cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGlmICghY2IgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfSlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyogbm90IHR5cGUgY2hlY2tpbmcgdGhpcyBmaWxlIGJlY2F1c2UgZmxvdyBkb2Vzbid0IHBsYXkgd2VsbCB3aXRoIFByb3h5ICovXG5cbnZhciBpbml0UHJveHk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBhbGxvd2VkR2xvYmFscyA9IG1ha2VNYXAoXG4gICAgJ0luZmluaXR5LHVuZGVmaW5lZCxOYU4saXNGaW5pdGUsaXNOYU4sJyArXG4gICAgJ3BhcnNlRmxvYXQscGFyc2VJbnQsZGVjb2RlVVJJLGRlY29kZVVSSUNvbXBvbmVudCxlbmNvZGVVUkksZW5jb2RlVVJJQ29tcG9uZW50LCcgK1xuICAgICdNYXRoLE51bWJlcixEYXRlLEFycmF5LE9iamVjdCxCb29sZWFuLFN0cmluZyxSZWdFeHAsTWFwLFNldCxKU09OLEludGwsQmlnSW50LCcgK1xuICAgICdyZXF1aXJlJyAvLyBmb3IgV2VicGFjay9Ccm93c2VyaWZ5XG4gICk7XG5cbiAgdmFyIHdhcm5Ob25QcmVzZW50ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgb3IgbWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBub3QgZGVmaW5lZCBvbiB0aGUgaW5zdGFuY2UgYnV0IFwiICtcbiAgICAgICdyZWZlcmVuY2VkIGR1cmluZyByZW5kZXIuIE1ha2Ugc3VyZSB0aGF0IHRoaXMgcHJvcGVydHkgaXMgcmVhY3RpdmUsICcgK1xuICAgICAgJ2VpdGhlciBpbiB0aGUgZGF0YSBvcHRpb24sIG9yIGZvciBjbGFzcy1iYXNlZCBjb21wb25lbnRzLCBieSAnICtcbiAgICAgICdpbml0aWFsaXppbmcgdGhlIHByb3BlcnR5LiAnICtcbiAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL3JlYWN0aXZpdHkuaHRtbCNEZWNsYXJpbmctUmVhY3RpdmUtUHJvcGVydGllcy4nLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgd2FyblJlc2VydmVkUHJlZml4ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgd2FybihcbiAgICAgIFwiUHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIG11c3QgYmUgYWNjZXNzZWQgd2l0aCBcXFwiJGRhdGEuXCIgKyBrZXkgKyBcIlxcXCIgYmVjYXVzZSBcIiArXG4gICAgICAncHJvcGVydGllcyBzdGFydGluZyB3aXRoIFwiJFwiIG9yIFwiX1wiIGFyZSBub3QgcHJveGllZCBpbiB0aGUgVnVlIGluc3RhbmNlIHRvICcgK1xuICAgICAgJ3ByZXZlbnQgY29uZmxpY3RzIHdpdGggVnVlIGludGVybmFscy4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9hcGkvI2RhdGEnLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgaGFzUHJveHkgPVxuICAgIHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJveHkpO1xuXG4gIGlmIChoYXNQcm94eSkge1xuICAgIHZhciBpc0J1aWx0SW5Nb2RpZmllciA9IG1ha2VNYXAoJ3N0b3AscHJldmVudCxzZWxmLGN0cmwsc2hpZnQsYWx0LG1ldGEsZXhhY3QnKTtcbiAgICBjb25maWcua2V5Q29kZXMgPSBuZXcgUHJveHkoY29uZmlnLmtleUNvZGVzLCB7XG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpc0J1aWx0SW5Nb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgd2FybigoXCJBdm9pZCBvdmVyd3JpdGluZyBidWlsdC1pbiBtb2RpZmllciBpbiBjb25maWcua2V5Q29kZXM6IC5cIiArIGtleSkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGhhc0hhbmRsZXIgPSB7XG4gICAgaGFzOiBmdW5jdGlvbiBoYXMgKHRhcmdldCwga2V5KSB7XG4gICAgICB2YXIgaGFzID0ga2V5IGluIHRhcmdldDtcbiAgICAgIHZhciBpc0FsbG93ZWQgPSBhbGxvd2VkR2xvYmFscyhrZXkpIHx8XG4gICAgICAgICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkuY2hhckF0KDApID09PSAnXycgJiYgIShrZXkgaW4gdGFyZ2V0LiRkYXRhKSk7XG4gICAgICBpZiAoIWhhcyAmJiAhaXNBbGxvd2VkKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhcyB8fCAhaXNBbGxvd2VkXG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRIYW5kbGVyID0ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICh0YXJnZXQsIGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmICEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0W2tleV1cbiAgICB9XG4gIH07XG5cbiAgaW5pdFByb3h5ID0gZnVuY3Rpb24gaW5pdFByb3h5ICh2bSkge1xuICAgIGlmIChoYXNQcm94eSkge1xuICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3h5IGhhbmRsZXIgdG8gdXNlXG4gICAgICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICAgICAgdmFyIGhhbmRsZXJzID0gb3B0aW9ucy5yZW5kZXIgJiYgb3B0aW9ucy5yZW5kZXIuX3dpdGhTdHJpcHBlZFxuICAgICAgICA/IGdldEhhbmRsZXJcbiAgICAgICAgOiBoYXNIYW5kbGVyO1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gbmV3IFByb3h5KHZtLCBoYW5kbGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsKSB7XG4gIF90cmF2ZXJzZSh2YWwsIHNlZW5PYmplY3RzKTtcbiAgc2Vlbk9iamVjdHMuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gX3RyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgdmFyIGksIGtleXM7XG4gIHZhciBpc0EgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gIGlmICgoIWlzQSAmJiAhaXNPYmplY3QodmFsKSkgfHwgT2JqZWN0LmlzRnJvemVuKHZhbCkgfHwgdmFsIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsLl9fb2JfXykge1xuICAgIHZhciBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkO1xuICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWVuLmFkZChkZXBJZCk7XG4gIH1cbiAgaWYgKGlzQSkge1xuICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtpXSwgc2Vlbik7IH1cbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKTsgfVxuICB9XG59XG5cbnZhciBtYXJrO1xudmFyIG1lYXN1cmU7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwZXJmID0gaW5Ccm93c2VyICYmIHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChcbiAgICBwZXJmICYmXG4gICAgcGVyZi5tYXJrICYmXG4gICAgcGVyZi5tZWFzdXJlICYmXG4gICAgcGVyZi5jbGVhck1hcmtzICYmXG4gICAgcGVyZi5jbGVhck1lYXN1cmVzXG4gICkge1xuICAgIG1hcmsgPSBmdW5jdGlvbiAodGFnKSB7IHJldHVybiBwZXJmLm1hcmsodGFnKTsgfTtcbiAgICBtZWFzdXJlID0gZnVuY3Rpb24gKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpIHtcbiAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhzdGFydFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3MoZW5kVGFnKTtcbiAgICAgIC8vIHBlcmYuY2xlYXJNZWFzdXJlcyhuYW1lKVxuICAgIH07XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBub3JtYWxpemVFdmVudCA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgcGFzc2l2ZSA9IG5hbWUuY2hhckF0KDApID09PSAnJic7XG4gIG5hbWUgPSBwYXNzaXZlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBvbmNlJCQxID0gbmFtZS5jaGFyQXQoMCkgPT09ICd+JzsgLy8gUHJlZml4ZWQgbGFzdCwgY2hlY2tlZCBmaXJzdFxuICBuYW1lID0gb25jZSQkMSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgY2FwdHVyZSA9IG5hbWUuY2hhckF0KDApID09PSAnISc7XG4gIG5hbWUgPSBjYXB0dXJlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBvbmNlOiBvbmNlJCQxLFxuICAgIGNhcHR1cmU6IGNhcHR1cmUsXG4gICAgcGFzc2l2ZTogcGFzc2l2ZVxuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlRm5JbnZva2VyIChmbnMsIHZtKSB7XG4gIGZ1bmN0aW9uIGludm9rZXIgKCkge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmbnMgPSBpbnZva2VyLmZucztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbnMpKSB7XG4gICAgICB2YXIgY2xvbmVkID0gZm5zLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjbG9uZWRbaV0sIG51bGwsIGFyZ3VtZW50cyQxLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJldHVybiBoYW5kbGVyIHJldHVybiB2YWx1ZSBmb3Igc2luZ2xlIGhhbmRsZXJzXG4gICAgICByZXR1cm4gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoZm5zLCBudWxsLCBhcmd1bWVudHMsIHZtLCBcInYtb24gaGFuZGxlclwiKVxuICAgIH1cbiAgfVxuICBpbnZva2VyLmZucyA9IGZucztcbiAgcmV0dXJuIGludm9rZXJcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGlzdGVuZXJzIChcbiAgb24sXG4gIG9sZE9uLFxuICBhZGQsXG4gIHJlbW92ZSQkMSxcbiAgY3JlYXRlT25jZUhhbmRsZXIsXG4gIHZtXG4pIHtcbiAgdmFyIG5hbWUsIGRlZiQkMSwgY3VyLCBvbGQsIGV2ZW50O1xuICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICBkZWYkJDEgPSBjdXIgPSBvbltuYW1lXTtcbiAgICBvbGQgPSBvbGRPbltuYW1lXTtcbiAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgIGlmIChpc1VuZGVmKGN1cikpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJJbnZhbGlkIGhhbmRsZXIgZm9yIGV2ZW50IFxcXCJcIiArIChldmVudC5uYW1lKSArIFwiXFxcIjogZ290IFwiICsgU3RyaW5nKGN1ciksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNVbmRlZihvbGQpKSB7XG4gICAgICBpZiAoaXNVbmRlZihjdXIuZm5zKSkge1xuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZUZuSW52b2tlcihjdXIsIHZtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1RydWUoZXZlbnQub25jZSkpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVPbmNlSGFuZGxlcihldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUpO1xuICAgICAgfVxuICAgICAgYWRkKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSwgZXZlbnQucGFzc2l2ZSwgZXZlbnQucGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKGN1ciAhPT0gb2xkKSB7XG4gICAgICBvbGQuZm5zID0gY3VyO1xuICAgICAgb25bbmFtZV0gPSBvbGQ7XG4gICAgfVxuICB9XG4gIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgIGlmIChpc1VuZGVmKG9uW25hbWVdKSkge1xuICAgICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICAgIHJlbW92ZSQkMShldmVudC5uYW1lLCBvbGRPbltuYW1lXSwgZXZlbnQuY2FwdHVyZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBtZXJnZVZOb2RlSG9vayAoZGVmLCBob29rS2V5LCBob29rKSB7XG4gIGlmIChkZWYgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIGRlZiA9IGRlZi5kYXRhLmhvb2sgfHwgKGRlZi5kYXRhLmhvb2sgPSB7fSk7XG4gIH1cbiAgdmFyIGludm9rZXI7XG4gIHZhciBvbGRIb29rID0gZGVmW2hvb2tLZXldO1xuXG4gIGZ1bmN0aW9uIHdyYXBwZWRIb29rICgpIHtcbiAgICBob29rLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gaW1wb3J0YW50OiByZW1vdmUgbWVyZ2VkIGhvb2sgdG8gZW5zdXJlIGl0J3MgY2FsbGVkIG9ubHkgb25jZVxuICAgIC8vIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgcmVtb3ZlKGludm9rZXIuZm5zLCB3cmFwcGVkSG9vayk7XG4gIH1cblxuICBpZiAoaXNVbmRlZihvbGRIb29rKSkge1xuICAgIC8vIG5vIGV4aXN0aW5nIGhvb2tcbiAgICBpbnZva2VyID0gY3JlYXRlRm5JbnZva2VyKFt3cmFwcGVkSG9va10pO1xuICB9IGVsc2Uge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpc0RlZihvbGRIb29rLmZucykgJiYgaXNUcnVlKG9sZEhvb2subWVyZ2VkKSkge1xuICAgICAgLy8gYWxyZWFkeSBhIG1lcmdlZCBpbnZva2VyXG4gICAgICBpbnZva2VyID0gb2xkSG9vaztcbiAgICAgIGludm9rZXIuZm5zLnB1c2god3JhcHBlZEhvb2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBleGlzdGluZyBwbGFpbiBob29rXG4gICAgICBpbnZva2VyID0gY3JlYXRlRm5JbnZva2VyKFtvbGRIb29rLCB3cmFwcGVkSG9va10pO1xuICAgIH1cbiAgfVxuXG4gIGludm9rZXIubWVyZ2VkID0gdHJ1ZTtcbiAgZGVmW2hvb2tLZXldID0gaW52b2tlcjtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEgKFxuICBkYXRhLFxuICBDdG9yLFxuICB0YWdcbikge1xuICAvLyB3ZSBhcmUgb25seSBleHRyYWN0aW5nIHJhdyB2YWx1ZXMgaGVyZS5cbiAgLy8gdmFsaWRhdGlvbiBhbmQgZGVmYXVsdCB2YWx1ZXMgYXJlIGhhbmRsZWQgaW4gdGhlIGNoaWxkXG4gIC8vIGNvbXBvbmVudCBpdHNlbGYuXG4gIHZhciBwcm9wT3B0aW9ucyA9IEN0b3Iub3B0aW9ucy5wcm9wcztcbiAgaWYgKGlzVW5kZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICB2YXIgcHJvcHMgPSBkYXRhLnByb3BzO1xuICBpZiAoaXNEZWYoYXR0cnMpIHx8IGlzRGVmKHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgdmFyIGFsdEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGtleUluTG93ZXJDYXNlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgIT09IGtleUluTG93ZXJDYXNlICYmXG4gICAgICAgICAgYXR0cnMgJiYgaGFzT3duKGF0dHJzLCBrZXlJbkxvd2VyQ2FzZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGlwKFxuICAgICAgICAgICAgXCJQcm9wIFxcXCJcIiArIGtleUluTG93ZXJDYXNlICsgXCJcXFwiIGlzIHBhc3NlZCB0byBjb21wb25lbnQgXCIgK1xuICAgICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodGFnIHx8IEN0b3IpKSArIFwiLCBidXQgdGhlIGRlY2xhcmVkIHByb3AgbmFtZSBpc1wiICtcbiAgICAgICAgICAgIFwiIFxcXCJcIiArIGtleSArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCBjYW1lbENhc2VkIFwiICtcbiAgICAgICAgICAgIFwicHJvcHMgbmVlZCB0byB1c2UgdGhlaXIga2ViYWItY2FzZSBlcXVpdmFsZW50cyB3aGVuIHVzaW5nIGluLURPTSBcIiArXG4gICAgICAgICAgICBcInRlbXBsYXRlcy4gWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgYWx0S2V5ICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wIChcbiAgcmVzLFxuICBoYXNoLFxuICBrZXksXG4gIGFsdEtleSxcbiAgcHJlc2VydmVcbikge1xuICBpZiAoaXNEZWYoaGFzaCkpIHtcbiAgICBpZiAoaGFzT3duKGhhc2gsIGtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFtrZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFtrZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKGhhc093bihoYXNoLCBhbHRLZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hbYWx0S2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hbYWx0S2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiAgKi9cblxuLy8gVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGF0dGVtcHRzIHRvIG1pbmltaXplIHRoZSBuZWVkIGZvciBub3JtYWxpemF0aW9uIGJ5XG4vLyBzdGF0aWNhbGx5IGFuYWx5emluZyB0aGUgdGVtcGxhdGUgYXQgY29tcGlsZSB0aW1lLlxuLy9cbi8vIEZvciBwbGFpbiBIVE1MIG1hcmt1cCwgbm9ybWFsaXphdGlvbiBjYW4gYmUgY29tcGxldGVseSBza2lwcGVkIGJlY2F1c2UgdGhlXG4vLyBnZW5lcmF0ZWQgcmVuZGVyIGZ1bmN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gcmV0dXJuIEFycmF5PFZOb2RlPi4gVGhlcmUgYXJlXG4vLyB0d28gY2FzZXMgd2hlcmUgZXh0cmEgbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQ6XG5cbi8vIDEuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbXBvbmVudHMgLSBiZWNhdXNlIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbi8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcbi8vIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkIC0gaWYgYW55IGNoaWxkIGlzIGFuIEFycmF5LCB3ZSBmbGF0dGVuIHRoZSB3aG9sZVxuLy8gdGhpbmcgd2l0aCBBcnJheS5wcm90b3R5cGUuY29uY2F0LiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIG9ubHkgMS1sZXZlbCBkZWVwXG4vLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXG5mdW5jdGlvbiBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuLy8gMi4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29uc3RydWN0cyB0aGF0IGFsd2F5cyBnZW5lcmF0ZWQgbmVzdGVkIEFycmF5cyxcbi8vIGUuZy4gPHRlbXBsYXRlPiwgPHNsb3Q+LCB2LWZvciwgb3Igd2hlbiB0aGUgY2hpbGRyZW4gaXMgcHJvdmlkZWQgYnkgdXNlclxuLy8gd2l0aCBoYW5kLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucyAvIEpTWC4gSW4gc3VjaCBjYXNlcyBhIGZ1bGwgbm9ybWFsaXphdGlvblxuLy8gaXMgbmVlZGVkIHRvIGNhdGVyIHRvIGFsbCBwb3NzaWJsZSB0eXBlcyBvZiBjaGlsZHJlbiB2YWx1ZXMuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGlzUHJpbWl0aXZlKGNoaWxkcmVuKVxuICAgID8gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildXG4gICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKVxuICAgICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNUZXh0Tm9kZSAobm9kZSkge1xuICByZXR1cm4gaXNEZWYobm9kZSkgJiYgaXNEZWYobm9kZS50ZXh0KSAmJiBpc0ZhbHNlKG5vZGUuaXNDb21tZW50KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheUNoaWxkcmVuIChjaGlsZHJlbiwgbmVzdGVkSW5kZXgpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgaSwgYywgbGFzdEluZGV4LCBsYXN0O1xuICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGlzVW5kZWYoYykgfHwgdHlwZW9mIGMgPT09ICdib29sZWFuJykgeyBjb250aW51ZSB9XG4gICAgbGFzdEluZGV4ID0gcmVzLmxlbmd0aCAtIDE7XG4gICAgbGFzdCA9IHJlc1tsYXN0SW5kZXhdO1xuICAgIC8vICBuZXN0ZWRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgaWYgKGMubGVuZ3RoID4gMCkge1xuICAgICAgICBjID0gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjLCAoKG5lc3RlZEluZGV4IHx8ICcnKSArIFwiX1wiICsgaSkpO1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIGlmIChpc1RleHROb2RlKGNbMF0pICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyAoY1swXSkudGV4dCk7XG4gICAgICAgICAgYy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoLmFwcGx5KHJlcywgYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xuICAgICAgaWYgKGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgU1NSIGh5ZHJhdGlvbiBiZWNhdXNlIHRleHQgbm9kZXMgYXJlXG4gICAgICAgIC8vIGVzc2VudGlhbGx5IG1lcmdlZCB3aGVuIHJlbmRlcmVkIHRvIEhUTUwgc3RyaW5nc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjKTtcbiAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJycpIHtcbiAgICAgICAgLy8gY29udmVydCBwcmltaXRpdmUgdG8gdm5vZGVcbiAgICAgICAgcmVzLnB1c2goY3JlYXRlVGV4dFZOb2RlKGMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzVGV4dE5vZGUoYykgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMudGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWZhdWx0IGtleSBmb3IgbmVzdGVkIGFycmF5IGNoaWxkcmVuIChsaWtlbHkgZ2VuZXJhdGVkIGJ5IHYtZm9yKVxuICAgICAgICBpZiAoaXNUcnVlKGNoaWxkcmVuLl9pc1ZMaXN0KSAmJlxuICAgICAgICAgIGlzRGVmKGMudGFnKSAmJlxuICAgICAgICAgIGlzVW5kZWYoYy5rZXkpICYmXG4gICAgICAgICAgaXNEZWYobmVzdGVkSW5kZXgpKSB7XG4gICAgICAgICAgYy5rZXkgPSBcIl9fdmxpc3RcIiArIG5lc3RlZEluZGV4ICsgXCJfXCIgKyBpICsgXCJfX1wiO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UHJvdmlkZSAodm0pIHtcbiAgdmFyIHByb3ZpZGUgPSB2bS4kb3B0aW9ucy5wcm92aWRlO1xuICBpZiAocHJvdmlkZSkge1xuICAgIHZtLl9wcm92aWRlZCA9IHR5cGVvZiBwcm92aWRlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHByb3ZpZGUuY2FsbCh2bSlcbiAgICAgIDogcHJvdmlkZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0SW5qZWN0aW9ucyAodm0pIHtcbiAgdmFyIHJlc3VsdCA9IHJlc29sdmVJbmplY3Qodm0uJG9wdGlvbnMuaW5qZWN0LCB2bSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhbiBpbmplY3RlZCB2YWx1ZSBkaXJlY3RseSBzaW5jZSB0aGUgY2hhbmdlcyB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcImluamVjdGlvbiBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbmplY3QgKGluamVjdCwgdm0pIHtcbiAgaWYgKGluamVjdCkge1xuICAgIC8vIGluamVjdCBpcyA6YW55IGJlY2F1c2UgZmxvdyBpcyBub3Qgc21hcnQgZW5vdWdoIHRvIGZpZ3VyZSBvdXQgY2FjaGVkXG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICAgID8gUmVmbGVjdC5vd25LZXlzKGluamVjdClcbiAgICAgIDogT2JqZWN0LmtleXMoaW5qZWN0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAvLyAjNjU3NCBpbiBjYXNlIHRoZSBpbmplY3Qgb2JqZWN0IGlzIG9ic2VydmVkLi4uXG4gICAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgICB2YXIgcHJvdmlkZUtleSA9IGluamVjdFtrZXldLmZyb207XG4gICAgICB2YXIgc291cmNlID0gdm07XG4gICAgICB3aGlsZSAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuX3Byb3ZpZGVkICYmIGhhc093bihzb3VyY2UuX3Byb3ZpZGVkLCBwcm92aWRlS2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlLl9wcm92aWRlZFtwcm92aWRlS2V5XTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBpbmplY3Rba2V5XSkge1xuICAgICAgICAgIHZhciBwcm92aWRlRGVmYXVsdCA9IGluamVjdFtrZXldLmRlZmF1bHQ7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB0eXBlb2YgcHJvdmlkZURlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gcHJvdmlkZURlZmF1bHQuY2FsbCh2bSlcbiAgICAgICAgICAgIDogcHJvdmlkZURlZmF1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm4oKFwiSW5qZWN0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBub3QgZm91bmRcIiksIHZtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuLyogICovXG5cblxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgcmF3IGNoaWxkcmVuIFZOb2RlcyBpbnRvIGEgc2xvdCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVTbG90cyAoXG4gIGNoaWxkcmVuLFxuICBjb250ZXh0XG4pIHtcbiAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgdmFyIHNsb3RzID0ge307XG4gIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgdmFyIGRhdGEgPSBjaGlsZC5kYXRhO1xuICAgIC8vIHJlbW92ZSBzbG90IGF0dHJpYnV0ZSBpZiB0aGUgbm9kZSBpcyByZXNvbHZlZCBhcyBhIFZ1ZSBzbG90IG5vZGVcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMuc2xvdCkge1xuICAgICAgZGVsZXRlIGRhdGEuYXR0cnMuc2xvdDtcbiAgICB9XG4gICAgLy8gbmFtZWQgc2xvdHMgc2hvdWxkIG9ubHkgYmUgcmVzcGVjdGVkIGlmIHRoZSB2bm9kZSB3YXMgcmVuZGVyZWQgaW4gdGhlXG4gICAgLy8gc2FtZSBjb250ZXh0LlxuICAgIGlmICgoY2hpbGQuY29udGV4dCA9PT0gY29udGV4dCB8fCBjaGlsZC5mbkNvbnRleHQgPT09IGNvbnRleHQpICYmXG4gICAgICBkYXRhICYmIGRhdGEuc2xvdCAhPSBudWxsXG4gICAgKSB7XG4gICAgICB2YXIgbmFtZSA9IGRhdGEuc2xvdDtcbiAgICAgIHZhciBzbG90ID0gKHNsb3RzW25hbWVdIHx8IChzbG90c1tuYW1lXSA9IFtdKSk7XG4gICAgICBpZiAoY2hpbGQudGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgIHNsb3QucHVzaC5hcHBseShzbG90LCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbG90LnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAoc2xvdHMuZGVmYXVsdCB8fCAoc2xvdHMuZGVmYXVsdCA9IFtdKSkucHVzaChjaGlsZCk7XG4gICAgfVxuICB9XG4gIC8vIGlnbm9yZSBzbG90cyB0aGF0IGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZVxuICBmb3IgKHZhciBuYW1lJDEgaW4gc2xvdHMpIHtcbiAgICBpZiAoc2xvdHNbbmFtZSQxXS5ldmVyeShpc1doaXRlc3BhY2UpKSB7XG4gICAgICBkZWxldGUgc2xvdHNbbmFtZSQxXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNsb3RzXG59XG5cbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZSAobm9kZSkge1xuICByZXR1cm4gKG5vZGUuaXNDb21tZW50ICYmICFub2RlLmFzeW5jRmFjdG9yeSkgfHwgbm9kZS50ZXh0ID09PSAnICdcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGlzQXN5bmNQbGFjZWhvbGRlciAobm9kZSkge1xuICByZXR1cm4gbm9kZS5pc0NvbW1lbnQgJiYgbm9kZS5hc3luY0ZhY3Rvcnlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNjb3BlZFNsb3RzIChcbiAgc2xvdHMsXG4gIG5vcm1hbFNsb3RzLFxuICBwcmV2U2xvdHNcbikge1xuICB2YXIgcmVzO1xuICB2YXIgaGFzTm9ybWFsU2xvdHMgPSBPYmplY3Qua2V5cyhub3JtYWxTbG90cykubGVuZ3RoID4gMDtcbiAgdmFyIGlzU3RhYmxlID0gc2xvdHMgPyAhIXNsb3RzLiRzdGFibGUgOiAhaGFzTm9ybWFsU2xvdHM7XG4gIHZhciBrZXkgPSBzbG90cyAmJiBzbG90cy4ka2V5O1xuICBpZiAoIXNsb3RzKSB7XG4gICAgcmVzID0ge307XG4gIH0gZWxzZSBpZiAoc2xvdHMuX25vcm1hbGl6ZWQpIHtcbiAgICAvLyBmYXN0IHBhdGggMTogY2hpbGQgY29tcG9uZW50IHJlLXJlbmRlciBvbmx5LCBwYXJlbnQgZGlkIG5vdCBjaGFuZ2VcbiAgICByZXR1cm4gc2xvdHMuX25vcm1hbGl6ZWRcbiAgfSBlbHNlIGlmIChcbiAgICBpc1N0YWJsZSAmJlxuICAgIHByZXZTbG90cyAmJlxuICAgIHByZXZTbG90cyAhPT0gZW1wdHlPYmplY3QgJiZcbiAgICBrZXkgPT09IHByZXZTbG90cy4ka2V5ICYmXG4gICAgIWhhc05vcm1hbFNsb3RzICYmXG4gICAgIXByZXZTbG90cy4kaGFzTm9ybWFsXG4gICkge1xuICAgIC8vIGZhc3QgcGF0aCAyOiBzdGFibGUgc2NvcGVkIHNsb3RzIHcvIG5vIG5vcm1hbCBzbG90cyB0byBwcm94eSxcbiAgICAvLyBvbmx5IG5lZWQgdG8gbm9ybWFsaXplIG9uY2VcbiAgICByZXR1cm4gcHJldlNsb3RzXG4gIH0gZWxzZSB7XG4gICAgcmVzID0ge307XG4gICAgZm9yICh2YXIga2V5JDEgaW4gc2xvdHMpIHtcbiAgICAgIGlmIChzbG90c1trZXkkMV0gJiYga2V5JDFbMF0gIT09ICckJykge1xuICAgICAgICByZXNba2V5JDFdID0gbm9ybWFsaXplU2NvcGVkU2xvdChub3JtYWxTbG90cywga2V5JDEsIHNsb3RzW2tleSQxXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGV4cG9zZSBub3JtYWwgc2xvdHMgb24gc2NvcGVkU2xvdHNcbiAgZm9yICh2YXIga2V5JDIgaW4gbm9ybWFsU2xvdHMpIHtcbiAgICBpZiAoIShrZXkkMiBpbiByZXMpKSB7XG4gICAgICByZXNba2V5JDJdID0gcHJveHlOb3JtYWxTbG90KG5vcm1hbFNsb3RzLCBrZXkkMik7XG4gICAgfVxuICB9XG4gIC8vIGF2b3JpYXogc2VlbXMgdG8gbW9jayBhIG5vbi1leHRlbnNpYmxlICRzY29wZWRTbG90cyBvYmplY3RcbiAgLy8gYW5kIHdoZW4gdGhhdCBpcyBwYXNzZWQgZG93biB0aGlzIHdvdWxkIGNhdXNlIGFuIGVycm9yXG4gIGlmIChzbG90cyAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHNsb3RzKSkge1xuICAgIChzbG90cykuX25vcm1hbGl6ZWQgPSByZXM7XG4gIH1cbiAgZGVmKHJlcywgJyRzdGFibGUnLCBpc1N0YWJsZSk7XG4gIGRlZihyZXMsICcka2V5Jywga2V5KTtcbiAgZGVmKHJlcywgJyRoYXNOb3JtYWwnLCBoYXNOb3JtYWxTbG90cyk7XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdChub3JtYWxTbG90cywga2V5LCBmbikge1xuICB2YXIgbm9ybWFsaXplZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzID0gYXJndW1lbnRzLmxlbmd0aCA/IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgOiBmbih7fSk7XG4gICAgcmVzID0gcmVzICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlcylcbiAgICAgID8gW3Jlc10gLy8gc2luZ2xlIHZub2RlXG4gICAgICA6IG5vcm1hbGl6ZUNoaWxkcmVuKHJlcyk7XG4gICAgdmFyIHZub2RlID0gcmVzICYmIHJlc1swXTtcbiAgICByZXR1cm4gcmVzICYmIChcbiAgICAgICF2bm9kZSB8fFxuICAgICAgKHJlcy5sZW5ndGggPT09IDEgJiYgdm5vZGUuaXNDb21tZW50ICYmICFpc0FzeW5jUGxhY2Vob2xkZXIodm5vZGUpKSAvLyAjOTY1OCwgIzEwMzkxXG4gICAgKSA/IHVuZGVmaW5lZFxuICAgICAgOiByZXNcbiAgfTtcbiAgLy8gdGhpcyBpcyBhIHNsb3QgdXNpbmcgdGhlIG5ldyB2LXNsb3Qgc3ludGF4IHdpdGhvdXQgc2NvcGUuIGFsdGhvdWdoIGl0IGlzXG4gIC8vIGNvbXBpbGVkIGFzIGEgc2NvcGVkIHNsb3QsIHJlbmRlciBmbiB1c2VycyB3b3VsZCBleHBlY3QgaXQgdG8gYmUgcHJlc2VudFxuICAvLyBvbiB0aGlzLiRzbG90cyBiZWNhdXNlIHRoZSB1c2FnZSBpcyBzZW1hbnRpY2FsbHkgYSBub3JtYWwgc2xvdC5cbiAgaWYgKGZuLnByb3h5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbFNsb3RzLCBrZXksIHtcbiAgICAgIGdldDogbm9ybWFsaXplZCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZFxufVxuXG5mdW5jdGlvbiBwcm94eU5vcm1hbFNsb3Qoc2xvdHMsIGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2xvdHNba2V5XTsgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgdmFsLFxuICByZW5kZXJcbikge1xuICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVyKGkgKyAxLCBpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIGlmIChoYXNTeW1ib2wgJiYgdmFsW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgIHJldCA9IFtdO1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdmFsW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIHJldC5wdXNoKHJlbmRlcihyZXN1bHQudmFsdWUsIHJldC5sZW5ndGgpKTtcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgIHJldCA9IG5ldyBBcnJheShrZXlzLmxlbmd0aCk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtrZXldLCBrZXksIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWlzRGVmKHJldCkpIHtcbiAgICByZXQgPSBbXTtcbiAgfVxuICAocmV0KS5faXNWTGlzdCA9IHRydWU7XG4gIHJldHVybiByZXRcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyA8c2xvdD5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2xvdCAoXG4gIG5hbWUsXG4gIGZhbGxiYWNrUmVuZGVyLFxuICBwcm9wcyxcbiAgYmluZE9iamVjdFxuKSB7XG4gIHZhciBzY29wZWRTbG90Rm4gPSB0aGlzLiRzY29wZWRTbG90c1tuYW1lXTtcbiAgdmFyIG5vZGVzO1xuICBpZiAoc2NvcGVkU2xvdEZuKSB7XG4gICAgLy8gc2NvcGVkIHNsb3RcbiAgICBwcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgIGlmIChiaW5kT2JqZWN0KSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNPYmplY3QoYmluZE9iamVjdCkpIHtcbiAgICAgICAgd2Fybignc2xvdCB2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCcsIHRoaXMpO1xuICAgICAgfVxuICAgICAgcHJvcHMgPSBleHRlbmQoZXh0ZW5kKHt9LCBiaW5kT2JqZWN0KSwgcHJvcHMpO1xuICAgIH1cbiAgICBub2RlcyA9XG4gICAgICBzY29wZWRTbG90Rm4ocHJvcHMpIHx8XG4gICAgICAodHlwZW9mIGZhbGxiYWNrUmVuZGVyID09PSAnZnVuY3Rpb24nID8gZmFsbGJhY2tSZW5kZXIoKSA6IGZhbGxiYWNrUmVuZGVyKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlcyA9XG4gICAgICB0aGlzLiRzbG90c1tuYW1lXSB8fFxuICAgICAgKHR5cGVvZiBmYWxsYmFja1JlbmRlciA9PT0gJ2Z1bmN0aW9uJyA/IGZhbGxiYWNrUmVuZGVyKCkgOiBmYWxsYmFja1JlbmRlcik7XG4gIH1cblxuICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScsIHsgc2xvdDogdGFyZ2V0IH0sIG5vZGVzKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2Rlc1xuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgZmlsdGVyc1xuICovXG5mdW5jdGlvbiByZXNvbHZlRmlsdGVyIChpZCkge1xuICByZXR1cm4gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgaWQsIHRydWUpIHx8IGlkZW50aXR5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0tleU5vdE1hdGNoIChleHBlY3QsIGFjdHVhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3QpKSB7XG4gICAgcmV0dXJuIGV4cGVjdC5pbmRleE9mKGFjdHVhbCkgPT09IC0xXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4cGVjdCAhPT0gYWN0dWFsXG4gIH1cbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgY2hlY2tpbmcga2V5Q29kZXMgZnJvbSBjb25maWcuXG4gKiBleHBvc2VkIGFzIFZ1ZS5wcm90b3R5cGUuX2tcbiAqIHBhc3NpbmcgaW4gZXZlbnRLZXlOYW1lIGFzIGxhc3QgYXJndW1lbnQgc2VwYXJhdGVseSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICovXG5mdW5jdGlvbiBjaGVja0tleUNvZGVzIChcbiAgZXZlbnRLZXlDb2RlLFxuICBrZXksXG4gIGJ1aWx0SW5LZXlDb2RlLFxuICBldmVudEtleU5hbWUsXG4gIGJ1aWx0SW5LZXlOYW1lXG4pIHtcbiAgdmFyIG1hcHBlZEtleUNvZGUgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluS2V5Q29kZTtcbiAgaWYgKGJ1aWx0SW5LZXlOYW1lICYmIGV2ZW50S2V5TmFtZSAmJiAhY29uZmlnLmtleUNvZGVzW2tleV0pIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChidWlsdEluS2V5TmFtZSwgZXZlbnRLZXlOYW1lKVxuICB9IGVsc2UgaWYgKG1hcHBlZEtleUNvZGUpIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChtYXBwZWRLZXlDb2RlLCBldmVudEtleUNvZGUpXG4gIH0gZWxzZSBpZiAoZXZlbnRLZXlOYW1lKSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXlcbiAgfVxuICByZXR1cm4gZXZlbnRLZXlDb2RlID09PSB1bmRlZmluZWRcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIG1lcmdpbmcgdi1iaW5kPVwib2JqZWN0XCIgaW50byBhIFZOb2RlJ3MgZGF0YS5cbiAqL1xuZnVuY3Rpb24gYmluZE9iamVjdFByb3BzIChcbiAgZGF0YSxcbiAgdGFnLFxuICB2YWx1ZSxcbiAgYXNQcm9wLFxuICBpc1N5bmNcbikge1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAndi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3Qgb3IgQXJyYXkgdmFsdWUnLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB0b09iamVjdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgaGFzaDtcbiAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgPT09ICdjbGFzcycgfHxcbiAgICAgICAgICBrZXkgPT09ICdzdHlsZScgfHxcbiAgICAgICAgICBpc1Jlc2VydmVkQXR0cmlidXRlKGtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaGFzaCA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMudHlwZTtcbiAgICAgICAgICBoYXNoID0gYXNQcm9wIHx8IGNvbmZpZy5tdXN0VXNlUHJvcCh0YWcsIHR5cGUsIGtleSlcbiAgICAgICAgICAgID8gZGF0YS5kb21Qcm9wcyB8fCAoZGF0YS5kb21Qcm9wcyA9IHt9KVxuICAgICAgICAgICAgOiBkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYW1lbGl6ZWRLZXkgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgICBpZiAoIShjYW1lbGl6ZWRLZXkgaW4gaGFzaCkgJiYgIShoeXBoZW5hdGVkS2V5IGluIGhhc2gpKSB7XG4gICAgICAgICAgaGFzaFtrZXldID0gdmFsdWVba2V5XTtcblxuICAgICAgICAgIGlmIChpc1N5bmMpIHtcbiAgICAgICAgICAgIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gICAgICAgICAgICBvblsoXCJ1cGRhdGU6XCIgKyBrZXkpXSA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFsdWVba2V5XSA9ICRldmVudDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIGxvb3AoIGtleSApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHN0YXRpYyB0cmVlcy5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU3RhdGljIChcbiAgaW5kZXgsXG4gIGlzSW5Gb3Jcbikge1xuICB2YXIgY2FjaGVkID0gdGhpcy5fc3RhdGljVHJlZXMgfHwgKHRoaXMuX3N0YXRpY1RyZWVzID0gW10pO1xuICB2YXIgdHJlZSA9IGNhY2hlZFtpbmRleF07XG4gIC8vIGlmIGhhcyBhbHJlYWR5LXJlbmRlcmVkIHN0YXRpYyB0cmVlIGFuZCBub3QgaW5zaWRlIHYtZm9yLFxuICAvLyB3ZSBjYW4gcmV1c2UgdGhlIHNhbWUgdHJlZS5cbiAgaWYgKHRyZWUgJiYgIWlzSW5Gb3IpIHtcbiAgICByZXR1cm4gdHJlZVxuICB9XG4gIC8vIG90aGVyd2lzZSwgcmVuZGVyIGEgZnJlc2ggdHJlZS5cbiAgdHJlZSA9IGNhY2hlZFtpbmRleF0gPSB0aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tpbmRleF0uY2FsbChcbiAgICB0aGlzLl9yZW5kZXJQcm94eSxcbiAgICBudWxsLFxuICAgIHRoaXMgLy8gZm9yIHJlbmRlciBmbnMgZ2VuZXJhdGVkIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCB0ZW1wbGF0ZXNcbiAgKTtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX3N0YXRpY19fXCIgKyBpbmRleCksIGZhbHNlKTtcbiAgcmV0dXJuIHRyZWVcbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3Igdi1vbmNlLlxuICogRWZmZWN0aXZlbHkgaXQgbWVhbnMgbWFya2luZyB0aGUgbm9kZSBhcyBzdGF0aWMgd2l0aCBhIHVuaXF1ZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIG1hcmtPbmNlIChcbiAgdHJlZSxcbiAgaW5kZXgsXG4gIGtleVxuKSB7XG4gIG1hcmtTdGF0aWModHJlZSwgKFwiX19vbmNlX19cIiArIGluZGV4ICsgKGtleSA/IChcIl9cIiArIGtleSkgOiBcIlwiKSksIHRydWUpO1xuICByZXR1cm4gdHJlZVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljIChcbiAgdHJlZSxcbiAga2V5LFxuICBpc09uY2Vcbikge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRyZWVbaV0gJiYgdHlwZW9mIHRyZWVbaV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1hcmtTdGF0aWNOb2RlKHRyZWVbaV0sIChrZXkgKyBcIl9cIiArIGkpLCBpc09uY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtYXJrU3RhdGljTm9kZSh0cmVlLCBrZXksIGlzT25jZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya1N0YXRpY05vZGUgKG5vZGUsIGtleSwgaXNPbmNlKSB7XG4gIG5vZGUuaXNTdGF0aWMgPSB0cnVlO1xuICBub2RlLmtleSA9IGtleTtcbiAgbm9kZS5pc09uY2UgPSBpc09uY2U7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kT2JqZWN0TGlzdGVuZXJzIChkYXRhLCB2YWx1ZSkge1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LW9uIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QgdmFsdWUnLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb24gPSBkYXRhLm9uID0gZGF0YS5vbiA/IGV4dGVuZCh7fSwgZGF0YS5vbikgOiB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSBvbltrZXldO1xuICAgICAgICB2YXIgb3VycyA9IHZhbHVlW2tleV07XG4gICAgICAgIG9uW2tleV0gPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgb3VycykgOiBvdXJzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVNjb3BlZFNsb3RzIChcbiAgZm5zLCAvLyBzZWUgZmxvdy92bm9kZVxuICByZXMsXG4gIC8vIHRoZSBmb2xsb3dpbmcgYXJlIGFkZGVkIGluIDIuNlxuICBoYXNEeW5hbWljS2V5cyxcbiAgY29udGVudEhhc2hLZXlcbikge1xuICByZXMgPSByZXMgfHwgeyAkc3RhYmxlOiAhaGFzRHluYW1pY0tleXMgfTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2xvdCA9IGZuc1tpXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzbG90KSkge1xuICAgICAgcmVzb2x2ZVNjb3BlZFNsb3RzKHNsb3QsIHJlcywgaGFzRHluYW1pY0tleXMpO1xuICAgIH0gZWxzZSBpZiAoc2xvdCkge1xuICAgICAgLy8gbWFya2VyIGZvciByZXZlcnNlIHByb3h5aW5nIHYtc2xvdCB3aXRob3V0IHNjb3BlIG9uIHRoaXMuJHNsb3RzXG4gICAgICBpZiAoc2xvdC5wcm94eSkge1xuICAgICAgICBzbG90LmZuLnByb3h5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJlc1tzbG90LmtleV0gPSBzbG90LmZuO1xuICAgIH1cbiAgfVxuICBpZiAoY29udGVudEhhc2hLZXkpIHtcbiAgICAocmVzKS4ka2V5ID0gY29udGVudEhhc2hLZXk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gYmluZER5bmFtaWNLZXlzIChiYXNlT2JqLCB2YWx1ZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICB2YXIga2V5ID0gdmFsdWVzW2ldO1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkpIHtcbiAgICAgIGJhc2VPYmpbdmFsdWVzW2ldXSA9IHZhbHVlc1tpICsgMV07XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGtleSAhPT0gJycgJiYga2V5ICE9PSBudWxsKSB7XG4gICAgICAvLyBudWxsIGlzIGEgc3BlY2lhbCB2YWx1ZSBmb3IgZXhwbGljaXRseSByZW1vdmluZyBhIGJpbmRpbmdcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkludmFsaWQgdmFsdWUgZm9yIGR5bmFtaWMgZGlyZWN0aXZlIGFyZ3VtZW50IChleHBlY3RlZCBzdHJpbmcgb3IgbnVsbCk6IFwiICsga2V5KSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJhc2VPYmpcbn1cblxuLy8gaGVscGVyIHRvIGR5bmFtaWNhbGx5IGFwcGVuZCBtb2RpZmllciBydW50aW1lIG1hcmtlcnMgdG8gZXZlbnQgbmFtZXMuXG4vLyBlbnN1cmUgb25seSBhcHBlbmQgd2hlbiB2YWx1ZSBpcyBhbHJlYWR5IHN0cmluZywgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgY2FzdFxuLy8gdG8gc3RyaW5nIGFuZCBjYXVzZSB0aGUgdHlwZSBjaGVjayB0byBtaXNzLlxuZnVuY3Rpb24gcHJlcGVuZE1vZGlmaWVyICh2YWx1ZSwgc3ltYm9sKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gc3ltYm9sICsgdmFsdWUgOiB2YWx1ZVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5zdGFsbFJlbmRlckhlbHBlcnMgKHRhcmdldCkge1xuICB0YXJnZXQuX28gPSBtYXJrT25jZTtcbiAgdGFyZ2V0Ll9uID0gdG9OdW1iZXI7XG4gIHRhcmdldC5fcyA9IHRvU3RyaW5nO1xuICB0YXJnZXQuX2wgPSByZW5kZXJMaXN0O1xuICB0YXJnZXQuX3QgPSByZW5kZXJTbG90O1xuICB0YXJnZXQuX3EgPSBsb29zZUVxdWFsO1xuICB0YXJnZXQuX2kgPSBsb29zZUluZGV4T2Y7XG4gIHRhcmdldC5fbSA9IHJlbmRlclN0YXRpYztcbiAgdGFyZ2V0Ll9mID0gcmVzb2x2ZUZpbHRlcjtcbiAgdGFyZ2V0Ll9rID0gY2hlY2tLZXlDb2RlcztcbiAgdGFyZ2V0Ll9iID0gYmluZE9iamVjdFByb3BzO1xuICB0YXJnZXQuX3YgPSBjcmVhdGVUZXh0Vk5vZGU7XG4gIHRhcmdldC5fZSA9IGNyZWF0ZUVtcHR5Vk5vZGU7XG4gIHRhcmdldC5fdSA9IHJlc29sdmVTY29wZWRTbG90cztcbiAgdGFyZ2V0Ll9nID0gYmluZE9iamVjdExpc3RlbmVycztcbiAgdGFyZ2V0Ll9kID0gYmluZER5bmFtaWNLZXlzO1xuICB0YXJnZXQuX3AgPSBwcmVwZW5kTW9kaWZpZXI7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCAoXG4gIGRhdGEsXG4gIHByb3BzLFxuICBjaGlsZHJlbixcbiAgcGFyZW50LFxuICBDdG9yXG4pIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIC8vIGVuc3VyZSB0aGUgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBpbiBmdW5jdGlvbmFsIGNvbXBvbmVudHNcbiAgLy8gZ2V0cyBhIHVuaXF1ZSBjb250ZXh0IC0gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIGNvcnJlY3QgbmFtZWQgc2xvdCBjaGVja1xuICB2YXIgY29udGV4dFZtO1xuICBpZiAoaGFzT3duKHBhcmVudCwgJ191aWQnKSkge1xuICAgIGNvbnRleHRWbSA9IE9iamVjdC5jcmVhdGUocGFyZW50KTtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBjb250ZXh0Vm0uX29yaWdpbmFsID0gcGFyZW50O1xuICB9IGVsc2Uge1xuICAgIC8vIHRoZSBjb250ZXh0IHZtIHBhc3NlZCBpbiBpcyBhIGZ1bmN0aW9uYWwgY29udGV4dCBhcyB3ZWxsLlxuICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBhcmUgYWJsZSB0byBnZXQgYSBob2xkIHRvIHRoZVxuICAgIC8vIHJlYWwgY29udGV4dCBpbnN0YW5jZS5cbiAgICBjb250ZXh0Vm0gPSBwYXJlbnQ7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgcGFyZW50ID0gcGFyZW50Ll9vcmlnaW5hbDtcbiAgfVxuICB2YXIgaXNDb21waWxlZCA9IGlzVHJ1ZShvcHRpb25zLl9jb21waWxlZCk7XG4gIHZhciBuZWVkTm9ybWFsaXphdGlvbiA9ICFpc0NvbXBpbGVkO1xuXG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5saXN0ZW5lcnMgPSBkYXRhLm9uIHx8IGVtcHR5T2JqZWN0O1xuICB0aGlzLmluamVjdGlvbnMgPSByZXNvbHZlSW5qZWN0KG9wdGlvbnMuaW5qZWN0LCBwYXJlbnQpO1xuICB0aGlzLnNsb3RzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcyQxLiRzbG90cykge1xuICAgICAgbm9ybWFsaXplU2NvcGVkU2xvdHMoXG4gICAgICAgIGRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHRoaXMkMS4kc2xvdHMgPSByZXNvbHZlU2xvdHMoY2hpbGRyZW4sIHBhcmVudClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzJDEuJHNsb3RzXG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzY29wZWRTbG90cycsICh7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplU2NvcGVkU2xvdHMoZGF0YS5zY29wZWRTbG90cywgdGhpcy5zbG90cygpKVxuICAgIH1cbiAgfSkpO1xuXG4gIC8vIHN1cHBvcnQgZm9yIGNvbXBpbGVkIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGlzQ29tcGlsZWQpIHtcbiAgICAvLyBleHBvc2luZyAkb3B0aW9ucyBmb3IgcmVuZGVyU3RhdGljKClcbiAgICB0aGlzLiRvcHRpb25zID0gb3B0aW9ucztcbiAgICAvLyBwcmUtcmVzb2x2ZSBzbG90cyBmb3IgcmVuZGVyU2xvdCgpXG4gICAgdGhpcy4kc2xvdHMgPSB0aGlzLnNsb3RzKCk7XG4gICAgdGhpcy4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLiRzbG90cyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5fc2NvcGVJZCkge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgICAgdmFyIHZub2RlID0gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTtcbiAgICAgIGlmICh2bm9kZSAmJiAhQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgdm5vZGUuZm5TY29wZUlkID0gb3B0aW9ucy5fc2NvcGVJZDtcbiAgICAgICAgdm5vZGUuZm5Db250ZXh0ID0gcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZub2RlXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29udGV4dFZtLCBhLCBiLCBjLCBkLCBuZWVkTm9ybWFsaXphdGlvbik7IH07XG4gIH1cbn1cblxuaW5zdGFsbFJlbmRlckhlbHBlcnMoRnVuY3Rpb25hbFJlbmRlckNvbnRleHQucHJvdG90eXBlKTtcblxuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudCAoXG4gIEN0b3IsXG4gIHByb3BzRGF0YSxcbiAgZGF0YSxcbiAgY29udGV4dFZtLFxuICBjaGlsZHJlblxuKSB7XG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIHByb3BPcHRpb25zID0gb3B0aW9ucy5wcm9wcztcbiAgaWYgKGlzRGVmKHByb3BPcHRpb25zKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEgfHwgZW1wdHlPYmplY3QpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNEZWYoZGF0YS5hdHRycykpIHsgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5hdHRycyk7IH1cbiAgICBpZiAoaXNEZWYoZGF0YS5wcm9wcykpIHsgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5wcm9wcyk7IH1cbiAgfVxuXG4gIHZhciByZW5kZXJDb250ZXh0ID0gbmV3IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0KFxuICAgIGRhdGEsXG4gICAgcHJvcHMsXG4gICAgY2hpbGRyZW4sXG4gICAgY29udGV4dFZtLFxuICAgIEN0b3JcbiAgKTtcblxuICB2YXIgdm5vZGUgPSBvcHRpb25zLnJlbmRlci5jYWxsKG51bGwsIHJlbmRlckNvbnRleHQuX2MsIHJlbmRlckNvbnRleHQpO1xuXG4gIGlmICh2bm9kZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuIGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGUsIGRhdGEsIHJlbmRlckNvbnRleHQucGFyZW50LCBvcHRpb25zLCByZW5kZXJDb250ZXh0KVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgdmFyIHZub2RlcyA9IG5vcm1hbGl6ZUNoaWxkcmVuKHZub2RlKSB8fCBbXTtcbiAgICB2YXIgcmVzID0gbmV3IEFycmF5KHZub2Rlcy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXNbaV0gPSBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0KHZub2Rlc1tpXSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCAodm5vZGUsIGRhdGEsIGNvbnRleHRWbSwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCkge1xuICAvLyAjNzgxNyBjbG9uZSBub2RlIGJlZm9yZSBzZXR0aW5nIGZuQ29udGV4dCwgb3RoZXJ3aXNlIGlmIHRoZSBub2RlIGlzIHJldXNlZFxuICAvLyAoZS5nLiBpdCB3YXMgZnJvbSBhIGNhY2hlZCBub3JtYWwgc2xvdCkgdGhlIGZuQ29udGV4dCBjYXVzZXMgbmFtZWQgc2xvdHNcbiAgLy8gdGhhdCBzaG91bGQgbm90IGJlIG1hdGNoZWQgdG8gbWF0Y2guXG4gIHZhciBjbG9uZSA9IGNsb25lVk5vZGUodm5vZGUpO1xuICBjbG9uZS5mbkNvbnRleHQgPSBjb250ZXh0Vm07XG4gIGNsb25lLmZuT3B0aW9ucyA9IG9wdGlvbnM7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgKGNsb25lLmRldnRvb2xzTWV0YSA9IGNsb25lLmRldnRvb2xzTWV0YSB8fCB7fSkucmVuZGVyQ29udGV4dCA9IHJlbmRlckNvbnRleHQ7XG4gIH1cbiAgaWYgKGRhdGEuc2xvdCkge1xuICAgIChjbG9uZS5kYXRhIHx8IChjbG9uZS5kYXRhID0ge30pKS5zbG90ID0gZGF0YS5zbG90O1xuICB9XG4gIHJldHVybiBjbG9uZVxufVxuXG5mdW5jdGlvbiBtZXJnZVByb3BzICh0bywgZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgIHRvW2NhbWVsaXplKGtleSldID0gZnJvbVtrZXldO1xuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8qICAqL1xuXG4vLyBpbmxpbmUgaG9va3MgdG8gYmUgaW52b2tlZCBvbiBjb21wb25lbnQgVk5vZGVzIGR1cmluZyBwYXRjaFxudmFyIGNvbXBvbmVudFZOb2RlSG9va3MgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQgKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICBpZiAoXG4gICAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSAmJlxuICAgICAgIXZub2RlLmNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCAmJlxuICAgICAgdm5vZGUuZGF0YS5rZWVwQWxpdmVcbiAgICApIHtcbiAgICAgIC8vIGtlcHQtYWxpdmUgY29tcG9uZW50cywgdHJlYXQgYXMgYSBwYXRjaFxuICAgICAgdmFyIG1vdW50ZWROb2RlID0gdm5vZGU7IC8vIHdvcmsgYXJvdW5kIGZsb3dcbiAgICAgIGNvbXBvbmVudFZOb2RlSG9va3MucHJlcGF0Y2gobW91bnRlZE5vZGUsIG1vdW50ZWROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUZvclZub2RlKFxuICAgICAgICB2bm9kZSxcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VcbiAgICAgICk7XG4gICAgICBjaGlsZC4kbW91bnQoaHlkcmF0aW5nID8gdm5vZGUuZWxtIDogdW5kZWZpbmVkLCBoeWRyYXRpbmcpO1xuICAgIH1cbiAgfSxcblxuICBwcmVwYXRjaDogZnVuY3Rpb24gcHJlcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIHZhciBvcHRpb25zID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IG9sZFZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIHVwZGF0ZUNoaWxkQ29tcG9uZW50KFxuICAgICAgY2hpbGQsXG4gICAgICBvcHRpb25zLnByb3BzRGF0YSwgLy8gdXBkYXRlZCBwcm9wc1xuICAgICAgb3B0aW9ucy5saXN0ZW5lcnMsIC8vIHVwZGF0ZWQgbGlzdGVuZXJzXG4gICAgICB2bm9kZSwgLy8gbmV3IHBhcmVudCB2bm9kZVxuICAgICAgb3B0aW9ucy5jaGlsZHJlbiAvLyBuZXcgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0ICh2bm9kZSkge1xuICAgIHZhciBjb250ZXh0ID0gdm5vZGUuY29udGV4dDtcbiAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQpIHtcbiAgICAgIGNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdtb3VudGVkJyk7XG4gICAgfVxuICAgIGlmICh2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgaWYgKGNvbnRleHQuX2lzTW91bnRlZCkge1xuICAgICAgICAvLyB2dWUtcm91dGVyIzEyMTJcbiAgICAgICAgLy8gRHVyaW5nIHVwZGF0ZXMsIGEga2VwdC1hbGl2ZSBjb21wb25lbnQncyBjaGlsZCBjb21wb25lbnRzIG1heVxuICAgICAgICAvLyBjaGFuZ2UsIHNvIGRpcmVjdGx5IHdhbGtpbmcgdGhlIHRyZWUgaGVyZSBtYXkgY2FsbCBhY3RpdmF0ZWQgaG9va3NcbiAgICAgICAgLy8gb24gaW5jb3JyZWN0IGNoaWxkcmVuLiBJbnN0ZWFkIHdlIHB1c2ggdGhlbSBpbnRvIGEgcXVldWUgd2hpY2ggd2lsbFxuICAgICAgICAvLyBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIHdob2xlIHBhdGNoIHByb2Nlc3MgZW5kZWQuXG4gICAgICAgIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSAodm5vZGUpIHtcbiAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgaWYgKCF2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgICBjb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgaG9va3NUb01lcmdlID0gT2JqZWN0LmtleXMoY29tcG9uZW50Vk5vZGVIb29rcyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAoXG4gIEN0b3IsXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICBpZiAoaXNVbmRlZihDdG9yKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJhc2VDdG9yID0gY29udGV4dC4kb3B0aW9ucy5fYmFzZTtcblxuICAvLyBwbGFpbiBvcHRpb25zIG9iamVjdDogdHVybiBpdCBpbnRvIGEgY29uc3RydWN0b3JcbiAgaWYgKGlzT2JqZWN0KEN0b3IpKSB7XG4gICAgQ3RvciA9IGJhc2VDdG9yLmV4dGVuZChDdG9yKTtcbiAgfVxuXG4gIC8vIGlmIGF0IHRoaXMgc3RhZ2UgaXQncyBub3QgYSBjb25zdHJ1Y3RvciBvciBhbiBhc3luYyBjb21wb25lbnQgZmFjdG9yeSxcbiAgLy8gcmVqZWN0LlxuICBpZiAodHlwZW9mIEN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybigoXCJJbnZhbGlkIENvbXBvbmVudCBkZWZpbml0aW9uOiBcIiArIChTdHJpbmcoQ3RvcikpKSwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gYXN5bmMgY29tcG9uZW50XG4gIHZhciBhc3luY0ZhY3Rvcnk7XG4gIGlmIChpc1VuZGVmKEN0b3IuY2lkKSkge1xuICAgIGFzeW5jRmFjdG9yeSA9IEN0b3I7XG4gICAgQ3RvciA9IHJlc29sdmVBc3luY0NvbXBvbmVudChhc3luY0ZhY3RvcnksIGJhc2VDdG9yKTtcbiAgICBpZiAoQ3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciBub2RlIGZvciBhc3luYyBjb21wb25lbnQsIHdoaWNoIGlzIHJlbmRlcmVkXG4gICAgICAvLyBhcyBhIGNvbW1lbnQgbm9kZSBidXQgcHJlc2VydmVzIGFsbCB0aGUgcmF3IGluZm9ybWF0aW9uIGZvciB0aGUgbm9kZS5cbiAgICAgIC8vIHRoZSBpbmZvcm1hdGlvbiB3aWxsIGJlIHVzZWQgZm9yIGFzeW5jIHNlcnZlci1yZW5kZXJpbmcgYW5kIGh5ZHJhdGlvbi5cbiAgICAgIHJldHVybiBjcmVhdGVBc3luY1BsYWNlaG9sZGVyKFxuICAgICAgICBhc3luY0ZhY3RvcnksXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB0YWdcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBkYXRhID0gZGF0YSB8fCB7fTtcblxuICAvLyByZXNvbHZlIGNvbnN0cnVjdG9yIG9wdGlvbnMgaW4gY2FzZSBnbG9iYWwgbWl4aW5zIGFyZSBhcHBsaWVkIGFmdGVyXG4gIC8vIGNvbXBvbmVudCBjb25zdHJ1Y3RvciBjcmVhdGlvblxuICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3IpO1xuXG4gIC8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBkYXRhIGludG8gcHJvcHMgJiBldmVudHNcbiAgaWYgKGlzRGVmKGRhdGEubW9kZWwpKSB7XG4gICAgdHJhbnNmb3JtTW9kZWwoQ3Rvci5vcHRpb25zLCBkYXRhKTtcbiAgfVxuXG4gIC8vIGV4dHJhY3QgcHJvcHNcbiAgdmFyIHByb3BzRGF0YSA9IGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgdGFnKTtcblxuICAvLyBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5mdW5jdGlvbmFsKSkge1xuICAgIHJldHVybiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50KEN0b3IsIHByb3BzRGF0YSwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pXG4gIH1cblxuICAvLyBleHRyYWN0IGxpc3RlbmVycywgc2luY2UgdGhlc2UgbmVlZHMgdG8gYmUgdHJlYXRlZCBhc1xuICAvLyBjaGlsZCBjb21wb25lbnQgbGlzdGVuZXJzIGluc3RlYWQgb2YgRE9NIGxpc3RlbmVyc1xuICB2YXIgbGlzdGVuZXJzID0gZGF0YS5vbjtcbiAgLy8gcmVwbGFjZSB3aXRoIGxpc3RlbmVycyB3aXRoIC5uYXRpdmUgbW9kaWZpZXJcbiAgLy8gc28gaXQgZ2V0cyBwcm9jZXNzZWQgZHVyaW5nIHBhcmVudCBjb21wb25lbnQgcGF0Y2guXG4gIGRhdGEub24gPSBkYXRhLm5hdGl2ZU9uO1xuXG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmFic3RyYWN0KSkge1xuICAgIC8vIGFic3RyYWN0IGNvbXBvbmVudHMgZG8gbm90IGtlZXAgYW55dGhpbmdcbiAgICAvLyBvdGhlciB0aGFuIHByb3BzICYgbGlzdGVuZXJzICYgc2xvdFxuXG4gICAgLy8gd29yayBhcm91bmQgZmxvd1xuICAgIHZhciBzbG90ID0gZGF0YS5zbG90O1xuICAgIGRhdGEgPSB7fTtcbiAgICBpZiAoc2xvdCkge1xuICAgICAgZGF0YS5zbG90ID0gc2xvdDtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YWxsIGNvbXBvbmVudCBtYW5hZ2VtZW50IGhvb2tzIG9udG8gdGhlIHBsYWNlaG9sZGVyIG5vZGVcbiAgaW5zdGFsbENvbXBvbmVudEhvb2tzKGRhdGEpO1xuXG4gIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIHZub2RlXG4gIHZhciBuYW1lID0gQ3Rvci5vcHRpb25zLm5hbWUgfHwgdGFnO1xuICB2YXIgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgKFwidnVlLWNvbXBvbmVudC1cIiArIChDdG9yLmNpZCkgKyAobmFtZSA/IChcIi1cIiArIG5hbWUpIDogJycpKSxcbiAgICBkYXRhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0LFxuICAgIHsgQ3RvcjogQ3RvciwgcHJvcHNEYXRhOiBwcm9wc0RhdGEsIGxpc3RlbmVyczogbGlzdGVuZXJzLCB0YWc6IHRhZywgY2hpbGRyZW46IGNoaWxkcmVuIH0sXG4gICAgYXN5bmNGYWN0b3J5XG4gICk7XG5cbiAgcmV0dXJuIHZub2RlXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUgKFxuICAvLyB3ZSBrbm93IGl0J3MgTW91bnRlZENvbXBvbmVudFZOb2RlIGJ1dCBmbG93IGRvZXNuJ3RcbiAgdm5vZGUsXG4gIC8vIGFjdGl2ZUluc3RhbmNlIGluIGxpZmVjeWNsZSBzdGF0ZVxuICBwYXJlbnRcbikge1xuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBfaXNDb21wb25lbnQ6IHRydWUsXG4gICAgX3BhcmVudFZub2RlOiB2bm9kZSxcbiAgICBwYXJlbnQ6IHBhcmVudFxuICB9O1xuICAvLyBjaGVjayBpbmxpbmUtdGVtcGxhdGUgcmVuZGVyIGZ1bmN0aW9uc1xuICB2YXIgaW5saW5lVGVtcGxhdGUgPSB2bm9kZS5kYXRhLmlubGluZVRlbXBsYXRlO1xuICBpZiAoaXNEZWYoaW5saW5lVGVtcGxhdGUpKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBpbmxpbmVUZW1wbGF0ZS5yZW5kZXI7XG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBpbmxpbmVUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gIH1cbiAgcmV0dXJuIG5ldyB2bm9kZS5jb21wb25lbnRPcHRpb25zLkN0b3Iob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gaW5zdGFsbENvbXBvbmVudEhvb2tzIChkYXRhKSB7XG4gIHZhciBob29rcyA9IGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzVG9NZXJnZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBob29rc1RvTWVyZ2VbaV07XG4gICAgdmFyIGV4aXN0aW5nID0gaG9va3Nba2V5XTtcbiAgICB2YXIgdG9NZXJnZSA9IGNvbXBvbmVudFZOb2RlSG9va3Nba2V5XTtcbiAgICBpZiAoZXhpc3RpbmcgIT09IHRvTWVyZ2UgJiYgIShleGlzdGluZyAmJiBleGlzdGluZy5fbWVyZ2VkKSkge1xuICAgICAgaG9va3Nba2V5XSA9IGV4aXN0aW5nID8gbWVyZ2VIb29rJDEodG9NZXJnZSwgZXhpc3RpbmcpIDogdG9NZXJnZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VIb29rJDEgKGYxLCBmMikge1xuICB2YXIgbWVyZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAvLyBmbG93IGNvbXBsYWlucyBhYm91dCBleHRyYSBhcmdzIHdoaWNoIGlzIHdoeSB3ZSB1c2UgYW55XG4gICAgZjEoYSwgYik7XG4gICAgZjIoYSwgYik7XG4gIH07XG4gIG1lcmdlZC5fbWVyZ2VkID0gdHJ1ZTtcbiAgcmV0dXJuIG1lcmdlZFxufVxuXG4vLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgaW5mbyAodmFsdWUgYW5kIGNhbGxiYWNrKSBpbnRvXG4vLyBwcm9wIGFuZCBldmVudCBoYW5kbGVyIHJlc3BlY3RpdmVseS5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1vZGVsIChvcHRpb25zLCBkYXRhKSB7XG4gIHZhciBwcm9wID0gKG9wdGlvbnMubW9kZWwgJiYgb3B0aW9ucy5tb2RlbC5wcm9wKSB8fCAndmFsdWUnO1xuICB2YXIgZXZlbnQgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLmV2ZW50KSB8fCAnaW5wdXQnXG4gIDsoZGF0YS5hdHRycyB8fCAoZGF0YS5hdHRycyA9IHt9KSlbcHJvcF0gPSBkYXRhLm1vZGVsLnZhbHVlO1xuICB2YXIgb24gPSBkYXRhLm9uIHx8IChkYXRhLm9uID0ge30pO1xuICB2YXIgZXhpc3RpbmcgPSBvbltldmVudF07XG4gIHZhciBjYWxsYmFjayA9IGRhdGEubW9kZWwuY2FsbGJhY2s7XG4gIGlmIChpc0RlZihleGlzdGluZykpIHtcbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KGV4aXN0aW5nKVxuICAgICAgICA/IGV4aXN0aW5nLmluZGV4T2YoY2FsbGJhY2spID09PSAtMVxuICAgICAgICA6IGV4aXN0aW5nICE9PSBjYWxsYmFja1xuICAgICkge1xuICAgICAgb25bZXZlbnRdID0gW2NhbGxiYWNrXS5jb25jYXQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvbltldmVudF0gPSBjYWxsYmFjaztcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIFNJTVBMRV9OT1JNQUxJWkUgPSAxO1xudmFyIEFMV0FZU19OT1JNQUxJWkUgPSAyO1xuXG4vLyB3cmFwcGVyIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYSBtb3JlIGZsZXhpYmxlIGludGVyZmFjZVxuLy8gd2l0aG91dCBnZXR0aW5nIHllbGxlZCBhdCBieSBmbG93XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGUsXG4gIGFsd2F5c05vcm1hbGl6ZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IGlzUHJpbWl0aXZlKGRhdGEpKSB7XG4gICAgbm9ybWFsaXphdGlvblR5cGUgPSBjaGlsZHJlbjtcbiAgICBjaGlsZHJlbiA9IGRhdGE7XG4gICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoaXNUcnVlKGFsd2F5c05vcm1hbGl6ZSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IEFMV0FZU19OT1JNQUxJWkU7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVFbGVtZW50KGNvbnRleHQsIHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlKVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlRWxlbWVudCAoXG4gIGNvbnRleHQsXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIG5vcm1hbGl6YXRpb25UeXBlXG4pIHtcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKChkYXRhKS5fX29iX18pKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgXCJBdm9pZCB1c2luZyBvYnNlcnZlZCBkYXRhIG9iamVjdCBhcyB2bm9kZSBkYXRhOiBcIiArIChKU09OLnN0cmluZ2lmeShkYXRhKSkgKyBcIlxcblwiICtcbiAgICAgICdBbHdheXMgY3JlYXRlIGZyZXNoIHZub2RlIGRhdGEgb2JqZWN0cyBpbiBlYWNoIHJlbmRlciEnLFxuICAgICAgY29udGV4dFxuICAgICk7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG4gIC8vIG9iamVjdCBzeW50YXggaW4gdi1iaW5kXG4gIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLmlzKSkge1xuICAgIHRhZyA9IGRhdGEuaXM7XG4gIH1cbiAgaWYgKCF0YWcpIHtcbiAgICAvLyBpbiBjYXNlIG9mIGNvbXBvbmVudCA6aXMgc2V0IHRvIGZhbHN5IHZhbHVlXG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tcHJpbWl0aXZlIGtleVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEua2V5KSAmJiAhaXNQcmltaXRpdmUoZGF0YS5rZXkpXG4gICkge1xuICAgIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCB1c2luZyBub24tcHJpbWl0aXZlIHZhbHVlIGFzIGtleSwgJyArXG4gICAgICAgICd1c2Ugc3RyaW5nL251bWJlciB2YWx1ZSBpbnN0ZWFkLicsXG4gICAgICAgIGNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8vIHN1cHBvcnQgc2luZ2xlIGZ1bmN0aW9uIGNoaWxkcmVuIGFzIGRlZmF1bHQgc2NvcGVkIHNsb3RcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmXG4gICAgdHlwZW9mIGNoaWxkcmVuWzBdID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuICAgIGRhdGEuc2NvcGVkU2xvdHMgPSB7IGRlZmF1bHQ6IGNoaWxkcmVuWzBdIH07XG4gICAgY2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgfVxuICBpZiAobm9ybWFsaXphdGlvblR5cGUgPT09IEFMV0FZU19OT1JNQUxJWkUpIHtcbiAgICBjaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgfSBlbHNlIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gU0lNUExFX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gc2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9XG4gIHZhciB2bm9kZSwgbnM7XG4gIGlmICh0eXBlb2YgdGFnID09PSAnc3RyaW5nJykge1xuICAgIHZhciBDdG9yO1xuICAgIG5zID0gKGNvbnRleHQuJHZub2RlICYmIGNvbnRleHQuJHZub2RlLm5zKSB8fCBjb25maWcuZ2V0VGFnTmFtZXNwYWNlKHRhZyk7XG4gICAgaWYgKGNvbmZpZy5pc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgIC8vIHBsYXRmb3JtIGJ1aWx0LWluIGVsZW1lbnRzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLm5hdGl2ZU9uKSAmJiBkYXRhLnRhZyAhPT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJUaGUgLm5hdGl2ZSBtb2RpZmllciBmb3Igdi1vbiBpcyBvbmx5IHZhbGlkIG9uIGNvbXBvbmVudHMgYnV0IGl0IHdhcyB1c2VkIG9uIDxcIiArIHRhZyArIFwiPi5cIiksXG4gICAgICAgICAgY29udGV4dFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIGNvbmZpZy5wYXJzZVBsYXRmb3JtVGFnTmFtZSh0YWcpLCBkYXRhLCBjaGlsZHJlbixcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHRcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICgoIWRhdGEgfHwgIWRhdGEucHJlKSAmJiBpc0RlZihDdG9yID0gcmVzb2x2ZUFzc2V0KGNvbnRleHQuJG9wdGlvbnMsICdjb21wb25lbnRzJywgdGFnKSkpIHtcbiAgICAgIC8vIGNvbXBvbmVudFxuICAgICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQoQ3RvciwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4sIHRhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVua25vd24gb3IgdW5saXN0ZWQgbmFtZXNwYWNlZCBlbGVtZW50c1xuICAgICAgLy8gY2hlY2sgYXQgcnVudGltZSBiZWNhdXNlIGl0IG1heSBnZXQgYXNzaWduZWQgYSBuYW1lc3BhY2Ugd2hlbiBpdHNcbiAgICAgIC8vIHBhcmVudCBub3JtYWxpemVzIGNoaWxkcmVuXG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgICAgdGFnLCBkYXRhLCBjaGlsZHJlbixcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGRpcmVjdCBjb21wb25lbnQgb3B0aW9ucyAvIGNvbnN0cnVjdG9yXG4gICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQodGFnLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbik7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSBpZiAoaXNEZWYodm5vZGUpKSB7XG4gICAgaWYgKGlzRGVmKG5zKSkgeyBhcHBseU5TKHZub2RlLCBucyk7IH1cbiAgICBpZiAoaXNEZWYoZGF0YSkpIHsgcmVnaXN0ZXJEZWVwQmluZGluZ3MoZGF0YSk7IH1cbiAgICByZXR1cm4gdm5vZGVcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlOUyAodm5vZGUsIG5zLCBmb3JjZSkge1xuICB2bm9kZS5ucyA9IG5zO1xuICBpZiAodm5vZGUudGFnID09PSAnZm9yZWlnbk9iamVjdCcpIHtcbiAgICAvLyB1c2UgZGVmYXVsdCBuYW1lc3BhY2UgaW5zaWRlIGZvcmVpZ25PYmplY3RcbiAgICBucyA9IHVuZGVmaW5lZDtcbiAgICBmb3JjZSA9IHRydWU7XG4gIH1cbiAgaWYgKGlzRGVmKHZub2RlLmNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChpc0RlZihjaGlsZC50YWcpICYmIChcbiAgICAgICAgaXNVbmRlZihjaGlsZC5ucykgfHwgKGlzVHJ1ZShmb3JjZSkgJiYgY2hpbGQudGFnICE9PSAnc3ZnJykpKSB7XG4gICAgICAgIGFwcGx5TlMoY2hpbGQsIG5zLCBmb3JjZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIHJlZiAjNTMxOFxuLy8gbmVjZXNzYXJ5IHRvIGVuc3VyZSBwYXJlbnQgcmUtcmVuZGVyIHdoZW4gZGVlcCBiaW5kaW5ncyBsaWtlIDpzdHlsZSBhbmRcbi8vIDpjbGFzcyBhcmUgdXNlZCBvbiBzbG90IG5vZGVzXG5mdW5jdGlvbiByZWdpc3RlckRlZXBCaW5kaW5ncyAoZGF0YSkge1xuICBpZiAoaXNPYmplY3QoZGF0YS5zdHlsZSkpIHtcbiAgICB0cmF2ZXJzZShkYXRhLnN0eWxlKTtcbiAgfVxuICBpZiAoaXNPYmplY3QoZGF0YS5jbGFzcykpIHtcbiAgICB0cmF2ZXJzZShkYXRhLmNsYXNzKTtcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFJlbmRlciAodm0pIHtcbiAgdm0uX3Zub2RlID0gbnVsbDsgLy8gdGhlIHJvb3Qgb2YgdGhlIGNoaWxkIHRyZWVcbiAgdm0uX3N0YXRpY1RyZWVzID0gbnVsbDsgLy8gdi1vbmNlIGNhY2hlZCB0cmVlc1xuICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICB2YXIgcGFyZW50Vm5vZGUgPSB2bS4kdm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTsgLy8gdGhlIHBsYWNlaG9sZGVyIG5vZGUgaW4gcGFyZW50IHRyZWVcbiAgdmFyIHJlbmRlckNvbnRleHQgPSBwYXJlbnRWbm9kZSAmJiBwYXJlbnRWbm9kZS5jb250ZXh0O1xuICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMob3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4sIHJlbmRlckNvbnRleHQpO1xuICB2bS4kc2NvcGVkU2xvdHMgPSBlbXB0eU9iamVjdDtcbiAgLy8gYmluZCB0aGUgY3JlYXRlRWxlbWVudCBmbiB0byB0aGlzIGluc3RhbmNlXG4gIC8vIHNvIHRoYXQgd2UgZ2V0IHByb3BlciByZW5kZXIgY29udGV4dCBpbnNpZGUgaXQuXG4gIC8vIGFyZ3Mgb3JkZXI6IHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlLCBhbHdheXNOb3JtYWxpemVcbiAgLy8gaW50ZXJuYWwgdmVyc2lvbiBpcyB1c2VkIGJ5IHJlbmRlciBmdW5jdGlvbnMgY29tcGlsZWQgZnJvbSB0ZW1wbGF0ZXNcbiAgdm0uX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgZmFsc2UpOyB9O1xuICAvLyBub3JtYWxpemF0aW9uIGlzIGFsd2F5cyBhcHBsaWVkIGZvciB0aGUgcHVibGljIHZlcnNpb24sIHVzZWQgaW5cbiAgLy8gdXNlci13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMuXG4gIHZtLiRjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIHRydWUpOyB9O1xuXG4gIC8vICRhdHRycyAmICRsaXN0ZW5lcnMgYXJlIGV4cG9zZWQgZm9yIGVhc2llciBIT0MgY3JlYXRpb24uXG4gIC8vIHRoZXkgbmVlZCB0byBiZSByZWFjdGl2ZSBzbyB0aGF0IEhPQ3MgdXNpbmcgdGhlbSBhcmUgYWx3YXlzIHVwZGF0ZWRcbiAgdmFyIHBhcmVudERhdGEgPSBwYXJlbnRWbm9kZSAmJiBwYXJlbnRWbm9kZS5kYXRhO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRhdHRycyBpcyByZWFkb25seS5cIiwgdm0pO1xuICAgIH0sIHRydWUpO1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGxpc3RlbmVycyBpcyByZWFkb25seS5cIiwgdm0pO1xuICAgIH0sIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIG51bGwsIHRydWUpO1xuICB9XG59XG5cbnZhciBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSBudWxsO1xuXG5mdW5jdGlvbiByZW5kZXJNaXhpbiAoVnVlKSB7XG4gIC8vIGluc3RhbGwgcnVudGltZSBjb252ZW5pZW5jZSBoZWxwZXJzXG4gIGluc3RhbGxSZW5kZXJIZWxwZXJzKFZ1ZS5wcm90b3R5cGUpO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIG5leHRUaWNrKGZuLCB0aGlzKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciByZWYgPSB2bS4kb3B0aW9ucztcbiAgICB2YXIgcmVuZGVyID0gcmVmLnJlbmRlcjtcbiAgICB2YXIgX3BhcmVudFZub2RlID0gcmVmLl9wYXJlbnRWbm9kZTtcblxuICAgIGlmIChfcGFyZW50Vm5vZGUpIHtcbiAgICAgIHZtLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKFxuICAgICAgICBfcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdm0uJHNsb3RzLFxuICAgICAgICB2bS4kc2NvcGVkU2xvdHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHBhcmVudCB2bm9kZS4gdGhpcyBhbGxvd3MgcmVuZGVyIGZ1bmN0aW9ucyB0byBoYXZlIGFjY2Vzc1xuICAgIC8vIHRvIHRoZSBkYXRhIG9uIHRoZSBwbGFjZWhvbGRlciBub2RlLlxuICAgIHZtLiR2bm9kZSA9IF9wYXJlbnRWbm9kZTtcbiAgICAvLyByZW5kZXIgc2VsZlxuICAgIHZhciB2bm9kZTtcbiAgICB0cnkge1xuICAgICAgLy8gVGhlcmUncyBubyBuZWVkIHRvIG1haW50YWluIGEgc3RhY2sgYmVjYXVzZSBhbGwgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyBzZXBhcmF0ZWx5IGZyb20gb25lIGFub3RoZXIuIE5lc3RlZCBjb21wb25lbnQncyByZW5kZXIgZm5zIGFyZSBjYWxsZWRcbiAgICAgIC8vIHdoZW4gcGFyZW50IGNvbXBvbmVudCBpcyBwYXRjaGVkLlxuICAgICAgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gdm07XG4gICAgICB2bm9kZSA9IHJlbmRlci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlclwiKTtcbiAgICAgIC8vIHJldHVybiBlcnJvciByZW5kZXIgcmVzdWx0LFxuICAgICAgLy8gb3IgcHJldmlvdXMgdm5vZGUgdG8gcHJldmVudCByZW5kZXIgZXJyb3IgY2F1c2luZyBibGFuayBjb21wb25lbnRcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB2bS4kb3B0aW9ucy5yZW5kZXJFcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZub2RlID0gdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50LCBlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlckVycm9yXCIpO1xuICAgICAgICAgIHZub2RlID0gdm0uX3Zub2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gICAgLy8gaWYgdGhlIHJldHVybmVkIGFycmF5IGNvbnRhaW5zIG9ubHkgYSBzaW5nbGUgbm9kZSwgYWxsb3cgaXRcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkgJiYgdm5vZGUubGVuZ3RoID09PSAxKSB7XG4gICAgICB2bm9kZSA9IHZub2RlWzBdO1xuICAgIH1cbiAgICAvLyByZXR1cm4gZW1wdHkgdm5vZGUgaW4gY2FzZSB0aGUgcmVuZGVyIGZ1bmN0aW9uIGVycm9yZWQgb3V0XG4gICAgaWYgKCEodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ011bHRpcGxlIHJvb3Qgbm9kZXMgcmV0dXJuZWQgZnJvbSByZW5kZXIgZnVuY3Rpb24uIFJlbmRlciBmdW5jdGlvbiAnICtcbiAgICAgICAgICAnc2hvdWxkIHJldHVybiBhIHNpbmdsZSByb290IG5vZGUuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdm5vZGUgPSBjcmVhdGVFbXB0eVZOb2RlKCk7XG4gICAgfVxuICAgIC8vIHNldCBwYXJlbnRcbiAgICB2bm9kZS5wYXJlbnQgPSBfcGFyZW50Vm5vZGU7XG4gICAgcmV0dXJuIHZub2RlXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBlbnN1cmVDdG9yIChjb21wLCBiYXNlKSB7XG4gIGlmIChcbiAgICBjb21wLl9fZXNNb2R1bGUgfHxcbiAgICAoaGFzU3ltYm9sICYmIGNvbXBbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ01vZHVsZScpXG4gICkge1xuICAgIGNvbXAgPSBjb21wLmRlZmF1bHQ7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0KGNvbXApXG4gICAgPyBiYXNlLmV4dGVuZChjb21wKVxuICAgIDogY29tcFxufVxuXG5mdW5jdGlvbiBjcmVhdGVBc3luY1BsYWNlaG9sZGVyIChcbiAgZmFjdG9yeSxcbiAgZGF0YSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHRhZ1xuKSB7XG4gIHZhciBub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICBub2RlLmFzeW5jRmFjdG9yeSA9IGZhY3Rvcnk7XG4gIG5vZGUuYXN5bmNNZXRhID0geyBkYXRhOiBkYXRhLCBjb250ZXh0OiBjb250ZXh0LCBjaGlsZHJlbjogY2hpbGRyZW4sIHRhZzogdGFnIH07XG4gIHJldHVybiBub2RlXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVBc3luY0NvbXBvbmVudCAoXG4gIGZhY3RvcnksXG4gIGJhc2VDdG9yXG4pIHtcbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmVycm9yKSAmJiBpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5lcnJvckNvbXBcbiAgfVxuXG4gIGlmIChpc0RlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgIHJldHVybiBmYWN0b3J5LnJlc29sdmVkXG4gIH1cblxuICB2YXIgb3duZXIgPSBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2U7XG4gIGlmIChvd25lciAmJiBpc0RlZihmYWN0b3J5Lm93bmVycykgJiYgZmFjdG9yeS5vd25lcnMuaW5kZXhPZihvd25lcikgPT09IC0xKSB7XG4gICAgLy8gYWxyZWFkeSBwZW5kaW5nXG4gICAgZmFjdG9yeS5vd25lcnMucHVzaChvd25lcik7XG4gIH1cblxuICBpZiAoaXNUcnVlKGZhY3RvcnkubG9hZGluZykgJiYgaXNEZWYoZmFjdG9yeS5sb2FkaW5nQ29tcCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nQ29tcFxuICB9XG5cbiAgaWYgKG93bmVyICYmICFpc0RlZihmYWN0b3J5Lm93bmVycykpIHtcbiAgICB2YXIgb3duZXJzID0gZmFjdG9yeS5vd25lcnMgPSBbb3duZXJdO1xuICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICB2YXIgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICB2YXIgdGltZXJUaW1lb3V0ID0gbnVsbFxuXG4gICAgOyhvd25lcikuJG9uKCdob29rOmRlc3Ryb3llZCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlbW92ZShvd25lcnMsIG93bmVyKTsgfSk7XG5cbiAgICB2YXIgZm9yY2VSZW5kZXIgPSBmdW5jdGlvbiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG93bmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgKG93bmVyc1tpXSkuJGZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW5kZXJDb21wbGV0ZWQpIHtcbiAgICAgICAgb3duZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIGlmICh0aW1lckxvYWRpbmcgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJMb2FkaW5nKTtcbiAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lclRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJUaW1lb3V0KTtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXNvbHZlID0gb25jZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAvLyBjYWNoZSByZXNvbHZlZFxuICAgICAgZmFjdG9yeS5yZXNvbHZlZCA9IGVuc3VyZUN0b3IocmVzLCBiYXNlQ3Rvcik7XG4gICAgICAvLyBpbnZva2UgY2FsbGJhY2tzIG9ubHkgaWYgdGhpcyBpcyBub3QgYSBzeW5jaHJvbm91cyByZXNvbHZlXG4gICAgICAvLyAoYXN5bmMgcmVzb2x2ZXMgYXJlIHNoaW1tZWQgYXMgc3luY2hyb25vdXMgZHVyaW5nIFNTUilcbiAgICAgIGlmICghc3luYykge1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHJlamVjdCA9IG9uY2UoZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudDogXCIgKyAoU3RyaW5nKGZhY3RvcnkpKSArXG4gICAgICAgIChyZWFzb24gPyAoXCJcXG5SZWFzb246IFwiICsgcmVhc29uKSA6ICcnKVxuICAgICAgKTtcbiAgICAgIGlmIChpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICAgICAgZmFjdG9yeS5lcnJvciA9IHRydWU7XG4gICAgICAgIGZvcmNlUmVuZGVyKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHJlcyA9IGZhY3RvcnkocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgIGlmIChpc09iamVjdChyZXMpKSB7XG4gICAgICBpZiAoaXNQcm9taXNlKHJlcykpIHtcbiAgICAgICAgLy8gKCkgPT4gUHJvbWlzZVxuICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlKHJlcy5jb21wb25lbnQpKSB7XG4gICAgICAgIHJlcy5jb21wb25lbnQudGhlbihyZXNvbHZlLCByZWplY3QpO1xuXG4gICAgICAgIGlmIChpc0RlZihyZXMuZXJyb3IpKSB7XG4gICAgICAgICAgZmFjdG9yeS5lcnJvckNvbXAgPSBlbnN1cmVDdG9yKHJlcy5lcnJvciwgYmFzZUN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy5sb2FkaW5nKSkge1xuICAgICAgICAgIGZhY3RvcnkubG9hZGluZ0NvbXAgPSBlbnN1cmVDdG9yKHJlcy5sb2FkaW5nLCBiYXNlQ3Rvcik7XG4gICAgICAgICAgaWYgKHJlcy5kZWxheSA9PT0gMCkge1xuICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZXJMb2FkaW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpICYmIGlzVW5kZWYoZmFjdG9yeS5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVzLmRlbGF5IHx8IDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy50aW1lb3V0KSkge1xuICAgICAgICAgIHRpbWVyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgICAgICAgICAgIHJlamVjdChcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgICAgICAgICAgICAgICA/IChcInRpbWVvdXQgKFwiICsgKHJlcy50aW1lb3V0KSArIFwibXMpXCIpXG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCByZXMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzeW5jID0gZmFsc2U7XG4gICAgLy8gcmV0dXJuIGluIGNhc2UgcmVzb2x2ZWQgc3luY2hyb25vdXNseVxuICAgIHJldHVybiBmYWN0b3J5LmxvYWRpbmdcbiAgICAgID8gZmFjdG9yeS5sb2FkaW5nQ29tcFxuICAgICAgOiBmYWN0b3J5LnJlc29sdmVkXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGdldEZpcnN0Q29tcG9uZW50Q2hpbGQgKGNoaWxkcmVuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoYykgJiYgKGlzRGVmKGMuY29tcG9uZW50T3B0aW9ucykgfHwgaXNBc3luY1BsYWNlaG9sZGVyKGMpKSkge1xuICAgICAgICByZXR1cm4gY1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRFdmVudHMgKHZtKSB7XG4gIHZtLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2bS5faGFzSG9va0V2ZW50ID0gZmFsc2U7XG4gIC8vIGluaXQgcGFyZW50IGF0dGFjaGVkIGV2ZW50c1xuICB2YXIgbGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgaWYgKGxpc3RlbmVycykge1xuICAgIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyh2bSwgbGlzdGVuZXJzKTtcbiAgfVxufVxuXG52YXIgdGFyZ2V0O1xuXG5mdW5jdGlvbiBhZGQgKGV2ZW50LCBmbikge1xuICB0YXJnZXQuJG9uKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSQxIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvZmYoZXZlbnQsIGZuKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT25jZUhhbmRsZXIgKGV2ZW50LCBmbikge1xuICB2YXIgX3RhcmdldCA9IHRhcmdldDtcbiAgcmV0dXJuIGZ1bmN0aW9uIG9uY2VIYW5kbGVyICgpIHtcbiAgICB2YXIgcmVzID0gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICBfdGFyZ2V0LiRvZmYoZXZlbnQsIG9uY2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzIChcbiAgdm0sXG4gIGxpc3RlbmVycyxcbiAgb2xkTGlzdGVuZXJzXG4pIHtcbiAgdGFyZ2V0ID0gdm07XG4gIHVwZGF0ZUxpc3RlbmVycyhsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyB8fCB7fSwgYWRkLCByZW1vdmUkMSwgY3JlYXRlT25jZUhhbmRsZXIsIHZtKTtcbiAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBldmVudHNNaXhpbiAoVnVlKSB7XG4gIHZhciBob29rUkUgPSAvXmhvb2s6LztcbiAgVnVlLnByb3RvdHlwZS4kb24gPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZtLiRvbihldmVudFtpXSwgZm4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAodm0uX2V2ZW50c1tldmVudF0gfHwgKHZtLl9ldmVudHNbZXZlbnRdID0gW10pKS5wdXNoKGZuKTtcbiAgICAgIC8vIG9wdGltaXplIGhvb2s6ZXZlbnQgY29zdCBieSB1c2luZyBhIGJvb2xlYW4gZmxhZyBtYXJrZWQgYXQgcmVnaXN0cmF0aW9uXG4gICAgICAvLyBpbnN0ZWFkIG9mIGEgaGFzaCBsb29rdXBcbiAgICAgIGlmIChob29rUkUudGVzdChldmVudCkpIHtcbiAgICAgICAgdm0uX2hhc0hvb2tFdmVudCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9uY2UgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBmdW5jdGlvbiBvbiAoKSB7XG4gICAgICB2bS4kb2ZmKGV2ZW50LCBvbik7XG4gICAgICBmbi5hcHBseSh2bSwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgb24uZm4gPSBmbjtcbiAgICB2bS4kb24oZXZlbnQsIG9uKTtcbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyBhbGxcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHZtLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIGFycmF5IG9mIGV2ZW50c1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgZm9yICh2YXIgaSQxID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSQxIDwgbDsgaSQxKyspIHtcbiAgICAgICAgdm0uJG9mZihldmVudFtpJDFdLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFjYnMpIHtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICBpZiAoIWZuKSB7XG4gICAgICB2bS5fZXZlbnRzW2V2ZW50XSA9IG51bGw7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gc3BlY2lmaWMgaGFuZGxlclxuICAgIHZhciBjYjtcbiAgICB2YXIgaSA9IGNicy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY2IgPSBjYnNbaV07XG4gICAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgICBjYnMuc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRlbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGxvd2VyQ2FzZUV2ZW50ID0gZXZlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChsb3dlckNhc2VFdmVudCAhPT0gZXZlbnQgJiYgdm0uX2V2ZW50c1tsb3dlckNhc2VFdmVudF0pIHtcbiAgICAgICAgdGlwKFxuICAgICAgICAgIFwiRXZlbnQgXFxcIlwiICsgbG93ZXJDYXNlRXZlbnQgKyBcIlxcXCIgaXMgZW1pdHRlZCBpbiBjb21wb25lbnQgXCIgK1xuICAgICAgICAgIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIiBidXQgdGhlIGhhbmRsZXIgaXMgcmVnaXN0ZXJlZCBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuIFwiICtcbiAgICAgICAgICBcIk5vdGUgdGhhdCBIVE1MIGF0dHJpYnV0ZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUgYW5kIHlvdSBjYW5ub3QgdXNlIFwiICtcbiAgICAgICAgICBcInYtb24gdG8gbGlzdGVuIHRvIGNhbWVsQ2FzZSBldmVudHMgd2hlbiB1c2luZyBpbi1ET00gdGVtcGxhdGVzLiBcIiArXG4gICAgICAgICAgXCJZb3Ugc2hvdWxkIHByb2JhYmx5IHVzZSBcXFwiXCIgKyAoaHlwaGVuYXRlKGV2ZW50KSkgKyBcIlxcXCIgaW5zdGVhZCBvZiBcXFwiXCIgKyBldmVudCArIFwiXFxcIi5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgaWYgKGNicykge1xuICAgICAgY2JzID0gY2JzLmxlbmd0aCA+IDEgPyB0b0FycmF5KGNicykgOiBjYnM7XG4gICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBpbmZvID0gXCJldmVudCBoYW5kbGVyIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIlwiO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGNic1tpXSwgdm0sIGFyZ3MsIHZtLCBpbmZvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgYWN0aXZlSW5zdGFuY2UgPSBudWxsO1xudmFyIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzZXRBY3RpdmVJbnN0YW5jZSh2bSkge1xuICB2YXIgcHJldkFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2U7XG4gIGFjdGl2ZUluc3RhbmNlID0gdm07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgYWN0aXZlSW5zdGFuY2UgPSBwcmV2QWN0aXZlSW5zdGFuY2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdExpZmVjeWNsZSAodm0pIHtcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcblxuICAvLyBsb2NhdGUgZmlyc3Qgbm9uLWFic3RyYWN0IHBhcmVudFxuICB2YXIgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gIGlmIChwYXJlbnQgJiYgIW9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICB3aGlsZSAocGFyZW50LiRvcHRpb25zLmFic3RyYWN0ICYmIHBhcmVudC4kcGFyZW50KSB7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICB9XG4gICAgcGFyZW50LiRjaGlsZHJlbi5wdXNoKHZtKTtcbiAgfVxuXG4gIHZtLiRwYXJlbnQgPSBwYXJlbnQ7XG4gIHZtLiRyb290ID0gcGFyZW50ID8gcGFyZW50LiRyb290IDogdm07XG5cbiAgdm0uJGNoaWxkcmVuID0gW107XG4gIHZtLiRyZWZzID0ge307XG5cbiAgdm0uX3dhdGNoZXIgPSBudWxsO1xuICB2bS5faW5hY3RpdmUgPSBudWxsO1xuICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgdm0uX2lzTW91bnRlZCA9IGZhbHNlO1xuICB2bS5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4gKFZ1ZSkge1xuICBWdWUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIHByZXZFbCA9IHZtLiRlbDtcbiAgICB2YXIgcHJldlZub2RlID0gdm0uX3Zub2RlO1xuICAgIHZhciByZXN0b3JlQWN0aXZlSW5zdGFuY2UgPSBzZXRBY3RpdmVJbnN0YW5jZSh2bSk7XG4gICAgdm0uX3Zub2RlID0gdm5vZGU7XG4gICAgLy8gVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gaXMgaW5qZWN0ZWQgaW4gZW50cnkgcG9pbnRzXG4gICAgLy8gYmFzZWQgb24gdGhlIHJlbmRlcmluZyBiYWNrZW5kIHVzZWQuXG4gICAgaWYgKCFwcmV2Vm5vZGUpIHtcbiAgICAgIC8vIGluaXRpYWwgcmVuZGVyXG4gICAgICB2bS4kZWwgPSB2bS5fX3BhdGNoX18odm0uJGVsLCB2bm9kZSwgaHlkcmF0aW5nLCBmYWxzZSAvKiByZW1vdmVPbmx5ICovKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdXBkYXRlc1xuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHByZXZWbm9kZSwgdm5vZGUpO1xuICAgIH1cbiAgICByZXN0b3JlQWN0aXZlSW5zdGFuY2UoKTtcbiAgICAvLyB1cGRhdGUgX192dWVfXyByZWZlcmVuY2VcbiAgICBpZiAocHJldkVsKSB7XG4gICAgICBwcmV2RWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh2bS4kZWwpIHtcbiAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gdm07XG4gICAgfVxuICAgIC8vIGlmIHBhcmVudCBpcyBhbiBIT0MsIHVwZGF0ZSBpdHMgJGVsIGFzIHdlbGxcbiAgICBpZiAodm0uJHZub2RlICYmIHZtLiRwYXJlbnQgJiYgdm0uJHZub2RlID09PSB2bS4kcGFyZW50Ll92bm9kZSkge1xuICAgICAgdm0uJHBhcmVudC4kZWwgPSB2bS4kZWw7XG4gICAgfVxuICAgIC8vIHVwZGF0ZWQgaG9vayBpcyBjYWxsZWQgYnkgdGhlIHNjaGVkdWxlciB0byBlbnN1cmUgdGhhdCBjaGlsZHJlbiBhcmVcbiAgICAvLyB1cGRhdGVkIGluIGEgcGFyZW50J3MgdXBkYXRlZCBob29rLlxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlci51cGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlRGVzdHJveScpO1xuICAgIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHBhcmVudFxuICAgIHZhciBwYXJlbnQgPSB2bS4kcGFyZW50O1xuICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudC5faXNCZWluZ0Rlc3Ryb3llZCAmJiAhdm0uJG9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICAgIHJlbW92ZShwYXJlbnQuJGNoaWxkcmVuLCB2bSk7XG4gICAgfVxuICAgIC8vIHRlYXJkb3duIHdhdGNoZXJzXG4gICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgICB2YXIgaSA9IHZtLl93YXRjaGVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdm0uX3dhdGNoZXJzW2ldLnRlYXJkb3duKCk7XG4gICAgfVxuICAgIC8vIHJlbW92ZSByZWZlcmVuY2UgZnJvbSBkYXRhIG9iXG4gICAgLy8gZnJvemVuIG9iamVjdCBtYXkgbm90IGhhdmUgb2JzZXJ2ZXIuXG4gICAgaWYgKHZtLl9kYXRhLl9fb2JfXykge1xuICAgICAgdm0uX2RhdGEuX19vYl9fLnZtQ291bnQtLTtcbiAgICB9XG4gICAgLy8gY2FsbCB0aGUgbGFzdCBob29rLi4uXG4gICAgdm0uX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAvLyBpbnZva2UgZGVzdHJveSBob29rcyBvbiBjdXJyZW50IHJlbmRlcmVkIHRyZWVcbiAgICB2bS5fX3BhdGNoX18odm0uX3Zub2RlLCBudWxsKTtcbiAgICAvLyBmaXJlIGRlc3Ryb3llZCBob29rXG4gICAgY2FsbEhvb2sodm0sICdkZXN0cm95ZWQnKTtcbiAgICAvLyB0dXJuIG9mZiBhbGwgaW5zdGFuY2UgbGlzdGVuZXJzLlxuICAgIHZtLiRvZmYoKTtcbiAgICAvLyByZW1vdmUgX192dWVfXyByZWZlcmVuY2VcbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuICAgIC8vIHJlbGVhc2UgY2lyY3VsYXIgcmVmZXJlbmNlICgjNjc1OSlcbiAgICBpZiAodm0uJHZub2RlKSB7XG4gICAgICB2bS4kdm5vZGUucGFyZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1vdW50Q29tcG9uZW50IChcbiAgdm0sXG4gIGVsLFxuICBoeWRyYXRpbmdcbikge1xuICB2bS4kZWwgPSBlbDtcbiAgaWYgKCF2bS4kb3B0aW9ucy5yZW5kZXIpIHtcbiAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVZOb2RlO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICgodm0uJG9wdGlvbnMudGVtcGxhdGUgJiYgdm0uJG9wdGlvbnMudGVtcGxhdGUuY2hhckF0KDApICE9PSAnIycpIHx8XG4gICAgICAgIHZtLiRvcHRpb25zLmVsIHx8IGVsKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBhcmUgdXNpbmcgdGhlIHJ1bnRpbWUtb25seSBidWlsZCBvZiBWdWUgd2hlcmUgdGhlIHRlbXBsYXRlICcgK1xuICAgICAgICAgICdjb21waWxlciBpcyBub3QgYXZhaWxhYmxlLiBFaXRoZXIgcHJlLWNvbXBpbGUgdGhlIHRlbXBsYXRlcyBpbnRvICcgK1xuICAgICAgICAgICdyZW5kZXIgZnVuY3Rpb25zLCBvciB1c2UgdGhlIGNvbXBpbGVyLWluY2x1ZGVkIGJ1aWxkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ0ZhaWxlZCB0byBtb3VudCBjb21wb25lbnQ6IHRlbXBsYXRlIG9yIHJlbmRlciBmdW5jdGlvbiBub3QgZGVmaW5lZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhbGxIb29rKHZtLCAnYmVmb3JlTW91bnQnKTtcblxuICB2YXIgdXBkYXRlQ29tcG9uZW50O1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIG1hcmspIHtcbiAgICB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmFtZSA9IHZtLl9uYW1lO1xuICAgICAgdmFyIGlkID0gdm0uX3VpZDtcbiAgICAgIHZhciBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyBpZDtcbiAgICAgIHZhciBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArIGlkO1xuXG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICAgIHZhciB2bm9kZSA9IHZtLl9yZW5kZXIoKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgbmFtZSArIFwiIHJlbmRlclwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XG5cbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgICAgdm0uX3VwZGF0ZSh2bm9kZSwgaHlkcmF0aW5nKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgbmFtZSArIFwiIHBhdGNoXCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZtLl91cGRhdGUodm0uX3JlbmRlcigpLCBoeWRyYXRpbmcpO1xuICAgIH07XG4gIH1cblxuICAvLyB3ZSBzZXQgdGhpcyB0byB2bS5fd2F0Y2hlciBpbnNpZGUgdGhlIHdhdGNoZXIncyBjb25zdHJ1Y3RvclxuICAvLyBzaW5jZSB0aGUgd2F0Y2hlcidzIGluaXRpYWwgcGF0Y2ggbWF5IGNhbGwgJGZvcmNlVXBkYXRlIChlLmcuIGluc2lkZSBjaGlsZFxuICAvLyBjb21wb25lbnQncyBtb3VudGVkIGhvb2spLCB3aGljaCByZWxpZXMgb24gdm0uX3dhdGNoZXIgYmVpbmcgYWxyZWFkeSBkZWZpbmVkXG4gIG5ldyBXYXRjaGVyKHZtLCB1cGRhdGVDb21wb25lbnQsIG5vb3AsIHtcbiAgICBiZWZvcmU6IGZ1bmN0aW9uIGJlZm9yZSAoKSB7XG4gICAgICBpZiAodm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlVXBkYXRlJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0cnVlIC8qIGlzUmVuZGVyV2F0Y2hlciAqLyk7XG4gIGh5ZHJhdGluZyA9IGZhbHNlO1xuXG4gIC8vIG1hbnVhbGx5IG1vdW50ZWQgaW5zdGFuY2UsIGNhbGwgbW91bnRlZCBvbiBzZWxmXG4gIC8vIG1vdW50ZWQgaXMgY2FsbGVkIGZvciByZW5kZXItY3JlYXRlZCBjaGlsZCBjb21wb25lbnRzIGluIGl0cyBpbnNlcnRlZCBob29rXG4gIGlmICh2bS4kdm5vZGUgPT0gbnVsbCkge1xuICAgIHZtLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIGNhbGxIb29rKHZtLCAnbW91bnRlZCcpO1xuICB9XG4gIHJldHVybiB2bVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDaGlsZENvbXBvbmVudCAoXG4gIHZtLFxuICBwcm9wc0RhdGEsXG4gIGxpc3RlbmVycyxcbiAgcGFyZW50Vm5vZGUsXG4gIHJlbmRlckNoaWxkcmVuXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgY29tcG9uZW50IGhhcyBzbG90IGNoaWxkcmVuXG4gIC8vIHdlIG5lZWQgdG8gZG8gdGhpcyBiZWZvcmUgb3ZlcndyaXRpbmcgJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLlxuXG4gIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBkeW5hbWljIHNjb3BlZFNsb3RzIChoYW5kLXdyaXR0ZW4gb3IgY29tcGlsZWQgYnV0IHdpdGhcbiAgLy8gZHluYW1pYyBzbG90IG5hbWVzKS4gU3RhdGljIHNjb3BlZCBzbG90cyBjb21waWxlZCBmcm9tIHRlbXBsYXRlIGhhcyB0aGVcbiAgLy8gXCIkc3RhYmxlXCIgbWFya2VyLlxuICB2YXIgbmV3U2NvcGVkU2xvdHMgPSBwYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzO1xuICB2YXIgb2xkU2NvcGVkU2xvdHMgPSB2bS4kc2NvcGVkU2xvdHM7XG4gIHZhciBoYXNEeW5hbWljU2NvcGVkU2xvdCA9ICEhKFxuICAgIChuZXdTY29wZWRTbG90cyAmJiAhbmV3U2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAob2xkU2NvcGVkU2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmICFvbGRTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChuZXdTY29wZWRTbG90cyAmJiB2bS4kc2NvcGVkU2xvdHMuJGtleSAhPT0gbmV3U2NvcGVkU2xvdHMuJGtleSkgfHxcbiAgICAoIW5ld1Njb3BlZFNsb3RzICYmIHZtLiRzY29wZWRTbG90cy4ka2V5KVxuICApO1xuXG4gIC8vIEFueSBzdGF0aWMgc2xvdCBjaGlsZHJlbiBmcm9tIHRoZSBwYXJlbnQgbWF5IGhhdmUgY2hhbmdlZCBkdXJpbmcgcGFyZW50J3NcbiAgLy8gdXBkYXRlLiBEeW5hbWljIHNjb3BlZCBzbG90cyBtYXkgYWxzbyBoYXZlIGNoYW5nZWQuIEluIHN1Y2ggY2FzZXMsIGEgZm9yY2VkXG4gIC8vIHVwZGF0ZSBpcyBuZWNlc3NhcnkgdG8gZW5zdXJlIGNvcnJlY3RuZXNzLlxuICB2YXIgbmVlZHNGb3JjZVVwZGF0ZSA9ICEhKFxuICAgIHJlbmRlckNoaWxkcmVuIHx8ICAgICAgICAgICAgICAgLy8gaGFzIG5ldyBzdGF0aWMgc2xvdHNcbiAgICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gfHwgIC8vIGhhcyBvbGQgc3RhdGljIHNsb3RzXG4gICAgaGFzRHluYW1pY1Njb3BlZFNsb3RcbiAgKTtcblxuICB2bS4kb3B0aW9ucy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcbiAgdm0uJHZub2RlID0gcGFyZW50Vm5vZGU7IC8vIHVwZGF0ZSB2bSdzIHBsYWNlaG9sZGVyIG5vZGUgd2l0aG91dCByZS1yZW5kZXJcblxuICBpZiAodm0uX3Zub2RlKSB7IC8vIHVwZGF0ZSBjaGlsZCB0cmVlJ3MgcGFyZW50XG4gICAgdm0uX3Zub2RlLnBhcmVudCA9IHBhcmVudFZub2RlO1xuICB9XG4gIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiA9IHJlbmRlckNoaWxkcmVuO1xuXG4gIC8vIHVwZGF0ZSAkYXR0cnMgYW5kICRsaXN0ZW5lcnMgaGFzaFxuICAvLyB0aGVzZSBhcmUgYWxzbyByZWFjdGl2ZSBzbyB0aGV5IG1heSB0cmlnZ2VyIGNoaWxkIHVwZGF0ZSBpZiB0aGUgY2hpbGRcbiAgLy8gdXNlZCB0aGVtIGR1cmluZyByZW5kZXJcbiAgdm0uJGF0dHJzID0gcGFyZW50Vm5vZGUuZGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdDtcbiAgdm0uJGxpc3RlbmVycyA9IGxpc3RlbmVycyB8fCBlbXB0eU9iamVjdDtcblxuICAvLyB1cGRhdGUgcHJvcHNcbiAgaWYgKHByb3BzRGF0YSAmJiB2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gICAgdmFyIHByb3BzID0gdm0uX3Byb3BzO1xuICAgIHZhciBwcm9wS2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcEtleXNbaV07XG4gICAgICB2YXIgcHJvcE9wdGlvbnMgPSB2bS4kb3B0aW9ucy5wcm9wczsgLy8gd3RmIGZsb3c/XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSwgdm0pO1xuICAgIH1cbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgLy8ga2VlcCBhIGNvcHkgb2YgcmF3IHByb3BzRGF0YVxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YSA9IHByb3BzRGF0YTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnNcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuICB2YXIgb2xkTGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyk7XG5cbiAgLy8gcmVzb2x2ZSBzbG90cyArIGZvcmNlIHVwZGF0ZSBpZiBoYXMgY2hpbGRyZW5cbiAgaWYgKG5lZWRzRm9yY2VVcGRhdGUpIHtcbiAgICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMocmVuZGVyQ2hpbGRyZW4sIHBhcmVudFZub2RlLmNvbnRleHQpO1xuICAgIHZtLiRmb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luSW5hY3RpdmVUcmVlICh2bSkge1xuICB3aGlsZSAodm0gJiYgKHZtID0gdm0uJHBhcmVudCkpIHtcbiAgICBpZiAodm0uX2luYWN0aXZlKSB7IHJldHVybiB0cnVlIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSBpZiAodm0uX2RpcmVjdEluYWN0aXZlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZtLl9pbmFjdGl2ZSB8fCB2bS5faW5hY3RpdmUgPT09IG51bGwpIHtcbiAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2FjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBpZiAoIXZtLl9pbmFjdGl2ZSkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2RlYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbEhvb2sgKHZtLCBob29rKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcbiAgcHVzaFRhcmdldCgpO1xuICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcbiAgdmFyIGluZm8gPSBob29rICsgXCIgaG9va1wiO1xuICBpZiAoaGFuZGxlcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBudWxsLCB2bSwgaW5mbyk7XG4gICAgfVxuICB9XG4gIGlmICh2bS5faGFzSG9va0V2ZW50KSB7XG4gICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2spO1xuICB9XG4gIHBvcFRhcmdldCgpO1xufVxuXG4vKiAgKi9cblxudmFyIE1BWF9VUERBVEVfQ09VTlQgPSAxMDA7XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGFjdGl2YXRlZENoaWxkcmVuID0gW107XG52YXIgaGFzID0ge307XG52YXIgY2lyY3VsYXIgPSB7fTtcbnZhciB3YWl0aW5nID0gZmFsc2U7XG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbnZhciBpbmRleCA9IDA7XG5cbi8qKlxuICogUmVzZXQgdGhlIHNjaGVkdWxlcidzIHN0YXRlLlxuICovXG5mdW5jdGlvbiByZXNldFNjaGVkdWxlclN0YXRlICgpIHtcbiAgaW5kZXggPSBxdWV1ZS5sZW5ndGggPSBhY3RpdmF0ZWRDaGlsZHJlbi5sZW5ndGggPSAwO1xuICBoYXMgPSB7fTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaXJjdWxhciA9IHt9O1xuICB9XG4gIHdhaXRpbmcgPSBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBBc3luYyBlZGdlIGNhc2UgIzY1NjYgcmVxdWlyZXMgc2F2aW5nIHRoZSB0aW1lc3RhbXAgd2hlbiBldmVudCBsaXN0ZW5lcnMgYXJlXG4vLyBhdHRhY2hlZC4gSG93ZXZlciwgY2FsbGluZyBwZXJmb3JtYW5jZS5ub3coKSBoYXMgYSBwZXJmIG92ZXJoZWFkIGVzcGVjaWFsbHlcbi8vIGlmIHRoZSBwYWdlIGhhcyB0aG91c2FuZHMgb2YgZXZlbnQgbGlzdGVuZXJzLiBJbnN0ZWFkLCB3ZSB0YWtlIGEgdGltZXN0YW1wXG4vLyBldmVyeSB0aW1lIHRoZSBzY2hlZHVsZXIgZmx1c2hlcyBhbmQgdXNlIHRoYXQgZm9yIGFsbCBldmVudCBsaXN0ZW5lcnNcbi8vIGF0dGFjaGVkIGR1cmluZyB0aGF0IGZsdXNoLlxudmFyIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IDA7XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSBmaXggcmVxdWlyZXMgc3RvcmluZyBhbiBldmVudCBsaXN0ZW5lcidzIGF0dGFjaCB0aW1lc3RhbXAuXG52YXIgZ2V0Tm93ID0gRGF0ZS5ub3c7XG5cbi8vIERldGVybWluZSB3aGF0IGV2ZW50IHRpbWVzdGFtcCB0aGUgYnJvd3NlciBpcyB1c2luZy4gQW5ub3lpbmdseSwgdGhlXG4vLyB0aW1lc3RhbXAgY2FuIGVpdGhlciBiZSBoaS1yZXMgKHJlbGF0aXZlIHRvIHBhZ2UgbG9hZCkgb3IgbG93LXJlc1xuLy8gKHJlbGF0aXZlIHRvIFVOSVggZXBvY2gpLCBzbyBpbiBvcmRlciB0byBjb21wYXJlIHRpbWUgd2UgaGF2ZSB0byB1c2UgdGhlXG4vLyBzYW1lIHRpbWVzdGFtcCB0eXBlIHdoZW4gc2F2aW5nIHRoZSBmbHVzaCB0aW1lc3RhbXAuXG4vLyBBbGwgSUUgdmVyc2lvbnMgdXNlIGxvdy1yZXMgZXZlbnQgdGltZXN0YW1wcywgYW5kIGhhdmUgcHJvYmxlbWF0aWMgY2xvY2tcbi8vIGltcGxlbWVudGF0aW9ucyAoIzk2MzIpXG5pZiAoaW5Ccm93c2VyICYmICFpc0lFKSB7XG4gIHZhciBwZXJmb3JtYW5jZSA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgaWYgKFxuICAgIHBlcmZvcm1hbmNlICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGdldE5vdygpID4gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JykudGltZVN0YW1wXG4gICkge1xuICAgIC8vIGlmIHRoZSBldmVudCB0aW1lc3RhbXAsIGFsdGhvdWdoIGV2YWx1YXRlZCBBRlRFUiB0aGUgRGF0ZS5ub3coKSwgaXNcbiAgICAvLyBzbWFsbGVyIHRoYW4gaXQsIGl0IG1lYW5zIHRoZSBldmVudCBpcyB1c2luZyBhIGhpLXJlcyB0aW1lc3RhbXAsXG4gICAgLy8gYW5kIHdlIG5lZWQgdG8gdXNlIHRoZSBoaS1yZXMgdmVyc2lvbiBmb3IgZXZlbnQgbGlzdGVuZXIgdGltZXN0YW1wcyBhc1xuICAgIC8vIHdlbGwuXG4gICAgZ2V0Tm93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7IH07XG4gIH1cbn1cblxuLyoqXG4gKiBGbHVzaCBib3RoIHF1ZXVlcyBhbmQgcnVuIHRoZSB3YXRjaGVycy5cbiAqL1xuZnVuY3Rpb24gZmx1c2hTY2hlZHVsZXJRdWV1ZSAoKSB7XG4gIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IGdldE5vdygpO1xuICBmbHVzaGluZyA9IHRydWU7XG4gIHZhciB3YXRjaGVyLCBpZDtcblxuICAvLyBTb3J0IHF1ZXVlIGJlZm9yZSBmbHVzaC5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQ6XG4gIC8vIDEuIENvbXBvbmVudHMgYXJlIHVwZGF0ZWQgZnJvbSBwYXJlbnQgdG8gY2hpbGQuIChiZWNhdXNlIHBhcmVudCBpcyBhbHdheXNcbiAgLy8gICAgY3JlYXRlZCBiZWZvcmUgdGhlIGNoaWxkKVxuICAvLyAyLiBBIGNvbXBvbmVudCdzIHVzZXIgd2F0Y2hlcnMgYXJlIHJ1biBiZWZvcmUgaXRzIHJlbmRlciB3YXRjaGVyIChiZWNhdXNlXG4gIC8vICAgIHVzZXIgd2F0Y2hlcnMgYXJlIGNyZWF0ZWQgYmVmb3JlIHRoZSByZW5kZXIgd2F0Y2hlcilcbiAgLy8gMy4gSWYgYSBjb21wb25lbnQgaXMgZGVzdHJveWVkIGR1cmluZyBhIHBhcmVudCBjb21wb25lbnQncyB3YXRjaGVyIHJ1bixcbiAgLy8gICAgaXRzIHdhdGNoZXJzIGNhbiBiZSBza2lwcGVkLlxuICBxdWV1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG5cbiAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgd2F0Y2hlcnMgbWlnaHQgYmUgcHVzaGVkXG4gIC8vIGFzIHdlIHJ1biBleGlzdGluZyB3YXRjaGVyc1xuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBxdWV1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB3YXRjaGVyID0gcXVldWVbaW5kZXhdO1xuICAgIGlmICh3YXRjaGVyLmJlZm9yZSkge1xuICAgICAgd2F0Y2hlci5iZWZvcmUoKTtcbiAgICB9XG4gICAgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGhhc1tpZF0gPSBudWxsO1xuICAgIHdhdGNoZXIucnVuKCk7XG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDE7XG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gTUFYX1VQREFURV9DT1VOVCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgbWF5IGhhdmUgYW4gaW5maW5pdGUgdXBkYXRlIGxvb3AgJyArIChcbiAgICAgICAgICAgIHdhdGNoZXIudXNlclxuICAgICAgICAgICAgICA/IChcImluIHdhdGNoZXIgd2l0aCBleHByZXNzaW9uIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpXG4gICAgICAgICAgICAgIDogXCJpbiBhIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb24uXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHdhdGNoZXIudm1cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBrZWVwIGNvcGllcyBvZiBwb3N0IHF1ZXVlcyBiZWZvcmUgcmVzZXR0aW5nIHN0YXRlXG4gIHZhciBhY3RpdmF0ZWRRdWV1ZSA9IGFjdGl2YXRlZENoaWxkcmVuLnNsaWNlKCk7XG4gIHZhciB1cGRhdGVkUXVldWUgPSBxdWV1ZS5zbGljZSgpO1xuXG4gIHJlc2V0U2NoZWR1bGVyU3RhdGUoKTtcblxuICAvLyBjYWxsIGNvbXBvbmVudCB1cGRhdGVkIGFuZCBhY3RpdmF0ZWQgaG9va3NcbiAgY2FsbEFjdGl2YXRlZEhvb2tzKGFjdGl2YXRlZFF1ZXVlKTtcbiAgY2FsbFVwZGF0ZWRIb29rcyh1cGRhdGVkUXVldWUpO1xuXG4gIC8vIGRldnRvb2wgaG9va1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRldnRvb2xzICYmIGNvbmZpZy5kZXZ0b29scykge1xuICAgIGRldnRvb2xzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFVwZGF0ZWRIb29rcyAocXVldWUpIHtcbiAgdmFyIGkgPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHF1ZXVlW2ldO1xuICAgIHZhciB2bSA9IHdhdGNoZXIudm07XG4gICAgaWYgKHZtLl93YXRjaGVyID09PSB3YXRjaGVyICYmIHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgY2FsbEhvb2sodm0sICd1cGRhdGVkJyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUXVldWUgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCB0aGF0IHdhcyBhY3RpdmF0ZWQgZHVyaW5nIHBhdGNoLlxuICogVGhlIHF1ZXVlIHdpbGwgYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSBlbnRpcmUgdHJlZSBoYXMgYmVlbiBwYXRjaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudCAodm0pIHtcbiAgLy8gc2V0dGluZyBfaW5hY3RpdmUgdG8gZmFsc2UgaGVyZSBzbyB0aGF0IGEgcmVuZGVyIGZ1bmN0aW9uIGNhblxuICAvLyByZWx5IG9uIGNoZWNraW5nIHdoZXRoZXIgaXQncyBpbiBhbiBpbmFjdGl2ZSB0cmVlIChlLmcuIHJvdXRlci12aWV3KVxuICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgYWN0aXZhdGVkQ2hpbGRyZW4ucHVzaCh2bSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBY3RpdmF0ZWRIb29rcyAocXVldWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXVlW2ldLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChxdWV1ZVtpXSwgdHJ1ZSAvKiB0cnVlICovKTtcbiAgfVxufVxuXG4vKipcbiAqIFB1c2ggYSB3YXRjaGVyIGludG8gdGhlIHdhdGNoZXIgcXVldWUuXG4gKiBKb2JzIHdpdGggZHVwbGljYXRlIElEcyB3aWxsIGJlIHNraXBwZWQgdW5sZXNzIGl0J3NcbiAqIHB1c2hlZCB3aGVuIHRoZSBxdWV1ZSBpcyBiZWluZyBmbHVzaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZVdhdGNoZXIgKHdhdGNoZXIpIHtcbiAgdmFyIGlkID0gd2F0Y2hlci5pZDtcbiAgaWYgKGhhc1tpZF0gPT0gbnVsbCkge1xuICAgIGhhc1tpZF0gPSB0cnVlO1xuICAgIGlmICghZmx1c2hpbmcpIHtcbiAgICAgIHF1ZXVlLnB1c2god2F0Y2hlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGFscmVhZHkgZmx1c2hpbmcsIHNwbGljZSB0aGUgd2F0Y2hlciBiYXNlZCBvbiBpdHMgaWRcbiAgICAgIC8vIGlmIGFscmVhZHkgcGFzdCBpdHMgaWQsIGl0IHdpbGwgYmUgcnVuIG5leHQgaW1tZWRpYXRlbHkuXG4gICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAoaSA+IGluZGV4ICYmIHF1ZXVlW2ldLmlkID4gd2F0Y2hlci5pZCkge1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgICBxdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHdhdGNoZXIpO1xuICAgIH1cbiAgICAvLyBxdWV1ZSB0aGUgZmx1c2hcbiAgICBpZiAoIXdhaXRpbmcpIHtcbiAgICAgIHdhaXRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29uZmlnLmFzeW5jKSB7XG4gICAgICAgIGZsdXNoU2NoZWR1bGVyUXVldWUoKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBuZXh0VGljayhmbHVzaFNjaGVkdWxlclF1ZXVlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cblxuXG52YXIgdWlkJDIgPSAwO1xuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICovXG52YXIgV2F0Y2hlciA9IGZ1bmN0aW9uIFdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgY2IsXG4gIG9wdGlvbnMsXG4gIGlzUmVuZGVyV2F0Y2hlclxuKSB7XG4gIHRoaXMudm0gPSB2bTtcbiAgaWYgKGlzUmVuZGVyV2F0Y2hlcikge1xuICAgIHZtLl93YXRjaGVyID0gdGhpcztcbiAgfVxuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKTtcbiAgLy8gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIHRoaXMuZGVlcCA9ICEhb3B0aW9ucy5kZWVwO1xuICAgIHRoaXMudXNlciA9ICEhb3B0aW9ucy51c2VyO1xuICAgIHRoaXMubGF6eSA9ICEhb3B0aW9ucy5sYXp5O1xuICAgIHRoaXMuc3luYyA9ICEhb3B0aW9ucy5zeW5jO1xuICAgIHRoaXMuYmVmb3JlID0gb3B0aW9ucy5iZWZvcmU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWVwID0gdGhpcy51c2VyID0gdGhpcy5sYXp5ID0gdGhpcy5zeW5jID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5jYiA9IGNiO1xuICB0aGlzLmlkID0gKyt1aWQkMjsgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenk7IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdO1xuICB0aGlzLm5ld0RlcHMgPSBbXTtcbiAgdGhpcy5kZXBJZHMgPSBuZXcgX1NldCgpO1xuICB0aGlzLm5ld0RlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMuZXhwcmVzc2lvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICA/IGV4cE9yRm4udG9TdHJpbmcoKVxuICAgIDogJyc7XG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAodHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbik7XG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBub29wO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB3YXRjaGluZyBwYXRoOiBcXFwiXCIgKyBleHBPckZuICsgXCJcXFwiIFwiICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdGhpcy5nZXQoKTtcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKCkge1xuICBwdXNoVGFyZ2V0KHRoaXMpO1xuICB2YXIgdmFsdWU7XG4gIHZhciB2bSA9IHRoaXMudm07XG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgICBpZiAodGhpcy5kZWVwKSB7XG4gICAgICB0cmF2ZXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIHBvcFRhcmdldCgpO1xuICAgIHRoaXMuY2xlYW51cERlcHMoKTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn07XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gYWRkRGVwIChkZXApIHtcbiAgdmFyIGlkID0gZGVwLmlkO1xuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpO1xuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcCk7XG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5jbGVhbnVwRGVwcyA9IGZ1bmN0aW9uIGNsZWFudXBEZXBzICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGRlcCA9IHRoaXMuZGVwc1tpXTtcbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxuICB2YXIgdG1wID0gdGhpcy5kZXBJZHM7XG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHM7XG4gIHRoaXMubmV3RGVwSWRzID0gdG1wO1xuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpO1xuICB0bXAgPSB0aGlzLmRlcHM7XG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwcztcbiAgdGhpcy5uZXdEZXBzID0gdG1wO1xuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMDtcbn07XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gIH0gZWxzZSBpZiAodGhpcy5zeW5jKSB7XG4gICAgdGhpcy5ydW4oKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZVdhdGNoZXIodGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogU2NoZWR1bGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiBydW4gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldCgpO1xuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZC5cbiAgICAgIGlzT2JqZWN0KHZhbHVlKSB8fFxuICAgICAgdGhpcy5kZWVwXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICB2YXIgaW5mbyA9IFwiY2FsbGJhY2sgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIjtcbiAgICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcodGhpcy5jYiwgdGhpcy52bSwgW3ZhbHVlLCBvbGRWYWx1ZV0sIHRoaXMudm0sIGluZm8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAqIFRoaXMgb25seSBnZXRzIGNhbGxlZCBmb3IgbGF6eSB3YXRjaGVycy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiBldmFsdWF0ZSAoKSB7XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpO1xuICB0aGlzLmRpcnR5ID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJzY3JpYmVyIGxpc3QuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gdGVhcmRvd24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHZtJ3Mgd2F0Y2hlciBsaXN0XG4gICAgLy8gdGhpcyBpcyBhIHNvbWV3aGF0IGV4cGVuc2l2ZSBvcGVyYXRpb24gc28gd2Ugc2tpcCBpdFxuICAgIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBkZXN0cm95ZWQuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICByZW1vdmUodGhpcy52bS5fd2F0Y2hlcnMsIHRoaXMpO1xuICAgIH1cbiAgICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufTtcblxuLyogICovXG5cbnZhciBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24gPSB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBub29wLFxuICBzZXQ6IG5vb3Bcbn07XG5cbmZ1bmN0aW9uIHByb3h5ICh0YXJnZXQsIHNvdXJjZUtleSwga2V5KSB7XG4gIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBmdW5jdGlvbiBwcm94eUdldHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXNbc291cmNlS2V5XVtrZXldXG4gIH07XG4gIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiBwcm94eVNldHRlciAodmFsKSB7XG4gICAgdGhpc1tzb3VyY2VLZXldW2tleV0gPSB2YWw7XG4gIH07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gaW5pdFN0YXRlICh2bSkge1xuICB2bS5fd2F0Y2hlcnMgPSBbXTtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucztcbiAgaWYgKG9wdHMucHJvcHMpIHsgaW5pdFByb3BzKHZtLCBvcHRzLnByb3BzKTsgfVxuICBpZiAob3B0cy5tZXRob2RzKSB7IGluaXRNZXRob2RzKHZtLCBvcHRzLm1ldGhvZHMpOyB9XG4gIGlmIChvcHRzLmRhdGEpIHtcbiAgICBpbml0RGF0YSh2bSk7XG4gIH0gZWxzZSB7XG4gICAgb2JzZXJ2ZSh2bS5fZGF0YSA9IHt9LCB0cnVlIC8qIGFzUm9vdERhdGEgKi8pO1xuICB9XG4gIGlmIChvcHRzLmNvbXB1dGVkKSB7IGluaXRDb21wdXRlZCh2bSwgb3B0cy5jb21wdXRlZCk7IH1cbiAgaWYgKG9wdHMud2F0Y2ggJiYgb3B0cy53YXRjaCAhPT0gbmF0aXZlV2F0Y2gpIHtcbiAgICBpbml0V2F0Y2godm0sIG9wdHMud2F0Y2gpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRQcm9wcyAodm0sIHByb3BzT3B0aW9ucykge1xuICB2YXIgcHJvcHNEYXRhID0gdm0uJG9wdGlvbnMucHJvcHNEYXRhIHx8IHt9O1xuICB2YXIgcHJvcHMgPSB2bS5fcHJvcHMgPSB7fTtcbiAgLy8gY2FjaGUgcHJvcCBrZXlzIHNvIHRoYXQgZnV0dXJlIHByb3BzIHVwZGF0ZXMgY2FuIGl0ZXJhdGUgdXNpbmcgQXJyYXlcbiAgLy8gaW5zdGVhZCBvZiBkeW5hbWljIG9iamVjdCBrZXkgZW51bWVyYXRpb24uXG4gIHZhciBrZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzID0gW107XG4gIHZhciBpc1Jvb3QgPSAhdm0uJHBhcmVudDtcbiAgLy8gcm9vdCBpbnN0YW5jZSBwcm9wcyBzaG91bGQgYmUgY29udmVydGVkXG4gIGlmICghaXNSb290KSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgfVxuICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIHZhciB2YWx1ZSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BzT3B0aW9ucywgcHJvcHNEYXRhLCB2bSk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGh5cGhlbmF0ZWRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIGlmIChpc1Jlc2VydmVkQXR0cmlidXRlKGh5cGhlbmF0ZWRLZXkpIHx8XG4gICAgICAgICAgY29uZmlnLmlzUmVzZXJ2ZWRBdHRyKGh5cGhlbmF0ZWRLZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiXFxcIlwiICsgaHlwaGVuYXRlZEtleSArIFwiXFxcIiBpcyBhIHJlc2VydmVkIGF0dHJpYnV0ZSBhbmQgY2Fubm90IGJlIHVzZWQgYXMgY29tcG9uZW50IHByb3AuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShwcm9wcywga2V5LCB2YWx1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzUm9vdCAmJiAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYSBwcm9wIGRpcmVjdGx5IHNpbmNlIHRoZSB2YWx1ZSB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHBhcmVudCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJJbnN0ZWFkLCB1c2UgYSBkYXRhIG9yIGNvbXB1dGVkIHByb3BlcnR5IGJhc2VkIG9uIHRoZSBwcm9wJ3MgXCIgK1xuICAgICAgICAgICAgXCJ2YWx1ZS4gUHJvcCBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgLy8gc3RhdGljIHByb3BzIGFyZSBhbHJlYWR5IHByb3hpZWQgb24gdGhlIGNvbXBvbmVudCdzIHByb3RvdHlwZVxuICAgIC8vIGR1cmluZyBWdWUuZXh0ZW5kKCkuIFdlIG9ubHkgbmVlZCB0byBwcm94eSBwcm9wcyBkZWZpbmVkIGF0XG4gICAgLy8gaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9wcm9wc1wiLCBrZXkpO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHNPcHRpb25zKSBsb29wKCBrZXkgKTtcbiAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xufVxuXG5mdW5jdGlvbiBpbml0RGF0YSAodm0pIHtcbiAgdmFyIGRhdGEgPSB2bS4kb3B0aW9ucy5kYXRhO1xuICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZ2V0RGF0YShkYXRhLCB2bSlcbiAgICA6IGRhdGEgfHwge307XG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGRhdGEgPSB7fTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnZGF0YSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhbiBvYmplY3Q6XFxuJyArXG4gICAgICAnaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvY29tcG9uZW50cy5odG1sI2RhdGEtTXVzdC1CZS1hLUZ1bmN0aW9uJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKG1ldGhvZHMgJiYgaGFzT3duKG1ldGhvZHMsIGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGRhdGEgcHJvcGVydHkuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJUaGUgZGF0YSBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWNsYXJlZCBhcyBhIHByb3AuIFwiICtcbiAgICAgICAgXCJVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuXCIsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgcHJveHkodm0sIFwiX2RhdGFcIiwga2V5KTtcbiAgICB9XG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YSAoZGF0YSwgdm0pIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRhdGEuY2FsbCh2bSwgdm0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJkYXRhKClcIik7XG4gICAgcmV0dXJuIHt9XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxudmFyIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnMgPSB7IGxhenk6IHRydWUgfTtcblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSwgY29tcHV0ZWQpIHtcbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIHZhciB3YXRjaGVycyA9IHZtLl9jb21wdXRlZFdhdGNoZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gY29tcHV0ZWQgcHJvcGVydGllcyBhcmUganVzdCBnZXR0ZXJzIGR1cmluZyBTU1JcbiAgdmFyIGlzU1NSID0gaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcblxuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV07XG4gICAgdmFyIGdldHRlciA9IHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nID8gdXNlckRlZiA6IHVzZXJEZWYuZ2V0O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGdldHRlciA9PSBudWxsKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJHZXR0ZXIgaXMgbWlzc2luZyBmb3IgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1NTUikge1xuICAgICAgLy8gY3JlYXRlIGludGVybmFsIHdhdGNoZXIgZm9yIHRoZSBjb21wdXRlZCBwcm9wZXJ0eS5cbiAgICAgIHdhdGNoZXJzW2tleV0gPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgdm0sXG4gICAgICAgIGdldHRlciB8fCBub29wLFxuICAgICAgICBub29wLFxuICAgICAgICBjb21wdXRlZFdhdGNoZXJPcHRpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudC1kZWZpbmVkIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGFscmVhZHkgZGVmaW5lZCBvbiB0aGVcbiAgICAvLyBjb21wb25lbnQgcHJvdG90eXBlLiBXZSBvbmx5IG5lZWQgdG8gZGVmaW5lIGNvbXB1dGVkIHByb3BlcnRpZXMgZGVmaW5lZFxuICAgIC8vIGF0IGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBkZWZpbmVDb21wdXRlZCh2bSwga2V5LCB1c2VyRGVmKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChrZXkgaW4gdm0uJGRhdGEpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBkYXRhLlwiKSwgdm0pO1xuICAgICAgfSBlbHNlIGlmICh2bS4kb3B0aW9ucy5wcm9wcyAmJiBrZXkgaW4gdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBhcyBhIHByb3AuXCIpLCB2bSk7XG4gICAgICB9IGVsc2UgaWYgKHZtLiRvcHRpb25zLm1ldGhvZHMgJiYga2V5IGluIHZtLiRvcHRpb25zLm1ldGhvZHMpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBhcyBhIG1ldGhvZC5cIiksIHZtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lQ29tcHV0ZWQgKFxuICB0YXJnZXQsXG4gIGtleSxcbiAgdXNlckRlZlxuKSB7XG4gIHZhciBzaG91bGRDYWNoZSA9ICFpc1NlcnZlclJlbmRlcmluZygpO1xuICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gc2hvdWxkQ2FjaGVcbiAgICAgID8gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KVxuICAgICAgOiBjcmVhdGVHZXR0ZXJJbnZva2VyKHVzZXJEZWYpO1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBub29wO1xuICB9IGVsc2Uge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgPyBzaG91bGRDYWNoZSAmJiB1c2VyRGVmLmNhY2hlICE9PSBmYWxzZVxuICAgICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgICAgOiBjcmVhdGVHZXR0ZXJJbnZva2VyKHVzZXJEZWYuZ2V0KVxuICAgICAgOiBub29wO1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSB1c2VyRGVmLnNldCB8fCBub29wO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID09PSBub29wKSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgYXNzaWduZWQgdG8gYnV0IGl0IGhhcyBubyBzZXR0ZXIuXCIpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wdXRlZEdldHRlciAoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgdmFyIHdhdGNoZXIgPSB0aGlzLl9jb21wdXRlZFdhdGNoZXJzICYmIHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnNba2V5XTtcbiAgICBpZiAod2F0Y2hlcikge1xuICAgICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgICAgd2F0Y2hlci5ldmFsdWF0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgd2F0Y2hlci5kZXBlbmQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdldHRlckludm9rZXIoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCB0aGlzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRNZXRob2RzICh2bSwgbWV0aG9kcykge1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgZm9yICh2YXIga2V5IGluIG1ldGhvZHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBtZXRob2RzW2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIHR5cGUgXFxcIlwiICsgKHR5cGVvZiBtZXRob2RzW2tleV0pICsgXCJcXFwiIGluIHRoZSBjb21wb25lbnQgZGVmaW5pdGlvbi4gXCIgK1xuICAgICAgICAgIFwiRGlkIHlvdSByZWZlcmVuY2UgdGhlIGZ1bmN0aW9uIGNvcnJlY3RseT9cIixcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICgoa2V5IGluIHZtKSAmJiBpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY29uZmxpY3RzIHdpdGggYW4gZXhpc3RpbmcgVnVlIGluc3RhbmNlIG1ldGhvZC4gXCIgK1xuICAgICAgICAgIFwiQXZvaWQgZGVmaW5pbmcgY29tcG9uZW50IG1ldGhvZHMgdGhhdCBzdGFydCB3aXRoIF8gb3IgJC5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB2bVtrZXldID0gdHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJyA/IG5vb3AgOiBiaW5kKG1ldGhvZHNba2V5XSwgdm0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRXYXRjaCAodm0sIHdhdGNoKSB7XG4gIGZvciAodmFyIGtleSBpbiB3YXRjaCkge1xuICAgIHZhciBoYW5kbGVyID0gd2F0Y2hba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcltpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgaGFuZGxlcixcbiAgb3B0aW9uc1xuKSB7XG4gIGlmIChpc1BsYWluT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgb3B0aW9ucyA9IGhhbmRsZXI7XG4gICAgaGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlcjtcbiAgfVxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdO1xuICB9XG4gIHJldHVybiB2bS4kd2F0Y2goZXhwT3JGbiwgaGFuZGxlciwgb3B0aW9ucylcbn1cblxuZnVuY3Rpb24gc3RhdGVNaXhpbiAoVnVlKSB7XG4gIC8vIGZsb3cgc29tZWhvdyBoYXMgcHJvYmxlbXMgd2l0aCBkaXJlY3RseSBkZWNsYXJlZCBkZWZpbml0aW9uIG9iamVjdFxuICAvLyB3aGVuIHVzaW5nIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgc28gd2UgaGF2ZSB0byBwcm9jZWR1cmFsbHkgYnVpbGQgdXBcbiAgLy8gdGhlIG9iamVjdCBoZXJlLlxuICB2YXIgZGF0YURlZiA9IHt9O1xuICBkYXRhRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfTtcbiAgdmFyIHByb3BzRGVmID0ge307XG4gIHByb3BzRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3Byb3BzIH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZGF0YURlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnQXZvaWQgcmVwbGFjaW5nIGluc3RhbmNlIHJvb3QgJGRhdGEuICcgK1xuICAgICAgICAnVXNlIG5lc3RlZCBkYXRhIHByb3BlcnRpZXMgaW5zdGVhZC4nLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH07XG4gICAgcHJvcHNEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcIiRwcm9wcyBpcyByZWFkb25seS5cIiwgdGhpcyk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRkYXRhJywgZGF0YURlZik7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHByb3BzJywgcHJvcHNEZWYpO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHNldCA9IHNldDtcbiAgVnVlLnByb3RvdHlwZS4kZGVsZXRlID0gZGVsO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHdhdGNoID0gZnVuY3Rpb24gKFxuICAgIGV4cE9yRm4sXG4gICAgY2IsXG4gICAgb3B0aW9uc1xuICApIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KGNiKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKVxuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnVzZXIgPSB0cnVlO1xuICAgIHZhciB3YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5pbW1lZGlhdGUpIHtcbiAgICAgIHZhciBpbmZvID0gXCJjYWxsYmFjayBmb3IgaW1tZWRpYXRlIHdhdGNoZXIgXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIjtcbiAgICAgIHB1c2hUYXJnZXQoKTtcbiAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGNiLCB2bSwgW3dhdGNoZXIudmFsdWVdLCB2bSwgaW5mbyk7XG4gICAgICBwb3BUYXJnZXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVud2F0Y2hGbiAoKSB7XG4gICAgICB3YXRjaGVyLnRlYXJkb3duKCk7XG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIHVpZCQzID0gMDtcblxuZnVuY3Rpb24gaW5pdE1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyBhIHVpZFxuICAgIHZtLl91aWQgPSB1aWQkMysrO1xuXG4gICAgdmFyIHN0YXJ0VGFnLCBlbmRUYWc7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIG1hcmspIHtcbiAgICAgIHN0YXJ0VGFnID0gXCJ2dWUtcGVyZi1zdGFydDpcIiArICh2bS5fdWlkKTtcbiAgICAgIGVuZFRhZyA9IFwidnVlLXBlcmYtZW5kOlwiICsgKHZtLl91aWQpO1xuICAgICAgbWFyayhzdGFydFRhZyk7XG4gICAgfVxuXG4gICAgLy8gYSBmbGFnIHRvIGF2b2lkIHRoaXMgYmVpbmcgb2JzZXJ2ZWRcbiAgICB2bS5faXNWdWUgPSB0cnVlO1xuICAgIC8vIG1lcmdlIG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLl9pc0NvbXBvbmVudCkge1xuICAgICAgLy8gb3B0aW1pemUgaW50ZXJuYWwgY29tcG9uZW50IGluc3RhbnRpYXRpb25cbiAgICAgIC8vIHNpbmNlIGR5bmFtaWMgb3B0aW9ucyBtZXJnaW5nIGlzIHByZXR0eSBzbG93LCBhbmQgbm9uZSBvZiB0aGVcbiAgICAgIC8vIGludGVybmFsIGNvbXBvbmVudCBvcHRpb25zIG5lZWRzIHNwZWNpYWwgdHJlYXRtZW50LlxuICAgICAgaW5pdEludGVybmFsQ29tcG9uZW50KHZtLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uJG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICAgIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnModm0uY29uc3RydWN0b3IpLFxuICAgICAgICBvcHRpb25zIHx8IHt9LFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaW5pdFByb3h5KHZtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgfVxuICAgIC8vIGV4cG9zZSByZWFsIHNlbGZcbiAgICB2bS5fc2VsZiA9IHZtO1xuICAgIGluaXRMaWZlY3ljbGUodm0pO1xuICAgIGluaXRFdmVudHModm0pO1xuICAgIGluaXRSZW5kZXIodm0pO1xuICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlQ3JlYXRlJyk7XG4gICAgaW5pdEluamVjdGlvbnModm0pOyAvLyByZXNvbHZlIGluamVjdGlvbnMgYmVmb3JlIGRhdGEvcHJvcHNcbiAgICBpbml0U3RhdGUodm0pO1xuICAgIGluaXRQcm92aWRlKHZtKTsgLy8gcmVzb2x2ZSBwcm92aWRlIGFmdGVyIGRhdGEvcHJvcHNcbiAgICBjYWxsSG9vayh2bSwgJ2NyZWF0ZWQnKTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICB2bS5fbmFtZSA9IGZvcm1hdENvbXBvbmVudE5hbWUodm0sIGZhbHNlKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgKHZtLl9uYW1lKSArIFwiIGluaXRcIiksIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgIH1cblxuICAgIGlmICh2bS4kb3B0aW9ucy5lbCkge1xuICAgICAgdm0uJG1vdW50KHZtLiRvcHRpb25zLmVsKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRJbnRlcm5hbENvbXBvbmVudCAodm0sIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUodm0uY29uc3RydWN0b3Iub3B0aW9ucyk7XG4gIC8vIGRvaW5nIHRoaXMgYmVjYXVzZSBpdCdzIGZhc3RlciB0aGFuIGR5bmFtaWMgZW51bWVyYXRpb24uXG4gIHZhciBwYXJlbnRWbm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICBvcHRzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBvcHRzLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuXG4gIHZhciB2bm9kZUNvbXBvbmVudE9wdGlvbnMgPSBwYXJlbnRWbm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBvcHRzLnByb3BzRGF0YSA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGE7XG4gIG9wdHMuX3BhcmVudExpc3RlbmVycyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnM7XG4gIG9wdHMuX3JlbmRlckNoaWxkcmVuID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmNoaWxkcmVuO1xuICBvcHRzLl9jb21wb25lbnRUYWcgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMudGFnO1xuXG4gIGlmIChvcHRpb25zLnJlbmRlcikge1xuICAgIG9wdHMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgb3B0cy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZucztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zIChDdG9yKSB7XG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICBpZiAoQ3Rvci5zdXBlcikge1xuICAgIHZhciBzdXBlck9wdGlvbnMgPSByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3Iuc3VwZXIpO1xuICAgIHZhciBjYWNoZWRTdXBlck9wdGlvbnMgPSBDdG9yLnN1cGVyT3B0aW9ucztcbiAgICBpZiAoc3VwZXJPcHRpb25zICE9PSBjYWNoZWRTdXBlck9wdGlvbnMpIHtcbiAgICAgIC8vIHN1cGVyIG9wdGlvbiBjaGFuZ2VkLFxuICAgICAgLy8gbmVlZCB0byByZXNvbHZlIG5ldyBvcHRpb25zLlxuICAgICAgQ3Rvci5zdXBlck9wdGlvbnMgPSBzdXBlck9wdGlvbnM7XG4gICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGxhdGUtbW9kaWZpZWQvYXR0YWNoZWQgb3B0aW9ucyAoIzQ5NzYpXG4gICAgICB2YXIgbW9kaWZpZWRPcHRpb25zID0gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyhDdG9yKTtcbiAgICAgIC8vIHVwZGF0ZSBiYXNlIGV4dGVuZCBvcHRpb25zXG4gICAgICBpZiAobW9kaWZpZWRPcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZChDdG9yLmV4dGVuZE9wdGlvbnMsIG1vZGlmaWVkT3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHN1cGVyT3B0aW9ucywgQ3Rvci5leHRlbmRPcHRpb25zKTtcbiAgICAgIGlmIChvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW29wdGlvbnMubmFtZV0gPSBDdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTW9kaWZpZWRPcHRpb25zIChDdG9yKSB7XG4gIHZhciBtb2RpZmllZDtcbiAgdmFyIGxhdGVzdCA9IEN0b3Iub3B0aW9ucztcbiAgdmFyIHNlYWxlZCA9IEN0b3Iuc2VhbGVkT3B0aW9ucztcbiAgZm9yICh2YXIga2V5IGluIGxhdGVzdCkge1xuICAgIGlmIChsYXRlc3Rba2V5XSAhPT0gc2VhbGVkW2tleV0pIHtcbiAgICAgIGlmICghbW9kaWZpZWQpIHsgbW9kaWZpZWQgPSB7fTsgfVxuICAgICAgbW9kaWZpZWRba2V5XSA9IGxhdGVzdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kaWZpZWRcbn1cblxuZnVuY3Rpb24gVnVlIChvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgISh0aGlzIGluc3RhbmNlb2YgVnVlKVxuICApIHtcbiAgICB3YXJuKCdWdWUgaXMgYSBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkJyk7XG4gIH1cbiAgdGhpcy5faW5pdChvcHRpb25zKTtcbn1cblxuaW5pdE1peGluKFZ1ZSk7XG5zdGF0ZU1peGluKFZ1ZSk7XG5ldmVudHNNaXhpbihWdWUpO1xubGlmZWN5Y2xlTWl4aW4oVnVlKTtcbnJlbmRlck1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0VXNlIChWdWUpIHtcbiAgVnVlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgaW5zdGFsbGVkUGx1Z2lucyA9ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zIHx8ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zID0gW10pKTtcbiAgICBpZiAoaW5zdGFsbGVkUGx1Z2lucy5pbmRleE9mKHBsdWdpbikgPiAtMSkge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvLyBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICBhcmdzLnVuc2hpZnQodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBwbHVnaW4uaW5zdGFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgaW5zdGFsbGVkUGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgcmV0dXJuIHRoaXNcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRNaXhpbiQxIChWdWUpIHtcbiAgVnVlLm1peGluID0gZnVuY3Rpb24gKG1peGluKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgbWl4aW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXh0ZW5kIChWdWUpIHtcbiAgLyoqXG4gICAqIEVhY2ggaW5zdGFuY2UgY29uc3RydWN0b3IsIGluY2x1ZGluZyBWdWUsIGhhcyBhIHVuaXF1ZVxuICAgKiBjaWQuIFRoaXMgZW5hYmxlcyB1cyB0byBjcmVhdGUgd3JhcHBlZCBcImNoaWxkXG4gICAqIGNvbnN0cnVjdG9yc1wiIGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlIGFuZCBjYWNoZSB0aGVtLlxuICAgKi9cbiAgVnVlLmNpZCA9IDA7XG4gIHZhciBjaWQgPSAxO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBpbmhlcml0YW5jZVxuICAgKi9cbiAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbmRPcHRpb25zKSB7XG4gICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XG4gICAgdmFyIFN1cGVyID0gdGhpcztcbiAgICB2YXIgU3VwZXJJZCA9IFN1cGVyLmNpZDtcbiAgICB2YXIgY2FjaGVkQ3RvcnMgPSBleHRlbmRPcHRpb25zLl9DdG9yIHx8IChleHRlbmRPcHRpb25zLl9DdG9yID0ge30pO1xuICAgIGlmIChjYWNoZWRDdG9yc1tTdXBlcklkXSkge1xuICAgICAgcmV0dXJuIGNhY2hlZEN0b3JzW1N1cGVySWRdXG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBleHRlbmRPcHRpb25zLm5hbWUgfHwgU3VwZXIub3B0aW9ucy5uYW1lO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG5hbWUpIHtcbiAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgU3ViID0gZnVuY3Rpb24gVnVlQ29tcG9uZW50IChvcHRpb25zKSB7XG4gICAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgIH07XG4gICAgU3ViLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3VwZXIucHJvdG90eXBlKTtcbiAgICBTdWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ViO1xuICAgIFN1Yi5jaWQgPSBjaWQrKztcbiAgICBTdWIub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgIFN1cGVyLm9wdGlvbnMsXG4gICAgICBleHRlbmRPcHRpb25zXG4gICAgKTtcbiAgICBTdWJbJ3N1cGVyJ10gPSBTdXBlcjtcblxuICAgIC8vIEZvciBwcm9wcyBhbmQgY29tcHV0ZWQgcHJvcGVydGllcywgd2UgZGVmaW5lIHRoZSBwcm94eSBnZXR0ZXJzIG9uXG4gICAgLy8gdGhlIFZ1ZSBpbnN0YW5jZXMgYXQgZXh0ZW5zaW9uIHRpbWUsIG9uIHRoZSBleHRlbmRlZCBwcm90b3R5cGUuIFRoaXNcbiAgICAvLyBhdm9pZHMgT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxzIGZvciBlYWNoIGluc3RhbmNlIGNyZWF0ZWQuXG4gICAgaWYgKFN1Yi5vcHRpb25zLnByb3BzKSB7XG4gICAgICBpbml0UHJvcHMkMShTdWIpO1xuICAgIH1cbiAgICBpZiAoU3ViLm9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgIGluaXRDb21wdXRlZCQxKFN1Yik7XG4gICAgfVxuXG4gICAgLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb24vbWl4aW4vcGx1Z2luIHVzYWdlXG4gICAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZDtcbiAgICBTdWIubWl4aW4gPSBTdXBlci5taXhpbjtcbiAgICBTdWIudXNlID0gU3VwZXIudXNlO1xuXG4gICAgLy8gY3JlYXRlIGFzc2V0IHJlZ2lzdGVycywgc28gZXh0ZW5kZWQgY2xhc3Nlc1xuICAgIC8vIGNhbiBoYXZlIHRoZWlyIHByaXZhdGUgYXNzZXRzIHRvby5cbiAgICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBTdWJbdHlwZV0gPSBTdXBlclt0eXBlXTtcbiAgICB9KTtcbiAgICAvLyBlbmFibGUgcmVjdXJzaXZlIHNlbGYtbG9va3VwXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIFN1Yi5vcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBTdWI7XG4gICAgfVxuXG4gICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgc3VwZXIgb3B0aW9ucyBhdCBleHRlbnNpb24gdGltZS5cbiAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxuICAgIC8vIGJlZW4gdXBkYXRlZC5cbiAgICBTdWIuc3VwZXJPcHRpb25zID0gU3VwZXIub3B0aW9ucztcbiAgICBTdWIuZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnM7XG4gICAgU3ViLnNlYWxlZE9wdGlvbnMgPSBleHRlbmQoe30sIFN1Yi5vcHRpb25zKTtcblxuICAgIC8vIGNhY2hlIGNvbnN0cnVjdG9yXG4gICAgY2FjaGVkQ3RvcnNbU3VwZXJJZF0gPSBTdWI7XG4gICAgcmV0dXJuIFN1YlxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMkMSAoQ29tcCkge1xuICB2YXIgcHJvcHMgPSBDb21wLm9wdGlvbnMucHJvcHM7XG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIHByb3h5KENvbXAucHJvdG90eXBlLCBcIl9wcm9wc1wiLCBrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCQxIChDb21wKSB7XG4gIHZhciBjb21wdXRlZCA9IENvbXAub3B0aW9ucy5jb21wdXRlZDtcbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgZGVmaW5lQ29tcHV0ZWQoQ29tcC5wcm90b3R5cGUsIGtleSwgY29tcHV0ZWRba2V5XSk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRBc3NldFJlZ2lzdGVycyAoVnVlKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMuXG4gICAqL1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlW3R5cGVdID0gZnVuY3Rpb24gKFxuICAgICAgaWQsXG4gICAgICBkZWZpbml0aW9uXG4gICAgKSB7XG4gICAgICBpZiAoIWRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlID09PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdjb21wb25lbnQnICYmIGlzUGxhaW5PYmplY3QoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBkZWZpbml0aW9uLm5hbWUgfHwgaWQ7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHRoaXMub3B0aW9ucy5fYmFzZS5leHRlbmQoZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnICYmIHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHsgYmluZDogZGVmaW5pdGlvbiwgdXBkYXRlOiBkZWZpbml0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uXG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qICAqL1xuXG5cblxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUgKG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpXG59XG5cbmZ1bmN0aW9uIG1hdGNoZXMgKHBhdHRlcm4sIG5hbWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi5pbmRleE9mKG5hbWUpID4gLTFcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGF0dGVybi5zcGxpdCgnLCcpLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKGlzUmVnRXhwKHBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChuYW1lKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlIChrZWVwQWxpdmVJbnN0YW5jZSwgZmlsdGVyKSB7XG4gIHZhciBjYWNoZSA9IGtlZXBBbGl2ZUluc3RhbmNlLmNhY2hlO1xuICB2YXIga2V5cyA9IGtlZXBBbGl2ZUluc3RhbmNlLmtleXM7XG4gIHZhciBfdm5vZGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5fdm5vZGU7XG4gIGZvciAodmFyIGtleSBpbiBjYWNoZSkge1xuICAgIHZhciBlbnRyeSA9IGNhY2hlW2tleV07XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICB2YXIgbmFtZSA9IGVudHJ5Lm5hbWU7XG4gICAgICBpZiAobmFtZSAmJiAhZmlsdGVyKG5hbWUpKSB7XG4gICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5LCBrZXlzLCBfdm5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlRW50cnkgKFxuICBjYWNoZSxcbiAga2V5LFxuICBrZXlzLFxuICBjdXJyZW50XG4pIHtcbiAgdmFyIGVudHJ5ID0gY2FjaGVba2V5XTtcbiAgaWYgKGVudHJ5ICYmICghY3VycmVudCB8fCBlbnRyeS50YWcgIT09IGN1cnJlbnQudGFnKSkge1xuICAgIGVudHJ5LmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gIH1cbiAgY2FjaGVba2V5XSA9IG51bGw7XG4gIHJlbW92ZShrZXlzLCBrZXkpO1xufVxuXG52YXIgcGF0dGVyblR5cGVzID0gW1N0cmluZywgUmVnRXhwLCBBcnJheV07XG5cbnZhciBLZWVwQWxpdmUgPSB7XG4gIG5hbWU6ICdrZWVwLWFsaXZlJyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBpbmNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgZXhjbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIG1heDogW1N0cmluZywgTnVtYmVyXVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjYWNoZVZOb2RlOiBmdW5jdGlvbiBjYWNoZVZOb2RlKCkge1xuICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICB2YXIgY2FjaGUgPSByZWYuY2FjaGU7XG4gICAgICB2YXIga2V5cyA9IHJlZi5rZXlzO1xuICAgICAgdmFyIHZub2RlVG9DYWNoZSA9IHJlZi52bm9kZVRvQ2FjaGU7XG4gICAgICB2YXIga2V5VG9DYWNoZSA9IHJlZi5rZXlUb0NhY2hlO1xuICAgICAgaWYgKHZub2RlVG9DYWNoZSkge1xuICAgICAgICB2YXIgdGFnID0gdm5vZGVUb0NhY2hlLnRhZztcbiAgICAgICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGVUb0NhY2hlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IHZub2RlVG9DYWNoZS5jb21wb25lbnRPcHRpb25zO1xuICAgICAgICBjYWNoZVtrZXlUb0NhY2hlXSA9IHtcbiAgICAgICAgICBuYW1lOiBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpLFxuICAgICAgICAgIHRhZzogdGFnLFxuICAgICAgICAgIGNvbXBvbmVudEluc3RhbmNlOiBjb21wb25lbnRJbnN0YW5jZSxcbiAgICAgICAgfTtcbiAgICAgICAga2V5cy5wdXNoKGtleVRvQ2FjaGUpO1xuICAgICAgICAvLyBwcnVuZSBvbGRlc3QgZW50cnlcbiAgICAgICAgaWYgKHRoaXMubWF4ICYmIGtleXMubGVuZ3RoID4gcGFyc2VJbnQodGhpcy5tYXgpKSB7XG4gICAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXlzWzBdLCBrZXlzLCB0aGlzLl92bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52bm9kZVRvQ2FjaGUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgfSxcblxuICBkZXN0cm95ZWQ6IGZ1bmN0aW9uIGRlc3Ryb3llZCAoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIHBydW5lQ2FjaGVFbnRyeSh0aGlzLmNhY2hlLCBrZXksIHRoaXMua2V5cyk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy5jYWNoZVZOb2RlKCk7XG4gICAgdGhpcy4kd2F0Y2goJ2luY2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gICAgdGhpcy4kd2F0Y2goJ2V4Y2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICFtYXRjaGVzKHZhbCwgbmFtZSk7IH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uIHVwZGF0ZWQgKCkge1xuICAgIHRoaXMuY2FjaGVWTm9kZSgpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgc2xvdCA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgdmFyIHZub2RlID0gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZChzbG90KTtcbiAgICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgaWYgKGNvbXBvbmVudE9wdGlvbnMpIHtcbiAgICAgIC8vIGNoZWNrIHBhdHRlcm5cbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjb21wb25lbnRPcHRpb25zKTtcbiAgICAgIHZhciByZWYgPSB0aGlzO1xuICAgICAgdmFyIGluY2x1ZGUgPSByZWYuaW5jbHVkZTtcbiAgICAgIHZhciBleGNsdWRlID0gcmVmLmV4Y2x1ZGU7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIG5vdCBpbmNsdWRlZFxuICAgICAgICAoaW5jbHVkZSAmJiAoIW5hbWUgfHwgIW1hdGNoZXMoaW5jbHVkZSwgbmFtZSkpKSB8fFxuICAgICAgICAvLyBleGNsdWRlZFxuICAgICAgICAoZXhjbHVkZSAmJiBuYW1lICYmIG1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHZub2RlXG4gICAgICB9XG5cbiAgICAgIHZhciByZWYkMSA9IHRoaXM7XG4gICAgICB2YXIgY2FjaGUgPSByZWYkMS5jYWNoZTtcbiAgICAgIHZhciBrZXlzID0gcmVmJDEua2V5cztcbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXkgPT0gbnVsbFxuICAgICAgICAvLyBzYW1lIGNvbnN0cnVjdG9yIG1heSBnZXQgcmVnaXN0ZXJlZCBhcyBkaWZmZXJlbnQgbG9jYWwgY29tcG9uZW50c1xuICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXG4gICAgICAgID8gY29tcG9uZW50T3B0aW9ucy5DdG9yLmNpZCArIChjb21wb25lbnRPcHRpb25zLnRhZyA/IChcIjo6XCIgKyAoY29tcG9uZW50T3B0aW9ucy50YWcpKSA6ICcnKVxuICAgICAgICA6IHZub2RlLmtleTtcbiAgICAgIGlmIChjYWNoZVtrZXldKSB7XG4gICAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY2FjaGVba2V5XS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgLy8gbWFrZSBjdXJyZW50IGtleSBmcmVzaGVzdFxuICAgICAgICByZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWxheSBzZXR0aW5nIHRoZSBjYWNoZSB1bnRpbCB1cGRhdGVcbiAgICAgICAgdGhpcy52bm9kZVRvQ2FjaGUgPSB2bm9kZTtcbiAgICAgICAgdGhpcy5rZXlUb0NhY2hlID0ga2V5O1xuICAgICAgfVxuXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZSB8fCAoc2xvdCAmJiBzbG90WzBdKVxuICB9XG59O1xuXG52YXIgYnVpbHRJbkNvbXBvbmVudHMgPSB7XG4gIEtlZXBBbGl2ZTogS2VlcEFsaXZlXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEdsb2JhbEFQSSAoVnVlKSB7XG4gIC8vIGNvbmZpZ1xuICB2YXIgY29uZmlnRGVmID0ge307XG4gIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWc7IH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uZmlnRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdEbyBub3QgcmVwbGFjZSB0aGUgVnVlLmNvbmZpZyBvYmplY3QsIHNldCBpbmRpdmlkdWFsIGZpZWxkcyBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnY29uZmlnJywgY29uZmlnRGVmKTtcblxuICAvLyBleHBvc2VkIHV0aWwgbWV0aG9kcy5cbiAgLy8gTk9URTogdGhlc2UgYXJlIG5vdCBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkgLSBhdm9pZCByZWx5aW5nIG9uXG4gIC8vIHRoZW0gdW5sZXNzIHlvdSBhcmUgYXdhcmUgb2YgdGhlIHJpc2suXG4gIFZ1ZS51dGlsID0ge1xuICAgIHdhcm46IHdhcm4sXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgbWVyZ2VPcHRpb25zOiBtZXJnZU9wdGlvbnMsXG4gICAgZGVmaW5lUmVhY3RpdmU6IGRlZmluZVJlYWN0aXZlJCQxXG4gIH07XG5cbiAgVnVlLnNldCA9IHNldDtcbiAgVnVlLmRlbGV0ZSA9IGRlbDtcbiAgVnVlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbiAgLy8gMi42IGV4cGxpY2l0IG9ic2VydmFibGUgQVBJXG4gIFZ1ZS5vYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIG9ic2VydmUob2JqKTtcbiAgICByZXR1cm4gb2JqXG4gIH07XG5cbiAgVnVlLm9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlLm9wdGlvbnNbdHlwZSArICdzJ10gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9KTtcblxuICAvLyB0aGlzIGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIFwiYmFzZVwiIGNvbnN0cnVjdG9yIHRvIGV4dGVuZCBhbGwgcGxhaW4tb2JqZWN0XG4gIC8vIGNvbXBvbmVudHMgd2l0aCBpbiBXZWV4J3MgbXVsdGktaW5zdGFuY2Ugc2NlbmFyaW9zLlxuICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcblxuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgYnVpbHRJbkNvbXBvbmVudHMpO1xuXG4gIGluaXRVc2UoVnVlKTtcbiAgaW5pdE1peGluJDEoVnVlKTtcbiAgaW5pdEV4dGVuZChWdWUpO1xuICBpbml0QXNzZXRSZWdpc3RlcnMoVnVlKTtcbn1cblxuaW5pdEdsb2JhbEFQSShWdWUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRpc1NlcnZlcicsIHtcbiAgZ2V0OiBpc1NlcnZlclJlbmRlcmluZ1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHNzckNvbnRleHQnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiB0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0XG4gIH1cbn0pO1xuXG4vLyBleHBvc2UgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgZm9yIHNzciBydW50aW1lIGhlbHBlciBpbnN0YWxsYXRpb25cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCcsIHtcbiAgdmFsdWU6IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0XG59KTtcblxuVnVlLnZlcnNpb24gPSAnMi42LjE0JztcblxuLyogICovXG5cbi8vIHRoZXNlIGFyZSByZXNlcnZlZCBmb3Igd2ViIGJlY2F1c2UgdGhleSBhcmUgZGlyZWN0bHkgY29tcGlsZWQgYXdheVxuLy8gZHVyaW5nIHRlbXBsYXRlIGNvbXBpbGF0aW9uXG52YXIgaXNSZXNlcnZlZEF0dHIgPSBtYWtlTWFwKCdzdHlsZSxjbGFzcycpO1xuXG4vLyBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIHVzaW5nIHByb3BzIGZvciBiaW5kaW5nXG52YXIgYWNjZXB0VmFsdWUgPSBtYWtlTWFwKCdpbnB1dCx0ZXh0YXJlYSxvcHRpb24sc2VsZWN0LHByb2dyZXNzJyk7XG52YXIgbXVzdFVzZVByb3AgPSBmdW5jdGlvbiAodGFnLCB0eXBlLCBhdHRyKSB7XG4gIHJldHVybiAoXG4gICAgKGF0dHIgPT09ICd2YWx1ZScgJiYgYWNjZXB0VmFsdWUodGFnKSkgJiYgdHlwZSAhPT0gJ2J1dHRvbicgfHxcbiAgICAoYXR0ciA9PT0gJ3NlbGVjdGVkJyAmJiB0YWcgPT09ICdvcHRpb24nKSB8fFxuICAgIChhdHRyID09PSAnY2hlY2tlZCcgJiYgdGFnID09PSAnaW5wdXQnKSB8fFxuICAgIChhdHRyID09PSAnbXV0ZWQnICYmIHRhZyA9PT0gJ3ZpZGVvJylcbiAgKVxufTtcblxudmFyIGlzRW51bWVyYXRlZEF0dHIgPSBtYWtlTWFwKCdjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2snKTtcblxudmFyIGlzVmFsaWRDb250ZW50RWRpdGFibGVWYWx1ZSA9IG1ha2VNYXAoJ2V2ZW50cyxjYXJldCx0eXBpbmcscGxhaW50ZXh0LW9ubHknKTtcblxudmFyIGNvbnZlcnRFbnVtZXJhdGVkVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkgfHwgdmFsdWUgPT09ICdmYWxzZSdcbiAgICA/ICdmYWxzZSdcbiAgICAvLyBhbGxvdyBhcmJpdHJhcnkgc3RyaW5nIHZhbHVlIGZvciBjb250ZW50ZWRpdGFibGVcbiAgICA6IGtleSA9PT0gJ2NvbnRlbnRlZGl0YWJsZScgJiYgaXNWYWxpZENvbnRlbnRFZGl0YWJsZVZhbHVlKHZhbHVlKVxuICAgICAgPyB2YWx1ZVxuICAgICAgOiAndHJ1ZSdcbn07XG5cbnZhciBpc0Jvb2xlYW5BdHRyID0gbWFrZU1hcChcbiAgJ2FsbG93ZnVsbHNjcmVlbixhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY2hlY2tlZCxjb21wYWN0LGNvbnRyb2xzLGRlY2xhcmUsJyArXG4gICdkZWZhdWx0LGRlZmF1bHRjaGVja2VkLGRlZmF1bHRtdXRlZCxkZWZhdWx0c2VsZWN0ZWQsZGVmZXIsZGlzYWJsZWQsJyArXG4gICdlbmFibGVkLGZvcm1ub3ZhbGlkYXRlLGhpZGRlbixpbmRldGVybWluYXRlLGluZXJ0LGlzbWFwLGl0ZW1zY29wZSxsb29wLG11bHRpcGxlLCcgK1xuICAnbXV0ZWQsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm92YWxpZGF0ZSxub3dyYXAsb3BlbixwYXVzZW9uZXhpdCxyZWFkb25seSwnICtcbiAgJ3JlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxzZWxlY3RlZCxzb3J0YWJsZSwnICtcbiAgJ3RydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGUnXG4pO1xuXG52YXIgeGxpbmtOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcblxudmFyIGlzWGxpbmsgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5jaGFyQXQoNSkgPT09ICc6JyAmJiBuYW1lLnNsaWNlKDAsIDUpID09PSAneGxpbmsnXG59O1xuXG52YXIgZ2V0WGxpbmtQcm9wID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIGlzWGxpbmsobmFtZSkgPyBuYW1lLnNsaWNlKDYsIG5hbWUubGVuZ3RoKSA6ICcnXG59O1xuXG52YXIgaXNGYWxzeUF0dHJWYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsIHx8IHZhbCA9PT0gZmFsc2Vcbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBnZW5DbGFzc0ZvclZub2RlICh2bm9kZSkge1xuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gIHZhciBwYXJlbnROb2RlID0gdm5vZGU7XG4gIHZhciBjaGlsZE5vZGUgPSB2bm9kZTtcbiAgd2hpbGUgKGlzRGVmKGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcbiAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgIGlmIChjaGlsZE5vZGUgJiYgY2hpbGROb2RlLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBtZXJnZUNsYXNzRGF0YShjaGlsZE5vZGUuZGF0YSwgZGF0YSk7XG4gICAgfVxuICB9XG4gIHdoaWxlIChpc0RlZihwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnQpKSB7XG4gICAgaWYgKHBhcmVudE5vZGUgJiYgcGFyZW50Tm9kZS5kYXRhKSB7XG4gICAgICBkYXRhID0gbWVyZ2VDbGFzc0RhdGEoZGF0YSwgcGFyZW50Tm9kZS5kYXRhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlbmRlckNsYXNzKGRhdGEuc3RhdGljQ2xhc3MsIGRhdGEuY2xhc3MpXG59XG5cbmZ1bmN0aW9uIG1lcmdlQ2xhc3NEYXRhIChjaGlsZCwgcGFyZW50KSB7XG4gIHJldHVybiB7XG4gICAgc3RhdGljQ2xhc3M6IGNvbmNhdChjaGlsZC5zdGF0aWNDbGFzcywgcGFyZW50LnN0YXRpY0NsYXNzKSxcbiAgICBjbGFzczogaXNEZWYoY2hpbGQuY2xhc3MpXG4gICAgICA/IFtjaGlsZC5jbGFzcywgcGFyZW50LmNsYXNzXVxuICAgICAgOiBwYXJlbnQuY2xhc3NcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJDbGFzcyAoXG4gIHN0YXRpY0NsYXNzLFxuICBkeW5hbWljQ2xhc3Ncbikge1xuICBpZiAoaXNEZWYoc3RhdGljQ2xhc3MpIHx8IGlzRGVmKGR5bmFtaWNDbGFzcykpIHtcbiAgICByZXR1cm4gY29uY2F0KHN0YXRpY0NsYXNzLCBzdHJpbmdpZnlDbGFzcyhkeW5hbWljQ2xhc3MpKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgcmV0dXJuIGEgPyBiID8gKGEgKyAnICcgKyBiKSA6IGEgOiAoYiB8fCAnJylcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5Q2xhc3MgKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlBcnJheSh2YWx1ZSlcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeU9iamVjdCh2YWx1ZSlcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlBcnJheSAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICB2YXIgc3RyaW5naWZpZWQ7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGlzRGVmKHN0cmluZ2lmaWVkID0gc3RyaW5naWZ5Q2xhc3ModmFsdWVbaV0pKSAmJiBzdHJpbmdpZmllZCAhPT0gJycpIHtcbiAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgcmVzICs9IHN0cmluZ2lmaWVkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeU9iamVjdCAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgbmFtZXNwYWNlTWFwID0ge1xuICBzdmc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gIG1hdGg6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJ1xufTtcblxudmFyIGlzSFRNTFRhZyA9IG1ha2VNYXAoXG4gICdodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSwnICtcbiAgJ2FkZHJlc3MsYXJ0aWNsZSxhc2lkZSxmb290ZXIsaGVhZGVyLGgxLGgyLGgzLGg0LGg1LGg2LGhncm91cCxuYXYsc2VjdGlvbiwnICtcbiAgJ2RpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxwaWN0dXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLCcgK1xuICAnYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ0YyxydWJ5LCcgK1xuICAncyxzYW1wLHNtYWxsLHNwYW4sc3Ryb25nLHN1YixzdXAsdGltZSx1LHZhcix3YnIsYXJlYSxhdWRpbyxtYXAsdHJhY2ssdmlkZW8sJyArXG4gICdlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucywnICtcbiAgJ2NhcHRpb24sY29sLGNvbGdyb3VwLHRhYmxlLHRoZWFkLHRib2R5LHRkLHRoLHRyLCcgK1xuICAnYnV0dG9uLGRhdGFsaXN0LGZpZWxkc2V0LGZvcm0saW5wdXQsbGFiZWwsbGVnZW5kLG1ldGVyLG9wdGdyb3VwLG9wdGlvbiwnICtcbiAgJ291dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsJyArXG4gICdkZXRhaWxzLGRpYWxvZyxtZW51LG1lbnVpdGVtLHN1bW1hcnksJyArXG4gICdjb250ZW50LGVsZW1lbnQsc2hhZG93LHRlbXBsYXRlLGJsb2NrcXVvdGUsaWZyYW1lLHRmb290J1xuKTtcblxuLy8gdGhpcyBtYXAgaXMgaW50ZW50aW9uYWxseSBzZWxlY3RpdmUsIG9ubHkgY292ZXJpbmcgU1ZHIGVsZW1lbnRzIHRoYXQgbWF5XG4vLyBjb250YWluIGNoaWxkIGVsZW1lbnRzLlxudmFyIGlzU1ZHID0gbWFrZU1hcChcbiAgJ3N2ZyxhbmltYXRlLGNpcmNsZSxjbGlwcGF0aCxjdXJzb3IsZGVmcyxkZXNjLGVsbGlwc2UsZmlsdGVyLGZvbnQtZmFjZSwnICtcbiAgJ2ZvcmVpZ25vYmplY3QsZyxnbHlwaCxpbWFnZSxsaW5lLG1hcmtlcixtYXNrLG1pc3NpbmctZ2x5cGgscGF0aCxwYXR0ZXJuLCcgK1xuICAncG9seWdvbixwb2x5bGluZSxyZWN0LHN3aXRjaCxzeW1ib2wsdGV4dCx0ZXh0cGF0aCx0c3Bhbix1c2UsdmlldycsXG4gIHRydWVcbik7XG5cbnZhciBpc1Jlc2VydmVkVGFnID0gZnVuY3Rpb24gKHRhZykge1xuICByZXR1cm4gaXNIVE1MVGFnKHRhZykgfHwgaXNTVkcodGFnKVxufTtcblxuZnVuY3Rpb24gZ2V0VGFnTmFtZXNwYWNlICh0YWcpIHtcbiAgaWYgKGlzU1ZHKHRhZykpIHtcbiAgICByZXR1cm4gJ3N2ZydcbiAgfVxuICAvLyBiYXNpYyBzdXBwb3J0IGZvciBNYXRoTUxcbiAgLy8gbm90ZSBpdCBkb2Vzbid0IHN1cHBvcnQgb3RoZXIgTWF0aE1MIGVsZW1lbnRzIGJlaW5nIGNvbXBvbmVudCByb290c1xuICBpZiAodGFnID09PSAnbWF0aCcpIHtcbiAgICByZXR1cm4gJ21hdGgnXG4gIH1cbn1cblxudmFyIHVua25vd25FbGVtZW50Q2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuZnVuY3Rpb24gaXNVbmtub3duRWxlbWVudCAodGFnKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWluQnJvd3Nlcikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKGlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHRhZyA9IHRhZy50b0xvd2VyQ2FzZSgpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHVua25vd25FbGVtZW50Q2FjaGVbdGFnXSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHVua25vd25FbGVtZW50Q2FjaGVbdGFnXVxuICB9XG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgaWYgKHRhZy5pbmRleE9mKCctJykgPiAtMSkge1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI4MjEwMzY0LzEwNzAyNDRcbiAgICByZXR1cm4gKHVua25vd25FbGVtZW50Q2FjaGVbdGFnXSA9IChcbiAgICAgIGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTFVua25vd25FbGVtZW50IHx8XG4gICAgICBlbC5jb25zdHJ1Y3RvciA9PT0gd2luZG93LkhUTUxFbGVtZW50XG4gICAgKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKHVua25vd25FbGVtZW50Q2FjaGVbdGFnXSA9IC9IVE1MVW5rbm93bkVsZW1lbnQvLnRlc3QoZWwudG9TdHJpbmcoKSkpXG4gIH1cbn1cblxudmFyIGlzVGV4dElucHV0VHlwZSA9IG1ha2VNYXAoJ3RleHQsbnVtYmVyLHBhc3N3b3JkLHNlYXJjaCxlbWFpbCx0ZWwsdXJsJyk7XG5cbi8qICAqL1xuXG4vKipcbiAqIFF1ZXJ5IGFuIGVsZW1lbnQgc2VsZWN0b3IgaWYgaXQncyBub3QgYW4gZWxlbWVudCBhbHJlYWR5LlxuICovXG5mdW5jdGlvbiBxdWVyeSAoZWwpIHtcbiAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICBpZiAoIXNlbGVjdGVkKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdDYW5ub3QgZmluZCBlbGVtZW50OiAnICsgZWxcbiAgICAgICk7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVsXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQkMSAodGFnTmFtZSwgdm5vZGUpIHtcbiAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gIGlmICh0YWdOYW1lICE9PSAnc2VsZWN0Jykge1xuICAgIHJldHVybiBlbG1cbiAgfVxuICAvLyBmYWxzZSBvciBudWxsIHdpbGwgcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgYnV0IHVuZGVmaW5lZCB3aWxsIG5vdFxuICBpZiAodm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLmF0dHJzICYmIHZub2RlLmRhdGEuYXR0cnMubXVsdGlwbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgJ211bHRpcGxlJyk7XG4gIH1cbiAgcmV0dXJuIGVsbVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMgKG5hbWVzcGFjZSwgdGFnTmFtZSkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZU1hcFtuYW1lc3BhY2VdLCB0YWdOYW1lKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSAodGV4dCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dClcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCAodGV4dCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0ZXh0KVxufVxuXG5mdW5jdGlvbiBpbnNlcnRCZWZvcmUgKHBhcmVudE5vZGUsIG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkIChub2RlLCBjaGlsZCkge1xuICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGQgKG5vZGUsIGNoaWxkKSB7XG4gIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnROb2RlIChub2RlKSB7XG4gIHJldHVybiBub2RlLnBhcmVudE5vZGVcbn1cblxuZnVuY3Rpb24gbmV4dFNpYmxpbmcgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUubmV4dFNpYmxpbmdcbn1cblxuZnVuY3Rpb24gdGFnTmFtZSAobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lXG59XG5cbmZ1bmN0aW9uIHNldFRleHRDb250ZW50IChub2RlLCB0ZXh0KSB7XG4gIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZVNjb3BlIChub2RlLCBzY29wZUlkKSB7XG4gIG5vZGUuc2V0QXR0cmlidXRlKHNjb3BlSWQsICcnKTtcbn1cblxudmFyIG5vZGVPcHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnQkMSxcbiAgY3JlYXRlRWxlbWVudE5TOiBjcmVhdGVFbGVtZW50TlMsXG4gIGNyZWF0ZVRleHROb2RlOiBjcmVhdGVUZXh0Tm9kZSxcbiAgY3JlYXRlQ29tbWVudDogY3JlYXRlQ29tbWVudCxcbiAgaW5zZXJ0QmVmb3JlOiBpbnNlcnRCZWZvcmUsXG4gIHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcbiAgYXBwZW5kQ2hpbGQ6IGFwcGVuZENoaWxkLFxuICBwYXJlbnROb2RlOiBwYXJlbnROb2RlLFxuICBuZXh0U2libGluZzogbmV4dFNpYmxpbmcsXG4gIHRhZ05hbWU6IHRhZ05hbWUsXG4gIHNldFRleHRDb250ZW50OiBzZXRUZXh0Q29udGVudCxcbiAgc2V0U3R5bGVTY29wZTogc2V0U3R5bGVTY29wZVxufSk7XG5cbi8qICAqL1xuXG52YXIgcmVmID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSAoXywgdm5vZGUpIHtcbiAgICByZWdpc3RlclJlZih2bm9kZSk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBpZiAob2xkVm5vZGUuZGF0YS5yZWYgIT09IHZub2RlLmRhdGEucmVmKSB7XG4gICAgICByZWdpc3RlclJlZihvbGRWbm9kZSwgdHJ1ZSk7XG4gICAgICByZWdpc3RlclJlZih2bm9kZSk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95ICh2bm9kZSkge1xuICAgIHJlZ2lzdGVyUmVmKHZub2RlLCB0cnVlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJSZWYgKHZub2RlLCBpc1JlbW92YWwpIHtcbiAgdmFyIGtleSA9IHZub2RlLmRhdGEucmVmO1xuICBpZiAoIWlzRGVmKGtleSkpIHsgcmV0dXJuIH1cblxuICB2YXIgdm0gPSB2bm9kZS5jb250ZXh0O1xuICB2YXIgcmVmID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgfHwgdm5vZGUuZWxtO1xuICB2YXIgcmVmcyA9IHZtLiRyZWZzO1xuICBpZiAoaXNSZW1vdmFsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVmc1trZXldKSkge1xuICAgICAgcmVtb3ZlKHJlZnNba2V5XSwgcmVmKTtcbiAgICB9IGVsc2UgaWYgKHJlZnNba2V5XSA9PT0gcmVmKSB7XG4gICAgICByZWZzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh2bm9kZS5kYXRhLnJlZkluRm9yKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVmc1trZXldKSkge1xuICAgICAgICByZWZzW2tleV0gPSBbcmVmXTtcbiAgICAgIH0gZWxzZSBpZiAocmVmc1trZXldLmluZGV4T2YocmVmKSA8IDApIHtcbiAgICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICAgIHJlZnNba2V5XS5wdXNoKHJlZik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZnNba2V5XSA9IHJlZjtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBWaXJ0dWFsIERPTSBwYXRjaGluZyBhbGdvcml0aG0gYmFzZWQgb24gU25hYmJkb20gYnlcbiAqIFNpbW9uIEZyaWlzIFZpbmR1bSAoQHBhbGRlcGluZClcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3BhbGRlcGluZC9zbmFiYmRvbS9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKlxuICogbW9kaWZpZWQgYnkgRXZhbiBZb3UgKEB5eXg5OTA4MDMpXG4gKlxuICogTm90IHR5cGUtY2hlY2tpbmcgdGhpcyBiZWNhdXNlIHRoaXMgZmlsZSBpcyBwZXJmLWNyaXRpY2FsIGFuZCB0aGUgY29zdFxuICogb2YgbWFraW5nIGZsb3cgdW5kZXJzdGFuZCBpdCBpcyBub3Qgd29ydGggaXQuXG4gKi9cblxudmFyIGVtcHR5Tm9kZSA9IG5ldyBWTm9kZSgnJywge30sIFtdKTtcblxudmFyIGhvb2tzID0gWydjcmVhdGUnLCAnYWN0aXZhdGUnLCAndXBkYXRlJywgJ3JlbW92ZScsICdkZXN0cm95J107XG5cbmZ1bmN0aW9uIHNhbWVWbm9kZSAoYSwgYikge1xuICByZXR1cm4gKFxuICAgIGEua2V5ID09PSBiLmtleSAmJlxuICAgIGEuYXN5bmNGYWN0b3J5ID09PSBiLmFzeW5jRmFjdG9yeSAmJiAoXG4gICAgICAoXG4gICAgICAgIGEudGFnID09PSBiLnRhZyAmJlxuICAgICAgICBhLmlzQ29tbWVudCA9PT0gYi5pc0NvbW1lbnQgJiZcbiAgICAgICAgaXNEZWYoYS5kYXRhKSA9PT0gaXNEZWYoYi5kYXRhKSAmJlxuICAgICAgICBzYW1lSW5wdXRUeXBlKGEsIGIpXG4gICAgICApIHx8IChcbiAgICAgICAgaXNUcnVlKGEuaXNBc3luY1BsYWNlaG9sZGVyKSAmJlxuICAgICAgICBpc1VuZGVmKGIuYXN5bmNGYWN0b3J5LmVycm9yKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5mdW5jdGlvbiBzYW1lSW5wdXRUeXBlIChhLCBiKSB7XG4gIGlmIChhLnRhZyAhPT0gJ2lucHV0JykgeyByZXR1cm4gdHJ1ZSB9XG4gIHZhciBpO1xuICB2YXIgdHlwZUEgPSBpc0RlZihpID0gYS5kYXRhKSAmJiBpc0RlZihpID0gaS5hdHRycykgJiYgaS50eXBlO1xuICB2YXIgdHlwZUIgPSBpc0RlZihpID0gYi5kYXRhKSAmJiBpc0RlZihpID0gaS5hdHRycykgJiYgaS50eXBlO1xuICByZXR1cm4gdHlwZUEgPT09IHR5cGVCIHx8IGlzVGV4dElucHV0VHlwZSh0eXBlQSkgJiYgaXNUZXh0SW5wdXRUeXBlKHR5cGVCKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlUb09sZElkeCAoY2hpbGRyZW4sIGJlZ2luSWR4LCBlbmRJZHgpIHtcbiAgdmFyIGksIGtleTtcbiAgdmFyIG1hcCA9IHt9O1xuICBmb3IgKGkgPSBiZWdpbklkeDsgaSA8PSBlbmRJZHg7ICsraSkge1xuICAgIGtleSA9IGNoaWxkcmVuW2ldLmtleTtcbiAgICBpZiAoaXNEZWYoa2V5KSkgeyBtYXBba2V5XSA9IGk7IH1cbiAgfVxuICByZXR1cm4gbWFwXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdGNoRnVuY3Rpb24gKGJhY2tlbmQpIHtcbiAgdmFyIGksIGo7XG4gIHZhciBjYnMgPSB7fTtcblxuICB2YXIgbW9kdWxlcyA9IGJhY2tlbmQubW9kdWxlcztcbiAgdmFyIG5vZGVPcHMgPSBiYWNrZW5kLm5vZGVPcHM7XG5cbiAgZm9yIChpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgKytpKSB7XG4gICAgY2JzW2hvb2tzW2ldXSA9IFtdO1xuICAgIGZvciAoaiA9IDA7IGogPCBtb2R1bGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICBpZiAoaXNEZWYobW9kdWxlc1tqXVtob29rc1tpXV0pKSB7XG4gICAgICAgIGNic1tob29rc1tpXV0ucHVzaChtb2R1bGVzW2pdW2hvb2tzW2ldXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW1wdHlOb2RlQXQgKGVsbSkge1xuICAgIHJldHVybiBuZXcgVk5vZGUobm9kZU9wcy50YWdOYW1lKGVsbSkudG9Mb3dlckNhc2UoKSwge30sIFtdLCB1bmRlZmluZWQsIGVsbSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJtQ2IgKGNoaWxkRWxtLCBsaXN0ZW5lcnMpIHtcbiAgICBmdW5jdGlvbiByZW1vdmUkJDEgKCkge1xuICAgICAgaWYgKC0tcmVtb3ZlJCQxLmxpc3RlbmVycyA9PT0gMCkge1xuICAgICAgICByZW1vdmVOb2RlKGNoaWxkRWxtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlJCQxLmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICByZXR1cm4gcmVtb3ZlJCQxXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVOb2RlIChlbCkge1xuICAgIHZhciBwYXJlbnQgPSBub2RlT3BzLnBhcmVudE5vZGUoZWwpO1xuICAgIC8vIGVsZW1lbnQgbWF5IGhhdmUgYWxyZWFkeSBiZWVuIHJlbW92ZWQgZHVlIHRvIHYtaHRtbCAvIHYtdGV4dFxuICAgIGlmIChpc0RlZihwYXJlbnQpKSB7XG4gICAgICBub2RlT3BzLnJlbW92ZUNoaWxkKHBhcmVudCwgZWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVW5rbm93bkVsZW1lbnQkJDEgKHZub2RlLCBpblZQcmUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIWluVlByZSAmJlxuICAgICAgIXZub2RlLm5zICYmXG4gICAgICAhKFxuICAgICAgICBjb25maWcuaWdub3JlZEVsZW1lbnRzLmxlbmd0aCAmJlxuICAgICAgICBjb25maWcuaWdub3JlZEVsZW1lbnRzLnNvbWUoZnVuY3Rpb24gKGlnbm9yZSkge1xuICAgICAgICAgIHJldHVybiBpc1JlZ0V4cChpZ25vcmUpXG4gICAgICAgICAgICA/IGlnbm9yZS50ZXN0KHZub2RlLnRhZylcbiAgICAgICAgICAgIDogaWdub3JlID09PSB2bm9kZS50YWdcbiAgICAgICAgfSlcbiAgICAgICkgJiZcbiAgICAgIGNvbmZpZy5pc1Vua25vd25FbGVtZW50KHZub2RlLnRhZylcbiAgICApXG4gIH1cblxuICB2YXIgY3JlYXRpbmdFbG1JblZQcmUgPSAwO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsbSAoXG4gICAgdm5vZGUsXG4gICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLFxuICAgIHBhcmVudEVsbSxcbiAgICByZWZFbG0sXG4gICAgbmVzdGVkLFxuICAgIG93bmVyQXJyYXksXG4gICAgaW5kZXhcbiAgKSB7XG4gICAgaWYgKGlzRGVmKHZub2RlLmVsbSkgJiYgaXNEZWYob3duZXJBcnJheSkpIHtcbiAgICAgIC8vIFRoaXMgdm5vZGUgd2FzIHVzZWQgaW4gYSBwcmV2aW91cyByZW5kZXIhXG4gICAgICAvLyBub3cgaXQncyB1c2VkIGFzIGEgbmV3IG5vZGUsIG92ZXJ3cml0aW5nIGl0cyBlbG0gd291bGQgY2F1c2VcbiAgICAgIC8vIHBvdGVudGlhbCBwYXRjaCBlcnJvcnMgZG93biB0aGUgcm9hZCB3aGVuIGl0J3MgdXNlZCBhcyBhbiBpbnNlcnRpb25cbiAgICAgIC8vIHJlZmVyZW5jZSBub2RlLiBJbnN0ZWFkLCB3ZSBjbG9uZSB0aGUgbm9kZSBvbi1kZW1hbmQgYmVmb3JlIGNyZWF0aW5nXG4gICAgICAvLyBhc3NvY2lhdGVkIERPTSBlbGVtZW50IGZvciBpdC5cbiAgICAgIHZub2RlID0gb3duZXJBcnJheVtpbmRleF0gPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgICB9XG5cbiAgICB2bm9kZS5pc1Jvb3RJbnNlcnQgPSAhbmVzdGVkOyAvLyBmb3IgdHJhbnNpdGlvbiBlbnRlciBjaGVja1xuICAgIGlmIChjcmVhdGVDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgdmFyIHRhZyA9IHZub2RlLnRhZztcbiAgICBpZiAoaXNEZWYodGFnKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5wcmUpIHtcbiAgICAgICAgICBjcmVhdGluZ0VsbUluVlByZSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Vua25vd25FbGVtZW50JCQxKHZub2RlLCBjcmVhdGluZ0VsbUluVlByZSkpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgJ1Vua25vd24gY3VzdG9tIGVsZW1lbnQ6IDwnICsgdGFnICsgJz4gLSBkaWQgeW91ICcgK1xuICAgICAgICAgICAgJ3JlZ2lzdGVyIHRoZSBjb21wb25lbnQgY29ycmVjdGx5PyBGb3IgcmVjdXJzaXZlIGNvbXBvbmVudHMsICcgK1xuICAgICAgICAgICAgJ21ha2Ugc3VyZSB0byBwcm92aWRlIHRoZSBcIm5hbWVcIiBvcHRpb24uJyxcbiAgICAgICAgICAgIHZub2RlLmNvbnRleHRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZub2RlLmVsbSA9IHZub2RlLm5zXG4gICAgICAgID8gbm9kZU9wcy5jcmVhdGVFbGVtZW50TlModm5vZGUubnMsIHRhZylcbiAgICAgICAgOiBub2RlT3BzLmNyZWF0ZUVsZW1lbnQodGFnLCB2bm9kZSk7XG4gICAgICBzZXRTY29wZSh2bm9kZSk7XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAge1xuICAgICAgICBjcmVhdGVDaGlsZHJlbih2bm9kZSwgY2hpbGRyZW4sIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICB9XG4gICAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGF0YSAmJiBkYXRhLnByZSkge1xuICAgICAgICBjcmVhdGluZ0VsbUluVlByZS0tO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNUcnVlKHZub2RlLmlzQ29tbWVudCkpIHtcbiAgICAgIHZub2RlLmVsbSA9IG5vZGVPcHMuY3JlYXRlQ29tbWVudCh2bm9kZS50ZXh0KTtcbiAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm5vZGUuZWxtID0gbm9kZU9wcy5jcmVhdGVUZXh0Tm9kZSh2bm9kZS50ZXh0KTtcbiAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSB7XG4gICAgdmFyIGkgPSB2bm9kZS5kYXRhO1xuICAgIGlmIChpc0RlZihpKSkge1xuICAgICAgdmFyIGlzUmVhY3RpdmF0ZWQgPSBpc0RlZih2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkgJiYgaS5rZWVwQWxpdmU7XG4gICAgICBpZiAoaXNEZWYoaSA9IGkuaG9vaykgJiYgaXNEZWYoaSA9IGkuaW5pdCkpIHtcbiAgICAgICAgaSh2bm9kZSwgZmFsc2UgLyogaHlkcmF0aW5nICovKTtcbiAgICAgIH1cbiAgICAgIC8vIGFmdGVyIGNhbGxpbmcgdGhlIGluaXQgaG9vaywgaWYgdGhlIHZub2RlIGlzIGEgY2hpbGQgY29tcG9uZW50XG4gICAgICAvLyBpdCBzaG91bGQndmUgY3JlYXRlZCBhIGNoaWxkIGluc3RhbmNlIGFuZCBtb3VudGVkIGl0LiB0aGUgY2hpbGRcbiAgICAgIC8vIGNvbXBvbmVudCBhbHNvIGhhcyBzZXQgdGhlIHBsYWNlaG9sZGVyIHZub2RlJ3MgZWxtLlxuICAgICAgLy8gaW4gdGhhdCBjYXNlIHdlIGNhbiBqdXN0IHJldHVybiB0aGUgZWxlbWVudCBhbmQgYmUgZG9uZS5cbiAgICAgIGlmIChpc0RlZih2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcbiAgICAgICAgaW5pdENvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgICAgICBpZiAoaXNUcnVlKGlzUmVhY3RpdmF0ZWQpKSB7XG4gICAgICAgICAgcmVhY3RpdmF0ZUNvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0Q29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgaWYgKGlzRGVmKHZub2RlLmRhdGEucGVuZGluZ0luc2VydCkpIHtcbiAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoLmFwcGx5KGluc2VydGVkVm5vZGVRdWV1ZSwgdm5vZGUuZGF0YS5wZW5kaW5nSW5zZXJ0KTtcbiAgICAgIHZub2RlLmRhdGEucGVuZGluZ0luc2VydCA9IG51bGw7XG4gICAgfVxuICAgIHZub2RlLmVsbSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlLiRlbDtcbiAgICBpZiAoaXNQYXRjaGFibGUodm5vZGUpKSB7XG4gICAgICBpbnZva2VDcmVhdGVIb29rcyh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgIHNldFNjb3BlKHZub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZW1wdHkgY29tcG9uZW50IHJvb3QuXG4gICAgICAvLyBza2lwIGFsbCBlbGVtZW50LXJlbGF0ZWQgbW9kdWxlcyBleGNlcHQgZm9yIHJlZiAoIzM0NTUpXG4gICAgICByZWdpc3RlclJlZih2bm9kZSk7XG4gICAgICAvLyBtYWtlIHN1cmUgdG8gaW52b2tlIHRoZSBpbnNlcnQgaG9va1xuICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2godm5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWN0aXZhdGVDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSB7XG4gICAgdmFyIGk7XG4gICAgLy8gaGFjayBmb3IgIzQzMzk6IGEgcmVhY3RpdmF0ZWQgY29tcG9uZW50IHdpdGggaW5uZXIgdHJhbnNpdGlvblxuICAgIC8vIGRvZXMgbm90IHRyaWdnZXIgYmVjYXVzZSB0aGUgaW5uZXIgbm9kZSdzIGNyZWF0ZWQgaG9va3MgYXJlIG5vdCBjYWxsZWRcbiAgICAvLyBhZ2Fpbi4gSXQncyBub3QgaWRlYWwgdG8gaW52b2x2ZSBtb2R1bGUtc3BlY2lmaWMgbG9naWMgaW4gaGVyZSBidXRcbiAgICAvLyB0aGVyZSBkb2Vzbid0IHNlZW0gdG8gYmUgYSBiZXR0ZXIgd2F5IHRvIGRvIGl0LlxuICAgIHZhciBpbm5lck5vZGUgPSB2bm9kZTtcbiAgICB3aGlsZSAoaW5uZXJOb2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICBpbm5lck5vZGUgPSBpbm5lck5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgaWYgKGlzRGVmKGkgPSBpbm5lck5vZGUuZGF0YSkgJiYgaXNEZWYoaSA9IGkudHJhbnNpdGlvbikpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5hY3RpdmF0ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGNicy5hY3RpdmF0ZVtpXShlbXB0eU5vZGUsIGlubmVyTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2goaW5uZXJOb2RlKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdW5saWtlIGEgbmV3bHkgY3JlYXRlZCBjb21wb25lbnQsXG4gICAgLy8gYSByZWFjdGl2YXRlZCBrZWVwLWFsaXZlIGNvbXBvbmVudCBkb2Vzbid0IGluc2VydCBpdHNlbGZcbiAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnQgKHBhcmVudCwgZWxtLCByZWYkJDEpIHtcbiAgICBpZiAoaXNEZWYocGFyZW50KSkge1xuICAgICAgaWYgKGlzRGVmKHJlZiQkMSkpIHtcbiAgICAgICAgaWYgKG5vZGVPcHMucGFyZW50Tm9kZShyZWYkJDEpID09PSBwYXJlbnQpIHtcbiAgICAgICAgICBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnQsIGVsbSwgcmVmJCQxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZU9wcy5hcHBlbmRDaGlsZChwYXJlbnQsIGVsbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hpbGRyZW4gKHZub2RlLCBjaGlsZHJlbiwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjaGVja0R1cGxpY2F0ZUtleXMoY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICBjcmVhdGVFbG0oY2hpbGRyZW5baV0sIGluc2VydGVkVm5vZGVRdWV1ZSwgdm5vZGUuZWxtLCBudWxsLCB0cnVlLCBjaGlsZHJlbiwgaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZSh2bm9kZS50ZXh0KSkge1xuICAgICAgbm9kZU9wcy5hcHBlbmRDaGlsZCh2bm9kZS5lbG0sIG5vZGVPcHMuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKHZub2RlLnRleHQpKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNQYXRjaGFibGUgKHZub2RlKSB7XG4gICAgd2hpbGUgKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICB2bm9kZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRGVmKHZub2RlLnRhZylcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUNyZWF0ZUhvb2tzICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSQxKSB7XG4gICAgICBjYnMuY3JlYXRlW2kkMV0oZW1wdHlOb2RlLCB2bm9kZSk7XG4gICAgfVxuICAgIGkgPSB2bm9kZS5kYXRhLmhvb2s7IC8vIFJldXNlIHZhcmlhYmxlXG4gICAgaWYgKGlzRGVmKGkpKSB7XG4gICAgICBpZiAoaXNEZWYoaS5jcmVhdGUpKSB7IGkuY3JlYXRlKGVtcHR5Tm9kZSwgdm5vZGUpOyB9XG4gICAgICBpZiAoaXNEZWYoaS5pbnNlcnQpKSB7IGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKTsgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBzY29wZSBpZCBhdHRyaWJ1dGUgZm9yIHNjb3BlZCBDU1MuXG4gIC8vIHRoaXMgaXMgaW1wbGVtZW50ZWQgYXMgYSBzcGVjaWFsIGNhc2UgdG8gYXZvaWQgdGhlIG92ZXJoZWFkXG4gIC8vIG9mIGdvaW5nIHRocm91Z2ggdGhlIG5vcm1hbCBhdHRyaWJ1dGUgcGF0Y2hpbmcgcHJvY2Vzcy5cbiAgZnVuY3Rpb24gc2V0U2NvcGUgKHZub2RlKSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5mblNjb3BlSWQpKSB7XG4gICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFuY2VzdG9yID0gdm5vZGU7XG4gICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgaWYgKGlzRGVmKGkgPSBhbmNlc3Rvci5jb250ZXh0KSAmJiBpc0RlZihpID0gaS4kb3B0aW9ucy5fc2NvcGVJZCkpIHtcbiAgICAgICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICAgICAgfVxuICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZm9yIHNsb3QgY29udGVudCB0aGV5IHNob3VsZCBhbHNvIGdldCB0aGUgc2NvcGVJZCBmcm9tIHRoZSBob3N0IGluc3RhbmNlLlxuICAgIGlmIChpc0RlZihpID0gYWN0aXZlSW5zdGFuY2UpICYmXG4gICAgICBpICE9PSB2bm9kZS5jb250ZXh0ICYmXG4gICAgICBpICE9PSB2bm9kZS5mbkNvbnRleHQgJiZcbiAgICAgIGlzRGVmKGkgPSBpLiRvcHRpb25zLl9zY29wZUlkKVxuICAgICkge1xuICAgICAgbm9kZU9wcy5zZXRTdHlsZVNjb3BlKHZub2RlLmVsbSwgaSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkVm5vZGVzIChwYXJlbnRFbG0sIHJlZkVsbSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4LCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgICBjcmVhdGVFbG0odm5vZGVzW3N0YXJ0SWR4XSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSwgZmFsc2UsIHZub2Rlcywgc3RhcnRJZHgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZURlc3Ryb3lIb29rICh2bm9kZSkge1xuICAgIHZhciBpLCBqO1xuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5kZXN0cm95KSkgeyBpKHZub2RlKTsgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5kZXN0cm95Lmxlbmd0aDsgKytpKSB7IGNicy5kZXN0cm95W2ldKHZub2RlKTsgfVxuICAgIH1cbiAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNoaWxkcmVuKSkge1xuICAgICAgZm9yIChqID0gMDsgaiA8IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIGludm9rZURlc3Ryb3lIb29rKHZub2RlLmNoaWxkcmVuW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVWbm9kZXMgKHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCkge1xuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgIHZhciBjaCA9IHZub2Rlc1tzdGFydElkeF07XG4gICAgICBpZiAoaXNEZWYoY2gpKSB7XG4gICAgICAgIGlmIChpc0RlZihjaC50YWcpKSB7XG4gICAgICAgICAgcmVtb3ZlQW5kSW52b2tlUmVtb3ZlSG9vayhjaCk7XG4gICAgICAgICAgaW52b2tlRGVzdHJveUhvb2soY2gpO1xuICAgICAgICB9IGVsc2UgeyAvLyBUZXh0IG5vZGVcbiAgICAgICAgICByZW1vdmVOb2RlKGNoLmVsbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rICh2bm9kZSwgcm0pIHtcbiAgICBpZiAoaXNEZWYocm0pIHx8IGlzRGVmKHZub2RlLmRhdGEpKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBjYnMucmVtb3ZlLmxlbmd0aCArIDE7XG4gICAgICBpZiAoaXNEZWYocm0pKSB7XG4gICAgICAgIC8vIHdlIGhhdmUgYSByZWN1cnNpdmVseSBwYXNzZWQgZG93biBybSBjYWxsYmFja1xuICAgICAgICAvLyBpbmNyZWFzZSB0aGUgbGlzdGVuZXJzIGNvdW50XG4gICAgICAgIHJtLmxpc3RlbmVycyArPSBsaXN0ZW5lcnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkaXJlY3RseSByZW1vdmluZ1xuICAgICAgICBybSA9IGNyZWF0ZVJtQ2Iodm5vZGUuZWxtLCBsaXN0ZW5lcnMpO1xuICAgICAgfVxuICAgICAgLy8gcmVjdXJzaXZlbHkgaW52b2tlIGhvb2tzIG9uIGNoaWxkIGNvbXBvbmVudCByb290IG5vZGVcbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UpICYmIGlzRGVmKGkgPSBpLl92bm9kZSkgJiYgaXNEZWYoaS5kYXRhKSkge1xuICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGksIHJtKTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMucmVtb3ZlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNicy5yZW1vdmVbaV0odm5vZGUsIHJtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5yZW1vdmUpKSB7XG4gICAgICAgIGkodm5vZGUsIHJtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJtKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZU5vZGUodm5vZGUuZWxtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbiAocGFyZW50RWxtLCBvbGRDaCwgbmV3Q2gsIGluc2VydGVkVm5vZGVRdWV1ZSwgcmVtb3ZlT25seSkge1xuICAgIHZhciBvbGRTdGFydElkeCA9IDA7XG4gICAgdmFyIG5ld1N0YXJ0SWR4ID0gMDtcbiAgICB2YXIgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICB2YXIgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICAgIHZhciBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgdmFyIG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgdmFyIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgICB2YXIgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgIHZhciBvbGRLZXlUb0lkeCwgaWR4SW5PbGQsIHZub2RlVG9Nb3ZlLCByZWZFbG07XG5cbiAgICAvLyByZW1vdmVPbmx5IGlzIGEgc3BlY2lhbCBmbGFnIHVzZWQgb25seSBieSA8dHJhbnNpdGlvbi1ncm91cD5cbiAgICAvLyB0byBlbnN1cmUgcmVtb3ZlZCBlbGVtZW50cyBzdGF5IGluIGNvcnJlY3QgcmVsYXRpdmUgcG9zaXRpb25zXG4gICAgLy8gZHVyaW5nIGxlYXZpbmcgdHJhbnNpdGlvbnNcbiAgICB2YXIgY2FuTW92ZSA9ICFyZW1vdmVPbmx5O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRHVwbGljYXRlS2V5cyhuZXdDaCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCAmJiBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICAgIGlmIChpc1VuZGVmKG9sZFN0YXJ0Vm5vZGUpKSB7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTsgLy8gVm5vZGUgaGFzIGJlZW4gbW92ZWQgbGVmdFxuICAgICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZEVuZFZub2RlKSkge1xuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbmV3Q2gsIG5ld0VuZElkeCk7XG4gICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlKSkgeyAvLyBWbm9kZSBtb3ZlZCByaWdodFxuICAgICAgICBwYXRjaFZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdFbmRJZHgpO1xuICAgICAgICBjYW5Nb3ZlICYmIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIG5vZGVPcHMubmV4dFNpYmxpbmcob2xkRW5kVm5vZGUuZWxtKSk7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHsgLy8gVm5vZGUgbW92ZWQgbGVmdFxuICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRFbmRWbm9kZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1VuZGVmKG9sZEtleVRvSWR4KSkgeyBvbGRLZXlUb0lkeCA9IGNyZWF0ZUtleVRvT2xkSWR4KG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTsgfVxuICAgICAgICBpZHhJbk9sZCA9IGlzRGVmKG5ld1N0YXJ0Vm5vZGUua2V5KVxuICAgICAgICAgID8gb2xkS2V5VG9JZHhbbmV3U3RhcnRWbm9kZS5rZXldXG4gICAgICAgICAgOiBmaW5kSWR4SW5PbGQobmV3U3RhcnRWbm9kZSwgb2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgICAgICBpZiAoaXNVbmRlZihpZHhJbk9sZCkpIHsgLy8gTmV3IGVsZW1lbnRcbiAgICAgICAgICBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBmYWxzZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2bm9kZVRvTW92ZSA9IG9sZENoW2lkeEluT2xkXTtcbiAgICAgICAgICBpZiAoc2FtZVZub2RlKHZub2RlVG9Nb3ZlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAgICAgcGF0Y2hWbm9kZSh2bm9kZVRvTW92ZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICAgICAgb2xkQ2hbaWR4SW5PbGRdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2FuTW92ZSAmJiBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIHZub2RlVG9Nb3ZlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzYW1lIGtleSBidXQgZGlmZmVyZW50IGVsZW1lbnQuIHRyZWF0IGFzIG5ldyBlbGVtZW50XG4gICAgICAgICAgICBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBmYWxzZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICAgIHJlZkVsbSA9IGlzVW5kZWYobmV3Q2hbbmV3RW5kSWR4ICsgMV0pID8gbnVsbCA6IG5ld0NoW25ld0VuZElkeCArIDFdLmVsbTtcbiAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIHJlZkVsbSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgfSBlbHNlIGlmIChuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0R1cGxpY2F0ZUtleXMgKGNoaWxkcmVuKSB7XG4gICAgdmFyIHNlZW5LZXlzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZub2RlID0gY2hpbGRyZW5baV07XG4gICAgICB2YXIga2V5ID0gdm5vZGUua2V5O1xuICAgICAgaWYgKGlzRGVmKGtleSkpIHtcbiAgICAgICAgaWYgKHNlZW5LZXlzW2tleV0pIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgKFwiRHVwbGljYXRlIGtleXMgZGV0ZWN0ZWQ6ICdcIiArIGtleSArIFwiJy4gVGhpcyBtYXkgY2F1c2UgYW4gdXBkYXRlIGVycm9yLlwiKSxcbiAgICAgICAgICAgIHZub2RlLmNvbnRleHRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlZW5LZXlzW2tleV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZElkeEluT2xkIChub2RlLCBvbGRDaCwgc3RhcnQsIGVuZCkge1xuICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IG9sZENoW2ldO1xuICAgICAgaWYgKGlzRGVmKGMpICYmIHNhbWVWbm9kZShub2RlLCBjKSkgeyByZXR1cm4gaSB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGF0Y2hWbm9kZSAoXG4gICAgb2xkVm5vZGUsXG4gICAgdm5vZGUsXG4gICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLFxuICAgIG93bmVyQXJyYXksXG4gICAgaW5kZXgsXG4gICAgcmVtb3ZlT25seVxuICApIHtcbiAgICBpZiAob2xkVm5vZGUgPT09IHZub2RlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNEZWYodm5vZGUuZWxtKSAmJiBpc0RlZihvd25lckFycmF5KSkge1xuICAgICAgLy8gY2xvbmUgcmV1c2VkIHZub2RlXG4gICAgICB2bm9kZSA9IG93bmVyQXJyYXlbaW5kZXhdID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gICAgfVxuXG4gICAgdmFyIGVsbSA9IHZub2RlLmVsbSA9IG9sZFZub2RlLmVsbTtcblxuICAgIGlmIChpc1RydWUob2xkVm5vZGUuaXNBc3luY1BsYWNlaG9sZGVyKSkge1xuICAgICAgaWYgKGlzRGVmKHZub2RlLmFzeW5jRmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgaHlkcmF0ZShvbGRWbm9kZS5lbG0sIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm5vZGUuaXNBc3luY1BsYWNlaG9sZGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHJldXNlIGVsZW1lbnQgZm9yIHN0YXRpYyB0cmVlcy5cbiAgICAvLyBub3RlIHdlIG9ubHkgZG8gdGhpcyBpZiB0aGUgdm5vZGUgaXMgY2xvbmVkIC1cbiAgICAvLyBpZiB0aGUgbmV3IG5vZGUgaXMgbm90IGNsb25lZCBpdCBtZWFucyB0aGUgcmVuZGVyIGZ1bmN0aW9ucyBoYXZlIGJlZW5cbiAgICAvLyByZXNldCBieSB0aGUgaG90LXJlbG9hZC1hcGkgYW5kIHdlIG5lZWQgdG8gZG8gYSBwcm9wZXIgcmUtcmVuZGVyLlxuICAgIGlmIChpc1RydWUodm5vZGUuaXNTdGF0aWMpICYmXG4gICAgICBpc1RydWUob2xkVm5vZGUuaXNTdGF0aWMpICYmXG4gICAgICB2bm9kZS5rZXkgPT09IG9sZFZub2RlLmtleSAmJlxuICAgICAgKGlzVHJ1ZSh2bm9kZS5pc0Nsb25lZCkgfHwgaXNUcnVlKHZub2RlLmlzT25jZSkpXG4gICAgKSB7XG4gICAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IG9sZFZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGk7XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5wcmVwYXRjaCkpIHtcbiAgICAgIGkob2xkVm5vZGUsIHZub2RlKTtcbiAgICB9XG5cbiAgICB2YXIgb2xkQ2ggPSBvbGRWbm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgY2ggPSB2bm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNQYXRjaGFibGUodm5vZGUpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLnVwZGF0ZS5sZW5ndGg7ICsraSkgeyBjYnMudXBkYXRlW2ldKG9sZFZub2RlLCB2bm9kZSk7IH1cbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS51cGRhdGUpKSB7IGkob2xkVm5vZGUsIHZub2RlKTsgfVxuICAgIH1cbiAgICBpZiAoaXNVbmRlZih2bm9kZS50ZXh0KSkge1xuICAgICAgaWYgKGlzRGVmKG9sZENoKSAmJiBpc0RlZihjaCkpIHtcbiAgICAgICAgaWYgKG9sZENoICE9PSBjaCkgeyB1cGRhdGVDaGlsZHJlbihlbG0sIG9sZENoLCBjaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCByZW1vdmVPbmx5KTsgfVxuICAgICAgfSBlbHNlIGlmIChpc0RlZihjaCkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjaGVja0R1cGxpY2F0ZUtleXMoY2gpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0RlZihvbGRWbm9kZS50ZXh0KSkgeyBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgJycpOyB9XG4gICAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIGNoLCAwLCBjaC5sZW5ndGggLSAxLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRDaCkpIHtcbiAgICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpIHtcbiAgICAgICAgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sICcnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9sZFZub2RlLnRleHQgIT09IHZub2RlLnRleHQpIHtcbiAgICAgIG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCB2bm9kZS50ZXh0KTtcbiAgICB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkucG9zdHBhdGNoKSkgeyBpKG9sZFZub2RlLCB2bm9kZSk7IH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VJbnNlcnRIb29rICh2bm9kZSwgcXVldWUsIGluaXRpYWwpIHtcbiAgICAvLyBkZWxheSBpbnNlcnQgaG9va3MgZm9yIGNvbXBvbmVudCByb290IG5vZGVzLCBpbnZva2UgdGhlbSBhZnRlciB0aGVcbiAgICAvLyBlbGVtZW50IGlzIHJlYWxseSBpbnNlcnRlZFxuICAgIGlmIChpc1RydWUoaW5pdGlhbCkgJiYgaXNEZWYodm5vZGUucGFyZW50KSkge1xuICAgICAgdm5vZGUucGFyZW50LmRhdGEucGVuZGluZ0luc2VydCA9IHF1ZXVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHF1ZXVlW2ldLmRhdGEuaG9vay5pbnNlcnQocXVldWVbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBoeWRyYXRpb25CYWlsZWQgPSBmYWxzZTtcbiAgLy8gbGlzdCBvZiBtb2R1bGVzIHRoYXQgY2FuIHNraXAgY3JlYXRlIGhvb2sgZHVyaW5nIGh5ZHJhdGlvbiBiZWNhdXNlIHRoZXlcbiAgLy8gYXJlIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIGNsaWVudCBvciBoYXMgbm8gbmVlZCBmb3IgaW5pdGlhbGl6YXRpb25cbiAgLy8gTm90ZTogc3R5bGUgaXMgZXhjbHVkZWQgYmVjYXVzZSBpdCByZWxpZXMgb24gaW5pdGlhbCBjbG9uZSBmb3IgZnV0dXJlXG4gIC8vIGRlZXAgdXBkYXRlcyAoIzcwNjMpLlxuICB2YXIgaXNSZW5kZXJlZE1vZHVsZSA9IG1ha2VNYXAoJ2F0dHJzLGNsYXNzLHN0YXRpY0NsYXNzLHN0YXRpY1N0eWxlLGtleScpO1xuXG4gIC8vIE5vdGU6IHRoaXMgaXMgYSBicm93c2VyLW9ubHkgZnVuY3Rpb24gc28gd2UgY2FuIGFzc3VtZSBlbG1zIGFyZSBET00gbm9kZXMuXG4gIGZ1bmN0aW9uIGh5ZHJhdGUgKGVsbSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgaW5WUHJlKSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIHRhZyA9IHZub2RlLnRhZztcbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgaW5WUHJlID0gaW5WUHJlIHx8IChkYXRhICYmIGRhdGEucHJlKTtcbiAgICB2bm9kZS5lbG0gPSBlbG07XG5cbiAgICBpZiAoaXNUcnVlKHZub2RlLmlzQ29tbWVudCkgJiYgaXNEZWYodm5vZGUuYXN5bmNGYWN0b3J5KSkge1xuICAgICAgdm5vZGUuaXNBc3luY1BsYWNlaG9sZGVyID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIGFzc2VydCBub2RlIG1hdGNoXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghYXNzZXJ0Tm9kZU1hdGNoKGVsbSwgdm5vZGUsIGluVlByZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmluaXQpKSB7IGkodm5vZGUsIHRydWUgLyogaHlkcmF0aW5nICovKTsgfVxuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcbiAgICAgICAgLy8gY2hpbGQgY29tcG9uZW50LiBpdCBzaG91bGQgaGF2ZSBoeWRyYXRlZCBpdHMgb3duIHRyZWUuXG4gICAgICAgIGluaXRDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0RlZih0YWcpKSB7XG4gICAgICBpZiAoaXNEZWYoY2hpbGRyZW4pKSB7XG4gICAgICAgIC8vIGVtcHR5IGVsZW1lbnQsIGFsbG93IGNsaWVudCB0byBwaWNrIHVwIGFuZCBwb3B1bGF0ZSBjaGlsZHJlblxuICAgICAgICBpZiAoIWVsbS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICBjcmVhdGVDaGlsZHJlbih2bm9kZSwgY2hpbGRyZW4sIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdi1odG1sIGFuZCBkb21Qcm9wczogaW5uZXJIVE1MXG4gICAgICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhKSAmJiBpc0RlZihpID0gaS5kb21Qcm9wcykgJiYgaXNEZWYoaSA9IGkuaW5uZXJIVE1MKSkge1xuICAgICAgICAgICAgaWYgKGkgIT09IGVsbS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgIWh5ZHJhdGlvbkJhaWxlZFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBoeWRyYXRpb25CYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFyZW50OiAnLCBlbG0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignc2VydmVyIGlubmVySFRNTDogJywgaSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdjbGllbnQgaW5uZXJIVE1MOiAnLCBlbG0uaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaXRlcmF0ZSBhbmQgY29tcGFyZSBjaGlsZHJlbiBsaXN0c1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZSA9IGVsbS5maXJzdENoaWxkO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2hpbGRyZW4ubGVuZ3RoOyBpJDErKykge1xuICAgICAgICAgICAgICBpZiAoIWNoaWxkTm9kZSB8fCAhaHlkcmF0ZShjaGlsZE5vZGUsIGNoaWxkcmVuW2kkMV0sIGluc2VydGVkVm5vZGVRdWV1ZSwgaW5WUHJlKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIGNoaWxkTm9kZSBpcyBub3QgbnVsbCwgaXQgbWVhbnMgdGhlIGFjdHVhbCBjaGlsZE5vZGVzIGxpc3QgaXNcbiAgICAgICAgICAgIC8vIGxvbmdlciB0aGFuIHRoZSB2aXJ0dWFsIGNoaWxkcmVuIGxpc3QuXG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuTWF0Y2ggfHwgY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgICFoeWRyYXRpb25CYWlsZWRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaHlkcmF0aW9uQmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BhcmVudDogJywgZWxtKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01pc21hdGNoaW5nIGNoaWxkTm9kZXMgdnMuIFZOb2RlczogJywgZWxtLmNoaWxkTm9kZXMsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgICB2YXIgZnVsbEludm9rZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgIGlmICghaXNSZW5kZXJlZE1vZHVsZShrZXkpKSB7XG4gICAgICAgICAgICBmdWxsSW52b2tlID0gdHJ1ZTtcbiAgICAgICAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmdWxsSW52b2tlICYmIGRhdGFbJ2NsYXNzJ10pIHtcbiAgICAgICAgICAvLyBlbnN1cmUgY29sbGVjdGluZyBkZXBzIGZvciBkZWVwIGNsYXNzIGJpbmRpbmdzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICAgIHRyYXZlcnNlKGRhdGFbJ2NsYXNzJ10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbG0uZGF0YSAhPT0gdm5vZGUudGV4dCkge1xuICAgICAgZWxtLmRhdGEgPSB2bm9kZS50ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gYXNzZXJ0Tm9kZU1hdGNoIChub2RlLCB2bm9kZSwgaW5WUHJlKSB7XG4gICAgaWYgKGlzRGVmKHZub2RlLnRhZykpIHtcbiAgICAgIHJldHVybiB2bm9kZS50YWcuaW5kZXhPZigndnVlLWNvbXBvbmVudCcpID09PSAwIHx8IChcbiAgICAgICAgIWlzVW5rbm93bkVsZW1lbnQkJDEodm5vZGUsIGluVlByZSkgJiZcbiAgICAgICAgdm5vZGUudGFnLnRvTG93ZXJDYXNlKCkgPT09IChub2RlLnRhZ05hbWUgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSAodm5vZGUuaXNDb21tZW50ID8gOCA6IDMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHBhdGNoIChvbGRWbm9kZSwgdm5vZGUsIGh5ZHJhdGluZywgcmVtb3ZlT25seSkge1xuICAgIGlmIChpc1VuZGVmKHZub2RlKSkge1xuICAgICAgaWYgKGlzRGVmKG9sZFZub2RlKSkgeyBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7IH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBpc0luaXRpYWxQYXRjaCA9IGZhbHNlO1xuICAgIHZhciBpbnNlcnRlZFZub2RlUXVldWUgPSBbXTtcblxuICAgIGlmIChpc1VuZGVmKG9sZFZub2RlKSkge1xuICAgICAgLy8gZW1wdHkgbW91bnQgKGxpa2VseSBhcyBjb21wb25lbnQpLCBjcmVhdGUgbmV3IHJvb3QgZWxlbWVudFxuICAgICAgaXNJbml0aWFsUGF0Y2ggPSB0cnVlO1xuICAgICAgY3JlYXRlRWxtKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaXNSZWFsRWxlbWVudCA9IGlzRGVmKG9sZFZub2RlLm5vZGVUeXBlKTtcbiAgICAgIGlmICghaXNSZWFsRWxlbWVudCAmJiBzYW1lVm5vZGUob2xkVm5vZGUsIHZub2RlKSkge1xuICAgICAgICAvLyBwYXRjaCBleGlzdGluZyByb290IG5vZGVcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbnVsbCwgbnVsbCwgcmVtb3ZlT25seSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNSZWFsRWxlbWVudCkge1xuICAgICAgICAgIC8vIG1vdW50aW5nIHRvIGEgcmVhbCBlbGVtZW50XG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBpcyBzZXJ2ZXItcmVuZGVyZWQgY29udGVudCBhbmQgaWYgd2UgY2FuIHBlcmZvcm1cbiAgICAgICAgICAvLyBhIHN1Y2Nlc3NmdWwgaHlkcmF0aW9uLlxuICAgICAgICAgIGlmIChvbGRWbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBvbGRWbm9kZS5oYXNBdHRyaWJ1dGUoU1NSX0FUVFIpKSB7XG4gICAgICAgICAgICBvbGRWbm9kZS5yZW1vdmVBdHRyaWJ1dGUoU1NSX0FUVFIpO1xuICAgICAgICAgICAgaHlkcmF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzVHJ1ZShoeWRyYXRpbmcpKSB7XG4gICAgICAgICAgICBpZiAoaHlkcmF0ZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkpIHtcbiAgICAgICAgICAgICAgaW52b2tlSW5zZXJ0SG9vayh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG9sZFZub2RlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgd2FybihcbiAgICAgICAgICAgICAgICAnVGhlIGNsaWVudC1zaWRlIHJlbmRlcmVkIHZpcnR1YWwgRE9NIHRyZWUgaXMgbm90IG1hdGNoaW5nICcgK1xuICAgICAgICAgICAgICAgICdzZXJ2ZXItcmVuZGVyZWQgY29udGVudC4gVGhpcyBpcyBsaWtlbHkgY2F1c2VkIGJ5IGluY29ycmVjdCAnICtcbiAgICAgICAgICAgICAgICAnSFRNTCBtYXJrdXAsIGZvciBleGFtcGxlIG5lc3RpbmcgYmxvY2stbGV2ZWwgZWxlbWVudHMgaW5zaWRlICcgK1xuICAgICAgICAgICAgICAgICc8cD4sIG9yIG1pc3NpbmcgPHRib2R5Pi4gQmFpbGluZyBoeWRyYXRpb24gYW5kIHBlcmZvcm1pbmcgJyArXG4gICAgICAgICAgICAgICAgJ2Z1bGwgY2xpZW50LXNpZGUgcmVuZGVyLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZWl0aGVyIG5vdCBzZXJ2ZXItcmVuZGVyZWQsIG9yIGh5ZHJhdGlvbiBmYWlsZWQuXG4gICAgICAgICAgLy8gY3JlYXRlIGFuIGVtcHR5IG5vZGUgYW5kIHJlcGxhY2UgaXRcbiAgICAgICAgICBvbGRWbm9kZSA9IGVtcHR5Tm9kZUF0KG9sZFZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlcGxhY2luZyBleGlzdGluZyBlbGVtZW50XG4gICAgICAgIHZhciBvbGRFbG0gPSBvbGRWbm9kZS5lbG07XG4gICAgICAgIHZhciBwYXJlbnRFbG0gPSBub2RlT3BzLnBhcmVudE5vZGUob2xkRWxtKTtcblxuICAgICAgICAvLyBjcmVhdGUgbmV3IG5vZGVcbiAgICAgICAgY3JlYXRlRWxtKFxuICAgICAgICAgIHZub2RlLFxuICAgICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZSxcbiAgICAgICAgICAvLyBleHRyZW1lbHkgcmFyZSBlZGdlIGNhc2U6IGRvIG5vdCBpbnNlcnQgaWYgb2xkIGVsZW1lbnQgaXMgaW4gYVxuICAgICAgICAgIC8vIGxlYXZpbmcgdHJhbnNpdGlvbi4gT25seSBoYXBwZW5zIHdoZW4gY29tYmluaW5nIHRyYW5zaXRpb24gK1xuICAgICAgICAgIC8vIGtlZXAtYWxpdmUgKyBIT0NzLiAoIzQ1OTApXG4gICAgICAgICAgb2xkRWxtLl9sZWF2ZUNiID8gbnVsbCA6IHBhcmVudEVsbSxcbiAgICAgICAgICBub2RlT3BzLm5leHRTaWJsaW5nKG9sZEVsbSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB1cGRhdGUgcGFyZW50IHBsYWNlaG9sZGVyIG5vZGUgZWxlbWVudCwgcmVjdXJzaXZlbHlcbiAgICAgICAgaWYgKGlzRGVmKHZub2RlLnBhcmVudCkpIHtcbiAgICAgICAgICB2YXIgYW5jZXN0b3IgPSB2bm9kZS5wYXJlbnQ7XG4gICAgICAgICAgdmFyIHBhdGNoYWJsZSA9IGlzUGF0Y2hhYmxlKHZub2RlKTtcbiAgICAgICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2JzLmRlc3Ryb3kubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgY2JzLmRlc3Ryb3lbaV0oYW5jZXN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5jZXN0b3IuZWxtID0gdm5vZGUuZWxtO1xuICAgICAgICAgICAgaWYgKHBhdGNoYWJsZSkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBjYnMuY3JlYXRlLmxlbmd0aDsgKytpJDEpIHtcbiAgICAgICAgICAgICAgICBjYnMuY3JlYXRlW2kkMV0oZW1wdHlOb2RlLCBhbmNlc3Rvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gIzY1MTNcbiAgICAgICAgICAgICAgLy8gaW52b2tlIGluc2VydCBob29rcyB0aGF0IG1heSBoYXZlIGJlZW4gbWVyZ2VkIGJ5IGNyZWF0ZSBob29rcy5cbiAgICAgICAgICAgICAgLy8gZS5nLiBmb3IgZGlyZWN0aXZlcyB0aGF0IHVzZXMgdGhlIFwiaW5zZXJ0ZWRcIiBob29rLlxuICAgICAgICAgICAgICB2YXIgaW5zZXJ0ID0gYW5jZXN0b3IuZGF0YS5ob29rLmluc2VydDtcbiAgICAgICAgICAgICAgaWYgKGluc2VydC5tZXJnZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBzdGFydCBhdCBpbmRleCAxIHRvIGF2b2lkIHJlLWludm9raW5nIGNvbXBvbmVudCBtb3VudGVkIGhvb2tcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDIgPSAxOyBpJDIgPCBpbnNlcnQuZm5zLmxlbmd0aDsgaSQyKyspIHtcbiAgICAgICAgICAgICAgICAgIGluc2VydC5mbnNbaSQyXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJSZWYoYW5jZXN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVzdHJveSBvbGQgbm9kZVxuICAgICAgICBpZiAoaXNEZWYocGFyZW50RWxtKSkge1xuICAgICAgICAgIHJlbW92ZVZub2Rlcyhbb2xkVm5vZGVdLCAwLCAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRWbm9kZS50YWcpKSB7XG4gICAgICAgICAgaW52b2tlRGVzdHJveUhvb2sob2xkVm5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW52b2tlSW5zZXJ0SG9vayh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpc0luaXRpYWxQYXRjaCk7XG4gICAgcmV0dXJuIHZub2RlLmVsbVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgZGlyZWN0aXZlcyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVEaXJlY3RpdmVzLFxuICB1cGRhdGU6IHVwZGF0ZURpcmVjdGl2ZXMsXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIHVuYmluZERpcmVjdGl2ZXMgKHZub2RlKSB7XG4gICAgdXBkYXRlRGlyZWN0aXZlcyh2bm9kZSwgZW1wdHlOb2RlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gdXBkYXRlRGlyZWN0aXZlcyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIGlmIChvbGRWbm9kZS5kYXRhLmRpcmVjdGl2ZXMgfHwgdm5vZGUuZGF0YS5kaXJlY3RpdmVzKSB7XG4gICAgX3VwZGF0ZShvbGRWbm9kZSwgdm5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF91cGRhdGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgaXNDcmVhdGUgPSBvbGRWbm9kZSA9PT0gZW1wdHlOb2RlO1xuICB2YXIgaXNEZXN0cm95ID0gdm5vZGUgPT09IGVtcHR5Tm9kZTtcbiAgdmFyIG9sZERpcnMgPSBub3JtYWxpemVEaXJlY3RpdmVzJDEob2xkVm5vZGUuZGF0YS5kaXJlY3RpdmVzLCBvbGRWbm9kZS5jb250ZXh0KTtcbiAgdmFyIG5ld0RpcnMgPSBub3JtYWxpemVEaXJlY3RpdmVzJDEodm5vZGUuZGF0YS5kaXJlY3RpdmVzLCB2bm9kZS5jb250ZXh0KTtcblxuICB2YXIgZGlyc1dpdGhJbnNlcnQgPSBbXTtcbiAgdmFyIGRpcnNXaXRoUG9zdHBhdGNoID0gW107XG5cbiAgdmFyIGtleSwgb2xkRGlyLCBkaXI7XG4gIGZvciAoa2V5IGluIG5ld0RpcnMpIHtcbiAgICBvbGREaXIgPSBvbGREaXJzW2tleV07XG4gICAgZGlyID0gbmV3RGlyc1trZXldO1xuICAgIGlmICghb2xkRGlyKSB7XG4gICAgICAvLyBuZXcgZGlyZWN0aXZlLCBiaW5kXG4gICAgICBjYWxsSG9vayQxKGRpciwgJ2JpbmQnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgaWYgKGRpci5kZWYgJiYgZGlyLmRlZi5pbnNlcnRlZCkge1xuICAgICAgICBkaXJzV2l0aEluc2VydC5wdXNoKGRpcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGV4aXN0aW5nIGRpcmVjdGl2ZSwgdXBkYXRlXG4gICAgICBkaXIub2xkVmFsdWUgPSBvbGREaXIudmFsdWU7XG4gICAgICBkaXIub2xkQXJnID0gb2xkRGlyLmFyZztcbiAgICAgIGNhbGxIb29rJDEoZGlyLCAndXBkYXRlJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgIGlmIChkaXIuZGVmICYmIGRpci5kZWYuY29tcG9uZW50VXBkYXRlZCkge1xuICAgICAgICBkaXJzV2l0aFBvc3RwYXRjaC5wdXNoKGRpcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcnNXaXRoSW5zZXJ0Lmxlbmd0aCkge1xuICAgIHZhciBjYWxsSW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzV2l0aEluc2VydC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsSG9vayQxKGRpcnNXaXRoSW5zZXJ0W2ldLCAnaW5zZXJ0ZWQnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGlzQ3JlYXRlKSB7XG4gICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ2luc2VydCcsIGNhbGxJbnNlcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsSW5zZXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcnNXaXRoUG9zdHBhdGNoLmxlbmd0aCkge1xuICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAncG9zdHBhdGNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzV2l0aFBvc3RwYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsSG9vayQxKGRpcnNXaXRoUG9zdHBhdGNoW2ldLCAnY29tcG9uZW50VXBkYXRlZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIWlzQ3JlYXRlKSB7XG4gICAgZm9yIChrZXkgaW4gb2xkRGlycykge1xuICAgICAgaWYgKCFuZXdEaXJzW2tleV0pIHtcbiAgICAgICAgLy8gbm8gbG9uZ2VyIHByZXNlbnQsIHVuYmluZFxuICAgICAgICBjYWxsSG9vayQxKG9sZERpcnNba2V5XSwgJ3VuYmluZCcsIG9sZFZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGVtcHR5TW9kaWZpZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyQxIChcbiAgZGlycyxcbiAgdm1cbikge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKCFkaXJzKSB7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIHJlc1xuICB9XG4gIHZhciBpLCBkaXI7XG4gIGZvciAoaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGlyID0gZGlyc1tpXTtcbiAgICBpZiAoIWRpci5tb2RpZmllcnMpIHtcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgZGlyLm1vZGlmaWVycyA9IGVtcHR5TW9kaWZpZXJzO1xuICAgIH1cbiAgICByZXNbZ2V0UmF3RGlyTmFtZShkaXIpXSA9IGRpcjtcbiAgICBkaXIuZGVmID0gcmVzb2x2ZUFzc2V0KHZtLiRvcHRpb25zLCAnZGlyZWN0aXZlcycsIGRpci5uYW1lLCB0cnVlKTtcbiAgfVxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnZXRSYXdEaXJOYW1lIChkaXIpIHtcbiAgcmV0dXJuIGRpci5yYXdOYW1lIHx8ICgoZGlyLm5hbWUpICsgXCIuXCIgKyAoT2JqZWN0LmtleXMoZGlyLm1vZGlmaWVycyB8fCB7fSkuam9pbignLicpKSlcbn1cblxuZnVuY3Rpb24gY2FsbEhvb2skMSAoZGlyLCBob29rLCB2bm9kZSwgb2xkVm5vZGUsIGlzRGVzdHJveSkge1xuICB2YXIgZm4gPSBkaXIuZGVmICYmIGRpci5kZWZbaG9va107XG4gIGlmIChmbikge1xuICAgIHRyeSB7XG4gICAgICBmbih2bm9kZS5lbG0sIGRpciwgdm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZub2RlLmNvbnRleHQsIChcImRpcmVjdGl2ZSBcIiArIChkaXIubmFtZSkgKyBcIiBcIiArIGhvb2sgKyBcIiBob29rXCIpKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGJhc2VNb2R1bGVzID0gW1xuICByZWYsXG4gIGRpcmVjdGl2ZXNcbl07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiB1cGRhdGVBdHRycyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBvcHRzID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgaWYgKGlzRGVmKG9wdHMpICYmIG9wdHMuQ3Rvci5vcHRpb25zLmluaGVyaXRBdHRycyA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoaXNVbmRlZihvbGRWbm9kZS5kYXRhLmF0dHJzKSAmJiBpc1VuZGVmKHZub2RlLmRhdGEuYXR0cnMpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGtleSwgY3VyLCBvbGQ7XG4gIHZhciBlbG0gPSB2bm9kZS5lbG07XG4gIHZhciBvbGRBdHRycyA9IG9sZFZub2RlLmRhdGEuYXR0cnMgfHwge307XG4gIHZhciBhdHRycyA9IHZub2RlLmRhdGEuYXR0cnMgfHwge307XG4gIC8vIGNsb25lIG9ic2VydmVkIG9iamVjdHMsIGFzIHRoZSB1c2VyIHByb2JhYmx5IHdhbnRzIHRvIG11dGF0ZSBpdFxuICBpZiAoaXNEZWYoYXR0cnMuX19vYl9fKSkge1xuICAgIGF0dHJzID0gdm5vZGUuZGF0YS5hdHRycyA9IGV4dGVuZCh7fSwgYXR0cnMpO1xuICB9XG5cbiAgZm9yIChrZXkgaW4gYXR0cnMpIHtcbiAgICBjdXIgPSBhdHRyc1trZXldO1xuICAgIG9sZCA9IG9sZEF0dHJzW2tleV07XG4gICAgaWYgKG9sZCAhPT0gY3VyKSB7XG4gICAgICBzZXRBdHRyKGVsbSwga2V5LCBjdXIsIHZub2RlLmRhdGEucHJlKTtcbiAgICB9XG4gIH1cbiAgLy8gIzQzOTE6IGluIElFOSwgc2V0dGluZyB0eXBlIGNhbiByZXNldCB2YWx1ZSBmb3IgaW5wdXRbdHlwZT1yYWRpb11cbiAgLy8gIzY2NjY6IElFL0VkZ2UgZm9yY2VzIHByb2dyZXNzIHZhbHVlIGRvd24gdG8gMSBiZWZvcmUgc2V0dGluZyBhIG1heFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKChpc0lFIHx8IGlzRWRnZSkgJiYgYXR0cnMudmFsdWUgIT09IG9sZEF0dHJzLnZhbHVlKSB7XG4gICAgc2V0QXR0cihlbG0sICd2YWx1ZScsIGF0dHJzLnZhbHVlKTtcbiAgfVxuICBmb3IgKGtleSBpbiBvbGRBdHRycykge1xuICAgIGlmIChpc1VuZGVmKGF0dHJzW2tleV0pKSB7XG4gICAgICBpZiAoaXNYbGluayhrZXkpKSB7XG4gICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGVOUyh4bGlua05TLCBnZXRYbGlua1Byb3Aoa2V5KSk7XG4gICAgICB9IGVsc2UgaWYgKCFpc0VudW1lcmF0ZWRBdHRyKGtleSkpIHtcbiAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRBdHRyIChlbCwga2V5LCB2YWx1ZSwgaXNJblByZSkge1xuICBpZiAoaXNJblByZSB8fCBlbC50YWdOYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgYmFzZVNldEF0dHIoZWwsIGtleSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbkF0dHIoa2V5KSkge1xuICAgIC8vIHNldCBhdHRyaWJ1dGUgZm9yIGJsYW5rIHZhbHVlXG4gICAgLy8gZS5nLiA8b3B0aW9uIGRpc2FibGVkPlNlbGVjdCBvbmU8L29wdGlvbj5cbiAgICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0ZWNobmljYWxseSBhbGxvd2Z1bGxzY3JlZW4gaXMgYSBib29sZWFuIGF0dHJpYnV0ZSBmb3IgPGlmcmFtZT4sXG4gICAgICAvLyBidXQgRmxhc2ggZXhwZWN0cyBhIHZhbHVlIG9mIFwidHJ1ZVwiIHdoZW4gdXNlZCBvbiA8ZW1iZWQ+IHRhZ1xuICAgICAgdmFsdWUgPSBrZXkgPT09ICdhbGxvd2Z1bGxzY3JlZW4nICYmIGVsLnRhZ05hbWUgPT09ICdFTUJFRCdcbiAgICAgICAgPyAndHJ1ZSdcbiAgICAgICAgOiBrZXk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzRW51bWVyYXRlZEF0dHIoa2V5KSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGNvbnZlcnRFbnVtZXJhdGVkVmFsdWUoa2V5LCB2YWx1ZSkpO1xuICB9IGVsc2UgaWYgKGlzWGxpbmsoa2V5KSkge1xuICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlTlMoeGxpbmtOUywgZ2V0WGxpbmtQcm9wKGtleSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYmFzZVNldEF0dHIoZWwsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2VTZXRBdHRyIChlbCwga2V5LCB2YWx1ZSkge1xuICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICAvLyAjNzEzODogSUUxMCAmIDExIGZpcmVzIGlucHV0IGV2ZW50IHdoZW4gc2V0dGluZyBwbGFjZWhvbGRlciBvblxuICAgIC8vIDx0ZXh0YXJlYT4uLi4gYmxvY2sgdGhlIGZpcnN0IGlucHV0IGV2ZW50IGFuZCByZW1vdmUgdGhlIGJsb2NrZXJcbiAgICAvLyBpbW1lZGlhdGVseS5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoXG4gICAgICBpc0lFICYmICFpc0lFOSAmJlxuICAgICAgZWwudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJlxuICAgICAga2V5ID09PSAncGxhY2Vob2xkZXInICYmIHZhbHVlICE9PSAnJyAmJiAhZWwuX19pZXBoXG4gICAgKSB7XG4gICAgICB2YXIgYmxvY2tlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYmxvY2tlcik7XG4gICAgICB9O1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBibG9ja2VyKTtcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgZWwuX19pZXBoID0gdHJ1ZTsgLyogSUUgcGxhY2Vob2xkZXIgcGF0Y2hlZCAqL1xuICAgIH1cbiAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxudmFyIGF0dHJzID0ge1xuICBjcmVhdGU6IHVwZGF0ZUF0dHJzLFxuICB1cGRhdGU6IHVwZGF0ZUF0dHJzXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gdXBkYXRlQ2xhc3MgKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgdmFyIG9sZERhdGEgPSBvbGRWbm9kZS5kYXRhO1xuICBpZiAoXG4gICAgaXNVbmRlZihkYXRhLnN0YXRpY0NsYXNzKSAmJlxuICAgIGlzVW5kZWYoZGF0YS5jbGFzcykgJiYgKFxuICAgICAgaXNVbmRlZihvbGREYXRhKSB8fCAoXG4gICAgICAgIGlzVW5kZWYob2xkRGF0YS5zdGF0aWNDbGFzcykgJiZcbiAgICAgICAgaXNVbmRlZihvbGREYXRhLmNsYXNzKVxuICAgICAgKVxuICAgIClcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY2xzID0gZ2VuQ2xhc3NGb3JWbm9kZSh2bm9kZSk7XG5cbiAgLy8gaGFuZGxlIHRyYW5zaXRpb24gY2xhc3Nlc1xuICB2YXIgdHJhbnNpdGlvbkNsYXNzID0gZWwuX3RyYW5zaXRpb25DbGFzc2VzO1xuICBpZiAoaXNEZWYodHJhbnNpdGlvbkNsYXNzKSkge1xuICAgIGNscyA9IGNvbmNhdChjbHMsIHN0cmluZ2lmeUNsYXNzKHRyYW5zaXRpb25DbGFzcykpO1xuICB9XG5cbiAgLy8gc2V0IHRoZSBjbGFzc1xuICBpZiAoY2xzICE9PSBlbC5fcHJldkNsYXNzKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNscyk7XG4gICAgZWwuX3ByZXZDbGFzcyA9IGNscztcbiAgfVxufVxuXG52YXIga2xhc3MgPSB7XG4gIGNyZWF0ZTogdXBkYXRlQ2xhc3MsXG4gIHVwZGF0ZTogdXBkYXRlQ2xhc3Ncbn07XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8qICAqL1xuXG4vLyBpbiBzb21lIGNhc2VzLCB0aGUgZXZlbnQgdXNlZCBoYXMgdG8gYmUgZGV0ZXJtaW5lZCBhdCBydW50aW1lXG4vLyBzbyB3ZSB1c2VkIHNvbWUgcmVzZXJ2ZWQgdG9rZW5zIGR1cmluZyBjb21waWxlLlxudmFyIFJBTkdFX1RPS0VOID0gJ19fcic7XG52YXIgQ0hFQ0tCT1hfUkFESU9fVE9LRU4gPSAnX19jJztcblxuLyogICovXG5cbi8vIG5vcm1hbGl6ZSB2LW1vZGVsIGV2ZW50IHRva2VucyB0aGF0IGNhbiBvbmx5IGJlIGRldGVybWluZWQgYXQgcnVudGltZS5cbi8vIGl0J3MgaW1wb3J0YW50IHRvIHBsYWNlIHRoZSBldmVudCBhcyB0aGUgZmlyc3QgaW4gdGhlIGFycmF5IGJlY2F1c2Vcbi8vIHRoZSB3aG9sZSBwb2ludCBpcyBlbnN1cmluZyB0aGUgdi1tb2RlbCBjYWxsYmFjayBnZXRzIGNhbGxlZCBiZWZvcmVcbi8vIHVzZXItYXR0YWNoZWQgaGFuZGxlcnMuXG5mdW5jdGlvbiBub3JtYWxpemVFdmVudHMgKG9uKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYob25bUkFOR0VfVE9LRU5dKSkge1xuICAgIC8vIElFIGlucHV0W3R5cGU9cmFuZ2VdIG9ubHkgc3VwcG9ydHMgYGNoYW5nZWAgZXZlbnRcbiAgICB2YXIgZXZlbnQgPSBpc0lFID8gJ2NoYW5nZScgOiAnaW5wdXQnO1xuICAgIG9uW2V2ZW50XSA9IFtdLmNvbmNhdChvbltSQU5HRV9UT0tFTl0sIG9uW2V2ZW50XSB8fCBbXSk7XG4gICAgZGVsZXRlIG9uW1JBTkdFX1RPS0VOXTtcbiAgfVxuICAvLyBUaGlzIHdhcyBvcmlnaW5hbGx5IGludGVuZGVkIHRvIGZpeCAjNDUyMSBidXQgbm8gbG9uZ2VyIG5lY2Vzc2FyeVxuICAvLyBhZnRlciAyLjUuIEtlZXBpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBnZW5lcmF0ZWQgY29kZSBmcm9tIDwgMi40XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYob25bQ0hFQ0tCT1hfUkFESU9fVE9LRU5dKSkge1xuICAgIG9uLmNoYW5nZSA9IFtdLmNvbmNhdChvbltDSEVDS0JPWF9SQURJT19UT0tFTl0sIG9uLmNoYW5nZSB8fCBbXSk7XG4gICAgZGVsZXRlIG9uW0NIRUNLQk9YX1JBRElPX1RPS0VOXTtcbiAgfVxufVxuXG52YXIgdGFyZ2V0JDE7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyJDEgKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gIHZhciBfdGFyZ2V0ID0gdGFyZ2V0JDE7IC8vIHNhdmUgY3VycmVudCB0YXJnZXQgZWxlbWVudCBpbiBjbG9zdXJlXG4gIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgdmFyIHJlcyA9IGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICByZW1vdmUkMihldmVudCwgb25jZUhhbmRsZXIsIGNhcHR1cmUsIF90YXJnZXQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyAjOTQ0NjogRmlyZWZveCA8PSA1MyAoaW4gcGFydGljdWxhciwgRVNSIDUyKSBoYXMgaW5jb3JyZWN0IEV2ZW50LnRpbWVTdGFtcFxuLy8gaW1wbGVtZW50YXRpb24gYW5kIGRvZXMgbm90IGZpcmUgbWljcm90YXNrcyBpbiBiZXR3ZWVuIGV2ZW50IHByb3BhZ2F0aW9uLCBzb1xuLy8gc2FmZSB0byBleGNsdWRlLlxudmFyIHVzZU1pY3JvdGFza0ZpeCA9IGlzVXNpbmdNaWNyb1Rhc2sgJiYgIShpc0ZGICYmIE51bWJlcihpc0ZGWzFdKSA8PSA1Myk7XG5cbmZ1bmN0aW9uIGFkZCQxIChcbiAgbmFtZSxcbiAgaGFuZGxlcixcbiAgY2FwdHVyZSxcbiAgcGFzc2l2ZVxuKSB7XG4gIC8vIGFzeW5jIGVkZ2UgY2FzZSAjNjU2NjogaW5uZXIgY2xpY2sgZXZlbnQgdHJpZ2dlcnMgcGF0Y2gsIGV2ZW50IGhhbmRsZXJcbiAgLy8gYXR0YWNoZWQgdG8gb3V0ZXIgZWxlbWVudCBkdXJpbmcgcGF0Y2gsIGFuZCB0cmlnZ2VyZWQgYWdhaW4uIFRoaXNcbiAgLy8gaGFwcGVucyBiZWNhdXNlIGJyb3dzZXJzIGZpcmUgbWljcm90YXNrIHRpY2tzIGJldHdlZW4gZXZlbnQgcHJvcGFnYXRpb24uXG4gIC8vIHRoZSBzb2x1dGlvbiBpcyBzaW1wbGU6IHdlIHNhdmUgdGhlIHRpbWVzdGFtcCB3aGVuIGEgaGFuZGxlciBpcyBhdHRhY2hlZCxcbiAgLy8gYW5kIHRoZSBoYW5kbGVyIHdvdWxkIG9ubHkgZmlyZSBpZiB0aGUgZXZlbnQgcGFzc2VkIHRvIGl0IHdhcyBmaXJlZFxuICAvLyBBRlRFUiBpdCB3YXMgYXR0YWNoZWQuXG4gIGlmICh1c2VNaWNyb3Rhc2tGaXgpIHtcbiAgICB2YXIgYXR0YWNoZWRUaW1lc3RhbXAgPSBjdXJyZW50Rmx1c2hUaW1lc3RhbXA7XG4gICAgdmFyIG9yaWdpbmFsID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gb3JpZ2luYWwuX3dyYXBwZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKFxuICAgICAgICAvLyBubyBidWJibGluZywgc2hvdWxkIGFsd2F5cyBmaXJlLlxuICAgICAgICAvLyB0aGlzIGlzIGp1c3QgYSBzYWZldHkgbmV0IGluIGNhc2UgZXZlbnQudGltZVN0YW1wIGlzIHVucmVsaWFibGUgaW5cbiAgICAgICAgLy8gY2VydGFpbiB3ZWlyZCBlbnZpcm9ubWVudHMuLi5cbiAgICAgICAgZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCB8fFxuICAgICAgICAvLyBldmVudCBpcyBmaXJlZCBhZnRlciBoYW5kbGVyIGF0dGFjaG1lbnRcbiAgICAgICAgZS50aW1lU3RhbXAgPj0gYXR0YWNoZWRUaW1lc3RhbXAgfHxcbiAgICAgICAgLy8gYmFpbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgaGF2ZSBidWdneSBldmVudC50aW1lU3RhbXAgaW1wbGVtZW50YXRpb25zXG4gICAgICAgIC8vICM5NDYyIGlPUyA5IGJ1ZzogZXZlbnQudGltZVN0YW1wIGlzIDAgYWZ0ZXIgaGlzdG9yeS5wdXNoU3RhdGVcbiAgICAgICAgLy8gIzk2ODEgUXRXZWJFbmdpbmUgZXZlbnQudGltZVN0YW1wIGlzIG5lZ2F0aXZlIHZhbHVlXG4gICAgICAgIGUudGltZVN0YW1wIDw9IDAgfHxcbiAgICAgICAgLy8gIzk0NDggYmFpbCBpZiBldmVudCBpcyBmaXJlZCBpbiBhbm90aGVyIGRvY3VtZW50IGluIGEgbXVsdGktcGFnZVxuICAgICAgICAvLyBlbGVjdHJvbi9udy5qcyBhcHAsIHNpbmNlIGV2ZW50LnRpbWVTdGFtcCB3aWxsIGJlIHVzaW5nIGEgZGlmZmVyZW50XG4gICAgICAgIC8vIHN0YXJ0aW5nIHJlZmVyZW5jZVxuICAgICAgICBlLnRhcmdldC5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICB0YXJnZXQkMS5hZGRFdmVudExpc3RlbmVyKFxuICAgIG5hbWUsXG4gICAgaGFuZGxlcixcbiAgICBzdXBwb3J0c1Bhc3NpdmVcbiAgICAgID8geyBjYXB0dXJlOiBjYXB0dXJlLCBwYXNzaXZlOiBwYXNzaXZlIH1cbiAgICAgIDogY2FwdHVyZVxuICApO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMiAoXG4gIG5hbWUsXG4gIGhhbmRsZXIsXG4gIGNhcHR1cmUsXG4gIF90YXJnZXRcbikge1xuICAoX3RhcmdldCB8fCB0YXJnZXQkMSkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICBuYW1lLFxuICAgIGhhbmRsZXIuX3dyYXBwZXIgfHwgaGFuZGxlcixcbiAgICBjYXB0dXJlXG4gICk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTUxpc3RlbmVycyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIGlmIChpc1VuZGVmKG9sZFZub2RlLmRhdGEub24pICYmIGlzVW5kZWYodm5vZGUuZGF0YS5vbikpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb24gPSB2bm9kZS5kYXRhLm9uIHx8IHt9O1xuICB2YXIgb2xkT24gPSBvbGRWbm9kZS5kYXRhLm9uIHx8IHt9O1xuICB0YXJnZXQkMSA9IHZub2RlLmVsbTtcbiAgbm9ybWFsaXplRXZlbnRzKG9uKTtcbiAgdXBkYXRlTGlzdGVuZXJzKG9uLCBvbGRPbiwgYWRkJDEsIHJlbW92ZSQyLCBjcmVhdGVPbmNlSGFuZGxlciQxLCB2bm9kZS5jb250ZXh0KTtcbiAgdGFyZ2V0JDEgPSB1bmRlZmluZWQ7XG59XG5cbnZhciBldmVudHMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlRE9NTGlzdGVuZXJzLFxuICB1cGRhdGU6IHVwZGF0ZURPTUxpc3RlbmVyc1xufTtcblxuLyogICovXG5cbnZhciBzdmdDb250YWluZXI7XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTVByb3BzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKGlzVW5kZWYob2xkVm5vZGUuZGF0YS5kb21Qcm9wcykgJiYgaXNVbmRlZih2bm9kZS5kYXRhLmRvbVByb3BzKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBrZXksIGN1cjtcbiAgdmFyIGVsbSA9IHZub2RlLmVsbTtcbiAgdmFyIG9sZFByb3BzID0gb2xkVm5vZGUuZGF0YS5kb21Qcm9wcyB8fCB7fTtcbiAgdmFyIHByb3BzID0gdm5vZGUuZGF0YS5kb21Qcm9wcyB8fCB7fTtcbiAgLy8gY2xvbmUgb2JzZXJ2ZWQgb2JqZWN0cywgYXMgdGhlIHVzZXIgcHJvYmFibHkgd2FudHMgdG8gbXV0YXRlIGl0XG4gIGlmIChpc0RlZihwcm9wcy5fX29iX18pKSB7XG4gICAgcHJvcHMgPSB2bm9kZS5kYXRhLmRvbVByb3BzID0gZXh0ZW5kKHt9LCBwcm9wcyk7XG4gIH1cblxuICBmb3IgKGtleSBpbiBvbGRQcm9wcykge1xuICAgIGlmICghKGtleSBpbiBwcm9wcykpIHtcbiAgICAgIGVsbVtrZXldID0gJyc7XG4gICAgfVxuICB9XG5cbiAgZm9yIChrZXkgaW4gcHJvcHMpIHtcbiAgICBjdXIgPSBwcm9wc1trZXldO1xuICAgIC8vIGlnbm9yZSBjaGlsZHJlbiBpZiB0aGUgbm9kZSBoYXMgdGV4dENvbnRlbnQgb3IgaW5uZXJIVE1MLFxuICAgIC8vIGFzIHRoZXNlIHdpbGwgdGhyb3cgYXdheSBleGlzdGluZyBET00gbm9kZXMgYW5kIGNhdXNlIHJlbW92YWwgZXJyb3JzXG4gICAgLy8gb24gc3Vic2VxdWVudCBwYXRjaGVzICgjMzM2MClcbiAgICBpZiAoa2V5ID09PSAndGV4dENvbnRlbnQnIHx8IGtleSA9PT0gJ2lubmVySFRNTCcpIHtcbiAgICAgIGlmICh2bm9kZS5jaGlsZHJlbikgeyB2bm9kZS5jaGlsZHJlbi5sZW5ndGggPSAwOyB9XG4gICAgICBpZiAoY3VyID09PSBvbGRQcm9wc1trZXldKSB7IGNvbnRpbnVlIH1cbiAgICAgIC8vICM2NjAxIHdvcmsgYXJvdW5kIENocm9tZSB2ZXJzaW9uIDw9IDU1IGJ1ZyB3aGVyZSBzaW5nbGUgdGV4dE5vZGVcbiAgICAgIC8vIHJlcGxhY2VkIGJ5IGlubmVySFRNTC90ZXh0Q29udGVudCByZXRhaW5zIGl0cyBwYXJlbnROb2RlIHByb3BlcnR5XG4gICAgICBpZiAoZWxtLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGVsbS5yZW1vdmVDaGlsZChlbG0uY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ3ZhbHVlJyAmJiBlbG0udGFnTmFtZSAhPT0gJ1BST0dSRVNTJykge1xuICAgICAgLy8gc3RvcmUgdmFsdWUgYXMgX3ZhbHVlIGFzIHdlbGwgc2luY2VcbiAgICAgIC8vIG5vbi1zdHJpbmcgdmFsdWVzIHdpbGwgYmUgc3RyaW5naWZpZWRcbiAgICAgIGVsbS5fdmFsdWUgPSBjdXI7XG4gICAgICAvLyBhdm9pZCByZXNldHRpbmcgY3Vyc29yIHBvc2l0aW9uIHdoZW4gdmFsdWUgaXMgdGhlIHNhbWVcbiAgICAgIHZhciBzdHJDdXIgPSBpc1VuZGVmKGN1cikgPyAnJyA6IFN0cmluZyhjdXIpO1xuICAgICAgaWYgKHNob3VsZFVwZGF0ZVZhbHVlKGVsbSwgc3RyQ3VyKSkge1xuICAgICAgICBlbG0udmFsdWUgPSBzdHJDdXI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdpbm5lckhUTUwnICYmIGlzU1ZHKGVsbS50YWdOYW1lKSAmJiBpc1VuZGVmKGVsbS5pbm5lckhUTUwpKSB7XG4gICAgICAvLyBJRSBkb2Vzbid0IHN1cHBvcnQgaW5uZXJIVE1MIGZvciBTVkcgZWxlbWVudHNcbiAgICAgIHN2Z0NvbnRhaW5lciA9IHN2Z0NvbnRhaW5lciB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHN2Z0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxzdmc+XCIgKyBjdXIgKyBcIjwvc3ZnPlwiO1xuICAgICAgdmFyIHN2ZyA9IHN2Z0NvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGVsbS5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsbS5yZW1vdmVDaGlsZChlbG0uZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB3aGlsZSAoc3ZnLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxtLmFwcGVuZENoaWxkKHN2Zy5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gc2tpcCB0aGUgdXBkYXRlIGlmIG9sZCBhbmQgbmV3IFZET00gc3RhdGUgaXMgdGhlIHNhbWUuXG4gICAgICAvLyBgdmFsdWVgIGlzIGhhbmRsZWQgc2VwYXJhdGVseSBiZWNhdXNlIHRoZSBET00gdmFsdWUgbWF5IGJlIHRlbXBvcmFyaWx5XG4gICAgICAvLyBvdXQgb2Ygc3luYyB3aXRoIFZET00gc3RhdGUgZHVlIHRvIGZvY3VzLCBjb21wb3NpdGlvbiBhbmQgbW9kaWZpZXJzLlxuICAgICAgLy8gVGhpcyAgIzQ1MjEgYnkgc2tpcHBpbmcgdGhlIHVubmVjZXNzYXJ5IGBjaGVja2VkYCB1cGRhdGUuXG4gICAgICBjdXIgIT09IG9sZFByb3BzW2tleV1cbiAgICApIHtcbiAgICAgIC8vIHNvbWUgcHJvcGVydHkgdXBkYXRlcyBjYW4gdGhyb3dcbiAgICAgIC8vIGUuZy4gYHZhbHVlYCBvbiA8cHJvZ3Jlc3M+IHcvIG5vbi1maW5pdGUgdmFsdWVcbiAgICAgIHRyeSB7XG4gICAgICAgIGVsbVtrZXldID0gY3VyO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cbn1cblxuLy8gY2hlY2sgcGxhdGZvcm1zL3dlYi91dGlsL2F0dHJzLmpzIGFjY2VwdFZhbHVlXG5cblxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlVmFsdWUgKGVsbSwgY2hlY2tWYWwpIHtcbiAgcmV0dXJuICghZWxtLmNvbXBvc2luZyAmJiAoXG4gICAgZWxtLnRhZ05hbWUgPT09ICdPUFRJT04nIHx8XG4gICAgaXNOb3RJbkZvY3VzQW5kRGlydHkoZWxtLCBjaGVja1ZhbCkgfHxcbiAgICBpc0RpcnR5V2l0aE1vZGlmaWVycyhlbG0sIGNoZWNrVmFsKVxuICApKVxufVxuXG5mdW5jdGlvbiBpc05vdEluRm9jdXNBbmREaXJ0eSAoZWxtLCBjaGVja1ZhbCkge1xuICAvLyByZXR1cm4gdHJ1ZSB3aGVuIHRleHRib3ggKC5udW1iZXIgYW5kIC50cmltKSBsb3NlcyBmb2N1cyBhbmQgaXRzIHZhbHVlIGlzXG4gIC8vIG5vdCBlcXVhbCB0byB0aGUgdXBkYXRlZCB2YWx1ZVxuICB2YXIgbm90SW5Gb2N1cyA9IHRydWU7XG4gIC8vICM2MTU3XG4gIC8vIHdvcmsgYXJvdW5kIElFIGJ1ZyB3aGVuIGFjY2Vzc2luZyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluIGFuIGlmcmFtZVxuICB0cnkgeyBub3RJbkZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZWxtOyB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gbm90SW5Gb2N1cyAmJiBlbG0udmFsdWUgIT09IGNoZWNrVmFsXG59XG5cbmZ1bmN0aW9uIGlzRGlydHlXaXRoTW9kaWZpZXJzIChlbG0sIG5ld1ZhbCkge1xuICB2YXIgdmFsdWUgPSBlbG0udmFsdWU7XG4gIHZhciBtb2RpZmllcnMgPSBlbG0uX3ZNb2RpZmllcnM7IC8vIGluamVjdGVkIGJ5IHYtbW9kZWwgcnVudGltZVxuICBpZiAoaXNEZWYobW9kaWZpZXJzKSkge1xuICAgIGlmIChtb2RpZmllcnMubnVtYmVyKSB7XG4gICAgICByZXR1cm4gdG9OdW1iZXIodmFsdWUpICE9PSB0b051bWJlcihuZXdWYWwpXG4gICAgfVxuICAgIGlmIChtb2RpZmllcnMudHJpbSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKSAhPT0gbmV3VmFsLnRyaW0oKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWUgIT09IG5ld1ZhbFxufVxuXG52YXIgZG9tUHJvcHMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlRE9NUHJvcHMsXG4gIHVwZGF0ZTogdXBkYXRlRE9NUHJvcHNcbn07XG5cbi8qICAqL1xuXG52YXIgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgbGlzdERlbGltaXRlciA9IC87KD8hW14oXSpcXCkpL2c7XG4gIHZhciBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gIGNzc1RleHQuc3BsaXQobGlzdERlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbi8vIG1lcmdlIHN0YXRpYyBhbmQgZHluYW1pYyBzdHlsZSBkYXRhIG9uIHRoZSBzYW1lIHZub2RlXG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZURhdGEgKGRhdGEpIHtcbiAgdmFyIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGRhdGEuc3R5bGUpO1xuICAvLyBzdGF0aWMgc3R5bGUgaXMgcHJlLXByb2Nlc3NlZCBpbnRvIGFuIG9iamVjdCBkdXJpbmcgY29tcGlsYXRpb25cbiAgLy8gYW5kIGlzIGFsd2F5cyBhIGZyZXNoIG9iamVjdCwgc28gaXQncyBzYWZlIHRvIG1lcmdlIGludG8gaXRcbiAgcmV0dXJuIGRhdGEuc3RhdGljU3R5bGVcbiAgICA/IGV4dGVuZChkYXRhLnN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICA6IHN0eWxlXG59XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyAoYmluZGluZ1N0eWxlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGJpbmRpbmdTdHlsZSkpIHtcbiAgICByZXR1cm4gdG9PYmplY3QoYmluZGluZ1N0eWxlKVxuICB9XG4gIGlmICh0eXBlb2YgYmluZGluZ1N0eWxlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZVN0eWxlVGV4dChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgcmV0dXJuIGJpbmRpbmdTdHlsZVxufVxuXG4vKipcbiAqIHBhcmVudCBjb21wb25lbnQgc3R5bGUgc2hvdWxkIGJlIGFmdGVyIGNoaWxkJ3NcbiAqIHNvIHRoYXQgcGFyZW50IGNvbXBvbmVudCdzIHN0eWxlIGNvdWxkIG92ZXJyaWRlIGl0XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlICh2bm9kZSwgY2hlY2tDaGlsZCkge1xuICB2YXIgcmVzID0ge307XG4gIHZhciBzdHlsZURhdGE7XG5cbiAgaWYgKGNoZWNrQ2hpbGQpIHtcbiAgICB2YXIgY2hpbGROb2RlID0gdm5vZGU7XG4gICAgd2hpbGUgKGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICAgIGlmIChcbiAgICAgICAgY2hpbGROb2RlICYmIGNoaWxkTm9kZS5kYXRhICYmXG4gICAgICAgIChzdHlsZURhdGEgPSBub3JtYWxpemVTdHlsZURhdGEoY2hpbGROb2RlLmRhdGEpKVxuICAgICAgKSB7XG4gICAgICAgIGV4dGVuZChyZXMsIHN0eWxlRGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKChzdHlsZURhdGEgPSBub3JtYWxpemVTdHlsZURhdGEodm5vZGUuZGF0YSkpKSB7XG4gICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgfVxuXG4gIHZhciBwYXJlbnROb2RlID0gdm5vZGU7XG4gIHdoaWxlICgocGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50KSkge1xuICAgIGlmIChwYXJlbnROb2RlLmRhdGEgJiYgKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YShwYXJlbnROb2RlLmRhdGEpKSkge1xuICAgICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxudmFyIGNzc1ZhclJFID0gL14tLS87XG52YXIgaW1wb3J0YW50UkUgPSAvXFxzKiFpbXBvcnRhbnQkLztcbnZhciBzZXRQcm9wID0gZnVuY3Rpb24gKGVsLCBuYW1lLCB2YWwpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChjc3NWYXJSRS50ZXN0KG5hbWUpKSB7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsKTtcbiAgfSBlbHNlIGlmIChpbXBvcnRhbnRSRS50ZXN0KHZhbCkpIHtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShoeXBoZW5hdGUobmFtZSksIHZhbC5yZXBsYWNlKGltcG9ydGFudFJFLCAnJyksICdpbXBvcnRhbnQnKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemUobmFtZSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgLy8gU3VwcG9ydCB2YWx1ZXMgYXJyYXkgY3JlYXRlZCBieSBhdXRvcHJlZml4ZXIsIGUuZy5cbiAgICAgIC8vIHtkaXNwbGF5OiBbXCItd2Via2l0LWJveFwiLCBcIi1tcy1mbGV4Ym94XCIsIFwiZmxleFwiXX1cbiAgICAgIC8vIFNldCB0aGVtIG9uZSBieSBvbmUsIGFuZCB0aGUgYnJvd3NlciB3aWxsIG9ubHkgc2V0IHRob3NlIGl0IGNhbiByZWNvZ25pemVcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWwubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZWwuc3R5bGVbbm9ybWFsaXplZE5hbWVdID0gdmFsW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZVtub3JtYWxpemVkTmFtZV0gPSB2YWw7XG4gICAgfVxuICB9XG59O1xuXG52YXIgdmVuZG9yTmFtZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnbXMnXTtcblxudmFyIGVtcHR5U3R5bGU7XG52YXIgbm9ybWFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChwcm9wKSB7XG4gIGVtcHR5U3R5bGUgPSBlbXB0eVN0eWxlIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuICBwcm9wID0gY2FtZWxpemUocHJvcCk7XG4gIGlmIChwcm9wICE9PSAnZmlsdGVyJyAmJiAocHJvcCBpbiBlbXB0eVN0eWxlKSkge1xuICAgIHJldHVybiBwcm9wXG4gIH1cbiAgdmFyIGNhcE5hbWUgPSBwcm9wLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuYW1lID0gdmVuZG9yTmFtZXNbaV0gKyBjYXBOYW1lO1xuICAgIGlmIChuYW1lIGluIGVtcHR5U3R5bGUpIHtcbiAgICAgIHJldHVybiBuYW1lXG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gIHZhciBvbGREYXRhID0gb2xkVm5vZGUuZGF0YTtcblxuICBpZiAoaXNVbmRlZihkYXRhLnN0YXRpY1N0eWxlKSAmJiBpc1VuZGVmKGRhdGEuc3R5bGUpICYmXG4gICAgaXNVbmRlZihvbGREYXRhLnN0YXRpY1N0eWxlKSAmJiBpc1VuZGVmKG9sZERhdGEuc3R5bGUpXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGN1ciwgbmFtZTtcbiAgdmFyIGVsID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkU3RhdGljU3R5bGUgPSBvbGREYXRhLnN0YXRpY1N0eWxlO1xuICB2YXIgb2xkU3R5bGVCaW5kaW5nID0gb2xkRGF0YS5ub3JtYWxpemVkU3R5bGUgfHwgb2xkRGF0YS5zdHlsZSB8fCB7fTtcblxuICAvLyBpZiBzdGF0aWMgc3R5bGUgZXhpc3RzLCBzdHlsZWJpbmRpbmcgYWxyZWFkeSBtZXJnZWQgaW50byBpdCB3aGVuIGRvaW5nIG5vcm1hbGl6ZVN0eWxlRGF0YVxuICB2YXIgb2xkU3R5bGUgPSBvbGRTdGF0aWNTdHlsZSB8fCBvbGRTdHlsZUJpbmRpbmc7XG5cbiAgdmFyIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKHZub2RlLmRhdGEuc3R5bGUpIHx8IHt9O1xuXG4gIC8vIHN0b3JlIG5vcm1hbGl6ZWQgc3R5bGUgdW5kZXIgYSBkaWZmZXJlbnQga2V5IGZvciBuZXh0IGRpZmZcbiAgLy8gbWFrZSBzdXJlIHRvIGNsb25lIGl0IGlmIGl0J3MgcmVhY3RpdmUsIHNpbmNlIHRoZSB1c2VyIGxpa2VseSB3YW50c1xuICAvLyB0byBtdXRhdGUgaXQuXG4gIHZub2RlLmRhdGEubm9ybWFsaXplZFN0eWxlID0gaXNEZWYoc3R5bGUuX19vYl9fKVxuICAgID8gZXh0ZW5kKHt9LCBzdHlsZSlcbiAgICA6IHN0eWxlO1xuXG4gIHZhciBuZXdTdHlsZSA9IGdldFN0eWxlKHZub2RlLCB0cnVlKTtcblxuICBmb3IgKG5hbWUgaW4gb2xkU3R5bGUpIHtcbiAgICBpZiAoaXNVbmRlZihuZXdTdHlsZVtuYW1lXSkpIHtcbiAgICAgIHNldFByb3AoZWwsIG5hbWUsICcnKTtcbiAgICB9XG4gIH1cbiAgZm9yIChuYW1lIGluIG5ld1N0eWxlKSB7XG4gICAgY3VyID0gbmV3U3R5bGVbbmFtZV07XG4gICAgaWYgKGN1ciAhPT0gb2xkU3R5bGVbbmFtZV0pIHtcbiAgICAgIC8vIGllOSBzZXR0aW5nIHRvIG51bGwgaGFzIG5vIGVmZmVjdCwgbXVzdCB1c2UgZW1wdHkgc3RyaW5nXG4gICAgICBzZXRQcm9wKGVsLCBuYW1lLCBjdXIgPT0gbnVsbCA/ICcnIDogY3VyKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHN0eWxlID0ge1xuICBjcmVhdGU6IHVwZGF0ZVN0eWxlLFxuICB1cGRhdGU6IHVwZGF0ZVN0eWxlXG59O1xuXG4vKiAgKi9cblxudmFyIHdoaXRlc3BhY2VSRSA9IC9cXHMrLztcblxuLyoqXG4gKiBBZGQgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAqIFNWRyBlbGVtZW50cyBpbiBJRVxuICovXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgIGNscy5zcGxpdCh3aGl0ZXNwYWNlUkUpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoYyk7IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAqIFNWRyBlbGVtZW50cyBpbiBJRVxuICovXG5mdW5jdGlvbiByZW1vdmVDbGFzcyAoZWwsIGNscykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgIGNscy5zcGxpdCh3aGl0ZXNwYWNlUkUpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5yZW1vdmUoYyk7IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgfVxuICAgIGlmICghZWwuY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgIHZhciB0YXIgPSAnICcgKyBjbHMgKyAnICc7XG4gICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgIH1cbiAgICBjdXIgPSBjdXIudHJpbSgpO1xuICAgIGlmIChjdXIpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlVHJhbnNpdGlvbiAoZGVmJCQxKSB7XG4gIGlmICghZGVmJCQxKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIGlmIChkZWYkJDEuY3NzICE9PSBmYWxzZSkge1xuICAgICAgZXh0ZW5kKHJlcywgYXV0b0Nzc1RyYW5zaXRpb24oZGVmJCQxLm5hbWUgfHwgJ3YnKSk7XG4gICAgfVxuICAgIGV4dGVuZChyZXMsIGRlZiQkMSk7XG4gICAgcmV0dXJuIHJlc1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZiQkMSlcbiAgfVxufVxuXG52YXIgYXV0b0Nzc1RyYW5zaXRpb24gPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRlckNsYXNzOiAobmFtZSArIFwiLWVudGVyXCIpLFxuICAgIGVudGVyVG9DbGFzczogKG5hbWUgKyBcIi1lbnRlci10b1wiKSxcbiAgICBlbnRlckFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWVudGVyLWFjdGl2ZVwiKSxcbiAgICBsZWF2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlXCIpLFxuICAgIGxlYXZlVG9DbGFzczogKG5hbWUgKyBcIi1sZWF2ZS10b1wiKSxcbiAgICBsZWF2ZUFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlLWFjdGl2ZVwiKVxuICB9XG59KTtcblxudmFyIGhhc1RyYW5zaXRpb24gPSBpbkJyb3dzZXIgJiYgIWlzSUU5O1xudmFyIFRSQU5TSVRJT04gPSAndHJhbnNpdGlvbic7XG52YXIgQU5JTUFUSU9OID0gJ2FuaW1hdGlvbic7XG5cbi8vIFRyYW5zaXRpb24gcHJvcGVydHkvZXZlbnQgc25pZmZpbmdcbnZhciB0cmFuc2l0aW9uUHJvcCA9ICd0cmFuc2l0aW9uJztcbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSAndHJhbnNpdGlvbmVuZCc7XG52YXIgYW5pbWF0aW9uUHJvcCA9ICdhbmltYXRpb24nO1xudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gJ2FuaW1hdGlvbmVuZCc7XG5pZiAoaGFzVHJhbnNpdGlvbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHdpbmRvdy5vbnRyYW5zaXRpb25lbmQgPT09IHVuZGVmaW5lZCAmJlxuICAgIHdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICB0cmFuc2l0aW9uUHJvcCA9ICdXZWJraXRUcmFuc2l0aW9uJztcbiAgICB0cmFuc2l0aW9uRW5kRXZlbnQgPSAnd2Via2l0VHJhbnNpdGlvbkVuZCc7XG4gIH1cbiAgaWYgKHdpbmRvdy5vbmFuaW1hdGlvbmVuZCA9PT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgYW5pbWF0aW9uUHJvcCA9ICdXZWJraXRBbmltYXRpb24nO1xuICAgIGFuaW1hdGlvbkVuZEV2ZW50ID0gJ3dlYmtpdEFuaW1hdGlvbkVuZCc7XG4gIH1cbn1cblxuLy8gYmluZGluZyB0byB3aW5kb3cgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgaG90IHJlbG9hZCB3b3JrIGluIElFIGluIHN0cmljdCBtb2RlXG52YXIgcmFmID0gaW5Ccm93c2VyXG4gID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdylcbiAgICA6IHNldFRpbWVvdXRcbiAgOiAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH07XG5cbmZ1bmN0aW9uIG5leHRGcmFtZSAoZm4pIHtcbiAgcmFmKGZ1bmN0aW9uICgpIHtcbiAgICByYWYoZm4pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVHJhbnNpdGlvbkNsYXNzIChlbCwgY2xzKSB7XG4gIHZhciB0cmFuc2l0aW9uQ2xhc3NlcyA9IGVsLl90cmFuc2l0aW9uQ2xhc3NlcyB8fCAoZWwuX3RyYW5zaXRpb25DbGFzc2VzID0gW10pO1xuICBpZiAodHJhbnNpdGlvbkNsYXNzZXMuaW5kZXhPZihjbHMpIDwgMCkge1xuICAgIHRyYW5zaXRpb25DbGFzc2VzLnB1c2goY2xzKTtcbiAgICBhZGRDbGFzcyhlbCwgY2xzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uQ2xhc3MgKGVsLCBjbHMpIHtcbiAgaWYgKGVsLl90cmFuc2l0aW9uQ2xhc3Nlcykge1xuICAgIHJlbW92ZShlbC5fdHJhbnNpdGlvbkNsYXNzZXMsIGNscyk7XG4gIH1cbiAgcmVtb3ZlQ2xhc3MoZWwsIGNscyk7XG59XG5cbmZ1bmN0aW9uIHdoZW5UcmFuc2l0aW9uRW5kcyAoXG4gIGVsLFxuICBleHBlY3RlZFR5cGUsXG4gIGNiXG4pIHtcbiAgdmFyIHJlZiA9IGdldFRyYW5zaXRpb25JbmZvKGVsLCBleHBlY3RlZFR5cGUpO1xuICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICB2YXIgdGltZW91dCA9IHJlZi50aW1lb3V0O1xuICB2YXIgcHJvcENvdW50ID0gcmVmLnByb3BDb3VudDtcbiAgaWYgKCF0eXBlKSB7IHJldHVybiBjYigpIH1cbiAgdmFyIGV2ZW50ID0gdHlwZSA9PT0gVFJBTlNJVElPTiA/IHRyYW5zaXRpb25FbmRFdmVudCA6IGFuaW1hdGlvbkVuZEV2ZW50O1xuICB2YXIgZW5kZWQgPSAwO1xuICB2YXIgZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKTtcbiAgICBjYigpO1xuICB9O1xuICB2YXIgb25FbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcbiAgICAgIGlmICgrK2VuZGVkID49IHByb3BDb3VudCkge1xuICAgICAgICBlbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmIChlbmRlZCA8IHByb3BDb3VudCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9LCB0aW1lb3V0ICsgMSk7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKTtcbn1cblxudmFyIHRyYW5zZm9ybVJFID0gL1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpLztcblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkluZm8gKGVsLCBleHBlY3RlZFR5cGUpIHtcbiAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgLy8gSlNET00gbWF5IHJldHVybiB1bmRlZmluZWQgZm9yIHRyYW5zaXRpb24gcHJvcGVydGllc1xuICB2YXIgdHJhbnNpdGlvbkRlbGF5cyA9IChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRGVsYXknXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gIHZhciB0cmFuc2l0aW9uRHVyYXRpb25zID0gKHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEdXJhdGlvbiddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIHRyYW5zaXRpb25UaW1lb3V0ID0gZ2V0VGltZW91dCh0cmFuc2l0aW9uRGVsYXlzLCB0cmFuc2l0aW9uRHVyYXRpb25zKTtcbiAgdmFyIGFuaW1hdGlvbkRlbGF5cyA9IChzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEZWxheSddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIGFuaW1hdGlvbkR1cmF0aW9ucyA9IChzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEdXJhdGlvbiddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIGFuaW1hdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KGFuaW1hdGlvbkRlbGF5cywgYW5pbWF0aW9uRHVyYXRpb25zKTtcblxuICB2YXIgdHlwZTtcbiAgdmFyIHRpbWVvdXQgPSAwO1xuICB2YXIgcHJvcENvdW50ID0gMDtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChleHBlY3RlZFR5cGUgPT09IFRSQU5TSVRJT04pIHtcbiAgICBpZiAodHJhbnNpdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICB0eXBlID0gVFJBTlNJVElPTjtcbiAgICAgIHRpbWVvdXQgPSB0cmFuc2l0aW9uVGltZW91dDtcbiAgICAgIHByb3BDb3VudCA9IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IEFOSU1BVElPTikge1xuICAgIGlmIChhbmltYXRpb25UaW1lb3V0ID4gMCkge1xuICAgICAgdHlwZSA9IEFOSU1BVElPTjtcbiAgICAgIHRpbWVvdXQgPSBhbmltYXRpb25UaW1lb3V0O1xuICAgICAgcHJvcENvdW50ID0gYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGltZW91dCA9IE1hdGgubWF4KHRyYW5zaXRpb25UaW1lb3V0LCBhbmltYXRpb25UaW1lb3V0KTtcbiAgICB0eXBlID0gdGltZW91dCA+IDBcbiAgICAgID8gdHJhbnNpdGlvblRpbWVvdXQgPiBhbmltYXRpb25UaW1lb3V0XG4gICAgICAgID8gVFJBTlNJVElPTlxuICAgICAgICA6IEFOSU1BVElPTlxuICAgICAgOiBudWxsO1xuICAgIHByb3BDb3VudCA9IHR5cGVcbiAgICAgID8gdHlwZSA9PT0gVFJBTlNJVElPTlxuICAgICAgICA/IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoXG4gICAgICAgIDogYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aFxuICAgICAgOiAwO1xuICB9XG4gIHZhciBoYXNUcmFuc2Zvcm0gPVxuICAgIHR5cGUgPT09IFRSQU5TSVRJT04gJiZcbiAgICB0cmFuc2Zvcm1SRS50ZXN0KHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdQcm9wZXJ0eSddKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgcHJvcENvdW50OiBwcm9wQ291bnQsXG4gICAgaGFzVHJhbnNmb3JtOiBoYXNUcmFuc2Zvcm1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUaW1lb3V0IChkZWxheXMsIGR1cmF0aW9ucykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB3aGlsZSAoZGVsYXlzLmxlbmd0aCA8IGR1cmF0aW9ucy5sZW5ndGgpIHtcbiAgICBkZWxheXMgPSBkZWxheXMuY29uY2F0KGRlbGF5cyk7XG4gIH1cblxuICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgZHVyYXRpb25zLm1hcChmdW5jdGlvbiAoZCwgaSkge1xuICAgIHJldHVybiB0b01zKGQpICsgdG9NcyhkZWxheXNbaV0pXG4gIH0pKVxufVxuXG4vLyBPbGQgdmVyc2lvbnMgb2YgQ2hyb21pdW0gKGJlbG93IDYxLjAuMzE2My4xMDApIGZvcm1hdHMgZmxvYXRpbmcgcG9pbnRlciBudW1iZXJzXG4vLyBpbiBhIGxvY2FsZS1kZXBlbmRlbnQgd2F5LCB1c2luZyBhIGNvbW1hIGluc3RlYWQgb2YgYSBkb3QuXG4vLyBJZiBjb21tYSBpcyBub3QgcmVwbGFjZWQgd2l0aCBhIGRvdCwgdGhlIGlucHV0IHdpbGwgYmUgcm91bmRlZCBkb3duIChpLmUuIGFjdGluZ1xuLy8gYXMgYSBmbG9vciBmdW5jdGlvbikgY2F1c2luZyB1bmV4cGVjdGVkIGJlaGF2aW9yc1xuZnVuY3Rpb24gdG9NcyAocykge1xuICByZXR1cm4gTnVtYmVyKHMuc2xpY2UoMCwgLTEpLnJlcGxhY2UoJywnLCAnLicpKSAqIDEwMDBcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGVudGVyICh2bm9kZSwgdG9nZ2xlRGlzcGxheSkge1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG5cbiAgLy8gY2FsbCBsZWF2ZSBjYWxsYmFjayBub3dcbiAgaWYgKGlzRGVmKGVsLl9sZWF2ZUNiKSkge1xuICAgIGVsLl9sZWF2ZUNiLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgZWwuX2xlYXZlQ2IoKTtcbiAgfVxuXG4gIHZhciBkYXRhID0gcmVzb2x2ZVRyYW5zaXRpb24odm5vZGUuZGF0YS50cmFuc2l0aW9uKTtcbiAgaWYgKGlzVW5kZWYoZGF0YSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYoZWwuX2VudGVyQ2IpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY3NzID0gZGF0YS5jc3M7XG4gIHZhciB0eXBlID0gZGF0YS50eXBlO1xuICB2YXIgZW50ZXJDbGFzcyA9IGRhdGEuZW50ZXJDbGFzcztcbiAgdmFyIGVudGVyVG9DbGFzcyA9IGRhdGEuZW50ZXJUb0NsYXNzO1xuICB2YXIgZW50ZXJBY3RpdmVDbGFzcyA9IGRhdGEuZW50ZXJBY3RpdmVDbGFzcztcbiAgdmFyIGFwcGVhckNsYXNzID0gZGF0YS5hcHBlYXJDbGFzcztcbiAgdmFyIGFwcGVhclRvQ2xhc3MgPSBkYXRhLmFwcGVhclRvQ2xhc3M7XG4gIHZhciBhcHBlYXJBY3RpdmVDbGFzcyA9IGRhdGEuYXBwZWFyQWN0aXZlQ2xhc3M7XG4gIHZhciBiZWZvcmVFbnRlciA9IGRhdGEuYmVmb3JlRW50ZXI7XG4gIHZhciBlbnRlciA9IGRhdGEuZW50ZXI7XG4gIHZhciBhZnRlckVudGVyID0gZGF0YS5hZnRlckVudGVyO1xuICB2YXIgZW50ZXJDYW5jZWxsZWQgPSBkYXRhLmVudGVyQ2FuY2VsbGVkO1xuICB2YXIgYmVmb3JlQXBwZWFyID0gZGF0YS5iZWZvcmVBcHBlYXI7XG4gIHZhciBhcHBlYXIgPSBkYXRhLmFwcGVhcjtcbiAgdmFyIGFmdGVyQXBwZWFyID0gZGF0YS5hZnRlckFwcGVhcjtcbiAgdmFyIGFwcGVhckNhbmNlbGxlZCA9IGRhdGEuYXBwZWFyQ2FuY2VsbGVkO1xuICB2YXIgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xuXG4gIC8vIGFjdGl2ZUluc3RhbmNlIHdpbGwgYWx3YXlzIGJlIHRoZSA8dHJhbnNpdGlvbj4gY29tcG9uZW50IG1hbmFnaW5nIHRoaXNcbiAgLy8gdHJhbnNpdGlvbi4gT25lIGVkZ2UgY2FzZSB0byBjaGVjayBpcyB3aGVuIHRoZSA8dHJhbnNpdGlvbj4gaXMgcGxhY2VkXG4gIC8vIGFzIHRoZSByb290IG5vZGUgb2YgYSBjaGlsZCBjb21wb25lbnQuIEluIHRoYXQgY2FzZSB3ZSBuZWVkIHRvIGNoZWNrXG4gIC8vIDx0cmFuc2l0aW9uPidzIHBhcmVudCBmb3IgYXBwZWFyIGNoZWNrLlxuICB2YXIgY29udGV4dCA9IGFjdGl2ZUluc3RhbmNlO1xuICB2YXIgdHJhbnNpdGlvbk5vZGUgPSBhY3RpdmVJbnN0YW5jZS4kdm5vZGU7XG4gIHdoaWxlICh0cmFuc2l0aW9uTm9kZSAmJiB0cmFuc2l0aW9uTm9kZS5wYXJlbnQpIHtcbiAgICBjb250ZXh0ID0gdHJhbnNpdGlvbk5vZGUuY29udGV4dDtcbiAgICB0cmFuc2l0aW9uTm9kZSA9IHRyYW5zaXRpb25Ob2RlLnBhcmVudDtcbiAgfVxuXG4gIHZhciBpc0FwcGVhciA9ICFjb250ZXh0Ll9pc01vdW50ZWQgfHwgIXZub2RlLmlzUm9vdEluc2VydDtcblxuICBpZiAoaXNBcHBlYXIgJiYgIWFwcGVhciAmJiBhcHBlYXIgIT09ICcnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3RhcnRDbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhckNsYXNzXG4gICAgPyBhcHBlYXJDbGFzc1xuICAgIDogZW50ZXJDbGFzcztcbiAgdmFyIGFjdGl2ZUNsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQWN0aXZlQ2xhc3NcbiAgICA/IGFwcGVhckFjdGl2ZUNsYXNzXG4gICAgOiBlbnRlckFjdGl2ZUNsYXNzO1xuICB2YXIgdG9DbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhclRvQ2xhc3NcbiAgICA/IGFwcGVhclRvQ2xhc3NcbiAgICA6IGVudGVyVG9DbGFzcztcblxuICB2YXIgYmVmb3JlRW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICA/IChiZWZvcmVBcHBlYXIgfHwgYmVmb3JlRW50ZXIpXG4gICAgOiBiZWZvcmVFbnRlcjtcbiAgdmFyIGVudGVySG9vayA9IGlzQXBwZWFyXG4gICAgPyAodHlwZW9mIGFwcGVhciA9PT0gJ2Z1bmN0aW9uJyA/IGFwcGVhciA6IGVudGVyKVxuICAgIDogZW50ZXI7XG4gIHZhciBhZnRlckVudGVySG9vayA9IGlzQXBwZWFyXG4gICAgPyAoYWZ0ZXJBcHBlYXIgfHwgYWZ0ZXJFbnRlcilcbiAgICA6IGFmdGVyRW50ZXI7XG4gIHZhciBlbnRlckNhbmNlbGxlZEhvb2sgPSBpc0FwcGVhclxuICAgID8gKGFwcGVhckNhbmNlbGxlZCB8fCBlbnRlckNhbmNlbGxlZClcbiAgICA6IGVudGVyQ2FuY2VsbGVkO1xuXG4gIHZhciBleHBsaWNpdEVudGVyRHVyYXRpb24gPSB0b051bWJlcihcbiAgICBpc09iamVjdChkdXJhdGlvbilcbiAgICAgID8gZHVyYXRpb24uZW50ZXJcbiAgICAgIDogZHVyYXRpb25cbiAgKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBleHBsaWNpdEVudGVyRHVyYXRpb24gIT0gbnVsbCkge1xuICAgIGNoZWNrRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uLCAnZW50ZXInLCB2bm9kZSk7XG4gIH1cblxuICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2UgJiYgIWlzSUU5O1xuICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGdldEhvb2tBcmd1bWVudHNMZW5ndGgoZW50ZXJIb29rKTtcblxuICB2YXIgY2IgPSBlbC5fZW50ZXJDYiA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpO1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcyk7XG4gICAgICB9XG4gICAgICBlbnRlckNhbmNlbGxlZEhvb2sgJiYgZW50ZXJDYW5jZWxsZWRIb29rKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJFbnRlckhvb2sgJiYgYWZ0ZXJFbnRlckhvb2soZWwpO1xuICAgIH1cbiAgICBlbC5fZW50ZXJDYiA9IG51bGw7XG4gIH0pO1xuXG4gIGlmICghdm5vZGUuZGF0YS5zaG93KSB7XG4gICAgLy8gcmVtb3ZlIHBlbmRpbmcgbGVhdmUgZWxlbWVudCBvbiBlbnRlciBieSBpbmplY3RpbmcgYW4gaW5zZXJ0IGhvb2tcbiAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ2luc2VydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgdmFyIHBlbmRpbmdOb2RlID0gcGFyZW50ICYmIHBhcmVudC5fcGVuZGluZyAmJiBwYXJlbnQuX3BlbmRpbmdbdm5vZGUua2V5XTtcbiAgICAgIGlmIChwZW5kaW5nTm9kZSAmJlxuICAgICAgICBwZW5kaW5nTm9kZS50YWcgPT09IHZub2RlLnRhZyAmJlxuICAgICAgICBwZW5kaW5nTm9kZS5lbG0uX2xlYXZlQ2JcbiAgICAgICkge1xuICAgICAgICBwZW5kaW5nTm9kZS5lbG0uX2xlYXZlQ2IoKTtcbiAgICAgIH1cbiAgICAgIGVudGVySG9vayAmJiBlbnRlckhvb2soZWwsIGNiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHN0YXJ0IGVudGVyIHRyYW5zaXRpb25cbiAgYmVmb3JlRW50ZXJIb29rICYmIGJlZm9yZUVudGVySG9vayhlbCk7XG4gIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcyk7XG4gICAgICAgIGlmICghdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRFbnRlckR1cmF0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAodm5vZGUuZGF0YS5zaG93KSB7XG4gICAgdG9nZ2xlRGlzcGxheSAmJiB0b2dnbGVEaXNwbGF5KCk7XG4gICAgZW50ZXJIb29rICYmIGVudGVySG9vayhlbCwgY2IpO1xuICB9XG5cbiAgaWYgKCFleHBlY3RzQ1NTICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgY2IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsZWF2ZSAodm5vZGUsIHJtKSB7XG4gIHZhciBlbCA9IHZub2RlLmVsbTtcblxuICAvLyBjYWxsIGVudGVyIGNhbGxiYWNrIG5vd1xuICBpZiAoaXNEZWYoZWwuX2VudGVyQ2IpKSB7XG4gICAgZWwuX2VudGVyQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICBlbC5fZW50ZXJDYigpO1xuICB9XG5cbiAgdmFyIGRhdGEgPSByZXNvbHZlVHJhbnNpdGlvbih2bm9kZS5kYXRhLnRyYW5zaXRpb24pO1xuICBpZiAoaXNVbmRlZihkYXRhKSB8fCBlbC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBybSgpXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzRGVmKGVsLl9sZWF2ZUNiKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGNzcyA9IGRhdGEuY3NzO1xuICB2YXIgdHlwZSA9IGRhdGEudHlwZTtcbiAgdmFyIGxlYXZlQ2xhc3MgPSBkYXRhLmxlYXZlQ2xhc3M7XG4gIHZhciBsZWF2ZVRvQ2xhc3MgPSBkYXRhLmxlYXZlVG9DbGFzcztcbiAgdmFyIGxlYXZlQWN0aXZlQ2xhc3MgPSBkYXRhLmxlYXZlQWN0aXZlQ2xhc3M7XG4gIHZhciBiZWZvcmVMZWF2ZSA9IGRhdGEuYmVmb3JlTGVhdmU7XG4gIHZhciBsZWF2ZSA9IGRhdGEubGVhdmU7XG4gIHZhciBhZnRlckxlYXZlID0gZGF0YS5hZnRlckxlYXZlO1xuICB2YXIgbGVhdmVDYW5jZWxsZWQgPSBkYXRhLmxlYXZlQ2FuY2VsbGVkO1xuICB2YXIgZGVsYXlMZWF2ZSA9IGRhdGEuZGVsYXlMZWF2ZTtcbiAgdmFyIGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcblxuICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2UgJiYgIWlzSUU5O1xuICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGdldEhvb2tBcmd1bWVudHNMZW5ndGgobGVhdmUpO1xuXG4gIHZhciBleHBsaWNpdExlYXZlRHVyYXRpb24gPSB0b051bWJlcihcbiAgICBpc09iamVjdChkdXJhdGlvbilcbiAgICAgID8gZHVyYXRpb24ubGVhdmVcbiAgICAgIDogZHVyYXRpb25cbiAgKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc0RlZihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XG4gICAgY2hlY2tEdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24sICdsZWF2ZScsIHZub2RlKTtcbiAgfVxuXG4gIHZhciBjYiA9IGVsLl9sZWF2ZUNiID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5fcGVuZGluZykge1xuICAgICAgZWwucGFyZW50Tm9kZS5fcGVuZGluZ1t2bm9kZS5rZXldID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgfVxuICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICB9XG4gICAgICBsZWF2ZUNhbmNlbGxlZCAmJiBsZWF2ZUNhbmNlbGxlZChlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJtKCk7XG4gICAgICBhZnRlckxlYXZlICYmIGFmdGVyTGVhdmUoZWwpO1xuICAgIH1cbiAgICBlbC5fbGVhdmVDYiA9IG51bGw7XG4gIH0pO1xuXG4gIGlmIChkZWxheUxlYXZlKSB7XG4gICAgZGVsYXlMZWF2ZShwZXJmb3JtTGVhdmUpO1xuICB9IGVsc2Uge1xuICAgIHBlcmZvcm1MZWF2ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVyZm9ybUxlYXZlICgpIHtcbiAgICAvLyB0aGUgZGVsYXllZCBsZWF2ZSBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gY2FuY2VsbGVkXG4gICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIHJlY29yZCBsZWF2aW5nIGVsZW1lbnRcbiAgICBpZiAoIXZub2RlLmRhdGEuc2hvdyAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAoZWwucGFyZW50Tm9kZS5fcGVuZGluZyB8fCAoZWwucGFyZW50Tm9kZS5fcGVuZGluZyA9IHt9KSlbKHZub2RlLmtleSldID0gdm5vZGU7XG4gICAgfVxuICAgIGJlZm9yZUxlYXZlICYmIGJlZm9yZUxlYXZlKGVsKTtcbiAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xuICAgICAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xuICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgICAgICBpZiAoIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRMZWF2ZUR1cmF0aW9uKSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdExlYXZlRHVyYXRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgbGVhdmUgJiYgbGVhdmUoZWwsIGNiKTtcbiAgICBpZiAoIWV4cGVjdHNDU1MgJiYgIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIG9ubHkgdXNlZCBpbiBkZXYgbW9kZVxuZnVuY3Rpb24gY2hlY2tEdXJhdGlvbiAodmFsLCBuYW1lLCB2bm9kZSkge1xuICBpZiAodHlwZW9mIHZhbCAhPT0gJ251bWJlcicpIHtcbiAgICB3YXJuKFxuICAgICAgXCI8dHJhbnNpdGlvbj4gZXhwbGljaXQgXCIgKyBuYW1lICsgXCIgZHVyYXRpb24gaXMgbm90IGEgdmFsaWQgbnVtYmVyIC0gXCIgK1xuICAgICAgXCJnb3QgXCIgKyAoSlNPTi5zdHJpbmdpZnkodmFsKSkgKyBcIi5cIixcbiAgICAgIHZub2RlLmNvbnRleHRcbiAgICApO1xuICB9IGVsc2UgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICB3YXJuKFxuICAgICAgXCI8dHJhbnNpdGlvbj4gZXhwbGljaXQgXCIgKyBuYW1lICsgXCIgZHVyYXRpb24gaXMgTmFOIC0gXCIgK1xuICAgICAgJ3RoZSBkdXJhdGlvbiBleHByZXNzaW9uIG1pZ2h0IGJlIGluY29ycmVjdC4nLFxuICAgICAgdm5vZGUuY29udGV4dFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZER1cmF0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmICFpc05hTih2YWwpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdHJhbnNpdGlvbiBob29rJ3MgYXJndW1lbnQgbGVuZ3RoLiBUaGUgaG9vayBtYXkgYmU6XG4gKiAtIGEgbWVyZ2VkIGhvb2sgKGludm9rZXIpIHdpdGggdGhlIG9yaWdpbmFsIGluIC5mbnNcbiAqIC0gYSB3cmFwcGVkIGNvbXBvbmVudCBtZXRob2QgKGNoZWNrIC5fbGVuZ3RoKVxuICogLSBhIHBsYWluIGZ1bmN0aW9uICgubGVuZ3RoKVxuICovXG5mdW5jdGlvbiBnZXRIb29rQXJndW1lbnRzTGVuZ3RoIChmbikge1xuICBpZiAoaXNVbmRlZihmbikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICB2YXIgaW52b2tlckZucyA9IGZuLmZucztcbiAgaWYgKGlzRGVmKGludm9rZXJGbnMpKSB7XG4gICAgLy8gaW52b2tlclxuICAgIHJldHVybiBnZXRIb29rQXJndW1lbnRzTGVuZ3RoKFxuICAgICAgQXJyYXkuaXNBcnJheShpbnZva2VyRm5zKVxuICAgICAgICA/IGludm9rZXJGbnNbMF1cbiAgICAgICAgOiBpbnZva2VyRm5zXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZm4uX2xlbmd0aCB8fCBmbi5sZW5ndGgpID4gMVxuICB9XG59XG5cbmZ1bmN0aW9uIF9lbnRlciAoXywgdm5vZGUpIHtcbiAgaWYgKHZub2RlLmRhdGEuc2hvdyAhPT0gdHJ1ZSkge1xuICAgIGVudGVyKHZub2RlKTtcbiAgfVxufVxuXG52YXIgdHJhbnNpdGlvbiA9IGluQnJvd3NlciA/IHtcbiAgY3JlYXRlOiBfZW50ZXIsXG4gIGFjdGl2YXRlOiBfZW50ZXIsXG4gIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlJCQxICh2bm9kZSwgcm0pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh2bm9kZS5kYXRhLnNob3cgIT09IHRydWUpIHtcbiAgICAgIGxlYXZlKHZub2RlLCBybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJtKCk7XG4gICAgfVxuICB9XG59IDoge307XG5cbnZhciBwbGF0Zm9ybU1vZHVsZXMgPSBbXG4gIGF0dHJzLFxuICBrbGFzcyxcbiAgZXZlbnRzLFxuICBkb21Qcm9wcyxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb25cbl07XG5cbi8qICAqL1xuXG4vLyB0aGUgZGlyZWN0aXZlIG1vZHVsZSBzaG91bGQgYmUgYXBwbGllZCBsYXN0LCBhZnRlciBhbGxcbi8vIGJ1aWx0LWluIG1vZHVsZXMgaGF2ZSBiZWVuIGFwcGxpZWQuXG52YXIgbW9kdWxlcyA9IHBsYXRmb3JtTW9kdWxlcy5jb25jYXQoYmFzZU1vZHVsZXMpO1xuXG52YXIgcGF0Y2ggPSBjcmVhdGVQYXRjaEZ1bmN0aW9uKHsgbm9kZU9wczogbm9kZU9wcywgbW9kdWxlczogbW9kdWxlcyB9KTtcblxuLyoqXG4gKiBOb3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgbGlrZSBhdHRhY2hpbmdcbiAqIHByb3BlcnRpZXMgdG8gRWxlbWVudHMuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoaXNJRTkpIHtcbiAgLy8gaHR0cDovL3d3dy5tYXR0czQxMS5jb20vcG9zdC9pbnRlcm5ldC1leHBsb3Jlci05LW9uaW5wdXQvXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChlbCAmJiBlbC52bW9kZWwpIHtcbiAgICAgIHRyaWdnZXIoZWwsICdpbnB1dCcpO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBkaXJlY3RpdmUgPSB7XG4gIGluc2VydGVkOiBmdW5jdGlvbiBpbnNlcnRlZCAoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSkge1xuICAgIGlmICh2bm9kZS50YWcgPT09ICdzZWxlY3QnKSB7XG4gICAgICAvLyAjNjkwM1xuICAgICAgaWYgKG9sZFZub2RlLmVsbSAmJiAhb2xkVm5vZGUuZWxtLl92T3B0aW9ucykge1xuICAgICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ3Bvc3RwYXRjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkaXJlY3RpdmUuY29tcG9uZW50VXBkYXRlZChlbCwgYmluZGluZywgdm5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcbiAgICAgIH1cbiAgICAgIGVsLl92T3B0aW9ucyA9IFtdLm1hcC5jYWxsKGVsLm9wdGlvbnMsIGdldFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHZub2RlLnRhZyA9PT0gJ3RleHRhcmVhJyB8fCBpc1RleHRJbnB1dFR5cGUoZWwudHlwZSkpIHtcbiAgICAgIGVsLl92TW9kaWZpZXJzID0gYmluZGluZy5tb2RpZmllcnM7XG4gICAgICBpZiAoIWJpbmRpbmcubW9kaWZpZXJzLmxhenkpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIG9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgb25Db21wb3NpdGlvbkVuZCk7XG4gICAgICAgIC8vIFNhZmFyaSA8IDEwLjIgJiBVSVdlYlZpZXcgZG9lc24ndCBmaXJlIGNvbXBvc2l0aW9uZW5kIHdoZW5cbiAgICAgICAgLy8gc3dpdGNoaW5nIGZvY3VzIGJlZm9yZSBjb25maXJtaW5nIGNvbXBvc2l0aW9uIGNob2ljZVxuICAgICAgICAvLyB0aGlzIGFsc28gZml4ZXMgdGhlIGlzc3VlIHdoZXJlIHNvbWUgYnJvd3NlcnMgZS5nLiBpT1MgQ2hyb21lXG4gICAgICAgIC8vIGZpcmVzIFwiY2hhbmdlXCIgaW5zdGVhZCBvZiBcImlucHV0XCIgb24gYXV0b2NvbXBsZXRlLlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChpc0lFOSkge1xuICAgICAgICAgIGVsLnZtb2RlbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24gY29tcG9uZW50VXBkYXRlZCAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgaWYgKHZub2RlLnRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcbiAgICAgIC8vIGluIGNhc2UgdGhlIG9wdGlvbnMgcmVuZGVyZWQgYnkgdi1mb3IgaGF2ZSBjaGFuZ2VkLFxuICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoZSB2YWx1ZSBpcyBvdXQtb2Ytc3luYyB3aXRoIHRoZSByZW5kZXJlZCBvcHRpb25zLlxuICAgICAgLy8gZGV0ZWN0IHN1Y2ggY2FzZXMgYW5kIGZpbHRlciBvdXQgdmFsdWVzIHRoYXQgbm8gbG9uZ2VyIGhhcyBhIG1hdGNoaW5nXG4gICAgICAvLyBvcHRpb24gaW4gdGhlIERPTS5cbiAgICAgIHZhciBwcmV2T3B0aW9ucyA9IGVsLl92T3B0aW9ucztcbiAgICAgIHZhciBjdXJPcHRpb25zID0gZWwuX3ZPcHRpb25zID0gW10ubWFwLmNhbGwoZWwub3B0aW9ucywgZ2V0VmFsdWUpO1xuICAgICAgaWYgKGN1ck9wdGlvbnMuc29tZShmdW5jdGlvbiAobywgaSkgeyByZXR1cm4gIWxvb3NlRXF1YWwobywgcHJldk9wdGlvbnNbaV0pOyB9KSkge1xuICAgICAgICAvLyB0cmlnZ2VyIGNoYW5nZSBldmVudCBpZlxuICAgICAgICAvLyBubyBtYXRjaGluZyBvcHRpb24gZm91bmQgZm9yIGF0IGxlYXN0IG9uZSB2YWx1ZVxuICAgICAgICB2YXIgbmVlZFJlc2V0ID0gZWwubXVsdGlwbGVcbiAgICAgICAgICA/IGJpbmRpbmcudmFsdWUuc29tZShmdW5jdGlvbiAodikgeyByZXR1cm4gaGFzTm9NYXRjaGluZ09wdGlvbih2LCBjdXJPcHRpb25zKTsgfSlcbiAgICAgICAgICA6IGJpbmRpbmcudmFsdWUgIT09IGJpbmRpbmcub2xkVmFsdWUgJiYgaGFzTm9NYXRjaGluZ09wdGlvbihiaW5kaW5nLnZhbHVlLCBjdXJPcHRpb25zKTtcbiAgICAgICAgaWYgKG5lZWRSZXNldCkge1xuICAgICAgICAgIHRyaWdnZXIoZWwsICdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gc2V0U2VsZWN0ZWQgKGVsLCBiaW5kaW5nLCB2bSkge1xuICBhY3R1YWxseVNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bSk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNJRSB8fCBpc0VkZ2UpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdHVhbGx5U2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZtKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY3R1YWxseVNldFNlbGVjdGVkIChlbCwgYmluZGluZywgdm0pIHtcbiAgdmFyIHZhbHVlID0gYmluZGluZy52YWx1ZTtcbiAgdmFyIGlzTXVsdGlwbGUgPSBlbC5tdWx0aXBsZTtcbiAgaWYgKGlzTXVsdGlwbGUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgXCI8c2VsZWN0IG11bHRpcGxlIHYtbW9kZWw9XFxcIlwiICsgKGJpbmRpbmcuZXhwcmVzc2lvbikgKyBcIlxcXCI+IFwiICtcbiAgICAgIFwiZXhwZWN0cyBhbiBBcnJheSB2YWx1ZSBmb3IgaXRzIGJpbmRpbmcsIGJ1dCBnb3QgXCIgKyAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkpLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWxlY3RlZCwgb3B0aW9uO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb3B0aW9uID0gZWwub3B0aW9uc1tpXTtcbiAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgc2VsZWN0ZWQgPSBsb29zZUluZGV4T2YodmFsdWUsIGdldFZhbHVlKG9wdGlvbikpID4gLTE7XG4gICAgICBpZiAob3B0aW9uLnNlbGVjdGVkICE9PSBzZWxlY3RlZCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxvb3NlRXF1YWwoZ2V0VmFsdWUob3B0aW9uKSwgdmFsdWUpKSB7XG4gICAgICAgIGlmIChlbC5zZWxlY3RlZEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghaXNNdWx0aXBsZSkge1xuICAgIGVsLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNOb01hdGNoaW5nT3B0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5ldmVyeShmdW5jdGlvbiAobykgeyByZXR1cm4gIWxvb3NlRXF1YWwobywgdmFsdWUpOyB9KVxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSAob3B0aW9uKSB7XG4gIHJldHVybiAnX3ZhbHVlJyBpbiBvcHRpb25cbiAgICA/IG9wdGlvbi5fdmFsdWVcbiAgICA6IG9wdGlvbi52YWx1ZVxufVxuXG5mdW5jdGlvbiBvbkNvbXBvc2l0aW9uU3RhcnQgKGUpIHtcbiAgZS50YXJnZXQuY29tcG9zaW5nID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb25Db21wb3NpdGlvbkVuZCAoZSkge1xuICAvLyBwcmV2ZW50IHRyaWdnZXJpbmcgYW4gaW5wdXQgZXZlbnQgZm9yIG5vIHJlYXNvblxuICBpZiAoIWUudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm4gfVxuICBlLnRhcmdldC5jb21wb3NpbmcgPSBmYWxzZTtcbiAgdHJpZ2dlcihlLnRhcmdldCwgJ2lucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXIgKGVsLCB0eXBlKSB7XG4gIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgZS5pbml0RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gIGVsLmRpc3BhdGNoRXZlbnQoZSk7XG59XG5cbi8qICAqL1xuXG4vLyByZWN1cnNpdmVseSBzZWFyY2ggZm9yIHBvc3NpYmxlIHRyYW5zaXRpb24gZGVmaW5lZCBpbnNpZGUgdGhlIGNvbXBvbmVudCByb290XG5mdW5jdGlvbiBsb2NhdGVOb2RlICh2bm9kZSkge1xuICByZXR1cm4gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgJiYgKCF2bm9kZS5kYXRhIHx8ICF2bm9kZS5kYXRhLnRyYW5zaXRpb24pXG4gICAgPyBsb2NhdGVOb2RlKHZub2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSlcbiAgICA6IHZub2RlXG59XG5cbnZhciBzaG93ID0ge1xuICBiaW5kOiBmdW5jdGlvbiBiaW5kIChlbCwgcmVmLCB2bm9kZSkge1xuICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcblxuICAgIHZub2RlID0gbG9jYXRlTm9kZSh2bm9kZSk7XG4gICAgdmFyIHRyYW5zaXRpb24kJDEgPSB2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEudHJhbnNpdGlvbjtcbiAgICB2YXIgb3JpZ2luYWxEaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5ID1cbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICcnIDogZWwuc3R5bGUuZGlzcGxheTtcbiAgICBpZiAodmFsdWUgJiYgdHJhbnNpdGlvbiQkMSkge1xuICAgICAgdm5vZGUuZGF0YS5zaG93ID0gdHJ1ZTtcbiAgICAgIGVudGVyKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBvcmlnaW5hbERpc3BsYXk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gb3JpZ2luYWxEaXNwbGF5IDogJ25vbmUnO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSAoZWwsIHJlZiwgdm5vZGUpIHtcbiAgICB2YXIgdmFsdWUgPSByZWYudmFsdWU7XG4gICAgdmFyIG9sZFZhbHVlID0gcmVmLm9sZFZhbHVlO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCF2YWx1ZSA9PT0gIW9sZFZhbHVlKSB7IHJldHVybiB9XG4gICAgdm5vZGUgPSBsb2NhdGVOb2RlKHZub2RlKTtcbiAgICB2YXIgdHJhbnNpdGlvbiQkMSA9IHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xuICAgIGlmICh0cmFuc2l0aW9uJCQxKSB7XG4gICAgICB2bm9kZS5kYXRhLnNob3cgPSB0cnVlO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGVudGVyKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fdk9yaWdpbmFsRGlzcGxheTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWF2ZSh2bm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyBlbC5fX3ZPcmlnaW5hbERpc3BsYXkgOiAnbm9uZSc7XG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kIChcbiAgICBlbCxcbiAgICBiaW5kaW5nLFxuICAgIHZub2RlLFxuICAgIG9sZFZub2RlLFxuICAgIGlzRGVzdHJveVxuICApIHtcbiAgICBpZiAoIWlzRGVzdHJveSkge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fdk9yaWdpbmFsRGlzcGxheTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBwbGF0Zm9ybURpcmVjdGl2ZXMgPSB7XG4gIG1vZGVsOiBkaXJlY3RpdmUsXG4gIHNob3c6IHNob3dcbn07XG5cbi8qICAqL1xuXG52YXIgdHJhbnNpdGlvblByb3BzID0ge1xuICBuYW1lOiBTdHJpbmcsXG4gIGFwcGVhcjogQm9vbGVhbixcbiAgY3NzOiBCb29sZWFuLFxuICBtb2RlOiBTdHJpbmcsXG4gIHR5cGU6IFN0cmluZyxcbiAgZW50ZXJDbGFzczogU3RyaW5nLFxuICBsZWF2ZUNsYXNzOiBTdHJpbmcsXG4gIGVudGVyVG9DbGFzczogU3RyaW5nLFxuICBsZWF2ZVRvQ2xhc3M6IFN0cmluZyxcbiAgZW50ZXJBY3RpdmVDbGFzczogU3RyaW5nLFxuICBsZWF2ZUFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGFwcGVhckNsYXNzOiBTdHJpbmcsXG4gIGFwcGVhckFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGFwcGVhclRvQ2xhc3M6IFN0cmluZyxcbiAgZHVyYXRpb246IFtOdW1iZXIsIFN0cmluZywgT2JqZWN0XVxufTtcblxuLy8gaW4gY2FzZSB0aGUgY2hpbGQgaXMgYWxzbyBhbiBhYnN0cmFjdCBjb21wb25lbnQsIGUuZy4gPGtlZXAtYWxpdmU+XG4vLyB3ZSB3YW50IHRvIHJlY3Vyc2l2ZWx5IHJldHJpZXZlIHRoZSByZWFsIGNvbXBvbmVudCB0byBiZSByZW5kZXJlZFxuZnVuY3Rpb24gZ2V0UmVhbENoaWxkICh2bm9kZSkge1xuICB2YXIgY29tcE9wdGlvbnMgPSB2bm9kZSAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBpZiAoY29tcE9wdGlvbnMgJiYgY29tcE9wdGlvbnMuQ3Rvci5vcHRpb25zLmFic3RyYWN0KSB7XG4gICAgcmV0dXJuIGdldFJlYWxDaGlsZChnZXRGaXJzdENvbXBvbmVudENoaWxkKGNvbXBPcHRpb25zLmNoaWxkcmVuKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0VHJhbnNpdGlvbkRhdGEgKGNvbXApIHtcbiAgdmFyIGRhdGEgPSB7fTtcbiAgdmFyIG9wdGlvbnMgPSBjb21wLiRvcHRpb25zO1xuICAvLyBwcm9wc1xuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5wcm9wc0RhdGEpIHtcbiAgICBkYXRhW2tleV0gPSBjb21wW2tleV07XG4gIH1cbiAgLy8gZXZlbnRzLlxuICAvLyBleHRyYWN0IGxpc3RlbmVycyBhbmQgcGFzcyB0aGVtIGRpcmVjdGx5IHRvIHRoZSB0cmFuc2l0aW9uIG1ldGhvZHNcbiAgdmFyIGxpc3RlbmVycyA9IG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgZm9yICh2YXIga2V5JDEgaW4gbGlzdGVuZXJzKSB7XG4gICAgZGF0YVtjYW1lbGl6ZShrZXkkMSldID0gbGlzdGVuZXJzW2tleSQxXTtcbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBwbGFjZWhvbGRlciAoaCwgcmF3Q2hpbGQpIHtcbiAgaWYgKC9cXGQta2VlcC1hbGl2ZSQvLnRlc3QocmF3Q2hpbGQudGFnKSkge1xuICAgIHJldHVybiBoKCdrZWVwLWFsaXZlJywge1xuICAgICAgcHJvcHM6IHJhd0NoaWxkLmNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNQYXJlbnRUcmFuc2l0aW9uICh2bm9kZSkge1xuICB3aGlsZSAoKHZub2RlID0gdm5vZGUucGFyZW50KSkge1xuICAgIGlmICh2bm9kZS5kYXRhLnRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzU2FtZUNoaWxkIChjaGlsZCwgb2xkQ2hpbGQpIHtcbiAgcmV0dXJuIG9sZENoaWxkLmtleSA9PT0gY2hpbGQua2V5ICYmIG9sZENoaWxkLnRhZyA9PT0gY2hpbGQudGFnXG59XG5cbnZhciBpc05vdFRleHROb2RlID0gZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudGFnIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKTsgfTtcblxudmFyIGlzVlNob3dEaXJlY3RpdmUgPSBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lID09PSAnc2hvdyc7IH07XG5cbnZhciBUcmFuc2l0aW9uID0ge1xuICBuYW1lOiAndHJhbnNpdGlvbicsXG4gIHByb3BzOiB0cmFuc2l0aW9uUHJvcHMsXG4gIGFic3RyYWN0OiB0cnVlLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0O1xuICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGZpbHRlciBvdXQgdGV4dCBub2RlcyAocG9zc2libGUgd2hpdGVzcGFjZXMpXG4gICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5maWx0ZXIoaXNOb3RUZXh0Tm9kZSk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHdhcm4gbXVsdGlwbGUgZWxlbWVudHNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnPHRyYW5zaXRpb24+IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBzaW5nbGUgZWxlbWVudC4gVXNlICcgK1xuICAgICAgICAnPHRyYW5zaXRpb24tZ3JvdXA+IGZvciBsaXN0cy4nLFxuICAgICAgICB0aGlzLiRwYXJlbnRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIG1vZGUgPSB0aGlzLm1vZGU7XG5cbiAgICAvLyB3YXJuIGludmFsaWQgbW9kZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBtb2RlICYmIG1vZGUgIT09ICdpbi1vdXQnICYmIG1vZGUgIT09ICdvdXQtaW4nXG4gICAgKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnaW52YWxpZCA8dHJhbnNpdGlvbj4gbW9kZTogJyArIG1vZGUsXG4gICAgICAgIHRoaXMuJHBhcmVudFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgcmF3Q2hpbGQgPSBjaGlsZHJlblswXTtcblxuICAgIC8vIGlmIHRoaXMgaXMgYSBjb21wb25lbnQgcm9vdCBub2RlIGFuZCB0aGUgY29tcG9uZW50J3NcbiAgICAvLyBwYXJlbnQgY29udGFpbmVyIG5vZGUgYWxzbyBoYXMgdHJhbnNpdGlvbiwgc2tpcC5cbiAgICBpZiAoaGFzUGFyZW50VHJhbnNpdGlvbih0aGlzLiR2bm9kZSkpIHtcbiAgICAgIHJldHVybiByYXdDaGlsZFxuICAgIH1cblxuICAgIC8vIGFwcGx5IHRyYW5zaXRpb24gZGF0YSB0byBjaGlsZFxuICAgIC8vIHVzZSBnZXRSZWFsQ2hpbGQoKSB0byBpZ25vcmUgYWJzdHJhY3QgY29tcG9uZW50cyBlLmcuIGtlZXAtYWxpdmVcbiAgICB2YXIgY2hpbGQgPSBnZXRSZWFsQ2hpbGQocmF3Q2hpbGQpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgIHJldHVybiByYXdDaGlsZFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9sZWF2aW5nKSB7XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXIoaCwgcmF3Q2hpbGQpXG4gICAgfVxuXG4gICAgLy8gZW5zdXJlIGEga2V5IHRoYXQgaXMgdW5pcXVlIHRvIHRoZSB2bm9kZSB0eXBlIGFuZCB0byB0aGlzIHRyYW5zaXRpb25cbiAgICAvLyBjb21wb25lbnQgaW5zdGFuY2UuIFRoaXMga2V5IHdpbGwgYmUgdXNlZCB0byByZW1vdmUgcGVuZGluZyBsZWF2aW5nIG5vZGVzXG4gICAgLy8gZHVyaW5nIGVudGVyaW5nLlxuICAgIHZhciBpZCA9IFwiX190cmFuc2l0aW9uLVwiICsgKHRoaXMuX3VpZCkgKyBcIi1cIjtcbiAgICBjaGlsZC5rZXkgPSBjaGlsZC5rZXkgPT0gbnVsbFxuICAgICAgPyBjaGlsZC5pc0NvbW1lbnRcbiAgICAgICAgPyBpZCArICdjb21tZW50J1xuICAgICAgICA6IGlkICsgY2hpbGQudGFnXG4gICAgICA6IGlzUHJpbWl0aXZlKGNoaWxkLmtleSlcbiAgICAgICAgPyAoU3RyaW5nKGNoaWxkLmtleSkuaW5kZXhPZihpZCkgPT09IDAgPyBjaGlsZC5rZXkgOiBpZCArIGNoaWxkLmtleSlcbiAgICAgICAgOiBjaGlsZC5rZXk7XG5cbiAgICB2YXIgZGF0YSA9IChjaGlsZC5kYXRhIHx8IChjaGlsZC5kYXRhID0ge30pKS50cmFuc2l0aW9uID0gZXh0cmFjdFRyYW5zaXRpb25EYXRhKHRoaXMpO1xuICAgIHZhciBvbGRSYXdDaGlsZCA9IHRoaXMuX3Zub2RlO1xuICAgIHZhciBvbGRDaGlsZCA9IGdldFJlYWxDaGlsZChvbGRSYXdDaGlsZCk7XG5cbiAgICAvLyBtYXJrIHYtc2hvd1xuICAgIC8vIHNvIHRoYXQgdGhlIHRyYW5zaXRpb24gbW9kdWxlIGNhbiBoYW5kIG92ZXIgdGhlIGNvbnRyb2wgdG8gdGhlIGRpcmVjdGl2ZVxuICAgIGlmIChjaGlsZC5kYXRhLmRpcmVjdGl2ZXMgJiYgY2hpbGQuZGF0YS5kaXJlY3RpdmVzLnNvbWUoaXNWU2hvd0RpcmVjdGl2ZSkpIHtcbiAgICAgIGNoaWxkLmRhdGEuc2hvdyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgb2xkQ2hpbGQgJiZcbiAgICAgIG9sZENoaWxkLmRhdGEgJiZcbiAgICAgICFpc1NhbWVDaGlsZChjaGlsZCwgb2xkQ2hpbGQpICYmXG4gICAgICAhaXNBc3luY1BsYWNlaG9sZGVyKG9sZENoaWxkKSAmJlxuICAgICAgLy8gIzY2ODcgY29tcG9uZW50IHJvb3QgaXMgYSBjb21tZW50IG5vZGVcbiAgICAgICEob2xkQ2hpbGQuY29tcG9uZW50SW5zdGFuY2UgJiYgb2xkQ2hpbGQuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlLmlzQ29tbWVudClcbiAgICApIHtcbiAgICAgIC8vIHJlcGxhY2Ugb2xkIGNoaWxkIHRyYW5zaXRpb24gZGF0YSB3aXRoIGZyZXNoIG9uZVxuICAgICAgLy8gaW1wb3J0YW50IGZvciBkeW5hbWljIHRyYW5zaXRpb25zIVxuICAgICAgdmFyIG9sZERhdGEgPSBvbGRDaGlsZC5kYXRhLnRyYW5zaXRpb24gPSBleHRlbmQoe30sIGRhdGEpO1xuICAgICAgLy8gaGFuZGxlIHRyYW5zaXRpb24gbW9kZVxuICAgICAgaWYgKG1vZGUgPT09ICdvdXQtaW4nKSB7XG4gICAgICAgIC8vIHJldHVybiBwbGFjZWhvbGRlciBub2RlIGFuZCBxdWV1ZSB1cGRhdGUgd2hlbiBsZWF2ZSBmaW5pc2hlc1xuICAgICAgICB0aGlzLl9sZWF2aW5nID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2sob2xkRGF0YSwgJ2FmdGVyTGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcyQxLl9sZWF2aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcyQxLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyKGgsIHJhd0NoaWxkKVxuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnaW4tb3V0Jykge1xuICAgICAgICBpZiAoaXNBc3luY1BsYWNlaG9sZGVyKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiBvbGRSYXdDaGlsZFxuICAgICAgICB9XG4gICAgICAgIHZhciBkZWxheWVkTGVhdmU7XG4gICAgICAgIHZhciBwZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiAoKSB7IGRlbGF5ZWRMZWF2ZSgpOyB9O1xuICAgICAgICBtZXJnZVZOb2RlSG9vayhkYXRhLCAnYWZ0ZXJFbnRlcicsIHBlcmZvcm1MZWF2ZSk7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKGRhdGEsICdlbnRlckNhbmNlbGxlZCcsIHBlcmZvcm1MZWF2ZSk7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKG9sZERhdGEsICdkZWxheUxlYXZlJywgZnVuY3Rpb24gKGxlYXZlKSB7IGRlbGF5ZWRMZWF2ZSA9IGxlYXZlOyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmF3Q2hpbGRcbiAgfVxufTtcblxuLyogICovXG5cbnZhciBwcm9wcyA9IGV4dGVuZCh7XG4gIHRhZzogU3RyaW5nLFxuICBtb3ZlQ2xhc3M6IFN0cmluZ1xufSwgdHJhbnNpdGlvblByb3BzKTtcblxuZGVsZXRlIHByb3BzLm1vZGU7XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPSB7XG4gIHByb3BzOiBwcm9wcyxcblxuICBiZWZvcmVNb3VudDogZnVuY3Rpb24gYmVmb3JlTW91bnQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHVwZGF0ZSA9IHRoaXMuX3VwZGF0ZTtcbiAgICB0aGlzLl91cGRhdGUgPSBmdW5jdGlvbiAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgICAgdmFyIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSA9IHNldEFjdGl2ZUluc3RhbmNlKHRoaXMkMSk7XG4gICAgICAvLyBmb3JjZSByZW1vdmluZyBwYXNzXG4gICAgICB0aGlzJDEuX19wYXRjaF9fKFxuICAgICAgICB0aGlzJDEuX3Zub2RlLFxuICAgICAgICB0aGlzJDEua2VwdCxcbiAgICAgICAgZmFsc2UsIC8vIGh5ZHJhdGluZ1xuICAgICAgICB0cnVlIC8vIHJlbW92ZU9ubHkgKCFpbXBvcnRhbnQsIGF2b2lkcyB1bm5lY2Vzc2FyeSBtb3ZlcylcbiAgICAgICk7XG4gICAgICB0aGlzJDEuX3Zub2RlID0gdGhpcyQxLmtlcHQ7XG4gICAgICByZXN0b3JlQWN0aXZlSW5zdGFuY2UoKTtcbiAgICAgIHVwZGF0ZS5jYWxsKHRoaXMkMSwgdm5vZGUsIGh5ZHJhdGluZyk7XG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0YWcgPSB0aGlzLnRhZyB8fCB0aGlzLiR2bm9kZS5kYXRhLnRhZyB8fCAnc3Bhbic7XG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIHByZXZDaGlsZHJlbiA9IHRoaXMucHJldkNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcbiAgICB2YXIgcmF3Q2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdO1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB2YXIgdHJhbnNpdGlvbkRhdGEgPSBleHRyYWN0VHJhbnNpdGlvbkRhdGEodGhpcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IHJhd0NoaWxkcmVuW2ldO1xuICAgICAgaWYgKGMudGFnKSB7XG4gICAgICAgIGlmIChjLmtleSAhPSBudWxsICYmIFN0cmluZyhjLmtleSkuaW5kZXhPZignX192bGlzdCcpICE9PSAwKSB7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChjKTtcbiAgICAgICAgICBtYXBbYy5rZXldID0gY1xuICAgICAgICAgIDsoYy5kYXRhIHx8IChjLmRhdGEgPSB7fSkpLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uRGF0YTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdmFyIG9wdHMgPSBjLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgICAgICAgdmFyIG5hbWUgPSBvcHRzID8gKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcgfHwgJycpIDogYy50YWc7XG4gICAgICAgICAgd2FybigoXCI8dHJhbnNpdGlvbi1ncm91cD4gY2hpbGRyZW4gbXVzdCBiZSBrZXllZDogPFwiICsgbmFtZSArIFwiPlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJldkNoaWxkcmVuKSB7XG4gICAgICB2YXIga2VwdCA9IFtdO1xuICAgICAgdmFyIHJlbW92ZWQgPSBbXTtcbiAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IHByZXZDaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgIHZhciBjJDEgPSBwcmV2Q2hpbGRyZW5baSQxXTtcbiAgICAgICAgYyQxLmRhdGEudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xuICAgICAgICBjJDEuZGF0YS5wb3MgPSBjJDEuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAobWFwW2MkMS5rZXldKSB7XG4gICAgICAgICAga2VwdC5wdXNoKGMkMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlZC5wdXNoKGMkMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMua2VwdCA9IGgodGFnLCBudWxsLCBrZXB0KTtcbiAgICAgIHRoaXMucmVtb3ZlZCA9IHJlbW92ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGFnLCBudWxsLCBjaGlsZHJlbilcbiAgfSxcblxuICB1cGRhdGVkOiBmdW5jdGlvbiB1cGRhdGVkICgpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByZXZDaGlsZHJlbjtcbiAgICB2YXIgbW92ZUNsYXNzID0gdGhpcy5tb3ZlQ2xhc3MgfHwgKCh0aGlzLm5hbWUgfHwgJ3YnKSArICctbW92ZScpO1xuICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoIHx8ICF0aGlzLmhhc01vdmUoY2hpbGRyZW5bMF0uZWxtLCBtb3ZlQ2xhc3MpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB3ZSBkaXZpZGUgdGhlIHdvcmsgaW50byB0aHJlZSBsb29wcyB0byBhdm9pZCBtaXhpbmcgRE9NIHJlYWRzIGFuZCB3cml0ZXNcbiAgICAvLyBpbiBlYWNoIGl0ZXJhdGlvbiAtIHdoaWNoIGhlbHBzIHByZXZlbnQgbGF5b3V0IHRocmFzaGluZy5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNhbGxQZW5kaW5nQ2JzKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKHJlY29yZFBvc2l0aW9uKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGFwcGx5VHJhbnNsYXRpb24pO1xuXG4gICAgLy8gZm9yY2UgcmVmbG93IHRvIHB1dCBldmVyeXRoaW5nIGluIHBvc2l0aW9uXG4gICAgLy8gYXNzaWduIHRvIHRoaXMgdG8gYXZvaWQgYmVpbmcgcmVtb3ZlZCBpbiB0cmVlLXNoYWtpbmdcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB0aGlzLl9yZWZsb3cgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgIGlmIChjLmRhdGEubW92ZWQpIHtcbiAgICAgICAgdmFyIGVsID0gYy5lbG07XG4gICAgICAgIHZhciBzID0gZWwuc3R5bGU7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbW92ZUNsYXNzKTtcbiAgICAgICAgcy50cmFuc2Zvcm0gPSBzLldlYmtpdFRyYW5zZm9ybSA9IHMudHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZEV2ZW50LCBlbC5fbW92ZUNiID0gZnVuY3Rpb24gY2IgKGUpIHtcbiAgICAgICAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gZWwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWUgfHwgL3RyYW5zZm9ybSQvLnRlc3QoZS5wcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmRFdmVudCwgY2IpO1xuICAgICAgICAgICAgZWwuX21vdmVDYiA9IG51bGw7XG4gICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIG1vdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFzTW92ZTogZnVuY3Rpb24gaGFzTW92ZSAoZWwsIG1vdmVDbGFzcykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIWhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICh0aGlzLl9oYXNNb3ZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNNb3ZlXG4gICAgICB9XG4gICAgICAvLyBEZXRlY3Qgd2hldGhlciBhbiBlbGVtZW50IHdpdGggdGhlIG1vdmUgY2xhc3MgYXBwbGllZCBoYXNcbiAgICAgIC8vIENTUyB0cmFuc2l0aW9ucy4gU2luY2UgdGhlIGVsZW1lbnQgbWF5IGJlIGluc2lkZSBhbiBlbnRlcmluZ1xuICAgICAgLy8gdHJhbnNpdGlvbiBhdCB0aGlzIHZlcnkgbW9tZW50LCB3ZSBtYWtlIGEgY2xvbmUgb2YgaXQgYW5kIHJlbW92ZVxuICAgICAgLy8gYWxsIG90aGVyIHRyYW5zaXRpb24gY2xhc3NlcyBhcHBsaWVkIHRvIGVuc3VyZSBvbmx5IHRoZSBtb3ZlIGNsYXNzXG4gICAgICAvLyBpcyBhcHBsaWVkLlxuICAgICAgdmFyIGNsb25lID0gZWwuY2xvbmVOb2RlKCk7XG4gICAgICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgICAgIGVsLl90cmFuc2l0aW9uQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHsgcmVtb3ZlQ2xhc3MoY2xvbmUsIGNscyk7IH0pO1xuICAgICAgfVxuICAgICAgYWRkQ2xhc3MoY2xvbmUsIG1vdmVDbGFzcyk7XG4gICAgICBjbG9uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy4kZWwuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgdmFyIGluZm8gPSBnZXRUcmFuc2l0aW9uSW5mbyhjbG9uZSk7XG4gICAgICB0aGlzLiRlbC5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICByZXR1cm4gKHRoaXMuX2hhc01vdmUgPSBpbmZvLmhhc1RyYW5zZm9ybSlcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNhbGxQZW5kaW5nQ2JzIChjKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoYy5lbG0uX21vdmVDYikge1xuICAgIGMuZWxtLl9tb3ZlQ2IoKTtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGMuZWxtLl9lbnRlckNiKSB7XG4gICAgYy5lbG0uX2VudGVyQ2IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWNvcmRQb3NpdGlvbiAoYykge1xuICBjLmRhdGEubmV3UG9zID0gYy5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5VHJhbnNsYXRpb24gKGMpIHtcbiAgdmFyIG9sZFBvcyA9IGMuZGF0YS5wb3M7XG4gIHZhciBuZXdQb3MgPSBjLmRhdGEubmV3UG9zO1xuICB2YXIgZHggPSBvbGRQb3MubGVmdCAtIG5ld1Bvcy5sZWZ0O1xuICB2YXIgZHkgPSBvbGRQb3MudG9wIC0gbmV3UG9zLnRvcDtcbiAgaWYgKGR4IHx8IGR5KSB7XG4gICAgYy5kYXRhLm1vdmVkID0gdHJ1ZTtcbiAgICB2YXIgcyA9IGMuZWxtLnN0eWxlO1xuICAgIHMudHJhbnNmb3JtID0gcy5XZWJraXRUcmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIGR4ICsgXCJweCxcIiArIGR5ICsgXCJweClcIjtcbiAgICBzLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XG4gIH1cbn1cblxudmFyIHBsYXRmb3JtQ29tcG9uZW50cyA9IHtcbiAgVHJhbnNpdGlvbjogVHJhbnNpdGlvbixcbiAgVHJhbnNpdGlvbkdyb3VwOiBUcmFuc2l0aW9uR3JvdXBcbn07XG5cbi8qICAqL1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHNwZWNpZmljIHV0aWxzXG5WdWUuY29uZmlnLm11c3RVc2VQcm9wID0gbXVzdFVzZVByb3A7XG5WdWUuY29uZmlnLmlzUmVzZXJ2ZWRUYWcgPSBpc1Jlc2VydmVkVGFnO1xuVnVlLmNvbmZpZy5pc1Jlc2VydmVkQXR0ciA9IGlzUmVzZXJ2ZWRBdHRyO1xuVnVlLmNvbmZpZy5nZXRUYWdOYW1lc3BhY2UgPSBnZXRUYWdOYW1lc3BhY2U7XG5WdWUuY29uZmlnLmlzVW5rbm93bkVsZW1lbnQgPSBpc1Vua25vd25FbGVtZW50O1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHJ1bnRpbWUgZGlyZWN0aXZlcyAmIGNvbXBvbmVudHNcbmV4dGVuZChWdWUub3B0aW9ucy5kaXJlY3RpdmVzLCBwbGF0Zm9ybURpcmVjdGl2ZXMpO1xuZXh0ZW5kKFZ1ZS5vcHRpb25zLmNvbXBvbmVudHMsIHBsYXRmb3JtQ29tcG9uZW50cyk7XG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcGF0Y2ggZnVuY3Rpb25cblZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fID0gaW5Ccm93c2VyID8gcGF0Y2ggOiBub29wO1xuXG4vLyBwdWJsaWMgbW91bnQgbWV0aG9kXG5WdWUucHJvdG90eXBlLiRtb3VudCA9IGZ1bmN0aW9uIChcbiAgZWwsXG4gIGh5ZHJhdGluZ1xuKSB7XG4gIGVsID0gZWwgJiYgaW5Ccm93c2VyID8gcXVlcnkoZWwpIDogdW5kZWZpbmVkO1xuICByZXR1cm4gbW91bnRDb21wb25lbnQodGhpcywgZWwsIGh5ZHJhdGluZylcbn07XG5cbi8vIGRldnRvb2xzIGdsb2JhbCBob29rXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuaWYgKGluQnJvd3Nlcikge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29uZmlnLmRldnRvb2xzKSB7XG4gICAgICBpZiAoZGV2dG9vbHMpIHtcbiAgICAgICAgZGV2dG9vbHMuZW1pdCgnaW5pdCcsIFZ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCdcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlW2NvbnNvbGUuaW5mbyA/ICdpbmZvJyA6ICdsb2cnXShcbiAgICAgICAgICAnRG93bmxvYWQgdGhlIFZ1ZSBEZXZ0b29scyBleHRlbnNpb24gZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IGV4cGVyaWVuY2U6XFxuJyArXG4gICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUtZGV2dG9vbHMnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICBjb25maWcucHJvZHVjdGlvblRpcCAhPT0gZmFsc2UgJiZcbiAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJ1xuICAgICkge1xuICAgICAgY29uc29sZVtjb25zb2xlLmluZm8gPyAnaW5mbycgOiAnbG9nJ10oXG4gICAgICAgIFwiWW91IGFyZSBydW5uaW5nIFZ1ZSBpbiBkZXZlbG9wbWVudCBtb2RlLlxcblwiICtcbiAgICAgICAgXCJNYWtlIHN1cmUgdG8gdHVybiBvbiBwcm9kdWN0aW9uIG1vZGUgd2hlbiBkZXBsb3lpbmcgZm9yIHByb2R1Y3Rpb24uXFxuXCIgK1xuICAgICAgICBcIlNlZSBtb3JlIHRpcHMgYXQgaHR0cHM6Ly92dWVqcy5vcmcvZ3VpZGUvZGVwbG95bWVudC5odG1sXCJcbiAgICAgICk7XG4gICAgfVxuICB9LCAwKTtcbn1cblxuLyogICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2W2RhdGEtdi03YmE1YmQ5MF0ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0FwcC52dWVcIixcIndlYnBhY2s6Ly8uL0FwcC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBOEJBO0VBQ0UsVUFBQTtBQzdCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5kaXYge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXCIsXCJkaXYge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YmE1YmQ5MCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdiYTViZDkwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9teS1naXRodWIvc2ltcGxlLWNsaS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3YmE1YmQ5MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3YmE1YmQ5MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3YmE1YmQ5MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YmE1YmQ5MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2JhNWJkOTAmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl92KFwiXFxuICBoZWxsbyBcIiArIF92bS5fcyhfdm0ubmFtZSkgKyBcIiAyXFxuICBcIiksXG4gICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoX3ZtLmdldExvY2FsQWRkcmVzcygpKSldKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YmE1YmQ5MCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjZhYTRkY2U2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiYTViZDkwJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YmE1YmQ5MCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICdAL0FwcC52dWUnXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5cbm5ldyBWdWUoe1xuICByZW5kZXI6IGggPT4gaChBcHApLFxufSkuJG1vdW50KCcjYXBwJylcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsIl9pIiwiaWQiLCJfaTIiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsImxpc3RUb1N0eWxlcyIsInBhcmVudElkIiwic3R5bGVzIiwibmV3U3R5bGVzIiwiY3NzIiwic291cmNlTWFwIiwicGFydCIsInBhcnRzIiwiZW1wdHlPYmplY3QiLCJPYmplY3QiLCJmcmVlemUiLCJpc1VuZGVmIiwidiIsImlzRGVmIiwiaXNUcnVlIiwiaXNGYWxzZSIsImlzUHJpbWl0aXZlIiwidmFsdWUiLCJpc09iamVjdCIsIm9iaiIsIl90b1N0cmluZyIsInByb3RvdHlwZSIsInRvUmF3VHlwZSIsImNhbGwiLCJzbGljZSIsImlzUGxhaW5PYmplY3QiLCJpc1JlZ0V4cCIsImlzVmFsaWRBcnJheUluZGV4IiwidmFsIiwibiIsInBhcnNlRmxvYXQiLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJpc0Zpbml0ZSIsImlzUHJvbWlzZSIsInRoZW4iLCJjYXRjaCIsIkFycmF5IiwiaXNBcnJheSIsInRvTnVtYmVyIiwiaXNOYU4iLCJtYWtlTWFwIiwic3RyIiwiZXhwZWN0c0xvd2VyQ2FzZSIsImNyZWF0ZSIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJpc0J1aWx0SW5UYWciLCJpc1Jlc2VydmVkQXR0cmlidXRlIiwicmVtb3ZlIiwiYXJyIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJrZXkiLCJjYWNoZWQiLCJmbiIsImNhY2hlIiwiY2FjaGVkRm4iLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJyZXBsYWNlIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsImNhcGl0YWxpemUiLCJjaGFyQXQiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsInBvbHlmaWxsQmluZCIsImN0eCIsImJvdW5kRm4iLCJhIiwibCIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2xlbmd0aCIsIm5hdGl2ZUJpbmQiLCJiaW5kIiwiRnVuY3Rpb24iLCJ0b0FycmF5Iiwic3RhcnQiLCJyZXQiLCJleHRlbmQiLCJ0byIsIl9mcm9tIiwidG9PYmplY3QiLCJyZXMiLCJub29wIiwiYiIsIm5vIiwiaWRlbnRpdHkiLCJsb29zZUVxdWFsIiwiaXNPYmplY3RBIiwiaXNPYmplY3RCIiwiaXNBcnJheUEiLCJpc0FycmF5QiIsImV2ZXJ5IiwiZSIsIkRhdGUiLCJnZXRUaW1lIiwia2V5c0EiLCJrZXlzIiwia2V5c0IiLCJsb29zZUluZGV4T2YiLCJvbmNlIiwiY2FsbGVkIiwiU1NSX0FUVFIiLCJBU1NFVF9UWVBFUyIsIkxJRkVDWUNMRV9IT09LUyIsImNvbmZpZyIsIm9wdGlvbk1lcmdlU3RyYXRlZ2llcyIsInNpbGVudCIsInByb2R1Y3Rpb25UaXAiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJkZXZ0b29scyIsInBlcmZvcm1hbmNlIiwiZXJyb3JIYW5kbGVyIiwid2FybkhhbmRsZXIiLCJpZ25vcmVkRWxlbWVudHMiLCJrZXlDb2RlcyIsImlzUmVzZXJ2ZWRUYWciLCJpc1Jlc2VydmVkQXR0ciIsImlzVW5rbm93bkVsZW1lbnQiLCJnZXRUYWdOYW1lc3BhY2UiLCJwYXJzZVBsYXRmb3JtVGFnTmFtZSIsIm11c3RVc2VQcm9wIiwiYXN5bmMiLCJfbGlmZWN5Y2xlSG9va3MiLCJ1bmljb2RlUmVnRXhwIiwiaXNSZXNlcnZlZCIsImNoYXJDb2RlQXQiLCJkZWYiLCJlbnVtZXJhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImJhaWxSRSIsIlJlZ0V4cCIsInBhcnNlUGF0aCIsInBhdGgiLCJ0ZXN0Iiwic2VnbWVudHMiLCJoYXNQcm90byIsImluQnJvd3NlciIsIndpbmRvdyIsImluV2VleCIsIldYRW52aXJvbm1lbnQiLCJwbGF0Zm9ybSIsIndlZXhQbGF0Zm9ybSIsIlVBIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNJRSIsImlzSUU5IiwiaXNFZGdlIiwiaXNBbmRyb2lkIiwiaXNJT1MiLCJpc0Nocm9tZSIsImlzUGhhbnRvbUpTIiwiaXNGRiIsIm1hdGNoIiwibmF0aXZlV2F0Y2giLCJ3YXRjaCIsInN1cHBvcnRzUGFzc2l2ZSIsIm9wdHMiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2lzU2VydmVyIiwiaXNTZXJ2ZXJSZW5kZXJpbmciLCJnbG9iYWwiLCJWVUVfRU5WIiwiX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsImlzTmF0aXZlIiwiQ3RvciIsImhhc1N5bWJvbCIsIlN5bWJvbCIsIlJlZmxlY3QiLCJvd25LZXlzIiwiX1NldCIsIlNldCIsInNldCIsImhhcyIsImFkZCIsImNsZWFyIiwid2FybiIsInRpcCIsImdlbmVyYXRlQ29tcG9uZW50VHJhY2UiLCJmb3JtYXRDb21wb25lbnROYW1lIiwiaGFzQ29uc29sZSIsImNvbnNvbGUiLCJjbGFzc2lmeVJFIiwiY2xhc3NpZnkiLCJtc2ciLCJ2bSIsInRyYWNlIiwiZXJyb3IiLCJpbmNsdWRlRmlsZSIsIiRyb290Iiwib3B0aW9ucyIsImNpZCIsIl9pc1Z1ZSIsIiRvcHRpb25zIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiX2NvbXBvbmVudFRhZyIsImZpbGUiLCJfX2ZpbGUiLCJyZXBlYXQiLCIkcGFyZW50IiwidHJlZSIsImN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSIsImxhc3QiLCJ1aWQiLCJEZXAiLCJzdWJzIiwiYWRkU3ViIiwic3ViIiwicmVtb3ZlU3ViIiwiZGVwZW5kIiwidGFyZ2V0IiwiYWRkRGVwIiwibm90aWZ5Iiwic29ydCIsInVwZGF0ZSIsInRhcmdldFN0YWNrIiwicHVzaFRhcmdldCIsInBvcFRhcmdldCIsInBvcCIsIlZOb2RlIiwidGFnIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiZWxtIiwiY29udGV4dCIsImNvbXBvbmVudE9wdGlvbnMiLCJhc3luY0ZhY3RvcnkiLCJucyIsImZuQ29udGV4dCIsImZuT3B0aW9ucyIsImZuU2NvcGVJZCIsImNvbXBvbmVudEluc3RhbmNlIiwicGFyZW50IiwicmF3IiwiaXNTdGF0aWMiLCJpc1Jvb3RJbnNlcnQiLCJpc0NvbW1lbnQiLCJpc0Nsb25lZCIsImlzT25jZSIsImFzeW5jTWV0YSIsImlzQXN5bmNQbGFjZWhvbGRlciIsInByb3RvdHlwZUFjY2Vzc29ycyIsImNoaWxkIiwiZGVmaW5lUHJvcGVydGllcyIsImNyZWF0ZUVtcHR5Vk5vZGUiLCJub2RlIiwiY3JlYXRlVGV4dFZOb2RlIiwiY2xvbmVWTm9kZSIsInZub2RlIiwiY2xvbmVkIiwiYXJyYXlQcm90byIsImFycmF5TWV0aG9kcyIsIm1ldGhvZHNUb1BhdGNoIiwiZm9yRWFjaCIsIm1ldGhvZCIsIm9yaWdpbmFsIiwibXV0YXRvciIsImFyZ3MiLCJsZW4iLCJyZXN1bHQiLCJvYiIsIl9fb2JfXyIsImluc2VydGVkIiwib2JzZXJ2ZUFycmF5IiwiZGVwIiwiYXJyYXlLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInNob3VsZE9ic2VydmUiLCJ0b2dnbGVPYnNlcnZpbmciLCJPYnNlcnZlciIsInZtQ291bnQiLCJwcm90b0F1Z21lbnQiLCJjb3B5QXVnbWVudCIsIndhbGsiLCJkZWZpbmVSZWFjdGl2ZSQkMSIsIml0ZW1zIiwib2JzZXJ2ZSIsInNyYyIsIl9fcHJvdG9fXyIsImFzUm9vdERhdGEiLCJpc0V4dGVuc2libGUiLCJjdXN0b21TZXR0ZXIiLCJzaGFsbG93IiwicHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXR0ZXIiLCJzZXR0ZXIiLCJjaGlsZE9iIiwicmVhY3RpdmVHZXR0ZXIiLCJkZXBlbmRBcnJheSIsInJlYWN0aXZlU2V0dGVyIiwibmV3VmFsIiwibWF4IiwiZGVsIiwic3RyYXRzIiwiZWwiLCJwcm9wc0RhdGEiLCJkZWZhdWx0U3RyYXQiLCJtZXJnZURhdGEiLCJmcm9tIiwidG9WYWwiLCJmcm9tVmFsIiwibWVyZ2VEYXRhT3JGbiIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwibWVyZ2VkRGF0YUZuIiwibWVyZ2VkSW5zdGFuY2VEYXRhRm4iLCJpbnN0YW5jZURhdGEiLCJkZWZhdWx0RGF0YSIsIm1lcmdlSG9vayIsImRlZHVwZUhvb2tzIiwiaG9va3MiLCJob29rIiwibWVyZ2VBc3NldHMiLCJhc3NlcnRPYmplY3RUeXBlIiwidHlwZSIsImtleSQxIiwicHJvcHMiLCJtZXRob2RzIiwiaW5qZWN0IiwiY29tcHV0ZWQiLCJwcm92aWRlIiwiY2hlY2tDb21wb25lbnRzIiwiY29tcG9uZW50cyIsInZhbGlkYXRlQ29tcG9uZW50TmFtZSIsIm5vcm1hbGl6ZVByb3BzIiwibm9ybWFsaXplSW5qZWN0Iiwibm9ybWFsaXplZCIsIm5vcm1hbGl6ZURpcmVjdGl2ZXMiLCJkaXJzIiwiZGlyZWN0aXZlcyIsImRlZiQkMSIsIm1lcmdlT3B0aW9ucyIsIl9iYXNlIiwiZXh0ZW5kcyIsIm1peGlucyIsIm1lcmdlRmllbGQiLCJzdHJhdCIsInJlc29sdmVBc3NldCIsIndhcm5NaXNzaW5nIiwiYXNzZXRzIiwiY2FtZWxpemVkSWQiLCJQYXNjYWxDYXNlSWQiLCJ2YWxpZGF0ZVByb3AiLCJwcm9wT3B0aW9ucyIsInByb3AiLCJhYnNlbnQiLCJib29sZWFuSW5kZXgiLCJnZXRUeXBlSW5kZXgiLCJCb29sZWFuIiwic3RyaW5nSW5kZXgiLCJnZXRQcm9wRGVmYXVsdFZhbHVlIiwicHJldlNob3VsZE9ic2VydmUiLCJhc3NlcnRQcm9wIiwiZGVmYXVsdCIsIl9wcm9wcyIsImdldFR5cGUiLCJyZXF1aXJlZCIsInZhbGlkIiwiZXhwZWN0ZWRUeXBlcyIsImFzc2VydGVkVHlwZSIsImFzc2VydFR5cGUiLCJleHBlY3RlZFR5cGUiLCJoYXZlRXhwZWN0ZWRUeXBlcyIsInNvbWUiLCJ0IiwiZ2V0SW52YWxpZFR5cGVNZXNzYWdlIiwidmFsaWRhdG9yIiwic2ltcGxlQ2hlY2tSRSIsImZ1bmN0aW9uVHlwZUNoZWNrUkUiLCJpc1NhbWVUeXBlIiwibWVzc2FnZSIsInJlY2VpdmVkVHlwZSIsImlzRXhwbGljYWJsZSIsImlzQm9vbGVhbiIsInN0eWxlVmFsdWUiLCJOdW1iZXIiLCJFWFBMSUNBQkxFX1RZUEVTIiwiZWxlbSIsImhhbmRsZUVycm9yIiwiZXJyIiwiaW5mbyIsImN1ciIsImVycm9yQ2FwdHVyZWQiLCJjYXB0dXJlIiwiZ2xvYmFsSGFuZGxlRXJyb3IiLCJpbnZva2VXaXRoRXJyb3JIYW5kbGluZyIsImhhbmRsZXIiLCJfaGFuZGxlZCIsImxvZ0Vycm9yIiwiaXNVc2luZ01pY3JvVGFzayIsImNhbGxiYWNrcyIsInBlbmRpbmciLCJmbHVzaENhbGxiYWNrcyIsImNvcGllcyIsInRpbWVyRnVuYyIsIlByb21pc2UiLCJwIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJNdXRhdGlvbk9ic2VydmVyIiwiY291bnRlciIsIm9ic2VydmVyIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY2hhcmFjdGVyRGF0YSIsInNldEltbWVkaWF0ZSIsIm5leHRUaWNrIiwiY2IiLCJfcmVzb2x2ZSIsImluaXRQcm94eSIsImFsbG93ZWRHbG9iYWxzIiwid2Fybk5vblByZXNlbnQiLCJ3YXJuUmVzZXJ2ZWRQcmVmaXgiLCJoYXNQcm94eSIsIlByb3h5IiwiaXNCdWlsdEluTW9kaWZpZXIiLCJoYXNIYW5kbGVyIiwiaXNBbGxvd2VkIiwiJGRhdGEiLCJnZXRIYW5kbGVyIiwiaGFuZGxlcnMiLCJyZW5kZXIiLCJfd2l0aFN0cmlwcGVkIiwiX3JlbmRlclByb3h5Iiwic2Vlbk9iamVjdHMiLCJ0cmF2ZXJzZSIsIl90cmF2ZXJzZSIsInNlZW4iLCJpc0EiLCJpc0Zyb3plbiIsImRlcElkIiwibWFyayIsIm1lYXN1cmUiLCJwZXJmIiwiY2xlYXJNYXJrcyIsImNsZWFyTWVhc3VyZXMiLCJzdGFydFRhZyIsImVuZFRhZyIsIm5vcm1hbGl6ZUV2ZW50IiwicGFzc2l2ZSIsIm9uY2UkJDEiLCJjcmVhdGVGbkludm9rZXIiLCJmbnMiLCJpbnZva2VyIiwiYXJndW1lbnRzJDEiLCJ1cGRhdGVMaXN0ZW5lcnMiLCJvbiIsIm9sZE9uIiwicmVtb3ZlJCQxIiwiY3JlYXRlT25jZUhhbmRsZXIiLCJvbGQiLCJldmVudCIsInBhcmFtcyIsIm1lcmdlVk5vZGVIb29rIiwiaG9va0tleSIsIm9sZEhvb2siLCJ3cmFwcGVkSG9vayIsIm1lcmdlZCIsImV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEiLCJhdHRycyIsImFsdEtleSIsImtleUluTG93ZXJDYXNlIiwiY2hlY2tQcm9wIiwiaGFzaCIsInByZXNlcnZlIiwic2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4iLCJub3JtYWxpemVDaGlsZHJlbiIsIm5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4iLCJpc1RleHROb2RlIiwibmVzdGVkSW5kZXgiLCJsYXN0SW5kZXgiLCJzaGlmdCIsIl9pc1ZMaXN0IiwiaW5pdFByb3ZpZGUiLCJfcHJvdmlkZWQiLCJpbml0SW5qZWN0aW9ucyIsInJlc29sdmVJbmplY3QiLCJwcm92aWRlS2V5IiwicHJvdmlkZURlZmF1bHQiLCJyZXNvbHZlU2xvdHMiLCJzbG90cyIsInNsb3QiLCJuYW1lJDEiLCJpc1doaXRlc3BhY2UiLCJub3JtYWxpemVTY29wZWRTbG90cyIsIm5vcm1hbFNsb3RzIiwicHJldlNsb3RzIiwiaGFzTm9ybWFsU2xvdHMiLCJpc1N0YWJsZSIsIiRzdGFibGUiLCIka2V5IiwiX25vcm1hbGl6ZWQiLCIkaGFzTm9ybWFsIiwibm9ybWFsaXplU2NvcGVkU2xvdCIsImtleSQyIiwicHJveHlOb3JtYWxTbG90IiwicHJveHkiLCJyZW5kZXJMaXN0IiwiaXRlcmF0b3IiLCJuZXh0IiwiZG9uZSIsInJlbmRlclNsb3QiLCJmYWxsYmFja1JlbmRlciIsImJpbmRPYmplY3QiLCJzY29wZWRTbG90Rm4iLCIkc2NvcGVkU2xvdHMiLCJub2RlcyIsIiRzbG90cyIsIiRjcmVhdGVFbGVtZW50IiwicmVzb2x2ZUZpbHRlciIsImlzS2V5Tm90TWF0Y2giLCJleHBlY3QiLCJhY3R1YWwiLCJjaGVja0tleUNvZGVzIiwiZXZlbnRLZXlDb2RlIiwiYnVpbHRJbktleUNvZGUiLCJldmVudEtleU5hbWUiLCJidWlsdEluS2V5TmFtZSIsIm1hcHBlZEtleUNvZGUiLCJiaW5kT2JqZWN0UHJvcHMiLCJhc1Byb3AiLCJpc1N5bmMiLCJsb29wIiwiZG9tUHJvcHMiLCJjYW1lbGl6ZWRLZXkiLCJoeXBoZW5hdGVkS2V5IiwiJGV2ZW50IiwicmVuZGVyU3RhdGljIiwiaXNJbkZvciIsIl9zdGF0aWNUcmVlcyIsInN0YXRpY1JlbmRlckZucyIsIm1hcmtTdGF0aWMiLCJtYXJrT25jZSIsIm1hcmtTdGF0aWNOb2RlIiwiYmluZE9iamVjdExpc3RlbmVycyIsImV4aXN0aW5nIiwib3VycyIsInJlc29sdmVTY29wZWRTbG90cyIsImhhc0R5bmFtaWNLZXlzIiwiY29udGVudEhhc2hLZXkiLCJiaW5kRHluYW1pY0tleXMiLCJiYXNlT2JqIiwidmFsdWVzIiwicHJlcGVuZE1vZGlmaWVyIiwic3ltYm9sIiwiaW5zdGFsbFJlbmRlckhlbHBlcnMiLCJfbyIsIl9uIiwiX3MiLCJfbCIsIl90IiwiX3EiLCJfbSIsIl9mIiwiX2siLCJfYiIsIl92IiwiX2UiLCJfdSIsIl9nIiwiX2QiLCJfcCIsIkZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IiwidGhpcyQxIiwiY29udGV4dFZtIiwiX29yaWdpbmFsIiwiaXNDb21waWxlZCIsIl9jb21waWxlZCIsIm5lZWROb3JtYWxpemF0aW9uIiwibGlzdGVuZXJzIiwiaW5qZWN0aW9ucyIsInNjb3BlZFNsb3RzIiwiX3Njb3BlSWQiLCJfYyIsImQiLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudCIsIm1lcmdlUHJvcHMiLCJyZW5kZXJDb250ZXh0IiwiY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCIsInZub2RlcyIsImNsb25lIiwiZGV2dG9vbHNNZXRhIiwiY29tcG9uZW50Vk5vZGVIb29rcyIsImluaXQiLCJoeWRyYXRpbmciLCJfaXNEZXN0cm95ZWQiLCJrZWVwQWxpdmUiLCJtb3VudGVkTm9kZSIsInByZXBhdGNoIiwiY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSIsImFjdGl2ZUluc3RhbmNlIiwiJG1vdW50Iiwib2xkVm5vZGUiLCJ1cGRhdGVDaGlsZENvbXBvbmVudCIsImluc2VydCIsIl9pc01vdW50ZWQiLCJjYWxsSG9vayIsInF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50IiwiYWN0aXZhdGVDaGlsZENvbXBvbmVudCIsImRlc3Ryb3kiLCIkZGVzdHJveSIsImRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCIsImhvb2tzVG9NZXJnZSIsImNyZWF0ZUNvbXBvbmVudCIsImJhc2VDdG9yIiwicmVzb2x2ZUFzeW5jQ29tcG9uZW50IiwiY3JlYXRlQXN5bmNQbGFjZWhvbGRlciIsInJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMiLCJtb2RlbCIsInRyYW5zZm9ybU1vZGVsIiwiZnVuY3Rpb25hbCIsIm5hdGl2ZU9uIiwiYWJzdHJhY3QiLCJpbnN0YWxsQ29tcG9uZW50SG9va3MiLCJfaXNDb21wb25lbnQiLCJfcGFyZW50Vm5vZGUiLCJpbmxpbmVUZW1wbGF0ZSIsInRvTWVyZ2UiLCJfbWVyZ2VkIiwibWVyZ2VIb29rJDEiLCJmMSIsImYyIiwiY2FsbGJhY2siLCJTSU1QTEVfTk9STUFMSVpFIiwiQUxXQVlTX05PUk1BTElaRSIsIm5vcm1hbGl6YXRpb25UeXBlIiwiYWx3YXlzTm9ybWFsaXplIiwiX2NyZWF0ZUVsZW1lbnQiLCJpcyIsIiR2bm9kZSIsInByZSIsImFwcGx5TlMiLCJyZWdpc3RlckRlZXBCaW5kaW5ncyIsImZvcmNlIiwic3R5bGUiLCJjbGFzcyIsImluaXRSZW5kZXIiLCJfdm5vZGUiLCJwYXJlbnRWbm9kZSIsIl9yZW5kZXJDaGlsZHJlbiIsInBhcmVudERhdGEiLCJpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQiLCJfcGFyZW50TGlzdGVuZXJzIiwiY3VycmVudFJlbmRlcmluZ0luc3RhbmNlIiwicmVuZGVyTWl4aW4iLCJWdWUiLCIkbmV4dFRpY2siLCJfcmVuZGVyIiwicmVmIiwicmVuZGVyRXJyb3IiLCJlbnN1cmVDdG9yIiwiY29tcCIsImJhc2UiLCJfX2VzTW9kdWxlIiwidG9TdHJpbmdUYWciLCJmYWN0b3J5IiwiZXJyb3JDb21wIiwicmVzb2x2ZWQiLCJvd25lciIsIm93bmVycyIsImxvYWRpbmciLCJsb2FkaW5nQ29tcCIsInN5bmMiLCJ0aW1lckxvYWRpbmciLCJ0aW1lclRpbWVvdXQiLCIkb24iLCJmb3JjZVJlbmRlciIsInJlbmRlckNvbXBsZXRlZCIsIiRmb3JjZVVwZGF0ZSIsImNsZWFyVGltZW91dCIsInJlamVjdCIsInJlYXNvbiIsImNvbXBvbmVudCIsImRlbGF5IiwidGltZW91dCIsImdldEZpcnN0Q29tcG9uZW50Q2hpbGQiLCJpbml0RXZlbnRzIiwiX2V2ZW50cyIsIl9oYXNIb29rRXZlbnQiLCJ1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnMiLCJyZW1vdmUkMSIsIiRvZmYiLCJfdGFyZ2V0Iiwib25jZUhhbmRsZXIiLCJvbGRMaXN0ZW5lcnMiLCJldmVudHNNaXhpbiIsImhvb2tSRSIsIiRvbmNlIiwiaSQxIiwiY2JzIiwiJGVtaXQiLCJsb3dlckNhc2VFdmVudCIsInNldEFjdGl2ZUluc3RhbmNlIiwicHJldkFjdGl2ZUluc3RhbmNlIiwiaW5pdExpZmVjeWNsZSIsIiRjaGlsZHJlbiIsIiRyZWZzIiwiX3dhdGNoZXIiLCJfaW5hY3RpdmUiLCJfZGlyZWN0SW5hY3RpdmUiLCJfaXNCZWluZ0Rlc3Ryb3llZCIsImxpZmVjeWNsZU1peGluIiwiX3VwZGF0ZSIsInByZXZFbCIsIiRlbCIsInByZXZWbm9kZSIsInJlc3RvcmVBY3RpdmVJbnN0YW5jZSIsIl9fcGF0Y2hfXyIsIl9fdnVlX18iLCJ0ZWFyZG93biIsIl93YXRjaGVycyIsIl9kYXRhIiwibW91bnRDb21wb25lbnQiLCJ0ZW1wbGF0ZSIsInVwZGF0ZUNvbXBvbmVudCIsIl9uYW1lIiwiX3VpZCIsIldhdGNoZXIiLCJiZWZvcmUiLCJyZW5kZXJDaGlsZHJlbiIsIm5ld1Njb3BlZFNsb3RzIiwib2xkU2NvcGVkU2xvdHMiLCJoYXNEeW5hbWljU2NvcGVkU2xvdCIsIm5lZWRzRm9yY2VVcGRhdGUiLCIkYXR0cnMiLCIkbGlzdGVuZXJzIiwicHJvcEtleXMiLCJfcHJvcEtleXMiLCJpc0luSW5hY3RpdmVUcmVlIiwiZGlyZWN0IiwiaiIsIk1BWF9VUERBVEVfQ09VTlQiLCJxdWV1ZSIsImFjdGl2YXRlZENoaWxkcmVuIiwiY2lyY3VsYXIiLCJ3YWl0aW5nIiwiZmx1c2hpbmciLCJyZXNldFNjaGVkdWxlclN0YXRlIiwiY3VycmVudEZsdXNoVGltZXN0YW1wIiwiZ2V0Tm93Iiwibm93IiwiY3JlYXRlRXZlbnQiLCJ0aW1lU3RhbXAiLCJmbHVzaFNjaGVkdWxlclF1ZXVlIiwid2F0Y2hlciIsInJ1biIsInVzZXIiLCJleHByZXNzaW9uIiwiYWN0aXZhdGVkUXVldWUiLCJ1cGRhdGVkUXVldWUiLCJjYWxsQWN0aXZhdGVkSG9va3MiLCJjYWxsVXBkYXRlZEhvb2tzIiwiZW1pdCIsInF1ZXVlV2F0Y2hlciIsInVpZCQyIiwiZXhwT3JGbiIsImlzUmVuZGVyV2F0Y2hlciIsImRlZXAiLCJsYXp5IiwiYWN0aXZlIiwiZGlydHkiLCJkZXBzIiwibmV3RGVwcyIsImRlcElkcyIsIm5ld0RlcElkcyIsImNsZWFudXBEZXBzIiwidG1wIiwib2xkVmFsdWUiLCJldmFsdWF0ZSIsInNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiIsInNvdXJjZUtleSIsInByb3h5R2V0dGVyIiwicHJveHlTZXR0ZXIiLCJpbml0U3RhdGUiLCJpbml0UHJvcHMiLCJpbml0TWV0aG9kcyIsImluaXREYXRhIiwiaW5pdENvbXB1dGVkIiwiaW5pdFdhdGNoIiwicHJvcHNPcHRpb25zIiwiaXNSb290IiwiZ2V0RGF0YSIsImNvbXB1dGVkV2F0Y2hlck9wdGlvbnMiLCJ3YXRjaGVycyIsIl9jb21wdXRlZFdhdGNoZXJzIiwiaXNTU1IiLCJ1c2VyRGVmIiwiZGVmaW5lQ29tcHV0ZWQiLCJzaG91bGRDYWNoZSIsImNyZWF0ZUNvbXB1dGVkR2V0dGVyIiwiY3JlYXRlR2V0dGVySW52b2tlciIsImNvbXB1dGVkR2V0dGVyIiwiY3JlYXRlV2F0Y2hlciIsIiR3YXRjaCIsInN0YXRlTWl4aW4iLCJkYXRhRGVmIiwicHJvcHNEZWYiLCIkc2V0IiwiJGRlbGV0ZSIsImltbWVkaWF0ZSIsInVud2F0Y2hGbiIsInVpZCQzIiwiaW5pdE1peGluIiwiX2luaXQiLCJpbml0SW50ZXJuYWxDb21wb25lbnQiLCJfc2VsZiIsInZub2RlQ29tcG9uZW50T3B0aW9ucyIsInN1cGVyIiwic3VwZXJPcHRpb25zIiwiY2FjaGVkU3VwZXJPcHRpb25zIiwibW9kaWZpZWRPcHRpb25zIiwicmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyIsImV4dGVuZE9wdGlvbnMiLCJtb2RpZmllZCIsImxhdGVzdCIsInNlYWxlZCIsInNlYWxlZE9wdGlvbnMiLCJpbml0VXNlIiwidXNlIiwicGx1Z2luIiwiaW5zdGFsbGVkUGx1Z2lucyIsIl9pbnN0YWxsZWRQbHVnaW5zIiwidW5zaGlmdCIsImluc3RhbGwiLCJpbml0TWl4aW4kMSIsIm1peGluIiwiaW5pdEV4dGVuZCIsIlN1cGVyIiwiU3VwZXJJZCIsImNhY2hlZEN0b3JzIiwiX0N0b3IiLCJTdWIiLCJWdWVDb21wb25lbnQiLCJpbml0UHJvcHMkMSIsImluaXRDb21wdXRlZCQxIiwiQ29tcCIsImluaXRBc3NldFJlZ2lzdGVycyIsImRlZmluaXRpb24iLCJnZXRDb21wb25lbnROYW1lIiwibWF0Y2hlcyIsInBhdHRlcm4iLCJwcnVuZUNhY2hlIiwia2VlcEFsaXZlSW5zdGFuY2UiLCJmaWx0ZXIiLCJlbnRyeSIsInBydW5lQ2FjaGVFbnRyeSIsImN1cnJlbnQiLCJwYXR0ZXJuVHlwZXMiLCJLZWVwQWxpdmUiLCJpbmNsdWRlIiwiZXhjbHVkZSIsImNhY2hlVk5vZGUiLCJ2bm9kZVRvQ2FjaGUiLCJrZXlUb0NhY2hlIiwicGFyc2VJbnQiLCJjcmVhdGVkIiwiZGVzdHJveWVkIiwibW91bnRlZCIsInVwZGF0ZWQiLCJyZWYkMSIsImJ1aWx0SW5Db21wb25lbnRzIiwiaW5pdEdsb2JhbEFQSSIsImNvbmZpZ0RlZiIsInV0aWwiLCJkZWZpbmVSZWFjdGl2ZSIsImRlbGV0ZSIsIm9ic2VydmFibGUiLCJzc3JDb250ZXh0IiwidmVyc2lvbiIsImFjY2VwdFZhbHVlIiwiYXR0ciIsImlzRW51bWVyYXRlZEF0dHIiLCJpc1ZhbGlkQ29udGVudEVkaXRhYmxlVmFsdWUiLCJjb252ZXJ0RW51bWVyYXRlZFZhbHVlIiwiaXNGYWxzeUF0dHJWYWx1ZSIsImlzQm9vbGVhbkF0dHIiLCJ4bGlua05TIiwiaXNYbGluayIsImdldFhsaW5rUHJvcCIsImdlbkNsYXNzRm9yVm5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlIiwibWVyZ2VDbGFzc0RhdGEiLCJyZW5kZXJDbGFzcyIsInN0YXRpY0NsYXNzIiwiZHluYW1pY0NsYXNzIiwic3RyaW5naWZ5Q2xhc3MiLCJzdHJpbmdpZnlBcnJheSIsInN0cmluZ2lmeU9iamVjdCIsInN0cmluZ2lmaWVkIiwibmFtZXNwYWNlTWFwIiwic3ZnIiwibWF0aCIsImlzSFRNTFRhZyIsImlzU1ZHIiwidW5rbm93bkVsZW1lbnRDYWNoZSIsIkhUTUxVbmtub3duRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiaXNUZXh0SW5wdXRUeXBlIiwicXVlcnkiLCJzZWxlY3RlZCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50JDEiLCJ0YWdOYW1lIiwibXVsdGlwbGUiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lc3BhY2UiLCJjcmVhdGVDb21tZW50IiwiaW5zZXJ0QmVmb3JlIiwibmV3Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwibmV4dFNpYmxpbmciLCJzZXRUZXh0Q29udGVudCIsInRleHRDb250ZW50Iiwic2V0U3R5bGVTY29wZSIsInNjb3BlSWQiLCJub2RlT3BzIiwicmVnaXN0ZXJSZWYiLCJpc1JlbW92YWwiLCJyZWZzIiwicmVmSW5Gb3IiLCJlbXB0eU5vZGUiLCJzYW1lVm5vZGUiLCJzYW1lSW5wdXRUeXBlIiwidHlwZUEiLCJ0eXBlQiIsImNyZWF0ZUtleVRvT2xkSWR4IiwiYmVnaW5JZHgiLCJlbmRJZHgiLCJjcmVhdGVQYXRjaEZ1bmN0aW9uIiwiYmFja2VuZCIsImVtcHR5Tm9kZUF0IiwiY3JlYXRlUm1DYiIsImNoaWxkRWxtIiwicmVtb3ZlTm9kZSIsImlzVW5rbm93bkVsZW1lbnQkJDEiLCJpblZQcmUiLCJpZ25vcmUiLCJjcmVhdGluZ0VsbUluVlByZSIsImNyZWF0ZUVsbSIsImluc2VydGVkVm5vZGVRdWV1ZSIsInBhcmVudEVsbSIsInJlZkVsbSIsIm5lc3RlZCIsIm93bmVyQXJyYXkiLCJzZXRTY29wZSIsImNyZWF0ZUNoaWxkcmVuIiwiaW52b2tlQ3JlYXRlSG9va3MiLCJpc1JlYWN0aXZhdGVkIiwiaW5pdENvbXBvbmVudCIsInJlYWN0aXZhdGVDb21wb25lbnQiLCJwZW5kaW5nSW5zZXJ0IiwiaXNQYXRjaGFibGUiLCJpbm5lck5vZGUiLCJ0cmFuc2l0aW9uIiwiYWN0aXZhdGUiLCJyZWYkJDEiLCJjaGVja0R1cGxpY2F0ZUtleXMiLCJhbmNlc3RvciIsImFkZFZub2RlcyIsInN0YXJ0SWR4IiwiaW52b2tlRGVzdHJveUhvb2siLCJyZW1vdmVWbm9kZXMiLCJjaCIsInJlbW92ZUFuZEludm9rZVJlbW92ZUhvb2siLCJybSIsInVwZGF0ZUNoaWxkcmVuIiwib2xkQ2giLCJuZXdDaCIsInJlbW92ZU9ubHkiLCJvbGRTdGFydElkeCIsIm5ld1N0YXJ0SWR4Iiwib2xkRW5kSWR4Iiwib2xkU3RhcnRWbm9kZSIsIm9sZEVuZFZub2RlIiwibmV3RW5kSWR4IiwibmV3U3RhcnRWbm9kZSIsIm5ld0VuZFZub2RlIiwib2xkS2V5VG9JZHgiLCJpZHhJbk9sZCIsInZub2RlVG9Nb3ZlIiwiY2FuTW92ZSIsInBhdGNoVm5vZGUiLCJmaW5kSWR4SW5PbGQiLCJzZWVuS2V5cyIsImVuZCIsImh5ZHJhdGUiLCJwb3N0cGF0Y2giLCJpbnZva2VJbnNlcnRIb29rIiwiaW5pdGlhbCIsImh5ZHJhdGlvbkJhaWxlZCIsImlzUmVuZGVyZWRNb2R1bGUiLCJhc3NlcnROb2RlTWF0Y2giLCJoYXNDaGlsZE5vZGVzIiwiaW5uZXJIVE1MIiwiY2hpbGRyZW5NYXRjaCIsImZpcnN0Q2hpbGQiLCJjaGlsZE5vZGVzIiwiZnVsbEludm9rZSIsIm5vZGVUeXBlIiwicGF0Y2giLCJpc0luaXRpYWxQYXRjaCIsImlzUmVhbEVsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvbGRFbG0iLCJfbGVhdmVDYiIsInBhdGNoYWJsZSIsImkkMiIsInVwZGF0ZURpcmVjdGl2ZXMiLCJ1bmJpbmREaXJlY3RpdmVzIiwiaXNDcmVhdGUiLCJpc0Rlc3Ryb3kiLCJvbGREaXJzIiwibm9ybWFsaXplRGlyZWN0aXZlcyQxIiwibmV3RGlycyIsImRpcnNXaXRoSW5zZXJ0IiwiZGlyc1dpdGhQb3N0cGF0Y2giLCJvbGREaXIiLCJkaXIiLCJjYWxsSG9vayQxIiwib2xkQXJnIiwiYXJnIiwiY29tcG9uZW50VXBkYXRlZCIsImNhbGxJbnNlcnQiLCJlbXB0eU1vZGlmaWVycyIsIm1vZGlmaWVycyIsImdldFJhd0Rpck5hbWUiLCJyYXdOYW1lIiwiYmFzZU1vZHVsZXMiLCJ1cGRhdGVBdHRycyIsImluaGVyaXRBdHRycyIsIm9sZEF0dHJzIiwic2V0QXR0ciIsInJlbW92ZUF0dHJpYnV0ZU5TIiwiaXNJblByZSIsImJhc2VTZXRBdHRyIiwic2V0QXR0cmlidXRlTlMiLCJfX2llcGgiLCJibG9ja2VyIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVwZGF0ZUNsYXNzIiwib2xkRGF0YSIsImNscyIsInRyYW5zaXRpb25DbGFzcyIsIl90cmFuc2l0aW9uQ2xhc3NlcyIsIl9wcmV2Q2xhc3MiLCJrbGFzcyIsIlJBTkdFX1RPS0VOIiwiQ0hFQ0tCT1hfUkFESU9fVE9LRU4iLCJub3JtYWxpemVFdmVudHMiLCJjaGFuZ2UiLCJ0YXJnZXQkMSIsImNyZWF0ZU9uY2VIYW5kbGVyJDEiLCJyZW1vdmUkMiIsInVzZU1pY3JvdGFza0ZpeCIsImFkZCQxIiwiYXR0YWNoZWRUaW1lc3RhbXAiLCJfd3JhcHBlciIsImN1cnJlbnRUYXJnZXQiLCJvd25lckRvY3VtZW50IiwidXBkYXRlRE9NTGlzdGVuZXJzIiwiZXZlbnRzIiwic3ZnQ29udGFpbmVyIiwidXBkYXRlRE9NUHJvcHMiLCJvbGRQcm9wcyIsIl92YWx1ZSIsInN0ckN1ciIsInNob3VsZFVwZGF0ZVZhbHVlIiwiY2hlY2tWYWwiLCJjb21wb3NpbmciLCJpc05vdEluRm9jdXNBbmREaXJ0eSIsImlzRGlydHlXaXRoTW9kaWZpZXJzIiwibm90SW5Gb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJfdk1vZGlmaWVycyIsIm51bWJlciIsInRyaW0iLCJwYXJzZVN0eWxlVGV4dCIsImNzc1RleHQiLCJsaXN0RGVsaW1pdGVyIiwicHJvcGVydHlEZWxpbWl0ZXIiLCJub3JtYWxpemVTdHlsZURhdGEiLCJub3JtYWxpemVTdHlsZUJpbmRpbmciLCJzdGF0aWNTdHlsZSIsImJpbmRpbmdTdHlsZSIsImdldFN0eWxlIiwiY2hlY2tDaGlsZCIsInN0eWxlRGF0YSIsImNzc1ZhclJFIiwiaW1wb3J0YW50UkUiLCJzZXRQcm9wIiwic2V0UHJvcGVydHkiLCJub3JtYWxpemVkTmFtZSIsIm5vcm1hbGl6ZSIsInZlbmRvck5hbWVzIiwiZW1wdHlTdHlsZSIsImNhcE5hbWUiLCJ1cGRhdGVTdHlsZSIsIm9sZFN0YXRpY1N0eWxlIiwib2xkU3R5bGVCaW5kaW5nIiwibm9ybWFsaXplZFN0eWxlIiwib2xkU3R5bGUiLCJuZXdTdHlsZSIsIndoaXRlc3BhY2VSRSIsImFkZENsYXNzIiwiY2xhc3NMaXN0IiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJ0YXIiLCJyZXNvbHZlVHJhbnNpdGlvbiIsImF1dG9Dc3NUcmFuc2l0aW9uIiwiZW50ZXJDbGFzcyIsImVudGVyVG9DbGFzcyIsImVudGVyQWN0aXZlQ2xhc3MiLCJsZWF2ZUNsYXNzIiwibGVhdmVUb0NsYXNzIiwibGVhdmVBY3RpdmVDbGFzcyIsImhhc1RyYW5zaXRpb24iLCJUUkFOU0lUSU9OIiwiQU5JTUFUSU9OIiwidHJhbnNpdGlvblByb3AiLCJ0cmFuc2l0aW9uRW5kRXZlbnQiLCJhbmltYXRpb25Qcm9wIiwiYW5pbWF0aW9uRW5kRXZlbnQiLCJvbnRyYW5zaXRpb25lbmQiLCJvbndlYmtpdHRyYW5zaXRpb25lbmQiLCJvbmFuaW1hdGlvbmVuZCIsIm9ud2Via2l0YW5pbWF0aW9uZW5kIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibmV4dEZyYW1lIiwiYWRkVHJhbnNpdGlvbkNsYXNzIiwidHJhbnNpdGlvbkNsYXNzZXMiLCJyZW1vdmVUcmFuc2l0aW9uQ2xhc3MiLCJ3aGVuVHJhbnNpdGlvbkVuZHMiLCJnZXRUcmFuc2l0aW9uSW5mbyIsInByb3BDb3VudCIsImVuZGVkIiwib25FbmQiLCJ0cmFuc2Zvcm1SRSIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRGVsYXlzIiwidHJhbnNpdGlvbkR1cmF0aW9ucyIsInRyYW5zaXRpb25UaW1lb3V0IiwiZ2V0VGltZW91dCIsImFuaW1hdGlvbkRlbGF5cyIsImFuaW1hdGlvbkR1cmF0aW9ucyIsImFuaW1hdGlvblRpbWVvdXQiLCJoYXNUcmFuc2Zvcm0iLCJkZWxheXMiLCJkdXJhdGlvbnMiLCJ0b01zIiwicyIsImVudGVyIiwidG9nZ2xlRGlzcGxheSIsImNhbmNlbGxlZCIsIl9lbnRlckNiIiwiYXBwZWFyQ2xhc3MiLCJhcHBlYXJUb0NsYXNzIiwiYXBwZWFyQWN0aXZlQ2xhc3MiLCJiZWZvcmVFbnRlciIsImFmdGVyRW50ZXIiLCJlbnRlckNhbmNlbGxlZCIsImJlZm9yZUFwcGVhciIsImFwcGVhciIsImFmdGVyQXBwZWFyIiwiYXBwZWFyQ2FuY2VsbGVkIiwiZHVyYXRpb24iLCJ0cmFuc2l0aW9uTm9kZSIsImlzQXBwZWFyIiwic3RhcnRDbGFzcyIsImFjdGl2ZUNsYXNzIiwidG9DbGFzcyIsImJlZm9yZUVudGVySG9vayIsImVudGVySG9vayIsImFmdGVyRW50ZXJIb29rIiwiZW50ZXJDYW5jZWxsZWRIb29rIiwiZXhwbGljaXRFbnRlckR1cmF0aW9uIiwiY2hlY2tEdXJhdGlvbiIsImV4cGVjdHNDU1MiLCJ1c2VyV2FudHNDb250cm9sIiwiZ2V0SG9va0FyZ3VtZW50c0xlbmd0aCIsInNob3ciLCJwZW5kaW5nTm9kZSIsIl9wZW5kaW5nIiwiaXNWYWxpZER1cmF0aW9uIiwibGVhdmUiLCJiZWZvcmVMZWF2ZSIsImFmdGVyTGVhdmUiLCJsZWF2ZUNhbmNlbGxlZCIsImRlbGF5TGVhdmUiLCJleHBsaWNpdExlYXZlRHVyYXRpb24iLCJwZXJmb3JtTGVhdmUiLCJpbnZva2VyRm5zIiwiX2VudGVyIiwicGxhdGZvcm1Nb2R1bGVzIiwidm1vZGVsIiwidHJpZ2dlciIsImRpcmVjdGl2ZSIsImJpbmRpbmciLCJfdk9wdGlvbnMiLCJzZXRTZWxlY3RlZCIsImdldFZhbHVlIiwib25Db21wb3NpdGlvblN0YXJ0Iiwib25Db21wb3NpdGlvbkVuZCIsInByZXZPcHRpb25zIiwiY3VyT3B0aW9ucyIsIm8iLCJuZWVkUmVzZXQiLCJoYXNOb01hdGNoaW5nT3B0aW9uIiwiYWN0dWFsbHlTZXRTZWxlY3RlZCIsImlzTXVsdGlwbGUiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImxvY2F0ZU5vZGUiLCJ0cmFuc2l0aW9uJCQxIiwib3JpZ2luYWxEaXNwbGF5IiwiX192T3JpZ2luYWxEaXNwbGF5IiwiZGlzcGxheSIsInVuYmluZCIsInBsYXRmb3JtRGlyZWN0aXZlcyIsInRyYW5zaXRpb25Qcm9wcyIsIm1vZGUiLCJnZXRSZWFsQ2hpbGQiLCJjb21wT3B0aW9ucyIsImV4dHJhY3RUcmFuc2l0aW9uRGF0YSIsInBsYWNlaG9sZGVyIiwiaCIsInJhd0NoaWxkIiwiaGFzUGFyZW50VHJhbnNpdGlvbiIsImlzU2FtZUNoaWxkIiwib2xkQ2hpbGQiLCJpc05vdFRleHROb2RlIiwiaXNWU2hvd0RpcmVjdGl2ZSIsIlRyYW5zaXRpb24iLCJfbGVhdmluZyIsIm9sZFJhd0NoaWxkIiwiZGVsYXllZExlYXZlIiwibW92ZUNsYXNzIiwiVHJhbnNpdGlvbkdyb3VwIiwiYmVmb3JlTW91bnQiLCJrZXB0IiwicHJldkNoaWxkcmVuIiwicmF3Q2hpbGRyZW4iLCJ0cmFuc2l0aW9uRGF0YSIsInJlbW92ZWQiLCJjJDEiLCJwb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoYXNNb3ZlIiwiY2FsbFBlbmRpbmdDYnMiLCJyZWNvcmRQb3NpdGlvbiIsImFwcGx5VHJhbnNsYXRpb24iLCJfcmVmbG93IiwiYm9keSIsIm9mZnNldEhlaWdodCIsIm1vdmVkIiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiX21vdmVDYiIsInByb3BlcnR5TmFtZSIsIl9oYXNNb3ZlIiwiY2xvbmVOb2RlIiwibmV3UG9zIiwib2xkUG9zIiwiZHgiLCJsZWZ0IiwiZHkiLCJ0b3AiLCJwbGF0Zm9ybUNvbXBvbmVudHMiLCJBcHAiXSwic291cmNlUm9vdCI6IiJ9