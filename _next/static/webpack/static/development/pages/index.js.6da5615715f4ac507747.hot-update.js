webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./src/app/home/desktop-header/header.component.tsx":
/*!**********************************************************!*\
  !*** ./src/app/home/desktop-header/header.component.tsx ***!
  \**********************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.styles */ "./src/app/home/desktop-header/header.styles.ts");
/* harmony import */ var _ui_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/logo/logo.component */ "./src/ui/logo/logo.component.tsx");
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/home/desktop-header/header.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = () => {
  const {
    isDesktop
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_4__["useDeviceDetect"])();
  return __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["StyledHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["Background"], {
    style: {
      height: isDesktop ? '75%' : '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["HeaderTopbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_ui_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["StyledNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "nav-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "About")), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "How to contribute?")), __jsx("li", {
    className: "nav-item nav-item--primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "Get in touch"))))), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["HeaderContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["TitleContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Value Driven Engineering"), __jsx("h4", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Powered by Exlabs"), __jsx("div", {
    className: "about-company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "We deliver high-level consultancy & flexible, complex data-driven software solutions for the companies of the future.")), isDesktop && __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["HeaderImage"], {
    src: "".concat("", "/header-img.svg"),
    alt: "Header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })));
};

/***/ }),

/***/ "./src/app/home/desktop-header/header.styles.ts":
/*!******************************************************!*\
  !*** ./src/app/home/desktop-header/header.styles.ts ***!
  \******************************************************/
/*! exports provided: StyledHeader, Background, StyledNav, HeaderTopbar, HeaderContent, TitleContainer, ImageContainer, HeaderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeader", function() { return StyledHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNav", function() { return StyledNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTopbar", function() { return HeaderTopbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContent", function() { return HeaderContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleContainer", function() { return TitleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderImage", function() { return HeaderImage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "headerstyles__StyledHeader",
  componentId: "ggkv62-0"
})(["display:flex;flex-direction:column;position:relative;padding:20px 60px 40px;color:#ffffff;"]);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__Background",
  componentId: "ggkv62-1"
})(["background:linear-gradient(90deg,#044aaf,#022558);position:absolute;top:0;left:0;width:100%;z-index:-1;"]);
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "headerstyles__StyledNav",
  componentId: "ggkv62-2"
})(["& > .nav-list{list-style:none;display:flex;align-items:center;& > .nav-item{margin-left:30px;font-weight:700;font-size:14px;cursor:pointer;& > a{color:#ccc;text-decoration:none;transition:color 0.2s ease;&:hover{color:#ffffff;}}&--primary{background-color:#ff3e5b;padding:10px 30px;border-radius:4px;transition:background-color 0.2s ease;box-shadow:0px 3px 6px rgba(0,0,0,0.2);& > a{color:#ffffff;}&:hover{background-color:#ee2d4a;}}}& > .nav-item:first-child{margin-left:0px;}}"]);
const HeaderTopbar = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__HeaderTopbar",
  componentId: "ggkv62-3"
})(["display:flex;justify-content:space-between;& > .logo-container{& > .logo-img{width:35px;height:35px;}& > .logo-separator{height:37px;}& > .logo-text{font-size:24px;}}"]);
const HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__HeaderContent",
  componentId: "ggkv62-4"
})(["display:flex;justify-content:space-between;position:relative;align-items:flex-start;padding:0 50px;margin-top:30px;"]);
const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__TitleContainer",
  componentId: "ggkv62-5"
})(["& > .title{font-size:37px;margin:0;}& > .sub-title{margin:0;font-size:21px;font-weight:500;margin-top:10px;}& > .about-company{margin-top:50px;max-width:70%;font-size:19px;display:flex;align-items:flex-start;padding:0;&::before{content:'';width:70px;height:2px;background-color:#ffffff;display:block;margin:7px 10px 0 0;}}"]);
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__ImageContainer",
  componentId: "ggkv62-6"
})(["flex:1;border:1px solid red;"]);
const HeaderImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "headerstyles__HeaderImage",
  componentId: "ggkv62-7"
})(["width:40%;"]);

/***/ }),

