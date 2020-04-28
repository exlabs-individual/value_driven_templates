webpackHotUpdate("static/development/pages/about.js",{

/***/ "./src/app/about/section/section.component.tsx":
/*!*****************************************************!*\
  !*** ./src/app/about/section/section.component.tsx ***!
  \*****************************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _section_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.styles */ "./src/app/about/section/section.styles.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/about/section/section.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Section = ({
  title,
  image,
  children,
  textPosition = 'right',
  id
}) => {
  return __jsx(_section_styles__WEBPACK_IMPORTED_MODULE_1__["StyledSection"], {
    className: "about-section",
    id: id !== null && id !== void 0 ? id : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, title), __jsx(_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionContent"], {
    textPosition: textPosition,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionImage"], {
    src: "".concat("", "/about/").concat(image, ".svg"),
    alt: "".concat(image, " section"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, children)));
};

/***/ })

})
//# sourceMappingURL=about.js.d1d0d6f1c013b45516cb.hot-update.js.map