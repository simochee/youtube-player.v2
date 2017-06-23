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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const
  // be aware, internal usage
  // ATTENTION: prefix the global dynamic variables with `__`
  // tags instances cache
  __TAGS_CACHE = [],
  // tags implementation cache
  __TAG_IMPL = {},

  /**
   * Const
   */
  GLOBAL_MIXIN = '__global_mixin',

  // riot specific prefixes or attributes
  ATTRS_PREFIX = 'riot-',

  // Riot Directives
  REF_DIRECTIVES = ['ref', 'data-ref'],
  IS_DIRECTIVE = 'data-is',
  CONDITIONAL_DIRECTIVE = 'if',
  LOOP_DIRECTIVE = 'each',
  LOOP_NO_REORDER_DIRECTIVE = 'no-reorder',
  SHOW_DIRECTIVE = 'show',
  HIDE_DIRECTIVE = 'hide',
  RIOT_EVENTS_KEY = '__riot-events__',

  // for typeof == '' comparisons
  T_STRING = 'string',
  T_OBJECT = 'object',
  T_UNDEF  = 'undefined',
  T_FUNCTION = 'function',

  XLINK_NS = 'http://www.w3.org/1999/xlink',
  SVG_NS = 'http://www.w3.org/2000/svg',
  XLINK_REGEX = /^xlink:(\w+)/,

  WIN = typeof window === T_UNDEF ? undefined : window,

  // special native tags that cannot be treated like the others
  RE_SPECIAL_TAGS = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
  RE_SPECIAL_TAGS_NO_OPTION = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,
  RE_EVENTS_PREFIX = /^on/,
  // reserved words that cannot be overridden
  RE_RESERVED_NAMES = /^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|refs|parent|opts|trigger|o(?:n|ff|ne))$/,
  RE_HTML_ATTRS = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,
  // some DOM attributes must be normalized
  CASE_SENSITIVE_ATTRIBUTES = { 'viewbox': 'viewBox' },
  /**
   * Matches boolean HTML attributes in the riot tag definition.
   * With a long list like this, a regex is faster than `[].indexOf` in most browsers.
   * @const {RegExp}
   * @see [attributes.md](https://github.com/riot/compiler/blob/dev/doc/attributes.md)
   */
  RE_BOOL_ATTRS = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,
  // version# for IE 8-11, 0 for others
  IE_VERSION = (WIN && WIN.document || {}).documentMode | 0
/* harmony export (immutable) */ __webpack_exports__["A"] = __TAGS_CACHE;

/* harmony export (immutable) */ __webpack_exports__["B"] = __TAG_IMPL;

/* harmony export (immutable) */ __webpack_exports__["d"] = GLOBAL_MIXIN;

/* harmony export (immutable) */ __webpack_exports__["a"] = ATTRS_PREFIX;

/* harmony export (immutable) */ __webpack_exports__["j"] = REF_DIRECTIVES;

/* harmony export (immutable) */ __webpack_exports__["g"] = IS_DIRECTIVE;

/* harmony export (immutable) */ __webpack_exports__["c"] = CONDITIONAL_DIRECTIVE;

/* harmony export (immutable) */ __webpack_exports__["h"] = LOOP_DIRECTIVE;

/* harmony export (immutable) */ __webpack_exports__["i"] = LOOP_NO_REORDER_DIRECTIVE;

/* harmony export (immutable) */ __webpack_exports__["r"] = SHOW_DIRECTIVE;

/* harmony export (immutable) */ __webpack_exports__["e"] = HIDE_DIRECTIVE;

/* harmony export (immutable) */ __webpack_exports__["q"] = RIOT_EVENTS_KEY;

/* harmony export (immutable) */ __webpack_exports__["v"] = T_STRING;

/* harmony export (immutable) */ __webpack_exports__["u"] = T_OBJECT;

/* harmony export (immutable) */ __webpack_exports__["w"] = T_UNDEF;

/* harmony export (immutable) */ __webpack_exports__["t"] = T_FUNCTION;

/* harmony export (immutable) */ __webpack_exports__["y"] = XLINK_NS;

/* harmony export (immutable) */ __webpack_exports__["s"] = SVG_NS;

/* harmony export (immutable) */ __webpack_exports__["z"] = XLINK_REGEX;

/* harmony export (immutable) */ __webpack_exports__["x"] = WIN;

/* harmony export (immutable) */ __webpack_exports__["o"] = RE_SPECIAL_TAGS;

/* harmony export (immutable) */ __webpack_exports__["p"] = RE_SPECIAL_TAGS_NO_OPTION;

/* harmony export (immutable) */ __webpack_exports__["l"] = RE_EVENTS_PREFIX;

/* harmony export (immutable) */ __webpack_exports__["n"] = RE_RESERVED_NAMES;

/* harmony export (immutable) */ __webpack_exports__["m"] = RE_HTML_ATTRS;

/* harmony export (immutable) */ __webpack_exports__["b"] = CASE_SENSITIVE_ATTRIBUTES;

/* harmony export (immutable) */ __webpack_exports__["k"] = RE_BOOL_ATTRS;

/* harmony export (immutable) */ __webpack_exports__["f"] = IE_VERSION;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["$$"] = $$;
/* harmony export (immutable) */ __webpack_exports__["$"] = $;
/* harmony export (immutable) */ __webpack_exports__["createFrag"] = createFrag;
/* harmony export (immutable) */ __webpack_exports__["createDOMPlaceholder"] = createDOMPlaceholder;
/* harmony export (immutable) */ __webpack_exports__["isSvg"] = isSvg;
/* harmony export (immutable) */ __webpack_exports__["mkEl"] = mkEl;
/* harmony export (immutable) */ __webpack_exports__["setInnerHTML"] = setInnerHTML;
/* harmony export (immutable) */ __webpack_exports__["toggleVisibility"] = toggleVisibility;
/* harmony export (immutable) */ __webpack_exports__["remAttr"] = remAttr;
/* harmony export (immutable) */ __webpack_exports__["styleObjectToString"] = styleObjectToString;
/* harmony export (immutable) */ __webpack_exports__["getAttr"] = getAttr;
/* harmony export (immutable) */ __webpack_exports__["setAttr"] = setAttr;
/* harmony export (immutable) */ __webpack_exports__["safeInsert"] = safeInsert;
/* harmony export (immutable) */ __webpack_exports__["walkAttrs"] = walkAttrs;
/* harmony export (immutable) */ __webpack_exports__["walkNodes"] = walkNodes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_variables__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__check__ = __webpack_require__(2);



/**
 * Shorter and fast way to select multiple nodes in the DOM
 * @param   { String } selector - DOM selector
 * @param   { Object } ctx - DOM node where the targets of our search will is located
 * @returns { Object } dom nodes found
 */
function $$(selector, ctx) {
  return Array.prototype.slice.call((ctx || document).querySelectorAll(selector))
}

/**
 * Shorter and fast way to select a single node in the DOM
 * @param   { String } selector - unique dom selector
 * @param   { Object } ctx - DOM node where the target of our search will is located
 * @returns { Object } dom node found
 */
function $(selector, ctx) {
  return (ctx || document).querySelector(selector)
}

/**
 * Create a document fragment
 * @returns { Object } document fragment
 */
function createFrag() {
  return document.createDocumentFragment()
}

/**
 * Create a document text node
 * @returns { Object } create a text node to use as placeholder
 */
function createDOMPlaceholder() {
  return document.createTextNode('')
}

/**
 * Check if a DOM node is an svg tag
 * @param   { HTMLElement }  el - node we want to test
 * @returns {Boolean} true if it's an svg node
 */
function isSvg(el) {
  return !!el.ownerSVGElement
}

/**
 * Create a generic DOM node
 * @param   { String } name - name of the DOM node we want to create
 * @param   { Boolean } isSvg - true if we need to use an svg node
 * @returns { Object } DOM node just created
 */
function mkEl(name) {
  return name === 'svg' ? document.createElementNS(__WEBPACK_IMPORTED_MODULE_0__global_variables__["s" /* SVG_NS */], name) : document.createElement(name)
}

/**
 * Set the inner html of any DOM node SVGs included
 * @param { Object } container - DOM node where we'll inject new html
 * @param { String } html - html to inject
 */
/* istanbul ignore next */
function setInnerHTML(container, html) {
  if (!__WEBPACK_IMPORTED_MODULE_1__check__["isUndefined"](container.innerHTML))
    container.innerHTML = html
    // some browsers do not support innerHTML on the SVGs tags
  else {
    const doc = new DOMParser().parseFromString(html, 'application/xml')
    const node = container.ownerDocument.importNode(doc.documentElement, true)
    container.appendChild(node)
  }
}

/**
 * Toggle the visibility of any DOM node
 * @param   { Object }  dom - DOM node we want to hide
 * @param   { Boolean } show - do we want to show it?
 */

function toggleVisibility(dom, show) {
  dom.style.display = show ? '' : 'none'
  dom['hidden'] = show ? false : true
}

/**
 * Remove any DOM attribute from a node
 * @param   { Object } dom - DOM node we want to update
 * @param   { String } name - name of the property we want to remove
 */
function remAttr(dom, name) {
  dom.removeAttribute(name)
}

/**
 * Convert a style object to a string
 * @param   { Object } style - style object we need to parse
 * @returns { String } resulting css string
 * @example
 * styleObjectToString({ color: 'red', height: '10px'}) // => 'color: red; height: 10px'
 */
function styleObjectToString(style) {
  return Object.keys(style).reduce((acc, prop) => {
    return `${acc} ${prop}: ${style[prop]};`
  }, '')
}

/**
 * Get the value of any DOM attribute on a node
 * @param   { Object } dom - DOM node we want to parse
 * @param   { String } name - name of the attribute we want to get
 * @returns { String | undefined } name of the node attribute whether it exists
 */
function getAttr(dom, name) {
  return dom.getAttribute(name)
}

/**
 * Set any DOM attribute
 * @param { Object } dom - DOM node we want to update
 * @param { String } name - name of the property we want to set
 * @param { String } val - value of the property we want to set
 */
function setAttr(dom, name, val) {
  var xlink = __WEBPACK_IMPORTED_MODULE_0__global_variables__["z" /* XLINK_REGEX */].exec(name)
  if (xlink && xlink[1])
    dom.setAttributeNS(__WEBPACK_IMPORTED_MODULE_0__global_variables__["y" /* XLINK_NS */], xlink[1], val)
  else
    dom.setAttribute(name, val)
}

/**
 * Insert safely a tag to fix #1962 #1649
 * @param   { HTMLElement } root - children container
 * @param   { HTMLElement } curr - node to insert
 * @param   { HTMLElement } next - node that should preceed the current node inserted
 */
function safeInsert(root, curr, next) {
  root.insertBefore(curr, next.parentNode && next)
}

/**
 * Minimize risk: only zero or one _space_ between attr & value
 * @param   { String }   html - html string we want to parse
 * @param   { Function } fn - callback function to apply on any attribute found
 */
function walkAttrs(html, fn) {
  if (!html)
    return
  var m
  while (m = __WEBPACK_IMPORTED_MODULE_0__global_variables__["m" /* RE_HTML_ATTRS */].exec(html))
    fn(m[1].toLowerCase(), m[2] || m[3] || m[4])
}

/**
 * Walk down recursively all the children tags starting dom node
 * @param   { Object }   dom - starting node where we will start the recursion
 * @param   { Function } fn - callback to transform the child node just found
 * @param   { Object }   context - fn can optionally return an object, which is passed to children
 */
