webpackHotUpdate("static/development/pages/about.js",{

/***/ "./src/ui/smooth-scroll-container/smooth-scroll-container.component.jsx":
/*!******************************************************************************!*\
  !*** ./src/ui/smooth-scroll-container/smooth-scroll-container.component.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FullPage; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/smooth-scroll-container/smooth-scroll-container.component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const PAGE_HEIGHT_DEFAULT = '200vh';
class FullPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props); // throttle so we can rest easy.

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      position: this.POSITIONS.top,
      visible: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nodes", []);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleScroll", () => {
      this.setState({
        visible: this.visible,
        position: this.position
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isOnlyVisible", i => {
      const visible = this.visible.filter(v => v);
      return visible.length === 1 && this.visible[i];
    });

    this.handleScroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(this.handleScroll, props.throttle);
  }

  componentDidMount() {
    // Mount scroll listener, and invoke once to set.
    this.handleScroll();
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Unmount scroll listener.
    document.removeEventListener('scroll', this.handleScroll);
  }

  get POSITIONS() {
    return {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    };
  }

  capitalize(val) {
    return val.charAt(0).toUpperCase() + val.substr(1);
  }

  get styles() {
    const {
      position
    } = this.state;
    return {
      container: {
        position: 'relative',
        width: '100vw',
        border: '1px solid red'
      },
      fixed: {
        position: position === this.POSITIONS.middle ? 'fixed' : 'absolute',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: position === this.POSITIONS.bottom ? 'auto' : '0',
        bottom: position === this.POSITIONS.bottom ? '0' : 'auto'
      },
      page: pageHeight => ({
        height: pageHeight,
        position: 'relative'
      }),
      debug: direction => {
        const getBorderDirectionProp = prop => "border".concat(this.capitalize(direction)).concat(this.capitalize(prop));

        return {
          [direction]: 0,
          width: '100%',
          position: 'absolute',
          border: 0,
          padding: '6px',
          [getBorderDirectionProp('color')]: 'green',
          [getBorderDirectionProp('width')]: '1px',
          [getBorderDirectionProp('style')]: 'solid',
          borderStyle: 'solid',
          color: 'green',
          fontSize: '10px'
        };
      }
    };
  }

  get position() {
    var _window;

    const rect = this.node.getBoundingClientRect();

    if (rect.bottom <= ((_window = window) === null || _window === void 0 ? void 0 : _window.innerHeight)) {
      return this.POSITIONS.bottom;
    } else if (rect.top < 0 && rect.bottom > 0 || rect.top > 0 && rect.bottom < 0) {
      return this.POSITIONS.middle;
    } else {
      return this.POSITIONS.top;
    }
  }

  get visible() {
    const windowHeight = window.innerHeight;
    return this.nodes.map((el, i) => {
      const rect = el.getBoundingClientRect();
      return rect.top < windowHeight && rect.bottom > 0;
    });
  }

  getPageHeight(i) {
    const {
      pageHeight
    } = this.props;
    return typeof pageHeight === 'string' ? pageHeight : Array.isArray(pageHeight) ? pageHeight[i] || PAGE_HEIGHT_DEFAULT : PAGE_HEIGHT_DEFAULT;
  }

  render() {
    return __jsx("div", {
      style: this.styles.container,
      ref: el => this.node = el,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }
    }, Array.from({
      length: this.props.pages
    }, (v, i) => {
      const pageHeight = this.getPageHeight(i);
      return __jsx("div", {
        ref: el => this.nodes[i] = el,
        style: this.styles.page(pageHeight),
        key: i,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 15
        }
      }, this.props.debug && __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 19
        }
      }, __jsx("div", {
        style: this.styles.debug('top'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }
      }, "Page ", i, " start / ", pageHeight), __jsx("div", {
        style: this.styles.debug('bottom'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }
      }, "Page ", i, " end / ", pageHeight)));
    })), __jsx("div", {
      style: this.styles.fixed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }
    }, this.props.children(_objectSpread({}, this.state, {
      isOnlyVisible: this.isOnlyVisible
    }))));
  }

}
FullPage.defaultProps = {
  pages: 3,
  // How many times to split scroll, useful for animations.
  pageHeight: PAGE_HEIGHT_DEFAULT,
  // How tall each page is, auto for automatic
  throttleMs: 50,
  // Milliseconds to throttle scroll listener (used for performance)
  debug: false // Show lines with breakpoint index

};

/***/ })

})
//# sourceMappingURL=about.js.798ef45ccabe6c858742.hot-update.js.map