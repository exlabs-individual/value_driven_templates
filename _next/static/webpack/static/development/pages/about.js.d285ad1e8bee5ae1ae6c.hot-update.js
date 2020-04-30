webpackHotUpdate("static/development/pages/about.js",{

/***/ "./src/app/about/header/about-header.component.tsx":
/*!*********************************************************!*\
  !*** ./src/app/about/header/about-header.component.tsx ***!
  \*********************************************************/
/*! exports provided: AboutHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutHeader", function() { return AboutHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/header/header.component */ "./src/ui/header/header.component.tsx");
/* harmony import */ var _ui_header_header_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/header/header.styles */ "./src/ui/header/header.styles.ts");
/* harmony import */ var _ui_scroll_to_button_scroll_to_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/scroll-to-button/scroll-to-button.component */ "./src/ui/scroll-to-button/scroll-to-button.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/about/header/about-header.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AboutHeader = () => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__["useDeviceDetect"])();
  return __jsx(_ui_header_header_component__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    imageUrl: "".concat("", "/about/header.svg"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_ui_header_header_styles__WEBPACK_IMPORTED_MODULE_3__["HeaderTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Hello, We are Exlabs."), isMobile && __jsx(_ui_header_header_styles__WEBPACK_IMPORTED_MODULE_3__["HeaderImage"], {
    alt: "Header",
    src: "".concat("", "/about/header.svg"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(_ui_header_header_styles__WEBPACK_IMPORTED_MODULE_3__["HeaderSubtitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "We deliver high-level consultancy & flexible, complex data-driven software solutions for the companies of the future."), __jsx(_ui_scroll_to_button_scroll_to_button_component__WEBPACK_IMPORTED_MODULE_4__["ScrollToButton"], {
    href: "#about-content",
    label: "Read more about VDE",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./src/theme/theme.config.ts":
false,

/***/ "./src/ui/scroll-to-button/scroll-to-button.component.tsx":
/*!****************************************************************!*\
  !*** ./src/ui/scroll-to-button/scroll-to-button.component.tsx ***!
  \****************************************************************/
/*! exports provided: ScrollToButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToButton", function() { return ScrollToButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scroll_to_button_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-to-button.styles */ "./src/ui/scroll-to-button/scroll-to-button.styles.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/scroll-to-button/scroll-to-button.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ScrollToButton = ({
  label,
  href,
  offset = '100'
}) => {
  return __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
    offset: offset,
    href: href,
    style: {
      textDecoration: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_scroll_to_button_styles__WEBPACK_IMPORTED_MODULE_2__["StyledButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, label));
};

/***/ }),

/***/ "./src/ui/scroll-to-button/scroll-to-button.styles.ts":
/*!************************************************************!*\
  !*** ./src/ui/scroll-to-button/scroll-to-button.styles.ts ***!
  \************************************************************/
/*! exports provided: StyledButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "scroll-to-buttonstyles__StyledButton",
  componentId: "qa1ldl-0"
})([""]);

/***/ }),

/***/ "./src/ui/special-link/special-link.component.tsx":
false,

/***/ "./src/ui/special-link/special-link.styles.ts":
false

})
//# sourceMappingURL=about.js.d285ad1e8bee5ae1ae6c.hot-update.js.map