function walkNodes(dom, fn, context) {
  if (dom) {
    const res = fn(dom, context)
    var next
    // stop the recursion
    if (res === false) return

    dom = dom.firstChild

    while (dom) {
      next = dom.nextSibling
      walkNodes(dom, fn, res)
      dom = next
    }
  }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["isBoolAttr"] = isBoolAttr;
/* harmony export (immutable) */ __webpack_exports__["isFunction"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["isObject"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["isUndefined"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["isString"] = isString;
/* harmony export (immutable) */ __webpack_exports__["isBlank"] = isBlank;
/* harmony export (immutable) */ __webpack_exports__["isArray"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["isWritable"] = isWritable;
/* harmony export (immutable) */ __webpack_exports__["isReservedName"] = isReservedName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_variables__ = __webpack_require__(0);


/**
 * Check Check if the passed argument is undefined
 * @param   { String } value -
 * @returns { Boolean } -
 */
function isBoolAttr(value) {
  return __WEBPACK_IMPORTED_MODULE_0__global_variables__["k" /* RE_BOOL_ATTRS */].test(value)
}

/**
 * Check if passed argument is a function
 * @param   { * } value -
 * @returns { Boolean } -
 */
function isFunction(value) {
  return typeof value === __WEBPACK_IMPORTED_MODULE_0__global_variables__["t" /* T_FUNCTION */]
}

/**
 * Check if passed argument is an object, exclude null
 * NOTE: use isObject(x) && !isArray(x) to excludes arrays.
 * @param   { * } value -
 * @returns { Boolean } -
 */
function isObject(value) {
  return value && typeof value === __WEBPACK_IMPORTED_MODULE_0__global_variables__["u" /* T_OBJECT */] // typeof null is 'object'
}

/**
 * Check if passed argument is undefined
 * @param   { * } value -
 * @returns { Boolean } -
 */
function isUndefined(value) {
  return typeof value === __WEBPACK_IMPORTED_MODULE_0__global_variables__["w" /* T_UNDEF */]
}

/**
 * Check if passed argument is a string
 * @param   { * } value -
 * @returns { Boolean } -
 */
function isString(value) {
  return typeof value === __WEBPACK_IMPORTED_MODULE_0__global_variables__["v" /* T_STRING */]
}

/**
 * Check if passed argument is empty. Different from falsy, because we dont consider 0 or false to be blank
 * @param { * } value -
 * @returns { Boolean } -
 */
function isBlank(value) {
  return isUndefined(value) || value === null || value === ''
}

/**
 * Check if passed argument is a kind of array
 * @param   { * } value -
 * @returns { Boolean } -
 */
function isArray(value) {
  return Array.isArray(value) || value instanceof Array
}

/**
 * Check whether object's property could be overridden
 * @param   { Object }  obj - source object
 * @param   { String }  key - object property
 * @returns { Boolean } -
 */
function isWritable(obj, key) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, key)
  return isUndefined(obj[key]) || descriptor && descriptor.writable
}

/**
 * Check if passed argument is a reserved name
 * @param   { String } value -
 * @returns { Boolean } -
 */
function isReservedName(value) {
  return __WEBPACK_IMPORTED_MODULE_0__global_variables__["n" /* RE_RESERVED_NAMES */].test(value)
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["each"] = each;
/* harmony export (immutable) */ __webpack_exports__["contains"] = contains;
/* harmony export (immutable) */ __webpack_exports__["toCamel"] = toCamel;
/* harmony export (immutable) */ __webpack_exports__["startsWith"] = startsWith;
/* harmony export (immutable) */ __webpack_exports__["defineProperty"] = defineProperty;
/* harmony export (immutable) */ __webpack_exports__["extend"] = extend;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__check__ = __webpack_require__(2);


/**
 * Specialized function for looping an array-like collection with `each={}`
 * @param   { Array } list - collection of items
 * @param   {Function} fn - callback function
 * @returns { Array } the array looped
 */
function each(list, fn) {
  const len = list ? list.length : 0
  let i = 0
  for (; i < len; ++i) {
    fn(list[i], i)
  }
  return list
}

/**
 * Check whether an array contains an item
 * @param   { Array } array - target array
 * @param   { * } item - item to test
 * @returns { Boolean } -
 */
function contains(array, item) {
  return array.indexOf(item) !== -1
}

/**
 * Convert a string containing dashes to camel case
 * @param   { String } str - input string
 * @returns { String } my-string -> myString
 */
function toCamel(str) {
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase())
}

/**
 * Faster String startsWith alternative
 * @param   { String } str - source string
 * @param   { String } value - test string
 * @returns { Boolean } -
 */
function startsWith(str, value) {
  return str.slice(0, value.length) === value
}

/**
 * Helper function to set an immutable property
 * @param   { Object } el - object where the new property will be set
 * @param   { String } key - object key where the new property will be stored
 * @param   { * } value - value of the new property
 * @param   { Object } options - set the propery overriding the default options
 * @returns { Object } - the initial object
 */
function defineProperty(el, key, value, options) {
  Object.defineProperty(el, key, extend({
    value,
    enumerable: false,
    writable: false,
    configurable: true
  }, options))
  return el
}

/**
 * Extend any object with other properties
 * @param   { Object } src - source object
 * @returns { Object } the resulting extended object
 *
 * var obj = { foo: 'baz' }
 * extend(obj, {bar: 'bar', foo: 'bar'})
 * console.log(obj) => {bar: 'bar', foo: 'bar'}
 *
 */
function extend(src) {
  var obj, args = arguments
  for (var i = 1; i < args.length; ++i) {
    if (obj = args[i]) {
      for (var key in obj) {
        // check if this property of the source object could be overridden
        if (__WEBPACK_IMPORTED_MODULE_0__check__["isWritable"](src, key))
          src[key] = obj[key]
      }
    }
  }
  return src
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getTag"] = getTag;
/* harmony export (immutable) */ __webpack_exports__["inheritFrom"] = inheritFrom;
/* harmony export (immutable) */ __webpack_exports__["moveChildTag"] = moveChildTag;
/* harmony export (immutable) */ __webpack_exports__["initChildTag"] = initChildTag;
/* harmony export (immutable) */ __webpack_exports__["getImmediateCustomParentTag"] = getImmediateCustomParentTag;
/* harmony export (immutable) */ __webpack_exports__["unmountAll"] = unmountAll;
/* harmony export (immutable) */ __webpack_exports__["getTagName"] = getTagName;
/* harmony export (immutable) */ __webpack_exports__["cleanUpData"] = cleanUpData;
/* harmony export (immutable) */ __webpack_exports__["arrayishAdd"] = arrayishAdd;
/* harmony export (immutable) */ __webpack_exports__["arrayishRemove"] = arrayishRemove;
/* harmony export (immutable) */ __webpack_exports__["mountTo"] = mountTo;
/* harmony export (immutable) */ __webpack_exports__["makeReplaceVirtual"] = makeReplaceVirtual;
/* harmony export (immutable) */ __webpack_exports__["makeVirtual"] = makeVirtual;
/* harmony export (immutable) */ __webpack_exports__["moveVirtual"] = moveVirtual;
/* harmony export (immutable) */ __webpack_exports__["selectTags"] = selectTags;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_tag__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__check__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_riot_tmpl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_variables__ = __webpack_require__(0);








/**
 * Detect the tag implementation by a DOM node
 * @param   { Object } dom - DOM node we need to parse to get its tag implementation
 * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
 */
function getTag(dom) {
  return dom.tagName && __WEBPACK_IMPORTED_MODULE_5__global_variables__["B" /* __TAG_IMPL */][__WEBPACK_IMPORTED_MODULE_1__dom__["getAttr"](dom, __WEBPACK_IMPORTED_MODULE_5__global_variables__["g" /* IS_DIRECTIVE */]) ||
    __WEBPACK_IMPORTED_MODULE_1__dom__["getAttr"](dom, __WEBPACK_IMPORTED_MODULE_5__global_variables__["g" /* IS_DIRECTIVE */]) || dom.tagName.toLowerCase()]
}

/**
 * Inherit properties from a target tag instance
 * @this Tag
 * @param   { Tag } target - tag where we will inherit properties
 * @param   { Array } propsInSyncWithParent - array of properties to sync with the target
 */
function inheritFrom(target, propsInSyncWithParent) {
  __WEBPACK_IMPORTED_MODULE_2__misc__["each"](Object.keys(target), (k) => {
    // some properties must be always in sync with the parent tag
    var mustSync = !__WEBPACK_IMPORTED_MODULE_3__check__["isReservedName"](k) && __WEBPACK_IMPORTED_MODULE_2__misc__["contains"](propsInSyncWithParent, k)

    if (__WEBPACK_IMPORTED_MODULE_3__check__["isUndefined"](this[k]) || mustSync) {
      // track the property to keep in sync
      // so we can keep it updated
      if (!mustSync) propsInSyncWithParent.push(k)
      this[k] = target[k]
    }
  })
}

/**
 * Move the position of a custom tag in its parent tag
 * @this Tag
 * @param   { String } tagName - key where the tag was stored
 * @param   { Number } newPos - index where the new tag will be stored
 */
function moveChildTag(tagName, newPos) {
  var parent = this.parent,
    tags
  // no parent no move
  if (!parent) return

  tags = parent.tags[tagName]

  if (__WEBPACK_IMPORTED_MODULE_3__check__["isArray"](tags))
    tags.splice(newPos, 0, tags.splice(tags.indexOf(this), 1)[0])
  else arrayishAdd(parent.tags, tagName, this)
}

/**
 * Create a new child tag including it correctly into its parent
 * @param   { Object } child - child tag implementation
 * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
 * @param   { String } innerHTML - inner html of the child node
 * @param   { Object } parent - instance of the parent tag including the child custom tag
 * @returns { Object } instance of the new child tag just created
 */
function initChildTag(child, opts, innerHTML, parent) {
  var tag = new __WEBPACK_IMPORTED_MODULE_0__tag_tag__["a" /* default */](child, opts, innerHTML),
    tagName = opts.tagName || getTagName(opts.root, true),
    ptag = getImmediateCustomParentTag(parent)
  // fix for the parent attribute in the looped elements
  __WEBPACK_IMPORTED_MODULE_2__misc__["defineProperty"](tag, 'parent', ptag)
  // store the real parent tag
  // in some cases this could be different from the custom parent tag
  // for example in nested loops
  tag.__.parent = parent

  // add this tag to the custom parent tag
  arrayishAdd(ptag.tags, tagName, tag)

  // and also to the real parent tag
  if (ptag !== parent)
    arrayishAdd(parent.tags, tagName, tag)

  return tag
}

/**
 * Loop backward all the parents tree to detect the first custom parent tag
 * @param   { Object } tag - a Tag instance
 * @returns { Object } the instance of the first custom parent tag found
 */
function getImmediateCustomParentTag(tag) {
  var ptag = tag
  while (ptag.__.isAnonymous) {
    if (!ptag.parent) break
    ptag = ptag.parent
  }
  return ptag
}

/**
 * Trigger the unmount method on all the expressions
 * @param   { Array } expressions - DOM expressions
 */
function unmountAll(expressions) {
  __WEBPACK_IMPORTED_MODULE_2__misc__["each"](expressions, function(expr) {
    if (expr instanceof __WEBPACK_IMPORTED_MODULE_0__tag_tag__["a" /* default */]) expr.unmount(true)
    else if (expr.tagName) expr.tag.unmount(true)
    else if (expr.unmount) expr.unmount()
  })
}

/**
 * Get the tag name of any DOM node
 * @param   { Object } dom - DOM node we want to parse
 * @param   { Boolean } skipDataIs - hack to ignore the data-is attribute when attaching to parent
 * @returns { String } name to identify this dom node in riot
 */
function getTagName(dom, skipDataIs) {
  var child = getTag(dom),
    namedTag = !skipDataIs && __WEBPACK_IMPORTED_MODULE_1__dom__["getAttr"](dom, __WEBPACK_IMPORTED_MODULE_5__global_variables__["g" /* IS_DIRECTIVE */])
  return namedTag && !__WEBPACK_IMPORTED_MODULE_4_riot_tmpl__["b" /* tmpl */].hasExpr(namedTag) ?
                namedTag :
              child ? child.name : dom.tagName.toLowerCase()
}

/**
 * With this function we avoid that the internal Tag methods get overridden
 * @param   { Object } data - options we want to use to extend the tag instance
 * @returns { Object } clean object without containing the riot internal reserved words
 */
function cleanUpData(data) {
  if (!(data instanceof __WEBPACK_IMPORTED_MODULE_0__tag_tag__["a" /* default */]) && !(data && __WEBPACK_IMPORTED_MODULE_3__check__["isFunction"](data.trigger)))
    return data

  var o = {}
  for (var key in data) {
    if (!__WEBPACK_IMPORTED_MODULE_5__global_variables__["n" /* RE_RESERVED_NAMES */].test(key)) o[key] = data[key]
  }
  return o
}

/**
 * Set the property of an object for a given key. If something already
 * exists there, then it becomes an array containing both the old and new value.
 * @param { Object } obj - object on which to set the property
 * @param { String } key - property name
 * @param { Object } value - the value of the property to be set
 * @param { Boolean } ensureArray - ensure that the property remains an array
 * @param { Number } index - add the new item in a certain array position
 */
function arrayishAdd(obj, key, value, ensureArray, index) {
  const dest = obj[key]
  const isArr = __WEBPACK_IMPORTED_MODULE_3__check__["isArray"](dest)
  const hasIndex = !__WEBPACK_IMPORTED_MODULE_3__check__["isUndefined"](index)

  if (dest && dest === value) return

  // if the key was never set, set it once
  if (!dest && ensureArray) obj[key] = [value]
  else if (!dest) obj[key] = value
  // if it was an array and not yet set
  else {
    if (isArr) {
      const oldIndex = dest.indexOf(value)
      // this item never changed its position
      if (oldIndex === index) return
      // remove the item from its old position
      if (oldIndex !== -1) dest.splice(oldIndex, 1)
      // move or add the item
      if (hasIndex) {
        dest.splice(index, 0, value)
      } else {
        dest.push(value)
      }
    } else obj[key] = [dest, value]
  }
}

/**
 * Removes an item from an object at a given key. If the key points to an array,
 * then the item is just removed from the array.
 * @param { Object } obj - object on which to remove the property
 * @param { String } key - property name
 * @param { Object } value - the value of the property to be removed
 * @param { Boolean } ensureArray - ensure that the property remains an array
*/
function arrayishRemove(obj, key, value, ensureArray) {
  if (__WEBPACK_IMPORTED_MODULE_3__check__["isArray"](obj[key])) {
    let index = obj[key].indexOf(value)
    if (index !== -1) obj[key].splice(index, 1)
    if (!obj[key].length) delete obj[key]
    else if (obj[key].length === 1 && !ensureArray) obj[key] = obj[key][0]
  } else
    delete obj[key] // otherwise just delete the key
}

/**
 * Mount a tag creating new Tag instance
 * @param   { Object } root - dom node where the tag will be mounted
 * @param   { String } tagName - name of the riot tag we want to mount
 * @param   { Object } opts - options to pass to the Tag instance
 * @param   { Object } ctx - optional context that will be used to extend an existing class ( used in riot.Tag )
 * @returns { Tag } a new Tag instance
 */
function mountTo(root, tagName, opts, ctx) {
  var impl = __WEBPACK_IMPORTED_MODULE_5__global_variables__["B" /* __TAG_IMPL */][tagName],
    implClass = __WEBPACK_IMPORTED_MODULE_5__global_variables__["B" /* __TAG_IMPL */][tagName].class,
    tag = ctx || (implClass ? Object.create(implClass.prototype) : {}),
    // cache the inner HTML to fix #855
    innerHTML = root._innerHTML = root._innerHTML || root.innerHTML

  var conf = __WEBPACK_IMPORTED_MODULE_2__misc__["extend"]({ root: root, opts: opts }, { parent: opts ? opts.parent : null })

  if (impl && root) __WEBPACK_IMPORTED_MODULE_0__tag_tag__["a" /* default */].apply(tag, [impl, conf, innerHTML])

  if (tag && tag.mount) {
    tag.mount(true)
    // add this tag to the virtualDom variable
    if (!__WEBPACK_IMPORTED_MODULE_2__misc__["contains"](__WEBPACK_IMPORTED_MODULE_5__global_variables__["A" /* __TAGS_CACHE */], tag)) __WEBPACK_IMPORTED_MODULE_5__global_variables__["A" /* __TAGS_CACHE */].push(tag)
  }

  return tag
}

/**
 * makes a tag virtual and replaces a reference in the dom
 * @this Tag
 * @param { tag } the tag to make virtual
 * @param { ref } the dom reference location
 */
function makeReplaceVirtual(tag, ref) {
  var frag = __WEBPACK_IMPORTED_MODULE_1__dom__["createFrag"]()
  makeVirtual.call(tag, frag)
  ref.parentNode.replaceChild(frag, ref)
}

/**
 * Adds the elements for a virtual tag
 * @this Tag
 * @param { Node } src - the node that will do the inserting or appending
 * @param { Tag } target - only if inserting, insert before this tag's first child
 */
function makeVirtual(src, target) {
  var head = __WEBPACK_IMPORTED_MODULE_1__dom__["createDOMPlaceholder"](),
    tail = __WEBPACK_IMPORTED_MODULE_1__dom__["createDOMPlaceholder"](),
    frag = __WEBPACK_IMPORTED_MODULE_1__dom__["createFrag"](),
    sib, el

  this.root.insertBefore(head, this.root.firstChild)
  this.root.appendChild(tail)

  this.__.head = el = head
  this.__.tail = tail

  while (el) {
    sib = el.nextSibling
    frag.appendChild(el)
    this.__.virts.push(el) // hold for unmounting
    el = sib
  }

  if (target)
    src.insertBefore(frag, target.__.head)
  else
    src.appendChild(frag)
}

/**
 * Move virtual tag and all child nodes
 * @this Tag
 * @param { Node } src  - the node that will do the inserting
 * @param { Tag } target - insert before this tag's first child
 */
function moveVirtual(src, target) {
  var el = this.__.head,
    frag = __WEBPACK_IMPORTED_MODULE_1__dom__["createFrag"](),
    sib

  while (el) {
    sib = el.nextSibling
    frag.appendChild(el)
    el = sib
    if (el === this.__.tail) {
      frag.appendChild(el)
      src.insertBefore(frag, target.__.head)
      break
    }
  }
}

/**
 * Get selectors for tags
 * @param   { Array } tags - tag names to select
 * @returns { String } selector
 */
function selectTags(tags) {
  // select all tags
  if (!tags) {
    var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_5__global_variables__["B" /* __TAG_IMPL */])
    return keys + selectTags(keys)
  }

  return tags
    .filter(t => !/[^-\w]/.test(t))
    .reduce((list, t) => {
      var name = t.trim().toLowerCase()
      return list + `,[${__WEBPACK_IMPORTED_MODULE_5__global_variables__["g" /* IS_DIRECTIVE */]}="${name}"]`
    }, '')
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(riot) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return brackets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tmpl; });

/**
 * The riot template engine
 * @version v3.0.8
 */

var skipRegex = (function () { //eslint-disable-line no-unused-vars

  var beforeReChars = '[{(,;:?=|&!^~>%*/'

  var beforeReWords = [
    'case',
    'default',
    'do',
    'else',
    'in',
    'instanceof',
    'prefix',
    'return',
    'typeof',
    'void',
    'yield'
  ]

  var wordsLastChar = beforeReWords.reduce(function (s, w) {
    return s + w.slice(-1)
  }, '')

  var RE_REGEX = /^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/
  var RE_VN_CHAR = /[$\w]/

  function prev (code, pos) {
    while (--pos >= 0 && /\s/.test(code[pos]));
    return pos
  }

  function _skipRegex (code, start) {

    var re = /.*/g
    var pos = re.lastIndex = start++
    var match = re.exec(code)[0].match(RE_REGEX)

    if (match) {
      var next = pos + match[0].length

      pos = prev(code, pos)
      var c = code[pos]

      if (pos < 0 || ~beforeReChars.indexOf(c)) {
        return next
      }

      if (c === '.') {

        if (code[pos - 1] === '.') {
          start = next
        }

      } else if (c === '+' || c === '-') {

        if (code[--pos] !== c ||
            (pos = prev(code, pos)) < 0 ||
            !RE_VN_CHAR.test(code[pos])) {
          start = next
        }

      } else if (~wordsLastChar.indexOf(c)) {

        var end = pos + 1

        while (--pos >= 0 && RE_VN_CHAR.test(code[pos]));
        if (~beforeReWords.indexOf(code.slice(pos + 1, end))) {
          start = next
        }
      }
    }

    return start
  }

  return _skipRegex

})()

/**
 * riot.util.brackets
 *
 * - `brackets    ` - Returns a string or regex based on its parameter
 * - `brackets.set` - Change the current riot brackets
 *
 * @module
 */

/* global riot */

var brackets = (function (UNDEF) {

  var
    REGLOB = 'g',

    R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,

    R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,

    S_QBLOCKS = R_STRINGS.source + '|' +
      /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' +
      /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,

    UNSUPPORTED = RegExp('[\\' + 'x00-\\x1F<>a-zA-Z0-9\'",;\\\\]'),

    NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g,

    S_QBLOCK2 = R_STRINGS.source + '|' + /(\/)(?![*\/])/.source,

    FINDBRACES = {
      '(': RegExp('([()])|'   + S_QBLOCK2, REGLOB),
      '[': RegExp('([[\\]])|' + S_QBLOCK2, REGLOB),
      '{': RegExp('([{}])|'   + S_QBLOCK2, REGLOB)
    },

    DEFAULT = '{ }'

  var _pairs = [
    '{', '}',
    '{', '}',
    /{[^}]*}/,
    /\\([{}])/g,
    /\\({)|{/g,
    RegExp('\\\\(})|([[({])|(})|' + S_QBLOCK2, REGLOB),
    DEFAULT,
    /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,
    /(^|[^\\]){=[\S\s]*?}/
  ]

  var
    cachedBrackets = UNDEF,
    _regex,
    _cache = [],
    _settings

  function _loopback (re) { return re }

  function _rewrite (re, bp) {
    if (!bp) bp = _cache
    return new RegExp(
      re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''
    )
  }

  function _create (pair) {
    if (pair === DEFAULT) return _pairs

    var arr = pair.split(' ')

    if (arr.length !== 2 || UNSUPPORTED.test(pair)) {
      throw new Error('Unsupported brackets "' + pair + '"')
    }
    arr = arr.concat(pair.replace(NEED_ESCAPE, '\\').split(' '))

    arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr)
    arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr)
    arr[6] = _rewrite(_pairs[6], arr)
    arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCK2, REGLOB)
    arr[8] = pair
    return arr
  }

  function _brackets (reOrIdx) {
    return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx]
  }

  _brackets.split = function split (str, tmpl, _bp) {
    // istanbul ignore next: _bp is for the compiler
    if (!_bp) _bp = _cache

    var
      parts = [],
      match,
      isexpr,
      start,
      pos,
      re = _bp[6]

    var qblocks = []
    var prevStr = ''
    var mark, lastIndex

    isexpr = start = re.lastIndex = 0

    while ((match = re.exec(str))) {

      lastIndex = re.lastIndex
      pos = match.index

      if (isexpr) {

        if (match[2]) {

          var ch = match[2]
          var rech = FINDBRACES[ch]
          var ix = 1

          rech.lastIndex = lastIndex
          while ((match = rech.exec(str))) {
            if (match[1]) {
              if (match[1] === ch) ++ix
              else if (!--ix) break
            } else {
              rech.lastIndex = pushQBlock(match.index, rech.lastIndex, match[2])
            }
          }
          re.lastIndex = ix ? str.length : rech.lastIndex
          continue
        }

        if (!match[3]) {
          re.lastIndex = pushQBlock(pos, lastIndex, match[4])
          continue
        }
      }

      if (!match[1]) {
        unescapeStr(str.slice(start, pos))
        start = re.lastIndex
        re = _bp[6 + (isexpr ^= 1)]
        re.lastIndex = start
      }
    }

    if (str && start < str.length) {
      unescapeStr(str.slice(start))
    }

    parts.qblocks = qblocks

    return parts

    function unescapeStr (s) {
      if (prevStr) {
        s = prevStr + s
        prevStr = ''
      }
      if (tmpl || isexpr) {
        parts.push(s && s.replace(_bp[5], '$1'))
      } else {
        parts.push(s)
      }
    }

    function pushQBlock(_pos, _lastIndex, slash) { //eslint-disable-line
      if (slash) {
        _lastIndex = skipRegex(str, _pos)
      }

      if (tmpl && _lastIndex > _pos + 2) {
        mark = '\u2057' + qblocks.length + '~'
        qblocks.push(str.slice(_pos, _lastIndex))
        prevStr += str.slice(start, _pos) + mark
        start = _lastIndex
      }
      return _lastIndex
    }
  }

  _brackets.hasExpr = function hasExpr (str) {
    return _cache[4].test(str)
  }

  _brackets.loopKeys = function loopKeys (expr) {
    var m = expr.match(_cache[9])

    return m
      ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] }
      : { val: expr.trim() }
  }

  _brackets.array = function array (pair) {
    return pair ? _create(pair) : _cache
  }

  function _reset (pair) {
    if ((pair || (pair = DEFAULT)) !== _cache[8]) {
      _cache = _create(pair)
      _regex = pair === DEFAULT ? _loopback : _rewrite
      _cache[9] = _regex(_pairs[9])
    }
    cachedBrackets = pair
  }

  function _setSettings (o) {
    var b

    o = o || {}
    b = o.brackets
    Object.defineProperty(o, 'brackets', {
      set: _reset,
      get: function () { return cachedBrackets },
      enumerable: true
    })
    _settings = o
    _reset(b)
  }

  Object.defineProperty(_brackets, 'settings', {
    set: _setSettings,
    get: function () { return _settings }
  })

  /* istanbul ignore next: in the browser riot is always in the scope */
  _brackets.settings = typeof riot !== 'undefined' && riot.settings || {}
  _brackets.set = _reset
  _brackets.skipRegex = skipRegex

  _brackets.R_STRINGS = R_STRINGS
  _brackets.R_MLCOMMS = R_MLCOMMS
  _brackets.S_QBLOCKS = S_QBLOCKS
  _brackets.S_QBLOCK2 = S_QBLOCK2

  return _brackets

})()

/**
 * @module tmpl
 *
 * tmpl          - Root function, returns the template value, render with data
 * tmpl.hasExpr  - Test the existence of a expression inside a string
 * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
 */

var tmpl = (function () {

  var _cache = {}

  function _tmpl (str, data) {
    if (!str) return str

    return (_cache[str] || (_cache[str] = _create(str))).call(
      data, _logErr.bind({
        data: data,
        tmpl: str
      })
    )
  }

  _tmpl.hasExpr = brackets.hasExpr

  _tmpl.loopKeys = brackets.loopKeys

  // istanbul ignore next
  _tmpl.clearCache = function () { _cache = {} }

  _tmpl.errorHandler = null

  function _logErr (err, ctx) {

    err.riotData = {
      tagName: ctx && ctx.__ && ctx.__.tagName,
      _riot_id: ctx && ctx._riot_id  //eslint-disable-line camelcase
    }

    if (_tmpl.errorHandler) _tmpl.errorHandler(err)
    else if (
      typeof console !== 'undefined' &&
      typeof console.error === 'function'
    ) {
      console.error(err.message)
      console.log('<%s> %s', err.riotData.tagName || 'Unknown tag', this.tmpl) // eslint-disable-line
      console.log(this.data) // eslint-disable-line
    }
  }

  function _create (str) {
    var expr = _getTmpl(str)

    if (expr.slice(0, 11) !== 'try{return ') expr = 'return ' + expr

    return new Function('E', expr + ';')    // eslint-disable-line no-new-func
  }

  var RE_DQUOTE = /\u2057/g
  var RE_QBMARK = /\u2057(\d+)~/g

  function _getTmpl (str) {
    var parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1)
    var qstr = parts.qblocks
    var expr

    if (parts.length > 2 || parts[0]) {
      var i, j, list = []

      for (i = j = 0; i < parts.length; ++i) {

        expr = parts[i]

        if (expr && (expr = i & 1

            ? _parseExpr(expr, 1, qstr)

            : '"' + expr
                .replace(/\\/g, '\\\\')
                .replace(/\r\n?|\n/g, '\\n')
                .replace(/"/g, '\\"') +
              '"'

          )) list[j++] = expr

      }

      expr = j < 2 ? list[0]
           : '[' + list.join(',') + '].join("")'

    } else {

      expr = _parseExpr(parts[1], 0, qstr)
    }

    if (qstr.length) {
      expr = expr.replace(RE_QBMARK, function (_, pos) {
        return qstr[pos]
          .replace(/\r/g, '\\r')
          .replace(/\n/g, '\\n')
      })
    }
    return expr
  }

  var RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/
  var
    RE_BREND = {
      '(': /[()]/g,
      '[': /[[\]]/g,
      '{': /[{}]/g
    }

  function _parseExpr (expr, asText, qstr) {

    expr = expr
      .replace(/\s+/g, ' ').trim()
      .replace(/\ ?([[\({},?\.:])\ ?/g, '$1')

    if (expr) {
      var
        list = [],
        cnt = 0,
        match

      while (expr &&
            (match = expr.match(RE_CSNAME)) &&
            !match.index
        ) {
        var
          key,
          jsb,
          re = /,|([[{(])|$/g

        expr = RegExp.rightContext
        key  = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1]

        while (jsb = (match = re.exec(expr))[1]) skipBraces(jsb, re)

        jsb  = expr.slice(0, match.index)
        expr = RegExp.rightContext

        list[cnt++] = _wrapExpr(jsb, 1, key)
      }

      expr = !cnt ? _wrapExpr(expr, asText)
           : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0]
    }
    return expr

    function skipBraces (ch, re) {
      var
        mm,
        lv = 1,
        ir = RE_BREND[ch]

      ir.lastIndex = re.lastIndex
      while (mm = ir.exec(expr)) {
        if (mm[0] === ch) ++lv
        else if (!--lv) break
      }
      re.lastIndex = lv ? expr.length : ir.lastIndex
    }
  }

  // istanbul ignore next: not both
  var // eslint-disable-next-line max-len
    JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
    JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
    JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/

  function _wrapExpr (expr, asText, key) {
    var tb

    expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
      if (mvar) {
        pos = tb ? 0 : pos + match.length

        if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
          match = p + '("' + mvar + JS_CONTEXT + mvar
          if (pos) tb = (s = s[pos]) === '.' || s === '(' || s === '['
        } else if (pos) {
          tb = !JS_NOPROPS.test(s.slice(pos))
        }
      }
      return match
    })

    if (tb) {
      expr = 'try{return ' + expr + '}catch(e){E(e,this)}'
    }

    if (key) {

      expr = (tb
          ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')'
        ) + '?"' + key + '":""'

    } else if (asText) {

      expr = 'function(v){' + (tb
          ? expr.replace('return ', 'v=') : 'v=(' + expr + ')'
        ) + ';return v||v===0?v:""}.call(this)'
    }

    return expr
  }

  _tmpl.version = brackets.version = 'v3.0.8'

  return _tmpl

})()


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser_tag_styleManager__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_riot_tmpl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_riot_observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_riot_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_riot_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browser_common_global_variables__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browser_common_util_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__browser_common_util_check__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__browser_common_util_misc__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__browser_common_util_tags__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__browser_tag_core__ = __webpack_require__(14);











