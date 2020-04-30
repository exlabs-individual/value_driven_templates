webpackHotUpdate("static/development/pages/how-to-contribute.js",{

/***/ "./src/ui/special-link/special-link.component.tsx":
/*!********************************************************!*\
  !*** ./src/ui/special-link/special-link.component.tsx ***!
  \********************************************************/
/*! exports provided: SpecialLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialLink", function() { return SpecialLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _special_link_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-link.styles */ "./src/ui/special-link/special-link.styles.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/special-link/special-link.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SpecialLink = ({
  color = 'primary',
  target = 'self',
  internal = false,
  label,
  href
}) => {
  const link = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, target === 'self' && __jsx(_special_link_styles__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], {
    className: "special-link",
    color: color,
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, label), target === 'blank' && __jsx(_special_link_styles__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], {
    className: "special-link",
    color: color,
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, label));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, internal ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 24
    }
  }, link) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, link));
};

/***/ })

})
//# sourceMappingURL=how-to-contribute.js.2a8961315b3f8f8ac034.hot-update.js.map