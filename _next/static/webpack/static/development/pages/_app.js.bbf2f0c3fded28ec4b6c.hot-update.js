webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.styles */ "./src/ui/logo/logo.styles.ts");
/* harmony import */ var _routing_app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routing/app-routes */ "./src/routing/app-routes.tsx");
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/logo/logo.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Logo = ({
  theme = 'primary'
}) => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_4__["useDeviceDetect"])();
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "".concat("").concat(_routing_app_routes__WEBPACK_IMPORTED_MODULE_3__["AppRoute"].HOME),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_logo_styles__WEBPACK_IMPORTED_MODULE_2__["LogoLink"], {
    className: "logo-link",
    href: "".concat("").concat(_routing_app_routes__WEBPACK_IMPORTED_MODULE_3__["AppRoute"].HOME),
    themeType: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "logo-img",
    src: "".concat("", "/").concat(theme === 'primary' ? 'logo-small' : 'logo-small-black', ".svg"),
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "logo-separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: "logo-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, isMobile ? 'value driven engineering' : 'vde.')));
};

/***/ })

})
//# sourceMappingURL=_app.js.bbf2f0c3fded28ec4b6c.hot-update.js.map