/**
 * Riot public api
 */
const settings = __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */]
/* harmony export (immutable) */ __webpack_exports__["settings"] = settings;

const util = {
  tmpl: __WEBPACK_IMPORTED_MODULE_1_riot_tmpl__["b" /* tmpl */],
  brackets: __WEBPACK_IMPORTED_MODULE_1_riot_tmpl__["a" /* brackets */],
  styleManager: __WEBPACK_IMPORTED_MODULE_0__browser_tag_styleManager__["a" /* default */],
  vdom: __WEBPACK_IMPORTED_MODULE_4__browser_common_global_variables__["A" /* __TAGS_CACHE */],
  styleNode: __WEBPACK_IMPORTED_MODULE_0__browser_tag_styleManager__["a" /* default */].styleNode,
  // export the riot internal utils as well
  dom: __WEBPACK_IMPORTED_MODULE_5__browser_common_util_dom__,
  check: __WEBPACK_IMPORTED_MODULE_6__browser_common_util_check__,
  misc: __WEBPACK_IMPORTED_MODULE_7__browser_common_util_misc__,
  tags: __WEBPACK_IMPORTED_MODULE_8__browser_common_util_tags__
}
/* harmony export (immutable) */ __webpack_exports__["util"] = util;


// export the core props/methods
const Tag = __WEBPACK_IMPORTED_MODULE_9__browser_tag_core__["Tag"]
/* harmony export (immutable) */ __webpack_exports__["Tag"] = Tag;

const tag = __WEBPACK_IMPORTED_MODULE_9__browser_tag_core__["tag"]
/* harmony export (immutable) */ __webpack_exports__["tag"] = tag;

const tag2 = __WEBPACK_IMPORTED_MODULE_9__browser_tag_core__["tag2"]
/* harmony export (immutable) */ __webpack_exports__["tag2"] = tag2;

const mount = __WEBPACK_IMPORTED_MODULE_9__browser_tag_core__["mount"]
/* harmony export (immutable) */ __webpack_exports__["mount"] = mount;

const mixin = __WEBPACK_IMPORTED_MODULE_9__browser_tag_core__["mixin"]
/* harmony export (immutable) */ __webpack_exports__["mixin"] = mixin;

const update = __WEBPACK_IMPORTED_MODULE_9__browser_tag_core__["update"]
/* harmony export (immutable) */ __webpack_exports__["update"] = update;

const unregister = __WEBPACK_IMPORTED_MODULE_9__browser_tag_core__["unregister"]
/* harmony export (immutable) */ __webpack_exports__["unregister"] = unregister;

const version = __WEBPACK_IMPORTED_MODULE_9__browser_tag_core__["version"]
/* harmony export (immutable) */ __webpack_exports__["version"] = version;

const observable = __WEBPACK_IMPORTED_MODULE_2_riot_observable___default.a
/* harmony export (immutable) */ __webpack_exports__["observable"] = observable;


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_7__browser_common_util_misc__["extend"]({}, __WEBPACK_IMPORTED_MODULE_9__browser_tag_core__, {
  observable: __WEBPACK_IMPORTED_MODULE_2_riot_observable___default.a,
  settings,
  util,
}));


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser_common_util_misc__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_riot_tmpl__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__browser_common_util_misc__["extend"](Object.create(__WEBPACK_IMPORTED_MODULE_1_riot_tmpl__["a" /* brackets */].settings), {
  skipAnonymousTags: true,
  // handle the auto updates on any DOM event
  autoUpdate: true
}));

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Tag;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_riot_observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_riot_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_riot_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ref__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mkdom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_util_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_util_check__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_util_misc__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_util_tags__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_global_variables__ = __webpack_require__(0);

















// counter to give a unique id to all the Tag instances
var __uid = 0

/**
 * We need to update opts for this tag. That requires updating the expressions
 * in any attributes on the tag, and then copying the result onto opts.
 * @this Tag
 * @param   {Boolean} isLoop - is it a loop tag?
 * @param   { Tag }  parent - parent tag node
 * @param   { Boolean }  isAnonymous - is it a tag without any impl? (a tag not registered)
 * @param   { Object }  opts - tag options
 * @param   { Array }  instAttrs - tag attributes array
 */
function updateOpts(isLoop, parent, isAnonymous, opts, instAttrs) {
  // isAnonymous `each` tags treat `dom` and `root` differently. In this case
  // (and only this case) we don't need to do updateOpts, because the regular parse
  // will update those attrs. Plus, isAnonymous tags don't need opts anyway
  if (isLoop && isAnonymous) return

  var ctx = !isAnonymous && isLoop ? this : parent || this
  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["each"](instAttrs, (attr) => {
    if (attr.expr) __WEBPACK_IMPORTED_MODULE_3__update__["a" /* default */].call(ctx, [attr.expr])
    // normalize the attribute names
    opts[__WEBPACK_IMPORTED_MODULE_9__common_util_misc__["toCamel"](attr.name).replace(__WEBPACK_IMPORTED_MODULE_11__common_global_variables__["a" /* ATTRS_PREFIX */], '')] = attr.expr ? attr.expr.value : attr.value
  })
}


/**
 * Tag class
 * @constructor
 * @param { Object } impl - it contains the tag template, and logic
 * @param { Object } conf - tag options
 * @param { String } innerHTML - html that eventually we need to inject in the tag
 */
function Tag(impl = {}, conf = {}, innerHTML) {
  var opts = __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["extend"]({}, conf.opts),
    parent = conf.parent,
    isLoop = conf.isLoop,
    isAnonymous = !!conf.isAnonymous,
    skipAnonymous = __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].skipAnonymousTags && isAnonymous,
    item = __WEBPACK_IMPORTED_MODULE_10__common_util_tags__["cleanUpData"](conf.item),
    index = conf.index, // available only for the looped nodes
    instAttrs = [], // All attributes on the Tag when it's first parsed
    implAttrs = [], // expressions on this type of Tag
    expressions = [],
    root = conf.root,
    tagName = conf.tagName || __WEBPACK_IMPORTED_MODULE_10__common_util_tags__["getTagName"](root),
    isVirtual = tagName === 'virtual',
    isInline = !isVirtual && !impl.tmpl,
    propsInSyncWithParent = [],
    dom

  // make this tag observable
  if (!skipAnonymous) __WEBPACK_IMPORTED_MODULE_0_riot_observable___default.a(this)
  // only call unmount if we have a valid __TAG_IMPL (has name property)
  if (impl.name && root._tag) root._tag.unmount(true)

  // not yet mounted
  this.isMounted = false

  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, '__', {
    isAnonymous,
    instAttrs,
    innerHTML,
    tagName,
    index,
    isLoop,
    isInline,
    // tags having event listeners
    // it would be better to use weak maps here but we can not introduce breaking changes now
    listeners: [],
    // these vars will be needed only for the virtual tags
    virts: [],
    tail: null,
    head: null,
    parent: null,
    item: null
  })

  // create a unique id to this tag
  // it could be handy to use it also to improve the virtual dom rendering speed
  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, '_riot_id', ++__uid) // base 1 allows test !t._riot_id
  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, 'root', root)
  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["extend"](this, { opts }, item)
  // protect the "tags" and "refs" property from being overridden
  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, 'parent', parent || null)
  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, 'tags', {})
  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, 'refs', {})

  if (isInline || isLoop && isAnonymous) {
    dom = root
  } else {
    if (!isVirtual) root.innerHTML = ''
    dom = __WEBPACK_IMPORTED_MODULE_4__mkdom__["a" /* default */](impl.tmpl, innerHTML, __WEBPACK_IMPORTED_MODULE_7__common_util_dom__["isSvg"](root))
  }

  /**
   * Update the tag expressions and options
   * @param   { * }  data - data we want to use to extend the tag properties
   * @returns { Tag } the current tag instance
   */
  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, 'update', function tagUpdate(data) {
    const nextOpts = {},
      canTrigger = this.isMounted && !skipAnonymous

    // make sure the data passed will not override
    // the component core methods
    data = __WEBPACK_IMPORTED_MODULE_10__common_util_tags__["cleanUpData"](data)
    __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["extend"](this, data)
    updateOpts.apply(this, [isLoop, parent, isAnonymous, nextOpts, instAttrs])

    if (canTrigger && this.isMounted && __WEBPACK_IMPORTED_MODULE_8__common_util_check__["isFunction"](this.shouldUpdate) && !this.shouldUpdate(data, nextOpts)) {
      return this
    }

    // inherit properties from the parent, but only for isAnonymous tags
    if (isLoop && isAnonymous) __WEBPACK_IMPORTED_MODULE_10__common_util_tags__["inheritFrom"].apply(this, [this.parent, propsInSyncWithParent])
    __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["extend"](opts, nextOpts)
    if (canTrigger) this.trigger('update', data)
    __WEBPACK_IMPORTED_MODULE_3__update__["a" /* default */].call(this, expressions)
    if (canTrigger) this.trigger('updated')

    return this

  }.bind(this))

  /**
   * Add a mixin to this tag
   * @returns { Tag } the current tag instance
   */
  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, 'mixin', function tagMixin() {
    __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["each"](arguments, (mix) => {
      let instance, obj
      let props = []

      // properties blacklisted and will not be bound to the tag instance
      const propsBlacklist = ['init', '__proto__']

      mix = __WEBPACK_IMPORTED_MODULE_8__common_util_check__["isString"](mix) ? __WEBPACK_IMPORTED_MODULE_5__core__["mixin"](mix) : mix

      // check if the mixin is a function
      if (__WEBPACK_IMPORTED_MODULE_8__common_util_check__["isFunction"](mix)) {
        // create the new mixin instance
        instance = new mix()
      } else instance = mix

      var proto = Object.getPrototypeOf(instance)

      // build multilevel prototype inheritance chain property list
      do props = props.concat(Object.getOwnPropertyNames(obj || instance))
      while (obj = Object.getPrototypeOf(obj || instance))

      // loop the keys in the function prototype or the all object keys
      __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["each"](props, (key) => {
        // bind methods to this
        // allow mixins to override other properties/parent mixins
        if (!__WEBPACK_IMPORTED_MODULE_9__common_util_misc__["contains"](propsBlacklist, key)) {
          // check for getters/setters
          var descriptor = Object.getOwnPropertyDescriptor(instance, key) || Object.getOwnPropertyDescriptor(proto, key)
          var hasGetterSetter = descriptor && (descriptor.get || descriptor.set)

          // apply method only if it does not already exist on the instance
          if (!this.hasOwnProperty(key) && hasGetterSetter) {
            Object.defineProperty(this, key, descriptor)
          } else {
            this[key] = __WEBPACK_IMPORTED_MODULE_8__common_util_check__["isFunction"](instance[key]) ?
              instance[key].bind(this) :
              instance[key]
          }
        }
      })

      // init method will be called automatically
      if (instance.init)
        instance.init.bind(this)()
    })
    return this
  }.bind(this))

  /**
   * Mount the current tag instance
   * @returns { Tag } the current tag instance
   */
  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, 'mount', function tagMount() {
    root._tag = this // keep a reference to the tag just created

    // Read all the attrs on this instance. This give us the info we need for updateOpts
    __WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseAttributes */].apply(parent, [root, root.attributes, (attr, expr) => {
      if (!isAnonymous && __WEBPACK_IMPORTED_MODULE_2__ref__["a" /* default */].isPrototypeOf(expr)) expr.tag = this
      attr.expr = expr
      instAttrs.push(attr)
    }])

    // update the root adding custom attributes coming from the compiler
    implAttrs = []
    __WEBPACK_IMPORTED_MODULE_7__common_util_dom__["walkAttrs"](impl.attrs, (k, v) => { implAttrs.push({name: k, value: v}) })
    __WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseAttributes */].apply(this, [root, implAttrs, (attr, expr) => {
      if (expr) expressions.push(expr)
      else __WEBPACK_IMPORTED_MODULE_7__common_util_dom__["setAttr"](root, attr.name, attr.value)
    }])

    // initialiation
    updateOpts.apply(this, [isLoop, parent, isAnonymous, opts, instAttrs])

    // add global mixins
    var globalMixin = __WEBPACK_IMPORTED_MODULE_5__core__["mixin"](__WEBPACK_IMPORTED_MODULE_11__common_global_variables__["d" /* GLOBAL_MIXIN */])

    if (globalMixin && !skipAnonymous) {
      for (var i in globalMixin) {
        if (globalMixin.hasOwnProperty(i)) {
          this.mixin(globalMixin[i])
        }
      }
    }

    if (impl.fn) impl.fn.call(this, opts)

    if (!skipAnonymous) this.trigger('before-mount')

    // parse layout after init. fn may calculate args for nested custom tags
    __WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseExpressions */].apply(this, [dom, expressions, isAnonymous])

    this.update(item)

    if (!isAnonymous && !isInline) {
      while (dom.firstChild) root.appendChild(dom.firstChild)
    }

    __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, 'root', root)
    __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, 'isMounted', true)

    if (skipAnonymous) return

    // if it's not a child tag we can trigger its mount event
    if (!this.parent) {
      this.trigger('mount')
    }
    // otherwise we need to wait that the parent "mount" or "updated" event gets triggered
    else {
      const p = __WEBPACK_IMPORTED_MODULE_10__common_util_tags__["getImmediateCustomParentTag"](this.parent)
      p.one(!p.isMounted ? 'mount' : 'updated', () => {
        this.trigger('mount')
      })
    }

    return this

  }.bind(this))

  /**
   * Unmount the tag instance
   * @param { Boolean } mustKeepRoot - if it's true the root node will not be removed
   * @returns { Tag } the current tag instance
   */
  __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, 'unmount', function tagUnmount(mustKeepRoot) {
    var el = this.root,
      p = el.parentNode,
      ptag,
      tagIndex = __WEBPACK_IMPORTED_MODULE_11__common_global_variables__["A" /* __TAGS_CACHE */].indexOf(this)

    if (!skipAnonymous) this.trigger('before-unmount')

    // clear all attributes coming from the mounted tag
    __WEBPACK_IMPORTED_MODULE_7__common_util_dom__["walkAttrs"](impl.attrs, (name) => {
      if (__WEBPACK_IMPORTED_MODULE_9__common_util_misc__["startsWith"](name, __WEBPACK_IMPORTED_MODULE_11__common_global_variables__["a" /* ATTRS_PREFIX */]))
        name = name.slice(__WEBPACK_IMPORTED_MODULE_11__common_global_variables__["a" /* ATTRS_PREFIX */].length)

      __WEBPACK_IMPORTED_MODULE_7__common_util_dom__["remAttr"](root, name)
    })

    // remove all the event listeners
    this.__.listeners.forEach((dom) => {
      Object.keys(dom[__WEBPACK_IMPORTED_MODULE_11__common_global_variables__["q" /* RIOT_EVENTS_KEY */]]).forEach((eventName) => {
        dom.removeEventListener(eventName, dom[__WEBPACK_IMPORTED_MODULE_11__common_global_variables__["q" /* RIOT_EVENTS_KEY */]][eventName])
      })
    })

    // remove this tag instance from the global virtualDom variable
    if (tagIndex !== -1)
      __WEBPACK_IMPORTED_MODULE_11__common_global_variables__["A" /* __TAGS_CACHE */].splice(tagIndex, 1)

    if (p || isVirtual) {
      if (parent) {
        ptag = __WEBPACK_IMPORTED_MODULE_10__common_util_tags__["getImmediateCustomParentTag"](parent)

        if (isVirtual) {
          Object.keys(this.tags).forEach(tagName => {
            __WEBPACK_IMPORTED_MODULE_10__common_util_tags__["arrayishRemove"](ptag.tags, tagName, this.tags[tagName])
          })
        } else {
          __WEBPACK_IMPORTED_MODULE_10__common_util_tags__["arrayishRemove"](ptag.tags, tagName, this)
          // remove from _parent too
          if(parent !== ptag) {
            __WEBPACK_IMPORTED_MODULE_10__common_util_tags__["arrayishRemove"](parent.tags, tagName, this)
          }
        }
      } else {
        // remove the tag contents
        __WEBPACK_IMPORTED_MODULE_7__common_util_dom__["setInnerHTML"](el, '')
      }

      if (p && !mustKeepRoot) p.removeChild(el)
    }

    if (this.__.virts) {
      __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["each"](this.__.virts, (v) => {
        if (v.parentNode) v.parentNode.removeChild(v)
      })
    }

    // allow expressions to unmount themselves
    __WEBPACK_IMPORTED_MODULE_10__common_util_tags__["unmountAll"](expressions)
    __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["each"](instAttrs, a => a.expr && a.expr.unmount && a.expr.unmount())

    // custom internal unmount function to avoid relying on the observable
    if (this.__.onUnmount) this.__.onUnmount()

    if (!skipAnonymous) {
      this.trigger('unmount')
      this.off('*')
    }

    __WEBPACK_IMPORTED_MODULE_9__common_util_misc__["defineProperty"](this, 'isMounted', false)

    delete this.root._tag

    return this

  }.bind(this))
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_global_variables__ = __webpack_require__(0);



var styleNode,
// Create cache and shortcut to the correct property
  cssTextProp,
  byName = {},
  remainder = [],
  needsInject = false

// skip the following code on the server
if (__WEBPACK_IMPORTED_MODULE_1__common_global_variables__["x" /* WIN */]) {
  styleNode = (function () {
    // create a new style element with the correct type
    var newNode = __WEBPACK_IMPORTED_MODULE_0__common_util_dom__["mkEl"]('style')
    __WEBPACK_IMPORTED_MODULE_0__common_util_dom__["setAttr"](newNode, 'type', 'text/css')

    // replace any user node or insert the new one into the head
    var userNode = __WEBPACK_IMPORTED_MODULE_0__common_util_dom__["$"]('style[type=riot]')
    /* istanbul ignore next */
    if (userNode) {
      if (userNode.id) newNode.id = userNode.id
      userNode.parentNode.replaceChild(newNode, userNode)
    }
    else document.getElementsByTagName('head')[0].appendChild(newNode)

    return newNode
  })()
  cssTextProp = styleNode.styleSheet
}

/**
 * Object that will be used to inject and manage the css of every tag instance
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  styleNode,
  /**
   * Save a tag style to be later injected into DOM
   * @param { String } css - css string
   * @param { String } name - if it's passed we will map the css to a tagname
   */
  add(css, name) {
    if (name) byName[name] = css
    else remainder.push(css)
    needsInject = true
  },
  /**
   * Inject all previously saved tag styles into DOM
   * innerHTML seems slow: http://jsperf.com/riot-insert-style
   */
  inject() {
    if (!__WEBPACK_IMPORTED_MODULE_1__common_global_variables__["x" /* WIN */] || !needsInject) return
    needsInject = false
    var style = Object.keys(byName)
      .map(function(k) { return byName[k] })
      .concat(remainder).join('\n')
    /* istanbul ignore next */
    if (cssTextProp) cssTextProp.cssText = style
    else styleNode.innerHTML = style
  }
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