/***/ "./src/app/home/mobile-header/header.component.tsx":
/*!*********************************************************!*\
  !*** ./src/app/home/mobile-header/header.component.tsx ***!
  \*********************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.styles */ "./src/app/home/mobile-header/header.styles.ts");
/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/use-mobile-menu/use-mobile-menu.hook */ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts");
/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/mobile-menu/mobile-menu.action-creators */ "./src/context/mobile-menu/mobile-menu.action-creators.ts");
/* harmony import */ var _ui_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/logo/logo.component */ "./src/ui/logo/logo.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/home/mobile-header/header.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = () => {
  const {
    state: {
      isVisible: isMenuVisible
    },
    dispatch
  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__["useMobileMenuState"])();

  const onMenuClick = () => dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_3__["toggleMenu"])());

  return __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_ui_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["MenuContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "menu-btn",
    onClick: onMenuClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: isMenuVisible ? "".concat("", "/close.svg") : "".concat("", "/hamburger.svg"),
    alt: "Hamburger menu",
    className: "hamburger-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))));
};

/***/ }),

/***/ "./src/app/home/mobile-header/header.styles.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/mobile-header/header.styles.ts ***!
  \*****************************************************/
/*! exports provided: HeaderContainer, MenuContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContainer", function() { return HeaderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__HeaderContainer",
  componentId: "sc-1uvhbxi-0"
})(["background:linear-gradient(90deg,#044aaf,#022558);width:calc(100% - 40px);padding:15px 20px;display:flex;align-items:center;justify-content:space-between;position:sticky;position:-webkit-sticky;top:0;z-index:999;"]);
const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__MenuContainer",
  componentId: "sc-1uvhbxi-1"
})(["& > .menu-btn{background-color:inherit;border:0;outline:none;}"]);

/***/ }),

/***/ "./src/context/mobile-menu/mobile-menu.action-creators.ts":
/*!****************************************************************!*\
  !*** ./src/context/mobile-menu/mobile-menu.action-creators.ts ***!
  \****************************************************************/
/*! exports provided: toggleMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMenu", function() { return toggleMenu; });
/* harmony import */ var _mobile_menu_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-menu.reducer */ "./src/context/mobile-menu/mobile-menu.reducer.ts");

const toggleMenu = () => ({
  type: _mobile_menu_reducer__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_MENU"]
});

/***/ }),

/***/ "./src/context/mobile-menu/mobile-menu.context.ts":
/*!********************************************************!*\
  !*** ./src/context/mobile-menu/mobile-menu.context.ts ***!
  \********************************************************/
/*! exports provided: mobileMenuInitialState, MobileMenuContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMenuInitialState", function() { return mobileMenuInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuContext", function() { return MobileMenuContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const mobileMenuInitialState = {
  isVisible: false
};
const MobileMenuContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(mobileMenuInitialState);

/***/ }),

/***/ "./src/context/mobile-menu/mobile-menu.reducer.ts":
/*!********************************************************!*\
  !*** ./src/context/mobile-menu/mobile-menu.reducer.ts ***!
  \********************************************************/
/*! exports provided: TOGGLE_MENU, mobileMenuReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MENU", function() { return TOGGLE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMenuReducer", function() { return mobileMenuReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const TOGGLE_MENU = 'mobile-menu/toggle';
const mobileMenuReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      {
        return _objectSpread({}, state, {
          isVisible: !state.isVisible
        });
      }

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts":
/*!***********************************************************!*\
  !*** ./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts ***!
  \***********************************************************/
/*! exports provided: useMobileMenuState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMobileMenuState", function() { return useMobileMenuState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_mobile_menu_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.context */ "./src/context/mobile-menu/mobile-menu.context.ts");


const useMobileMenuState = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_mobile_menu_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__["MobileMenuContext"]);

  if (!context) {
    throw new Error('useMobileMenuState should be used within on MobileMenuContext');
  }

  return context;
};

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _ui_layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/layout/layout.styles */ "./src/ui/layout/layout.styles.ts");
/* harmony import */ var _app_home_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/home/article-list/article-list.component */ "./src/app/home/article-list/article-list.component.tsx");
/* harmony import */ var _ui_layout_layout_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/layout/layout.provider */ "./src/ui/layout/layout.provider.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const dummyArticle = {
  title: 'Architecture Decision Record',
  category: 'Development',
  description: 'Learn how to document important architectural decisions in your development team.',
  publishDate: new Date(),
  imageUrl: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  authorImgUrl: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
};

