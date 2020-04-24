webpackHotUpdate("static/development/pages/articles/[id].js",{

/***/ "./src/app/article/article.component.tsx":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.tsx ***!
  \***********************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_author_author_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/author/author.component */ "./src/ui/author/author.component.tsx");
/* harmony import */ var _article_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article.styles */ "./src/app/article/article.styles.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/article/article.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Article = ({
  title,
  imageUrl,
  publishDate,
  content
}) => {
  return __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_2__["StyledArticle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_2__["StyledHeader"], {
    style: {
      backgroundImage: "url(\"".concat(imageUrl, "\")")
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "category",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Development"), __jsx("h2", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, title), __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_2__["InformationContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_ui_author_author_component__WEBPACK_IMPORTED_MODULE_1__["Author"], {
    img: "",
    name: "John Doe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }))));
};

/***/ }),

/***/ "./src/app/article/article.styles.ts":
/*!*******************************************!*\
  !*** ./src/app/article/article.styles.ts ***!
  \*******************************************/
/*! exports provided: StyledArticle, StyledHeader, InformationContainer, StyledContent, StyledFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledArticle", function() { return StyledArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeader", function() { return StyledHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationContainer", function() { return InformationContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContent", function() { return StyledContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledFooter", function() { return StyledFooter; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledArticle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article.withConfig({
  displayName: "articlestyles__StyledArticle",
  componentId: "sc-1tz3zm3-0"
})([""]);
const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "articlestyles__StyledHeader",
  componentId: "sc-1tz3zm3-1"
})([""]);
const InformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "articlestyles__InformationContainer",
  componentId: "sc-1tz3zm3-2"
})([""]);
const StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "articlestyles__StyledContent",
  componentId: "sc-1tz3zm3-3"
})([""]);
const StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].footer.withConfig({
  displayName: "articlestyles__StyledFooter",
  componentId: "sc-1tz3zm3-4"
})([""]);

/***/ })

})
//# sourceMappingURL=[id].js.e28a2ab1d3103dbf88e9.hot-update.js.map