;(function(window, undefined) {var observable = function(el) {

  /**
   * Extend the original object or create a new empty one
   * @type { Object }
   */

  el = el || {}

  /**
   * Private variables
   */
  var callbacks = {},
    slice = Array.prototype.slice

  /**
   * Public Api
   */

  // extend the el object adding the observable methods
  Object.defineProperties(el, {
    /**
     * Listen to the given `event` ands
     * execute the `callback` each time an event is triggered.
     * @param  { String } event - event id
     * @param  { Function } fn - callback function
     * @returns { Object } el
     */
    on: {
      value: function(event, fn) {
        if (typeof fn == 'function')
          (callbacks[event] = callbacks[event] || []).push(fn)
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Removes the given `event` listeners
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    off: {
      value: function(event, fn) {
        if (event == '*' && !fn) callbacks = {}
        else {
          if (fn) {
            var arr = callbacks[event]
            for (var i = 0, cb; cb = arr && arr[i]; ++i) {
              if (cb == fn) arr.splice(i--, 1)
            }
          } else delete callbacks[event]
        }
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Listen to the given `event` and
     * execute the `callback` at most once
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    one: {
      value: function(event, fn) {
        function on() {
          el.off(event, on)
          fn.apply(el, arguments)
        }
        return el.on(event, on)
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Execute all callback functions that listen to
     * the given `event`
     * @param   { String } event - event id
     * @returns { Object } el
     */
    trigger: {
      value: function(event) {

        // getting the arguments
        var arglen = arguments.length - 1,
          args = new Array(arglen),
          fns,
          fn,
          i

        for (i = 0; i < arglen; i++) {
          args[i] = arguments[i + 1] // skip first argument
        }

        fns = slice.call(callbacks[event] || [], 0)

        for (i = 0; fn = fns[i]; ++i) {
          fn.apply(el, args)
        }

        if (callbacks['*'] && event != '*')
          el.trigger.apply(el, ['*', event].concat(args))

        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    }
  })

  return el

}
  /* istanbul ignore next */
  // support CommonJS, AMD & browser
  if (true)
    module.exports = observable
  else if (typeof define === 'function' && define.amd)
    define(function() { return observable })
  else
    window.observable = observable

})(typeof window != 'undefined' ? window : undefined);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = parseExpressions;
/* harmony export (immutable) */ __webpack_exports__["a"] = parseAttributes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__if__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ref__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__each__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_riot_tmpl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_global_variables__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_util_check__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_util_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_util_misc__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_util_tags__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tag__ = __webpack_require__(8);











/**
 * Walk the tag DOM to detect the expressions to evaluate
 * @this Tag
 * @param   { HTMLElement } root - root tag where we will start digging the expressions
 * @param   { Array } expressions - empty array where the expressions will be added
 * @param   { Boolean } mustIncludeRoot - flag to decide whether the root must be parsed as well
 * @returns { Object } an object containing the root noode and the dom tree
 */
function parseExpressions(root, expressions, mustIncludeRoot) {
  var tree = {parent: {children: expressions}}

  __WEBPACK_IMPORTED_MODULE_6__common_util_dom__["walkNodes"](root, (dom, ctx) => {
    let type = dom.nodeType, parent = ctx.parent, attr, expr, tagImpl
    if (!mustIncludeRoot && dom === root) return {parent: parent}

    // text node
    if (type === 3 && dom.parentNode.tagName !== 'STYLE' && __WEBPACK_IMPORTED_MODULE_3_riot_tmpl__["b" /* tmpl */].hasExpr(dom.nodeValue))
      parent.children.push({dom: dom, expr: dom.nodeValue})

    if (type !== 1) return ctx // not an element

    var isVirtual = dom.tagName === 'VIRTUAL'

    // loop. each does it's own thing (for now)
    if (attr = __WEBPACK_IMPORTED_MODULE_6__common_util_dom__["getAttr"](dom, __WEBPACK_IMPORTED_MODULE_4__common_global_variables__["h" /* LOOP_DIRECTIVE */])) {
      if(isVirtual) __WEBPACK_IMPORTED_MODULE_6__common_util_dom__["setAttr"](dom, 'loopVirtual', true) // ignore here, handled in _each
      parent.children.push(__WEBPACK_IMPORTED_MODULE_2__each__["a" /* default */](dom, this, attr))
      return false
    }

    // if-attrs become the new parent. Any following expressions (either on the current
    // element, or below it) become children of this expression.
    if (attr = __WEBPACK_IMPORTED_MODULE_6__common_util_dom__["getAttr"](dom, __WEBPACK_IMPORTED_MODULE_4__common_global_variables__["c" /* CONDITIONAL_DIRECTIVE */])) {
      parent.children.push(Object.create(__WEBPACK_IMPORTED_MODULE_0__if__["a" /* default */]).init(dom, this, attr))
      return false
    }

    if (expr = __WEBPACK_IMPORTED_MODULE_6__common_util_dom__["getAttr"](dom, __WEBPACK_IMPORTED_MODULE_4__common_global_variables__["g" /* IS_DIRECTIVE */])) {
      if (__WEBPACK_IMPORTED_MODULE_3_riot_tmpl__["b" /* tmpl */].hasExpr(expr)) {
        parent.children.push({isRtag: true, expr: expr, dom: dom, attrs: [].slice.call(dom.attributes)})
        return false
      }
    }

    // if this is a tag, stop traversing here.
    // we ignore the root, since parseExpressions is called while we're mounting that root
    tagImpl = __WEBPACK_IMPORTED_MODULE_8__common_util_tags__["getTag"](dom)
    if(isVirtual) {
      if(__WEBPACK_IMPORTED_MODULE_6__common_util_dom__["getAttr"](dom, 'virtualized')) {dom.parentElement.removeChild(dom) } // tag created, remove from dom
      if(!tagImpl && !__WEBPACK_IMPORTED_MODULE_6__common_util_dom__["getAttr"](dom, 'virtualized') && !__WEBPACK_IMPORTED_MODULE_6__common_util_dom__["getAttr"](dom, 'loopVirtual'))  // ok to create virtual tag
        tagImpl = { tmpl: dom.outerHTML }
    }

    if (tagImpl && (dom !== root || mustIncludeRoot)) {
      if(isVirtual && !__WEBPACK_IMPORTED_MODULE_6__common_util_dom__["getAttr"](dom, __WEBPACK_IMPORTED_MODULE_4__common_global_variables__["g" /* IS_DIRECTIVE */])) { // handled in update
        // can not remove attribute like directives
        // so flag for removal after creation to prevent maximum stack error
        __WEBPACK_IMPORTED_MODULE_6__common_util_dom__["setAttr"](dom, 'virtualized', true)

        var tag = new __WEBPACK_IMPORTED_MODULE_9__tag__["a" /* default */]({ tmpl: dom.outerHTML },
          {root: dom, parent: this},
          dom.innerHTML)
        parent.children.push(tag) // no return, anonymous tag, keep parsing
      } else {
        var conf = {root: dom, parent: this, hasImpl: true}
        parent.children.push(__WEBPACK_IMPORTED_MODULE_8__common_util_tags__["initChildTag"](tagImpl, conf, dom.innerHTML, this))
        return false
      }
    }

    // attribute expressions
    parseAttributes.apply(this, [dom, dom.attributes, function(attr, expr) {
      if (!expr) return
      parent.children.push(expr)
    }])

    // whatever the parent is, all child elements get the same parent.
    // If this element had an if-attr, that's the parent for all child elements
    return {parent: parent}
  }, tree)
}

/**
 * Calls `fn` for every attribute on an element. If that attr has an expression,
 * it is also passed to fn.
 * @this Tag
 * @param   { HTMLElement } dom - dom node to parse
 * @param   { Array } attrs - array of attributes
 * @param   { Function } fn - callback to exec on any iteration
 */
function parseAttributes(dom, attrs, fn) {
  __WEBPACK_IMPORTED_MODULE_7__common_util_misc__["each"](attrs, (attr) => {
    if (!attr) return false

    var name = attr.name, bool = __WEBPACK_IMPORTED_MODULE_5__common_util_check__["isBoolAttr"](name), expr

    if (__WEBPACK_IMPORTED_MODULE_7__common_util_misc__["contains"](__WEBPACK_IMPORTED_MODULE_4__common_global_variables__["j" /* REF_DIRECTIVES */], name)) {
      expr =  Object.create(__WEBPACK_IMPORTED_MODULE_1__ref__["a" /* default */]).init(dom, this, name, attr.value)
    } else if (__WEBPACK_IMPORTED_MODULE_3_riot_tmpl__["b" /* tmpl */].hasExpr(attr.value)) {
      expr = {dom: dom, expr: attr.value, attr: name, bool}
    }

    fn(attr, expr)
  })
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateDataIs */
/* unused harmony export normalizeAttrName */
/* unused harmony export updateExpression */
/* harmony export (immutable) */ __webpack_exports__["a"] = updateAllExpressions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_riot_tmpl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_util_misc__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_util_check__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_util_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setEventHandler__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_util_tags__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_global_variables__ = __webpack_require__(0);









/**
 * Update dynamically created data-is tags with changing expressions
 * @param { Object } expr - expression tag and expression info
 * @param { Tag }    parent - parent for tag creation
 * @param { String } tagName - tag implementation we want to use
 */
function updateDataIs(expr, parent, tagName) {
  var conf, isVirtual, head, ref

  if (expr.tag && expr.tagName === tagName) {
    expr.tag.update()
    return
  }

  isVirtual = expr.dom.tagName === 'VIRTUAL'
  // sync _parent to accommodate changing tagnames
  if (expr.tag) {
    // need placeholder before unmount
    if(isVirtual) {
      head = expr.tag.__.head
      ref = __WEBPACK_IMPORTED_MODULE_3__common_util_dom__["createDOMPlaceholder"]()
      head.parentNode.insertBefore(ref, head)
    }

    expr.tag.unmount(true)
  }

  if (!__WEBPACK_IMPORTED_MODULE_2__common_util_check__["isString"](tagName)) return

  expr.impl = __WEBPACK_IMPORTED_MODULE_6__common_global_variables__["B" /* __TAG_IMPL */][tagName]
  conf = {root: expr.dom, parent: parent, hasImpl: true, tagName: tagName}
  expr.tag = __WEBPACK_IMPORTED_MODULE_5__common_util_tags__["initChildTag"](expr.impl, conf, expr.dom.innerHTML, parent)
  __WEBPACK_IMPORTED_MODULE_1__common_util_misc__["each"](expr.attrs, a => __WEBPACK_IMPORTED_MODULE_3__common_util_dom__["setAttr"](expr.tag.root, a.name, a.value))
  expr.tagName = tagName
  expr.tag.mount()
  if (isVirtual)
    __WEBPACK_IMPORTED_MODULE_5__common_util_tags__["makeReplaceVirtual"](expr.tag, ref || expr.tag.root) // root exist first time, after use placeholder

  // parent is the placeholder tag, not the dynamic tag so clean up
  parent.__.onUnmount = function() {
    var delName = expr.tag.opts.dataIs,
      tags = expr.tag.parent.tags,
      _tags = expr.tag.__.parent.tags
    __WEBPACK_IMPORTED_MODULE_5__common_util_tags__["arrayishRemove"](tags, delName, expr.tag)
    __WEBPACK_IMPORTED_MODULE_5__common_util_tags__["arrayishRemove"](_tags, delName, expr.tag)
    expr.tag.unmount()
  }
}

/**
 * Nomalize any attribute removing the "riot-" prefix
 * @param   { String } attrName - original attribute name
 * @returns { String } valid html attribute name
 */
function normalizeAttrName(attrName) {
  if (!attrName) return null
  attrName = attrName.replace(__WEBPACK_IMPORTED_MODULE_6__common_global_variables__["a" /* ATTRS_PREFIX */], '')
  if (__WEBPACK_IMPORTED_MODULE_6__common_global_variables__["b" /* CASE_SENSITIVE_ATTRIBUTES */][attrName]) attrName = __WEBPACK_IMPORTED_MODULE_6__common_global_variables__["b" /* CASE_SENSITIVE_ATTRIBUTES */][attrName]
  return attrName
}

/**
 * Update on single tag expression
 * @this Tag
 * @param { Object } expr - expression logic
 * @returns { undefined }
 */
function updateExpression(expr) {
  if (this.root && __WEBPACK_IMPORTED_MODULE_3__common_util_dom__["getAttr"](this.root,'virtualized')) return

  var dom = expr.dom,
    // remove the riot- prefix
    attrName = normalizeAttrName(expr.attr),
    isToggle = __WEBPACK_IMPORTED_MODULE_1__common_util_misc__["contains"]([__WEBPACK_IMPORTED_MODULE_6__common_global_variables__["r" /* SHOW_DIRECTIVE */], __WEBPACK_IMPORTED_MODULE_6__common_global_variables__["e" /* HIDE_DIRECTIVE */]], attrName),
    isVirtual = expr.root && expr.root.tagName === 'VIRTUAL',
    parent = dom && (expr.parent || dom.parentNode),
    // detect the style attributes
    isStyleAttr = attrName === 'style',
    isClassAttr = attrName === 'class',
    hasValue,
    isObj,
    value

  // if it's a tag we could totally skip the rest
  if (expr._riot_id) {
    if (expr.isMounted) {
      expr.update()
    // if it hasn't been mounted yet, do that now.
    } else {
      expr.mount()
      if (isVirtual) {
        __WEBPACK_IMPORTED_MODULE_5__common_util_tags__["makeReplaceVirtual"](expr, expr.root)
      }
    }
    return
  }
  // if this expression has the update method it means it can handle the DOM changes by itself
  if (expr.update) return expr.update()

  // ...it seems to be a simple expression so we try to calculat its value
  value = __WEBPACK_IMPORTED_MODULE_0_riot_tmpl__["b" /* tmpl */](expr.expr, isToggle ? __WEBPACK_IMPORTED_MODULE_1__common_util_misc__["extend"]({}, Object.create(this.parent), this) : this)
  hasValue = !__WEBPACK_IMPORTED_MODULE_2__common_util_check__["isBlank"](value)
  isObj = __WEBPACK_IMPORTED_MODULE_2__common_util_check__["isObject"](value)

  // convert the style/class objects to strings
  if (isObj) {
    isObj = !isClassAttr && !isStyleAttr
    if (isClassAttr) {
      value = __WEBPACK_IMPORTED_MODULE_0_riot_tmpl__["b" /* tmpl */](JSON.stringify(value), this)
    } else if (isStyleAttr) {
      value = __WEBPACK_IMPORTED_MODULE_3__common_util_dom__["styleObjectToString"](value)
    }
  }

  // remove original attribute
  if (expr.attr && (!expr.isAttrRemoved || !hasValue || value === false)) {
    __WEBPACK_IMPORTED_MODULE_3__common_util_dom__["remAttr"](dom, expr.attr)
    expr.isAttrRemoved = true
  }

  // for the boolean attributes we don't need the value
  // we can convert it to checked=true to checked=checked
  if (expr.bool) value = value ? attrName : false
  if (expr.isRtag) return updateDataIs(expr, this, value)
  if (expr.wasParsedOnce && expr.value === value) return

  // update the expression value
  expr.value = value
  expr.wasParsedOnce = true

  // if the value is an object we can not do much more with it
  if (isObj && !isToggle) return
  // avoid to render undefined/null values
  if (__WEBPACK_IMPORTED_MODULE_2__common_util_check__["isBlank"](value)) value = ''

  // textarea and text nodes have no attribute name
  if (!attrName) {
    // about #815 w/o replace: the browser converts the value to a string,
    // the comparison by "==" does too, but not in the server
    value += ''
    // test for parent avoids error with invalid assignment to nodeValue
    if (parent) {
      // cache the parent node because somehow it will become null on IE
      // on the next iteration
      expr.parent = parent
      if (parent.tagName === 'TEXTAREA') {
        parent.value = value                    // #1113
        if (!__WEBPACK_IMPORTED_MODULE_6__common_global_variables__["f" /* IE_VERSION */]) dom.nodeValue = value  // #1625 IE throws here, nodeValue
      }                                         // will be available on 'updated'
      else dom.nodeValue = value
    }
    return
  }


  // event handler
  if (__WEBPACK_IMPORTED_MODULE_2__common_util_check__["isFunction"](value)) {
    __WEBPACK_IMPORTED_MODULE_4__setEventHandler__["a" /* default */](attrName, value, dom, this)
  // show / hide
  } else if (isToggle) {
    __WEBPACK_IMPORTED_MODULE_3__common_util_dom__["toggleVisibility"](dom, attrName === __WEBPACK_IMPORTED_MODULE_6__common_global_variables__["e" /* HIDE_DIRECTIVE */] ? !value : value)
  // handle attributes
  } else {
    if (expr.bool) {
      dom[attrName] = value
    }

    if (attrName === 'value' && dom.value !== value) {
      dom.value = value
    }

    if (hasValue && value !== false) {
      __WEBPACK_IMPORTED_MODULE_3__common_util_dom__["setAttr"](dom, attrName, value)
    }

    // make sure that in case of style changes
    // the element stays hidden
    if (isStyleAttr && dom.hidden) __WEBPACK_IMPORTED_MODULE_3__common_util_dom__["toggleVisibility"](dom, false)
  }
}

/**
 * Update all the expressions in a Tag instance
 * @this Tag
 * @param { Array } expressions - expression that must be re evaluated
 */
function updateAllExpressions(expressions) {
  __WEBPACK_IMPORTED_MODULE_1__common_util_misc__["each"](expressions, updateExpression.bind(this))
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_riot_tmpl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_util_check__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_util_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_util_tags__ = __webpack_require__(4);






/* harmony default export */ __webpack_exports__["a"] = ({
  init(dom, parent, attrName, attrValue) {
    this.dom = dom
    this.attr = attrName
    this.rawValue = attrValue
    this.parent = parent
    this.hasExp = __WEBPACK_IMPORTED_MODULE_0_riot_tmpl__["b" /* tmpl */].hasExpr(attrValue)
    return this
  },
  update() {
    const old = this.value
    const customParent = this.parent && __WEBPACK_IMPORTED_MODULE_3__common_util_tags__["getImmediateCustomParentTag"](this.parent)
    // if the referenced element is a custom tag, then we set the tag itself, rather than DOM
    const tagOrDom = this.dom.__ref || this.tag || this.dom

    this.value = this.hasExp ? __WEBPACK_IMPORTED_MODULE_0_riot_tmpl__["b" /* tmpl */](this.rawValue, this.parent) : this.rawValue

    // the name changed, so we need to remove it from the old key (if present)
    if (!__WEBPACK_IMPORTED_MODULE_1__common_util_check__["isBlank"](old) && customParent) __WEBPACK_IMPORTED_MODULE_3__common_util_tags__["arrayishRemove"](customParent.refs, old, tagOrDom)
    if (!__WEBPACK_IMPORTED_MODULE_1__common_util_check__["isBlank"](this.value) && __WEBPACK_IMPORTED_MODULE_1__common_util_check__["isString"](this.value)) {
      // add it to the refs of parent tag (this behavior was changed >=3.0)
      if (customParent) __WEBPACK_IMPORTED_MODULE_3__common_util_tags__["arrayishAdd"](
        customParent.refs,
        this.value,
        tagOrDom,
        // use an array if it's a looped node and the ref is not an expression
        null,
        this.parent.__.index
      )

      if (this.value !== old) {
        __WEBPACK_IMPORTED_MODULE_2__common_util_dom__["setAttr"](this.dom, this.attr, this.value)
      }
    } else {
      __WEBPACK_IMPORTED_MODULE_2__common_util_dom__["remAttr"](this.dom, this.attr)
    }

    // cache the ref bound to this dom node
    // to reuse it in future (see also #2329)
    if (!this.dom.__ref) this.dom.__ref = tagOrDom
  },
  unmount() {
    const tagOrDom = this.tag || this.dom
    const customParent = this.parent && __WEBPACK_IMPORTED_MODULE_3__common_util_tags__["getImmediateCustomParentTag"](this.parent)
    if (!__WEBPACK_IMPORTED_MODULE_1__common_util_check__["isBlank"](this.value) && customParent)
      __WEBPACK_IMPORTED_MODULE_3__common_util_tags__["arrayishRemove"](customParent.refs, this.value, tagOrDom)
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["Tag"] = Tag;
/* harmony export (immutable) */ __webpack_exports__["tag"] = tag;
/* harmony export (immutable) */ __webpack_exports__["tag2"] = tag2;
/* harmony export (immutable) */ __webpack_exports__["mount"] = mount;
/* harmony export (immutable) */ __webpack_exports__["mixin"] = mixin;
/* harmony export (immutable) */ __webpack_exports__["update"] = update;
/* harmony export (immutable) */ __webpack_exports__["unregister"] = unregister;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styleManager__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_util_check__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_util_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_util_misc__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_util_tags__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_global_variables__ = __webpack_require__(0);








/**
 * Another way to create a riot tag a bit more es6 friendly
 * @param { HTMLElement } el - tag DOM selector or DOM node/s
 * @param { Object } opts - tag logic
 * @returns { Tag } new riot tag instance
 */
function Tag(el, opts) {
  // get the tag properties from the class constructor
  var {name, tmpl, css, attrs, onCreate} = this
  // register a new tag and cache the class prototype
  if (!__WEBPACK_IMPORTED_MODULE_5__common_global_variables__["B" /* __TAG_IMPL */][name]) {
    tag(name, tmpl, css, attrs, onCreate)
    // cache the class constructor
    __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["B" /* __TAG_IMPL */][name].class = this.constructor
  }

  // mount the tag using the class instance
  __WEBPACK_IMPORTED_MODULE_4__common_util_tags__["mountTo"](el, name, opts, this)
  // inject the component css
  if (css) __WEBPACK_IMPORTED_MODULE_0__styleManager__["a" /* default */].inject()

  return this
}

/**
 * Create a new riot tag implementation
 * @param   { String }   name - name/id of the new riot tag
 * @param   { String }   tmpl - tag template
 * @param   { String }   css - custom tag css
 * @param   { String }   attrs - root tag attributes
 * @param   { Function } fn - user function
 * @returns { String } name/id of the tag just created
 */
function tag(name, tmpl, css, attrs, fn) {
  if (__WEBPACK_IMPORTED_MODULE_1__common_util_check__["isFunction"](attrs)) {
    fn = attrs

    if (/^[\w\-]+\s?=/.test(css)) {
      attrs = css
      css = ''
    } else
      attrs = ''
  }

  if (css) {
    if (__WEBPACK_IMPORTED_MODULE_1__common_util_check__["isFunction"](css))
      fn = css
    else
      __WEBPACK_IMPORTED_MODULE_0__styleManager__["a" /* default */].add(css)
  }

  name = name.toLowerCase()
  __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["B" /* __TAG_IMPL */][name] = { name, tmpl, attrs, fn }

  return name
}

/**
 * Create a new riot tag implementation (for use by the compiler)
 * @param   { String }   name - name/id of the new riot tag
 * @param   { String }   tmpl - tag template
 * @param   { String }   css - custom tag css
 * @param   { String }   attrs - root tag attributes
 * @param   { Function } fn - user function
 * @returns { String } name/id of the tag just created
 */
function tag2(name, tmpl, css, attrs, fn) {
  if (css) __WEBPACK_IMPORTED_MODULE_0__styleManager__["a" /* default */].add(css, name)

  __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["B" /* __TAG_IMPL */][name] = { name, tmpl, attrs, fn }

  return name
}

/**
 * Mount a tag using a specific tag implementation
 * @param   { * } selector - tag DOM selector or DOM node/s
 * @param   { String } tagName - tag implementation name
 * @param   { Object } opts - tag logic
 * @returns { Array } new tags instances
 */
function mount(selector, tagName, opts) {
  const tags = []
  let elem, allTags

  function pushTagsTo(root) {
    if (root.tagName) {
      let riotTag = __WEBPACK_IMPORTED_MODULE_2__common_util_dom__["getAttr"](root, __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["g" /* IS_DIRECTIVE */]), tag

      // have tagName? force riot-tag to be the same
      if (tagName && riotTag !== tagName) {
        riotTag = tagName
        __WEBPACK_IMPORTED_MODULE_2__common_util_dom__["setAttr"](root, __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["g" /* IS_DIRECTIVE */], tagName)
      }

      tag = __WEBPACK_IMPORTED_MODULE_4__common_util_tags__["mountTo"](root, riotTag || root.tagName.toLowerCase(), opts)

      if (tag)
        tags.push(tag)
    } else if (root.length)
      __WEBPACK_IMPORTED_MODULE_3__common_util_misc__["each"](root, pushTagsTo) // assume nodeList
  }

  // inject styles into DOM
  __WEBPACK_IMPORTED_MODULE_0__styleManager__["a" /* default */].inject()

  if (__WEBPACK_IMPORTED_MODULE_1__common_util_check__["isObject"](tagName)) {
    opts = tagName
    tagName = 0
  }

  // crawl the DOM to find the tag
  if (__WEBPACK_IMPORTED_MODULE_1__common_util_check__["isString"](selector)) {
    selector = selector === '*' ?
      // select all registered tags
      // & tags found with the riot-tag attribute set
      allTags = __WEBPACK_IMPORTED_MODULE_4__common_util_tags__["selectTags"]() :
      // or just the ones named like the selector
      selector + __WEBPACK_IMPORTED_MODULE_4__common_util_tags__["selectTags"](selector.split(/, */))

    // make sure to pass always a selector
    // to the querySelectorAll function
    elem = selector ? __WEBPACK_IMPORTED_MODULE_2__common_util_dom__["$$"](selector) : []
  }
  else
    // probably you have passed already a tag or a NodeList
    elem = selector

  // select all the registered and mount them inside their root elements
  if (tagName === '*') {
    // get all custom tags
    tagName = allTags || __WEBPACK_IMPORTED_MODULE_4__common_util_tags__["selectTags"]()
    // if the root els it's just a single tag
    if (elem.tagName)
      elem = __WEBPACK_IMPORTED_MODULE_2__common_util_dom__["$$"](tagName, elem)
    else {
      // select all the children for all the different root elements
      var nodeList = []

      __WEBPACK_IMPORTED_MODULE_3__common_util_misc__["each"](elem, _el => nodeList.push(__WEBPACK_IMPORTED_MODULE_2__common_util_dom__["$$"](tagName, _el)))

      elem = nodeList
    }
    // get rid of the tagName
    tagName = 0
  }

  pushTagsTo(elem)

  return tags
}

// Create a mixin that could be globally shared across all the tags
const mixins = {}
const globals = mixins[__WEBPACK_IMPORTED_MODULE_5__common_global_variables__["d" /* GLOBAL_MIXIN */]] = {}
let mixins_id = 0

/**
 * Create/Return a mixin by its name
 * @param   { String }  name - mixin name (global mixin if object)
 * @param   { Object }  mix - mixin logic
 * @param   { Boolean } g - is global?
 * @returns { Object }  the mixin logic
 */
function mixin(name, mix, g) {
  // Unnamed global
  if (__WEBPACK_IMPORTED_MODULE_1__common_util_check__["isObject"](name)) {
    mixin(`__${mixins_id++}__`, name, true)
    return
  }

  const store = g ? globals : mixins

  // Getter
  if (!mix) {
    if (__WEBPACK_IMPORTED_MODULE_1__common_util_check__["isUndefined"](store[name]))
      throw new Error(`Unregistered mixin: ${ name }`)

    return store[name]
  }

  // Setter
  store[name] = __WEBPACK_IMPORTED_MODULE_1__common_util_check__["isFunction"](mix) ?
    __WEBPACK_IMPORTED_MODULE_3__common_util_misc__["extend"](mix.prototype, store[name] || {}) && mix :
    __WEBPACK_IMPORTED_MODULE_3__common_util_misc__["extend"](store[name] || {}, mix)
}

/**
 * Update all the tags instances created
 * @returns { Array } all the tags instances
 */
function update() {
  return __WEBPACK_IMPORTED_MODULE_3__common_util_misc__["each"](__WEBPACK_IMPORTED_MODULE_5__common_global_variables__["A" /* __TAGS_CACHE */], tag => tag.update())
}

function unregister(name) {
  __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["B" /* __TAG_IMPL */][name] = null
}

const version = 'WIP'
/* harmony export (immutable) */ __webpack_exports__["version"] = version;



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(riot) {top.ipc = __webpack_require__(20).ipcRenderer;
top.observer = riot.observable();
top.locales = __webpack_require__(28).ja;

/**
 * ベースのタグをマウント
 */
__webpack_require__(21);
riot.mount('app');

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_riot_tmpl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_util_tags__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_global_variables__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parse__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update__ = __webpack_require__(12);







/* harmony default export */ __webpack_exports__["a"] = ({
  init(dom, tag, expr) {
    __WEBPACK_IMPORTED_MODULE_0__common_util_dom__["remAttr"](dom, __WEBPACK_IMPORTED_MODULE_3__common_global_variables__["c" /* CONDITIONAL_DIRECTIVE */])
    this.tag = tag
    this.expr = expr
    this.stub = __WEBPACK_IMPORTED_MODULE_0__common_util_dom__["createDOMPlaceholder"]()
    this.pristine = dom

    var p = dom.parentNode
    p.insertBefore(this.stub, dom)
    p.removeChild(dom)

    return this
  },
  update() {
    this.value = __WEBPACK_IMPORTED_MODULE_1_riot_tmpl__["b" /* tmpl */](this.expr, this.tag)

    if (this.value && !this.current) { // insert
      this.current = this.pristine.cloneNode(true)
      this.stub.parentNode.insertBefore(this.current, this.stub)
      this.expressions = []
      __WEBPACK_IMPORTED_MODULE_4__parse__["b" /* parseExpressions */].apply(this.tag, [this.current, this.expressions, true])
    } else if (!this.value && this.current) { // remove
      __WEBPACK_IMPORTED_MODULE_2__common_util_tags__["unmountAll"](this.expressions)
      if (this.current._tag) {
        this.current._tag.unmount()
      } else if (this.current.parentNode) {
        this.current.parentNode.removeChild(this.current)
      }
      this.current = null
      this.expressions = []
    }

    if (this.value) __WEBPACK_IMPORTED_MODULE_5__update__["a" /* default */].call(this.tag, this.expressions)
  },
  unmount() {
    __WEBPACK_IMPORTED_MODULE_2__common_util_tags__["unmountAll"](this.expressions || [])
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setEventHandler;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_check__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_util_misc__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_global_variables__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_util_tags__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings__ = __webpack_require__(7);






/**
 * Trigger DOM events
 * @param   { HTMLElement } dom - dom element target of the event
 * @param   { Function } handler - user function
 * @param   { Object } e - event object
 */
function handleEvent(dom, handler, e) {
  var ptag = this.__.parent,
    item = this.__.item

  if (!item)
    while (ptag && !item) {
      item = ptag.__.item
      ptag = ptag.__.parent
    }

  // override the event properties
  /* istanbul ignore next */
  if (__WEBPACK_IMPORTED_MODULE_0__common_util_check__["isWritable"](e, 'currentTarget')) e.currentTarget = dom
  /* istanbul ignore next */
  if (__WEBPACK_IMPORTED_MODULE_0__common_util_check__["isWritable"](e, 'target')) e.target = e.srcElement
  /* istanbul ignore next */
  if (__WEBPACK_IMPORTED_MODULE_0__common_util_check__["isWritable"](e, 'which')) e.which = e.charCode || e.keyCode

  e.item = item

  handler.call(this, e)

  // avoid auto updates
  if (!__WEBPACK_IMPORTED_MODULE_4__settings__["a" /* default */].autoUpdate) return

  if (!e.preventUpdate) {
    var p = __WEBPACK_IMPORTED_MODULE_3__common_util_tags__["getImmediateCustomParentTag"](this)
    // fixes #2083
    if (p.isMounted) p.update()
  }
}

/**
 * Attach an event to a DOM node
 * @param { String } name - event name
 * @param { Function } handler - event callback
 * @param { Object } dom - dom node
 * @param { Tag } tag - tag instance
 */
function setEventHandler(name, handler, dom, tag) {
  var eventName,
    cb = handleEvent.bind(tag, dom, handler)

  // avoid to bind twice the same event
  // possible fix for #2332
  dom[name] = null

  // normalize event name
  eventName = name.replace(__WEBPACK_IMPORTED_MODULE_2__common_global_variables__["l" /* RE_EVENTS_PREFIX */], '')

  // cache the listener into the listeners array
  if (!__WEBPACK_IMPORTED_MODULE_1__common_util_misc__["contains"](tag.__.listeners, dom)) tag.__.listeners.push(dom)
  if (!dom[__WEBPACK_IMPORTED_MODULE_2__common_global_variables__["q" /* RIOT_EVENTS_KEY */]]) dom[__WEBPACK_IMPORTED_MODULE_2__common_global_variables__["q" /* RIOT_EVENTS_KEY */]] = {}
  if (dom[__WEBPACK_IMPORTED_MODULE_2__common_global_variables__["q" /* RIOT_EVENTS_KEY */]][name]) dom.removeEventListener(eventName, dom[__WEBPACK_IMPORTED_MODULE_2__common_global_variables__["q" /* RIOT_EVENTS_KEY */]][name])

  dom[__WEBPACK_IMPORTED_MODULE_2__common_global_variables__["q" /* RIOT_EVENTS_KEY */]][name] = cb
  dom.addEventListener(eventName, cb, false)
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _each;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_check__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_util_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_util_misc__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_riot_tmpl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tag__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_global_variables__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_util_tags__ = __webpack_require__(4);










/**
 * Convert the item looped into an object used to extend the child tag properties
 * @param   { Object } expr - object containing the keys used to extend the children tags
 * @param   { * } key - value to assign to the new object returned
 * @param   { * } val - value containing the position of the item in the array
 * @param   { Object } base - prototype object for the new item
 * @returns { Object } - new object containing the values of the original item
 *
 * The variables 'key' and 'val' are arbitrary.
 * They depend on the collection type looped (Array, Object)
 * and on the expression used on the each tag
 *
 */
function mkitem(expr, key, val, base) {
  var item = base ? Object.create(base) : {}
  item[expr.key] = key
  if (expr.pos) item[expr.pos] = val
  return item
}

/**
 * Unmount the redundant tags
 * @param   { Array } items - array containing the current items to loop
 * @param   { Array } tags - array containing all the children tags
 */
function unmountRedundant(items, tags) {
  var i = tags.length,
    j = items.length

  while (i > j) {
    i--
    remove.apply(tags[i], [tags, i])
  }
}


/**
 * Remove a child tag
 * @this Tag
 * @param   { Array } tags - tags collection
 * @param   { Number } i - index of the tag to remove
 */
function remove(tags, i) {
  tags.splice(i, 1)
  this.unmount()
  __WEBPACK_IMPORTED_MODULE_6__common_util_tags__["arrayishRemove"](this.parent, this, this.__.tagName, true)
}

/**
 * Move the nested custom tags in non custom loop tags
 * @this Tag
 * @param   { Number } i - current position of the loop tag
 */
function moveNestedTags(i) {
  __WEBPACK_IMPORTED_MODULE_2__common_util_misc__["each"](Object.keys(this.tags), (tagName) => {
    __WEBPACK_IMPORTED_MODULE_6__common_util_tags__["moveChildTag"].apply(this.tags[tagName], [tagName, i])
  })
}

/**
 * Move a child tag
 * @this Tag
 * @param   { HTMLElement } root - dom node containing all the loop children
 * @param   { Tag } nextTag - instance of the next tag preceding the one we want to move
 * @param   { Boolean } isVirtual - is it a virtual tag?
 */
function move(root, nextTag, isVirtual) {
  if (isVirtual)
    __WEBPACK_IMPORTED_MODULE_6__common_util_tags__["moveVirtual"].apply(this, [root, nextTag])
  else
    __WEBPACK_IMPORTED_MODULE_1__common_util_dom__["safeInsert"](root, this.root, nextTag.root)
}

/**
 * Insert and mount a child tag
 * @this Tag
 * @param   { HTMLElement } root - dom node containing all the loop children
 * @param   { Tag } nextTag - instance of the next tag preceding the one we want to insert
 * @param   { Boolean } isVirtual - is it a virtual tag?
 */
function insert(root, nextTag, isVirtual) {
  if (isVirtual)
    __WEBPACK_IMPORTED_MODULE_6__common_util_tags__["makeVirtual"].apply(this, [root, nextTag])
  else
    __WEBPACK_IMPORTED_MODULE_1__common_util_dom__["safeInsert"](root, this.root, nextTag.root)
}

/**
 * Append a new tag into the DOM
 * @this Tag
 * @param   { HTMLElement } root - dom node containing all the loop children
 * @param   { Boolean } isVirtual - is it a virtual tag?
 */
function append(root, isVirtual) {
  if (isVirtual)
    __WEBPACK_IMPORTED_MODULE_6__common_util_tags__["makeVirtual"].call(this, root)
  else
    root.appendChild(this.root)
}

/**
 * Manage tags having the 'each'
 * @param   { HTMLElement } dom - DOM node we need to loop
 * @param   { Tag } parent - parent tag instance where the dom node is contained
 * @param   { String } expr - string contained in the 'each' attribute
 * @returns { Object } expression object for this each loop
 */
function _each(dom, parent, expr) {

  // remove the each property from the original tag
  __WEBPACK_IMPORTED_MODULE_1__common_util_dom__["remAttr"](dom, __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["h" /* LOOP_DIRECTIVE */])

  var mustReorder = typeof __WEBPACK_IMPORTED_MODULE_1__common_util_dom__["getAttr"](dom, __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["i" /* LOOP_NO_REORDER_DIRECTIVE */]) !== __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["v" /* T_STRING */] || __WEBPACK_IMPORTED_MODULE_1__common_util_dom__["remAttr"](dom, __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["i" /* LOOP_NO_REORDER_DIRECTIVE */]),
    tagName = __WEBPACK_IMPORTED_MODULE_6__common_util_tags__["getTagName"](dom),
    impl = __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["B" /* __TAG_IMPL */][tagName],
    parentNode = dom.parentNode,
    placeholder = __WEBPACK_IMPORTED_MODULE_1__common_util_dom__["createDOMPlaceholder"](),
    child = __WEBPACK_IMPORTED_MODULE_6__common_util_tags__["getTag"](dom),
    ifExpr = __WEBPACK_IMPORTED_MODULE_1__common_util_dom__["getAttr"](dom, __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["c" /* CONDITIONAL_DIRECTIVE */]),
    tags = [],
    oldItems = [],
    hasKeys,
    isLoop = true,
    isAnonymous = !__WEBPACK_IMPORTED_MODULE_5__common_global_variables__["B" /* __TAG_IMPL */][tagName],
    isVirtual = dom.tagName === 'VIRTUAL'

  // parse the each expression
  expr = __WEBPACK_IMPORTED_MODULE_3_riot_tmpl__["b" /* tmpl */].loopKeys(expr)
  expr.isLoop = true

  if (ifExpr) __WEBPACK_IMPORTED_MODULE_1__common_util_dom__["remAttr"](dom, __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["c" /* CONDITIONAL_DIRECTIVE */])

  // insert a marked where the loop tags will be injected
  parentNode.insertBefore(placeholder, dom)
  parentNode.removeChild(dom)

  expr.update = function updateEach() {
    // get the new items collection
    expr.value = __WEBPACK_IMPORTED_MODULE_3_riot_tmpl__["b" /* tmpl */](expr.val, parent)

    var frag = __WEBPACK_IMPORTED_MODULE_1__common_util_dom__["createFrag"](),
      items = expr.value,
      isObject = !__WEBPACK_IMPORTED_MODULE_0__common_util_check__["isArray"](items) && !__WEBPACK_IMPORTED_MODULE_0__common_util_check__["isString"](items),
      root = placeholder.parentNode

    // if this DOM was removed the update here is useless
    // this condition fixes also a weird async issue on IE in our unit test
    if (!root) return

    // object loop. any changes cause full redraw
    if (isObject) {
      hasKeys = items || false
      items = hasKeys ?
        Object.keys(items).map(function (key) {
          return mkitem(expr, items[key], key)
        }) : []
    } else {
      hasKeys = false
    }

    if (ifExpr) {
      items = items.filter(function(item, i) {
        if (expr.key && !isObject)
          return !!__WEBPACK_IMPORTED_MODULE_3_riot_tmpl__["b" /* tmpl */](ifExpr, mkitem(expr, item, i, parent))

        return !!__WEBPACK_IMPORTED_MODULE_3_riot_tmpl__["b" /* tmpl */](ifExpr, __WEBPACK_IMPORTED_MODULE_2__common_util_misc__["extend"](Object.create(parent), item))
      })
    }

    // loop all the new items
    __WEBPACK_IMPORTED_MODULE_2__common_util_misc__["each"](items, function(item, i) {
      // reorder only if the items are objects
      var
        doReorder = mustReorder && typeof item === __WEBPACK_IMPORTED_MODULE_5__common_global_variables__["u" /* T_OBJECT */] && !hasKeys,
        oldPos = oldItems.indexOf(item),
        isNew = oldPos === -1,
        pos = !isNew && doReorder ? oldPos : i,
        // does a tag exist in this position?
        tag = tags[pos],
        mustAppend = i >= oldItems.length,
        mustCreate =  doReorder && isNew || !doReorder && !tag

      item = !hasKeys && expr.key ? mkitem(expr, item, i) : item

      // new tag
      if (mustCreate) {
        tag = new __WEBPACK_IMPORTED_MODULE_4__tag__["a" /* default */](impl, {
          parent,
          isLoop,
          isAnonymous,
          tagName,
          root: dom.cloneNode(isAnonymous),
          item,
          index: i,
        }, dom.innerHTML)

        // mount the tag
        tag.mount()

        if (mustAppend)
          append.apply(tag, [frag || root, isVirtual])
        else
          insert.apply(tag, [root, tags[i], isVirtual])

        if (!mustAppend) oldItems.splice(i, 0, item)
        tags.splice(i, 0, tag)
        if (child) __WEBPACK_IMPORTED_MODULE_6__common_util_tags__["arrayishAdd"](parent.tags, tagName, tag, true)
      } else if (pos !== i && doReorder) {
        // move
        if (__WEBPACK_IMPORTED_MODULE_2__common_util_misc__["contains"](items, oldItems[pos])) {
          move.apply(tag, [root, tags[i], isVirtual])
          // move the old tag instance
          tags.splice(i, 0, tags.splice(pos, 1)[0])
          // move the old item
          oldItems.splice(i, 0, oldItems.splice(pos, 1)[0])
        }

        // update the position attribute if it exists
        if (expr.pos) tag[expr.pos] = i

        // if the loop tags are not custom
        // we need to move all their custom tags into the right position
        if (!child && tag.tags) moveNestedTags.call(tag, i)
      }

      // cache the original item to use it in the events bound to this node
      // and its children
      tag.__.item = item
      tag.__.index = i
      tag.__.parent = parent

      if (!mustCreate) tag.update(item)
    })

    // remove the redundant tags
    unmountRedundant(items, tags)

    // clone the items array
    oldItems = items.slice()

    // this condition is weird u
    root.insertBefore(frag, placeholder)
  }

  expr.unmount = function() {
    __WEBPACK_IMPORTED_MODULE_2__common_util_misc__["each"](tags, function(t) { t.unmount() })
  }

  return expr
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mkdom;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_global_variables__ = __webpack_require__(0);




/*
  Includes hacks needed for the Internet Explorer version 9 and below
  See: http://kangax.github.io/compat-table/es5/#ie8
       http://codeplanet.io/dropping-ie8/
*/

const
  reHasYield  = /<yield\b/i,
  reYieldAll  = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig,
  reYieldSrc  = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,
  reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig,
  rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' },
  tblTags = __WEBPACK_IMPORTED_MODULE_1__common_global_variables__["f" /* IE_VERSION */] && __WEBPACK_IMPORTED_MODULE_1__common_global_variables__["f" /* IE_VERSION */] < 10 ? __WEBPACK_IMPORTED_MODULE_1__common_global_variables__["o" /* RE_SPECIAL_TAGS */] : __WEBPACK_IMPORTED_MODULE_1__common_global_variables__["p" /* RE_SPECIAL_TAGS_NO_OPTION */],
  GENERIC = 'div',
  SVG = 'svg'


/*
  Creates the root element for table or select child elements:
  tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
*/
function specialTags(el, tmpl, tagName) {

  var
    select = tagName[0] === 'o',
    parent = select ? 'select>' : 'table>'

  // trim() is important here, this ensures we don't have artifacts,
  // so we can check if we have only one element inside the parent
  el.innerHTML = '<' + parent + tmpl.trim() + '</' + parent
  parent = el.firstChild

  // returns the immediate parent if tr/th/td/col is the only element, if not
  // returns the whole tree, as this can include additional elements
  /* istanbul ignore next */
  if (select) {
    parent.selectedIndex = -1  // for IE9, compatible w/current riot behavior
  } else {
    // avoids insertion of cointainer inside container (ex: tbody inside tbody)
    var tname = rootEls[tagName]
    if (tname && parent.childElementCount === 1) parent = __WEBPACK_IMPORTED_MODULE_0__common_util_dom__["$"](tname, parent)
  }
  return parent
}

/*
  Replace the yield tag from any tag template with the innerHTML of the
  original tag in the page
*/
function replaceYield(tmpl, html) {
  // do nothing if no yield
  if (!reHasYield.test(tmpl)) return tmpl

  // be careful with #1343 - string on the source having `$1`
  var src = {}

  html = html && html.replace(reYieldSrc, function (_, ref, text) {
    src[ref] = src[ref] || text   // preserve first definition
    return ''
  }).trim()

  return tmpl
    .replace(reYieldDest, function (_, ref, def) {  // yield with from - to attrs
      return src[ref] || def || ''
    })
    .replace(reYieldAll, function (_, def) {        // yield without any "from"
      return html || def || ''
    })
}

/**
 * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
 * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
 *
 * @param   { String } tmpl  - The template coming from the custom tag definition
 * @param   { String } html - HTML content that comes from the DOM element where you
 *           will mount the tag, mostly the original tag in the page
 * @param   { Boolean } isSvg - true if the root node is an svg
 * @returns { HTMLElement } DOM element with _tmpl_ merged through `YIELD` with the _html_.
 */
function mkdom(tmpl, html, isSvg) {
  var match   = tmpl && tmpl.match(/^\s*<([-\w]+)/),
    tagName = match && match[1].toLowerCase(),
    el = __WEBPACK_IMPORTED_MODULE_0__common_util_dom__["mkEl"](isSvg ? SVG : GENERIC)

  // replace all the yield tags with the tag inner html
  tmpl = replaceYield(tmpl, html)

  /* istanbul ignore next */
  if (tblTags.test(tagName))
    el = specialTags(el, tmpl, tagName)
  else
    __WEBPACK_IMPORTED_MODULE_0__common_util_dom__["setInnerHTML"](el, tmpl)

  return el
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(6)
    //src: src/tags/app.tag

riot.tag2('app',
  '<navbar></navbar>',
  '',
  '', function(opts) {
__webpack_require__(22);
});
    
  

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(6)
    //src: src/tags/components/navbar/navbar.tag

riot.tag2('navbar',
  '<h1>{title}</h1> <nav class="header-nav"> <div class="nav-search"> <button onclick="{changeModeSearch}"><span class="fa fa-search"></span></button> </div> <button onclick="{openDrawer}"><span class="fa fa-navicon"></span></button> </nav>',
  '',
  '', function(opts) {
});
    
  

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.4
var Pattern;

Pattern = (function() {
  Pattern.prototype.regex = null;

  Pattern.prototype.rawRegex = null;

  Pattern.prototype.cleanedRegex = null;

  Pattern.prototype.mapping = null;

  function Pattern(rawRegex, modifiers) {
    var _char, capturingBracketNumber, cleanedRegex, i, len, mapping, name, part, subChar;
    if (modifiers == null) {
      modifiers = '';
    }
    cleanedRegex = '';
    len = rawRegex.length;
    mapping = null;
    capturingBracketNumber = 0;
    i = 0;
    while (i < len) {
      _char = rawRegex.charAt(i);
      if (_char === '\\') {
        cleanedRegex += rawRegex.slice(i, +(i + 1) + 1 || 9e9);
        i++;
      } else if (_char === '(') {
        if (i < len - 2) {
          part = rawRegex.slice(i, +(i + 2) + 1 || 9e9);
          if (part === '(?:') {
            i += 2;
            cleanedRegex += part;
          } else if (part === '(?<') {
            capturingBracketNumber++;
            i += 2;
            name = '';
            while (i + 1 < len) {
              subChar = rawRegex.charAt(i + 1);
              if (subChar === '>') {
                cleanedRegex += '(';
                i++;
                if (name.length > 0) {
                  if (mapping == null) {
                    mapping = {};
                  }
                  mapping[name] = capturingBracketNumber;
                }
                break;
              } else {
                name += subChar;
              }
              i++;
            }
          } else {
            cleanedRegex += _char;
            capturingBracketNumber++;
          }
        } else {
          cleanedRegex += _char;
        }
      } else {
        cleanedRegex += _char;
      }
      i++;
    }
    this.rawRegex = rawRegex;
    this.cleanedRegex = cleanedRegex;
    this.regex = new RegExp(this.cleanedRegex, 'g' + modifiers.replace('g', ''));
    this.mapping = mapping;
  }

  Pattern.prototype.exec = function(str) {
    var index, matches, name, ref;
    this.regex.lastIndex = 0;
    matches = this.regex.exec(str);
    if (matches == null) {
      return null;
    }
    if (this.mapping != null) {
      ref = this.mapping;
      for (name in ref) {
        index = ref[name];
        matches[name] = matches[index];
      }
    }
    return matches;
  };

  Pattern.prototype.test = function(str) {
    this.regex.lastIndex = 0;
    return this.regex.test(str);
  };

  Pattern.prototype.replace = function(str, replacement) {
    this.regex.lastIndex = 0;
    return str.replace(this.regex, replacement);
  };

  Pattern.prototype.replaceAll = function(str, replacement, limit) {
    var count;
    if (limit == null) {
      limit = 0;
    }
    this.regex.lastIndex = 0;
    count = 0;
    while (this.regex.test(str) && (limit === 0 || count < limit)) {
      this.regex.lastIndex = 0;
      str = str.replace(this.regex, replacement);
      count++;
    }
    return [str, count];
  };

  return Pattern;

})();

module.exports = Pattern;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var require;// Generated by CoffeeScript 1.12.4
var Pattern, Utils,
  hasProp = {}.hasOwnProperty;

Pattern = __webpack_require__(23);

Utils = (function() {
  function Utils() {}

  Utils.REGEX_LEFT_TRIM_BY_CHAR = {};

  Utils.REGEX_RIGHT_TRIM_BY_CHAR = {};

  Utils.REGEX_SPACES = /\s+/g;

  Utils.REGEX_DIGITS = /^\d+$/;

  Utils.REGEX_OCTAL = /[^0-7]/gi;

  Utils.REGEX_HEXADECIMAL = /[^a-f0-9]/gi;

  Utils.PATTERN_DATE = new Pattern('^' + '(?<year>[0-9][0-9][0-9][0-9])' + '-(?<month>[0-9][0-9]?)' + '-(?<day>[0-9][0-9]?)' + '(?:(?:[Tt]|[ \t]+)' + '(?<hour>[0-9][0-9]?)' + ':(?<minute>[0-9][0-9])' + ':(?<second>[0-9][0-9])' + '(?:\.(?<fraction>[0-9]*))?' + '(?:[ \t]*(?<tz>Z|(?<tz_sign>[-+])(?<tz_hour>[0-9][0-9]?)' + '(?::(?<tz_minute>[0-9][0-9]))?))?)?' + '$', 'i');

  Utils.LOCAL_TIMEZONE_OFFSET = new Date().getTimezoneOffset() * 60 * 1000;

  Utils.trim = function(str, _char) {
    var regexLeft, regexRight;
    if (_char == null) {
      _char = '\\s';
    }
    regexLeft = this.REGEX_LEFT_TRIM_BY_CHAR[_char];
    if (regexLeft == null) {
      this.REGEX_LEFT_TRIM_BY_CHAR[_char] = regexLeft = new RegExp('^' + _char + '' + _char + '*');
    }
    regexLeft.lastIndex = 0;
    regexRight = this.REGEX_RIGHT_TRIM_BY_CHAR[_char];
    if (regexRight == null) {
      this.REGEX_RIGHT_TRIM_BY_CHAR[_char] = regexRight = new RegExp(_char + '' + _char + '*$');
    }
    regexRight.lastIndex = 0;
    return str.replace(regexLeft, '').replace(regexRight, '');
  };

  Utils.ltrim = function(str, _char) {
    var regexLeft;
    if (_char == null) {
      _char = '\\s';
    }
    regexLeft = this.REGEX_LEFT_TRIM_BY_CHAR[_char];
    if (regexLeft == null) {
      this.REGEX_LEFT_TRIM_BY_CHAR[_char] = regexLeft = new RegExp('^' + _char + '' + _char + '*');
    }
    regexLeft.lastIndex = 0;
    return str.replace(regexLeft, '');
  };

  Utils.rtrim = function(str, _char) {
    var regexRight;
    if (_char == null) {
      _char = '\\s';
    }
    regexRight = this.REGEX_RIGHT_TRIM_BY_CHAR[_char];
    if (regexRight == null) {
      this.REGEX_RIGHT_TRIM_BY_CHAR[_char] = regexRight = new RegExp(_char + '' + _char + '*$');
    }
    regexRight.lastIndex = 0;
    return str.replace(regexRight, '');
  };

  Utils.isEmpty = function(value) {
    return !value || value === '' || value === '0' || (value instanceof Array && value.length === 0) || this.isEmptyObject(value);
  };

  Utils.isEmptyObject = function(value) {
    var k;
    return value instanceof Object && ((function() {
      var results;
      results = [];
      for (k in value) {
        if (!hasProp.call(value, k)) continue;
        results.push(k);
      }
      return results;
    })()).length === 0;
  };

  Utils.subStrCount = function(string, subString, start, length) {
    var c, i, j, len, ref, sublen;
    c = 0;
    string = '' + string;
    subString = '' + subString;
    if (start != null) {
      string = string.slice(start);
    }
    if (length != null) {
      string = string.slice(0, length);
    }
    len = string.length;
    sublen = subString.length;
    for (i = j = 0, ref = len; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      if (subString === string.slice(i, sublen)) {
        c++;
        i += sublen - 1;
      }
    }
    return c;
  };

  Utils.isDigits = function(input) {
    this.REGEX_DIGITS.lastIndex = 0;
    return this.REGEX_DIGITS.test(input);
  };

  Utils.octDec = function(input) {
    this.REGEX_OCTAL.lastIndex = 0;
    return parseInt((input + '').replace(this.REGEX_OCTAL, ''), 8);
  };

  Utils.hexDec = function(input) {
    this.REGEX_HEXADECIMAL.lastIndex = 0;
    input = this.trim(input);
    if ((input + '').slice(0, 2) === '0x') {
      input = (input + '').slice(2);
    }
    return parseInt((input + '').replace(this.REGEX_HEXADECIMAL, ''), 16);
  };

  Utils.utf8chr = function(c) {
    var ch;
    ch = String.fromCharCode;
    if (0x80 > (c %= 0x200000)) {
      return ch(c);
    }
    if (0x800 > c) {
      return ch(0xC0 | c >> 6) + ch(0x80 | c & 0x3F);
    }
    if (0x10000 > c) {
      return ch(0xE0 | c >> 12) + ch(0x80 | c >> 6 & 0x3F) + ch(0x80 | c & 0x3F);
    }
    return ch(0xF0 | c >> 18) + ch(0x80 | c >> 12 & 0x3F) + ch(0x80 | c >> 6 & 0x3F) + ch(0x80 | c & 0x3F);
  };

  Utils.parseBoolean = function(input, strict) {
    var lowerInput;
    if (strict == null) {
      strict = true;
    }
    if (typeof input === 'string') {
      lowerInput = input.toLowerCase();
      if (!strict) {
        if (lowerInput === 'no') {
          return false;
        }
      }
      if (lowerInput === '0') {
        return false;
      }
      if (lowerInput === 'false') {
        return false;
      }
      if (lowerInput === '') {
        return false;
      }
      return true;
    }
    return !!input;
  };

  Utils.isNumeric = function(input) {
    this.REGEX_SPACES.lastIndex = 0;
    return typeof input === 'number' || typeof input === 'string' && !isNaN(input) && input.replace(this.REGEX_SPACES, '') !== '';
  };

  Utils.stringToDate = function(str) {
    var date, day, fraction, hour, info, minute, month, second, tz_hour, tz_minute, tz_offset, year;
    if (!(str != null ? str.length : void 0)) {
      return null;
    }
    info = this.PATTERN_DATE.exec(str);
    if (!info) {
      return null;
    }
    year = parseInt(info.year, 10);
    month = parseInt(info.month, 10) - 1;
    day = parseInt(info.day, 10);
    if (info.hour == null) {
      date = new Date(Date.UTC(year, month, day));
      return date;
    }
    hour = parseInt(info.hour, 10);
    minute = parseInt(info.minute, 10);
    second = parseInt(info.second, 10);
    if (info.fraction != null) {
      fraction = info.fraction.slice(0, 3);
      while (fraction.length < 3) {
        fraction += '0';
      }
      fraction = parseInt(fraction, 10);
    } else {
      fraction = 0;
    }
    if (info.tz != null) {
      tz_hour = parseInt(info.tz_hour, 10);
      if (info.tz_minute != null) {
        tz_minute = parseInt(info.tz_minute, 10);
      } else {
        tz_minute = 0;
      }
      tz_offset = (tz_hour * 60 + tz_minute) * 60000;
      if ('-' === info.tz_sign) {
        tz_offset *= -1;
      }
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (tz_offset) {
      date.setTime(date.getTime() - tz_offset);
    }
    return date;
  };

  Utils.strRepeat = function(str, number) {
    var i, res;
    res = '';
    i = 0;
    while (i < number) {
      res += str;
      i++;
    }
    return res;
  };

  Utils.getStringFromFile = function(path, callback) {
    var data, fs, j, len1, name, ref, req, xhr;
    if (callback == null) {
      callback = null;
    }
    xhr = null;
    if (typeof window !== "undefined" && window !== null) {
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        ref = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
        for (j = 0, len1 = ref.length; j < len1; j++) {
          name = ref[j];
          try {
            xhr = new ActiveXObject(name);
          } catch (error) {}
        }
      }
    }
    if (xhr != null) {
      if (callback != null) {
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
              return callback(xhr.responseText);
            } else {
              return callback(null);
            }
          }
        };
        xhr.open('GET', path, true);
        return xhr.send(null);
      } else {
        xhr.open('GET', path, false);
        xhr.send(null);
        if (xhr.status === 200 || xhr.status === 0) {
          return xhr.responseText;
        }
        return null;
      }
    } else {
      req = require;
      fs = __webpack_require__(32);
      if (callback != null) {
        return fs.readFile(path, function(err, data) {
          if (err) {
            return callback(null);
          } else {
            return callback(String(data));
          }
        });
      } else {
        data = fs.readFileSync(path);
        if (data != null) {
          return String(data);
        }
        return null;
      }
    }
  };

  return Utils;

})();

module.exports = Utils;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.4
var DumpException, Escaper, Inline, ParseException, ParseMore, Pattern, Unescaper, Utils,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Pattern = __webpack_require__(23);

Unescaper = __webpack_require__(31);

Escaper = __webpack_require__(33);

Utils = __webpack_require__(24);

ParseException = __webpack_require__(26);

ParseMore = __webpack_require__(27);

DumpException = __webpack_require__(34);

Inline = (function() {
  function Inline() {}

  Inline.REGEX_QUOTED_STRING = '(?:"(?:[^"\\\\]*(?:\\\\.[^"\\\\]*)*)"|\'(?:[^\']*(?:\'\'[^\']*)*)\')';

  Inline.PATTERN_TRAILING_COMMENTS = new Pattern('^\\s*#.*$');

  Inline.PATTERN_QUOTED_SCALAR = new Pattern('^' + Inline.REGEX_QUOTED_STRING);

  Inline.PATTERN_THOUSAND_NUMERIC_SCALAR = new Pattern('^(-|\\+)?[0-9,]+(\\.[0-9]+)?$');

  Inline.PATTERN_SCALAR_BY_DELIMITERS = {};

  Inline.settings = {};

  Inline.configure = function(exceptionOnInvalidType, objectDecoder) {
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = null;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    this.settings.exceptionOnInvalidType = exceptionOnInvalidType;
    this.settings.objectDecoder = objectDecoder;
  };

  Inline.parse = function(value, exceptionOnInvalidType, objectDecoder) {
    var context, result;
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    this.settings.exceptionOnInvalidType = exceptionOnInvalidType;
    this.settings.objectDecoder = objectDecoder;
    if (value == null) {
      return '';
    }
    value = Utils.trim(value);
    if (0 === value.length) {
      return '';
    }
    context = {
      exceptionOnInvalidType: exceptionOnInvalidType,
      objectDecoder: objectDecoder,
      i: 0
    };
    switch (value.charAt(0)) {
      case '[':
        result = this.parseSequence(value, context);
        ++context.i;
        break;
      case '{':
        result = this.parseMapping(value, context);
        ++context.i;
        break;
      default:
        result = this.parseScalar(value, null, ['"', "'"], context);
    }
    if (this.PATTERN_TRAILING_COMMENTS.replace(value.slice(context.i), '') !== '') {
      throw new ParseException('Unexpected characters near "' + value.slice(context.i) + '".');
    }
    return result;
  };

  Inline.dump = function(value, exceptionOnInvalidType, objectEncoder) {
    var ref, result, type;
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectEncoder == null) {
      objectEncoder = null;
    }
    if (value == null) {
      return 'null';
    }
    type = typeof value;
    if (type === 'object') {
      if (value instanceof Date) {
        return value.toISOString();
      } else if (objectEncoder != null) {
        result = objectEncoder(value);
        if (typeof result === 'string' || (result != null)) {
          return result;
        }
      }
      return this.dumpObject(value);
    }
    if (type === 'boolean') {
      return (value ? 'true' : 'false');
    }
    if (Utils.isDigits(value)) {
      return (type === 'string' ? "'" + value + "'" : String(parseInt(value)));
    }
    if (Utils.isNumeric(value)) {
      return (type === 'string' ? "'" + value + "'" : String(parseFloat(value)));
    }
    if (type === 'number') {
      return (value === 2e308 ? '.Inf' : (value === -2e308 ? '-.Inf' : (isNaN(value) ? '.NaN' : value)));
    }
    if (Escaper.requiresDoubleQuoting(value)) {
      return Escaper.escapeWithDoubleQuotes(value);
    }
    if (Escaper.requiresSingleQuoting(value)) {
      return Escaper.escapeWithSingleQuotes(value);
    }
    if ('' === value) {
      return '""';
    }
    if (Utils.PATTERN_DATE.test(value)) {
      return "'" + value + "'";
    }
    if ((ref = value.toLowerCase()) === 'null' || ref === '~' || ref === 'true' || ref === 'false') {
      return "'" + value + "'";
    }
    return value;
  };

  Inline.dumpObject = function(value, exceptionOnInvalidType, objectSupport) {
    var j, key, len1, output, val;
    if (objectSupport == null) {
      objectSupport = null;
    }
    if (value instanceof Array) {
      output = [];
      for (j = 0, len1 = value.length; j < len1; j++) {
        val = value[j];
        output.push(this.dump(val));
      }
      return '[' + output.join(', ') + ']';
    } else {
      output = [];
      for (key in value) {
        val = value[key];
        output.push(this.dump(key) + ': ' + this.dump(val));
      }
      return '{' + output.join(', ') + '}';
    }
  };

  Inline.parseScalar = function(scalar, delimiters, stringDelimiters, context, evaluate) {
    var i, joinedDelimiters, match, output, pattern, ref, ref1, strpos, tmp;
    if (delimiters == null) {
      delimiters = null;
    }
    if (stringDelimiters == null) {
      stringDelimiters = ['"', "'"];
    }
    if (context == null) {
      context = null;
    }
    if (evaluate == null) {
      evaluate = true;
    }
    if (context == null) {
      context = {
        exceptionOnInvalidType: this.settings.exceptionOnInvalidType,
        objectDecoder: this.settings.objectDecoder,
        i: 0
      };
    }
    i = context.i;
    if (ref = scalar.charAt(i), indexOf.call(stringDelimiters, ref) >= 0) {
      output = this.parseQuotedScalar(scalar, context);
      i = context.i;
      if (delimiters != null) {
        tmp = Utils.ltrim(scalar.slice(i), ' ');
        if (!(ref1 = tmp.charAt(0), indexOf.call(delimiters, ref1) >= 0)) {
          throw new ParseException('Unexpected characters (' + scalar.slice(i) + ').');
        }
      }
    } else {
      if (!delimiters) {
        output = scalar.slice(i);
        i += output.length;
        strpos = output.indexOf(' #');
        if (strpos !== -1) {
          output = Utils.rtrim(output.slice(0, strpos));
        }
      } else {
        joinedDelimiters = delimiters.join('|');
        pattern = this.PATTERN_SCALAR_BY_DELIMITERS[joinedDelimiters];
        if (pattern == null) {
          pattern = new Pattern('^(.+?)(' + joinedDelimiters + ')');
          this.PATTERN_SCALAR_BY_DELIMITERS[joinedDelimiters] = pattern;
        }
        if (match = pattern.exec(scalar.slice(i))) {
          output = match[1];
          i += output.length;
        } else {
          throw new ParseException('Malformed inline YAML string (' + scalar + ').');
        }
      }
      if (evaluate) {
        output = this.evaluateScalar(output, context);
      }
    }
    context.i = i;
    return output;
  };

  Inline.parseQuotedScalar = function(scalar, context) {
    var i, match, output;
    i = context.i;
    if (!(match = this.PATTERN_QUOTED_SCALAR.exec(scalar.slice(i)))) {
      throw new ParseMore('Malformed inline YAML string (' + scalar.slice(i) + ').');
    }
    output = match[0].substr(1, match[0].length - 2);
    if ('"' === scalar.charAt(i)) {
      output = Unescaper.unescapeDoubleQuotedString(output);
    } else {
      output = Unescaper.unescapeSingleQuotedString(output);
    }
    i += match[0].length;
    context.i = i;
    return output;
  };

  Inline.parseSequence = function(sequence, context) {
    var e, i, isQuoted, len, output, ref, value;
    output = [];
    len = sequence.length;
    i = context.i;
    i += 1;
    while (i < len) {
      context.i = i;
      switch (sequence.charAt(i)) {
        case '[':
          output.push(this.parseSequence(sequence, context));
          i = context.i;
          break;
        case '{':
          output.push(this.parseMapping(sequence, context));
          i = context.i;
          break;
        case ']':
          return output;
        case ',':
        case ' ':
        case "\n":
          break;
        default:
          isQuoted = ((ref = sequence.charAt(i)) === '"' || ref === "'");
          value = this.parseScalar(sequence, [',', ']'], ['"', "'"], context);
          i = context.i;
          if (!isQuoted && typeof value === 'string' && (value.indexOf(': ') !== -1 || value.indexOf(":\n") !== -1)) {
            try {
              value = this.parseMapping('{' + value + '}');
            } catch (error) {
              e = error;
            }
          }
          output.push(value);
          --i;
      }
      ++i;
    }
    throw new ParseMore('Malformed inline YAML string ' + sequence);
  };

  Inline.parseMapping = function(mapping, context) {
    var done, i, key, len, output, shouldContinueWhileLoop, value;
    output = {};
    len = mapping.length;
    i = context.i;
    i += 1;
    shouldContinueWhileLoop = false;
    while (i < len) {
      context.i = i;
      switch (mapping.charAt(i)) {
        case ' ':
        case ',':
        case "\n":
          ++i;
          context.i = i;
          shouldContinueWhileLoop = true;
          break;
        case '}':
          return output;
      }
      if (shouldContinueWhileLoop) {
        shouldContinueWhileLoop = false;
        continue;
      }
      key = this.parseScalar(mapping, [':', ' ', "\n"], ['"', "'"], context, false);
      i = context.i;
      done = false;
      while (i < len) {
        context.i = i;
        switch (mapping.charAt(i)) {
          case '[':
            value = this.parseSequence(mapping, context);
            i = context.i;
            if (output[key] === void 0) {
              output[key] = value;
            }
            done = true;
            break;
          case '{':
            value = this.parseMapping(mapping, context);
            i = context.i;
            if (output[key] === void 0) {
              output[key] = value;
            }
            done = true;
            break;
          case ':':
          case ' ':
          case "\n":
            break;
          default:
            value = this.parseScalar(mapping, [',', '}'], ['"', "'"], context);
            i = context.i;
            if (output[key] === void 0) {
              output[key] = value;
            }
            done = true;
            --i;
        }
        ++i;
        if (done) {
          break;
        }
      }
    }
    throw new ParseMore('Malformed inline YAML string ' + mapping);
  };

  Inline.evaluateScalar = function(scalar, context) {
    var cast, date, exceptionOnInvalidType, firstChar, firstSpace, firstWord, objectDecoder, raw, scalarLower, subValue, trimmedScalar;
    scalar = Utils.trim(scalar);
    scalarLower = scalar.toLowerCase();
    switch (scalarLower) {
      case 'null':
      case '':
      case '~':
        return null;
      case 'true':
        return true;
      case 'false':
        return false;
      case '.inf':
        return 2e308;
      case '.nan':
        return 0/0;
      case '-.inf':
        return 2e308;
      default:
        firstChar = scalarLower.charAt(0);
        switch (firstChar) {
          case '!':
            firstSpace = scalar.indexOf(' ');
            if (firstSpace === -1) {
              firstWord = scalarLower;
            } else {
              firstWord = scalarLower.slice(0, firstSpace);
            }
            switch (firstWord) {
              case '!':
                if (firstSpace !== -1) {
                  return parseInt(this.parseScalar(scalar.slice(2)));
                }
                return null;
              case '!str':
                return Utils.ltrim(scalar.slice(4));
              case '!!str':
                return Utils.ltrim(scalar.slice(5));
              case '!!int':
                return parseInt(this.parseScalar(scalar.slice(5)));
              case '!!bool':
                return Utils.parseBoolean(this.parseScalar(scalar.slice(6)), false);
              case '!!float':
                return parseFloat(this.parseScalar(scalar.slice(7)));
              case '!!timestamp':
                return Utils.stringToDate(Utils.ltrim(scalar.slice(11)));
              default:
                if (context == null) {
                  context = {
                    exceptionOnInvalidType: this.settings.exceptionOnInvalidType,
                    objectDecoder: this.settings.objectDecoder,
                    i: 0
                  };
                }
                objectDecoder = context.objectDecoder, exceptionOnInvalidType = context.exceptionOnInvalidType;
                if (objectDecoder) {
                  trimmedScalar = Utils.rtrim(scalar);
                  firstSpace = trimmedScalar.indexOf(' ');
                  if (firstSpace === -1) {
                    return objectDecoder(trimmedScalar, null);
                  } else {
                    subValue = Utils.ltrim(trimmedScalar.slice(firstSpace + 1));
                    if (!(subValue.length > 0)) {
                      subValue = null;
                    }
                    return objectDecoder(trimmedScalar.slice(0, firstSpace), subValue);
                  }
                }
                if (exceptionOnInvalidType) {
                  throw new ParseException('Custom object support when parsing a YAML file has been disabled.');
                }
                return null;
            }
            break;
          case '0':
            if ('0x' === scalar.slice(0, 2)) {
              return Utils.hexDec(scalar);
            } else if (Utils.isDigits(scalar)) {
              return Utils.octDec(scalar);
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else {
              return scalar;
            }
            break;
          case '+':
            if (Utils.isDigits(scalar)) {
              raw = scalar;
              cast = parseInt(raw);
              if (raw === String(cast)) {
                return cast;
              } else {
                return raw;
              }
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else if (this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(scalar)) {
              return parseFloat(scalar.replace(',', ''));
            }
            return scalar;
          case '-':
            if (Utils.isDigits(scalar.slice(1))) {
              if ('0' === scalar.charAt(1)) {
                return -Utils.octDec(scalar.slice(1));
              } else {
                raw = scalar.slice(1);
                cast = parseInt(raw);
                if (raw === String(cast)) {
                  return -cast;
                } else {
                  return -raw;
                }
              }
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else if (this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(scalar)) {
              return parseFloat(scalar.replace(',', ''));
            }
            return scalar;
          default:
            if (date = Utils.stringToDate(scalar)) {
              return date;
            } else if (Utils.isNumeric(scalar)) {
              return parseFloat(scalar);
            } else if (this.PATTERN_THOUSAND_NUMERIC_SCALAR.test(scalar)) {
              return parseFloat(scalar.replace(',', ''));
            }
            return scalar;
        }
    }
  };

  return Inline;

})();

module.exports = Inline;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.4
var ParseException,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ParseException = (function(superClass) {
  extend(ParseException, superClass);

  function ParseException(message, parsedLine, snippet) {
    this.message = message;
    this.parsedLine = parsedLine;
    this.snippet = snippet;
  }

  ParseException.prototype.toString = function() {
    if ((this.parsedLine != null) && (this.snippet != null)) {
      return '<ParseException> ' + this.message + ' (line ' + this.parsedLine + ': \'' + this.snippet + '\')';
    } else {
      return '<ParseException> ' + this.message;
    }
  };

  return ParseException;

})(Error);

module.exports = ParseException;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.4
var ParseMore,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ParseMore = (function(superClass) {
  extend(ParseMore, superClass);

  function ParseMore(message, parsedLine, snippet) {
    this.message = message;
    this.parsedLine = parsedLine;
    this.snippet = snippet;
  }

  ParseMore.prototype.toString = function() {
    if ((this.parsedLine != null) && (this.snippet != null)) {
      return '<ParseMore> ' + this.message + ' (line ' + this.parsedLine + ': \'' + this.snippet + '\')';
    } else {
      return '<ParseMore> ' + this.message;
    }
  };

  return ParseMore;

})(Error);

module.exports = ParseMore;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 言語ファイルまとめ
var YAML = __webpack_require__(29);

module.exports = {
    ja: YAML.load('../../locales/ja.yml'),
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.4
var Dumper, Parser, Utils, Yaml;

Parser = __webpack_require__(30);

Dumper = __webpack_require__(35);

Utils = __webpack_require__(24);

Yaml = (function() {
  function Yaml() {}

  Yaml.parse = function(input, exceptionOnInvalidType, objectDecoder) {
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    return new Parser().parse(input, exceptionOnInvalidType, objectDecoder);
  };

  Yaml.parseFile = function(path, callback, exceptionOnInvalidType, objectDecoder) {
    var input;
    if (callback == null) {
      callback = null;
    }
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    if (callback != null) {
      return Utils.getStringFromFile(path, (function(_this) {
        return function(input) {
          var result;
          result = null;
          if (input != null) {
            result = _this.parse(input, exceptionOnInvalidType, objectDecoder);
          }
          callback(result);
        };
      })(this));
    } else {
      input = Utils.getStringFromFile(path);
      if (input != null) {
        return this.parse(input, exceptionOnInvalidType, objectDecoder);
      }
      return null;
    }
  };

  Yaml.dump = function(input, inline, indent, exceptionOnInvalidType, objectEncoder) {
    var yaml;
    if (inline == null) {
      inline = 2;
    }
    if (indent == null) {
      indent = 4;
    }
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectEncoder == null) {
      objectEncoder = null;
    }
    yaml = new Dumper();
    yaml.indentation = indent;
    return yaml.dump(input, inline, 0, exceptionOnInvalidType, objectEncoder);
  };

  Yaml.register = function() {
    var require_handler;
    require_handler = function(module, filename) {
      return module.exports = YAML.parseFile(filename);
    };
    if (("function" !== "undefined" && !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()) !== null ? (void 0) : void 0) != null) {
      (void 0)['.yml'] = require_handler;
      return (void 0)['.yaml'] = require_handler;
    }
  };

  Yaml.stringify = function(input, inline, indent, exceptionOnInvalidType, objectEncoder) {
    return this.dump(input, inline, indent, exceptionOnInvalidType, objectEncoder);
  };

  Yaml.load = function(path, callback, exceptionOnInvalidType, objectDecoder) {
    return this.parseFile(path, callback, exceptionOnInvalidType, objectDecoder);
  };

  return Yaml;

})();

if (typeof window !== "undefined" && window !== null) {
  window.YAML = Yaml;
}

if (typeof window === "undefined" || window === null) {
  this.YAML = Yaml;
}

module.exports = Yaml;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.4
var Inline, ParseException, ParseMore, Parser, Pattern, Utils;

Inline = __webpack_require__(25);

Pattern = __webpack_require__(23);

Utils = __webpack_require__(24);

ParseException = __webpack_require__(26);

ParseMore = __webpack_require__(27);

Parser = (function() {
  Parser.prototype.PATTERN_FOLDED_SCALAR_ALL = new Pattern('^(?:(?<type>![^\\|>]*)\\s+)?(?<separator>\\||>)(?<modifiers>\\+|\\-|\\d+|\\+\\d+|\\-\\d+|\\d+\\+|\\d+\\-)?(?<comments> +#.*)?$');

  Parser.prototype.PATTERN_FOLDED_SCALAR_END = new Pattern('(?<separator>\\||>)(?<modifiers>\\+|\\-|\\d+|\\+\\d+|\\-\\d+|\\d+\\+|\\d+\\-)?(?<comments> +#.*)?$');

  Parser.prototype.PATTERN_SEQUENCE_ITEM = new Pattern('^\\-((?<leadspaces>\\s+)(?<value>.+?))?\\s*$');

  Parser.prototype.PATTERN_ANCHOR_VALUE = new Pattern('^&(?<ref>[^ ]+) *(?<value>.*)');

  Parser.prototype.PATTERN_COMPACT_NOTATION = new Pattern('^(?<key>' + Inline.REGEX_QUOTED_STRING + '|[^ \'"\\{\\[].*?) *\\:(\\s+(?<value>.+?))?\\s*$');

  Parser.prototype.PATTERN_MAPPING_ITEM = new Pattern('^(?<key>' + Inline.REGEX_QUOTED_STRING + '|[^ \'"\\[\\{].*?) *\\:(\\s+(?<value>.+?))?\\s*$');

  Parser.prototype.PATTERN_DECIMAL = new Pattern('\\d+');

  Parser.prototype.PATTERN_INDENT_SPACES = new Pattern('^ +');

  Parser.prototype.PATTERN_TRAILING_LINES = new Pattern('(\n*)$');

  Parser.prototype.PATTERN_YAML_HEADER = new Pattern('^\\%YAML[: ][\\d\\.]+.*\n', 'm');

  Parser.prototype.PATTERN_LEADING_COMMENTS = new Pattern('^(\\#.*?\n)+', 'm');

  Parser.prototype.PATTERN_DOCUMENT_MARKER_START = new Pattern('^\\-\\-\\-.*?\n', 'm');

  Parser.prototype.PATTERN_DOCUMENT_MARKER_END = new Pattern('^\\.\\.\\.\\s*$', 'm');

  Parser.prototype.PATTERN_FOLDED_SCALAR_BY_INDENTATION = {};

  Parser.prototype.CONTEXT_NONE = 0;

  Parser.prototype.CONTEXT_SEQUENCE = 1;

  Parser.prototype.CONTEXT_MAPPING = 2;

  function Parser(offset) {
    this.offset = offset != null ? offset : 0;
    this.lines = [];
    this.currentLineNb = -1;
    this.currentLine = '';
    this.refs = {};
  }

  Parser.prototype.parse = function(value, exceptionOnInvalidType, objectDecoder) {
    var alias, allowOverwrite, block, c, context, data, e, first, i, indent, isRef, j, k, key, l, lastKey, len, len1, len2, len3, lineCount, m, matches, mergeNode, n, name, parsed, parsedItem, parser, ref, ref1, ref2, refName, refValue, val, values;
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectDecoder == null) {
      objectDecoder = null;
    }
    this.currentLineNb = -1;
    this.currentLine = '';
    this.lines = this.cleanup(value).split("\n");
    data = null;
    context = this.CONTEXT_NONE;
    allowOverwrite = false;
    while (this.moveToNextLine()) {
      if (this.isCurrentLineEmpty()) {
        continue;
      }
      if ("\t" === this.currentLine[0]) {
        throw new ParseException('A YAML file cannot contain tabs as indentation.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
      isRef = mergeNode = false;
      if (values = this.PATTERN_SEQUENCE_ITEM.exec(this.currentLine)) {
        if (this.CONTEXT_MAPPING === context) {
          throw new ParseException('You cannot define a sequence item when in a mapping');
        }
        context = this.CONTEXT_SEQUENCE;
        if (data == null) {
          data = [];
        }
        if ((values.value != null) && (matches = this.PATTERN_ANCHOR_VALUE.exec(values.value))) {
          isRef = matches.ref;
          values.value = matches.value;
        }
        if (!(values.value != null) || '' === Utils.trim(values.value, ' ') || Utils.ltrim(values.value, ' ').indexOf('#') === 0) {
          if (this.currentLineNb < this.lines.length - 1 && !this.isNextLineUnIndentedCollection()) {
            c = this.getRealCurrentLineNb() + 1;
            parser = new Parser(c);
            parser.refs = this.refs;
            data.push(parser.parse(this.getNextEmbedBlock(null, true), exceptionOnInvalidType, objectDecoder));
          } else {
            data.push(null);
          }
        } else {
          if (((ref = values.leadspaces) != null ? ref.length : void 0) && (matches = this.PATTERN_COMPACT_NOTATION.exec(values.value))) {
            c = this.getRealCurrentLineNb();
            parser = new Parser(c);
            parser.refs = this.refs;
            block = values.value;
            indent = this.getCurrentLineIndentation();
            if (this.isNextLineIndented(false)) {
              block += "\n" + this.getNextEmbedBlock(indent + values.leadspaces.length + 1, true);
            }
            data.push(parser.parse(block, exceptionOnInvalidType, objectDecoder));
          } else {
            data.push(this.parseValue(values.value, exceptionOnInvalidType, objectDecoder));
          }
        }
      } else if ((values = this.PATTERN_MAPPING_ITEM.exec(this.currentLine)) && values.key.indexOf(' #') === -1) {
        if (this.CONTEXT_SEQUENCE === context) {
          throw new ParseException('You cannot define a mapping item when in a sequence');
        }
        context = this.CONTEXT_MAPPING;
        if (data == null) {
          data = {};
        }
        Inline.configure(exceptionOnInvalidType, objectDecoder);
        try {
          key = Inline.parseScalar(values.key);
        } catch (error) {
          e = error;
          e.parsedLine = this.getRealCurrentLineNb() + 1;
          e.snippet = this.currentLine;
          throw e;
        }
        if ('<<' === key) {
          mergeNode = true;
          allowOverwrite = true;
          if (((ref1 = values.value) != null ? ref1.indexOf('*') : void 0) === 0) {
            refName = values.value.slice(1);
            if (this.refs[refName] == null) {
              throw new ParseException('Reference "' + refName + '" does not exist.', this.getRealCurrentLineNb() + 1, this.currentLine);
            }
            refValue = this.refs[refName];
            if (typeof refValue !== 'object') {
              throw new ParseException('YAML merge keys used with a scalar value instead of an object.', this.getRealCurrentLineNb() + 1, this.currentLine);
            }
            if (refValue instanceof Array) {
              for (i = j = 0, len = refValue.length; j < len; i = ++j) {
                value = refValue[i];
                if (data[name = String(i)] == null) {
                  data[name] = value;
                }
              }
            } else {
              for (key in refValue) {
                value = refValue[key];
                if (data[key] == null) {
                  data[key] = value;
                }
              }
            }
          } else {
            if ((values.value != null) && values.value !== '') {
              value = values.value;
            } else {
              value = this.getNextEmbedBlock();
            }
            c = this.getRealCurrentLineNb() + 1;
            parser = new Parser(c);
            parser.refs = this.refs;
            parsed = parser.parse(value, exceptionOnInvalidType);
            if (typeof parsed !== 'object') {
              throw new ParseException('YAML merge keys used with a scalar value instead of an object.', this.getRealCurrentLineNb() + 1, this.currentLine);
            }
            if (parsed instanceof Array) {
              for (l = 0, len1 = parsed.length; l < len1; l++) {
                parsedItem = parsed[l];
                if (typeof parsedItem !== 'object') {
                  throw new ParseException('Merge items must be objects.', this.getRealCurrentLineNb() + 1, parsedItem);
                }
                if (parsedItem instanceof Array) {
                  for (i = m = 0, len2 = parsedItem.length; m < len2; i = ++m) {
                    value = parsedItem[i];
                    k = String(i);
                    if (!data.hasOwnProperty(k)) {
                      data[k] = value;
                    }
                  }
                } else {
                  for (key in parsedItem) {
                    value = parsedItem[key];
                    if (!data.hasOwnProperty(key)) {
                      data[key] = value;
                    }
                  }
                }
              }
            } else {
              for (key in parsed) {
                value = parsed[key];
                if (!data.hasOwnProperty(key)) {
                  data[key] = value;
                }
              }
            }
          }
        } else if ((values.value != null) && (matches = this.PATTERN_ANCHOR_VALUE.exec(values.value))) {
          isRef = matches.ref;
          values.value = matches.value;
        }
        if (mergeNode) {

        } else if (!(values.value != null) || '' === Utils.trim(values.value, ' ') || Utils.ltrim(values.value, ' ').indexOf('#') === 0) {
          if (!(this.isNextLineIndented()) && !(this.isNextLineUnIndentedCollection())) {
            if (allowOverwrite || data[key] === void 0) {
              data[key] = null;
            }
          } else {
            c = this.getRealCurrentLineNb() + 1;
            parser = new Parser(c);
            parser.refs = this.refs;
            val = parser.parse(this.getNextEmbedBlock(), exceptionOnInvalidType, objectDecoder);
            if (allowOverwrite || data[key] === void 0) {
              data[key] = val;
            }
          }
        } else {
          val = this.parseValue(values.value, exceptionOnInvalidType, objectDecoder);
          if (allowOverwrite || data[key] === void 0) {
            data[key] = val;
          }
        }
      } else {
        lineCount = this.lines.length;
        if (1 === lineCount || (2 === lineCount && Utils.isEmpty(this.lines[1]))) {
          try {
            value = Inline.parse(this.lines[0], exceptionOnInvalidType, objectDecoder);
          } catch (error) {
            e = error;
            e.parsedLine = this.getRealCurrentLineNb() + 1;
            e.snippet = this.currentLine;
            throw e;
          }
          if (typeof value === 'object') {
            if (value instanceof Array) {
              first = value[0];
            } else {
              for (key in value) {
                first = value[key];
                break;
              }
            }
            if (typeof first === 'string' && first.indexOf('*') === 0) {
              data = [];
              for (n = 0, len3 = value.length; n < len3; n++) {
                alias = value[n];
                data.push(this.refs[alias.slice(1)]);
              }
              value = data;
            }
          }
          return value;
        } else if ((ref2 = Utils.ltrim(value).charAt(0)) === '[' || ref2 === '{') {
          try {
            return Inline.parse(value, exceptionOnInvalidType, objectDecoder);
          } catch (error) {
            e = error;
            e.parsedLine = this.getRealCurrentLineNb() + 1;
            e.snippet = this.currentLine;
            throw e;
          }
        }
        throw new ParseException('Unable to parse.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
      if (isRef) {
        if (data instanceof Array) {
          this.refs[isRef] = data[data.length - 1];
        } else {
          lastKey = null;
          for (key in data) {
            lastKey = key;
          }
          this.refs[isRef] = data[lastKey];
        }
      }
    }
    if (Utils.isEmpty(data)) {
      return null;
    } else {
      return data;
    }
  };

  Parser.prototype.getRealCurrentLineNb = function() {
    return this.currentLineNb + this.offset;
  };

  Parser.prototype.getCurrentLineIndentation = function() {
    return this.currentLine.length - Utils.ltrim(this.currentLine, ' ').length;
  };

  Parser.prototype.getNextEmbedBlock = function(indentation, includeUnindentedCollection) {
    var data, indent, isItUnindentedCollection, newIndent, removeComments, removeCommentsPattern, unindentedEmbedBlock;
    if (indentation == null) {
      indentation = null;
    }
    if (includeUnindentedCollection == null) {
      includeUnindentedCollection = false;
    }
    this.moveToNextLine();
    if (indentation == null) {
      newIndent = this.getCurrentLineIndentation();
      unindentedEmbedBlock = this.isStringUnIndentedCollectionItem(this.currentLine);
      if (!(this.isCurrentLineEmpty()) && 0 === newIndent && !unindentedEmbedBlock) {
        throw new ParseException('Indentation problem.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
    } else {
      newIndent = indentation;
    }
    data = [this.currentLine.slice(newIndent)];
    if (!includeUnindentedCollection) {
      isItUnindentedCollection = this.isStringUnIndentedCollectionItem(this.currentLine);
    }
    removeCommentsPattern = this.PATTERN_FOLDED_SCALAR_END;
    removeComments = !removeCommentsPattern.test(this.currentLine);
    while (this.moveToNextLine()) {
      indent = this.getCurrentLineIndentation();
      if (indent === newIndent) {
        removeComments = !removeCommentsPattern.test(this.currentLine);
      }
      if (removeComments && this.isCurrentLineComment()) {
        continue;
      }
      if (this.isCurrentLineBlank()) {
        data.push(this.currentLine.slice(newIndent));
        continue;
      }
      if (isItUnindentedCollection && !this.isStringUnIndentedCollectionItem(this.currentLine) && indent === newIndent) {
        this.moveToPreviousLine();
        break;
      }
      if (indent >= newIndent) {
        data.push(this.currentLine.slice(newIndent));
      } else if (Utils.ltrim(this.currentLine).charAt(0) === '#') {

      } else if (0 === indent) {
        this.moveToPreviousLine();
        break;
      } else {
        throw new ParseException('Indentation problem.', this.getRealCurrentLineNb() + 1, this.currentLine);
      }
    }
    return data.join("\n");
  };

  Parser.prototype.moveToNextLine = function() {
    if (this.currentLineNb >= this.lines.length - 1) {
      return false;
    }
    this.currentLine = this.lines[++this.currentLineNb];
    return true;
  };

  Parser.prototype.moveToPreviousLine = function() {
    this.currentLine = this.lines[--this.currentLineNb];
  };

  Parser.prototype.parseValue = function(value, exceptionOnInvalidType, objectDecoder) {
    var e, foldedIndent, matches, modifiers, pos, ref, ref1, val;
    if (0 === value.indexOf('*')) {
      pos = value.indexOf('#');
      if (pos !== -1) {
        value = value.substr(1, pos - 2);
      } else {
        value = value.slice(1);
      }
      if (this.refs[value] === void 0) {
        throw new ParseException('Reference "' + value + '" does not exist.', this.currentLine);
      }
      return this.refs[value];
    }
    if (matches = this.PATTERN_FOLDED_SCALAR_ALL.exec(value)) {
      modifiers = (ref = matches.modifiers) != null ? ref : '';
      foldedIndent = Math.abs(parseInt(modifiers));
      if (isNaN(foldedIndent)) {
        foldedIndent = 0;
      }
      val = this.parseFoldedScalar(matches.separator, this.PATTERN_DECIMAL.replace(modifiers, ''), foldedIndent);
      if (matches.type != null) {
        Inline.configure(exceptionOnInvalidType, objectDecoder);
        return Inline.parseScalar(matches.type + ' ' + val);
      } else {
        return val;
      }
    }
    if ((ref1 = value.charAt(0)) === '[' || ref1 === '{' || ref1 === '"' || ref1 === "'") {
      while (true) {
        try {
          return Inline.parse(value, exceptionOnInvalidType, objectDecoder);
        } catch (error) {
          e = error;
          if (e instanceof ParseMore && this.moveToNextLine()) {
            value += "\n" + Utils.trim(this.currentLine, ' ');
          } else {
            e.parsedLine = this.getRealCurrentLineNb() + 1;
            e.snippet = this.currentLine;
            throw e;
          }
        }
      }
    } else {
      if (this.isNextLineIndented()) {
        value += "\n" + this.getNextEmbedBlock();
      }
      return Inline.parse(value, exceptionOnInvalidType, objectDecoder);
    }
  };

  Parser.prototype.parseFoldedScalar = function(separator, indicator, indentation) {
    var isCurrentLineBlank, j, len, line, matches, newText, notEOF, pattern, ref, text;
    if (indicator == null) {
      indicator = '';
    }
    if (indentation == null) {
      indentation = 0;
    }
    notEOF = this.moveToNextLine();
    if (!notEOF) {
      return '';
    }
    isCurrentLineBlank = this.isCurrentLineBlank();
    text = '';
    while (notEOF && isCurrentLineBlank) {
      if (notEOF = this.moveToNextLine()) {
        text += "\n";
        isCurrentLineBlank = this.isCurrentLineBlank();
      }
    }
    if (0 === indentation) {
      if (matches = this.PATTERN_INDENT_SPACES.exec(this.currentLine)) {
        indentation = matches[0].length;
      }
    }
    if (indentation > 0) {
      pattern = this.PATTERN_FOLDED_SCALAR_BY_INDENTATION[indentation];
      if (pattern == null) {
        pattern = new Pattern('^ {' + indentation + '}(.*)$');
        Parser.prototype.PATTERN_FOLDED_SCALAR_BY_INDENTATION[indentation] = pattern;
      }
      while (notEOF && (isCurrentLineBlank || (matches = pattern.exec(this.currentLine)))) {
        if (isCurrentLineBlank) {
          text += this.currentLine.slice(indentation);
        } else {
          text += matches[1];
        }
        if (notEOF = this.moveToNextLine()) {
          text += "\n";
          isCurrentLineBlank = this.isCurrentLineBlank();
        }
      }
    } else if (notEOF) {
      text += "\n";
    }
    if (notEOF) {
      this.moveToPreviousLine();
    }
    if ('>' === separator) {
      newText = '';
      ref = text.split("\n");
      for (j = 0, len = ref.length; j < len; j++) {
        line = ref[j];
        if (line.length === 0 || line.charAt(0) === ' ') {
          newText = Utils.rtrim(newText, ' ') + line + "\n";
        } else {
          newText += line + ' ';
        }
      }
      text = newText;
    }
    if ('+' !== indicator) {
      text = Utils.rtrim(text);
    }
    if ('' === indicator) {
      text = this.PATTERN_TRAILING_LINES.replace(text, "\n");
    } else if ('-' === indicator) {
      text = this.PATTERN_TRAILING_LINES.replace(text, '');
    }
    return text;
  };

  Parser.prototype.isNextLineIndented = function(ignoreComments) {
    var EOF, currentIndentation, ret;
    if (ignoreComments == null) {
      ignoreComments = true;
    }
    currentIndentation = this.getCurrentLineIndentation();
    EOF = !this.moveToNextLine();
    if (ignoreComments) {
      while (!EOF && this.isCurrentLineEmpty()) {
        EOF = !this.moveToNextLine();
      }
    } else {
      while (!EOF && this.isCurrentLineBlank()) {
        EOF = !this.moveToNextLine();
      }
    }
    if (EOF) {
      return false;
    }
    ret = false;
    if (this.getCurrentLineIndentation() > currentIndentation) {
      ret = true;
    }
    this.moveToPreviousLine();
    return ret;
  };

  Parser.prototype.isCurrentLineEmpty = function() {
    var trimmedLine;
    trimmedLine = Utils.trim(this.currentLine, ' ');
    return trimmedLine.length === 0 || trimmedLine.charAt(0) === '#';
  };

  Parser.prototype.isCurrentLineBlank = function() {
    return '' === Utils.trim(this.currentLine, ' ');
  };

  Parser.prototype.isCurrentLineComment = function() {
    var ltrimmedLine;
    ltrimmedLine = Utils.ltrim(this.currentLine, ' ');
    return ltrimmedLine.charAt(0) === '#';
  };

  Parser.prototype.cleanup = function(value) {
    var count, i, indent, j, l, len, len1, line, lines, ref, ref1, ref2, smallestIndent, trimmedValue;
    if (value.indexOf("\r") !== -1) {
      value = value.split("\r\n").join("\n").split("\r").join("\n");
    }
    count = 0;
    ref = this.PATTERN_YAML_HEADER.replaceAll(value, ''), value = ref[0], count = ref[1];
    this.offset += count;
    ref1 = this.PATTERN_LEADING_COMMENTS.replaceAll(value, '', 1), trimmedValue = ref1[0], count = ref1[1];
    if (count === 1) {
      this.offset += Utils.subStrCount(value, "\n") - Utils.subStrCount(trimmedValue, "\n");
      value = trimmedValue;
    }
    ref2 = this.PATTERN_DOCUMENT_MARKER_START.replaceAll(value, '', 1), trimmedValue = ref2[0], count = ref2[1];
    if (count === 1) {
      this.offset += Utils.subStrCount(value, "\n") - Utils.subStrCount(trimmedValue, "\n");
      value = trimmedValue;
      value = this.PATTERN_DOCUMENT_MARKER_END.replace(value, '');
    }
    lines = value.split("\n");
    smallestIndent = -1;
    for (j = 0, len = lines.length; j < len; j++) {
      line = lines[j];
      if (Utils.trim(line, ' ').length === 0) {
        continue;
      }
      indent = line.length - Utils.ltrim(line).length;
      if (smallestIndent === -1 || indent < smallestIndent) {
        smallestIndent = indent;
      }
    }
    if (smallestIndent > 0) {
      for (i = l = 0, len1 = lines.length; l < len1; i = ++l) {
        line = lines[i];
        lines[i] = line.slice(smallestIndent);
      }
      value = lines.join("\n");
    }
    return value;
  };

  Parser.prototype.isNextLineUnIndentedCollection = function(currentIndentation) {
    var notEOF, ret;
    if (currentIndentation == null) {
      currentIndentation = null;
    }
    if (currentIndentation == null) {
      currentIndentation = this.getCurrentLineIndentation();
    }
    notEOF = this.moveToNextLine();
    while (notEOF && this.isCurrentLineEmpty()) {
      notEOF = this.moveToNextLine();
    }
    if (false === notEOF) {
      return false;
    }
    ret = false;
    if (this.getCurrentLineIndentation() === currentIndentation && this.isStringUnIndentedCollectionItem(this.currentLine)) {
      ret = true;
    }
    this.moveToPreviousLine();
    return ret;
  };

  Parser.prototype.isStringUnIndentedCollectionItem = function() {
    return this.currentLine === '-' || this.currentLine.slice(0, 2) === '- ';
  };

  return Parser;

})();

module.exports = Parser;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.4
var Pattern, Unescaper, Utils;

Utils = __webpack_require__(24);

Pattern = __webpack_require__(23);

Unescaper = (function() {
  function Unescaper() {}

  Unescaper.PATTERN_ESCAPED_CHARACTER = new Pattern('\\\\([0abt\tnvfre "\\/\\\\N_LP]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})');

  Unescaper.unescapeSingleQuotedString = function(value) {
    return value.replace(/\'\'/g, '\'');
  };

  Unescaper.unescapeDoubleQuotedString = function(value) {
    if (this._unescapeCallback == null) {
      this._unescapeCallback = (function(_this) {
        return function(str) {
          return _this.unescapeCharacter(str);
        };
      })(this);
    }
    return this.PATTERN_ESCAPED_CHARACTER.replace(value, this._unescapeCallback);
  };

  Unescaper.unescapeCharacter = function(value) {
    var ch;
    ch = String.fromCharCode;
    switch (value.charAt(1)) {
      case '0':
        return ch(0);
      case 'a':
        return ch(7);
      case 'b':
        return ch(8);
      case 't':
        return "\t";
      case "\t":
        return "\t";
      case 'n':
        return "\n";
      case 'v':
        return ch(11);
      case 'f':
        return ch(12);
      case 'r':
        return ch(13);
      case 'e':
        return ch(27);
      case ' ':
        return ' ';
      case '"':
        return '"';
      case '/':
        return '/';
      case '\\':
        return '\\';
      case 'N':
        return ch(0x0085);
      case '_':
        return ch(0x00A0);
      case 'L':
        return ch(0x2028);
      case 'P':
        return ch(0x2029);
      case 'x':
        return Utils.utf8chr(Utils.hexDec(value.substr(2, 2)));
      case 'u':
        return Utils.utf8chr(Utils.hexDec(value.substr(2, 4)));
      case 'U':
        return Utils.utf8chr(Utils.hexDec(value.substr(2, 8)));
      default:
        return '';
    }
  };

  return Unescaper;

})();

module.exports = Unescaper;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.4
var Escaper, Pattern;

Pattern = __webpack_require__(23);

Escaper = (function() {
  var ch;

  function Escaper() {}

  Escaper.LIST_ESCAPEES = ['\\', '\\\\', '\\"', '"', "\x00", "\x01", "\x02", "\x03", "\x04", "\x05", "\x06", "\x07", "\x08", "\x09", "\x0a", "\x0b", "\x0c", "\x0d", "\x0e", "\x0f", "\x10", "\x11", "\x12", "\x13", "\x14", "\x15", "\x16", "\x17", "\x18", "\x19", "\x1a", "\x1b", "\x1c", "\x1d", "\x1e", "\x1f", (ch = String.fromCharCode)(0x0085), ch(0x00A0), ch(0x2028), ch(0x2029)];

  Escaper.LIST_ESCAPED = ['\\\\', '\\"', '\\"', '\\"', "\\0", "\\x01", "\\x02", "\\x03", "\\x04", "\\x05", "\\x06", "\\a", "\\b", "\\t", "\\n", "\\v", "\\f", "\\r", "\\x0e", "\\x0f", "\\x10", "\\x11", "\\x12", "\\x13", "\\x14", "\\x15", "\\x16", "\\x17", "\\x18", "\\x19", "\\x1a", "\\e", "\\x1c", "\\x1d", "\\x1e", "\\x1f", "\\N", "\\_", "\\L", "\\P"];

  Escaper.MAPPING_ESCAPEES_TO_ESCAPED = (function() {
    var i, j, mapping, ref;
    mapping = {};
    for (i = j = 0, ref = Escaper.LIST_ESCAPEES.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      mapping[Escaper.LIST_ESCAPEES[i]] = Escaper.LIST_ESCAPED[i];
    }
    return mapping;
  })();

  Escaper.PATTERN_CHARACTERS_TO_ESCAPE = new Pattern('[\\x00-\\x1f]|\xc2\x85|\xc2\xa0|\xe2\x80\xa8|\xe2\x80\xa9');

  Escaper.PATTERN_MAPPING_ESCAPEES = new Pattern(Escaper.LIST_ESCAPEES.join('|').split('\\').join('\\\\'));

  Escaper.PATTERN_SINGLE_QUOTING = new Pattern('[\\s\'":{}[\\],&*#?]|^[-?|<>=!%@`]');

  Escaper.requiresDoubleQuoting = function(value) {
    return this.PATTERN_CHARACTERS_TO_ESCAPE.test(value);
  };

  Escaper.escapeWithDoubleQuotes = function(value) {
    var result;
    result = this.PATTERN_MAPPING_ESCAPEES.replace(value, (function(_this) {
      return function(str) {
        return _this.MAPPING_ESCAPEES_TO_ESCAPED[str];
      };
    })(this));
    return '"' + result + '"';
  };

  Escaper.requiresSingleQuoting = function(value) {
    return this.PATTERN_SINGLE_QUOTING.test(value);
  };

  Escaper.escapeWithSingleQuotes = function(value) {
    return "'" + value.replace(/'/g, "''") + "'";
  };

  return Escaper;

})();

module.exports = Escaper;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.4
var DumpException,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

DumpException = (function(superClass) {
  extend(DumpException, superClass);

  function DumpException(message, parsedLine, snippet) {
    this.message = message;
    this.parsedLine = parsedLine;
    this.snippet = snippet;
  }

  DumpException.prototype.toString = function() {
    if ((this.parsedLine != null) && (this.snippet != null)) {
      return '<DumpException> ' + this.message + ' (line ' + this.parsedLine + ': \'' + this.snippet + '\')';
    } else {
      return '<DumpException> ' + this.message;
    }
  };

  return DumpException;

})(Error);

module.exports = DumpException;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.4
var Dumper, Inline, Utils;

Utils = __webpack_require__(24);

Inline = __webpack_require__(25);

Dumper = (function() {
  function Dumper() {}

  Dumper.indentation = 4;

  Dumper.prototype.dump = function(input, inline, indent, exceptionOnInvalidType, objectEncoder) {
    var i, key, len, output, prefix, value, willBeInlined;
    if (inline == null) {
      inline = 0;
    }
    if (indent == null) {
      indent = 0;
    }
    if (exceptionOnInvalidType == null) {
      exceptionOnInvalidType = false;
    }
    if (objectEncoder == null) {
      objectEncoder = null;
    }
    output = '';
    prefix = (indent ? Utils.strRepeat(' ', indent) : '');
    if (inline <= 0 || typeof input !== 'object' || input instanceof Date || Utils.isEmpty(input)) {
      output += prefix + Inline.dump(input, exceptionOnInvalidType, objectEncoder);
    } else {
      if (input instanceof Array) {
        for (i = 0, len = input.length; i < len; i++) {
          value = input[i];
          willBeInlined = inline - 1 <= 0 || typeof value !== 'object' || Utils.isEmpty(value);
          output += prefix + '-' + (willBeInlined ? ' ' : "\n") + this.dump(value, inline - 1, (willBeInlined ? 0 : indent + this.indentation), exceptionOnInvalidType, objectEncoder) + (willBeInlined ? "\n" : '');
        }
      } else {
        for (key in input) {
          value = input[key];
          willBeInlined = inline - 1 <= 0 || typeof value !== 'object' || Utils.isEmpty(value);
          output += prefix + Inline.dump(key, exceptionOnInvalidType, objectEncoder) + ':' + (willBeInlined ? ' ' : "\n") + this.dump(value, inline - 1, (willBeInlined ? 0 : indent + this.indentation), exceptionOnInvalidType, objectEncoder) + (willBeInlined ? "\n" : '');
        }
      }
    }
    return output;
  };

  return Dumper;

})();

module.exports = Dumper;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 36;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map