const Home = () => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__["useDeviceDetect"])();
  return __jsx(_ui_layout_layout_provider__WEBPACK_IMPORTED_MODULE_4__["LayoutProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_ui_layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__["LayoutBody"], {
    isMobile: isMobile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_app_home_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__["ArticleList"], {
    articles: [...new Array(7).fill(dummyArticle)],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/providers/mobile-menu.provider.tsx":
/*!************************************************!*\
  !*** ./src/providers/mobile-menu.provider.tsx ***!
  \************************************************/
/*! exports provided: MobileMenuStateProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuStateProvider", function() { return MobileMenuStateProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_mobile_menu_mobile_menu_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/mobile-menu/mobile-menu.reducer */ "./src/context/mobile-menu/mobile-menu.reducer.ts");
/* harmony import */ var _context_mobile_menu_mobile_menu_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/mobile-menu/mobile-menu.context */ "./src/context/mobile-menu/mobile-menu.context.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/providers/mobile-menu.provider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MobileMenuStateProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(_context_mobile_menu_mobile_menu_reducer__WEBPACK_IMPORTED_MODULE_1__["mobileMenuReducer"], _context_mobile_menu_mobile_menu_context__WEBPACK_IMPORTED_MODULE_2__["mobileMenuInitialState"]);
  return __jsx(_context_mobile_menu_mobile_menu_context__WEBPACK_IMPORTED_MODULE_2__["MobileMenuContext"].Provider, {
    value: {
      dispatch,
      state
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/ui/layout/layout.provider.tsx":
/*!*******************************************!*\
  !*** ./src/ui/layout/layout.provider.tsx ***!
  \*******************************************/
/*! exports provided: LayoutProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutProvider", function() { return LayoutProvider; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.styles */ "./src/ui/layout/layout.styles.ts");
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _app_home_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/home/mobile-header/header.component */ "./src/app/home/mobile-header/header.component.tsx");
/* harmony import */ var _providers_mobile_menu_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/mobile-menu.provider */ "./src/providers/mobile-menu.provider.tsx");
/* harmony import */ var _mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mobile-menu/menu.component */ "./src/ui/mobile-menu/menu.component.tsx");
/* harmony import */ var _app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/home/desktop-header/header.component */ "./src/app/home/desktop-header/header.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/layout/layout.provider.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const LayoutProvider = ({
  children
}) => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__["useDeviceDetect"])();
  return __jsx(_layout_styles__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1160521229",
    __self: undefined
  }, "html,body{margin:0;padding:0;font-family:'Montserrat',sans-serif;background-color:#f9f9f9;position:fixed;width:100%;top:0px;min-height:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy91aS9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjUyxBQUlzQixTQUNDLFVBQzJCLG9DQUNaLHlCQUNWLGVBQ0osV0FDSCxRQUNRLGdCQUNKLFlBQ0ksZ0JBQ2lCLGlDQUNuQyIsImZpbGUiOiIvVXNlcnMvbWlrb2xhandhcmdvd3NraS9Eb2N1bWVudHMvcHJvamVjdHMvdmFsdWVfZHJpdmVuX3RlbXBsYXRlcy9zcmMvdWkvbGF5b3V0L2xheW91dC5wcm92aWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9sYXlvdXQuc3R5bGVzJztcbmltcG9ydCB7IHVzZURldmljZURldGVjdCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1kZXZpY2UtZGV0ZWN0L3VzZS1kZXZpY2UtZGV0ZWN0Lmhvb2snO1xuaW1wb3J0IHsgSGVhZGVyIGFzIE1vYmlsZUhlYWRlciB9IGZyb20gJy4uLy4uL2FwcC9ob21lL21vYmlsZS1oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2JpbGVNZW51U3RhdGVQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9tb2JpbGUtbWVudS5wcm92aWRlcic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi4vbW9iaWxlLW1lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyIGFzIERlc2t0b3BIZWFkZXIgfSBmcm9tICcuLi8uLi9hcHAvaG9tZS9kZXNrdG9wLWhlYWRlci9oZWFkZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHtpc01vYmlsZSA/IChcbiAgICAgICAgICA8TW9iaWxlTWVudVN0YXRlUHJvdmlkZXI+XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxNb2JpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDwvTW9iaWxlTWVudVN0YXRlUHJvdmlkZXI+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxEZXNrdG9wSGVhZGVyIC8+XG4gICAgICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/layout/layout.provider.tsx */"), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, isMobile ? __jsx(_providers_mobile_menu_provider__WEBPACK_IMPORTED_MODULE_5__["MobileMenuStateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_app_home_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), __jsx(_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-1160521229",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, children))) : __jsx("div", {
    className: "jsx-1160521229",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(_app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1160521229",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, children))));
};

/***/ }),

