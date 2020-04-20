webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/footer/footer.tsx":
/*!**********************************!*\
  !*** ./src/ui/footer/footer.tsx ***!
  \**********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.styles */ "./src/ui/footer/footer.styles.ts");
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/footer/footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_2__["useDeviceDetect"])();
  return __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_1__["StyledFooter"], {
    isMobile: isMobile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_footer_styles__WEBPACK_IMPORTED_MODULE_1__["AboutContainer"], {
    className: "about-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Value Driven Engineering"), " by", __jsx("a", {
    href: "https://exlabs.com",
    className: "link",
    rel: "noopener noreferrer",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "logo-img",
    src: "".concat("", "/logo-small.svg"),
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), "exlabs")), __jsx("div", {
    className: "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "Copyright \xA9 2020 EXLABS Ltd."));
};

/***/ })

})
//# sourceMappingURL=_app.js.e8895bde1c1202d2412e.hot-update.js.map