/***/ "./src/ui/logo/logo.component.tsx":
/*!****************************************!*\
  !*** ./src/ui/logo/logo.component.tsx ***!
  \****************************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.styles */ "./src/ui/logo/logo.styles.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/logo/logo.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Logo = () => {
  return __jsx(_logo_styles__WEBPACK_IMPORTED_MODULE_1__["LogoContainer"], {
    className: "logo-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "logo-img",
    src: "".concat("", "/logo-small.svg"),
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: "logo-separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: "logo-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "value reader."));
};

/***/ }),

/***/ "./src/ui/logo/logo.styles.ts":
/*!************************************!*\
  !*** ./src/ui/logo/logo.styles.ts ***!
  \************************************/
/*! exports provided: LogoContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoContainer", function() { return LogoContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "logostyles__LogoContainer",
  componentId: "ui1tly-0"
})(["display:flex;align-items:center;& > .logo-img{width:30px;height:30px;}& > .logo-separator{width:2px;height:32px;background-color:#ffffff;margin:0 10px;}& > .logo-text{font-size:21px;margin:0;color:#ffffff;font-weight:700;}"]);

/***/ }),

/***/ "./src/ui/mobile-menu/menu.component.tsx":
/*!***********************************************!*\
  !*** ./src/ui/mobile-menu/menu.component.tsx ***!
  \***********************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.styles */ "./src/ui/mobile-menu/menu.styles.ts");
/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-mobile-menu/use-mobile-menu.hook */ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ "./src/context/mobile-menu/mobile-menu.action-creators.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/mobile-menu/menu.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Menu = () => {
  const {
    dispatch,
    state: {
      isVisible
    }
  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__["useMobileMenuState"])();

  const onMenuItemClick = () => {
    dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_4__["toggleMenu"])());
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, isVisible && __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledListItem"], {
    onClick: onMenuItemClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, "Home")), __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledListItem"], {
    onClick: onMenuItemClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "About the project")), __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledListItem"], {
    onClick: onMenuItemClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "How to contribute?")))));
};

/***/ }),

/***/ "./src/ui/mobile-menu/menu.styles.ts":
/*!*******************************************!*\
  !*** ./src/ui/mobile-menu/menu.styles.ts ***!
  \*******************************************/
/*! exports provided: StyledNav, StyledList, StyledListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNav", function() { return StyledNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledList", function() { return StyledList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledListItem", function() { return StyledListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "menustyles__StyledNav",
  componentId: "sc-1amfo06-0"
})(["width:100%;height:calc(100vh - 63px);border-top:1px solid #ededed;background-color:#044aaf;position:sticky;position:-webkit-sticky;top:62px;z-index:999;overflow:hidden;"]);
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "menustyles__StyledList",
  componentId: "sc-1amfo06-1"
})(["list-style:none;padding:10px 20px;& > li:last-child{margin-bottom:0;}"]);
const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "menustyles__StyledListItem",
  componentId: "sc-1amfo06-2"
})(["border-bottom:1px solid #ffffff;margin-bottom:30px;font-size:19px;padding-bottom:10px;& > a{color:#ffffff;text-decoration:none;}"]);

/***/ })

})
//# sourceMappingURL=index.js.6da5615715f4ac507747.hot-update.js.map